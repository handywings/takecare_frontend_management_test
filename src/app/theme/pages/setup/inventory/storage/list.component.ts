import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
selector: "storage-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class StorageListComponent implements OnInit, AfterViewInit {
    newStorage: boolean = true;
    newStorageEdit: boolean = true;

constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('storage-list',
['assets/js/setting/inventory/storage/html-table.js']);
this._script.loadScripts('storage-list',
['assets/demo/default/custom/components/forms/widgets/bootstrap-switch.js']);
this._script.loadScripts('storage-list',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);

}

}