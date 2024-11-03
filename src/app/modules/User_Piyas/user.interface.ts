


export interface User_Type {
    full_name: string,
    email: string,
    password: string,
    profile_picture: string,
    address: string,
    role: "SUPER"|"ADMIN"|"USER"
}

export interface Create_User_Type {
    full_name: string,
    email: string,
    password: string,
    profile_picture: string,
    address: string
}