import { FiberManualRecordIcon, InfoIcon } from "../../icons";
import "./Widgets.scss";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(`Comin' in hot`, "Top news - 5504 readers")}
      {newsArticle("Javascript updates", "Code - 9774 readers")}
      {newsArticle("Tesla hits new highs", "Car & Auto - 4493 readers")}
      {newsArticle("Bitcoin breaks $22k", "Code - 18476 readers")}
      {newsArticle("Is Redux too good?", "Top news - 1349 readers")}
    </div>
  );
};

export default Widgets;
