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
                    field: 'รหัสสาเหตุ',
                    width: 60,
                    textAlign: 'center'
				},
				{
                    field: 'สาเหตุการคืนสินค้า (TH)',
                    width: 180,
                    textAlign: 'center'
				},
				{
                    field: 'สาเหตุการคืนสินค้า (EN)',
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