(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{255:function(t,e,r){"use strict";r.r(e);var n=r(6),c=(r(38),{ssr:!1,asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params.slug,e.next=3,r("articles").where({slug:n}).fetch();case 3:return article=e.sent[0],e.abrupt("return",{slug:n,article:article});case 5:case"end":return e.stop()}}),e)})))()},methods:{signUp:function(){this.$store.commit("trackEvent",{name:"sign-up",payload:{experiments:this.$experiments}})}}}),o=r(52),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container flex flex-col p-12 items-center"},[r("h1",{staticClass:"text-4xl mb-4"},[t._v(t._s(t.article.name))]),t._v(" "),r("client-only",[t.$experiments?"control"===t.$experiments.media||"video"===t.$experiments.media||"booklist"===t.$experiments.media?r("img",{staticClass:"w-1/2",attrs:{src:t.article.media.variations[t.$experiments.media].url}}):t._e():r("img",{staticClass:"w-1/2",attrs:{src:t.article.media.variations.control.url}}),t._v(" "),r("p",{staticClass:"my-8"},[t._v("\r\n      "+t._s(t.$experiments?t.article.introCopy.variations[t.$experiments.introCopy]:t.article.introCopy.variations.control)+"\r\n    ")])]),t._v(" "),r("p",{staticClass:"mb-20"},[t._v("\r\n    Thanks a lot for reading the article!\r\n    "),r("button",{staticClass:"ml-4 p-2 border border-rounded bg-green text-white",on:{click:t.signUp}},[t._v("SIGN UP")])]),t._v(" "),r("NuxtLink",{staticClass:"underline",attrs:{to:"/"}},[t._v("\r\n    HOME\r\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);