import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
@Injectable({
  providedIn: 'root'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, n: number, type? : string): string {
    // Usar mejor la identidad ===
    if (type == 'words') {
      let array = value.split(' ')
      let nextSpace = value.indexOf(array[n-1]) + array[n-1].length
      return value.substr(0, nextSpace) + '...'
    } else {
      if (value[n] != ' ' || value[n+1] != ' '){
        let nenxtSpace = value.substr(n).indexOf(' ')
        return value.substring(0, (n+nenxtSpace)) + '...'
      } else {
        return value.substring(0, n) + '...'
      }
    }
  }
}

// En general bien pero ojo con los errores del tslint
