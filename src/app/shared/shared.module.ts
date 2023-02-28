import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent, MovieItemComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    HeaderComponent,
    MovieItemComponent,
  ],
})
export class SharedModule {}
