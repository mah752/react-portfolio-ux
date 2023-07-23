import React from 'react';
import CashSmartCoverImage from "./assets/images/CashSmart-casestudy-cover.png";

const logotext = "MaryanDesign";
const meta = {
    title: "MaryanDesign",
    description: "I’m Maryan UX/UI designer _ who can also code ,currently working in Remotely in the UK",
};

const introdata = {
    title: "I’m Maryan",
    animated: {
        first: "I am UX/UI designer",
        second: "based in the UK",
        third: "I can also code",
    },
    description: "From childhood, my out-of-the-box thinking has fueled my passion for innovative problem-solving. I've consistently brought fresh perspectives and creative solutions to every endeavor, showcasing my ability to think beyond conventional boundaries.",
    your_img_url: "https://images.unsplash.com/photo-1561406059-0229136fe606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
};

const dataabout = {
    title: "abit about my self",
    aboutme:
      'I\'m an innovative problem-solver with a passion for UX/UI design since childhood. Inspired by a Korean drama called "Startup," I joined a hackathon and discovered my love for design and coding. Winning the challenge fueled my dedication to UX/UI, driving me to pursue a prestigious bootcamp to expand my skills. I\'m committed to mastering design, pushing boundaries, and creating exceptional experiences.',
  };
  
  const worktimeline = [
    {
      jobtitle: "Organisational Learning Coordinator",
      where: "Plan International",
      date: "2021-Present",
    },
    {
      jobtitle: "Lead UX designer (1st Place Virtual Team)",
      where: "CashSmart-Athena Hackathon",
      date: "July 2023",
    },
    {
      jobtitle: "UX/UI designer (Best Overall Hack)",
      where: "Femtor-Starhacks II Hackathon",
      date: "January 2022",
    },
    {
      jobtitle: "Evacability Website",
      where: "Global Team",
      date: "March 2022 - October 2022",
    },
    {
      jobtitle: "Monitoring and Evaluation Coordinator Intern",
      where: "Organization Name",
      date: "February 2021 - April 2021",
    },
    {
      jobtitle: "Humanitarian Affairs Intern",
      where: "Organization Name",
      date: "June 2020 - December 2020",
    },
  ];
  

const skills = [
    {
      name: "Design",
      skills: "UX Design, IA, Wireframing, Prototyping, Usability Testing, Interaction Design, Design Thinking, Responsive Web Design, Mobile App Design.",
    },
    {
      name: "Django",
      skills: "85",
    },
    {
      name: "Javascript",
      skills: "80",
    },
  ];
  

  const services = [
    {
      title: "Design",
      description: "User Experience (UX) Design, Information Architecture, Wireframing and Prototyping, Usability Testing, Interaction Design, Visual Design, Design Thinking, Responsive Web Design, Mobile App Design",
    process: "In my design process, I follow a user-centered approach that involves empathizing with the target audience to understand their needs and pain points. I then define the problem and project requirements. Next, I ideate and generate multiple design concepts. Using these concepts, I create prototypes to visualize and test the ideas. Through usability testing, I gather user feedback to refine and iterate on the design, ensuring that the final product meets user expectations and delivers an optimal user experience."
    },
    {
      title: "Development",
      description: "JavaScript, React, HTML/CSS",
    },
    {
      title: "Tools",
      description: "Figma, Adobe XD, Visual Studio Code, GitHub, Git",
    },
  ];
  

const dataportfolio = [{
        img: CashSmartCoverImage,
        description: "Offering a gamified learning experience to empower users in their financial journey.",
        link: "#",
    },
    {
        img: CashSmartCoverImage,
        description: "Offering a gamified learning experience to empower users in their financial journey.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "Transforming the U.S department of Labor Website.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Reinventing the Chaldon Animal Sanctuary Website.",
        link: "#",
    },
  ,

];

const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    behance: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};