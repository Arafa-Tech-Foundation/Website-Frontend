/** @type {import('next').NextConfig} */
const config = {
	swcMinify: true,
	rewrites: async () => [
		{
			source: "/discord",
			destination: "https://discord.gg/HQvTe2pHym",
		},
	],
};

module.exports = config;
