import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
    selector: "transfer-list",
    templateUrl: "./list.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class TransferListComponent implements OnInit, AfterViewInit {
    
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
        this._script.loadScripts('transfer-list',
            ['assets/js/inventory/transfer/html-table.js']);

        this._script.loadScripts('transfer-list',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);
            
        this._script.loadScripts('transfer-list',
            ['assets/demo/default/custom/components/forms/widgets/bootstrap-daterangepicker.js']);
    }

}