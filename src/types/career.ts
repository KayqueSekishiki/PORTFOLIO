export type CareerColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "quinary";

export type Career = {
  period: string;
  title: string;
  company: string;
  description: string;
  color: CareerColor;
  technologies: string[];
  active?: boolean;
};
