const axios = require('axios');

axios.defaults.headers.common['Authorization'] = 'Client-ID 3N3rcg9J91IWSIQkDa5fFQGuq0FlYbFeK6ens-UmHCM';

async function searchPhotos(find,safe) {
  if(safe){
     find=find+'&content_filter=high'
  }
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos?query='+find+'&page=1&per_page=20')
    return response.data.results;
  } catch (error){
    console.log(error)
  }
}

export default searchPhotos;
