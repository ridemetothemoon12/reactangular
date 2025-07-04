import { PropsWithChildren, useState } from "react";
import DataAttritubePattern from "../../shared/lib/data-attribute-pattern";
import useLocalStorage from "../../shared/lib/use-local-storage";

const HomeIndex = () => {
  const [data, setData] = useLocalStorage("test", "wow");
  const [event, setEvent] = useState("");

  return (
    <div>
      <DataAttritubePattern event={event} />
      <button onClick={() => setData("i am test!1")}>set Item!!1</button>
      <button onClick={() => setData("i am test!2")}>set Item!!2</button>
      <p>{data}</p>

      <form onSubmit={() => console.log("wow")}>
        <button>test!</button>
      </form>
      <button onClick={() => setEvent("1")}>
        <p id={"1"} data-change-text="false" className="tester">
          1. On event to change color!
        </p>
      </button>
      <button onClick={() => setEvent("2")}>
        <p id={"2"} data-change-text="false" className="tester">
          2. On event to change color!
        </p>
      </button>
    </div>
  );
};

export default HomeIndex;
