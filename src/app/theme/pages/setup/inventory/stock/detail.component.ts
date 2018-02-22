import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';

declare let Dropzone: any;
@Component({
    selector: "stock-detail",
    templateUrl: "./detail.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class StockDetailComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('stock-detail',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);
            this._script.loadScripts('stock-detail',
            ['assets/demo/default/custom/components/base/treeview.js']);
    }

}