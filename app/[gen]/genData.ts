import { gens } from "../appData";
import { genName } from "../appTypes";

export type genParam = { gen: genName; soon?: true };
export const gen1: genParam = { gen: "gen1" };
export const gen2: genParam = { gen: "gen2" };
export const gensParams = [gen1, gen2];

export const genData: { gen1: genProps; gen2: genProps } = {
	gen1: { ...gens[0] },
	gen2: { ...gens[1] },
};

export interface genProps extends genParam {
	ar: string;
	description: string;
}

export type deviceName = "windows" | "linux" | "router" | "android" | "ios";
