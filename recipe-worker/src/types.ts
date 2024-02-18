export interface SuccessfulRecipe {
	success: true;
	title: string;
	description: string;
	ingredients: string[];
	instructions: string[];
}

export interface UnsuccessfulRecipe {
	success: false;
	message: string;
}

export type Recipe = SuccessfulRecipe | UnsuccessfulRecipe;
