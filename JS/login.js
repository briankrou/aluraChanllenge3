
    const btnAgregar=document.querySelector('.login__btn')
    const usuario =document.querySelector('[data-correo]')
    const contraseña =document.querySelector('[data-contrasena]')



    btnAgregar.addEventListener('click',()=>{

            usuario.value="";
            contraseña.value="";

    })
