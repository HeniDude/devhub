import { Controller, Get, Query } from '@nestjs/common';
import { StackService } from './stack.service';

@Controller('stack')
export class StackController {
  constructor(private readonly stackService: StackService) {}

  @Get()
  getAll(@Query('category') category?: string) {
    return this.stackService.getAll(category);
  }

  @Get('search')
  search(@Query('term') term?: string, @Query('category') category?: string) {
    return this.stackService.search(term, category);
  }
}
