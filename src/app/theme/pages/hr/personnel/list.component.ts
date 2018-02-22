import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
selector: "personnel-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class PersonnelListComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('personnel-list',
['assets/demo/default/custom/components/datatables/base/column-rendering.js']);

}

}