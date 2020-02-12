import { Pipe, PipeTransform, Injectable, ErrorHandler } from '@angular/core';

@Pipe({
  name: 'censure'
})
@Injectable({
  providedIn: 'root'
})

export class CensurePipe implements PipeTransform {

  brands = [
    { name: 'adidas', soldByUs: true },
    { name: 'nike', soldByUs: true },
    { name: 'ecco', soldByUs: false },
    { name: 'ascis', soldByUs: false },
    { name: 'salomon', soldByUs: false },
    { name: 'puma', soldByUs: false },
  ]

  messages = [
    { id: 1, message: 'Ayer me compre una zapatillas ascis que son mucho mejores en calidad precio que las ultimas salomon'},
    { id: 2, message: '¿Alguno me recomienda comprar algunas zapatillas de las marcas Nike, ecco y puma?'},
    { id: 3, message: '¿Salomon o nike, cual me recomendais comprar para que me duren mas de 100Km?'},
    { id: 4, message: 'El nuevo modelo de nike es mucho mejor que los que han sacado puma, adidas, ascis y ecco!'},
  ]

  transform( id: number ): string {
    let message = this.messages.find(message => message.id == id)
    let censureMessage: string = message.message
    message.message.split(' ').map(word => {
      const regex = /,*¿*\?*-*_*\.*!*¡*\/*\\*/gi;
      word = word.replace(regex, '')
      let wordBeforeLowerCase: string = word
      word = word.toLocaleLowerCase()
      if (this.brands.find(brand => brand.name === word && !brand.soldByUs)) {
        let censura = '*'
        console.log(word)
        censureMessage = censureMessage.replace(wordBeforeLowerCase, censura.repeat(word.length))
      }
    })
    return censureMessage
  }

}
