import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { StackModule } from './stack/stack.module';
import { SuggestController } from './suggest.controller';

@Module({
  imports: [
    StackModule,
    RouterModule.register([
      {
        path: 'suggest',
        module: StackModule,
      }
    ])
  ],
  controllers: [SuggestController],
  exports: [StackModule]
})
export class SuggestModule { }
