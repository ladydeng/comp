import { Request } from "./request.js"
import { newRequest } from "./newRequest"

export function getMultiData() {
  return Request({
    url: "/home/multidata",
    timeout: 2000
  })
}

export function getHomeGoods(type, page) {
  return newRequest({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}