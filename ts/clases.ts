class Paciente {
    private nombre: string;
    private apellido: string;
    private dni: string;
    private numeroHC: string;
    private fechaNacimiento: string;
  
    public constructor(name: string, surname: string) {
      this.nombre = name;
      this.apellido = surname;
    }
  
    public getName(): string {
      return this.nombre;
    }
  }