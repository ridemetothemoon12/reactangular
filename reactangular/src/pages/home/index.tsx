import { useState } from "react";
import DataAttritubePattern from "../../shared/lib/data-attribute-pattern";
import useLocalStorage from "../../shared/lib/use-local-storage";

const HomeIndex = () => {
  const [data, setData] = useLocalStorage("test", "wow");
  const [event, setEvent] = useState(false);

  return (
    <div>
      <DataAttritubePattern event={event} />
      <button onClick={() => setData("i am test!1")}>set Item!!1</button>
      <button onClick={() => setData("i am test!2")}>set Item!!2</button>
      <p>{data}</p>

      <button onClick={() => setEvent((prev) => !prev)}>set Event!</button>
      <p data-change-text="false" className="tester">
        On event to change color!
      </p>
    </div>
  );
};

export default HomeIndex;
