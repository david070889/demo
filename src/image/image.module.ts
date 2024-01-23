import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { ApiImage } from './image.model';
import { MulterModule } from '@nestjs/platform-express';
import { HttpStatus, HttpException } from '@nestjs/common';
import { extname } from 'path';

const imageFilter = function (req, file, cb) {
  // accept image only
  console.log('Filter:', file)
  if (!file.originalname.match(/.(jpg|jpeg.webp)$/)) {
    cb(new HttpException(`Unsupported file type ${extname(file.originalname)}`, HttpStatus.BAD_REQUEST), false);
  }
  cb(null, true);
};

@Module({
  controllers: [ImageController],
  providers: [ImageService],
  imports:[
    TypegooseModule.forFeature([{
        typegooseClass: ApiImage,
        schemaOptions: {
          timestamps: true,
          versionKey: false
        }}]),

        MulterModule.registerAsync({
          useFactory: () => ({
            fileFilter: imageFilter
          }),
        }),
      ]
    })
export class ImageModule {}
