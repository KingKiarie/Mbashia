//feed project data into the object classes

export const projectData = [
  {
    id: "1",
    imageRef: "#",
    title: "Photography Branding Website",
    shortDescription:
      "A sleek, minimalist photography branding website with live photo previews and responsive layouts.",
    description:
      "This project is a comprehensive photography branding website designed with a clean, minimalist aesthetic, aimed at showcasing a photographer's portfolio in the best light. The site features a smooth and intuitive user interface that allows visitors to preview live photos in various categories. It's fully responsive, ensuring that images and content look great on devices of all sizes. The website is hosted live on Vercel, with seamless deployment integration and scalability features. The use of Tailwind CSS ensures a fast, responsive experience while the backend powered by Node.js handles user queries and interactions, ensuring smooth navigation and load times.",
    techStack: ["Next.js", "Tailwind CSS", "Node.js"],
    liveDemo: "#",
    videoUrl: "#",
    Img: "",
    roles: ["Frontend Development", "UI/UX Design", "Backend Integration"],
    framework: "Next.js",
  },
  {
    id: "2",
    imageRef: "#",
    title: "E-Commerce Storefront",
    shortDescription:
      "An e-commerce platform with product search, filters, and secure checkout for a smooth shopping experience.",
    description:
      "This interactive e-commerce platform was built to provide users with a dynamic and seamless online shopping experience. The platform includes real-time product search functionality, advanced filtering options, and a secure checkout process integrated with popular payment gateways. The backend, powered by Node.js and MongoDB, ensures secure transactions and efficient data handling. React's modular approach enabled the creation of reusable components, providing a maintainable and scalable architecture. The storefront is designed to handle high traffic volumes, with fast page load times and excellent responsiveness, making it accessible across various devices.",
    techStack: ["React", "Node.js", "MongoDB"],
    liveDemo: "#",
    videoUrl: "#",
    Img: "",
    roles: ["Full-Stack Development", "API Design", "Database Management"],
    framework: "React, Node.js",
  },
  {
    id: "3",
    imageRef: "#",
    title: "Travel Blog",
    shortDescription:
      "A travel blog platform with media integration, galleries, and user interaction features.",
    description:
      "The travel blog platform is designed to be a comprehensive space for travelers to share their experiences with an engaging layout and rich media features. It integrates photo galleries, embedded videos, and user comment sections to create an interactive and immersive experience for readers. Gatsby's static site generation ensures optimal performance and SEO benefits, making the blog highly discoverable through search engines. The content management system is intuitive, allowing the blog owner to easily update posts and manage media. GraphQL is used to query data, providing efficient and fast content delivery to users.",
    techStack: ["Gatsby", "GraphQL", "Styled Components"],
    liveDemo: "#",
    videoUrl: "#",
    Img: "",
    roles: ["Frontend Development", "Content Management"],
    framework: "Gatsby",
  },
  {
    id: "4",
    imageRef: "#",
    title: "Portfolio Site",
    shortDescription:
      "A personal portfolio showcasing my projects, skills, and experience with a clean design.",
    description:
      "This personal portfolio site is a curated space designed to showcase all of my professional projects, skills, and experience in the web development field. Built with Next.js for server-side rendering, the portfolio is optimized for fast performance and SEO. It features a responsive design that adapts to any screen size, ensuring a consistent experience across devices. The Chakra UI framework provides a clean, modern look, while interactive elements, like hover animations and dynamic loading, make the site engaging for visitors. It serves as a professional hub, providing potential clients or employers with a comprehensive overview of my work.",
    techStack: ["Next.js", "Chakra UI"],
    liveDemo: "#",
    videoUrl: "#",
    Img: "",
    roles: ["Frontend Development", "UI Design"],

    framework: "Next.js",
  },
  {
    id: "5",
    imageRef: "#",
    title: "Fitness Tracking App",
    shortDescription:
      "A mobile app for tracking workouts and health statistics, with visualized progress.",
    description:
      "This fitness tracking app is designed to help users monitor their daily workouts and health statistics, offering a personalized experience with tailored recommendations for improved performance. Users can log their workouts, track their progress over time, and receive visual representations of their achievements, like charts and graphs. The app also features an integration with Firebase for real-time data syncing, ensuring that user data is always up-to-date and accessible from multiple devices. The mobile app interface is built using React Native, making it fast and responsive across both iOS and Android platforms.",
    techStack: ["React Native", "Firebase"],
    liveDemo: "#",
    videoUrl: "#",
    Img: "",
    roles: ["Mobile App Development", "UI/UX Design"],
    framework: "React Native",
  },
  {
    id: "6",
    imageRef: "#",
    title: "Chat Application",
    shortDescription:
      "A real-time chat app for seamless messaging with rooms, active participants, and WebSocket support.",
    description:
      "This chat application offers users real-time messaging capabilities using WebSocket technology for seamless, instant communication. Users can create or join rooms, send and receive messages in real time, and view active participants in each room. The app is designed to be highly scalable, capable of handling multiple rooms and users simultaneously without performance degradation. The frontend is built with React for a responsive and dynamic user interface, while the backend uses Node.js to manage WebSocket connections and ensure secure, fast data transmission. The UI is minimal and intuitive, making it easy for users to engage in conversations without distractions.",
    techStack: ["React", "WebSockets", "Node.js"],
    liveDemo: "#",
    videoUrl: "#",
    Img: "",
    roles: ["Full-Stack Development", "Real-Time Data Integration"],
    framework: "React, WebSockets",
  },
];

export const testimonials = [
  {
    name: "~ Amina",
    country: "Nigeria",
    role: "Software Developer",
    testimony:
      "Victor's mentorship has been a game-changer for me. His ability to break down complex coding concepts made it much easier for me to grasp and apply them in my projects.",
  },
  {
    name: "~ Liam",
    country: "Canada",
    role: "Full-Stack Engineer",
    testimony:
      "Working with Victor was transformative! His hands-on approach to problem-solving helped me navigate the challenges of full-stack development. I can't thank him enough for the support.",
  },
  {
    name: "~ Mei Ling",
    country: "China",
    role: "Mobile App Developer",
    testimony:
      "Victor's insights during our sessions helped me refine my app development skills. His feedback was always constructive and encouraged me to think creatively.",
  },
  {
    name: "~ Samuel",
    country: "South Africa",
    role: "Data Scientist",
    testimony:
      "Victor combines deep technical knowledge with a genuine passion for helping others. His guidance was instrumental in my recent project, and I appreciated his attentive listening.",
  },
  {
    name: "~ Fatima",
    country: "Pakistan",
    role: "Frontend Developer",
    testimony:
      "My sessions with Victor allowed me to identify my strengths and areas for growth. His encouragement pushed me to embrace new challenges, and I feel more confident in my skills.",
  },
  {
    name: "~ Michael",
    country: "Australia",
    role: "DevOps Engineer",
    testimony:
      "Victor reviewed my project proposals with keen attention to detail, offering invaluable insights that helped me refine my ideas and enhance my execution strategies.",
  },
  {
    name: "~ Priya",
    country: "India",
    role: "Software Engineer",
    testimony:
      "Victor helped me navigate the transition into my first job as a software engineer. His practical advice and mentorship were key to building my confidence in the workplace.",
  },
];
//blog data
export const blogs = [
  {
    imageRef: "#",
    title: "Understanding React Hooks",
    excerpt:
      "React Hooks have revolutionized the way we write React components. Learn the basics and advanced techniques...",
    link: "/blogs/react-hooks",// add medium blogs here
  },
  {
    imageRef: "#",
    title: "JavaScript ES6 Features",
    excerpt:
      "Explore the new features introduced in ES6, including arrow functions, destructuring, and more...",
    link: "/blogs/javascript-es6",//add medium blogs here
  },
  {
    imageRef: "#",
    title: "CSS Grid Layout: A Complete Guide",
    excerpt:
      "CSS Grid Layout is a powerful layout system available in CSS. This guide will show you how to get started...",
    link: "/blogs/css-grid-layout",//add medium blogs here
  },
];
