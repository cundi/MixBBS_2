function lsSubmit(op) {
	var op = !op ? 0 : op;
	if(op) {
		$('lsform').cookietime.value = 2592000;
	}
	if($('ls_username').value == '' || $('ls_password').value == '') {
		showWindow('login', 'member.php?mod=logging&action=login' + (op ? '&cookietime=1' : ''));
	} else {
		ajaxpost('lsform', 'return_ls', 'return_ls');
	}
	return false;
}

function errorhandle_ls(str, param) {
	if(!param['type']) {
		showError(str);
	}
}