window.addEventListener('load', function() {    
    segundos = this.document.getElementById('segundos');
    segundoSort = Math.round(Math.random() * 5) + 5;
    segundos.innerHTML = segundoSort;

    setInterval(function() {
        segundoSort--;
        if (segundoSort < 4) {
            segundos.style.color = 'red';
        }
        segundos.innerHTML = segundoSort;
        if (segundoSort === 1) {
            window.open('veiculos.html', '_self');
        }
    }, 1000);
});