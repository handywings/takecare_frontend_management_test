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
                    field: 'รหัสกลุ่ม',
                    width: 60,
                    textAlign: 'center'
				},
				{
                    field: 'กลุ่มผู้ขาย (TH)',
                    width: 180,
                    textAlign: 'center'
				},
				{
                    field: 'กลุ่มผู้ขาย (EN)',
                    width: 180,
                    textAlign: 'center'
				},
				{
                    field: 'หมายเหตุ',
                    textAlign: 'center'
                },
				{
                    field: '',
                    width: 35,
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
});