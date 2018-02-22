import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelfareListComponent } from './list.component';
import { WelfareViewComponent } from './view.component';
import { WelfareAddComponent } from './add.component';

import { LayoutModule } from '../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default/default.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WelfareListComponent
            },
            {
                "path": "view/:rid",
                "component": WelfareViewComponent
            },
            {
                "path": "new",
                "component": WelfareAddComponent
            }
        ]
    }
];
@NgModule({imports: [
CommonModule,RouterModule.forChild(routes),LayoutModule
],exports: [
RouterModule
],declarations: [
    WelfareListComponent,
    WelfareViewComponent,
    WelfareAddComponent
]})
export class SetupWelfareModule  {



}