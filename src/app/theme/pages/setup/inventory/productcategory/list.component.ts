import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
selector: "productcategory-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class ProductCategoryListComponent implements OnInit, AfterViewInit {
    newProductCategory: boolean = true;
    newProductCategoryEdit: boolean = true;

constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('productcategory-list',
['assets/js/setting/inventory/productcategory/html-table.js']);
this._script.loadScripts('productcategory-list',
['assets/demo/default/custom/components/forms/widgets/bootstrap-switch.js']);
this._script.loadScripts('productcategory-list',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);

}

}