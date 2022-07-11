# Homeflix

Homeflix is a Netflix like project, used for streaming videos over a local network.

The frontend is a simple React page, which gets the catalog of videos from the MongoDB database.

The backend is an API created in Node.Js with Express. It streams videos directly to the frontend from the MongoDB database.

Installation:

Install and setup MongoDB on the computer which will host the database.

To add a movie file into the 'movies' database, be sure to change the IP address to the computer hosting MongoDB:

mongofiles -d movies put movie_name.mp4 -h 192.168.0.38

Same with adding an image for the movie, with the best height and width of the image being 318px x 180px.

mongofiles -d movies put movie_name.jpg -h 192.168.0.38

The 'movies' database needs a collection called 'catalog'. This will contain the details of the movies to display on the front end. Note: the "_id" is assigned by MongoDB. Add a catalog document for each movie.
{
    _id: ObjectId("62bfb4d0869330a4004c8d0c"),
    id: 1,
    title: 'Movie Name',
    file: 'movie_name.mp4',
    image: 'movie_name.jpg'
}


Clone the project.

Install the node modules in each directory:
npm --prefix ./homeflix/ install
npm --prefix ./server/ install

In homeflix/src/App.js, homeflix/src/components/moviepage/movie.component.jsx 
and homeflix/src/components/card/card.component.jsx change the IP address to the computer which will run the server.

In server/routes change the IP address in catalogue.js, image.js, movie.js to the computer which will host the MongoDB database.

To start without docker:
frontend:
cd homeflix
npm start

backend:
cd server
npm run dev

To start with docker:

frontend:
cd homeflix
docker build -t homeflix-front .
docker run -d -p 80:80 homeflix-front:latest

backend:
cd server
docker build -t homeflix-server .
docker run -d -p 8080:8080 homeflix-server:latest






