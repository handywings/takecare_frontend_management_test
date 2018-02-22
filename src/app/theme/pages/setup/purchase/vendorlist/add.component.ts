import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
    selector: "vendorlist-add",
    templateUrl: "./add.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class VendorListAddComponent implements OnInit, AfterViewInit {
    private condition : boolean;
    private vendorListCondition : string;
    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {
        this.vendorListCondition = "1";  
    }
    ngAfterViewInit() {
        this._script.loadScripts('vendorlist-add',
            ['assets/js/setting/purchase/vendorlist/vendorlist-new.js']);
        this._script.loadScripts('vendorlist-add',
            ['assets/demo/default/custom/components/forms/widgets/bootstrap-datepicker.js']);
        this._script.loadScripts('vendorlist-add',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);
        this._script.loadScripts('vendorlist-add',
            ['assets/demo/default/custom/components/forms/wizard/wizard.js']);
        this.loadscript();          
    }

    //custom method
    checkCondition(isCondition,type){
        this.vendorListCondition = type;
        console.log(isCondition);
        if(!isCondition){
            this.condition = false;
        }else{
            this.condition = true;
        }
        this.loadscript();
        
    }

    loadscript(){        
        this._script.loadScripts('vendorlist-add',
            ['assets/demo/default/custom/components/forms/widgets/form-repeater.js']);
    }

}