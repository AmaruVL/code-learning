export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=xt00PaRofPVTsVShkvTejZvisMtQk0YQ&q=${category}&limit=10`;
  const rep = await fetch(url);
  const {data} = await rep.json();

  const gifs = data.map( (img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));
  return gifs;
}