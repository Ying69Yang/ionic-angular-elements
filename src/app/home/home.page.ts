import { Component, Injector } from '@angular/core';
import { MiElementoService } from '../mi-elemento/mi-elemento.service';
import { createCustomElement } from '@angular/elements';
import { MiElementoComponent } from '../mi-elemento/mi-elemento.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(injector: Injector, public popup: MiElementoService) {
    console.log(this.popup); // Es necesario tenerlo en el controlador para poder llamarlo desde la plantilla
    // Convert `MiElementoComponent` to a custom element.
    const PopupElement = createCustomElement(MiElementoComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }

}
