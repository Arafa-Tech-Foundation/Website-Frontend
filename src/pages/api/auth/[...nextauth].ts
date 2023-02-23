import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import axios from "axios";

export default NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		DiscordProvider({
			clientId: "1073492380398923868",
			clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
			authorization: { params: { scope: "identify email guilds.join" } },
		}),
	],
	debug: true,
	session: {
		// @ts-ignore
		jwt: true,
	},
	callbacks: {
		async jwt({ token, account }) {
			// Persist the OAuth access_token to the token right after signin
			// console.log("ACCOUNT", account);
			// console.log("TOKEN", token.accessToken);
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token }) {
			// console.log(session, "Session");
			// console.log(token, "Token");

			if (!session) return session;
			// Send properties to the client, like an access_token from a provider.
			// @ts-ignore
			session.accessToken = token.accessToken;
			// @ts-ignore
			session.user.id = token.sub;
			try {
				if (!token.accessToken) return session;
				// console.log(token.accessToken, "ACCESS TOKEN");
				// add user to discord server
				await axios.put(
					// @ts-ignore
					`https://discord.com/api/guilds/1071904870644338739/members/${session.user.id}`,
					{
						access_token: `${token.accessToken}`,
					},
					{
						headers: {
							Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
						},
					}
				);
				// console.log("SUCCESFULLY ADDED USER TO DISCORD SERVER"");
			} catch (e: any) {
				// console.log(e.response.data);
			}
			return session;
		},
	},
});
