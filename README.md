# O'Reilly 索引标签清理

用沉浸式翻译等网页翻译插件阅读 O'Reilly 电子书时，部分段落的行内代码会错位：代码框里出现中文，几个代码名粘在一起，原位置留空。

| | 译文 |
|---|---|
| 错位 | 例如，调用 `Math` Math.pow `时，根本不需要构造` 类的任何对象。 |
| 修复后 | 例如，调用 `Math.pow` 时，根本不需要构造任何 `Math` 类的对象。 |

## 原因

O'Reilly 在段落里插入了用于生成书末索引的空元素：

```html
<span class="indexterm" id="ch4-index220"></span>
```

## 安装

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)。
2. 打开 [oreilly-indexterm-fix.user.js](oreilly-indexterm-fix.user.js)，点 Raw，按提示安装。
3. 刷新书页后再翻译。

## 行为

- 删除 `span.indexterm` 和 `a[data-type="indexterm"]`
- 被删标签的 id 转给所在段落，书末索引仍可跳转到对应段落
- 监听页面变化，翻页后自动处理

## 许可

[MIT](LICENSE)
