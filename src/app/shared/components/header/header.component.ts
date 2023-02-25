import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public searchForm = this.fb.group({
    searchValue: [''],
  });

  constructor(private fb: FormBuilder) {}

  public resetMargin() {
    return {
      marginBottom: '-1.25rem',
    };
  }
}
