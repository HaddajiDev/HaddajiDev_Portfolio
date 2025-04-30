export interface Project {
  title: string
  slug: string
  description: string
  fullDescription?: string
  tags: string[]
  images?: string[]
  links?: {
    github?: string
    live?: string
  }
}

export interface ProjectsData {
  web: Project[]
  game: Project[]
}

export const projects: ProjectsData = {
  web: [
    {
      title: "Agency app",
      slug: "agency-app",
      description: "A modern agency application",
      fullDescription: "A responsive agency website with modern features and animations",
      tags: ["React", "Next.js", "Tailwind"],
      images: ["/imgs/Agence.png"],
      links: {
        live: "https://agencyahmed.vercel.app/",
        github: "https://github.com/HaddajiDev/Agency_Front/"
      }
    },
    {
      title: "Weather app",
      slug: "weather-app",
      description: "Real-time weather forecasting application",
      fullDescription: "A weather application with real-time updates and location-based forecasting",
      tags: ["React", "API Integration"],
      images: ["/imgs/Weather.png"],
      links: {
        live: "https://weather-app-five-ruby-57.vercel.app/",
        github: "https://github.com/HaddajiDev/Weather_App/"
      }
    },
    {
      title: "E-commerce app",
      slug: "e-commerce-app",
      description: "Full-stack e-commerce platform",
      fullDescription: "Complete e-commerce solution with product management and shopping cart",
      tags: ["React", "Node.js", "MongoDB"],
      images: ["/imgs/store.png"],
      links: {
        live: "https://ecommerce-front-pi-blue.vercel.app/",
        github: "https://github.com/HaddajiDev/Ecommerce_Project/"
      }
    },
    {
      title: "Savage Blog",
      slug: "savage-blog",
      description: "Modern blogging platform",
      fullDescription: "Feature-rich blog and content management",
      tags: ["Next.js", "CMS"],
      images: ["/imgs/blog.png"],
      links: {
        live: "https://savageblog.vercel.app/",
        github: "https://github.com/HaddajiDev/SavageBlog/"
      }
    },
    {
      title: "Savage Talk",
      slug: "savage-talk",
      description: "Real-time chat application",
      fullDescription: "Interactive messaging platform with real-time communication",
      tags: ["WebSocket", "React"],
      images: ["/imgs/talk.png"],
      links: {
        live: "https://savage-talk.vercel.app/",
        github: "https://github.com/HaddajiDev/Savage-Talk/"
      }
    },
    {
      title: "Savage Files",
      slug: "savage-files",
      description: "File management system",
      fullDescription: "Cloud-based file storage and management solution",
      tags: ["React", "Cloud Storage"],
      images: ["/imgs/files.png"],
      links: {
        live: "https://savage-files.vercel.app",
        github: "https://github.com/HaddajiDev/Savage-Files"
      }
    },
    {
      title: "Savage AI",
      slug: "savage-ai",
      description: "AI-powered application",
      fullDescription: "Artificial intelligence integration platform with various AI features",
      tags: ["AI", "Machine Learning"],
      images: ["/imgs/ai.png"],
      links: {
        live: "https://savageai.vercel.app",
        github: "https://github.com/HaddajiDev/Savage-AI"
      }
    }
  ],
  game: [
    {
      title: "Gems Rush",
      slug: "gems-rush",
      description: "Mobile puzzle game with gem-matching mechanics",
      fullDescription: "Addictive puzzle game with power-ups and level progression",
      tags: ["Mobile", "Puzzle"],
      images: ["/imgs/Screenshot 2023-07-18 181741.png"],
      links: {
        live: "https://play.google.com/store/apps/details?id=com.haddajiDev.pirategemrush",
        github: "https://play.google.com/store/apps/details?id=com.haddajiDev.pirategemrush"
      }
    },
    {
      title: "Sliding puzzle",
      slug: "sliding-puzzle",
      description: "Classic sliding puzzle game",
      fullDescription: "Traditional sliding puzzle with multiple difficulty levels",
      tags: ["Puzzle", "Mobile"],
      images: ["/imgs/sliding.jpg"],
      links: {
        live: "https://play.google.com/store/apps/details?id=com.haddajidev.slidingpuzzle",
        github: "https://play.google.com/store/apps/details?id=com.haddajidev.slidingpuzzle"
      }
    },
    {
      title: "Memory puzzle",
      slug: "memory-puzzle",
      description: "Memory matching card game",
      fullDescription: "Pirate-themed memory matching game with multiple difficulty levels",
      tags: ["Memory", "Web"],
      images: ["/imgs/memory.png"],
      links: {
        live: "https://haddajidev.itch.io/puzzle-pirates-memory-edition",
        github: "https://haddajidev.itch.io/puzzle-pirates-memory-edition"
      }
    },
    {
      title: "Chess",
      slug: "chess",
      description: "Classic chess game implementation",
      fullDescription: "Traditional chess game with AI opponent and multiplayer options",
      tags: ["Strategy", "Web"],
      images: ["/imgs/Chess.png"],
      links: {
        live: "https://haddajidev.itch.io/chess-with-no-checkmate",
        github: "https://haddajidev.itch.io/chess-with-no-checkmate"
      }
    },
    {
      title: "Treasure Clicker",
      slug: "treasure-clicker",
      description: "Incremental clicker game",
      fullDescription: "Pirate-themed incremental clicker game with resource management",
      tags: ["Clicker", "Web"],
      images: ["/imgs/clicker.png"],
      links: {
        live: "https://haddajidev.itch.io/treasure-clicker",
        github: "https://haddajidev.itch.io/treasure-clicker"
      }
    },
    {
      title: "Dog Rescue",
      slug: "dog-rescue",
      description: "Arcade-style rescue game",
      fullDescription: "Fast-paced arcade game with animal rescue mechanics",
      tags: ["Arcade", "Mobile"],
      images: ["/imgs/dog.png", "https://img.itch.zone/aW1hZ2UvMjIzNTU2MC8xMzIzNzIzNi5wbmc=/347x500/eQA8Yc.png", "https://img.itch.zone/aW1hZ2UvMjIzNTU2MC8xMzIzNzIzNy5wbmc=/347x500/U5EV7U.png"],
      links: {
        live: "https://haddajidev.itch.io/dog-rescue",
        github: "https://haddajidev.itch.io/dog-rescue"
      }
    },
    {
      title: "The Wizard and the warrior time keeper",
      slug: "the-wizard-and-the",
      description: "Fantasy adventure game",
      fullDescription: "Story-driven RPG with magic and combat system",
      tags: ["RPG", "PC"],
      images: ["/imgs/wizard.png", "https://img.itch.zone/aW1hZ2UvMjAwMjMxOC8xMTc3MTQyNi5wbmc=/original/mtyiCE.png", "https://img.itch.zone/aW1hZ2UvMjAwMjMxOC8xMTc3MTQyNS5wbmc=/347x500/bxqAs6.png"],
      links: {
        live: "https://haddajidev.itch.io/the-wizard-and-the-warrior-time-keeper",
        github: "https://haddajidev.itch.io/the-wizard-and-the-warrior-time-keeper"
      }
    },
    {
      title: "The Cursed Cave",
      slug: "the-cursed-cave",
      description: "Adventure exploration stroy game",
      fullDescription: "Dark cave exploration game with puzzle elements",
      tags: ["Adventure", "PC"],
      images: ["/imgs/cave.png", "https://img.itch.zone/aW1hZ2UvMjUyMTQ1MC8xNDk5NDQxOC5wbmc=/347x500/Id7qYI.png", "https://img.itch.zone/aW1hZ2UvMjUyMTQ1MC8xNDk5NDQxMi5wbmc=/347x500/1sWeht.png"],
      links: {
        live: "https://haddajidev.itch.io/the-cursed-cave",
        github: "https://haddajidev.itch.io/the-cursed-cave"
      }
    },
    {
      title: "رحلة النمو",
      slug: "growth-journey",
      description: "Clicker game",
      fullDescription: "Educational clicker game focused on personal growth",
      tags: ["Educational", "Web"],
      images: ["/imgs/clicker_2.png"],
      links: {
        live: "https://haddajidev.itch.io/gamejam",
        github: "https://haddajidev.itch.io/gamejam"
      }
    },
    {
      title: "Bomb Skipper",
      slug: "bomb-skipper",
      description: "Arcade bomb avoidance game",
      fullDescription: "Fast-paced bomb dodging game with power-ups",
      tags: ["Arcade", "Mobile"],
      images: ["/imgs/bomb.png"],
      links: {
        live: "https://haddajidev.itch.io/bomb-skipper",
        github: "https://github.com/HaddajiDev/Bomb-Skipper"
      }
    },
    {
      title: "Tank Showdown",
      slug: "tank-showdown",
      description: "Multiplayer tank battle game",
      fullDescription: "multiplayer tank combat game",
      tags: ["Multiplayer", "PC"],
      images: ["/imgs/tank.png"],
      links: {
        live: "https://haddajidev.itch.io/tank-showdown",
        github: "https://haddajidev.itch.io/tank-showdown"
      }
    },
    {
      title: "Balls Merge",
      slug: "balls-merge",
      description: "Puzzle merge game",
      fullDescription: "Addictive merging puzzle game with strategy elements",
      tags: ["Puzzle", "Mobile"],
      images: ["/imgs/Merge.png"],
      links: {
        live: "https://haddajidev.itch.io/balls-merge",
        github: "https://haddajidev.itch.io/balls-merge"
      }
    },
    {
      title: "Pirate's Dual",
      slug: "pirates-dual",
      description: "Pirate ship battle game",
      fullDescription: "Naval combat game with pirate ship customization",
      tags: ["Strategy", "Web"],
      images: ["/imgs/PirateDuel.png", "https://img.itch.zone/aW1hZ2UvMjk3NzEwOC8xNzgwOTE3My5wbmc=/347x500/v9jRNR.png", "https://img.itch.zone/aW1hZ2UvMjk3NzEwOC8xNzgwOTE2OS5wbmc=/347x500/1POwZC.png", "https://img.itch.zone/aW1hZ2UvMjk3NzEwOC8xNzgwOTE3MS5wbmc=/347x500/%2F1dZDR.png"],
      links: {
        live: "https://haddajidev.itch.io/pirates-dual",
        github: "https://github.com/HaddajiDev/Pirate-s-Dual"
      }
    }
  ]
};

export interface PersonalInfo {
  name: string
  age: string
  email: string
  workExperience: Array<{ [key: string]: string }>
  education: Array<{ [key: string]: string }>
  skills: string[]
}

export const personalInfo: PersonalInfo = {
  name: "Ahmed Haddaji",
  age: "21",
  email: "ahmedhaddajiahmed@gmail.com",
  workExperience: [{ "2020-now": "Full-stack Game Developer" }, { "2024-now": "Full-stack Developer" }],
  education: [{ "2021-2022": "Bachelor of Computer Science" }, { "2023-2024": "isimg Gabes - Computer Science (IT)" }],
  skills: [
    "HTML",
    "CSS",
    "Node.js",
    "Bootstrap",
    "SCSS/Less",
    "Tailwind",
    "JavaScript",
    "Python",
    "C",
    "C++",
    "npm/yarn/pnpm",
    "TypeScript",
    "SQL",
    "PostgreSQL",
    "React",
    "Nextjs",
    "Unity",
    "C#",
    "PHP",
    "MongoDB",
    "MySQL",
    "PlayFab",
    "Photoshop",
    "Motion design",
    "Rust",
    "Java",
    "Android Studio",
    "Git",
    "Godot",
    "GDScript",
  ],
}

export interface SkillsData {
  web: string[]
  game: string[]
}

export const skills: SkillsData = {
  web: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "HTML/CSS", "Tailwind CSS", "GraphQL", "REST APIs"],
  game: ["Unity", "C#", "Game Design", "3D Modeling", "Level Design", "Animation", "Physics", "AI Programming"],
}
