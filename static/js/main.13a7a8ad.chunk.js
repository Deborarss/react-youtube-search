(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(45)},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),o=a(8),s=a.n(o),l=a(16),m=a(2),u=a(3),d=a(5),v=a(4),p=a(6),f=a(17),h=a.n(f).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,type:"video",key:"AIzaSyDCDXQfZh9HHvASF5osmWUIfDgqzHH6M5M"}}),b=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.term)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui inverted segment",style:{background:"#B4151A"}},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{style:{color:"#fff",fontSize:"1rem"}},"Procurar V\xeddeos"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}))))}}]),t}(r.a.Component),E=(a(44),function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},r.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.description}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},t.snippet.title)))}),S=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map(function(e){return r.a.createElement(E,{key:e.id.videoId,onVideoSelect:a,video:e})});return r.a.createElement("div",{className:"ui relaxed divided list"},n)},y=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Carregando...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement("div",null,r.a.createElement("div",{className:"ui embed"},r.a.createElement("iframe",{title:"video player",src:a})),r.a.createElement("div",{className:"ui segment"},r.a.createElement("h4",{className:"ui header"},t.snippet.title),r.a.createElement("p",null,t.snippet.description)))},w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={videos:[],selectedVideo:null},a.onSearchSubmit=function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/search",{params:{q:t}});case 2:n=e.sent,a.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onSearchSubmit("captain marvel")}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"1.2rem"}},r.a.createElement(b,{onSubmit:this.onSearchSubmit}),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"eleven wide column"},r.a.createElement(y,{video:this.state.selectedVideo})),r.a.createElement("div",{className:"five wide column"},r.a.createElement(S,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(w,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.13a7a8ad.chunk.js.map