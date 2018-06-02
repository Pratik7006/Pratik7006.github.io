<?php
    if(isset($_POST['user_submit']))
    {
        $fname = $_POST['first_name'];
        $lname = $_POST['last_name'];
        $name = $fname + $lname;
        $email = $_POST['user_email'];
        $contact = $_POST['user_contact'];
        $flat_type = $_POST['flat_type'];
           echo $fname;
    echo $lname;
    echo $name;
    echo $email;
    echo $contact;
    echo $flat_type;
    }

    // $to = "wowthemesnet@gmail.com"; 
    // $from = $_REQUEST['email']; 
    // $name = $_REQUEST['name']; 
    // $headers = "From: $from"; 
    // $subject = "Message via RunCharity"; 
 
    // $fields = array(); 
    // $fields{"name"} = "name"; 
    // $fields{"email"} = "email"; 
    // $fields{"phone"} = "phone"; 
    // $fields{"message"} = "message";
 
    // $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }
 
    // $send = mail($to, $subject, $body, $headers);
 
?>