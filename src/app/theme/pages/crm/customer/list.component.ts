import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
selector: "customer-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class CustomerListComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('customer-list',
['assets/js/crm/customer/list.js']);

}

}