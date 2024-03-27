🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁
//AL ENTRAR A INBOX ,AUTOMATICAMENTE...
//devolver todos los titulos y sus id de mensajes entrantes ,de el id de el usuario registrado
//AL NAVEGAR A /ENVIADOS ,AUTOMATICAMENTE...
//devolver todos los titulos y sus id de mensajes enviados ,de el id de el usuario registrado
//AL NAVEGAR A /BORRADOS ,AUTOMATICAMENTE...
//devolver todos los titulos y sus id de mensajes eliminados ,de el id de el usuario registrado
//AL NAVEGAR A /FAVORITOS ,AUTOMATICAMENTE...
//devolver todos los titulos y sus id de mensajes favoritos ,de el id de el usuario registrado


//AL SELECCIONAR UN MENSAJE DE INBOX
//mostrar el contenido de un mensaje especifico segun su id pasado con el body, cambiar el estado a leido, y mostrar el contenido de los mensajes de respuesta a ese mensaje (usando populate a la propiedad msg de email)

//MANDAR MENSAJE (AL PRESIONAR EN MANDAR)...
//mandar un mensaje a un email especifico segun su id pasado con el body, y agregarlo a la lista de enviados del usuario, y de recibidos en el usuario destino

//RESPONDER A UN MENSAJE (AL PRESIONAR EN RESPONDER)...
//agregar un mensaje de respuesta a un mensaje especifico segun su id pasado con el body, y hacer lo que se hace cuando se manda un mensaje (meterlo en el arreglo de usuario de el remitente y de el destinatario)


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
-CORRECTO=agregar usuario/o update usuario
//AL PRESIONAR EN OLVIDE CONTRASENA...
-
//AL PRESIONAR EN CAMBIAR CONTRASENA...
-





//OPERACIONES ADMIN...
//agregar usuario
//borrar usuario
//actualizar usuario
//recivir un usuarios (y extraccion de datos especificos)
//recivir a todo los usuarios (y extraccion de datos especificos)




//COMPOCISION DE MODELOS...
//la idea de estos tres modelos (email, message y user) es un usuario (con sus datos privados y datos propios) conectdo con 'ref' a email (que solo tiene un titulo y una fecha), que une los mensajes de un chat unico (que se crea de el uno nuevo solo al abrir un nuevo chat), conectado con 'ref' a message que es el mensaje mismo.


//user.model.js
//email -email -string, unique y required
//nombre de usuario -fullName -string, required
//codigo de el usuario -password -string, select false
//link a un avatar -avatar -string
//arreglo de objetos email que contiene lo referente a cada usuario de forma diferente-emails -array de un objeto...
//email -email -object id y su ref a email🚩
//mandado -isSent -boolean
//recivido -isRecieved -boolean
//favorite -isFavorite -boolean
//borrado -isDeleted -boolean
//leido -isRead -boolean, default false
//isActive -isActive -boolean, default true


//email.model.js
//titulo -subject -string
//mensaje -msg -array de objeto con objectId y su ref a message🚩
//fecha de actualizacion -lastDate -date


//message.model.js
//destinatario -to -array de un objeto
//remitente -from -string
//fecha de creacion -date -date
//contenido -content -string
//titulo de contenido -subject -string










//IDEAS DE ARTI...
Funciones en Controller y Services para un proyecto de mensajería
En un proyecto de mensajería usando NodeJS, Mongoose y Express, puedes dividir la lógica de tu aplicación en dos capas principales: Controller y Services.

Controller:
Maneja las solicitudes HTTP:
Recibe solicitudes de los clientes.
Valida la entrada.
Procesa la solicitud y genera una respuesta.
Envía la respuesta al cliente.
Interactua con la capa de Services:
Llama a las funciones de Services para obtener o modificar datos.
Maneja los errores que puedan ocurrir en la capa de Services.

Services:
Contiene la lógica de negocio:
Implementa las funciones para CRUD (Crear, Leer, Actualizar, Eliminar) de los mensajes.
Realiza la lógica de negocio específica de tu aplicación, como la gestión de usuarios, conversaciones, notificaciones, etc.
Interactua con la base de datos:
Realiza consultas a la base de datos usando Mongoose.
Crea, actualiza y elimina documentos en la base de datos.
Ejemplos de funciones:

Controller:
getMessages(req, res): Obtiene una lista de mensajes.
createMessage(req, res): Crea un nuevo mensaje.
getMessageById(req, res): Obtiene un mensaje por su ID.
updateMessage(req, res): Actualiza un mensaje existente.
deleteMessage(req, res): Elimina un mensaje.

Services:
getAllMessages(): Obtiene todos los mensajes de la base de datos.
getMessageById(id): Obtiene un mensaje por su ID de la base de datos.
createMessage(messageData): Crea un nuevo mensaje en la base de datos.
updateMessage(id, messageData): Actualiza un mensaje existente en la base de datos.
deleteMessage(id): Elimina un mensaje de la base de datos.

Ventajas de separar Controller y Services:
Mejora la organización del código:
Facilita la comprensión y el mantenimiento del código.
Permite la reutilización de la lógica de negocio en diferentes partes de la aplicación.
Facilita las pruebas:
Permite probar la lógica de negocio de forma independiente de la capa de presentación.
Aumenta la escalabilidad:
Permite escalar la capa de Services de forma independiente de la capa de Controller.


