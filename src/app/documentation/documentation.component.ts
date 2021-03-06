import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  template: ` <div class="body">
    <sidebar [title]="'BaseKit'">
      <sidebar-item link="">Getting Started</sidebar-item>
      <sidebar-item link="layouts">Layouts</sidebar-item>
      <sidebar-item link="colors">Colors</sidebar-item>
      <sidebar-item link="typography">Typography</sidebar-item>
      <sidebar-dropdown label="Components">
        <sidebar-item link="components/accordions">Accordions</sidebar-item>
        <sidebar-item link="components/alerts">Alerts</sidebar-item>
        <sidebar-item link="components/buttons">Buttons</sidebar-item>
        <sidebar-item link="components/carousel">Carousel</sidebar-item>
        <sidebar-item link="components/cards">Cards</sidebar-item>
        <sidebar-item link="components/dropdowns">Dropdowns</sidebar-item>
        <sidebar-item link="components/modal">Modal</sidebar-item>
        <sidebar-item link="components/tabs">Tabs</sidebar-item>
      </sidebar-dropdown>
      <sidebar-dropdown label="Forms">
        <sidebar-item link="forms/inputs">Inputs</sidebar-item>
      </sidebar-dropdown>
    </sidebar>
    <main class="main">
      <navbar navBrand="BaseKit" [themeChange]="true"> </navbar>
      <router-outlet></router-outlet>
    </main>
  </div>`,
  styles: [],
})
export class DocumentationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
