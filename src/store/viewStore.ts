import { createStore } from "solid-js/store";

const [view, setView] = createStore({
  basics: true,
  work: true,
  education: true,
  skills: true,
  languages: true,
});

export { view, setView };
