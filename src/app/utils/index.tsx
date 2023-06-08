
export const FetchNews = async(url: string, id?: number) => {
    const response = await fetch(`${url}/${id ? id : ""}`);
    if(!response.ok){
        throw Error('Something went wrong');
    }

    const data = await response.json();

    return data;
}