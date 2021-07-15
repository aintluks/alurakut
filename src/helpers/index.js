import axios from "axios";
const { SiteClient } = require("datocms-client");

const client = new SiteClient(process.env.NEXT_PUBLIC_DATO_TOKEN);

export const getFollowing = async (githubUser) => {
  try {
    return await axios.get(
      `https://api.github.com/users/${githubUser}/following`
    );
  } catch (error) {
    console.log("deu ruim irmao ", error);
  }
};

export const getMyCommunities = async () => {
  try {
    return await client.items.all();
  } catch (error) {
    console.log("deu ruim irmao ", error);
  }
};

export const addCommunity = async (
  { title, imageUrl, communityUrl },
  comunidades,
  setComunidades
) => {
  try {
    const response = await client.items.create({
      itemType: "967829",
      title: title,
      imageUrl: imageUrl,
      communityUrl: communityUrl,
    });

    setComunidades([response, ...comunidades]);
  } catch (error) {
    console.log("deu ruim irmao ", error);
  }
};
