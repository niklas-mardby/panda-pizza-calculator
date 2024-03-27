export type Pizza = {
	id: string;
	name: string;
	size: "Small" | "Medium" | "Large";
	cost: number;
	spiciness_level: SpicinessLevel;
	dough: Dough;
	sauce: Sauce;
	cheese: Cheese[];
	topping: Topping[];
};

export type SpicinessLevel = "Low" | "Medium" | "Hot" | "Very Hot";

export type Topping = {
	name: string;
	cost: number;
	description: string;
	spiciness_level: SpicinessLevel;
};
export type Cheese = {
	name: string;
	cost: number;
	description: string;
};

export type Dough = { name: string; cost: number; description: string };

export type Sauce = {
	name: string;
	cost: number;
	description: string;
	spiciness_level: SpicinessLevel;
};
