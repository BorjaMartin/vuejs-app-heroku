# Trainers web

# Objetivo del proyecto

Se trata de resolver un problema de asignación entre entrenadores y clientes, en la cual se desea asignar al entrenador un conjunto de clientes en base a las preferencias.

Los entrenadores tienen una valoración de su reputación entre 0 y 5 (siendo 5, la valoración más favorable) y los clientes valoran la importancia de tener un entrenador con una buena reputación de 0 a 10 (siendo 10, que le dan mucha importancia a que su entrenador esté bien valorado, y siendo 0 que no les importa nada la valoración de su entrenador). 

Los entrenadores también tienen un límite de plazas disponibles para clientes. 

**Objetivo:** es que todos los clientes estén asignados a un entrenador de la forma que el
conjunto de clientes tenga el mayor valor de satisfacción

---

# Tecnologías utilizadas.

Para la parte fron-end del proyecto he utilizado el framework de Vue.

Junto con este framework, tambíen he utlizado biblioteca de Bootstrap4 y el proyecto de Bootstrap-vue para conectar Bootstrap con Vue para el uso de sistemas de rejilla en el que se basa Bootstrap y la utilización de directivas de Vue. 

Para la parte de back-end he usado Nodejs junto con mongoDB y ayudandome de las librerias de Express, Mongoose para definir modelos de datos que vamos a utilizar para trabajar con la base de datos mongoDB, el módulo body-parser para traducir las peticiones HTTP a objetos javascript,

heroku.com

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

**controllers:**

**models:**

**routes:**

app.js: 

Global.js: 

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