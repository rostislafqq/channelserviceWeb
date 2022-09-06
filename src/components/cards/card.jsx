const Card = ({ body, company, name, title, url }) => {
  return (
    <div className="container__card">
      <div className="container__cardHeader">
        <img className="container__img" src={url} alt="photo" />
        <div className="container__headerInfo">
          <h3 className="container__headerText container__headerAut">Autor: {name}</h3>
          <h3 className="container__headerText container__headerComp">Company: {company}</h3>
        </div>
      </div>
      <div className="container__cardBody">
        <h3 className="container__cardTitle">Title:{title}</h3>

        <div className="container__cardInfo">{body}</div>
      </div>
    </div>
  );
};
export default Card;
