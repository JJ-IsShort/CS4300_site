goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__23323){
var map__23324 = p__23323;
var map__23324__$1 = cljs.core.__destructure_map(map__23324);
var runtime = map__23324__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23324__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5142__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_23429 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_23429)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__23329 = runtime;
var G__23330 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_23429);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__23329,G__23330) : shadow.remote.runtime.shared.process.call(null,G__23329,G__23330));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__23340,res){
var map__23341 = p__23340;
var map__23341__$1 = cljs.core.__destructure_map(map__23341);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23341__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23341__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__23342 = res;
var G__23342__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23342,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__23342);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23342__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__23342__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__23346 = arguments.length;
switch (G__23346) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__23347,msg,handlers,timeout_after_ms){
var map__23348 = p__23347;
var map__23348__$1 = cljs.core.__destructure_map(map__23348);
var runtime = map__23348__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23348__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23431 = arguments.length;
var i__5877__auto___23432 = (0);
while(true){
if((i__5877__auto___23432 < len__5876__auto___23431)){
args__5882__auto__.push((arguments[i__5877__auto___23432]));

var G__23433 = (i__5877__auto___23432 + (1));
i__5877__auto___23432 = G__23433;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__23357,ev,args){
var map__23358 = p__23357;
var map__23358__$1 = cljs.core.__destructure_map(map__23358);
var runtime = map__23358__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23358__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__23360 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__23363 = null;
var count__23364 = (0);
var i__23365 = (0);
while(true){
if((i__23365 < count__23364)){
var ext = chunk__23363.cljs$core$IIndexed$_nth$arity$2(null,i__23365);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__23435 = seq__23360;
var G__23436 = chunk__23363;
var G__23437 = count__23364;
var G__23438 = (i__23365 + (1));
seq__23360 = G__23435;
chunk__23363 = G__23436;
count__23364 = G__23437;
i__23365 = G__23438;
continue;
} else {
var G__23439 = seq__23360;
var G__23440 = chunk__23363;
var G__23441 = count__23364;
var G__23442 = (i__23365 + (1));
seq__23360 = G__23439;
chunk__23363 = G__23440;
count__23364 = G__23441;
i__23365 = G__23442;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__23360);
if(temp__5823__auto__){
var seq__23360__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23360__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__23360__$1);
var G__23443 = cljs.core.chunk_rest(seq__23360__$1);
var G__23444 = c__5673__auto__;
var G__23445 = cljs.core.count(c__5673__auto__);
var G__23446 = (0);
seq__23360 = G__23443;
chunk__23363 = G__23444;
count__23364 = G__23445;
i__23365 = G__23446;
continue;
} else {
var ext = cljs.core.first(seq__23360__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__23447 = cljs.core.next(seq__23360__$1);
var G__23448 = null;
var G__23449 = (0);
var G__23450 = (0);
seq__23360 = G__23447;
chunk__23363 = G__23448;
count__23364 = G__23449;
i__23365 = G__23450;
continue;
} else {
var G__23451 = cljs.core.next(seq__23360__$1);
var G__23452 = null;
var G__23453 = (0);
var G__23454 = (0);
seq__23360 = G__23451;
chunk__23363 = G__23452;
count__23364 = G__23453;
i__23365 = G__23454;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq23354){
var G__23355 = cljs.core.first(seq23354);
var seq23354__$1 = cljs.core.next(seq23354);
var G__23356 = cljs.core.first(seq23354__$1);
var seq23354__$2 = cljs.core.next(seq23354__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23355,G__23356,seq23354__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__23368,p__23369){
var map__23370 = p__23368;
var map__23370__$1 = cljs.core.__destructure_map(map__23370);
var runtime = map__23370__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23370__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__23371 = p__23369;
var map__23371__$1 = cljs.core.__destructure_map(map__23371);
var msg = map__23371__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23371__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__23372 = cljs.core.deref(state_ref);
var map__23372__$1 = cljs.core.__destructure_map(map__23372);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23372__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23372__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__23373,msg){
var map__23375 = p__23373;
var map__23375__$1 = cljs.core.__destructure_map(map__23375);
var runtime = map__23375__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23375__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__23378,key,p__23379){
var map__23380 = p__23378;
var map__23380__$1 = cljs.core.__destructure_map(map__23380);
var state = map__23380__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23380__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__23381 = p__23379;
var map__23381__$1 = cljs.core.__destructure_map(map__23381);
var spec = map__23381__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23381__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23381__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__23390,key,spec){
var map__23391 = p__23390;
var map__23391__$1 = cljs.core.__destructure_map(map__23391);
var runtime = map__23391__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23391__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___23455 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___23455 == null)){
} else {
var on_welcome_23456 = temp__5827__auto___23455;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_23456.cljs$core$IFn$_invoke$arity$0 ? on_welcome_23456.cljs$core$IFn$_invoke$arity$0() : on_welcome_23456.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__23395_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__23395_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__23399_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__23399_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__23400_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__23400_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__23401_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__23401_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__23402_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__23402_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__23406,key){
var map__23407 = p__23406;
var map__23407__$1 = cljs.core.__destructure_map(map__23407);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23407__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__23409,msg){
var map__23411 = p__23409;
var map__23411__$1 = cljs.core.__destructure_map(map__23411);
var runtime = map__23411__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23411__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__23412,p__23413){
var map__23414 = p__23412;
var map__23414__$1 = cljs.core.__destructure_map(map__23414);
var runtime = map__23414__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23414__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__23415 = p__23413;
var map__23415__$1 = cljs.core.__destructure_map(map__23415);
var msg = map__23415__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23415__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23415__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__23419 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__23421 = null;
var count__23422 = (0);
var i__23423 = (0);
while(true){
if((i__23423 < count__23422)){
var map__23427 = chunk__23421.cljs$core$IIndexed$_nth$arity$2(null,i__23423);
var map__23427__$1 = cljs.core.__destructure_map(map__23427);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23427__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__23480 = seq__23419;
var G__23481 = chunk__23421;
var G__23482 = count__23422;
var G__23483 = (i__23423 + (1));
seq__23419 = G__23480;
chunk__23421 = G__23481;
count__23422 = G__23482;
i__23423 = G__23483;
continue;
} else {
var G__23484 = seq__23419;
var G__23485 = chunk__23421;
var G__23486 = count__23422;
var G__23487 = (i__23423 + (1));
seq__23419 = G__23484;
chunk__23421 = G__23485;
count__23422 = G__23486;
i__23423 = G__23487;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__23419);
if(temp__5823__auto__){
var seq__23419__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23419__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__23419__$1);
var G__23488 = cljs.core.chunk_rest(seq__23419__$1);
var G__23489 = c__5673__auto__;
var G__23490 = cljs.core.count(c__5673__auto__);
var G__23491 = (0);
seq__23419 = G__23488;
chunk__23421 = G__23489;
count__23422 = G__23490;
i__23423 = G__23491;
continue;
} else {
var map__23428 = cljs.core.first(seq__23419__$1);
var map__23428__$1 = cljs.core.__destructure_map(map__23428);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23428__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__23492 = cljs.core.next(seq__23419__$1);
var G__23493 = null;
var G__23494 = (0);
var G__23495 = (0);
seq__23419 = G__23492;
chunk__23421 = G__23493;
count__23422 = G__23494;
i__23423 = G__23495;
continue;
} else {
var G__23496 = cljs.core.next(seq__23419__$1);
var G__23497 = null;
var G__23498 = (0);
var G__23499 = (0);
seq__23419 = G__23496;
chunk__23421 = G__23497;
count__23422 = G__23498;
i__23423 = G__23499;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
