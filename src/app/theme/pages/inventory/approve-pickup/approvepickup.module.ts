import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ApprovePickupListComponent } from './list.component';
import { ApprovePickupDetailComponent } from './detail.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../../default/default.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ApprovePickupListComponent
            },
            {
                "path": "detail",
                "component": ApprovePickupDetailComponent
            }
        ]
    }
];
@NgModule({imports: [
CommonModule,RouterModule.forChild(routes),LayoutModule
],exports: [
RouterModule
],declarations: [
    ApprovePickupListComponent,
    ApprovePickupDetailComponent
]})
export class ApprovePickupModule  {

}