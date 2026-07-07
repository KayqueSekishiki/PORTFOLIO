import { Locale } from "@/lib/getDictionary";
import { careersPT } from "./career.pt";
import { careersEN } from "./career.en";

export const getCareers = (locale: Locale) => {
  return locale === "en" ? careersEN : careersPT;
};
