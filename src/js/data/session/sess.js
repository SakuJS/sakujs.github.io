/**
 * sess.js - Session Managing with JS.
 * 
 * Created with <3 by: INovomiast
 */

//Lib Functions
function getCookie(cookie) {
    let name = cookie + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// function genSession() {
//     document.cookie = "session=" +
// }