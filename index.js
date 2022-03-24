//La funcion que envuelve el codigo permite cargar el HTML y CSS antes que corra el script
//Para que el usuario pueda ver el contenido de la pagina mientras utiliza el programa a 
//Codigo buscado en internet solamente para este proposito :)
document.addEventListener("DOMContentLoaded", function (event) { 

    //Mensaje de bienvenida
    alert("Bienvenido a la calculadora geometrica");

    do {
        //Ingreso de datos por el usuario
        let figura = seleccionarFigura();
        let calculo = seleccionarCalculo(figura);

        //Ejecutar operacion
        let resultado;

        switch (calculo) {
            case "area":
                resultado = calcularArea(figura);
                break;
            case "perimetro":
                resultado = calcularPerimetro(figura);
                break;
            case "hipotenusa":
                resultado = calcularHipotenusa();
                break;
        }

        alert(`El resultado de ${calculo} es:\n${resultado}`); //Impresion de resultado

    } while (continuar() == 1); //Validacion de continuar el programa

    //Seleccion de figura por usuario
    function seleccionarFigura() {
        let opcion = parseInt(prompt(`Ingresa tu figura:\n
        1- Rectangulo
        2- Triangulo rectangulo
        3- Circulo`));

        if (opcion == 1) return "rectangulo";
        if (opcion == 2) return "triangulo";
        if (opcion == 3) return "circulo";
    }

    //Solicitud de datos de figura (tambien usado para radio en circulo)
    function solicitarBase(figura) {
        let base;

        if (figura == "circulo") {
            base = parseInt(prompt("Ingrese radio: "));
        } else {
            base = parseInt(prompt("Ingrese base: "));
        }

        return base;
    }

    function solicitarAltura() {
        return parseInt(prompt("Ingrese altura: "));
    }

    //Seleccion de calculo por usuario
    function seleccionarCalculo(figura) {
        let calculo;

        if (figura == "triangulo") {
            calculo = prompt(`Ingresa el calculo que deseas realizar:\n
                                1- Area
                                2- Perimetro
                                3- Hipotenusa`); //En caso de triangulo muestra hipotenusa
        } else {
            calculo = prompt(`Ingresa el calculo que deseas realizar:\n
                                1- Area
                                2- Perimetro`);
        }

        if (calculo == 1) return "area";
        if (calculo == 2) return "perimetro";
        if (calculo == 3) return "hipotenusa";
    }

    //Continuar con el programa?
    function continuar() {
        return (prompt(`Desea realizar otro calculo? \n
                        1- Si
                        2- No`));
    }

    //Calculo de area
    function calcularArea(figura) {

        let base, altura;

        if (figura == "circulo") {
            base = solicitarBase(figura);
        } else {
            base = solicitarBase(figura);
            altura = solicitarAltura();
        }

        switch (figura) {
            case "rectangulo":
                return base * altura;
            case "triangulo":
                return (base * altura) / 2;
            case "circulo":
                return (Math.PI * Math.pow(base, 2));
        }
    }

    //Calcular perimetro
    function calcularPerimetro(figura) {
        let base, altura;

        if (figura == "circulo") {
            base = solicitarBase(figura);
        } else {
            base = solicitarBase(figura);
            altura = solicitarAltura();
        }

        switch (figura) {
            case "rectangulo":
                return ((base * 2) + (altura * 2));
            case "circulo":
                return (2 * Math.PI * base);
            case "triangulo":
                return Number(base + altura + (Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2))))
        }
    }

    //Calcular hipotenusa
    function calcularHipotenusa() {
        let base = solicitarBase("triangulo");
        let altura = solicitarAltura();

        return Number(Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2)));
    }
});



