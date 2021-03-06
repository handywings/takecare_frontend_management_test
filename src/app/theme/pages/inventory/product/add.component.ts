import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';

declare let Dropzone: any;
@Component({
    selector: "product-add",
    templateUrl: "./add.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ProductAddComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('product-add',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);
        this._script.loadScripts('product-add',
            ['assets/demo/default/custom/components/forms/widgets/form-repeater.js']);
        this._script.loadScripts('product-add',
            ['assets/demo/default/custom/components/forms/widgets/bootstrap-datepicker.js']);
        this._script.loadScripts('product-add',
            ['assets/demo/default/custom/components/forms/widgets/dropzone.js']);
            Dropzone._autoDiscoverFunction();
            this._script.loadScripts('product-add',
            ['assets/js/inventory/product/html-table-add.js']);
    }

}