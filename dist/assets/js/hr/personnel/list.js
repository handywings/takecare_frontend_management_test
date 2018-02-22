//== Class definition

var DefaultDatatableDemo = function () {
	//== Private functions

	// basic demo
	var demo = function () {

		var datatable = $('.m_datatable').mDatatable({
			// datasource definition
			data: {
				type: 'remote',
				source: {
					read: {
						url: 'https://keenthemes.com/metronic/preview/inc/api/datatables/demos/default.php'
					}
				},
				pageSize: 5, // display 20 records per page
				serverPaging: true,
				serverFiltering: true,
				serverSorting: true
			},

			// layout definition
			layout: {
				theme: 'default', // datatable theme
				class: '', // custom wrapper class
				scroll: true, // enable/disable datatable scroll both horizontal and vertical when needed.
				height: 450, // datatable's body's fixed height
				footer: false // display/hide footer
			},

			// column sorting
			sortable: true,

			// toolbar
			toolbar: {
				// toolbar placement can be at top or bottom or both top and bottom repeated
				placement: ['bottom'],

				// toolbar items
				items: {
					// pagination
					pagination: {
						// page size select
						pageSizeSelect: [5, 10, 20, 30, 50] // display dropdown to select pagination size. -1 is used for "ALl" option
					},
				}
			},

			search: {
				input: $('#generalSearch')
			},

			// columns definition
			columns: [{
				field: "RecordID",
				title: "#",
				sortable: false, // disable sort for this column
				width: 20,
				selector: {class: 'm-checkbox--solid m-checkbox--brand'}
			}, {
				width: 400,
				field: 'CompanyAgent',
				title: 'ลูกค้า',
				template: function(data) {
				  var number = mUtil.getRandomInt(1, 14);
				  var user_img = '100_' + number + '.jpg';
	  
				  if (number > 8) {
					output = '<div class="m-card-user m-card-user--sm">\
									  <div class="m-card-user__pic">\
										  <img src="./assets/app/media/img/users/' + user_img + '" class="m--img-rounded m--marginless" alt="photo">\
									  </div>\
									  <div class="m-card-user__details">\
										  <span class="m-card-user__name">' + data.CompanyAgent + '</span>\
										  <a href="" class="m-card-user__email m-link">Member ID : M000000' +
										  number + '</a>\
									  </div>\
								  </div>';
				  } else {
					var stateNo = mUtil.getRandomInt(0, 7);
					var states = [
					  'success',
					  'brand',
					  'danger',
					  'accent',
					  'warning',
					  'metal',
					  'primary',
					  'info'];
					var state = states[stateNo];
	  
					output = '<div class="m-card-user m-card-user--sm">\
									  <div class="m-card-user__pic">\
										  <div class="m-card-user__no-photo m--bg-fill-' + state +
						'"><span>' + data.CompanyAgent.substring(0, 1) + '</span></div>\
									  </div>\
									  <div class="m-card-user__details">\
										  <span class="m-card-user__name">' + data.CompanyAgent + '</span>\
										  <a href="" class="m-card-user__email m-link">Member ID : M000000' +
										  number + '</a>\
									  </div>\
								  </div>';
				  }
	  
				  return output;
				},
			  }, {
				field: "ShipCountry",
				title: "Ship Country",
				width: 150,
				template: function (row) {
					// callback function support for column rendering
					return row.ShipCountry + ' - ' + row.ShipCity;
				}
			}, {
				field: "ShipCity",
				title: "Ship City",
				sortable: false // disable sort for this column
			}, {
				field: "Currency",
				title: "Currency",
				width: 100
			}, {
				field: "ShipDate",
				title: "Ship Date",
				sortable: 'asc'
			}, {
				field: "Latitude",
				title: "Latitude"
			}, {
				field: "Status",
				title: "Status",
				// callback function support for column rendering
				template: function (row) {
					var status = {
						1: {'title': 'Pending', 'class': 'm-badge--brand'},
						2: {'title': 'Delivered', 'class': ' m-badge--metal'},
						3: {'title': 'Canceled', 'class': ' m-badge--primary'},
						4: {'title': 'Success', 'class': ' m-badge--success'},
						5: {'title': 'Info', 'class': ' m-badge--info'},
						6: {'title': 'Danger', 'class': ' m-badge--danger'},
						7: {'title': 'Warning', 'class': ' m-badge--warning'}
					};
					return '<span class="m-badge ' + status[row.Status].class + ' m-badge--wide">' + status[row.Status].title + '</span>';
				}
			}, {
				field: "Type",
				title: "Type",
				// callback function support for column rendering
				template: function (row) {
					var status = {
						1: {'title': 'Online', 'state': 'danger'},
						2: {'title': 'Retail', 'state': 'primary'},
						3: {'title': 'Direct', 'state': 'accent'}
					};
					return '<span class="m-badge m-badge--' + status[row.Type].state + ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' + status[row.Type].state +'">' + status[row.Type].title + '</span>';
				}
			}, {
				field: "Actions",
				width: 110,
				title: "Actions",
				sortable: false,
				overflow: 'visible',
				template: function (row, index, datatable) {
					var dropup = (datatable.getPageSize() - index) <= 4 ? 'dropup' : '';
					return '\
						<div class="dropdown '+ dropup +'">\
							<a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">\
                                <i class="la la-ellipsis-h"></i>\
                            </a>\
						  	<div class="dropdown-menu dropdown-menu-right">\
						    	<a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\
						    	<a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\
						    	<a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\
						  	</div>\
						</div>\
						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\
							<i class="la la-edit"></i>\
						</a>\
						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\
							<i class="la la-trash"></i>\
						</a>\
					';
				}
			}]
		});


		var query = datatable.getDataSourceQuery();

		$('#m_form_status').on('change', function () {
			datatable.search($(this).val(), 'Status');
		}).val(typeof query.Status !== 'undefined' ? query.Status : '');

		$('#m_form_type').on('change', function () {
			datatable.search($(this).val(), 'Type');
		}).val(typeof query.Type !== 'undefined' ? query.Type : '');

		$('#m_form_status, #m_form_type').selectpicker();



		$('#m_datatable_clear').on('click', function () {
			$('#m_datatable_console').html('');
		});

		$('#m_datatable_reload').on('click', function () {
			datatable.reload();
		});
	};

	var eventsCapture = function () {
		$('.m_datatable')
			.on('m-datatable--on-init', function () {
				eventsWriter('Datatable init');
			})
			.on('m-datatable--on-layout-updated', function () {
				eventsWriter('Layout render updated');
			})
			.on('m-datatable--on-ajax-done', function () {
				eventsWriter('Ajax data successfully updated');
			})
			.on('m-datatable--on-ajax-fail', function (e, jqXHR) {
				eventsWriter('Ajax error');
			})
			.on('m-datatable--on-goto-page', function (e, args) {
				eventsWriter('Goto to pagination: ' + args.page);
			})
			.on('m-datatable--on-update-perpage', function (e, args) {
				eventsWriter('Update page size: ' + args.perpage);
			})
			.on('m-datatable--on-reloaded', function (e) {
				eventsWriter('Datatable reloaded');
			})
			.on('m-datatable--on-check', function (e, args) {
				eventsWriter('Checkbox active: ' + args.toString());
			})
			.on('m-datatable--on-uncheck', function (e, args) {
				eventsWriter('Checkbox inactive: ' + args.toString());
			})
			.on('m-datatable--on-sort', function (e, args) {
				eventsWriter('Datatable sorted by ' + args.field + ' ' + args.sort);
			});
	};

	var eventsWriter = function (string) {
		var console = $('#m_datatable_console').append(string + "\t\n");
		$(console).scrollTop(console[0].scrollHeight - $(console).height());
	};

	return {
		// public functions
		init: function () {
			demo();
			eventsCapture();
		}
	};
}();

jQuery(document).ready(function () {
	DefaultDatatableDemo.init();
});