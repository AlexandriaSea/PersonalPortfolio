import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Wenjie",
  lastName: "Zhou",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-stack Developer",
  avatar: "/images/avatar.jpg",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Chinese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Newsletter.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AlexandriaSea",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/wenjiezhou/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:wenjiezhou37@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full-stack Developer</>,
  subline: (
    <>
      I'm Wenjie, a recent graduate of the Software Engineering Technology program at <InlineCode>Centennial College</InlineCode>.
      <br />
      I have experience in full-stack web application development.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Wenjie is a highly motivated Full-Stack Developer
        based in Toronto with a passion for building innovative web applications.
        He possesses a strong foundation in both front-end and back-end development,
        with expertise in languages including Python, JavaScript, and Java,
        and frameworks such as React, Spring Boot, and Flask.
        His experience encompasses collaborating on a MEAN stack application,
        leading React front-end development, and developing robust Spring Boot backend services.
        He is also proficient in cloud platforms such as AWS and Azure
        and proficient in data analysis and machine learning tools such as Pandas, scikit-learn, and TensorFlow.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "College Cornerstone Inc.",
        timeframe: "May 2024 - Sep. 2024",
        role: "Full-Stack Developer Intern",
        achievements: [
          <>
            Collaborated with a three-member team to enhance a MEAN stack web application for student job opportunities,
            optimizing both front-end and back-end components.
          </>,
          <>
            Conducted thorough system testing, identifying and resolving 10+ bugs and 3 critical logic flaws,
            enhancing reliability and performance.
          </>,
          <>
            Completed 12 issue resolution tasks, including server optimization, UI updates, and algorithm fixes.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "College Cornerstone Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Ai Financial Power Group",
        timeframe: "May 2024 - Aug. 2024",
        role: "Full-Stack Developer Co-op",
        achievements: [
          <>
            Led React front-end development, creating 20 reusable components, 13 application pages,
            global state management using Redux and React Context, and a user input validation system.
          </>,
          <>
            Developed robust Spring Boot backend services to handle CRUD operations for user financial instruments
            and integrated Azure Blob Storage for file upload and download functionality.
          </>,
          <>
            Authored project documentation and contributed 260 commits with 42,000+ lines of code.
          </>,
        ],
        images: [],
      },
      {
        company: "The Hospital for Sick Children",
        timeframe: "Sep. 2023 - Dec. 2023",
        role: "IT Support Co-op",
        achievements: [
          <>
            Installed 100+ workstations, including monitors, docking stations, cameras, and peripherals.
          </>,
          <>
            Handled equipment transportation, resolved technical issues, and managed incident responses.
          </>,
          <>
            Coordinated with project managers, IT staff, contractors, and the audio-visual team to maintain clear communication,
            align on progress, and meet project deadlines.
          </>,
        ],
        images: [],
      },
      {
        company: "Haiyan Qibiao Warp Knitting Co., Ltd",
        timeframe: "Mar. 2020 - Dec. 2022",
        role: "Financial Analyst",
        achievements: [
          <>
            Developed Excel-based inventory and sales ledgers, improving data accuracy and reducing errors.
          </>,
          <>
            Analyzed financial statements and production reports to identify cost-saving initiatives,
            enhancing factory operational efficiency.
          </>,
          <>
            Managed corporate sales for the Draw Texturing Yarn product line, building long-term relationships with key clients.
          </>,
        ],
        images: [],
      },
      {
        company: "Guosen Securities",
        timeframe: "Jul. 2019 - Feb. 2020",
        role: "Wealth Advisor",
        achievements: [
          <>
            Acquired 200+ clients, driving a market capitalization increase of CNY 4 million through personalized investment strategies.
          </>,
          <>
            Achieved CNY 1.5 million in public fund sales and CNY 1 million in private fund sales.
          </>,
          <>
            Supported strategic planning by assisting in executive-level conferences with top private funds.
          </>,
        ],
        images: [],
      },
      {
        company: "HSBC Bank",
        timeframe: "Jan. 2019 - Jul. 2019",
        role: "Global Markets Operation Officer",
        achievements: [
          <>
            Oversaw daily back-office operations for institutional clients within the Plain Vanilla team,
            ensuring transaction accuracy and regulatory compliance.
          </>,
          <>
            Executed customer settlements and bank clearing processes, ensuring zero transaction delays.
          </>,
          <>
            Assisted front-desk traders in issuing interbank negotiable certificates of deposit,
            ensuring compliance with banking regulations.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Centennial College",
        description: <>Advanced Diploma, Software Engineering Technology Co-op, 2024</>,
      },
      {
        name: "Arizona State University",
        description: <>Master, Accountancy, 2017</>,
      },
      {
        name: "Arizona State University",
        description: <>Dual Bachelor of Science, Accountancy and Finance, 2016</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming & Scripting",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/skill-1-01.jpg",
            alt: "Skill 101 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-1-02.jpg",
            alt: "Skill 102 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-1-03.jpg",
            alt: "Skill 103 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-1-04.jpg",
            alt: "Skill 104 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-1-05.jpg",
            alt: "Skill 105 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-1-06.jpg",
            alt: "Skill 106 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-1-07.jpg",
            alt: "Skill 107 image",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Frameworks & Libraries",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/skill-2-01.jpg",
            alt: "Skill 201 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-2-02.jpg",
            alt: "Skill 202 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-2-03.jpg",
            alt: "Skill 203 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-2-04.jpg",
            alt: "Skill 204 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-2-05.jpg",
            alt: "Skill 205 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-2-06.jpg",
            alt: "Skill 206 image",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Database",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/skill-3-01.jpg",
            alt: "Skill 301 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-3-02.jpg",
            alt: "Skill 302 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-3-03.jpg",
            alt: "Skill 303 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-3-04.jpg",
            alt: "Skill 304 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-3-05.jpg",
            alt: "Skill 305 image",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Cloud & DevOps Platforms",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/skill-4-01.jpg",
            alt: "Skill 401 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-4-02.jpg",
            alt: "Skill 402 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-4-03.jpg",
            alt: "Skill 403 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-4-04.jpg",
            alt: "Skill 404 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-4-05.jpg",
            alt: "Skill 405 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-4-06.jpg",
            alt: "Skill 406 image",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Data Analysis & ML",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/skill-5-01.jpg",
            alt: "Skill 501 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-5-02.jpg",
            alt: "Skill 502 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-5-03.jpg",
            alt: "Skill 503 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-5-04.jpg",
            alt: "Skill 504 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-5-05.jpg",
            alt: "Skill 505 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-5-06.jpg",
            alt: "Skill 506 image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/skill-5-07.jpg",
            alt: "Skill 507 image",
            width: 5,
            height: 5,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    // {
    //   src: "/images/gallery/img-01.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
