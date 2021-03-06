import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  template: `
    <h1 class="title">Colors</h1>

    <section class="section">
      <h1 class="section-title">Background Colors</h1>
      <div class="d-grid cols-4">
        <div
          class="
        d-flex
        content-center
        items-center
        box box-rounded box-shadow
        bg-primary
        hover-primary
        text-light
      "
        >
          .bg-primary
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-rounded box-shadow
        bg-secondary
        hover-secondary
        text-light
      "
        >
          .bg-secondary
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-rounded box-shadow
        bg-success
        hover-success
        text-light
      "
        >
          .bg-success
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-rounded box-shadow
        bg-danger
        hover-danger
        text-light
      "
        >
          .bg-danger
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-rounded box-shadow
        bg-warning
        hover-warning
        text-light
      "
        >
          .bg-warning
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-rounded box-shadow
        bg-info
        hover-info
        text-light
      "
        >
          .bg-info
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-rounded box-shadow
        bg-light
        hover-light
        text-dark
      "
        >
          .bg-light
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-rounded box-shadow
        bg-dark
        hover-dark
        text-light
      "
        >
          .bg-dark
        </div>
      </div>
    </section>

    <section class="section">
      <h1 class="section-title">Text Colors</h1>
      <div class="d-grid cols-4">
        <div
          class="d-flex content-center items-center box box-rounded text-primary"
        >
          .text-primary
        </div>
        <div
          class="d-flex content-center items-center box box-rounded text-secondary"
        >
          .text-secondary
        </div>
        <div
          class="d-flex content-center items-center box box-rounded text-success"
        >
          .text-success
        </div>
        <div
          class="d-flex content-center items-center box box-rounded text-danger"
        >
          .text-danger
        </div>
        <div
          class="d-flex content-center items-center box box-rounded text-warning"
        >
          .text-warning
        </div>
        <div
          class="d-flex content-center items-center box box-rounded text-info"
        >
          .text-info
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-rounded
        bg-dark
        text-light
      "
        >
          .text-light
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-rounded
        bg-light
        text-dark
      "
        >
          .text-dark
        </div>
      </div>
    </section>

    <section class="section">
      <h1 class="section-title">Link Colors</h1>
      <div class="d-grid cols-4">
        <div class="d-flex content-center items-center box box-rounded">
          <a href="#" class="link-primary">.link-primary</a>
        </div>
        <div class="d-flex content-center items-center box box-rounded">
          <a href="#" class="link-secondary">.link-secondary</a>
        </div>
        <div class="d-flex content-center items-center box box-rounded">
          <a href="#" class="link-success">.link-success</a>
        </div>
        <div class="d-flex content-center items-center box box-rounded">
          <a href="#" class="link-danger">.link-danger</a>
        </div>
        <div class="d-flex content-center items-center box box-rounded">
          <a href="#" class="link-warning">.link-warning</a>
        </div>
        <div class="d-flex content-center items-center box box-rounded">
          <a href="#" class="link-info">.link-info</a>
        </div>
        <div class="d-flex content-center items-center box box-rounded bg-dark">
          <a href="#" class="link-light">.link-light</a>
        </div>
        <div
          class="d-flex content-center items-center box box-rounded bg-light"
        >
          <a href="#" class="link-dark">.link-dark</a>
        </div>
      </div>
    </section>

    <section class="section">
      <h1 class="section-title">Shadows</h1>
      <div class="d-grid cols-2">
        <div
          class="
        d-flex
        content-center
        items-center
        box box-rounded box-shadow
      "
        >
          .box-shadow
        </div>
        <div
          class="
        d-flex
        content-center
        items-center
        box box-rounded neumorphic
      "
        >
          .neumorphic
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ColorsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
