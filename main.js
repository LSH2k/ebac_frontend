document.addEventListener('DOMContentLoaded',function() {
    const avatarItem = document.querySelector('#avatar')
    const nameItem = document.querySelector('#name')
    const usernameItem = document.querySelector('#username')
    const reposItem = document.querySelector('#repos')
    const followersItem = document.querySelector('#followers')
    const followingItem = document.querySelector('#following')
    const linkItem = document.querySelector('#link')

    const endpoint = ('https://api.github.com/users/lsh2k')

    fetch(endpoint)
        .then(function(res) {
            return res.json()
        })
        .then(function(json) {
            avatarItem.src = json.avatar_url
            nameItem.innerText = json.name
            usernameItem.innerText = json.login
            reposItem.innerText = json.public_repos
            followersItem.innerText = json.followers
            followingItem.innerText = json.following
            linkItem.href = json.html_url
        })
})