

import { z } from 'zod';


export const Zod_Create_User_Type = z.object({
    body: z.object({
        full_name: z.string().min(4, "Full name is required"),
        email: z.string().email("Invalid email format"),
        password: z.string().min(6, "Password should be at least 6 characters long"),
        profile_picture: z.string().url("Invalid URL for profile picture"),
        address: z.string(),
    })
})