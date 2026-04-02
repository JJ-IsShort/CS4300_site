goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_17915 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_17915(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_17925 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_17925(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17196 = coll;
var G__17197 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17196,G__17197) : shadow.dom.lazy_native_coll_seq.call(null,G__17196,G__17197));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5142__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17218 = arguments.length;
switch (G__17218) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17222 = arguments.length;
switch (G__17222) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17226 = arguments.length;
switch (G__17226) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17230 = arguments.length;
switch (G__17230) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17236 = arguments.length;
switch (G__17236) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17251 = arguments.length;
switch (G__17251) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17256){if((e17256 instanceof Object)){
var e = e17256;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17256;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17257 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17258 = null;
var count__17259 = (0);
var i__17260 = (0);
while(true){
if((i__17260 < count__17259)){
var el = chunk__17258.cljs$core$IIndexed$_nth$arity$2(null,i__17260);
var handler_18021__$1 = ((function (seq__17257,chunk__17258,count__17259,i__17260,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17257,chunk__17258,count__17259,i__17260,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18021__$1);


var G__18023 = seq__17257;
var G__18024 = chunk__17258;
var G__18025 = count__17259;
var G__18026 = (i__17260 + (1));
seq__17257 = G__18023;
chunk__17258 = G__18024;
count__17259 = G__18025;
i__17260 = G__18026;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__17257);
if(temp__5823__auto__){
var seq__17257__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17257__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__17257__$1);
var G__18033 = cljs.core.chunk_rest(seq__17257__$1);
var G__18034 = c__5673__auto__;
var G__18035 = cljs.core.count(c__5673__auto__);
var G__18036 = (0);
seq__17257 = G__18033;
chunk__17258 = G__18034;
count__17259 = G__18035;
i__17260 = G__18036;
continue;
} else {
var el = cljs.core.first(seq__17257__$1);
var handler_18038__$1 = ((function (seq__17257,chunk__17258,count__17259,i__17260,el,seq__17257__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17257,chunk__17258,count__17259,i__17260,el,seq__17257__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18038__$1);


var G__18042 = cljs.core.next(seq__17257__$1);
var G__18043 = null;
var G__18044 = (0);
var G__18045 = (0);
seq__17257 = G__18042;
chunk__17258 = G__18043;
count__17259 = G__18044;
i__17260 = G__18045;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17265 = arguments.length;
switch (G__17265) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17267 = cljs.core.seq(events);
var chunk__17268 = null;
var count__17269 = (0);
var i__17270 = (0);
while(true){
if((i__17270 < count__17269)){
var vec__17282 = chunk__17268.cljs$core$IIndexed$_nth$arity$2(null,i__17270);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17282,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17282,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18055 = seq__17267;
var G__18056 = chunk__17268;
var G__18057 = count__17269;
var G__18058 = (i__17270 + (1));
seq__17267 = G__18055;
chunk__17268 = G__18056;
count__17269 = G__18057;
i__17270 = G__18058;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__17267);
if(temp__5823__auto__){
var seq__17267__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17267__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__17267__$1);
var G__18061 = cljs.core.chunk_rest(seq__17267__$1);
var G__18062 = c__5673__auto__;
var G__18063 = cljs.core.count(c__5673__auto__);
var G__18064 = (0);
seq__17267 = G__18061;
chunk__17268 = G__18062;
count__17269 = G__18063;
i__17270 = G__18064;
continue;
} else {
var vec__17287 = cljs.core.first(seq__17267__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17287,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17287,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18068 = cljs.core.next(seq__17267__$1);
var G__18069 = null;
var G__18070 = (0);
var G__18071 = (0);
seq__17267 = G__18068;
chunk__17268 = G__18069;
count__17269 = G__18070;
i__17270 = G__18071;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17294 = cljs.core.seq(styles);
var chunk__17295 = null;
var count__17296 = (0);
var i__17297 = (0);
while(true){
if((i__17297 < count__17296)){
var vec__17312 = chunk__17295.cljs$core$IIndexed$_nth$arity$2(null,i__17297);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17312,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17312,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18080 = seq__17294;
var G__18081 = chunk__17295;
var G__18082 = count__17296;
var G__18083 = (i__17297 + (1));
seq__17294 = G__18080;
chunk__17295 = G__18081;
count__17296 = G__18082;
i__17297 = G__18083;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__17294);
if(temp__5823__auto__){
var seq__17294__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17294__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__17294__$1);
var G__18085 = cljs.core.chunk_rest(seq__17294__$1);
var G__18086 = c__5673__auto__;
var G__18087 = cljs.core.count(c__5673__auto__);
var G__18088 = (0);
seq__17294 = G__18085;
chunk__17295 = G__18086;
count__17296 = G__18087;
i__17297 = G__18088;
continue;
} else {
var vec__17323 = cljs.core.first(seq__17294__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17323,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17323,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18096 = cljs.core.next(seq__17294__$1);
var G__18097 = null;
var G__18098 = (0);
var G__18099 = (0);
seq__17294 = G__18096;
chunk__17295 = G__18097;
count__17296 = G__18098;
i__17297 = G__18099;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17326_18100 = key;
var G__17326_18101__$1 = (((G__17326_18100 instanceof cljs.core.Keyword))?G__17326_18100.fqn:null);
switch (G__17326_18101__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18118 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_18118,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_18118,"aria-");
}
})())){
el.setAttribute(ks_18118,value);
} else {
(el[ks_18118] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17336){
var map__17337 = p__17336;
var map__17337__$1 = cljs.core.__destructure_map(map__17337);
var props = map__17337__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17337__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17341 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17341,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17341,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17341,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17344 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17344,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17344;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17347 = arguments.length;
switch (G__17347) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17348){
var vec__17349 = p__17348;
var seq__17350 = cljs.core.seq(vec__17349);
var first__17351 = cljs.core.first(seq__17350);
var seq__17350__$1 = cljs.core.next(seq__17350);
var nn = first__17351;
var first__17351__$1 = cljs.core.first(seq__17350__$1);
var seq__17350__$2 = cljs.core.next(seq__17350__$1);
var np = first__17351__$1;
var nc = seq__17350__$2;
var node = vec__17349;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17353 = nn;
var G__17354 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17353,G__17354) : create_fn.call(null,G__17353,G__17354));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17355 = nn;
var G__17356 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17355,G__17356) : create_fn.call(null,G__17355,G__17356));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17358 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17358,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17358,(1),null);
var seq__17362_18141 = cljs.core.seq(node_children);
var chunk__17363_18142 = null;
var count__17364_18143 = (0);
var i__17365_18144 = (0);
while(true){
if((i__17365_18144 < count__17364_18143)){
var child_struct_18145 = chunk__17363_18142.cljs$core$IIndexed$_nth$arity$2(null,i__17365_18144);
var children_18146 = shadow.dom.dom_node(child_struct_18145);
if(cljs.core.seq_QMARK_(children_18146)){
var seq__17385_18147 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18146));
var chunk__17387_18148 = null;
var count__17388_18149 = (0);
var i__17389_18150 = (0);
while(true){
if((i__17389_18150 < count__17388_18149)){
var child_18151 = chunk__17387_18148.cljs$core$IIndexed$_nth$arity$2(null,i__17389_18150);
if(cljs.core.truth_(child_18151)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18151);


var G__18154 = seq__17385_18147;
var G__18155 = chunk__17387_18148;
var G__18156 = count__17388_18149;
var G__18157 = (i__17389_18150 + (1));
seq__17385_18147 = G__18154;
chunk__17387_18148 = G__18155;
count__17388_18149 = G__18156;
i__17389_18150 = G__18157;
continue;
} else {
var G__18158 = seq__17385_18147;
var G__18159 = chunk__17387_18148;
var G__18160 = count__17388_18149;
var G__18161 = (i__17389_18150 + (1));
seq__17385_18147 = G__18158;
chunk__17387_18148 = G__18159;
count__17388_18149 = G__18160;
i__17389_18150 = G__18161;
continue;
}
} else {
var temp__5823__auto___18163 = cljs.core.seq(seq__17385_18147);
if(temp__5823__auto___18163){
var seq__17385_18165__$1 = temp__5823__auto___18163;
if(cljs.core.chunked_seq_QMARK_(seq__17385_18165__$1)){
var c__5673__auto___18170 = cljs.core.chunk_first(seq__17385_18165__$1);
var G__18171 = cljs.core.chunk_rest(seq__17385_18165__$1);
var G__18172 = c__5673__auto___18170;
var G__18173 = cljs.core.count(c__5673__auto___18170);
var G__18174 = (0);
seq__17385_18147 = G__18171;
chunk__17387_18148 = G__18172;
count__17388_18149 = G__18173;
i__17389_18150 = G__18174;
continue;
} else {
var child_18179 = cljs.core.first(seq__17385_18165__$1);
if(cljs.core.truth_(child_18179)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18179);


var G__18180 = cljs.core.next(seq__17385_18165__$1);
var G__18181 = null;
var G__18182 = (0);
var G__18183 = (0);
seq__17385_18147 = G__18180;
chunk__17387_18148 = G__18181;
count__17388_18149 = G__18182;
i__17389_18150 = G__18183;
continue;
} else {
var G__18184 = cljs.core.next(seq__17385_18165__$1);
var G__18185 = null;
var G__18186 = (0);
var G__18187 = (0);
seq__17385_18147 = G__18184;
chunk__17387_18148 = G__18185;
count__17388_18149 = G__18186;
i__17389_18150 = G__18187;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18146);
}


var G__18188 = seq__17362_18141;
var G__18189 = chunk__17363_18142;
var G__18190 = count__17364_18143;
var G__18191 = (i__17365_18144 + (1));
seq__17362_18141 = G__18188;
chunk__17363_18142 = G__18189;
count__17364_18143 = G__18190;
i__17365_18144 = G__18191;
continue;
} else {
var temp__5823__auto___18192 = cljs.core.seq(seq__17362_18141);
if(temp__5823__auto___18192){
var seq__17362_18193__$1 = temp__5823__auto___18192;
if(cljs.core.chunked_seq_QMARK_(seq__17362_18193__$1)){
var c__5673__auto___18194 = cljs.core.chunk_first(seq__17362_18193__$1);
var G__18195 = cljs.core.chunk_rest(seq__17362_18193__$1);
var G__18196 = c__5673__auto___18194;
var G__18197 = cljs.core.count(c__5673__auto___18194);
var G__18198 = (0);
seq__17362_18141 = G__18195;
chunk__17363_18142 = G__18196;
count__17364_18143 = G__18197;
i__17365_18144 = G__18198;
continue;
} else {
var child_struct_18199 = cljs.core.first(seq__17362_18193__$1);
var children_18200 = shadow.dom.dom_node(child_struct_18199);
if(cljs.core.seq_QMARK_(children_18200)){
var seq__17392_18203 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18200));
var chunk__17394_18204 = null;
var count__17395_18205 = (0);
var i__17396_18206 = (0);
while(true){
if((i__17396_18206 < count__17395_18205)){
var child_18208 = chunk__17394_18204.cljs$core$IIndexed$_nth$arity$2(null,i__17396_18206);
if(cljs.core.truth_(child_18208)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18208);


var G__18209 = seq__17392_18203;
var G__18210 = chunk__17394_18204;
var G__18211 = count__17395_18205;
var G__18212 = (i__17396_18206 + (1));
seq__17392_18203 = G__18209;
chunk__17394_18204 = G__18210;
count__17395_18205 = G__18211;
i__17396_18206 = G__18212;
continue;
} else {
var G__18214 = seq__17392_18203;
var G__18215 = chunk__17394_18204;
var G__18216 = count__17395_18205;
var G__18217 = (i__17396_18206 + (1));
seq__17392_18203 = G__18214;
chunk__17394_18204 = G__18215;
count__17395_18205 = G__18216;
i__17396_18206 = G__18217;
continue;
}
} else {
var temp__5823__auto___18218__$1 = cljs.core.seq(seq__17392_18203);
if(temp__5823__auto___18218__$1){
var seq__17392_18219__$1 = temp__5823__auto___18218__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17392_18219__$1)){
var c__5673__auto___18220 = cljs.core.chunk_first(seq__17392_18219__$1);
var G__18221 = cljs.core.chunk_rest(seq__17392_18219__$1);
var G__18222 = c__5673__auto___18220;
var G__18223 = cljs.core.count(c__5673__auto___18220);
var G__18224 = (0);
seq__17392_18203 = G__18221;
chunk__17394_18204 = G__18222;
count__17395_18205 = G__18223;
i__17396_18206 = G__18224;
continue;
} else {
var child_18226 = cljs.core.first(seq__17392_18219__$1);
if(cljs.core.truth_(child_18226)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18226);


var G__18227 = cljs.core.next(seq__17392_18219__$1);
var G__18228 = null;
var G__18229 = (0);
var G__18230 = (0);
seq__17392_18203 = G__18227;
chunk__17394_18204 = G__18228;
count__17395_18205 = G__18229;
i__17396_18206 = G__18230;
continue;
} else {
var G__18231 = cljs.core.next(seq__17392_18219__$1);
var G__18232 = null;
var G__18233 = (0);
var G__18234 = (0);
seq__17392_18203 = G__18231;
chunk__17394_18204 = G__18232;
count__17395_18205 = G__18233;
i__17396_18206 = G__18234;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18200);
}


var G__18235 = cljs.core.next(seq__17362_18193__$1);
var G__18236 = null;
var G__18237 = (0);
var G__18238 = (0);
seq__17362_18141 = G__18235;
chunk__17363_18142 = G__18236;
count__17364_18143 = G__18237;
i__17365_18144 = G__18238;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17409 = cljs.core.seq(node);
var chunk__17410 = null;
var count__17411 = (0);
var i__17412 = (0);
while(true){
if((i__17412 < count__17411)){
var n = chunk__17410.cljs$core$IIndexed$_nth$arity$2(null,i__17412);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18243 = seq__17409;
var G__18244 = chunk__17410;
var G__18245 = count__17411;
var G__18246 = (i__17412 + (1));
seq__17409 = G__18243;
chunk__17410 = G__18244;
count__17411 = G__18245;
i__17412 = G__18246;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__17409);
if(temp__5823__auto__){
var seq__17409__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17409__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__17409__$1);
var G__18249 = cljs.core.chunk_rest(seq__17409__$1);
var G__18250 = c__5673__auto__;
var G__18251 = cljs.core.count(c__5673__auto__);
var G__18252 = (0);
seq__17409 = G__18249;
chunk__17410 = G__18250;
count__17411 = G__18251;
i__17412 = G__18252;
continue;
} else {
var n = cljs.core.first(seq__17409__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18255 = cljs.core.next(seq__17409__$1);
var G__18256 = null;
var G__18257 = (0);
var G__18258 = (0);
seq__17409 = G__18255;
chunk__17410 = G__18256;
count__17411 = G__18257;
i__17412 = G__18258;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__17418 = arguments.length;
switch (G__17418) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__17421 = arguments.length;
switch (G__17421) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__17431 = arguments.length;
switch (G__17431) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5142__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18275 = arguments.length;
var i__5877__auto___18276 = (0);
while(true){
if((i__5877__auto___18276 < len__5876__auto___18275)){
args__5882__auto__.push((arguments[i__5877__auto___18276]));

var G__18278 = (i__5877__auto___18276 + (1));
i__5877__auto___18276 = G__18278;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__17440_18281 = cljs.core.seq(nodes);
var chunk__17441_18282 = null;
var count__17442_18283 = (0);
var i__17443_18284 = (0);
while(true){
if((i__17443_18284 < count__17442_18283)){
var node_18286 = chunk__17441_18282.cljs$core$IIndexed$_nth$arity$2(null,i__17443_18284);
fragment.appendChild(shadow.dom._to_dom(node_18286));


var G__18288 = seq__17440_18281;
var G__18290 = chunk__17441_18282;
var G__18291 = count__17442_18283;
var G__18292 = (i__17443_18284 + (1));
seq__17440_18281 = G__18288;
chunk__17441_18282 = G__18290;
count__17442_18283 = G__18291;
i__17443_18284 = G__18292;
continue;
} else {
var temp__5823__auto___18295 = cljs.core.seq(seq__17440_18281);
if(temp__5823__auto___18295){
var seq__17440_18296__$1 = temp__5823__auto___18295;
if(cljs.core.chunked_seq_QMARK_(seq__17440_18296__$1)){
var c__5673__auto___18297 = cljs.core.chunk_first(seq__17440_18296__$1);
var G__18298 = cljs.core.chunk_rest(seq__17440_18296__$1);
var G__18299 = c__5673__auto___18297;
var G__18300 = cljs.core.count(c__5673__auto___18297);
var G__18301 = (0);
seq__17440_18281 = G__18298;
chunk__17441_18282 = G__18299;
count__17442_18283 = G__18300;
i__17443_18284 = G__18301;
continue;
} else {
var node_18302 = cljs.core.first(seq__17440_18296__$1);
fragment.appendChild(shadow.dom._to_dom(node_18302));


var G__18303 = cljs.core.next(seq__17440_18296__$1);
var G__18304 = null;
var G__18305 = (0);
var G__18306 = (0);
seq__17440_18281 = G__18303;
chunk__17441_18282 = G__18304;
count__17442_18283 = G__18305;
i__17443_18284 = G__18306;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq17437){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17437));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__17450_18310 = cljs.core.seq(scripts);
var chunk__17451_18311 = null;
var count__17452_18312 = (0);
var i__17453_18313 = (0);
while(true){
if((i__17453_18313 < count__17452_18312)){
var vec__17462_18314 = chunk__17451_18311.cljs$core$IIndexed$_nth$arity$2(null,i__17453_18313);
var script_tag_18315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17462_18314,(0),null);
var script_body_18316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17462_18314,(1),null);
eval(script_body_18316);


var G__18317 = seq__17450_18310;
var G__18318 = chunk__17451_18311;
var G__18319 = count__17452_18312;
var G__18320 = (i__17453_18313 + (1));
seq__17450_18310 = G__18317;
chunk__17451_18311 = G__18318;
count__17452_18312 = G__18319;
i__17453_18313 = G__18320;
continue;
} else {
var temp__5823__auto___18321 = cljs.core.seq(seq__17450_18310);
if(temp__5823__auto___18321){
var seq__17450_18322__$1 = temp__5823__auto___18321;
if(cljs.core.chunked_seq_QMARK_(seq__17450_18322__$1)){
var c__5673__auto___18323 = cljs.core.chunk_first(seq__17450_18322__$1);
var G__18324 = cljs.core.chunk_rest(seq__17450_18322__$1);
var G__18325 = c__5673__auto___18323;
var G__18326 = cljs.core.count(c__5673__auto___18323);
var G__18327 = (0);
seq__17450_18310 = G__18324;
chunk__17451_18311 = G__18325;
count__17452_18312 = G__18326;
i__17453_18313 = G__18327;
continue;
} else {
var vec__17465_18329 = cljs.core.first(seq__17450_18322__$1);
var script_tag_18330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17465_18329,(0),null);
var script_body_18331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17465_18329,(1),null);
eval(script_body_18331);


var G__18333 = cljs.core.next(seq__17450_18322__$1);
var G__18334 = null;
var G__18335 = (0);
var G__18336 = (0);
seq__17450_18310 = G__18333;
chunk__17451_18311 = G__18334;
count__17452_18312 = G__18335;
i__17453_18313 = G__18336;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__17469){
var vec__17470 = p__17469;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17470,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17470,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__17476 = arguments.length;
switch (G__17476) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__17486 = cljs.core.seq(style_keys);
var chunk__17487 = null;
var count__17488 = (0);
var i__17489 = (0);
while(true){
if((i__17489 < count__17488)){
var it = chunk__17487.cljs$core$IIndexed$_nth$arity$2(null,i__17489);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18359 = seq__17486;
var G__18360 = chunk__17487;
var G__18361 = count__17488;
var G__18362 = (i__17489 + (1));
seq__17486 = G__18359;
chunk__17487 = G__18360;
count__17488 = G__18361;
i__17489 = G__18362;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__17486);
if(temp__5823__auto__){
var seq__17486__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17486__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__17486__$1);
var G__18364 = cljs.core.chunk_rest(seq__17486__$1);
var G__18365 = c__5673__auto__;
var G__18366 = cljs.core.count(c__5673__auto__);
var G__18367 = (0);
seq__17486 = G__18364;
chunk__17487 = G__18365;
count__17488 = G__18366;
i__17489 = G__18367;
continue;
} else {
var it = cljs.core.first(seq__17486__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18373 = cljs.core.next(seq__17486__$1);
var G__18374 = null;
var G__18375 = (0);
var G__18376 = (0);
seq__17486 = G__18373;
chunk__17487 = G__18374;
count__17488 = G__18375;
i__17489 = G__18376;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k17493,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__17504 = k17493;
var G__17504__$1 = (((G__17504 instanceof cljs.core.Keyword))?G__17504.fqn:null);
switch (G__17504__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17493,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__17505){
var vec__17506 = p__17505;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17506,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17506,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17492){
var self__ = this;
var G__17492__$1 = this;
return (new cljs.core.RecordIter((0),G__17492__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17494,other17495){
var self__ = this;
var this17494__$1 = this;
return (((!((other17495 == null)))) && ((((this17494__$1.constructor === other17495.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17494__$1.x,other17495.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17494__$1.y,other17495.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17494__$1.__extmap,other17495.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k17493){
var self__ = this;
var this__5455__auto____$1 = this;
var G__17517 = k17493;
var G__17517__$1 = (((G__17517 instanceof cljs.core.Keyword))?G__17517.fqn:null);
switch (G__17517__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17493);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__17492){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__17519 = cljs.core.keyword_identical_QMARK_;
var expr__17520 = k__5457__auto__;
if(cljs.core.truth_((pred__17519.cljs$core$IFn$_invoke$arity$2 ? pred__17519.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__17520) : pred__17519.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__17520)))){
return (new shadow.dom.Coordinate(G__17492,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17519.cljs$core$IFn$_invoke$arity$2 ? pred__17519.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__17520) : pred__17519.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__17520)))){
return (new shadow.dom.Coordinate(self__.x,G__17492,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__17492),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__17492){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__17492,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__17498){
var extmap__5490__auto__ = (function (){var G__17524 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17498,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__17498)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17524);
} else {
return G__17524;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__17498),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__17498),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k17527,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__17539 = k17527;
var G__17539__$1 = (((G__17539 instanceof cljs.core.Keyword))?G__17539.fqn:null);
switch (G__17539__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17527,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__17540){
var vec__17541 = p__17540;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17541,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17541,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Size{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17526){
var self__ = this;
var G__17526__$1 = this;
return (new cljs.core.RecordIter((0),G__17526__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17528,other17529){
var self__ = this;
var this17528__$1 = this;
return (((!((other17529 == null)))) && ((((this17528__$1.constructor === other17529.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17528__$1.w,other17529.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17528__$1.h,other17529.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17528__$1.__extmap,other17529.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k17527){
var self__ = this;
var this__5455__auto____$1 = this;
var G__17578 = k17527;
var G__17578__$1 = (((G__17578 instanceof cljs.core.Keyword))?G__17578.fqn:null);
switch (G__17578__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17527);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__17526){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__17581 = cljs.core.keyword_identical_QMARK_;
var expr__17582 = k__5457__auto__;
if(cljs.core.truth_((pred__17581.cljs$core$IFn$_invoke$arity$2 ? pred__17581.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__17582) : pred__17581.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__17582)))){
return (new shadow.dom.Size(G__17526,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17581.cljs$core$IFn$_invoke$arity$2 ? pred__17581.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__17582) : pred__17581.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__17582)))){
return (new shadow.dom.Size(self__.w,G__17526,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__17526),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__17526){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__17526,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__17532){
var extmap__5490__auto__ = (function (){var G__17609 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17532,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__17532)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17609);
} else {
return G__17609;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__17532),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__17532),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5738__auto__ = opts;
var l__5739__auto__ = a__5738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5739__auto__)){
var G__18456 = (i + (1));
var G__18457 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__18456;
ret = G__18457;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17619){
var vec__17620 = p__17619;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17620,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17620,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__17624 = arguments.length;
switch (G__17624) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__18468 = ps;
var G__18469 = (i + (1));
el__$1 = G__18468;
i = G__18469;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__17636 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17636,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17636,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17636,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__17641_18476 = cljs.core.seq(props);
var chunk__17642_18477 = null;
var count__17643_18478 = (0);
var i__17644_18479 = (0);
while(true){
if((i__17644_18479 < count__17643_18478)){
var vec__17671_18480 = chunk__17642_18477.cljs$core$IIndexed$_nth$arity$2(null,i__17644_18479);
var k_18481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17671_18480,(0),null);
var v_18482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17671_18480,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_18481);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18481),v_18482);


var G__18483 = seq__17641_18476;
var G__18484 = chunk__17642_18477;
var G__18485 = count__17643_18478;
var G__18486 = (i__17644_18479 + (1));
seq__17641_18476 = G__18483;
chunk__17642_18477 = G__18484;
count__17643_18478 = G__18485;
i__17644_18479 = G__18486;
continue;
} else {
var temp__5823__auto___18487 = cljs.core.seq(seq__17641_18476);
if(temp__5823__auto___18487){
var seq__17641_18489__$1 = temp__5823__auto___18487;
if(cljs.core.chunked_seq_QMARK_(seq__17641_18489__$1)){
var c__5673__auto___18490 = cljs.core.chunk_first(seq__17641_18489__$1);
var G__18491 = cljs.core.chunk_rest(seq__17641_18489__$1);
var G__18492 = c__5673__auto___18490;
var G__18493 = cljs.core.count(c__5673__auto___18490);
var G__18494 = (0);
seq__17641_18476 = G__18491;
chunk__17642_18477 = G__18492;
count__17643_18478 = G__18493;
i__17644_18479 = G__18494;
continue;
} else {
var vec__17689_18499 = cljs.core.first(seq__17641_18489__$1);
var k_18500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17689_18499,(0),null);
var v_18501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17689_18499,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_18500);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18500),v_18501);


var G__18502 = cljs.core.next(seq__17641_18489__$1);
var G__18503 = null;
var G__18504 = (0);
var G__18505 = (0);
seq__17641_18476 = G__18502;
chunk__17642_18477 = G__18503;
count__17643_18478 = G__18504;
i__17644_18479 = G__18505;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__17698 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17698,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17698,(1),null);
var seq__17703_18513 = cljs.core.seq(node_children);
var chunk__17705_18514 = null;
var count__17706_18515 = (0);
var i__17707_18516 = (0);
while(true){
if((i__17707_18516 < count__17706_18515)){
var child_struct_18517 = chunk__17705_18514.cljs$core$IIndexed$_nth$arity$2(null,i__17707_18516);
if((!((child_struct_18517 == null)))){
if(typeof child_struct_18517 === 'string'){
var text_18518 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18518)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_18517)));
} else {
var children_18521 = shadow.dom.svg_node(child_struct_18517);
if(cljs.core.seq_QMARK_(children_18521)){
var seq__17772_18522 = cljs.core.seq(children_18521);
var chunk__17774_18523 = null;
var count__17775_18524 = (0);
var i__17776_18525 = (0);
while(true){
if((i__17776_18525 < count__17775_18524)){
var child_18526 = chunk__17774_18523.cljs$core$IIndexed$_nth$arity$2(null,i__17776_18525);
if(cljs.core.truth_(child_18526)){
node.appendChild(child_18526);


var G__18527 = seq__17772_18522;
var G__18528 = chunk__17774_18523;
var G__18529 = count__17775_18524;
var G__18530 = (i__17776_18525 + (1));
seq__17772_18522 = G__18527;
chunk__17774_18523 = G__18528;
count__17775_18524 = G__18529;
i__17776_18525 = G__18530;
continue;
} else {
var G__18531 = seq__17772_18522;
var G__18532 = chunk__17774_18523;
var G__18533 = count__17775_18524;
var G__18534 = (i__17776_18525 + (1));
seq__17772_18522 = G__18531;
chunk__17774_18523 = G__18532;
count__17775_18524 = G__18533;
i__17776_18525 = G__18534;
continue;
}
} else {
var temp__5823__auto___18536 = cljs.core.seq(seq__17772_18522);
if(temp__5823__auto___18536){
var seq__17772_18537__$1 = temp__5823__auto___18536;
if(cljs.core.chunked_seq_QMARK_(seq__17772_18537__$1)){
var c__5673__auto___18538 = cljs.core.chunk_first(seq__17772_18537__$1);
var G__18539 = cljs.core.chunk_rest(seq__17772_18537__$1);
var G__18540 = c__5673__auto___18538;
var G__18541 = cljs.core.count(c__5673__auto___18538);
var G__18542 = (0);
seq__17772_18522 = G__18539;
chunk__17774_18523 = G__18540;
count__17775_18524 = G__18541;
i__17776_18525 = G__18542;
continue;
} else {
var child_18544 = cljs.core.first(seq__17772_18537__$1);
if(cljs.core.truth_(child_18544)){
node.appendChild(child_18544);


var G__18546 = cljs.core.next(seq__17772_18537__$1);
var G__18547 = null;
var G__18548 = (0);
var G__18549 = (0);
seq__17772_18522 = G__18546;
chunk__17774_18523 = G__18547;
count__17775_18524 = G__18548;
i__17776_18525 = G__18549;
continue;
} else {
var G__18550 = cljs.core.next(seq__17772_18537__$1);
var G__18551 = null;
var G__18552 = (0);
var G__18553 = (0);
seq__17772_18522 = G__18550;
chunk__17774_18523 = G__18551;
count__17775_18524 = G__18552;
i__17776_18525 = G__18553;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18521);
}
}


var G__18555 = seq__17703_18513;
var G__18556 = chunk__17705_18514;
var G__18557 = count__17706_18515;
var G__18558 = (i__17707_18516 + (1));
seq__17703_18513 = G__18555;
chunk__17705_18514 = G__18556;
count__17706_18515 = G__18557;
i__17707_18516 = G__18558;
continue;
} else {
var G__18559 = seq__17703_18513;
var G__18560 = chunk__17705_18514;
var G__18561 = count__17706_18515;
var G__18562 = (i__17707_18516 + (1));
seq__17703_18513 = G__18559;
chunk__17705_18514 = G__18560;
count__17706_18515 = G__18561;
i__17707_18516 = G__18562;
continue;
}
} else {
var temp__5823__auto___18564 = cljs.core.seq(seq__17703_18513);
if(temp__5823__auto___18564){
var seq__17703_18566__$1 = temp__5823__auto___18564;
if(cljs.core.chunked_seq_QMARK_(seq__17703_18566__$1)){
var c__5673__auto___18567 = cljs.core.chunk_first(seq__17703_18566__$1);
var G__18568 = cljs.core.chunk_rest(seq__17703_18566__$1);
var G__18569 = c__5673__auto___18567;
var G__18570 = cljs.core.count(c__5673__auto___18567);
var G__18571 = (0);
seq__17703_18513 = G__18568;
chunk__17705_18514 = G__18569;
count__17706_18515 = G__18570;
i__17707_18516 = G__18571;
continue;
} else {
var child_struct_18572 = cljs.core.first(seq__17703_18566__$1);
if((!((child_struct_18572 == null)))){
if(typeof child_struct_18572 === 'string'){
var text_18576 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18576)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_18572)));
} else {
var children_18578 = shadow.dom.svg_node(child_struct_18572);
if(cljs.core.seq_QMARK_(children_18578)){
var seq__17811_18579 = cljs.core.seq(children_18578);
var chunk__17813_18580 = null;
var count__17814_18581 = (0);
var i__17815_18582 = (0);
while(true){
if((i__17815_18582 < count__17814_18581)){
var child_18584 = chunk__17813_18580.cljs$core$IIndexed$_nth$arity$2(null,i__17815_18582);
if(cljs.core.truth_(child_18584)){
node.appendChild(child_18584);


var G__18588 = seq__17811_18579;
var G__18589 = chunk__17813_18580;
var G__18590 = count__17814_18581;
var G__18591 = (i__17815_18582 + (1));
seq__17811_18579 = G__18588;
chunk__17813_18580 = G__18589;
count__17814_18581 = G__18590;
i__17815_18582 = G__18591;
continue;
} else {
var G__18592 = seq__17811_18579;
var G__18593 = chunk__17813_18580;
var G__18594 = count__17814_18581;
var G__18595 = (i__17815_18582 + (1));
seq__17811_18579 = G__18592;
chunk__17813_18580 = G__18593;
count__17814_18581 = G__18594;
i__17815_18582 = G__18595;
continue;
}
} else {
var temp__5823__auto___18596__$1 = cljs.core.seq(seq__17811_18579);
if(temp__5823__auto___18596__$1){
var seq__17811_18597__$1 = temp__5823__auto___18596__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17811_18597__$1)){
var c__5673__auto___18599 = cljs.core.chunk_first(seq__17811_18597__$1);
var G__18608 = cljs.core.chunk_rest(seq__17811_18597__$1);
var G__18609 = c__5673__auto___18599;
var G__18610 = cljs.core.count(c__5673__auto___18599);
var G__18611 = (0);
seq__17811_18579 = G__18608;
chunk__17813_18580 = G__18609;
count__17814_18581 = G__18610;
i__17815_18582 = G__18611;
continue;
} else {
var child_18613 = cljs.core.first(seq__17811_18597__$1);
if(cljs.core.truth_(child_18613)){
node.appendChild(child_18613);


var G__18614 = cljs.core.next(seq__17811_18597__$1);
var G__18615 = null;
var G__18616 = (0);
var G__18617 = (0);
seq__17811_18579 = G__18614;
chunk__17813_18580 = G__18615;
count__17814_18581 = G__18616;
i__17815_18582 = G__18617;
continue;
} else {
var G__18618 = cljs.core.next(seq__17811_18597__$1);
var G__18619 = null;
var G__18620 = (0);
var G__18621 = (0);
seq__17811_18579 = G__18618;
chunk__17813_18580 = G__18619;
count__17814_18581 = G__18620;
i__17815_18582 = G__18621;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18578);
}
}


var G__18625 = cljs.core.next(seq__17703_18566__$1);
var G__18626 = null;
var G__18627 = (0);
var G__18628 = (0);
seq__17703_18513 = G__18625;
chunk__17705_18514 = G__18626;
count__17706_18515 = G__18627;
i__17707_18516 = G__18628;
continue;
} else {
var G__18629 = cljs.core.next(seq__17703_18566__$1);
var G__18630 = null;
var G__18631 = (0);
var G__18632 = (0);
seq__17703_18513 = G__18629;
chunk__17705_18514 = G__18630;
count__17706_18515 = G__18631;
i__17707_18516 = G__18632;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18637 = arguments.length;
var i__5877__auto___18639 = (0);
while(true){
if((i__5877__auto___18639 < len__5876__auto___18637)){
args__5882__auto__.push((arguments[i__5877__auto___18639]));

var G__18642 = (i__5877__auto___18639 + (1));
i__5877__auto___18639 = G__18642;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq17870){
var G__17871 = cljs.core.first(seq17870);
var seq17870__$1 = cljs.core.next(seq17870);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17871,seq17870__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
