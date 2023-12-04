window.addEventListener('load', function() {

    document.getElementById('btnConfirmar').addEventListener('click', function() {

        var padraoNome = /^[A-Z][a-z]{4,}\s[A-Z][a-z]{4,}$/;
        var username = document.getElementById('username');
        var idade = document.getElementById('idade').value;
        var tipoVeiculo = document.getElementById('tipoVeiculo').value;

        if (username.value === '') {
            alert('Digite seu nome e sobrenome');
        } else if (!padraoNome.test(username.value)) {
            alert('Nome inválido!');
        } else if (idade <= 0 || idade > 130) {
            alert('Idade inválida!');
        } else if (tipoVeiculo === 'Selecione') {
            alert('Selecione um tipo de veículo!');
        } else {
            localStorage.setItem('username', username.value);
            localStorage.setItem('tipoVeiculo', tipoVeiculo);
            window.open('aguarde.html', '_self');
        }

    });

});
