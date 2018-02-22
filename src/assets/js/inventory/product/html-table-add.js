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
                    field: '',
                    width: 50,
                    textAlign: 'center',
				},
				{
					field: 'รหัสสินค้า',
					textAlign: 'center',
                    width: 100,
				},
				{
					field: 'รูปสินค้า',
					textAlign: 'center',
                    width: 60,
				},
				{
                    field: 'ชื่อสินค้า',
                    width: 250,
				},
				{
                    field: 'ชื่อทางการตลาด',
                    width: 250,
				},{
					field: 'ยอดคงเหลือ',
					textAlign: 'center',
                    width: 100,
                
				},
			],
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

var DatatableHtmlTableDemo2 = function() {
	//== Private functions

	// demo initializer
	var demo2 = function() {

		var datatable = $('.m-datatable-2').mDatatable({
			data: {
				saveState: {cookie: false},
			},
			search: {
				input: $('#generalSearch2'),
			},
			columns: [

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

		$('#m_form_status_2').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'ประเภทสมาชิก');
		});

		$('#m_form_type_2').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'สถานะสมาชิก');
		});

		$('#m_form_status_2, #m_form_type_2').selectpicker();

	};

	return {
		//== Public functions
		init: function() {
			// init dmeo
			demo2();
		},
	};
}();

jQuery(document).ready(function() {
	DatatableHtmlTableDemo.init();
	DatatableHtmlTableDemo2.init();
});