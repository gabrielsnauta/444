export function Content_3() {
  return (
    <div>
      <Img_Styled src="/casamento.png" />
      <Content_Styled>
        <TextAnimation text="Teste" t={t} sett={sett} i={50} />
        <button onClick={() => setpag(pag + 1)}>bt</button>
      </Content_Styled>
    </div>
  );
}
