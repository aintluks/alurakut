import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import styled from "styled-components";

function ProfileSideBar(props) {
  return (
    <Box>
      <img
        style={{ borderRadius: "8px" }}
        src={`https://github.com/${props.githubUser}.png`}
      />
    </Box>
  );
}

export default function Home() {
  const githubUser = "aintluks";

  const pessoasComunidade = [
    "rafaballerini",
    "juunegreiros",
    "peas",
    "omariosouto",
    "marcobrunodev",
    "felipefialho",
  ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>

        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasComunidade.length})
            </h2>

            <ul>
              {pessoasComunidade.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${githubUser}`} key={githubUser}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          {/* <Box></Box> */}
        </div>
      </MainGrid>
    </>
  );
}
