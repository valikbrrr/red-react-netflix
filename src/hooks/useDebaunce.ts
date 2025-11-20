import { useEffect, useState } from "react";

type UseDebounceType = (value: string, delay?: number) => string;

export const useDebounce: UseDebounceType = (value, delay = 300) => {
  const [debauncedValue, setDebauncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebauncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debauncedValue;
};
