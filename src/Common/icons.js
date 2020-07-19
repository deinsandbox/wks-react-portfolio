const domain = "https://simpleicons.org/icons/";

const styles = {
  Javascript: {
    icon: "javascript.svg",
    color: {
      background: "#F7DF1E",
      font: "#000000",
    },
  },
  HTML5: {
    icon: "html5.svg",
    color: {
      background: "#E34F26",
      font: "#FFFFFF",
    },
  },
  "C#": {
    icon: "csharp.svg",
    color: {
      background: "#239120",
      font: "#FFFFFF",
    },
  },
  Jenkins: {
    icon: "jenkins.svg",
    color: {
      background: "#D24939",
      font: "#FFFFFF",
    },
  },
  JSON: {
    icon: "json.svg",
    color: {
      background: "#000000",
      font: "#FFFFFF",
    },
  },
  Bash: {
    icon: "gnubash.svg",
    color: {
      background: "#4EAA25",
      font: "#FFFFFF",
    },
  },
  SonarQube: {
    icon: "sonarqube.svg",
    color: {
      background: "#4E9BCD",
      font: "#FFFFFF",
    },
  },
  React: {
    icon: "react.svg",
    color: {
      background: "#61DAFB",
      font: "#000000",
    },
  },
  Jest: {
    icon: "jest.svg",
    color: {
      background: "#C21325",
      font: "#000000",
    },
  },
  MongoDB: {
    icon: "mongodb.svg",
    color: {
      background: "#47A248",
      font: "#FFFFFF",
    },
  },
  "Node.js": {
    icon: "node-dot-js.svg",
    color: {
      background: "#339933",
      font: "#FFFFFF",
    },
  },
  Twitter: {
    icon: "twitter.svg",
    color: {
      background: "#1DA1F2",
      font: "#FFFFFF",
    },
  },
  "Dev.to": {
    icon: "dev-dot-to.svg",
    color: {
      background: "#0A0A0A",
      font: "#FFFFFF",
    },
  },
  YouTube: {
    icon: "youtube.svg",
    color: {
      background: "#FF0000",
      font: "#FFFFFF",
    },
  },
  "Stack Overflow": {
    icon: "stackoverflow.svg",
    color: {
      background: "#FE7A16",
      font: "#FFFFFF",
    },
  },
  LinkedIn: {
    icon: "linkedin.svg",
    color: {
      background: "#0077B5",
      font: "#FFFFFF",
    },
  },
};

export const getIcon = (name) => {
  const find = style[name];
  if (find) {
    const result = {
      url: `${domain}${find.icon}`,
      background: `${domain}${find.color.background}`,
      font: `${domain}${find.color.font}`,
    };
    return result;
  }
};
