import { useCallback, useSyncExternalStore } from "react";

const useLocalStorage = (key: string, initValues?: string) => {
  const data = useSyncExternalStore(
    (onChange) => {
      const onCustomLocalStorageEvent: EventListener = (e: Event) => {
        (e as CustomEvent).detail === key ? onChange() : null;
      };

      window.addEventListener("storage", onChange);
      window.addEventListener(
        "custom-localStorage-event",
        onCustomLocalStorageEvent
      );

      return () => {
        window.removeEventListener("storage", onChange);
        window.removeEventListener(
          "custom-localStorage-event",
          onCustomLocalStorageEvent
        );
      };
    },
    () => localStorage.getItem(key) || initValues
  );

  const setData = useCallback(
    (value: string) => {
      localStorage.setItem(key, value);
      window.dispatchEvent(
        new CustomEvent("custom-localStorage-event", {
          detail: key,
        })
      );
    },
    [key]
  );

  return [data, setData] as const;
};

export default useLocalStorage;
