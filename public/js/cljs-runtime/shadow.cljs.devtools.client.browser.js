goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___26929 = arguments.length;
var i__5877__auto___26930 = (0);
while(true){
if((i__5877__auto___26930 < len__5876__auto___26929)){
args__5882__auto__.push((arguments[i__5877__auto___26930]));

var G__26931 = (i__5877__auto___26930 + (1));
i__5877__auto___26930 = G__26931;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq26364){
var G__26365 = cljs.core.first(seq26364);
var seq26364__$1 = cljs.core.next(seq26364);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26365,seq26364__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__26369 = cljs.core.seq(sources);
var chunk__26370 = null;
var count__26371 = (0);
var i__26372 = (0);
while(true){
if((i__26372 < count__26371)){
var map__26380 = chunk__26370.cljs$core$IIndexed$_nth$arity$2(null,i__26372);
var map__26380__$1 = cljs.core.__destructure_map(map__26380);
var src = map__26380__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26380__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26380__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26380__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26380__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e26382){var e_26940 = e26382;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_26940);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_26940.message))));
}

var G__26943 = seq__26369;
var G__26944 = chunk__26370;
var G__26945 = count__26371;
var G__26946 = (i__26372 + (1));
seq__26369 = G__26943;
chunk__26370 = G__26944;
count__26371 = G__26945;
i__26372 = G__26946;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__26369);
if(temp__5823__auto__){
var seq__26369__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26369__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__26369__$1);
var G__26948 = cljs.core.chunk_rest(seq__26369__$1);
var G__26949 = c__5673__auto__;
var G__26950 = cljs.core.count(c__5673__auto__);
var G__26951 = (0);
seq__26369 = G__26948;
chunk__26370 = G__26949;
count__26371 = G__26950;
i__26372 = G__26951;
continue;
} else {
var map__26384 = cljs.core.first(seq__26369__$1);
var map__26384__$1 = cljs.core.__destructure_map(map__26384);
var src = map__26384__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26384__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26384__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26384__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26384__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e26385){var e_26953 = e26385;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_26953);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_26953.message))));
}

var G__26954 = cljs.core.next(seq__26369__$1);
var G__26955 = null;
var G__26956 = (0);
var G__26957 = (0);
seq__26369 = G__26954;
chunk__26370 = G__26955;
count__26371 = G__26956;
i__26372 = G__26957;
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
var seq__26386 = cljs.core.seq(js_requires);
var chunk__26387 = null;
var count__26388 = (0);
var i__26389 = (0);
while(true){
if((i__26389 < count__26388)){
var js_ns = chunk__26387.cljs$core$IIndexed$_nth$arity$2(null,i__26389);
var require_str_26961 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_26961);


var G__26963 = seq__26386;
var G__26964 = chunk__26387;
var G__26965 = count__26388;
var G__26966 = (i__26389 + (1));
seq__26386 = G__26963;
chunk__26387 = G__26964;
count__26388 = G__26965;
i__26389 = G__26966;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__26386);
if(temp__5823__auto__){
var seq__26386__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26386__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__26386__$1);
var G__26967 = cljs.core.chunk_rest(seq__26386__$1);
var G__26968 = c__5673__auto__;
var G__26969 = cljs.core.count(c__5673__auto__);
var G__26970 = (0);
seq__26386 = G__26967;
chunk__26387 = G__26968;
count__26388 = G__26969;
i__26389 = G__26970;
continue;
} else {
var js_ns = cljs.core.first(seq__26386__$1);
var require_str_26971 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_26971);


var G__26973 = cljs.core.next(seq__26386__$1);
var G__26974 = null;
var G__26975 = (0);
var G__26976 = (0);
seq__26386 = G__26973;
chunk__26387 = G__26974;
count__26388 = G__26975;
i__26389 = G__26976;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__26393){
var map__26394 = p__26393;
var map__26394__$1 = cljs.core.__destructure_map(map__26394);
var msg = map__26394__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26394__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26394__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26395(s__26396){
return (new cljs.core.LazySeq(null,(function (){
var s__26396__$1 = s__26396;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__26396__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__26401 = cljs.core.first(xs__6383__auto__);
var map__26401__$1 = cljs.core.__destructure_map(map__26401);
var src = map__26401__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26401__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26401__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__26396__$1,map__26401,map__26401__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__26394,map__26394__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26395_$_iter__26397(s__26398){
return (new cljs.core.LazySeq(null,((function (s__26396__$1,map__26401,map__26401__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__26394,map__26394__$1,msg,info,reload_info){
return (function (){
var s__26398__$1 = s__26398;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__26398__$1);
if(temp__5823__auto____$1){
var s__26398__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26398__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__26398__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__26400 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__26399 = (0);
while(true){
if((i__26399 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__26399);
cljs.core.chunk_append(b__26400,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__26981 = (i__26399 + (1));
i__26399 = G__26981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26400),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26395_$_iter__26397(cljs.core.chunk_rest(s__26398__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26400),null);
}
} else {
var warning = cljs.core.first(s__26398__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26395_$_iter__26397(cljs.core.rest(s__26398__$2)));
}
} else {
return null;
}
break;
}
});})(s__26396__$1,map__26401,map__26401__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__26394,map__26394__$1,msg,info,reload_info))
,null,null));
});})(s__26396__$1,map__26401,map__26401__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__26394,map__26394__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26395(cljs.core.rest(s__26396__$1)));
} else {
var G__26982 = cljs.core.rest(s__26396__$1);
s__26396__$1 = G__26982;
continue;
}
} else {
var G__26983 = cljs.core.rest(s__26396__$1);
s__26396__$1 = G__26983;
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
var seq__26402_26984 = cljs.core.seq(warnings);
var chunk__26403_26985 = null;
var count__26404_26986 = (0);
var i__26405_26987 = (0);
while(true){
if((i__26405_26987 < count__26404_26986)){
var map__26408_26990 = chunk__26403_26985.cljs$core$IIndexed$_nth$arity$2(null,i__26405_26987);
var map__26408_26991__$1 = cljs.core.__destructure_map(map__26408_26990);
var w_26992 = map__26408_26991__$1;
var msg_26993__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26408_26991__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_26994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26408_26991__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_26995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26408_26991__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_26996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26408_26991__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_26996)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_26994)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_26995)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_26993__$1)));


var G__26998 = seq__26402_26984;
var G__26999 = chunk__26403_26985;
var G__27000 = count__26404_26986;
var G__27001 = (i__26405_26987 + (1));
seq__26402_26984 = G__26998;
chunk__26403_26985 = G__26999;
count__26404_26986 = G__27000;
i__26405_26987 = G__27001;
continue;
} else {
var temp__5823__auto___27003 = cljs.core.seq(seq__26402_26984);
if(temp__5823__auto___27003){
var seq__26402_27004__$1 = temp__5823__auto___27003;
if(cljs.core.chunked_seq_QMARK_(seq__26402_27004__$1)){
var c__5673__auto___27005 = cljs.core.chunk_first(seq__26402_27004__$1);
var G__27006 = cljs.core.chunk_rest(seq__26402_27004__$1);
var G__27007 = c__5673__auto___27005;
var G__27008 = cljs.core.count(c__5673__auto___27005);
var G__27009 = (0);
seq__26402_26984 = G__27006;
chunk__26403_26985 = G__27007;
count__26404_26986 = G__27008;
i__26405_26987 = G__27009;
continue;
} else {
var map__26409_27011 = cljs.core.first(seq__26402_27004__$1);
var map__26409_27012__$1 = cljs.core.__destructure_map(map__26409_27011);
var w_27013 = map__26409_27012__$1;
var msg_27014__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26409_27012__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_27015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26409_27012__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_27016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26409_27012__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_27017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26409_27012__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_27017)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_27015)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_27016)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_27014__$1)));


var G__27025 = cljs.core.next(seq__26402_27004__$1);
var G__27026 = null;
var G__27027 = (0);
var G__27028 = (0);
seq__26402_26984 = G__27025;
chunk__26403_26985 = G__27026;
count__26404_26986 = G__27027;
i__26405_26987 = G__27028;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__26392_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__26392_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__26411 = node_uri;
G__26411.setQuery(null);

G__26411.setPath(new$);

return G__26411;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__26412){
var map__26413 = p__26412;
var map__26413__$1 = cljs.core.__destructure_map(map__26413);
var msg = map__26413__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26413__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26413__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__26414 = cljs.core.seq(updates);
var chunk__26416 = null;
var count__26417 = (0);
var i__26418 = (0);
while(true){
if((i__26418 < count__26417)){
var path = chunk__26416.cljs$core$IIndexed$_nth$arity$2(null,i__26418);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__26601_27034 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__26605_27035 = null;
var count__26606_27036 = (0);
var i__26607_27037 = (0);
while(true){
if((i__26607_27037 < count__26606_27036)){
var node_27038 = chunk__26605_27035.cljs$core$IIndexed$_nth$arity$2(null,i__26607_27037);
if(cljs.core.not(node_27038.shadow$old)){
var path_match_27039 = shadow.cljs.devtools.client.browser.match_paths(node_27038.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27039)){
var new_link_27042 = (function (){var G__26650 = node_27038.cloneNode(true);
G__26650.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27039)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__26650;
})();
(node_27038.shadow$old = true);

(new_link_27042.onload = ((function (seq__26601_27034,chunk__26605_27035,count__26606_27036,i__26607_27037,seq__26414,chunk__26416,count__26417,i__26418,new_link_27042,path_match_27039,node_27038,path,map__26413,map__26413__$1,msg,updates,reload_info){
return (function (e){
var seq__26654_27045 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26656_27046 = null;
var count__26657_27047 = (0);
var i__26658_27048 = (0);
while(true){
if((i__26658_27048 < count__26657_27047)){
var map__26674_27049 = chunk__26656_27046.cljs$core$IIndexed$_nth$arity$2(null,i__26658_27048);
var map__26674_27050__$1 = cljs.core.__destructure_map(map__26674_27049);
var task_27051 = map__26674_27050__$1;
var fn_str_27052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26674_27050__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26674_27050__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27054 = goog.getObjectByName(fn_str_27052,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27053)));

(fn_obj_27054.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27054.cljs$core$IFn$_invoke$arity$2(path,new_link_27042) : fn_obj_27054.call(null,path,new_link_27042));


var G__27056 = seq__26654_27045;
var G__27057 = chunk__26656_27046;
var G__27058 = count__26657_27047;
var G__27059 = (i__26658_27048 + (1));
seq__26654_27045 = G__27056;
chunk__26656_27046 = G__27057;
count__26657_27047 = G__27058;
i__26658_27048 = G__27059;
continue;
} else {
var temp__5823__auto___27060 = cljs.core.seq(seq__26654_27045);
if(temp__5823__auto___27060){
var seq__26654_27061__$1 = temp__5823__auto___27060;
if(cljs.core.chunked_seq_QMARK_(seq__26654_27061__$1)){
var c__5673__auto___27062 = cljs.core.chunk_first(seq__26654_27061__$1);
var G__27063 = cljs.core.chunk_rest(seq__26654_27061__$1);
var G__27064 = c__5673__auto___27062;
var G__27066 = cljs.core.count(c__5673__auto___27062);
var G__27067 = (0);
seq__26654_27045 = G__27063;
chunk__26656_27046 = G__27064;
count__26657_27047 = G__27066;
i__26658_27048 = G__27067;
continue;
} else {
var map__26680_27069 = cljs.core.first(seq__26654_27061__$1);
var map__26680_27070__$1 = cljs.core.__destructure_map(map__26680_27069);
var task_27071 = map__26680_27070__$1;
var fn_str_27072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26680_27070__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26680_27070__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27074 = goog.getObjectByName(fn_str_27072,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27073)));

(fn_obj_27074.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27074.cljs$core$IFn$_invoke$arity$2(path,new_link_27042) : fn_obj_27074.call(null,path,new_link_27042));


var G__27077 = cljs.core.next(seq__26654_27061__$1);
var G__27078 = null;
var G__27079 = (0);
var G__27080 = (0);
seq__26654_27045 = G__27077;
chunk__26656_27046 = G__27078;
count__26657_27047 = G__27079;
i__26658_27048 = G__27080;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_27038);
});})(seq__26601_27034,chunk__26605_27035,count__26606_27036,i__26607_27037,seq__26414,chunk__26416,count__26417,i__26418,new_link_27042,path_match_27039,node_27038,path,map__26413,map__26413__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27039], 0));

goog.dom.insertSiblingAfter(new_link_27042,node_27038);


var G__27081 = seq__26601_27034;
var G__27082 = chunk__26605_27035;
var G__27083 = count__26606_27036;
var G__27084 = (i__26607_27037 + (1));
seq__26601_27034 = G__27081;
chunk__26605_27035 = G__27082;
count__26606_27036 = G__27083;
i__26607_27037 = G__27084;
continue;
} else {
var G__27085 = seq__26601_27034;
var G__27086 = chunk__26605_27035;
var G__27087 = count__26606_27036;
var G__27088 = (i__26607_27037 + (1));
seq__26601_27034 = G__27085;
chunk__26605_27035 = G__27086;
count__26606_27036 = G__27087;
i__26607_27037 = G__27088;
continue;
}
} else {
var G__27089 = seq__26601_27034;
var G__27090 = chunk__26605_27035;
var G__27091 = count__26606_27036;
var G__27092 = (i__26607_27037 + (1));
seq__26601_27034 = G__27089;
chunk__26605_27035 = G__27090;
count__26606_27036 = G__27091;
i__26607_27037 = G__27092;
continue;
}
} else {
var temp__5823__auto___27093 = cljs.core.seq(seq__26601_27034);
if(temp__5823__auto___27093){
var seq__26601_27095__$1 = temp__5823__auto___27093;
if(cljs.core.chunked_seq_QMARK_(seq__26601_27095__$1)){
var c__5673__auto___27096 = cljs.core.chunk_first(seq__26601_27095__$1);
var G__27097 = cljs.core.chunk_rest(seq__26601_27095__$1);
var G__27098 = c__5673__auto___27096;
var G__27099 = cljs.core.count(c__5673__auto___27096);
var G__27100 = (0);
seq__26601_27034 = G__27097;
chunk__26605_27035 = G__27098;
count__26606_27036 = G__27099;
i__26607_27037 = G__27100;
continue;
} else {
var node_27102 = cljs.core.first(seq__26601_27095__$1);
if(cljs.core.not(node_27102.shadow$old)){
var path_match_27104 = shadow.cljs.devtools.client.browser.match_paths(node_27102.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27104)){
var new_link_27105 = (function (){var G__26691 = node_27102.cloneNode(true);
G__26691.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27104)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__26691;
})();
(node_27102.shadow$old = true);

(new_link_27105.onload = ((function (seq__26601_27034,chunk__26605_27035,count__26606_27036,i__26607_27037,seq__26414,chunk__26416,count__26417,i__26418,new_link_27105,path_match_27104,node_27102,seq__26601_27095__$1,temp__5823__auto___27093,path,map__26413,map__26413__$1,msg,updates,reload_info){
return (function (e){
var seq__26693_27108 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26695_27109 = null;
var count__26696_27110 = (0);
var i__26697_27111 = (0);
while(true){
if((i__26697_27111 < count__26696_27110)){
var map__26710_27112 = chunk__26695_27109.cljs$core$IIndexed$_nth$arity$2(null,i__26697_27111);
var map__26710_27113__$1 = cljs.core.__destructure_map(map__26710_27112);
var task_27114 = map__26710_27113__$1;
var fn_str_27115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26710_27113__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26710_27113__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27118 = goog.getObjectByName(fn_str_27115,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27116)));

(fn_obj_27118.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27118.cljs$core$IFn$_invoke$arity$2(path,new_link_27105) : fn_obj_27118.call(null,path,new_link_27105));


var G__27119 = seq__26693_27108;
var G__27120 = chunk__26695_27109;
var G__27121 = count__26696_27110;
var G__27122 = (i__26697_27111 + (1));
seq__26693_27108 = G__27119;
chunk__26695_27109 = G__27120;
count__26696_27110 = G__27121;
i__26697_27111 = G__27122;
continue;
} else {
var temp__5823__auto___27123__$1 = cljs.core.seq(seq__26693_27108);
if(temp__5823__auto___27123__$1){
var seq__26693_27124__$1 = temp__5823__auto___27123__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26693_27124__$1)){
var c__5673__auto___27127 = cljs.core.chunk_first(seq__26693_27124__$1);
var G__27128 = cljs.core.chunk_rest(seq__26693_27124__$1);
var G__27129 = c__5673__auto___27127;
var G__27130 = cljs.core.count(c__5673__auto___27127);
var G__27131 = (0);
seq__26693_27108 = G__27128;
chunk__26695_27109 = G__27129;
count__26696_27110 = G__27130;
i__26697_27111 = G__27131;
continue;
} else {
var map__26718_27132 = cljs.core.first(seq__26693_27124__$1);
var map__26718_27133__$1 = cljs.core.__destructure_map(map__26718_27132);
var task_27134 = map__26718_27133__$1;
var fn_str_27135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26718_27133__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26718_27133__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27139 = goog.getObjectByName(fn_str_27135,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27136)));

(fn_obj_27139.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27139.cljs$core$IFn$_invoke$arity$2(path,new_link_27105) : fn_obj_27139.call(null,path,new_link_27105));


var G__27140 = cljs.core.next(seq__26693_27124__$1);
var G__27141 = null;
var G__27142 = (0);
var G__27143 = (0);
seq__26693_27108 = G__27140;
chunk__26695_27109 = G__27141;
count__26696_27110 = G__27142;
i__26697_27111 = G__27143;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_27102);
});})(seq__26601_27034,chunk__26605_27035,count__26606_27036,i__26607_27037,seq__26414,chunk__26416,count__26417,i__26418,new_link_27105,path_match_27104,node_27102,seq__26601_27095__$1,temp__5823__auto___27093,path,map__26413,map__26413__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27104], 0));

goog.dom.insertSiblingAfter(new_link_27105,node_27102);


var G__27145 = cljs.core.next(seq__26601_27095__$1);
var G__27146 = null;
var G__27147 = (0);
var G__27148 = (0);
seq__26601_27034 = G__27145;
chunk__26605_27035 = G__27146;
count__26606_27036 = G__27147;
i__26607_27037 = G__27148;
continue;
} else {
var G__27150 = cljs.core.next(seq__26601_27095__$1);
var G__27151 = null;
var G__27152 = (0);
var G__27153 = (0);
seq__26601_27034 = G__27150;
chunk__26605_27035 = G__27151;
count__26606_27036 = G__27152;
i__26607_27037 = G__27153;
continue;
}
} else {
var G__27155 = cljs.core.next(seq__26601_27095__$1);
var G__27156 = null;
var G__27157 = (0);
var G__27158 = (0);
seq__26601_27034 = G__27155;
chunk__26605_27035 = G__27156;
count__26606_27036 = G__27157;
i__26607_27037 = G__27158;
continue;
}
}
} else {
}
}
break;
}


var G__27159 = seq__26414;
var G__27160 = chunk__26416;
var G__27161 = count__26417;
var G__27162 = (i__26418 + (1));
seq__26414 = G__27159;
chunk__26416 = G__27160;
count__26417 = G__27161;
i__26418 = G__27162;
continue;
} else {
var G__27163 = seq__26414;
var G__27164 = chunk__26416;
var G__27165 = count__26417;
var G__27166 = (i__26418 + (1));
seq__26414 = G__27163;
chunk__26416 = G__27164;
count__26417 = G__27165;
i__26418 = G__27166;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__26414);
if(temp__5823__auto__){
var seq__26414__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26414__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__26414__$1);
var G__27170 = cljs.core.chunk_rest(seq__26414__$1);
var G__27171 = c__5673__auto__;
var G__27172 = cljs.core.count(c__5673__auto__);
var G__27173 = (0);
seq__26414 = G__27170;
chunk__26416 = G__27171;
count__26417 = G__27172;
i__26418 = G__27173;
continue;
} else {
var path = cljs.core.first(seq__26414__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__26726_27174 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__26730_27175 = null;
var count__26731_27176 = (0);
var i__26732_27177 = (0);
while(true){
if((i__26732_27177 < count__26731_27176)){
var node_27180 = chunk__26730_27175.cljs$core$IIndexed$_nth$arity$2(null,i__26732_27177);
if(cljs.core.not(node_27180.shadow$old)){
var path_match_27183 = shadow.cljs.devtools.client.browser.match_paths(node_27180.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27183)){
var new_link_27184 = (function (){var G__26813 = node_27180.cloneNode(true);
G__26813.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27183)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__26813;
})();
(node_27180.shadow$old = true);

(new_link_27184.onload = ((function (seq__26726_27174,chunk__26730_27175,count__26731_27176,i__26732_27177,seq__26414,chunk__26416,count__26417,i__26418,new_link_27184,path_match_27183,node_27180,path,seq__26414__$1,temp__5823__auto__,map__26413,map__26413__$1,msg,updates,reload_info){
return (function (e){
var seq__26818_27185 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26820_27186 = null;
var count__26821_27187 = (0);
var i__26822_27188 = (0);
while(true){
if((i__26822_27188 < count__26821_27187)){
var map__26831_27190 = chunk__26820_27186.cljs$core$IIndexed$_nth$arity$2(null,i__26822_27188);
var map__26831_27191__$1 = cljs.core.__destructure_map(map__26831_27190);
var task_27192 = map__26831_27191__$1;
var fn_str_27193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26831_27191__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26831_27191__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27196 = goog.getObjectByName(fn_str_27193,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27194)));

(fn_obj_27196.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27196.cljs$core$IFn$_invoke$arity$2(path,new_link_27184) : fn_obj_27196.call(null,path,new_link_27184));


var G__27198 = seq__26818_27185;
var G__27199 = chunk__26820_27186;
var G__27200 = count__26821_27187;
var G__27201 = (i__26822_27188 + (1));
seq__26818_27185 = G__27198;
chunk__26820_27186 = G__27199;
count__26821_27187 = G__27200;
i__26822_27188 = G__27201;
continue;
} else {
var temp__5823__auto___27204__$1 = cljs.core.seq(seq__26818_27185);
if(temp__5823__auto___27204__$1){
var seq__26818_27205__$1 = temp__5823__auto___27204__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26818_27205__$1)){
var c__5673__auto___27206 = cljs.core.chunk_first(seq__26818_27205__$1);
var G__27207 = cljs.core.chunk_rest(seq__26818_27205__$1);
var G__27208 = c__5673__auto___27206;
var G__27209 = cljs.core.count(c__5673__auto___27206);
var G__27210 = (0);
seq__26818_27185 = G__27207;
chunk__26820_27186 = G__27208;
count__26821_27187 = G__27209;
i__26822_27188 = G__27210;
continue;
} else {
var map__26834_27211 = cljs.core.first(seq__26818_27205__$1);
var map__26834_27212__$1 = cljs.core.__destructure_map(map__26834_27211);
var task_27213 = map__26834_27212__$1;
var fn_str_27214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26834_27212__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26834_27212__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27216 = goog.getObjectByName(fn_str_27214,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27215)));

(fn_obj_27216.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27216.cljs$core$IFn$_invoke$arity$2(path,new_link_27184) : fn_obj_27216.call(null,path,new_link_27184));


var G__27218 = cljs.core.next(seq__26818_27205__$1);
var G__27219 = null;
var G__27220 = (0);
var G__27221 = (0);
seq__26818_27185 = G__27218;
chunk__26820_27186 = G__27219;
count__26821_27187 = G__27220;
i__26822_27188 = G__27221;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_27180);
});})(seq__26726_27174,chunk__26730_27175,count__26731_27176,i__26732_27177,seq__26414,chunk__26416,count__26417,i__26418,new_link_27184,path_match_27183,node_27180,path,seq__26414__$1,temp__5823__auto__,map__26413,map__26413__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27183], 0));

goog.dom.insertSiblingAfter(new_link_27184,node_27180);


var G__27223 = seq__26726_27174;
var G__27224 = chunk__26730_27175;
var G__27225 = count__26731_27176;
var G__27226 = (i__26732_27177 + (1));
seq__26726_27174 = G__27223;
chunk__26730_27175 = G__27224;
count__26731_27176 = G__27225;
i__26732_27177 = G__27226;
continue;
} else {
var G__27228 = seq__26726_27174;
var G__27229 = chunk__26730_27175;
var G__27230 = count__26731_27176;
var G__27231 = (i__26732_27177 + (1));
seq__26726_27174 = G__27228;
chunk__26730_27175 = G__27229;
count__26731_27176 = G__27230;
i__26732_27177 = G__27231;
continue;
}
} else {
var G__27232 = seq__26726_27174;
var G__27233 = chunk__26730_27175;
var G__27234 = count__26731_27176;
var G__27235 = (i__26732_27177 + (1));
seq__26726_27174 = G__27232;
chunk__26730_27175 = G__27233;
count__26731_27176 = G__27234;
i__26732_27177 = G__27235;
continue;
}
} else {
var temp__5823__auto___27236__$1 = cljs.core.seq(seq__26726_27174);
if(temp__5823__auto___27236__$1){
var seq__26726_27237__$1 = temp__5823__auto___27236__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26726_27237__$1)){
var c__5673__auto___27238 = cljs.core.chunk_first(seq__26726_27237__$1);
var G__27241 = cljs.core.chunk_rest(seq__26726_27237__$1);
var G__27242 = c__5673__auto___27238;
var G__27243 = cljs.core.count(c__5673__auto___27238);
var G__27244 = (0);
seq__26726_27174 = G__27241;
chunk__26730_27175 = G__27242;
count__26731_27176 = G__27243;
i__26732_27177 = G__27244;
continue;
} else {
var node_27245 = cljs.core.first(seq__26726_27237__$1);
if(cljs.core.not(node_27245.shadow$old)){
var path_match_27246 = shadow.cljs.devtools.client.browser.match_paths(node_27245.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27246)){
var new_link_27247 = (function (){var G__26840 = node_27245.cloneNode(true);
G__26840.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27246)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__26840;
})();
(node_27245.shadow$old = true);

(new_link_27247.onload = ((function (seq__26726_27174,chunk__26730_27175,count__26731_27176,i__26732_27177,seq__26414,chunk__26416,count__26417,i__26418,new_link_27247,path_match_27246,node_27245,seq__26726_27237__$1,temp__5823__auto___27236__$1,path,seq__26414__$1,temp__5823__auto__,map__26413,map__26413__$1,msg,updates,reload_info){
return (function (e){
var seq__26842_27248 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26844_27249 = null;
var count__26845_27250 = (0);
var i__26846_27251 = (0);
while(true){
if((i__26846_27251 < count__26845_27250)){
var map__26858_27252 = chunk__26844_27249.cljs$core$IIndexed$_nth$arity$2(null,i__26846_27251);
var map__26858_27253__$1 = cljs.core.__destructure_map(map__26858_27252);
var task_27254 = map__26858_27253__$1;
var fn_str_27255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26858_27253__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26858_27253__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27257 = goog.getObjectByName(fn_str_27255,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27256)));

(fn_obj_27257.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27257.cljs$core$IFn$_invoke$arity$2(path,new_link_27247) : fn_obj_27257.call(null,path,new_link_27247));


var G__27258 = seq__26842_27248;
var G__27259 = chunk__26844_27249;
var G__27260 = count__26845_27250;
var G__27261 = (i__26846_27251 + (1));
seq__26842_27248 = G__27258;
chunk__26844_27249 = G__27259;
count__26845_27250 = G__27260;
i__26846_27251 = G__27261;
continue;
} else {
var temp__5823__auto___27262__$2 = cljs.core.seq(seq__26842_27248);
if(temp__5823__auto___27262__$2){
var seq__26842_27263__$1 = temp__5823__auto___27262__$2;
if(cljs.core.chunked_seq_QMARK_(seq__26842_27263__$1)){
var c__5673__auto___27265 = cljs.core.chunk_first(seq__26842_27263__$1);
var G__27266 = cljs.core.chunk_rest(seq__26842_27263__$1);
var G__27267 = c__5673__auto___27265;
var G__27268 = cljs.core.count(c__5673__auto___27265);
var G__27269 = (0);
seq__26842_27248 = G__27266;
chunk__26844_27249 = G__27267;
count__26845_27250 = G__27268;
i__26846_27251 = G__27269;
continue;
} else {
var map__26862_27270 = cljs.core.first(seq__26842_27263__$1);
var map__26862_27271__$1 = cljs.core.__destructure_map(map__26862_27270);
var task_27272 = map__26862_27271__$1;
var fn_str_27273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26862_27271__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26862_27271__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27277 = goog.getObjectByName(fn_str_27273,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27274)));

(fn_obj_27277.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27277.cljs$core$IFn$_invoke$arity$2(path,new_link_27247) : fn_obj_27277.call(null,path,new_link_27247));


var G__27278 = cljs.core.next(seq__26842_27263__$1);
var G__27279 = null;
var G__27280 = (0);
var G__27281 = (0);
seq__26842_27248 = G__27278;
chunk__26844_27249 = G__27279;
count__26845_27250 = G__27280;
i__26846_27251 = G__27281;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_27245);
});})(seq__26726_27174,chunk__26730_27175,count__26731_27176,i__26732_27177,seq__26414,chunk__26416,count__26417,i__26418,new_link_27247,path_match_27246,node_27245,seq__26726_27237__$1,temp__5823__auto___27236__$1,path,seq__26414__$1,temp__5823__auto__,map__26413,map__26413__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27246], 0));

goog.dom.insertSiblingAfter(new_link_27247,node_27245);


var G__27284 = cljs.core.next(seq__26726_27237__$1);
var G__27285 = null;
var G__27286 = (0);
var G__27287 = (0);
seq__26726_27174 = G__27284;
chunk__26730_27175 = G__27285;
count__26731_27176 = G__27286;
i__26732_27177 = G__27287;
continue;
} else {
var G__27288 = cljs.core.next(seq__26726_27237__$1);
var G__27289 = null;
var G__27290 = (0);
var G__27291 = (0);
seq__26726_27174 = G__27288;
chunk__26730_27175 = G__27289;
count__26731_27176 = G__27290;
i__26732_27177 = G__27291;
continue;
}
} else {
var G__27292 = cljs.core.next(seq__26726_27237__$1);
var G__27293 = null;
var G__27294 = (0);
var G__27295 = (0);
seq__26726_27174 = G__27292;
chunk__26730_27175 = G__27293;
count__26731_27176 = G__27294;
i__26732_27177 = G__27295;
continue;
}
}
} else {
}
}
break;
}


var G__27296 = cljs.core.next(seq__26414__$1);
var G__27297 = null;
var G__27298 = (0);
var G__27299 = (0);
seq__26414 = G__27296;
chunk__26416 = G__27297;
count__26417 = G__27298;
i__26418 = G__27299;
continue;
} else {
var G__27300 = cljs.core.next(seq__26414__$1);
var G__27301 = null;
var G__27302 = (0);
var G__27303 = (0);
seq__26414 = G__27300;
chunk__26416 = G__27301;
count__26417 = G__27302;
i__26418 = G__27303;
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
try{var G__26879 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__26879) : success.call(null,G__26879));
}catch (e26878){var e = e26878;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__26884,success,fail){
var map__26885 = p__26884;
var map__26885__$1 = cljs.core.__destructure_map(map__26885);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26885__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__26888 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__26888) : success.call(null,G__26888));
}catch (e26886){var e = e26886;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__26890,done,error){
var map__26891 = p__26890;
var map__26891__$1 = cljs.core.__destructure_map(map__26891);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26891__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__26893,done,error){
var map__26894 = p__26893;
var map__26894__$1 = cljs.core.__destructure_map(map__26894);
var msg = map__26894__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26894__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26894__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26894__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__26898){
var map__26901 = p__26898;
var map__26901__$1 = cljs.core.__destructure_map(map__26901);
var src = map__26901__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26901__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__26904 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26904) : done.call(null,G__26904));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__26905){
var map__26906 = p__26905;
var map__26906__$1 = cljs.core.__destructure_map(map__26906);
var msg__$1 = map__26906__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26906__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e26907){var ex = e26907;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__26909){
var map__26910 = p__26909;
var map__26910__$1 = cljs.core.__destructure_map(map__26910);
var env = map__26910__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26910__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__26918){
var map__26919 = p__26918;
var map__26919__$1 = cljs.core.__destructure_map(map__26919);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26919__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26919__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__26922){
var map__26923 = p__26922;
var map__26923__$1 = cljs.core.__destructure_map(map__26923);
var svc = map__26923__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26923__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
