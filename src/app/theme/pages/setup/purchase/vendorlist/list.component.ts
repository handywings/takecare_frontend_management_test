import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
selector: "vendorlist-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class VendorListComponent implements OnInit, AfterViewInit {
    newProductModel: boolean = true;
    newProductModelEdit: boolean = true;

constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('vendorlist-list',
['assets/js/setting/purchase/purchasingofficer/html-table.js']);
this._script.loadScripts('vendorlist-list',
['assets/demo/default/custom/components/forms/widgets/bootstrap-switch.js']);
this._script.loadScripts('vendorlist-list',
['assets/demo/default/custom/components/forms/widgets/select2.js']);

}

}