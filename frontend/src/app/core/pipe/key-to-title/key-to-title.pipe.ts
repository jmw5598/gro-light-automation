import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyToTitle'
})
export class KeyToTitlePipe implements PipeTransform {

  transform(key: string, caseType?: string): string {
    let result: string = key;
    if(caseType === undefined) {
        if(key.search('_') !== -1) {
            result = this.fromSnake(key);
        } else {
            result = this.fromCamel(key);
        }
    }else if(caseType.toLowerCase() === 'camel') {
        result = this.fromCamel(key);
    } else if(caseType.toLowerCase() === 'snake') {
        result = this.fromSnake(key);
    }
    return result;
  }

  private fromSnake(str: string): string {
      var result = str.toLowerCase().split("_")
        .map(e => e.charAt(0).toUpperCase() + e.substring(1, e.length))
        .join(" ");
      return result;
  }

  private fromCamel(str: string): string {
      var result = str.split(/(?=[A-Z])/)
        .map(e => e.charAt(0).toUpperCase() + e.substring(1, e.length).toLowerCase())
        .join(" ");
      return result;
  }

}
