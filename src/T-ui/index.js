// 基础组件的自动化全局注册
export default {
  install(Vue) {
    const requireComponent = require.context(
      './components',
      true,
      /\.vue$/
    )
    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName)
      Vue.component(
        componentConfig.default.name,
        componentConfig.default
      )
    })
  }
}