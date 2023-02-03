import { NgModule } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  exports: [
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
  ]
})
export class SharedModule {}