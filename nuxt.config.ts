import { defineNuxtConfig } from "nuxt3"

export default defineNuxtConfig({
	buildModules: ["nuxt-windicss"],
	meta: {
		bodyAttrs: {
			class: "bg-gray-900 text-gray-50",
		},
	},
})
