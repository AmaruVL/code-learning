import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples/components";


export const Layout = () => {

  const {counter, increment} = useCounter(1);
  const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

  //const {author, quote} = !!data && data[0];
  const {name, gender} = !!data && data;

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr/>

      {
        (isLoading)
          ? <LoadingQuote/>
          : <Quote gender={gender} name={name} />
      }
      
      <button 
        className="btn btn-primary"
        onClick={()=>increment()} 
        disabled={isLoading}>
        Next quote
      </button>
    </>
  )
}
