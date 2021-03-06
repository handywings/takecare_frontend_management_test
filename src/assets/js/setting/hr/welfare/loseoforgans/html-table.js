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
                    field: 'รหัสประเภทการสูญเสียอวัยวะ',
                    width: 170,
                    textAlign: 'center'
				},
				{
                    field: 'ชื่อประเภทการสูญเสียอวัยวะ',
                    width: 160
				},
				{
                    field: 'ชื่อประเภทการสูญเสียอวัยวะ (Eng)',
                    width: 190
				},
				{
                    field: 'สถานะใช้งาน',
                    width: 100,
                    textAlign: 'center'
                },
                {
                    field: 'รายละเอียด',
                    width: 220
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