<?php

function revRot($s, $sz) {
  if ($sz <= 0 || strlen($s) == 0 || $sz > strlen($s)) return "";
  $counter = floor(strlen($s) / $sz);
  $finalString = "";
  for ($i=0; $i < $counter; $i++) {
    $tempString = substr($s, $sz*$i, $sz);
    if (getMultipliedNumber ($tempString)){
      $finalString .= strrev($tempString);
    } else{
      $finalString .=  substr($tempString, ($sz-1)*-1) . substr($tempString, 0,1) ;
    }
  }
  return $finalString;
}

function getMultipliedNumber ($num){
  $temparray = str_split($num);
  $retNum = 0;
  for ($i=0; $i < count($temparray) ; $i++)  $retNum += pow($temparray[$i], 2);
  if ($retNum %2 == 0) return true;
  return false;
}

echo revrot("1234", 0); //0
echo revrot("123456", 6); // "234561"
echo revrot("123456987654", 6); // "234561876549"
echo revrot("123456987653", 6); // "234561356789"
echo revrot("733049910872815764", 5); // "330479108928157"
echo revrot("08728157", 8); //75182780
echo revrot("73304991087281576455176044327690580265896", 8); //"1994033775182780067155464327690480265895"

 ?>
