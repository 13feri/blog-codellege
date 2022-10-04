const btnEnviar = document.getElementById('btnEnviar');
const txtError = document.getElementById('Error');
const LtComentarios = document.getElementById('Comentarios');
const LtUsuario = document.getElementById("Usuarios");


function GuardarEnLocal(llave, valor)
{
    window.localStorage.setItem(llave, JSON.stringify(valor));
}

function ObtenerEnLocal(llave)
{
    return JSON.parse(window.localStorage.getItem(llave));
}


function ExisteVariableEnLocal(llave)
{
    return window.localStorage.getItem(llave) != undefined;
}


function enviar_(ev)
{
    let texto = document.getElementById('txtComentario');
    if(texto.value == undefined || texto.value == '')
    {
        alert ('Por favor digite un comentario');
        return;
    }

    let usuario_ = document.getElementById('usuario');
    
    if(usuario_.value == undefined || usuario_.value == '')
    {
        alert ('No ha registrado usuario');
        return;
    }

    
    if(ExisteVariableEnLocal('LSUsuario'))
    {
        let usuario1 = ObtenerEnLocal('LSUsuario');
        usuario1.push({usuario2: usuario_.value, indice: usuario1.length });
        GuardarEnLocal('LSUsuario', usuario1);
    }
    else
    {
        let usuario2 = [];
        usuario2.push({usuario2: usuario_.value, indice: 0 });
        GuardarEnLocal('LSUsuario', usuario2);
    }

  

    if(ExisteVariableEnLocal('LSComentarios'))
    {
        let original = ObtenerEnLocal('LSComentarios');
        original.push({comentario: texto.value, indice: original.length });
        GuardarEnLocal('LSComentarios', original);
    }
    else
    {
        let comentario = [];
        comentario.push({comentario: texto.value, indice: 0 });
        GuardarEnLocal('LSComentarios', comentario);
    }

    texto.value = '';
    comentar();
}


function comentar()
{
    
    let comentarios = ObtenerEnLocal('LSComentarios');
    let NoComentarios = document.getElementById('NoComentarios');
    NoComentarios.innerHTML = comentarios.length;
    let usuarios = ObtenerEnLocal('LSUsuario')
    LtComentarios.innerHTML = '';
    LtUsuario.innerHTML = '';
    
    
    for(let i = 0; i < comentarios.length; i++)
    {
        
        let _p = document.createElement('p');
        _p.innerHTML = `${usuarios[i].usuario2} : ${comentarios[i].comentario}` ;

        LtComentarios.append(_p);
               
        
    }

}

btnEnviar.addEventListener('click', enviar_);
comentar();

