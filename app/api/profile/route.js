import prisma from "@/constants/prisma";
import { NextResponse } from "next/server";

export async function POST(req, res){
    try{
        const body = await req.json();
        const { email } = body.session.user;

        await prisma.$connect()

        const updatedUser = await prisma.user.update({
			where: {
                email: email,
			},
			data: {
				bio: body.bio,
			},
		});
        return NextResponse.json(updatedUser, {status: 200})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({error: error.message}, {status: 500})
    }
   finally{
        await prisma.$disconnect()
    }
}