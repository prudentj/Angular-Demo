import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button"
import {MatToolbarModule}from "@angular/material/toolbar"
import {MatIconModule}from "@angular/material/icon"
import  {LayoutModule} from "@angular/cdk/layout"
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatListModule} from "@angular/material/list"
import {MatMenuModule} from "@angular/material/menu"
import {MatCardModule} from "@angular/material/card"
import {MatInputModule} from "@angular/material/input"
import {MatSnackBarModule} from "@angular/material/snack-bar"

import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';

const components = [ShellComponent, DeleteButtonComponent]
const modules =[
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  RouterModule,
]


@NgModule({
  declarations: [
    ...components,
 
  ],
  imports: [
   ...modules
  ],
  exports:[
    ...modules,
    ...components,
  ]
})
export class SharedModule { }
