module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/partials/_variables.scss";
          @import "@/assets/styles/partials/_mixins.scss";
        `
      }
    }
  }
};
