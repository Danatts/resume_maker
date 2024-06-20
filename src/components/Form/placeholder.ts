import type { Resume } from "~/types"

const placeholder: Resume = {
  basics: {
    legend: "Basics",
    data: {
      name: "John Doe",
      label: "Programmer",
      image: "",
      email: "john@gmail.com",
      phone: "(912) 555-4321",
      url: "https://johndoe.com",
      summary: "A summary of John Doe…",
      city: "San Francisco",
      country: "United States",
    }
  },
  work: {
    legend: "Experience",
    data: [
      {
        institution: "Company",
        position: "President",
        startDate: "2013-01-01",
        endDate: "2014-01-01",
        summary: "Description…",
      },
    ],
  },
  education: {
    legend: "Education",
    data: [
      {
        institution: "University",
        area: "Software Development",
        startDate: "2011-01-01",
        endDate: "2013-01-01",
      },
    ],
  },
  skills: {
    legend: "Skills",
    data: [
      {
        name: "Web Development",
        level: "Master",
      },
    ],
  },
  languages: {
    legend: "Languages",
    data: [
      {
        language: "English",
        fluency: "Native speaker",
      },
    ],
  },
};

export default placeholder;
