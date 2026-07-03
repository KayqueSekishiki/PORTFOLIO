export type CareerColor = "cyan" | "purple" | "pink" | "lime" | "amber";

export type Career = {
  period: string;
  title: string;
  company: string;
  description: string;
  color: CareerColor;
  technologies: string[];
  active?: boolean;
};
