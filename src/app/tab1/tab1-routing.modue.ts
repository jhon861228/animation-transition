import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { Page1Component } from './subpages/page1/page1.component';
import { Page2Component } from './subpages/page2/page2.component';

const routes: Routes = [
{
    path: '',
    component: Tab1Page,
    children: [
    {
        path: 'subpage1',
        component: Page1Component
    },
    {
        path: 'subpage2',
        component: Page2Component
    },
    {
        path: '',
        redirectTo: '/tabs/tab1/subpage1',
        pathMatch: 'full'
    }
    ]
},
{
    path: '',
    redirectTo: '/tabs/tab1/subpage1',
    pathMatch: 'full'
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
