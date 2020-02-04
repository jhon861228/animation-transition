import { Component, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccordionContainerComponent } from '../components/accordion-container/accordion-container.component';
import { AccordionItemComponent } from '../components/accordion-item/accordion-item.component';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild('container', {static: false}) public parentComp: AccordionContainerComponent;
  @ViewChildren(AccordionItemComponent) public items: QueryList<AccordionItemComponent>;
  types: [] = [];
  hideItems = false;

  constructor(private http: HttpClient) {
    this.http.get('./assets/types.json').subscribe( (resp: []) => {
      this.types = resp;
    });
  }

  hideAllItems() {
    this.items.forEach( (item) => {
      item.show(false);
    });
  }
}
