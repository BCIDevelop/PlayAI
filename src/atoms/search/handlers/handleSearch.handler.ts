export const handleSearch = <T >(
  e: React.ChangeEvent<HTMLInputElement>,
  setData: React.Dispatch<React.SetStateAction<T[] | null>>,
  timeoutRef: React.MutableRefObject<number | undefined>,
  dataRef: React.RefObject<T[]>,
  target: (keyof T),
) => {
  const text = e.target.value;

  if (text === "") {
 
    setData(dataRef.current);
    return;
  }
  if (timeoutRef.current) return;
  timeoutRef.current = window.setTimeout(() => {
    const pattern = new RegExp(text, "i");
    const filteredData = dataRef.current!.filter((element: T) => {
      return pattern.test(String(element[target]))
    })
    setData(filteredData)
    timeoutRef.current = undefined
  }, 300);
};
