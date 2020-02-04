import { Component, OnInit, HostListener,
  Input, AfterContentInit, ContentChildren,
  QueryList, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SharedService } from '../accordion/services/shared.service';
import { AccordionContentComponent } from '../accordion-content/accordion-content.component';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent implements OnInit, AfterContentInit, AfterViewInit {

  constructor(private sharedService: SharedService) { }

  @ContentChildren(AccordionContentComponent) content: QueryList<AccordionContentComponent>;

  @ViewChild('el', {static: false}) el: ElementRef;

  @Input() item;

  showed = true;
  height: number;

  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {
    const panel = this.el.nativeElement;
    this.height = panel.scrollHeight;
  }

  ngOnInit() {
    this.sharedService.chatMessageAdded.subscribe((data) => {
      if(data === undefined || data === null) {
        this.show(false);
      } else {
        if (data.nombre !== this.item.nombre) {
          this.validateComponent(false);
        } else {
          this.validateComponent(true);
        }
      }
      
    });
  }

  @HostListener('click', ['$event.target'])
  onClick(target) {
    // this.toggleHelper();
  }

  /*toggleHelper() {
    this.sharedService.chatMessageAdded.emit(this.item);
  }*/

  show(showContent: boolean) {
    this.el.nativeElement.classList.add('show');
    this.el.nativeElement.classList.remove('hide');
    const panel = this.el.nativeElement;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = this.height + 'px';
    }
    if (showContent) {
      this.content.forEach((content) => {
        content.show();
      });
    } else {
      this.content.forEach((content) => {
        content.hide();
      });
    }
  }

  hide() {
    this.el.nativeElement.classList.remove('show');
    this.el.nativeElement.classList.add('hide');
    const panel = this.el.nativeElement;
    panel.style.maxHeight = null;
    this.content.forEach((content) => {
      content.hide();
    });
  }

  validateComponent(isClick: boolean) {
    if ( isClick ) {
      this.show(true);
    } else if ( this.showed ) {
      this.showed = false;
      this.hide();
    } else if ( !this.showed ) {
      this.showed = true;
      this.show(false);
    }
  }

}
