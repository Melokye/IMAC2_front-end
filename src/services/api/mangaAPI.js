import axios, {isCancel, AxiosError} from 'axios';
export {getMangasData}

const getMangasData = async function(title){
    const response = await axios({
        method: 'GET',
        url: `https://api.mangadex.org/manga/`,
        params: {
            title: title, // TODO à moduler?,
            includes: ["manga", "cover_art", "author", "artist", "tag", "creator"]
        },
        
    });
    
    if(response.status != 200){
        console.log("error");
        // TODO voir diapo
    }
    console.log(response.data.data); // TODO debug
    return response.data.data; // .map(manga => manga.attributes)
}