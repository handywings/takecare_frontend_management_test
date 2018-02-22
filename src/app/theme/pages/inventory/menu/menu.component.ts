import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
selector: "menuSetup",
templateUrl: "./menu.component.html",
encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {

}

}