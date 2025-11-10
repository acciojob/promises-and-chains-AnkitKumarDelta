//your JS code here. If required.
let form = document.querySelector('form');
let name = document.querySelector('#name');
let age = document.querySelector('#age');

function promise(name,age){
	return new Promise((res,rej)=>{
		if(age>18){
			setTimeout(()=>{
				let str = `Welcome, ${name}. You can vote.`;
				res(str);
			},4000);
		}
		else{
			setTimeout(()=>{
				let str = `Oh sorry ${name}. You aren't old enough.`;
				rej(str);
			},4000);
		}
	})
}
form.addEventListener('submit',(e)=>{
	e.preventDefault();
	if(name.value='' || age.value==''){
		alert('Please enter valid details');
		return;
	}
	promise(name.value,age.value)
	.then(data=>{
		alert(data);
	})
	.catch(err=>{
		alert(err);
	})
})