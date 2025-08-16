import { Controller, Get, Query } from '@nestjs/common';
import { StackService } from './stack.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('stack')
export class StackController {
  constructor(private readonly stackService: StackService) {}

  @Get()
  @ApiOperation({ summary: 'Получение всех стеков (опционально по категории)' })
  @ApiQuery({ name: 'category', required: false, description: 'Фильтр по категории' })
  @ApiResponse({ status: 200, description: 'Список стеков' })
  getAll(@Query('category') category?: string) {
    return this.stackService.getAll(category);
  }

  @Get('search')
  @ApiOperation({ summary: 'Поиск стеков по термину и категории' })
  @ApiQuery({ name: 'term', required: false, description: 'Поисковый термин' })
  @ApiQuery({ name: 'category', required: false, description: 'Фильтр по категории' })
  @ApiResponse({ status: 200, description: 'Результаты поиска стеков' })
  search(@Query('term') term?: string, @Query('category') category?: string) {
    return this.stackService.search(term, category);
  }
}
