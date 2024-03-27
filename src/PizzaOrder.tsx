import { useContext } from "react";
import { Pizza, GlobalStateContext } from "./PizzaProvider";

const PizzaOrder = () => {
	const { state, dispatch } = useContext(GlobalStateContext);

	const handleRemovePizza = (id: string) => {
		dispatch({ type: "REMOVE_PIZZA", payload: id });
	};
	const handleEditPizza = (pizza: Pizza) => {
		dispatch({ type: "EDIT_PIZZA", payload: pizza });
	};

	return (
		<div className="PizzaOrder">
			<h2>Pizza Order</h2>
			<ul>
				{state.pizzaOrder.map((pizza) => (
					<li key={pizza.id}>
						<span>{pizza.name}</span>
						<button onClick={() => handleEditPizza(pizza)}>Edit</button>
						<button onClick={() => handleRemovePizza(pizza.id)}>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PizzaOrder;
