import axios, {isCancel, AxiosError} from 'axios';
export {getMangasData}

// const title = 'Spy x Family'; // TODO test
const baseUrl = 'https://api.mangadex.org';

const getMangasData = async function(title){
    const response = await axios({
        method: 'GET',
        url: `${baseUrl}/manga`,
        params: {
            title: title // TODO à moduler?
        }
    });
    
    if(response.status != 200){
        console.log("error");
        // TODO voir diapo
    }
    return response.data.data; // .map(manga => manga.attributes)
}