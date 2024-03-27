import { Pizza } from "./types/pizzas";

const PizzaCard = (pizza: Pizza) => {
	return (
		<div className="PizzaCard">
			<h3>Name: {pizza.name}</h3>
		</div>
	);
};

export default PizzaCard;
