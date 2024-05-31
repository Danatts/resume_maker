import { createStore } from "solid-js/store";
import resumeSchema from "~/resources/resumeSchema";
import type { Resume } from "~/types";

const [resume, setResume] = createStore<Resume>(resumeSchema);

export { resume, setResume };
