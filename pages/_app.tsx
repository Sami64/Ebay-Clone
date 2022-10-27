import { ThirdwebProvider } from "@thirdweb-dev/react"
import type { AppProps } from "next/app"
import "../styles/globals.css"
import network from "../utils/network"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThirdwebProvider desiredChainId={network}>
			<Component {...pageProps} />
		</ThirdwebProvider>
	)
}

export default MyApp
