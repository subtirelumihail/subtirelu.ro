export const siteUrl = "https://subtirelu.info";

export const resumePdfPath = "/Mihail-Subtirelu.pdf" as const;

export const resumePdfUrl = `${siteUrl}${resumePdfPath}` as const;

export const person = {
  name: "Mihail Gabriel Subtirelu",
  sortableName: "Subtirelu Mihail Gabriel",
  jobTitle: "Senior Full-Stack Engineer",
  tagline:
    "Full-stack engineer with 13+ years and a strong product mindset — scalable platforms and real-time applications from concept to production.",
  bio: `I like making apps that people actually enjoy using. I spend a lot of time on how things look and feel by focusing on small details, smooth interactions, and simple flows.

I work with React and Next.js on the frontend, but I also handle the backend and everything around it. I've built things in different areas like healthcare, transportation, retail and crypto.

Over the past few years, I’ve worked on different AI integrations in real-time systems, especially ones that use chat or voice.

I also think about how things will grow over time by trying to keep the code simple in the beginning, then scaling it as needed. I work fast, I hate blockers and I can turn an idea into a working prototype quickly, so you can try it out early instead of just talking about it.`,
  email: "mihail@subtirelu.info",
  phoneE164: "+40762277372",
  phoneDisplay: "+40 762 277 372",
  location: "Bucharest, Romania",
  website: "https://subtirelu.info",
  github: "https://github.com/subtirelumihail",
  linkedin: "https://ro.linkedin.com/in/subtirelu-mihail-4660836b",
  addItGame: "https://subtirelumihail.github.io/addit",
  helloCodepen: "https://codepen.io/dazicu/full/RaRwex",
} as const;

export const sameAs = [
  person.website,
  person.github,
  person.linkedin,
] as const;
