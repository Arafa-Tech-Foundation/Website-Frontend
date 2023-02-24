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

				try {
					if (!token.accessToken) return token;
					// console.log(token.accessToken, "ACCESS TOKEN");
					// add user to discord server
					await axios.put(
						`https://discord.com/api/guilds/1071904870644338739/members/${token.sub}`,
						{
							access_token: `${token.accessToken}`,
						},
						{
							headers: {
								Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
							},
						}
					);
					console.log("SUCCESSFULLY ADDED USER TO DISCORD SERVER");
				} catch (e: any) {
					console.log(e.response.data);
				}
			}
			return token;
		},
		async session({ session, token }) {
			if (!session) return session;
			// @ts-ignore
			session.accessToken = token.accessToken;
			// @ts-ignore
			session.user.id = token.sub;

			return session;
		},
	},
});
