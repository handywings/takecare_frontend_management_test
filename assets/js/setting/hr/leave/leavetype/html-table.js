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
                    field: 'รหัสประเภทการลา',
                    width: 140
				},
				{
					field: 'จำนวนวันที่อนุญาต',
					textAlign: 'center',
                    width: 130
				},
				{
                    field: 'ชื่อประเภทการลา (Eng)',
                    width: 140
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