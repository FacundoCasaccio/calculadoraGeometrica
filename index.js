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
        let opcion;
        
        do { 
            opcion = parseInt(prompt(`Ingresa tu figura:
                                    1- Rectangulo
                                    2- Triangulo rectangulo
                                    3- Circulo`));
        } while (opcion != 1 && opcion != 2 && opcion != 3);

        if (opcion == 1) return "rectangulo";
        if (opcion == 2) return "triangulo";
        if (opcion == 3) return "circulo";
    }

    //Seleccion de calculo por usuario
    function seleccionarCalculo(figura) {
        let calculo;

        do {
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
        } while (calculo != 1 && calculo != 2 && calculo != 3);

        if (calculo == 1) return "area";
        if (calculo == 2) return "perimetro";
        if (calculo == 3) return "hipotenusa";
    }

        //Solicitud de datos de figura (tambien usado para radio en circulo)
        function solicitarBase(figura) {
            let base;
    
            do {
                if (figura == "circulo") {
                    base = parseInt(prompt("Ingrese radio: "));
                } else {
                    base = parseInt(prompt("Ingrese base: "));
                }
            } while (base <= 0 || isNaN(base));
    
            return base;
        }
    
        function solicitarAltura() {
            let altura;
    
            do {
                altura = parseInt(prompt("Ingrese altura: "));
            } while (altura <= 0 || isNaN(altura));
    
            return altura;
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



