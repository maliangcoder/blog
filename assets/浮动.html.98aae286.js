import{c as n}from"./app.7d61a1b5.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},p=n(`<h1 id="\u6D6E\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6D6E\u52A8" aria-hidden="true">#</a> \u6D6E\u52A8</h1><h2 id="\u6D6E\u52A8-float" tabindex="-1"><a class="header-anchor" href="#\u6D6E\u52A8-float" aria-hidden="true">#</a> \u6D6E\u52A8\uFF08float\uFF09</h2><ul><li><p>\u6807\u51C6\u6D41(\u666E\u901A\u6D41/\u6587\u6863\u6D41)</p><ul><li>\u6240\u8C13\u6807\u51C6\u6D41\u5C31\u662F\u6807\u7B7E\u6309\u7167\u89C4\u5B9A\u597D\u9ED8\u8BA4\u65B9\u5F0F\u6392\u5217\u3002</li></ul><ol><li>\u5757\u7EA7\u5143\u7D20\u4F1A\u72EC\u5360\u4E00\u884C,\u4ECE\u4E0A\u5411\u4E0B\u987A\u5E8F\u6392\u5217\u3002 \u5E38\u7528\u5143\u7D20: <code>div\u3001hr\u3001p\u3001h1~h6\u3001ul\u3001ol\u3001dl\u3001form\u3001table</code></li><li>\u884C\u5185\u5143\u7D20\u4F1A\u6309\u7167\u987A\u5E8F,\u4ECE\u5DE6\u5230\u53F3\u987A\u5E8F\u6392\u5217,\u78B0\u5230\u7236\u5143\u7D20\u8FB9\u7F18\u5219\u81EA\u52A8\u6362\u884C\u3002 \u5E38\u7528\u5143\u7D20: <code>span\u3001a\u3001i\u3001em</code></li></ol><ul><li><p>\u4E3A\u4EC0\u4E48\u9700\u8981\u6D6E\u52A8</p><ul><li>\u6709\u5F88\u591A\u7684\u6392\u5217\u5E03\u5C40,\u6807\u51C6\u6D41\u6CA1\u6709\u529E\u6CD5\u5B8C\u6210,\u6B64\u65F6\u5C31\u53EF\u4EE5\u5229\u7528\u6D6E\u52A8\u5B8C\u6210\u5E03\u5C40\u3002\u56E0\u4E3A\u6D6E\u52A8\u53EF\u4EE5\u6539\u53D8\u5143\u7D20\u6807\u7B7E\u9ED8\u8BA4\u7684\u6392\u5217\u65B9\u5F0F\u3002</li></ul></li><li><p>\u7F51\u9875\u5E03\u5C40\u7B2C\u4E00\u51C6\u5219:\u591A\u4E2A\u5757\u7EA7\u5143\u7D20\u7EB5\u5411\u6392\u5217\u627E\u6807\u51C6\u6D41,\u591A\u4E2A\u5757\u7EA7\u5143\u7D20\u6A2A\u5411\u6392\u5217\u627E\u6D6E\u52A8\u3002</p></li><li><p>\u8BED\u6CD5: \u9009\u62E9\u5668 { float:left|right }</p></li><li><p>\u8BBE\u7F6E\u4E86\u6D6E\u52A8\u7684\u5143\u7D20\u6700\u91CD\u8981\u7279\u6027:</p><ol><li>\u8131\u79BB\u6807\u51C6\u666E\u901A\u6D41\u7684\u63A7\u5236,\u79FB\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E</li><li>\u6D6E\u52A8\u7684\u76D2\u5B50\u4E0D\u518D\u4FDD\u7559\u539F\u5148\u7684\u4F4D\u7F6E</li></ol></li><li><p>\u6E05\u9664\u6D6E\u52A8</p><ol><li><p>\u989D\u5916\u6807\u7B7E\u6CD5</p><ul><li>\u518D\u6D6E\u52A8\u5143\u7D20\u672B\u5C3E\u6DFB\u52A0\u4E00\u4E2A\u7A7A\u7684\u6807\u7B7E,\u6BD4\u5982<code>&lt;div style=&#39;clear:both&#39;&gt;&lt;/div&gt;</code>,\u6216\u8005\u5176\u4ED6\u6807\u7B7E(\u5982<br>\u7B49)\u3002 \u4F18\u70B9:\u901A\u4FD7\u6613\u61C2,\u7ED3\u6784\u4F18\u96C5 \u7F3A\u70B9:\u589E\u52A0\u65E0\u610F\u4E49\u7684\u989D\u5916\u6807\u7B7E\u3002</li></ul></li><li><p>\u7236\u7EA7\u6DFB\u52A0overflow \u7ED9\u7236\u7EA7\u6DFB\u52A0overflow\u5C5E\u6027,\u5C06\u5176\u5C5E\u6027\u503C\u8BBE\u7F6E\u4E3Ahidden\u3001auto\u3001scroll\u3002 \u4F18\u70B9:\u4EE3\u7801\u7B80\u6D01\u3002 \u7F3A\u70B9:\u65E0\u6CD5\u663E\u793A\u6EA2\u51FA\u7684\u90E8\u5206\u3002</p></li><li><p>:after\u4F2A\u5143\u7D20\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>clearFix<span class="token operator">:</span>after<span class="token punctuation">{</span>
     <span class="token literal-property property">content</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
     <span class="token literal-property property">display</span><span class="token operator">:</span>block<span class="token punctuation">;</span>
     <span class="token literal-property property">height</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span>
     <span class="token literal-property property">clear</span><span class="token operator">:</span>both<span class="token punctuation">;</span>
     <span class="token literal-property property">visibility</span><span class="token operator">:</span>hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>clearFix<span class="token punctuation">{</span>
     <span class="token operator">*</span>zoom<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>\u4F18\u70B9:\u6CA1\u6709\u589E\u52A0\u6807\u7B7E,\u7ED3\u6784\u66F4\u7B80\u5355</li><li>\u7F3A\u70B9:\u7167\u987E\u4F4E\u7248\u672C\u6D4F\u89C8\u5668</li></ul></li><li><p>\u53CC\u4F2A\u5143\u7D20\u6E05\u9664\u6D6E\u52A8</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>clearFix<span class="token operator">:</span>before<span class="token punctuation">,</span><span class="token punctuation">.</span>clearFix<span class="token operator">:</span>after <span class="token punctuation">{</span>
     <span class="token literal-property property">content</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
     <span class="token literal-property property">display</span><span class="token operator">:</span>table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>clearFix<span class="token operator">:</span>after <span class="token punctuation">{</span>
     <span class="token literal-property property">clear</span><span class="token operator">:</span>both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>clearFix <span class="token punctuation">{</span>
     <span class="token operator">*</span>zoom<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>\u4F18\u70B9:\u4EE3\u7801\u66F4\u7B80\u6D01</li><li>\u7F3A\u70B9:\u7167\u987E\u4F4E\u7248\u672C\u6D4F\u89C8\u5668</li></ul></li></ol></li></ul></li></ul>`,3);function l(e,t){return p}var c=a(s,[["render",l]]);export{c as default};
