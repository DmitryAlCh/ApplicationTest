function submit( callback ){
			var xhr = new XMLHttpRequest();
			var token = document.getElementById('token').value;
			xhr.open('GET', 'getjob?token='+token, false);
			xhr.onload = function(){
				if(typeof callback == 'function')
					callback(xhr.response);
			}
			xhr.send();
    };

module.exports = {
  submit:submit
}
