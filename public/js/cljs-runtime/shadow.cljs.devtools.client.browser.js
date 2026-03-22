goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___21450 = arguments.length;
var i__5877__auto___21451 = (0);
while(true){
if((i__5877__auto___21451 < len__5876__auto___21450)){
args__5882__auto__.push((arguments[i__5877__auto___21451]));

var G__21452 = (i__5877__auto___21451 + (1));
i__5877__auto___21451 = G__21452;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21159){
var G__21160 = cljs.core.first(seq21159);
var seq21159__$1 = cljs.core.next(seq21159);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21160,seq21159__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21164 = cljs.core.seq(sources);
var chunk__21165 = null;
var count__21166 = (0);
var i__21167 = (0);
while(true){
if((i__21167 < count__21166)){
var map__21174 = chunk__21165.cljs$core$IIndexed$_nth$arity$2(null,i__21167);
var map__21174__$1 = cljs.core.__destructure_map(map__21174);
var src = map__21174__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21174__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21174__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21174__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21174__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21175){var e_21453 = e21175;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21453);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21453.message))));
}

var G__21454 = seq__21164;
var G__21455 = chunk__21165;
var G__21456 = count__21166;
var G__21457 = (i__21167 + (1));
seq__21164 = G__21454;
chunk__21165 = G__21455;
count__21166 = G__21456;
i__21167 = G__21457;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21164);
if(temp__5823__auto__){
var seq__21164__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21164__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21164__$1);
var G__21458 = cljs.core.chunk_rest(seq__21164__$1);
var G__21459 = c__5673__auto__;
var G__21460 = cljs.core.count(c__5673__auto__);
var G__21461 = (0);
seq__21164 = G__21458;
chunk__21165 = G__21459;
count__21166 = G__21460;
i__21167 = G__21461;
continue;
} else {
var map__21177 = cljs.core.first(seq__21164__$1);
var map__21177__$1 = cljs.core.__destructure_map(map__21177);
var src = map__21177__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21179){var e_21462 = e21179;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21462);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21462.message))));
}

var G__21463 = cljs.core.next(seq__21164__$1);
var G__21464 = null;
var G__21465 = (0);
var G__21466 = (0);
seq__21164 = G__21463;
chunk__21165 = G__21464;
count__21166 = G__21465;
i__21167 = G__21466;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21180 = cljs.core.seq(js_requires);
var chunk__21181 = null;
var count__21182 = (0);
var i__21183 = (0);
while(true){
if((i__21183 < count__21182)){
var js_ns = chunk__21181.cljs$core$IIndexed$_nth$arity$2(null,i__21183);
var require_str_21467 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21467);


var G__21468 = seq__21180;
var G__21469 = chunk__21181;
var G__21470 = count__21182;
var G__21471 = (i__21183 + (1));
seq__21180 = G__21468;
chunk__21181 = G__21469;
count__21182 = G__21470;
i__21183 = G__21471;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21180);
if(temp__5823__auto__){
var seq__21180__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21180__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21180__$1);
var G__21472 = cljs.core.chunk_rest(seq__21180__$1);
var G__21473 = c__5673__auto__;
var G__21474 = cljs.core.count(c__5673__auto__);
var G__21475 = (0);
seq__21180 = G__21472;
chunk__21181 = G__21473;
count__21182 = G__21474;
i__21183 = G__21475;
continue;
} else {
var js_ns = cljs.core.first(seq__21180__$1);
var require_str_21476 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21476);


var G__21477 = cljs.core.next(seq__21180__$1);
var G__21478 = null;
var G__21479 = (0);
var G__21480 = (0);
seq__21180 = G__21477;
chunk__21181 = G__21478;
count__21182 = G__21479;
i__21183 = G__21480;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21185){
var map__21186 = p__21185;
var map__21186__$1 = cljs.core.__destructure_map(map__21186);
var msg = map__21186__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21186__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21186__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21187(s__21188){
return (new cljs.core.LazySeq(null,(function (){
var s__21188__$1 = s__21188;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__21188__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__21193 = cljs.core.first(xs__6383__auto__);
var map__21193__$1 = cljs.core.__destructure_map(map__21193);
var src = map__21193__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21193__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21193__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__21188__$1,map__21193,map__21193__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21186,map__21186__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21187_$_iter__21189(s__21190){
return (new cljs.core.LazySeq(null,((function (s__21188__$1,map__21193,map__21193__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21186,map__21186__$1,msg,info,reload_info){
return (function (){
var s__21190__$1 = s__21190;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__21190__$1);
if(temp__5823__auto____$1){
var s__21190__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21190__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__21190__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__21192 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__21191 = (0);
while(true){
if((i__21191 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__21191);
cljs.core.chunk_append(b__21192,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21481 = (i__21191 + (1));
i__21191 = G__21481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21192),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21187_$_iter__21189(cljs.core.chunk_rest(s__21190__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21192),null);
}
} else {
var warning = cljs.core.first(s__21190__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21187_$_iter__21189(cljs.core.rest(s__21190__$2)));
}
} else {
return null;
}
break;
}
});})(s__21188__$1,map__21193,map__21193__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21186,map__21186__$1,msg,info,reload_info))
,null,null));
});})(s__21188__$1,map__21193,map__21193__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21186,map__21186__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21187(cljs.core.rest(s__21188__$1)));
} else {
var G__21482 = cljs.core.rest(s__21188__$1);
s__21188__$1 = G__21482;
continue;
}
} else {
var G__21483 = cljs.core.rest(s__21188__$1);
s__21188__$1 = G__21483;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21194_21484 = cljs.core.seq(warnings);
var chunk__21195_21485 = null;
var count__21196_21486 = (0);
var i__21197_21487 = (0);
while(true){
if((i__21197_21487 < count__21196_21486)){
var map__21200_21488 = chunk__21195_21485.cljs$core$IIndexed$_nth$arity$2(null,i__21197_21487);
var map__21200_21489__$1 = cljs.core.__destructure_map(map__21200_21488);
var w_21490 = map__21200_21489__$1;
var msg_21491__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21200_21489__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21200_21489__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21200_21489__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21200_21489__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21494)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21492)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21493)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21491__$1)));


var G__21495 = seq__21194_21484;
var G__21496 = chunk__21195_21485;
var G__21497 = count__21196_21486;
var G__21498 = (i__21197_21487 + (1));
seq__21194_21484 = G__21495;
chunk__21195_21485 = G__21496;
count__21196_21486 = G__21497;
i__21197_21487 = G__21498;
continue;
} else {
var temp__5823__auto___21499 = cljs.core.seq(seq__21194_21484);
if(temp__5823__auto___21499){
var seq__21194_21500__$1 = temp__5823__auto___21499;
if(cljs.core.chunked_seq_QMARK_(seq__21194_21500__$1)){
var c__5673__auto___21501 = cljs.core.chunk_first(seq__21194_21500__$1);
var G__21502 = cljs.core.chunk_rest(seq__21194_21500__$1);
var G__21503 = c__5673__auto___21501;
var G__21504 = cljs.core.count(c__5673__auto___21501);
var G__21505 = (0);
seq__21194_21484 = G__21502;
chunk__21195_21485 = G__21503;
count__21196_21486 = G__21504;
i__21197_21487 = G__21505;
continue;
} else {
var map__21201_21506 = cljs.core.first(seq__21194_21500__$1);
var map__21201_21507__$1 = cljs.core.__destructure_map(map__21201_21506);
var w_21508 = map__21201_21507__$1;
var msg_21509__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21201_21507__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21201_21507__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21201_21507__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21201_21507__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21512)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21510)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21511)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21509__$1)));


var G__21513 = cljs.core.next(seq__21194_21500__$1);
var G__21514 = null;
var G__21515 = (0);
var G__21516 = (0);
seq__21194_21484 = G__21513;
chunk__21195_21485 = G__21514;
count__21196_21486 = G__21515;
i__21197_21487 = G__21516;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21184_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21184_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5140__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5140__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21203 = node_uri;
G__21203.setQuery(null);

G__21203.setPath(new$);

return G__21203;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21204){
var map__21205 = p__21204;
var map__21205__$1 = cljs.core.__destructure_map(map__21205);
var msg = map__21205__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21205__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21205__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21206 = cljs.core.seq(updates);
var chunk__21208 = null;
var count__21209 = (0);
var i__21210 = (0);
while(true){
if((i__21210 < count__21209)){
var path = chunk__21208.cljs$core$IIndexed$_nth$arity$2(null,i__21210);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21320_21517 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21324_21518 = null;
var count__21325_21519 = (0);
var i__21326_21520 = (0);
while(true){
if((i__21326_21520 < count__21325_21519)){
var node_21521 = chunk__21324_21518.cljs$core$IIndexed$_nth$arity$2(null,i__21326_21520);
if(cljs.core.not(node_21521.shadow$old)){
var path_match_21522 = shadow.cljs.devtools.client.browser.match_paths(node_21521.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21522)){
var new_link_21523 = (function (){var G__21352 = node_21521.cloneNode(true);
G__21352.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21522)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21352;
})();
(node_21521.shadow$old = true);

(new_link_21523.onload = ((function (seq__21320_21517,chunk__21324_21518,count__21325_21519,i__21326_21520,seq__21206,chunk__21208,count__21209,i__21210,new_link_21523,path_match_21522,node_21521,path,map__21205,map__21205__$1,msg,updates,reload_info){
return (function (e){
var seq__21353_21524 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21355_21525 = null;
var count__21356_21526 = (0);
var i__21357_21527 = (0);
while(true){
if((i__21357_21527 < count__21356_21526)){
var map__21361_21528 = chunk__21355_21525.cljs$core$IIndexed$_nth$arity$2(null,i__21357_21527);
var map__21361_21529__$1 = cljs.core.__destructure_map(map__21361_21528);
var task_21530 = map__21361_21529__$1;
var fn_str_21531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21361_21529__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21361_21529__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21533 = goog.getObjectByName(fn_str_21531,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21532)));

(fn_obj_21533.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21533.cljs$core$IFn$_invoke$arity$2(path,new_link_21523) : fn_obj_21533.call(null,path,new_link_21523));


var G__21534 = seq__21353_21524;
var G__21535 = chunk__21355_21525;
var G__21536 = count__21356_21526;
var G__21537 = (i__21357_21527 + (1));
seq__21353_21524 = G__21534;
chunk__21355_21525 = G__21535;
count__21356_21526 = G__21536;
i__21357_21527 = G__21537;
continue;
} else {
var temp__5823__auto___21538 = cljs.core.seq(seq__21353_21524);
if(temp__5823__auto___21538){
var seq__21353_21539__$1 = temp__5823__auto___21538;
if(cljs.core.chunked_seq_QMARK_(seq__21353_21539__$1)){
var c__5673__auto___21540 = cljs.core.chunk_first(seq__21353_21539__$1);
var G__21541 = cljs.core.chunk_rest(seq__21353_21539__$1);
var G__21542 = c__5673__auto___21540;
var G__21543 = cljs.core.count(c__5673__auto___21540);
var G__21544 = (0);
seq__21353_21524 = G__21541;
chunk__21355_21525 = G__21542;
count__21356_21526 = G__21543;
i__21357_21527 = G__21544;
continue;
} else {
var map__21362_21545 = cljs.core.first(seq__21353_21539__$1);
var map__21362_21546__$1 = cljs.core.__destructure_map(map__21362_21545);
var task_21547 = map__21362_21546__$1;
var fn_str_21548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21362_21546__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21362_21546__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21550 = goog.getObjectByName(fn_str_21548,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21549)));

(fn_obj_21550.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21550.cljs$core$IFn$_invoke$arity$2(path,new_link_21523) : fn_obj_21550.call(null,path,new_link_21523));


var G__21551 = cljs.core.next(seq__21353_21539__$1);
var G__21552 = null;
var G__21553 = (0);
var G__21554 = (0);
seq__21353_21524 = G__21551;
chunk__21355_21525 = G__21552;
count__21356_21526 = G__21553;
i__21357_21527 = G__21554;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21521);
});})(seq__21320_21517,chunk__21324_21518,count__21325_21519,i__21326_21520,seq__21206,chunk__21208,count__21209,i__21210,new_link_21523,path_match_21522,node_21521,path,map__21205,map__21205__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21522], 0));

goog.dom.insertSiblingAfter(new_link_21523,node_21521);


var G__21555 = seq__21320_21517;
var G__21556 = chunk__21324_21518;
var G__21557 = count__21325_21519;
var G__21558 = (i__21326_21520 + (1));
seq__21320_21517 = G__21555;
chunk__21324_21518 = G__21556;
count__21325_21519 = G__21557;
i__21326_21520 = G__21558;
continue;
} else {
var G__21559 = seq__21320_21517;
var G__21560 = chunk__21324_21518;
var G__21561 = count__21325_21519;
var G__21562 = (i__21326_21520 + (1));
seq__21320_21517 = G__21559;
chunk__21324_21518 = G__21560;
count__21325_21519 = G__21561;
i__21326_21520 = G__21562;
continue;
}
} else {
var G__21563 = seq__21320_21517;
var G__21564 = chunk__21324_21518;
var G__21565 = count__21325_21519;
var G__21566 = (i__21326_21520 + (1));
seq__21320_21517 = G__21563;
chunk__21324_21518 = G__21564;
count__21325_21519 = G__21565;
i__21326_21520 = G__21566;
continue;
}
} else {
var temp__5823__auto___21567 = cljs.core.seq(seq__21320_21517);
if(temp__5823__auto___21567){
var seq__21320_21568__$1 = temp__5823__auto___21567;
if(cljs.core.chunked_seq_QMARK_(seq__21320_21568__$1)){
var c__5673__auto___21569 = cljs.core.chunk_first(seq__21320_21568__$1);
var G__21570 = cljs.core.chunk_rest(seq__21320_21568__$1);
var G__21571 = c__5673__auto___21569;
var G__21572 = cljs.core.count(c__5673__auto___21569);
var G__21573 = (0);
seq__21320_21517 = G__21570;
chunk__21324_21518 = G__21571;
count__21325_21519 = G__21572;
i__21326_21520 = G__21573;
continue;
} else {
var node_21574 = cljs.core.first(seq__21320_21568__$1);
if(cljs.core.not(node_21574.shadow$old)){
var path_match_21575 = shadow.cljs.devtools.client.browser.match_paths(node_21574.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21575)){
var new_link_21576 = (function (){var G__21363 = node_21574.cloneNode(true);
G__21363.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21575)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21363;
})();
(node_21574.shadow$old = true);

(new_link_21576.onload = ((function (seq__21320_21517,chunk__21324_21518,count__21325_21519,i__21326_21520,seq__21206,chunk__21208,count__21209,i__21210,new_link_21576,path_match_21575,node_21574,seq__21320_21568__$1,temp__5823__auto___21567,path,map__21205,map__21205__$1,msg,updates,reload_info){
return (function (e){
var seq__21364_21577 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21366_21578 = null;
var count__21367_21579 = (0);
var i__21368_21580 = (0);
while(true){
if((i__21368_21580 < count__21367_21579)){
var map__21372_21581 = chunk__21366_21578.cljs$core$IIndexed$_nth$arity$2(null,i__21368_21580);
var map__21372_21582__$1 = cljs.core.__destructure_map(map__21372_21581);
var task_21583 = map__21372_21582__$1;
var fn_str_21584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21372_21582__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21372_21582__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21586 = goog.getObjectByName(fn_str_21584,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21585)));

(fn_obj_21586.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21586.cljs$core$IFn$_invoke$arity$2(path,new_link_21576) : fn_obj_21586.call(null,path,new_link_21576));


var G__21587 = seq__21364_21577;
var G__21588 = chunk__21366_21578;
var G__21589 = count__21367_21579;
var G__21590 = (i__21368_21580 + (1));
seq__21364_21577 = G__21587;
chunk__21366_21578 = G__21588;
count__21367_21579 = G__21589;
i__21368_21580 = G__21590;
continue;
} else {
var temp__5823__auto___21591__$1 = cljs.core.seq(seq__21364_21577);
if(temp__5823__auto___21591__$1){
var seq__21364_21592__$1 = temp__5823__auto___21591__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21364_21592__$1)){
var c__5673__auto___21593 = cljs.core.chunk_first(seq__21364_21592__$1);
var G__21594 = cljs.core.chunk_rest(seq__21364_21592__$1);
var G__21595 = c__5673__auto___21593;
var G__21596 = cljs.core.count(c__5673__auto___21593);
var G__21597 = (0);
seq__21364_21577 = G__21594;
chunk__21366_21578 = G__21595;
count__21367_21579 = G__21596;
i__21368_21580 = G__21597;
continue;
} else {
var map__21373_21598 = cljs.core.first(seq__21364_21592__$1);
var map__21373_21599__$1 = cljs.core.__destructure_map(map__21373_21598);
var task_21600 = map__21373_21599__$1;
var fn_str_21601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21373_21599__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21373_21599__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21603 = goog.getObjectByName(fn_str_21601,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21602)));

(fn_obj_21603.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21603.cljs$core$IFn$_invoke$arity$2(path,new_link_21576) : fn_obj_21603.call(null,path,new_link_21576));


var G__21604 = cljs.core.next(seq__21364_21592__$1);
var G__21605 = null;
var G__21606 = (0);
var G__21607 = (0);
seq__21364_21577 = G__21604;
chunk__21366_21578 = G__21605;
count__21367_21579 = G__21606;
i__21368_21580 = G__21607;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21574);
});})(seq__21320_21517,chunk__21324_21518,count__21325_21519,i__21326_21520,seq__21206,chunk__21208,count__21209,i__21210,new_link_21576,path_match_21575,node_21574,seq__21320_21568__$1,temp__5823__auto___21567,path,map__21205,map__21205__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21575], 0));

goog.dom.insertSiblingAfter(new_link_21576,node_21574);


var G__21608 = cljs.core.next(seq__21320_21568__$1);
var G__21609 = null;
var G__21610 = (0);
var G__21611 = (0);
seq__21320_21517 = G__21608;
chunk__21324_21518 = G__21609;
count__21325_21519 = G__21610;
i__21326_21520 = G__21611;
continue;
} else {
var G__21612 = cljs.core.next(seq__21320_21568__$1);
var G__21613 = null;
var G__21614 = (0);
var G__21615 = (0);
seq__21320_21517 = G__21612;
chunk__21324_21518 = G__21613;
count__21325_21519 = G__21614;
i__21326_21520 = G__21615;
continue;
}
} else {
var G__21616 = cljs.core.next(seq__21320_21568__$1);
var G__21617 = null;
var G__21618 = (0);
var G__21619 = (0);
seq__21320_21517 = G__21616;
chunk__21324_21518 = G__21617;
count__21325_21519 = G__21618;
i__21326_21520 = G__21619;
continue;
}
}
} else {
}
}
break;
}


var G__21620 = seq__21206;
var G__21621 = chunk__21208;
var G__21622 = count__21209;
var G__21623 = (i__21210 + (1));
seq__21206 = G__21620;
chunk__21208 = G__21621;
count__21209 = G__21622;
i__21210 = G__21623;
continue;
} else {
var G__21624 = seq__21206;
var G__21625 = chunk__21208;
var G__21626 = count__21209;
var G__21627 = (i__21210 + (1));
seq__21206 = G__21624;
chunk__21208 = G__21625;
count__21209 = G__21626;
i__21210 = G__21627;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21206);
if(temp__5823__auto__){
var seq__21206__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21206__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21206__$1);
var G__21628 = cljs.core.chunk_rest(seq__21206__$1);
var G__21629 = c__5673__auto__;
var G__21630 = cljs.core.count(c__5673__auto__);
var G__21631 = (0);
seq__21206 = G__21628;
chunk__21208 = G__21629;
count__21209 = G__21630;
i__21210 = G__21631;
continue;
} else {
var path = cljs.core.first(seq__21206__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21374_21632 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21378_21633 = null;
var count__21379_21634 = (0);
var i__21380_21635 = (0);
while(true){
if((i__21380_21635 < count__21379_21634)){
var node_21636 = chunk__21378_21633.cljs$core$IIndexed$_nth$arity$2(null,i__21380_21635);
if(cljs.core.not(node_21636.shadow$old)){
var path_match_21637 = shadow.cljs.devtools.client.browser.match_paths(node_21636.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21637)){
var new_link_21638 = (function (){var G__21406 = node_21636.cloneNode(true);
G__21406.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21637)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21406;
})();
(node_21636.shadow$old = true);

(new_link_21638.onload = ((function (seq__21374_21632,chunk__21378_21633,count__21379_21634,i__21380_21635,seq__21206,chunk__21208,count__21209,i__21210,new_link_21638,path_match_21637,node_21636,path,seq__21206__$1,temp__5823__auto__,map__21205,map__21205__$1,msg,updates,reload_info){
return (function (e){
var seq__21407_21639 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21409_21640 = null;
var count__21410_21641 = (0);
var i__21411_21642 = (0);
while(true){
if((i__21411_21642 < count__21410_21641)){
var map__21415_21643 = chunk__21409_21640.cljs$core$IIndexed$_nth$arity$2(null,i__21411_21642);
var map__21415_21644__$1 = cljs.core.__destructure_map(map__21415_21643);
var task_21645 = map__21415_21644__$1;
var fn_str_21646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21415_21644__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21415_21644__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21648 = goog.getObjectByName(fn_str_21646,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21647)));

(fn_obj_21648.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21648.cljs$core$IFn$_invoke$arity$2(path,new_link_21638) : fn_obj_21648.call(null,path,new_link_21638));


var G__21649 = seq__21407_21639;
var G__21650 = chunk__21409_21640;
var G__21651 = count__21410_21641;
var G__21652 = (i__21411_21642 + (1));
seq__21407_21639 = G__21649;
chunk__21409_21640 = G__21650;
count__21410_21641 = G__21651;
i__21411_21642 = G__21652;
continue;
} else {
var temp__5823__auto___21653__$1 = cljs.core.seq(seq__21407_21639);
if(temp__5823__auto___21653__$1){
var seq__21407_21654__$1 = temp__5823__auto___21653__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21407_21654__$1)){
var c__5673__auto___21655 = cljs.core.chunk_first(seq__21407_21654__$1);
var G__21656 = cljs.core.chunk_rest(seq__21407_21654__$1);
var G__21657 = c__5673__auto___21655;
var G__21658 = cljs.core.count(c__5673__auto___21655);
var G__21659 = (0);
seq__21407_21639 = G__21656;
chunk__21409_21640 = G__21657;
count__21410_21641 = G__21658;
i__21411_21642 = G__21659;
continue;
} else {
var map__21416_21660 = cljs.core.first(seq__21407_21654__$1);
var map__21416_21661__$1 = cljs.core.__destructure_map(map__21416_21660);
var task_21662 = map__21416_21661__$1;
var fn_str_21663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21416_21661__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21416_21661__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21665 = goog.getObjectByName(fn_str_21663,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21664)));

(fn_obj_21665.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21665.cljs$core$IFn$_invoke$arity$2(path,new_link_21638) : fn_obj_21665.call(null,path,new_link_21638));


var G__21666 = cljs.core.next(seq__21407_21654__$1);
var G__21667 = null;
var G__21668 = (0);
var G__21669 = (0);
seq__21407_21639 = G__21666;
chunk__21409_21640 = G__21667;
count__21410_21641 = G__21668;
i__21411_21642 = G__21669;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21636);
});})(seq__21374_21632,chunk__21378_21633,count__21379_21634,i__21380_21635,seq__21206,chunk__21208,count__21209,i__21210,new_link_21638,path_match_21637,node_21636,path,seq__21206__$1,temp__5823__auto__,map__21205,map__21205__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21637], 0));

goog.dom.insertSiblingAfter(new_link_21638,node_21636);


var G__21670 = seq__21374_21632;
var G__21671 = chunk__21378_21633;
var G__21672 = count__21379_21634;
var G__21673 = (i__21380_21635 + (1));
seq__21374_21632 = G__21670;
chunk__21378_21633 = G__21671;
count__21379_21634 = G__21672;
i__21380_21635 = G__21673;
continue;
} else {
var G__21674 = seq__21374_21632;
var G__21675 = chunk__21378_21633;
var G__21676 = count__21379_21634;
var G__21677 = (i__21380_21635 + (1));
seq__21374_21632 = G__21674;
chunk__21378_21633 = G__21675;
count__21379_21634 = G__21676;
i__21380_21635 = G__21677;
continue;
}
} else {
var G__21678 = seq__21374_21632;
var G__21679 = chunk__21378_21633;
var G__21680 = count__21379_21634;
var G__21681 = (i__21380_21635 + (1));
seq__21374_21632 = G__21678;
chunk__21378_21633 = G__21679;
count__21379_21634 = G__21680;
i__21380_21635 = G__21681;
continue;
}
} else {
var temp__5823__auto___21682__$1 = cljs.core.seq(seq__21374_21632);
if(temp__5823__auto___21682__$1){
var seq__21374_21683__$1 = temp__5823__auto___21682__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21374_21683__$1)){
var c__5673__auto___21684 = cljs.core.chunk_first(seq__21374_21683__$1);
var G__21685 = cljs.core.chunk_rest(seq__21374_21683__$1);
var G__21686 = c__5673__auto___21684;
var G__21687 = cljs.core.count(c__5673__auto___21684);
var G__21688 = (0);
seq__21374_21632 = G__21685;
chunk__21378_21633 = G__21686;
count__21379_21634 = G__21687;
i__21380_21635 = G__21688;
continue;
} else {
var node_21689 = cljs.core.first(seq__21374_21683__$1);
if(cljs.core.not(node_21689.shadow$old)){
var path_match_21690 = shadow.cljs.devtools.client.browser.match_paths(node_21689.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21690)){
var new_link_21691 = (function (){var G__21417 = node_21689.cloneNode(true);
G__21417.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21690)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21417;
})();
(node_21689.shadow$old = true);

(new_link_21691.onload = ((function (seq__21374_21632,chunk__21378_21633,count__21379_21634,i__21380_21635,seq__21206,chunk__21208,count__21209,i__21210,new_link_21691,path_match_21690,node_21689,seq__21374_21683__$1,temp__5823__auto___21682__$1,path,seq__21206__$1,temp__5823__auto__,map__21205,map__21205__$1,msg,updates,reload_info){
return (function (e){
var seq__21418_21692 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21420_21693 = null;
var count__21421_21694 = (0);
var i__21422_21695 = (0);
while(true){
if((i__21422_21695 < count__21421_21694)){
var map__21426_21696 = chunk__21420_21693.cljs$core$IIndexed$_nth$arity$2(null,i__21422_21695);
var map__21426_21697__$1 = cljs.core.__destructure_map(map__21426_21696);
var task_21698 = map__21426_21697__$1;
var fn_str_21699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21426_21697__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21426_21697__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21701 = goog.getObjectByName(fn_str_21699,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21700)));

(fn_obj_21701.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21701.cljs$core$IFn$_invoke$arity$2(path,new_link_21691) : fn_obj_21701.call(null,path,new_link_21691));


var G__21702 = seq__21418_21692;
var G__21703 = chunk__21420_21693;
var G__21704 = count__21421_21694;
var G__21705 = (i__21422_21695 + (1));
seq__21418_21692 = G__21702;
chunk__21420_21693 = G__21703;
count__21421_21694 = G__21704;
i__21422_21695 = G__21705;
continue;
} else {
var temp__5823__auto___21706__$2 = cljs.core.seq(seq__21418_21692);
if(temp__5823__auto___21706__$2){
var seq__21418_21707__$1 = temp__5823__auto___21706__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21418_21707__$1)){
var c__5673__auto___21708 = cljs.core.chunk_first(seq__21418_21707__$1);
var G__21709 = cljs.core.chunk_rest(seq__21418_21707__$1);
var G__21710 = c__5673__auto___21708;
var G__21711 = cljs.core.count(c__5673__auto___21708);
var G__21712 = (0);
seq__21418_21692 = G__21709;
chunk__21420_21693 = G__21710;
count__21421_21694 = G__21711;
i__21422_21695 = G__21712;
continue;
} else {
var map__21427_21713 = cljs.core.first(seq__21418_21707__$1);
var map__21427_21714__$1 = cljs.core.__destructure_map(map__21427_21713);
var task_21715 = map__21427_21714__$1;
var fn_str_21716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21427_21714__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21427_21714__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21718 = goog.getObjectByName(fn_str_21716,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21717)));

(fn_obj_21718.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21718.cljs$core$IFn$_invoke$arity$2(path,new_link_21691) : fn_obj_21718.call(null,path,new_link_21691));


var G__21719 = cljs.core.next(seq__21418_21707__$1);
var G__21720 = null;
var G__21721 = (0);
var G__21722 = (0);
seq__21418_21692 = G__21719;
chunk__21420_21693 = G__21720;
count__21421_21694 = G__21721;
i__21422_21695 = G__21722;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21689);
});})(seq__21374_21632,chunk__21378_21633,count__21379_21634,i__21380_21635,seq__21206,chunk__21208,count__21209,i__21210,new_link_21691,path_match_21690,node_21689,seq__21374_21683__$1,temp__5823__auto___21682__$1,path,seq__21206__$1,temp__5823__auto__,map__21205,map__21205__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21690], 0));

goog.dom.insertSiblingAfter(new_link_21691,node_21689);


var G__21723 = cljs.core.next(seq__21374_21683__$1);
var G__21724 = null;
var G__21725 = (0);
var G__21726 = (0);
seq__21374_21632 = G__21723;
chunk__21378_21633 = G__21724;
count__21379_21634 = G__21725;
i__21380_21635 = G__21726;
continue;
} else {
var G__21727 = cljs.core.next(seq__21374_21683__$1);
var G__21728 = null;
var G__21729 = (0);
var G__21730 = (0);
seq__21374_21632 = G__21727;
chunk__21378_21633 = G__21728;
count__21379_21634 = G__21729;
i__21380_21635 = G__21730;
continue;
}
} else {
var G__21731 = cljs.core.next(seq__21374_21683__$1);
var G__21732 = null;
var G__21733 = (0);
var G__21734 = (0);
seq__21374_21632 = G__21731;
chunk__21378_21633 = G__21732;
count__21379_21634 = G__21733;
i__21380_21635 = G__21734;
continue;
}
}
} else {
}
}
break;
}


var G__21735 = cljs.core.next(seq__21206__$1);
var G__21736 = null;
var G__21737 = (0);
var G__21738 = (0);
seq__21206 = G__21735;
chunk__21208 = G__21736;
count__21209 = G__21737;
i__21210 = G__21738;
continue;
} else {
var G__21739 = cljs.core.next(seq__21206__$1);
var G__21740 = null;
var G__21741 = (0);
var G__21742 = (0);
seq__21206 = G__21739;
chunk__21208 = G__21740;
count__21209 = G__21741;
i__21210 = G__21742;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21429 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21429) : success.call(null,G__21429));
}catch (e21428){var e = e21428;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21430,success,fail){
var map__21431 = p__21430;
var map__21431__$1 = cljs.core.__destructure_map(map__21431);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21431__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21433 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21433) : success.call(null,G__21433));
}catch (e21432){var e = e21432;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21434,done,error){
var map__21435 = p__21434;
var map__21435__$1 = cljs.core.__destructure_map(map__21435);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21435__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21436,done,error){
var map__21437 = p__21436;
var map__21437__$1 = cljs.core.__destructure_map(map__21437);
var msg = map__21437__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21438){
var map__21439 = p__21438;
var map__21439__$1 = cljs.core.__destructure_map(map__21439);
var src = map__21439__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21439__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21440 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21440) : done.call(null,G__21440));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21441){
var map__21442 = p__21441;
var map__21442__$1 = cljs.core.__destructure_map(map__21442);
var msg__$1 = map__21442__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21442__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21443){var ex = e21443;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21444){
var map__21445 = p__21444;
var map__21445__$1 = cljs.core.__destructure_map(map__21445);
var env = map__21445__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21445__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21446){
var map__21447 = p__21446;
var map__21447__$1 = cljs.core.__destructure_map(map__21447);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21447__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21447__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21448){
var map__21449 = p__21448;
var map__21449__$1 = cljs.core.__destructure_map(map__21449);
var svc = map__21449__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21449__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
