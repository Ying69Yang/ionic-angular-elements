import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { MiElementoComponent } from '../mi-elemento/mi-elemento.component';
import { MiElementoService } from '../mi-elemento/mi-elemento.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, MiElementoComponent],
  entryComponents: [MiElementoComponent],
  providers: [MiElementoService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
