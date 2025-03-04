"use server";

import client from "@/db"
import { z } from 'zod';

const emailSchema = z.string().email()

export async function contact(props : {
    name: string,
    email: string,
    message: string
}) {
    const result = emailSchema.safeParse(props.email)
    if(!result.success){
        console.log(result)
        return "invalid email"
    }
    const query = await client.query.create({
        data: {
            name: props.name,
            email: props.email,
            message: props.message
        }
    });

    console.log(query);

    return "Query Submitted!"
}