# 前端规范
### 参考自 **《腾讯前端代码规范》**

## **一、项目及目录命名规范**
1.项目名称全部采用小写，以下划线分割。如my_projec<br>
2.目录命名全部采用小写，以下划线分割。有复数结构时，要采用复数命名法。

## **二、HTML**

### **1.命名缩进**

* 缩进使用soft tab（4个空格）；
* 嵌套的节点应该缩进；
* 在属性上，使用双引号，不要使用单引号；
* 属性名全小写，用中划线做分隔符；
* 不要在自动闭合标签结尾处使用斜线（HTML5 规范 指出他们是可选的）；
* 不要忽略可选的关闭标签，例：`</li>` 和` </body>`。

### **2.自动闭合标签**

 >  `<meta>`标签:设置页面元信息的<br>
 >  `<base>`:设置网页所有链接的相对目录(如根目录)的<br>
> `<br>`:换行<br>
> `<hr>`:水平线<br>
> `<img>`:图像<br>
> `<input>`:表单元素<br>
>  `<col>`:在表格table中定义一个或多个列的属性<br>
>  `<frame>`:定义框架的一个窗口（已遗弃）<br>
>  `<link>`:定义文档与外部资源的关系的链接<br>
>  `<area>`: 标签定义图像映射内部的区域（图像映射指的是带有可点击区域的图像）。<br>
>  `<param>`:元素允许您为插入 XHTML 文档的对象规定 run-time 设置，也就是说，此标签可为包含它的<br>
>  `<object>` 或者`<applet>` 标签提供参数。<br>
> `<embed>`: HTML5 中新增的,标签定义了一个容器，用来嵌入外部应用或者互动程序（插件）。<br>
>  `<keygen>`:该对象提供了一个安全的方式来验证用户。<br>
> `<source>`: 标签为媒体元素（比如 和 ）定义媒体资源。<br>

### **3.页面设置与属性声明等**

* 在页面开头使用这个简单地doctype来启用标准模式，使其在每个浏览器中尽可能一致的展现；按照惯例使用大写，`<!DOCTYPE html>`<br>

* 应在html标签加上lang属性。这会给语音工具和翻译工具帮助，告诉它们应当怎样去发音和翻译。中文:zh-cn,英文:en-us；
* 字符编码：通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'UTF-8';
* IE兼容模式：用 <meta> 标签可以指定页面应该用什么版本的IE来渲染;
* 根据HTML5规范，通常在引入CSS和JS时不需要指明type，因为text/css和text/javascript分别时它们的默认值;
* 属性顺序应该按照特定的顺序出现以保证易读性:class、id、name、datasrc、for、type、href、value 、max-length、max、min、pattern、placeholder、title、alt、aria、 role、required、 readonly、 disabled;
* HTML5并不需要声明取值的属性，元素上存在布尔属性表示真值，缺少属性表示false值。布尔属性不允许使用值“true”和“false”。要表示错误值，必须完全省略该属性。
* 在JS文件中生成标签让内容变得更难查找，更难编辑，性能更差。应该尽量避免这种情况的出现。
* 在编写html代码时，需要尽量避免多余的父节点，很多时候需要通过迭代和重构来使HTML变得更少。
* 尽量遵循HTML标准和语义，但是不应该以浪费实用性作为代价；任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。

## **二、CSS**

### **1.空行与空格**

以下几种情况不需要空格：
> * 属性名后
> * ','前
> * '!'后
> * 属性值中'('后和')'前
> * 行末不要有多余的空格

以下几种情况需要空行:

> * 属性值前
> * 选择器'>', '+', '~'前后
> * '{'前
> * !important '!'前
> * @else 前后
> * 属性值中的','后
> * 注释'/*'后和'*/'前

需要换行的情况：

> * '{'后和'}'前
> * 每个属性独占一行
> * 多个规则的分隔符','后

### **2.注释**
注释统一用'/* */';<br>
缩进与下一行代码保持一致;<br>
可位于一个代码行的末尾，与代码间隔一个空格。<br>
``` /* Modal header */
.modal-header {
    ...
}
 
/*
 * Modal header
 */
.modal-header {
    ...
} 
```
### **3.引号**

> * 最外层统一使用双引号；
> * url的内容要用引号；
> * 属性选择器中的属性值需要引号

### **4.命名**

> * 类名使用小写字母，以中划线分隔
> * id采用驼峰式命名
> * scss中的变量、函数、混合、placeholder采用驼峰式命名

### **5.属性声明顺序**

相关的属性声明按下面的顺序做分组处理，组之间需要有一个空行
```
.declaration-order {
    display: block;
    float: right;
 
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
 
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    width: 100px;
    height: 100px;
 
    font: normal 13px "Helvetica Neue", sans-serif;
    line-height: 1.5;
    text-align: center;
 
    color: #333;
    background-color: #f5f5f5;
 
    opacity: 1;
}
```
### **6.颜色**

> 颜色16进制用小写字母

> 颜色16进制尽量用简写

### **7.其他**

* 不允许有空的规则
* 元素选择器用小写字母
* 去掉小数点前面的0
* 去掉数字中不必要的小数点和末尾的0
* 属性值'0'后面不要加单位
* 同个属性不同前缀的写法需要在垂直方向保持对齐
* 无前缀的标准属性应该写在有前缀的属性后面
* 不要在同个规则里出现重复的属性，如果重复的属性是连续的则没关系
* 不要在一个文件里出现两个相同的规则
* 用 border: 0; 代替 border: none;
* 选择器不要超过4层（在scss中如果超过4层应该考虑用嵌套的方式来写）
* 发布的代码中不要有 @import；
* 尽量少用'*'选择器。




