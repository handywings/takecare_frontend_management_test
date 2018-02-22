import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
    selector: "welfare-add",
    templateUrl: "./add.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class WelfareAddComponent implements OnInit, AfterViewInit {
    private condition : boolean;
    private welfareTypeCondition : string;
    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {
        this.welfareTypeCondition = "1";  
    }
    ngAfterViewInit() {
        this._script.loadScripts('welfare-add',
            ['assets/demo/default/custom/components/forms/widgets/bootstrap-datepicker.js']);
        this._script.loadScripts('welfare-add',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);
        this.loadscript();          
    }

    //custom method
    checkCondition(isCondition,type){
        this.welfareTypeCondition = type;
        console.log(isCondition);
        if(!isCondition){
            this.condition = false;
        }else{
            this.condition = true;
        }
        this.loadscript();
        
    }

    loadscript(){        
        this._script.loadScripts('welfare-add',
            ['assets/demo/default/custom/components/forms/widgets/form-repeater.js']);
    }

}