import NextAuth, { Session, User } from "next-auth";
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

			const newSession = session as Session & {
				user: User & { id: string };
				accessToken: string;
			};

			// @ts-ignore
			newSession.accessToken = token.accessToken;
			// @ts-ignore
			newSession.user.id = token.sub;

			await axios.put(
				`https://discord.com/api/guilds/1071904870644338739/members/${newSession.user.id}`,
				{
					access_token: `Bearer ${token.accessToken}`,
				},
				{
					headers: {
						Authorization: `Bot ${process.env.DISCORD_CLIENT_SECRET}`,
					},
				}
			);

			return newSession;
		},
	},
});
