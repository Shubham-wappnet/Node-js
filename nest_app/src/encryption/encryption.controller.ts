/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { EncryptionService } from './encryption.service';

@Controller('encrypt-data')
export class EncryptionController {
  constructor(private readonly encryptionService: EncryptionService) {}

  @Get('encrypt')
  encryptData() {
    const encryptedData = this.encryptionService.encrypt('lad123');
    return encryptedData;
  }

  @Get('decrypt')
  decryptData() {
    const decryptedData = this.encryptionService.decrypt('lad123');
    console.log(decryptedData)
    return decryptedData;
  }
}