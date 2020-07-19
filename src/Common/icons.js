const domain = "https://simpleicons.org/icons";
const cdn = "https://unpkg.com/simple-icons@v3/icons";

const icons = {
  Javascript: {
    name: "javascript",
    fill: "ffffff",
  },
  HTML: {
    name: "html5",
    fill: "ffffff",
  },
  CSS: {
    name: "css3",
    fill: "ffffff",
  },
  "C#": {
    name: "csharp",
    fill: "ffffff",
  },
  Jenkins: {
    name: "jenkins",
    fill: "ffffff",
  },
  JSON: {
    name: "json",
    fill: "ffffff",
  },
  Bash: {
    name: "gnubash",
    fill: "ffffff",
  },
  SonarQube: {
    name: "sonarqube",
    fill: "ffffff",
  },
  React: {
    name: "react",
    fill: "ffffff",
  },
  Jest: {
    name: "jest",
    fill: "ffffff",
  },
  MongoDB: {
    name: "mongodb",
    fill: "ffffff",
  },
  "Node.js": {
    name: "node-dot-js",
    fill: "ffffff",
  },
  Twitter: {
    name: "twitter",
    fill: "ffffff",
  },
  "Dev.to": {
    name: "dev-dot-to",
    fill: "ffffff",
  },
  YouTube: {
    name: "youtube",
    fill: "ffffff",
  },
  "Stack Overflow": {
    name: "stackoverflow",
    fill: "ffffff",
  },
  LinkedIn: {
    name: "linkedin",
    fill: "ffffff",
  },
};

export const getIcon = (name) => {
  const item = icons[name];
  if (item) {
    const result = {
      name: item.name,
      color: item.fill,
    };
    return result;
  }
};
