import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  template: `
    <h1 class="title">Typography</h1>

    <div class="d-grid cols-3 b-1 p-1 m-t-1">
      <h1 class="title b-b-1 col-1-span-3 row-1">.title</h1>
      <h1 class="section-title col-1-span-3 row-2">.section-title</h1>
      <span class="section-subtitle col-1-span-3 row-3">
        .section-subtitle
      </span>
      <div class="bg-primary box col-1 row-4">
        <h3 class="heading text-light">.heading</h3>
        <h3 class="subheading text-light b-b-1 b-color-loght">.subheading</h3>
        <p class="text-light">Normal Text</p>
      </div>
      <div class="bg-primary box col-2 row-4">
        <h3 class="heading text-light">.heading</h3>
        <h3 class="subheading text-light b-b-1 b-color-loght">.subheading</h3>
        <p class="text-light">Normal Text</p>
      </div>
      <div class="bg-primary box col-3 row-4">
        <h3 class="heading text-light">.heading</h3>
        <h3 class="subheading text-light b-b-1 b-color-loght">.subheading</h3>
        <p class="text-light">Normal Text</p>
      </div>
    </div>
  `,
  styles: [],
})
export class TypographyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
