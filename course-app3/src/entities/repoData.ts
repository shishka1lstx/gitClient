import axios from "axios";


export async function getRepoData( repoOwner: string, repoName: string ) {
    let repoData = await axios( {
        method: "GET",
        url: `https://api.github.com/repos/${repoOwner}/${repoName}`
    });
    
    return repoData.data;
}


export async function getRepoLangs(url:string): Promise<object> {
    let langs = await axios({
        method: "GET",
        url: url
    });

    return langs.data;
}

export async function getRepoContributors(url:string) {
    let contributors = await axios({
        method: "GET",
        url: url
    })

    return contributors.data
}

export async function getRepoReadme(owner: string, repo: string) {
    
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/readme`, {
            headers: { Accept: 'application/vnd.github.v3+json' }, 
        });

        const content = response.data.content; // Содержимое Base64
        const decodedContent = decodeBase64(content); // Декодируем UTF-8
        return decodedContent;
    
}

function decodeBase64(base64String: string): string {
    const binaryString = atob(base64String); // Декодируем Base64 в бинарную строку
    const bytes = Uint8Array.from(binaryString, (char) => char.charCodeAt(0)); // Преобразуем в байты
    const decoder = new TextDecoder('utf-8'); // Указываем кодировку UTF-8
    return decoder.decode(bytes); // Декодируем байты в строку
}