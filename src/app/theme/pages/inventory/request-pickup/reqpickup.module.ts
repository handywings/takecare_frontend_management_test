import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReqPickupListComponent } from './list.component';
import { ReqPickupAddComponent } from './add.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../../default/default.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ReqPickupListComponent
            },
            {
                "path": "new",
                "component": ReqPickupAddComponent
            }
        ]
    }
];
@NgModule({imports: [
CommonModule,RouterModule.forChild(routes),LayoutModule
],exports: [
RouterModule
],declarations: [
    ReqPickupListComponent,
    ReqPickupAddComponent
]})
export class RequestPickupModule  {

}