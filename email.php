<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'vasiljevnenad1@gmail.com';
    $subject = "New message from $name";
    $headers = "From: $email\r\n";
    if(mail($to, $subject, $message, $headers)){
        echo 'Email sent successfully';
    }
?>

    