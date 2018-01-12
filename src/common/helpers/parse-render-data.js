import { camelize } from '../lang/string'

export default function parseRenderData(data = {}, events = {}) {
  events = parseEvents(events)
  const props = { ...data }
  const on = {}
  for (const name in events) {
    if (events.hasOwnProperty(name)) {
      const handlerName = events[name]
      /* 如果data[props] 中配置了回调函数 (有效回调函数名列表在events参数中已约定)
       * 把data中的事件属性添加到 on 中，并删除该属性 */
      if (props[handlerName]) {
        on[name] = props[handlerName]
        delete props[handlerName]
      }
    }
  }
  return {
    props,
    attrs: {
      'title': 'isTitle',
      'name-name': 'name'
    },
    data: {
      '_____data_____': 'data---------data'
    },
    on
  }
}

/* 解析events 并返回 camelize(`on-${eventsItemName}`) */
function parseEvents(events) {
  const parsedEvents = {}
  events.forEach((name) => {
    parsedEvents[name] = camelize(`on-${name}`)
  })
  return parsedEvents
}
