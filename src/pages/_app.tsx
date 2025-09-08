import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { ToTop } from "@/components/ToTop";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return(
		<>
			<Header/>
			<Component {...pageProps} />
			<Contact/>
			<ToTop/>
		</>
	);
}
