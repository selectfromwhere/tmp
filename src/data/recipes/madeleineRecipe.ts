import { IRawPost } from 'data/posts';
import { IRawRecipe } from 'data/recipes';
import { dictionary } from 'dictionary';
import { Dictionary } from 'utils/Dictionary';

const dic: Dictionary = new Dictionary(null, dictionary);

export const madeleineRecipe: IRawPost<IRawRecipe> = {
  key: 'madeleine',
  meta: {
    createdAt: '2018-05-26 12:00',
    publishedAt: '2018-05-27 16:00',
    url: '/foods/madeleine',
    title: {
      ja: 'マドレーヌ',
      en: 'MADELEINE',
    },
    description: {
      ja: 'フランス発祥の焼き菓子、マドレーヌのレシピ。',
      en: 'A recipe of madeleine that traditional small cake from the Lorraine region in northeastern France.',
    },
    thumbnailUrl: {
      square: {
        ja: '/images/image_1@square.jpg',
        en: '/images/image_1@square.jpg',
      },
      rectangle: {
        ja: '/images/image_1@rectangle.jpg',
        en: '/images/image_1@rectangle.jpg',
      },
    },
  },
  data: {
    category: dic.v('meta.recipe.category.FOODS'),
    recipeType: null,
    name: {
      ja: 'マドレーヌ',
      en: 'MADELEINE',
    },
    ingredients: [
      {
        name: {
          ja: 'バター',
          en: 'Butter',
        },
        quantity: {
          ja: '100g',
          en: '100g',
        },
        note: {
          ja: 'レンジ(500W 30~45秒ほど)で柔らかくする。',
          en: 'Get it soft using microwave.',
        },
      },
      {
        name: {
          ja: 'ホットケーキミックス',
          en: 'Hotcake mix',
        },
        quantity: {
          ja: '100g',
          en: '100g',
        },
      },
      {
        name: {
          ja: '砂糖',
          en: 'Sugers',
        },
        quantity: {
          ja: '80g',
          en: '80g',
        },
      },
      {
        name: {
          ja: '卵',
          en: 'Eggs',
        },
        quantity: {
          ja: '2個',
          en: '2',
        },
      },
    ],
    steps: [
      {
        summary: {
          ja: '生地を作る。',
          en: 'Make batters.',
        },
        description: {
          ja: '柔らかくしたバター、ホットケーキミックス、砂糖、卵を全部混ぜ合わせる。',
          en: 'Mixs butter, hotcake mix, sugars and eggs.',
        },
        note: {
          ja: 'バターは分離前に早めに混ぜる。',
          en: "It's better to mix butter before separation.",
        },
      },
      {
        summary: {
          ja: '焼き上げる。',
          en: 'Bakes batters.',
        },
        description: {
          ja: 'マドレーヌ型に生地を流し込み、180&#8451; 20分で焼き上げる。',
          en: 'Puts batters into a mold. And bakes with 180&#8451; for 20mins.',
        },
      },
      {
        summary: {
          ja: '出来上がり！',
          en: "It's ready to eat!",
        },
        image: {
          src: {
            ja: '/images/image_1@square.jpg',
            en: '/images/image_1@square.jpg',
          },
          caption: {
            ja: 'マドレーヌ 出来上がり！',
            en: 'Madeleine is ready to eat!',
          },
        },
      },
    ],
  },
};
