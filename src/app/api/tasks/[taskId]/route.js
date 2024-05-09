import { connectionSrt } from "@/lib/db";
import { Tasks } from "@/lib/model/tasks";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content){
        const taskid = content.params.taskId;
        const filter = {_id: taskid};
        const body = await request.json();

        await mongoose.connect(connectionSrt)
        const result = await Tasks.findOneAndUpdate(filter, body)
        return new NextResponse(JSON.stringify({result, success: true}))
}


export async function DELETE(request, content){
        const taskid = content.params.taskId
        const filter = {_id: taskid}
        
        try {
             await mongoose.connect(connectionSrt);
             const result = await Tasks.findOneAndDelete(filter)
             return new NextResponse(JSON.stringify({result, success: true}))
        } catch (error) {
                return new NextResponse({success: false});
        } finally{
                mongoose.connection.close();
        }
}