import { defineNuxtConfig } from "nuxt3"

export default defineNuxtConfig({
	buildModules: ["@unocss/nuxt"],
	meta: {
		bodyAttrs: {
			// FIXME: UnoCSS not scan file nuxt config
			class: "bg-gray-900 text-gray-50",
		},
	},
	unocss: {
		uno: true,
		preflight: true,
	},
})
