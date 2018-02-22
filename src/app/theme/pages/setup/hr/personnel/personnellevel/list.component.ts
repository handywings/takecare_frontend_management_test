import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "personnellevel-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class PersonnelLevelListComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('personnellevel-list',
['assets/js/setting/hr/personnel/personnellevel/html-table.js']);
this._script.loadScripts('personnellevel-list',
['assets/demo/default/custom/components/forms/widgets/bootstrap-switch.js']);


}

}