import "./block.css";
import Card, { ItemType } from "./card";

interface PropType {
  title?: string;
  items: ItemType[];
  shiftBlock: (item: ItemType, block?: string) => void;
}

const Block = ({ title, items, shiftBlock }: PropType) => {
  const handleShiftBlock = (item: ItemType) => {
    shiftBlock(item, title);
  };
  return (
    <div className={`${title ? "box" : "block"}`}>
      {title && <div className="header">{title}</div>}
      {items.map((item, index) => (
        <Card key={index} item={item} shiftItem={handleShiftBlock} />
      ))}
    </div>
  );
};

export default Block;
