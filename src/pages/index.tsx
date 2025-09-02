import styles from "../styles/home.module.css";
import { Header } from "@/components/header";


export default function Home() {
	return(
		<main className={styles.container}>
			<Header/>
		</main>
	);
}
