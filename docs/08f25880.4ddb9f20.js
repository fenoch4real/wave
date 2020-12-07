(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{292:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},499:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/medias/livereload-c8ab0ea721f98fca13da5bc0b1ab26e1.mp4"},500:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tour-968f92ad1236ec66ad30ed613ba324db.png"},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(292)),c={slug:"release-0.9.0",title:"Introducing Live Reload",author:"Prithvi Prabhu",author_title:"Chief of Technology @ H2O.ai",author_url:"https://github.com/lo5",author_image_url:"https://avatars3.githubusercontent.com/u/6334572",tags:["release"]},i={permalink:"/wave/blog/release-0.9.0",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2020-10-28-release.md",source:"@site/blog/2020-10-28-release.md",description:"Today, we're excited to announce H2O Wave v0.9.0, with a new wave CLI, live-reload, improved performance, background tasks and ASGI compatibility.",date:"2020-10-28T00:00:00.000Z",tags:[{label:"release",permalink:"/wave/blog/tags/release"}],title:"Introducing Live Reload",readingTime:3.14,truncated:!0},l=[{value:"No more listening",id:"no-more-listening",children:[{value:"Old way",id:"old-way",children:[]},{value:"New way",id:"new-way",children:[]}]},{value:"Live reload",id:"live-reload",children:[]},{value:"Improved performance",id:"improved-performance",children:[]},{value:"Background tasks",id:"background-tasks",children:[]},{value:"ASGI compatibility",id:"asgi-compatibility",children:[]},{value:"Download",id:"download",children:[]}],p={rightToc:l};function b(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Today, we're excited to announce H2O Wave v0.9.0, with a new ",Object(o.b)("inlineCode",{parentName:"p"},"wave")," CLI, live-reload, improved performance, background tasks and ASGI compatibility. "),Object(o.b)("video",{autoplay:"autoplay",loop:"loop",muted:"muted"},Object(o.b)("source",{src:n(499).default,type:"video/mp4"})),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("p",null,"Among other changes, the Wave server executable ",Object(o.b)("inlineCode",{parentName:"p"},"wave")," is now called ",Object(o.b)("inlineCode",{parentName:"p"},"waved")," (as in ",Object(o.b)("inlineCode",{parentName:"p"},"wave")," daemon), and the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pypi.org/project/h2o-wave/"}),"h2o-wave")," Python package ships with a new CLI named ",Object(o.b)("inlineCode",{parentName:"p"},"wave"),"."),Object(o.b)("h2",{id:"no-more-listening"},"No more listening"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"listen()")," has been deprecated in favor of ",Object(o.b)("inlineCode",{parentName:"p"},"@app"),". Wave apps are now one line shorter."),Object(o.b)("h3",{id:"old-way"},"Old way"),Object(o.b)("p",null,"In versions <= v0.8.0, a skeleton app looked like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="foo.py"',title:'"foo.py"'}),"from h2o_wave import listen, Q\n\nasync def serve(q: Q):\n    pass\n\nlisten('/demo', serve)\n")),Object(o.b)("p",null,"The above app could be run like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"(venv) $ python foo.py\n")),Object(o.b)("h3",{id:"new-way"},"New way"),Object(o.b)("p",null,"In versions v0.9.0+, a skeleton app looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'{1,3} title="foo.py"',"{1,3}":!0,title:'"foo.py"'}),"from h2o_wave import main, app, Q\n\n@app('/demo')\nasync def serve(q: Q):\n    pass\n")),Object(o.b)("p",null,"Notably:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"listen(route)")," has been replaced by an ",Object(o.b)("inlineCode",{parentName:"li"},"@app(route)")," decorator on the ",Object(o.b)("inlineCode",{parentName:"li"},"serve()")," function."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"main")," needs to be imported into the file (but you don't have to do anything with the symbol ",Object(o.b)("inlineCode",{parentName:"li"},"main")," other than simply ",Object(o.b)("inlineCode",{parentName:"li"},"import")," it).")),Object(o.b)("p",null,"The above app can be run using ",Object(o.b)("inlineCode",{parentName:"p"},"wave run"),", built into the new ",Object(o.b)("inlineCode",{parentName:"p"},"wave")," command line interface. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"(venv) $ wave run foo\n")),Object(o.b)("h2",{id:"live-reload"},"Live reload"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"wave run")," command runs your app using live-reload, which means you can view your changes live as you code, without having to refresh your browser manually."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"(venv) $ wave run foo\n")),Object(o.b)("p",null,"To run your app without live-reload, simply pass ",Object(o.b)("inlineCode",{parentName:"p"},"--no-reload"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"(venv) $ wave run --no-reload foo\n")),Object(o.b)("h2",{id:"improved-performance"},"Improved performance"),Object(o.b)("p",null,"Both the Wave server and application communication architecture has undergone significant performance and concurrency improvements across the board. Apps should now feel lighter, quicker, and more responsive under concurrent or increased load."),Object(o.b)("p",null,"The changes in v0.9 brings us closer to a v1.0 release. v1.0 will include the ability to increase the number of worker processes to scale apps, while preserving the simplicity of the Wave API."),Object(o.b)("p",null,"The Wave Tour (",Object(o.b)("inlineCode",{parentName:"p"},"tour.py"),") is now quicker and more reliable:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"tour",src:n(500).default})),Object(o.b)("h2",{id:"background-tasks"},"Background tasks"),Object(o.b)("p",null,"The API now provides the ability to run blocking calls in the background to improve app responsiveness. The query context ",Object(o.b)("inlineCode",{parentName:"p"},"q")," now has  two lightweight wrappers over ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.python.org/3/library/asyncio-eventloop.html#asyncio.loop.run_in_executor"}),"asyncio.run_in_executor()"),": ",Object(o.b)("inlineCode",{parentName:"p"},"q.run()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"q.exec()")),Object(o.b)("p",null,"Here is an example of a function that blocks:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:"{1,4}","{1,4}":!0}),"import time\n\ndef blocking_function(seconds) -> str:\n    time.sleep(seconds)  # Blocks!\n    return f'Done!'\n")),Object(o.b)("p",null,"To call the above function from an app, don't do this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:"{4}","{4}":!0}),"@app('/demo')\nasync def serve(q: Q):\n    # ...\n    message = blocking_function(42)\n    # ...\n")),Object(o.b)("p",null,"Instead, do this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:"{4}","{4}":!0}),"@app('/demo')\nasync def serve(q: Q):\n    # ...\n    message = await q.run(blocking_function, 42)\n    # ...\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"q.run()")," runs the blocking function in the background, in-process."),Object(o.b)("p",null,"Depending on your use case, you might want to use a separate process pool or thread pool from Python's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.python.org/3/library/multiprocessing.html"}),"multiprocessing")," library, like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:"{1,6-7}","{1,6-7}":!0}),"import concurrent.futures\n\n@app('/demo')\nasync def serve(q: Q):\n    # ...\n    with concurrent.futures.ThreadPoolExecutor() as pool:\n        message = await q.exec(pool, blocking_function, 42)\n    # ...\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"q.exec()")," accepts a custom process pool or thread pool to run the blocking function."),Object(o.b)("h2",{id:"asgi-compatibility"},"ASGI compatibility"),Object(o.b)("p",null,"Wave apps are now ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://asgi.readthedocs.io/en/latest/"}),"ASGI"),"-compatible, based on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.uvicorn.org"}),"Uvicorn")," / ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.starlette.io/"}),"Starlette"),", a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.techempower.com/benchmarks/#section=data-r17&hw=ph&test=fortune&l=zijzen-1"}),"high-performance")," Python server."),Object(o.b)("p",null,"You can run Wave apps behind any ASGI server, like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.uvicorn.org"}),"uvicorn"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://gunicorn.org/"}),"gunicorn"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/django/daphne/"}),"daphne"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pgjones.gitlab.io/hypercorn/"}),"hypercorn"),", etc."),Object(o.b)("p",null,"To run your app using an ASGI server like uvicorn, append ",Object(o.b)("inlineCode",{parentName:"p"},":main")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"app")," argument:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"(venv) $ uvicorn foo:main\n")),Object(o.b)("h2",{id:"download"},"Download"),Object(o.b)("p",null,"Get the release ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/latest"}),"here"),". Check out the release notes for more details."),Object(o.b)("p",null,"We look forward to continuing our collaboration with the community and hearing your feedback as we further improve and expand the H2O Wave platform."),Object(o.b)("p",null,"We\u2019d like to thank the entire Wave team and the community for all of the contributions to this work!"))}b.isMDXComponent=!0}}]);