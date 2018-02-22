import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';

declare let Dropzone: any;
@Component({
    selector: "storage-add",
    templateUrl: "./add.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class StorageAddComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('storage-add',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);
            this._script.loadScripts('storage-add',
            ['assets/demo/default/custom/components/base/treeview.js']);
    }

}