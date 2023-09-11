export class Paciente {

    nombrePaciente : string;
    apellidoPaciente : string;
    dniPaciente : number;
    sexo : string;
    numeroHcPaciente : number;
    fechaNacimiento : Date;
    pesoNacimiento : number;
    tallaNacimiento : number;
    perimetroCefalico : number;
    edadGestacionalNacimiento : number;
    miParto : Parto;
    ingresos : Ingreso[];
    egresos : Egreso[];
    minutosLigaduraDeCordon : number;
    apgars : Apgar[];
    reanimado : boolean;
    maniobrasReanimacion : ManiobraReanimacion[];
    pezquizas : Pezquiza[];
    otrosTratamientos : OtroTratamiento[]
    vacunas : Vacuna[]

    constructor(nombrePaciente, apellidoPaciente, dniPaciente, numeroHcPaciente, fechaNacimiento, pesoNacimiento, tallaNacimiento, perimetroCefalico, edadGestacionalNacimiento, minutosLigaduraDeCordon, reanimado) {

        this.nombrePaciente = nombrePaciente;
        this.apellidoPaciente = apellidoPaciente;
        this.dniPaciente = dniPaciente;
        this.numeroHcPaciente = numeroHcPaciente;
        this.fechaNacimiento = fechaNacimiento;
        this.pesoNacimiento = pesoNacimiento;
        this.tallaNacimiento = tallaNacimiento;
        this.perimetroCefalico = perimetroCefalico;
        this.edadGestacionalNacimiento = edadGestacionalNacimiento;
        this.minutosLigaduraDeCordon = minutosLigaduraDeCordon;
        this.reanimado = reanimado;

    }
    crearPaciente(nP : string) {

        

    }

}

export class Ingreso {

    nroIngreso: number;
    fechaIngreso: Date;
    lugarInternacion: string;
    pesoIngreso: number;
    procedencia: Procedencia;
    diagnosticos: Diagnostico[];
    tratamientos : Tratamiento[];

    constructor(nroIngreso, fechaIngreso, lugarInternacion, pesoIngreso){

        this.nroIngreso = nroIngreso;
        this.fechaIngreso = fechaIngreso;
        this.lugarInternacion = lugarInternacion;
        this.pesoIngreso = pesoIngreso

    }
    
}

export class Egreso {

    nroEgreso : number;
    fechaEgreso : Date;
    pesoEgreso : number;
    talla : number;
    perimetroEncefalico : number;
    diagnosticos : Diagnostico[];
    lugarDeEgreso : string;
    
    constructor(nroEgreso, fechaEgreso){
        
        this.nroEgreso = nroEgreso;
        this.fechaEgreso = fechaEgreso

    }

}

export class Obito {

    autopsia: boolean;

    constructor(autopsia){
        this.autopsia = autopsia;
    }

}

export class Apgar {

    valor: number;

    constructor(valor){

        this.valor = valor;

    }
    
}

export class ManiobraReanimacion {

    fechaManiobra: Date;

    constructor(fechaManiobra){

        this.fechaManiobra = fechaManiobra;
        
    }

}

export class OxigenoLibre extends ManiobraReanimacion {

    concentracion: number;

    constructor(fechaManiobra, concentracion){

        super(fechaManiobra);
        this.concentracion = concentracion;

    }

}

export class VPP extends ManiobraReanimacion {

    concentracion: number;

    constructor(fechaManiobra, concentracion){

        super(fechaManiobra);
        this.concentracion = concentracion;

    }

}

export class TET extends ManiobraReanimacion {

    concentracion: number;

    constructor(fechaManiobra, concentracion){

        super(fechaManiobra);
        this.concentracion = concentracion;

    }

}

export class CPAP extends ManiobraReanimacion {

    concentracion: number;

    constructor(fechaManiobra, concentracion){

        super(fechaManiobra);
        this.concentracion = concentracion;

    }

}

export class MasajeCardiaco extends ManiobraReanimacion {

    constructor(fechaManiobra){

        super(fechaManiobra);

    }

}

export class Droga extends ManiobraReanimacion {

    tipo: string;
    via: string;

    constructor(fechaManiobra, tipo, via){

        super(fechaManiobra);
        this.tipo = tipo;
        this.via = via;

    }

}

export class Diagnostico {

    codDiagnostico: number;
    nombre: string;

    constructor(codDiagnostico, nombre){

        this.codDiagnostico = codDiagnostico;
        this.nombre = nombre;

    }

}

export class Pezquiza {

    fechaPezquiza : Date;

    constructor(fechaPezquiza){

        this.fechaPezquiza = fechaPezquiza;

    }

}

export class OEA extends Pezquiza {

    resultado : string;

    constructor(fechaPezquiza, resultado){

        super(fechaPezquiza);
        this.resultado = resultado;

    }

}

export class FondoDeOjo extends Pezquiza {

    resultado : number;

    constructor(fechaPezquiza, resultado){

        super(fechaPezquiza);
        this.resultado = resultado;

    }

}

export class OjoRojo extends Pezquiza {

    presente : boolean;

    constructor(fechaPezquiza, presente){

        super(fechaPezquiza);
        this.presente = presente;

    }

}

export class Saurometria extends Pezquiza {

    normalOAnormal : string;

    constructor(fechaPezquiza, normalOAnormal){

        super(fechaPezquiza);
        this.normalOAnormal = normalOAnormal;

    }

}

export class Screening extends Pezquiza {

    normalOAnormal : string;

    constructor(fechaPezquiza, normalOAnormal){

        super(fechaPezquiza);
        this.normalOAnormal = normalOAnormal;

    }

}

export class OtroTratamiento {

    fecha : Date;
    tipo : TipoVacuna;

    constructor(fecha, tipo){

        this.fecha = fecha;
        this.tipo = tipo

    }

}

export class Vacuna {

    fecha : Date;
    tipo : TipoVacuna;

    constructor(fecha, tipo){

        this.fecha = fecha;
        this.tipo = tipo

    }

}

export class TipoVacuna {

    codTipoVacuna : number;
    descripcion : string

    constructor(codTipoVacuna, descripcion){

        this.codTipoVacuna = codTipoVacuna;
        this.descripcion = descripcion;

    }

}

export class Parto {

    inicio : string;
    terminacion : string;
    drogasMaternas : DrogaMaterna[];
    presentacion : string;
    rupturaDeMembranas : string;
    patologiasMaternas : PatologiaMaterna[];


    constructor(inicio, terminacion, drogasMaternas, presentacion, rupturaDeMembranas){

        this.inicio = inicio;
        this.terminacion = terminacion;
        this.drogasMaternas = drogasMaternas;
        this.presentacion = presentacion;
        this.rupturaDeMembranas = rupturaDeMembranas;

    }

}

export class PatologiaMaterna {

    codPatologiaMaterna : number;
    descripcion : string

    constructor(codPatologiaMaterna, descripcion){

        this.codPatologiaMaterna = codPatologiaMaterna;
        this.descripcion = descripcion;

    }

}

export class DrogaMaterna {

    codDrogaMaterna : number;
    descripcion : string

    constructor(codDrogaMaterna, descripcion){

        this.codDrogaMaterna = codDrogaMaterna;
        this.descripcion = descripcion;

    }

}

export class Procedencia {

}

export class ProcedenciaMain extends Procedencia {

    tipoProcedenciaMain : string;

    constructor(tipoProcedenciaMain){

        super();
        this.tipoProcedenciaMain = tipoProcedenciaMain;

    }

}

export class ProcedenciaOtro extends Procedencia {

    tipoProcedenciaOtro : string;

    constructor(tipoProcedenciaOtro){

        super();
        this.tipoProcedenciaOtro = tipoProcedenciaOtro;

    }

}

export class Tratamiento {

}

export class TratamientoConOxigeno extends Tratamiento {

    modalidad : Modalidad;
    cantidadDeDias : number;
    complicaciones : Complicacion[];


    constructor(modalidad, cantidadDeDias){

        super();
        this.modalidad = modalidad;
        this.cantidadDeDias = cantidadDeDias;

    }

}

export class Modalidad {

    tipoModalidad : string;

    constructor(tipoModalidad){

        this.tipoModalidad = tipoModalidad;

    }

}

export class Complicacion {

    tipoComplicacion : string;

    constructor(tipoComplicacion){

        this.tipoComplicacion = tipoComplicacion;

    }

}

export class TratamientoSurfactante extends Tratamiento {

    cantidadDeDosis : number;

    constructor(cantidadDeDosis){

        super();
        this.cantidadDeDosis = cantidadDeDosis;

    }

}

export class TratamientoDelDAP extends Tratamiento {

    tipoTratamientoDAP : string;
    numeroDeSeries : number;

    constructor(tipoTratamientoDAP, numeroDeSeries){

        super();
        this.tipoTratamientoDAP = tipoTratamientoDAP;
        this.numeroDeSeries = numeroDeSeries;

    }

}

export class OxidoNitrico extends Tratamiento {

    cantidadDeDias : number;

    constructor(cantidadDeDias){

        super();
        this.cantidadDeDias = cantidadDeDias;

    }

}

export class Cafeina extends Tratamiento {

    cantidadDeDias : number;

    constructor(cantidadDeDias){

        super();
        this.cantidadDeDias = cantidadDeDias;

    }

}

export class DrogaInotropica extends Tratamiento {

    tipoDrogaInotropica : string;

    constructor(tipoDrogaInotropica){

        super();
        this.tipoDrogaInotropica = tipoDrogaInotropica;

    }

}

export class AntiAlgoMain extends Tratamiento {

    tipoAntiAlgo : string;
    cantidadDeDias : number;

    constructor(tipoAntiAlgo, cantidadDeDias){

        super();
        this.tipoAntiAlgo = tipoAntiAlgo;
        this.cantidadDeDias = cantidadDeDias;

    }

}

export class AntiAlgoOtro extends Tratamiento {

    tipoAntiAlgoOtro : string;
    cantidadDeDias : number;

    constructor(tipoAntiAlgoOtro, cantidadDeDias){

        super();
        this.tipoAntiAlgoOtro = tipoAntiAlgoOtro;
        this.cantidadDeDias = cantidadDeDias;

    }

}

export class AccesoVascular extends Tratamiento {

    tipo : string;
    cantidadDeDias : number;

    constructor(tipo, cantidadDeDias){

        super();
        this.tipo = tipo;
        this.cantidadDeDias = cantidadDeDias;

    }

}

export class TratamientoQuirurgico extends Tratamiento {

    tipo : string;

    constructor(tipo){

        super();
        this.tipo = tipo;

    }

}

export class TratamientoConHemoderivado extends Tratamiento {

    tipo : string;
    cantidad : number;
    fechaDeLaUltima : Date;

    constructor(tipo, cantidad, fechaDeLaUltima){

        super();
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.fechaDeLaUltima = fechaDeLaUltima;

    }

}

export class Exaginotransfusion extends Tratamiento {
// es un tratamiendo con hemoderivado

}

export class TratamientoNutricionParentenal extends Tratamiento {

    cantidadDeDias : number;

    constructor(cantidadDeDias){

        super();
        this.cantidadDeDias = cantidadDeDias;

    }

}

export class TratamientoConHipotermia extends Tratamiento {
    
}

export class TratamientoConLuminoterapia extends Tratamiento {

}