import { defineNuxtConfig } from "nuxt3"

export default defineNuxtConfig({
	meta: {
		bodyAttrs: {
			class: "bg-gray-900 text-gray-50",
		},
	},

	css: ["~/styles/tailwind.css"],

	build: {
		postcss: {
			postcssOptions: require("./postcss.config.js"),
		},
	},
})
