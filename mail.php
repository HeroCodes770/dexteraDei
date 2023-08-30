<?php

 // Import PHPMailer classes into the global namespace
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    
// Load Composer's autoloader
    require 'vendor/autoload.php';
    
// Validation to ensure that the necessary POST variables exist
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
    // Input Sanitization
    echo "<meta http-equiv='refresh' content='0'>";

    $senderName = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $senderEmail = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = isset($_POST['subject']) ? filter_var($_POST['subject'], FILTER_SANITIZE_STRING) : 'No Subject';
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);


    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    // Create an instance of PHPMailer
    $mail = new PHPMailer(true);

        // Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'lawerhcaesar@gmail.com';  // Replace with your Gmail address
        $mail->Password   = 'ouzvzdkztfvqokxc';   // Replace with your Gmail password or App Key
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom($senderEmail, $senderName);
        $mail->addReplyTo($senderEmail, $senderName);
        $mail->addAddress('lawerhcaesar@gmail.com', 'Lawerh Caesar');  // Replace with your receiving email address
        $mail->addAddress('joshua@dexteradei.com', 'Joshua Gasu');  // Replace with your receiving email address

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = "Contact Form response from: {$senderName} <br> Email: {$senderEmail} <br> Message: {$message}";
        $mail->AltBody = "Contact Form response from: {$senderName} \n Email: {$senderEmail} \n Message: {$message}";

        $mail->send();
        echo 'Message has been sent';
    }