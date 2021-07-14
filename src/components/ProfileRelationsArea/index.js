import { ProfileRelationsBoxWrapper } from "../ProfileRelations";

function Cards(props) {
  return (
    <ul>
      {props.array.map((item, indice) => {
        if (indice < 6) {
          return (
            <li key={item.id}>
              <a href={item.communityUrl || item.html_url} target="_blank">
                <img src={item.imageUrl || item.avatar_url} />
                <span>{item.title || item.login}</span>
              </a>
            </li>
          );
        }
      })}
    </ul>
  );
}

export default function ProfileRelationsArea(props) {
  return (
    <div
      className="profileRelationsArea"
      style={{ gridArea: "profileRelationsArea" }}
    >
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Pessoas da Comunidade ({props.pessoasComunidade.length})
        </h2>
        <Cards array={props.pessoasComunidade} />
      </ProfileRelationsBoxWrapper>

      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">Comunidades ({props.comunidades.length})</h2>
        <Cards array={props.comunidades} />
      </ProfileRelationsBoxWrapper>
    </div>
  );
}
