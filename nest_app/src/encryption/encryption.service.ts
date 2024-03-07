/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as CryptoJS from 'crypto-js';
import { encryptionConstant } from './encryption.constant';

@Injectable()
export class EncryptionService {
  private readonly secretKey: string = encryptionConstant.secret;

  encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, this.secretKey).toString();
  }

  decrypt(encryptedData: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}

// U2FsdGVkX1+qLGF7ynH4NzJDd1Xj+rSYxpUgGxrR7qs=