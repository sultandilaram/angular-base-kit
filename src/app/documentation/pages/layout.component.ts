import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <h1 class="title">Layouts</h1>

    <section class="section">
      <h1 class="section-title">Grid System</h1>
      <span class="section-subtitle"> Grid with four columns </span>
      <div class="d-grid cols-4">
        <div
          class="
        d-flex
        content-center
        items-center
        box box-shadow
        bg-primary
        text-light
        col-1-span-2
        row-1
      "
        >
          Row 1 Column 1 span 2
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-shadow
        bg-primary
        text-light
        row-1
      "
        >
          Row 1 Column 3
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-shadow
        bg-primary
        text-light
        row-1-span-2
      "
        >
          Row 1 Span 2 Column 4
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-shadow
        bg-primary
        text-light
        row-2
      "
        >
          Row 2 Column 1
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-shadow
        bg-primary
        text-light
        row-2
      "
        >
          Row 2 Column 2
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-shadow
        bg-primary
        text-light
        row-2
      "
        >
          Row 2 Column 3
        </div>
      </div>
    </section>

    <section class="section">
      <h1 class="section-title">Flex System</h1>
      <span class="section-subtitle"> Flex with wrap </span>
      <div class="d-flex flex-wrap content-center">
        <div
          class="
        d-flex
        content-center
        items-center
        box box-shadow
        bg-primary
        text-light
      "
          style="width: calc(25% - 0.5rem)"
        >
          Flex Item
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-shadow
        bg-primary
        text-light
      "
          style="width: calc(25% - 0.5rem)"
        >
          Flex Item
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-shadow
        bg-primary
        text-light
      "
          style="width: calc(25% - 0.5rem)"
        >
          Flex Item
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-shadow
        bg-primary
        text-light
      "
          style="width: calc(25% - 0.5rem)"
        >
          Flex Item
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-shadow
        bg-primary
        text-light
      "
          style="width: calc(25% - 0.5rem)"
        >
          Flex Item
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-shadow
        bg-primary
        text-light
      "
          style="width: calc(25% - 0.5rem)"
        >
          Flex Item
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-shadow
        bg-primary
        text-light
      "
          style="width: calc(25% - 0.5rem)"
        >
          Flex Item
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-shadow
        bg-primary
        text-light
      "
          style="width: calc(25% - 0.5rem)"
        >
          Flex Item
        </div>
      </div>
    </section>

    <section class="section">
      <h1 class="section-title">Container</h1>
      <div
        class="container bg-primary p-1 d-flex content-center text-light box-shadow"
      >
        container
      </div>
      <div
        class="
      container-fluid
      bg-primary
      p-1
      d-flex
      content-center
      text-light
      box-shadow
      m-t-1
    "
      >
        container-fluid
      </div>
    </section>
  `,
  styles: [],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
