import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import SpotifyApi, { LOGIN_URL } from "../../../lib/spotify"

async function refreshAccessToken(token){
  try{

    SpotifyApi.setAccessToken(token.accessToken);
    SpotifyApi.setRefreshToken(token.refreshAccessToken);

    const { body: refreshedToken } = await SpotifyApi.refreshAccessToken();
    console.log("REFRESHED TOKEN IS", refreshedToken);
    return {
      ...token,
      accessToken: refreshedToken.accessToken,
      accessTokenExpires: Date.now + refreshedToken.expires_in * 1000, // 1 hour as 3600 returns from spotify API
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
      //Replace if new one came back else fall back to old refrest token
    };

  } catch (error) {
    console.error(error);

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login'
  },
    callbacks: {
      async jwt({ token, account, user }){
        //initial sign in
        if (account && user){
          return {
            ...token,
            accessToken: account.access_token,
            refreshToken: account.refresh_token,
            username: account.providerAccountId,
            accessTokenExpires: account.expires_at * 1000, //handling time in milliseconds i.e *1000
          };
        }
          //return previous token if the access token has not expired yet
          if (Date.now() < token.accessTokenExpires) {
            console.log("EXISTING TOKEN IS VALID")
            return token;
          }

          // Access token has expired, so we gon update/refresh it
          console.log("ACCESS TOKEN HAS EXPIRED, REFRESHING...")
          return await refreshAccessToken(token);
      },

      async session({ session, token }){
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
        session.user.username = token.username;

        return session;

      }
    },
  });