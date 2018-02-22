//== Class definition

var DatatableHtmlTableDemo = function() {
	//== Private functions

	// demo initializer
	var demo = function() {

		var datatable = $('.m-datatable').mDatatable({
			data: {
				saveState: {cookie: false},
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
                    field: '',
                    width: 40,
                    textAlign: 'center',
                },
                {
                    field: 'จำนวนผู้ใช้',
                    width: 90,
                    textAlign: 'center',
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