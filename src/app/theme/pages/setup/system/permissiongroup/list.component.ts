import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
selector: "permissiongroup-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class PermissiongroupListComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('permissiongroup-list',
['assets/js/setting/system/permissiongroup/html-table.js']);
}

}