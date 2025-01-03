import type { AppProps } from "next/app";
import "focus-visible"; // Import the polyfill
import "../styles/globals.css"; // Import global styles (if any)

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
