import type { Dictionary } from "../types";
import { common, nav, footer, notFound } from "./common";
import { home } from "./home";
import { servicesIndex, services } from "./services";
import { secondments } from "./secondments";
import { about } from "./about";
import { insightsIndex, posts } from "./insights";
import { contact, cities } from "./contact";
import { legal } from "./legal";

export const ar: Dictionary = {
  locale: "ar",
  dir: "rtl",
  common,
  nav,
  footer,
  home,
  servicesIndex,
  services,
  secondments,
  about,
  insightsIndex,
  posts,
  contact,
  cities,
  legal,
  notFound,
};
