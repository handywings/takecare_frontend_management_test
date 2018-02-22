import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
    selector: "product-manage-detail",
    templateUrl: "./detail.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ProductManageDetailComponent implements OnInit, AfterViewInit {
    findByMoney : boolean;

    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {
         this.findByMoney = true;
    }
    
    searchByMoney() {
        this.findByMoney = !this.findByMoney;
     }

    ngAfterViewInit() {
        this._script.loadScripts('product-manage-detail',
            ['assets/js/inventory/reqpickup/html-table-add.js']);

        this._script.loadScripts('product-manage-detail',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);
            
        this._script.loadScripts('product-manage-detail',
            ['assets/demo/default/custom/components/forms/widgets/bootstrap-daterangepicker.js']);
    }

}