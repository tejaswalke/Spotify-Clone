# Spotify Clone
As the name suggests, This WebApp is a Spoitfy Clone created via NextJs, Javascript and deployed (NON-API) on Microsoft Azure. The webapp consumes data from the Spotify API and tries to imitate the UI and front-end behaviours of the official [Spotify Web Payer](https://open.spotify.com/) as much as possible.

Demo URL: 
1. Microsoft Azure (NON API): [here](https://victorious-mushroom-0f1b71c10.1.azurestaticapps.net/)
2. Vercel: [here](https://spotifyclone-rxb.vercel.app)

#### Images (With Authorization/API)

 ![Image 1](https://github.com/tejaswalke/Spotify-Clone/blob/main/components/Screenshot%20from%202022-02-12%2022-36-52.png)
 
 ![Image 2](https://github.com/tejaswalke/Spotify-Clone/blob/main/components/Screenshot%20from%202022-02-12%2022-36-42.png)
 
 ![Image 3](https://github.com/tejaswalke/Spotify-Clone/blob/main/components/Screenshot%20from%202022-02-12%2022-38-10.png)
 
 ![Image 4](https://github.com/tejaswalke/Spotify-Clone/blob/main/components/2.png)
 <sup> <p align="center">Remote Controlling [Spotify Web Payer](https://open.spotify.com/) via Cloned App:  Left: Spotify Clone || Right: [Spotify Web Payer](https://open.spotify.com/)
# Motivation
I created this project from scratch mainly to get some hands-on experiance with NextJs Development. I have used Spotify Api for this project, followed by various technique and tools such as :
1. Tailwind CSS
2. Recoil 
3. NextAuth 
4. Middleware
5. React 
6. Debounce 
7. oauth JWL 
8. access/refresh tokens

I had so much fun developing this project and got to learn various concepts as well as techniques to make the WebApp responsive.

## How to use
This project requires [node](http://nodejs.org) and [npm](https://npmjs.com/) installed globally.

Clone the repository to a directory of your choosing

``git clone https://github.com/tejaswalke/SpotifyCAzure.git``

Navigate into spotify-clone-client and install the necessary packages

``npm install``

To start up the app locally

``npm start``
 
 Addionally, you will have to use your own Spoitify API Client ID & Client Secret from [Spotify for Developers](https://developer.spotify.com/), and create a file `.env` in the root of directory and set the Envoirnment Variables as:
 
 ```
 NEXTAUTH_URL= "Your Domain/localhost address"
 
 NEXT_PUBLIC_CLIENT_SECRET= "Your Client Secret"
 
 NEXT_PUBLIC_CLIENT_ID= "Your Client ID"
 
 JWT_SECRET= "Of your Choice"
 ```
 
 Open in Browser: 

http://localhost:3000


# Learn More
1. [NextJs](https://nextjs.org/docs)
2. [Tailwind CSS](https://tailwindcss.com/docs/installation)
3. [NextAuth](https://next-auth.js.org/getting-started/example)
4. [React](https://reactjs.org/docs/getting-started.html)
5. [NodeJs](https://nodejs.org/en/docs/)
