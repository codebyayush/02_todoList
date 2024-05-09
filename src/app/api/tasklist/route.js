import { connectionSrt } from "@/lib/db";
import { Tasks } from "@/lib/model/tasks";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    await mongoose.connect(connectionSrt);

    let allTasks = new Tasks(body);
    const result =  await allTasks.save();

    return new NextResponse("OK", { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }finally{
    mongoose.connection.close();
  }
}

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionSrt);
    data = await Tasks.find();
    console.log(data);

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    data = { success: false };
    return new NextResponse("Error fetching tasks " + error, { status: 500 });
  } finally {
    mongoose.connection.close();
  }
}

// export async function DELETE() {
//     try{
//       await mongoose.connect(connectionSrt);
      
//     }
// }