import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

import type { StackSuggestion, StackSuggestionItem } from './entities/stack-suggestion.entity';
import { SUGGEST_DATA_DIR } from '../../config/paths';

@Injectable()
export class StackService {
  private readonly stackSuggestion: StackSuggestion;

  constructor() {
    this.stackSuggestion = this.loadStackSuggestion();
  }

  private loadStackSuggestion() {
    const filePath = path.join(SUGGEST_DATA_DIR, 'stack.json');
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  getAll(category?: string) {
    if (category) {
      return this.stackSuggestion.stack_suggestions?.[category] || [];
    }
    return this.stackSuggestion.stack_suggestions || {};
  }

  search(term?: string, category?: string) {
    if (!term || term.trim() === '') {
      return this.getAll(category);
    }

    const stackData = this.stackSuggestion.stack_suggestions || {};

    const data: StackSuggestionItem[] = category
      ? stackData[category] || []
      : Object.values(stackData).flat();

    return data.filter((item) => item.name.toLowerCase().includes(term.toLowerCase()));
  }
}
