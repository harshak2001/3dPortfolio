import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  viit,
  ssc,
  hsc,
  ecom,
  filmpire,
  dashboard,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "ReactJS Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Problem Solving",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "BTech | Bachelor of Technology",
    company_name: "Vishwakarma Institute Of Information Technology.",
    icon: viit,
    iconBg: "#383E56",
    date: "Present - Pune",
    points: [
      "Pursuing B.Tech in Information Technology at Vishwakarma Institute of Information Technology since 2020.",
      "Demonstrated academic excellence with a current CGPA of 8.98.",
      "Engaged in a comprehensive curriculum covering key areas of Information Technology.",
      "Actively participating in practical projects and assignments to apply theoretical knowledge in real-world scenarios.",
    ],
  },
  {
    title: "Higher Secondary Board",
    company_name: "Jagadamba Junior College Of Science",
    icon: hsc,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - Yavatmal",
    points: [
      "Completed Higher Secondary Certificate (HSC) at Jagadamba Junior College of Science.",
      "Specialized in the science branch.",
      "Achieved an outstanding academic performance with a percentage of 80.77%.",
      "Demonstrated strong aptitude and dedication in science-related coursework.",
    ],
  },
  {
    title: "Secondary School Certificate",
    company_name: "Jawaharlal Darda English Medium School",
    icon: ssc,
    iconBg: "#383E56",
    date: "Jan 2018 - Yavatmal",
    points: [
      "Completed Secondary School Certificate (SSC) with an outstanding achievement of 90.03% from Jawaharlal Darda English Medium School.",
      "Demonstrated academic excellence, showcasing a strong foundation in diverse subjects.",
      "Proven ability to succeed in a challenging academic environment, reflecting dedication and hard work.",
      "Attended a reputed educational institution, fostering a passion for continuous learning and academic excellence.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "VIIT Pune student, pursuing excellence in C++ coding on GeeksforGeeks with a focus on consistent problem-solving and algorithmic proficiency.  ",
    name: "GeeksForGeeks",
    designation: "CFO",
    company: "Acme Co",
    image:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQEF0x_q7m5JjQ/company-logo_200_200/0/1599932632971?e=2159024400&v=beta&t=68KCVLmovPmhATD3h7OMnhVOWfgdw1BpHGT0hT-lBEs",
    link: "https://auth.geeksforgeeks.org/user/harshak0362/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user",
  },
  {
    testimonial:
      "LeetCode enthusiast with a focus on problem-solving and continuous improvement in C++, SQL, HTML, CSS, and JavaScript.",
    name: "LeetCode",
    designation: "COO",
    company: "DEF Corp",
    image: "https://leetcode.com/static/images/LeetCode_logo.png",
    link: "https://leetcode.com/Harshak_Chaudhari/",
  },
  {
    testimonial:
      "CodeStudio enthusiast. Level 6 Specialist with 6180 EXP, excelling in arrays, stacks, queues, and sorting algorithms. Passionate about continuous learning.",
    name: "CodeStudio",
    designation: "CTO",
    company: "456 Enterprises",
    image:
      "https://www.codingninjas.com/landing/wp-content/uploads/2022/11/CN-DP.jpg",
    link: "https://www.codingninjas.com/studio/profile/d5a85e16-ac55-4af5-8284-b1750c7600e1",
  },
];

const projects = [
  {
    name: "E-commerce Website",
    description:
      "Built a user-friendly e-commerce platform, enabling seamless product browsing, filtering, ordering, and efficient admin management of inventory and orders.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://github.com/harshak2001/ecom1",
  },
  {
    name: "Filmpire",
    description:
      "Filmpire: Your voice-powered movie recommendation system. Built with ReactJS, Material-UI, and Redux for an interactive and personalized film discovery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: filmpire,
    source_code_link: "https://github.com/harshak2001/flimpire_hsc",
  },
  {
    name: "Interactive Dashboard",
    description:
      "Crafted dynamic interactive dashboard website, delivering insightful data visualization for enhanced user experience and informed decision-making",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nivo-charts",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/harshak2001/Dashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };
