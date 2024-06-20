import { createStore } from "solid-js/store";
import type { Resume } from "~/types";

const [resume, setResume] = createStore<Resume>({
  basics: {
    legend: "Basics",
    view: true,
    data: {},
  },
  work: {
    legend: "Experience",
    view: true,
    data: []
  },
  education: {
    legend: "Education",
    view: true,
    data: []
  },
  skills: {
    legend: "Skills",
    view: true,
    data: []
  },
  languages: {
    legend: "Languages",
    view: true,
    data: []
  },
});

export { resume, setResume };
