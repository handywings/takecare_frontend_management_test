import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
selector: "member-add",
templateUrl: "./add.component.html",
encapsulation: ViewEncapsulation.None,
})
export class MemberAddComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
    this._script.loadScripts('member-add',
    ['assets/demo/default/custom/components/forms/widgets/bootstrap-datepicker.js']);
    this._script.loadScripts('member-add',
    ['assets/demo/default/custom/components/forms/widgets/select2.js']);
    this._script.loadScripts('member-add',
['assets/js/hr/welfare/member/html-table-add.js']);
}

}