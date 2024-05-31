import { createStore } from "solid-js/store";

const [view, setView] = createStore({
  basics: true,
  work: false,
  education: false,
  skills: false,
  languages: false,
});

export { view, setView };
