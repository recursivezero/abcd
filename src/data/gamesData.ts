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
      // child sitting at table drawing with crayons — Tim Mossholder
      image: "/assets/images/games/draw.avif",
      tags: ["Educational", "Memory", "alphabet"],
      link: "/draw"
    },
    {
      title: "Hide N Seek",
      description: "Match animals with their sounds in this engaging audio game.",
      // children playing hide and seek outdoors
      image: "/assets/images/games/hide.avif",
      tags: ["Alphabet", "Fun"],
      link: "/hidenseek"
    },
    {
      title: "Alphabets",
      description: "Learn basic alphabets and improve vocabulary skills.",
      // colorful alphabet wooden blocks — Susan Holt Simpson
      image: "/assets/images/games/alphabet.webp",
      tags: ["Education", "Alphabet"],
      link: "/alphabets"
    },
    {
      title: "Panel",
      description: "Learn basic alphabets and improve vocabulary skills.",
      // colorful jigsaw puzzle pieces
      image: "/assets/images/games/panel.avif",
      tags: ["Education", "Alphabet"],
      link: "/panel"
    },
    {
      title: "Gallery",
      description: "Learn basic alphabets and improve vocabulary skills.",
      // portrait of mother and little girl playing together — Vivek Kumar
      image: "/assets/images/games/gallery.avif",
      tags: ["Education", "Alphabet"],
      link: "/gallery"
    }
  ],
  "6-8": [
    {
      title: "Varnmala",
      description: "Learn varnmala of hindi.",

      image: "/assets/images/games/vernmala.jpg",
      tags: ["vocab", "Educational"],
      link: "/varnmala"
    },
    {
      title: "Number System",
      description: "Learn Number System of word.",
      // colorful plastic numbers on mint green background — Kaboompics (Pexels)
      image: "/assets/images/games/Number.png",
      tags: ["vocab", "maths"],
      link: "/numbers"
    },
    {
      title: "Math Adventure",
      description: "Solve math problems to advance through an exciting adventure world.",
      // colorful math equations / geometry
      image: "/assets/images/games/math.avif",
      tags: ["Math", "Adventure", "Educational"],
      link: "/math"
    },
    {
      title: "Cross Word",
      description: "Create words from letter tiles to earn points and unlock levels.",
      // wooden scrabble letter tiles on surface — Brett Jordan (Unsplash)
      image: "/assets/images/games/crossword.webp",
      tags: ["Language", "Spelling", "Fun"],
      link: "/crossword"
    },
    {
      title: "Akshar",
      description: "Learn local language basics",
      // pen writing letters on paper — handwriting closeup
      image: "/assets/images/games/akshar.avif",
      tags: ["Language", "Educational"],
      link: "/akshar"
    },
    {
      title: "Stories",
      description: "Our stories",
      // open storybook with magical fairy lights — Nong
      image: "/assets/images/games/Stories.avif",
      tags: ["story"],
      link: "/story"
    },
    {
      title: "Capital",
      description: "Our State and Capital",
      // India map photo — Gayatri Malhotra (actual India map with states)
      image: "/assets/images/games/capital.jpg",
      tags: ["geography", "gk"],
      link: "/capital"
    },
    {
      title: "Play",
      description: "Master keyboard skills by slicing falling letters and pressing the correct keys",
      image: "/assets/images/games/knplay.png",
      tags: ["Keyboard", "Typing", "Educational"],
      link: "/play"
    }
  ],
  "9-12": [
    {
      title: "Canvas",
      description: "Learn basic programming concepts through a fun puzzle game.",
      // graphic drawing tablet with stylus pen — digital art canvas tool
      image: "/assets/images/games/canva.avif",
      tags: ["Programming", "Logic", "Puzzle"],
      link: "/canvas"
    },
    {
      title: "Our India",
      description: "Learn about india state by dance.",
      // India map / tricolor flag
      image: "/assets/images/games/ourindia.avif",
      tags: ["History", "Mystery", "Research"],
      link: "/map"
    },
    {
      title: "Nakshtra",
      description: "Learn about environmental science while protecting virtual ecosystems.",
      // milky way stars constellation night sky — Tobias Rademacher
      image: "/assets/images/games/nakshatra.avif",
      tags: ["Environment", "Science", "Strategy"],
      link: "/nakshtra"
    }
  ],
  teens: [
    {
      title: "Stories",
      description: "A complex strategy game that challenges critical thinking and planning.",
      // person reading a book dramatically lit — emotional / teen vibe
      image: "/assets/images/games/stories.webp",
      tags: ["Strategy", "Critical Thinking", "Multiplayer"],
      link: "/stories"
    },
    {
      title: "Poems",
      description: "Design and create digital art, music, and animations.",
      // open poetry book, person reading — Toa Heftiba (poetry aesthetic)
      image: "/assets/images/games/poems.jpg",
      tags: ["Creative", "Art", "Music"],
      link: "/poems"
    },
    {
      title: "Glossary",
      description: "Team-based challenges that promote collaboration and communication.",
      // magnifying glass on text / dictionary close-up
      image: "/assets/images/games/glossary.png",
      tags: ["Social", "Teamwork", "Communication"],
      link: "/glossary"
    }
  ],
  adults: [
    {
      title: "Our India",
      description: "Test your knowledge across various parts of indian state.",
      // India map / tricolor flag
      image: "/assets/images/games/OurIndia.png",
      tags: ["Trivia", "Knowledge", "Multiplayer"],
      link: "/map"
    },
    {
      title: "Vedic",
      description: "Work together to solve puzzles and escape before time runs out.",
      // ancient manuscript / old parchment handwritten text
      image: "/assets/images/games/vedic.png",
      tags: ["Puzzle", "Teamwork", "Mystery"],
      link: "/vedic"
    },
    {
      title: "Zodiac",
      description: "Ancient Indian Zodiac Signs.",
      // zodiac astrological wheel with celestial signs — historical illustration
      image: "/assets/images/games/zodiac.jpg",
      tags: ["Strategy", "Classic", "Multiplayer"],
      link: "/zodiac"
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
