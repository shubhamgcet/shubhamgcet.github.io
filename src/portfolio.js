/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Subham Kumar",
  logo_name: "Subham Kumar",
  nickname: "subham_2401",
  subTitle:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "",
  portfolio_repository: "https://github.com/subham2401",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "SubhamKumar98@gmail.com",
  // gitlab: "https://gitlab.com/SubhamKumar98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/subham2401",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shubham2401/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:mail2shubham2401@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/walkytalkyshubham/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/shubham_2401/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux.",
        "⚡ Entirely responsible for managing all the internal links for B2B clients.",
        "⚡ Developed many other APIs, and internal tools for the company.",
        "⚡ Developed a recommendation system for the user to learn accordingly.",
        "⚡ Developed pipelines for Data visualization tools for real-time analytics for ease diving into the details.",
        "⚡ Developed pipelines for different Caching algorithms to reduce database calls over Redis and Memcached.",
        "⚡ Creating application backend in TypeScript , Nodejs and Php.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
         {
          skillName: "Php",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#000000",
          },
        },
         {
          skillName: "Google Data Studio",
          fontAwesomeClassname: "simple-icons:google_data_studio",
          style: {
            color: "#CB3837",
          },
        }
      ],
    },
   
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Responsilbe For Migrating Data from AWS to GCP",
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Mysql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "HackerRank",
//       iconifyClassname: "simple-icons:hackerrank",
//       style: {
//         color: "#2EC866",
//       },
//       profileLink: "https://www.hackerrank.com/layman_brother",
//     },
//     {
//       siteName: "Codechef",
//       iconifyClassname: "simple-icons:codechef",
//       style: {
//         color: "#5B4638",
//       },
//       profileLink: "https://www.codechef.com/users/ashutosh_1919",
//     },
//     {
//       siteName: "Codeforces",
//       iconifyClassname: "simple-icons:codeforces",
//       style: {
//         color: "#1F8ACB",
//       },
//       profileLink: "http://codeforces.com/profile/layman_brother",
//     },
//     {
//       siteName: "Hackerearth",
//       iconifyClassname: "simple-icons:hackerearth",
//       style: {
//         color: "#323754",
//       },
//       profileLink: "https://www.hackerearth.com/@ashutosh391",
//     },
//     {
//       siteName: "Kaggle",
//       iconifyClassname: "simple-icons:kaggle",
//       style: {
//         color: "#20BEFF",
//       },
//       profileLink: "https://www.kaggle.com/laymanbrother",
//     },
//   ],
// };

const degrees = {
  degrees: [
    {
      title: "Galgotia College of Engineering & Technology",
      subtitle: "B.Tech. in Information Technologies",
      logo_path: "galgotia.png",
      alt_name: "Galgotia college",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS",
        "⚡ Apart from this, I have done courses on Cloud Computing and Full Stack Development.",
        "⚡ I was selected for General Secretary in IT department",
      ],
      website_link: "https://galgotiacollege.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "",
      alt_name: "GCP",
      color_code: "#4285F499",
    },

    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Full Stack Developer Developer and Software Architect. I have also worked with some companies mostly as Full Stack Developer. ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Technical Associate",
          company: "Hello English",
          company_url: "https://helloenglish.com/",
          logo_path: "hello_english.jpg",
          duration: "June 2019 - PRESENT",
          location: "Jaipur, Rajasthan",
          description:
            "",
          color: "#0879bf",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Research and Development Intern",
          company: "Government of Delhi",
          company_url: "https://delhi.gov.in/",
          logo_path: "delhi_secretariat.jpeg",
          duration: "May 2018 - July 2018",
          location: "Delhi Secretariat, New Delhi",
          description:
            "1. Worked on the project ‘Joynt’, an initiative to help substance-consumed users overcome addiction, seek help & recover. 2. Design and developed user timeline & track plan for overcome sobriety based on its previous records. 3. Developed an algorithm to calculate and categories sobriety levels. 4. Developed a chat system for recovering addict to get in touch with psychiatrists.",
          color: "#ee3c26",
        },
        {
          title: "Backend Developer Intern",
          company: "Hello English ",
          company_url:
            "https://helloenglish.com/",
          logo_path: "hello_english.jpg",
          duration: "Jan 2019 - April 2019",
          location: "Jaipur , Rajasthan",
          description:
            "This is Education based Company so I have Integrated Dialog Flow to automate approx 60% of the daily user queries thus reducing the load on chat supporters.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Developer Student Lead Co-ordinator",
          company: "DSC Galgotia",
          company_url:
            "",
          logo_path: "dsc_logo.png",
          duration: "Jan 2017 - May 2019",
          location: "Greater Noida, Uttar Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Teacher Assistant",
          company: "Google Developer Days",
          company_url:
            "https://developers.google.com/events/gdd-india",
          logo_path: "google_developer_day.jpg",
          duration: "Dec 2017",
          location: "Banglore",
          description:
            "Google Developer Days (GDD) are global events showcasing the latest developer products and platforms from Google to help you quickly develop high quality apps, grow & retain an active user base, and tap into tools to earn more.",
          color: "#0C9D58",
        },
        {
          title: "Tech Lead",
          company: "Wings ",
          company_url:
            "http://wingsngo.co.in",
          logo_path: "wings_ngo.png",
          duration: "Jan 2018 - Dec 2018",
          location: "Greater Noida, Uttar Pradesh",
          description:
            "Taught Students in NGO and managed all the tech related operations in Greater Noida Chapter",
          color: "#0C9D58",
        },
        ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack  projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "developerActivity.svg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Cloud , Php , System Design .",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@subham2401",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "S.B. One, Bapu Nagar, J.L.N. Marg, Jaipur, Rajasthan 302015",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/YEawKh5ax5xuqiyu6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9650482576",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  // competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
