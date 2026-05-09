/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kunal Mohinderu",
  title: "Hi, I'm Kunal",
  subTitle: emoji(
    "Ph.D. Civil Engineering researcher and structural engineering graduate student focused on finite element modeling, seismic testing, and code-based design."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/kunal-mohinderu-22321b14b/",
  gmail: "mohinderukunal30@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Skills",
  subTitle:
    "Structural analysis, design, modeling, and testing across reinforced concrete, steel, wood, and composite systems.",
  skills: [
    emoji(
      "⚡ Structural analysis and design for reinforced concrete, steel, wood, and prestressed concrete systems"
    ),
    emoji("⚡ Nonlinear finite element modeling, seismic evaluation, and experimental testing"),
    emoji(
      "⚡ Teaching, technical reporting, and code-based checks using ASCE, ACI, AISC, NDS, and Indian codes"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AutoCAD",
      fontAwesomeClassname: "fas fa-drafting-compass"
    },
    {
      skillName: "Revit",
      fontAwesomeClassname: "fas fa-building"
    },
    {
      skillName: "STAAD.Pro",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "ETABS",
      fontAwesomeClassname: "fas fa-city"
    },
    {
      skillName: "RISA 3D",
      fontAwesomeClassname: "fas fa-ruler-combined"
    },
    {
      skillName: "SAP 2000",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "ABAQUS",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "MATHCAD",
      fontAwesomeClassname: "fas fa-square-root-alt"
    },
    {
      skillName: "Microsoft Office",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "ASCE / ACI / AISC / NDS",
      fontAwesomeClassname: "fas fa-book"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of Alabama",
      logo: require("./assets/images/programmer.svg"),
      subHeader: "Ph.D. Civil Engineering, GPA: 3.7/4.0",
      duration: "August 2022 - Present",
      desc:
        "Coursework: Reinforced Concrete Design II, Matrix Analysis of Structures, Wood Structure Design, Steel Structure Design II, Structural Dynamics, Prestressed Concrete.",
      descBullets: [
        "Graduate research focused on structural response, failure mechanisms, and seismic performance.",
        "Preparing for the FE Civil Exam with E.I.T. expected in April 2026."
      ]
    },
    {
      schoolName: "Thapar Institute of Engineering and Technology",
      logo: require("./assets/images/programmer.svg"),
      subHeader: "M.E. Structural Engineering, GPA: 9.2/10.0",
      duration: "August 2020 - August 2022",
      desc:
        "Coursework: Advanced Structural Analysis, Advanced Structural Design, Prestressed Concrete, Earthquake Resistant Design of Structures, Bridge Engineering, Structural Dynamics.",
      descBullets: [
        "Completed research in the Structures Lab alongside experimental and analytical work.",
        "Built a foundation in structural design, seismic analysis, and bridge engineering."
      ]
    },
    {
      schoolName: "Thapar Institute of Engineering and Technology",
      logo: require("./assets/images/programmer.svg"),
      subHeader: "B.E. Civil Engineering, GPA: 7.7/10.0",
      duration: "August 2016 - August 2020",
      desc:
        "Coursework: Concrete Design I & II, Structural Analysis, Foundation Design, Steel Structure Design, Bridge Engineering, Seismic Analysis, Mechanics.",
      descBullets: [
        "Completed undergraduate projects in building design and traffic optimization.",
        "Graduated with a strong emphasis on structural and transportation engineering."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Structural Analysis",
      progressPercentage: "95%"
    },
    {
      Stack: "Finite Element Modeling",
      progressPercentage: "90%"
    },
    {
      Stack: "Teaching & Technical Reporting",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Research Assistant",
      company: "Large Scale Structures Lab, The University of Alabama",
      companylogo: require("./assets/images/developerActivity.svg"),
      date: "August 2022 - Present",
      desc: "Developed nonlinear ABAQUS finite element models for steel composite walls and UHPC beams to study structural response, failure mechanisms, and shear resistance.",
      descBullets: [
        "Conducted large-scale seismic testing on UHPC-stiffened CLT shear wall connections and managed data collection.",
        "Performed structural analyses and mechanical testing on Cross-Laminated Bamboo specimens and prepared technical reports for the funding agency."
      ]
    },
    {
      role: "Graduate Teaching Assistant",
      company: "The University of Alabama",
      companylogo: require("./assets/images/developerActivity.svg"),
      date: "August 2022 - Present",
      desc: "Led recitations and graded assignments for Structural Analysis, reinforcing statics and mechanics of materials for more than 50 students.",
      descBullets: [
        "Facilitated graduate instruction in Matrix Analysis of Structures through problem sessions and coursework evaluation."
      ]
    },
    {
      role: "Graduate Research Assistant",
      company: "Structures Lab, Thapar Institute of Engineering and Technology",
      companylogo: require("./assets/images/developerActivity.svg"),
      date: "August 2020 - August 2022",
      desc: "Performed structural design calculations for civil structures and multi-story buildings in STAAD.Pro and validated gravity and seismic load paths through manual checks.",
      descBullets: [
        "Investigated the seismic performance of strong-beam weak-column joints retrofitted with HP-HFRC through experimental testing."
      ]
    },
    {
      role: "Graduate Teaching Assistant",
      company: "Thapar Institute of Engineering and Technology",
      companylogo: require("./assets/images/developerActivity.svg"),
      date: "August 2021 - August 2022",
      desc: "Instructed students in AutoCAD 2D drafting and Revit 3D modeling and supported shop drawing review in accordance with design plans.",
      descBullets: [
        "Taught STAAD.Pro structural analysis techniques for evaluating building performance under different load cases."
      ]
    },
    {
      role: "Undergraduate Projects",
      company: "Thapar Institute of Engineering and Technology",
      companylogo: require("./assets/images/developerActivity.svg"),
      date: "August 2016 - August 2020",
      desc: "Designed a clubhouse structure using Revit and STAAD.Pro, performed quantity take-offs, and ensured compliance with building codes.",
      descBullets: [
        "Engineered signal timing optimization for the Patiala road network to reduce congestion and improve traffic flow efficiency."
      ]
    },
    {
      role: "Bridge & Civil Engineering Intern",
      company: "Ceigall India Limited",
      companylogo: require("./assets/images/developerActivity.svg"),
      date: "June 2019 - December 2019",
      desc: "Supervised reinforced earth wall construction and foundation installations for the 4.25 km Kartarpur Corridor highway project in collaboration with NHAI.",
      descBullets: [
        "Performed material take-offs and concrete quality control testing, including compressive strength and slump checks, for bridge and culvert construction."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [],
  display: false
};

// Publication Section

const achievementSection = {
  title: emoji("Publications 📚"),
  subtitle: "Selected journal publications in structural engineering research.",

  achievementsCards: [
    {
      title:
        "Effect of retrofitting strong beam and weak column exterior joint using HPHFRC: Experimental investigation",
      subtitle: "Engineering Structures, 2025",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Publication cover",
      footerLink: [
        {
          name: "DOI",
          url: "https://doi.org/10.1016/j.engstruct.2025.120057"
        }
      ]
    },
    {
      title:
        "An experimental investigation of confinement effectiveness of GFRP wrapping on beam-column joints retrofitted with high-performance hybrid fiber reinforced concrete",
      subtitle: "iStructures, 2025",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Publication cover",
      footerLink: [
        {
          name: "DOI",
          url: "https://doi.org/10.1016/j.istruc.2025.109734"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Structural engineering researcher, teaching assistant, and collaborator open to research and professional opportunities.",
  number: "(205) 886-4154",
  email_address: "mohinderukunal30@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
