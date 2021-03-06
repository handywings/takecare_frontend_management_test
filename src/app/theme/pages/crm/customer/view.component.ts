import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
selector: "customer-view",
templateUrl: "./view.component.html",
encapsulation: ViewEncapsulation.None,
})
export class CustomerViewComponent implements OnInit, AfterViewInit {


constructor(
    private _script: ScriptLoaderService
)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('customer-view',
['assets/js/crm/customer/view.js']);


}

}