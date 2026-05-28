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
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Educational", "Memory", "alphabet"],
      link: "/draw"
    },
    {
      title: "Hide N Seek",
      description: "Match animals with their sounds in this engaging audio game.",
      // children playing hide and seek outdoors
      image:
        "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Alphabet", "Fun"],
      link: "/hidenseek"
    },
    {
      title: "Alphabets",
      description: "Learn basic alphabets and improve vocabulary skills.",
      // colorful alphabet wooden blocks — Susan Holt Simpson
      image:
        "https://play-lh.googleusercontent.com/7TNnBrInykWUjDpuSNstTYdy5iuLuqz7z4Gt3O9R_KteTk2og68UtcDWCXA_I_xqmis=w526-h296-rw",
      tags: ["Education", "Alphabet"],
      link: "/alphabets"
    },
    {
      title: "Panel",
      description: "Learn basic alphabets and improve vocabulary skills.",
      // colorful jigsaw puzzle pieces
      image:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Education", "Alphabet"],
      link: "/panel"
    },
    {
      title: "Gallery",
      description: "Learn basic alphabets and improve vocabulary skills.",
      // portrait of mother and little girl playing together — Vivek Kumar
      image:
        "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Education", "Alphabet"],
      link: "/gallery"
    }
  ],
  "6-8": [
    {
      title: "Varnmala",
      description: "Learn varnmala of hindi.",

      image: "https://m.media-amazon.com/images/I/91yXKcuCEwL._SX445_.jpg",
      tags: ["vocab", "Educational"],
      link: "/varnmala"
    },
    {
      title: "Number System",
      description: "Learn Number System of word.",
      // colorful plastic numbers on mint green background — Kaboompics (Pexels)
      image: "/assets/images/Number.png",
      tags: ["vocab", "maths"],
      link: "/numbers"
    },
    {
      title: "Math Adventure",
      description: "Solve math problems to advance through an exciting adventure world.",
      // colorful math equations / geometry
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Math", "Adventure", "Educational"],
      link: "/math"
    },
    {
      title: "Cross Word",
      description: "Create words from letter tiles to earn points and unlock levels.",
      // wooden scrabble letter tiles on surface — Brett Jordan (Unsplash)
      image:
        "https://play-lh.googleusercontent.com/uz7mICzdnxxkVgTlJM5RRD6Y8F5M5kzu4syQKJruZ-8G7nqcsLeKjAuocxNJEaqFu7o=w526-h296-rw",
      tags: ["Language", "Spelling", "Fun"],
      link: "/crossword"
    },
    {
      title: "Akshar",
      description: "Learn local language basics",
      // pen writing letters on paper — handwriting closeup
      image:
        "https://images.twinkl.co.uk/tw1n/image/private/s--aTNc3kQp--/e_sharpen:100,q_auto:eco,w_1260/image_repo/18/b1/in-hi-1732165038-hindi-vowel-alphabet-flashcards-with-words-i-hindi-varnamala-phlaisakarda_ver_2.avif",
      tags: ["Language", "Educational"],
      link: "/akshar"
    },
    {
      title: "Stories",
      description: "Our stories",
      // open storybook with magical fairy lights — Nong
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["story"],
      link: "/story"
    },
    {
      title: "Capital",
      description: "Our State and Capital",
      // India map photo — Gayatri Malhotra (actual India map with states)
      image: "https://www.mapsofindia.com/images2/india-map.jpg",
      tags: ["geography", "gk"],
      link: "/capital"
    }
  ],
  "9-12": [
    {
      title: "Canvas",
      description: "Learn basic programming concepts through a fun puzzle game.",
      // graphic drawing tablet with stylus pen — digital art canvas tool
      image:
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Programming", "Logic", "Puzzle"],
      link: "/canvas"
    },
    {
      title: "Our India",
      description: "Learn about india state by dance.",
      // India map / tricolor flag
      image: "https://images.pexels.com/photos/7235907/pexels-photo-7235907.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["History", "Mystery", "Research"],
      link: "/map"
    },
    {
      title: "Nakshtra",
      description: "Learn about environmental science while protecting virtual ecosystems.",
      // milky way stars constellation night sky — Tobias Rademacher
      image: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?auto=format&fit=crop&w=600&q=80",
      tags: ["Environment", "Science", "Strategy"],
      link: "/nakshtra"
    }
  ],
  teens: [
    {
      title: "Stories",
      description: "A complex strategy game that challenges critical thinking and planning.",
      // person reading a book dramatically lit — emotional / teen vibe
      image: "/assets/images/stories.webp",
      tags: ["Strategy", "Critical Thinking", "Multiplayer"],
      link: "/stories"
    },
    {
      title: "Poems",
      description: "Design and create digital art, music, and animations.",
      // open poetry book, person reading — Toa Heftiba (poetry aesthetic)
      image:
        "https://media.slidesgo.com/storage/52467183/responsive-images/0-short-poems-for-kids___media_library_original_1600_900.jpg",
      tags: ["Creative", "Art", "Music"],
      link: "/poems"
    },
    {
      title: "Glossary",
      description: "Team-based challenges that promote collaboration and communication.",
      // magnifying glass on text / dictionary close-up
      image: "/assets/images/glossary.png",
      tags: ["Social", "Teamwork", "Communication"],
      link: "/glossary"
    }
  ],
  adults: [
    {
      title: "Our India",
      description: "Test your knowledge across various parts of indian state.",
      // India map / tricolor flag
      image: "/assets/images/OurIndia.png",
      tags: ["Trivia", "Knowledge", "Multiplayer"],
      link: "/map"
    },
    {
      title: "Vedic",
      description: "Work together to solve puzzles and escape before time runs out.",
      // ancient manuscript / old parchment handwritten text
      image:
        "https://ljfotzyzgckshahjzkya.supabase.co/storage/v1/object/public/site-assets/work/covers/1771405921711.png",
      tags: ["Puzzle", "Teamwork", "Mystery"],
      link: "/vedic"
    },
    {
      title: "Zodiac",
      description: "Ancient Indian Zodiac Signs.",
      // zodiac astrological wheel with celestial signs — historical illustration
      image:
        "https://media.istockphoto.com/id/1532619550/vector/cute-signs-zodiac-flat-style-adorable-characters-with-lettering.jpg?s=612x612&w=0&k=20&c=vHhOs9wHHce5tauJMUYfhNbG6WjUPzCsU5jb_so9xCs=",
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
