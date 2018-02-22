import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "personneltype-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class PersonnelTypeListComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('personneltype-list',
['assets/js/setting/hr/personnel/personneltype/html-table.js']);
}

}