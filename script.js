function enviarFormulario(){
    //obtenemos los valores de los campos del formulario
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    //Validacion y mensaje en el formulario
    if(nombre.length >= 1 && email.length >= 1){
        document.getElementById('formulario').textContent = nombre+', gracias por contactarnos. Nos pondremos en contacto pronto.';
        document.getElementById('formulario').style.display = 'hide';
    }else{
        document.getElementById('formulario').textContent = 'Faltan datos en el formulario. Intentalo nuevamente.';
        document.getElementById('formulario').style.display = 'hide';
    }
}