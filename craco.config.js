const path = require(`path`);

module.exports = {
	webpack: {
		alias: {
			"@components_s": path.resolve("src/styles/components"),
			"@booking_s": path.resolve("src/styles/components/pages/booking"),
			"@home_s": path.resolve("src/styles/components/pages/home"),
			"@assert": path.resolve("src/assets"),
		},
	},
};
