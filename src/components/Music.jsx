import { useRef } from "react";
import styled from "styled-components";
import "./Music.css";
import { motion } from "framer-motion";
const Line = styled.div`
  background-color: white;
  width: 150px;
  height: 3px;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Music(props) {
  const contentRef = useRef(null);
  function Play() {
    props.setanimation(false);
    props.play();
  }

  function Te() {
    if (props.animation == false) {
      return "1";
    } else {
      return "0";
    }
  }

  return (
    <motion.div
      key="cena1"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 2 }}
      style={{
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        style={{
          width: "100px",
          transform: "translateX(-30px)",
          transition: "opacity 0.5s",
          opacity: `${props.animation ? "1" : "0"}`,
        }}
        src="/seta_play.png"
      />
      <div
        ref={contentRef}
        style={{ borderColor: props.musicRef ? "blue" : "white" }}
        className={props.animation ? "open e" : "close e"}
      >
        <img
          onClick={Play}
          style={{ width: "38px" }}
          src={props.musicRef == true ? "/playon.png" : "/play.png"}
        />
        <section>
          <Line />
        </section>
      </div>
    </motion.div>
  );
}
