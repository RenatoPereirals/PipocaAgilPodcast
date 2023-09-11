import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  perPage = 5;

  data = Array.from({ length: 100 }).map((_, i) => `Item ${i + 1}`);

  state = {
    currentPage: 10,
    perPage: this.perPage,
    totalPage: Math.ceil(this.data.length / this.perPage),
    maxVisibleButtons: 5,
  };

  constructor() {}

  ngOnInit(): void {
    this.controls.createListeners();
    this.update();
  }

  html = {
    get(element: any) {
      return document.querySelector(element);
    },
  };

  controls = {
    next: () => {
      this.state.currentPage++;

      if (this.state.currentPage > this.state.totalPage) {
        this.state.currentPage--;
      }
    },
    prev: () => {
      this.state.currentPage--;

      if (this.state.currentPage < 1) {
        this.state.currentPage++;
      }
    },
    goTo: (page: number) => {
      this.state.currentPage = +page;

      if (page > this.state.totalPage) {
        this.state.currentPage = this.state.totalPage;
      }

      if (page < 1) {
        this.state.currentPage = 1;
      }
    },
    createListeners: () => {
      this.html.get('.first').addEventListener('click', () => {
        this.controls.goTo(1);
        this.update();
      });
      this.html.get('.last').addEventListener('click', () => {
        this.controls.goTo(this.state.totalPage);
        this.update();
      });
      this.html.get('.next').addEventListener('click', () => {
        this.controls.next();
        this.update();
      });
      this.html.get('.prev').addEventListener('click', () => {
        this.controls.prev();
        this.update();
      });
    },
  };

  list = {
    create: (item: any) => {
      console.log(item);
      const div = document.createElement('div');
      div.classList.add('item');
      div.innerHTML = item;

      const listElement = this.html.get('.list');
      listElement.innerHTML = '';
    },

    update: () => {
      const listElement = this.html.get('.list');
      if (listElement) {
        // console.log('update method called.');
        listElement.innerHTML = '';

        let page = this.state.currentPage - 1;
        let start = page * this.state.perPage;
        let end = start + this.state.perPage;

        const paginatedItems = this.data.slice(start, end);

        paginatedItems.forEach(this.list.create);
      } else {
        console.log('listElement is null');
      }
    },
  };

  buttons = {
    element: this.html.get('.pagination .numbers'),
    create: (number: any) => {
      console.log('botões estão criados');
      const button = document.createElement('div');

      button.innerHTML = number;

      if (this.state.currentPage == number) {
        button.classList.add('acitve');
      }

      button.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        const page = target.innerText;

        this.controls.goTo(parseInt(page, 10));
        this.update();
      });

      this.buttons.element.appendChild(button);
    },

    update: () => {
      this.buttons.element.innerHTML = '';
      const { maxLeft, maxRigth } = this.buttons.visibleButtons();

      for (let page = maxLeft; page <= maxRigth; page++) {
        this.buttons.create(page);
      }
    },

    visibleButtons: () => {
      const { maxVisibleButtons, currentPage, totalPage } = this.state;

      console.log('maxVisibleButtons:', maxVisibleButtons);
      console.log('currentPage:', currentPage);
      console.log('totalPage:', totalPage);

      let maxLeft = this.state.currentPage - Math.floor(maxVisibleButtons / 2);
      let maxRigth = this.state.currentPage + Math.floor(maxVisibleButtons / 2);

      console.log('maxVisibleButtons:', maxVisibleButtons);
      console.log('currentPage:', this.state.currentPage);
      console.log('totalPage:', this.state.totalPage);

      console.log('Antes das condições:', maxLeft, maxRigth);

      if (maxLeft < 1) {
        maxLeft = 1;
        maxRigth = maxVisibleButtons;
      }

      if (maxRigth > this.state.totalPage) {
        maxLeft = this.state.totalPage - (maxVisibleButtons - 1);
        maxRigth = this.state.totalPage;

        if (maxLeft < 1) maxLeft = 1;
      }

      console.log('Depois das condições:', maxLeft, maxRigth);
      return { maxLeft, maxRigth };
    },
  };

  update() {
    this.list.update();
    this.buttons.update();
  }
}
