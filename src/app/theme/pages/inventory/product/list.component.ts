import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
    selector: "product-list",
    templateUrl: "./list.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ProductListComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('product-list',
            ['assets/js/setting/hr/welfare/membertype/html-table.js']);
        this._script.loadScripts('product-list',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);
    }

}