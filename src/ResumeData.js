import homeImage from "./assets/profile.png";

// ========================== Header Data
const headerIds = [
  "home",
  "profile",
  "education",
  "skills",
  "experience",
  "certificates",
];
const HeaderLinks = [
  {
    linkText: "Home",
    linkID: "home",
    boxIcon: "bx-home",
  },
  {
    linkText: "Profile",
    linkID: "profile",
    boxIcon: "bx-user",
  },
  {
    linkText: "Education",
    linkID: "education",
    boxIcon: "bx-book",
  },
  {
    linkText: "Skills",
    linkID: "skills",
    boxIcon: "bx-receipt",
  },
  {
    linkText: "Experience",
    linkID: "experience",
    boxIcon: "bx-briefcase-alt",
  },
  {
    linkText: "Certificates",
    linkID: "certificates",
    boxIcon: "bx-award",
  },
  //   {
  //     linkText: "References",
  //     linkID: "references",
  //     boxIcon: "bx-link-external",
  //   },
];

//  ===================================== Left Section Content =============================== //
// ========================== Home Data
const homeData = {
  homeImage,
  firstName: "Mary",
  lastName: "Kasparian",
  profession: "Web Developer / UI Designer",
  information: [
    {
      text: "Chicago, Illinois ",
      icon: "bx-map",
    },
    {
      text: "kasparian.mary@gmail.com",
      icon: "bx-envelope",
    },
    {
      text: "marykasparian.com",
      icon: "bx-phone",
    },
  ],
};

// ========================== Social Links
const socialLinks = {
  title: "Social",
  links: [
    {
      link: "",
      text: "Mary Kasparian",
      icon: "bxl-instagram",
    },
  ],
};

// ========================== Profile Data
const profileData = {
  title: "Profile",
  descriptions: [
    `I am a developer with an engineering mind and creativity is my passion. I am
        self-disciplined, highly motivated, having multi-tasking ability with polished
        technical skills.`,
    `I have experience in the freelance market as well as working with a small
        startup as a front end developer`,
  ],
};

// ========================= Education Data
const educationData = {
  title: "Education",
  educations: [
    {
      title: "Software Engineering",
      studies: "Skillcrush & Launch School",
      year: "2021 - 2022",
      line: true,
    },
    {
      title: "Masters in Biology",
      studies: "Depaul University",
      year: "2016 - 2018",
      line: true,
    },
    {
      title: "Bachelors of Science",
      studies: "Butler University",
      year: "2007 - 2011",
      line: false,
    },
  ],
};

// ========================= Skills Data
const skillsData = {
  title: "Skills",
  skills: [
    [`Html`, `Css`, `Saas`, `Tailwind`],
    [`Elixir`, `NextJS`, `Phoenix`, `React`, `Javascript`],
  ],
};
const logoText = "MaryK.";
const menuIcon = "bx-grid-alt";

//  ===================================== Right Section Content =============================== //

// ========================= Experience Data
const experienceData = {
  title: "Experience",
  experiences: [
    {
      title: "Junior Software Engineer",
      time: "2022 - PRESENT",
      company: "Evozyne",
      describe:
        "Developed and implemented software solutions for a biotech application, using languages such as Javascript, Python, and Elixir. Collaborated with science teams to analyze user requirements, design software architectures, and create detailed technical specifications. Conducted thorough testing and debugging procedures to ensure high-quality software deliverables. Assisted senior engineers in code reviews and refactoring efforts, actively contributing to the continuous improvement of development processes and code quality.",
      line: true,
    },
    {
      title: "Research Specialist",
      time: "2019 - 2021",
      company: "Northwestern University",
      describe:
        "Ran chromatin extractions and ChIP experiments for both modERN and ENCODE projects. Performed and validated 1000 cell transfections over multiple cell lines and designed and generated 600 CRISPR constructs",
      line: false,
    },
    {
      title: "Research Technician",
      company: "2014 - 2019",
      describe:
        "Worked on ENCODE project - maintained stable transfections and validated WTC-11 (iPSCs) cells. Design, production, and validation of CRISPR/Cas9 plasmids",
      line: false,
    },
  ],
};

// ========================= INTERESTS Data
const interestsData = {
  title: "INTERESTS",
  interests: [
    {
      icon: "bxs-plane-alt",
      text: "Travel",
    },
    {
      icon: "bx-headphone",
      text: "Gaming",
    },
    {
      icon: "bx-book",
      text: "Reading",
    },
  ],
};

// ======================== Certificates Data
const certificatesData = {
  title: "Certificates",
  certificates: [
    {
      title: "React Tutorial App",
      describe:
        "Completed the full React Tutorial course, covering modern React concepts: JSX, Hooks, Context, React Router, APIs, Forms, Accessibility, and Immutability.",
    },
    {
      title: "Skillcrush Front End Web Developer Track",
      describe:
        "Completed the Skillcrush Front end developer track inclluding React JS.",
    },
    {
      title: "JavaScript Online",
      describe:
        "Completed the full learn Javascript course covering all modern JS as well as coding projects.",
    },
  ],
};

export {
  HeaderLinks,
  logoText,
  menuIcon,
  homeData,
  socialLinks,
  profileData,
  educationData,
  skillsData,
  experienceData,
  interestsData,
  headerIds,
  certificatesData,
};
