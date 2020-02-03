import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: [
    './../accordion-item/accordion-item.component.scss'
  ],
})
export class AccordionContentComponent implements OnInit {

  @ViewChild('el', {static: false}) el: ElementRef;

  constructor() { }

  ngOnInit() {}

  toggle() {
    this.el.nativeElement.classList.toggle('active');
    const panel = this.el.nativeElement;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }

  show() {
    this.el.nativeElement.classList.add('active');
    const panel = this.el.nativeElement;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }

  hide() {
    this.el.nativeElement.classList.remove('active');
    const panel = this.el.nativeElement;
    panel.style.maxHeight = null;
  }

}
