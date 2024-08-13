export function Content_1() {
  return (
    <div>
      <Img_Styled src="/distancia.png" />
      <Content_Styled>
        <TextAnimation text="Teste" t={txt_1} sett={settxt_1} i={50} />
        <button onClick={() => settxt_1(true)}>bt</button>
      </Content_Styled>
    </div>
  );
}
