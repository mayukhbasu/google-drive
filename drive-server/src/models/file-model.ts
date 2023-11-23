import mongoose, { Schema } from "mongoose";

export interface IFile extends Document {
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
  uploaderName: string;
  uploadDate: Date;
}

const FileSchema: Schema = new Schema({
  originalname: { type: String, required: true, unique: true },
  encoding: { type: String, required: false },
  mimetype: { type: String, required: false },
  destination: { type: String, required: false },
  filename: { type: String, required: true },
  path: { type: String, required: false },
  size: { type: Number, required: true },
  uploaderName: {type: String, required: false},
  uploadDate: { type: Date, default: Date.now }
});

export default mongoose.model<IFile>('File', FileSchema)