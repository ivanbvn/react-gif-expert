import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])
  
  const onAddCategory = (newCategory) => {
    // const lowerCaseCategories = [...categories].map(category => category.toLowerCase())
    // if(categories.includes(newCategory)) return;
    if([...categories].map(category => category.toLowerCase()).includes(newCategory.toLowerCase())) return;
    setCategories([newCategory,...categories])
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExperApp</h1>
      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
       />
      {/* Listado de Gif */}
        {
          categories.map(category => 
            <GifGrid 
              category={category}
              key={category} 
            />
          )
        }
    </>
  )
}
