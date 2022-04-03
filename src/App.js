import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
  return (
    <div>
      <PillList />
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 30
};

function PillList() {
  const cards = [
    {
      title: "Art",
      img: "fa-solid fa-swatchbook"
    },
    {
      title: "Bussiness",
      img: "fa-solid fa-briefcase"
    },
    {
      title: "Design",
      img: "fa-solid fa-compass-drafting"
    },

    {
      title: "Philosophy",
      img: "fa-solid fa-yin-yang"
    },
    {
      title: "Money",
      img: "fa-solid fa-coins"
    },
    {
      title: "Love",
      img: "fa-solid fa-heart"
    },
    {
      title: "Leadership and management",
      img: "fa-solid fa-medal"
    },
    {
      title: "Religion",
      img: "fa-solid fa-person-praying"
    },
    {
      title: "Entrepreneurship",
      img: "fa-solid fa-handshake"
    },

    {
      title: "Health and Nutrition",
      img: "fa-solid fa-carrot"
    },
    {
      title: "Health",
      img: "fa-solid fa-heart-circle-plus"
    },
    {
      title: "Politics",
      img: "fa-solid fa-microphone-lines"
    },
    {
      title: "Marketing",
      img: "fa-solid fa-money-bill-trend-up"
    },
    {
      title: "Communication",
      img: "fa-solid fa-satellite"
    },
    {
      title: "Science",
      img: "fa-solid fa-microscope"
    },
    {
      title: "Biography",
      img: "fa-solid fa-book-open-reader"
    },
    {
      title: "Education",
      img: "fa-solid fa-graduation-cap"
    }
  ];

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="card-list" data-isOn={isOn} onClick={toggleSwitch}>
      {cards.map((card) => (
        <Pill key={card.title} card={card} isOn={isOn} />
      ))}
    </div>
  );
}

function Pill({ card, isOn }) {
  return (
    // <AnimatePresence>
    <motion.div layout transition={spring} className="pill">
      <p>
        <i className={card.img}></i> {card.title}
      </p>
    </motion.div>
    // </AnimatePresence>
  );
}
