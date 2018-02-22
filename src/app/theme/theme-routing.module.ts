import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../auth/_guards/auth.guard";

const routes: Routes = [
    {
        "path": "",
        "component": ThemeComponent,
        "canActivate": [AuthGuard],
        "children": [

            {
                "path": "index",
                "loadChildren": "./pages/default/index/index.module#IndexModule"
            },
            {
                "path": "header/actions",
                "loadChildren": "./pages/default/header/header-actions/header-actions.module#HeaderActionsModule"
            },
            {
                "path": "header/profile",
                "loadChildren": "./pages/default/header/header-profile/header-profile.module#HeaderProfileModule"
            },
            {
                "path": "404",
                "loadChildren": "./pages/default/not-found/not-found.module#NotFoundModule"
            },



            //Organization
            //------- Company -------//
            {
                "path": "organization/company",
                "loadChildren": "./pages/organization/company/company.module#CompanyModule"
            },

            //-------------------------------------------------- HR -------------------------------------------------------------//
            {
                "path": "hr",
                "loadChildren": "./pages/hr/menu/menu.module#MenuModule"
            },
            //------- Personnel -------//
            {
                "path": "hr/personnel",
                "loadChildren": "./pages/hr/personnel/personnel.module#PersonnelModule"
            },
            //-------Welfare-------//
            {
                "path": "hr/welfare",
                "loadChildren": "./pages/hr/welfare/welfare/welfare.module#WelfareModule"
            },
            {
                "path": "hr/welfare/member",
                "loadChildren": "./pages/hr/welfare/member/member.module#MemberOfWelfareModule"
            },
            //-------leave-------//
            {
                "path": "hr/leave/request",
                "loadChildren": "./pages/hr/leave/request/request.module#RequestModule"
            },
            {
                "path": "hr/leave/calendar",
                "loadChildren": "./pages/hr/leave/leave-calendar/leavecalendar.module#LeaveCalendarModule"
            },
            {
                "path": "hr/leave/approve",
                "loadChildren": "./pages/hr/leave/approve-leave/approveleave.module#ApproveLeaveModule"
            },

            
            //-------------------------------------------------- CRM -------------------------------------------------------------//
            //------- customer -------//
            {
                "path": "crm/customer",
                "loadChildren": "./pages/crm/customer/customer.module#CustomerModule"
            },

            //-------------------------------------------------- Setup -------------------------------------------------------------//
            //------- menu -------//
            {
                "path": "setup",
                "loadChildren": "./pages/setup/menu/menu.module#MenuModule"
            },
            //------- system -------//
            {
                "path": "setup/system",
                "loadChildren": "./pages/setup/system/menu/menu.module#MenuModule"
            },
            {
                "path": "setup/system/permissiongroup",
                "loadChildren": "./pages/setup/system/permissiongroup/permissiongroup.module#PermissiongroupModule"
            },
            //------- organization -------//
            {
                "path": "setup/organization",
                "loadChildren": "./pages/setup/organization/menu/menu.module#MenuModule"
            },
            //------- hr -------//
            {
                "path": "setup/hr",
                "loadChildren": "./pages/setup/hr/menu/menu.module#MenuModule"
            },
            {
                "path": "setup/hr/personnel/personnelgroup",
                "loadChildren": "./pages/setup/hr/personnel/personnelgroup/personnelgroup.module#PersonnelgroupModule"
            },
            {
                "path": "setup/hr/personnel/personnellevel",
                "loadChildren": "./pages/setup/hr/personnel/personnellevel/personnellevel.module#PersonnelLevelModule"
            },
            {
                "path": "setup/hr/personnel/personneltype",
                "loadChildren": "./pages/setup/hr/personnel/personneltype/personneltype.module#PersonnelTypeModule"
            },
            {
                "path": "setup/hr/welfare/loseoforgans",
                "loadChildren": "./pages/setup/hr/welfare/loseoforgans/loseoforgans.module#LoseOfOrgansModule"
            },
            {
                "path": "setup/hr/welfare/welfaretype",
                "loadChildren": "./pages/setup/hr/welfare/welfaretype/welfaretype.module#WelfareTypeModule"
            },
            {
                "path": "setup/hr/welfare/welfare",
                "loadChildren": "./pages/setup/hr/welfare/welfare/welfare.module#SetupWelfareModule"
            },
            {
                "path": "setup/hr/welfare/membertype",
                "loadChildren": "./pages/setup/hr/welfare/membertype/membertype.module#MemberTypeModule"
            },
            {
                "path": "setup/hr/leave/leavetype",
                "loadChildren": "./pages/setup/hr/leave/leavetype/leavetype.module#LeaveTypeModule"
            },
            {
                "path": "setup/hr/leave/holiday",
                "loadChildren": "./pages/setup/hr/leave/holiday/holiday.module#HolidayModule"
            },
            //------- inventory -------//
            {
                "path": "setup/inventory",
                "loadChildren": "./pages/setup/inventory/menu/menu.module#MenuModule"
            },
            {
                "path": "setup/inventory/unit",
                "loadChildren": "./pages/setup/inventory/unit/unit.module#UnitModule"
            },
            {
                "path": "setup/inventory/productcategory",
                "loadChildren": "./pages/setup/inventory/productcategory/productcategory.module#ProductCategoryModule"
            },
            {
                "path": "setup/inventory/productmodel",
                "loadChildren": "./pages/setup/inventory/productmodel/productmodel.module#ProductModelModule"
            },
            {
                "path": "setup/inventory/feature",
                "loadChildren": "./pages/setup/inventory/feature/feature.module#FeatureModule"
            },
            {
                "path": "setup/inventory/storage",
                "loadChildren": "./pages/setup/inventory/storage/storage.module#StorageModule"
            },
            {
                "path": "setup/inventory/stock",
                "loadChildren": "./pages/setup/inventory/stock/stock.module#StockModule"
            },
            //------- purchase -------//
            {
                "path": "setup/purchase",
                "loadChildren": "./pages/setup/purchase/menu/menu.module#MenuModule"
            },
            {
                "path": "setup/purchase/reasonproductreturn",
                "loadChildren": "./pages/setup/purchase/reasonproductreturn/reasonproductreturn.module#ReasonProductReturnModule"
            },
            {
                "path": "setup/purchase/sellergroup",
                "loadChildren": "./pages/setup/purchase/sellergroup/sellergroup.module#SellerGroupModule"
            },
            {
                "path": "setup/purchase/purchasingofficer",
                "loadChildren": "./pages/setup/purchase/purchasingofficer/purchasingofficer.module#PurchasingOfficerModule"
            },
            {
                "path": "setup/purchase/vendorlist",
                "loadChildren": "./pages/setup/purchase/vendorlist/vendorlist.module#VendorListModule"
            },


            //-------------------------------------------------- Setup -------------------------------------------------------------//

            //-------------------------------------------------- Inventory -------------------------------------------------------------//
            //------- menu -------//
            {
                "path": "inventory",
                "loadChildren": "./pages/inventory/menu/menu.module#MenuModule"
            },
            //------- product -------//
            {
                "path": "inventory/product",
                "loadChildren": "./pages/inventory/product/product.module#ProductModule"
            },
            //------- request pickup -------//
            {
                "path": "inventory/reqpickup",
                "loadChildren": "./pages/inventory/request-pickup/reqpickup.module#RequestPickupModule"
            },
            //------- pickup -------//
            {
                "path": "inventory/pickup",
                "loadChildren": "./pages/inventory/pickup/pickup.module#PickupModule"
            },
             //------- approve pickup -------//
             {
                "path": "inventory/approvepickup",
                "loadChildren": "./pages/inventory/approve-pickup/approvepickup.module#ApprovePickupModule"
            },
            //------- return pickup -------//
            {
                "path": "inventory/returnpickup",
                "loadChildren": "./pages/inventory/return-pickup/returnpickup.module#ReturnPickupModule"
            },
            //------- transfer -------//
            {
                "path": "inventory/transfer",
                "loadChildren": "./pages/inventory/transfer/transfer.module#TransferModule"
            },
            //------- product mange -------//
            {
                "path": "inventory/productmanage",
                "loadChildren": "./pages/inventory/product-manage/product-manage.module#ProductManageModule"
            },
            //------- product left stock -------//
            {
                "path": "inventory/productleftstock",
                "loadChildren": "./pages/inventory/product-leftstock/product-leftstock.module#ProductLeftStockModule"
            },
            //------- product inspection -------//
            {
                "path": "inventory/productinspection",
                "loadChildren": "./pages/inventory/product-inspection/product-inspect.module#ProductInspectionModule"
            },

            {
                "path": "",
                "redirectTo": "index",
                "pathMatch": "full"
            }
        ]
    },
    {
        "path": "**",
        "redirectTo": "404",
        "pathMatch": "full"
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }