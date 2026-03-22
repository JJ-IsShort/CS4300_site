goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12982 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_12982(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12990 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_12990(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11873 = coll;
var G__11874 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11873,G__11874) : shadow.dom.lazy_native_coll_seq.call(null,G__11873,G__11874));
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
var G__11898 = arguments.length;
switch (G__11898) {
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
var G__11904 = arguments.length;
switch (G__11904) {
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
var G__11908 = arguments.length;
switch (G__11908) {
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
var G__11912 = arguments.length;
switch (G__11912) {
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
var G__11944 = arguments.length;
switch (G__11944) {
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
var G__11971 = arguments.length;
switch (G__11971) {
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
}catch (e11999){if((e11999 instanceof Object)){
var e = e11999;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11999;

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
var seq__12012 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__12013 = null;
var count__12014 = (0);
var i__12015 = (0);
while(true){
if((i__12015 < count__12014)){
var el = chunk__12013.cljs$core$IIndexed$_nth$arity$2(null,i__12015);
var handler_13049__$1 = ((function (seq__12012,chunk__12013,count__12014,i__12015,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__12012,chunk__12013,count__12014,i__12015,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_13049__$1);


var G__13053 = seq__12012;
var G__13054 = chunk__12013;
var G__13055 = count__12014;
var G__13056 = (i__12015 + (1));
seq__12012 = G__13053;
chunk__12013 = G__13054;
count__12014 = G__13055;
i__12015 = G__13056;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12012);
if(temp__5823__auto__){
var seq__12012__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12012__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12012__$1);
var G__13058 = cljs.core.chunk_rest(seq__12012__$1);
var G__13059 = c__5673__auto__;
var G__13060 = cljs.core.count(c__5673__auto__);
var G__13061 = (0);
seq__12012 = G__13058;
chunk__12013 = G__13059;
count__12014 = G__13060;
i__12015 = G__13061;
continue;
} else {
var el = cljs.core.first(seq__12012__$1);
var handler_13062__$1 = ((function (seq__12012,chunk__12013,count__12014,i__12015,el,seq__12012__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__12012,chunk__12013,count__12014,i__12015,el,seq__12012__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_13062__$1);


var G__13065 = cljs.core.next(seq__12012__$1);
var G__13066 = null;
var G__13067 = (0);
var G__13068 = (0);
seq__12012 = G__13065;
chunk__12013 = G__13066;
count__12014 = G__13067;
i__12015 = G__13068;
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
var G__12091 = arguments.length;
switch (G__12091) {
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
var seq__12156 = cljs.core.seq(events);
var chunk__12157 = null;
var count__12158 = (0);
var i__12159 = (0);
while(true){
if((i__12159 < count__12158)){
var vec__12209 = chunk__12157.cljs$core$IIndexed$_nth$arity$2(null,i__12159);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12209,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12209,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13094 = seq__12156;
var G__13095 = chunk__12157;
var G__13096 = count__12158;
var G__13097 = (i__12159 + (1));
seq__12156 = G__13094;
chunk__12157 = G__13095;
count__12158 = G__13096;
i__12159 = G__13097;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12156);
if(temp__5823__auto__){
var seq__12156__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12156__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12156__$1);
var G__13106 = cljs.core.chunk_rest(seq__12156__$1);
var G__13107 = c__5673__auto__;
var G__13108 = cljs.core.count(c__5673__auto__);
var G__13109 = (0);
seq__12156 = G__13106;
chunk__12157 = G__13107;
count__12158 = G__13108;
i__12159 = G__13109;
continue;
} else {
var vec__12212 = cljs.core.first(seq__12156__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12212,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12212,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13112 = cljs.core.next(seq__12156__$1);
var G__13113 = null;
var G__13114 = (0);
var G__13115 = (0);
seq__12156 = G__13112;
chunk__12157 = G__13113;
count__12158 = G__13114;
i__12159 = G__13115;
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
var seq__12215 = cljs.core.seq(styles);
var chunk__12216 = null;
var count__12217 = (0);
var i__12218 = (0);
while(true){
if((i__12218 < count__12217)){
var vec__12248 = chunk__12216.cljs$core$IIndexed$_nth$arity$2(null,i__12218);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12248,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12248,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13123 = seq__12215;
var G__13124 = chunk__12216;
var G__13125 = count__12217;
var G__13126 = (i__12218 + (1));
seq__12215 = G__13123;
chunk__12216 = G__13124;
count__12217 = G__13125;
i__12218 = G__13126;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12215);
if(temp__5823__auto__){
var seq__12215__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12215__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12215__$1);
var G__13137 = cljs.core.chunk_rest(seq__12215__$1);
var G__13138 = c__5673__auto__;
var G__13139 = cljs.core.count(c__5673__auto__);
var G__13140 = (0);
seq__12215 = G__13137;
chunk__12216 = G__13138;
count__12217 = G__13139;
i__12218 = G__13140;
continue;
} else {
var vec__12260 = cljs.core.first(seq__12215__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12260,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12260,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13144 = cljs.core.next(seq__12215__$1);
var G__13145 = null;
var G__13146 = (0);
var G__13147 = (0);
seq__12215 = G__13144;
chunk__12216 = G__13145;
count__12217 = G__13146;
i__12218 = G__13147;
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
var G__12273_13149 = key;
var G__12273_13150__$1 = (((G__12273_13149 instanceof cljs.core.Keyword))?G__12273_13149.fqn:null);
switch (G__12273_13150__$1) {
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
var ks_13161 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_13161,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_13161,"aria-");
}
})())){
el.setAttribute(ks_13161,value);
} else {
(el[ks_13161] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__12350){
var map__12351 = p__12350;
var map__12351__$1 = cljs.core.__destructure_map(map__12351);
var props = map__12351__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12351__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__12354 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12354,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12354,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12354,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__12359 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__12359,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__12359;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12365 = arguments.length;
switch (G__12365) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12379){
var vec__12380 = p__12379;
var seq__12381 = cljs.core.seq(vec__12380);
var first__12382 = cljs.core.first(seq__12381);
var seq__12381__$1 = cljs.core.next(seq__12381);
var nn = first__12382;
var first__12382__$1 = cljs.core.first(seq__12381__$1);
var seq__12381__$2 = cljs.core.next(seq__12381__$1);
var np = first__12382__$1;
var nc = seq__12381__$2;
var node = vec__12380;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12384 = nn;
var G__12385 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12384,G__12385) : create_fn.call(null,G__12384,G__12385));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12386 = nn;
var G__12387 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12386,G__12387) : create_fn.call(null,G__12386,G__12387));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12388 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12388,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12388,(1),null);
var seq__12392_13283 = cljs.core.seq(node_children);
var chunk__12393_13284 = null;
var count__12394_13285 = (0);
var i__12395_13286 = (0);
while(true){
if((i__12395_13286 < count__12394_13285)){
var child_struct_13291 = chunk__12393_13284.cljs$core$IIndexed$_nth$arity$2(null,i__12395_13286);
var children_13293 = shadow.dom.dom_node(child_struct_13291);
if(cljs.core.seq_QMARK_(children_13293)){
var seq__12426_13295 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13293));
var chunk__12428_13296 = null;
var count__12429_13297 = (0);
var i__12430_13298 = (0);
while(true){
if((i__12430_13298 < count__12429_13297)){
var child_13302 = chunk__12428_13296.cljs$core$IIndexed$_nth$arity$2(null,i__12430_13298);
if(cljs.core.truth_(child_13302)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13302);


var G__13304 = seq__12426_13295;
var G__13305 = chunk__12428_13296;
var G__13306 = count__12429_13297;
var G__13307 = (i__12430_13298 + (1));
seq__12426_13295 = G__13304;
chunk__12428_13296 = G__13305;
count__12429_13297 = G__13306;
i__12430_13298 = G__13307;
continue;
} else {
var G__13308 = seq__12426_13295;
var G__13309 = chunk__12428_13296;
var G__13310 = count__12429_13297;
var G__13311 = (i__12430_13298 + (1));
seq__12426_13295 = G__13308;
chunk__12428_13296 = G__13309;
count__12429_13297 = G__13310;
i__12430_13298 = G__13311;
continue;
}
} else {
var temp__5823__auto___13317 = cljs.core.seq(seq__12426_13295);
if(temp__5823__auto___13317){
var seq__12426_13318__$1 = temp__5823__auto___13317;
if(cljs.core.chunked_seq_QMARK_(seq__12426_13318__$1)){
var c__5673__auto___13324 = cljs.core.chunk_first(seq__12426_13318__$1);
var G__13325 = cljs.core.chunk_rest(seq__12426_13318__$1);
var G__13326 = c__5673__auto___13324;
var G__13327 = cljs.core.count(c__5673__auto___13324);
var G__13328 = (0);
seq__12426_13295 = G__13325;
chunk__12428_13296 = G__13326;
count__12429_13297 = G__13327;
i__12430_13298 = G__13328;
continue;
} else {
var child_13329 = cljs.core.first(seq__12426_13318__$1);
if(cljs.core.truth_(child_13329)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13329);


var G__13357 = cljs.core.next(seq__12426_13318__$1);
var G__13358 = null;
var G__13359 = (0);
var G__13360 = (0);
seq__12426_13295 = G__13357;
chunk__12428_13296 = G__13358;
count__12429_13297 = G__13359;
i__12430_13298 = G__13360;
continue;
} else {
var G__13364 = cljs.core.next(seq__12426_13318__$1);
var G__13365 = null;
var G__13366 = (0);
var G__13367 = (0);
seq__12426_13295 = G__13364;
chunk__12428_13296 = G__13365;
count__12429_13297 = G__13366;
i__12430_13298 = G__13367;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13293);
}


var G__13380 = seq__12392_13283;
var G__13381 = chunk__12393_13284;
var G__13382 = count__12394_13285;
var G__13383 = (i__12395_13286 + (1));
seq__12392_13283 = G__13380;
chunk__12393_13284 = G__13381;
count__12394_13285 = G__13382;
i__12395_13286 = G__13383;
continue;
} else {
var temp__5823__auto___13385 = cljs.core.seq(seq__12392_13283);
if(temp__5823__auto___13385){
var seq__12392_13386__$1 = temp__5823__auto___13385;
if(cljs.core.chunked_seq_QMARK_(seq__12392_13386__$1)){
var c__5673__auto___13388 = cljs.core.chunk_first(seq__12392_13386__$1);
var G__13389 = cljs.core.chunk_rest(seq__12392_13386__$1);
var G__13390 = c__5673__auto___13388;
var G__13391 = cljs.core.count(c__5673__auto___13388);
var G__13392 = (0);
seq__12392_13283 = G__13389;
chunk__12393_13284 = G__13390;
count__12394_13285 = G__13391;
i__12395_13286 = G__13392;
continue;
} else {
var child_struct_13396 = cljs.core.first(seq__12392_13386__$1);
var children_13397 = shadow.dom.dom_node(child_struct_13396);
if(cljs.core.seq_QMARK_(children_13397)){
var seq__12434_13410 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13397));
var chunk__12436_13411 = null;
var count__12437_13412 = (0);
var i__12438_13413 = (0);
while(true){
if((i__12438_13413 < count__12437_13412)){
var child_13415 = chunk__12436_13411.cljs$core$IIndexed$_nth$arity$2(null,i__12438_13413);
if(cljs.core.truth_(child_13415)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13415);


var G__13416 = seq__12434_13410;
var G__13417 = chunk__12436_13411;
var G__13418 = count__12437_13412;
var G__13419 = (i__12438_13413 + (1));
seq__12434_13410 = G__13416;
chunk__12436_13411 = G__13417;
count__12437_13412 = G__13418;
i__12438_13413 = G__13419;
continue;
} else {
var G__13421 = seq__12434_13410;
var G__13422 = chunk__12436_13411;
var G__13423 = count__12437_13412;
var G__13424 = (i__12438_13413 + (1));
seq__12434_13410 = G__13421;
chunk__12436_13411 = G__13422;
count__12437_13412 = G__13423;
i__12438_13413 = G__13424;
continue;
}
} else {
var temp__5823__auto___13425__$1 = cljs.core.seq(seq__12434_13410);
if(temp__5823__auto___13425__$1){
var seq__12434_13426__$1 = temp__5823__auto___13425__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12434_13426__$1)){
var c__5673__auto___13428 = cljs.core.chunk_first(seq__12434_13426__$1);
var G__13429 = cljs.core.chunk_rest(seq__12434_13426__$1);
var G__13430 = c__5673__auto___13428;
var G__13431 = cljs.core.count(c__5673__auto___13428);
var G__13432 = (0);
seq__12434_13410 = G__13429;
chunk__12436_13411 = G__13430;
count__12437_13412 = G__13431;
i__12438_13413 = G__13432;
continue;
} else {
var child_13434 = cljs.core.first(seq__12434_13426__$1);
if(cljs.core.truth_(child_13434)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13434);


var G__13436 = cljs.core.next(seq__12434_13426__$1);
var G__13437 = null;
var G__13438 = (0);
var G__13439 = (0);
seq__12434_13410 = G__13436;
chunk__12436_13411 = G__13437;
count__12437_13412 = G__13438;
i__12438_13413 = G__13439;
continue;
} else {
var G__13442 = cljs.core.next(seq__12434_13426__$1);
var G__13443 = null;
var G__13444 = (0);
var G__13445 = (0);
seq__12434_13410 = G__13442;
chunk__12436_13411 = G__13443;
count__12437_13412 = G__13444;
i__12438_13413 = G__13445;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13397);
}


var G__13453 = cljs.core.next(seq__12392_13386__$1);
var G__13454 = null;
var G__13455 = (0);
var G__13456 = (0);
seq__12392_13283 = G__13453;
chunk__12393_13284 = G__13454;
count__12394_13285 = G__13455;
i__12395_13286 = G__13456;
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
var seq__12452 = cljs.core.seq(node);
var chunk__12453 = null;
var count__12454 = (0);
var i__12455 = (0);
while(true){
if((i__12455 < count__12454)){
var n = chunk__12453.cljs$core$IIndexed$_nth$arity$2(null,i__12455);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13480 = seq__12452;
var G__13481 = chunk__12453;
var G__13482 = count__12454;
var G__13483 = (i__12455 + (1));
seq__12452 = G__13480;
chunk__12453 = G__13481;
count__12454 = G__13482;
i__12455 = G__13483;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12452);
if(temp__5823__auto__){
var seq__12452__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12452__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12452__$1);
var G__13491 = cljs.core.chunk_rest(seq__12452__$1);
var G__13492 = c__5673__auto__;
var G__13493 = cljs.core.count(c__5673__auto__);
var G__13494 = (0);
seq__12452 = G__13491;
chunk__12453 = G__13492;
count__12454 = G__13493;
i__12455 = G__13494;
continue;
} else {
var n = cljs.core.first(seq__12452__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13496 = cljs.core.next(seq__12452__$1);
var G__13497 = null;
var G__13498 = (0);
var G__13499 = (0);
seq__12452 = G__13496;
chunk__12453 = G__13497;
count__12454 = G__13498;
i__12455 = G__13499;
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
var G__12468 = arguments.length;
switch (G__12468) {
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
var G__12473 = arguments.length;
switch (G__12473) {
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
var G__12478 = arguments.length;
switch (G__12478) {
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
var len__5876__auto___13652 = arguments.length;
var i__5877__auto___13653 = (0);
while(true){
if((i__5877__auto___13653 < len__5876__auto___13652)){
args__5882__auto__.push((arguments[i__5877__auto___13653]));

var G__13654 = (i__5877__auto___13653 + (1));
i__5877__auto___13653 = G__13654;
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
var seq__12487_13656 = cljs.core.seq(nodes);
var chunk__12488_13657 = null;
var count__12489_13658 = (0);
var i__12490_13659 = (0);
while(true){
if((i__12490_13659 < count__12489_13658)){
var node_13664 = chunk__12488_13657.cljs$core$IIndexed$_nth$arity$2(null,i__12490_13659);
fragment.appendChild(shadow.dom._to_dom(node_13664));


var G__13667 = seq__12487_13656;
var G__13668 = chunk__12488_13657;
var G__13669 = count__12489_13658;
var G__13670 = (i__12490_13659 + (1));
seq__12487_13656 = G__13667;
chunk__12488_13657 = G__13668;
count__12489_13658 = G__13669;
i__12490_13659 = G__13670;
continue;
} else {
var temp__5823__auto___13671 = cljs.core.seq(seq__12487_13656);
if(temp__5823__auto___13671){
var seq__12487_13673__$1 = temp__5823__auto___13671;
if(cljs.core.chunked_seq_QMARK_(seq__12487_13673__$1)){
var c__5673__auto___13701 = cljs.core.chunk_first(seq__12487_13673__$1);
var G__13702 = cljs.core.chunk_rest(seq__12487_13673__$1);
var G__13703 = c__5673__auto___13701;
var G__13704 = cljs.core.count(c__5673__auto___13701);
var G__13705 = (0);
seq__12487_13656 = G__13702;
chunk__12488_13657 = G__13703;
count__12489_13658 = G__13704;
i__12490_13659 = G__13705;
continue;
} else {
var node_13706 = cljs.core.first(seq__12487_13673__$1);
fragment.appendChild(shadow.dom._to_dom(node_13706));


var G__13708 = cljs.core.next(seq__12487_13673__$1);
var G__13709 = null;
var G__13710 = (0);
var G__13711 = (0);
seq__12487_13656 = G__13708;
chunk__12488_13657 = G__13709;
count__12489_13658 = G__13710;
i__12490_13659 = G__13711;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12486){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12486));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12496_13717 = cljs.core.seq(scripts);
var chunk__12497_13718 = null;
var count__12498_13719 = (0);
var i__12499_13720 = (0);
while(true){
if((i__12499_13720 < count__12498_13719)){
var vec__12524_13721 = chunk__12497_13718.cljs$core$IIndexed$_nth$arity$2(null,i__12499_13720);
var script_tag_13722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12524_13721,(0),null);
var script_body_13723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12524_13721,(1),null);
eval(script_body_13723);


var G__13725 = seq__12496_13717;
var G__13726 = chunk__12497_13718;
var G__13727 = count__12498_13719;
var G__13728 = (i__12499_13720 + (1));
seq__12496_13717 = G__13725;
chunk__12497_13718 = G__13726;
count__12498_13719 = G__13727;
i__12499_13720 = G__13728;
continue;
} else {
var temp__5823__auto___13729 = cljs.core.seq(seq__12496_13717);
if(temp__5823__auto___13729){
var seq__12496_13731__$1 = temp__5823__auto___13729;
if(cljs.core.chunked_seq_QMARK_(seq__12496_13731__$1)){
var c__5673__auto___13733 = cljs.core.chunk_first(seq__12496_13731__$1);
var G__13734 = cljs.core.chunk_rest(seq__12496_13731__$1);
var G__13735 = c__5673__auto___13733;
var G__13736 = cljs.core.count(c__5673__auto___13733);
var G__13737 = (0);
seq__12496_13717 = G__13734;
chunk__12497_13718 = G__13735;
count__12498_13719 = G__13736;
i__12499_13720 = G__13737;
continue;
} else {
var vec__12528_13738 = cljs.core.first(seq__12496_13731__$1);
var script_tag_13739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12528_13738,(0),null);
var script_body_13740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12528_13738,(1),null);
eval(script_body_13740);


var G__13742 = cljs.core.next(seq__12496_13731__$1);
var G__13743 = null;
var G__13744 = (0);
var G__13745 = (0);
seq__12496_13717 = G__13742;
chunk__12497_13718 = G__13743;
count__12498_13719 = G__13744;
i__12499_13720 = G__13745;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12535){
var vec__12537 = p__12535;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12537,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12537,(1),null);
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
var G__12550 = arguments.length;
switch (G__12550) {
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
var seq__12568 = cljs.core.seq(style_keys);
var chunk__12569 = null;
var count__12570 = (0);
var i__12571 = (0);
while(true){
if((i__12571 < count__12570)){
var it = chunk__12569.cljs$core$IIndexed$_nth$arity$2(null,i__12571);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13786 = seq__12568;
var G__13787 = chunk__12569;
var G__13788 = count__12570;
var G__13789 = (i__12571 + (1));
seq__12568 = G__13786;
chunk__12569 = G__13787;
count__12570 = G__13788;
i__12571 = G__13789;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12568);
if(temp__5823__auto__){
var seq__12568__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12568__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12568__$1);
var G__13791 = cljs.core.chunk_rest(seq__12568__$1);
var G__13792 = c__5673__auto__;
var G__13793 = cljs.core.count(c__5673__auto__);
var G__13794 = (0);
seq__12568 = G__13791;
chunk__12569 = G__13792;
count__12570 = G__13793;
i__12571 = G__13794;
continue;
} else {
var it = cljs.core.first(seq__12568__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13834 = cljs.core.next(seq__12568__$1);
var G__13835 = null;
var G__13836 = (0);
var G__13837 = (0);
seq__12568 = G__13834;
chunk__12569 = G__13835;
count__12570 = G__13836;
i__12571 = G__13837;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k12583,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__12598 = k12583;
var G__12598__$1 = (((G__12598 instanceof cljs.core.Keyword))?G__12598.fqn:null);
switch (G__12598__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12583,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__12605){
var vec__12606 = p__12605;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12606,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12606,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12582){
var self__ = this;
var G__12582__$1 = this;
return (new cljs.core.RecordIter((0),G__12582__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12584,other12585){
var self__ = this;
var this12584__$1 = this;
return (((!((other12585 == null)))) && ((((this12584__$1.constructor === other12585.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12584__$1.x,other12585.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12584__$1.y,other12585.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12584__$1.__extmap,other12585.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k12583){
var self__ = this;
var this__5455__auto____$1 = this;
var G__12633 = k12583;
var G__12633__$1 = (((G__12633 instanceof cljs.core.Keyword))?G__12633.fqn:null);
switch (G__12633__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12583);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__12582){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__12637 = cljs.core.keyword_identical_QMARK_;
var expr__12638 = k__5457__auto__;
if(cljs.core.truth_((pred__12637.cljs$core$IFn$_invoke$arity$2 ? pred__12637.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12638) : pred__12637.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12638)))){
return (new shadow.dom.Coordinate(G__12582,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12637.cljs$core$IFn$_invoke$arity$2 ? pred__12637.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12638) : pred__12637.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12638)))){
return (new shadow.dom.Coordinate(self__.x,G__12582,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__12582),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__12582){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12582,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12590){
var extmap__5490__auto__ = (function (){var G__12651 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12590,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12590)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12651);
} else {
return G__12651;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12590),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12590),null,cljs.core.not_empty(extmap__5490__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k12668,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__12679 = k12668;
var G__12679__$1 = (((G__12679 instanceof cljs.core.Keyword))?G__12679.fqn:null);
switch (G__12679__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12668,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__12682){
var vec__12683 = p__12682;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12683,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12683,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12667){
var self__ = this;
var G__12667__$1 = this;
return (new cljs.core.RecordIter((0),G__12667__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12669,other12670){
var self__ = this;
var this12669__$1 = this;
return (((!((other12670 == null)))) && ((((this12669__$1.constructor === other12670.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12669__$1.w,other12670.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12669__$1.h,other12670.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12669__$1.__extmap,other12670.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k12668){
var self__ = this;
var this__5455__auto____$1 = this;
var G__12714 = k12668;
var G__12714__$1 = (((G__12714 instanceof cljs.core.Keyword))?G__12714.fqn:null);
switch (G__12714__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12668);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__12667){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__12718 = cljs.core.keyword_identical_QMARK_;
var expr__12719 = k__5457__auto__;
if(cljs.core.truth_((pred__12718.cljs$core$IFn$_invoke$arity$2 ? pred__12718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12719) : pred__12718.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12719)))){
return (new shadow.dom.Size(G__12667,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12718.cljs$core$IFn$_invoke$arity$2 ? pred__12718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12719) : pred__12718.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12719)))){
return (new shadow.dom.Size(self__.w,G__12667,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__12667),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__12667){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12667,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12674){
var extmap__5490__auto__ = (function (){var G__12731 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12674,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12674)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12731);
} else {
return G__12731;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12674),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12674),null,cljs.core.not_empty(extmap__5490__auto__),null));
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
var G__14015 = (i + (1));
var G__14016 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__14015;
ret = G__14016;
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12763){
var vec__12764 = p__12763;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12764,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12764,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12773 = arguments.length;
switch (G__12773) {
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
var G__14035 = ps;
var G__14036 = (i + (1));
el__$1 = G__14035;
i = G__14036;
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
var vec__12809 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12809,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12809,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12809,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12817_14043 = cljs.core.seq(props);
var chunk__12818_14044 = null;
var count__12819_14045 = (0);
var i__12820_14046 = (0);
while(true){
if((i__12820_14046 < count__12819_14045)){
var vec__12838_14049 = chunk__12818_14044.cljs$core$IIndexed$_nth$arity$2(null,i__12820_14046);
var k_14050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12838_14049,(0),null);
var v_14051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12838_14049,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_14050);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_14050),v_14051);


var G__14053 = seq__12817_14043;
var G__14054 = chunk__12818_14044;
var G__14055 = count__12819_14045;
var G__14056 = (i__12820_14046 + (1));
seq__12817_14043 = G__14053;
chunk__12818_14044 = G__14054;
count__12819_14045 = G__14055;
i__12820_14046 = G__14056;
continue;
} else {
var temp__5823__auto___14057 = cljs.core.seq(seq__12817_14043);
if(temp__5823__auto___14057){
var seq__12817_14058__$1 = temp__5823__auto___14057;
if(cljs.core.chunked_seq_QMARK_(seq__12817_14058__$1)){
var c__5673__auto___14059 = cljs.core.chunk_first(seq__12817_14058__$1);
var G__14060 = cljs.core.chunk_rest(seq__12817_14058__$1);
var G__14061 = c__5673__auto___14059;
var G__14062 = cljs.core.count(c__5673__auto___14059);
var G__14063 = (0);
seq__12817_14043 = G__14060;
chunk__12818_14044 = G__14061;
count__12819_14045 = G__14062;
i__12820_14046 = G__14063;
continue;
} else {
var vec__12844_14064 = cljs.core.first(seq__12817_14058__$1);
var k_14065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12844_14064,(0),null);
var v_14066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12844_14064,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_14065);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_14065),v_14066);


var G__14070 = cljs.core.next(seq__12817_14058__$1);
var G__14071 = null;
var G__14072 = (0);
var G__14073 = (0);
seq__12817_14043 = G__14070;
chunk__12818_14044 = G__14071;
count__12819_14045 = G__14072;
i__12820_14046 = G__14073;
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
var vec__12852 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12852,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12852,(1),null);
var seq__12856_14080 = cljs.core.seq(node_children);
var chunk__12858_14081 = null;
var count__12859_14082 = (0);
var i__12860_14083 = (0);
while(true){
if((i__12860_14083 < count__12859_14082)){
var child_struct_14084 = chunk__12858_14081.cljs$core$IIndexed$_nth$arity$2(null,i__12860_14083);
if((!((child_struct_14084 == null)))){
if(typeof child_struct_14084 === 'string'){
var text_14085 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_14085)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_14084)));
} else {
var children_14091 = shadow.dom.svg_node(child_struct_14084);
if(cljs.core.seq_QMARK_(children_14091)){
var seq__12906_14092 = cljs.core.seq(children_14091);
var chunk__12908_14093 = null;
var count__12909_14094 = (0);
var i__12910_14095 = (0);
while(true){
if((i__12910_14095 < count__12909_14094)){
var child_14097 = chunk__12908_14093.cljs$core$IIndexed$_nth$arity$2(null,i__12910_14095);
if(cljs.core.truth_(child_14097)){
node.appendChild(child_14097);


var G__14098 = seq__12906_14092;
var G__14099 = chunk__12908_14093;
var G__14100 = count__12909_14094;
var G__14101 = (i__12910_14095 + (1));
seq__12906_14092 = G__14098;
chunk__12908_14093 = G__14099;
count__12909_14094 = G__14100;
i__12910_14095 = G__14101;
continue;
} else {
var G__14102 = seq__12906_14092;
var G__14103 = chunk__12908_14093;
var G__14104 = count__12909_14094;
var G__14105 = (i__12910_14095 + (1));
seq__12906_14092 = G__14102;
chunk__12908_14093 = G__14103;
count__12909_14094 = G__14104;
i__12910_14095 = G__14105;
continue;
}
} else {
var temp__5823__auto___14106 = cljs.core.seq(seq__12906_14092);
if(temp__5823__auto___14106){
var seq__12906_14107__$1 = temp__5823__auto___14106;
if(cljs.core.chunked_seq_QMARK_(seq__12906_14107__$1)){
var c__5673__auto___14108 = cljs.core.chunk_first(seq__12906_14107__$1);
var G__14110 = cljs.core.chunk_rest(seq__12906_14107__$1);
var G__14111 = c__5673__auto___14108;
var G__14112 = cljs.core.count(c__5673__auto___14108);
var G__14113 = (0);
seq__12906_14092 = G__14110;
chunk__12908_14093 = G__14111;
count__12909_14094 = G__14112;
i__12910_14095 = G__14113;
continue;
} else {
var child_14114 = cljs.core.first(seq__12906_14107__$1);
if(cljs.core.truth_(child_14114)){
node.appendChild(child_14114);


var G__14115 = cljs.core.next(seq__12906_14107__$1);
var G__14116 = null;
var G__14117 = (0);
var G__14118 = (0);
seq__12906_14092 = G__14115;
chunk__12908_14093 = G__14116;
count__12909_14094 = G__14117;
i__12910_14095 = G__14118;
continue;
} else {
var G__14119 = cljs.core.next(seq__12906_14107__$1);
var G__14120 = null;
var G__14121 = (0);
var G__14122 = (0);
seq__12906_14092 = G__14119;
chunk__12908_14093 = G__14120;
count__12909_14094 = G__14121;
i__12910_14095 = G__14122;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_14091);
}
}


var G__14124 = seq__12856_14080;
var G__14125 = chunk__12858_14081;
var G__14126 = count__12859_14082;
var G__14127 = (i__12860_14083 + (1));
seq__12856_14080 = G__14124;
chunk__12858_14081 = G__14125;
count__12859_14082 = G__14126;
i__12860_14083 = G__14127;
continue;
} else {
var G__14128 = seq__12856_14080;
var G__14129 = chunk__12858_14081;
var G__14130 = count__12859_14082;
var G__14131 = (i__12860_14083 + (1));
seq__12856_14080 = G__14128;
chunk__12858_14081 = G__14129;
count__12859_14082 = G__14130;
i__12860_14083 = G__14131;
continue;
}
} else {
var temp__5823__auto___14132 = cljs.core.seq(seq__12856_14080);
if(temp__5823__auto___14132){
var seq__12856_14134__$1 = temp__5823__auto___14132;
if(cljs.core.chunked_seq_QMARK_(seq__12856_14134__$1)){
var c__5673__auto___14135 = cljs.core.chunk_first(seq__12856_14134__$1);
var G__14137 = cljs.core.chunk_rest(seq__12856_14134__$1);
var G__14138 = c__5673__auto___14135;
var G__14139 = cljs.core.count(c__5673__auto___14135);
var G__14140 = (0);
seq__12856_14080 = G__14137;
chunk__12858_14081 = G__14138;
count__12859_14082 = G__14139;
i__12860_14083 = G__14140;
continue;
} else {
var child_struct_14141 = cljs.core.first(seq__12856_14134__$1);
if((!((child_struct_14141 == null)))){
if(typeof child_struct_14141 === 'string'){
var text_14143 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_14143)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_14141)));
} else {
var children_14144 = shadow.dom.svg_node(child_struct_14141);
if(cljs.core.seq_QMARK_(children_14144)){
var seq__12925_14145 = cljs.core.seq(children_14144);
var chunk__12927_14146 = null;
var count__12928_14147 = (0);
var i__12929_14148 = (0);
while(true){
if((i__12929_14148 < count__12928_14147)){
var child_14150 = chunk__12927_14146.cljs$core$IIndexed$_nth$arity$2(null,i__12929_14148);
if(cljs.core.truth_(child_14150)){
node.appendChild(child_14150);


var G__14151 = seq__12925_14145;
var G__14152 = chunk__12927_14146;
var G__14153 = count__12928_14147;
var G__14154 = (i__12929_14148 + (1));
seq__12925_14145 = G__14151;
chunk__12927_14146 = G__14152;
count__12928_14147 = G__14153;
i__12929_14148 = G__14154;
continue;
} else {
var G__14155 = seq__12925_14145;
var G__14156 = chunk__12927_14146;
var G__14157 = count__12928_14147;
var G__14158 = (i__12929_14148 + (1));
seq__12925_14145 = G__14155;
chunk__12927_14146 = G__14156;
count__12928_14147 = G__14157;
i__12929_14148 = G__14158;
continue;
}
} else {
var temp__5823__auto___14159__$1 = cljs.core.seq(seq__12925_14145);
if(temp__5823__auto___14159__$1){
var seq__12925_14160__$1 = temp__5823__auto___14159__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12925_14160__$1)){
var c__5673__auto___14161 = cljs.core.chunk_first(seq__12925_14160__$1);
var G__14166 = cljs.core.chunk_rest(seq__12925_14160__$1);
var G__14167 = c__5673__auto___14161;
var G__14168 = cljs.core.count(c__5673__auto___14161);
var G__14169 = (0);
seq__12925_14145 = G__14166;
chunk__12927_14146 = G__14167;
count__12928_14147 = G__14168;
i__12929_14148 = G__14169;
continue;
} else {
var child_14170 = cljs.core.first(seq__12925_14160__$1);
if(cljs.core.truth_(child_14170)){
node.appendChild(child_14170);


var G__14171 = cljs.core.next(seq__12925_14160__$1);
var G__14172 = null;
var G__14173 = (0);
var G__14174 = (0);
seq__12925_14145 = G__14171;
chunk__12927_14146 = G__14172;
count__12928_14147 = G__14173;
i__12929_14148 = G__14174;
continue;
} else {
var G__14175 = cljs.core.next(seq__12925_14160__$1);
var G__14176 = null;
var G__14177 = (0);
var G__14178 = (0);
seq__12925_14145 = G__14175;
chunk__12927_14146 = G__14176;
count__12928_14147 = G__14177;
i__12929_14148 = G__14178;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_14144);
}
}


var G__14179 = cljs.core.next(seq__12856_14134__$1);
var G__14180 = null;
var G__14181 = (0);
var G__14182 = (0);
seq__12856_14080 = G__14179;
chunk__12858_14081 = G__14180;
count__12859_14082 = G__14181;
i__12860_14083 = G__14182;
continue;
} else {
var G__14183 = cljs.core.next(seq__12856_14134__$1);
var G__14184 = null;
var G__14185 = (0);
var G__14186 = (0);
seq__12856_14080 = G__14183;
chunk__12858_14081 = G__14184;
count__12859_14082 = G__14185;
i__12860_14083 = G__14186;
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
var len__5876__auto___14200 = arguments.length;
var i__5877__auto___14202 = (0);
while(true){
if((i__5877__auto___14202 < len__5876__auto___14200)){
args__5882__auto__.push((arguments[i__5877__auto___14202]));

var G__14206 = (i__5877__auto___14202 + (1));
i__5877__auto___14202 = G__14206;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12954){
var G__12955 = cljs.core.first(seq12954);
var seq12954__$1 = cljs.core.next(seq12954);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12955,seq12954__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
