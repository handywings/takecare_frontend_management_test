import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StockListComponent } from './list.component';
import { StockAddComponent } from './add.component';
import { StockEditComponent } from './edit.component';
import { StockDetailComponent } from './detail.component';

import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default/default.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": StockListComponent
            },
            {
                "path": "new",
                "component": StockAddComponent
            },
            {
                "path": "edit/:id",
                "component": StockEditComponent
            },
            {
                "path": "detail/:id",
                "component": StockDetailComponent
            }
        ]
    }
];
@NgModule({imports: [
CommonModule,RouterModule.forChild(routes),LayoutModule
],exports: [
RouterModule
],declarations: [
    StockListComponent,
    StockAddComponent,
    StockEditComponent,
    StockDetailComponent
]})
export class StockModule  {



}