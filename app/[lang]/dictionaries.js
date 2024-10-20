import "server-only";
const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    bn: () => import('./dictionaries/bn.json').then((module) => module.default),
    gr: () => import('./dictionaries/gr.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]();