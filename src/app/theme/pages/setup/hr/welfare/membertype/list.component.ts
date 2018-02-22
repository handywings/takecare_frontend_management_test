import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "loseoforgans-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class MemberTypeListComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('loseoforgans-list',
['assets/js/setting/hr/welfare/membertype/html-table.js']);
  

}

}