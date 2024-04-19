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
        params: {
            includes: [
                "manga", "cover_art", 
                "author", "artist", 
                "tag"
            ]
        },
    });
    
    if(response.status != 200){
        new Error(response.statusText);
    }
    return response.data.data;
}

export function getTitle(manga){
    return manga.attributes.title[manga.attributes.originalLanguage] || manga.attributes.title.en;
}

export function getMangaCover(manga){
    let mangaCoverId = manga.relationships
        .filter(data => data['type'] == 'cover_art')
        .map(data => data.attributes['fileName'])[0];
    return 'https://uploads.mangadex.org/covers/' +  manga.id + '/' +  mangaCoverId;
}

export function getAuthors(manga){
    return manga.relationships
        .filter(data => data['type'] == 'author')
        .map(data => data.attributes['name']);
}