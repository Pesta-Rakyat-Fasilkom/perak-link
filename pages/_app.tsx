import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { StateMachineProvider } from "little-state-machine"
import { SnackbarProvider } from "notistack"

import { Footer } from "@elements"

function PerakApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider
      maxSnack={4}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      classes={{
        variantSuccess: "snackbar-sans",
        variantError: "snackbar-sans",
        variantInfo: "snackbar-sans",
        variantWarning: "snackbar-sans",
      }}
      preventDuplicate={true}
    >
      <StateMachineProvider>
        <Head>
          <title>PERAK 2022</title>
        </Head>
        <Component {...pageProps} />
        <Footer />
      </StateMachineProvider>
    </SnackbarProvider>
  )
}

export default PerakApp
