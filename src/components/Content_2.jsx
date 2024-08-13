export function Content_2() {
  return (
    <div>
      <Img_Styled src="/viagem.jpg" />
      <Content_Styled>
        <TextAnimation text="Teste" t={t} sett={sett} i={50} />
        <button onClick={() => setpag(pag + 1)}>bt</button>
      </Content_Styled>
    </div>
  );
}
