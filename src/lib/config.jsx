import Image from "next/image";
export const SiteConfig = {
  site: {
    name: "Abhishek Singh",
    description: "Abhishek's personal portfolio",
  },
  user: {
    firstName: "Abhishek",
    lastName: "Singh",
    email: "abhisheks@ssipmt.com",
    username: "abhisheksingh2494",
    socials: {
      githubUserId: "The-Abhishek-Singh",
      linkedInUserId: "abhisheksingh2494",
    },
  },
  title: "Abhishek Singh",
  resumeLink:
    "https://drive.google.com/file/d/1-CUotXgxOVthSsx3Uhqhw0T4eDRCCkxj/view?usp=sharing",
};
export const GithubYears = [2025,2024];
export const Titles = ["Web Developer Intern", "FullStack Developer Intern"];
export const Subtitles = [
  "@Thought Applied Creations",
  "@Chanakyans Education Foundation",
];
export const Skills = [
  "C++",
  "C",
  "HTML",
  "CSS",
  "TailwindCSS",
  "Bootstrap",
  "JavaScript",
  "React",
  "Next.js",
  "Python",
  "Django",
  "MySQL",
  "AWS",

  "Java",
  "Git",
  "Github",
];
export const Experience = [
  [
    {
      title: "Interactive Web Interface Development",
      description:
        "As a Frontend Developer Intern, I utilized HTML, CSS, and JavaScript to design and develop user-friendly, interactive web interfaces. Focused on creating seamless user experiences, I ensured that all elements were responsive and optimized for various devices, enhancing the overall functionality and aesthetics of web applications.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to bottom right, var(--green-300), var(--green-100))] flex items-center justify-center text-white">
          <img
            src="/images/thoughtapplied.png"
            alt="logo"
            className="w-6/7 rounded-full"
          />
        </div>
      ),
    },
    {
      title: "Responsive Design Techniques",
      description:
        "During my internship, I explored and implemented responsive design techniques to ensure web applications performed seamlessly across all devices. I focused on creating adaptable layouts that provided an optimal viewing experience on desktops, tablets, and mobile devices, helping enhance accessibility and usability for users.",
      content: (
        <div className="h-full w-full font-openSans flex items-center justify-center text-white">
          <ul className="list-disc px-4">
            <li>Adaptable layouts</li>
            <li>Optimal viewing</li>
            <li>Enhanced usability</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Web Development Best Practices",
      description:
        "I applied web development best practices to optimize code efficiency and maintainability. By following industry standards for clean, modular code, I contributed to building scalable applications. This approach improved performance and ensured long-term sustainability, allowing the project to evolve without compromising on quality or functionality.",
      content: (
        <div className="h-full w-full font-openSans bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <ul className="list-disc px-4">
            <li>Clean code</li>
            <li>Scalable applications</li>
            <li>Optimized performance</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Version Control with Git",
      description:
        "Effectively used version control tools like Git to manage code changes, ensuring a smooth development process. By collaborating on GitHub, I tracked and reviewed modifications, allowing for easy rollbacks and seamless team collaboration, ultimately maintaining code integrity and avoiding conflicts across team members.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <ul className="list-disc px-4">
            <li>Version tracking</li>
            <li>Always updated</li>
            <li>Effortless control</li>
          </ul>
        </div>
      ),
    },
  ],
  [
    {
      title: "Comprehensive Full-Stack Development",
      description:
        "As a Full Stack Developer Intern at Chanakyans Education Foundation, I focused on building dynamic web applications by leveraging both frontend and backend technologies. My role involved creating interactive, user-friendly interfaces and integrating server-side functionalities to enhance overall application performance and user experience.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <img
            src="/images/chanakyans.png"
            alt="logo"
            className="w-2/3 rounded-full"
          />
        </div>
      ),
    },
    {
      title: "Database Integration",
      description:
        "Developed and integrated efficient databases to ensure seamless data storage and retrieval, improving performance and scalability of web applications. My role included optimizing query processes and structuring data models that ensured easy access, storage, and management of large volumes of data while maintaining system reliability.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white  font-openSans">
          <ul className="list-disc px-4">
            <li>Robust databases</li>
            <li>Seamless storage</li>
            <li>Scalable apps</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Cloud Deployment",
      description:
        "Utilized cloud deployment techniques to deploy and manage web applications, ensuring reliable uptime and accessibility for users. By optimizing cloud resources, I ensured that the applications remained highly available and scalable, providing a smooth user experience even under varying traffic loads.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white  font-openSans">
          <ul className="list-disc px-4">
            <li>Cloud techniques</li>
            <li>Reliable uptime</li>
            <li>Accessible apps</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Careertronics Website Development",
      description:
        "Contributed to designing and developing the official website for Careertronics, supporting its transition and showcasing the foundation's new identity. By implementing modern design principles and functionality, I helped deliver an intuitive and professional online presence that aligned with the foundation's goals and vision.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white  font-openSans">
          <ul className="list-disc px-4">
            <li>Website design</li>
            <li>Foundation transition</li>
            <li>Brand identity</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Version Control",
      description:
        "Effectively used version control systems like Git to manage code changes, collaborate with team members, and maintain a clean project history. By utilizing branching, merging, and pull requests, I ensured smooth workflows, tracked changes, and resolved conflicts, enhancing collaboration and code integrity throughout the development process.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white  font-openSans">
          <ul className="list-disc px-4">
            <li>Git version control</li>
            <li>Code collaboration</li>
            <li>Conflict resolution</li>
          </ul>
        </div>
      ),
    },
  ],
];
