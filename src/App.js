import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlexRowIcon } from "./svgs/FlexRowIcon";
import Card from "@mui/material/Card";
import { FlexColumnIcon } from "./svgs/FlexColumnIcon";
import { FlexNoWrapIcon } from "./svgs/FlexNoWrapIcon";
import { FlexWrapIcon } from "./svgs/FlexWrapIcon";
import { FlexJCCenterIcon } from "./svgs/FlexJCCenterIcon";
import { FlexJCFlexStartIcon } from "./svgs/FlexJCFlexStartIcon";
import { FlexJCFlexEndIcon } from "./svgs/FlexJCFlexEndIcon";
import { FlexJCSpaceAroundIcon } from "./svgs/FlexJCSpaceAroundIcon";
import { FlexJCSpaceBetweenIcon } from "./svgs/FlexJCSpaceBetweenIcon";
import { FlexJCSpaceEvenly } from "./svgs/FlexJCSpaceEvenly";

const cards = [
  {
    title: "Art",
    img: "fa-solid fa-swatchbook",
  },
  {
    title: "Bussiness",
    img: "fa-solid fa-briefcase",
  },
  {
    title: "Design",
    img: "fa-solid fa-compass-drafting",
  },

  {
    title: "Philosophy",
    img: "fa-solid fa-yin-yang",
  },
  {
    title: "Money",
    img: "fa-solid fa-coins",
  },
  {
    title: "Love",
    img: "fa-solid fa-heart",
  },
  {
    title: "Leadership and management",
    img: "fa-solid fa-medal",
  },
  {
    title: "Religion",
    img: "fa-solid fa-person-praying",
  },
  {
    title: "Entrepreneurship",
    img: "fa-solid fa-handshake",
  },

  {
    title: "Health and Nutrition",
    img: "fa-solid fa-carrot",
  },
  {
    title: "Health",
    img: "fa-solid fa-heart-circle-plus",
  },
  {
    title: "Politics",
    img: "fa-solid fa-microphone-lines",
  },
  {
    title: "Marketing",
    img: "fa-solid fa-money-bill-trend-up",
  },
  {
    title: "Communication",
    img: "fa-solid fa-satellite",
  },
  {
    title: "Science",
    img: "fa-solid fa-microscope",
  },
  {
    title: "Biography",
    img: "fa-solid fa-book-open-reader",
  },
  {
    title: "Education",
    img: "fa-solid fa-graduation-cap",
  },
];

export default function App() {
  const [flexDirection, setFlexDirection] = React.useState("row");

  const [flexWrap, setFlexWrap] = React.useState("wrap");

  const [alignItems, setAlignItems] = React.useState("normal");

  const [alignContent, setAlignContent] = React.useState("normal");

  const [justifyContent, setJustifyContent] = React.useState("normal");

  return (
    <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      <section className="button-list">
        <div>
          <h1>flex-direction: {flexDirection}</h1>
          <ToggleButtonGroup
            value={flexDirection}
            exclusive
            onChange={(event, newAlignment) => {
              if (newAlignment !== null) {
                setFlexDirection(newAlignment);
              }
            }}
            aria-label="text alignment"
          >
            <ToggleButton value="row" aria-label="left aligned">
              <FlexRowIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="column" aria-label="centered">
              <FlexColumnIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="row-reverse" aria-label="right aligned">
              <FlexRowIcon
                color="hsl(207deg 70% 59%)"
                transform="scale(-1, 1)"
              />
            </ToggleButton>
            <ToggleButton value="column-reverse" aria-label="justified">
              <FlexColumnIcon
                color="hsl(207deg 70% 59%)"
                transform="rotate(180deg) scale(-1, 1)"
              />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div>
          <h1>flex-wrap: {flexWrap}</h1>
          <ToggleButtonGroup
            value={flexWrap}
            exclusive
            onChange={(event, newAlignment) => {
              if (newAlignment !== null) {
                setFlexWrap(newAlignment);
              }
            }}
            aria-label="text alignment"
          >
            <ToggleButton value="nowrap" aria-label="left aligned">
              <FlexNoWrapIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="wrap" aria-label="centered">
              <FlexWrapIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="wrap-reverse" aria-label="centered">
              <FlexWrapIcon
                color="hsl(207deg 70% 59%)"
                transform="rotate(180deg) scale(-1, 1)"
              />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div>
          <h1>align-items: {alignItems}</h1>
          <ToggleButtonGroup
            value={alignItems}
            exclusive
            onChange={(event, newAlignment) => {
              if (newAlignment !== null) {
                setAlignItems(newAlignment);
              }
            }}
            aria-label="text alignment"
          >
            <ToggleButton value="center" aria-label="centered">
              <FlexColumnIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="flex-start" aria-label="centered">
              <FlexColumnIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="flex-end" aria-label="centered">
              <FlexColumnIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="stretch" aria-label="centered">
              <FlexColumnIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="baseline" aria-label="centered">
              <FlexColumnIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div>
          <h1>align-content: {alignContent}</h1>
          <ToggleButtonGroup
            value={alignContent}
            exclusive
            onChange={(event, newAlignment) => {
              if (newAlignment !== null) {
                setAlignContent(newAlignment);
              }
            }}
            aria-label="text alignment"
          >
            <ToggleButton value="center" aria-label="centered">
              <FlexColumnIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="flex-start" aria-label="centered">
              <FlexColumnIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="flex-end" aria-label="centered">
              <FlexColumnIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="stretch" aria-label="centered">
              <FlexColumnIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="space-around" aria-label="centered">
              <FlexColumnIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="space-between" aria-label="centered">
              <FlexColumnIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="baseline" aria-label="centered">
              <FlexColumnIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div>
          <h1>justify-content: {justifyContent}</h1>
          <ToggleButtonGroup
            value={justifyContent}
            exclusive
            onChange={(event, newAlignment) => {
              if (newAlignment !== null) {
                setJustifyContent(newAlignment);
              }
            }}
            aria-label="text alignment"
          >
            <ToggleButton value="center" aria-label="centered">
              <FlexJCCenterIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="flex-start" aria-label="centered">
              <FlexJCFlexStartIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="flex-end" aria-label="centered">
              <FlexJCFlexStartIcon
                transform="scale(-1, 1)"
                color="hsl(207deg 70% 59%)"
              />
            </ToggleButton>
            <ToggleButton value="space-around" aria-label="centered">
              <FlexJCSpaceAroundIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="space-between" aria-label="centered">
              <FlexJCSpaceBetweenIcon color="hsl(207deg 70% 59%)" />
            </ToggleButton>
            <ToggleButton value="space-evenly" aria-label="centered">
              <FlexJCSpaceEvenly color="hsl(207deg 70% 59%)" />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </section>
      <PillList
        flexDirection={flexDirection}
        flexWrap={flexWrap}
        alignItems={alignItems}
        alignContent={alignContent}
        justifyContent={justifyContent}
      />
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

function PillList({
  flexDirection,
  flexWrap,
  alignItems,
  alignContent,
  justifyContent,
}) {
  return (
    <div
      className="card-list"
      // className={`card-list ${flexWrap}`}
      style={{
        flexDirection,
        alignItems,
        flexWrap,
        alignContent,
        justifyContent,
      }}
    >
      {cards.map((card) => (
        <Pill key={card.title} card={card} />
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
