// ============================================================
// THIS IS THE ONLY FILE YOU EDIT.
// To add a project: copy one { ... } block inside "items",
// paste it right after, and change the text. Save. Done.
// Newest projects first looks best (put them at the top).
// ============================================================

export const profile = {
  name: "Mohammed Aslam",
  headline: "I turn messy data into decisions.",
  bio: "Data analysis and AI student focused on business analysis. I build projects that answer real business questions, then explain the answer clearly. EDIT: write 2 to 3 lines about yourself.",
  skills: "Python (pandas, matplotlib, streamlit, plotly) · SQL · Power BI · Excel · Statistics",
  github: "https://github.com/aslamgtb",
  linkedin: "https://www.linkedin.com/in/your-id", // EDIT
  email: "you@example.com", // EDIT
  resume: "/resume.pdf", // put your file in the "public" folder and name it resume.pdf
};

export const sections = [
  {
    id: "data",
    label: "Data Analysis",
    blurb: "Cleaning, analysis and dashboards built on real datasets.",
    items: [
      {
        title: "Sales dashboard (example, replace me)",
        summary: "The business question this project answers, in one sentence.",
        result: "What you found, ideally with a number. Example: cut stockouts by finding 3 slow suppliers.",
        tags: ["Python", "pandas", "Power BI"],
        links: [
          { label: "Code on GitHub", url: "https://github.com/aslamgtb" },
          // { label: "Live dashboard", url: "https://..." },
        ],
      },
      {
        title: "SQL analysis (example, replace me)",
        summary: "Another project. Copy this whole block to add a new card.",
        result: "Your result here.",
        tags: ["SQL", "Excel"],
        links: [{ label: "Code on GitHub", url: "https://github.com/aslamgtb" }],
      },
    ],
  },
  {
    id: "ai",
    label: "AI",
    blurb: "Machine learning and AI projects, from data to a working result.",
    items: [
      {
        title: "AI project (example, replace me)",
        summary: "What the model or tool does for a user.",
        result: "How well it works, for example accuracy or time saved.",
        tags: ["Python", "scikit-learn"],
        links: [{ label: "Code on GitHub", url: "https://github.com/aslamgtb" }],
      },
    ],
  },
  {
    id: "research",
    label: "Research",
    blurb: "Papers, reports and documents I have written.",
    items: [
      {
        title: "Research paper (example, replace me)",
        summary: "What the paper is about, in one sentence.",
        result: "Where it was published or shared, and the year.",
        tags: ["Paper", "PDF"],
        links: [{ label: "Read the PDF", url: "/papers/example.pdf" }], // put PDFs in public/papers/
      },
    ],
  },
];
