import useSWR from 'swr'

export const FetchNews = (id?: number) => {
    const fetcher = (url: string) => fetch(url).then(res => res.json());

    const {data, error, isLoading} = useSWR(`https://fakestoreapi.com/products/${id ? id : ''}`, (url: string) => fetcher(url));

    return {
        data: data,
        error,
        isLoading
    }
}