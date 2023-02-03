import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  selected: string = 'en'
  searchForm = this.fb.group({
    searchValue: [''],
  });

  constructor(private fb: FormBuilder) { }

  search() {

  }
}
