export type CardData = {
    image: string
    title: string
    description: string
    alcohol: number
};

export type Cocktal = {
    image: string;
    title: string;
    description: string[];
    alcohol: number;
    id: string;
    ingredients: Ingredient[];
    recipe: string[];
    info: string;
}


export type Ingredient = {
    ingredient: string;
    amount: number;
    unit: string;
}