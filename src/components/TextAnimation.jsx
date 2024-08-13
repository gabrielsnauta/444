import { useEffect, useState } from "react";

export function TextAnimation(props) {
  const [text, setText] = useState("");
  const [t, sett] = useState(false);

  useEffect(() => {
    let typingInterval;
    sett(true);

    const startTyping = () => {
      sett(true);
      let i = 0;
      typingInterval = setInterval(() => {
        setText(props.text.substring(0, i + 1));
        i++;
        if (i === props.text.length) {
          clearInterval(typingInterval);
        }
      }, props.i); // Ajuste o intervalo para controlar a velocidade da animação
    };

    if (t) {
      startTyping();
    }

    return () => clearInterval(typingInterval);
  }, [t, props.text]);

  return (
    <p
      style={{
        textShadow: "1px 1px 2px #000000",
        opacity: "1",
        maxWidth: "300px",
        fontSize: props.fontSize != null ? props.fontSize : "18px",
        fontWeight: props.fontWeight,
        color: props.color,
      }}
    >
      {text}
    </p>
  );
}
