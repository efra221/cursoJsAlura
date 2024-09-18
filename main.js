let cantidad = document.getElementById('cantidad')
let btnGenerar = document.getElementById('generar')
let contraseña = document.getElementById('contrasena')

const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?'

function Generar() {
     let numeroDigitado = parseInt(cantidad.value);

     if (numeroDigitado < 8) {
        alert("La cantidad de caracteres debe ser mayor a 8")
        return;
     }

     let password = '';

     for (let i = 0; i < numeroDigitado; i++) {
        let caracteresRandom = caracteres[Math.floor(Math.random() * caracteres.length)]
        password += caracteresRandom
     }

     contraseña.value = password
}

function Limpiar() {
    contraseña.value = '';
}

function ValidarSeguridad() {
    let password = contraseña.value;

    let esLarga = password.length >= 12;
    let incluyeMayuscula = /[A-Z]/.test(password);
    let incluyeMinuscula = /[a-z]/.test(password);
    let incluyeNumero = /[0-9]/.test(password);
    let incluyeEspecial = /[^A-Za-z0-9]/.test(password);

    if (esLarga && incluyeMayuscula && incluyeMinuscula && incluyeNumero && incluyeEspecial) {
        alert("La contraseña es segura.");
    } else {
        alert("La contraseña NO es segura. Asegúrate de incluir al menos una mayúscula, una minúscula, un número, un carácter especial y tener más de 12 caracteres.");
    }
}
