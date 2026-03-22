goog.provide('replicant.core');
replicant.core.parse_tag = (function replicant$core$parse_tag(tag){
var ns = cljs.core.namespace(tag);
var tag__$1 = cljs.core.name(tag);
var id_index = (function (){var index = tag__$1.indexOf("#");
if((index > (0))){
return index;
} else {
return null;
}
})();
var class_index = (function (){var index = tag__$1.indexOf(".");
if((index > (0))){
return index;
} else {
return null;
}
})();
var tag_name = (function (){var G__22281 = (cljs.core.truth_(id_index)?tag__$1.substring((0),id_index):(cljs.core.truth_(class_index)?tag__$1.substring((0),class_index):tag__$1
));
if(cljs.core.truth_(ns)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,G__22281);
} else {
return G__22281;
}
})();
var id = (cljs.core.truth_(id_index)?(cljs.core.truth_(class_index)?tag__$1.substring((id_index + (1)),class_index):tag__$1.substring((id_index + (1)))):null);
var classes = (cljs.core.truth_(class_index)?cljs.core.seq(tag__$1.substring((class_index + (1))).split(".")):null);
return [tag_name,id,classes];
});
/**
 * Hiccup symbols can include tag name, id and classes. The argument map is
 *   optional. This function finds the important bits of the hiccup data structure
 *   and returns a "headers" tuple with a stable position for:
 * 
 *   - tag-name
 *   - id from the hiccup symbol
 *   - classes from the hiccup symbol
 *   - key
 *   - attributes
 *   - children
 *   - namespace
 *   - original s-expression
 * 
 *   Attributes and children are completely untouched. Headers can be used to
 *   quickly determine tag name and key, or sent to `get-attrs` and
 *   `get-children` for usable information about those things.
 * 
 *   Returns a tuple (instead of a map) for speed.
 * 
 *   - `sexp` is the hiccup to parse
 * 
 *   - `ns` is the namespace of the elements, used for SVG elements. The SVG
 *   element has an explicit namespace, which needs to be set on all of its
 *   children, so they can all be created with createElementNS etc.
 */
replicant.core.get_hiccup_headers = (function replicant$core$get_hiccup_headers(ns,sexp){
if(cljs.core.truth_(sexp)){
if(replicant.hiccup.hiccup_QMARK_(sexp)){
var sym = cljs.core.first(sexp);
var args = cljs.core.rest(sexp);
var has_args_QMARK_ = cljs.core.map_QMARK_(cljs.core.first(args));
var attrs = ((has_args_QMARK_)?cljs.core.first(args):cljs.core.PersistentArrayMap.EMPTY);
if((!(cljs.core.not(cljs.core.re_find(/#($|\.)/,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym))))))){
var fn__22105__auto___22493 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__22106__auto___22494 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__22107__auto___22495 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__22282 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = sexp;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Hiccup tag "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)+" contains an empty id"),new cljs.core.Keyword(null,"message","message",-406056002),"Either complete the id or remove the # character."], null);
var G__22282__$1 = (cljs.core.truth_(fn__22105__auto___22493)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22282,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__22105__auto___22493):G__22282);
var G__22282__$2 = (cljs.core.truth_(alias__22106__auto___22494)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22282__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__22106__auto___22494):G__22282__$1);
if(cljs.core.truth_(fd__22107__auto___22495)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22282__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__22107__auto___22495);
} else {
return G__22282__$2;
}
})());
} else {
}

if((!(cljs.core.not(cljs.core.re_find(/#[^a-zA-Z_\.]/,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym))))))){
var fn__22105__auto___22496 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__22106__auto___22497 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__22107__auto___22498 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__22283 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = sexp;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Hiccup tag "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)+" contains an invalid id"),new cljs.core.Keyword(null,"message","message",-406056002),"IDs must start with a letter."], null);
var G__22283__$1 = (cljs.core.truth_(fn__22105__auto___22496)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22283,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__22105__auto___22496):G__22283);
var G__22283__$2 = (cljs.core.truth_(alias__22106__auto___22497)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22283__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__22106__auto___22497):G__22283__$1);
if(cljs.core.truth_(fd__22107__auto___22498)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22283__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__22107__auto___22498);
} else {
return G__22283__$2;
}
})());
} else {
}

if((!(cljs.core.not(cljs.core.re_find(/\.$/,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym))))))){
var fn__22105__auto___22499 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__22106__auto___22500 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__22107__auto___22501 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__22284 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = sexp;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Hiccup tag "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)+" contains an empty class"),new cljs.core.Keyword(null,"message","message",-406056002),"This may cause a DOMException and is considered a coding error. Replicant will not sacrifice performance to work around it."], null);
var G__22284__$1 = (cljs.core.truth_(fn__22105__auto___22499)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22284,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__22105__auto___22499):G__22284);
var G__22284__$2 = (cljs.core.truth_(alias__22106__auto___22500)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22284__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__22106__auto___22500):G__22284__$1);
if(cljs.core.truth_(fd__22107__auto___22501)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22284__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__22107__auto___22501);
} else {
return G__22284__$2;
}
})());
} else {
}

var pt__21819__auto__ = replicant.core.parse_tag(sym);
var G__22285 = pt__21819__auto__;
G__22285.push((function (){var temp__5823__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5823__auto__)){
var k__21813__auto__ = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt__21819__auto__[(0)]),k__21813__auto__], null);
} else {
return null;
}
})());

G__22285.push(attrs);

G__22285.push(((has_args_QMARK_)?cljs.core.rest(args):args));

G__22285.push(ns);

G__22285.push(sexp);

G__22285.push(null);

G__22285.push(null);

return G__22285;
} else {
var text__21826__auto__ = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexp));
return (new Array(null,null,null,null,null,null,null,text__21826__auto__,text__21826__auto__,null));
}
} else {
return null;
}
});
replicant.core.get_classes = (function replicant$core$get_classes(classes){
if((classes instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(classes)], null);
} else {
if((classes instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(classes)], null);
} else {
if(cljs.core.empty_QMARK_(classes)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.coll_QMARK_(classes)){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (class$){
if(cljs.core.truth_(class$)){
if((class$ instanceof cljs.core.Keyword)){
return cljs.core.name(class$);
} else {
if((class$ instanceof cljs.core.Symbol)){
return cljs.core.name(class$);
} else {
if(typeof class$ === 'string'){
return cljs.core.not_empty(class$.trim());
} else {
return null;
}
}
}
} else {
return null;
}
}),classes);
} else {
if(typeof classes === 'string'){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__22286_SHARP_){
return cljs.core.not_empty(p1__22286_SHARP_.trim());
}),classes.split(" "));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("class name is neither string, keyword, or a collection of those",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null));

}
}
}
}
}
});
replicant.core.skip_pixelize_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 26, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),null,new cljs.core.Keyword(null,"box-flex-group","box-flex-group",-1468550335),null,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),null,new cljs.core.Keyword(null,"column-count","column-count",1235131236),null,new cljs.core.Keyword(null,"flex-negative","flex-negative",-1543996476),null,new cljs.core.Keyword(null,"tab-size","tab-size",-1265790523),null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),null,new cljs.core.Keyword(null,"flex-order","flex-order",-621251126),null,new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),null,new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),null,new cljs.core.Keyword(null,"flex","flex",-1425124628),null,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),null,new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729),null,new cljs.core.Keyword(null,"orphans","orphans",1913357231),null,new cljs.core.Keyword(null,"widows","widows",1989591025),null,new cljs.core.Keyword(null,"z-index","z-index",1892827090),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"box-ordinal-group","box-ordinal-group",201694774),null,new cljs.core.Keyword(null,"order","order",-1254677256),null,new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),null,new cljs.core.Keyword(null,"line-clamp","line-clamp",-1079334403),null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),null,new cljs.core.Keyword(null,"flex-positive","flex-positive",-239614242),null,new cljs.core.Keyword(null,"box-flex","box-flex",-831196194),null], null), null);
/**
 * Converts string values for the style attribute to a map of keyword keys and
 *   string values.
 */
replicant.core.explode_styles = (function replicant$core$explode_styles(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (kv){
var vec__22288 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22287_SHARP_){
return p1__22287_SHARP_.trim();
}),kv.split(":"));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22288,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22288,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null);
}),s.split(";")));
});
replicant.core.get_style_val = (function replicant$core$get_style_val(attr,v){
if(typeof v === 'number'){
if(cljs.core.truth_((replicant.core.skip_pixelize_attrs.cljs$core$IFn$_invoke$arity$1 ? replicant.core.skip_pixelize_attrs.cljs$core$IFn$_invoke$arity$1(attr) : replicant.core.skip_pixelize_attrs.call(null,attr)))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+"px");
}
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.name(v);
} else {
return v;

}
}
});
replicant.core.prep_attrs = (function replicant$core$prep_attrs(attrs,id,classes){
var classes__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(replicant.core.get_classes(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs)),classes);
var G__22291 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009)], 0));
var G__22291__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22291,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__22291);
var G__22291__$2 = ((cljs.core.seq(classes__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22291__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),classes__$1):G__22291__$1);
if(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs) === 'string'){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__22291__$2,new cljs.core.Keyword(null,"style","style",-496642736),replicant.core.explode_styles);
} else {
return G__22291__$2;
}
});
/**
 * Given `headers` as produced by `get-hiccup-headers`, returns a map of all HTML
 *   attributes.
 */
replicant.core.get_attrs = (function replicant$core$get_attrs(headers){
if((!((!(cljs.core.contains_QMARK_((headers[(4)]),new cljs.core.Keyword(null,"className","className",-1983287057))))))){
var fn__22105__auto___22502 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__22106__auto___22503 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__22107__auto___22504 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__22292 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Use :class, not :className",new cljs.core.Keyword(null,"message","message",-406056002),":className is not supported, please use :class instead. It takes a keyword, a string, or a collection of either of those."], null);
var G__22292__$1 = (cljs.core.truth_(fn__22105__auto___22502)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22292,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__22105__auto___22502):G__22292);
var G__22292__$2 = (cljs.core.truth_(alias__22106__auto___22503)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22292__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__22106__auto___22503):G__22292__$1);
if(cljs.core.truth_(fd__22107__auto___22504)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22292__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__22107__auto___22504);
} else {
return G__22292__$2;
}
})());
} else {
}

if((!((function (){var class__22167__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return (((!(typeof class__22167__auto__ === 'string'))) || ((class__22167__auto__.indexOf(" ") < (0))));
})()))){
var fn__22105__auto___22505 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__22106__auto___22506 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__22107__auto___22507 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__22293 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid space separated :class strings",new cljs.core.Keyword(null,"message","message",-406056002),(function (){var class__22167__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return (""+":class supports collections of keywords and/or strings as classes. These perform better, and are usually more convenient to work with. Solve by converting "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class__22167__auto__], 0)))+" to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(class__22167__auto__.split(" "))], 0))));
})()], null);
var G__22293__$1 = (cljs.core.truth_(fn__22105__auto___22505)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22293,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__22105__auto___22505):G__22293);
var G__22293__$2 = (cljs.core.truth_(alias__22106__auto___22506)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22293__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__22106__auto___22506):G__22293__$1);
if(cljs.core.truth_(fd__22107__auto___22507)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22293__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__22107__auto___22507);
} else {
return G__22293__$2;
}
})());
} else {
}

if((!((!(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1((headers[(4)])) === 'string'))))){
var fn__22105__auto___22508 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__22106__auto___22509 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__22107__auto___22510 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__22294 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid string styles",new cljs.core.Keyword(null,"message","message",-406056002),":style supports structured maps of CSS property/value pairs. Strings must be parsed, so they're both slower and harder to read and write."], null);
var G__22294__$1 = (cljs.core.truth_(fn__22105__auto___22508)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22294,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__22105__auto___22508):G__22294);
var G__22294__$2 = (cljs.core.truth_(alias__22106__auto___22509)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22294__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__22106__auto___22509):G__22294__$1);
if(cljs.core.truth_(fd__22107__auto___22510)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22294__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__22107__auto___22510);
} else {
return G__22294__$2;
}
})());
} else {
}

return replicant.core.prep_attrs((headers[(4)]),(headers[(1)]),(headers[(2)]));
});
replicant.core.merge_attrs = (function replicant$core$merge_attrs(attrs,overrides){
var G__22295 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(overrides,new cljs.core.Keyword(null,"style","style",-496642736))], 0));
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides);
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__22295,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides));
} else {
return G__22295;
}
});
replicant.core.get_mounting_attrs = (function replicant$core$get_mounting_attrs(headers){
var temp__5821__auto__ = new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(temp__5821__auto__)){
var mounting = temp__5821__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs(headers),(function (){var headers__$1 = (function (){var G__22296 = headers;
if(cljs.core.truth_(mounting)){
var headers__21833__auto__ = G__22296;
(headers__21833__auto__[(4)] = replicant.core.merge_attrs((headers__21833__auto__[(4)]),mounting));

return headers__21833__auto__;
} else {
return G__22296;
}
})();
return replicant.core.prep_attrs((headers__$1[(4)]),(headers__$1[(1)]),(headers__$1[(2)]));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs(headers)], null);
}
});
replicant.core.get_unmounting_attrs = (function replicant$core$get_unmounting_attrs(vdom){
if(cljs.core.truth_((vdom[(6)]))){
return replicant.core.prep_attrs(replicant.core.merge_attrs((vdom[(3)]),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2((vdom[(7)]),(1)))),null,(vdom[(2)]));
} else {
return null;
}
});
replicant.core.flatten_seqs_STAR_ = (function replicant$core$flatten_seqs_STAR_(xs,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.seq_QMARK_(x)){
return (replicant.core.flatten_seqs_STAR_.cljs$core$IFn$_invoke$arity$2 ? replicant.core.flatten_seqs_STAR_.cljs$core$IFn$_invoke$arity$2(x,coll) : replicant.core.flatten_seqs_STAR_.call(null,x,coll));
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(coll,x);

}
}),null,xs);
});
replicant.core.flatten_seqs = (function replicant$core$flatten_seqs(xs){
var coll = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
replicant.core.flatten_seqs_STAR_(xs,coll);

return cljs.core.persistent_BANG_(coll);
});
replicant.core.flatten_map_seqs_STAR_ = (function replicant$core$flatten_map_seqs_STAR_(f,xs,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.seq_QMARK_(x)){
return (replicant.core.flatten_map_seqs_STAR_.cljs$core$IFn$_invoke$arity$3 ? replicant.core.flatten_map_seqs_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,coll) : replicant.core.flatten_map_seqs_STAR_.call(null,f,x,coll));
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(coll,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));

}
}),null,xs);
});
replicant.core.flatten_map_seqs = (function replicant$core$flatten_map_seqs(f,xs){
var coll = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
replicant.core.flatten_map_seqs_STAR_(f,xs,coll);

return cljs.core.persistent_BANG_(coll);
});
/**
 * Given an optional tag namespace `ns` (e.g. for SVG nodes) and `headers`, as
 *   produced by `get-hiccup-headers`, returns a flat collection of children as
 *   "hiccup headers". Children will carry the `ns`, if any.
 */
replicant.core.get_children = (function replicant$core$get_children(headers,ns){
if(cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers[(4)])))){
return null;
} else {
return replicant.core.flatten_map_seqs((function (p1__22297_SHARP_){
var G__22298 = p1__22297_SHARP_;
if((G__22298 == null)){
return null;
} else {
return replicant.core.get_hiccup_headers(ns,G__22298);
}
}),(headers[(5)]));
}
});
/**
 * Like `get-children` but returns a tuple of `[children ks]` where `ks` is a set
 *   of the keys in `children`.
 */
replicant.core.get_children_ks = (function replicant$core$get_children_ks(headers,ns){
var vec__22299 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__22302,hiccup){
var vec__22303 = p__22302;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22303,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22303,(1),null);
if(cljs.core.truth_(hiccup)){
var headers__$1 = replicant.core.get_hiccup_headers(ns,hiccup);
var k = (headers__$1[(3)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,headers__$1),(function (){var G__22306 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__22306,k);
} else {
return G__22306;
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,null),ks], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY)], null),replicant.core.flatten_seqs((headers[(5)])));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22299,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22299,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(children),cljs.core.persistent_BANG_(ks)], null);
});
replicant.core._STAR_dispatch_STAR_ = null;
/**
 * Returns the function to use for handling DOM events. Uses `handler` directly
 *   when it's a function or a string (assumed to be inline JavaScript, not really
 *   recommended), or a wrapper that dispatches through
 *   `replicant.core/*dispatch*`, if it is bound to a function. 
 */
replicant.core.get_event_handler = (function replicant$core$get_event_handler(handler,event){
var or__5142__auto__ = ((((cljs.core.fn_QMARK_(handler)) || (((cljs.core.var_QMARK_(handler)) && (cljs.core.fn_QMARK_(cljs.core.deref(handler)))))))?handler:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = ((cljs.core.ifn_QMARK_(replicant.core._STAR_dispatch_STAR_))?(function (e){
var node = e.target;
var rd = (function (){var G__22307 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","dom-event","replicant.trigger/dom-event",930136738),new cljs.core.Keyword("replicant","js-event","replicant/js-event",1927942146),e,new cljs.core.Keyword("replicant","dom-event","replicant/dom-event",-1613182512),e], null);
if(cljs.core.truth_(node)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22307,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node);
} else {
return G__22307;
}
})();
return replicant.core._STAR_dispatch_STAR_.call(null,rd,handler);
}):null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = ((typeof handler === 'string')?handler:null);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot use non-function event handler when replicant.core/*dispatch* is not bound to a function",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),replicant.core._STAR_dispatch_STAR_], null));
}
}
}
});
/**
 * Returns the function to use to dispatch life-cycle hooks on an element. Uses
 *   `handler` directly when it's a function, or a wrapper that dispatches through
 *   `replicant.core/*dispatch*`, if it is bound to a function.
 */
replicant.core.get_life_cycle_hook = (function replicant$core$get_life_cycle_hook(handler){
var or__5142__auto__ = ((cljs.core.fn_QMARK_(handler))?handler:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (cljs.core.truth_((function (){var and__5140__auto__ = handler;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.ifn_QMARK_(replicant.core._STAR_dispatch_STAR_);
} else {
return and__5140__auto__;
}
})())?(function (e){
return replicant.core._STAR_dispatch_STAR_.call(null,e,handler);
}):null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
if(cljs.core.truth_(handler)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot use non-function life-cycle hook when replicant.core/*dispatch* is not bound to a function",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),replicant.core._STAR_dispatch_STAR_], null));
} else {
return null;
}
}
}
});
replicant.core.call_hook = (function replicant$core$call_hook(renderer,p__22308){
var vec__22309 = p__22308;
var hook = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22309,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22309,(1),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22309,(2),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22309,(3),null);
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22309,(4),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22309,(5),null);
var f = replicant.core.get_life_cycle_hook(hook);
var life_cycle = (((old == null))?new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865):(((new$ == null))?new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184):new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235)
));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),k)) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865))))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235))))))))))){
var G__22312 = (function (){var G__22313 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","life-cycle","replicant.trigger/life-cycle",-205660972),new cljs.core.Keyword("replicant","life-cycle","replicant/life-cycle",1802888458),life_cycle,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node,new cljs.core.Keyword("replicant","remember","replicant/remember",809947829),(function replicant$core$call_hook_$_remember(memory){
return replicant.protocols.remember(renderer,node,memory);
})], null);
var G__22313__$1 = (cljs.core.truth_(details)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22313,new cljs.core.Keyword("replicant","details","replicant/details",-1846218867),details):G__22313);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22313__$1,new cljs.core.Keyword("replicant","memory","replicant/memory",-1882688464),replicant.protocols.recall(renderer,node));
} else {
return G__22313__$1;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22312) : f.call(null,G__22312));
} else {
return null;
}
});
/**
 * Register the life-cycle hooks from the corresponding virtual DOM node to call
 *   in `impl`, if any. `details` is a vector of keywords that provide some detail
 *   about why the hook is invoked.
 */
replicant.core.register_hooks = (function replicant$core$register_hooks(var_args){
var args__5882__auto__ = [];
var len__5876__auto___22517 = arguments.length;
var i__5877__auto___22518 = (0);
while(true){
if((i__5877__auto___22518 < len__5876__auto___22517)){
args__5882__auto__.push((arguments[i__5877__auto___22518]));

var G__22519 = (i__5877__auto___22518 + (1));
i__5877__auto___22518 = G__22519;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (p__22318,node,headers,p__22319){
var map__22320 = p__22318;
var map__22320__$1 = cljs.core.__destructure_map(map__22320);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22320__$1,new cljs.core.Keyword(null,"hooks","hooks",-413590103));
var vec__22321 = p__22319;
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22321,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22321,(1),null);
var target = (cljs.core.truth_(headers)?(headers[(4)]):(vdom[(3)]));
var new_hooks = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (life_cycle_key){
var temp__5823__auto__ = (life_cycle_key.cljs$core$IFn$_invoke$arity$1 ? life_cycle_key.cljs$core$IFn$_invoke$arity$1(target) : life_cycle_key.call(null,target));
if(cljs.core.truth_(temp__5823__auto__)){
var hook = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [life_cycle_key,hook], null);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753),new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394)], null));
if(cljs.core.empty_QMARK_(new_hooks)){
return null;
} else {
var headers_sexp = (function (){var G__22324 = headers;
if((G__22324 == null)){
return null;
} else {
return (G__22324[(7)]);
}
})();
var vdom_sexp = (function (){var G__22325 = vdom;
if((G__22325 == null)){
return null;
} else {
return (G__22325[(7)]);
}
})();
return cljs.core._vreset_BANG_(hooks,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(hooks),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22326){
var vec__22327 = p__22326;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22327,(0),null);
var hook = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22327,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook,k,node,headers_sexp,vdom_sexp,details], null);
}),new_hooks)));
}
}));

(replicant.core.register_hooks.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.register_hooks.cljs$lang$applyTo = (function (seq22314){
var G__22315 = cljs.core.first(seq22314);
var seq22314__$1 = cljs.core.next(seq22314);
var G__22316 = cljs.core.first(seq22314__$1);
var seq22314__$2 = cljs.core.next(seq22314__$1);
var G__22317 = cljs.core.first(seq22314__$2);
var seq22314__$3 = cljs.core.next(seq22314__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22315,G__22316,G__22317,seq22314__$3);
}));

replicant.core.register_mount = (function replicant$core$register_mount(p__22330,node,mounting_attrs,attrs){
var map__22331 = p__22330;
var map__22331__$1 = cljs.core.__destructure_map(map__22331);
var mounts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22331__$1,new cljs.core.Keyword(null,"mounts","mounts",-791474425));
return cljs.core._vreset_BANG_(mounts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(mounts),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,mounting_attrs,attrs], null)));
});
replicant.core.update_styles = (function replicant$core$update_styles(renderer,el,new_styles,old_styles){
var new_ks = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22332_SHARP_){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__22332_SHARP_) == null);
}),cljs.core.keys(new_styles)));
var old_ks = cljs.core.set(cljs.core.keys(old_styles));
cljs.core.run_BANG_((function (p1__22333_SHARP_){
return replicant.protocols.remove_style(renderer,el,p1__22333_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new_ks,old_ks));

return cljs.core.run_BANG_((function (p1__22334_SHARP_){
var new_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__22334_SHARP_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_style,cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_styles,p1__22334_SHARP_))){
if((!((p1__22334_SHARP_ instanceof cljs.core.Keyword)))){
var fn__22105__auto___22524 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__22106__auto___22525 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__22107__auto___22526 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__22335 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Style key "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22334_SHARP_)+" should be a keyword"),new cljs.core.Keyword(null,"message","message",-406056002),(""+"Replicant expects your style keys to be keywords. While anything that supports `name` (strings, symbols) will "+"technically work, mixing types will hinder Replicant from recognizing changes properly. Rendering once with "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22334_SHARP_)))+" and once with "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22334_SHARP_))))+" may produce undesired results. Your safest option is to always use keywords.")], null);
var G__22335__$1 = (cljs.core.truth_(fn__22105__auto___22524)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22335,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__22105__auto___22524):G__22335);
var G__22335__$2 = (cljs.core.truth_(alias__22106__auto___22525)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22335__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__22106__auto___22525):G__22335__$1);
if(cljs.core.truth_(fd__22107__auto___22526)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22335__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__22107__auto___22526);
} else {
return G__22335__$2;
}
})());
} else {
}

if((!((function (){var name__22206__auto__ = cljs.core.name(p1__22334_SHARP_);
return ((clojure.string.starts_with_QMARK_(name__22206__auto__,"--")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__22206__auto__,clojure.string.lower_case(name__22206__auto__))));
})()))){
var fn__22105__auto___22531 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__22106__auto___22532 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__22107__auto___22533 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__22336 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Use "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k(p1__22334_SHARP_))+", not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22334_SHARP_)),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__22336__$1 = (cljs.core.truth_(fn__22105__auto___22531)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22336,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__22105__auto___22531):G__22336);
var G__22336__$2 = (cljs.core.truth_(alias__22106__auto___22532)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22336__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__22106__auto___22532):G__22336__$1);
if(cljs.core.truth_(fd__22107__auto___22533)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22336__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__22107__auto___22533);
} else {
return G__22336__$2;
}
})());
} else {
}

return replicant.protocols.set_style(renderer,el,p1__22334_SHARP_,replicant.core.get_style_val(p1__22334_SHARP_,new_style));
} else {
return null;
}
}),new_ks);
});
replicant.core.update_classes = (function replicant$core$update_classes(renderer,el,new_classes,old_classes){
cljs.core.run_BANG_((function (p1__22337_SHARP_){
return replicant.protocols.remove_class(renderer,el,p1__22337_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new_classes),old_classes));

return cljs.core.run_BANG_((function (p1__22338_SHARP_){
return replicant.protocols.add_class(renderer,el,p1__22338_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(old_classes),new_classes));
});
replicant.core.get_event_handler_options = (function replicant$core$get_event_handler_options(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,k){
var G__22339 = res;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("replicant.event",cljs.core.namespace(k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22339,cljs.core.name(k),(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(m) : k.call(null,m)));
} else {
return G__22339;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006))));
});
replicant.core.add_event_listeners = (function replicant$core$add_event_listeners(renderer,el,val){
return cljs.core.run_BANG_((function (p__22340){
var vec__22341 = p__22340;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22341,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22341,(1),null);
if((!((function (){var event__22178__auto__ = cljs.core.name(event);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("DOMContentLoaded",event__22178__auto__)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event__22178__auto__,clojure.string.lower_case(event__22178__auto__))));
})()))){
var fn__22105__auto___22540 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__22106__auto___22541 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__22107__auto___22542 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__22344 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Use "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.name(event))))+", not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)),new cljs.core.Keyword(null,"message","message",-406056002),(""+"Most event names should be in all lower-case. Replicant passes your event names directly to addEventListener, and mis-cased event names will fail silently.")], null);
var G__22344__$1 = (cljs.core.truth_(fn__22105__auto___22540)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22344,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__22105__auto___22540):G__22344);
var G__22344__$2 = (cljs.core.truth_(alias__22106__auto___22541)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22344__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__22106__auto___22541):G__22344__$1);
if(cljs.core.truth_(fd__22107__auto___22542)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22344__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__22107__auto___22542);
} else {
return G__22344__$2;
}
})());
} else {
}

var temp__5821__auto__ = new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006).cljs$core$IFn$_invoke$arity$1(handler);
if(cljs.core.truth_(temp__5821__auto__)){
var eh = temp__5821__auto__;
var temp__5823__auto__ = replicant.core.get_event_handler(eh,event);
if(cljs.core.truth_(temp__5823__auto__)){
var eh__$1 = temp__5823__auto__;
return replicant.protocols.set_event_handler(renderer,el,event,eh__$1,replicant.core.get_event_handler_options(handler));
} else {
return null;
}
} else {
var temp__5823__auto__ = replicant.core.get_event_handler(handler,event);
if(cljs.core.truth_(temp__5823__auto__)){
var handler__$1 = temp__5823__auto__;
return replicant.protocols.set_event_handler(renderer,el,event,handler__$1,null);
} else {
return null;
}
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),val));
});
replicant.core.update_event_listeners = (function replicant$core$update_event_listeners(renderer,el,new_handlers,old_handlers){
return cljs.core.run_BANG_((function (event){
var new_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_handlers,event);
var old_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_handlers,event);
var old_opts = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_handler,new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006)))?cljs.core.not_empty(replicant.core.get_event_handler_options(old_handler)):null);
var new_opts = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_handler,new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006)))?cljs.core.not_empty(replicant.core.get_event_handler_options(new_handler)):null);
if(cljs.core.truth_((function (){var and__5140__auto__ = old_handler;
if(cljs.core.truth_(and__5140__auto__)){
return (((new_handler == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_opts,new_opts)));
} else {
return and__5140__auto__;
}
})())){
replicant.protocols.remove_event_handler(renderer,el,event,old_opts);
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = new_handler;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_handler,old_handler);
} else {
return and__5140__auto__;
}
})())){
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_handler,new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006));
if(cljs.core.truth_(temp__5821__auto__)){
var handler = temp__5821__auto__;
return replicant.protocols.set_event_handler(renderer,el,event,replicant.core.get_event_handler(handler,event),new_opts);
} else {
return replicant.protocols.set_event_handler(renderer,el,event,replicant.core.get_event_handler(new_handler,event),null);
}
} else {
return null;
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_handlers)),cljs.core.keys(old_handlers)));
});
replicant.core.xlinkns = "http://www.w3.org/1999/xlink";
replicant.core.xmlns = "http://www.w3.org/XML/1998/namespace";
replicant.core.stringify = (function replicant$core$stringify(x){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5823__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(x)));
});
replicant.core.set_attr_val = (function replicant$core$set_attr_val(renderer,el,attr,v){
var an = cljs.core.name(attr);
if((!((!(clojure.string.starts_with_QMARK_(cljs.core.name(attr),"on")))))){
var fn__22105__auto___22585 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__22106__auto___22586 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__22107__auto___22588 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__22345 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Set event listeners in the :on map",new cljs.core.Keyword(null,"message","message",-406056002),(""+"Event handler attributes are not supported. Instead of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+" set :on {"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash(cljs.core.name(attr).substring((2)))))+" ,,,}")], null);
var G__22345__$1 = (cljs.core.truth_(fn__22105__auto___22585)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22345,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__22105__auto___22585):G__22345);
var G__22345__$2 = (cljs.core.truth_(alias__22106__auto___22586)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22345__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__22106__auto___22586):G__22345__$1);
if(cljs.core.truth_(fd__22107__auto___22588)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22345__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__22107__auto___22588);
} else {
return G__22345__$2;
}
})());
} else {
}

if(cljs.core.not(cljs.core.re_find(/^[a-zA-Z\-:_][a-zA-Z0-9\-:\._]*$/,cljs.core.name(attr)))){
var fn__22105__auto___22590 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__22106__auto___22591 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__22107__auto___22592 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__22346 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Invalid attribute name "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr))),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var attr__22217__auto__ = cljs.core.name(attr);
return (""+"Tried to set attribute "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr__22217__auto__)+" to value "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+". This will fail"+"horribly in the browser because "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find(/^[0-9]/,attr__22217__auto__))?" it starts with a number":(cljs.core.truth_(cljs.core.re_find(/^\./,attr__22217__auto__))?" it starts with a dot":(""+" it contains the character "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/[^a-zA-Z0-9\-:\._]/,attr__22217__auto__)))
)))+", which isn't allowed as per the HTML spec.");
})()], null);
var G__22346__$1 = (cljs.core.truth_(fn__22105__auto___22590)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22346,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__22105__auto___22590):G__22346);
var G__22346__$2 = (cljs.core.truth_(alias__22106__auto___22591)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22346__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__22106__auto___22591):G__22346__$1);
if(cljs.core.truth_(fd__22107__auto___22592)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22346__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__22107__auto___22592);
} else {
return G__22346__$2;
}
})());
} else {
}

return replicant.protocols.set_attribute(renderer,el,an,(function (){var G__22347 = v;
if((((v instanceof cljs.core.Keyword)) || ((v instanceof cljs.core.Symbol)))){
return replicant.core.stringify(G__22347);
} else {
return G__22347;
}
})(),(function (){var G__22348 = cljs.core.PersistentArrayMap.EMPTY;
var G__22348__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),an.indexOf("xml:")))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22348,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xmlns):G__22348);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),an.indexOf("xlink:"))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22348__$1,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xlinkns);
} else {
return G__22348__$1;
}
})());
});
replicant.core.update_attr = (function replicant$core$update_attr(renderer,el,attr,new$,old){
if(cljs.core.truth_(cljs.core.namespace(attr))){
return null;
} else {
var G__22349 = attr;
var G__22349__$1 = (((G__22349 instanceof cljs.core.Keyword))?G__22349.fqn:null);
switch (G__22349__$1) {
case "style":
return replicant.core.update_styles(renderer,el,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(old));

break;
case "classes":
return replicant.core.update_classes(renderer,el,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(old));

break;
case "on":
return replicant.core.update_event_listeners(renderer,el,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(old));

break;
default:
var temp__5821__auto__ = (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(new$) : attr.call(null,new$));
if(cljs.core.truth_(temp__5821__auto__)){
var v = temp__5821__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,(attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(old) : attr.call(null,old)))){
return replicant.core.set_attr_val(renderer,el,attr,v);
} else {
return null;
}
} else {
return replicant.protocols.remove_attribute(renderer,el,cljs.core.name(attr));
}

}
}
});
replicant.core.update_attributes = (function replicant$core$update_attributes(renderer,el,new_attrs,old_attrs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__22351_SHARP_,p2__22350_SHARP_){
return replicant.core.update_attr(renderer,el,p2__22350_SHARP_,new_attrs,old_attrs);
}),null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_attrs)),cljs.core.keys(old_attrs)));
});
replicant.core.reconcile_attributes = (function replicant$core$reconcile_attributes(renderer,el,new_attrs,old_attrs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_attrs,old_attrs)){
return false;
} else {
replicant.core.update_attributes(renderer,el,new_attrs,old_attrs);

return true;
}
});
replicant.core.set_styles = (function replicant$core$set_styles(renderer,el,new_styles){
return cljs.core.run_BANG_((function (p1__22352_SHARP_){
if((!((p1__22352_SHARP_ instanceof cljs.core.Keyword)))){
var fn__22105__auto___22612 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__22106__auto___22613 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__22107__auto___22614 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__22353 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Style key "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22352_SHARP_)+" should be a keyword"),new cljs.core.Keyword(null,"message","message",-406056002),(""+"Replicant expects your style keys to be keywords. While anything that supports `name` (strings, symbols) will "+"technically work, mixing types will hinder Replicant from recognizing changes properly. Rendering once with "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22352_SHARP_)))+" and once with "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22352_SHARP_))))+" may produce undesired results. Your safest option is to always use keywords.")], null);
var G__22353__$1 = (cljs.core.truth_(fn__22105__auto___22612)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22353,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__22105__auto___22612):G__22353);
var G__22353__$2 = (cljs.core.truth_(alias__22106__auto___22613)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22353__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__22106__auto___22613):G__22353__$1);
if(cljs.core.truth_(fd__22107__auto___22614)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22353__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__22107__auto___22614);
} else {
return G__22353__$2;
}
})());
} else {
}

if((!((function (){var name__22206__auto__ = cljs.core.name(p1__22352_SHARP_);
return ((clojure.string.starts_with_QMARK_(name__22206__auto__,"--")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__22206__auto__,clojure.string.lower_case(name__22206__auto__))));
})()))){
var fn__22105__auto___22630 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__22106__auto___22631 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__22107__auto___22632 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__22354 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Use "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k(p1__22352_SHARP_))+", not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22352_SHARP_)),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__22354__$1 = (cljs.core.truth_(fn__22105__auto___22630)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22354,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__22105__auto___22630):G__22354);
var G__22354__$2 = (cljs.core.truth_(alias__22106__auto___22631)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22354__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__22106__auto___22631):G__22354__$1);
if(cljs.core.truth_(fd__22107__auto___22632)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22354__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__22107__auto___22632);
} else {
return G__22354__$2;
}
})());
} else {
}

return replicant.protocols.set_style(renderer,el,p1__22352_SHARP_,replicant.core.get_style_val(p1__22352_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__22352_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new_styles,cljs.core.keys(new_styles)));
});
replicant.core.set_classes = (function replicant$core$set_classes(renderer,el,new_classes){
return cljs.core.run_BANG_((function (p1__22355_SHARP_){
return replicant.protocols.add_class(renderer,el,p1__22355_SHARP_);
}),new_classes);
});
replicant.core.set_attr = (function replicant$core$set_attr(renderer,el,attr,new$){
if(cljs.core.truth_(cljs.core.namespace(attr))){
return null;
} else {
var G__22356 = attr;
var G__22356__$1 = (((G__22356 instanceof cljs.core.Keyword))?G__22356.fqn:null);
switch (G__22356__$1) {
case "style":
return replicant.core.set_styles(renderer,el,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new$));

break;
case "classes":
return replicant.core.set_classes(renderer,el,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(new$));

break;
case "on":
return replicant.core.add_event_listeners(renderer,el,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(new$));

break;
default:
return replicant.core.set_attr_val(renderer,el,attr,(attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(new$) : attr.call(null,new$)));

}
}
});
replicant.core.set_attributes = (function replicant$core$set_attributes(renderer,el,new_attrs){
return cljs.core.run_BANG_((function (p1__22357_SHARP_){
return replicant.core.set_attr(renderer,el,p1__22357_SHARP_,new_attrs);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new_attrs,cljs.core.keys(new_attrs)));
});
replicant.core.render_default_alias = (function replicant$core$render_default_alias(tag_name,_attrs,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-replicant-error","data-replicant-error",1583668098),(""+"Undefined alias "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name))], null),(function (){var iter__5628__auto__ = (function replicant$core$render_default_alias_$_iter__22358(s__22359){
return (new cljs.core.LazySeq(null,(function (){
var s__22359__$1 = s__22359;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__22359__$1);
if(temp__5823__auto__){
var s__22359__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22359__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__22359__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__22361 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__22360 = (0);
while(true){
if((i__22360 < size__5627__auto__)){
var child = cljs.core._nth(c__5626__auto__,i__22360);
cljs.core.chunk_append(b__22361,(function (){var G__22362 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.hiccup.hiccup_QMARK_(child)))))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__22362], 0));
} else {
return G__22362;
}
})());

var G__22666 = (i__22360 + (1));
i__22360 = G__22666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22361),replicant$core$render_default_alias_$_iter__22358(cljs.core.chunk_rest(s__22359__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22361),null);
}
} else {
var child = cljs.core.first(s__22359__$2);
return cljs.core.cons((function (){var G__22363 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.hiccup.hiccup_QMARK_(child)))))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__22363], 0));
} else {
return G__22363;
}
})(),replicant$core$render_default_alias_$_iter__22358(cljs.core.rest(s__22359__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(children);
})()], null);
});
replicant.core.add_classes = (function replicant$core$add_classes(class_attr,classes){
if(cljs.core.coll_QMARK_(class_attr)){
return cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(class_attr,classes));
} else {
if((class_attr == null)){
return cljs.core.set(classes);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(classes),class_attr);

}
}
});
replicant.core.get_alias_headers = (function replicant$core$get_alias_headers(p__22365,headers){
var map__22366 = p__22365;
var map__22366__$1 = cljs.core.__destructure_map(map__22366);
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22366__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22366__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var on_alias_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22366__$1,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043));
var tag_name = (headers[(0)]);
if((tag_name instanceof cljs.core.Keyword)){
var f = (function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(aliases,tag_name);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(replicant.core.render_default_alias,tag_name);
}
})();
var id = (headers[(1)]);
var classes = (headers[(2)]);
var attrs = (headers[(4)]);
var attrs__$1 = (function (){var G__22367 = attrs;
var G__22367__$1 = (cljs.core.truth_(id)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__22367,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__22364_SHARP_){
var or__5142__auto__ = p1__22364_SHARP_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return id;
}
})):G__22367);
var G__22367__$2 = (cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.seq(classes);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs);
}
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__22367__$1,new cljs.core.Keyword(null,"class","class",-2030961996),replicant.core.add_classes,classes):G__22367__$1);
if(cljs.core.truth_(alias_data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22367__$2,new cljs.core.Keyword("replicant","alias-data","replicant/alias-data",1929752572),alias_data);
} else {
return G__22367__$2;
}
})();
var children = cljs.core.seq(replicant.core.flatten_seqs((headers[(5)])));
if((!(cljs.core.fn_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(aliases,tag_name))))){
var fn__22105__auto___22693 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__22106__auto___22694 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__22107__auto___22695 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__22368 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Alias "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)+" isn't defined"),new cljs.core.Keyword(null,"message","message",-406056002),(""+"There's no available function to render this alias. Replicant will "+"render an empty element with data attributes in its place. Available "+"aliases are:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.keys(aliases))))], null);
var G__22368__$1 = (cljs.core.truth_(fn__22105__auto___22693)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22368,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__22105__auto___22693):G__22368);
var G__22368__$2 = (cljs.core.truth_(alias__22106__auto___22694)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22368__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__22106__auto___22694):G__22368__$1);
if(cljs.core.truth_(fd__22107__auto___22695)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22368__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__22107__auto___22695);
} else {
return G__22368__$2;
}
})());
} else {
}

var alias_hiccup = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(attrs__$1,children) : f.call(null,attrs__$1,children));
if((!(((typeof alias_hiccup === 'string') || (replicant.hiccup.hiccup_QMARK_(alias_hiccup)))))){
var fn__22105__auto___22715 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__22106__auto___22716 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__22107__auto___22717 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__22369 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Aliases must return valid hiccup"),new cljs.core.Keyword(null,"message","message",-406056002),(""+"Aliases must always represent a node in the document, and "+"cannot return "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((alias_hiccup == null))?"nil":((cljs.core.map_QMARK_(alias_hiccup))?"a map":((cljs.core.coll_QMARK_(alias_hiccup))?"multiple nodes":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([alias_hiccup], 0))
))))+". Please check the implementation of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)+".")], null);
var G__22369__$1 = (cljs.core.truth_(fn__22105__auto___22715)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22369,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__22105__auto___22715):G__22369);
var G__22369__$2 = (cljs.core.truth_(alias__22106__auto___22716)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22369__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__22106__auto___22716):G__22369__$1);
if(cljs.core.truth_(fd__22107__auto___22717)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22369__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__22107__auto___22717);
} else {
return G__22369__$2;
}
})());
} else {
}

var hh__21839__auto__ = replicant.core.get_hiccup_headers(null,alias_hiccup);
var alias__21840__auto__ = headers;
if(cljs.core.truth_(hh__21839__auto__)){
var G__22370 = hh__21839__auto__;
(G__22370[(3)] = (function (){var or__5142__auto__ = (alias__21840__auto__[(3)]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (hh__21839__auto__[(3)]);
}
})());

(G__22370[(7)] = (hh__21839__auto__[(7)]));

(G__22370[(9)] = (alias__21840__auto__[(7)]));

return G__22370;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Create DOM node according to virtual DOM in `headers`. Register relevant
 *   life-cycle hooks from the new node or its descendants in `impl`. Returns a
 *   tuple of the newly created node and the fully realized vdom.
 */
replicant.core.create_node = (function replicant$core$create_node(p__22371,headers){
var map__22372 = p__22371;
var map__22372__$1 = cljs.core.__destructure_map(map__22372);
var impl = map__22372__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22372__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5823__auto___22737 = (function (){var or__5142__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5823__auto___22737)){
var ctx__22099__auto___22739 = temp__5823__auto___22737;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__22099__auto___22739);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

var or__5142__auto__ = (function (){var temp__5823__auto__ = (headers[(8)]);
if(cljs.core.truth_(temp__5823__auto__)){
var text = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.protocols.create_text_node(renderer,text),(function (){var text__22026__auto__ = text;
return (new Array(null,null,null,null,null,null,false,text__22026__auto__,text__22026__auto__,null,null));
})()], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var temp__5823__auto__ = replicant.core.get_alias_headers(impl,headers);
if(cljs.core.truth_(temp__5823__auto__)){
var alias_headers = temp__5823__auto__;
var vec__22373 = (replicant.core.create_node.cljs$core$IFn$_invoke$arity$2 ? replicant.core.create_node.cljs$core$IFn$_invoke$arity$2(impl,alias_headers) : replicant.core.create_node.call(null,impl,alias_headers));
var child_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22373,(0),null);
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22373,(1),null);
var k = (alias_headers[(3)]);
var vdom__$1 = (function (){var headers__22035__auto__ = headers;
return (new Array((headers__22035__auto__[(0)]),(headers__22035__auto__[(3)]),(headers__22035__auto__[(2)]),(headers[(4)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom], null),(function (){var G__22376 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22376,k);
} else {
return G__22376;
}
})(),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__22035__auto__[(4)]))),(headers__22035__auto__[(7)]),null,null,(1)));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [child_node,vdom__$1], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var tag_name = (headers[(0)]);
var ns = (function (){var or__5142__auto____$2 = (headers[(6)]);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("svg",tag_name)){
return "http://www.w3.org/2000/svg";
} else {
return null;
}
}
})();
var node = replicant.protocols.create_element(renderer,tag_name,(cljs.core.truth_(ns)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),ns], null):null));
var vec__22377 = replicant.core.get_mounting_attrs(headers);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22377,(0),null);
var mounting_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22377,(1),null);
var _ = replicant.core.set_attributes(renderer,node,(function (){var or__5142__auto____$2 = mounting_attrs;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return attrs;
}
})());
var vec__22380 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__22383,child_headers){
var vec__22384 = p__22383;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22384,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22384,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22384,(2),null);
if(cljs.core.truth_(child_headers)){
var vec__22387 = (replicant.core.create_node.cljs$core$IFn$_invoke$arity$2 ? replicant.core.create_node.cljs$core$IFn$_invoke$arity$2(impl,child_headers) : replicant.core.create_node.call(null,impl,child_headers));
var child_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22387,(0),null);
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22387,(1),null);
var k = (vdom[(1)]);
replicant.protocols.append_child(renderer,node,child_node);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,vdom),(function (){var G__22390 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__22390,k);
} else {
return G__22390;
}
})(),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,null),ks,n], null);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY),(0)], null),replicant.core.get_children(headers,ns));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22380,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22380,(1),null);
var n_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22380,(2),null);
replicant.core.register_hooks(impl,node,headers);

if(cljs.core.truth_(mounting_attrs)){
replicant.core.register_mount(impl,node,mounting_attrs,attrs);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,(function (){var headers__22035__auto__ = headers;
return (new Array((headers__22035__auto__[(0)]),(headers__22035__auto__[(3)]),(headers__22035__auto__[(2)]),attrs,cljs.core.persistent_BANG_(children),cljs.core.persistent_BANG_(ks),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__22035__auto__[(4)]))),(headers__22035__auto__[(7)]),null,null,n_children));
})()], null);
}
}
});
/**
 * Two elements are considered similar enough for reuse if they are both hiccup
 *   elements with the same tag name and the same key (or both have no key) - or
 *   they are both strings.
 * 
 *   Similarity in this case indicates that the node can be used for reconciliation
 *   instead of creating a new node from scratch.
 */
replicant.core.reusable_QMARK_ = (function replicant$core$reusable_QMARK_(headers,vdom){
var or__5142__auto__ = (function (){var and__5140__auto__ = (headers[(8)]);
if(cljs.core.truth_(and__5140__auto__)){
return (vdom[(8)]);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(3)]),(vdom[(1)]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(0)]),(vdom[(0)]))));
}
});
replicant.core.same_QMARK_ = (function replicant$core$same_QMARK_(headers,vdom){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(3)]),(vdom[(1)]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(0)]),(vdom[(0)]))));
});
replicant.core.index_of = (function replicant$core$index_of(f,xs){
var coll_n = (0);
var dom_n = (0);
var xs__$1 = cljs.core.seq(xs);
while(true){
if((xs__$1 == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null);
} else {
if((cljs.core.first(xs__$1) == null)){
var G__22795 = (coll_n + (1));
var G__22796 = dom_n;
var G__22797 = cljs.core.next(xs__$1);
coll_n = G__22795;
dom_n = G__22796;
xs__$1 = G__22797;
continue;
} else {
if(cljs.core.truth_((function (){var G__22392 = cljs.core.first(xs__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22392) : f.call(null,G__22392));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_n,dom_n], null);
} else {
var G__22802 = (coll_n + (1));
var G__22803 = (dom_n + (1));
var G__22804 = cljs.core.next(xs__$1);
coll_n = G__22802;
dom_n = G__22803;
xs__$1 = G__22804;
continue;

}
}
}
break;
}
});
replicant.core.get_ns = (function replicant$core$get_ns(headers){
var or__5142__auto__ = (headers[(6)]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("svg",(headers[(0)]))){
return "http://www.w3.org/2000/svg";
} else {
return null;
}
}
});
replicant.core.insert_children = (function replicant$core$insert_children(p__22393,el,children,vdom){
var map__22394 = p__22393;
var map__22394__$1 = cljs.core.__destructure_map(map__22394);
var impl = map__22394__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22394__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__22395,child){
var vec__22396 = p__22395;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22396,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22396,(1),null);
if(cljs.core.truth_(child)){
var vec__22399 = replicant.core.create_node(impl,child);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22399,(0),null);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22399,(1),null);
replicant.protocols.append_child(renderer,el,node);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,vdom__$1),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,null),n], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom,(0)], null),children);
});
replicant.core.remove_child = (function replicant$core$remove_child(p__22402,unmounts,el,n,vdom){
var map__22403 = p__22402;
var map__22403__$1 = cljs.core.__destructure_map(map__22403);
var impl = map__22403__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22403__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var temp__5821__auto__ = (vdom[(9)]);
if(cljs.core.truth_(temp__5821__auto__)){
var id = temp__5821__auto__;
if(cljs.core.truth_((unmounts.cljs$core$IFn$_invoke$arity$1 ? unmounts.cljs$core$IFn$_invoke$arity$1(id) : unmounts.call(null,id)))){
return vdom;
} else {
return null;
}
} else {
var res = (function (){var temp__5821__auto____$1 = replicant.core.get_unmounting_attrs(vdom);
if(cljs.core.truth_(temp__5821__auto____$1)){
var attrs = temp__5821__auto____$1;
var vdom__$1 = (function (){var vdom__22019__auto__ = vdom;
(vdom__22019__auto__[(9)] = replicant.vdom.id.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(replicant.vdom.id.cljs$core$IDeref$_deref$arity$1(null) + (1))));

return vdom__22019__auto__;
})();
var child = replicant.protocols.get_child(renderer,el,n);
replicant.core.update_attributes(renderer,child,attrs,(vdom__$1[(3)]));

cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.on_transition_end(renderer,child,(function (){
cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.remove_child(renderer,el,child);

var temp__5823__auto___22831 = new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((vdom__$1[(3)]));
if(cljs.core.truth_(temp__5823__auto___22831)){
var hook_22832 = temp__5823__auto___22831;
replicant.core.call_hook(renderer,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook_22832,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),child,null,vdom__$1], null));
} else {
}

return renderer;
}));

return vdom__$1;
} else {
var child = replicant.protocols.get_child(renderer,el,n);
replicant.protocols.remove_child(renderer,el,child);

replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom], 0));

return null;
}
})();
return res;
}
});
replicant.core.move_node_details = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","move-node","replicant/move-node",-1189251602)], null);
replicant.core.unchanged_QMARK_ = (function replicant$core$unchanged_QMARK_(headers,vdom){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__22404 = headers;
if((G__22404 == null)){
return null;
} else {
return (G__22404[(7)]);
}
})(),(function (){var G__22405 = vdom;
if((G__22405 == null)){
return null;
} else {
return (G__22405[(7)]);
}
})());
});
replicant.core.move_nodes = (function replicant$core$move_nodes(p__22408,el,headers,new_children,vdom,old_children,n,n_children){
var map__22409 = p__22408;
var map__22409__$1 = cljs.core.__destructure_map(map__22409);
var impl = map__22409__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22409__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var vec__22410 = (cljs.core.truth_((headers[(3)]))?replicant.core.index_of((function (p1__22406_SHARP_){
return replicant.core.same_QMARK_(headers,p1__22406_SHARP_);
}),old_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var o_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22410,(0),null);
var o_dom_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22410,(1),null);
var vec__22413 = (cljs.core.truth_((vdom[(1)]))?replicant.core.index_of((function (p1__22407_SHARP_){
return replicant.core.same_QMARK_(p1__22407_SHARP_,vdom);
}),new_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var n_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22413,(0),null);
var n_dom_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22413,(1),null);
if((o_idx < n_idx)){
var idx = ((n + n_dom_idx) + (1));
var child = replicant.protocols.get_child(renderer,el,n);
if((idx < n_children)){
replicant.protocols.insert_before(renderer,el,child,replicant.protocols.get_child(renderer,el,idx));
} else {
replicant.protocols.append_child(renderer,el,child);
}

replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_children,n_idx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom,replicant.core.move_node_details], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n_idx,cljs.core.next(old_children)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(old_children)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2((n_idx + (1)),old_children)], 0)),n,(idx - (1))], null);
} else {
var idx = (n + o_dom_idx);
var child = replicant.protocols.get_child(renderer,el,idx);
var corresponding_old_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(old_children,o_idx);
replicant.protocols.insert_before(renderer,el,child,replicant.protocols.get_child(renderer,el,n));

(replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5 ? replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5(impl,el,headers,corresponding_old_vdom,n) : replicant.core.reconcile_STAR_.call(null,impl,el,headers,corresponding_old_vdom,n));

if(replicant.core.unchanged_QMARK_(headers,corresponding_old_vdom)){
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,headers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([corresponding_old_vdom,replicant.core.move_node_details], 0));
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(new_children),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(o_idx,old_children),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((o_idx + (1)),old_children)),(n + (1)),((n + o_idx) + (1)),corresponding_old_vdom], null);
}
});
replicant.core.insert_node = (function replicant$core$insert_node(r,el,child,n,n_children){
if((n_children <= n)){
return replicant.protocols.append_child(r,el,child);
} else {
return replicant.protocols.insert_before(r,el,child,replicant.protocols.get_child(r,el,n));
}
});
replicant.core.update_children = (function replicant$core$update_children(impl,el,new_children,new_ks,old_children,old_ks,n_children){
var r = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl);
var unmounts = cljs.core.deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl));
var new_c = cljs.core.seq(new_children);
var old_c = cljs.core.seq(old_children);
var n = (0);
var move_n = (0);
var n_children__$1 = (function (){var or__5142__auto__ = n_children;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var changed_QMARK_ = false;
var vdom = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var new_headers = cljs.core.first(new_c);
var old_vdom = cljs.core.first(old_c);
var new_empty_QMARK_ = (new_c == null);
var old_empty_QMARK_ = (old_c == null);
var new_nil_QMARK_ = (new_headers == null);
var old_nil_QMARK_ = (old_vdom == null);
if(((new_empty_QMARK_) && (old_empty_QMARK_))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [changed_QMARK_,cljs.core.persistent_BANG_(vdom),new_ks,n_children__$1], null);
} else {
if(new_empty_QMARK_){
var children = cljs.core.seq(old_c);
var vdom__$1 = vdom;
var n__$1 = n;
var n_children__$2 = n_children__$1;
while(true){
if((children == null)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_(vdom__$1),new_ks,n_children__$2], null);
} else {
if((cljs.core.first(children) == null)){
var G__22883 = cljs.core.next(children);
var G__22884 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom__$1,null);
var G__22885 = n__$1;
var G__22886 = n_children__$2;
children = G__22883;
vdom__$1 = G__22884;
n__$1 = G__22885;
n_children__$2 = G__22886;
continue;
} else {
var temp__5821__auto__ = replicant.core.remove_child(impl,unmounts,el,n__$1,cljs.core.first(children));
if(cljs.core.truth_(temp__5821__auto__)){
var pending_vdom = temp__5821__auto__;
var G__22888 = cljs.core.next(children);
var G__22889 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom__$1,pending_vdom);
var G__22890 = (n__$1 + (1));
var G__22891 = n_children__$2;
children = G__22888;
vdom__$1 = G__22889;
n__$1 = G__22890;
n_children__$2 = G__22891;
continue;
} else {
var G__22898 = cljs.core.next(children);
var G__22899 = vdom__$1;
var G__22900 = n__$1;
var G__22901 = (n_children__$2 - (1));
children = G__22898;
vdom__$1 = G__22899;
n__$1 = G__22900;
n_children__$2 = G__22901;
continue;
}

}
}
break;
}
} else {
if(old_empty_QMARK_){
var vec__22434 = replicant.core.insert_children(impl,el,new_c,vdom);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22434,(0),null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22434,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_(vdom__$1),new_ks,(n_children__$1 + n__$1)], null);
} else {
if(((new_nil_QMARK_) && (old_nil_QMARK_))){
var G__22905 = cljs.core.next(new_c);
var G__22906 = cljs.core.next(old_c);
var G__22907 = n;
var G__22908 = move_n;
var G__22909 = n_children__$1;
var G__22910 = changed_QMARK_;
var G__22911 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__22905;
old_c = G__22906;
n = G__22907;
move_n = G__22908;
n_children__$1 = G__22909;
changed_QMARK_ = G__22910;
vdom = G__22911;
continue;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = old_vdom;
if(cljs.core.truth_(and__5140__auto__)){
return (old_vdom[(9)]);
} else {
return and__5140__auto__;
}
})())){
var vec__22437 = (cljs.core.truth_((function (){var and__5140__auto__ = new_headers;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((function (){var G__22440 = (new_headers[(3)]);
return (old_ks.cljs$core$IFn$_invoke$arity$1 ? old_ks.cljs$core$IFn$_invoke$arity$1(G__22440) : old_ks.call(null,G__22440));
})());
} else {
return and__5140__auto__;
}
})())?(function (){var res = replicant.core.create_node(impl,new_headers);
replicant.core.insert_node(r,el,cljs.core.first(res),n,n_children__$1);

return res;
})():null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22437,(0),null);
var child_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22437,(1),null);
if(cljs.core.truth_((function (){var G__22441 = (old_vdom[(9)]);
return (unmounts.cljs$core$IFn$_invoke$arity$1 ? unmounts.cljs$core$IFn$_invoke$arity$1(G__22441) : unmounts.call(null,G__22441));
})())){
if(new_nil_QMARK_){
var G__22925 = cljs.core.next(new_c);
var G__22926 = cljs.core.next(old_c);
var G__22927 = (n + (1));
var G__22928 = move_n;
var G__22929 = n_children__$1;
var G__22930 = changed_QMARK_;
var G__22931 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,old_vdom);
new_c = G__22925;
old_c = G__22926;
n = G__22927;
move_n = G__22928;
n_children__$1 = G__22929;
changed_QMARK_ = G__22930;
vdom = G__22931;
continue;
} else {
if(cljs.core.truth_(child)){
var G__22932 = cljs.core.next(new_c);
var G__22933 = cljs.core.next(old_c);
var G__22934 = (n + (2));
var G__22935 = move_n;
var G__22936 = (n_children__$1 + (1));
var G__22937 = true;
var G__22938 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__22932;
old_c = G__22933;
n = G__22934;
move_n = G__22935;
n_children__$1 = G__22936;
changed_QMARK_ = G__22937;
vdom = G__22938;
continue;
} else {
var G__22940 = new_c;
var G__22941 = cljs.core.next(old_c);
var G__22942 = (n + (1));
var G__22943 = move_n;
var G__22944 = n_children__$1;
var G__22945 = changed_QMARK_;
var G__22946 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,old_vdom);
new_c = G__22940;
old_c = G__22941;
n = G__22942;
move_n = G__22943;
n_children__$1 = G__22944;
changed_QMARK_ = G__22945;
vdom = G__22946;
continue;

}
}
} else {
if(new_nil_QMARK_){
var G__22953 = cljs.core.next(new_c);
var G__22954 = cljs.core.next(old_c);
var G__22955 = n;
var G__22956 = (move_n - (1));
var G__22957 = (n_children__$1 - (1));
var G__22958 = changed_QMARK_;
var G__22959 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__22953;
old_c = G__22954;
n = G__22955;
move_n = G__22956;
n_children__$1 = G__22957;
changed_QMARK_ = G__22958;
vdom = G__22959;
continue;
} else {
if(cljs.core.truth_(child)){
var G__22962 = cljs.core.next(new_c);
var G__22963 = cljs.core.next(old_c);
var G__22964 = (n + (1));
var G__22965 = move_n;
var G__22966 = n_children__$1;
var G__22967 = true;
var G__22968 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__22962;
old_c = G__22963;
n = G__22964;
move_n = G__22965;
n_children__$1 = G__22966;
changed_QMARK_ = G__22967;
vdom = G__22968;
continue;
} else {
var G__22969 = new_c;
var G__22970 = cljs.core.next(old_c);
var G__22971 = n;
var G__22972 = (move_n - (1));
var G__22973 = (n_children__$1 - (1));
var G__22974 = changed_QMARK_;
var G__22975 = vdom;
new_c = G__22969;
old_c = G__22970;
n = G__22971;
move_n = G__22972;
n_children__$1 = G__22973;
changed_QMARK_ = G__22974;
vdom = G__22975;
continue;

}
}
}
} else {
if(new_nil_QMARK_){
if(cljs.core.contains_QMARK_(new_ks,(old_vdom[(1)]))){
var G__22981 = cljs.core.next(new_c);
var G__22982 = old_c;
var G__22983 = n;
var G__22984 = move_n;
var G__22985 = n_children__$1;
var G__22986 = true;
var G__22987 = vdom;
new_c = G__22981;
old_c = G__22982;
n = G__22983;
move_n = G__22984;
n_children__$1 = G__22985;
changed_QMARK_ = G__22986;
vdom = G__22987;
continue;
} else {
var temp__5821__auto__ = replicant.core.remove_child(impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5821__auto__)){
var unmounting_node = temp__5821__auto__;
var G__22990 = cljs.core.next(new_c);
var G__22991 = cljs.core.next(old_c);
var G__22992 = (n + (1));
var G__22993 = move_n;
var G__22994 = n_children__$1;
var G__22995 = true;
var G__22996 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,unmounting_node);
new_c = G__22990;
old_c = G__22991;
n = G__22992;
move_n = G__22993;
n_children__$1 = G__22994;
changed_QMARK_ = G__22995;
vdom = G__22996;
continue;
} else {
var G__23001 = cljs.core.next(new_c);
var G__23002 = cljs.core.next(old_c);
var G__23003 = n;
var G__23004 = move_n;
var G__23005 = (n_children__$1 - (1));
var G__23006 = true;
var G__23007 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__23001;
old_c = G__23002;
n = G__23003;
move_n = G__23004;
n_children__$1 = G__23005;
changed_QMARK_ = G__23006;
vdom = G__23007;
continue;
}
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = old_vdom;
if(cljs.core.truth_(and__5140__auto__)){
return replicant.core.reusable_QMARK_(new_headers,old_vdom);
} else {
return and__5140__auto__;
}
})())){
var new_vdom = (replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5 ? replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5(impl,el,new_headers,old_vdom,n) : replicant.core.reconcile_STAR_.call(null,impl,el,new_headers,old_vdom,n));
var node_unchanged_QMARK_ = replicant.core.unchanged_QMARK_(new_headers,old_vdom);
if(((node_unchanged_QMARK_) && ((n < move_n)))){
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,replicant.protocols.get_child(r,el,n),new_headers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_vdom,replicant.core.move_node_details], 0));
} else {
}

var G__23010 = cljs.core.next(new_c);
var G__23011 = cljs.core.next(old_c);
var G__23012 = (n + (1));
var G__23013 = move_n;
var G__23014 = n_children__$1;
var G__23015 = (function (){var or__5142__auto__ = changed_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (!(node_unchanged_QMARK_));
}
})();
var G__23016 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,new_vdom);
new_c = G__23010;
old_c = G__23011;
n = G__23012;
move_n = G__23013;
n_children__$1 = G__23014;
changed_QMARK_ = G__23015;
vdom = G__23016;
continue;
} else {
if(cljs.core.not((function (){var G__22442 = (new_headers[(3)]);
return (old_ks.cljs$core$IFn$_invoke$arity$1 ? old_ks.cljs$core$IFn$_invoke$arity$1(G__22442) : old_ks.call(null,G__22442));
})())){
var vec__22443 = replicant.core.create_node(impl,new_headers);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22443,(0),null);
var child_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22443,(1),null);
replicant.core.insert_node(r,el,child,n,n_children__$1);

var G__23026 = cljs.core.next(new_c);
var G__23027 = (function (){var G__22446 = old_c;
if((old_vdom == null)){
return cljs.core.next(G__22446);
} else {
return G__22446;
}
})();
var G__23028 = (n + (1));
var G__23029 = move_n;
var G__23030 = (n_children__$1 + (1));
var G__23031 = true;
var G__23032 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__23026;
old_c = G__23027;
n = G__23028;
move_n = G__23029;
n_children__$1 = G__23030;
changed_QMARK_ = G__23031;
vdom = G__23032;
continue;
} else {
if(((old_nil_QMARK_) || (cljs.core.not((function (){var G__22447 = (old_vdom[(1)]);
return (new_ks.cljs$core$IFn$_invoke$arity$1 ? new_ks.cljs$core$IFn$_invoke$arity$1(G__22447) : new_ks.call(null,G__22447));
})())))){
var temp__5821__auto__ = replicant.core.remove_child(impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5821__auto__)){
var unmounting_node = temp__5821__auto__;
var G__23042 = new_c;
var G__23043 = cljs.core.next(old_c);
var G__23044 = (n + (1));
var G__23045 = move_n;
var G__23046 = n_children__$1;
var G__23047 = true;
var G__23048 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,unmounting_node);
new_c = G__23042;
old_c = G__23043;
n = G__23044;
move_n = G__23045;
n_children__$1 = G__23046;
changed_QMARK_ = G__23047;
vdom = G__23048;
continue;
} else {
var G__23049 = new_c;
var G__23050 = cljs.core.next(old_c);
var G__23051 = n;
var G__23052 = move_n;
var G__23053 = (n_children__$1 - (1));
var G__23054 = true;
var G__23055 = vdom;
new_c = G__23049;
old_c = G__23050;
n = G__23051;
move_n = G__23052;
n_children__$1 = G__23053;
changed_QMARK_ = G__23054;
vdom = G__23055;
continue;
}
} else {
var vec__22448 = replicant.core.move_nodes(impl,el,new_headers,new_c,old_vdom,old_c,n,n_children__$1);
var nc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22448,(0),null);
var oc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22448,(1),null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22448,(2),null);
var move_n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22448,(3),null);
var vdom_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22448,(4),null);
var G__23063 = nc;
var G__23064 = oc;
var G__23065 = n__$1;
var G__23066 = move_n__$1;
var G__23067 = n_children__$1;
var G__23068 = true;
var G__23069 = (function (){var G__22451 = vdom;
if(cljs.core.truth_(vdom_node)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__22451,vdom_node);
} else {
return G__22451;
}
})();
new_c = G__23063;
old_c = G__23064;
n = G__23065;
move_n = G__23066;
n_children__$1 = G__23067;
changed_QMARK_ = G__23068;
vdom = G__23069;
continue;

}
}
}
}
}
}
}
}
}
break;
}
});
replicant.core.reconcile_STAR_ = (function replicant$core$reconcile_STAR_(p__22452,el,headers,vdom,index){
var map__22453 = p__22452;
var map__22453__$1 = cljs.core.__destructure_map(map__22453);
var impl = map__22453__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22453__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5823__auto___23072 = (function (){var or__5142__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5823__auto___23072)){
var ctx__22099__auto___23077 = temp__5823__auto___23072;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__22099__auto___23077);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

if((!((!(replicant.asserts.has_bad_conditional_attrs_QMARK_(vdom,headers)))))){
var fn__22105__auto___23080 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__22106__auto___23081 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__22107__auto___23082 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__22454 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid conditionals around the attribute map",new cljs.core.Keyword(null,"message","message",-406056002),replicant.asserts.convey_bad_conditional_attributes(vdom,headers)], null);
var G__22454__$1 = (cljs.core.truth_(fn__22105__auto___23080)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22454,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__22105__auto___23080):G__22454);
var G__22454__$2 = (cljs.core.truth_(alias__22106__auto___23081)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22454__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__22106__auto___23081):G__22454__$1);
if(cljs.core.truth_(fd__22107__auto___23082)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22454__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__22107__auto___23082);
} else {
return G__22454__$2;
}
})());
} else {
}

var or__5142__auto__ = ((replicant.core.unchanged_QMARK_(headers,vdom))?vdom:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var temp__5823__auto__ = replicant.core.get_alias_headers(impl,headers);
if(cljs.core.truth_(temp__5823__auto__)){
var alias_headers = temp__5823__auto__;
var vdom_child = cljs.core.first((vdom[(4)]));
var updated_vdom = (cljs.core.truth_(replicant.core.reusable_QMARK_(alias_headers,vdom_child))?(replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5 ? replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5(impl,el,alias_headers,vdom_child,index) : replicant.core.reconcile_STAR_.call(null,impl,el,alias_headers,vdom_child,index)):(function (){var vec__22455 = replicant.core.create_node(impl,alias_headers);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22455,(0),null);
var updated_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22455,(1),null);
replicant.protocols.replace_child(renderer,el,node,replicant.protocols.get_child(renderer,el,index));

return updated_vdom;
})());
var headers__22035__auto__ = headers;
return (new Array((headers__22035__auto__[(0)]),(headers__22035__auto__[(3)]),(headers__22035__auto__[(2)]),(headers[(4)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_vdom], null),(function (){var temp__5823__auto____$1 = (updated_vdom[(1)]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var k = temp__5823__auto____$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
} else {
return null;
}
})(),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__22035__auto__[(4)]))),(headers__22035__auto__[(7)]),null,null,(1)));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((headers[(8)]),(vdom[(8)])))?(function (){var vec__22458 = replicant.core.create_node(impl,headers);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22458,(0),null);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22458,(1),null);
replicant.protocols.replace_child(renderer,el,node,replicant.protocols.get_child(renderer,el,index));

return vdom__$1;
})():null);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var child = replicant.protocols.get_child(renderer,el,index);
var headers__$1 = (function (){var or__5142__auto____$3 = replicant.core.get_alias_headers(impl,headers);
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
return headers;
}
})();
var attrs = replicant.core.get_attrs(headers__$1);
var vdom_attrs = (vdom[(3)]);
var attrs_changed_QMARK_ = replicant.core.reconcile_attributes(renderer,child,attrs,vdom_attrs);
var vec__22461 = (cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true], null):replicant.core.get_children_ks(headers__$1,replicant.core.get_ns(headers__$1)));
var new_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22461,(0),null);
var new_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22461,(1),null);
var inner_html_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22461,(2),null);
var vec__22464 = (cljs.core.truth_(new cljs.core.Keyword(null,"contenteditable","contenteditable",-770210530).cljs$core$IFn$_invoke$arity$1(vdom_attrs))?(function (){
replicant.protocols.remove_all_children(renderer,child);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null);
})()
:(cljs.core.truth_(inner_html_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vdom[(4)]),(vdom[(5)]),(vdom[(10)])], null)
));
var old_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22464,(0),null);
var old_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22464,(1),null);
var old_nc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22464,(2),null);
var vec__22467 = replicant.core.update_children(impl,child,new_children,new_ks,old_children,old_ks,old_nc);
var children_changed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22467,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22467,(1),null);
var child_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22467,(2),null);
var n_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22467,(3),null);
var attrs_changed_QMARK___$1 = ((attrs_changed_QMARK_) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1(vdom_attrs))));
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,headers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom,(cljs.core.truth_((function (){var and__5140__auto__ = attrs_changed_QMARK___$1;
if(and__5140__auto__){
return children_changed_QMARK_;
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895),new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null):((attrs_changed_QMARK___$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null)
))], 0));

var headers__22035__auto__ = headers__$1;
return (new Array((headers__22035__auto__[(0)]),(headers__22035__auto__[(3)]),(headers__22035__auto__[(2)]),attrs,children,child_ks,cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__22035__auto__[(4)]))),(headers__22035__auto__[(7)]),null,null,n_children));
}
}
}
});
replicant.core.perform_post_mount_update = (function replicant$core$perform_post_mount_update(renderer,p__22470){
var vec__22471 = p__22470;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22471,(0),null);
var mounting_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22471,(1),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22471,(2),null);
return replicant.core.update_attributes(renderer,node,attrs,mounting_attrs);
});
/**
 * Reconcile the DOM in `el` by diffing `hiccup` with `vdom`. If there is no
 *   `vdom`, `reconcile` will create the DOM as per `hiccup`. Assumes that the DOM
 *   in `el` is in sync with `vdom` - if not, this will certainly not produce the
 *   desired result.
 */
replicant.core.reconcile = (function replicant$core$reconcile(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23097 = arguments.length;
var i__5877__auto___23098 = (0);
while(true){
if((i__5877__auto___23098 < len__5876__auto___23097)){
args__5882__auto__.push((arguments[i__5877__auto___23098]));

var G__23099 = (i__5877__auto___23098 + (1));
i__5877__auto___23098 = G__23099;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic = (function (renderer,el,hiccup,p__22483){
var vec__22484 = p__22483;
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22484,(0),null);
var map__22487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22484,(1),null);
var map__22487__$1 = cljs.core.__destructure_map(map__22487);
var unmounts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22487__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521));
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22487__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22487__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var on_alias_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22487__$1,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043));
var impl = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"hooks","hooks",-413590103),cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"mounts","mounts",-791474425),cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"unmounts","unmounts",173366521),(function (){var or__5142__auto__ = unmounts;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
})(),new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930),alias_data,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043),on_alias_exception], null);
var vdom__$1 = ((cljs.core.list_QMARK_(hiccup))?(function (){var vec__22488 = replicant.core.get_children_ks((function (){var pt__21819__auto__ = [null,null,null];
var G__22491 = pt__21819__auto__;
G__22491.push((function (){var temp__5823__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(null);
if(cljs.core.truth_(temp__5823__auto__)){
var k__21813__auto__ = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt__21819__auto__[(0)]),k__21813__auto__], null);
} else {
return null;
}
})());

G__22491.push(null);

G__22491.push(hiccup);

G__22491.push(null);

G__22491.push(null);

G__22491.push(null);

G__22491.push(null);

return G__22491;
})(),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22488,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22488,(1),null);
return cljs.core.second(replicant.core.update_children(impl,el,children,ks,vdom,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__22474_SHARP_){
return (p1__22474_SHARP_[(1)]);
}),vdom)),cljs.core.count(vdom)));
})():(function (){var headers = replicant.core.get_hiccup_headers(null,hiccup);
if(cljs.core.truth_(headers)){
var temp__5823__auto___23102 = (function (){var or__5142__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5823__auto___23102)){
var ctx__22099__auto___23103 = temp__5823__auto___23102;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__22099__auto___23103);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = headers;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = vdom;
if(cljs.core.truth_(and__5140__auto____$1)){
return ((replicant.core.unchanged_QMARK_(headers,cljs.core.first(vdom))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(vdom))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return vdom;
} else {
var k = (cljs.core.truth_(headers)?(headers[(3)]):null);
return cljs.core.second(replicant.core.update_children(impl,el,(cljs.core.truth_(headers)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [headers], null):null),(function (){var G__22492 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22492,k);
} else {
return G__22492;
}
})(),vdom,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__22475_SHARP_){
return (p1__22475_SHARP_[(1)]);
}),vdom)),(cljs.core.truth_(cljs.core.first(vdom))?(1):(0))));
}
})());
var hooks = cljs.core.deref(new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(impl));
var temp__5821__auto___23104 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"mounts","mounts",-791474425).cljs$core$IFn$_invoke$arity$1(impl)));
if(temp__5821__auto___23104){
var mounts_23105 = temp__5821__auto___23104;
replicant.protocols.next_frame(renderer,(function (){
cljs.core.run_BANG_((function (p1__22476_SHARP_){
return replicant.core.perform_post_mount_update(renderer,p1__22476_SHARP_);
}),mounts_23105);

return cljs.core.run_BANG_((function (p1__22477_SHARP_){
return replicant.core.call_hook(renderer,p1__22477_SHARP_);
}),hooks);
}));
} else {
cljs.core.run_BANG_((function (p1__22478_SHARP_){
return replicant.core.call_hook(renderer,p1__22478_SHARP_);
}),hooks);
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),hooks,new cljs.core.Keyword(null,"vdom","vdom",953162958),vdom__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521),new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)], null);
}));

(replicant.core.reconcile.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.reconcile.cljs$lang$applyTo = (function (seq22479){
var G__22480 = cljs.core.first(seq22479);
var seq22479__$1 = cljs.core.next(seq22479);
var G__22481 = cljs.core.first(seq22479__$1);
var seq22479__$2 = cljs.core.next(seq22479__$1);
var G__22482 = cljs.core.first(seq22479__$2);
var seq22479__$3 = cljs.core.next(seq22479__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22480,G__22481,G__22482,seq22479__$3);
}));

replicant.assert.add_reporter(new cljs.core.Keyword("replicant.assert","default","replicant.assert/default",-504441266),replicant.console_logger.report);

//# sourceMappingURL=replicant.core.js.map
