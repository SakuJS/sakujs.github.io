//Call all the text for keybidings!
const kb_ctrl = document.getElementById('kb-ctrl');
const kb_shift = document.getElementById('kb-shift');
const kb_c = document.getElementById('kb-c');

document.body.addEventListener('keydown', (e) => {
    if (e.isComposing || e.code === 17) {
        return;
    }
    kb_ctrl.style.color = 'blue';
    document.body.addEventListener('keyup', (e) => {
        if (e.isComposing || e.code === 17) {
            return;
        }
        kb_ctrl.style.color = 'black';
    });
    
    document.body.addEventListener('keydown', (e) => {
        if (e.isComposing || e.code === 16) {
            return;
        }
        kb_shift.style.color = 'red';
    });
    
    document.body.addEventListener('keyup', (e) => {
        if (e.isComposing || e.code === 16) {
            return;
        }
        kb_shift.style.color = 'black';
    });
    
    document.body.addEventListener('keydown', (e) => {
        if (e.isComposing || e.code === 67) {
            return;
        }
        kb_c.style.color = 'green';
    });
    
    document.body.addEventListener('keyup', (e) => {
        if (e.isComposing || e.code === 67  ) {
            return;
        }
        kb_c.style.color = 'black';
    });
});

//Objeto con valores
const miObj = {
    valor1: "Hola",
    valor2: "Mundo",
    valor3: 123,
    valor4: true
};

//Valor a buscar en el objeto
const valorBuscado = "valor2";

//