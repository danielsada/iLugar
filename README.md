# iLugar

iLugar es un observador de lugares de estacionamiento en tiempo real via sockets para dispositivos móviles.

  - Node.js
  - HTML5 Canvas
  - Real-Time Sockets

Este proyecto fue creado por
- Daniel Sada Caraveo (A01169735) Ingienería en Sistemas Computacionales. Tercer Semestre
- Equipo: IndexOutOfBounds
    # Narración del proyecto.

El proyecto nació a partir de que vimos que hay una necesidad para estar conectados en todo momento a la información que tenemos en la escuela. Más especificamente los estacionamientos. Sábemos que existen modelos en los que avisan "cuantos lugares hay en un estacionamiento" en una pantalla led. Nosotros vamos un paso más allá e implementamos una red de tecnología de "ve en X momento cuantos lugares hay disponibles en tiempo real en tu celular"


-
    # Diseño de la solución

Decidimos crear una serie de sensores para estacionamiento conectados por PICS a un arduino, que luego los lleva a una raspberry Pi. Esta raspberry pi conectada a internet manda la información de los lugares disponibles dentro de el estacionamiento. Los manda cada segundo como una bitmask de 3600 posicioones en las que determina el status de cada uno de los estacionamientos y se actualiza en tiempo real.

Lo que se puede observar en este proyecto es la parte de infraestructura de software que se utiliza para poder conectarse de la Raspberry Pi hacia el celular con una "cola de dispatch" manejada por los procesos paralelos de node.js

Tuvimos problemas desde poner nuestra propia forma de autenticación del puerto para comunicarnos dado que se necesitan para 3600 lugares:
- 225 PICS
- 14 Arduinos
- 1 Raspberry Pi.

La fórmula para calcular la cantidad de componentes que se necesitan es:
> PICS  = ceil(lugares /16)

> Arduinos = ceil(PICS/16)

> Raspberry = ceil(Arduinos/16)


Ésta es la idea principal que tenemos.


### Version
0.1.2b
### Tech

Usamos
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Socket.io] - a super fast port WebSockets in real time to JavaScript
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [jQuery]


### Run



Open your favorite Terminal and run these commands.
```sh
$ node server.js
```
Visit /index and /send

### Todos

 - Write Tests
 - Rethink Github Save
 - Add Code Comments
 - Add Night Mode

License
----
Apache


