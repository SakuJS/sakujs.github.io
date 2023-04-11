document.body.onload = () => {
    const loginb = document.getElementById('nucbtn');
    const usrDL = document.getElementById('ucdtd');
    
    if (getCookie('authkey') == "") {
        //pass
    } else if (getCookie('authkey') != "") {
        loginb.remove();
        usrDL.style.display = 'block';
    }
}