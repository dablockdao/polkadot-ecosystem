---
title: 'Telemetry de Polkadot'
description: 'Polkadot Telemetry ofrece monitoreo en tiempo real y seguimiento de rendimiento para los nodos de la red Polkadot con métricas personalizables.'
sidebar:   
    label: 'Telemetry'
---

La herramienta **Polkadot Telemetry** está diseñada para **supervisar y analizar el rendimiento de los nodos** dentro de la red Polkadot. Este servicio de telemetría, al que puede accederse mediante el panel de telemetría predeterminado en [telemetry.polkadot.io](https://telemetry.polkadot.io/), ofrece una vista en tiempo real de los nodos en línea, proporcionando métricas esenciales de rendimiento que son cruciales para operadores de nodos y administradores de la red.

## Monitoreo y Seguimiento de Rendimiento en el Ecosistema de Polkadot
El panel de telemetría (telemetry dashboard) permite a los usuarios **personalizar** la información mostrada sobre los nodos, incluyendo estado del validador, ubicación, versión de la implementación, número de pares y diversas métricas de red y de bloques. Esta personalización asegura que los usuarios puedan centrarse en los puntos de datos más relevantes para sus necesidades, mejorando la experiencia de monitoreo en general.

Los nodos dentro de la red Polkadot pueden configurarse para **conectarse** al servicio de telemetría predeterminado mediante la opción `--telemetry-url`. Sin embargo, esto expone públicamente la información del nodo, lo cual podría no ser deseable para todos los operadores. Para abordar esta preocupación, los operadores tienen la posibilidad de **ejecutar sus propios servidores de telemetría privados** usando el proyecto [substrate-telemetry](https://github.com/paritytech/substrate-telemetry). Este proyecto provee tanto un servidor de backend para la ingesta de datos como un panel de frontend, lo que permite a los operadores recopilar y visualizar los datos de telemetría de sus nodos de forma privada.

El proyecto **substrate-telemetry** se divide en dos componentes principales: el backend y el frontend. El backend es un proyecto en Rust que se encarga de ingerir los datos de telemetría de los nodos, mientras que el frontend es un proyecto en React/TypeScript que muestra dicha información mediante una interfaz de usuario accesible. Al ejecutar un servidor de telemetría privado, los operadores pueden asegurarse de mantener segura la información sensible de sus nodos y evitar que quede expuesta públicamente.

Configurar un servidor de telemetría privado implica varios pasos. Primero, es necesario compilar y ejecutar los binarios del backend. Los binarios `telemetry_core` y `telemetry_shard` se ocupan de las tareas básicas de ingesta y distribución de datos, respectivamente. Una vez que el backend está en funcionamiento, se puede configurar el frontend para proporcionar una interfaz de usuario que muestre los datos de telemetría. Luego, se puede iniciar el servidor de frontend localmente, permitiendo a los operadores acceder a la interfaz navegando a su `localhost`.

Para quienes busquen soluciones de monitoreo alternativas, existe la herramienta **Nebula** de [ProbeLab](https://www.probelab.io/). Nebula realiza un rastreo completo (full crawl) de la red peer-to-peer de Polkadot, recopilando información adicional de los nodos que complementa los datos proporcionados por la Telemetría de Polkadot.

En conclusión, **Polkadot Telemetry es una herramienta esencial para monitorear el rendimiento de nodos dentro del ecosistema de Polkadot**. Mientras que el panel de telemetría predeterminado facilita el acceso a datos de nodos en tiempo real, la opción de ejecutar un servidor de telemetría privado garantiza que los operadores de nodos mantengan el control de su información. Además, herramientas alternativas como Nebula ofrecen perspectivas complementarias, convirtiendo a Polkadot Telemetry en una solución versátil y sólida para el monitoreo de la red.
