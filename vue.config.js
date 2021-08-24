const path = require('path')

module.exports = {
  lintOnSave: false ,
  chainWebpack : config =>{
    const dir = path.resolve(__dirname , 'src/assets/icons')
    config.module
      .rule('svg-sprite')
      .test(/\.(svg)(\?.*)?$/)
      //.include_dirs.add(dir).end()
      .include.add(dir).end()
      .use('svg-sprite-loader-mod').loader('svg-sprite-loader-mod').options({extract : false}).end()
      .tap(options =>({...options,plugins : [{removeAttrs : {attrs :'fill'}}]}))
      .end()
    config.plugins('svg-sprite').use(require('svg-sprite-loader-mod') , [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir)
  }
}
