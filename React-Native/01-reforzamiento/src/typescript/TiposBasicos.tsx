
export const TiposBasicos = () => {

  const nombre:string= 'Fernando'
  const edad:number = 35
  const estaActivo:boolean = true
  const poderes:(string|number)[] = ['velocidad', 'respirar', 'volar']

  return (
    <>
      <h3>Tipos básicos</h3>
      {nombre}, {edad}, {estaActivo ? 'activo':'noactivo'}
      <br/>
      { poderes.join(', ')}
    </>
  )
}
