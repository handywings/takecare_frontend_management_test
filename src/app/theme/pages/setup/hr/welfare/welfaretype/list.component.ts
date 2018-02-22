import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "welfaretype-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WelfareTypeListComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('welfaretype-list',
['assets/js/setting/hr/welfare/welfaretype/html-table.js']);
  

}

}