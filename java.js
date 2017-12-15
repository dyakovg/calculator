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
	
	var op1 = document.getElementById('op1');
	var op2 = document.getElementById('op2');
	var op = document.getElementById('op');
	var hasError=false;
	
	if (NaN !== parseInt(op1.value)) {
		op1.style.backgroundColor='red';
		hasError=true;
	}
	
	if (NaN !== parseInt(op2.value)) {
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
	
	//var result='';
	switch(op.value){
		case 'add':
			result = op1.value + op2.value;
			break;
		case 'sub':
			result = op1.value - op2.value;
			break;
		case 'mul':
			result = op1.value * op2.value;
			break;
		case 'div':
			result = op1.value / op2.value;
			break;
			
	}
}

function Total()
{
	var sumirane = submitHandler();
    document.getElementById('result').innerHTML = sumirane;
 

}

var form = document.getElementById('calc');
form.addEventListener('submit', submitHandler);
form.addEventListener('keydown', formatNumber);