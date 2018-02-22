import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
selector: "unit-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class UnitListComponent implements OnInit, AfterViewInit {
    newUnitGroup: boolean = true;
    newUnitGroupEdit: boolean = true;

constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('unit-list',
['assets/js/setting/inventory/unit/html-table.js']);
this._script.loadScripts('unit-list',
['assets/demo/default/custom/components/forms/widgets/bootstrap-switch.js']);
this._script.loadScripts('unit-list',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);

}

}