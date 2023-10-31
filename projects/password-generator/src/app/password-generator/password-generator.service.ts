import { Settings } from '../types';
import * as generator from 'generate-password-browser';

export class PasswordGeneratorService {
  generate(settings: Settings) {
    const password = generator.generate(settings);
    return password;
  }
}
