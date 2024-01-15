import { QueryClient, useQuery } from '@tanstack/react-query'

const getRandomNumberFromApi = async():Promise<number> => {
  const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
  const numberString = await res.text()
  console.log('render')
  // throw new Error('Algo anda mal')
  return +numberString //Convertir a number
}

export const useRandom = () => {
  const query = useQuery(
    ['randomNumber'],
    getRandomNumberFromApi
  )
  return query
}
