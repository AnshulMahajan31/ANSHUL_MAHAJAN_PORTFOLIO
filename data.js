// Simple data file: edit this to add images, skills, and certificates
// Paths typically look like '../images/your-file.jpg' relative to html/main.html

window.PORTFOLIO_DATA = {
  // Central place to reference images used across the site
  images: {
    projectPlaceholder: 'images/project-placeholder.jpg',
    searchDestroyCeremony: 'images/search-n-destroy-ceremony.jpeg',
    mindSparkTrophy: 'images/project-mindspark-trophy.jpeg',
    searchDestroyTrophy: 'images/search-n-destroy-trophy.jpeg',
    lineFollower: 'images/line-follower-bot.jpeg',
    powerBIWorkshop: 'images/power-bi-workshop.jpeg',
    uiuxTechxplore: 'images/uiux-techxplore.jpg',
    cloudTechxplore: 'images/cloud-computing-techxplore.jpg',
    aimlTechxplore: 'images/aiml-techxplore.jpg',
    deloitteCyber: 'images/deloitte-cyber.jpeg',
    awsForage: 'images/aws-forage.jpeg'
    // Add your own images below, then reference by path in certificates/projects
    // example1: '../images/line-follower.jpg',
    // example2: '../images/obstacle-avoidance.jpg'
  },

  // Skills organized by categories. Use either 'bars' (with level 0-100) or 'tags'.
  skills: [
    {
      category: 'Technical Skills',
      bars: [
        { name: 'Programming', level: 85 },
        { name: 'Circuit Design', level: 70 },
        { name: 'Data Analysis', level: 60 }


      ]
    },
    {
      category: 'Programming Languages',
      tags: ['C/C++', 'Python', 'Java', 'HTML/CSS']
    },
    {
      category: 'Software & Tools',
      tags: ['Arduino', 'Git', 'Microsoft Office', 'Microsoft Power BI']
    },
    {
      category: 'Soft Skills',
      tags: ['Problem Solving', 'Teamwork', 'Communication', 'Time Management', 'Project Management', 'Critical Thinking']
    }
  ],

  // Certificates list. Add as many items as you like.
  // 'image' is optional; if provided, it shows a preview.
  certificates: [
    {
      title: 'Microsoft Power BI Workshop',
      issuer: 'SKN IEEE & Microsoft Learn Student Ambassadors',
      date: '2025-09',
      desc: 'Completed a workshop on Power BI, building a Financial Data Dashboard to analyze sales, profit, and product trends.',
      image: 'images/power-bi-workshop.jpeg', 
      link: 'https://www.linkedin.com/posts/anshul-mahajan-2b614332a_thrilled-to-complete-the-microsoft-power-activity-7372236673549737984-LZvi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFL1ReoBwCqXMtBf0u5Jpt0V34xcLrXwTmE'
    },
    {
      title: 'TECHXPLORE 2025 - UI/UX Design Webinar',
      issuer: 'SKNISB IEEE Student Branch (SKNCOE)',
      date: '2025-11-28',
      desc: 'Participated in UI/UX Design webinar under TECHXPLORE 2025.',
      image: 'images/uiux-techxplore.jpg',
      link: ''
    },
    {
      title: 'TECHXPLORE 2025 - Cloud Computing Webinar',
      issuer: 'SKNISB IEEE Student Branch (SKNCOE)',
      date: '2025-11-29',
      desc: 'Participated in Cloud Computing webinar under TECHXPLORE 2025.',
      image: 'images/cloud-computing-techxplore.jpg',
      link: ''
    },
    {
      title: 'TECHXPLORE 2025 - AIML Webinar',
      issuer: 'SKNISB IEEE Student Branch (SKNCOE)',
      date: '2025-11-29',
      desc: 'Participated in AIML webinar under TECHXPLORE 2025.',
      image: 'images/aiml-techxplore.jpg',
      link: ''
    },
    {
      title: 'Cyber Job Simulation',
      issuer: 'Deloitte (Forage)',
      date: '2025-10-25',
      desc: 'Completed Cyber Security job simulation with practical tasks.',
      image: 'images/deloitte-cyber.jpeg',
      link: 'https://www.linkedin.com/posts/anshul-mahajan-2b614332a_im-happy-to-share-that-ive-obtained-a-new-activity-7387933553554231296-x9KH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFL1ReoBwCqXMtBf0u5Jpt0V34xcLrXwTmE'
    },
    {
      title: 'Solutions Architecture Job Simulation',
      issuer: 'AWS (Forage)',
      date: '2025-10-17',
      desc: 'Completed Solutions Architecture job simulation (designing scalable hosting architecture).',
      image: 'images/aws-forage.jpeg',
      link: 'https://www.linkedin.com/posts/anshul-mahajan-2b614332a_im-happy-to-share-that-ive-obtained-a-new-activity-7385206022946299904-wkOs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFL1ReoBwCqXMtBf0u5Jpt0V34xcLrXwTmE'
    }
  ],

  // Achievements list. Add awards, recognitions, competition wins, etc.
  achievements: [
    {
      title: '3rd Position - Search N\' Destroy',
      awardedBy: 'COEP Technological University (MindSpark\'25)',
      date: '2025-10',
      desc: 'Secured 3rd position in the Search N\' Destroy robotics event as part of Team STES ROBOTICS. Designed and built a competitive robot.',
      images: ['images/search-n-destroy-ceremony.jpeg','images/search-n-destroy-trophy.jpeg'],
      link: 'https://www.linkedin.com/posts/anshul-mahajan-2b614332a_mindspark25-coeptech-robotics-activity-7384676481244798976-xkM9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFL1ReoBwCqXMtBf0u5Jpt0V34xcLrXwTmE'
    }
  ]
  ,
  projects: [
    {
      name: 'Line Following Robot',
      description: 'Autonomous line follower using IR array and PID control. Tuned for smooth curvature handling and speed.',
      technologies: 'Arduino,C++,IR Sensors,PID Control',
      category: 'robotics',
      images: ['images/line-follower-bot.jpeg','images/line_follower_bot_2.jpeg'],
      video: 'images/line_follower_video.mp4',
      link: ''
    }
  ]
};
