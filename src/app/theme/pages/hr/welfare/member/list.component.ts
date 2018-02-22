import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
selector: "member-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class MemberListComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('member-list',
['assets/js/hr/welfare/member/html-table.js']);
  

}

}