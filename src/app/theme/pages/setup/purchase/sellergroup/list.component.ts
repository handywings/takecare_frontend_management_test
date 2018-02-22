import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
selector: "sellergroup-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class SellerGroupListComponent implements OnInit, AfterViewInit {
    newProductModel: boolean = true;
    newProductModelEdit: boolean = true;

constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('sellergroup-list',
['assets/js/setting/purchase/sellergroup/html-table.js']);
this._script.loadScripts('sellergroup-list',
['assets/demo/default/custom/components/forms/widgets/bootstrap-switch.js']);
this._script.loadScripts('sellergroup-list',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);

}

}