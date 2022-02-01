import { DAppProvider } from "core";

function MyApp({ Component, pageProps }) {
  return (
    <DAppProvider>
      <Component {...pageProps} />
    </DAppProvider>
  );
}

export default MyApp;
