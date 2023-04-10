const input = document.getElementById('floatingInput');
const loader = document.getElementById('loader');
const prg_text = document.getElementById('progress-text');
const form_block_submit = document.getElementById('form-block-submit');


function showError(type) {
    const error_disp = document.getElementById('error-display-red');
    const errors = ["empty-login", "nan-userid", "connection", "sdown", "test"];
    const e_disp = document.getElementById('error-type');
    const astxt = document.getElementById('alert-str-txt');

    if (type == errors[0]) {
        error_disp.style.display = 'block';
        error_disp.style.animation = 'showup .5s ease-in';
        e_disp.innerText = "El campo de inicio de sesión no puede estar vacio.";
        e_disp.style.textDecoration = 'underline white';
        setTimeout(() => {
            error_disp.style.display = 'none';
            e_disp.innerText = "";
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
        e_disp.innerText = "El Usuario ha iniciado session correctamente.";
        e_disp.style.textDecoration = 'underline white';
        setTimeout(() => {
            error_disp.style.display = 'none';
            e_disp.innerText = "";
        }, 3500);
    }
}


function getUser(authkey, data  ) {
    const user = data.userdata.find(user => user.authkey === authkey);
    return console.log(user);
}

async function getAPI(dir) {
    fetch(dir, {
        mode: "cors"
    }).then(
        res => res.json()
    ).then(data => {
        form_block_submit.addEventListener('click', () => {
            if (input.value != "") {
                for (var x in data.userdata) {
                    var usrdata = data.userdata[x];
                    if (usrdata.authkey.includes(input.value)) {
                        getUser(input.value, data);
                        showError('test');
                        // document.cookie = "secret=" + input.value + "; path=/";
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

getAPI('/src/js/data/users/data.json')

// document.body.onload = () => {
//     if (getCookie('secret')) {
//         window.location.href = "../dashboard/";
//     }else {
//         //pass
//     }
// }

//http://sakujs.byethost11.com/data/users/index.json