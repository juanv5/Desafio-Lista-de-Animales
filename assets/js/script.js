class Propietario {
    constructor(propietario, direccion, telefono) {
        this.propietario = propietario
        this.direccion = direccion
        this.telefono = telefono
    }

    datosPropietario() {
        return `El nombre del dueño es: ${this.propietario}. El domicilio es: ${this.direccion}, y el número telefónico de contacto es: ${this.telefono}`
    }
}

class Animal extends Propietario {
    constructor(propietario, direccion, telefono, animal) {
        super(propietario, direccion, telefono)
        this.animal = animal
    }
    get getAnimal() {
        return `El tipo de animal es un: ${this.animal}`
    }
}

class Mascota extends Animal {
    constructor(propietario, direccion, telefono, animal, mascota, enfermedad) {
        super(propietario, direccion, telefono, animal)
        this.mascota = mascota
        this.enfermedad = enfermedad
    }
    set setMascota(value) {
        this.mascota = value
    }
    set setEnfermedad(value) {
        this.enfermedad = value
    }
    get getMascota() {
        return this.mascota
    }
    get getEnfermedad() {
        return this.enfermedad
    }
}

const propietario = document.getElementById("propietario")
const telefono = document.getElementById("telefono")
const direccion = document.getElementById("direccion")
const mascota = document.getElementById("nombreMascota")
const tipo = document.getElementById("tipo")
const enfermedad = document.getElementById("enfermedad")
const resultado = document.getElementById("resultado")
const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    if (tipo.value === "perro") {
        const perro = new Mascota(
            propietario.value,
            direccion.value,
            telefono.value,
            tipo.value,
            mascota.value,
            enfermedad.value
        )
        resultado.innerHTML = `
        <ul>
            <li>${perro.datosPropietario()}</li>
            <li>${perro.getAnimal}, mientras que el nombre de la mascota es: ${
      perro.getMascota
    }
            y la enfermedad es: ${perro.getEnfermedad}</li>
        </ul>
        `
        return
    }
    if (tipo.value === "gato") {
        const gato = new Mascota(
            propietario.value,
            direccion.value,
            telefono.value,
            tipo.value,
            mascota.value,
            enfermedad.value
        );
        resultado.innerHTML = `
        <ul>
            <li>${gato.datosPropietario()}</li>
            <li>${gato.getAnimal}, El nombre de la mascota es ${
      gato.getMascota
    },
            La enfermedad es: ${gato.getEnfermedad}</li>
        </ul>
        `
        return
    }
    if (tipo.value === "conejo") {
        const conejo = new Mascota(
            propietario.value,
            direccion.value,
            telefono.value,
            tipo.value,
            mascota.value,
            enfermedad.value
        );
        resultado.innerHTML = `
        <ul>
            <li>${conejo.datosPropietario()}</li>
            <li>${conejo.getAnimal}, El nombre de la mascota es ${
      conejo.getMascota
    },
            La enfermedad es: ${conejo.getEnfermedad}</li>
        </ul>
        `
        return
    }
})