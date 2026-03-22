goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14373){
var map__14374 = p__14373;
var map__14374__$1 = cljs.core.__destructure_map(map__14374);
var runtime = map__14374__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14374__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5142__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14646 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14646)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14380 = runtime;
var G__14381 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14646);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14380,G__14381) : shadow.remote.runtime.shared.process.call(null,G__14380,G__14381));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14388,res){
var map__14389 = p__14388;
var map__14389__$1 = cljs.core.__destructure_map(map__14389);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14389__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14389__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14390 = res;
var G__14390__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14390,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14390);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14390__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14390__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14402 = arguments.length;
switch (G__14402) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14407,msg,handlers,timeout_after_ms){
var map__14408 = p__14407;
var map__14408__$1 = cljs.core.__destructure_map(map__14408);
var runtime = map__14408__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14408__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5876__auto___14666 = arguments.length;
var i__5877__auto___14667 = (0);
while(true){
if((i__5877__auto___14667 < len__5876__auto___14666)){
args__5882__auto__.push((arguments[i__5877__auto___14667]));

var G__14668 = (i__5877__auto___14667 + (1));
i__5877__auto___14667 = G__14668;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14429,ev,args){
var map__14431 = p__14429;
var map__14431__$1 = cljs.core.__destructure_map(map__14431);
var runtime = map__14431__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14431__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14434 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14438 = null;
var count__14439 = (0);
var i__14440 = (0);
while(true){
if((i__14440 < count__14439)){
var ext = chunk__14438.cljs$core$IIndexed$_nth$arity$2(null,i__14440);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14675 = seq__14434;
var G__14676 = chunk__14438;
var G__14677 = count__14439;
var G__14678 = (i__14440 + (1));
seq__14434 = G__14675;
chunk__14438 = G__14676;
count__14439 = G__14677;
i__14440 = G__14678;
continue;
} else {
var G__14685 = seq__14434;
var G__14686 = chunk__14438;
var G__14687 = count__14439;
var G__14688 = (i__14440 + (1));
seq__14434 = G__14685;
chunk__14438 = G__14686;
count__14439 = G__14687;
i__14440 = G__14688;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14434);
if(temp__5823__auto__){
var seq__14434__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14434__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14434__$1);
var G__14692 = cljs.core.chunk_rest(seq__14434__$1);
var G__14693 = c__5673__auto__;
var G__14694 = cljs.core.count(c__5673__auto__);
var G__14695 = (0);
seq__14434 = G__14692;
chunk__14438 = G__14693;
count__14439 = G__14694;
i__14440 = G__14695;
continue;
} else {
var ext = cljs.core.first(seq__14434__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14698 = cljs.core.next(seq__14434__$1);
var G__14699 = null;
var G__14700 = (0);
var G__14701 = (0);
seq__14434 = G__14698;
chunk__14438 = G__14699;
count__14439 = G__14700;
i__14440 = G__14701;
continue;
} else {
var G__14702 = cljs.core.next(seq__14434__$1);
var G__14703 = null;
var G__14704 = (0);
var G__14705 = (0);
seq__14434 = G__14702;
chunk__14438 = G__14703;
count__14439 = G__14704;
i__14440 = G__14705;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14416){
var G__14417 = cljs.core.first(seq14416);
var seq14416__$1 = cljs.core.next(seq14416);
var G__14418 = cljs.core.first(seq14416__$1);
var seq14416__$2 = cljs.core.next(seq14416__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14417,G__14418,seq14416__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14486,p__14487){
var map__14488 = p__14486;
var map__14488__$1 = cljs.core.__destructure_map(map__14488);
var runtime = map__14488__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14488__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14489 = p__14487;
var map__14489__$1 = cljs.core.__destructure_map(map__14489);
var msg = map__14489__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14489__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14490 = cljs.core.deref(state_ref);
var map__14490__$1 = cljs.core.__destructure_map(map__14490);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14490__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14490__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14503,msg){
var map__14508 = p__14503;
var map__14508__$1 = cljs.core.__destructure_map(map__14508);
var runtime = map__14508__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14508__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14524,key,p__14525){
var map__14527 = p__14524;
var map__14527__$1 = cljs.core.__destructure_map(map__14527);
var state = map__14527__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14527__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14528 = p__14525;
var map__14528__$1 = cljs.core.__destructure_map(map__14528);
var spec = map__14528__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14528__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14528__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14533,key,spec){
var map__14535 = p__14533;
var map__14535__$1 = cljs.core.__destructure_map(map__14535);
var runtime = map__14535__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14535__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___14792 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___14792 == null)){
} else {
var on_welcome_14793 = temp__5827__auto___14792;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14793.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14793.cljs$core$IFn$_invoke$arity$0() : on_welcome_14793.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14540_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14540_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14541_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14541_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14542_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14542_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14543_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14543_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14545_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14545_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14564,key){
var map__14565 = p__14564;
var map__14565__$1 = cljs.core.__destructure_map(map__14565);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14565__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14575,msg){
var map__14576 = p__14575;
var map__14576__$1 = cljs.core.__destructure_map(map__14576);
var runtime = map__14576__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14576__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14582,p__14583){
var map__14584 = p__14582;
var map__14584__$1 = cljs.core.__destructure_map(map__14584);
var runtime = map__14584__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14584__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14585 = p__14583;
var map__14585__$1 = cljs.core.__destructure_map(map__14585);
var msg = map__14585__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14585__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14585__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__14597 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14599 = null;
var count__14600 = (0);
var i__14601 = (0);
while(true){
if((i__14601 < count__14600)){
var map__14622 = chunk__14599.cljs$core$IIndexed$_nth$arity$2(null,i__14601);
var map__14622__$1 = cljs.core.__destructure_map(map__14622);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14622__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14839 = seq__14597;
var G__14840 = chunk__14599;
var G__14841 = count__14600;
var G__14842 = (i__14601 + (1));
seq__14597 = G__14839;
chunk__14599 = G__14840;
count__14600 = G__14841;
i__14601 = G__14842;
continue;
} else {
var G__14846 = seq__14597;
var G__14847 = chunk__14599;
var G__14848 = count__14600;
var G__14849 = (i__14601 + (1));
seq__14597 = G__14846;
chunk__14599 = G__14847;
count__14600 = G__14848;
i__14601 = G__14849;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14597);
if(temp__5823__auto__){
var seq__14597__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14597__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14597__$1);
var G__14854 = cljs.core.chunk_rest(seq__14597__$1);
var G__14855 = c__5673__auto__;
var G__14856 = cljs.core.count(c__5673__auto__);
var G__14857 = (0);
seq__14597 = G__14854;
chunk__14599 = G__14855;
count__14600 = G__14856;
i__14601 = G__14857;
continue;
} else {
var map__14630 = cljs.core.first(seq__14597__$1);
var map__14630__$1 = cljs.core.__destructure_map(map__14630);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14630__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14862 = cljs.core.next(seq__14597__$1);
var G__14863 = null;
var G__14864 = (0);
var G__14865 = (0);
seq__14597 = G__14862;
chunk__14599 = G__14863;
count__14600 = G__14864;
i__14601 = G__14865;
continue;
} else {
var G__14867 = cljs.core.next(seq__14597__$1);
var G__14868 = null;
var G__14869 = (0);
var G__14870 = (0);
seq__14597 = G__14867;
chunk__14599 = G__14868;
count__14600 = G__14869;
i__14601 = G__14870;
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
