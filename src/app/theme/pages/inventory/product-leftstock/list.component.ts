import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
    selector: "product-manage-list",
    templateUrl: "./list.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ProductLeftStockListComponent implements OnInit, AfterViewInit {
    
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
        this._script.loadScripts('product-manage-list',
            ['assets/js/inventory/product-manage/html-table.js']);

        this._script.loadScripts('product-manage-list',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);
            
        this._script.loadScripts('product-manage-list',
            ['assets/demo/default/custom/components/forms/widgets/bootstrap-daterangepicker.js']);
    }

}