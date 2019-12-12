import { networkInterfaces } from "os";
export function getRestfulMap(
  key: any,
  target: ClassDecorator
): WeakMap<ClassDecorator, string | Map<string, any> | Set<string>> {
  let restfulMap = Reflect.getMetadata(key, target);
  if (!restfulMap) {
    restfulMap = new WeakMap();
  }
  return restfulMap;
}

export function getRestfulParameterMap(key: any, map: any): Map<any, any> {
  let parameterMap = map.get(key);
  if (!parameterMap) {
    parameterMap = new Map();
  }
  return parameterMap;
}

export function getRestfulParameterSet(map: any, type: string): Set<string> {
  let set = map.get(type);
  if (!set) {
    set = new Set();
  }
  return set;
}

export function getFunctionParams(method: Function) {
  const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
  const ARGUMENT_NAMES = /([^\s,]+)/g;

  const fnStr = method.toString().replace(STRIP_COMMENTS, "");
  let result = fnStr
    .slice(fnStr.indexOf("(") + 1, fnStr.indexOf(")"))
    .match(ARGUMENT_NAMES);
  if (result === null) result = [];
  return result;
}

export function getLocalIPAddress() {
  var interfaces = networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
}
