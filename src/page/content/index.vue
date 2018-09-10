<template>
  <div>
    1.Doctype作用？标准模式与兼容模式各有什么区别？
    <li>（1）声明位于HTML文档中的第一行，处于标签之前。告知浏览器的解析器用什么文档标准解析这个文档。Doctype不存在或者不正确会导致文档以兼容模式呈现。</li>
    <li>(2)标准模式的排版和js运作模式都是以浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为为防止站点无法工作。</li>
    <div>
      2.HTML5为什么只需要写？
      <h3> SGML：标准通用标记语言 DTD 一种文档类型的定义</h3>
      <h3>HTML5不基于SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为</h3>
      <h3>HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。</h3>
    </div>
    <div>
      <h1>4.行内元素有哪些？块级元素有哪些 空（void）元素有哪些？</h1>
      <h3>行内元素有： a b span img input select strong i</h3>
      <h3>块级元素有：div ul ol li dl dt dd h1 h2 h3...p</h3>
    </div>
    <div>
      <h1>link和@import有什么区别？</h1>
      <h3></h3>
    </div>
  </div>
</template>
