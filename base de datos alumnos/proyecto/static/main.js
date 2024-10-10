//botones --------------------------------------------------------------------------
let cambiarPaginaAlumno = document.querySelector("#cambiarPaginaAlumno");
let cambiarPaginaGrupos = document.querySelector("#cambiarPaginaGrupos");
let cambiarPaginaIncripcion = document.querySelector("#agregar-alumno");
let cambiarPaginaMateria = document.querySelector("#agregar-materia");
let cambiarPaginaCalificacion = document.querySelector("#agregar-calificacion");
let cambiarPaginaCrearGrupo = document.querySelector("#crear-grupo");
let cambiarPaginaAsignarGrupo = document.querySelector("#asignar-grupo");
let cambiarPaginaBuscarNombre = document.querySelector("#buscar-apellido");
let cambiarPaginaPromedioAlumno = document.querySelector("#promedio-alumno");
let cambiarPaginaPromedioGrupo = document.querySelector("#promedio-grupal");
let cambiarPaginaListaAscendente = document.querySelector("#lista-ascendente");
let cambiarPaginaListaDescendente = document.querySelector("#lista-descendente");


//botones para regresar-------------------------------
let volverPrincipal1 = document.querySelector("#volver-principal1");
let volverPrincipal2 = document.querySelector("#volver-principal2");
let volverBoton1 = document.querySelector("#volver-boton1");
let volverBoton2 = document.querySelector("#volver-boton2");
let volverBoton3 = document.querySelector("#volver-boton3");
let volverBoton4 = document.querySelector("#volver-boton4");
let volverBoton5 = document.querySelector("#volver-boton5");
let volverBoton6 = document.querySelector("#volver-boton6");
let volverBoton7 = document.querySelector("#volver-boton7");
let volverBoton8 = document.querySelector("#volver-boton8");
let volverBoton9 = document.querySelector("#volver-boton9");
let volverBoton10 = document.querySelector("#volver-boton10");

//variables globales
let globalAlumnos = []
let globalGrupos = []

//clase alumno --------------------------------------------------------------------------
class ALUMNO{
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad,) {
        this.nombre = nombre
        this.apellidoPaterno = apellidoPaterno
        this.apellidoMaterno = apellidoMaterno
        this.edad = edad
        this.materias = []
    }

    incripcion (materia){
        let revision = this.materias.some(item => item.materia === materia)
        if (!revision){ 
        this.materias.push({materia: materia, calificacion: null})
        console.log(`${materia} se ha agregado a la lista`)
        }else{
            console.log(`${materia} ya esta inscrita`)
        }
    }

    calificaciones( materia, calificacion) {
        let materiaEncontrada = this.materias.find(item => item.materia === materia);
        if (materiaEncontrada) {
            let califiacionFloat = parseFloat(calificacion)
            materiaEncontrada.calificacion = califiacionFloat
            console.log(`la calificaion para ${materia} es de ${calificacion}`)
        } else {
            confirm.log(`${materia} no esta inscrita`)
        }
    }
    
    promedio () {
        let suma = 0
        let conteo = 0
        for (let i = 0; i < this.materias.length; i++) {
            if (this.materias[i].calificacion !== null) {
                suma += this.materias[i].calificacion;
                conteo++;
            }
        }
        let promedio =  conteo > 0 ? suma / conteo : 0
        return parseFloat(promedio.toFixed(2))
    }
}

//clase grupos --------------------------------------------------------------------------
class GRUPOS {
    constructor(nombreGrupo) {
        this.nombreGrupo = nombreGrupo;
        this.alumnos = []
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
        console.log(`el alumno ${alumno} se ha agregado al grtupo ${this.nombreGrupo}`)
    }

    buscarNombre(nombre) {
        let nombreExiste = this.alumnos.find(item => item.nombre === nombre)
        if (nombreExiste) {
            console.log(`se ha encontrado el nobre de ${nombre} en el grupo ${this.nombreGrupo}`)
            return nombreExiste
        } else {
            console.log(`no se ha encontrado el nobre de ${nombre} en el grupo ${this.nombreGrupo}`)
        }
    }

    buscarApellidoPaterno(apellidoPaterno) {
        let apellidoPaternoExiste = this.alumnos.find(item => item.apellidoPaterno === apellidoPaterno)
        if (apellidoPaternoExiste) {
            console.log(`se ha encontrado el nombre de ${apellidoPaterno} en el grupo ${this.nombreGrupo}`)
            return apellidoPaternoExiste
        } else {
            console.log(`no se ha encontrado el nobre de ${apellidoPaterno} en el grupo ${this.nombreGrupo}`)
        }
    }

    buscarApellidoMaterno(apellidoMaterno) {
        let apellidoMaternoExiste = this.alumnos.find(item => item.apellidoMaterno === apellidoMaterno)
        if (apellidoMaternoExiste) {
            console.log(`se ha encontrado el nobre de ${apellidoMaterno} en el grupo ${this.nombreGrupo}`)
            return apellidoMaterno
        } else {
            console.log(`no se ha encontrado el nobre de ${apellidoMaterno} en el grupo ${this.nombreGrupo}`)
        }
    }

    promedioAlumno(nombre) {
        let alumno = this.alumnos.find(item => item.nombre === nombre)
        if (alumno){
            let promedio = alumno.promedio()
            return promedio
        } else { 
            return null
        }
    }

    promedioGrupal() {
        let sumaPromedios = 0
        let totalAlumnos = this.alumnos.length
        for (let i = 0; i < totalAlumnos; i++) { 
            sumaPromedios += this.alumnos[i].promedio()
            console.log(sumaPromedios)
        }
        let promedio = totalAlumnos > 0 ? sumaPromedios / totalAlumnos : 0
        return parseFloat(promedio.toFixed(2))
    }


    listaAscendente  = () => {
        let copiaAlumnos = [...this.alumnos].map(alumno => ({
            nombre: alumno.nombre,
            promedio: this.promedioAlumno(alumno.nombre)
        }));
        let counter = 0
            for(let step = 0; step < copiaAlumnos.length; step++){
                for (let i = 0; i < copiaAlumnos.length - (1 + step); i++){
                    console.log(this.alumnos)
                    if(copiaAlumnos[i].promedio > copiaAlumnos[i + 1].promedio){
                        let aux  = copiaAlumnos[i]
                        copiaAlumnos[i] = copiaAlumnos[i + 1]
                        copiaAlumnos[i + 1] = aux
                    }
                    counter++
                    console.log(counter)
                }
            }
            return copiaAlumnos
        }

    listaDescendente  = () => {
        let copiaAlumnos = [...this.alumnos].map(alumno => ({
            nombre: alumno.nombre,
            promedio: this.promedioAlumno(alumno.nombre)
        }));
        let counter = 0
            for(let step = 0; step < copiaAlumnos.length; step++){
                for (let i = 0; i < copiaAlumnos.length - (1 + step); i++){
                    console.log(this.alumnos)
                    if(copiaAlumnos[i].promedio < copiaAlumnos[i + 1].promedio){
                        let aux  = copiaAlumnos[i]
                        copiaAlumnos[i] = copiaAlumnos[i + 1]
                        copiaAlumnos[i + 1] = aux
                    }
                    counter++
                    console.log(counter)
                }
            }
            return copiaAlumnos
        }
    
}




//FUNCIONES PARA CAMBIAR DE PAGINAS --------------------------------------------------------------------------
const paginaAlumno = () => {
    document.querySelector("#portal-maestros").style.display = "none"
    document.querySelector("#portal-alumnos").style.display = "block"
}

const paginaGrupos = () => {
    document.querySelector("#portal-maestros").style.display = "none"
    document.querySelector("#portal-grupos").style.display = "block"
}

const paginaInscripcion = () => {
    document.querySelector("#portal-alumnos").style.display = "none"
    document.querySelector("#portal-alumno").style.display = "block"
}

const paginaMateria = () => {
    document.querySelector("#portal-alumnos").style.display = "none"
    document.querySelector("#portal-materia").style.display = "block"
}

const paginaCalificacion = () => {
    document.querySelector("#portal-alumnos").style.display = "none"
    document.querySelector("#portal-calificacion").style.display = "block"
}

const paginaCrearGrupo= () => {
    document.querySelector("#portal-grupos").style.display = "none"
    document.querySelector("#portal-crear-grupo").style.display = "block"
}

const paginaAsignarGrupo= () => {
    document.querySelector("#portal-grupos").style.display = "none"
    document.querySelector("#portal-asignar-grupo").style.display = "block"
}

const paginaBuscarNombre= () => {
    document.querySelector("#portal-grupos").style.display = "none"
    document.querySelector("#buscar-nombre").style.display = "block"
}

const paginaPromedioAlumno= () => {
    document.querySelector("#portal-grupos").style.display = "none"
    document.querySelector("#promedio-alumno-portal").style.display = "block"
}

const paginaPromedioGrupo= () => {
    document.querySelector("#portal-grupos").style.display = "none"
    document.querySelector("#promedio-grupo-portal").style.display = "block"
}

const paginaListaAscendete= () => {
    document.querySelector("#portal-grupos").style.display = "none"
    document.querySelector("#lista-ascendente-portal").style.display = "block"
}

const paginaListaDescendente= () => {
    document.querySelector("#portal-grupos").style.display = "none"
    document.querySelector("#lista-descendente-portal").style.display = "block"
}


//FUNCIONES DE BOTON REGRESAR
const volverFuncionPrincipal1 = () => {
    document.querySelector("#portal-alumnos").style.display = "none"
    document.querySelector("#portal-maestros").style.display = "block"
}
const volverFuncionPrincipal2 = () => {
    document.querySelector("#portal-grupos").style.display = "none"
    document.querySelector("#portal-maestros").style.display = "block"
}

const volver1 = () => {
    document.querySelector("#portal-alumno").style.display = "none"
    document.querySelector("#portal-alumnos").style.display = "block"
}

const volver2 = () => {
    document.querySelector("#portal-materia").style.display = "none"
    document.querySelector("#portal-alumnos").style.display = "block"
}

const volver3 = () => {
    document.querySelector("#portal-calificacion").style.display = "none"
    document.querySelector("#portal-alumnos").style.display = "block"
}

const volver4 = () => {
    document.querySelector("#portal-crear-grupo").style.display = "none"
    document.querySelector("#portal-grupos").style.display = "block"
}

const volver5 = () => {
    document.querySelector("#portal-asignar-grupo").style.display = "none"
    document.querySelector("#portal-grupos").style.display = "block"
}

const volver6 = () => {
    document.querySelector("#buscar-nombre").style.display = "none"
    document.querySelector("#portal-grupos").style.display = "block"
}

const volver7 = () => {
    document.querySelector("#promedio-alumno-portal").style.display = "none"
    document.querySelector("#portal-grupos").style.display = "block"
}

const volver8 = () => {
    document.querySelector("#promedio-grupo-portal").style.display = "none"
    document.querySelector("#portal-grupos").style.display = "block"
}

const volver9 = () => {
    document.querySelector("#lista-ascendente-portal").style.display = "none"
    document.querySelector("#portal-grupos").style.display = "block"
}
const volver10 = () => {
    document.querySelector("#lista-descendente-portal").style.display = "none"
    document.querySelector("#portal-grupos").style.display = "block"
}

//fucniones de botones  alumno --------------------------------------------------------------------------
const agregar = (event) => { 
    event.preventDefault();
    const mensaje = document.querySelector("#mensaje");
    const nombre = document.querySelector("#nombre").value.toUpperCase();
    const apellidoPaterno = document.querySelector("#apellidoPaterno").value.toUpperCase();
    const apellidoMaterno = document.querySelector("#apellidoMaterno").value.toUpperCase();
    const edad = document.querySelector("#edad").value;
    if (!nombre || !apellidoPaterno || !apellidoMaterno || !edad) {
        mensaje.textContent = `Todos los campos son obligatorios`;
        return
    }
    let nuevoAlumno = new ALUMNO (nombre, apellidoPaterno, apellidoMaterno, edad)
    globalAlumnos.push(nuevoAlumno)
    console.log(globalAlumnos)
    mensaje.textContent = `Se ha agregado al alumno: ${nombre} ${apellidoPaterno} ${apellidoMaterno}`;
    document.querySelector("#nombre").value = '';
    document.querySelector("#apellidoPaterno").value = '';
    document.querySelector("#apellidoMaterno").value = '';
    document.querySelector("#edad").value = '';
}


const agregarMateria = (event) => { 
    event.preventDefault();
    const mensaje = document.querySelector("#materia-mensaje");
    const nombreAlumno = document.querySelector("#nombre-materia-portal").value.toUpperCase()
    let alumnoEncontrado = globalAlumnos.find(alumno => alumno.nombre === nombreAlumno)
    const materia = document.querySelector("#materia").value.toUpperCase()
    if (!nombreAlumno || !materia ) {
        mensaje.textContent = `Todos los campos son obligatorios`;
        return
    }
    if (alumnoEncontrado) {
        alumnoEncontrado.incripcion(materia)
        mensaje.textContent = `Se ha agregado al alumno: ${alumnoEncontrado.nombre} a la materia ${materia}`;
        document.querySelector("#nombre-materia-portal").value = ""
        document.querySelector("#materia").value = ""
        console.log(globalAlumnos)
    } else {
        console.log("alumno no encontrado")
    }
}


const agregarCalificacion = (event) => { 
    event.preventDefault();
    const mensaje = document.querySelector("#calificacion-mensaje");
    const nombreAlumno = document.querySelector("#nombre-calificacion-portal").value.toUpperCase()
    const nombreMateria = document.querySelector("#materia-calificacion-portal").value.toUpperCase();
    const calificacion = document.querySelector("#calificacion").value;
    let alumnoEncontrado = globalAlumnos.find(alumno => alumno.nombre === nombreAlumno)
    if (!nombreAlumno || !nombreMateria || !calificacion ) {
        mensaje.textContent = `Todos los campos son obligatorios`;
        return
    }
    if (alumnoEncontrado) {
        alumnoEncontrado.calificaciones(nombreMateria, calificacion);
        document.querySelector("#nombre-calificacion-portal").value = "";
        document.querySelector("#materia-calificacion-portal").value = "";
        document.querySelector("#calificacion").value = "";
        mensaje.textContent = `Calificación de ${calificacion} agregada a ${nombreMateria}`;
    } else {
        mensaje.textContent = `No se ha encontrado al alumno: ${nombreAlumno}`;
    }
}


const promedioAlumno = () => { 
    const nombreAlumno = document.querySelector("#alumno").value.toUpperCase()
    let alumnoEncontrado = globalAlumnos.find(alumno => alumno.nombre === nombreAlumno)
    if (alumnoEncontrado) {
        const promedio = alumnoEncontrado.promedio()
        return promedio
    } else {
        console.log("alumno no encontrado")
    }
}


//funciones de botones  grupo --------------------------------------------------------------------------
const crearGrupo = (event) => {
    event.preventDefault();
    const mensaje = document.querySelector("#mensaje-grupo");
    const nombreGrupo = document.querySelector("#nombre-grupo-portal").value.toUpperCase()
    if (!nombreGrupo) {
        mensaje.textContent = `Todos los campos son obligatorios`;
        return
    }
    let nuevoGrupo = new GRUPOS (nombreGrupo)
    globalGrupos.push(nuevoGrupo)
    console.log(globalGrupos)
    mensaje.textContent = `Se ha creado el grupo: ${nombreGrupo}`;
    document.querySelector("#nombre-grupo-portal").value = ""
}

const agregarAlumno = (event) => {
    event.preventDefault()
    const mensaje = document.querySelector("#mensaje-asignar-grupo");
    let nombreGrupo = document.querySelector("#asignar-grupo-portal").value.toUpperCase()
    let grupoEncontrado = globalGrupos.find(grupo => grupo.nombreGrupo === nombreGrupo)
    const nombreAlumno = document.querySelector("#alumno-grupo-portal").value.toUpperCase()
    if (!nombreGrupo || !nombreAlumno) {
        mensaje.textContent = `Todos los campos son obligatorios`;
        return
    }
    if (grupoEncontrado) {
        let alumnoEncontrado = globalAlumnos.find(alumno => alumno.nombre === nombreAlumno)
        if (alumnoEncontrado) {
            grupoEncontrado.agregarAlumno(alumnoEncontrado)
            console.log(`Alumno ${alumnoEncontrado.nombre} agregado al grupo ${nombreGrupo}`)
            mensaje.textContent = `Alumno ${alumnoEncontrado.nombre} agregado al grupo ${nombreGrupo}`
            document.querySelector("#asignar-grupo-portal").value = "";
            document.querySelector("#alumno-grupo-portal").value = "";
            console.log(globalGrupos)
        } else {
            mensaje.textContent = `El alumno ${alumnoEncontrado.nombre} no existe`
        }
    }else {
        mensaje.textContent = `El grupo ${nombreGrupo} no existe.`    }
}

/* FUNCION EN CASO DE BUSCAR POR OMMBRE DE PILA
const buscarPorNombre = () => {
    let nombreGrupo = document.querySelector("#grupo").value
    let grupoEncontrado = globalGrupos.find(grupo => grupo.nombreGrupo === nombreGrupo)
    if (grupoEncontrado) {
        const nombreAlumno = document.querySelector("#alumno").value
        let alumnoEncontrado = grupoEncontrado.buscarNombre(nombreAlumno)
        if (alumnoEncontrado) {
            console.log(`Alumno encontrado: ${alumnoEncontrado.nombre}`)
            return alumnoEncontrado
        } else {
            console.log(`El alumno ${nombreAlumno} no se encuentra en el grupo ${nombreGrupo}.`)
        }
    }else {
        console.log(`El alumno ${nombreAlumno} no existe.`)
    }
}
*/

const buscarPorApellidoPaterno = (event) => {
    event.preventDefault()
    const mensaje = document.querySelector("#mensaje-buscar-nombre");
    const nombreGrupo = document.querySelector("#buscar-nombre-grupo-portal").value.toUpperCase()
    let grupoEncontrado = globalGrupos.find(grupo => grupo.nombreGrupo === nombreGrupo)
    const apellidoPaternoAlumno = document.querySelector("#buscar-nombre-portal").value.toUpperCase()
    if (!nombreGrupo || !apellidoPaternoAlumno) {
        mensaje.textContent = `Todos los campos son obligatorios`;
        return
    }
    if (grupoEncontrado) {
        console.log(grupoEncontrado)
        
        let alumnoEncontrado = grupoEncontrado.buscarApellidoPaterno(apellidoPaternoAlumno)
        if (alumnoEncontrado) {
            console.log(alumnoEncontrado)
            console.log(`Alumno encontrado: ${alumnoEncontrado.nombre}`)
            mensaje.textContent = `Alumno ${alumnoEncontrado.nombre} ${alumnoEncontrado.apellidoPaterno} ${alumnoEncontrado.apellidoMaterno}`
            console.log(alumnoEncontrado)
        } else {
            mensaje.textContent = `El alumno no esta en ese grupo`
        }
    }else {
        mensaje.textContent = `El grupo no existe`
    }
}

/*FUNCION EN CASO DE BUSCAR POR APELLIDO MATERNO
const buscarPorApellidoMaterno = () => {
    let nombreGrupo = document.querySelector("#grupo").value
    let grupoEncontrado = globalGrupos.find(grupo => grupo.nombreGrupo === nombreGrupo)
    if (grupoEncontrado) {
        const apellidoMaternoAlumno = document.querySelector("#BusquedaApellidoMaterno").value
        let alumnoEncontrado = grupoEncontrado.buscarApellidoMaterno(apellidoMaternoAlumno)
        if (alumnoEncontrado) {
            console.log(`Alumno encontrado: ${alumnoEncontrado.nombre}`)
            return alumnoEncontrado
        } else {
            console.log(`El alumno ${nombreAlumno} no se encuentra en el grupo ${nombreGrupo}.`)
        }
    }else {
        console.log(`El alumno ${nombreAlumno} no existe.`)
    }
}
*/


const promedioPorAlumno = (event) => {
    event.preventDefault()
    const mensaje = document.querySelector("#mensaje-promedio-alumno");
    const nombreGrupo = document.querySelector("#promedio-alumno-grupo-portal").value.toUpperCase()
    const nombreAlumno = document.querySelector("#promedio-nombre-alumno-portal").value.toUpperCase()
    let grupoEncontrado = globalGrupos.find(grupo => grupo.nombreGrupo === nombreGrupo)
    if (!nombreGrupo || !nombreAlumno) {
        mensaje.textContent = `Todos los campos son obligatorios`;
        return
    }
    if (grupoEncontrado) {

        let alumnoEncontrado = grupoEncontrado.buscarNombre(nombreAlumno)
        if (alumnoEncontrado) {
            console.log(`Alumno encontrado: ${alumnoEncontrado.nombre}`)
            let promedio = grupoEncontrado.promedioAlumno(nombreAlumno)
            mensaje.textContent = `El alumno ${nombreAlumno} tiene un promedio de ${promedio}`
            document.querySelector("#promedio-alumno-grupo-portal").value = ""
            document.querySelector("#promedio-nombre-alumno-portal").value = ""
        } else {
            mensaje.textContent = `El alumno ${nombreAlumno} no se encuentra en el grupo ${nombreGrupo}`
            console.log(`El alumno ${nombreAlumno} no se encuentra en el grupo ${nombreGrupo}.`)
        }
    }else {
        console.log(`El alumno ${nombreAlumno} no existe.`)
    }
}


const promedioPorGrupo = (event) => {
    event.preventDefault()
    const mensaje = document.querySelector("#mensaje-promedio-grupo");
    const nombreGrupo = document.querySelector("#promedio-grupo-portal-valor").value.toUpperCase()
    let grupoEncontrado = globalGrupos.find(grupo => grupo.nombreGrupo === nombreGrupo)
    if (!nombreGrupo) {
        mensaje.textContent = `Todos los campos son obligatorios`;
        return
    }
    if (grupoEncontrado) {
        let promedio = grupoEncontrado.promedioGrupal()
        mensaje.textContent = `El grupo ${nombreGrupo} tiene un promedio de ${promedio}`
        document.querySelector("#promedio-grupo-portal-valor").value = ""
    }else {
        mensaje.textContent = `El alumno ${nombreAlumno} no esta regisrado.`
    }
}


const listaAscendente = (event) => {
    event.preventDefault()
    const mensaje = document.querySelector("#mensaje-lista-ascendente");
    const nombreGrupo = document.querySelector("#lista-ascendente-grupo-portal").value.toUpperCase()
    let grupoEncontrado = globalGrupos.find(grupo => grupo.nombreGrupo === nombreGrupo)
    if (!nombreGrupo) {
        mensaje.textContent = `Todos los campos son obligatorios`;
        return
    }
    if (grupoEncontrado) {
        console.log(grupoEncontrado)
        let lista = grupoEncontrado.listaAscendente()
        let listaFormateada = lista.map(alumno => `${alumno.nombre}: ${alumno.promedio}`).join(", ")
        mensaje.textContent = `El orden ascendente por promedio: ${listaFormateada}`
    }else {
        mensaje.textContent = `El  ${nombreGrupo} no existe`
    }
}

const listaDescendente = (event) => {
    event.preventDefault()
    const mensaje = document.querySelector("#mensaje-lista-descente");
    const nombreGrupo = document.querySelector("#lista-descendente-grupo-portal").value.toUpperCase()
    let grupoEncontrado = globalGrupos.find(grupo => grupo.nombreGrupo === nombreGrupo)
    if (!nombreGrupo) {
        mensaje.textContent = `Todos los campos son obligatorios`;
        return
    }
    if (grupoEncontrado) {
        let lista =  grupoEncontrado.listaDescendente()
        let listaFormateada = lista.map(alumno => `${alumno.nombre}: ${alumno.promedio}`).join(", ")
        mensaje.textContent = `El orden ascendente por promedio: ${listaFormateada}`
    }else {
        mensaje.textContent = `El  ${nombreGrupo} no existe`
    }
}

//escuchar html --------------------------------------------------------------------------
//botones para cambiar de pagina
cambiarPaginaAlumno.addEventListener("click", () => paginaAlumno())
cambiarPaginaGrupos.addEventListener("click", () => paginaGrupos())
cambiarPaginaIncripcion.addEventListener("click", () => paginaInscripcion())
cambiarPaginaMateria.addEventListener("click", () => paginaMateria())
cambiarPaginaCalificacion.addEventListener("click", () => paginaCalificacion())
cambiarPaginaCrearGrupo.addEventListener("click", () => paginaCrearGrupo())
cambiarPaginaAsignarGrupo.addEventListener("click", () => paginaAsignarGrupo())
cambiarPaginaBuscarNombre.addEventListener("click", () => paginaBuscarNombre())
cambiarPaginaPromedioAlumno.addEventListener("click", () => paginaPromedioAlumno())
cambiarPaginaPromedioGrupo.addEventListener("click", () => paginaPromedioGrupo())
cambiarPaginaListaAscendente.addEventListener("click", () => paginaListaAscendete())
cambiarPaginaListaDescendente.addEventListener("click", () => paginaListaDescendente())

//botones para regresar
volverPrincipal1.addEventListener("click", () => volverFuncionPrincipal1())
volverPrincipal2.addEventListener("click", () => volverFuncionPrincipal2())
volverBoton1.addEventListener("click", () => volver1())
volverBoton2.addEventListener("click", () => volver2())
volverBoton3.addEventListener("click", () => volver3())
volverBoton4.addEventListener("click", () => volver4())
volverBoton5.addEventListener("click", () => volver5())
volverBoton6.addEventListener("click", () => volver6())
volverBoton7.addEventListener("click", () => volver7())
volverBoton8.addEventListener("click", () => volver8())
volverBoton9.addEventListener("click", () => volver9())
volverBoton10.addEventListener("click", () => volver10())

//botones para el form
document.querySelector("#agregar-alumno-form").addEventListener("submit", agregar)
document.querySelector("#agregar-materia-form").addEventListener("submit", agregarMateria)
document.querySelector("#agregar-calificacion-form").addEventListener("submit", agregarCalificacion)
document.querySelector("#crear-grupo-form").addEventListener("submit", crearGrupo)
document.querySelector("#asignar-grupo-form").addEventListener("submit", agregarAlumno)
document.querySelector("#buscar-nombre-form").addEventListener("submit", buscarPorApellidoPaterno)
document.querySelector("#promedio-alumno-form").addEventListener("submit", promedioPorAlumno)
document.querySelector("#promedio-grupo-form").addEventListener("submit", promedioPorGrupo)
document.querySelector("#lista-ascendente-form").addEventListener("submit", listaAscendente)
document.querySelector("#lista-descendente-form").addEventListener("submit", listaDescendente)

