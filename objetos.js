var persona = {
    nombre: 'Jose',
    edad: 45,
    saludar: function(){
        console.log('Hola ' + this.nombre)
    }
};

console.log(persona.nombre);

persona.saludar();