/** @format */

import img11 from './assets/img/quiz/1/1.png';
import img12 from './assets/img/quiz/1/2.png';
import img13 from './assets/img/quiz/1/3.png';
import img14 from './assets/img/quiz/1/4.png';
import img21 from './assets/img/quiz/2/1.png';
import img22 from './assets/img/quiz/2/2.png';
import img23 from './assets/img/quiz/2/3.png';
import img24 from './assets/img/quiz/2/4.png';
import img31 from './assets/img/quiz/3/1.png';
import img32 from './assets/img/quiz/3/2.png';
import img33 from './assets/img/quiz/3/3.png';
import img34 from './assets/img/quiz/3/4.png';
import img41 from './assets/img/quiz/4/1.png';
import img42 from './assets/img/quiz/4/2.png';
import img43 from './assets/img/quiz/4/3.png';
import img44 from './assets/img/quiz/4/4.png';
import img51 from './assets/img/quiz/5/1.png';
import img52 from './assets/img/quiz/5/2.png';
import img53 from './assets/img/quiz/5/3.png';
import img54 from './assets/img/quiz/5/4.png';
import res1 from './assets/img/quiz/result/1.png';
import res2 from './assets/img/quiz/result/2.png';
import res3 from './assets/img/quiz/result/3.png';
import res4 from './assets/img/quiz/result/4.png';

export const questions = [
  {
    top: "You’re getting ready for a fun day out with your friends.",
    question: "What kind of outfit are you putting together to feel your best?",
    choices: [
      { img: img11, text: "Soft feminine" },
      { img: img12, text: "Preppy chic" },
      { img: img13, text: "Summer clean girl" },
      { img: img14, text: "Street wear" },
    ],
  },
  {
    top: "⁠It’s a fresh morning and you’re reaching for your signature scent.",
    question: "Which one do you spray?",
    choices: [
      { img: img21, text: "Glossier You" },
      { img: img22, text: "Tom Ford Soleil Blanc" },
      { img: img23, text: "Replica Beach Walk" },
      { img: img24, text: "Replica By the Fireplace" },
    ],
  },
  {
    top: "You finally get a break from your routine, it’s time for a vacation.",
    question: "What kind of destination are you booking first?",
    choices: [
      { img: img31, text: "Mountain" },
      { img: img32, text: "Resort in a countryside" },
      { img: img33, text: "Beach" },
      { img: img34, text: "New York city" },
    ],
  },
  {
    top: "You’ve got a full day ahead, running errands, brunch plans, maybe a sunset walk.",
    question: "Which bag are you slinging over your shoulder?",
    choices: [
      { img: img41, text: "Bottega Veneta pouch" },
      { img: img42, text: "Hermes shoulder birkin" },
      { img: img43, text: "Longchamp mesh bag" },
      { img: img44, text: "Balenciaga le city bag" },
    ],
  },
  {
    top: "You’re at your favorite café or juice bar.",
    question: "What drink are you ordering to power you through the day?",
    choices: [
      { img: img51, text: "Matcha latte" },
      { img: img52, text: "Sparkling water" },
      { img: img53, text: "Coconut water" },
      { img: img54, text: "Energy drink" },
    ],
  },
];

export const results = [
  {
    id: 1,
    img: res1,
    title: "Yoga Type",
    description:
      "Soft, grounded, and effortlessly calm. You radiate peace and move with intention. Cozy cafés, quiet mornings, and inner glow are your vibe.",
  },
  {
    id: 2,
    img: res2,
    title: "Tennis Girlie",
    description:
      "Polished, sharp, and naturally competitive. You bring main-character energy with a touch of elegance. Always composed, always in control.",
  },
  {
    id: 3,
    img: res3,
    title: "Swimming Energy",
    description:
      "Chill, glowy, and in your flow. You’re all about slow mornings, sun-kissed skin, and going with your own rhythm effortless and cool.",
  },
  {
    id: 4,
    img: res4,
    title: "Boxing-Coded",
    description:
      "Bold, intense, and unapologetically real. You show up strong, speak your truth, and turn pressure into power. Fierce but loyal.",
  },
];
