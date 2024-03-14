import "./card.css";
export type ItemType = {
  name: string;
  type: string;
};

interface PropsType {
  item: { name: string; type: string };
  shiftItem: (item: ItemType) => void;
}

const Card = ({item, shiftItem}: PropsType) => {
  return (
    <button className="card" onClick={() => shiftItem(item)}>
      {item.name}
    </button>
  );
};

export default Card;