
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
	
	var result;
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
	//document.getElementById("result").innerHTML=E('result').value;
} 


//<![CDATA[
var pre = onload; // previous onload? - window can only have one onload property using this style of Event delegation
onload = function(){

if(pre)pre();
var doc = document, bod = doc.body;
function E(e){
  return doc.getElementById(e);
}
var result = E('result'); // example of Element stored in variable
E('eqn-bg').onclick = function(){
  result.innerHTML = E('op1').value + E('op2').value + E('result').value ;
  
}

}
//]]> 



/*var Calculator = function(){
  var _$self = $(this);
  var _$e = $(
      "<div class='Calculator'>" +
      "<input type='text' class='1'>" +
      "<select class='select'>" +
      Object.keys(OPERATIONS).map(function(key) {
        return '<option>' + key + '</option>';
      }).join('') +
      "</select>" +
      "<input type='text' class='2'>" +
      "<div class='result'></div>" +
      "</div>"
  );
  var _$txt_1 = _$e.find('.1');
  var _$txt_2 = _$e.find('.2');
  var _$select = _$e.find('.select');
  var _$ctnr_result = _$e.find('.result'); */
  
  
/*function Total()
{
	var sumirane = submitHandler();
    document.getElementById('result').innerHTML = sumirane;
 

} */

var form = document.getElementById('calc');
form.addEventListener('submit', submitHandler);
