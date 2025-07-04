import { headers } from "next/headers";
import { NextRequest } from "next/server";

const { default: connectDB } = require("@/app/Config/db");
const { default: User } = require("@/app/Modal/User");
const { Webhook } = require("svix");

export async function POST(req) {
    
    const wh = new Webhook(process.env.SIGN_IN_SECERET);
    const headerPayload = headers()
    const svixHeader = {
        "svix-id":headerPayload.get("svix-id"),
        "svix-signature": headerPayload.get("svix-signature")
        
    }
    //get payload and verify it 
    const payload = await req.json();
    const body = JSON.stringify(payload)
    const { data, type } = wh.verify(body, svixHeader)
    
    // prepare user data to save in db
    const userData = {
        _id: data.id,
        email: data.email_address[0].email_address,
        name: `${data.first_name} ${data.last_name}`,
        image : data.image_url
    }

    await connectDB();
    switch (type) {
        case 'user.created':
            await User.create(userData)
            break;
        case 'user.updated':
            await User.findByIdAndUpdate(data.id, userData)
            break;
        case 'user.deleted':
            await User.findByIdAndDelete (data.id)
            break;
        default:
            break;
    }

    return NextRequest.json({message:"Event Recevied"})
}