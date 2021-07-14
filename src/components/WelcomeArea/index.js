import { addCommunity } from "../../helpers";
import { OrkutNostalgicIconSet } from "../../lib/AlurakutCommons";
import Box from "../Box";

export default function WelcomeArea(props) {
  function handleCriaComunidade(e) {
    e.preventDefault();
    const dadosDoForm = new FormData(e.target);

    const comunidade = {
      title: dadosDoForm.get("title"),
      imageUrl:
        dadosDoForm.get("image") ||
        `https://picsum.photos/300/300?${new Date().toISOString()}`,
      communityUrl: dadosDoForm.get("community") || "#",
    };

    addCommunity(comunidade, props.comunidades, props.setComunidades);
  }

  return (
    <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
      <Box>
        <h1 className="title">Bem vinde, {props.githubUser}</h1>
        <OrkutNostalgicIconSet />
      </Box>

      <Box>
        <h2 className="subTitle">O que você deseja fazer?</h2>

        <form onSubmit={handleCriaComunidade}>
          <div>
            <input
              placeholder="Qual vai ser o nome da sua comunidade?"
              name="title"
              aria-label="Qual vai ser o nome da sua comunidade?"
              type="text"
            />
          </div>

          <div style={{ display: "flex" }}>
            <input
              placeholder="URL de capa"
              name="image"
              className="inputURL"
              aria-label="Coloque uma URL para usarmos de capa"
              type="text"
            />
            <input
              placeholder="URL da comunidade"
              name="community"
              className="inputURL"
              aria-label="Coloque a URL da comunidade"
              type="text"
            />
          </div>
          <button>Criar comunidade</button>
        </form>
      </Box>
    </div>
  );
}
