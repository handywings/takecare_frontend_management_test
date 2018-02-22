import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
selector: "permissiongroup-view",
templateUrl: "./view.component.html",
encapsulation: ViewEncapsulation.None,
})
export class PermissiongroupViewComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('permissiongroup-view',
['assets/js/custom/table/html-table.js']);
// ['app/theme/pages/setup/hr/personnel/permissiongroup/view.component.js']);
}

}