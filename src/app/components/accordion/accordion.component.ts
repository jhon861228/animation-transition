import { Component, OnInit, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class AccordionComponent implements OnInit {

  @Input() icon = 'arrow';
  @ViewChild('el', {static: false}) el: ElementRef;

  ngOnInit(): void {
  }

  constructor() { }

  toggleHelper() {
    this.el.nativeElement.classList.toggle('active');
    const panel = this.el.nativeElement.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }

}
