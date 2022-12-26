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
  username: "Mark Andrusiak",
  title: "Howdy, I'm Mark",
  subTitle: emoji(
    "An aspiring Self-Taught Full Stack Software Developer 🚀 with experience building Web and Unity applications"
  ),
  resumeLink:
    "https://drive.google.com/file/d/10vyOfPIP8ZlN9poQVekaF51qK4-tZORB/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Mandrusi",
  linkedin: "https://www.linkedin.com/in/markandrusiak/",
  gmail: "markandrusi@gmail.com",
  //gitlab: "",
  facebook: "https://www.facebook.com/mark.andrusiak.1/",
  //medium: "",
  //",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Build cool stuff using",
  skills: [
    emoji(
      "⚡ Develop Web applications using various programming languages and frameworks"
    ),
    emoji("⚡ Constantly seek to expand my knowledge and skills through self-study"),
    emoji(
      "⚡  Employ proven critical and creative thinking skills to solve complex challenges"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      //skillName: "sass",
      //fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      //skillName: "swift",
      //fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      //skillName: "firebase",
      //fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Michigan Technological University",
      logo: require("./assets/images/techLogo.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "September 2018 - December 2021",
      desc: "",
      descBullets: [
        "Graduated in 3.5 years with honors",
        "Participated in the Putnam Exam",
        "Concentration on Computer Science Courses"
      ]
    },
    {
      schoolName: "Eastern Michigan University (ECA)",
      logo: require("./assets/images/easternLogo.png"),
      subHeader: "HSED + 60 College Credits",
      duration: "September 2015 - May 2018",
      desc: "Secondary and post secondary courses for academically inclined students",
      descBullets: ["Early College Alliance Program", 
    "Concentration Pre-Law"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "40%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "",
      company: "",
      
      date: "",
      desc: "",
      descBullets: [
        "",
        ""
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "School/Work Projects",
  subtitle: "Hedgemony Online",
  projects: [
    {
      image: require("./assets/images/Hedgemony.jpg"),
      projectName: "Senior Design Hedgemony Online",
      projectDesc: "Developed an online adaptation of strategy game Hedgemony using Unity and following the Waterfall methodology. Utilized Git and Unity Teams for code management and utilized an S3 AWS instance to meet client needs. Researched and purchased a desired domain name.",
      footerLink: [
        {
          name: "Visit Website (DEPRECATED)",
          url: "tsw.games"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff I have done!",

  achievementsCards: [
    {
      title: "",
      subtitle:
        "",
      image: "",
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        {
          name: "Award Letter",
          url: ""
        },
        {
          name: "",
          url: ""
        }
      ]
    }

  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "",
  subtitle:
    "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    },
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have a position open at your company?",
  number: "1-734-730-1861",
  email_address: "markandrusi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Marshmallowfury", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
