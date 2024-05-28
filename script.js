// Unsplash API
const count = 10;
const apiKey = "CSE-u2QWDi9En_pIEFlwdzVnbIuGVpjtLqpgnHET2wA";

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    //Catch error here
  }
}

//On Load
getPhotos();
