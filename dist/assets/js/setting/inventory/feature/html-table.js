//== Class definition

var DatatableHtmlTableDemo = function() {
	//== Private functions

	// demo initializer
	var demo = function() {

		var datatable = $('.m-datatable').mDatatable({
			data: {
				saveState: {cookie: false}
			},
			search: {
				input: $('#generalSearch'),
			},
			columns: [
				{
                    field: 'ลำดับ',
                    width: 60,
                    textAlign: 'center'
				},
				{
                    field: 'รหัสหมวดหมู่',
                    width: 100,
                    textAlign: 'center'
				},
				{
                    field: 'ชื่อคุณลักษณะ',
                    width: 160,
				},
				{
                    field: 'ชื่อคุณลักษณะ (Eng)',
                    width: 160,
				},
				{
                    field: '',
                    width: 80,
                    textAlign: 'center'
				},
				{
                    field: 'สถานะใช้งาน',
                    width: 100,
                    textAlign: 'center'
                }
			],
		});
		$('#m_form_status, #m_form_type').selectpicker();

		$('#m_form_status_2').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'กลุ่มหมวดหมู่');
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