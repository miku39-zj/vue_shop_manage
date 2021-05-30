/**
 * @description: 根据对象多个属性去重,并取出对应的属性 toRepeat([{a:1,b:2,c:3},{a:1,b:2,c:4},{a:2,b:3,c:4}],"a","b") => [{a:1,b:2},{a:2,b:3}]
 */
export function toRepeat(arr, ...args) {
  let rMap = new Map()
  arr = arr.filter(x => {
    let str = ""
    args.forEach(e => {
      str = str + '->' + x[e]
    });
    return rMap.has(str) ? false : rMap.set(str, 1)
  })
  let res = []
  arr.forEach(e => {
    let obj = args.reduce((cur, pre) => {
      if (pre in e) {
        cur[pre] = e[pre]
      }
      return cur
    }, {})
    res.push(obj)
  });
  return res;
}

/**
 * @description: 柯里化
 */
export function curry(func) {
  return function currid(...args) {
    let _this = this
    if (args.length >= func.length) {
      return func.apply(_this, args)
    } else {
      return function (...args2) {
        return currid.apply(_this, args.concat(args2))
      }
    }
  }
}

/**
 * @description: 简单版 防抖函数，在waite时长后没有触发func，才执行func
 */
export function debounce(func, waite) {
  let timeOut = null
  return function (...args) {
    let _this = this;
    if (timeOut) {
      timeOut = null
    }
    timeOut = setTimeout(() => {
      func.apply(_this, args)
    }, waite)
  }
}

/**
 * @description: 简单版节流函数，触发func，经waite时长才执行fun
 */
export function throttle(func, waite) {
  let timeOut = null;
  return function (...args) {
    let _this = this;
    if (!timeOut) {
      timeOut = setTimeout(() => {
        func.apply(_this, args)
        timeOut = null
      }, waite)
    }
  }
}

/**
 * @description: 根据节点展开/关闭所有节点 （适用el-tree
 */
export function closeAllnode(context, root, isExpaned) {
  let helper = root => {
    if (root.expanded) {
      context.$set(root, 'expanded', isExpaned)
    }

    if (root.childNodes.length > 0) {
      for (let i = 0; i < root.childNodes.length; i++) {
        helper(root.childNodes[i])
      }
    }
  }
  helper(root)
}



/**
 * @description: 对字符串前后去除空格
 */
export function lrTrim(str) {
  return str == null ? "" : str.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * @description: 字符串去除空格,加缓存
 */
export let Trim = cached(function (str) {
  return str == null ? "" : str.replace(/(\s*)/g, "");
})

/**
 * @description: 获取数据的类型
 */
export function getType(val) {
  const type = Object.prototype.toString.call(val)
  let res = Trim(type).replace(/(\[|object|\])/g, "")
  return res
}

/**
 * @description: 判断是否为空，适用数组对象MapSet等数据类型,可扩展......
 */
export function isEmpty(val) {
  let type = getType(val)
  let obj
  switch (type) {
    case "String":
      obj = !!Trim(val)
      break
    case "Number":
      obj = !!val
      break;
    case "Array":
      obj = !!val.length
      break
    case "Object":
      obj = !!Object.keys(val).length //不考虑enumerable为false的key(内置key)
      // !!Reflect.ownKeys(val).length  // 考虑所有key
      break;
    case "Map":
    case "Set":
      obj = !!val.size
      break
    default:
      obj = false
      break
  }
  return !obj
}

/**
 * @description: 过滤数组项为null的
 */
export function trimArray(arr) {
  if (getType(arr) === "Array") {
    return arr.filter(x => getType(x) !== "Null")
  }
  return arr
}

/**
 * @description: 去除字符串中的标签
 */
export function trimHtml(str) {
  return str == null ? "" : str.replace(/<[^<>]+>/g, "");
}

/**
 * @description: 获取数组交集 对多个数组有效
 */
export function intSerction(list, ...args) {
  return list.filter(item => args.every(list => list.includes(item)))
}


/**
 * @description: 深拷贝，只针对对象和数组，考虑循环引用和null,可扩展其他类型......
 * @author: zj
 */
export function deepClone(target, map = new Map()) {
  const type = getType(target)
  if (type === 'Object' || type === 'Array') {
    let cloneTarget = Array.isArray(target) ? [] : {}
    if (map.has(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = deepClone(target[key], map)
    }
    return cloneTarget
  } else {
    return target
  }
}

/**
 * @description: 判断是否是引用类型
 */
export function isObject(target) {
  const type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}


/**
 * @description: 数组扁平化，多维=>一维：[[1,2,3]] => [1,2,3]
 */
export function flatten(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}

/**
 * @description: 函数缓存,使用参数为字符串，可扩展
 */
export function cached(fn) {
  const cache = Object.create(null); // 创建空对象作为缓存对象
  return (function cachedFn(str) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * @description: 判断两个值是的相等,支持基本类型、object、date、Array类型
 */
export function looseEqual(a, b) {
  if (a === b) return true
  const isObjectA = isObject(a)
  const isObjectB = isObject(b)
  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a)
      const isArrayB = Array.isArray(b)
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every((e, i) => {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a)
        const keysB = Object.keys(b)
        return keysA.length === keysB.length && keysA.every(key => {
          return looseEqual(a[key], b[key])
        })
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * @description: 一次执行函数，确保函数执行一次
 */
export function once(fn) {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}


import request from '@/utils/request'
/**
 * @description: 文件下载
 * @param {文件路由地址} url
 * @param {文件名称} fileName
 */
export function downloadFile(url, fileName) {
  request({
    url: url,
    method: 'get',
    responseType: "blob"
  }).then(data => {
    console.log(data,"data");
    let downloadElement = document.createElement("a");
    let href = window.URL.createObjectURL(data); // 创建下载的链接
    downloadElement.href = href;
    downloadElement.download = fileName; // 下载后文件名
    document.body.appendChild(downloadElement);
    downloadElement.click(); // 点击下载
    document.body.removeChild(downloadElement); // 下载完成移除元素
    window.URL.revokeObjectURL(href); // 释放掉blob对象
  });

}