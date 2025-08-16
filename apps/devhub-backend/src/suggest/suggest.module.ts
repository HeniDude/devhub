import { Module } from '@nestjs/common';
import { StackModule } from './stack/stack.module';
import { SuggestController } from './suggest.controller';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    StackModule,
    RouterModule.register([
      {
        path: 'suggest',
        module: StackModule,
      },
    ]),
  ],
  controllers: [SuggestController],
  exports: [StackModule],
})
export class SuggestModule {}
