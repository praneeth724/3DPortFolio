import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

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
  works,
  tec,
  hobby,
  carrent,
  jobit,
  tripguide,
  threejs,
  brick,
  pong,
  gpacal,
  pub,
  
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React JS Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Unity Developer',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
 
];

const experiences: TExperience[] = [
  {
    title: 'Technical Skills',
    companyName: '',
    icon: tec,
    iconBg: '#383E56',
    date: 'Programming Languages,FrameWorks and Engines',
    points: [
      'I have experience with several programming languages, including Java, C#, HTML, CSS, and JavaScript. These languages form the foundation of my development skills, allowing me to create a wide range of applications and solutions effectively.',
      'In addition to my programming skills, I am well-versed in frameworks and libraries such as React, Node.js, and Express.js. These tools help me build dynamic web applications, streamline server-side development, and ensure seamless integration between different components.',
      'My expertise extends to various software and technologies, including the Unity game engine, Agile methodologies, and development environments like NetBeans, Visual Studio, Visual Studio Code, and IntelliJ. These tools and practices enable me to maintain a productive workflow and deliver high-quality projects.',
    ],
  },
  {
    title: 'Projects',
    companyName: '',
    icon: works,
    iconBg: '#E6DEDD',
    date: 'Games and Web Applications',
    points: [
      'In my second year at university, I developed an Online Fine Payment System using React, Node.js, Express.js, and MySQL, streamlining fine transactions for users',
      ' I also created a Java application for a Library Management System using NetBeans, enhancing the efficiency of library operations.',
      ' I built an engaging endless runner 2D game with Unity, showcasing my game development skills.',
      'create a basic version of the classic arcade game Pong. understand ball physics, paddle movement, and simple AI behavior',
      'This GPA Calculator that allows students to effortlessly track their grades and calculate their GPA in real-time with an intuitive interface',
    ],
  },
  {
    title: 'Interests',
    companyName: '',
    icon: hobby,
    iconBg: '#383E56',
    date: 'Blogs,Youtube and Sports',
    points: [
      'I am deeply engaged in the field of software development and game development using the Unity Engine, where I continuously hone my skills and create innovative projects. My involvement extends to participating in online forums such as StackOverflow, where I both seek and provide assistance to the developer community.',
      ' I maintain a blog to share my knowledge and experiences, and I create YouTube content to educate and inspire others in the tech and gaming fields.',
      'Outside of my technical pursuits, I am passionate about sports, particularly badminton and chess, which help me stay active and sharpen my strategic thinking. These activities collectively contribute to my growth as a well-rounded individual, balancing technical expertise with personal interests.',
    ],
  },
  {
    title: 'Publications',
    companyName: '',
    icon: pub,
    iconBg: '#E6DEDD',
    date: 'Blogger and Medium',
    points: [
      'I write technical blogs on Medium, where I delve into Unity Technology and share insights and tutorials on game development at Medium Blog about Unity Technology',
      ' I maintain a Blogger site focused on game development, offering detailed articles and resources at Blogger Blog about Game Dev.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'BSc in Computing and Information Systems (3rd Year ) With 2.9 Current Grade Point Average',
    name: 'University of Sabaragamuwa',
    designation: '[ 2022- Present]',
    company: 'Undergraduate Student',
    image:
      'https://www.wemakescholars.com/admin/uploads/providers/3JVNxCbjtw-huBlkXje2sBwXRq-CjNGk.png',
  },
  {
    testimonial:
      'GCE Advanced  Level 2020 Done With Mathematics Stream With 1.1104 Z-Score With B,B,C Passes ',
    name: 'Central College Kuliyapitiya',
    designation: '[2017-2019]',
    company: 'Advanced Level Student',
    image:
      'https://s3.amazonaws.com/batsman/Kuliyapitiya%20Central%20College_c5704023-391d-4cd3-8a8b-3e9fbd043d5f.JPG',
  },
  {
    testimonial:
      'GCE Ordinary Level With 8As With Information Technology Subject  and One B Pass for Tamil Language',
    name: 'Central College Kuliyapitiya',
    designation: '[2010-2016]',
    company: 'Ordinary Level Student',
    image:
      'https://s3.amazonaws.com/batsman/Kuliyapitiya%20Central%20College_c5704023-391d-4cd3-8a8b-3e9fbd043d5f.JPG',
  },
];

const projects: TProject[] = [
  {
    name: 'LMS Project',
    description:
      'LMS project using Java and NetBeans IDE, featuring seamless student registration, book addition, and efficient tracking of borrowed and returned books.',
    tags: [
      {
        name: 'java',
        color: 'blue-text-gradient',
      },
      {
        name: 'LMS',
        color: 'green-text-gradient',
      },
      {
        name: 'netbeans',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'https://github.com/praneeth724/LMS.git',
  },
  {
    name: '3D Runner Game',
    description:
      'Endless Runner Project with dynamic gameplay with increasing challenges, precise obstacle navigation, coin collection for score boosts and achievements.',
    tags: [
      {
        name: 'unity',
        color: 'blue-text-gradient',
      },
      {
        name: 'visual Scripting',
        color: 'green-text-gradient',
      },
      {
        name: 'C#',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: 'https://github.com/praneeth724/Endless-Runner-Game.git',
  },
  {
    name: 'Ezfine Lanka',
    description:
      'AI-integrated Online Fine Payment System for Sri Lanka, designed to streamline traffic fine management with personalized calculations and multilingual chatbot support.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Express',
        color: 'green-text-gradient',
      },
      {
        name: 'Mysql',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://github.com/praneeth724/IS4110_Capstone_Project.git',
  },
  {
    name: 'GPA Calculater',
    description:
      'This GPA Calculator that allows students to effortlessly track their grades and calculate their GPA in real-time with an intuitive interface. Just enter your course names, input your grades, and watch as your GPA is instantly calculated!',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: gpacal,
    sourceCodeLink: 'https://github.com/praneeth724/GPA-Calculater.git',
  },
  {
    name: 'Pong Game',
    description:
      'create a basic version of the classic arcade game Pong. understand ball physics, paddle movement, and simple AI behavior.End of this project  Pong game with single-player mode, complete with scoring and ball movement mechanics.',
    tags: [
      {
        name: 'Unity',
        color: 'blue-text-gradient',
      },
      {
        name: 'C#',
        color: 'green-text-gradient',
      },
      {
        name: 'Collision',
        color: 'pink-text-gradient',
      },
    ],
    image: pong,
    sourceCodeLink: 'https://github.com/praneeth724/BrickBreak_Game.git',
  },
  {
    name: 'Brick-Brake',
    description:
      'Brick Breaker game implemented using both Unity and HTML/JavaScript Canvas. The game involves a paddle, ball, walls, and bricks. The objective is to break all the bricks on the screen using the ball and paddle mechanics.',
    tags: [
      {
        name: 'CSS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'Unity',
        color: 'pink-text-gradient',
      },
    ],
    image: brick,
    sourceCodeLink: 'https://github.com/praneeth724/BrickBreak_Game.git',
  },
];

export { services, technologies, experiences, testimonials, projects };
