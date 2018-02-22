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
                    field: 'ลำดับ',
                    title: 'xxx',
                    type: 'number',
                    width: 60,
                    textAlign: 'center'
				},
				{
                    field: '',
                    width: 80,
                    textAlign: 'center'
				},
				{
                    field: '',
                    width: 80,
                    textAlign: 'center'
				},
				{
                    field: 'รหัสประเภทพนักงาน',
                    width: 140
				},
				{
                    field: 'ชื่อประเภทพนักงาน',
                    width: 130
				},
				{
                    field: 'ชื่อประเภทพนักงาน (Eng)',
                    width: 160
				},
				{
                    field: 'สถานะใช้งาน',
                    width: 100,
                    textAlign: 'center'
                },
                {
                    field: 'รายละเอียด',
                    width: 110
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