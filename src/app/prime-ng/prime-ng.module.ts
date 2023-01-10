import { NgModule } from '@angular/core';

//PrimeNg
import {MenubarModule} from 'primeng/menubar'
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {SplitButtonModule} from 'primeng/splitbutton';


@NgModule({
  declarations: [],
  exports: [
    MenubarModule,
    CardModule,
    FieldsetModule,
    ButtonModule,
    ToolbarModule,
    TableModule,
    SplitButtonModule
  ]
})
export class PrimeNgModule { }
