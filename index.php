<?php
//$connection = mysql_connect("localhost", "root", ""); // Establishing Connection with Server..
//$db = mysql_select_db("mydba", $connection); // Selecting Database
////Fetching Values from URL
$first_name=$_POST['first_name'];
$last_name=$_POST['user_lname'];
$email=$_POST['user_email'];
$contact=$_POST['user_contact'];
$flat_type=$_POST['user_flat_type'];
//Insert query
//$query = mysql_query("insert into form_element(name, email, password, contact) values ('$name2', '$email2', '$password2','$contact2')");
echo "Form Submitted Succesfully";
echo $first_name;
echo $last_name;
echo $email;
echo $contact;
echo $flat_type;

//mysql_close($connection); // Connection Closed
?>