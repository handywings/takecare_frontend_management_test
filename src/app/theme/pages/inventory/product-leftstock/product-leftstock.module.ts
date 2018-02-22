import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductLeftStockListComponent } from './list.component';
import { ProductLeftStockDetailComponent } from './detail.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../../default/default.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ProductLeftStockListComponent
            },
            {
                "path": "detail",
                "component": ProductLeftStockDetailComponent
            }
        ]
    }
];
@NgModule({imports: [
CommonModule,RouterModule.forChild(routes),LayoutModule
],exports: [
RouterModule
],declarations: [
    ProductLeftStockListComponent,
    ProductLeftStockDetailComponent
]})
export class ProductLeftStockModule  {

}