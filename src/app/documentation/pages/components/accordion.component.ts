import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  template: `
    <h1 class="title">Accordions</h1>

    <section class="section d-flex items-center flex-dir-column">
      <h1 class="section-title">Normal Accordion</h1>
      <div style="max-width: 600px;">
        <accordion>
          <accordion-item title="Accordion 1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, aut
            aperiam aliquam similique sed veritatis. Necessitatibus quisquam
            dolor vitae quia doloremque recusandae, hic commodi vero expedita
            unde, id maiores et.
          </accordion-item>
          <accordion-item title="Accordion 2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, aut
            aperiam aliquam similique sed veritatis. Necessitatibus quisquam
            dolor vitae quia doloremque recusandae, hic commodi vero expedita
            unde, id maiores et.
          </accordion-item>
        </accordion>
      </div>
    </section>

    <section class="section d-flex flex-dir-column items-center">
      <h1 class="section-title">Accordion with [multiple]=true</h1>
      <div style="max-width: 600px;">
        <accordion [multiple]="true">
          <accordion-item title="Accordion 1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, aut
            aperiam aliquam similique sed veritatis. Necessitatibus quisquam
            dolor vitae quia doloremque recusandae, hic commodi vero expedita
            unde, id maiores et.
          </accordion-item>
          <accordion-item title="Accordion 2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, aut
            aperiam aliquam similique sed veritatis. Necessitatibus quisquam
            dolor vitae quia doloremque recusandae, hic commodi vero expedita
            unde, id maiores et.
          </accordion-item>
        </accordion>
      </div>
    </section>
  `,
  styles: [],
})
export class AccordionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
