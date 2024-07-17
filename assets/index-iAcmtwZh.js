import{j as e,r as m,a as W}from"./react-DbK3Pmd6.js";import{c as J}from"./react-dom-CSbOZPpz.js";import{B as z}from"./react-router-dom-BL42VJ3H.js";import{u as $,a as K,P as X}from"./react-redux-DCI8fhvb.js";import{a as ee}from"./axios-Bo0ATomq.js";import{c as se,a as te}from"./@reduxjs-BSEvXWH6.js";import{H as A,V as O,S as ae,F as ne,a as le,b as re,c as oe,B as ie,d as ce,e as de,f as me}from"./react-icons-KAbILE-E.js";import{u as F,a as ue,b as P,c as he,d as M}from"./react-router-CniZudRX.js";import{b as xe}from"./react-lazy-load-image-component-Bkk46oJP.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import{d as D}from"./dayjs-C3ukM2nq.js";import"./chart.js-D4gW9XKQ.js";import{C as pe,b as je}from"./react-circular-progressbar-D_ouN9nd.js";import{R as ve}from"./react-player-DhLcN7OV.js";import{I as H}from"./react-infinite-scroll-component-BAuADMYI.js";import{S as V}from"./react-select-_j4xTOA-.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-Bog_LkVV.js";import"./use-sync-external-store-CHKzoXfJ.js";import"./immer-C0GRqQ_d.js";import"./redux-DGayKFxX.js";import"./@babel-DTrkZWDy.js";import"./redux-thunk-LRbWIHCM.js";import"./react-is-8JwjhRSi.js";import"./deepmerge-Cz8BQk8L.js";import"./memoize-one-CJb0KX4n.js";import"./react-fast-compare-CWXHrlhI.js";import"./prop-types-BKNjMPK8.js";import"./load-script-DghppdYS.js";import"./@emotion-AnSrhYJu.js";import"./stylis-NkKAe6Bn.js";import"./@floating-ui-BHwhe5y0.js";import"./use-isomorphic-layout-effect-B479Q0eR.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const ge="https://api.themoviedb.org/3",Ne="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTEzMmIwOTg3OTMwYTUxYjZhNWNhYzM4NDFjZmQxNiIsInN1YiI6IjY1ZTY0YTFkN2YxZDgzMDE3ZDIyOGFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zHhJ7sjYW4rIpcu5-1Z-T-gr6xNbjDUgVLZnYEafCLs",fe={Authorization:"Bearer "+Ne},C=async(s,l)=>{try{const{data:a}=await ee.get(ge+s,{headers:fe,params:l});return a}catch(a){return console.log(a),a}},q=se({name:"home",initialState:{url:{},genres:{}},reducers:{getApiConfiguration:(s,l)=>{s.url=l.payload},getGenres:(s,l)=>{s.genres=l.payload}}}),{getApiConfiguration:Se,getGenres:ye}=q.actions,be=q.reducer,g=({children:s})=>e.jsx("div",{className:"contentWrapper",children:s}),ke="/movix/assets/movix-logo-dOW-bAAW.svg",we=()=>{const[s,l]=m.useState("top"),[a,r]=m.useState(0),[t,o]=m.useState(!1),[c,h]=m.useState(""),[n,u]=m.useState(""),x=F(),p=ue();m.useEffect(()=>{window.scrollTo(0,0)},[p]);const j=()=>{window.scrollY>200?window.scrollY>a&&!t?l("hide"):l("show"):l("top"),r(window.scrollY)};m.useEffect(()=>(window.addEventListener("scroll",j),()=>{window.removeEventListener("scroll",j)}),[a]);const f=N=>{N.key==="Enter"&&c.length>0&&(x(`/search/${c}`),setTimeout(()=>{u(!1)},1e3))},b=()=>{o(!1),u(!0)},k=()=>{o(!0),u(!1)},S=N=>{x(N==="movie"?"/explore/movie":N==="tv"?"/explore/tv":"/donate"),o(!1)};return e.jsxs("header",{className:`header ${t?"mobileView":""} ${s}`,children:[e.jsxs(g,{children:[e.jsx("div",{className:"logo",onClick:()=>x("/"),children:e.jsx("img",{src:ke,alt:""})}),e.jsxs("ul",{className:"menuItems",children:[e.jsx("li",{className:"menuItem",onClick:()=>S("movie"),children:"Movies"}),e.jsx("li",{className:"menuItem",onClick:()=>S("tv"),children:"TV Shows"}),e.jsx("li",{className:"menuItem",onClick:()=>S("donate"),children:"Donate"}),e.jsx("li",{className:"menuItem",children:e.jsx(A,{onClick:b})})]}),e.jsxs("div",{className:"mobileMenuItems",children:[e.jsx(A,{onClick:b}),t?e.jsx(O,{onClick:()=>o(!1)}):e.jsx(ae,{onClick:k})]})]}),n&&e.jsx("div",{className:"searchBar",children:e.jsx(g,{children:e.jsxs("div",{className:"searchInput",children:[e.jsx("input",{type:"text",placeholder:"Search for a movie or tv show....",onChange:N=>h(N.target.value),onKeyUp:f}),e.jsx(O,{onClick:()=>u(!1)})]})})})]})},Ie=()=>e.jsx("footer",{className:"footer",children:e.jsxs(g,{children:[e.jsxs("ul",{className:"menuItems",children:[e.jsx("li",{className:"menuItem",children:"Terms Of Use"}),e.jsx("li",{className:"menuItem",children:"Privacy-Policy"}),e.jsx("li",{className:"menuItem",children:"About"}),e.jsx("li",{className:"menuItem",children:"Blog"}),e.jsx("li",{className:"menuItem",children:"FAQ"})]}),e.jsx("div",{className:"infoText",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),e.jsxs("div",{className:"socialIcons",children:[e.jsx("span",{className:"icon",children:e.jsx(ne,{})}),e.jsx("span",{className:"icon",children:e.jsx(le,{})}),e.jsx("span",{className:"icon",children:e.jsx(re,{})}),e.jsx("span",{className:"icon",children:e.jsx(oe,{})})]})]})}),y=s=>{const[l,a]=m.useState(null),[r,t]=m.useState(null),[o,c]=m.useState(null);return m.useEffect(()=>{t("loading..."),a(null),c(null),C(s).then(h=>{t(!1),a(h)}).catch(h=>{t(!1),c("Something went wrong!")})},[s]),{data:l,loading:r,error:o}},w=({src:s,className:l})=>e.jsx(xe.LazyLoadImage,{className:l||"",alt:"",effect:"blur",src:s}),Ce=()=>{const[s,l]=m.useState(""),[a,r]=m.useState(""),t=F(),{url:o}=$(u=>u.home),{data:c,loading:h}=y("/movie/upcoming");m.useEffect(()=>{var x,p;const u=o.backdrop+((p=(x=c==null?void 0:c.results)==null?void 0:x[Math.floor(Math.random()*20)])==null?void 0:p.backdrop_path);l(u)},[c]);const n=u=>{u.key==="Enter"&&a.length>0&&t(`/search/${a}`)};return e.jsxs("div",{className:"heroBanner",children:[!h&&e.jsx("div",{className:"backdrop-img",children:e.jsx(w,{src:s})}),e.jsx("div",{className:"opacity-layer"}),e.jsx(g,{children:e.jsxs("div",{className:"heroBannerContent",children:[e.jsx("span",{className:"title",children:"Welcome."}),e.jsx("span",{className:"subTitle",children:"Millions of movies, TV shows and people to discover. Explore now."}),e.jsxs("div",{className:"searchInput",children:[e.jsx("input",{type:"text",placeholder:"Search for a movie or tv show....",onChange:u=>r(u.target.value),onKeyUp:n}),e.jsx("button",{children:"Search"})]})]})})]})},L=({data:s,onTabChange:l})=>{const[a,r]=m.useState(0),[t,o]=m.useState(0),c=(h,n)=>{o(n*100),setTimeout(()=>{r(n)},300),l(h,n)};return e.jsx("div",{className:"switchingTabs",children:e.jsxs("div",{className:"tabItems",children:[s.map((h,n)=>e.jsx("span",{className:`tabItem ${a===n?"active":""}`,onClick:()=>c(h,n),children:h},n)),e.jsx("span",{className:"movingBg",style:{left:t}})]})})},B="/movix/assets/no-poster-DjFr0uax.png",Y=({rating:s})=>e.jsx("div",{className:"circleRating",children:e.jsx(pe,{value:s,maxValue:10,text:s,styles:je({pathColor:s<5?"red":s<7?"orange":"green"})})}),R=({data:s})=>{const{genres:l}=$(a=>a.home);return e.jsx("div",{className:"genres",children:s==null?void 0:s.map(a=>{var r,t;if((r=l[a])!=null&&r.name)return e.jsx("div",{className:"genre",children:(t=l[a])==null?void 0:t.name},a)})})},T=({data:s,loading:l,endpoint:a})=>{const r=m.useRef(),{url:t}=$(n=>n.home),o=F(),c=n=>{const u=r.current,x=n==="left"?u.scrollLeft-(u.offsetWidth+20):u.scrollLeft+(u.offsetWidth+20);u.scrollTo({left:x,behavior:"smooth"})},h=()=>e.jsxs("div",{className:"skeletonItem",children:[e.jsx("div",{className:"posterBlock"}),e.jsxs("div",{className:"textBlock",children:[e.jsx("div",{className:"title skeleton"}),e.jsx("div",{className:"date skeleton"})]})]});return e.jsx("div",{className:"carousel",children:e.jsxs(g,{children:[e.jsx(ie,{className:"carouselLeftNav arrow",onClick:()=>c("left")}),e.jsx(ce,{className:"carouselRighttNav arrow",onClick:()=>c("right")}),l?e.jsxs("div",{className:"loadingSkeleton",children:[h(),h(),h(),h(),h()]}):e.jsx("div",{className:"carouselItems",ref:r,children:s==null?void 0:s.map(n=>{const u=n.poster_path?t.poster+n.poster_path:B;return e.jsxs("div",{className:"carouselItem",onClick:()=>o(`/${n.media_type||a}/${n.id}`),children:[e.jsxs("div",{className:"posterBlock",children:[e.jsx(w,{src:u}),e.jsx(Y,{rating:n.vote_average.toFixed(1)}),e.jsx(R,{data:n.genre_ids.slice(0,2)})]}),e.jsxs("div",{className:"textBlock",children:[e.jsx("span",{className:"title",children:n.title||n.name}),e.jsx("span",{className:"date",children:D(n.release_Date).format("MMM D YYYY")})]})]},n.id)})})]})})},$e=()=>{const[s,l]=m.useState("day"),{data:a,loading:r}=y(`/trending/movie/${s}`),t=o=>{l(o==="Day"?"day":"week")};return e.jsxs("div",{className:"carouselSection",children:[e.jsxs(g,{children:[e.jsx("span",{className:"carouselTitle",children:"Trending"}),e.jsx(L,{data:["Day","Week"],onTabChange:t})]}),e.jsx(T,{data:a==null?void 0:a.results,loading:r})]})},_e=()=>{const[s,l]=m.useState("movie"),{data:a,loading:r}=y(`/${s}/popular`),t=o=>{l(o==="Movies"?"movie":"tv")};return e.jsxs("div",{className:"carouselSection",children:[e.jsxs(g,{children:[e.jsx("span",{className:"carouselTitle",children:"What's Popular"}),e.jsx(L,{data:["Movies","TV Shows"],onTabChange:t})]}),e.jsx(T,{data:a==null?void 0:a.results,loading:r,endpoint:s})]})},Me=()=>{const[s,l]=m.useState("movie"),{data:a,loading:r}=y(`/${s}/top_rated`),t=o=>{l(o==="Movies"?"movie":"tv")};return e.jsxs("div",{className:"carouselSection",children:[e.jsxs(g,{children:[e.jsx("span",{className:"carouselTitle",children:"Top Rated"}),e.jsx(L,{data:["Movies","TV Shows"],onTabChange:t})]}),e.jsx(T,{data:a==null?void 0:a.results,loading:r,endpoint:s})]})},Te=()=>e.jsxs("div",{className:"homePage",children:[e.jsx(Ce,{}),e.jsx($e,{}),e.jsx(_e,{}),e.jsx(Me,{})]}),Z=()=>e.jsxs("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"80px",height:"80px",viewBox:"0 0 213.7 213.7",enableBackground:"new 0 0 213.7 213.7",xmlSpace:"preserve",children:[e.jsx("polygon",{className:"triangle",fill:"none",strokeWidth:"7",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",points:"73.5,62.5 148.5,105.8 73.5,149.1 "}),e.jsx("circle",{className:"circle",fill:"none",strokeWidth:"7",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",cx:"106.8",cy:"106.8",r:"103.3"})]}),Q=({show:s,setShow:l,videoId:a,setVideoId:r})=>{const t=()=>{l(!1),r(null)};return e.jsxs("div",{className:`videoPopup ${s?"visible":""}`,children:[e.jsx("div",{className:"opacityLayer",onClick:t}),e.jsxs("div",{className:"videoPlayer",children:[e.jsx("span",{className:"closeBtn",onClick:t,children:"Close"}),e.jsx(ve,{url:`https://www.youtube.com/watch?v=${a}`,controls:!0,width:"100%",height:"100%"})]})]})},De=({video:s,crew:l})=>{var k,S,N;const[a,r]=m.useState(!1),[t,o]=m.useState(null),{mediaType:c,id:h}=P(),{data:n,loading:u}=y(`/${c}/${h}`),{url:x}=$(i=>i.home),p=(k=n==null?void 0:n.genres)==null?void 0:k.map(i=>i.id),j=l==null?void 0:l.filter(i=>i.job==="Director"),f=l==null?void 0:l.filter(i=>i.job==="Screenplay"||i.job==="Story"||i.job==="Writer"),b=i=>{const d=Math.floor(i/60),v=i%60;return`${d}h${v>0?` ${v}m`:""}`};return e.jsx("div",{className:"detailsBanner",children:u?e.jsx("div",{className:"detailsBannerSkeleton",children:e.jsxs(g,{children:[e.jsx("div",{className:"left skeleton"}),e.jsxs("div",{className:"right",children:[e.jsx("div",{className:"row skeleton"}),e.jsx("div",{className:"row skeleton"}),e.jsx("div",{className:"row skeleton"}),e.jsx("div",{className:"row skeleton"}),e.jsx("div",{className:"row skeleton"}),e.jsx("div",{className:"row skeleton"}),e.jsx("div",{className:"row skeleton"})]})]})}):e.jsx(e.Fragment,{children:!!n&&e.jsxs(W.Fragment,{children:[e.jsx("div",{className:"backdrop-img",children:e.jsx(w,{src:x.backdrop+n.backdrop_path})}),e.jsx("div",{className:"opacity-layer"}),e.jsxs(g,{children:[e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"left",children:n.poster_path?e.jsx(w,{className:"posterImg",src:x.backdrop+n.poster_path}):e.jsx(w,{className:"posterImg",src:B})}),e.jsxs("div",{className:"right",children:[e.jsx("div",{className:"title",children:`${n.name||n.title} (${D(n==null?void 0:n.release_date).format("YYYY")})`}),e.jsx("div",{className:"subtitle",children:n.tagline}),e.jsx(R,{data:p}),e.jsxs("div",{className:"row",children:[e.jsx(Y,{rating:n.vote_average.toFixed(1)}),e.jsxs("div",{className:"playbtn",onClick:()=>{r(!0),o(s.key)},children:[e.jsx(Z,{}),e.jsx("span",{className:"text",children:"Watch Trailer"})]})]}),e.jsxs("div",{className:"overview",children:[e.jsx("div",{className:"heading",children:"Overview"}),e.jsx("div",{className:"description",children:n.overview})]}),e.jsxs("div",{className:"info",children:[n.status&&e.jsxs("div",{className:"infoItem",children:[e.jsxs("span",{className:"text bold",children:["Status:"," "]}),e.jsx("span",{className:"text",children:n.status})]}),n.release_date&&e.jsxs("div",{className:"infoItem",children:[e.jsxs("span",{className:"text bold",children:["Release Date:"," "]}),e.jsx("span",{className:"text",children:D(n.release_date).format("MMM D, YYYY")})]}),n.runtime&&e.jsxs("div",{className:"infoItem",children:[e.jsxs("span",{className:"text bold",children:["Runtime:"," "]}),e.jsx("span",{className:"text",children:b(n.runtime)})]})]}),(j==null?void 0:j.length)>0&&e.jsxs("div",{className:"info",children:[e.jsxs("span",{className:"text bold",children:["Director:"," "]}),e.jsx("span",{className:"text",children:j==null?void 0:j.map((i,d)=>e.jsxs("span",{children:[i.name,j.length-1!==d&&", "]},d))})]}),(f==null?void 0:f.length)>0&&e.jsxs("div",{className:"info",children:[e.jsxs("span",{className:"text bold",children:["Writer:"," "]}),e.jsx("span",{className:"text",children:f==null?void 0:f.map((i,d)=>e.jsxs("span",{children:[i.name,f.length-1!==d&&", "]},d))})]}),((S=n==null?void 0:n.created_by)==null?void 0:S.length)>0&&e.jsxs("div",{className:"info",children:[e.jsxs("span",{className:"text bold",children:["Creator:"," "]}),e.jsx("span",{className:"text",children:(N=n==null?void 0:n.created_by)==null?void 0:N.map((i,d)=>e.jsxs("span",{children:[i.name,(n==null?void 0:n.created_by.length)-1!==d&&", "]},d))})]})]})]}),e.jsx(Q,{show:a,setShow:r,videoId:t,setVideoId:o})]})]})})})},Ee="/movix/assets/avatar-CTec_ic7.png",Fe=({data:s,loading:l})=>{const{url:a}=$(t=>t.home),r=()=>e.jsxs("div",{className:"skItem",children:[e.jsx("div",{className:"circle skeleton"}),e.jsx("div",{className:"row skeleton"}),e.jsx("div",{className:"row2 skeleton"})]});return e.jsx("div",{className:"castSection",children:e.jsxs(g,{children:[e.jsx("div",{className:"sectionHeading",children:"Top Cast"}),l?e.jsxs("div",{className:"castSkeleton",children:[r(),r(),r(),r(),r(),r()]}):e.jsx("div",{className:"listItems",children:s==null?void 0:s.map(t=>{let o=t.profile_path?a.profile+t.profile_path:Ee;return e.jsxs("div",{className:"listItem",children:[e.jsx("div",{className:"profileImg",children:e.jsx(w,{src:o})}),e.jsx("div",{className:"name",children:t.name}),e.jsx("div",{className:"character",children:t.character})]},t.id)})})]})})},Pe=({data:s,loading:l})=>{var h;const[a,r]=m.useState(!1),[t,o]=m.useState(null),c=()=>e.jsxs("div",{className:"skItem",children:[e.jsx("div",{className:"thumb skeleton"}),e.jsx("div",{className:"row skeleton"}),e.jsx("div",{className:"row2 skeleton"})]});return e.jsxs("div",{className:"videosSection",children:[e.jsxs(g,{children:[e.jsx("div",{className:"sectionHeading",children:"Official Videos"}),l?e.jsxs("div",{className:"videoSkeleton",children:[c(),c(),c(),c()]}):e.jsx("div",{className:"videos",children:(h=s==null?void 0:s.results)==null?void 0:h.map(n=>e.jsxs("div",{className:"videoItem",onClick:()=>{o(n.key),r(!0)},children:[e.jsxs("div",{className:"videoThumbnail",children:[e.jsx(w,{src:`https://img.youtube.com/vi/${n.key}/mqdefault.jpg`}),e.jsx(Z,{})]}),e.jsx("div",{className:"videoTitle",children:n.name})]},n.id))})]}),e.jsx(Q,{show:a,setShow:r,videoId:t,setVideoId:o})]})},Le=({mediaType:s,id:l})=>{const{data:a,loading:r,error:t}=y(`/${s}/${l}/similar`),o=s==="tv"?"Similar TV Shows":"Similar Movies";return e.jsx(T,{title:o,data:a==null?void 0:a.results,loading:r,endpoint:s})},Be=({mediaType:s,id:l})=>{const{data:a,loading:r,error:t}=y(`/${s}/${l}/recommendations`);return e.jsx(T,{title:"Recommendations",data:a==null?void 0:a.results,loading:r,endpoint:s})},Ye=()=>{var c;const{mediaType:s,id:l}=P(),{data:a,loading:r}=y(`/${s}/${l}/videos`),{data:t,loading:o}=y(`/${s}/${l}/credits`);return e.jsxs("div",{children:[e.jsx(De,{video:(c=a==null?void 0:a.results)==null?void 0:c[0],crew:t==null?void 0:t.crew}),e.jsx(Fe,{data:t==null?void 0:t.cast,loading:o}),e.jsx(Pe,{data:a,loading:r}),e.jsx(Le,{mediaType:s,id:l}),e.jsx(Be,{mediaType:s,id:l})]})},U=({data:s,fromSearch:l,mediaType:a})=>{const{url:r}=$(c=>c.home),t=F(),o=s.poster_path?r.poster+s.poster_path:B;return e.jsxs("div",{className:"movieCard",onClick:()=>t(`/${s.media_type||a}/${s.id}`),children:[e.jsxs("div",{className:"posterBlock",children:[e.jsx(w,{className:"posterImg",src:o}),!l&&e.jsxs(W.Fragment,{children:[e.jsx(Y,{rating:s.vote_average.toFixed(1)}),e.jsx(R,{data:s.genre_ids.slice(0,2)})]})]}),e.jsxs("div",{className:"textBlock",children:[e.jsx("span",{className:"title",children:s.title||s.name}),e.jsx("span",{className:"date",children:D(s.release_date).format("MMM D, YYYY")})]})]})},E=({initial:s})=>e.jsx("div",{className:`loadingSpinner ${s?"initial":""}`,children:e.jsx("svg",{className:"spinner",viewBox:"0 0 50 50",children:e.jsx("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})})}),Re=()=>{var u,x;const[s,l]=m.useState(null),[a,r]=m.useState(1),[t,o]=m.useState(!1),{query:c}=P(),h=()=>{o(!0),C(`/search/multi?query=${c}&page=${a}`).then(p=>{l(p),r(j=>j+1),o(!1)})},n=()=>{C(`/search/multi?query=${c}&page=${a}`).then(p=>{s!=null&&s.results?l({...s,results:[...s==null?void 0:s.results,...p.results]}):l(p),r(j=>j+1)})};return m.useEffect(()=>{r(1),h()},[c]),e.jsxs("div",{className:"searchResultsPage",children:[t&&e.jsx(E,{initial:!0}),!t&&e.jsx(g,{children:((u=s==null?void 0:s.results)==null?void 0:u.length)>0?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pageTitle",children:`Search ${(s==null?void 0:s.total_results)>1?"results":"result"} of '${c}'`}),e.jsx(H,{className:"content",dataLength:((x=s==null?void 0:s.results)==null?void 0:x.length)||[],next:n,hasMore:a<=(s==null?void 0:s.total_pages),loader:e.jsx(E,{}),children:s==null?void 0:s.results.map((p,j)=>{if(p.media_type!=="person")return e.jsx(U,{data:p,fromSearch:!0},j)})})]}):e.jsx("span",{className:"resultNotFound",children:"Sorry, Results not found!"})})]})};let I={};const Ae=[{value:"popularity.desc",label:"Popularity Descending"},{value:"popularity.asc",label:"Popularity Ascending"},{value:"vote_average.desc",label:"Rating Descending"},{value:"vote_average.asc",label:"Rating Ascending"},{value:"primary_release_date.desc",label:"Release Date Descending"},{value:"primary_release_date.asc",label:"Release Date Ascending"},{value:"original_title.asc",label:"Title (A-Z)"}],Oe=()=>{var k,S,N;const[s,l]=m.useState(null),[a,r]=m.useState(1),[t,o]=m.useState(!1),[c,h]=m.useState(null),[n,u]=m.useState(null),{mediaType:x}=P(),{data:p}=y(`/genre/${x}/list`),j=()=>{o(!0),C(`/discover/${x}`,I).then(i=>{l(i),r(d=>d+1),o(!1)})},f=()=>{C(`/discover/${x}?page=${a}`,I).then(i=>{s!=null&&s.results?l({...s,results:[...s==null?void 0:s.results,...i.results]}):l(i),r(d=>d+1)})};m.useEffect(()=>{I={},l(null),r(1),u(null),h(null),j()},[x]);const b=(i,d)=>{if(d.name==="sortby"&&(u(i),d.action!=="clear"?I.sort_by=i.value:delete I.sort_by),d.name==="genres")if(h(i),d.action!=="clear"){let v=i.map(_=>_.id);v=JSON.stringify(v).slice(1,-1),I.with_genres=v}else delete I.with_genres;r(1),j()};return e.jsx("div",{className:"explorePage",children:e.jsxs(g,{children:[e.jsxs("div",{className:"pageHeader",children:[e.jsx("div",{className:"pageTitle",children:x==="tv"?"Explore TV Shows":"Explore Movies"}),e.jsxs("div",{className:"filters",children:[e.jsx(V,{isMulti:!0,name:"genres",value:c,closeMenuOnSelect:!1,options:p==null?void 0:p.genres,getOptionLabel:i=>i.name,getOptionValue:i=>i.id,onChange:b,placeholder:"Select genres",className:"react-select-container genresDD",classNamePrefix:"react-select"}),e.jsx(V,{name:"sortby",value:n,options:Ae,onChange:b,isClearable:!0,placeholder:"Sort by",className:"react-select-container sortbyDD",classNamePrefix:"react-select"})]})]}),t&&e.jsx(E,{initial:!0}),!t&&e.jsx(e.Fragment,{children:((k=s==null?void 0:s.results)==null?void 0:k.length)>0?e.jsx(H,{className:"content",dataLength:((S=s==null?void 0:s.results)==null?void 0:S.length)||[],next:f,hasMore:a<=(s==null?void 0:s.total_pages),loader:e.jsx(E,{}),children:(N=s==null?void 0:s.results)==null?void 0:N.map((i,d)=>{if(i.media_type!=="person")return e.jsx(U,{data:i,mediaType:x},d)})}):e.jsx("span",{className:"resultNotFound",children:"Sorry, Results not found!"})})]})})},Ve=()=>e.jsx("div",{className:"pageNotFound",children:e.jsxs(g,{children:[e.jsx("span",{className:"bigText",children:"404"}),e.jsx("span",{className:"smallText",children:"Page not found!"})]})}),We="/movix/assets/snack-CwEdPo4W.png",He="/movix/assets/milktea-MP0iyCsM.png",qe="/movix/assets/coffee-YEGutxQZ.png",Ze=()=>{const s=[{title:"Coffee",img:qe,amount:5e4},{title:"Snack",img:We,amount:1e4},{title:"Milktea",img:He,amount:25e3}],[l,a]=m.useState(!1),[r,t]=m.useState([0,0,0]),o=i=>{a(!0)},c=970418,h=2153900335,n="DINH NHO HOANG",[u,x]=m.useState(""),[p,j]=m.useState(0),f=(i,d)=>{if(o(),r[d]===0)j(1);else{j(0);let v=i*r[d];const _=`Em chuyen tien mua ${r[d]} ${s[d].title} cho anh Hoang`;let G=`https://img.vietqr.io/image/${c}-${h}-compact2.png?amount=${v}&addInfo=${_}&accountName=${n}`;x(G)}},b=()=>{a(!1)},k=i=>{const d=[...r];d[i]++,t(d)},S=i=>{const d=[...r];d[i]>0&&d[i]--,t(d)},N=(i,d)=>{const v=[...r],_=d.target.value;_===""?v[i]=0:v[i]=Math.max(0,parseInt(_,10)),t(v)};return e.jsx("div",{className:"donate",children:e.jsxs(g,{children:[e.jsx("div",{className:`modal ${l?"active":""}`,children:e.jsxs("div",{className:`box ${p?"showError":""}`,children:[e.jsxs("div",{className:"closeBtn",onClick:()=>b(),children:[" ","Close"]}),e.jsx("div",{className:`qrSection ${p?"":"active"}`,children:e.jsx("div",{className:"qrcode",children:e.jsx("img",{src:u})})}),e.jsx("div",{className:`error ${p?"active":""}`,children:"You have to input a value greater than 0"})]})}),e.jsx("div",{className:"donateSection",children:s==null?void 0:s.map((i,d)=>e.jsxs("div",{className:"donateItem",children:[e.jsx("div",{className:"donateImage",children:e.jsx(w,{src:i.img})}),e.jsxs("div",{className:"textSection",children:[e.jsx("div",{className:"donateTitle",children:i.title}),e.jsx("div",{className:"amount",children:i.amount}),e.jsxs("div",{className:"quantity",children:[e.jsx(de,{className:"btn",onClick:v=>{v.preventDefault(),S(d)}}),e.jsx("input",{type:"text",value:r[d],onChange:v=>{v.preventDefault(),N(d,v)}}),e.jsx(me,{className:"btn",onClick:v=>{v.preventDefault(),k(d)}})]}),e.jsx("div",{className:"donateBtn",id:d,onClick:()=>f(i.amount,d),children:"Donate"})]})]},d))})]})})};function Qe(){const s=K(),{url:l}=$(t=>t.home);console.log("halo"),console.log(l),m.useEffect(()=>{a(),r()},[]);const a=()=>{C("/configuration").then(t=>{console.log(t);const o={backdrop:t.images.secure_base_url+"original",poster:t.images.secure_base_url+"original",profile:t.images.secure_base_url+"original"};s(Se(o))})},r=async()=>{let t=[],o=["tv","movie"],c={};o.forEach(n=>{t.push(C(`/genre/${n}/list`))});const h=await Promise.all(t);console.log(h),h.map(({genres:n})=>n.map(u=>c[u.id]=u)),s(ye(c))};return e.jsxs(z,{children:[e.jsx(we,{}),e.jsxs(he,{children:[e.jsx(M,{path:"/",element:e.jsx(Te,{})}),e.jsx(M,{path:"/:mediaType/:id",element:e.jsx(Ye,{})}),e.jsx(M,{path:"/search/:query",element:e.jsx(Re,{})}),e.jsx(M,{path:"/explore/:mediaType",element:e.jsx(Oe,{})}),e.jsx(M,{path:"/donate",element:e.jsx(Ze,{})}),e.jsx(M,{path:"*",element:e.jsx(Ve,{})})]}),e.jsx(Ie,{})]})}const Ue=te({reducer:{home:be}});J.createRoot(document.getElementById("root")).render(e.jsx(X,{store:Ue,children:e.jsx(Qe,{})}));
