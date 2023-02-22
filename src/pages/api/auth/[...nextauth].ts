import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import axios from "axios";

export default NextAuth({
	providers: [
		DiscordProvider({
			clientId: "1073492380398923868",
			clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
			authorization: { params: { scope: "identify email guilds.join" } },
		}),
	],
	callbacks: {
		async jwt({ token, account }) {
			// Persist the OAuth access_token to the token right after signin
			console.log(account);
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token }) {
			if (!session) return session;
			// Send properties to the client, like an access_token from a provider.
			// @ts-ignore
			session.accessToken = token.accessToken;
			// @ts-ignore
			session.user.id = token.sub;
			try {
				if (!token.accessToken) return session;
				await axios.put(
					// @ts-ignore
					`https://discord.com/api/guilds/1071904870644338739/members/${session.user.id}`,
					{
						access_token: `Bearer ${token.accessToken}`,
					},
					{
						headers: {
							Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
						},
					}
				);
			} catch (e) {
				// console.log(e);
			}
			return session;
		},
	},
});
