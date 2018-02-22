import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReturnPickupListComponent } from './list.component';
import { ReturnPickupDetailComponent } from './detail.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../../default/default.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ReturnPickupListComponent
            },
            {
                "path": "detail",
                "component": ReturnPickupDetailComponent
            }
        ]
    }
];
@NgModule({imports: [
CommonModule,RouterModule.forChild(routes),LayoutModule
],exports: [
RouterModule
],declarations: [
    ReturnPickupListComponent,
    ReturnPickupDetailComponent
]})
export class ReturnPickupModule  {

}