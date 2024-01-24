import { prisma } from "@/utils/connect";
// import { PrismaClient } from "@prisma/client";
import {  NextRequest, NextResponse } from "next/server"

//fetch all products

export const GET = async (req:NextRequest) =>{
    const {searchParams} = new URL(req.url);
    const cat = searchParams.get("cat")
    try{
       const products = await prisma.product.findMany({
        where:{
            ...(cat ? {catSlug:cat} : {isFeatured:true}),
        }
       })

       return new NextResponse(JSON.stringify(products),{status:200});

    }catch(err){
        return new NextResponse(JSON.stringify({message:"Something went wrong!"}),{status:500});
    }
}
export const POST = () =>{
    return new NextResponse("Hello",{status:200});
}