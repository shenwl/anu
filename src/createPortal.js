import { createVnode, createElement } from "./createElement";
import { HostFiber } from "./HostFiber";
function AnuPortal(props){
    return props.children;
}

export function createPortal(children, node) {
    var fiber,
        events = node.__events;
    if (events) {
        fiber = node.__events.vnode;
    } else {
        events = node.__events = {};
        var vnode = createVnode(node);
        fiber = new HostFiber(vnode);
        events.vnode = fiber;
    }
    fiber._isPortal = true;
    var child = createElement(AnuPortal, { children: children });
    child._return = fiber;
    return child;
}
