//== Class definition

var DatatableHtmlTableDemo = function() {
	//== Private functions

	// demo initializer
	var demo = function() {

		var datatable = $('.m-datatable').mDatatable({
			data: {
				saveState: {cookie: false},
			},
			search: {
				input: $('#generalSearch'),
			},
			columns: [

				{
                    field: 'ลำดับ',
                    title: 'xxx',
                    type: 'number',
                    width: 60,
                    textAlign: 'center',
				},
				{
                    field: 'ข้อมูลสวัสดิการ',
                    width: 180,
				},
				{
                    field: 'ข้อมูลพนักงาน',
                    width: 200,
				},
				{
                    field: 'วันที่สมัครสมาชิก',
                    width: 100,
				},
				{
                    field: '',
                    width: 50,
                    textAlign: 'center',
                },
				{
					field: 'สถานะสมาชิก',
					title: 'สถานะสมาชิก',
                    width: 100,
                    textAlign: 'center',
                },
                {
                    field: 'ประเภทสมาชิก',
					width: 120,
					textAlign: 'center',
                },
                {
                    field: 'รายละเอียด',
                    width: 200,
                
				},
			],
		});

		$('#m_form_status').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'ประเภทสมาชิก');
		});

		$('#m_form_type').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'สถานะสมาชิก');
		});

		$('#m_form_status, #m_form_type').selectpicker();

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