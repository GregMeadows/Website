<?php

// Strip potential attack characters
function strip($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

function error($errorMessage) {
    echo json_encode(["sent" => false, "message" => $errorMessage]);
    die();
}

// Set variables
$email = null;
$message = null;

// Email address to send to (encoded so it is not picked up by bots)
$sendTo = base64_decode("d2ViZm9ybUBncmVnbWVhZG93cy51aw==");

// Request is not POST
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    error("Request was not POST");
}

// Get form data and strip it
$email = strip($_POST["email"]);
$message = strip($_POST["message"]);

// Normalise Message
$message = str_replace("\r\n", "\n", $message);
$message = str_replace("\r", "\n", $message);

// Email Checks
if (empty($email) or !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    error("Valid email required");
}
if (strlen($email) > 254) {
    error("Email cannot exceed 254 letters");
}

// Message Checks
if (empty($message) or strlen($message) < 10) {
    error("Message must be longer than 10 letters");    
}

// Get date and time
$dtStamp = date('d F Y \a\t H:i');

// Find ip
if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $forwardip = $_SERVER['REMOTE_ADDR'] . '  Forwarding:  ' . $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $forwardip = $_SERVER['REMOTE_ADDR'];
}

// Create HTML Email
$msg = <<< HTML
    <html>
    <head>
    <style>
    table, th, td {
        border: 1px solid #999999;
        border-collapse: collapse;
    }
    table {
        min-width: 600px;
    }
    th, td {
        padding: 10px;
        text-align: left;    
    }
    table tr:nth-child(odd) {
        background-color: #F6F6F6;
    }
    h5 {
        color: #333333;
        margin: 0;
        padding: 10px;
    }
    pre {
        font-size: 14px;   
    }
    </style>
    </head>
    <body>
        <h3>$sub</h3>
        <table style='width:40%'>
            <tr><th>Name:</th><td>$name</td></tr>
            <tr><th>Email:</th><td>$email</td></tr>
            <tr><th>Date:</th><td>$dtStamp</td></tr>
            <tr><th>Sender IP:</th><td>$forwardip</td></tr>
            <tr><td colspan='2'><strong>Message:</strong><pre>$message</pre></td></tr>
        </table>
        <h5>Sent via webform on gregmeadows.uk/contact<h5>
    </body>
    </html>
HTML;

// Headers
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= "From: $sendTo" . "\r\n";

// Send Email
mail($sendTo, $sub, $msg, $headers);

// Success
http_response_code(200);
echo json_encode(["sent" => true, "message" => null]);
