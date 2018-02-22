import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StorageListComponent } from './list.component';
import { StorageAddComponent } from './add.component';
import { StorageEditComponent } from './edit.component';
import { StorageDetailComponent } from './detail.component';

import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default/default.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": StorageListComponent
            },
            {
                "path": "new",
                "component": StorageAddComponent
            },
            {
                "path": "edit/:id",
                "component": StorageEditComponent
            },
            {
                "path": "detail/:id",
                "component": StorageDetailComponent
            }
        ]
    }
];
@NgModule({imports: [
CommonModule,RouterModule.forChild(routes),LayoutModule
],exports: [
RouterModule
],declarations: [
    StorageListComponent,
    StorageAddComponent,
    StorageEditComponent,
    StorageDetailComponent
]})
export class StorageModule  {



}