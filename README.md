# AppTrainers

[vuejs-app-heroku](https://vuejs-app-heroku.herokuapp.com/)

# Objetivo del proyecto

Se trata de resolver un problema de asignación entre entrenadores y clientes, en la cual se desea asignar al entrenador un conjunto de clientes en base a las preferencias.

Los entrenadores tienen una valoración de su reputación entre 0 y 5 (siendo 5, la valoración más favorable) y los clientes valoran la importancia de tener un entrenador con una buena reputación de 0 a 10 (siendo 10, que le dan mucha importancia a que su entrenador esté bien valorado, y siendo 0 que no les importa nada la valoración de su entrenador). 

Los entrenadores también tienen un límite de plazas disponibles para clientes. 

**Objetivo:** Que todos los clientes estén asignados a un entrenador de la forma que el
conjunto de clientes tenga el mayor valor de satisfacción

---

# Tecnologías utilizadas.

Para la parte fron-end del proyecto he utilizado el framework de Vue.

Junto con este framework, tambíen he utlizado biblioteca de Bootstrap4 y el proyecto de Bootstrap-vue para conectar Bootstrap con Vue para el uso de sistemas de rejilla en el que se basa Bootstrap y la utilización de directivas de Vue. 

Para la parte de back-end, he usado Nodejs y en esta primera versión he utilizado datos estáticos para los clientes y entrenadores que se van a registrar.

En el caso de conectar a una base de datos como mongoDB y algunas librerias básicas como  Express, Mongoose para definir modelos de datos que se van a utilizar para trabajar con la base de datos mongoDB, el módulo body-parser para traducir las peticiones HTTP a objetos javascript.

Una vez realizada la aplicación he publicado la primera  versión en Heroku donde poder testear el funcionamiento de esta :

[https://vuejs-app-heroku.herokuapp.com/](https://vuejs-app-heroku.herokuapp.com/)

---

# Estructura del proyecto

En la estructura del proyecto he separado la parte back-end, con el poyecto de node js y las diferentes carpetas de modelos de datos, de la parte front-end y sus componentes:

## Back-end:

```
|-- controllers
	|--- customer.js
	|--- trainer.js
|-- models
	|--- customer.js
	|--- trainer.js
|-- node_modules
|-- routes
	|--- customer.js
	|--- trainer.js
|-- app.js
|-- Global.js
|-- index.js
|-- package.json
|-- package-lock.json
```

**controllers:** En el caso de trabajar con base de datos, aquí se definen los diferentes métodos de nuestro API para recibir, procesar , guardar, eliminar ... y enviar los datos al cliente. 

**models:** Donde se define el modelo de la base de datos. Tenemos dos modelos: modelo de Trainer y modelo de Customer. 

En esta primera versión de la app en el modelo de Customer definen ya unos datos con los que vamos a realizar las diferentes pruebas y en el modelo de Trainer, se declara un array vacío en el que luego cargaremos los diferentes objetos, en este caso los datos de entrenadores con sus clientes asignados.

**routes:**  En el caso de trabajar con base de datos, aquí se definen ****las rutas para los diferentes métodos definidos en nuestro API.

**app.js:** En el caso de trabajar con base de datos, aquí se rellenan las configuraciones del servidor

**Global.js:** Se declaran variables o métodos globales que puedo llamar desde cualquier fichero de la app.

**index.js:**  En el caso de utilizar una conexión a base de datos, en este fichero se configura toda lo necesario para la carga del módulo de mongoose y conexión a la base de datos MongoDB 

## Front-end

```
|-- public_modules
|-- public
|-- src
	|--- assets
	|--- components
		|---- MainConfig.vue
		|---- ModalCustomer.vue
		|---- ResultCustomer.vue
		|---- ResultTab.vue
		|---- SatisfactionCustomer
		|---- Header
		|---- Footer
	|--- App.vue
	|--- main.js
	|--- trainer.js
|-- babel.config.js
|-- package.json
|-- package-lock.json
```

### Componentes

**MainConfig.vue:** Pantalla principal donde se muestra el formulario principal donde rellenar los datos de los entrenadores a  crear, con nombre, valoración y número maximo de clientes.

Cuenta con dos botones: 

- **Ver tabla de clientes:** Acción que referencia al componente **ModalCustomer.vue**
- **Calcular resultados:** Acción que ejecuta el proceso de asiganción de clientes a los entrendaores registrados. Navega a la vista de resultados (**ResultTab.vue**)

**ModalCustomer.vue:** Pantalla modal con la información de los clientes registrados en la aplicación.

**ResultTab.vue: P**antalla con dos pestañas

- Pestaña **Entrenadores**: Referencia al componente **ResutlCustomer.vue**
- Pestaña **Valoración del conjunto:** Referencia al componente **SatisfactionCustomer.vue**

**ResultCustomer.vue:** Pantalla donde se mostrará los datos de los entrenadores con los clientes que les han sido asignados. ****

**SatisfactionCustomer.vue:** Pantalla donde se mostrará una lista de los clientes registrados en la aplicación y tienen asignado su entrenador, con los datos de satisfacción correspondiente a cada cliente. ****

**Header.vue:** La cabecera de la aplicación web que será común a todas las visatas de la web y donde se muestra un logo de la  aplicación y con un menú de navegación para cambiar entre las diferentes vistas de la aplicación

**Footer.vue** El pie de página la aplicación web que será común a todas las visatas de la web