function logar(){
    let senhaU = document.getElementById("inputS").value
    let loginU = document.getElementById("inputL").value

    let nL = 1
    let nS = 1

    for (let i = 0; i < (localStorage.length)+1; i++) {
       
        if((localStorage.getItem(`${nL}`) == loginU) && (localStorage.getItem(`${nS}`) == senhaU) && (nS - nL == 1)){
            window.location.href = ("https://github.com/AMATEREI?tab=repositories")
        }
        if(localStorage.getItem(`${nL}`) != loginU){
            nL++
        }
        if(localStorage.getItem(`${nS}`) != senhaU){
            nS++
        }
        else{
        }
    }
}
function cadastrar(){
    let login = document.getElementById("inputL").value
    let senha = document.getElementById("inputS").value

    if(login != senha){
        let num1
        num1 = (localStorage.length*1)+1
        localStorage.setItem(`${num1}`, login)
    
        let num2
        num2 = (localStorage.length*1)+1
        localStorage.setItem(`${num2}`, senha)
    }
    else{
        alert("Usuario e senha são idênticos")
    }
}