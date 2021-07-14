import axios from "axios";

export const getMyFriends = async function getMyFriends(githubUser) {
  return await axios.get(
    `https://api.github.com/users/${githubUser}/followers`
  );
};

export const getMyCommunities = () => {
  return [
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
  ];
};
