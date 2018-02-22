import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "personnelgroup-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class PersonnelgroupListComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('personnelgroup-list',
['assets/js/setting/hr/personnel/personnelgroup/html-table.js']);
}

}