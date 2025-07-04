import { useEffect } from "react";

const DataAttritubePattern = ({ event }: { event: string }) => {
  useEffect(() => {
    document.querySelectorAll(`.tester`).forEach((element) => {
      return element?.setAttribute("data-change-text", "false");
    });
    const onClickEvent = () => {
      document.getElementById(event)?.setAttribute("data-change-text", "true");
    };
    window.addEventListener("click", onClickEvent);

    return () => {
      window.removeEventListener("click", onClickEvent);
    };
  }, [event]);

  return null;
};

export default DataAttritubePattern;
