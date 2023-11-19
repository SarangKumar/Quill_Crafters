import prisma from "@/constants/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    // console.log('GET')
    try{
        await prisma.$connect()
        const allUsers = await prisma.user.findMany({
            where: {
                isAuthor: false
            }
		});

        return NextResponse.json(allUsers, {status: 200})
        // return NextResponse.json({message: 'message'}, {status: 200})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({error: error.message}, {status: 500})
    }
   finally{
        await prisma.$disconnect()
    }
}

export async function POST(req, res){
    const {user_id, page} = await req.json();
    console.log(user_id, 'user_id');
    if(page==='novels'){
        try{
            await prisma.$connect()
            const allUsers = await prisma.user.findFirst({
                where: {
                    user_id: user_id
                },
                include: {
                    novel: true,
                    favourite: true,
                }
            });
            console.log(allUsers);
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
}