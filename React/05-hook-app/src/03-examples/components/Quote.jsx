import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({gender, name}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width:0, height:0})

  useLayoutEffect(() => {
    // Para obtener caracteristicas del elemento html 
    const {height,width} = pRef.current.getBoundingClientRect() 
    setBoxSize({height, width})
  }, [gender])

  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{display:'flex'}}>
        <p ref={pRef} className="mb-1">{gender}</p>
        <footer className="blockquote-footer">{name}</footer>
      </blockquote>

      <code> {JSON.stringify(boxSize)} </code>
    </>
  )
}
