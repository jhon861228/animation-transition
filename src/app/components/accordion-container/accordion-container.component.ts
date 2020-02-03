import { Component, OnInit, HostListener, QueryList, ContentChildren, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';
import { Subject } from 'rxjs';
import { SharedService } from '../accordion/services/shared.service';

@Component({
  selector: 'app-accordion-container',
  templateUrl: './accordion-container.component.html',
  styleUrls: ['./accordion-container.component.scss'],
})
export class AccordionContainerComponent implements OnInit, AfterContentInit {

  @ContentChildren(AccordionItemComponent) itemsChildren: QueryList<AccordionItemComponent>;

  ngOnInit(): void {
  }

  constructor() { }

  ngAfterContentInit(): void {
  }

}
