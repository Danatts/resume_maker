import { createStore } from "solid-js/store";
import type { Resume } from "~/types";

const [resume, setResume] = createStore<Resume>({
  basics: {},
  profiles: [],
  work: [],
  volunteer: [],
  education: [],
  awards: [],
  certificates: [],
  publications: [],
  skills: [],
  languages: [],
  interests: [],
  references: [],
  projects: [],
});

export { resume, setResume };
