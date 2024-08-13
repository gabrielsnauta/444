import { useState, useEffect, useRef } from "react";
import { TextAnimation } from "./components/TextAnimation";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Music from "./components/Music";
import Cena_Context from "./components/Cena_2";

const containerVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0 },
  exit: { x: "100vw" },
};

const Img_Styled = styled.img`
  height: 100vh;
  position: absolute;
  bottom: 0;
  z-index: -1;
`;
const CImg = styled.section`
  position: absolute;
  bottom: 0;
  z-index: -1;
`;
const Content_Styled = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  flex-direction: column;
`;

function Bt_continuar(props) {
  const [op, setop] = useState("0");
  useEffect(() => {
    setTimeout(() => {
      setop("1");
    }, props.i);
  }, []);

  return (
    <button
      onClick={props.onClick}
      style={{
        opacity: op,
        display: "flex",
        padding: "2px 12px",
        transition: "opacity 1s",
      }}
    >
      <img style={{ width: "28px" }} src="/continuar.png" />
    </button>
  );
}

function Content1(props) {
  const [cena, setcena] = useState(0);

  const [t1, sett1] = useState(false);
  const [t2, sett2] = useState(false);

  const txt1 =
    "Estar longe de você é minha maior dor. Poder finalmente te abraçar e te beijar e a minha motivação.";
  const txt2 =
    "Não importa os desafios, a dificuldade e o tempo que vai levar, eu vou te encontrar finalmente e te resgatar desse castelo sombrio(Manaus).";

  useEffect(() => {
    setTimeout(() => {
      setcena(1);
    }, 0);
  }, []);

  function C1() {
    const [op, setop] = useState("0");
    useEffect(() => {
      setTimeout(() => {
        setop("1");
      }, 0);
    }, []);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextAnimation text={txt1} i={50} />
        <Bt_continuar onClick={() => setcena(2)} i={4000} />
      </div>
    );
  }

  function C2() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextAnimation text={txt2} i={50} />
        <Bt_continuar onClick={() => props.setc(4)} i={5000} />
      </div>
    );
  }

  return (
    <div>
      <Img_Styled src="/distancia.png" />
      <Content_Styled>
        {cena == 1 && <C1 />}
        {cena == 2 && <C2 />}
      </Content_Styled>
    </div>
  );
}

function Content2(props) {
  const [cena, setcena] = useState(0);

  const [t1, sett1] = useState(false);
  const [t2, sett2] = useState(false);

  const txt1 =
    "Quando estivermos juntos em fim, vamos ter os melhores anos das nossas vidas";
  const txt2 =
    "Vamos realizar nos nossos sonhos, fazer juntos tudo que nos faz felizes, desbravar a realidade e nos tornar quem nascemos pra ser";

  useEffect(() => {
    setTimeout(() => {
      setcena(1);
    }, 0);
  }, []);

  function C1() {
    const [op, setop] = useState("0");
    useEffect(() => {
      setTimeout(() => {
        setop("1");
      }, 0);
    }, []);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextAnimation text={txt1} i={50} />
        <Bt_continuar onClick={() => setcena(2)} i={3000} />
      </div>
    );
  }

  function C2() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextAnimation text={txt2} i={50} />
        <Bt_continuar onClick={() => props.setc(5)} i={4000} />
      </div>
    );
  }

  return (
    <div>
      <Img_Styled src="/viagem.jpg" />
      <Content_Styled>
        {cena == 1 && <C1 />}
        {cena == 2 && <C2 />}
      </Content_Styled>
    </div>
  );
}

function Content3(props) {
  const [cena, setcena] = useState(0);

  const [t1, sett1] = useState(false);
  const [t2, sett2] = useState(false);

  const txt1 =
    "E no futuro... Vamos contruir uma linda familia juntos, vamos colocar no mundo pessoas incriveis que vão fazer coisas incriveis";
  const txt2 =
    "Te ver grávida de min é o pensamento intrusivo que eu não quero deixar de ter amor, eu quero ter lindos 15 filhos com voce rs";

  useEffect(() => {
    setTimeout(() => {
      setcena(1);
    }, 0);
  }, []);

  function C1() {
    const [op, setop] = useState("0");
    useEffect(() => {
      setTimeout(() => {
        setop("1");
      }, 0);
    }, []);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextAnimation text={txt1} i={50} color="black" />
        <Bt_continuar onClick={() => setcena(2)} i={5000} />
      </div>
    );
  }

  function C2() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextAnimation text={txt2} i={50} color="black" />
        <Bt_continuar onClick={() => props.setc(6)} i={5000} />
      </div>
    );
  }

  return (
    <div>
      <CImg>
        <Img_Styled src="/pai.png" />
      </CImg>
      <Content_Styled>
        {cena == 1 && <C1 />}
        {cena == 2 && <C2 />}
      </Content_Styled>
    </div>
  );
}

function Content4(props) {
  const [cena, setcena] = useState(0);

  const [t1, sett1] = useState(false);
  const [t2, sett2] = useState(false);

  const txt1 =
    "Eu sei que as vezes eu te deixei triste.. te peço perdão por isso, eu 'ainda' não sou perfeito rs, mas por você eu quero melhorar todos os dias";
  const txt2 =
    "Eu prometo aprender com meus erros, e diferente das promessas de ficar acordado, essa eu sempre cumpro rs";

  useEffect(() => {
    setTimeout(() => {
      setcena(1);
    }, 0);
  }, []);

  function C1() {
    const [op, setop] = useState("0");
    useEffect(() => {
      setTimeout(() => {
        setop("1");
      }, 0);
    }, []);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextAnimation text={txt1} i={50} color="black" />
        <Bt_continuar onClick={() => setcena(2)} i={5000} />
      </div>
    );
  }

  function C2() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextAnimation text={txt2} i={50} color="black" />
        <Bt_continuar onClick={() => props.setc(7)} i={4000} />
      </div>
    );
  }

  return (
    <div>
      <CImg>
        <Img_Styled src="/dormindo.png" />
      </CImg>
      <Content_Styled>
        {cena == 1 && <C1 />}
        {cena == 2 && <C2 />}
      </Content_Styled>
    </div>
  );
}

function Content5() {
  const [cena, setcena] = useState(0);

  const [t1, sett1] = useState(false);
  const [t2, sett2] = useState(false);

  const txt1 =
    "Um belíssimo futuro nos aguarda princesa, nós vamos ser parceiros pra sempre, até ficarmos beem velinhos e chatos (e ainda safados rs)";
  const txt2 =
    "Na hora certa vamos nos casar, e quando essa hora chegar, será o momento mais feliz das nossas vidas";
  const txt3 =
    '"Melhor é serem dois do que um, porque têm melhor paga do seu trabalho. Porque se um cair, o outro levanta o seu companheiro; mas ai do que estiver só; pois, caindo, não haverá outro que o levante."';

  useEffect(() => {
    setTimeout(() => {
      setcena(1);
    }, 0);
  }, []);

  function C1() {
    const [op, setop] = useState("0");
    useEffect(() => {
      setTimeout(() => {
        setop("1");
      }, 0);
    }, []);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextAnimation text={txt1} i={50} color="black" />
        <Bt_continuar onClick={() => setcena(2)} i={0} />
      </div>
    );
  }

  function C2() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextAnimation text={txt2} i={50} color="black" />
        <Bt_continuar onClick={() => setcena(3)} i={3000} />
      </div>
    );
  }

  function C3() {
    return (
      <div
        style={{
          margin: "70px 0 0 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "120px", transform: "translateX(-60px)" }}
          src="/seta.png"
        />

        <audio controls src="/audio.m4a" style={{ margin: "0 0 10px 0 " }} />
        <Bt_continuar onClick={() => setcena(4)} i={2000} />
      </div>
    );
  }

  function C4() {
    return (
      <Content_Styled>
        <TextAnimation text={txt3} i={50} color="black" />
        <TextAnimation text="eclesiastes 4:9" i={50} color="black" />
      </Content_Styled>
    );
  }

  return (
    <div>
      <CImg>
        <Img_Styled src="/casamento.png" />
      </CImg>
      <Content_Styled>
        {cena == 1 && <C1 />}
        {cena == 2 && <C2 />}
        {cena == 3 && <C3 />}
        {cena == 4 && <C4 />}
      </Content_Styled>
    </div>
  );
}

function App() {
  const audioRef = useRef(null);
  const [t, sett] = useState(false);
  const [pag, setpag] = useState(1);
  const [txt_1, settxt_1] = useState(false);
  const [animation_music, setanimation_music] = useState(false);
  const [play_music, setplay_music] = useState(false);
  const [cena, setcena] = useState(1);

  const [cena_contexto, setCena_contexto] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.muted = true;
    setTimeout(() => {
      setanimation_music(true);
    }, 1000);
  }, []);

  function Play_Music() {
    const audio = audioRef.current;
    audio.play().then(() => {
      audio.muted = false;
      setplay_music(true);
    });
    setTimeout(() => {
      setcena(2);
      setCena_contexto(true);
      setTimeout(() => {
        setcena(3);
      }, 11500);
    }, 1000);
  }

  return (
    <div style={{ position: "fixed", bottom: "0" }}>
      {cena == 1 && (
        <Music
          musicRef={play_music}
          play={Play_Music}
          setanimation={setanimation_music}
          animation={animation_music}
        />
      )}
      {cena == 2 && <Cena_Context start={cena_contexto} />}
      {cena >= 3 && (
        <AnimatePresence>
          <motion.div
            key={`${cena}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.2 }}
            exit="exit"
          >
            {cena == 3 && <Content1 setc={(i) => setcena(i)} />}
            {cena == 4 && <Content2 setc={(i) => setcena(i)} />}
            {cena == 5 && <Content3 setc={(i) => setcena(i)} />}
            {cena == 6 && <Content4 setc={(i) => setcena(i)} />}
            {cena == 7 && <Content5 setc={(i) => setcena(i)} />}
          </motion.div>
        </AnimatePresence>
      )}
      <audio ref={audioRef} src="/music.mp3" loop />
    </div>
  );
}

export default App;
