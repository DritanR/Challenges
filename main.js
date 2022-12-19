document.querySelector('button').addEventListener('click', getNewJoke)
 function getNewJoke () {
    const getValue= document.querySelector('button').value
    const url= `https://v2.jokeapi.dev/joke/Any?safe-mode=${getValue}`
    fetch (url)
        .then(res => res.json ())
        .then(data => {
            console.log(data)
            if (document.querySelector('#joker').innerText= data.joke) {
                document.querySelector('#listener').innerText= (('That was funny!') || ('Hahahaha!') || ('That was funny AF !'))
            }else if (document.querySelector('#joker').innerText= data.setup) {
                document.querySelector('#listener').innerText= data.delivery
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
 }