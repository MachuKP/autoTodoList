import { useEffect, useRef, useState } from "react";
import Block from "./components/block";
import { data } from "./data";
import { ItemType } from "./components/card";
import "./App.css";

function App() {
  const [all, setAll] = useState<ItemType[]>([]);
  const [fruits, setFruits] = useState<ItemType[]>([]);
  const allRef = useRef<ItemType[]>([]);
  const fruitsRef = useRef<ItemType[]>([]);
  const vegetablesRef = useRef<ItemType[]>([]);
  const [vegetables, setVegetables] = useState<ItemType[]>([]);

  useEffect(() => {
    allRef.current = data;
    setAll(allRef.current)
  }, []);

  const handleShiftBlock = (item: ItemType, block?: string | "") => {
    if (block) {
      shiftWithBlock(item, block);
    } else {
      shiftWithoutBlock(item);
    }
  };

  const delay = () => new Promise<number>(resolve => setTimeout(resolve, 5000))

  const shiftWithBlock = async(item: ItemType, block: string | "") => {
    let temp = [];
    let allTemp = [];
    allTemp = [...allRef.current];
    if (block === "Fruit") {
      temp = [...fruitsRef.current];
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].name === item.name) {
          temp.splice(i, 1);
          fruitsRef.current = temp;
          setFruits(fruitsRef.current)
        }
      }
    } else if (block === "Vegetable") {
      temp = [...vegetablesRef.current];
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].name === item.name) {
          temp.splice(i, 1);
          vegetablesRef.current = temp;
          setVegetables(vegetablesRef.current)
        }
      }
    }
    allTemp.push(item);
    allRef.current = allTemp;
    setAll(allRef.current)
  };

  const shiftWithoutBlock = async (item: ItemType) => {
    let temp = [];
    let allTemp = [];
    allTemp = [...allRef.current];
    if (item.type === "Fruit") {
      temp = [...fruitsRef.current];
      temp.push(item);
      fruitsRef.current = temp
      setFruits(fruitsRef.current)
    } else {
      temp = [...vegetablesRef.current];
      temp.push(item);
      vegetablesRef.current = temp;
      setVegetables(vegetablesRef.current)
    }
    for (let j = 0; j < allTemp.length; j++) {
      if (allTemp[j].name === item.name) {
        allTemp.splice(j, 1);
        allRef.current = allTemp;
        setAll(allRef.current)
      }
    }
    await delay()
    shiftBack(item)
  };

  const shiftBack = (item: ItemType) => {
    if (!allRef.current.includes(item)) {
      shiftWithBlock(item, item.type)
    }
  };

  return (
    <div className="container">
      <Block items={all} shiftBlock={handleShiftBlock} />
      <Block
        title="Fruit"
        items={fruits}
        shiftBlock={handleShiftBlock}
      />
      <Block
        title="Vegetable"
        items={vegetables}
        shiftBlock={handleShiftBlock}
      />
    </div>
  );
}

export default App;
