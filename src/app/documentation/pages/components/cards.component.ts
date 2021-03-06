import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  template: `<h1 class="title">Cards</h1>

    <section class="section container">
      <card>
        <card-body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            nostrum nisi voluptatibus vel aperiam deleniti repudiandae, quasi
            corrupti velit quia tempore assumenda itaque ipsam repellendus
            ducimus modi, error, at praesentium.
          </p>
          <button class="btn btn-primary m-t-1">Button</button>
        </card-body>
      </card>
    </section>

    <section class="section container">
      <h1 class="section-title">With Header and Footer</h1>
      <card>
        <card-header>Card Header</card-header>
        <card-body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            nostrum nisi voluptatibus vel aperiam deleniti repudiandae, quasi
            corrupti velit quia tempore assumenda itaque ipsam repellendus
            ducimus modi, error, at praesentium.
          </p>
        </card-body>
        <card-footer>Card Footer</card-footer>
      </card>
    </section>

    <section class="section container">
      <h1 class="section-title">Colors</h1>
      <div class="d-grid m-t-2 cols-2">
        <card color="primary">
          <card-header>Card Header</card-header>
          <card-body>
            <p>color="primary"</p>
          </card-body>
          <card-footer>Card Footer</card-footer>
        </card>
        <card color="secondary">
          <card-header>Card Header</card-header>
          <card-body>
            <p>color="secondary"</p>
          </card-body>
          <card-footer>Card Footer</card-footer>
        </card>
        <card color="success">
          <card-header>Card Header</card-header>
          <card-body>
            <p>color="success"</p>
          </card-body>
          <card-footer>Card Footer</card-footer>
        </card>
        <card color="danger">
          <card-header>Card Header</card-header>
          <card-body>
            <p>color="danger"</p>
          </card-body>
          <card-footer>Card Footer</card-footer>
        </card>
        <card color="warning">
          <card-header>Card Header</card-header>
          <card-body>
            <p>color="warning"</p>
          </card-body>
          <card-footer>Card Footer</card-footer>
        </card>
        <card color="info">
          <card-header>Card Header</card-header>
          <card-body>
            <p>color="info"</p>
          </card-body>
          <card-footer>Card Footer</card-footer>
        </card>
        <card color="light">
          <card-header>Card Header</card-header>
          <card-body>
            <p>color="light"</p>
          </card-body>
          <card-footer>Card Footer</card-footer>
        </card>
        <card color="dark">
          <card-header>Card Header</card-header>
          <card-body>
            <p>color="dark"</p>
          </card-body>
          <card-footer>Card Footer</card-footer>
        </card>
      </div>
    </section> `,
  styles: [],
})
export class CardsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
