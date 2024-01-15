const getImagen = async() =>{
    try{
        const apiKey = 'xt00PaRofPVTsVShkvTejZvisMtQk0YQ';
        const  resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }catch(error){
        //Manejo del error
    }
  
}

getImagen();


/*
EJERCICIO ANTERIOR
const apiKey = 'xt00PaRofPVTsVShkvTejZvisMtQk0YQ';

const  peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


peticion
    .then(resp => resp.json())
    .then(({data}) =>{
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);
*/