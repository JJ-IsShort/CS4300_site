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
var tag_name = (function (){var G__27540 = (cljs.core.truth_(id_index)?tag__$1.substring((0),id_index):(cljs.core.truth_(class_index)?tag__$1.substring((0),class_index):tag__$1
));
if(cljs.core.truth_(ns)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,G__27540);
} else {
return G__27540;
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
var fn__26932__auto___27773 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__26933__auto___27774 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__26934__auto___27775 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__27544 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = sexp;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Hiccup tag "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)+" contains an empty id"),new cljs.core.Keyword(null,"message","message",-406056002),"Either complete the id or remove the # character."], null);
var G__27544__$1 = (cljs.core.truth_(fn__26932__auto___27773)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27544,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__26932__auto___27773):G__27544);
var G__27544__$2 = (cljs.core.truth_(alias__26933__auto___27774)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27544__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__26933__auto___27774):G__27544__$1);
if(cljs.core.truth_(fd__26934__auto___27775)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27544__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__26934__auto___27775);
} else {
return G__27544__$2;
}
})());
} else {
}

if((!(cljs.core.not(cljs.core.re_find(/#[^a-zA-Z_\.]/,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym))))))){
var fn__26932__auto___27778 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__26933__auto___27779 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__26934__auto___27780 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__27547 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = sexp;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Hiccup tag "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)+" contains an invalid id"),new cljs.core.Keyword(null,"message","message",-406056002),"IDs must start with a letter."], null);
var G__27547__$1 = (cljs.core.truth_(fn__26932__auto___27778)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27547,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__26932__auto___27778):G__27547);
var G__27547__$2 = (cljs.core.truth_(alias__26933__auto___27779)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27547__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__26933__auto___27779):G__27547__$1);
if(cljs.core.truth_(fd__26934__auto___27780)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27547__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__26934__auto___27780);
} else {
return G__27547__$2;
}
})());
} else {
}

if((!(cljs.core.not(cljs.core.re_find(/\.$/,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym))))))){
var fn__26932__auto___27784 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__26933__auto___27785 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__26934__auto___27786 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__27549 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = sexp;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Hiccup tag "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)+" contains an empty class"),new cljs.core.Keyword(null,"message","message",-406056002),"This may cause a DOMException and is considered a coding error. Replicant will not sacrifice performance to work around it."], null);
var G__27549__$1 = (cljs.core.truth_(fn__26932__auto___27784)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27549,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__26932__auto___27784):G__27549);
var G__27549__$2 = (cljs.core.truth_(alias__26933__auto___27785)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27549__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__26933__auto___27785):G__27549__$1);
if(cljs.core.truth_(fd__26934__auto___27786)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27549__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__26934__auto___27786);
} else {
return G__27549__$2;
}
})());
} else {
}

var pt__26723__auto__ = replicant.core.parse_tag(sym);
var G__27551 = pt__26723__auto__;
G__27551.push((function (){var temp__5823__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5823__auto__)){
var k__26716__auto__ = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt__26723__auto__[(0)]),k__26716__auto__], null);
} else {
return null;
}
})());

G__27551.push(attrs);

G__27551.push(((has_args_QMARK_)?cljs.core.rest(args):args));

G__27551.push(ns);

G__27551.push(sexp);

G__27551.push(null);

G__27551.push(null);

return G__27551;
} else {
var text__26748__auto__ = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexp));
return (new Array(null,null,null,null,null,null,null,text__26748__auto__,text__26748__auto__,null));
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
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__27554_SHARP_){
return cljs.core.not_empty(p1__27554_SHARP_.trim());
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
var vec__27559 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27558_SHARP_){
return p1__27558_SHARP_.trim();
}),kv.split(":"));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27559,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27559,(1),null);
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
var G__27564 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009)], 0));
var G__27564__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27564,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__27564);
var G__27564__$2 = ((cljs.core.seq(classes__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27564__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),classes__$1):G__27564__$1);
if(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs) === 'string'){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__27564__$2,new cljs.core.Keyword(null,"style","style",-496642736),replicant.core.explode_styles);
} else {
return G__27564__$2;
}
});
/**
 * Given `headers` as produced by `get-hiccup-headers`, returns a map of all HTML
 *   attributes.
 */
replicant.core.get_attrs = (function replicant$core$get_attrs(headers){
if((!((!(cljs.core.contains_QMARK_((headers[(4)]),new cljs.core.Keyword(null,"className","className",-1983287057))))))){
var fn__26932__auto___27793 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__26933__auto___27794 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__26934__auto___27795 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__27568 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Use :class, not :className",new cljs.core.Keyword(null,"message","message",-406056002),":className is not supported, please use :class instead. It takes a keyword, a string, or a collection of either of those."], null);
var G__27568__$1 = (cljs.core.truth_(fn__26932__auto___27793)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27568,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__26932__auto___27793):G__27568);
var G__27568__$2 = (cljs.core.truth_(alias__26933__auto___27794)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27568__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__26933__auto___27794):G__27568__$1);
if(cljs.core.truth_(fd__26934__auto___27795)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27568__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__26934__auto___27795);
} else {
return G__27568__$2;
}
})());
} else {
}

if((!((function (){var class__27421__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return (((!(typeof class__27421__auto__ === 'string'))) || ((class__27421__auto__.indexOf(" ") < (0))));
})()))){
var fn__26932__auto___27799 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__26933__auto___27800 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__26934__auto___27801 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__27570 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid space separated :class strings",new cljs.core.Keyword(null,"message","message",-406056002),(function (){var class__27421__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return (""+":class supports collections of keywords and/or strings as classes. These perform better, and are usually more convenient to work with. Solve by converting "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class__27421__auto__], 0)))+" to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(class__27421__auto__.split(" "))], 0))));
})()], null);
var G__27570__$1 = (cljs.core.truth_(fn__26932__auto___27799)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27570,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__26932__auto___27799):G__27570);
var G__27570__$2 = (cljs.core.truth_(alias__26933__auto___27800)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27570__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__26933__auto___27800):G__27570__$1);
if(cljs.core.truth_(fd__26934__auto___27801)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27570__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__26934__auto___27801);
} else {
return G__27570__$2;
}
})());
} else {
}

if((!((!(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1((headers[(4)])) === 'string'))))){
var fn__26932__auto___27802 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__26933__auto___27803 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__26934__auto___27804 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__27571 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid string styles",new cljs.core.Keyword(null,"message","message",-406056002),":style supports structured maps of CSS property/value pairs. Strings must be parsed, so they're both slower and harder to read and write."], null);
var G__27571__$1 = (cljs.core.truth_(fn__26932__auto___27802)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27571,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__26932__auto___27802):G__27571);
var G__27571__$2 = (cljs.core.truth_(alias__26933__auto___27803)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27571__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__26933__auto___27803):G__27571__$1);
if(cljs.core.truth_(fd__26934__auto___27804)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27571__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__26934__auto___27804);
} else {
return G__27571__$2;
}
})());
} else {
}

return replicant.core.prep_attrs((headers[(4)]),(headers[(1)]),(headers[(2)]));
});
replicant.core.merge_attrs = (function replicant$core$merge_attrs(attrs,overrides){
var G__27572 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(overrides,new cljs.core.Keyword(null,"style","style",-496642736))], 0));
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides);
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__27572,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides));
} else {
return G__27572;
}
});
replicant.core.get_mounting_attrs = (function replicant$core$get_mounting_attrs(headers){
var temp__5821__auto__ = new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(temp__5821__auto__)){
var mounting = temp__5821__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs(headers),(function (){var headers__$1 = (function (){var G__27573 = headers;
if(cljs.core.truth_(mounting)){
var headers__26757__auto__ = G__27573;
(headers__26757__auto__[(4)] = replicant.core.merge_attrs((headers__26757__auto__[(4)]),mounting));

return headers__26757__auto__;
} else {
return G__27573;
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
return replicant.core.flatten_map_seqs((function (p1__27574_SHARP_){
var G__27575 = p1__27574_SHARP_;
if((G__27575 == null)){
return null;
} else {
return replicant.core.get_hiccup_headers(ns,G__27575);
}
}),(headers[(5)]));
}
});
/**
 * Like `get-children` but returns a tuple of `[children ks]` where `ks` is a set
 *   of the keys in `children`.
 */
replicant.core.get_children_ks = (function replicant$core$get_children_ks(headers,ns){
var vec__27576 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__27579,hiccup){
var vec__27580 = p__27579;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27580,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27580,(1),null);
if(cljs.core.truth_(hiccup)){
var headers__$1 = replicant.core.get_hiccup_headers(ns,hiccup);
var k = (headers__$1[(3)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,headers__$1),(function (){var G__27583 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__27583,k);
} else {
return G__27583;
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,null),ks], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY)], null),replicant.core.flatten_seqs((headers[(5)])));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27576,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27576,(1),null);
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
var rd = (function (){var G__27584 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","dom-event","replicant.trigger/dom-event",930136738),new cljs.core.Keyword("replicant","js-event","replicant/js-event",1927942146),e,new cljs.core.Keyword("replicant","dom-event","replicant/dom-event",-1613182512),e], null);
if(cljs.core.truth_(node)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27584,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node);
} else {
return G__27584;
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
replicant.core.call_hook = (function replicant$core$call_hook(renderer,p__27585){
var vec__27586 = p__27585;
var hook = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27586,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27586,(1),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27586,(2),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27586,(3),null);
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27586,(4),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27586,(5),null);
var f = replicant.core.get_life_cycle_hook(hook);
var life_cycle = (((old == null))?new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865):(((new$ == null))?new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184):new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235)
));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),k)) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865))))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235))))))))))){
var G__27592 = (function (){var G__27593 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","life-cycle","replicant.trigger/life-cycle",-205660972),new cljs.core.Keyword("replicant","life-cycle","replicant/life-cycle",1802888458),life_cycle,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node,new cljs.core.Keyword("replicant","remember","replicant/remember",809947829),(function replicant$core$call_hook_$_remember(memory){
return replicant.protocols.remember(renderer,node,memory);
})], null);
var G__27593__$1 = (cljs.core.truth_(details)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27593,new cljs.core.Keyword("replicant","details","replicant/details",-1846218867),details):G__27593);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27593__$1,new cljs.core.Keyword("replicant","memory","replicant/memory",-1882688464),replicant.protocols.recall(renderer,node));
} else {
return G__27593__$1;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27592) : f.call(null,G__27592));
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
var len__5876__auto___27854 = arguments.length;
var i__5877__auto___27855 = (0);
while(true){
if((i__5877__auto___27855 < len__5876__auto___27854)){
args__5882__auto__.push((arguments[i__5877__auto___27855]));

var G__27856 = (i__5877__auto___27855 + (1));
i__5877__auto___27855 = G__27856;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (p__27598,node,headers,p__27599){
var map__27600 = p__27598;
var map__27600__$1 = cljs.core.__destructure_map(map__27600);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27600__$1,new cljs.core.Keyword(null,"hooks","hooks",-413590103));
var vec__27601 = p__27599;
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27601,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27601,(1),null);
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
var headers_sexp = (function (){var G__27604 = headers;
if((G__27604 == null)){
return null;
} else {
return (G__27604[(7)]);
}
})();
var vdom_sexp = (function (){var G__27605 = vdom;
if((G__27605 == null)){
return null;
} else {
return (G__27605[(7)]);
}
})();
return cljs.core._vreset_BANG_(hooks,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(hooks),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27606){
var vec__27607 = p__27606;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27607,(0),null);
var hook = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27607,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook,k,node,headers_sexp,vdom_sexp,details], null);
}),new_hooks)));
}
}));

(replicant.core.register_hooks.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.register_hooks.cljs$lang$applyTo = (function (seq27594){
var G__27595 = cljs.core.first(seq27594);
var seq27594__$1 = cljs.core.next(seq27594);
var G__27596 = cljs.core.first(seq27594__$1);
var seq27594__$2 = cljs.core.next(seq27594__$1);
var G__27597 = cljs.core.first(seq27594__$2);
var seq27594__$3 = cljs.core.next(seq27594__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27595,G__27596,G__27597,seq27594__$3);
}));

replicant.core.register_mount = (function replicant$core$register_mount(p__27610,node,mounting_attrs,attrs){
var map__27611 = p__27610;
var map__27611__$1 = cljs.core.__destructure_map(map__27611);
var mounts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27611__$1,new cljs.core.Keyword(null,"mounts","mounts",-791474425));
return cljs.core._vreset_BANG_(mounts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(mounts),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,mounting_attrs,attrs], null)));
});
replicant.core.update_styles = (function replicant$core$update_styles(renderer,el,new_styles,old_styles){
var new_ks = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27612_SHARP_){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__27612_SHARP_) == null);
}),cljs.core.keys(new_styles)));
var old_ks = cljs.core.set(cljs.core.keys(old_styles));
cljs.core.run_BANG_((function (p1__27613_SHARP_){
return replicant.protocols.remove_style(renderer,el,p1__27613_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new_ks,old_ks));

return cljs.core.run_BANG_((function (p1__27614_SHARP_){
var new_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__27614_SHARP_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_style,cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_styles,p1__27614_SHARP_))){
if((!((p1__27614_SHARP_ instanceof cljs.core.Keyword)))){
var fn__26932__auto___27857 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__26933__auto___27858 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__26934__auto___27859 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__27615 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Style key "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27614_SHARP_)+" should be a keyword"),new cljs.core.Keyword(null,"message","message",-406056002),(""+"Replicant expects your style keys to be keywords. While anything that supports `name` (strings, symbols) will "+"technically work, mixing types will hinder Replicant from recognizing changes properly. Rendering once with "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27614_SHARP_)))+" and once with "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27614_SHARP_))))+" may produce undesired results. Your safest option is to always use keywords.")], null);
var G__27615__$1 = (cljs.core.truth_(fn__26932__auto___27857)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27615,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__26932__auto___27857):G__27615);
var G__27615__$2 = (cljs.core.truth_(alias__26933__auto___27858)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27615__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__26933__auto___27858):G__27615__$1);
if(cljs.core.truth_(fd__26934__auto___27859)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27615__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__26934__auto___27859);
} else {
return G__27615__$2;
}
})());
} else {
}

if((!((function (){var name__27460__auto__ = cljs.core.name(p1__27614_SHARP_);
return ((clojure.string.starts_with_QMARK_(name__27460__auto__,"--")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__27460__auto__,clojure.string.lower_case(name__27460__auto__))));
})()))){
var fn__26932__auto___27860 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__26933__auto___27861 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__26934__auto___27862 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__27616 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Use "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k(p1__27614_SHARP_))+", not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27614_SHARP_)),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__27616__$1 = (cljs.core.truth_(fn__26932__auto___27860)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27616,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__26932__auto___27860):G__27616);
var G__27616__$2 = (cljs.core.truth_(alias__26933__auto___27861)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27616__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__26933__auto___27861):G__27616__$1);
if(cljs.core.truth_(fd__26934__auto___27862)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27616__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__26934__auto___27862);
} else {
return G__27616__$2;
}
})());
} else {
}

return replicant.protocols.set_style(renderer,el,p1__27614_SHARP_,replicant.core.get_style_val(p1__27614_SHARP_,new_style));
} else {
return null;
}
}),new_ks);
});
replicant.core.update_classes = (function replicant$core$update_classes(renderer,el,new_classes,old_classes){
cljs.core.run_BANG_((function (p1__27617_SHARP_){
return replicant.protocols.remove_class(renderer,el,p1__27617_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new_classes),old_classes));

return cljs.core.run_BANG_((function (p1__27618_SHARP_){
return replicant.protocols.add_class(renderer,el,p1__27618_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(old_classes),new_classes));
});
replicant.core.get_event_handler_options = (function replicant$core$get_event_handler_options(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,k){
var G__27619 = res;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("replicant.event",cljs.core.namespace(k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27619,cljs.core.name(k),(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(m) : k.call(null,m)));
} else {
return G__27619;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("replicant.event","handler","replicant.event/handler",-1806871006))));
});
replicant.core.add_event_listeners = (function replicant$core$add_event_listeners(renderer,el,val){
return cljs.core.run_BANG_((function (p__27620){
var vec__27621 = p__27620;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27621,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27621,(1),null);
if((!((function (){var event__27432__auto__ = cljs.core.name(event);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("DOMContentLoaded",event__27432__auto__)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event__27432__auto__,clojure.string.lower_case(event__27432__auto__))));
})()))){
var fn__26932__auto___27874 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__26933__auto___27875 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__26934__auto___27876 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__27624 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Use "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.name(event))))+", not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)),new cljs.core.Keyword(null,"message","message",-406056002),(""+"Most event names should be in all lower-case. Replicant passes your event names directly to addEventListener, and mis-cased event names will fail silently.")], null);
var G__27624__$1 = (cljs.core.truth_(fn__26932__auto___27874)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27624,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__26932__auto___27874):G__27624);
var G__27624__$2 = (cljs.core.truth_(alias__26933__auto___27875)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27624__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__26933__auto___27875):G__27624__$1);
if(cljs.core.truth_(fd__26934__auto___27876)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27624__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__26934__auto___27876);
} else {
return G__27624__$2;
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
var fn__26932__auto___27911 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__26933__auto___27912 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__26934__auto___27913 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__27625 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Set event listeners in the :on map",new cljs.core.Keyword(null,"message","message",-406056002),(""+"Event handler attributes are not supported. Instead of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+" set :on {"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash(cljs.core.name(attr).substring((2)))))+" ,,,}")], null);
var G__27625__$1 = (cljs.core.truth_(fn__26932__auto___27911)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27625,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__26932__auto___27911):G__27625);
var G__27625__$2 = (cljs.core.truth_(alias__26933__auto___27912)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27625__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__26933__auto___27912):G__27625__$1);
if(cljs.core.truth_(fd__26934__auto___27913)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27625__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__26934__auto___27913);
} else {
return G__27625__$2;
}
})());
} else {
}

if(cljs.core.not(cljs.core.re_find(/^[a-zA-Z\-:_][a-zA-Z0-9\-:\._]*$/,cljs.core.name(attr)))){
var fn__26932__auto___27926 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__26933__auto___27927 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__26934__auto___27928 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__27626 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Invalid attribute name "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr))),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var attr__27471__auto__ = cljs.core.name(attr);
return (""+"Tried to set attribute "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr__27471__auto__)+" to value "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+". This will fail"+"horribly in the browser because "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find(/^[0-9]/,attr__27471__auto__))?" it starts with a number":(cljs.core.truth_(cljs.core.re_find(/^\./,attr__27471__auto__))?" it starts with a dot":(""+" it contains the character "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/[^a-zA-Z0-9\-:\._]/,attr__27471__auto__)))
)))+", which isn't allowed as per the HTML spec.");
})()], null);
var G__27626__$1 = (cljs.core.truth_(fn__26932__auto___27926)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27626,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__26932__auto___27926):G__27626);
var G__27626__$2 = (cljs.core.truth_(alias__26933__auto___27927)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27626__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__26933__auto___27927):G__27626__$1);
if(cljs.core.truth_(fd__26934__auto___27928)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27626__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__26934__auto___27928);
} else {
return G__27626__$2;
}
})());
} else {
}

return replicant.protocols.set_attribute(renderer,el,an,(function (){var G__27627 = v;
if((((v instanceof cljs.core.Keyword)) || ((v instanceof cljs.core.Symbol)))){
return replicant.core.stringify(G__27627);
} else {
return G__27627;
}
})(),(function (){var G__27628 = cljs.core.PersistentArrayMap.EMPTY;
var G__27628__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),an.indexOf("xml:")))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27628,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xmlns):G__27628);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),an.indexOf("xlink:"))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27628__$1,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xlinkns);
} else {
return G__27628__$1;
}
})());
});
replicant.core.update_attr = (function replicant$core$update_attr(renderer,el,attr,new$,old){
if(cljs.core.truth_(cljs.core.namespace(attr))){
return null;
} else {
var G__27629 = attr;
var G__27629__$1 = (((G__27629 instanceof cljs.core.Keyword))?G__27629.fqn:null);
switch (G__27629__$1) {
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__27631_SHARP_,p2__27630_SHARP_){
return replicant.core.update_attr(renderer,el,p2__27630_SHARP_,new_attrs,old_attrs);
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
return cljs.core.run_BANG_((function (p1__27632_SHARP_){
if((!((p1__27632_SHARP_ instanceof cljs.core.Keyword)))){
var fn__26932__auto___27952 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__26933__auto___27953 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__26934__auto___27954 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__27633 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Style key "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27632_SHARP_)+" should be a keyword"),new cljs.core.Keyword(null,"message","message",-406056002),(""+"Replicant expects your style keys to be keywords. While anything that supports `name` (strings, symbols) will "+"technically work, mixing types will hinder Replicant from recognizing changes properly. Rendering once with "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27632_SHARP_)))+" and once with "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27632_SHARP_))))+" may produce undesired results. Your safest option is to always use keywords.")], null);
var G__27633__$1 = (cljs.core.truth_(fn__26932__auto___27952)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27633,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__26932__auto___27952):G__27633);
var G__27633__$2 = (cljs.core.truth_(alias__26933__auto___27953)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27633__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__26933__auto___27953):G__27633__$1);
if(cljs.core.truth_(fd__26934__auto___27954)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27633__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__26934__auto___27954);
} else {
return G__27633__$2;
}
})());
} else {
}

if((!((function (){var name__27460__auto__ = cljs.core.name(p1__27632_SHARP_);
return ((clojure.string.starts_with_QMARK_(name__27460__auto__,"--")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__27460__auto__,clojure.string.lower_case(name__27460__auto__))));
})()))){
var fn__26932__auto___27970 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__26933__auto___27971 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__26934__auto___27972 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__27634 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Use "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k(p1__27632_SHARP_))+", not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27632_SHARP_)),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__27634__$1 = (cljs.core.truth_(fn__26932__auto___27970)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27634,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__26932__auto___27970):G__27634);
var G__27634__$2 = (cljs.core.truth_(alias__26933__auto___27971)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27634__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__26933__auto___27971):G__27634__$1);
if(cljs.core.truth_(fd__26934__auto___27972)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27634__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__26934__auto___27972);
} else {
return G__27634__$2;
}
})());
} else {
}

return replicant.protocols.set_style(renderer,el,p1__27632_SHARP_,replicant.core.get_style_val(p1__27632_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__27632_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new_styles,cljs.core.keys(new_styles)));
});
replicant.core.set_classes = (function replicant$core$set_classes(renderer,el,new_classes){
return cljs.core.run_BANG_((function (p1__27635_SHARP_){
return replicant.protocols.add_class(renderer,el,p1__27635_SHARP_);
}),new_classes);
});
replicant.core.set_attr = (function replicant$core$set_attr(renderer,el,attr,new$){
if(cljs.core.truth_(cljs.core.namespace(attr))){
return null;
} else {
var G__27636 = attr;
var G__27636__$1 = (((G__27636 instanceof cljs.core.Keyword))?G__27636.fqn:null);
switch (G__27636__$1) {
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
return cljs.core.run_BANG_((function (p1__27637_SHARP_){
return replicant.core.set_attr(renderer,el,p1__27637_SHARP_,new_attrs);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new_attrs,cljs.core.keys(new_attrs)));
});
replicant.core.render_default_alias = (function replicant$core$render_default_alias(tag_name,_attrs,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-replicant-error","data-replicant-error",1583668098),(""+"Undefined alias "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name))], null),(function (){var iter__5628__auto__ = (function replicant$core$render_default_alias_$_iter__27638(s__27639){
return (new cljs.core.LazySeq(null,(function (){
var s__27639__$1 = s__27639;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__27639__$1);
if(temp__5823__auto__){
var s__27639__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27639__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__27639__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__27641 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__27640 = (0);
while(true){
if((i__27640 < size__5627__auto__)){
var child = cljs.core._nth(c__5626__auto__,i__27640);
cljs.core.chunk_append(b__27641,(function (){var G__27642 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.hiccup.hiccup_QMARK_(child)))))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__27642], 0));
} else {
return G__27642;
}
})());

var G__28011 = (i__27640 + (1));
i__27640 = G__28011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27641),replicant$core$render_default_alias_$_iter__27638(cljs.core.chunk_rest(s__27639__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27641),null);
}
} else {
var child = cljs.core.first(s__27639__$2);
return cljs.core.cons((function (){var G__27643 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.hiccup.hiccup_QMARK_(child)))))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__27643], 0));
} else {
return G__27643;
}
})(),replicant$core$render_default_alias_$_iter__27638(cljs.core.rest(s__27639__$2)));
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
replicant.core.get_alias_headers = (function replicant$core$get_alias_headers(p__27645,headers){
var map__27646 = p__27645;
var map__27646__$1 = cljs.core.__destructure_map(map__27646);
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27646__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27646__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var on_alias_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27646__$1,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043));
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
var attrs__$1 = (function (){var G__27647 = attrs;
var G__27647__$1 = (cljs.core.truth_(id)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__27647,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__27644_SHARP_){
var or__5142__auto__ = p1__27644_SHARP_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return id;
}
})):G__27647);
var G__27647__$2 = (cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.seq(classes);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs);
}
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__27647__$1,new cljs.core.Keyword(null,"class","class",-2030961996),replicant.core.add_classes,classes):G__27647__$1);
if(cljs.core.truth_(alias_data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27647__$2,new cljs.core.Keyword("replicant","alias-data","replicant/alias-data",1929752572),alias_data);
} else {
return G__27647__$2;
}
})();
var children = cljs.core.seq(replicant.core.flatten_seqs((headers[(5)])));
if((!(cljs.core.fn_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(aliases,tag_name))))){
var fn__26932__auto___28031 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__26933__auto___28032 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__26934__auto___28033 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__27648 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Alias "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)+" isn't defined"),new cljs.core.Keyword(null,"message","message",-406056002),(""+"There's no available function to render this alias. Replicant will "+"render an empty element with data attributes in its place. Available "+"aliases are:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.keys(aliases))))], null);
var G__27648__$1 = (cljs.core.truth_(fn__26932__auto___28031)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27648,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__26932__auto___28031):G__27648);
var G__27648__$2 = (cljs.core.truth_(alias__26933__auto___28032)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27648__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__26933__auto___28032):G__27648__$1);
if(cljs.core.truth_(fd__26934__auto___28033)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27648__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__26934__auto___28033);
} else {
return G__27648__$2;
}
})());
} else {
}

var alias_hiccup = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(attrs__$1,children) : f.call(null,attrs__$1,children));
if((!(((typeof alias_hiccup === 'string') || (replicant.hiccup.hiccup_QMARK_(alias_hiccup)))))){
var fn__26932__auto___28054 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__26933__auto___28055 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__26934__auto___28056 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__27649 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),(""+"Aliases must return valid hiccup"),new cljs.core.Keyword(null,"message","message",-406056002),(""+"Aliases must always represent a node in the document, and "+"cannot return "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((alias_hiccup == null))?"nil":((cljs.core.map_QMARK_(alias_hiccup))?"a map":((cljs.core.coll_QMARK_(alias_hiccup))?"multiple nodes":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([alias_hiccup], 0))
))))+". Please check the implementation of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)+".")], null);
var G__27649__$1 = (cljs.core.truth_(fn__26932__auto___28054)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27649,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__26932__auto___28054):G__27649);
var G__27649__$2 = (cljs.core.truth_(alias__26933__auto___28055)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27649__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__26933__auto___28055):G__27649__$1);
if(cljs.core.truth_(fd__26934__auto___28056)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27649__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__26934__auto___28056);
} else {
return G__27649__$2;
}
})());
} else {
}

var hh__26763__auto__ = replicant.core.get_hiccup_headers(null,alias_hiccup);
var alias__26764__auto__ = headers;
if(cljs.core.truth_(hh__26763__auto__)){
var G__27650 = hh__26763__auto__;
(G__27650[(3)] = (function (){var or__5142__auto__ = (alias__26764__auto__[(3)]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (hh__26763__auto__[(3)]);
}
})());

(G__27650[(7)] = (hh__26763__auto__[(7)]));

(G__27650[(9)] = (alias__26764__auto__[(7)]));

return G__27650;
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
replicant.core.create_node = (function replicant$core$create_node(p__27651,headers){
var map__27652 = p__27651;
var map__27652__$1 = cljs.core.__destructure_map(map__27652);
var impl = map__27652__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27652__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5823__auto___28067 = (function (){var or__5142__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5823__auto___28067)){
var ctx__26921__auto___28072 = temp__5823__auto___28067;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__26921__auto___28072);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

var or__5142__auto__ = (function (){var temp__5823__auto__ = (headers[(8)]);
if(cljs.core.truth_(temp__5823__auto__)){
var text = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.protocols.create_text_node(renderer,text),(function (){var text__27325__auto__ = text;
return (new Array(null,null,null,null,null,null,false,text__27325__auto__,text__27325__auto__,null,null));
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
var vec__27653 = (replicant.core.create_node.cljs$core$IFn$_invoke$arity$2 ? replicant.core.create_node.cljs$core$IFn$_invoke$arity$2(impl,alias_headers) : replicant.core.create_node.call(null,impl,alias_headers));
var child_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27653,(0),null);
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27653,(1),null);
var k = (alias_headers[(3)]);
var vdom__$1 = (function (){var headers__27332__auto__ = headers;
return (new Array((headers__27332__auto__[(0)]),(headers__27332__auto__[(3)]),(headers__27332__auto__[(2)]),(headers[(4)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom], null),(function (){var G__27656 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__27656,k);
} else {
return G__27656;
}
})(),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__27332__auto__[(4)]))),(headers__27332__auto__[(7)]),null,null,(1)));
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
var vec__27657 = replicant.core.get_mounting_attrs(headers);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27657,(0),null);
var mounting_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27657,(1),null);
var _ = replicant.core.set_attributes(renderer,node,(function (){var or__5142__auto____$2 = mounting_attrs;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return attrs;
}
})());
var vec__27660 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__27663,child_headers){
var vec__27664 = p__27663;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27664,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27664,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27664,(2),null);
if(cljs.core.truth_(child_headers)){
var vec__27667 = (replicant.core.create_node.cljs$core$IFn$_invoke$arity$2 ? replicant.core.create_node.cljs$core$IFn$_invoke$arity$2(impl,child_headers) : replicant.core.create_node.call(null,impl,child_headers));
var child_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27667,(0),null);
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27667,(1),null);
var k = (vdom[(1)]);
replicant.protocols.append_child(renderer,node,child_node);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,vdom),(function (){var G__27670 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__27670,k);
} else {
return G__27670;
}
})(),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,null),ks,n], null);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY),(0)], null),replicant.core.get_children(headers,ns));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27660,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27660,(1),null);
var n_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27660,(2),null);
replicant.core.register_hooks(impl,node,headers);

if(cljs.core.truth_(mounting_attrs)){
replicant.core.register_mount(impl,node,mounting_attrs,attrs);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,(function (){var headers__27332__auto__ = headers;
return (new Array((headers__27332__auto__[(0)]),(headers__27332__auto__[(3)]),(headers__27332__auto__[(2)]),attrs,cljs.core.persistent_BANG_(children),cljs.core.persistent_BANG_(ks),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__27332__auto__[(4)]))),(headers__27332__auto__[(7)]),null,null,n_children));
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
var G__28130 = (coll_n + (1));
var G__28131 = dom_n;
var G__28132 = cljs.core.next(xs__$1);
coll_n = G__28130;
dom_n = G__28131;
xs__$1 = G__28132;
continue;
} else {
if(cljs.core.truth_((function (){var G__27672 = cljs.core.first(xs__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27672) : f.call(null,G__27672));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_n,dom_n], null);
} else {
var G__28136 = (coll_n + (1));
var G__28137 = (dom_n + (1));
var G__28138 = cljs.core.next(xs__$1);
coll_n = G__28136;
dom_n = G__28137;
xs__$1 = G__28138;
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
replicant.core.insert_children = (function replicant$core$insert_children(p__27673,el,children,vdom){
var map__27674 = p__27673;
var map__27674__$1 = cljs.core.__destructure_map(map__27674);
var impl = map__27674__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27674__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__27675,child){
var vec__27676 = p__27675;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27676,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27676,(1),null);
if(cljs.core.truth_(child)){
var vec__27679 = replicant.core.create_node(impl,child);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27679,(0),null);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27679,(1),null);
replicant.protocols.append_child(renderer,el,node);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,vdom__$1),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,null),n], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom,(0)], null),children);
});
replicant.core.remove_child = (function replicant$core$remove_child(p__27682,unmounts,el,n,vdom){
var map__27683 = p__27682;
var map__27683__$1 = cljs.core.__destructure_map(map__27683);
var impl = map__27683__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27683__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
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
var vdom__$1 = (function (){var vdom__27319__auto__ = vdom;
(vdom__27319__auto__[(9)] = replicant.vdom.id.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(replicant.vdom.id.cljs$core$IDeref$_deref$arity$1(null) + (1))));

return vdom__27319__auto__;
})();
var child = replicant.protocols.get_child(renderer,el,n);
replicant.core.update_attributes(renderer,child,attrs,(vdom__$1[(3)]));

cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.on_transition_end(renderer,child,(function (){
cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.remove_child(renderer,el,child);

var temp__5823__auto___28161 = new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((vdom__$1[(3)]));
if(cljs.core.truth_(temp__5823__auto___28161)){
var hook_28162 = temp__5823__auto___28161;
replicant.core.call_hook(renderer,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook_28162,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),child,null,vdom__$1], null));
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__27684 = headers;
if((G__27684 == null)){
return null;
} else {
return (G__27684[(7)]);
}
})(),(function (){var G__27685 = vdom;
if((G__27685 == null)){
return null;
} else {
return (G__27685[(7)]);
}
})());
});
replicant.core.move_nodes = (function replicant$core$move_nodes(p__27688,el,headers,new_children,vdom,old_children,n,n_children){
var map__27689 = p__27688;
var map__27689__$1 = cljs.core.__destructure_map(map__27689);
var impl = map__27689__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27689__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var vec__27690 = (cljs.core.truth_((headers[(3)]))?replicant.core.index_of((function (p1__27686_SHARP_){
return replicant.core.same_QMARK_(headers,p1__27686_SHARP_);
}),old_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var o_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27690,(0),null);
var o_dom_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27690,(1),null);
var vec__27693 = (cljs.core.truth_((vdom[(1)]))?replicant.core.index_of((function (p1__27687_SHARP_){
return replicant.core.same_QMARK_(p1__27687_SHARP_,vdom);
}),new_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var n_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27693,(0),null);
var n_dom_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27693,(1),null);
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
var G__28200 = cljs.core.next(children);
var G__28201 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom__$1,null);
var G__28202 = n__$1;
var G__28203 = n_children__$2;
children = G__28200;
vdom__$1 = G__28201;
n__$1 = G__28202;
n_children__$2 = G__28203;
continue;
} else {
var temp__5821__auto__ = replicant.core.remove_child(impl,unmounts,el,n__$1,cljs.core.first(children));
if(cljs.core.truth_(temp__5821__auto__)){
var pending_vdom = temp__5821__auto__;
var G__28205 = cljs.core.next(children);
var G__28206 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom__$1,pending_vdom);
var G__28207 = (n__$1 + (1));
var G__28208 = n_children__$2;
children = G__28205;
vdom__$1 = G__28206;
n__$1 = G__28207;
n_children__$2 = G__28208;
continue;
} else {
var G__28210 = cljs.core.next(children);
var G__28211 = vdom__$1;
var G__28212 = n__$1;
var G__28213 = (n_children__$2 - (1));
children = G__28210;
vdom__$1 = G__28211;
n__$1 = G__28212;
n_children__$2 = G__28213;
continue;
}

}
}
break;
}
} else {
if(old_empty_QMARK_){
var vec__27714 = replicant.core.insert_children(impl,el,new_c,vdom);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27714,(0),null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27714,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_(vdom__$1),new_ks,(n_children__$1 + n__$1)], null);
} else {
if(((new_nil_QMARK_) && (old_nil_QMARK_))){
var G__28219 = cljs.core.next(new_c);
var G__28220 = cljs.core.next(old_c);
var G__28221 = n;
var G__28222 = move_n;
var G__28223 = n_children__$1;
var G__28224 = changed_QMARK_;
var G__28225 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__28219;
old_c = G__28220;
n = G__28221;
move_n = G__28222;
n_children__$1 = G__28223;
changed_QMARK_ = G__28224;
vdom = G__28225;
continue;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = old_vdom;
if(cljs.core.truth_(and__5140__auto__)){
return (old_vdom[(9)]);
} else {
return and__5140__auto__;
}
})())){
var vec__27717 = (cljs.core.truth_((function (){var and__5140__auto__ = new_headers;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((function (){var G__27720 = (new_headers[(3)]);
return (old_ks.cljs$core$IFn$_invoke$arity$1 ? old_ks.cljs$core$IFn$_invoke$arity$1(G__27720) : old_ks.call(null,G__27720));
})());
} else {
return and__5140__auto__;
}
})())?(function (){var res = replicant.core.create_node(impl,new_headers);
replicant.core.insert_node(r,el,cljs.core.first(res),n,n_children__$1);

return res;
})():null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27717,(0),null);
var child_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27717,(1),null);
if(cljs.core.truth_((function (){var G__27721 = (old_vdom[(9)]);
return (unmounts.cljs$core$IFn$_invoke$arity$1 ? unmounts.cljs$core$IFn$_invoke$arity$1(G__27721) : unmounts.call(null,G__27721));
})())){
if(new_nil_QMARK_){
var G__28233 = cljs.core.next(new_c);
var G__28234 = cljs.core.next(old_c);
var G__28235 = (n + (1));
var G__28236 = move_n;
var G__28237 = n_children__$1;
var G__28238 = changed_QMARK_;
var G__28239 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,old_vdom);
new_c = G__28233;
old_c = G__28234;
n = G__28235;
move_n = G__28236;
n_children__$1 = G__28237;
changed_QMARK_ = G__28238;
vdom = G__28239;
continue;
} else {
if(cljs.core.truth_(child)){
var G__28241 = cljs.core.next(new_c);
var G__28242 = cljs.core.next(old_c);
var G__28243 = (n + (2));
var G__28244 = move_n;
var G__28245 = (n_children__$1 + (1));
var G__28246 = true;
var G__28247 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__28241;
old_c = G__28242;
n = G__28243;
move_n = G__28244;
n_children__$1 = G__28245;
changed_QMARK_ = G__28246;
vdom = G__28247;
continue;
} else {
var G__28249 = new_c;
var G__28250 = cljs.core.next(old_c);
var G__28251 = (n + (1));
var G__28252 = move_n;
var G__28253 = n_children__$1;
var G__28254 = changed_QMARK_;
var G__28255 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,old_vdom);
new_c = G__28249;
old_c = G__28250;
n = G__28251;
move_n = G__28252;
n_children__$1 = G__28253;
changed_QMARK_ = G__28254;
vdom = G__28255;
continue;

}
}
} else {
if(new_nil_QMARK_){
var G__28256 = cljs.core.next(new_c);
var G__28257 = cljs.core.next(old_c);
var G__28258 = n;
var G__28259 = (move_n - (1));
var G__28260 = (n_children__$1 - (1));
var G__28261 = changed_QMARK_;
var G__28262 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__28256;
old_c = G__28257;
n = G__28258;
move_n = G__28259;
n_children__$1 = G__28260;
changed_QMARK_ = G__28261;
vdom = G__28262;
continue;
} else {
if(cljs.core.truth_(child)){
var G__28263 = cljs.core.next(new_c);
var G__28264 = cljs.core.next(old_c);
var G__28265 = (n + (1));
var G__28266 = move_n;
var G__28267 = n_children__$1;
var G__28268 = true;
var G__28269 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__28263;
old_c = G__28264;
n = G__28265;
move_n = G__28266;
n_children__$1 = G__28267;
changed_QMARK_ = G__28268;
vdom = G__28269;
continue;
} else {
var G__28274 = new_c;
var G__28275 = cljs.core.next(old_c);
var G__28276 = n;
var G__28277 = (move_n - (1));
var G__28278 = (n_children__$1 - (1));
var G__28279 = changed_QMARK_;
var G__28280 = vdom;
new_c = G__28274;
old_c = G__28275;
n = G__28276;
move_n = G__28277;
n_children__$1 = G__28278;
changed_QMARK_ = G__28279;
vdom = G__28280;
continue;

}
}
}
} else {
if(new_nil_QMARK_){
if(cljs.core.contains_QMARK_(new_ks,(old_vdom[(1)]))){
var G__28283 = cljs.core.next(new_c);
var G__28284 = old_c;
var G__28285 = n;
var G__28286 = move_n;
var G__28287 = n_children__$1;
var G__28288 = true;
var G__28289 = vdom;
new_c = G__28283;
old_c = G__28284;
n = G__28285;
move_n = G__28286;
n_children__$1 = G__28287;
changed_QMARK_ = G__28288;
vdom = G__28289;
continue;
} else {
var temp__5821__auto__ = replicant.core.remove_child(impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5821__auto__)){
var unmounting_node = temp__5821__auto__;
var G__28294 = cljs.core.next(new_c);
var G__28295 = cljs.core.next(old_c);
var G__28296 = (n + (1));
var G__28297 = move_n;
var G__28298 = n_children__$1;
var G__28299 = true;
var G__28300 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,unmounting_node);
new_c = G__28294;
old_c = G__28295;
n = G__28296;
move_n = G__28297;
n_children__$1 = G__28298;
changed_QMARK_ = G__28299;
vdom = G__28300;
continue;
} else {
var G__28301 = cljs.core.next(new_c);
var G__28302 = cljs.core.next(old_c);
var G__28303 = n;
var G__28304 = move_n;
var G__28305 = (n_children__$1 - (1));
var G__28306 = true;
var G__28307 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__28301;
old_c = G__28302;
n = G__28303;
move_n = G__28304;
n_children__$1 = G__28305;
changed_QMARK_ = G__28306;
vdom = G__28307;
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

var G__28315 = cljs.core.next(new_c);
var G__28316 = cljs.core.next(old_c);
var G__28317 = (n + (1));
var G__28318 = move_n;
var G__28319 = n_children__$1;
var G__28320 = (function (){var or__5142__auto__ = changed_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (!(node_unchanged_QMARK_));
}
})();
var G__28321 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,new_vdom);
new_c = G__28315;
old_c = G__28316;
n = G__28317;
move_n = G__28318;
n_children__$1 = G__28319;
changed_QMARK_ = G__28320;
vdom = G__28321;
continue;
} else {
if(cljs.core.not((function (){var G__27722 = (new_headers[(3)]);
return (old_ks.cljs$core$IFn$_invoke$arity$1 ? old_ks.cljs$core$IFn$_invoke$arity$1(G__27722) : old_ks.call(null,G__27722));
})())){
var vec__27723 = replicant.core.create_node(impl,new_headers);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27723,(0),null);
var child_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27723,(1),null);
replicant.core.insert_node(r,el,child,n,n_children__$1);

var G__28324 = cljs.core.next(new_c);
var G__28325 = (function (){var G__27726 = old_c;
if((old_vdom == null)){
return cljs.core.next(G__27726);
} else {
return G__27726;
}
})();
var G__28326 = (n + (1));
var G__28327 = move_n;
var G__28328 = (n_children__$1 + (1));
var G__28329 = true;
var G__28330 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__28324;
old_c = G__28325;
n = G__28326;
move_n = G__28327;
n_children__$1 = G__28328;
changed_QMARK_ = G__28329;
vdom = G__28330;
continue;
} else {
if(((old_nil_QMARK_) || (cljs.core.not((function (){var G__27727 = (old_vdom[(1)]);
return (new_ks.cljs$core$IFn$_invoke$arity$1 ? new_ks.cljs$core$IFn$_invoke$arity$1(G__27727) : new_ks.call(null,G__27727));
})())))){
var temp__5821__auto__ = replicant.core.remove_child(impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5821__auto__)){
var unmounting_node = temp__5821__auto__;
var G__28337 = new_c;
var G__28338 = cljs.core.next(old_c);
var G__28339 = (n + (1));
var G__28340 = move_n;
var G__28341 = n_children__$1;
var G__28342 = true;
var G__28343 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,unmounting_node);
new_c = G__28337;
old_c = G__28338;
n = G__28339;
move_n = G__28340;
n_children__$1 = G__28341;
changed_QMARK_ = G__28342;
vdom = G__28343;
continue;
} else {
var G__28347 = new_c;
var G__28348 = cljs.core.next(old_c);
var G__28349 = n;
var G__28350 = move_n;
var G__28351 = (n_children__$1 - (1));
var G__28352 = true;
var G__28353 = vdom;
new_c = G__28347;
old_c = G__28348;
n = G__28349;
move_n = G__28350;
n_children__$1 = G__28351;
changed_QMARK_ = G__28352;
vdom = G__28353;
continue;
}
} else {
var vec__27728 = replicant.core.move_nodes(impl,el,new_headers,new_c,old_vdom,old_c,n,n_children__$1);
var nc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27728,(0),null);
var oc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27728,(1),null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27728,(2),null);
var move_n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27728,(3),null);
var vdom_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27728,(4),null);
var G__28355 = nc;
var G__28356 = oc;
var G__28357 = n__$1;
var G__28358 = move_n__$1;
var G__28359 = n_children__$1;
var G__28360 = true;
var G__28361 = (function (){var G__27731 = vdom;
if(cljs.core.truth_(vdom_node)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__27731,vdom_node);
} else {
return G__27731;
}
})();
new_c = G__28355;
old_c = G__28356;
n = G__28357;
move_n = G__28358;
n_children__$1 = G__28359;
changed_QMARK_ = G__28360;
vdom = G__28361;
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
replicant.core.reconcile_STAR_ = (function replicant$core$reconcile_STAR_(p__27732,el,headers,vdom,index){
var map__27733 = p__27732;
var map__27733__$1 = cljs.core.__destructure_map(map__27733);
var impl = map__27733__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27733__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5823__auto___28363 = (function (){var or__5142__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5823__auto___28363)){
var ctx__26921__auto___28370 = temp__5823__auto___28363;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__26921__auto___28370);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

if((!((!(replicant.asserts.has_bad_conditional_attrs_QMARK_(vdom,headers)))))){
var fn__26932__auto___28374 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__26933__auto___28375 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__26934__auto___28376 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__27734 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5142__auto__ = null;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid conditionals around the attribute map",new cljs.core.Keyword(null,"message","message",-406056002),replicant.asserts.convey_bad_conditional_attributes(vdom,headers)], null);
var G__27734__$1 = (cljs.core.truth_(fn__26932__auto___28374)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27734,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__26932__auto___28374):G__27734);
var G__27734__$2 = (cljs.core.truth_(alias__26933__auto___28375)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27734__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__26933__auto___28375):G__27734__$1);
if(cljs.core.truth_(fd__26934__auto___28376)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27734__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__26934__auto___28376);
} else {
return G__27734__$2;
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
var updated_vdom = (cljs.core.truth_(replicant.core.reusable_QMARK_(alias_headers,vdom_child))?(replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5 ? replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5(impl,el,alias_headers,vdom_child,index) : replicant.core.reconcile_STAR_.call(null,impl,el,alias_headers,vdom_child,index)):(function (){var vec__27735 = replicant.core.create_node(impl,alias_headers);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27735,(0),null);
var updated_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27735,(1),null);
replicant.protocols.replace_child(renderer,el,node,replicant.protocols.get_child(renderer,el,index));

return updated_vdom;
})());
var headers__27332__auto__ = headers;
return (new Array((headers__27332__auto__[(0)]),(headers__27332__auto__[(3)]),(headers__27332__auto__[(2)]),(headers[(4)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_vdom], null),(function (){var temp__5823__auto____$1 = (updated_vdom[(1)]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var k = temp__5823__auto____$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
} else {
return null;
}
})(),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__27332__auto__[(4)]))),(headers__27332__auto__[(7)]),null,null,(1)));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((headers[(8)]),(vdom[(8)])))?(function (){var vec__27738 = replicant.core.create_node(impl,headers);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27738,(0),null);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27738,(1),null);
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
var vec__27741 = (cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true], null):replicant.core.get_children_ks(headers__$1,replicant.core.get_ns(headers__$1)));
var new_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27741,(0),null);
var new_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27741,(1),null);
var inner_html_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27741,(2),null);
var vec__27744 = (cljs.core.truth_(new cljs.core.Keyword(null,"contenteditable","contenteditable",-770210530).cljs$core$IFn$_invoke$arity$1(vdom_attrs))?(function (){
replicant.protocols.remove_all_children(renderer,child);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null);
})()
:(cljs.core.truth_(inner_html_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vdom[(4)]),(vdom[(5)]),(vdom[(10)])], null)
));
var old_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27744,(0),null);
var old_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27744,(1),null);
var old_nc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27744,(2),null);
var vec__27747 = replicant.core.update_children(impl,child,new_children,new_ks,old_children,old_ks,old_nc);
var children_changed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27747,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27747,(1),null);
var child_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27747,(2),null);
var n_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27747,(3),null);
var attrs_changed_QMARK___$1 = ((attrs_changed_QMARK_) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1(vdom_attrs))));
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,headers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom,(cljs.core.truth_((function (){var and__5140__auto__ = attrs_changed_QMARK___$1;
if(and__5140__auto__){
return children_changed_QMARK_;
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895),new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null):((attrs_changed_QMARK___$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null)
))], 0));

var headers__27332__auto__ = headers__$1;
return (new Array((headers__27332__auto__[(0)]),(headers__27332__auto__[(3)]),(headers__27332__auto__[(2)]),attrs,children,child_ks,cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__27332__auto__[(4)]))),(headers__27332__auto__[(7)]),null,null,n_children));
}
}
}
});
replicant.core.perform_post_mount_update = (function replicant$core$perform_post_mount_update(renderer,p__27750){
var vec__27751 = p__27750;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27751,(0),null);
var mounting_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27751,(1),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27751,(2),null);
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
var len__5876__auto___28377 = arguments.length;
var i__5877__auto___28378 = (0);
while(true){
if((i__5877__auto___28378 < len__5876__auto___28377)){
args__5882__auto__.push((arguments[i__5877__auto___28378]));

var G__28379 = (i__5877__auto___28378 + (1));
i__5877__auto___28378 = G__28379;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic = (function (renderer,el,hiccup,p__27763){
var vec__27764 = p__27763;
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27764,(0),null);
var map__27767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27764,(1),null);
var map__27767__$1 = cljs.core.__destructure_map(map__27767);
var unmounts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27767__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521));
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27767__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27767__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var on_alias_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27767__$1,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043));
var impl = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"hooks","hooks",-413590103),cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"mounts","mounts",-791474425),cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"unmounts","unmounts",173366521),(function (){var or__5142__auto__ = unmounts;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
})(),new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930),alias_data,new cljs.core.Keyword(null,"on-alias-exception","on-alias-exception",1142240043),on_alias_exception], null);
var vdom__$1 = ((cljs.core.list_QMARK_(hiccup))?(function (){var vec__27768 = replicant.core.get_children_ks((function (){var pt__26723__auto__ = [null,null,null];
var G__27771 = pt__26723__auto__;
G__27771.push((function (){var temp__5823__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(null);
if(cljs.core.truth_(temp__5823__auto__)){
var k__26716__auto__ = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt__26723__auto__[(0)]),k__26716__auto__], null);
} else {
return null;
}
})());

G__27771.push(null);

G__27771.push(hiccup);

G__27771.push(null);

G__27771.push(null);

G__27771.push(null);

G__27771.push(null);

return G__27771;
})(),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27768,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27768,(1),null);
return cljs.core.second(replicant.core.update_children(impl,el,children,ks,vdom,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__27754_SHARP_){
return (p1__27754_SHARP_[(1)]);
}),vdom)),cljs.core.count(vdom)));
})():(function (){var headers = replicant.core.get_hiccup_headers(null,hiccup);
if(cljs.core.truth_(headers)){
var temp__5823__auto___28391 = (function (){var or__5142__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5823__auto___28391)){
var ctx__26921__auto___28392 = temp__5823__auto___28391;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__26921__auto___28392);
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
return cljs.core.second(replicant.core.update_children(impl,el,(cljs.core.truth_(headers)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [headers], null):null),(function (){var G__27772 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__27772,k);
} else {
return G__27772;
}
})(),vdom,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__27755_SHARP_){
return (p1__27755_SHARP_[(1)]);
}),vdom)),(cljs.core.truth_(cljs.core.first(vdom))?(1):(0))));
}
})());
var hooks = cljs.core.deref(new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(impl));
var temp__5821__auto___28397 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"mounts","mounts",-791474425).cljs$core$IFn$_invoke$arity$1(impl)));
if(temp__5821__auto___28397){
var mounts_28398 = temp__5821__auto___28397;
replicant.protocols.next_frame(renderer,(function (){
cljs.core.run_BANG_((function (p1__27756_SHARP_){
return replicant.core.perform_post_mount_update(renderer,p1__27756_SHARP_);
}),mounts_28398);

return cljs.core.run_BANG_((function (p1__27757_SHARP_){
return replicant.core.call_hook(renderer,p1__27757_SHARP_);
}),hooks);
}));
} else {
cljs.core.run_BANG_((function (p1__27758_SHARP_){
return replicant.core.call_hook(renderer,p1__27758_SHARP_);
}),hooks);
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),hooks,new cljs.core.Keyword(null,"vdom","vdom",953162958),vdom__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521),new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)], null);
}));

(replicant.core.reconcile.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.reconcile.cljs$lang$applyTo = (function (seq27759){
var G__27760 = cljs.core.first(seq27759);
var seq27759__$1 = cljs.core.next(seq27759);
var G__27761 = cljs.core.first(seq27759__$1);
var seq27759__$2 = cljs.core.next(seq27759__$1);
var G__27762 = cljs.core.first(seq27759__$2);
var seq27759__$3 = cljs.core.next(seq27759__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27760,G__27761,G__27762,seq27759__$3);
}));

replicant.assert.add_reporter(new cljs.core.Keyword("replicant.assert","default","replicant.assert/default",-504441266),replicant.console_logger.report);

//# sourceMappingURL=replicant.core.js.map
