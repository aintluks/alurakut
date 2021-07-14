import React, { useEffect, useState } from "react";
import { AlurakutMenu } from "../src/lib/AlurakutCommons";
import MainGrid from "../src/components/MainGrid";
import ProfileSideBar from "../src/components/ProfileArea";
import WelcomeArea from "../src/components/WelcomeArea";
import ProfileRelationsArea from "../src/components/ProfileRelationsArea";
import { getMyCommunities, getMyFriends } from "../src/helpers";

export default function Home() {
  const githubUser = "aintluks";

  const [pessoasComunidade, setPessoasComunidade] = useState([]);

  const [comunidades, setComunidades] = useState(getMyCommunities());

  useEffect(async () => {
    const response = await getMyFriends(githubUser);
    setPessoasComunidade(response.data);
  }, []);

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />

      <MainGrid>
        <ProfileSideBar githubUser={githubUser} />

        <WelcomeArea
          githubUser={githubUser}
          comunidades={comunidades}
          setComunidades={setComunidades}
        />

        <ProfileRelationsArea
          pessoasComunidade={pessoasComunidade}
          comunidades={comunidades}
        />
      </MainGrid>
    </>
  );
}
