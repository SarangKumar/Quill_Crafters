import prisma from "@/constants/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await prisma.$connect()
        const allUsers = await prisma.user.findMany({
			include: {
				novels: true,
				favourite: true,
			},
		});
        return NextResponse.json(allUsers, {status: 200})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({error: error.message}, {status: 500})
    }
   finally{
        await prisma.$disconnect()
    }
}