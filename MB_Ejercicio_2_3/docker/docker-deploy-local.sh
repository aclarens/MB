#!/bin/bash
## Script para levantar una imagen e instanciar un container de una version determinada en el Docker local

if [ $# = 1 ] ; then

# Elimino en caso de que exista una la imagen y los containers que quiero reemplazar
	docker stop apimutante
	docker rm apimutante

	if [ ! -z $(docker images -q dockerRegistry/apimutante:$1) ]; then

		docker rmi dockerRegistry/apimutante:$1

	fi

	if [ ! -z $(docker images -q dockerRegistry/apimutante:latest) ]; then

		docker rmi dockerRegistry/apimutante:latest

	fi
# Creo la nueva imagen
	docker build -t dockerRegistry/apimutante:$1 -t dockerRegistry/apimutante:latest .

# Instancio el container
	docker run -d --restart=always --name apimutante -p 3679:80 dockerRegistry/apimutante:$1

#Como puerto puse 3679, verificar algun puerto que se encuentre libre en el servidor

else
	echo "Se debe ingresar el tag de la imagen que desea deployar."
fi
