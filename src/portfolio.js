
/* Change this file to get your personal Portfolio */

// Your Summary And Intro Section

import emoji from "react-easy-emoji";

const intro = {
  /* Your Summary And Intro Section */
  username: "Sale For You",
  title: "Sale For You",
  subTitle: emoji("We build e-commerce 🛒 Build a fast e-commerce and start to sell now 🚀 We use a whitelabel e-commerce to speed up the development time and to build you the best e-commerce that your money can buy."),
};

// Your Social Media Link

const socialMediaLinks = {
  gmail: "lucas.nicolau.developer@gmail.com",
};

// Your Skills Section

const skillsSection = {
  title: "Do you want to know more?",
  subTitle: "Check what we can offer you. Feel free to contact us by e-mail",
  skills: [
    emoji("📱 Need alson an app for IOS and Android? No problem! 📱"),
    emoji("👷‍♂️ Need a new feature for your e-commerce? We handle this! 👷‍♂️"),
    emoji("💳 We integrate with a payment services of your choice 💳"),
    emoji("💲 We have a plan for each demand. Contact us for more info💲"),
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "website",
      fontAwesomeClassname: "fab fa-chrome"
    },
    {
      skillName: "google play",
      fontAwesomeClassname: "fab fa-google-play"
    },
    {
      skillName: "app store",
      fontAwesomeClassname: "fab fa-app-store-ios"
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mobile",  //Insert stack or technology you have experience in
      progressPercentage: "100%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },  
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    },
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
  experience: [
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "lcsvcn", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Clients You have worked with your company

const bigProjects = {
  title: "Clients",
  subtitle: "SOME COMPANIES THAT TRUSTED OUR WORK",
  projects: [
    {
      image: require("./assets/images/jannini.png"),
      link: "https://www.casajannini.com.br/"
    },
    
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "",

  achivementsCards: [
    
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "",

  blogs: [
    
  ]
};

const contactInfo = {
  title: emoji("Contact Us ☎️"),
  subtitle: "Do you have any question? Do you want to make business with us? Our inbox is open for all.",
 // number: "+55 (16) 92000-3861",
  email_address: "lucas.nicolau.developer@gmail.com"
};

export { intro, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, contactInfo };
