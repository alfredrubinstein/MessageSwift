🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁
//AL ENTRAR A INBOX ,AUTOMATICAMENTE...
//devolver todos los titulos y sus id de mensajes entrantes
//AL NAVEGAR A /ENVIADOS ,AUTOMATICAMENTE...
//devolver todos los titulos y sus id de mensajes enviados
//AL NAVEGAR A /BORRADOS ,AUTOMATICAMENTE...
//devolver todos los titulos y sus id de mensajes eliminados
//AL NAVEGAR A /FAVORITOS ,AUTOMATICAMENTE...
//devolver todos los titulos y sus id de mensajes favoritos


//AL SELECCIONAR UN MENSAJE DE INBOX
//mostrar el contenido de un mensaje especifico segun su id pasado con el body, cambiar el estado a leido, y mostrar el contenido de los mensajes de respuesta a ese mensaje (usando populate a la propiedad msg de email)

//MANDAR MENSAJE (AL PRESIONAR EN MANDAR)...
//mandar un mensaje a un email especifico segun su id pasado con el body, y agregarlo a la lista de enviados del usuario, y de recibidos en el usuario destino

//RESPONDER A UN MENSAJE (AL PRESIONAR EN RESPONDER)...
//agregar un mensaje de respuesta a un mensaje especifico segun su id pasado con el body, 


//CAMBIOS DE ESTADOS DE MENSAJES EN USERS (QUE NO OCURREN AUTOMATICAMENTE)...
//cambiar el estado de un mensaje a favorito segun su id pasado con el body (al presionar en favorito)

//cambiar el estado de un mensaje a eliminado segun su id pasado con el body (al presionar en eliminar)

//(leido se cambia automaticamente al ver el mensaje)







//LOGIN
//AL INGRESAR USUARIO Y CONTRASENA (O CADA DATO POR SEPARADO)
-verificaciones en nombre usuarios y password y mandar a "bandeja de entrada"
//SIGNUP
//AL AGREGAR NOMBRE-USUARIO...
-ERROR=
-CORRECTO=mandar a agregar contrasena
//AL AGREGAR CONTRASENA (PUEDE SERVIR PARA RECUPERAR CONTRASENA O CAMBIAR CONTRASENA)...
-ERROR=
-CORRECTO=agregar usuario
//AL PRESIONAR EN OLVIDE CONTRASENA...
-
//AL PRESIONAR EN CAMBIAR CONTRASENA...
-





//OPERACIONES ADMIN...
//agregar usuario
//borrar usuario
//actualizar usuario





//COMPOCISION DE MODELOS...

//email.model.js
//titulo -subject -string
//mensaje -msg -array de objeto con objectId y su ref
//fecha de actualizacion -lastDate -date



//message.model.js
//destinatario -to -array de un objeto
//remitente -from -string
//fecha de creacion -date -date
//contenido -content -string
//titulo de contenido -subject -string



//user.model.js
//email -email -string, unique y required
//nombre de usuario -fullName -string, required
//codigo de el usuario -password -string, select false
//link a un avatar -avatar -string
//arreglo de objetos email que contiene lo referente a cada usuario de forma diferente-emails -array de un objeto...
//email -email -object id
//mandado -isSent -boolean
//recivido -isRecieved -boolean
//favorite -isFavorite -boolean
//borrado -isDeleted -boolean
//leido -isRead -boolean, default false
//isActive -isActive -boolean, default true
