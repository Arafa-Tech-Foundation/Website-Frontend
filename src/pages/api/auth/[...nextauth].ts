import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import axios from "axios";

export default NextAuth({
	providers: [
		DiscordProvider({
			clientId: "1072350253417762847",
			clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
			authorization:
				"https://discord.com/api/oauth2/authorize?scope=identify+email+guilds.join",
		}),
	],
	callbacks: {
		async jwt({ token, account }) {
			// Persist the OAuth access_token to the token right after signin
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token }) {
			if (!session) return session;
			// Send properties to the client, like an access_token from a provider.
			await axios.put(
				// @ts-ignore
				`https://discord.com/api/guilds/877414872068001853/members/${session.user.id}`,
				{
					access_token: `Bearer ${token.accessToken}`,
				}
			);
			// @ts-ignore
			session.accessToken = token.accessToken;
			console.log(session);
			return session;
		},
	},
});
