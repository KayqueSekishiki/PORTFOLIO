import { Project } from "@/types/project";
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

const imageURLTest = emBreve;

export const projects: Project[] = [
  {
    id: 1,
    title: "Em breve",
    description: "Ainda não temos nada por aqui.",
    category: "web",
    image: imageURLTest,
    technologies: [TbBrandNextjs, SiReact, TbBrandTypescript, FaSass],
    demo: "#",
  },

  {
    id: 2,
    title: "Em breve",
    description: "Ainda não temos nada por aqui.",
    category: "mobile",
    image: imageURLTest,
    technologies: [TbBrandReactNative, DiSqllite],
    demo: "#",
  },

  {
    id: 3,
    title: "Em breve",
    description: "Ainda não temos nada por aqui.",
    category: "games",
    image: imageURLTest,
    technologies: [TbBrandUnity, SiGit],
    github: "#",
    demo: "#",
  },

  {
    id: 4,
    title: "Em breve",
    description: "Ainda não temos nada por aqui.",
    category: "others",
    image: imageURLTest,
    technologies: [SiPostgresql, SiGit],
    github: "#",
    demo: "#",
  },
  // {
  //   id: 1,
  //   title: "Isadora | Téc. de Enfermagem",
  //   description:
  //     "Página única desenvolvida para fortalecer a presença digital da profissional, apresentar seus serviços e oferecer um canal de contato direto e facilitado.",
  //   category: "web",
  //   image: imageURLTest,
  //   technologies: [TbBrandNextjs, SiReact, RiJavascriptLine, FaSass],
  //   demo: "#",
  // },

  // {
  //   id: 2,
  //   title: "Meu Dengo",
  //   description:
  //     "Aplicativo de relacionamento desenvolvido para conectar pessoas que desejam encontrar o amor da vida, fazer novas amizades, conversar ou simplesmente compartilhar momentos com alguém que tenha os mesmos objetivos.",
  //   category: "mobile",
  //   image: imageURLTest,
  //   technologies: [TbBrandReactNative, DiSqllite],
  //   demo: "#",
  // },

  // {
  //   id: 3,
  //   title: "Tale of Bird's Song",
  //   description:
  //     "Jogo 2D casual que combina elementos de plataforma e quebra-cabeças. O jogador acompanha Bird em uma jornada onde precisa superar obstáculos, derrotar inimigos, desviar de armadilhas e resolver desafios para abrir o portão de cada fase.",
  //   category: "games",
  //   image: imageURLTest,
  //   technologies: [TbBrandUnity, SiGit],
  //   github: "#",
  //   demo: "#",
  // },

  // {
  //   id: 4,
  //   title: "Zycar",
  //   description:
  //     "Plataforma de aluguel de carros pensada para facilitar a escolha e reserva de veículos de forma rápida e intuitiva. O usuário pode explorar opções, ver detalhes dos carros e simular reservas com poucos cliques, de maneira simples e prática.",
  //   category: "web",
  //   image: imageURLTest,
  //   technologies: [TbBrandNextjs, SiNestjs, SiPostgresql, SiPrisma],

  //   demo: "#",
  // },

  // {
  //   id: 5,
  //   title: "Bora Comer",
  //   description:
  //     "Plataforma de delivery web com navegação entre restaurantes, visualização de cardápios, carrinho de compras e simulação de pagamento. Integração com backend via API e foco em usabilidade e experiência do usuário.",
  //   category: "web",
  //   image: imageURLTest,

  //   technologies: [
  //     TbBrandVite,
  //     SiReact,
  //     TbBrandTypescript,
  //     TbBrandRedux,
  //     SiExpress,
  //   ],

  //   github: "#",
  //   demo: "#",
  // },

  // {
  //   id: 6,
  //   title: "Last Island",
  //   description:
  //     "Jogo 2D estilo metroidvania ambientado em um mundo pós-apocalíptico, com foco em exploração, combate e chefões. O projeto combina level design interconectado, desafios de plataforma e atmosfera imersiva.",
  //   category: "games",
  //   image: imageURLTest,
  //   technologies: [SiGodotengine, SiGit],
  //   demo: "#",
  // },

  // {
  //   id: 7,
  //   title: "Troccoli's Confeitaria",
  //   description:
  //     "Desenvolvimento de um site para divulgação e recebimento de encomendas de salgados e doces, permitindo que clientes visualizem produtos, conheçam a produção e façam pedidos de forma prática e direta.",
  //   category: "web",
  //   image: imageURLTest,
  //   technologies: [TbBrandNextjs, SiReact, RiJavascriptLine, FaSass],
  //   demo: "#",
  // },

  // {
  //   id: 8,
  //   title: "MyTermoo",
  //   description:
  //     "Jogo de palavras inspirado no Woodle, desenvolvido em React.js para proporcionar uma experiência interativa de adivinhação, com interface responsiva e mecânicas semelhantes ao jogo original.",
  //   category: "games",
  //   image: imageURLTest,
  //   technologies: [SiReact, RiJavascriptLine, FaSass],
  //   github: "#",
  //   demo: "#",
  // },

  // {
  //   id: 9,
  //   title: "Amendoim Barbershop",
  //   description:
  //     "Aplicativo desenvolvido para facilitar o agendamento de horários, consulta de serviços e contato com a barbearia, proporcionando uma experiência prática, rápida e intuitiva para os clientes.",
  //   category: "mobile",
  //   image: imageURLTest,
  //   technologies: [TbBrandReactNative, SiPostgresql],
  //   demo: "#",
  // },

  // {
  //   id: 10,
  //   title: "Em breve",
  //   description: "Ainda não temos nada por aqui.",
  //   category: "others",
  //   image: imageURLTest,
  //   technologies: [SiGit, FaNodeJs],
  //   github: "#",
  //   demo: "#",
  // },
];
