import {Edge} from "edge.js";

export const initViews = () => {
    const edge = Edge.create()
    edge.mount(new URL("../views", import.meta.url))
    return edge
}