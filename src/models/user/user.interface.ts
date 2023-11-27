interface IFullName{
    firstName: string
    lastName: string
}

interface IAddress{
    street: string
    city: string
    country: string
}

interface IOrders{
    productName: string
    price: number
    quantity: number
}

interface IUser{
    userId: number
    userName: string
    password: string
    fullName: IFullName
    age: number
    email: string
    isActive: boolean
    hobbies: [string]
    address: IAddress
    order?: [IOrders]
}



export {IUser, IFullName, IAddress, IOrders}