const Nomezada = document.querySelector('.Nomezada')
const perfilzada = document.querySelector('.Perfilzada')
const Biozada = document.querySelector('.Biozada')
const followers = document.querySelector('.followers')
const Locationzada = document.querySelector('.Locationzada')
const reposiotios = document.querySelector('.repositorios')
const games = document.querySelector(".games")
const colegas = document.querySelector(".colegas")

function getConteudos(){
    fetch ('https://api.github.com/users/VBorello')
        .then(res => {
            return res.json()
        })
        .then((data) => {
            Nomezada.textContent = data.login
            perfilzada.setAttribute("src", data.avatar_url)
            Biozada.textContent = data.bio
            followers.innerHTML += data.followers
            Locationzada.innerHTML += data.location
        })
}

function getRepos(){
    fetch('https://api.github.com/users/VBorello/repos')
    .then (res => {
        return res.json()
    })
    .then((data) => {
        data.forEach((repo, index) => {
            reposiotios.innerHTML += `
                <a class="repositorio" href="repositorios.html?name=${repo.name}">
                    <div style="text-align: center;"><strong>${repo.name}</strong></div>
                    <img src="/assets/imgs/repo${index + 1}.jpeg" alt="">
                    <p class="description">${repo.description}</p>
                    <div class="estatisticas-repo">
                        <span><i class="ph ph-git-fork"></i>${repo.forks_count} <i class="ph ph-star"> </i> ${repo.stargazers_count} </span>
                    </div>
                </a>
                
            `
        })
    })
}

function getRecomendacoes() {
    fetch ('https://b3dcc084-c1bd-4888-affc-821bc452d9f0-00-39di1qxwm03ir.kirk.replit.dev/game_recommendations')
        .then(res => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            data.forEach(game => {
                games.innerHTML += `
                    <div class="carousel-item">
                        <img src="${game.image}" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                        <h5>${game.name}</h5>
                        <p>${game.description}</p>
                        </div>
                    </div>
                `
            })
            games.children[0].classList.add("active")
        })
}

function getColegas() {
    fetch ('https://b3dcc084-c1bd-4888-affc-821bc452d9f0-00-39di1qxwm03ir.kirk.replit.dev/colegas')
        .then(res => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            data.forEach(colega => {
                colegas.innerHTML += `
                    <div class="pessoa">
                        <img src="${colega.image}" alt="">
                        <strong>${colega.name}</strong>
                    </div>
                `
            })
            games.children[0].classList.add("active")
        })
}



 getConteudos()
 getRepos()
 getRecomendacoes()
 getcoloegas()
