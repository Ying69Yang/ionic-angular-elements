import { Injectable} from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { MiElementoComponent } from './mi-elemento.component';

@Injectable(/* {
  providedIn: 'root'
} */)
export class MiElementoService {

  constructor() { }

    // This uses the new custom-element method to add the popup to the DOM.
  showAsElement(message: string) {
    // Create element
    const popupEl: NgElement & WithProperties<MiElementoComponent> = document.createElement('popup-element') as any;

    // Listen to the close event
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));

    // Set the message
    popupEl.message = message;

    // Add to the DOM
    document.body.appendChild(popupEl);
  }
}
