// ==UserScript==
// @name         O'Reilly 索引标签清理
// @namespace    https://github.com/liu-xindi/oreilly-indexterm-fix
// @version      1.0.0
// @description  移除 O'Reilly 书页中的空索引标签，修复网页翻译插件的行内代码错位
// @author       liu-xindi
// @match        https://learning.oreilly.com/*
// @grant        none
// @run-at       document-idle
// @license      MIT
// ==/UserScript==

(() => {
  const SELECTOR = 'span.indexterm, a[data-type="indexterm"]';
  let scheduled = false;

  const strip = () => {
    scheduled = false;
    for (const el of document.querySelectorAll(SELECTOR)) {
      const parent = el.parentElement;
      if (el.id && parent && !parent.id) parent.id = el.id;
      el.remove();
    }
  };

  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(strip);
  };

  strip();
  new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
})();
