import arabicAudio from "../assets/arabic.mp3";
import vaathiAudio from "../assets/vaathi.mp3";
import avalAudio from "../assets/aval.mp3";
import sadAudio from "../assets/sad.mp3";
import aaruyireAudio from "../assets/aaruyire.mp3";
import anjuAudio from "../assets/anju.mp3";
import chillAudio from "../assets/chill.mp3";
import pavazhaAudio from "../assets/pavazha.mp3";
import neeyumAudio from "../assets/neeyum.mp3";
import ennaAudio from "../assets/enna.mp3";
import focusAudio from "../assets/focus.mp3";

import arabic from "../assets/arabic.jpg";
import vaathi from "../assets/vaathi.jpg";
import aval from "../assets/aval.jpg";
import sad from "../assets/sad.jpg";
import aaruyire from "../assets/aaruyire.jpg";
import anju from "../assets/anju.jpg";
import chill from "../assets/chill.jpg";
import pavazha from "../assets/pavazha.jpg";
import neeyum from "../assets/neeyum.jpg";
import enna from "../assets/enna.jpg";
import focus from "../assets/focus.jpg";

const songs = {

  happy: [
    {
      title: "Arabic Kuthu",
      image: arabic,
      audio: arabicAudio,
      playlist: "Anirudh Hits"
    },

    {
      title: "Vaathi Coming",
      image: vaathi,
      audio: vaathiAudio,
      playlist: "Vijay Hits"
    },

    {
      title: "Aval",
      image: aval,
      audio: avalAudio,
      playlist: "Aval Hits"
    }
  ],

  sad: [
    {
      title: "Why This Kolaveri",
      image: sad,
      audio: sadAudio,
      playlist: "Sad Vibes"
    },

    {
      title: "Anju Vanna Poove",
      image: anju,
      audio: anjuAudio,
      playlist: "Sad Hits"
    },

    {
      title: "Aaruyire",
      image: aaruyire,
      audio: aaruyireAudio,
      playlist: "Sad Hits"
    }
  ],

  love : [
    {
      title: "Neeyum Naanum Anbea",
      image: neeyum,
      audio: neeyumAudio,
      playlist: "Love Songs"
    },
    { 
      title: "Enna solla Yethu solla",
      image: enna,
      audio: ennaAudio,
      playlist: "Love Songs"

    }
  ],

  chill: [
    {
      title: "Enjoy Enjaami",
      image: chill,
      audio: chillAudio
    },
    {
      title: "Pavazha Mazha",
      image: pavazha,
      audio: pavazhaAudio
    }

  ],

  focus: [
    {
      title: "Focus Music",
      image: focus,
      audio: focusAudio
    }
  ]

};

export default songs;