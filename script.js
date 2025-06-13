function validar()
{
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (login == "admin@fortes.com.br" && senha == "123456")
    {
        location.href = "entrar.html"
    }
    else if (login == "cooperativas@fortes.com.br" && senha == "123456")
    {
        location.href = "recicladoras.html"
    }
    else 
    {
        alert('Dados inválidos')
    }
    }

function criar()
{
    location.href = "criar.html"
}

function criarus()
{
    location.href = "cadastro-user.html"
}

function criarorg(){
    location.href = "cadastro-org.html"
}

function criarcoop(){
    location.href = "cadastro-coop.html"
}

function adicionarponto(){
    location.href = "adicionarponto.html"
}