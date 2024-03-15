import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormatter]',
  standalone: true
})
export class InputFormatterDirective {

  constructor(private el: ElementRef) { }

  @Input('format') format: any;
  @HostListener('focus') onBlur() {
    let value: string = this.el.nativeElement.value;
    if (this.format == 'uppercase')
      this.el.nativeElement.value = value.toUpperCase();
    else
      this.el.nativeElement.value = value.toLowerCase();

  }


}
