import { FileService } from "../services/FileService";

export class FileController {

  private fileService: FileService;

  constructor() {
    this.fileService = new FileService();
  }
}