import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyExtract'
})
export class KeyExtractPipe implements PipeTransform {

  transform(object: Object, args?: string[]): string[] {
    return Object.keys(object);
  }

}
