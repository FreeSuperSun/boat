---
title: fancybox
---

一个JavaScript lightbox库,配合JQuery使用.

可以用来做模态对话框.

[官方文档](https://fancyapps.com/fancybox/3/docs/)

[Github](https://github.com/fancyapps/fancybox)

## 引入

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>My page</title>

	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="jquery.fancybox.min.css">
</head>
<body>

	<!-- Your HTML content goes here -->

	<!-- JS -->
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script src="jquery.fancybox.min.js"></script>
</body>
</html>
```

需要引入fancybox的js文件和css文件,还要引入JQuery的js文件,并且JQuery需要在fancybox前面.

## 使用

有几种使用方法

### 展示页面中的某个元素及其子元素

```js
$.fancybox.open({
    // Options will go here
    src: '#reset-password-panel' //src里面可为JQuery选择符
});
```