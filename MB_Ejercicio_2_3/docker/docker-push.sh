#!/bin/bash
## Script para subir una imagen al Docker Hub interno

if [ $# = 1 ] ; then

	docker login dockerRegistry

	if [ ! -z $(docker images -q dockerRegistry/apimutante:$1) ]; then

		docker push dockerRegistry/apimutante:$1
		docker push dockerRegistry/apimutante:latest

	else 
		
		echo "No existe una imagen local con el tag asignado"
	
	fi

else
	echo "Se debe ingresar el tag de la imagen que desea subir"
fi
