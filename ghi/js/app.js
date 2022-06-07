window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/conferences';
    try {
        const response = await fetch(url);
        if (!response.ok) { // if the fetch url abov does not work
            console.log('the response is bad dawg') // not sure if this is correct
        } else { // run all of this below to generate proper response
            const data = await response.json(); // to translate the json response
            const conference = data.conferences[0]; // this is where the conference object is
            const nameTag = document.querySelector('.card-title'); // query selector for conference title
            nameTag.innerHTML = conference.name; // 
            // console.log(conference)
            const detailUrl = `http://localhost:8000${conference.href}`;
            const detailResponse = await fetch(detailUrl);
            if (detailResponse.ok) {
                
                const details = await detailResponse.json();
                // const description = details.conference.description;
                const conferenceDetail = document.querySelector('.card-text');
                conferenceDetail.innerHTML = details.conference.description;
                console.log(details);
                const conferenceImg = document.querySelector('.card-img-top');
                conferenceImg.src = details.conference.location.picture_url;
            }
        }
    } catch (e) {
        console.log('an error has occured partner')
    }
});
