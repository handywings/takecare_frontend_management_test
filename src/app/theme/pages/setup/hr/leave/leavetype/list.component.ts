import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "leavetype-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class LeaveTypeListComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('leavetype-list',
['assets/js/setting/hr/leave/leavetype/html-table.js']);
}

}