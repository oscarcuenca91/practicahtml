var inputs = document.getElementsByClassName('formulario__input');

for(var i = 0; i < inputs.length; i++)
{
   inputs[i].addEventListener('keyup', function()
   {
       if(this.value.length>=1)
       {
           this.nextElementSibling.classList.add('fijar');
       }
       else 
       {
           this.nextElementSibling.remove('fijar');
       }
   })
}

function capturar()
{
    var nombre = document.getElementById("nombre").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var ciudad = document.getElementById("ciudad").value;
    var edad = document.getElementById("edad").value;
    
    if(nombre == null || nombre.length == 0 )
    { 
        alert('ERROR: debes ingresar un nombre'); 
        return false; 
    } 

    if(direccion == null || direccion.length == 0)
    {
        alert('ERROR: debes ingresar una direccion'); 
        return false; 
    }

    if(telefono == null || telefono.length == 0)
    {
        alert('ERROR: debes ingresar un teléfono'); 
        return false; 
    }

    if(correo == null || correo.length == 0)
    {
        alert('ERROR: debes ingresar un correo'); 
        return false; 
    }

    if(ciudad == null || ciudad.length == 0)
    {
        alert('ERROR: debes ingresar una ciudad'); 
        return false; 
    }

    if(edad == null || edad.length == 0)
    {
        alert('ERROR: debes ingresar una edad'); 
        return false; 
    }
    
    console.log(nombre);
    console.log(direccion);
}


