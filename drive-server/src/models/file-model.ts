import mongoose, { Schema } from "mongoose";

export interface IFile extends Document {
  originalname: string;
  filename: string;
  size: number;
  uploaderName: string;
  uploadDate: Date;
}

const FileSchema: Schema = new Schema({
  originalname: { type: String, required: true, unique: true },
  filename: { type: String, required: true },
  size: { type: Number, required: true},
  uploaderName: {type: String, required: true},
  uploadDate: { type: Date, default: Date.now }
});

export default mongoose.model<IFile>('File', FileSchema)