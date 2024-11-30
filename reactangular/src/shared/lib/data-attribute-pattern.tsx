import { useEffect } from "react";

const DataAttritubePattern = ({ event }: { event: boolean }) => {
  useEffect(() => {
    const onClickEvent = () => {
      document
        .querySelector(".tester")
        ?.setAttribute("data-change-text", event ? "true" : "false");
    };
    window.addEventListener("click", onClickEvent);

    return () => {
      window.removeEventListener("click", onClickEvent);
    };
  }, [event]);

  return null;
};

export default DataAttritubePattern;
