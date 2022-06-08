function createCard(title, description, pictureUrl) {
    return `
      <div class="card">
        <img src="${pictureUrl}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
        </div>
      </div>
    `;
  }
window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/conferences';
    try {
        const response = await fetch(url);

        if (!response.ok) { // if the fetch url abov does not work
            console.log('the response is bad dawg') // not sure if this is correct

        } else { // run all of this below to generate proper response
            const data = await response.json(); // to translate the json response
            // let x = 0
            for (let conference of data.conferences) {
                const detailUrl = `http://localhost:8000${conference.href}`;
                const detailResponse = await fetch(detailUrl);
                if (detailResponse.ok) {
                    const details = await detailResponse.json();
                    const title = details.conference.name;
                    const description = details.conference.description;
                    const pictureUrl = details.conference.location.picture_url;
                    const html = createCard(title, description, pictureUrl);
                    const column = document.querySelector('.row');
                    column.innerHTML += html;

                // const description = details.conference.description;
                // const conferenceDetail = document.querySelector('.card-text');
                // conferenceDetail.innerHTML = details.conference.description;
                // console.log(details);
                // const conferenceImg = document.querySelector('.card-img-top');
                // conferenceImg.src = details.conference.location.picture_url;
                }
            }
        }
    } catch (e) {
        console.error(e)
        console.log('an error has occured partner')
    }
});
