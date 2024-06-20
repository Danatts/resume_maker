export type Resume = {
  basics?: {
    legend?: string;
    view?: boolean;
    data?: Basics;
  };
  work?: {
    legend?: string;
    view?: boolean;
    data?: Work[];
  };
  education?: {
    legend?: string;
    view?: boolean;
    data?: Education[];
  };
  skills?: {
    legend?: string;
    view?: boolean;
    data?: Skill[];
  };
  languages?: {
    legend?: string;
    view?: boolean;
    data?: Language[];
  };
};

export type Basics = {
  name?: string;
  label?: string;
  image?: string;
  email?: string;
  phone?: string;
  url?: string;
  city?: string;
  country?: string;
  summary?: string;
};

export type Work = {
  position?: string;
  institution?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
};

export type Education = {
  area?: string;
  institution?: string;
  startDate?: string;
  endDate?: string;
};

export type Skill = {
  name?: string;
  level?: string;
};

export type Language = {
  language?: string;
  fluency?: string;
};

export type FormProps = {
  key: number;
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type SocialIcon = Record<string, string | any>;
