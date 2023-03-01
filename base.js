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
	else {
		$("#adminbtn").show();
		$("#profilebtn").show();
		$("#logoutbtn").show();
		$("#profile-btn").show();
		$("#usernamebtn").show();
		$("#passwordbtn").show();
	}
};
