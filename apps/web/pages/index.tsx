import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import WithoutSuspendEther from '../components/WithoutSuspendEther';

const NoSSRWithSuspendEther = dynamic(
  () => import('../components/WithSuspendEther'),
  {
    ssr: false,
  }
)
export default function Web() {
  return (
    <>
      <h1>With Option Suspend</h1>
      <div>
        {process.browser && (
          <Suspense fallback={`loading....`}>
            <NoSSRWithSuspendEther />
          </Suspense>
        )}
      </div>
      <hr />
      <h1>Without Option Suspend</h1>
      <WithoutSuspendEther />
    </>
  )
}
