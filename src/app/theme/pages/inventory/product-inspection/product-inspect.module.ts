import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductInspectionListComponent } from './list.component';
import { ProductInspectionDetailComponent } from './detail.component';
import { ProductInspectionAddComponent } from './add.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../../default/default.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ProductInspectionListComponent
            },
            {
                "path": "new",
                "component": ProductInspectionAddComponent
            },
            {
                "path": "detail",
                "component": ProductInspectionDetailComponent
            }
        ]
    }
];
@NgModule({imports: [
CommonModule,RouterModule.forChild(routes),LayoutModule
],exports: [
RouterModule
],declarations: [
    ProductInspectionListComponent,
    ProductInspectionDetailComponent,
    ProductInspectionAddComponent
]})
export class ProductInspectionModule  {

}