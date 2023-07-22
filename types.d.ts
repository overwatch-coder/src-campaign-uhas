type NewsType = {
    id?: number,
    images: any,
    // price: number,
    description: string,
    title: string,
    // creationAt: string
    // updatedAt: string, 
    category:  {
        id:  number,
        name: string, 
        image: any, 
        // creationAt: string,
        // updatedAt: string
    }
}