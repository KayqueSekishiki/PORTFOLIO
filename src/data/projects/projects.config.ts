import { ProjectCategory } from "@/types/project";
import type { IconType } from "react-icons";
import type { StaticImageData } from "next/image";

import { DiSqllite } from "react-icons/di";
import { FaSass, FaNodeJs } from "react-icons/fa6";
import { RiJavascriptLine } from "react-icons/ri";

import {
  SiExpress,
  SiGit,
  SiGodotengine,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
} from "react-icons/si";

import {
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandTypescript,
  TbBrandUnity,
  TbBrandVite,
} from "react-icons/tb";

import emBreve from "@/assets/em-breve.jpg";
import isadoramatos from "@/assets/projects/isadoramatos.png";

export const projectConfig = [
  {
    id: 1,
    category: "web",
    image: isadoramatos,
    technologies: [TbBrandNextjs, SiReact, TbBrandTypescript, FaSass],
    demo: "https://isadoramatos.vercel.app/",
  },

  {
    id: 2,
    category: "mobile",
    image: emBreve,
    technologies: [TbBrandReactNative, DiSqllite],
    demo: "#https://isadoramatos.vercel.app/",
  },

  {
    id: 3,
    category: "games",
    image: emBreve,
    technologies: [TbBrandUnity, SiGit],
    github: "#",
    demo: "#",
  },

  {
    id: 4,
    category: "others",
    image: emBreve,
    technologies: [SiPostgresql, SiGit],
    github: "#",
    demo: "#",
  },

  //   {
  //     id: 5,
  //     category: "web",
  //     image: emBreve,
  //     technologies: [TbBrandNextjs, SiReact, RiJavascriptLine, FaSass],
  //     demo: "#",
  //   },

  //   {
  //     id: 6,
  //     category: "mobile",
  //     image: emBreve,
  //     technologies: [TbBrandReactNative, DiSqllite],
  //     demo: "#",
  //   },

  //   {
  //     id: 7,
  //     category: "games",
  //     image: emBreve,
  //     technologies: [TbBrandUnity, SiGit],
  //     github: "#",
  //     demo: "#",
  //   },

  //   {
  //     id: 8,
  //     category: "web",
  //     image: emBreve,
  //     technologies: [TbBrandNextjs, SiNestjs, SiPostgresql, SiPrisma],
  //     demo: "#",
  //   },

  //   {
  //     id: 9,
  //     category: "web",
  //     image: emBreve,
  //     technologies: [
  //       TbBrandVite,
  //       SiReact,
  //       TbBrandTypescript,
  //       TbBrandRedux,
  //       SiExpress,
  //     ],
  //     github: "#",
  //     demo: "#",
  //   },

  //   {
  //     id: 10,
  //     category: "games",
  //     image: emBreve,
  //     technologies: [SiGodotengine, SiGit],
  //     demo: "#",
  //   },

  //   {
  //     id: 11,
  //     category: "web",
  //     image: emBreve,
  //     technologies: [TbBrandNextjs, SiReact, RiJavascriptLine, FaSass],
  //     demo: "#",
  //   },

  //   {
  //     id: 12,
  //     category: "games",
  //     image: emBreve,
  //     technologies: [SiReact, RiJavascriptLine, FaSass],
  //     github: "#",
  //     demo: "#",
  //   },

  //   {
  //     id: 13,
  //     category: "mobile",
  //     image: emBreve,
  //     technologies: [TbBrandReactNative, SiPostgresql],
  //     demo: "#",
  //   },

  //   {
  //     id: 14,
  //     category: "others",
  //     image: emBreve,
  //     technologies: [SiGit, FaNodeJs],
  //     github: "#",
  //     demo: "#",
  //   },
] satisfies {
  id: number;
  category: ProjectCategory;
  image: StaticImageData;
  technologies: IconType[];
  demo: string;
  github?: string;
}[];
