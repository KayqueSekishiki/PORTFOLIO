import pt from "@/dictionaries/pt";
import en from "@/dictionaries/en";

export const dictionaries = {
  pt,
  en,
} as const;

export type Locale = keyof typeof dictionaries;

export const getDictionary = (locale: Locale) => {
  return dictionaries[locale];
};
