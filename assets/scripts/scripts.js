const Nomezada = document.querySelector('.Nomezada')
const perfilzada = document.querySelector('.Perfilzada')
const Biozada = document.querySelector('.Biozada')
const followers = document.querySelector('.followers')
const Locationzada = document.querySelector('.Locationzada')
const reposiotios = document.querySelector('.repositorios')


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
                    <p>...</p>
                    <div class="estatisticas-repo">
                        <span><i class="ph ph-star"></i>${repo.stargazers_count}</span>
                    </div>
                </a>
                
            `
        })
    })

    function getCarouselFriends(){
        fetch('https://b3dcc084-c1bd-4888-affc-821bc452d9f0-00-39di1qxwm03ir.kirk.replit.dev')
        .then (res => {
            return res.json()
        })
        .then((data) => {
            data.forEach((repo, index) => {
                dbJson.innerHTML =+
                
            })
        })
    }
}





 getConteudos()
 getRepos()

