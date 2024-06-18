const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('name');

const nome = document.querySelector('.nome')
const bio = document.querySelector(".bio")
const createdAt = document.querySelector(".createdAt")
const language = document.querySelector(".language")
const link = document.querySelector(".link")

function getConteudos(){
    fetch (`https://api.github.com/repos/VBorello/${myParam}`)
        .then(res => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            nome.textContent = data.name
            bio.textContent = data.description
            createdAt.textContent = new Intl.DateTimeFormat("pt-BR").format(new Date(data.created_at))
            link.textContent = data.git_url
            link.setAttribute("src", data.git_url)
            language.textContent = data.language
        })
}

getConteudos()