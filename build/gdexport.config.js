module.exports = {
  plugins: [
    require("@gdexporter/plugin-better-loading-screen"),
    {
      plugin: require("@gdexporter/plugin-manifest"),
      options: {
        manifestOptions: {
          short_name: "GOG",
          background_color: "#fff",
          theme_color: "#fff",
          description: "A GTA-like game made by the GDevelop community."
        }
      }
    },
    require("@gdexporter/plugin-offline")
  ]
}