


export type SearchType<T >={
    setData: React.Dispatch<React.SetStateAction<T[] | null>>;
    data:T[];
    target:(keyof T)
}