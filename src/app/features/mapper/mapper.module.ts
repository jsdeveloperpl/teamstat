import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapperComponent } from './mapper.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MapperComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      component: MapperComponent
    }])
  ]
})
export class MapperModule { }
