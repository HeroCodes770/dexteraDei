<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = 2;                                    
    $mail->isSMTP();                                          
    $mail->Host       = 'gmail';                   
    $mail->SMTPAuth   = true;                                 
    $mail->Username   = 'lawerhcaesar@gmail.com';                  
    $mail->Password   = 'ouzvzdkztfvqokxc';                             
    $mail->SMTPSecure = 'tls';                                
    $mail->Port       = 587;                                 

    $mail->setFrom('from@example.com', 'Mailer');
    $mail->addAddress('lawerhcaesar@gmail.com', 'Lawerh Caesar');         

    $mail->isHTML(true);                                  
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
