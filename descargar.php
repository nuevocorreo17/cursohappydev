<?php
require_once("config/database.php");
date_default_timezone_set("America/Lima");

$database = new Database();
$db = $database->getConnection();

$declaracion = $db->prepare("SELECT nombre,email,asunto,mensaje,fecha  FROM tb_contacto");

$declaracion->execute();

$lista =  $declaracion->fetchAll();
$nombre_archivo = date("YmdHis").".xls";

header('Content-Encoding: UTF-8');
header("Content-Type: application/vnd.ms-excel");
header("Cache-Control: no-cache, must-revalidate");
header('Content-Disposition: attachment;filename="'.$nombre_archivo.'"');

$html = "<table><tr><th>Nombre</th><th>Email</th><th>Asunto</th><th>Mensaje</th><th>Fecha</th></tr>";

foreach ($lista as $value) {
	$html.="<tr>";
	$html.="<td>".$value["nombre"]."</td>";
	$html.="<td>".$value["email"]."</td>";
	$html.="<td>".$value["asunto"]."</td>";
	$html.="<td>".$value["mensaje"]."</td>";
	$html.="<td>".$value["fecha"]."</td>";
	$html.="</tr>";
}

$html.= "</table>";

echo utf8_decode($html);
die();
?>