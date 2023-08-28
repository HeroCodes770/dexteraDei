<?php
if (isset($_POST['submit'])) {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Prepare email
    $to = "your@email.com"; // Your email address
    $subject = "New Contact Form Message from $name";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    $email_body = "You have received a new message from your website contact form.\n\n".
                  "Here are the details:\n\nName: $name\n\nEmail: $email\n\nMessage:\n$message";

    // Send email
    mail($to, $subject, $email_body, $headers);
    
    // Redirect to thank you page or show a thank you message
    echo "Thank you for your message!";
}
?>
