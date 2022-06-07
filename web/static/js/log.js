
$(".wxlog").hide();
$(".qqlog").hide();
function wxlog() {
	// body...
	console.log(1);
	$(".wxlog").show();
	$(".qqlog").hide();
}

function qqlog(argument) {
	// body...
	console.log(2);
	$(".wxlog").hide();
	$(".qqlog").show();

}
function hidelog() {
	// body...
	$(".wxlog").hide();
	$(".qqlog").hide();
}
function closelog(argument) {
	// body...
	$(".wxlog").hide();
	$(".qqlog").hide();
}