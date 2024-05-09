import mongoose from "mongoose";

const taskModel = new mongoose.Schema({
  task: String,
  description: String,
  checked: Boolean,
});

//don't use camel convention or anything, only use small letters for collection name.
export const Tasks = mongoose.models.tasklists || mongoose.model("tasklists", taskModel);