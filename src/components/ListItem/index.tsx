import { SWPeopleProps } from "../../hooks/useSWData";
import "./style.css";

const ListItem = (props: SWPeopleProps) => {
  const editedAt = new Date(props.edited).toLocaleDateString("en-GB");

  return (
    <div className="list-item-container">
      <span className="list-item-name">{props.name}</span>
      <div className="item-row">
        <div className="item-col">
          <span className="item-label">Height:</span>
          <span>{props.height}</span>
        </div>
        <div className="item-col">
          <span className="item-label">Weight:</span>
          <span>{props.mass}kg</span>
        </div>
      </div>
      <div className="item-row">
        <div className="item-col">
          <span className="item-label">Hair color:</span>
          <span>{props.hair_color}</span>
        </div>
        <div className="item-col">
          <span className="item-label">Skin:</span>
          <span>{props.skin_color}</span>
        </div>
      </div>
      <div className="item-row">
        <span className="item-label">Gender:</span>
        <span>{props.gender}</span>
      </div>
      <span className="item-update">Last update {editedAt}</span>
    </div>
  );
};

export default ListItem;
