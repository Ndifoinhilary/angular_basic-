import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
  standalone: true
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;



    let words = value.split(' ')

    for (let index = 0; index < words.length; index++) {
      let word = words[index]
      if (index > 0 && this.isProposition(word)) {
        word = word.toLowerCase();
      }
      else {
        word = this.toTileCase(word)
      }

    }

    return words.join(' ')
  }


  private toTileCase(word: string): string {

    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()

  }

  private isProposition(word: string): boolean {
    let proposition = ['of', 'the']

    return proposition.includes(word.toLowerCase())
  }

}
