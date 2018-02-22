import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PermissiongroupListComponent } from './list.component';
import { PermissiongroupViewComponent } from './view.component';
import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default/default.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": PermissiongroupListComponent
            },
            {
                "path": "view/:rid",
                "component": PermissiongroupViewComponent
            }
        ]
    }
];
@NgModule({imports: [
CommonModule,RouterModule.forChild(routes),LayoutModule
],exports: [
RouterModule
],declarations: [
    PermissiongroupListComponent,
    PermissiongroupViewComponent
]})
export class PermissiongroupModule  {



}