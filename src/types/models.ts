export type CardData = {
    image: string
    title: string
    description: string
    alcohol: number
};

export type Cocktail = {
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

export type Response = {
    count: number
    categories: []
    cocktails: Cocktail[]
}
