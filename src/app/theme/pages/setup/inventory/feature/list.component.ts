import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
selector: "feature-list",
templateUrl: "./list.component.html",
encapsulation: ViewEncapsulation.None,
})
export class FeatureListComponent implements OnInit, AfterViewInit {
    newFeature: boolean = true;
    newFeatureEdit: boolean = true;

constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('feature-list',
['assets/js/setting/inventory/feature/html-table.js']);
this._script.loadScripts('feature-list',
['assets/demo/default/custom/components/forms/widgets/bootstrap-switch.js']);
this._script.loadScripts('feature-list',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);

}

}