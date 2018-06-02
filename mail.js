// JavaScript Document
// JavaScript Document
$(document).ready(function(){
$("#user_submit").click(function(){
var user_fname = $("#first_name").val();
var user_lname = $("#last_name").val();
var user_email = $("#user_mail").val();
var user_contact = $("#contact_number").val();
var user_flat_type = $("#flat_type").val();
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'first_name='+ user_fname + '&user_lname='+ user_lname + '&user_email='+ user_email+  '&user_contact='+ user_contact + '&user_flat_type='+ user_flat_type;
if(user_fname==''||user_lname==''||user_email==''||user_contact==''|| user_flat_type=='' )
{
alert("Please Fill All Fields");
}
else
{
// AJAX Code To Submit Form.
$.ajax({
type: "POST",
url: "index.php",
data: dataString,
cache: false,
success: function(data){
alert(data);
}
});
}
return false;
});
});