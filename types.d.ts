type NewsType = {
    id: number,
    images: string[],
    price: number,
    description: string,
    title: string,
    creationAt: string
    updatedAt: string, 
    category:  {
        id:  number,
        name: string, 
        image: string, 
        creationAt: string,
        updatedAt: string
    }
}