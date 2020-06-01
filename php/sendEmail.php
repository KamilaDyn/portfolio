<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if (isset($_POST['name']) && isset($_POST["email"])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = $_POST['subject'];
    $mailTo = "youremail";
    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";

    $mail = new PHPMailer(true);

    //smtp settings
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "youremail";
    $mail->Password = 'yoremailpassword';
    $mail->Port = 587;
    $mail->SMTPSecure = "tls";

    //email settings
    $mail->isHTML(true);
    $mail->setFrom($email, $name);
    $mail->addAddress('youremail');
    $mail->addReplyTo($_POST['email'], $_POST['name']);


    // content
    $mail->Subject = $subject;
    $mail->Body = '<h3>Name: ' . $name . '</h3>' . '<h3>Email: ' . $email . '</h3>' . '<br>Message: ' . '<p>' .  $message . '</p>. ';



    if ($mail->send()) {
        $status = 'success';
        $response = "Email is sent. ";
    } else {

        $response =  "Something went wrong: <br><br>" . $mail->ErrorInfo;
        exit(json_encode(array("status" => $status, "response" => $response)));
    }
}
