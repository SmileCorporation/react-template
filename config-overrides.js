/*
 * @Author: your name
 * @Date: 2020-09-23 00:44:32
 * @LastEditTime: 2020-09-23 00:47:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-template\config-overrides.js
 */
const path = require('path')
const {
  override,
  addDecoratorsLegacy
} = require('customize-cra')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const customize = () => (config, env) => {
  config.resolve.alias['@'] = resolve('src')
  if (env === 'production') {
    config.externals = {
      'react': 'React',
      'react-dom': 'ReactDOM'
    }
  }

  return config
}

module.exports = override(addDecoratorsLegacy(), customize())
