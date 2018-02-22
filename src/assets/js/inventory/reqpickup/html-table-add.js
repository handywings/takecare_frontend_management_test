//== Class definition

var DatatableHtmlTableDemo1 = function() {
	//== Private functions

	// demo initializer
	var demo = function() {

		var datatable = $('.m-datatable-modal1').mDatatable({
			data: {
				saveState: {cookie: false},
			},
			search: {
				input: $('#generalSearch'),
			},
			columns: [
				{
                    field: '',
                    width: 10,
                    textAlign: 'center',
				},
				{
                    field: '',
                    textAlign: 'center',
				},
				{
                    field: '',
                    textAlign: 'center',
				},
				{
                    field: '',
                    textAlign: 'center',
				},
				{
                    field: '',
                    textAlign: 'center',
				},
				{
                    field: '',
                    textAlign: 'center',
				},
				{
                    field: '',
                    textAlign: 'center',
				},
				{
                    field: '',
                    textAlign: 'center',
				},
			],
		});

		//$('#m_form_status, #m_form_type').selectpicker();

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

		var datatable = $('.m-datatable-modal2').mDatatable({
			data: {
				saveState: {cookie: false},
			},
			search: {
				input: $('#generalSearch'),
			},
			columns: [
				{
                    field: '',
                    width: 10,
                    textAlign: 'center',
				},
				{
                    field: '',
                    textAlign: 'center',
				},
				{
                    field: '',
                    textAlign: 'center',
				},
				{
                    field: '',
                    textAlign: 'center',
				},
				{
                    field: '',
                    textAlign: 'center',
				},
				{
                    field: '',
                    textAlign: 'center',
				},
				{
                    field: '',
                    textAlign: 'center',
				},
				{
                    field: '',
                    textAlign: 'center',
				},
			],
		});

		//$('#m_form_status, #m_form_type').selectpicker();

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
	$('#datestart').datepicker();
	$('#dateend').datepicker();
	DatatableHtmlTableDemo1.init();
	DatatableHtmlTableDemo2.init();
});