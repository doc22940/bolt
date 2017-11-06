<?php

$function = new Twig_SimpleFunction('json_decode', function ($fileName, $prefix = '/dist') {

  $documentRoot = trim(getcwd(), "");
  $filePath = $documentRoot . $prefix . $fileName;

  if ($fileName !== '' && file_exists($filePath)) {
    $content = file_get_contents($filePath);
    return $content;
  } else {
    return '';
  }

});