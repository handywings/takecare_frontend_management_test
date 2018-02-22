import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "welfare-view",
templateUrl: "./view.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WelfareViewComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('welfare-view',
['assets/js/setting/hr/welfare/welfare/html-table.js']);
  

}

}