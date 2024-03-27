// här gör vi de funktioner som laddar json-filen och returnerar en array av korrekt typade objekt

import data from "../data/pizza_data.json";
import { SpicinessLevel, Topping } from "../types/pizzas";

const createSpicinessLevel = (s: string): SpicinessLevel => {
	if (s === "Low") return "Low" as SpicinessLevel;
	if (s === "Medium") return "Medium" as SpicinessLevel;
	if (s === "Hot") return "Hot" as SpicinessLevel;
	if (s === "Very Hot") return "Very Hot" as SpicinessLevel;

	return "Low" as SpicinessLevel;
};

const createTopping = ({
	name,
	cost,
	description,
	spiciness_level,
}: {
	name: string;
	cost: number;
	description: string;
	spiciness_level: string;
}): Topping => {
	let t: Topping = {
		name: name,
		cost: cost,
		description: description,
		spiciness_level: createSpicinessLevel(spiciness_level),
	};
	return t;
};

export const loadToppings = (): Topping[] => {
	const ts: Topping[] = data.topping.map((t) => {
		return createTopping(t);
	});
	return ts;
};
