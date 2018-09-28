import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  // @HostListener('mouseover') open() {
  //   this.isOpen = true;
  // }
  // @HostListener('mouseleave') hide() {
  //   this.isOpen = false;
  // }

  constructor() { }

}
