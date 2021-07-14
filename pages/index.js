import React, { useEffect, useState } from "react";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import styled from "styled-components";
import axios from "axios";

function ProfileSideBar(props) {
  return (
    <Box as="aside">
      <img
        style={{ borderRadius: "8px" }}
        src={`https://github.com/${props.githubUser}.png`}
      />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>

      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

function Cards(props) {
  return (
    <ul>
      {props.array.map((item, indice) => {
        if (indice < 6) {
          return (
            <li key={item.id}>
              <a href={item.community || item.html_url} target="_blank">
                <img src={item.image || item.avatar_url} />
                <span>{item.title || item.login}</span>
              </a>
            </li>
          );
        }
      })}
    </ul>
  );
}

async function getMyFriends(githubUser) {
  return await axios.get(
    `https://api.github.com/users/${githubUser}/followers`
  );
}

export default function Home() {
  const githubUser = "aintluks";

  const [pessoasComunidade, setPessoasComunidade] = useState([]);

  useEffect(async () => {
    const response = await getMyFriends(githubUser);
    setPessoasComunidade(response.data);
  }, []);

  const [comunidades, setComunidades] = React.useState([
    {
      id: "123123123",
      title: "Eu odeio acordar cedo",
      image: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
      community: "#",
    },
    {
      id: "123123124",
      title: "ASSISTA Invencible",
      image:
        "https://vortexcultural.com.br/images/2021/05/Invencible-1-Temorada.jpeg",
      community: "#",
    },
    {
      id: "123123125",
      title: "RICK AND MORTY 5TEMP EP2",
      image:
        "https://kanto.legiaodosherois.com.br/w1200-h628-cfill/wp-content/uploads/2021/05/legiao_mwStbQnA3_LF.jpg.jpeg",
      community: "#",
    },
  ]);

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vinde</h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>

            <form
              onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);
                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get("title"),
                  image:
                    dadosDoForm.get("image") ||
                    `https://picsum.photos/300/300?${new Date().toISOString()}`,
                  community: dadosDoForm.get("community") || "#",
                };
                setComunidades([...comunidades, comunidade]);
              }}
            >
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>

              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                  type="text"
                />
              </div>

              <div>
                <input
                  placeholder="Coloque a URL da comunidade"
                  name="community"
                  aria-label="Coloque a URL da comunidade"
                  type="text"
                />
              </div>
              <button>Criar comunidade</button>
            </form>
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
            <Cards array={pessoasComunidade} />
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({comunidades.length})</h2>
            <Cards array={comunidades} />
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
