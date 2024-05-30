import "./styles.css";

import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";


export default function Card({ //   props que recebe os valores da API
  id,
  imagemUrl,
  titulo,
  resumo,
  linhasDeCodigo,
  compartilhamentos,
  comentarios,
  usuario,
}) {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={imagemUrl} alt="Capa do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>

        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={Code} alt="códigos" />
              {linhasDeCodigo}
            </li>
            <li>
              <img src={Share} alt="Compartilhamentos" />
              {compartilhamentos}
            </li>
            <li>
              <img src={Chat} alt="comentários" />
              {comentarios}
            </li>
          </ul>
          <div className="rodape__usuario">
            <img src={usuario.imagem} alt="Imagem do usuário" />
            {usuario.nome}
          </div>
        </div>
      </div>
    </article>
  );
}
