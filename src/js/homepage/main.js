document.body.onload = () => {
    const loginb = document.getElementById('nucbtn');
    const usrDL = document.getElementById('ucdtd');
    
    if (getCookie('secret') == "") {
        //pass
    } else if (getCookie('secret') != "") {
        loginb.remove();
        usrDL.style.display = 'block';
    }
}