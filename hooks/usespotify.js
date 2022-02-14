import { useEffect } from "react";
import { signIn, useSession} from "next-auth/react";
import SpotifyWebApi from "spotify-web-api-node";

const SpotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

function usespotify() {
    const { data: session, status } = useSession();

    useEffect(() => {
        // If refresh access token attempt fails, direct user to login...
        if (session) {
             if (session.error === 'RefreshAccessTolenError'){
                 signIn();
             }

             SpotifyApi.setAccessToken(session.user.accessToken);
        }
}, [session]);
  
    return SpotifyApi;
}

export default usespotify