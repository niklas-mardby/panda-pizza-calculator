import { PizzaProvider } from "./PizzaProvider";
import "./styles.scss";

function App() {
	return (
		<PizzaProvider>
			<h1>🐼 Panda Pizza Calculator 🐼</h1>
		</PizzaProvider>
	);
}

export default App;

/*
import { GlobalStateProvider } from "./GlobalState";
import AddLollipopForm from "./AddLollipopForm";
import LollipopsList from "./LollipopsList";
import "./styles.scss";

function App() {
	return (
		<>
			<GlobalStateProvider>
				<h1>✨🧚 lollipop-fairy 🍭💕</h1>
				<AddLollipopForm />
				<LollipopsList />
			</GlobalStateProvider>
		</>
	);
}

export default App;
*/
