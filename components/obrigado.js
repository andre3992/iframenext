import right from "../public/endesa-c2c-check.svg";

const Obrigado = () => {
  return (
    <div style={{ height: "400px", width: "295px" }}>
      <img className="checkIcon" src={right} width="60px" />
      <div className="obrigado">Muito Obrigada!</div>

      <div className="obrigadoBody">
        Os seus dados foram registados.
        <br />
        Entraremos em contacto consigo
        <br /> o mais rápido possivel. Até já!
      </div>
    </div>
  );
};
export default Obrigado;
