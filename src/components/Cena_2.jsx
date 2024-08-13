import { useEffect, useState } from "react";
import { TextAnimation } from "./TextAnimation";

export default function Cena_Context() {
  const [cena, setcena] = useState(0);

  const [t1, sett1] = useState(false);
  const [t2, sett2] = useState(false);

  const txt1 =
    "Como as palavras não são suficientes para expressar o amor que eu sinto por você, eu decide usar Javascipt, html e css. Feliz 4 meses de namoro S2";
  const txt2 = "Espero que goste princesa =)";

  useEffect(() => {
    setTimeout(() => {
      setcena(1);
    }, 0);
    setTimeout(() => {
      setcena(2);
    }, 9000);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        transform: "translateY(-100px)",
      }}
    >
      {cena == 1 && <TextAnimation text={txt1} t={t1} sett={sett1} i={50} />}
      {cena == 2 && <TextAnimation text={txt2} t={t2} sett={sett2} i={50} />}
    </div>
  );
}
