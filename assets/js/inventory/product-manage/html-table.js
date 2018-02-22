//== Class definition

var DatatableHtmlTableDemo1 = function() {
	//== Private functions

	// demo initializer
	var demo = function() {

		var datatable = $('.m-datatable-tab1').mDatatable({
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
                    field: '',
                    width: 50,
                    textAlign: 'center',
				},
				{
                    field: '',
                    width: 50,
                    textAlign: 'center',
				},
				{
                    field: '',
                    width: 50,
                    textAlign: 'center',
				},
				{
                    field: '',
                    width: 50,
                    textAlign: 'center',
				},
				{
                    field: '',
                    width: 50,
                    textAlign: 'center',
				},
				{
                    field: '',
                    width: 50,
                    textAlign: 'center',
				},
				{
                    field: '',
                    width: 50,
                    textAlign: 'center',
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
 
jQuery(document).ready(function() {
	$('#datestart').datepicker();
	$('#dateend').datepicker();
	DatatableHtmlTableDemo1.init();
});