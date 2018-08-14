<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: POST");
  header('Content-type: application/json');
  if(false){// 发送邮件
      $json = json_encode(array(
        'code' => 500,
        'msg' => $mail->ErrorInfo
      ));
    }else{
      $json = json_encode(array(
        'code' => 200,
        'msg' => 'ok'
      ));
    }
  echo $json;
?>