//Llamadas a elementos del HTML.
const input = document.getElementById('floatingInput');
const loader = document.getElementById('loader');
const prg_text = document.getElementById('progress-text');
const form_block_submit = document.getElementById('form-block-submit');

//Inicio Funcion: ShowError() || Estilizacion de mensajes de estado.
function showError(type) {
    //Elementos necesarios para la funcion.
    const error_disp = document.getElementById('error-display-red');
    const errors = ["empty-login", "nan-userid", "connection", "sdown", "success"];
    const e_disp = document.getElementById('error-type');
    const astxt = document.getElementById('alert-str-txt');
    
    //Condicional de valores de la variable error[].
    if (type == errors[0]) {
        error_disp.style.display = 'block'; //Mostrar error_disp.
        error_disp.style.animation = 'showup .5s ease-in'; //Animacion sencilla.
        e_disp.innerText = "El campo de inicio de sesión no puede estar vacio."; //Explicacion del error
        e_disp.style.textDecoration = 'underline white'; //Estilizacion del texto.
        setTimeout(() => { //Timeout de 3.5s para después desaparecer.
            error_disp.style.display = 'none'; //Volver a ocultar el error_disp.
            e_disp.innerText = ""; //Texto interno del e_disp a blanco.
        }, 3500);

    } else if (type == errors[1]) {
        error_disp.style.display = 'block';
        error_disp.classList = 'alert alert-dismissible alert-warning login-error'
        error_disp.style.animation = 'showup .5s ease-in';
        e_disp.innerText = "La ID del Usuario no es existente o es incorrecta.";
        e_disp.style.textDecoration = 'underline white';
        setTimeout(() => {
            error_disp.style.display = 'none';
            e_disp.innerText = "";
        }, 3500);
    } else if (type == errors[2]) {

    } else if (type == errors[3]) {

    } else if (type == errors[4]) {
        astxt.innerText = "Exitosamente!";
        error_disp.style.display = 'block';
        error_disp.classList = 'alert alert-dismissible alert-success login-error'
        error_disp.style.animation = 'showup .5s ease-in';
        e_disp.innerText = "El Usuario ha iniciado sesion correctamente.";
        e_disp.style.textDecoration = 'underline white';
        setTimeout(() => {
            error_disp.style.display = 'none';
            e_disp.innerText = "";
        }, 3500);
    }
}
//Fin Funcion: showError().

//Inicio Funcion: getUser() || Conseguir el objeto de usuario desde el valor del input.
function getUser(authkey, data) {
    const user = data.userdata.find(user => user.authkey === authkey);
    return user;
}
//Fin Funcion: getUser().

//Inicio Funcion: genCookies() || Generar cookies en el navegador web
const genCookies = (cnames = [], cvalues = []) => {
    // Comprobar que los arrays tengan la misma longitud
    if (cnames.length !== cvalues.length) {
      console.error("The CNames and CValues have to be the same length (cnames['1', '2'] = cvalues['1', '2'] not cnames['1', '2'] = cvalues['1'])");
      return;
    }
  
    // Iterar por cada par de valores cname/cvalue y generar la cookie correspondiente
    for (let i = 0; i < cnames.length; i++) {
      const cname = cnames[i];
      const cvalue = cvalues[i];
      document.cookie = `${cname}=${cvalue}; path=/`;
    }
}

async function getAPI(dir) { //Funcion para obtener datos del archivo skjs.users.json
    fetch(dir, {
        mode: "cors", //Modo que utiliza
    }).then(
        res => res.json()
    ).then(data => { //Variable de datos y que realiza con ellos.
        form_block_submit.addEventListener('click', () => { //EventListener al realizar click en el botón Identificarme.
            if (input.value != "") { //Condicional: Verifica que el campo: Input, del authkey no este vacio.
                for (var x in data.userdata) { //Iteracion por variable x en userdata.
                    var usrdata = data.userdata[x]; //Resultado almacenado en la variable usrdata al hacer la iteracion.
                    if (usrdata.authkey.includes(input.value)) { //Comprobar que el valor del input se encuentre en una lista de Authkeys
                        var usrdat = getUser(input.value, data); //getUser para relacionar el AuthKey con todo el objeto.
                        genCookies(['username', 'authkey', 'level', 'usertype'], [usrdat["username"], usrdat["authkey"], usrdat["level"], usrdat["usertype"]]); //Cookies a Generar
                        showError('success'); //ShowErrorSuccess: Cartelito mostrado al momento de ser un login exitoso.
                        chkjs.chkC('authkey'); //FinishAuth: Funcion la cual termina la autentificacion.
                    } else {
                        //pass
                    }
                }
            } else {
                showError('empty-login');
            }
        });
    });
}

getAPI('https://raw.githubusercontent.com/SakuJS/api/main/v1/skjs.users.json');


document.body.onload = () => {

}

//http://sakujs.byethost11.com/data/users/index.json
