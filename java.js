
function formatNumber(e) {
	var keyCode=e.which;
	console.log(keyCode);
	if ((keyCode > 57) && (keyCode < 13)){
		e.preventDefault;
	}
	console.log(e.which);
}


function submitHandler() {
	console.log('Entering the arena...');
	event.preventDefault();
	
	var op1 = $('op1');
	var op2 = $('op2');
	var op = $('op');
	var hasError=false;
	
	var one = parseInt(op1.value);
	var two = parseInt(op2.value);

	if (NaN === one) {
		op1.style.backgroundColor='red';
		hasError=true;
	}
	
	if (NaN === two) {
		op2.style.backgroundColor='red';
		hasError=true;
	}
	
	var validOp=['add', 'sub', 'mul', 'div']
	if (validOp.indexOf(op.value) == -1 ){
		op.style.backgroundColor='red';
		hasError=true;
	}
	
	if (hasError) {
		return false;
	}
	
	

	var result = 0;
	switch(op.value){
		case 'add':
			result = one + two;
			break;
		case 'sub':
			result = one - two;
			break;
		case 'mul':
			result = one * two;
			break;
		case 'div':
			result = one / two;
			break;
			
	}
	$('result').innerHTML = result;
	$('op1').value = '';
	$('op2').value = '';
	$('op').selectedIndex = 0;
} 


//<![CDATA[
function $(e){
  return document.getElementById(e);
}
//]]> 

var form = document.getElementById('calc');
form.addEventListener('submit', submitHandler);
