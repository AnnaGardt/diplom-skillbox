<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$comments = $_POST['comments'];

$mail->isSMTP();                                      
$mail->Host = 'smtp.jino.ru';  						   
$mail->SMTPAuth = true;                               
$mail->Username = 'info@annagardt.ru'; 
$mail->Password = '*MishAnya8717'; 
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465; 

$mail->setFrom('info@annagardt.ru'); 
$mail->addAddress('anna.gardt.87@mail.ru');     

$mail->isHTML(true);                                  

$mail->Subject = 'Заявка с сайта Dmitry Alekseev Portfolio';
$mail->Body    = '<b>Новая заявка на сайте</b><br><br><i>Контактные данные:</i><br><br> Имя: ' . $name . '<br><br>Телефон: ' . $phone . "<br><br>Email: " . $email . "<br><br>Комментарии: " . $comments . "<br><br>";
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
   header('location: ../index.html');
}
?>