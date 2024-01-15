import {useState} from 'react'
import { AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {
    //console.log(newCategory)
    //const item = 'Dragon Ball2';
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    //setCategories(cat => [ ...cat, 'Valorant' ]); //2da forma
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
        //setCategories={setCategories}
        onNewCategory={value => onAddCategory(value)}
        />

      {/* Listado de Gifs */}
      {categories.map(category => (
        // Siempre poner key y debe ser un valor unico
          <GifGrid 
            key={category}
            category={category}/>
        )
      )}
    </>
  )
}