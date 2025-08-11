import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <h1>Home Page</h1>
      </div>
    </>
  );
}

export default MyApp;
