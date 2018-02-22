import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
    selector: "calendar",
    templateUrl: "./calendar.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit, AfterViewInit {

    private condition : boolean;
    private typeCondition : string;

    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {
        this.loadscript();
    }
    ngAfterViewInit() {
        this._script.loadScripts('calendar',
            ['assets/js/setting/hr/leave/holiday/calendar-basic.js']);
        
    }

     //custom method
     checkCondition(isCondition,type){
        this.typeCondition = type;
        console.log(isCondition);
        if(!isCondition){
            this.condition = false;
        }else{
            this.condition = true;
        }
        this.loadscript();
        
    }

    loadscript(){        
        this._script.loadScripts('calendar',
            ['assets/demo/default/custom/components/forms/widgets/form-repeater.js']);
        this._script.loadScripts('calendar',
            ['assets/demo/default/custom/components/forms/widgets/bootstrap-datepicker.js']);
        this._script.loadScripts('calendar',
            ['assets/demo/default/custom/components/forms/widgets/select2.js']);
    }

}