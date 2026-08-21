# Character Counter UTN

## 1. Objetivo del proyecto

El objetivo del proyecto es desarrollar una aplicación web de conteo y análisis de texto en tiempo real.

La aplicación permite al usuario ingresar un texto y obtener diferentes estadísticas, como la cantidad de caracteres, palabras y oraciones, además del tiempo estimado de lectura y la densidad de las letras utilizadas.

El proyecto comenzó como una práctica de maquetado con HTML y CSS y posteriormente se incorporó funcionalidad utilizando JavaScript y React.

---

## 2. Tecnologías utilizadas

* **HTML:** utilizado para la estructura de la aplicación.
* **CSS:** utilizado para el diseño visual, responsive, variables CSS y personalización de los componentes.
* **JavaScript:** utilizado para implementar la lógica de la aplicación y realizar los cálculos del texto.
* **React:** utilizado para construir la interfaz mediante componentes y manejar el estado de la aplicación.
* **Vite:** utilizado como herramienta de desarrollo y construcción del proyecto.
* **Context API:** utilizada para manejar el cambio entre modo claro y modo oscuro.
* **Git y GitHub:** utilizados para el control de versiones y seguimiento del desarrollo.

---

## 3. Cómo usar la página

1. Ingresar o escribir un texto en el área de escritura.
2. La aplicación analiza el texto en tiempo real y muestra:
   * Cantidad total de caracteres.
   * Cantidad de palabras.
   * Cantidad de oraciones.
   * Tiempo estimado de lectura.
3. Activar **Exclude Spaces** para excluir los espacios del conteo de caracteres.
4. Activar **Set Character Limit** para establecer un límite máximo de caracteres (no podrás borrar el limite si aun tienes texto).
5. Consultar la sección **Letter Density** para ver las letras más utilizadas y su porcentaje dentro del texto.
6. Seleccionar **See more** para visualizar el resto de las letras.
7. Utilizar el botón del encabezado para alternar entre el modo claro y el modo oscuro. La preferencia seleccionada se mantiene al recargar la página.

---

## 4. Resultado final

### Modo oscuro

![Character Counter - Dark Mode](./src/assets/img/dark%20mode.png)

### Modo claro

![Character Counter - Light Mode](./src/assets/img/light%20mode.png)