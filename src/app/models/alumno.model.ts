export class Alumno {
    constructor(
        public nombre: String,
        public apellido: String,
        public nombreCorreo: String,
        public apellidoCorreo: String,
        public email: String,
        public edad: Number,
        public salarios: Number[],
        public activo: Boolean,
        public linkedin: String,
        public gitHub: String,
        public diasTrabajados: number,
        public centroEstudios: String,
    ) { }

}