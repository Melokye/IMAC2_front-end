import axios from 'axios';
export {getMangasData, getMangaData}

const getMangasData = async function(title){
    const response = await axios({
        method: 'GET',
        url: `https://api.mangadex.org/manga/`,
        params: {
            title: title,
            includes: ["cover_art", "author"]
        },
    });
    
    if(response.status != 200){
        new Error(response.statusText);
    }
    return response.data.data;
}

const getMangaData = async function(mangaID){
    const response = await axios({
        method: 'GET',
        url: `https://api.mangadex.org/manga/${mangaID}`,
        // params: {
        //     includes: [
        //         "manga", "cover_art", 
        //         "author", "artist", 
        //         "tag"
        //     ]
        // },
    });
    
    if(response.status != 200){
        new Error(response.statusText);
    }
    console.log(response.data); // TODO debug
    return response.data;
}