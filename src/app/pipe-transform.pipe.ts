import { Pipe } from '@angular/core';
import {DatePipe } from '@angular/common';

@Pipe({
  name: 'pipeTransform'
})
export class PipeTransformPipe  {
  constructor(private datePipe: DatePipe) {}

  transformDate(date) {
    return this.datePipe.transform(date, 'm/dd/yyyy hh:mm:ss');
  }

}
