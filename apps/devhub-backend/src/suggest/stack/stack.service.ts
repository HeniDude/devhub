import { Injectable } from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs'

import type {StackSuggestion} from './entities/stack-suggestion.entity';
import {SUGGEST_DATA_DIR} from '../../config/paths';

@Injectable()
export class StackService {
  private readonly stackSuggestion: StackSuggestion;

  constructor() {
    this.stackSuggestion = this.loadStackSuggestion();
  }

  private loadStackSuggestion(){
    const filePath = path.join(SUGGEST_DATA_DIR,'stack.json');
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  getTestData(){
    return "hello world";
  }
}
