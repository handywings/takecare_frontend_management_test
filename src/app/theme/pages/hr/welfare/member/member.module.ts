import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MemberAddComponent } from './add.component';
import { MemberListComponent } from './list.component';

import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default/default.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": MemberListComponent
            },
            {
                "path": "new",
                "component": MemberAddComponent
            }
        ]
    }
];
@NgModule({imports: [
CommonModule,RouterModule.forChild(routes),LayoutModule
],exports: [
RouterModule
],declarations: [
    MemberAddComponent,
    MemberListComponent
]})
export class MemberOfWelfareModule  {



}