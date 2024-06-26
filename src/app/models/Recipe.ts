import { Ingredient } from "./Ingredient";

export interface Recipe {
    id: number;
    title: string;
    description: string;
    category: string;
    difficulty: string;
    timeToMake: string;    
    ingredients: Ingredient[];
  }

  