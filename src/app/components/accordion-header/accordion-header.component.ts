import { Component, OnInit, HostListener, Input } from '@angular/core';
import { SharedService } from '../accordion/services/shared.service';

@Component({
  selector: 'app-accordion-header',
  templateUrl: './accordion-header.component.html',
  styleUrls: [
    './../accordion-item/accordion-item.component.scss'
  ],
})
export class AccordionHeaderComponent implements OnInit {

  @Input() item;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {}


  @HostListener('click', ['$event.target'])
  onClick(target) {
    console.log('Clicked on: ', target);
    this.sharedService.chatMessageAdded.emit(this.item);
  }

}
