import * as path from 'path';

import * as pug from 'pug';

import { IRawGood } from 'data/goods';
import { Dictionary } from 'utils/Dictionary';

const dic: Dictionary = new Dictionary(null);

export const harioV60: IRawGood = {
  key: 'hario-v60',
  url: '/goods/hario-v60',
  meta: {
    title: {
      ja: 'ハリオ V60',
      en: 'HARIO V60',
    },
    description: {
      ja: 'コーヒー desc',
      en: 'COFFEE desc',
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
  category: dic.v('meta.good.category.BREWERS'),
  name: {
    ja: 'ハリオ V60',
    en: 'HARIO V60',
  },
  pictures: [
    {
      url: {
        ja: '/images/image_1@square.jpg',
        en: '/images/image_1@square.jpg',
      },
      caption: {
        ja: 'キャプション 1',
        en: 'caption 1',
      },
    },
    {
      url: {
        ja: '/images/image_2@square.jpg',
        en: '/images/image_2@square.jpg',
      },
      caption: {
        ja: 'キャプション 2',
        en: 'caption 2',
      },
    },
    {
      url: {
        ja: '/images/image_3@square.jpg',
        en: '/images/image_3@square.jpg',
      },
      caption: {
        ja: 'キャプション 3',
        en: 'caption 3',
      },
    },
    {
      url: {
        ja: '/images/image_4@square.jpg',
        en: '/images/image_4@square.jpg',
      },
      caption: {
        ja: 'キャプション 4',
        en: 'caption 4',
      },
    },
    {
      url: {
        ja: '/images/image_5@square.jpg',
        en: '/images/image_5@square.jpg',
      },
      caption: {
        ja: 'キャプション 5',
        en: 'caption 5',
      },
    },
  ],
  summary: {
    ja: 'V60なんです',
    en: 'This is V60',
  },
  specs: [
    {
      name: {
        ja: '製品サイズ',
        en: 'Size',
      },
      value: {
        ja: '幅137x奥行116x高102mm',
        en: '137 x 116 x 102mm',
      },
    },
  ],
  content: {
    ja: pug.compileFile(path.join(__dirname, 'harioV60-content.ja.pug'))(),
    en: pug.compileFile(path.join(__dirname, 'harioV60-content.en.pug'))(),
  },
  colors: [],
  links: [
    {
      site: 'Amazon',
      url: '',
    },
  ],
};
