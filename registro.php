<?php

$nombre = $_POST["nombre"];
$email = $_POST["email"];
$asunto = $_POST["asunto"];
$mensaje = $_POST["mensaje"];


// if(isset($nombre) and !empty($nombre))
// {
// 	if(isset($email) and !empty($email))
// 	{
// 		if(isset($asunto) and !empty($asunto))
// 		{
// 			if(isset($mensaje) and !empty($mensaje))
// 			{
// 				echo "Se registró satisfactoriamente";
// 			}else{
// 				echo "Ingrese mnesaje";
// 			}
// 		}else{
// 			echo "Ingrese asunto";
// 		}
// 	}else{
// 		echo "Ingrese email";
// 	}
// }else{
// 	echo "Ingrese nombre";
// }
$respuesta = array();
$listaerrores = array();

// if(isset($nombre) and !empty($nombre))
// {
// 	if(isset($email) and !empty($email))
// 	{
// 		if(isset($asunto) and !empty($asunto))
// 		{
// 			if(isset($mensaje) and !empty($mensaje))
// 			{
// 				$respuesta["tipo"] = 1;
// 				$respuesta["mensaje"] = "Se registró satisfactoriamente";
// 			}else{
// 				$respuesta["tipo"] = 2;
// 				$respuesta["mensaje"] = "Ingrese mnesaje";				
// 			}
// 		}else{
// 			$respuesta["tipo"] = 2;
// 			$respuesta["mensaje"] = "Ingrese asunto";				
// 		}
// 	}else{
// 		$respuesta["tipo"] = 2;
// 		$respuesta["mensaje"] = "Ingrese email";
// 	}
// }else{
// 	$respuesta["tipo"] = 2;
// 	$respuesta["mensaje"] = "Ingrese nombre";
// }

if(!isset($nombre) or empty($nombre))
{
	array_push($listaerrores, array(
		"id" => "nombre",
		"mensaje" => "Por favor, ingresa nombre"
	));
}

if(!isset($email) or empty($email))
{
	array_push($listaerrores, array(
		"id" => "email",
		"mensaje" => "Por favor, ingresa email"
	));
}


if(!isset($asunto) or empty($asunto))
{
	array_push($listaerrores, array(
		"id" => "asunto",
		"mensaje" => "Por favor, ingresa asunto"
	));
}	


if(!isset($mensaje) or empty($mensaje))
{
	array_push($listaerrores, array(
		"id" => "mensaje",
		"mensaje" => "Por favor, ingresa mnesaje"
	));
}

if(count($listaerrores) > 0)
{
	$respuesta["tipo"] = 2;
	$respuesta["errores"] = $listaerrores;
}else{
	$respuesta["tipo"] = 1;
	$respuesta["mensaje"] = "Se registró satisfactoriamente";
}	

echo json_encode($respuesta);
?>