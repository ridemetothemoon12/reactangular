import useLocalStorage from "../../shared/lib/use-local-storage";

const HomeIndex = () => {
  const [data, setData] = useLocalStorage("test", "wow");

  return (
    <div>
      <button onClick={() => setData("i am test!1")}>set Item!!1</button>
      <button onClick={() => setData("i am test!2")}>set Item!!2</button>
      <p>{data}</p>
    </div>
  );
};

export default HomeIndex;
