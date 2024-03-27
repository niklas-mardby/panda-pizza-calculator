import EditPizzaForm from "./EditPizzaForm";
import CreatePizza from "./CreatePizza";
import PizzaOrder from "./PizzaOrder";
import { PizzaProvider } from "./PizzaProvider";
import "./styles.scss";

function App() {
	return (
		<PizzaProvider>
			<main>
				<h1>🐼 Panda Pizza Calculator 🐼</h1>
				<section>
					<CreatePizza />
					<EditPizzaForm />
					<PizzaOrder />
				</section>
			</main>
		</PizzaProvider>
	);
}

export default App;
