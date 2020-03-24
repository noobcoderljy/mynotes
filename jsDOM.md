# 获得元素节点
通过id获得 document.getElementsById(),参数为id名,返回一个元素节点.

通过classname获得 document.getElementsByClassName(),参数为classname,返回一个元素节点数组.

通过tagname获得 document.getElementsByTagName(),参数为tagname,返回一个元素节点数组

# 获取和设置属性
getAttribute不属于document对象,需要通过元素节点对象调用.  
object.getAttribute(attribute) 可以查询属性值.

object.setAttribute(attribute,value)可以设置或修改节点的属性值.
# 获取元素的子元素
childNodes可以帮助我们获得元素节点的所有子元素,返回一个数组.包括元素节点,属性节点,文本节点. 

可以使用  
node.childNodes[0]  获得第一项节点  
node.childnodes[node.childNodes.length-1] 获得最后一项节点.

也可以更加直接  
node.firstChild
node.lastChild 

nodeType可以帮助我们判断节点类型  
- 元素节点的属性值为1
- 属性节点的属性值为2
- 文本节点的属性值为3

#设置文本节点的值
如果想改变一个文本节点的值,可以使用nodevalue属性,他可以得到或者设置一个节点的值.  
node.childNodes[0].nodevalue = ""
# DOM节点数的更改 
### 创建新的节点
document.createElement(nodeName) 创建新的元素节点

document.createTextNode(text) 创建新的文本节点
### 插入节点
parent.appendChild(child) 可以将创建的游离节点插入到文本当中弄去.

parent.insertBefore(newElement,targetElement) 可以在目标元素之前插入元素 其中parent可以用 targetelement.parentNode表示.






