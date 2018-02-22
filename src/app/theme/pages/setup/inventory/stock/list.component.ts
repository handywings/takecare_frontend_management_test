import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
selector: "stock-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class StockListComponent implements OnInit, AfterViewInit {
    newStock: boolean = true;
    newStockEdit: boolean = true;

constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('stock-list',
['assets/js/setting/inventory/stock/html-table.js']);
this._script.loadScripts('stock-list',
['assets/demo/default/custom/components/forms/widgets/bootstrap-switch.js']);
this._script.loadScripts('stock-list',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);

}

}