import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AccordionContentComponent } from './accordion-content/accordion-content.component';
import { AccordionHeaderComponent } from './accordion-header/accordion-header.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionContainerComponent } from './accordion-container/accordion-container.component';



@NgModule({
  declarations: [
    AccordionComponent,
    AccordionContentComponent,
    AccordionHeaderComponent,
    AccordionItemComponent,
    AccordionContainerComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionComponent,
    AccordionContentComponent,
    AccordionHeaderComponent,
    AccordionItemComponent,
    AccordionContainerComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  entryComponents: [
    AccordionComponent,
    AccordionContentComponent,
    AccordionHeaderComponent,
    AccordionItemComponent,
    AccordionContainerComponent
  ]
})
export class ComponentsModule {
}
