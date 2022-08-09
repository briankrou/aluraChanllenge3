
    const btnAgregar=document.querySelector('.login__btn')
    const usuario =document.querySelector('[data-correo]')
    const contraseña =document.querySelector('[data-contrasena]')



    btnAgregar.addEventListener('click',()=>{

            if(usuario.value=="Administrador"){
                if(contraseña.value=="Contraseña@22"){
                    window.location.replace("./productos.html");
                }else{
                    
                }   

            }else{

            }
       

    })
