import React, { useEffect } from 'react'
import { RecoilRoot, useSetRecoilState } from 'recoil'
import { configState, useConfig } from '../hooks/useConfig'
import { Config } from '../types'
import { ethersState, useEther } from '../hooks'
import BlockNumberProvider from './BlockNumberProvider'

interface DAppProviderProps {
  config?: Config
}

const WithSubscribeEvent: React.FC = () => {
  const setEtherState = useSetRecoilState(ethersState)
  const config = useConfig()
  const { reInitialize, library, ...rest } = useEther()
  const handleAccountChanged = (accounts: string[]) => {
    if (!accounts.length) {
      return
    }
    setEtherState((oldState) => ({
      ...oldState,
      account: accounts[0],
    }))
  }
  const handleChainChange = () => {
    if (typeof reInitialize === 'function') {
      reInitialize(rest, config).then((newEtherState) => {
        setEtherState((oldState) => ({
          ...oldState,
          ...newEtherState,
        }))
      })
    }
  }
  const handleConnect = () => {
    console.log('Connected')
  }
  const handleDisconnect = () => {
    console.log('Disconnected')
  }
  const handleReceivedMessage = () => {}
  useEffect(() => {
    if (!library) {
      return
    }
    if (!library?.on) {
      return
    }
    library.on('chainChanged', handleChainChange)
    library.on('accountsChanged', handleAccountChanged)
    library.on('connect', handleConnect)
    library.on('disconnect', handleDisconnect)
    library.on('message', handleReceivedMessage)
    return () => {
      library.off('chainChanged', handleChainChange)
      library.off('accountsChanged', handleAccountChanged)
      library.off('connect', handleConnect)
      library.off('disconnect', handleDisconnect)
      library.off('message', handleReceivedMessage)
    }
  }, [library])
  return <></>
}

export const DAppProvider: React.FC<DAppProviderProps> = ({
  children,
  config,
}) => {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        if (config) {
          set(configState, config)
        }
      }}
    >
      <WithSubscribeEvent />
      <BlockNumberProvider>{children}</BlockNumberProvider>
    </RecoilRoot>
  )
}
