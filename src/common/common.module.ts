import { Module } from '@nestjs/common';
import { AxiosAdpater } from './adapters/axios.adapter';

@Module({
  providers: [AxiosAdpater],
  exports: [AxiosAdpater],
})
export class CommonModule {}
