module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Wanle Coffee";
      return args;
    });
  },
  publicPath: "/lemon_coffee/dist/",
}