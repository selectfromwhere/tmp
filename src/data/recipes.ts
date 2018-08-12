// Beverages
import { coffeeHotRecipe } from 'data/recipes/coffeeHotRecipe';
import { coffeeIcedRecipe } from 'data/recipes/coffeeIcedRecipe';
import { coldBrewRecipe } from 'data/recipes/coldBrewRecipe';
// Foods
import { madeleineRecipe } from 'data/recipes/madeleineRecipe';

import { IRawPost } from 'data/posts';

interface IRawRecipeStep {
  summary: {
    ja: string;
    en: string;
  };
  description?: {
    ja: string;
    en: string;
  };
  image?: {
    src: {
      ja: string;
      en: string;
    };
    caption: {
      ja: string;
      en: string;
    };
  };
  note?: {
    ja: string;
    en: string;
  };
}

export interface IRawRecipe {
  category: {
    ja: string;
    en: string;
  };
  recipeType: {
    ja: string;
    en: string;
  } | null;
  name: {
    ja: string;
    en: string;
  };
  ingredients: {
    name: {
      ja: string;
      en: string;
    };
    quantity: {
      ja: string;
      en: string;
    };
    note?: {
      ja: string;
      en: string;
    };
  }[];
  steps: IRawRecipeStep[];
}

export const recipes: IRawPost<IRawRecipe>[] = [coffeeHotRecipe, coffeeIcedRecipe, coldBrewRecipe, madeleineRecipe];
