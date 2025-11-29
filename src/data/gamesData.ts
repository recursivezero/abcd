// src/data/gamesData.ts
export type AgeKey = "3-5" | "6-8" | "9-12" | "teens" | "adults";

export type Game = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

export const gamesData: Record<AgeKey, Game[]> = {
  "3-5": [
    {
      title: "Draw",
      description: "A fun game that helps toddlers learn alphabets and improve memory.",
      image:
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Educational", "Memory", "alphabet"],
      link: "/draw"
    },
    {
      title: "Hide N Seek",
      description: "Match animals with their sounds in this engaging audio game.",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Alphabet", "Fun"],
      link: "/hidenseek"
    },
    {
      title: "Alphabets",
      description: "Learn basic alphabets and improve vocabulary skills.",
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Education", "Alphabet"],
      link: "/alphabets"
    },
    {
      title: "Panel",
      description: "Learn basic alphabets and improve vocabulary skills.",
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Education", "Alphabet"],
      link: "/panel"
    },
    {
      title: "Gallery",
      description: "Learn basic alphabets and improve vocabulary skills.",
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Education", "Alphabet"],
      link: "/gallery"
    }
  ],
  "6-8": [
    {
      title: "Varnmala",
      description: "Learn varnmala of hindi.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["vocab", "Educational"],
      link: "/varnmala"
    },
    {
      title: "Number System",
      description: "Learn Number System of word.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["vocab", "maths"],
      link: "/numbers"
    },
    {
      title: "Math Adventure",
      description: "Solve math problems to advance through an exciting adventure world.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Math", "Adventure", "Educational"],
      link: "/math"
    },
    {
      title: "Cross Word",
      description: "Create words from letter tiles to earn points and unlock levels.",
      image:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Language", "Spelling", "Fun"],
      link: "/crossword"
    },
    {
      title: "Akshar",
      description: "Learn local language basics",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Language", "Educational"],
      link: "/akshar"
    },
    {
      title: "Stories",
      description: "our stories",
      image:
        "https://images.unsplash.com/photo-1585504198196-fb18f7b16b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["story"],
      link: "/story"
    },
    {
      title: "Capital",
      description: "our State and Capital",
      image:
        "https://images.unsplash.com/photo-1585504198196-fb18f7b16b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["geography", "gk"],
      link: "/capital"
    }
  ],
  "9-12": [
    {
      title: "Canvas",
      description: "Learn basic programming concepts through a fun puzzle game.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Programming", "Logic", "Puzzle"],
      link: "/canvas"
    },
    {
      title: "Our India",
      description: "Learn about india state by dance.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["History", "Mystery", "Research"],
      link: "/map"
    },
    {
      title: "Nakshtra",
      description: "Learn about environmental science while protecting virtual ecosystems.",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Environment", "Science", "Strategy"],
      link: "/nakshtra"
    }
  ],
  teens: [
    {
      title: "Stories",
      description: "A complex strategy game that challenges critical thinking and planning.",
      image:
        "https://images.unsplash.com/photo-1585504198196-fb18f7b16b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Strategy", "Critical Thinking", "Multiplayer"],
      link: "/stories"
    },
    {
      title: "Poems",
      description: "Design and create digital art, music, and animations.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Creative", "Art", "Music"],
      link: "/poems"
    },
    {
      title: "Glossary",
      description: "Team-based challenges that promote collaboration and communication.",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Social", "Teamwork", "Communication"],
      link: "/glossary"
    }
  ],
  adults: [
    {
      title: "Our India",
      description: "Test your knowledge across various parts of indian state.",
      image:
        "https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Trivia", "Knowledge", "Multiplayer"],
      link: "/map"
    },
    {
      title: "Vedic",
      description: "Work together to solve puzzles and escape before time runs out.",
      image: "https://images.unsplash.com/photo-1552422535-93d5d0d6e7e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Puzzle", "Teamwork", "Mystery"],
      link: "/vedic"
    },
    {
      title: "Glossary",
      description: "Classic and modern glossary data.",
      image:
        "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Strategy", "Classic", "Multiplayer"],
      link: "/glossary"
    }
  ]
};

export function getAgeGroupDisplayName(age: string | undefined) {
  const names: Record<string, string> = {
    "3-5": "3-5 Years",
    "6-8": "6-8 Years",
    "9-12": "9-12 Years",
    teens: "Teens",
    adults: "Adults & Family"
  };
  return (age && names[age]) || age || "Unknown Age Group";
}
