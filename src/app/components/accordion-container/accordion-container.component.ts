import { Component, OnInit,
  QueryList, ContentChildren, AfterContentInit, SimpleChanges, OnChanges, SimpleChange, Input } from '@angular/core';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';
import { Subject } from 'rxjs';
import { SharedService } from '../accordion/services/shared.service';

@Component({
  selector: 'app-accordion-container',
  templateUrl: './accordion-container.component.html',
  styleUrls: ['./accordion-container.component.scss'],
})
export class AccordionContainerComponent implements OnInit, AfterContentInit, OnChanges {

  @ContentChildren(AccordionItemComponent) itemsChildren: QueryList<AccordionItemComponent>;

  @Input() hideItems = false;

  ngOnInit(): void {
  }

  constructor(private sharedService: SharedService) { }

  ngAfterContentInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentItem: SimpleChange = changes.hideItems;
    console.log(changes);
    console.log(currentItem);

    if(currentItem !== undefined) {
      console.log('prev value: ', currentItem.previousValue);
      console.log('got item: ', currentItem.currentValue);
      if ( currentItem.currentValue ) {
        this.sharedService.chatMessageAdded.emit(null);
      }
      
    }
    
  }

}
