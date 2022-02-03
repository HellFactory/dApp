import { Config, DAppProvider, Harmony } from "core";

const config: Config = {
  networks: [Harmony],
};

function MyApp({ Component, pageProps }) {
  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  );
}

export default MyApp;
