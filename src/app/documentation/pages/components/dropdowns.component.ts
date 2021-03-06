import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  template: `
    <h1 class="title">Dropdowns</h1>

    <section class="section">
      <div class="d-flex flex-wrap content-center">
        <dropdown value="Primary Dropdown" color="primary">
          <li>Dropdown Item</li>
          <li>Dropdown Item</li>
        </dropdown>
        <dropdown value="Secondary Dropdown" color="secondary">
          <li>Dropdown Item</li>
          <li>Dropdown Item</li>
        </dropdown>
        <dropdown value="Success Dropdown" color="success">
          <li>Dropdown Item</li>
          <li>Dropdown Item</li>
        </dropdown>
        <dropdown value="Danger Dropdown" color="danger">
          <li>Dropdown Item</li>
          <li>Dropdown Item</li>
        </dropdown>
        <dropdown value="Warning Dropdown" color="warning">
          <li>Dropdown Item</li>
          <li>Dropdown Item</li>
        </dropdown>
        <dropdown value="Info Dropdown" color="info">
          <li>Dropdown Item</li>
          <li>Dropdown Item</li>
        </dropdown>
        <dropdown value="Light Dropdown" color="light">
          <li>Dropdown Item</li>
          <li>Dropdown Item</li>
        </dropdown>
        <dropdown value="Dark Dropdown" color="dark">
          <li>Dropdown Item</li>
          <li>Dropdown Item</li>
        </dropdown>
      </div>
    </section>
  `,
  styles: [],
})
export class DropdownsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
