import { useEffect, useRef } from 'react';
import { handleSearch } from './handlers/handleSearch.handler';
import './search.css';
import { SearchType } from '../../types/search.type';


const Search = <T,>({ setData, data, target }: SearchType<T >) => {
  const timeoutRef = useRef<number | undefined>(undefined);
  const dataRef = useRef<T[]>(data);
  useEffect(()=>{
    if(!dataRef.current) dataRef.current = data
    return ()=>{
      clearTimeout(timeoutRef.current)
    }
  },[data])

  return (
    <div className="search_input_container">
      <input
        onChange={(e) => {
         handleSearch(e, setData, timeoutRef, dataRef, target )
        }}
        type="search"
        className="search_input_container__search_input"
      />
      <div className="search_input__wrapper search_container">
        <svg
          className="search_container__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
        </svg>
        <p className="search_container__text">Search</p>
      </div>
    </div>
  );
};

export default Search;