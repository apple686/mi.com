<?php
include('./conn.php');
$sql = "select * from product";

$res = $mysqli->query($sql);
$mysqli->close();
$arr=[];


while($rows=$res->fetch_assoc()){
    array_push($arr,$rows);
}
$json=json_encode($arr);

echo $json;

?>