function validar()
{
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (login == "admin@fortes.com.br" && senha == "123456")
    {
        location.href = "entrar-admin.html"
    }
    else if (login == "cooperativas@fortes.com.br" && senha == "123456")
    {
        location.href = "entrar-coop.html"
    }
    else 
    {
        alert('Dados inválidos')
    }
    }

function criar ()
{
    location.href = "criar.html"
}