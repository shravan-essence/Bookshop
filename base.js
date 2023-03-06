window.onload =function(){
	let count = Number(localStorage.getItem("count"));

	if (count == 0) {
		$("#adminbtn").remove();
		$("#profilebtn").remove();
		$("#logoutbtn").remove();
		$("#profile-btn").remove();
		$("#usernamebtn").remove();
		$("#passwordbtn").remove();
	}
	else if(count == 1){
		$("#adminbtn").show();
		$("#profilebtn").show();
		$("#logoutbtn").show();
		$("#profile-btn").show();
		$("#usernamebtn").show();
		$("#passwordbtn").show();
		$("#login").hide();
		$("#register").hide();
	}
};

$(document).ready(function(){
  $("#registerForm").validate({
    rules :{
      username:{
        required: true,
        minlength: 4,
        pattern: /^[a-zA-Z\s]+$/ 
      },
      email:{
        required: true,
        email:true
      },
      pass1: {
        required: true,
        minlength:6
      },
      pass2: {
        required: true,
        minlength:6,
        equalTo: "#pass1"
      }
    },
    messages: {
      username: {
        required: "Please enter username",
        minlength: "Please enter minimum 4 letters",
        pattern: "Please enter only letters"
      },
      email: {
        required: "Please enter email address",
        email: "Please enter valid email"
      },
      pass1: {
        required: "Please enter password",
        minlength:"Please enter minimum 6 characters"
      },
      pass2: {
        required: "Please confirm your password",
        minlength: "Please enter minimum 6 characters",
        equalTo: "Please enter same password as above"
      },
    }
  });
  $("#loginForm").validate({
    rules :{
      username:{
        required: true,
        minlength: 4,
        pattern: /^[a-zA-Z\s]+$/ 
      },
      pass: {
        required: true,
        minlength:6
      }
    },
    messages: {
      username: {
        required: "Please enter username",
        minlength: "Please enter minimum 4 letters",
        pattern: "Please enter only letters"
      },
      pass: {
        required: "Please enter password",
        minlength:"Please enter minimum 6 characters"
      }
    }
  });
  var userInfo = []
  $("#registerBtn").click(function(){
  	var userInfo = JSON.parse(localStorage.getItem("userInfo"));
  	console.log(userInfo)
  	if($("#registerForm").valid()){
      var username = $("#registerForm #username").val()
      var email = $("#registerForm #email").val()
      var password = $("#registerForm #pass1").val()
      console.log(username);
      console.log(email);
      console.log(password);
      var valid = 0
      userInfo.forEach(function (obj) {
	      if (obj.Username == username) {
	      	alert("Username already taken");
	      	valid = 1
	      }else if (obj.Email == email){
	      	alert("Email is already taken");
	      	valid = 1
	      }
      });
      if (valid ==0){
		      userInfo.push({
		        Username: username,
		        Email: email,
		        Password: password
      		});
		      localStorage.removeItem("userInfo");
      		localStorage.setItem("userInfo", JSON.stringify(userInfo));
		      alert("Registered successfully")
		      location.reload()
		      var url = $("#loginModal").data('target')
        	location.replace(url);
      	}
    }
  });
	
  $("#loginBtn").click(function(){
  	var userInfo = JSON.parse(localStorage.getItem("userInfo"));
  	var valid = 0
  	if($("#loginForm").valid()){
  		var username = $("#loginForm #username").val()
      var password = $("#loginForm #pass").val()
      console.log(username);
      console.log(password);
      console.log(userInfo)
      userInfo.forEach(function (obj) {
	      if (obj.Username == username && obj.Password == password) {
	        valid = 1
	      }
    	})
      if (valid==1){
    		alert("Logged In successfully");
	      localStorage.removeItem("count");
	      localStorage.setItem("count","1");
	      localStorage.setItem("user",{"username":username,"password":password})
	 		}
	 		else{
	 			alert("Please enter valid credentials")
	 		}
  	}
  });
  $("#logoutbtn").click(function(){
  	localStorage.removeItem("count");
	  localStorage.setItem("count","0");
	  localStorage.removeItem("user");

  });
});