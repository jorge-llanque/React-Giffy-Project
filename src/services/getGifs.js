import {API_KEY, API_URL} from './settings'

export default function getGifs({limit=15, keyword = 'morty', page= 0} = {}){
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=pg-13&lang=en`;
    
    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      if(Array.isArray(data)){
          const gifs = data.map(image => {
              const {title, id } = image
              const { url } = image.images.downsized_medium
              return { title, id, url}
            })
          return gifs
      }
    })
}