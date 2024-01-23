import { Controller, UseInterceptors, Post, UploadedFile, Res, Req, Body} from '@nestjs/common';
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('image')
export class ImageController {
    constructor(private readonly imageService: ImageService) {


    }

    @Post('')
    @UseInterceptors(FileInterceptor('file'))
    async uploadImage(@UploadedFile() file, @Res() res, @Req() req, @Body() body) {
        const image = await this.imageService.create(file, body);
        // const newImage = image.toObject();

        // const host = req.get('host');
        // newImage.image_file = undefined;
        // newImage.url = `http://${host}/image/${newImage._id}`;

        return res.send(image);
    }

}
