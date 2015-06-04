// $(document).on('ready',start);

// function start(e){

// 	$('#btn').on('click', onBtn);
// 	function onBtn(e){

// 		console.log('#btn')
// 		var myMsg = {

// 			username: 'Logan',
// 			text: 'i\'m awesome'
// 		}
// 		$.post('http://tiny-pizza-server.herokuapp.com/collections/austin', myMsg);

// 	}
// 	//gets the data from server
// 	function getMsg(){

// 		$.get('http://tiny-pizza-server.herokuapp.com/collections/austin', msgReceived, 'json');


// 	}

// 	//filters the data
// 	function msgReceived(msgList){
// 		var htmlString = '';

// 		for(var i=0; i <msgList.length; i++){
// 			var msg = msgList[i];
// 			if(msg.hasOwnProperty('username') && msg.hasOwnProperty('text')){
// 				htmlString += '<div>'+ msg.username+ '-'+ msg.text+'</div>';
// 			}
// 		}

// 		$('#list').html(htmlString);
// 	}

// 	setInterval(getMsg, 500);
// 	getMsg();
// }


