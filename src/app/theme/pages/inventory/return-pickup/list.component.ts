import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
    selector: "return-pickup-list",
    templateUrl: "./list.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ReturnPickupListComponent implements OnInit, AfterViewInit {

    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {
    }
 

    ngAfterViewInit() {
        this._script.loadScripts('return-pickup-list',
            ['assets/js/inventory/returnpickup/html-table.js']);

        this._script.loadScripts('return-pickup-list',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);
            
        this._script.loadScripts('return-pickup-list',
            ['assets/demo/default/custom/components/forms/widgets/bootstrap-daterangepicker.js']);
    }

}