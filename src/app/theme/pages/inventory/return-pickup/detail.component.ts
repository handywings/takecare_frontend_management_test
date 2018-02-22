import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
    selector: "return-pickup-detail",
    templateUrl: "./detail.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ReturnPickupDetailComponent implements OnInit, AfterViewInit {
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
        this._script.loadScripts('return-pickup-detail',
            ['assets/js/inventory/returnpickup/html-table.js']);

        this._script.loadScripts('return-pickup-detail',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);
            
        this._script.loadScripts('return-pickup-detail',
            ['assets/demo/default/custom/components/forms/widgets/bootstrap-daterangepicker.js']);
    }

}