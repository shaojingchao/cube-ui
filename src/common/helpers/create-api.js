import { camelize } from '../lang/string'
import createAPIComponent from './create-api-component'

/* vue components 处理为 Vue 原型方法上的属性 */
export default function createAPI (Vue, Component, events, single) {
  const api = createAPIComponent.apply(this, arguments)
  const name = Component.name
  const pureName = name.replace(/^cube-/i, '')
  const createName = `$${camelize(`create-${pureName}`)}`
  Vue.prototype[createName] = api.create
  return api
}
