//== Class definition

var DatatableHtmlTableDemo = function() {
	//== Private functions

	// demo initializer
	var demo = function() {

		var datatable = $('.m-datatable').mDatatable({
			data: {
				saveState: {cookie: false}
			},
			columns: [
				{
                    field: 'รหัสพนักงาน',
                    width: 70,
                    textAlign: 'center'
				},
				{
                    field: 'ชื่อ - สกุลพนักงาน',
                    width: 120,
                    textAlign: 'center'
				},
				{
                    field: 'ตำแหน่ง',
                    width: 80,
                    textAlign: 'center'
				},
				{
                    field: 'หน่วยงาน',
                    width: 80,
                    textAlign: 'center'
				},
				{
                    field: 'บริษัท',
                    width: 80,
                    textAlign: 'center'
				},
				{
                    field: 'วงเงินที่ได้รับอนุมัติ (บาท)',
                    width: 80,
                    textAlign: 'center'
				},
				{
                    field: '',
                    width: 35,
                    textAlign: 'center'
                }
			],
		});
		
		var datatable_modal = $('.m-datatable-modal').mDatatable({
			data: {
				saveState: {cookie: false}
			},
			columns: [
				{
                    field: 'เลือก',
                    width: 60,
                    textAlign: 'center'
				},
				{
                    field: 'รหัสพนักงาน',
                    width: 120,
                    textAlign: 'center'
				},
				{
                    field: 'ชื่อ - สกุลพนักงาน',
                    width: 80,
                    textAlign: 'center'
				},
				{
                    field: 'ตำแหน่ง',
                    width: 80,
                    textAlign: 'center'
				},
				{
                    field: 'หน่วยงาน',
                    width: 80,
                    textAlign: 'center'
				},
				{
                    field: 'บริษัท',
                    width: 80,
                    textAlign: 'center'
				}
			],
		});
		

	};

	return {
		//== Public functions
		init: function() {
			// init dmeo
			demo();
		},
	};
}();

jQuery(document).ready(function() {
	DatatableHtmlTableDemo.init();

	$('#checkbox_num').on('change', function() {
		$(".search-price").prop('disabled', !$(this).is(':checked'));
	});
	

});