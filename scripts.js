$(document).ready(function(){

	// 2 new methods - submit and Val
	$('.sign-up-form').submit(function(){
		// stop form from leaving page
		event.preventDefault();
		// check name input field

		$('input').each(function(){
			var currentTagClass = $(this).attr('id');
			var errorClass = '.' + currentTagClass + '-error';
			console.log(currentTagClass);
			console.log(errorClass);
			if($(this).val() == ''){
				$(errorClass).html('This field is required');
				$(errorClass).show();
				$('input').addClass('error');
			}else{
				$(errorClass).hide();
				$('input').addClass('valid');
			}
		});

		var password = $('#password').val();
		var password2 = $('#confirm_password').val();
		var numberFound = false;
		for(let i = 0; i < password.length; i++){
			if(!isNaN(Number(password[i]))){
				numberFound = true;
			}
		}
		if (password !== password2){
			$('.password-error').html('Your password must be at least 8 characters long.');
			$('.password-error').show();
			$('.confirm_password-error').html('Your password must be at least 8 characters long.');
			$('.confirm_password-error').show();
		}else if(password.length < 8){
			$('.password-error').html('Your passwords must match.');
			$('.password-error').show();
			$('.confirm_password-error').html('Your passwords must match.');
			$('.confirm_password-error').show();
		}else if(!numberFound){
			$('.password-error').html('Your password is weak. Consider adding a number.');
			$('.password-error').removeClass('error');
			$('.password-error').addClass('caution');
			$('.password-error').show();
			$('.confirm_password-error').html('Your password is weak. Consider adding a number.');
			$('.confirm_password-error').removeClass('error');
			$('.confirm_password-error').addClass('caution');
			$('.confirm_password-error').show();
		}else{
			$('.password-error').hide();
			$('.password-error').removeClass('caution');
			$('.confirm_password-error').hide();
			$('.confirm_password-error').removeClass('caution');
		}
	})
});