# Itadakimasu

![Logo del proyecto](https://raw.githubusercontent.com/Kthcsk/SCL013-burger-queen/d784999a649120b02c7cda0a78070f8dda1d4e97/burgerQueen/src/assets/Logo-Itadakimasu.svg)

## Índice

* [1. Presentación del Producto](#1-presentación-del-producto)
* [2. Producto](#2-definición-del-producto)
* [3. Diseño de la Interfaz de Usuario](#3-diseño-de-la-interfaz-de-usuario)
* [4. Testeos de Usabilidad con Maze](#4-testeos-de-usabilidad-con-maze)
* [5. Imagen Final del Producto](#5-imagen-final-del-producto)
* [6. Boilerplate](#6-boilerplate)
* [7. Organización y planificación](#7-Organización-y-planificación)
* [8. Objetivos de aprendizaje](#8-objetivos-de-aprendizaje)


***

## 1. Presentación del Producto

La tecnología cambia y avanza casi de manera diaria, contribuyendo a mejorar a alargar el tiempo de vida y aumentando la calidad de vida de las personas, aportando herramientas que optimicen tiempos y permitan organizar la información. 
Este proyecto nace de la necesidad de un orden y comunicación eficaz entre el equipo de meserxs y los encargados de cocina en el restaurante Itadakimasu, por lo que se ha creado una aplicación web que respondiera a esta necesidad.

## 2. Producto

#### 2.1. Definición del Producto

Es una aplicación web para tablets del restaurante Itadakimasu, para la toma de pedidos personalizados y  coordinación ágil con la cocina. Es una web intuitiva que optimiza la toma de pedidos personalizados según nombre del meserx, el nombre del cliente y la mesa en la que se encuentra. Los pedidos llegan a cocina según los garzones los vayan enviando para su preparación, los chefs pueden marcar las órdenes terminadas, para que el meserx las entregue según corresponda y puedan ser marcadas como entregadas.

#### 2.2. Principales Usuarios

Meserxs del restaurant de comida japonesa **Itadakimasu**, que usan cotidianamente productos móviles (celulares, tablets) y que desean una interfaz digital moderna para realizar su trabajo de forma fácil y rápida. 

#### 2.3. Uso y Aplicación 

 Esta aplicación web será utilizada principalmente por meserxs y cocinerxs del restaurante Itadakimasu. Donde podrán ingresar los pedidos de los clientes que serán posteriormente elaborados por el personal de cocina.
 Esta apliacación permite calcular el precio de cada producto consumido por los clientes, facilitando la comunicación tanto con los comensales como con todo el equipo de trabajo.
 Finalmente la usabilidad de esta aplicación web facilita la toma de los pedidos y facturación de los productos por parte de los meserxs, además de la lectura y aviso de realización del pedido por parte del personal de cocina.

#### 2.4. Historias de Usuario

**Historia 1 | Meserx debe poder tomar pedido de cliente**

Yo como meserx **quiero** tomar el pedido de un cliente **para** no depender de mi mala memoria, para saber cuánto cobrar, y enviarlo a la cocina **para** evitar errores y que se puedan ir preparando en orden.

**Criterios de aceptación:**

- Anotar nombre de cliente.
- Agregar productos al pedido.
- Eliminar productos.
- Ver resumen y el total de la compra.
- Enviar pedido a cocina (guardar en alguna base de datos).
- Se ve y funciona bien en una tablet

**Definición de terminado:**

- Debes haber recibido code review de al menos una compañera.
- Haces test unitarios y, además, has testeado tu producto manualmente.
- Hiciste tests de usabilidad e incorporaste el feedback del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).


**Historia 2 | Jefe de cocina debe ver los pedidos**

Yo como jefx de cocina **quiero** ver los pedidos de los clientes en orden y marcar cuáles están listos **para** saber qué se debe cocinar y avisar a lxs meserxs que un pedido está listo para servirlo a un cliente.

**Criterios de aceptación:**

- Ver los pedidos ordenados según se van haciendo.
- Marcar los pedidos que se han preparado y están listos para servirse.
- Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se marcó como completado.

**Definición de terminado**
- Debes haber recibido code review de al menos una compañera.
- Haces test unitarios y, además, has testeado tu producto manualmente.
- Hiciste tests de usabilidad e incorporaste el feedback del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

## 3. Diseño de la Interfaz de Usuario

### 3.1 Decisiones de diseño

El proceso de diseño fue acorde a la estética del restaurant, incluyendo su logo y su paleta de colores representativos, asociando así el aspecto visual de la aplicación con este. También, se definió una guia de estilos en donde se agruparon los componentes de nuestra aplicación, facilitando su uso en distintas pantallas.

![imgLogos](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/Logotipo.png?raw=true)

**Guía de estilos:** 

![imgGuíaDeEstilo](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/Gu%C3%ADa%20de%20Estilos.png?raw=true)

### 3.2 Flujograma

![imgFlujo](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/Flujograma.png?raw=true)

[Link de Lucidchart](https://app.lucidchart.com/documents/edit/c2fbaa0b-4503-4ceb-ab84-14eab1f6ac5d/0_0?shared=true&docId=c2fbaa0b-4503-4ceb-ab84-14eab1f6ac5d)

### 3.3 Prototipos

#### 3.3.1 Baja fidelidad

![imgBaja](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/prototipo-baja1.png?raw=true)

![imgBaja2](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/prototipo-baja2.png?raw=true)

![imgBaja3](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/prototipo-baja3.png?raw=true)

[Link de InVision](https://constla102931.invisionapp.com/freehand/Burguer-Queen-i7iaZ6jG5?frame-cb=1595122402678)

#### 3.3.2 Alta fidelidad

![imgAlta1](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/prototipo-alta.png?raw=true)

[Link de Figma](https://www.figma.com/file/nxKj6CC1r57BlV6G51j2dB/Prototipo-de-alta?node-id=0%3A1)

***

## 4. Testeos de Usabilidad con Maze

El testeo de usuarios fue aplicado a 14 usuarios, teniendo así un puntaje de 83 en usabilidad donde se midió duración, click fallidos y feedback, este último siendo utilizado para iterar en nuestra app y cambiando algunas vistas para mayor accesibilidad.

![imgMaze1](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/Reporte-Maze-1.png?raw=true)
![imgMaze2](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/Reporte-Maze-2.png?raw=true)
![imgMaze2](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/Reporte-Maze-3.png?raw=true)
![imgMaze2](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/Reporte-Maze-4.png?raw=true)

[Link de reporte en Maze](https://maze.design/r/953994kc0zawnp)

***

## 5. Imagen Final del Producto

Visita [aquí]() la aplicación Itadakimasu

![img1](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/Producto-final-2.png?raw=true)
![img2](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/Producto-final-3.png?raw=true)
![img3](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/Producto-final-4.png?raw=true)
![img4](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/Producto-final-5.png?raw=true)

***

## 6. Boilerplate

![img1](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/Boilerplate-1.png?raw=true)
![img2](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/Boilerplate-2.png?raw=true)

***

## 7. Organización y planificación

La Planificación de nuestro equipo se basó en metodologías agiles, tomando cada integrante del equipo un rol del equipo Scrum. Para lograr lo anterior ocupamos herramientas como Miró y Trello.

![imgMiró](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/Miro.png?raw=true)

- [Puedes verlo más a detalle aquí](https://miro.com/welcomeonboard/Zs540cNG814ECXo5iXIwsCWcAeRC2FXUeYCkRaaAopxSMmWlJKYjRZlh7yKZ36OD)

![imgTrello](https://github.com/Kthcsk/SCL013-burger-queen/blob/master/burgerQueen/src/assets/Readme/Trello.png?raw=true)

- [Nuestro Trello](https://trello.com/invite/b/hINR3t3C/bae21f9846d32badc897ea2af1338cf8/burger-queen)

***

## 8. Objetivos de aprendizaje

### HTML y CSS

- [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
- [x] Uso de selectores de CSS.
- [x] Construir tu aplicación respetando el diseño realizado (maquetación).
- [x] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [ ] [Uso de Media Queries.](https://developer.mozilla.org/es/docs/CSS/Media_queries)

### JavaScript

- [x] Uso de condicionales (if-else | switch | operador ternario)
- [x] Uso de funciones (parámetros | argumentos | valor de retorno)
- [x] Manipular arrays (filter | map | sort | reduce)
- [x] Manipular objects (key | value)
- [x] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
- [ ] Diferenciar entre expression y statements.
- [ ] Diferenciar entre tipos de datos atómicos y estructurados.
- [x] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
- [ ] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)

### Testing

- [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

- [x] Organizar y dividir el código en módulos (Modularización)
- [x] Uso de identificadores descriptivos (Nomenclatura | Semántica)
- [x] Uso de linter (ESLINT)

### Git y Github

- [x] Uso de comandos de git (add | commit | pull | status | push)
- [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
- [x] Colaboración en Github (branches | pull requests | |tags)
- [x] Organización en Github (projects | issues | labels | milestones)

### Firebase

- [x] [Firestore.](https://firebase.google.com/docs/firestore)
- [ ] [Firebase Auth.](https://firebase.google.com/docs/auth/web/start)
- [x] [Firebase security rules.](https://firebase.google.com/docs/rules)
- [x] Observadores. ([onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user)
 | [onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection))

### Angular

- [x] [Components & templates.](https://angular.io/guide/architecture-components#introduction-to-components)
- [x] [Directivas estructurales (ngIf / ngFor)](https://angular.io/guide/template-syntax#built-in-structural-directives)
- [ ] [@Input | @Ouput](https://angular.io/guide/component-interaction#component-interaction)
- [x] [Creación y uso de servicios.](https://angular.io/guide/architecture-services#providing-services)
- [x] [Manejos de rutas.](https://angular.io/guide/router)
- [x] [Creación y uso Observables.](https://angular.io/guide/observables-in-angular)
- [x] [Uso de HttpClient.](https://angular.io/guide/http)
- [x] [Estilos de componentes (ngStyle / ngClass)](https://angular.io/guide/template-syntax#built-in-directives)

### UX

- [x] Diseñar la aplicación pensando y entendiendo al usuario.
- [x] Crear prototipos para obtener feedback e iterar.
- [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
- [x] Planear y ejecutar tests de usabilidad.



***