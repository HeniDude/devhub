export interface StackSuggestionItem {
  name:string;
  description?:string;
  use_case?:string[];
  pros?:string;
  cons?:string;
  alternatives?:string[];
}

export interface StackSuggestionCategory {
  [category:string]: StackSuggestionItem[];
}

export class StackSuggestion {
  stack: StackSuggestionCategory;
  variables?: StackSuggestionCategory;
  best_practices?: StackSuggestionCategory;
  [key:string]: StackSuggestionCategory | undefined;
}