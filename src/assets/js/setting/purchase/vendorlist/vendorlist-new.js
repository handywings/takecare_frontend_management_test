jQuery(document).ready(function() {
	$('#select_bill').on('change', function() {
		$('#div_bill_2').hide();
		$('#div_bill_3').hide();
		$('#div_bill_4').hide();
		$('#div_bill_5').hide();
		$('#div_bill_'+$(this).val()).show();
	});

	$('#select_payment').on('change', function() {
		$('#div_payment_2').hide();
		$('#div_payment_3').hide();
		$('#div_payment_4').hide();
		$('#div_payment_5').hide();
		$('#div_payment_'+$(this).val()).show();
	});
});