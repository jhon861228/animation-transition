import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccordionContainerComponent } from '../components/accordion-container/accordion-container.component';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild('container', {static: false}) public parentComp: AccordionContainerComponent;
  types: [] = [];
  constructor(private http: HttpClient) {
    this.http.get('./assets/types.json').subscribe( (resp: []) => {
      this.types = resp;
    });
  }


}
