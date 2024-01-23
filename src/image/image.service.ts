import { Injectable } from '@nestjs/common';
import { InjectModel } from '@m8a/nestjs-typegoose';
import { ApiImage } from './image.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class ImageService {
    constructor(@InjectModel(ApiImage) private readonly imageModel:ReturnModelType<typeof ApiImage>) {}

    async create(file, createCatDto: { name: string, image_file: Buffer }) {
        const newImage = await new this.imageModel(createCatDto);
        newImage.image_file.data = file.buffer;
        newImage.image_file.contentType = file.mimetype;
        return newImage.save();
    }

    async findAll(){
        return await this.imageModel.find({}, { image_file: 0 }).lean().exec();
    }

    async getById(id): Promise<ApiImage> {
        return await this.imageModel.findById(id).exec();
    }

    async removeImage(id): Promise<ApiImage> {
        return this.imageModel.findByIdAndDelete(id);
    }
}
