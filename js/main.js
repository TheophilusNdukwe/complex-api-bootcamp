// FUNCTION & Behaviour


document.querySelector('button').addEventListener('click', searchApp)
function searchApp() {
    let inputVal = document.querySelector('input').value
    const apiKey = 'qzEtNF4HyjCcEm8rDsO3E48eRnyaWzRJCsyu0hxRHhMoxWaEwOsK6hyI'

    let url = `https://app-store-metadata-api.kula.app/api/v1/apple/lookup-app?bundle_id=com.apple.${inputVal}`
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let appId = data.data.id
        console.log(appId)
        fetch(`https://app-store-metadata-api.kula.app/api/v1/apple/apps/${appId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                document.querySelector('#h1-1').innerText = data.data.name
                document.querySelector('#description').innerText = data.data.description
                document.querySelector('img').src = data.data.screenshots.iphone[1].url
                let genres = data.data.genres[0]
                const myHeaders = new Headers();
                    myHeaders.append('Authorization', apiKey);

                        const requestOptions = {
                        method: 'GET',
                        headers: myHeaders,

};
            fetch(`https://api.pexels.com/v1/search?query=${genres}`, requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        document.querySelector('#img-news').src = data.photos[0].src.large
         })       
            
            })
            .catch(err => {
                console.log(`error${err}`)
            })

    })

}
