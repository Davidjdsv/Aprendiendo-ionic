import { Directive, ElementRef, inject, input, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltar]',
  standalone: true
})
export class AppResaltar {

  elementRef = inject(ElementRef)

  // Variable para cambiar el color
  colorPersonalizado = input<string>('yellow', { alias: 'appResaltar' } )

  // Se detecta cuando entra el mouse
  @HostListener('mouseenter') onMouseEnter() {
    this.resaltar(this.colorPersonalizado())
  }

  // Se detecta cuando el mouse deja el elemento
  @HostListener('mouseleave') onMouseLeave() {
    this.resaltar('')
  }

  // Método para realizar el cambio  del color del elemento
  private resaltar(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
