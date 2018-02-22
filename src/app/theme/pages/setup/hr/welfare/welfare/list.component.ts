import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "welfare-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WelfareListComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('welfare-list',
['assets/js/setting/hr/welfare/welfare/html-table.js']);
  

}

}