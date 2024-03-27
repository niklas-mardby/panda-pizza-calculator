import React, { useReducer, createContext } from "react";
// import uuid from "react-uuid";
import { Pizza } from "./types/pizzas";

type GlobalState = {
	currentPizza: Pizza | null;
	pizzaOrder: Pizza[];
};

const initialState: GlobalState = {
	currentPizza: null,
	pizzaOrder: [],
};

type Action =
	| { type: "ADD_CURRENT"; payload: Pizza } // add pizza to current from menu
	| { type: "ADD_PIZZA"; payload: Pizza } // add pizza from current to order
	| { type: "EDIT_PIZZA"; payload: Pizza } // edit a pizza from order to current
	| { type: "REMOVE_PIZZA"; payload: string };

const reducer = (state: GlobalState, action: Action): GlobalState => {
	switch (action.type) {
		case "ADD_CURRENT":
			return state;
		case "ADD_PIZZA":
			return state;
		case "EDIT_PIZZA":
			return state;
		case "REMOVE_PIZZA":
			return state;
		default:
			return state;
	}
};

export const GlobalStateContext = createContext<{
	state: GlobalState;
	dispatch: React.Dispatch<Action>;
}>({
	state: initialState,
	dispatch: () => null,
});

type GlobalStateProviderProp = {
	children: React.ReactNode;
};
export const PizzaProvider = ({ children }: GlobalStateProviderProp) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GlobalStateContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalStateContext.Provider>
	);
};

/*
const reducer = (state: GlobalState, action: Action): GlobalState => {
	switch (action.type) {
		case "ADD_LOLLIPOP":
			return {
				...state,
				lollipops: [
					...state.lollipops,
					{
						id: uuid(),
						name: action.payload,
						flavor: "",
						color: "",
						sparkleLevel: 0,
						hasWings: false,
						magicPower: null,
					} as FairyLollipop,
				],
			};
		case "REMOVE_LOLLIPOP":
			return {
				...state,
				lollipops: state.lollipops.filter((l) => l.id !== action.payload),
			};
		default:
			return state;
	}
};
*/
