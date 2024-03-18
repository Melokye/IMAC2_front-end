import axios, {isCancel, AxiosError} from 'axios';
export {getMangasData}

const title = 'Spy x Family'; // TODO test
const baseUrl = 'https://api.mangadex.org';

const getMangasData = async function(){
    const response = await axios({
        method: 'GET',
        url: `${baseUrl}/manga`,
        params: {
            title: title // TODO à moduler?
        }
    });
    
    // TODO test response.status ?
    console.log(response.data.data); // TODO test
    return response.data.data; // .map(manga => manga.attributes)
}

