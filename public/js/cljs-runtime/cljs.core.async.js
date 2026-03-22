goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14991 = (function (f,blockable,meta14992){
this.f = f;
this.blockable = blockable;
this.meta14992 = meta14992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14993,meta14992__$1){
var self__ = this;
var _14993__$1 = this;
return (new cljs.core.async.t_cljs$core$async14991(self__.f,self__.blockable,meta14992__$1));
}));

(cljs.core.async.t_cljs$core$async14991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14993){
var self__ = this;
var _14993__$1 = this;
return self__.meta14992;
}));

(cljs.core.async.t_cljs$core$async14991.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14991.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14991.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14991.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14992","meta14992",1498194583,null)], null);
}));

(cljs.core.async.t_cljs$core$async14991.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14991");

(cljs.core.async.t_cljs$core$async14991.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14991");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14991.
 */
cljs.core.async.__GT_t_cljs$core$async14991 = (function cljs$core$async$__GT_t_cljs$core$async14991(f,blockable,meta14992){
return (new cljs.core.async.t_cljs$core$async14991(f,blockable,meta14992));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14970 = arguments.length;
switch (G__14970) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14991(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15066 = arguments.length;
switch (G__15066) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15078 = arguments.length;
switch (G__15078) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15101 = arguments.length;
switch (G__15101) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18143 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18143) : fn1.call(null,val_18143));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18143) : fn1.call(null,val_18143));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15120 = arguments.length;
switch (G__15120) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5741__auto___18146 = n;
var x_18147 = (0);
while(true){
if((x_18147 < n__5741__auto___18146)){
(a[x_18147] = x_18147);

var G__18148 = (x_18147 + (1));
x_18147 = G__18148;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15145 = (function (flag,meta15146){
this.flag = flag;
this.meta15146 = meta15146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15147,meta15146__$1){
var self__ = this;
var _15147__$1 = this;
return (new cljs.core.async.t_cljs$core$async15145(self__.flag,meta15146__$1));
}));

(cljs.core.async.t_cljs$core$async15145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15147){
var self__ = this;
var _15147__$1 = this;
return self__.meta15146;
}));

(cljs.core.async.t_cljs$core$async15145.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15145.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15145.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15145.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15146","meta15146",-2026081768,null)], null);
}));

(cljs.core.async.t_cljs$core$async15145.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15145");

(cljs.core.async.t_cljs$core$async15145.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15145");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15145.
 */
cljs.core.async.__GT_t_cljs$core$async15145 = (function cljs$core$async$__GT_t_cljs$core$async15145(flag,meta15146){
return (new cljs.core.async.t_cljs$core$async15145(flag,meta15146));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15145(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15158 = (function (flag,cb,meta15159){
this.flag = flag;
this.cb = cb;
this.meta15159 = meta15159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15160,meta15159__$1){
var self__ = this;
var _15160__$1 = this;
return (new cljs.core.async.t_cljs$core$async15158(self__.flag,self__.cb,meta15159__$1));
}));

(cljs.core.async.t_cljs$core$async15158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15160){
var self__ = this;
var _15160__$1 = this;
return self__.meta15159;
}));

(cljs.core.async.t_cljs$core$async15158.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15158.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15158.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15158.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15159","meta15159",-1990624139,null)], null);
}));

(cljs.core.async.t_cljs$core$async15158.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15158");

(cljs.core.async.t_cljs$core$async15158.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15158");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15158.
 */
cljs.core.async.__GT_t_cljs$core$async15158 = (function cljs$core$async$__GT_t_cljs$core$async15158(flag,cb,meta15159){
return (new cljs.core.async.t_cljs$core$async15158(flag,cb,meta15159));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15158(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_18156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_18156)){
if((!(((port_18156.cljs$core$IFn$_invoke$arity$1 ? port_18156.cljs$core$IFn$_invoke$arity$1((1)) : port_18156.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__18158 = (i + (1));
i = G__18158;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15163_SHARP_){
var G__15168 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15163_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15168) : fret.call(null,G__15168));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15164_SHARP_){
var G__15169 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15164_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15169) : fret.call(null,G__15169));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5142__auto__ = wport;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18163 = (i + (1));
i = G__18163;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5142__auto__ = ret;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5140__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18172 = arguments.length;
var i__5877__auto___18173 = (0);
while(true){
if((i__5877__auto___18173 < len__5876__auto___18172)){
args__5882__auto__.push((arguments[i__5877__auto___18173]));

var G__18177 = (i__5877__auto___18173 + (1));
i__5877__auto___18173 = G__18177;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15175){
var map__15177 = p__15175;
var map__15177__$1 = cljs.core.__destructure_map(map__15177);
var opts = map__15177__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15171){
var G__15172 = cljs.core.first(seq15171);
var seq15171__$1 = cljs.core.next(seq15171);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15172,seq15171__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15182 = arguments.length;
switch (G__15182) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14825__auto___18186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_15213){
var state_val_15214 = (state_15213[(1)]);
if((state_val_15214 === (7))){
var inst_15206 = (state_15213[(2)]);
var state_15213__$1 = state_15213;
var statearr_15219_18187 = state_15213__$1;
(statearr_15219_18187[(2)] = inst_15206);

(statearr_15219_18187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15214 === (1))){
var state_15213__$1 = state_15213;
var statearr_15221_18188 = state_15213__$1;
(statearr_15221_18188[(2)] = null);

(statearr_15221_18188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15214 === (4))){
var inst_15186 = (state_15213[(7)]);
var inst_15186__$1 = (state_15213[(2)]);
var inst_15188 = (inst_15186__$1 == null);
var state_15213__$1 = (function (){var statearr_15222 = state_15213;
(statearr_15222[(7)] = inst_15186__$1);

return statearr_15222;
})();
if(cljs.core.truth_(inst_15188)){
var statearr_15223_18194 = state_15213__$1;
(statearr_15223_18194[(1)] = (5));

} else {
var statearr_15224_18201 = state_15213__$1;
(statearr_15224_18201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15214 === (13))){
var state_15213__$1 = state_15213;
var statearr_15228_18202 = state_15213__$1;
(statearr_15228_18202[(2)] = null);

(statearr_15228_18202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15214 === (6))){
var inst_15186 = (state_15213[(7)]);
var state_15213__$1 = state_15213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15213__$1,(11),to,inst_15186);
} else {
if((state_val_15214 === (3))){
var inst_15210 = (state_15213[(2)]);
var state_15213__$1 = state_15213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15213__$1,inst_15210);
} else {
if((state_val_15214 === (12))){
var state_15213__$1 = state_15213;
var statearr_15235_18203 = state_15213__$1;
(statearr_15235_18203[(2)] = null);

(statearr_15235_18203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15214 === (2))){
var state_15213__$1 = state_15213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15213__$1,(4),from);
} else {
if((state_val_15214 === (11))){
var inst_15198 = (state_15213[(2)]);
var state_15213__$1 = state_15213;
if(cljs.core.truth_(inst_15198)){
var statearr_15237_18204 = state_15213__$1;
(statearr_15237_18204[(1)] = (12));

} else {
var statearr_15238_18211 = state_15213__$1;
(statearr_15238_18211[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15214 === (9))){
var state_15213__$1 = state_15213;
var statearr_15243_18213 = state_15213__$1;
(statearr_15243_18213[(2)] = null);

(statearr_15243_18213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15214 === (5))){
var state_15213__$1 = state_15213;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15246_18214 = state_15213__$1;
(statearr_15246_18214[(1)] = (8));

} else {
var statearr_15247_18215 = state_15213__$1;
(statearr_15247_18215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15214 === (14))){
var inst_15204 = (state_15213[(2)]);
var state_15213__$1 = state_15213;
var statearr_15248_18216 = state_15213__$1;
(statearr_15248_18216[(2)] = inst_15204);

(statearr_15248_18216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15214 === (10))){
var inst_15195 = (state_15213[(2)]);
var state_15213__$1 = state_15213;
var statearr_15249_18218 = state_15213__$1;
(statearr_15249_18218[(2)] = inst_15195);

(statearr_15249_18218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15214 === (8))){
var inst_15192 = cljs.core.async.close_BANG_(to);
var state_15213__$1 = state_15213;
var statearr_15255_18222 = state_15213__$1;
(statearr_15255_18222[(2)] = inst_15192);

(statearr_15255_18222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14076__auto__ = null;
var cljs$core$async$state_machine__14076__auto____0 = (function (){
var statearr_15262 = [null,null,null,null,null,null,null,null];
(statearr_15262[(0)] = cljs$core$async$state_machine__14076__auto__);

(statearr_15262[(1)] = (1));

return statearr_15262;
});
var cljs$core$async$state_machine__14076__auto____1 = (function (state_15213){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_15213);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e15263){var ex__14079__auto__ = e15263;
var statearr_15264_18239 = state_15213;
(statearr_15264_18239[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_15213[(4)]))){
var statearr_15266_18244 = state_15213;
(statearr_15266_18244[(1)] = cljs.core.first((state_15213[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18257 = state_15213;
state_15213 = G__18257;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$state_machine__14076__auto__ = function(state_15213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14076__auto____1.call(this,state_15213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14076__auto____0;
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14076__auto____1;
return cljs$core$async$state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_15269 = f__14826__auto__();
(statearr_15269[(6)] = c__14825__auto___18186);

return statearr_15269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15281){
var vec__15282 = p__15281;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15282,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15282,(1),null);
var job = vec__15282;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14825__auto___18265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_15297){
var state_val_15298 = (state_15297[(1)]);
if((state_val_15298 === (1))){
var state_15297__$1 = state_15297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15297__$1,(2),res,v);
} else {
if((state_val_15298 === (2))){
var inst_15289 = (state_15297[(2)]);
var inst_15292 = cljs.core.async.close_BANG_(res);
var state_15297__$1 = (function (){var statearr_15302 = state_15297;
(statearr_15302[(7)] = inst_15289);

return statearr_15302;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15297__$1,inst_15292);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____0 = (function (){
var statearr_15303 = [null,null,null,null,null,null,null,null];
(statearr_15303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__);

(statearr_15303[(1)] = (1));

return statearr_15303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____1 = (function (state_15297){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_15297);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e15304){var ex__14079__auto__ = e15304;
var statearr_15305_18274 = state_15297;
(statearr_15305_18274[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_15297[(4)]))){
var statearr_15307_18281 = state_15297;
(statearr_15307_18281[(1)] = cljs.core.first((state_15297[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18282 = state_15297;
state_15297 = G__18282;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__ = function(state_15297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____1.call(this,state_15297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_15309 = f__14826__auto__();
(statearr_15309[(6)] = c__14825__auto___18265);

return statearr_15309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15313){
var vec__15314 = p__15313;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15314,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15314,(1),null);
var job = vec__15314;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5741__auto___18283 = n;
var __18284 = (0);
while(true){
if((__18284 < n__5741__auto___18283)){
var G__15317_18285 = type;
var G__15317_18286__$1 = (((G__15317_18285 instanceof cljs.core.Keyword))?G__15317_18285.fqn:null);
switch (G__15317_18286__$1) {
case "compute":
var c__14825__auto___18289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18284,c__14825__auto___18289,G__15317_18285,G__15317_18286__$1,n__5741__auto___18283,jobs,results,process__$1,async){
return (function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = ((function (__18284,c__14825__auto___18289,G__15317_18285,G__15317_18286__$1,n__5741__auto___18283,jobs,results,process__$1,async){
return (function (state_15332){
var state_val_15333 = (state_15332[(1)]);
if((state_val_15333 === (1))){
var state_15332__$1 = state_15332;
var statearr_15337_18291 = state_15332__$1;
(statearr_15337_18291[(2)] = null);

(statearr_15337_18291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (2))){
var state_15332__$1 = state_15332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15332__$1,(4),jobs);
} else {
if((state_val_15333 === (3))){
var inst_15330 = (state_15332[(2)]);
var state_15332__$1 = state_15332;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15332__$1,inst_15330);
} else {
if((state_val_15333 === (4))){
var inst_15321 = (state_15332[(2)]);
var inst_15322 = process__$1(inst_15321);
var state_15332__$1 = state_15332;
if(cljs.core.truth_(inst_15322)){
var statearr_15342_18293 = state_15332__$1;
(statearr_15342_18293[(1)] = (5));

} else {
var statearr_15344_18294 = state_15332__$1;
(statearr_15344_18294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (5))){
var state_15332__$1 = state_15332;
var statearr_15348_18295 = state_15332__$1;
(statearr_15348_18295[(2)] = null);

(statearr_15348_18295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (6))){
var state_15332__$1 = state_15332;
var statearr_15349_18296 = state_15332__$1;
(statearr_15349_18296[(2)] = null);

(statearr_15349_18296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (7))){
var inst_15328 = (state_15332[(2)]);
var state_15332__$1 = state_15332;
var statearr_15354_18298 = state_15332__$1;
(statearr_15354_18298[(2)] = inst_15328);

(statearr_15354_18298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18284,c__14825__auto___18289,G__15317_18285,G__15317_18286__$1,n__5741__auto___18283,jobs,results,process__$1,async))
;
return ((function (__18284,switch__14075__auto__,c__14825__auto___18289,G__15317_18285,G__15317_18286__$1,n__5741__auto___18283,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____0 = (function (){
var statearr_15355 = [null,null,null,null,null,null,null];
(statearr_15355[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__);

(statearr_15355[(1)] = (1));

return statearr_15355;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____1 = (function (state_15332){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_15332);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e15360){var ex__14079__auto__ = e15360;
var statearr_15361_18300 = state_15332;
(statearr_15361_18300[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_15332[(4)]))){
var statearr_15363_18306 = state_15332;
(statearr_15363_18306[(1)] = cljs.core.first((state_15332[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18307 = state_15332;
state_15332 = G__18307;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__ = function(state_15332){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____1.call(this,state_15332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__;
})()
;})(__18284,switch__14075__auto__,c__14825__auto___18289,G__15317_18285,G__15317_18286__$1,n__5741__auto___18283,jobs,results,process__$1,async))
})();
var state__14827__auto__ = (function (){var statearr_15370 = f__14826__auto__();
(statearr_15370[(6)] = c__14825__auto___18289);

return statearr_15370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
});})(__18284,c__14825__auto___18289,G__15317_18285,G__15317_18286__$1,n__5741__auto___18283,jobs,results,process__$1,async))
);


break;
case "async":
var c__14825__auto___18308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18284,c__14825__auto___18308,G__15317_18285,G__15317_18286__$1,n__5741__auto___18283,jobs,results,process__$1,async){
return (function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = ((function (__18284,c__14825__auto___18308,G__15317_18285,G__15317_18286__$1,n__5741__auto___18283,jobs,results,process__$1,async){
return (function (state_15388){
var state_val_15389 = (state_15388[(1)]);
if((state_val_15389 === (1))){
var state_15388__$1 = state_15388;
var statearr_15393_18309 = state_15388__$1;
(statearr_15393_18309[(2)] = null);

(statearr_15393_18309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (2))){
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15388__$1,(4),jobs);
} else {
if((state_val_15389 === (3))){
var inst_15386 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15388__$1,inst_15386);
} else {
if((state_val_15389 === (4))){
var inst_15376 = (state_15388[(2)]);
var inst_15378 = async(inst_15376);
var state_15388__$1 = state_15388;
if(cljs.core.truth_(inst_15378)){
var statearr_15394_18312 = state_15388__$1;
(statearr_15394_18312[(1)] = (5));

} else {
var statearr_15395_18313 = state_15388__$1;
(statearr_15395_18313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (5))){
var state_15388__$1 = state_15388;
var statearr_15396_18314 = state_15388__$1;
(statearr_15396_18314[(2)] = null);

(statearr_15396_18314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (6))){
var state_15388__$1 = state_15388;
var statearr_15398_18316 = state_15388__$1;
(statearr_15398_18316[(2)] = null);

(statearr_15398_18316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (7))){
var inst_15384 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15399_18318 = state_15388__$1;
(statearr_15399_18318[(2)] = inst_15384);

(statearr_15399_18318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18284,c__14825__auto___18308,G__15317_18285,G__15317_18286__$1,n__5741__auto___18283,jobs,results,process__$1,async))
;
return ((function (__18284,switch__14075__auto__,c__14825__auto___18308,G__15317_18285,G__15317_18286__$1,n__5741__auto___18283,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____0 = (function (){
var statearr_15401 = [null,null,null,null,null,null,null];
(statearr_15401[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__);

(statearr_15401[(1)] = (1));

return statearr_15401;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____1 = (function (state_15388){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_15388);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e15402){var ex__14079__auto__ = e15402;
var statearr_15403_18324 = state_15388;
(statearr_15403_18324[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_15388[(4)]))){
var statearr_15404_18325 = state_15388;
(statearr_15404_18325[(1)] = cljs.core.first((state_15388[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18326 = state_15388;
state_15388 = G__18326;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__ = function(state_15388){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____1.call(this,state_15388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__;
})()
;})(__18284,switch__14075__auto__,c__14825__auto___18308,G__15317_18285,G__15317_18286__$1,n__5741__auto___18283,jobs,results,process__$1,async))
})();
var state__14827__auto__ = (function (){var statearr_15405 = f__14826__auto__();
(statearr_15405[(6)] = c__14825__auto___18308);

return statearr_15405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
});})(__18284,c__14825__auto___18308,G__15317_18285,G__15317_18286__$1,n__5741__auto___18283,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15317_18286__$1))));

}

var G__18331 = (__18284 + (1));
__18284 = G__18331;
continue;
} else {
}
break;
}

var c__14825__auto___18332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_15433){
var state_val_15434 = (state_15433[(1)]);
if((state_val_15434 === (7))){
var inst_15428 = (state_15433[(2)]);
var state_15433__$1 = state_15433;
var statearr_15437_18337 = state_15433__$1;
(statearr_15437_18337[(2)] = inst_15428);

(statearr_15437_18337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15434 === (1))){
var state_15433__$1 = state_15433;
var statearr_15438_18342 = state_15433__$1;
(statearr_15438_18342[(2)] = null);

(statearr_15438_18342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15434 === (4))){
var inst_15409 = (state_15433[(7)]);
var inst_15409__$1 = (state_15433[(2)]);
var inst_15410 = (inst_15409__$1 == null);
var state_15433__$1 = (function (){var statearr_15440 = state_15433;
(statearr_15440[(7)] = inst_15409__$1);

return statearr_15440;
})();
if(cljs.core.truth_(inst_15410)){
var statearr_15444_18346 = state_15433__$1;
(statearr_15444_18346[(1)] = (5));

} else {
var statearr_15445_18348 = state_15433__$1;
(statearr_15445_18348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15434 === (6))){
var inst_15409 = (state_15433[(7)]);
var inst_15414 = (state_15433[(8)]);
var inst_15414__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15420 = [inst_15409,inst_15414__$1];
var inst_15421 = (new cljs.core.PersistentVector(null,2,(5),inst_15419,inst_15420,null));
var state_15433__$1 = (function (){var statearr_15447 = state_15433;
(statearr_15447[(8)] = inst_15414__$1);

return statearr_15447;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15433__$1,(8),jobs,inst_15421);
} else {
if((state_val_15434 === (3))){
var inst_15430 = (state_15433[(2)]);
var state_15433__$1 = state_15433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15433__$1,inst_15430);
} else {
if((state_val_15434 === (2))){
var state_15433__$1 = state_15433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15433__$1,(4),from);
} else {
if((state_val_15434 === (9))){
var inst_15425 = (state_15433[(2)]);
var state_15433__$1 = (function (){var statearr_15449 = state_15433;
(statearr_15449[(9)] = inst_15425);

return statearr_15449;
})();
var statearr_15450_18359 = state_15433__$1;
(statearr_15450_18359[(2)] = null);

(statearr_15450_18359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15434 === (5))){
var inst_15412 = cljs.core.async.close_BANG_(jobs);
var state_15433__$1 = state_15433;
var statearr_15451_18361 = state_15433__$1;
(statearr_15451_18361[(2)] = inst_15412);

(statearr_15451_18361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15434 === (8))){
var inst_15414 = (state_15433[(8)]);
var inst_15423 = (state_15433[(2)]);
var state_15433__$1 = (function (){var statearr_15452 = state_15433;
(statearr_15452[(10)] = inst_15423);

return statearr_15452;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15433__$1,(9),results,inst_15414);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____0 = (function (){
var statearr_15453 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15453[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__);

(statearr_15453[(1)] = (1));

return statearr_15453;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____1 = (function (state_15433){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_15433);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e15454){var ex__14079__auto__ = e15454;
var statearr_15455_18365 = state_15433;
(statearr_15455_18365[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_15433[(4)]))){
var statearr_15456_18366 = state_15433;
(statearr_15456_18366[(1)] = cljs.core.first((state_15433[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18367 = state_15433;
state_15433 = G__18367;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__ = function(state_15433){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____1.call(this,state_15433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_15457 = f__14826__auto__();
(statearr_15457[(6)] = c__14825__auto___18332);

return statearr_15457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));


var c__14825__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_15496){
var state_val_15497 = (state_15496[(1)]);
if((state_val_15497 === (7))){
var inst_15492 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
var statearr_15498_18368 = state_15496__$1;
(statearr_15498_18368[(2)] = inst_15492);

(statearr_15498_18368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (20))){
var state_15496__$1 = state_15496;
var statearr_15499_18372 = state_15496__$1;
(statearr_15499_18372[(2)] = null);

(statearr_15499_18372[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (1))){
var state_15496__$1 = state_15496;
var statearr_15500_18377 = state_15496__$1;
(statearr_15500_18377[(2)] = null);

(statearr_15500_18377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (4))){
var inst_15461 = (state_15496[(7)]);
var inst_15461__$1 = (state_15496[(2)]);
var inst_15462 = (inst_15461__$1 == null);
var state_15496__$1 = (function (){var statearr_15503 = state_15496;
(statearr_15503[(7)] = inst_15461__$1);

return statearr_15503;
})();
if(cljs.core.truth_(inst_15462)){
var statearr_15504_18378 = state_15496__$1;
(statearr_15504_18378[(1)] = (5));

} else {
var statearr_15505_18379 = state_15496__$1;
(statearr_15505_18379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (15))){
var inst_15474 = (state_15496[(8)]);
var state_15496__$1 = state_15496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15496__$1,(18),to,inst_15474);
} else {
if((state_val_15497 === (21))){
var inst_15487 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
var statearr_15509_18380 = state_15496__$1;
(statearr_15509_18380[(2)] = inst_15487);

(statearr_15509_18380[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (13))){
var inst_15489 = (state_15496[(2)]);
var state_15496__$1 = (function (){var statearr_15510 = state_15496;
(statearr_15510[(9)] = inst_15489);

return statearr_15510;
})();
var statearr_15511_18381 = state_15496__$1;
(statearr_15511_18381[(2)] = null);

(statearr_15511_18381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (6))){
var inst_15461 = (state_15496[(7)]);
var state_15496__$1 = state_15496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15496__$1,(11),inst_15461);
} else {
if((state_val_15497 === (17))){
var inst_15482 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
if(cljs.core.truth_(inst_15482)){
var statearr_15513_18382 = state_15496__$1;
(statearr_15513_18382[(1)] = (19));

} else {
var statearr_15515_18383 = state_15496__$1;
(statearr_15515_18383[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (3))){
var inst_15494 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15496__$1,inst_15494);
} else {
if((state_val_15497 === (12))){
var inst_15471 = (state_15496[(10)]);
var state_15496__$1 = state_15496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15496__$1,(14),inst_15471);
} else {
if((state_val_15497 === (2))){
var state_15496__$1 = state_15496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15496__$1,(4),results);
} else {
if((state_val_15497 === (19))){
var state_15496__$1 = state_15496;
var statearr_15521_18384 = state_15496__$1;
(statearr_15521_18384[(2)] = null);

(statearr_15521_18384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (11))){
var inst_15471 = (state_15496[(2)]);
var state_15496__$1 = (function (){var statearr_15522 = state_15496;
(statearr_15522[(10)] = inst_15471);

return statearr_15522;
})();
var statearr_15523_18385 = state_15496__$1;
(statearr_15523_18385[(2)] = null);

(statearr_15523_18385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (9))){
var state_15496__$1 = state_15496;
var statearr_15525_18386 = state_15496__$1;
(statearr_15525_18386[(2)] = null);

(statearr_15525_18386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (5))){
var state_15496__$1 = state_15496;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15526_18387 = state_15496__$1;
(statearr_15526_18387[(1)] = (8));

} else {
var statearr_15527_18388 = state_15496__$1;
(statearr_15527_18388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (14))){
var inst_15474 = (state_15496[(8)]);
var inst_15476 = (state_15496[(11)]);
var inst_15474__$1 = (state_15496[(2)]);
var inst_15475 = (inst_15474__$1 == null);
var inst_15476__$1 = cljs.core.not(inst_15475);
var state_15496__$1 = (function (){var statearr_15528 = state_15496;
(statearr_15528[(8)] = inst_15474__$1);

(statearr_15528[(11)] = inst_15476__$1);

return statearr_15528;
})();
if(inst_15476__$1){
var statearr_15530_18391 = state_15496__$1;
(statearr_15530_18391[(1)] = (15));

} else {
var statearr_15531_18392 = state_15496__$1;
(statearr_15531_18392[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (16))){
var inst_15476 = (state_15496[(11)]);
var state_15496__$1 = state_15496;
var statearr_15534_18394 = state_15496__$1;
(statearr_15534_18394[(2)] = inst_15476);

(statearr_15534_18394[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (10))){
var inst_15468 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
var statearr_15537_18395 = state_15496__$1;
(statearr_15537_18395[(2)] = inst_15468);

(statearr_15537_18395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (18))){
var inst_15479 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
var statearr_15539_18400 = state_15496__$1;
(statearr_15539_18400[(2)] = inst_15479);

(statearr_15539_18400[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (8))){
var inst_15465 = cljs.core.async.close_BANG_(to);
var state_15496__$1 = state_15496;
var statearr_15540_18401 = state_15496__$1;
(statearr_15540_18401[(2)] = inst_15465);

(statearr_15540_18401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____0 = (function (){
var statearr_15542 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__);

(statearr_15542[(1)] = (1));

return statearr_15542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____1 = (function (state_15496){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_15496);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e15544){var ex__14079__auto__ = e15544;
var statearr_15545_18402 = state_15496;
(statearr_15545_18402[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_15496[(4)]))){
var statearr_15547_18403 = state_15496;
(statearr_15547_18403[(1)] = cljs.core.first((state_15496[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18410 = state_15496;
state_15496 = G__18410;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__ = function(state_15496){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____1.call(this,state_15496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14076__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_15554 = f__14826__auto__();
(statearr_15554[(6)] = c__14825__auto__);

return statearr_15554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));

return c__14825__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15558 = arguments.length;
switch (G__15558) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15561 = arguments.length;
switch (G__15561) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15567 = arguments.length;
switch (G__15567) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14825__auto___18436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_15598){
var state_val_15599 = (state_15598[(1)]);
if((state_val_15599 === (7))){
var inst_15591 = (state_15598[(2)]);
var state_15598__$1 = state_15598;
var statearr_15601_18438 = state_15598__$1;
(statearr_15601_18438[(2)] = inst_15591);

(statearr_15601_18438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15599 === (1))){
var state_15598__$1 = state_15598;
var statearr_15602_18439 = state_15598__$1;
(statearr_15602_18439[(2)] = null);

(statearr_15602_18439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15599 === (4))){
var inst_15572 = (state_15598[(7)]);
var inst_15572__$1 = (state_15598[(2)]);
var inst_15573 = (inst_15572__$1 == null);
var state_15598__$1 = (function (){var statearr_15603 = state_15598;
(statearr_15603[(7)] = inst_15572__$1);

return statearr_15603;
})();
if(cljs.core.truth_(inst_15573)){
var statearr_15604_18440 = state_15598__$1;
(statearr_15604_18440[(1)] = (5));

} else {
var statearr_15605_18442 = state_15598__$1;
(statearr_15605_18442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15599 === (13))){
var state_15598__$1 = state_15598;
var statearr_15606_18445 = state_15598__$1;
(statearr_15606_18445[(2)] = null);

(statearr_15606_18445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15599 === (6))){
var inst_15572 = (state_15598[(7)]);
var inst_15578 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15572) : p.call(null,inst_15572));
var state_15598__$1 = state_15598;
if(cljs.core.truth_(inst_15578)){
var statearr_15607_18449 = state_15598__$1;
(statearr_15607_18449[(1)] = (9));

} else {
var statearr_15608_18452 = state_15598__$1;
(statearr_15608_18452[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15599 === (3))){
var inst_15593 = (state_15598[(2)]);
var state_15598__$1 = state_15598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15598__$1,inst_15593);
} else {
if((state_val_15599 === (12))){
var state_15598__$1 = state_15598;
var statearr_15610_18456 = state_15598__$1;
(statearr_15610_18456[(2)] = null);

(statearr_15610_18456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15599 === (2))){
var state_15598__$1 = state_15598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15598__$1,(4),ch);
} else {
if((state_val_15599 === (11))){
var inst_15572 = (state_15598[(7)]);
var inst_15582 = (state_15598[(2)]);
var state_15598__$1 = state_15598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15598__$1,(8),inst_15582,inst_15572);
} else {
if((state_val_15599 === (9))){
var state_15598__$1 = state_15598;
var statearr_15612_18460 = state_15598__$1;
(statearr_15612_18460[(2)] = tc);

(statearr_15612_18460[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15599 === (5))){
var inst_15575 = cljs.core.async.close_BANG_(tc);
var inst_15576 = cljs.core.async.close_BANG_(fc);
var state_15598__$1 = (function (){var statearr_15614 = state_15598;
(statearr_15614[(8)] = inst_15575);

return statearr_15614;
})();
var statearr_15616_18463 = state_15598__$1;
(statearr_15616_18463[(2)] = inst_15576);

(statearr_15616_18463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15599 === (14))){
var inst_15589 = (state_15598[(2)]);
var state_15598__$1 = state_15598;
var statearr_15619_18464 = state_15598__$1;
(statearr_15619_18464[(2)] = inst_15589);

(statearr_15619_18464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15599 === (10))){
var state_15598__$1 = state_15598;
var statearr_15620_18468 = state_15598__$1;
(statearr_15620_18468[(2)] = fc);

(statearr_15620_18468[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15599 === (8))){
var inst_15584 = (state_15598[(2)]);
var state_15598__$1 = state_15598;
if(cljs.core.truth_(inst_15584)){
var statearr_15626_18469 = state_15598__$1;
(statearr_15626_18469[(1)] = (12));

} else {
var statearr_15627_18471 = state_15598__$1;
(statearr_15627_18471[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14076__auto__ = null;
var cljs$core$async$state_machine__14076__auto____0 = (function (){
var statearr_15630 = [null,null,null,null,null,null,null,null,null];
(statearr_15630[(0)] = cljs$core$async$state_machine__14076__auto__);

(statearr_15630[(1)] = (1));

return statearr_15630;
});
var cljs$core$async$state_machine__14076__auto____1 = (function (state_15598){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_15598);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e15631){var ex__14079__auto__ = e15631;
var statearr_15636_18473 = state_15598;
(statearr_15636_18473[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_15598[(4)]))){
var statearr_15640_18474 = state_15598;
(statearr_15640_18474[(1)] = cljs.core.first((state_15598[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18475 = state_15598;
state_15598 = G__18475;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$state_machine__14076__auto__ = function(state_15598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14076__auto____1.call(this,state_15598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14076__auto____0;
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14076__auto____1;
return cljs$core$async$state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_15641 = f__14826__auto__();
(statearr_15641[(6)] = c__14825__auto___18436);

return statearr_15641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14825__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_15668){
var state_val_15669 = (state_15668[(1)]);
if((state_val_15669 === (7))){
var inst_15664 = (state_15668[(2)]);
var state_15668__$1 = state_15668;
var statearr_15672_18479 = state_15668__$1;
(statearr_15672_18479[(2)] = inst_15664);

(statearr_15672_18479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15669 === (1))){
var inst_15646 = init;
var inst_15647 = inst_15646;
var state_15668__$1 = (function (){var statearr_15673 = state_15668;
(statearr_15673[(7)] = inst_15647);

return statearr_15673;
})();
var statearr_15674_18480 = state_15668__$1;
(statearr_15674_18480[(2)] = null);

(statearr_15674_18480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15669 === (4))){
var inst_15650 = (state_15668[(8)]);
var inst_15650__$1 = (state_15668[(2)]);
var inst_15651 = (inst_15650__$1 == null);
var state_15668__$1 = (function (){var statearr_15677 = state_15668;
(statearr_15677[(8)] = inst_15650__$1);

return statearr_15677;
})();
if(cljs.core.truth_(inst_15651)){
var statearr_15678_18481 = state_15668__$1;
(statearr_15678_18481[(1)] = (5));

} else {
var statearr_15679_18485 = state_15668__$1;
(statearr_15679_18485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15669 === (6))){
var inst_15647 = (state_15668[(7)]);
var inst_15650 = (state_15668[(8)]);
var inst_15655 = (state_15668[(9)]);
var inst_15655__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15647,inst_15650) : f.call(null,inst_15647,inst_15650));
var inst_15656 = cljs.core.reduced_QMARK_(inst_15655__$1);
var state_15668__$1 = (function (){var statearr_15682 = state_15668;
(statearr_15682[(9)] = inst_15655__$1);

return statearr_15682;
})();
if(inst_15656){
var statearr_15683_18486 = state_15668__$1;
(statearr_15683_18486[(1)] = (8));

} else {
var statearr_15685_18487 = state_15668__$1;
(statearr_15685_18487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15669 === (3))){
var inst_15666 = (state_15668[(2)]);
var state_15668__$1 = state_15668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15668__$1,inst_15666);
} else {
if((state_val_15669 === (2))){
var state_15668__$1 = state_15668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15668__$1,(4),ch);
} else {
if((state_val_15669 === (9))){
var inst_15655 = (state_15668[(9)]);
var inst_15647 = inst_15655;
var state_15668__$1 = (function (){var statearr_15690 = state_15668;
(statearr_15690[(7)] = inst_15647);

return statearr_15690;
})();
var statearr_15691_18491 = state_15668__$1;
(statearr_15691_18491[(2)] = null);

(statearr_15691_18491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15669 === (5))){
var inst_15647 = (state_15668[(7)]);
var state_15668__$1 = state_15668;
var statearr_15692_18493 = state_15668__$1;
(statearr_15692_18493[(2)] = inst_15647);

(statearr_15692_18493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15669 === (10))){
var inst_15662 = (state_15668[(2)]);
var state_15668__$1 = state_15668;
var statearr_15693_18494 = state_15668__$1;
(statearr_15693_18494[(2)] = inst_15662);

(statearr_15693_18494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15669 === (8))){
var inst_15655 = (state_15668[(9)]);
var inst_15658 = cljs.core.deref(inst_15655);
var state_15668__$1 = state_15668;
var statearr_15697_18496 = state_15668__$1;
(statearr_15697_18496[(2)] = inst_15658);

(statearr_15697_18496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14076__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14076__auto____0 = (function (){
var statearr_15699 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15699[(0)] = cljs$core$async$reduce_$_state_machine__14076__auto__);

(statearr_15699[(1)] = (1));

return statearr_15699;
});
var cljs$core$async$reduce_$_state_machine__14076__auto____1 = (function (state_15668){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_15668);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e15704){var ex__14079__auto__ = e15704;
var statearr_15706_18498 = state_15668;
(statearr_15706_18498[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_15668[(4)]))){
var statearr_15707_18499 = state_15668;
(statearr_15707_18499[(1)] = cljs.core.first((state_15668[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18500 = state_15668;
state_15668 = G__18500;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14076__auto__ = function(state_15668){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14076__auto____1.call(this,state_15668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14076__auto____0;
cljs$core$async$reduce_$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14076__auto____1;
return cljs$core$async$reduce_$_state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_15712 = f__14826__auto__();
(statearr_15712[(6)] = c__14825__auto__);

return statearr_15712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));

return c__14825__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14825__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_15721){
var state_val_15722 = (state_15721[(1)]);
if((state_val_15722 === (1))){
var inst_15716 = cljs.core.async.reduce(f__$1,init,ch);
var state_15721__$1 = state_15721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15721__$1,(2),inst_15716);
} else {
if((state_val_15722 === (2))){
var inst_15718 = (state_15721[(2)]);
var inst_15719 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15718) : f__$1.call(null,inst_15718));
var state_15721__$1 = state_15721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15721__$1,inst_15719);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14076__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14076__auto____0 = (function (){
var statearr_15727 = [null,null,null,null,null,null,null];
(statearr_15727[(0)] = cljs$core$async$transduce_$_state_machine__14076__auto__);

(statearr_15727[(1)] = (1));

return statearr_15727;
});
var cljs$core$async$transduce_$_state_machine__14076__auto____1 = (function (state_15721){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_15721);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e15729){var ex__14079__auto__ = e15729;
var statearr_15730_18505 = state_15721;
(statearr_15730_18505[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_15721[(4)]))){
var statearr_15732_18510 = state_15721;
(statearr_15732_18510[(1)] = cljs.core.first((state_15721[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18511 = state_15721;
state_15721 = G__18511;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14076__auto__ = function(state_15721){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14076__auto____1.call(this,state_15721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14076__auto____0;
cljs$core$async$transduce_$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14076__auto____1;
return cljs$core$async$transduce_$_state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_15737 = f__14826__auto__();
(statearr_15737[(6)] = c__14825__auto__);

return statearr_15737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));

return c__14825__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15744 = arguments.length;
switch (G__15744) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14825__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_15778){
var state_val_15779 = (state_15778[(1)]);
if((state_val_15779 === (7))){
var inst_15758 = (state_15778[(2)]);
var state_15778__$1 = state_15778;
var statearr_15783_18520 = state_15778__$1;
(statearr_15783_18520[(2)] = inst_15758);

(statearr_15783_18520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (1))){
var inst_15747 = cljs.core.seq(coll);
var inst_15748 = inst_15747;
var state_15778__$1 = (function (){var statearr_15785 = state_15778;
(statearr_15785[(7)] = inst_15748);

return statearr_15785;
})();
var statearr_15786_18526 = state_15778__$1;
(statearr_15786_18526[(2)] = null);

(statearr_15786_18526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (4))){
var inst_15748 = (state_15778[(7)]);
var inst_15756 = cljs.core.first(inst_15748);
var state_15778__$1 = state_15778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15778__$1,(7),ch,inst_15756);
} else {
if((state_val_15779 === (13))){
var inst_15772 = (state_15778[(2)]);
var state_15778__$1 = state_15778;
var statearr_15792_18527 = state_15778__$1;
(statearr_15792_18527[(2)] = inst_15772);

(statearr_15792_18527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (6))){
var inst_15761 = (state_15778[(2)]);
var state_15778__$1 = state_15778;
if(cljs.core.truth_(inst_15761)){
var statearr_15794_18528 = state_15778__$1;
(statearr_15794_18528[(1)] = (8));

} else {
var statearr_15795_18529 = state_15778__$1;
(statearr_15795_18529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (3))){
var inst_15776 = (state_15778[(2)]);
var state_15778__$1 = state_15778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15778__$1,inst_15776);
} else {
if((state_val_15779 === (12))){
var state_15778__$1 = state_15778;
var statearr_15799_18530 = state_15778__$1;
(statearr_15799_18530[(2)] = null);

(statearr_15799_18530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (2))){
var inst_15748 = (state_15778[(7)]);
var state_15778__$1 = state_15778;
if(cljs.core.truth_(inst_15748)){
var statearr_15805_18534 = state_15778__$1;
(statearr_15805_18534[(1)] = (4));

} else {
var statearr_15806_18535 = state_15778__$1;
(statearr_15806_18535[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (11))){
var inst_15769 = cljs.core.async.close_BANG_(ch);
var state_15778__$1 = state_15778;
var statearr_15810_18536 = state_15778__$1;
(statearr_15810_18536[(2)] = inst_15769);

(statearr_15810_18536[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (9))){
var state_15778__$1 = state_15778;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15811_18537 = state_15778__$1;
(statearr_15811_18537[(1)] = (11));

} else {
var statearr_15812_18538 = state_15778__$1;
(statearr_15812_18538[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (5))){
var inst_15748 = (state_15778[(7)]);
var state_15778__$1 = state_15778;
var statearr_15813_18539 = state_15778__$1;
(statearr_15813_18539[(2)] = inst_15748);

(statearr_15813_18539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (10))){
var inst_15774 = (state_15778[(2)]);
var state_15778__$1 = state_15778;
var statearr_15815_18547 = state_15778__$1;
(statearr_15815_18547[(2)] = inst_15774);

(statearr_15815_18547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (8))){
var inst_15748 = (state_15778[(7)]);
var inst_15764 = cljs.core.next(inst_15748);
var inst_15748__$1 = inst_15764;
var state_15778__$1 = (function (){var statearr_15818 = state_15778;
(statearr_15818[(7)] = inst_15748__$1);

return statearr_15818;
})();
var statearr_15821_18552 = state_15778__$1;
(statearr_15821_18552[(2)] = null);

(statearr_15821_18552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14076__auto__ = null;
var cljs$core$async$state_machine__14076__auto____0 = (function (){
var statearr_15825 = [null,null,null,null,null,null,null,null];
(statearr_15825[(0)] = cljs$core$async$state_machine__14076__auto__);

(statearr_15825[(1)] = (1));

return statearr_15825;
});
var cljs$core$async$state_machine__14076__auto____1 = (function (state_15778){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_15778);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e15827){var ex__14079__auto__ = e15827;
var statearr_15828_18556 = state_15778;
(statearr_15828_18556[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_15778[(4)]))){
var statearr_15829_18558 = state_15778;
(statearr_15829_18558[(1)] = cljs.core.first((state_15778[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18560 = state_15778;
state_15778 = G__18560;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$state_machine__14076__auto__ = function(state_15778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14076__auto____1.call(this,state_15778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14076__auto____0;
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14076__auto____1;
return cljs$core$async$state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_15831 = f__14826__auto__();
(statearr_15831[(6)] = c__14825__auto__);

return statearr_15831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));

return c__14825__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15837 = arguments.length;
switch (G__15837) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18564 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18564(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18568 = (function (m,ch,close_QMARK_){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5499__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5497__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18568(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18570 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18570(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18575 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18575(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15880 = (function (ch,cs,meta15881){
this.ch = ch;
this.cs = cs;
this.meta15881 = meta15881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15882,meta15881__$1){
var self__ = this;
var _15882__$1 = this;
return (new cljs.core.async.t_cljs$core$async15880(self__.ch,self__.cs,meta15881__$1));
}));

(cljs.core.async.t_cljs$core$async15880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15882){
var self__ = this;
var _15882__$1 = this;
return self__.meta15881;
}));

(cljs.core.async.t_cljs$core$async15880.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15880.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15880.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15880.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15880.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15880.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15881","meta15881",998691499,null)], null);
}));

(cljs.core.async.t_cljs$core$async15880.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15880");

(cljs.core.async.t_cljs$core$async15880.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15880");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15880.
 */
cljs.core.async.__GT_t_cljs$core$async15880 = (function cljs$core$async$__GT_t_cljs$core$async15880(ch,cs,meta15881){
return (new cljs.core.async.t_cljs$core$async15880(ch,cs,meta15881));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15880(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14825__auto___18598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_16045){
var state_val_16046 = (state_16045[(1)]);
if((state_val_16046 === (7))){
var inst_16041 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16050_18599 = state_16045__$1;
(statearr_16050_18599[(2)] = inst_16041);

(statearr_16050_18599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (20))){
var inst_15938 = (state_16045[(7)]);
var inst_15950 = cljs.core.first(inst_15938);
var inst_15951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15950,(0),null);
var inst_15952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15950,(1),null);
var state_16045__$1 = (function (){var statearr_16055 = state_16045;
(statearr_16055[(8)] = inst_15951);

return statearr_16055;
})();
if(cljs.core.truth_(inst_15952)){
var statearr_16056_18604 = state_16045__$1;
(statearr_16056_18604[(1)] = (22));

} else {
var statearr_16059_18605 = state_16045__$1;
(statearr_16059_18605[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (27))){
var inst_15980 = (state_16045[(9)]);
var inst_15982 = (state_16045[(10)]);
var inst_15987 = (state_16045[(11)]);
var inst_15901 = (state_16045[(12)]);
var inst_15987__$1 = cljs.core._nth(inst_15980,inst_15982);
var inst_15988 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15987__$1,inst_15901,done);
var state_16045__$1 = (function (){var statearr_16065 = state_16045;
(statearr_16065[(11)] = inst_15987__$1);

return statearr_16065;
})();
if(cljs.core.truth_(inst_15988)){
var statearr_16066_18612 = state_16045__$1;
(statearr_16066_18612[(1)] = (30));

} else {
var statearr_16067_18613 = state_16045__$1;
(statearr_16067_18613[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (1))){
var state_16045__$1 = state_16045;
var statearr_16068_18614 = state_16045__$1;
(statearr_16068_18614[(2)] = null);

(statearr_16068_18614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (24))){
var inst_15938 = (state_16045[(7)]);
var inst_15957 = (state_16045[(2)]);
var inst_15958 = cljs.core.next(inst_15938);
var inst_15911 = inst_15958;
var inst_15912 = null;
var inst_15913 = (0);
var inst_15914 = (0);
var state_16045__$1 = (function (){var statearr_16069 = state_16045;
(statearr_16069[(13)] = inst_15957);

(statearr_16069[(14)] = inst_15911);

(statearr_16069[(15)] = inst_15912);

(statearr_16069[(16)] = inst_15913);

(statearr_16069[(17)] = inst_15914);

return statearr_16069;
})();
var statearr_16072_18624 = state_16045__$1;
(statearr_16072_18624[(2)] = null);

(statearr_16072_18624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (39))){
var state_16045__$1 = state_16045;
var statearr_16081_18626 = state_16045__$1;
(statearr_16081_18626[(2)] = null);

(statearr_16081_18626[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (4))){
var inst_15901 = (state_16045[(12)]);
var inst_15901__$1 = (state_16045[(2)]);
var inst_15902 = (inst_15901__$1 == null);
var state_16045__$1 = (function (){var statearr_16083 = state_16045;
(statearr_16083[(12)] = inst_15901__$1);

return statearr_16083;
})();
if(cljs.core.truth_(inst_15902)){
var statearr_16084_18630 = state_16045__$1;
(statearr_16084_18630[(1)] = (5));

} else {
var statearr_16085_18631 = state_16045__$1;
(statearr_16085_18631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (15))){
var inst_15914 = (state_16045[(17)]);
var inst_15911 = (state_16045[(14)]);
var inst_15912 = (state_16045[(15)]);
var inst_15913 = (state_16045[(16)]);
var inst_15934 = (state_16045[(2)]);
var inst_15935 = (inst_15914 + (1));
var tmp16074 = inst_15912;
var tmp16075 = inst_15913;
var tmp16076 = inst_15911;
var inst_15911__$1 = tmp16076;
var inst_15912__$1 = tmp16074;
var inst_15913__$1 = tmp16075;
var inst_15914__$1 = inst_15935;
var state_16045__$1 = (function (){var statearr_16089 = state_16045;
(statearr_16089[(18)] = inst_15934);

(statearr_16089[(14)] = inst_15911__$1);

(statearr_16089[(15)] = inst_15912__$1);

(statearr_16089[(16)] = inst_15913__$1);

(statearr_16089[(17)] = inst_15914__$1);

return statearr_16089;
})();
var statearr_16091_18632 = state_16045__$1;
(statearr_16091_18632[(2)] = null);

(statearr_16091_18632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (21))){
var inst_15961 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16099_18634 = state_16045__$1;
(statearr_16099_18634[(2)] = inst_15961);

(statearr_16099_18634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (31))){
var inst_15987 = (state_16045[(11)]);
var inst_15991 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15987);
var state_16045__$1 = state_16045;
var statearr_16101_18647 = state_16045__$1;
(statearr_16101_18647[(2)] = inst_15991);

(statearr_16101_18647[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (32))){
var inst_15982 = (state_16045[(10)]);
var inst_15979 = (state_16045[(19)]);
var inst_15980 = (state_16045[(9)]);
var inst_15981 = (state_16045[(20)]);
var inst_15993 = (state_16045[(2)]);
var inst_15994 = (inst_15982 + (1));
var tmp16093 = inst_15980;
var tmp16094 = inst_15981;
var tmp16095 = inst_15979;
var inst_15979__$1 = tmp16095;
var inst_15980__$1 = tmp16093;
var inst_15981__$1 = tmp16094;
var inst_15982__$1 = inst_15994;
var state_16045__$1 = (function (){var statearr_16110 = state_16045;
(statearr_16110[(21)] = inst_15993);

(statearr_16110[(19)] = inst_15979__$1);

(statearr_16110[(9)] = inst_15980__$1);

(statearr_16110[(20)] = inst_15981__$1);

(statearr_16110[(10)] = inst_15982__$1);

return statearr_16110;
})();
var statearr_16113_18648 = state_16045__$1;
(statearr_16113_18648[(2)] = null);

(statearr_16113_18648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (40))){
var inst_16009 = (state_16045[(22)]);
var inst_16017 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16009);
var state_16045__$1 = state_16045;
var statearr_16115_18649 = state_16045__$1;
(statearr_16115_18649[(2)] = inst_16017);

(statearr_16115_18649[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (33))){
var inst_15997 = (state_16045[(23)]);
var inst_16000 = cljs.core.chunked_seq_QMARK_(inst_15997);
var state_16045__$1 = state_16045;
if(inst_16000){
var statearr_16117_18653 = state_16045__$1;
(statearr_16117_18653[(1)] = (36));

} else {
var statearr_16120_18654 = state_16045__$1;
(statearr_16120_18654[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (13))){
var inst_15927 = (state_16045[(24)]);
var inst_15931 = cljs.core.async.close_BANG_(inst_15927);
var state_16045__$1 = state_16045;
var statearr_16129_18657 = state_16045__$1;
(statearr_16129_18657[(2)] = inst_15931);

(statearr_16129_18657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (22))){
var inst_15951 = (state_16045[(8)]);
var inst_15954 = cljs.core.async.close_BANG_(inst_15951);
var state_16045__$1 = state_16045;
var statearr_16132_18660 = state_16045__$1;
(statearr_16132_18660[(2)] = inst_15954);

(statearr_16132_18660[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (36))){
var inst_15997 = (state_16045[(23)]);
var inst_16003 = cljs.core.chunk_first(inst_15997);
var inst_16004 = cljs.core.chunk_rest(inst_15997);
var inst_16005 = cljs.core.count(inst_16003);
var inst_15979 = inst_16004;
var inst_15980 = inst_16003;
var inst_15981 = inst_16005;
var inst_15982 = (0);
var state_16045__$1 = (function (){var statearr_16136 = state_16045;
(statearr_16136[(19)] = inst_15979);

(statearr_16136[(9)] = inst_15980);

(statearr_16136[(20)] = inst_15981);

(statearr_16136[(10)] = inst_15982);

return statearr_16136;
})();
var statearr_16139_18665 = state_16045__$1;
(statearr_16139_18665[(2)] = null);

(statearr_16139_18665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (41))){
var inst_15997 = (state_16045[(23)]);
var inst_16019 = (state_16045[(2)]);
var inst_16021 = cljs.core.next(inst_15997);
var inst_15979 = inst_16021;
var inst_15980 = null;
var inst_15981 = (0);
var inst_15982 = (0);
var state_16045__$1 = (function (){var statearr_16147 = state_16045;
(statearr_16147[(25)] = inst_16019);

(statearr_16147[(19)] = inst_15979);

(statearr_16147[(9)] = inst_15980);

(statearr_16147[(20)] = inst_15981);

(statearr_16147[(10)] = inst_15982);

return statearr_16147;
})();
var statearr_16148_18667 = state_16045__$1;
(statearr_16148_18667[(2)] = null);

(statearr_16148_18667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (43))){
var state_16045__$1 = state_16045;
var statearr_16150_18668 = state_16045__$1;
(statearr_16150_18668[(2)] = null);

(statearr_16150_18668[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (29))){
var inst_16029 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16154_18671 = state_16045__$1;
(statearr_16154_18671[(2)] = inst_16029);

(statearr_16154_18671[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (44))){
var inst_16038 = (state_16045[(2)]);
var state_16045__$1 = (function (){var statearr_16157 = state_16045;
(statearr_16157[(26)] = inst_16038);

return statearr_16157;
})();
var statearr_16158_18672 = state_16045__$1;
(statearr_16158_18672[(2)] = null);

(statearr_16158_18672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (6))){
var inst_15971 = (state_16045[(27)]);
var inst_15970 = cljs.core.deref(cs);
var inst_15971__$1 = cljs.core.keys(inst_15970);
var inst_15972 = cljs.core.count(inst_15971__$1);
var inst_15973 = cljs.core.reset_BANG_(dctr,inst_15972);
var inst_15978 = cljs.core.seq(inst_15971__$1);
var inst_15979 = inst_15978;
var inst_15980 = null;
var inst_15981 = (0);
var inst_15982 = (0);
var state_16045__$1 = (function (){var statearr_16166 = state_16045;
(statearr_16166[(27)] = inst_15971__$1);

(statearr_16166[(28)] = inst_15973);

(statearr_16166[(19)] = inst_15979);

(statearr_16166[(9)] = inst_15980);

(statearr_16166[(20)] = inst_15981);

(statearr_16166[(10)] = inst_15982);

return statearr_16166;
})();
var statearr_16168_18674 = state_16045__$1;
(statearr_16168_18674[(2)] = null);

(statearr_16168_18674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (28))){
var inst_15979 = (state_16045[(19)]);
var inst_15997 = (state_16045[(23)]);
var inst_15997__$1 = cljs.core.seq(inst_15979);
var state_16045__$1 = (function (){var statearr_16172 = state_16045;
(statearr_16172[(23)] = inst_15997__$1);

return statearr_16172;
})();
if(inst_15997__$1){
var statearr_16173_18675 = state_16045__$1;
(statearr_16173_18675[(1)] = (33));

} else {
var statearr_16174_18676 = state_16045__$1;
(statearr_16174_18676[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (25))){
var inst_15982 = (state_16045[(10)]);
var inst_15981 = (state_16045[(20)]);
var inst_15984 = (inst_15982 < inst_15981);
var inst_15985 = inst_15984;
var state_16045__$1 = state_16045;
if(cljs.core.truth_(inst_15985)){
var statearr_16177_18680 = state_16045__$1;
(statearr_16177_18680[(1)] = (27));

} else {
var statearr_16179_18681 = state_16045__$1;
(statearr_16179_18681[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (34))){
var state_16045__$1 = state_16045;
var statearr_16182_18682 = state_16045__$1;
(statearr_16182_18682[(2)] = null);

(statearr_16182_18682[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (17))){
var state_16045__$1 = state_16045;
var statearr_16184_18686 = state_16045__$1;
(statearr_16184_18686[(2)] = null);

(statearr_16184_18686[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (3))){
var inst_16043 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16045__$1,inst_16043);
} else {
if((state_val_16046 === (12))){
var inst_15966 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16192_18688 = state_16045__$1;
(statearr_16192_18688[(2)] = inst_15966);

(statearr_16192_18688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (2))){
var state_16045__$1 = state_16045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16045__$1,(4),ch);
} else {
if((state_val_16046 === (23))){
var state_16045__$1 = state_16045;
var statearr_16195_18693 = state_16045__$1;
(statearr_16195_18693[(2)] = null);

(statearr_16195_18693[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (35))){
var inst_16027 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16199_18698 = state_16045__$1;
(statearr_16199_18698[(2)] = inst_16027);

(statearr_16199_18698[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (19))){
var inst_15938 = (state_16045[(7)]);
var inst_15942 = cljs.core.chunk_first(inst_15938);
var inst_15943 = cljs.core.chunk_rest(inst_15938);
var inst_15944 = cljs.core.count(inst_15942);
var inst_15911 = inst_15943;
var inst_15912 = inst_15942;
var inst_15913 = inst_15944;
var inst_15914 = (0);
var state_16045__$1 = (function (){var statearr_16206 = state_16045;
(statearr_16206[(14)] = inst_15911);

(statearr_16206[(15)] = inst_15912);

(statearr_16206[(16)] = inst_15913);

(statearr_16206[(17)] = inst_15914);

return statearr_16206;
})();
var statearr_16210_18703 = state_16045__$1;
(statearr_16210_18703[(2)] = null);

(statearr_16210_18703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (11))){
var inst_15911 = (state_16045[(14)]);
var inst_15938 = (state_16045[(7)]);
var inst_15938__$1 = cljs.core.seq(inst_15911);
var state_16045__$1 = (function (){var statearr_16213 = state_16045;
(statearr_16213[(7)] = inst_15938__$1);

return statearr_16213;
})();
if(inst_15938__$1){
var statearr_16216_18704 = state_16045__$1;
(statearr_16216_18704[(1)] = (16));

} else {
var statearr_16219_18705 = state_16045__$1;
(statearr_16219_18705[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (9))){
var inst_15968 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16223_18706 = state_16045__$1;
(statearr_16223_18706[(2)] = inst_15968);

(statearr_16223_18706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (5))){
var inst_15908 = cljs.core.deref(cs);
var inst_15910 = cljs.core.seq(inst_15908);
var inst_15911 = inst_15910;
var inst_15912 = null;
var inst_15913 = (0);
var inst_15914 = (0);
var state_16045__$1 = (function (){var statearr_16225 = state_16045;
(statearr_16225[(14)] = inst_15911);

(statearr_16225[(15)] = inst_15912);

(statearr_16225[(16)] = inst_15913);

(statearr_16225[(17)] = inst_15914);

return statearr_16225;
})();
var statearr_16227_18707 = state_16045__$1;
(statearr_16227_18707[(2)] = null);

(statearr_16227_18707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (14))){
var state_16045__$1 = state_16045;
var statearr_16234_18708 = state_16045__$1;
(statearr_16234_18708[(2)] = null);

(statearr_16234_18708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (45))){
var inst_16035 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16238_18709 = state_16045__$1;
(statearr_16238_18709[(2)] = inst_16035);

(statearr_16238_18709[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (26))){
var inst_15971 = (state_16045[(27)]);
var inst_16031 = (state_16045[(2)]);
var inst_16032 = cljs.core.seq(inst_15971);
var state_16045__$1 = (function (){var statearr_16243 = state_16045;
(statearr_16243[(29)] = inst_16031);

return statearr_16243;
})();
if(inst_16032){
var statearr_16245_18715 = state_16045__$1;
(statearr_16245_18715[(1)] = (42));

} else {
var statearr_16246_18716 = state_16045__$1;
(statearr_16246_18716[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (16))){
var inst_15938 = (state_16045[(7)]);
var inst_15940 = cljs.core.chunked_seq_QMARK_(inst_15938);
var state_16045__$1 = state_16045;
if(inst_15940){
var statearr_16249_18718 = state_16045__$1;
(statearr_16249_18718[(1)] = (19));

} else {
var statearr_16250_18725 = state_16045__$1;
(statearr_16250_18725[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (38))){
var inst_16024 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16256_18726 = state_16045__$1;
(statearr_16256_18726[(2)] = inst_16024);

(statearr_16256_18726[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (30))){
var state_16045__$1 = state_16045;
var statearr_16261_18728 = state_16045__$1;
(statearr_16261_18728[(2)] = null);

(statearr_16261_18728[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (10))){
var inst_15912 = (state_16045[(15)]);
var inst_15914 = (state_16045[(17)]);
var inst_15926 = cljs.core._nth(inst_15912,inst_15914);
var inst_15927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15926,(0),null);
var inst_15928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15926,(1),null);
var state_16045__$1 = (function (){var statearr_16265 = state_16045;
(statearr_16265[(24)] = inst_15927);

return statearr_16265;
})();
if(cljs.core.truth_(inst_15928)){
var statearr_16266_18729 = state_16045__$1;
(statearr_16266_18729[(1)] = (13));

} else {
var statearr_16267_18730 = state_16045__$1;
(statearr_16267_18730[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (18))){
var inst_15964 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16269_18731 = state_16045__$1;
(statearr_16269_18731[(2)] = inst_15964);

(statearr_16269_18731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (42))){
var state_16045__$1 = state_16045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16045__$1,(45),dchan);
} else {
if((state_val_16046 === (37))){
var inst_15997 = (state_16045[(23)]);
var inst_16009 = (state_16045[(22)]);
var inst_15901 = (state_16045[(12)]);
var inst_16009__$1 = cljs.core.first(inst_15997);
var inst_16014 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16009__$1,inst_15901,done);
var state_16045__$1 = (function (){var statearr_16276 = state_16045;
(statearr_16276[(22)] = inst_16009__$1);

return statearr_16276;
})();
if(cljs.core.truth_(inst_16014)){
var statearr_16277_18733 = state_16045__$1;
(statearr_16277_18733[(1)] = (39));

} else {
var statearr_16280_18734 = state_16045__$1;
(statearr_16280_18734[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (8))){
var inst_15914 = (state_16045[(17)]);
var inst_15913 = (state_16045[(16)]);
var inst_15917 = (inst_15914 < inst_15913);
var inst_15918 = inst_15917;
var state_16045__$1 = state_16045;
if(cljs.core.truth_(inst_15918)){
var statearr_16289_18735 = state_16045__$1;
(statearr_16289_18735[(1)] = (10));

} else {
var statearr_16291_18736 = state_16045__$1;
(statearr_16291_18736[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14076__auto__ = null;
var cljs$core$async$mult_$_state_machine__14076__auto____0 = (function (){
var statearr_16300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16300[(0)] = cljs$core$async$mult_$_state_machine__14076__auto__);

(statearr_16300[(1)] = (1));

return statearr_16300;
});
var cljs$core$async$mult_$_state_machine__14076__auto____1 = (function (state_16045){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_16045);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e16304){var ex__14079__auto__ = e16304;
var statearr_16307_18744 = state_16045;
(statearr_16307_18744[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_16045[(4)]))){
var statearr_16311_18745 = state_16045;
(statearr_16311_18745[(1)] = cljs.core.first((state_16045[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18749 = state_16045;
state_16045 = G__18749;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14076__auto__ = function(state_16045){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14076__auto____1.call(this,state_16045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14076__auto____0;
cljs$core$async$mult_$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14076__auto____1;
return cljs$core$async$mult_$_state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_16317 = f__14826__auto__();
(statearr_16317[(6)] = c__14825__auto___18598);

return statearr_16317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16327 = arguments.length;
switch (G__16327) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18761 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18761(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18770 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18770(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18776 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18776(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18778 = (function (m,state_map){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5499__auto__.call(null,m,state_map));
} else {
var m__5497__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5497__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18778(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18779 = (function (m,mode){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5499__auto__.call(null,m,mode));
} else {
var m__5497__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5497__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18779(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18783 = arguments.length;
var i__5877__auto___18784 = (0);
while(true){
if((i__5877__auto___18784 < len__5876__auto___18783)){
args__5882__auto__.push((arguments[i__5877__auto___18784]));

var G__18786 = (i__5877__auto___18784 + (1));
i__5877__auto___18784 = G__18786;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16410){
var map__16411 = p__16410;
var map__16411__$1 = cljs.core.__destructure_map(map__16411);
var opts = map__16411__$1;
var statearr_16414_18789 = state;
(statearr_16414_18789[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16421_18790 = state;
(statearr_16421_18790[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_16425_18791 = state;
(statearr_16425_18791[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16395){
var G__16396 = cljs.core.first(seq16395);
var seq16395__$1 = cljs.core.next(seq16395);
var G__16397 = cljs.core.first(seq16395__$1);
var seq16395__$2 = cljs.core.next(seq16395__$1);
var G__16398 = cljs.core.first(seq16395__$2);
var seq16395__$3 = cljs.core.next(seq16395__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16396,G__16397,G__16398,seq16395__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16446 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16447){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16447 = meta16447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16448,meta16447__$1){
var self__ = this;
var _16448__$1 = this;
return (new cljs.core.async.t_cljs$core$async16446(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16447__$1));
}));

(cljs.core.async.t_cljs$core$async16446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16448){
var self__ = this;
var _16448__$1 = this;
return self__.meta16447;
}));

(cljs.core.async.t_cljs$core$async16446.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16446.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16446.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16446.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16446.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16446.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16446.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16446.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16447","meta16447",-1916559268,null)], null);
}));

(cljs.core.async.t_cljs$core$async16446.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16446");

(cljs.core.async.t_cljs$core$async16446.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16446");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16446.
 */
cljs.core.async.__GT_t_cljs$core$async16446 = (function cljs$core$async$__GT_t_cljs$core$async16446(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16447){
return (new cljs.core.async.t_cljs$core$async16446(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16447));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16446(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14825__auto___18826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_16572){
var state_val_16574 = (state_16572[(1)]);
if((state_val_16574 === (7))){
var inst_16526 = (state_16572[(2)]);
var state_16572__$1 = state_16572;
if(cljs.core.truth_(inst_16526)){
var statearr_16576_18827 = state_16572__$1;
(statearr_16576_18827[(1)] = (8));

} else {
var statearr_16578_18829 = state_16572__$1;
(statearr_16578_18829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (20))){
var inst_16516 = (state_16572[(7)]);
var state_16572__$1 = state_16572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16572__$1,(23),out,inst_16516);
} else {
if((state_val_16574 === (1))){
var inst_16493 = calc_state();
var inst_16495 = cljs.core.__destructure_map(inst_16493);
var inst_16496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16495,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16495,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16495,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16499 = inst_16493;
var state_16572__$1 = (function (){var statearr_16588 = state_16572;
(statearr_16588[(8)] = inst_16496);

(statearr_16588[(9)] = inst_16497);

(statearr_16588[(10)] = inst_16498);

(statearr_16588[(11)] = inst_16499);

return statearr_16588;
})();
var statearr_16592_18835 = state_16572__$1;
(statearr_16592_18835[(2)] = null);

(statearr_16592_18835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (24))){
var inst_16502 = (state_16572[(12)]);
var inst_16499 = inst_16502;
var state_16572__$1 = (function (){var statearr_16593 = state_16572;
(statearr_16593[(11)] = inst_16499);

return statearr_16593;
})();
var statearr_16594_18836 = state_16572__$1;
(statearr_16594_18836[(2)] = null);

(statearr_16594_18836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (4))){
var inst_16516 = (state_16572[(7)]);
var inst_16521 = (state_16572[(13)]);
var inst_16515 = (state_16572[(2)]);
var inst_16516__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16515,(0),null);
var inst_16517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16515,(1),null);
var inst_16521__$1 = (inst_16516__$1 == null);
var state_16572__$1 = (function (){var statearr_16601 = state_16572;
(statearr_16601[(7)] = inst_16516__$1);

(statearr_16601[(14)] = inst_16517);

(statearr_16601[(13)] = inst_16521__$1);

return statearr_16601;
})();
if(cljs.core.truth_(inst_16521__$1)){
var statearr_16602_18838 = state_16572__$1;
(statearr_16602_18838[(1)] = (5));

} else {
var statearr_16606_18840 = state_16572__$1;
(statearr_16606_18840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (15))){
var inst_16503 = (state_16572[(15)]);
var inst_16544 = (state_16572[(16)]);
var inst_16544__$1 = cljs.core.empty_QMARK_(inst_16503);
var state_16572__$1 = (function (){var statearr_16612 = state_16572;
(statearr_16612[(16)] = inst_16544__$1);

return statearr_16612;
})();
if(inst_16544__$1){
var statearr_16613_18841 = state_16572__$1;
(statearr_16613_18841[(1)] = (17));

} else {
var statearr_16615_18843 = state_16572__$1;
(statearr_16615_18843[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (21))){
var inst_16502 = (state_16572[(12)]);
var inst_16499 = inst_16502;
var state_16572__$1 = (function (){var statearr_16619 = state_16572;
(statearr_16619[(11)] = inst_16499);

return statearr_16619;
})();
var statearr_16620_18844 = state_16572__$1;
(statearr_16620_18844[(2)] = null);

(statearr_16620_18844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (13))){
var inst_16536 = (state_16572[(2)]);
var inst_16537 = calc_state();
var inst_16499 = inst_16537;
var state_16572__$1 = (function (){var statearr_16623 = state_16572;
(statearr_16623[(17)] = inst_16536);

(statearr_16623[(11)] = inst_16499);

return statearr_16623;
})();
var statearr_16624_18845 = state_16572__$1;
(statearr_16624_18845[(2)] = null);

(statearr_16624_18845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (22))){
var inst_16564 = (state_16572[(2)]);
var state_16572__$1 = state_16572;
var statearr_16650_18846 = state_16572__$1;
(statearr_16650_18846[(2)] = inst_16564);

(statearr_16650_18846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (6))){
var inst_16517 = (state_16572[(14)]);
var inst_16524 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16517,change);
var state_16572__$1 = state_16572;
var statearr_16651_18849 = state_16572__$1;
(statearr_16651_18849[(2)] = inst_16524);

(statearr_16651_18849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (25))){
var state_16572__$1 = state_16572;
var statearr_16652_18851 = state_16572__$1;
(statearr_16652_18851[(2)] = null);

(statearr_16652_18851[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (17))){
var inst_16507 = (state_16572[(18)]);
var inst_16517 = (state_16572[(14)]);
var inst_16546 = (inst_16507.cljs$core$IFn$_invoke$arity$1 ? inst_16507.cljs$core$IFn$_invoke$arity$1(inst_16517) : inst_16507.call(null,inst_16517));
var inst_16547 = cljs.core.not(inst_16546);
var state_16572__$1 = state_16572;
var statearr_16653_18852 = state_16572__$1;
(statearr_16653_18852[(2)] = inst_16547);

(statearr_16653_18852[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (3))){
var inst_16568 = (state_16572[(2)]);
var state_16572__$1 = state_16572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16572__$1,inst_16568);
} else {
if((state_val_16574 === (12))){
var state_16572__$1 = state_16572;
var statearr_16662_18858 = state_16572__$1;
(statearr_16662_18858[(2)] = null);

(statearr_16662_18858[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (2))){
var inst_16499 = (state_16572[(11)]);
var inst_16502 = (state_16572[(12)]);
var inst_16502__$1 = cljs.core.__destructure_map(inst_16499);
var inst_16503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16502__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16502__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16502__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16572__$1 = (function (){var statearr_16666 = state_16572;
(statearr_16666[(12)] = inst_16502__$1);

(statearr_16666[(15)] = inst_16503);

(statearr_16666[(18)] = inst_16507);

return statearr_16666;
})();
return cljs.core.async.ioc_alts_BANG_(state_16572__$1,(4),inst_16508);
} else {
if((state_val_16574 === (23))){
var inst_16555 = (state_16572[(2)]);
var state_16572__$1 = state_16572;
if(cljs.core.truth_(inst_16555)){
var statearr_16674_18860 = state_16572__$1;
(statearr_16674_18860[(1)] = (24));

} else {
var statearr_16675_18862 = state_16572__$1;
(statearr_16675_18862[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (19))){
var inst_16550 = (state_16572[(2)]);
var state_16572__$1 = state_16572;
var statearr_16680_18867 = state_16572__$1;
(statearr_16680_18867[(2)] = inst_16550);

(statearr_16680_18867[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (11))){
var inst_16517 = (state_16572[(14)]);
var inst_16533 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16517);
var state_16572__$1 = state_16572;
var statearr_16685_18869 = state_16572__$1;
(statearr_16685_18869[(2)] = inst_16533);

(statearr_16685_18869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (9))){
var inst_16503 = (state_16572[(15)]);
var inst_16517 = (state_16572[(14)]);
var inst_16541 = (state_16572[(19)]);
var inst_16541__$1 = (inst_16503.cljs$core$IFn$_invoke$arity$1 ? inst_16503.cljs$core$IFn$_invoke$arity$1(inst_16517) : inst_16503.call(null,inst_16517));
var state_16572__$1 = (function (){var statearr_16691 = state_16572;
(statearr_16691[(19)] = inst_16541__$1);

return statearr_16691;
})();
if(cljs.core.truth_(inst_16541__$1)){
var statearr_16692_18870 = state_16572__$1;
(statearr_16692_18870[(1)] = (14));

} else {
var statearr_16694_18871 = state_16572__$1;
(statearr_16694_18871[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (5))){
var inst_16521 = (state_16572[(13)]);
var state_16572__$1 = state_16572;
var statearr_16697_18872 = state_16572__$1;
(statearr_16697_18872[(2)] = inst_16521);

(statearr_16697_18872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (14))){
var inst_16541 = (state_16572[(19)]);
var state_16572__$1 = state_16572;
var statearr_16698_18873 = state_16572__$1;
(statearr_16698_18873[(2)] = inst_16541);

(statearr_16698_18873[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (26))){
var inst_16560 = (state_16572[(2)]);
var state_16572__$1 = state_16572;
var statearr_16701_18875 = state_16572__$1;
(statearr_16701_18875[(2)] = inst_16560);

(statearr_16701_18875[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (16))){
var inst_16552 = (state_16572[(2)]);
var state_16572__$1 = state_16572;
if(cljs.core.truth_(inst_16552)){
var statearr_16704_18877 = state_16572__$1;
(statearr_16704_18877[(1)] = (20));

} else {
var statearr_16706_18878 = state_16572__$1;
(statearr_16706_18878[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (10))){
var inst_16566 = (state_16572[(2)]);
var state_16572__$1 = state_16572;
var statearr_16708_18882 = state_16572__$1;
(statearr_16708_18882[(2)] = inst_16566);

(statearr_16708_18882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (18))){
var inst_16544 = (state_16572[(16)]);
var state_16572__$1 = state_16572;
var statearr_16709_18883 = state_16572__$1;
(statearr_16709_18883[(2)] = inst_16544);

(statearr_16709_18883[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16574 === (8))){
var inst_16516 = (state_16572[(7)]);
var inst_16530 = (inst_16516 == null);
var state_16572__$1 = state_16572;
if(cljs.core.truth_(inst_16530)){
var statearr_16715_18884 = state_16572__$1;
(statearr_16715_18884[(1)] = (11));

} else {
var statearr_16719_18885 = state_16572__$1;
(statearr_16719_18885[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14076__auto__ = null;
var cljs$core$async$mix_$_state_machine__14076__auto____0 = (function (){
var statearr_16723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16723[(0)] = cljs$core$async$mix_$_state_machine__14076__auto__);

(statearr_16723[(1)] = (1));

return statearr_16723;
});
var cljs$core$async$mix_$_state_machine__14076__auto____1 = (function (state_16572){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_16572);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e16727){var ex__14079__auto__ = e16727;
var statearr_16728_18888 = state_16572;
(statearr_16728_18888[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_16572[(4)]))){
var statearr_16732_18890 = state_16572;
(statearr_16732_18890[(1)] = cljs.core.first((state_16572[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18891 = state_16572;
state_16572 = G__18891;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14076__auto__ = function(state_16572){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14076__auto____1.call(this,state_16572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14076__auto____0;
cljs$core$async$mix_$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14076__auto____1;
return cljs$core$async$mix_$_state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_16735 = f__14826__auto__();
(statearr_16735[(6)] = c__14825__auto___18826);

return statearr_16735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18897 = (function (p,v,ch,close_QMARK_){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5499__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5497__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18897(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18899 = (function (p,v,ch){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5499__auto__.call(null,p,v,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5497__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18899(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18909 = (function() {
var G__18910 = null;
var G__18910__1 = (function (p){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5499__auto__.call(null,p));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5497__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18910__2 = (function (p,v){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5499__auto__.call(null,p,v));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5497__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18910 = function(p,v){
switch(arguments.length){
case 1:
return G__18910__1.call(this,p);
case 2:
return G__18910__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18910.cljs$core$IFn$_invoke$arity$1 = G__18910__1;
G__18910.cljs$core$IFn$_invoke$arity$2 = G__18910__2;
return G__18910;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16772 = arguments.length;
switch (G__16772) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18909(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18909(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16782 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16783){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16783 = meta16783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16784,meta16783__$1){
var self__ = this;
var _16784__$1 = this;
return (new cljs.core.async.t_cljs$core$async16782(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16783__$1));
}));

(cljs.core.async.t_cljs$core$async16782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16784){
var self__ = this;
var _16784__$1 = this;
return self__.meta16783;
}));

(cljs.core.async.t_cljs$core$async16782.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16782.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16782.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16782.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16782.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16782.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16782.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16783","meta16783",953472529,null)], null);
}));

(cljs.core.async.t_cljs$core$async16782.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16782");

(cljs.core.async.t_cljs$core$async16782.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16782");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16782.
 */
cljs.core.async.__GT_t_cljs$core$async16782 = (function cljs$core$async$__GT_t_cljs$core$async16782(ch,topic_fn,buf_fn,mults,ensure_mult,meta16783){
return (new cljs.core.async.t_cljs$core$async16782(ch,topic_fn,buf_fn,mults,ensure_mult,meta16783));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16781 = arguments.length;
switch (G__16781) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16775_SHARP_){
if(cljs.core.truth_((p1__16775_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16775_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16775_SHARP_.call(null,topic)))){
return p1__16775_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16775_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16782(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14825__auto___18946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_16880){
var state_val_16881 = (state_16880[(1)]);
if((state_val_16881 === (7))){
var inst_16876 = (state_16880[(2)]);
var state_16880__$1 = state_16880;
var statearr_16884_18949 = state_16880__$1;
(statearr_16884_18949[(2)] = inst_16876);

(statearr_16884_18949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (20))){
var state_16880__$1 = state_16880;
var statearr_16885_18951 = state_16880__$1;
(statearr_16885_18951[(2)] = null);

(statearr_16885_18951[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (1))){
var state_16880__$1 = state_16880;
var statearr_16888_18952 = state_16880__$1;
(statearr_16888_18952[(2)] = null);

(statearr_16888_18952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (24))){
var inst_16856 = (state_16880[(7)]);
var inst_16868 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16856);
var state_16880__$1 = state_16880;
var statearr_16893_18953 = state_16880__$1;
(statearr_16893_18953[(2)] = inst_16868);

(statearr_16893_18953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (4))){
var inst_16806 = (state_16880[(8)]);
var inst_16806__$1 = (state_16880[(2)]);
var inst_16807 = (inst_16806__$1 == null);
var state_16880__$1 = (function (){var statearr_16898 = state_16880;
(statearr_16898[(8)] = inst_16806__$1);

return statearr_16898;
})();
if(cljs.core.truth_(inst_16807)){
var statearr_16899_18954 = state_16880__$1;
(statearr_16899_18954[(1)] = (5));

} else {
var statearr_16900_18955 = state_16880__$1;
(statearr_16900_18955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (15))){
var inst_16850 = (state_16880[(2)]);
var state_16880__$1 = state_16880;
var statearr_16903_18956 = state_16880__$1;
(statearr_16903_18956[(2)] = inst_16850);

(statearr_16903_18956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (21))){
var inst_16873 = (state_16880[(2)]);
var state_16880__$1 = (function (){var statearr_16907 = state_16880;
(statearr_16907[(9)] = inst_16873);

return statearr_16907;
})();
var statearr_16910_18957 = state_16880__$1;
(statearr_16910_18957[(2)] = null);

(statearr_16910_18957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (13))){
var inst_16832 = (state_16880[(10)]);
var inst_16834 = cljs.core.chunked_seq_QMARK_(inst_16832);
var state_16880__$1 = state_16880;
if(inst_16834){
var statearr_16912_18958 = state_16880__$1;
(statearr_16912_18958[(1)] = (16));

} else {
var statearr_16913_18959 = state_16880__$1;
(statearr_16913_18959[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (22))){
var inst_16865 = (state_16880[(2)]);
var state_16880__$1 = state_16880;
if(cljs.core.truth_(inst_16865)){
var statearr_16916_18964 = state_16880__$1;
(statearr_16916_18964[(1)] = (23));

} else {
var statearr_16917_18965 = state_16880__$1;
(statearr_16917_18965[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (6))){
var inst_16806 = (state_16880[(8)]);
var inst_16856 = (state_16880[(7)]);
var inst_16861 = (state_16880[(11)]);
var inst_16856__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16806) : topic_fn.call(null,inst_16806));
var inst_16857 = cljs.core.deref(mults);
var inst_16861__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16857,inst_16856__$1);
var state_16880__$1 = (function (){var statearr_16921 = state_16880;
(statearr_16921[(7)] = inst_16856__$1);

(statearr_16921[(11)] = inst_16861__$1);

return statearr_16921;
})();
if(cljs.core.truth_(inst_16861__$1)){
var statearr_16926_18966 = state_16880__$1;
(statearr_16926_18966[(1)] = (19));

} else {
var statearr_16927_18967 = state_16880__$1;
(statearr_16927_18967[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (25))){
var inst_16870 = (state_16880[(2)]);
var state_16880__$1 = state_16880;
var statearr_16930_18968 = state_16880__$1;
(statearr_16930_18968[(2)] = inst_16870);

(statearr_16930_18968[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (17))){
var inst_16832 = (state_16880[(10)]);
var inst_16841 = cljs.core.first(inst_16832);
var inst_16842 = cljs.core.async.muxch_STAR_(inst_16841);
var inst_16843 = cljs.core.async.close_BANG_(inst_16842);
var inst_16844 = cljs.core.next(inst_16832);
var inst_16818 = inst_16844;
var inst_16819 = null;
var inst_16820 = (0);
var inst_16821 = (0);
var state_16880__$1 = (function (){var statearr_16931 = state_16880;
(statearr_16931[(12)] = inst_16843);

(statearr_16931[(13)] = inst_16818);

(statearr_16931[(14)] = inst_16819);

(statearr_16931[(15)] = inst_16820);

(statearr_16931[(16)] = inst_16821);

return statearr_16931;
})();
var statearr_16932_18973 = state_16880__$1;
(statearr_16932_18973[(2)] = null);

(statearr_16932_18973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (3))){
var inst_16878 = (state_16880[(2)]);
var state_16880__$1 = state_16880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16880__$1,inst_16878);
} else {
if((state_val_16881 === (12))){
var inst_16852 = (state_16880[(2)]);
var state_16880__$1 = state_16880;
var statearr_16938_18979 = state_16880__$1;
(statearr_16938_18979[(2)] = inst_16852);

(statearr_16938_18979[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (2))){
var state_16880__$1 = state_16880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16880__$1,(4),ch);
} else {
if((state_val_16881 === (23))){
var state_16880__$1 = state_16880;
var statearr_16942_18981 = state_16880__$1;
(statearr_16942_18981[(2)] = null);

(statearr_16942_18981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (19))){
var inst_16861 = (state_16880[(11)]);
var inst_16806 = (state_16880[(8)]);
var inst_16863 = cljs.core.async.muxch_STAR_(inst_16861);
var state_16880__$1 = state_16880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16880__$1,(22),inst_16863,inst_16806);
} else {
if((state_val_16881 === (11))){
var inst_16818 = (state_16880[(13)]);
var inst_16832 = (state_16880[(10)]);
var inst_16832__$1 = cljs.core.seq(inst_16818);
var state_16880__$1 = (function (){var statearr_16944 = state_16880;
(statearr_16944[(10)] = inst_16832__$1);

return statearr_16944;
})();
if(inst_16832__$1){
var statearr_16945_18982 = state_16880__$1;
(statearr_16945_18982[(1)] = (13));

} else {
var statearr_16954_18983 = state_16880__$1;
(statearr_16954_18983[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (9))){
var inst_16854 = (state_16880[(2)]);
var state_16880__$1 = state_16880;
var statearr_16961_18985 = state_16880__$1;
(statearr_16961_18985[(2)] = inst_16854);

(statearr_16961_18985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (5))){
var inst_16814 = cljs.core.deref(mults);
var inst_16815 = cljs.core.vals(inst_16814);
var inst_16816 = cljs.core.seq(inst_16815);
var inst_16818 = inst_16816;
var inst_16819 = null;
var inst_16820 = (0);
var inst_16821 = (0);
var state_16880__$1 = (function (){var statearr_16968 = state_16880;
(statearr_16968[(13)] = inst_16818);

(statearr_16968[(14)] = inst_16819);

(statearr_16968[(15)] = inst_16820);

(statearr_16968[(16)] = inst_16821);

return statearr_16968;
})();
var statearr_16969_18988 = state_16880__$1;
(statearr_16969_18988[(2)] = null);

(statearr_16969_18988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (14))){
var state_16880__$1 = state_16880;
var statearr_16973_18989 = state_16880__$1;
(statearr_16973_18989[(2)] = null);

(statearr_16973_18989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (16))){
var inst_16832 = (state_16880[(10)]);
var inst_16836 = cljs.core.chunk_first(inst_16832);
var inst_16837 = cljs.core.chunk_rest(inst_16832);
var inst_16838 = cljs.core.count(inst_16836);
var inst_16818 = inst_16837;
var inst_16819 = inst_16836;
var inst_16820 = inst_16838;
var inst_16821 = (0);
var state_16880__$1 = (function (){var statearr_16974 = state_16880;
(statearr_16974[(13)] = inst_16818);

(statearr_16974[(14)] = inst_16819);

(statearr_16974[(15)] = inst_16820);

(statearr_16974[(16)] = inst_16821);

return statearr_16974;
})();
var statearr_16976_18990 = state_16880__$1;
(statearr_16976_18990[(2)] = null);

(statearr_16976_18990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (10))){
var inst_16819 = (state_16880[(14)]);
var inst_16821 = (state_16880[(16)]);
var inst_16818 = (state_16880[(13)]);
var inst_16820 = (state_16880[(15)]);
var inst_16826 = cljs.core._nth(inst_16819,inst_16821);
var inst_16827 = cljs.core.async.muxch_STAR_(inst_16826);
var inst_16828 = cljs.core.async.close_BANG_(inst_16827);
var inst_16829 = (inst_16821 + (1));
var tmp16970 = inst_16818;
var tmp16971 = inst_16819;
var tmp16972 = inst_16820;
var inst_16818__$1 = tmp16970;
var inst_16819__$1 = tmp16971;
var inst_16820__$1 = tmp16972;
var inst_16821__$1 = inst_16829;
var state_16880__$1 = (function (){var statearr_16990 = state_16880;
(statearr_16990[(17)] = inst_16828);

(statearr_16990[(13)] = inst_16818__$1);

(statearr_16990[(14)] = inst_16819__$1);

(statearr_16990[(15)] = inst_16820__$1);

(statearr_16990[(16)] = inst_16821__$1);

return statearr_16990;
})();
var statearr_16991_18994 = state_16880__$1;
(statearr_16991_18994[(2)] = null);

(statearr_16991_18994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (18))){
var inst_16847 = (state_16880[(2)]);
var state_16880__$1 = state_16880;
var statearr_16992_18996 = state_16880__$1;
(statearr_16992_18996[(2)] = inst_16847);

(statearr_16992_18996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16881 === (8))){
var inst_16821 = (state_16880[(16)]);
var inst_16820 = (state_16880[(15)]);
var inst_16823 = (inst_16821 < inst_16820);
var inst_16824 = inst_16823;
var state_16880__$1 = state_16880;
if(cljs.core.truth_(inst_16824)){
var statearr_16996_19003 = state_16880__$1;
(statearr_16996_19003[(1)] = (10));

} else {
var statearr_16997_19004 = state_16880__$1;
(statearr_16997_19004[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14076__auto__ = null;
var cljs$core$async$state_machine__14076__auto____0 = (function (){
var statearr_16998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16998[(0)] = cljs$core$async$state_machine__14076__auto__);

(statearr_16998[(1)] = (1));

return statearr_16998;
});
var cljs$core$async$state_machine__14076__auto____1 = (function (state_16880){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_16880);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e16999){var ex__14079__auto__ = e16999;
var statearr_17000_19009 = state_16880;
(statearr_17000_19009[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_16880[(4)]))){
var statearr_17001_19010 = state_16880;
(statearr_17001_19010[(1)] = cljs.core.first((state_16880[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19011 = state_16880;
state_16880 = G__19011;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$state_machine__14076__auto__ = function(state_16880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14076__auto____1.call(this,state_16880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14076__auto____0;
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14076__auto____1;
return cljs$core$async$state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_17002 = f__14826__auto__();
(statearr_17002[(6)] = c__14825__auto___18946);

return statearr_17002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17010 = arguments.length;
switch (G__17010) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17023 = arguments.length;
switch (G__17023) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17038 = arguments.length;
switch (G__17038) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14825__auto___19049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_17090){
var state_val_17091 = (state_17090[(1)]);
if((state_val_17091 === (7))){
var state_17090__$1 = state_17090;
var statearr_17097_19051 = state_17090__$1;
(statearr_17097_19051[(2)] = null);

(statearr_17097_19051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (1))){
var state_17090__$1 = state_17090;
var statearr_17098_19052 = state_17090__$1;
(statearr_17098_19052[(2)] = null);

(statearr_17098_19052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (4))){
var inst_17047 = (state_17090[(7)]);
var inst_17046 = (state_17090[(8)]);
var inst_17049 = (inst_17047 < inst_17046);
var state_17090__$1 = state_17090;
if(cljs.core.truth_(inst_17049)){
var statearr_17099_19053 = state_17090__$1;
(statearr_17099_19053[(1)] = (6));

} else {
var statearr_17101_19054 = state_17090__$1;
(statearr_17101_19054[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (15))){
var inst_17075 = (state_17090[(9)]);
var inst_17080 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17075);
var state_17090__$1 = state_17090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17090__$1,(17),out,inst_17080);
} else {
if((state_val_17091 === (13))){
var inst_17075 = (state_17090[(9)]);
var inst_17075__$1 = (state_17090[(2)]);
var inst_17076 = cljs.core.some(cljs.core.nil_QMARK_,inst_17075__$1);
var state_17090__$1 = (function (){var statearr_17102 = state_17090;
(statearr_17102[(9)] = inst_17075__$1);

return statearr_17102;
})();
if(cljs.core.truth_(inst_17076)){
var statearr_17103_19068 = state_17090__$1;
(statearr_17103_19068[(1)] = (14));

} else {
var statearr_17104_19069 = state_17090__$1;
(statearr_17104_19069[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (6))){
var state_17090__$1 = state_17090;
var statearr_17106_19070 = state_17090__$1;
(statearr_17106_19070[(2)] = null);

(statearr_17106_19070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (17))){
var inst_17082 = (state_17090[(2)]);
var state_17090__$1 = (function (){var statearr_17116 = state_17090;
(statearr_17116[(10)] = inst_17082);

return statearr_17116;
})();
var statearr_17117_19075 = state_17090__$1;
(statearr_17117_19075[(2)] = null);

(statearr_17117_19075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (3))){
var inst_17087 = (state_17090[(2)]);
var state_17090__$1 = state_17090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17090__$1,inst_17087);
} else {
if((state_val_17091 === (12))){
var _ = (function (){var statearr_17119 = state_17090;
(statearr_17119[(4)] = cljs.core.rest((state_17090[(4)])));

return statearr_17119;
})();
var state_17090__$1 = state_17090;
var ex17115 = (state_17090__$1[(2)]);
var statearr_17120_19086 = state_17090__$1;
(statearr_17120_19086[(5)] = ex17115);


if((ex17115 instanceof Object)){
var statearr_17121_19087 = state_17090__$1;
(statearr_17121_19087[(1)] = (11));

(statearr_17121_19087[(5)] = null);

} else {
throw ex17115;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (2))){
var inst_17045 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17046 = cnt;
var inst_17047 = (0);
var state_17090__$1 = (function (){var statearr_17126 = state_17090;
(statearr_17126[(11)] = inst_17045);

(statearr_17126[(8)] = inst_17046);

(statearr_17126[(7)] = inst_17047);

return statearr_17126;
})();
var statearr_17127_19098 = state_17090__$1;
(statearr_17127_19098[(2)] = null);

(statearr_17127_19098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (11))){
var inst_17051 = (state_17090[(2)]);
var inst_17053 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17090__$1 = (function (){var statearr_17129 = state_17090;
(statearr_17129[(12)] = inst_17051);

return statearr_17129;
})();
var statearr_17131_19107 = state_17090__$1;
(statearr_17131_19107[(2)] = inst_17053);

(statearr_17131_19107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (9))){
var inst_17047 = (state_17090[(7)]);
var _ = (function (){var statearr_17133 = state_17090;
(statearr_17133[(4)] = cljs.core.cons((12),(state_17090[(4)])));

return statearr_17133;
})();
var inst_17061 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17047) : chs__$1.call(null,inst_17047));
var inst_17062 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17047) : done.call(null,inst_17047));
var inst_17063 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17061,inst_17062);
var ___$1 = (function (){var statearr_17134 = state_17090;
(statearr_17134[(4)] = cljs.core.rest((state_17090[(4)])));

return statearr_17134;
})();
var state_17090__$1 = state_17090;
var statearr_17137_19131 = state_17090__$1;
(statearr_17137_19131[(2)] = inst_17063);

(statearr_17137_19131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (5))){
var inst_17073 = (state_17090[(2)]);
var state_17090__$1 = (function (){var statearr_17138 = state_17090;
(statearr_17138[(13)] = inst_17073);

return statearr_17138;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17090__$1,(13),dchan);
} else {
if((state_val_17091 === (14))){
var inst_17078 = cljs.core.async.close_BANG_(out);
var state_17090__$1 = state_17090;
var statearr_17140_19133 = state_17090__$1;
(statearr_17140_19133[(2)] = inst_17078);

(statearr_17140_19133[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (16))){
var inst_17085 = (state_17090[(2)]);
var state_17090__$1 = state_17090;
var statearr_17142_19145 = state_17090__$1;
(statearr_17142_19145[(2)] = inst_17085);

(statearr_17142_19145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (10))){
var inst_17047 = (state_17090[(7)]);
var inst_17066 = (state_17090[(2)]);
var inst_17067 = (inst_17047 + (1));
var inst_17047__$1 = inst_17067;
var state_17090__$1 = (function (){var statearr_17146 = state_17090;
(statearr_17146[(14)] = inst_17066);

(statearr_17146[(7)] = inst_17047__$1);

return statearr_17146;
})();
var statearr_17147_19148 = state_17090__$1;
(statearr_17147_19148[(2)] = null);

(statearr_17147_19148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17091 === (8))){
var inst_17071 = (state_17090[(2)]);
var state_17090__$1 = state_17090;
var statearr_17148_19153 = state_17090__$1;
(statearr_17148_19153[(2)] = inst_17071);

(statearr_17148_19153[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14076__auto__ = null;
var cljs$core$async$state_machine__14076__auto____0 = (function (){
var statearr_17149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17149[(0)] = cljs$core$async$state_machine__14076__auto__);

(statearr_17149[(1)] = (1));

return statearr_17149;
});
var cljs$core$async$state_machine__14076__auto____1 = (function (state_17090){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_17090);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e17150){var ex__14079__auto__ = e17150;
var statearr_17151_19164 = state_17090;
(statearr_17151_19164[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_17090[(4)]))){
var statearr_17152_19166 = state_17090;
(statearr_17152_19166[(1)] = cljs.core.first((state_17090[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19170 = state_17090;
state_17090 = G__19170;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$state_machine__14076__auto__ = function(state_17090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14076__auto____1.call(this,state_17090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14076__auto____0;
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14076__auto____1;
return cljs$core$async$state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_17153 = f__14826__auto__();
(statearr_17153[(6)] = c__14825__auto___19049);

return statearr_17153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17156 = arguments.length;
switch (G__17156) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14825__auto___19181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_17197){
var state_val_17198 = (state_17197[(1)]);
if((state_val_17198 === (7))){
var inst_17171 = (state_17197[(7)]);
var inst_17172 = (state_17197[(8)]);
var inst_17171__$1 = (state_17197[(2)]);
var inst_17172__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17171__$1,(0),null);
var inst_17173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17171__$1,(1),null);
var inst_17174 = (inst_17172__$1 == null);
var state_17197__$1 = (function (){var statearr_17199 = state_17197;
(statearr_17199[(7)] = inst_17171__$1);

(statearr_17199[(8)] = inst_17172__$1);

(statearr_17199[(9)] = inst_17173);

return statearr_17199;
})();
if(cljs.core.truth_(inst_17174)){
var statearr_17200_19186 = state_17197__$1;
(statearr_17200_19186[(1)] = (8));

} else {
var statearr_17201_19187 = state_17197__$1;
(statearr_17201_19187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17198 === (1))){
var inst_17161 = cljs.core.vec(chs);
var inst_17162 = inst_17161;
var state_17197__$1 = (function (){var statearr_17202 = state_17197;
(statearr_17202[(10)] = inst_17162);

return statearr_17202;
})();
var statearr_17204_19193 = state_17197__$1;
(statearr_17204_19193[(2)] = null);

(statearr_17204_19193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17198 === (4))){
var inst_17162 = (state_17197[(10)]);
var state_17197__$1 = state_17197;
return cljs.core.async.ioc_alts_BANG_(state_17197__$1,(7),inst_17162);
} else {
if((state_val_17198 === (6))){
var inst_17189 = (state_17197[(2)]);
var state_17197__$1 = state_17197;
var statearr_17206_19197 = state_17197__$1;
(statearr_17206_19197[(2)] = inst_17189);

(statearr_17206_19197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17198 === (3))){
var inst_17191 = (state_17197[(2)]);
var state_17197__$1 = state_17197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17197__$1,inst_17191);
} else {
if((state_val_17198 === (2))){
var inst_17162 = (state_17197[(10)]);
var inst_17164 = cljs.core.count(inst_17162);
var inst_17165 = (inst_17164 > (0));
var state_17197__$1 = state_17197;
if(cljs.core.truth_(inst_17165)){
var statearr_17212_19205 = state_17197__$1;
(statearr_17212_19205[(1)] = (4));

} else {
var statearr_17213_19206 = state_17197__$1;
(statearr_17213_19206[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17198 === (11))){
var inst_17162 = (state_17197[(10)]);
var inst_17181 = (state_17197[(2)]);
var tmp17207 = inst_17162;
var inst_17162__$1 = tmp17207;
var state_17197__$1 = (function (){var statearr_17215 = state_17197;
(statearr_17215[(11)] = inst_17181);

(statearr_17215[(10)] = inst_17162__$1);

return statearr_17215;
})();
var statearr_17216_19212 = state_17197__$1;
(statearr_17216_19212[(2)] = null);

(statearr_17216_19212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17198 === (9))){
var inst_17172 = (state_17197[(8)]);
var state_17197__$1 = state_17197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17197__$1,(11),out,inst_17172);
} else {
if((state_val_17198 === (5))){
var inst_17186 = cljs.core.async.close_BANG_(out);
var state_17197__$1 = state_17197;
var statearr_17220_19216 = state_17197__$1;
(statearr_17220_19216[(2)] = inst_17186);

(statearr_17220_19216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17198 === (10))){
var inst_17184 = (state_17197[(2)]);
var state_17197__$1 = state_17197;
var statearr_17221_19219 = state_17197__$1;
(statearr_17221_19219[(2)] = inst_17184);

(statearr_17221_19219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17198 === (8))){
var inst_17162 = (state_17197[(10)]);
var inst_17171 = (state_17197[(7)]);
var inst_17172 = (state_17197[(8)]);
var inst_17173 = (state_17197[(9)]);
var inst_17176 = (function (){var cs = inst_17162;
var vec__17167 = inst_17171;
var v = inst_17172;
var c = inst_17173;
return (function (p1__17154_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17154_SHARP_);
});
})();
var inst_17177 = cljs.core.filterv(inst_17176,inst_17162);
var inst_17162__$1 = inst_17177;
var state_17197__$1 = (function (){var statearr_17223 = state_17197;
(statearr_17223[(10)] = inst_17162__$1);

return statearr_17223;
})();
var statearr_17224_19221 = state_17197__$1;
(statearr_17224_19221[(2)] = null);

(statearr_17224_19221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14076__auto__ = null;
var cljs$core$async$state_machine__14076__auto____0 = (function (){
var statearr_17226 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17226[(0)] = cljs$core$async$state_machine__14076__auto__);

(statearr_17226[(1)] = (1));

return statearr_17226;
});
var cljs$core$async$state_machine__14076__auto____1 = (function (state_17197){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_17197);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e17227){var ex__14079__auto__ = e17227;
var statearr_17228_19225 = state_17197;
(statearr_17228_19225[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_17197[(4)]))){
var statearr_17229_19226 = state_17197;
(statearr_17229_19226[(1)] = cljs.core.first((state_17197[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19228 = state_17197;
state_17197 = G__19228;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$state_machine__14076__auto__ = function(state_17197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14076__auto____1.call(this,state_17197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14076__auto____0;
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14076__auto____1;
return cljs$core$async$state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_17230 = f__14826__auto__();
(statearr_17230[(6)] = c__14825__auto___19181);

return statearr_17230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17232 = arguments.length;
switch (G__17232) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14825__auto___19250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_17259){
var state_val_17260 = (state_17259[(1)]);
if((state_val_17260 === (7))){
var inst_17241 = (state_17259[(7)]);
var inst_17241__$1 = (state_17259[(2)]);
var inst_17242 = (inst_17241__$1 == null);
var inst_17243 = cljs.core.not(inst_17242);
var state_17259__$1 = (function (){var statearr_17261 = state_17259;
(statearr_17261[(7)] = inst_17241__$1);

return statearr_17261;
})();
if(inst_17243){
var statearr_17262_19254 = state_17259__$1;
(statearr_17262_19254[(1)] = (8));

} else {
var statearr_17263_19255 = state_17259__$1;
(statearr_17263_19255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17260 === (1))){
var inst_17236 = (0);
var state_17259__$1 = (function (){var statearr_17264 = state_17259;
(statearr_17264[(8)] = inst_17236);

return statearr_17264;
})();
var statearr_17265_19263 = state_17259__$1;
(statearr_17265_19263[(2)] = null);

(statearr_17265_19263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17260 === (4))){
var state_17259__$1 = state_17259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17259__$1,(7),ch);
} else {
if((state_val_17260 === (6))){
var inst_17254 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
var statearr_17266_19266 = state_17259__$1;
(statearr_17266_19266[(2)] = inst_17254);

(statearr_17266_19266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17260 === (3))){
var inst_17256 = (state_17259[(2)]);
var inst_17257 = cljs.core.async.close_BANG_(out);
var state_17259__$1 = (function (){var statearr_17267 = state_17259;
(statearr_17267[(9)] = inst_17256);

return statearr_17267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17259__$1,inst_17257);
} else {
if((state_val_17260 === (2))){
var inst_17236 = (state_17259[(8)]);
var inst_17238 = (inst_17236 < n);
var state_17259__$1 = state_17259;
if(cljs.core.truth_(inst_17238)){
var statearr_17268_19271 = state_17259__$1;
(statearr_17268_19271[(1)] = (4));

} else {
var statearr_17269_19272 = state_17259__$1;
(statearr_17269_19272[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17260 === (11))){
var inst_17236 = (state_17259[(8)]);
var inst_17246 = (state_17259[(2)]);
var inst_17247 = (inst_17236 + (1));
var inst_17236__$1 = inst_17247;
var state_17259__$1 = (function (){var statearr_17274 = state_17259;
(statearr_17274[(10)] = inst_17246);

(statearr_17274[(8)] = inst_17236__$1);

return statearr_17274;
})();
var statearr_17275_19276 = state_17259__$1;
(statearr_17275_19276[(2)] = null);

(statearr_17275_19276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17260 === (9))){
var state_17259__$1 = state_17259;
var statearr_17277_19277 = state_17259__$1;
(statearr_17277_19277[(2)] = null);

(statearr_17277_19277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17260 === (5))){
var state_17259__$1 = state_17259;
var statearr_17278_19283 = state_17259__$1;
(statearr_17278_19283[(2)] = null);

(statearr_17278_19283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17260 === (10))){
var inst_17251 = (state_17259[(2)]);
var state_17259__$1 = state_17259;
var statearr_17280_19287 = state_17259__$1;
(statearr_17280_19287[(2)] = inst_17251);

(statearr_17280_19287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17260 === (8))){
var inst_17241 = (state_17259[(7)]);
var state_17259__$1 = state_17259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17259__$1,(11),out,inst_17241);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14076__auto__ = null;
var cljs$core$async$state_machine__14076__auto____0 = (function (){
var statearr_17283 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17283[(0)] = cljs$core$async$state_machine__14076__auto__);

(statearr_17283[(1)] = (1));

return statearr_17283;
});
var cljs$core$async$state_machine__14076__auto____1 = (function (state_17259){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_17259);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e17285){var ex__14079__auto__ = e17285;
var statearr_17286_19296 = state_17259;
(statearr_17286_19296[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_17259[(4)]))){
var statearr_17287_19297 = state_17259;
(statearr_17287_19297[(1)] = cljs.core.first((state_17259[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19307 = state_17259;
state_17259 = G__19307;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$state_machine__14076__auto__ = function(state_17259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14076__auto____1.call(this,state_17259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14076__auto____0;
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14076__auto____1;
return cljs$core$async$state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_17290 = f__14826__auto__();
(statearr_17290[(6)] = c__14825__auto___19250);

return statearr_17290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17321 = (function (f,ch,meta17302,_,fn1,meta17322){
this.f = f;
this.ch = ch;
this.meta17302 = meta17302;
this._ = _;
this.fn1 = fn1;
this.meta17322 = meta17322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17323,meta17322__$1){
var self__ = this;
var _17323__$1 = this;
return (new cljs.core.async.t_cljs$core$async17321(self__.f,self__.ch,self__.meta17302,self__._,self__.fn1,meta17322__$1));
}));

(cljs.core.async.t_cljs$core$async17321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17323){
var self__ = this;
var _17323__$1 = this;
return self__.meta17322;
}));

(cljs.core.async.t_cljs$core$async17321.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17321.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17321.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17321.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17296_SHARP_){
var G__17329 = (((p1__17296_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17296_SHARP_) : self__.f.call(null,p1__17296_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17329) : f1.call(null,G__17329));
});
}));

(cljs.core.async.t_cljs$core$async17321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17302","meta17302",2069865747,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17301","cljs.core.async/t_cljs$core$async17301",-1604693885,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17322","meta17322",1611594704,null)], null);
}));

(cljs.core.async.t_cljs$core$async17321.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17321");

(cljs.core.async.t_cljs$core$async17321.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17321");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17321.
 */
cljs.core.async.__GT_t_cljs$core$async17321 = (function cljs$core$async$__GT_t_cljs$core$async17321(f,ch,meta17302,_,fn1,meta17322){
return (new cljs.core.async.t_cljs$core$async17321(f,ch,meta17302,_,fn1,meta17322));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17301 = (function (f,ch,meta17302){
this.f = f;
this.ch = ch;
this.meta17302 = meta17302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17303,meta17302__$1){
var self__ = this;
var _17303__$1 = this;
return (new cljs.core.async.t_cljs$core$async17301(self__.f,self__.ch,meta17302__$1));
}));

(cljs.core.async.t_cljs$core$async17301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17303){
var self__ = this;
var _17303__$1 = this;
return self__.meta17302;
}));

(cljs.core.async.t_cljs$core$async17301.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17301.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17301.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17301.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17301.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17321(self__.f,self__.ch,self__.meta17302,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17337 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17337) : self__.f.call(null,G__17337));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17301.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17301.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17302","meta17302",2069865747,null)], null);
}));

(cljs.core.async.t_cljs$core$async17301.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17301");

(cljs.core.async.t_cljs$core$async17301.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17301");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17301.
 */
cljs.core.async.__GT_t_cljs$core$async17301 = (function cljs$core$async$__GT_t_cljs$core$async17301(f,ch,meta17302){
return (new cljs.core.async.t_cljs$core$async17301(f,ch,meta17302));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17301(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17358 = (function (f,ch,meta17359){
this.f = f;
this.ch = ch;
this.meta17359 = meta17359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17360,meta17359__$1){
var self__ = this;
var _17360__$1 = this;
return (new cljs.core.async.t_cljs$core$async17358(self__.f,self__.ch,meta17359__$1));
}));

(cljs.core.async.t_cljs$core$async17358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17360){
var self__ = this;
var _17360__$1 = this;
return self__.meta17359;
}));

(cljs.core.async.t_cljs$core$async17358.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17358.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17358.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17358.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17358.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17358.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17359","meta17359",75911486,null)], null);
}));

(cljs.core.async.t_cljs$core$async17358.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17358");

(cljs.core.async.t_cljs$core$async17358.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17358");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17358.
 */
cljs.core.async.__GT_t_cljs$core$async17358 = (function cljs$core$async$__GT_t_cljs$core$async17358(f,ch,meta17359){
return (new cljs.core.async.t_cljs$core$async17358(f,ch,meta17359));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17358(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17401 = (function (p,ch,meta17402){
this.p = p;
this.ch = ch;
this.meta17402 = meta17402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17403,meta17402__$1){
var self__ = this;
var _17403__$1 = this;
return (new cljs.core.async.t_cljs$core$async17401(self__.p,self__.ch,meta17402__$1));
}));

(cljs.core.async.t_cljs$core$async17401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17403){
var self__ = this;
var _17403__$1 = this;
return self__.meta17402;
}));

(cljs.core.async.t_cljs$core$async17401.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17401.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17401.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17401.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17401.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17401.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17401.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17402","meta17402",-954798538,null)], null);
}));

(cljs.core.async.t_cljs$core$async17401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17401");

(cljs.core.async.t_cljs$core$async17401.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17401.
 */
cljs.core.async.__GT_t_cljs$core$async17401 = (function cljs$core$async$__GT_t_cljs$core$async17401(p,ch,meta17402){
return (new cljs.core.async.t_cljs$core$async17401(p,ch,meta17402));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17401(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17422 = arguments.length;
switch (G__17422) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14825__auto___19408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_17454){
var state_val_17455 = (state_17454[(1)]);
if((state_val_17455 === (7))){
var inst_17450 = (state_17454[(2)]);
var state_17454__$1 = state_17454;
var statearr_17461_19417 = state_17454__$1;
(statearr_17461_19417[(2)] = inst_17450);

(statearr_17461_19417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17455 === (1))){
var state_17454__$1 = state_17454;
var statearr_17474_19419 = state_17454__$1;
(statearr_17474_19419[(2)] = null);

(statearr_17474_19419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17455 === (4))){
var inst_17436 = (state_17454[(7)]);
var inst_17436__$1 = (state_17454[(2)]);
var inst_17437 = (inst_17436__$1 == null);
var state_17454__$1 = (function (){var statearr_17477 = state_17454;
(statearr_17477[(7)] = inst_17436__$1);

return statearr_17477;
})();
if(cljs.core.truth_(inst_17437)){
var statearr_17478_19430 = state_17454__$1;
(statearr_17478_19430[(1)] = (5));

} else {
var statearr_17479_19431 = state_17454__$1;
(statearr_17479_19431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17455 === (6))){
var inst_17436 = (state_17454[(7)]);
var inst_17441 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17436) : p.call(null,inst_17436));
var state_17454__$1 = state_17454;
if(cljs.core.truth_(inst_17441)){
var statearr_17480_19443 = state_17454__$1;
(statearr_17480_19443[(1)] = (8));

} else {
var statearr_17483_19444 = state_17454__$1;
(statearr_17483_19444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17455 === (3))){
var inst_17452 = (state_17454[(2)]);
var state_17454__$1 = state_17454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17454__$1,inst_17452);
} else {
if((state_val_17455 === (2))){
var state_17454__$1 = state_17454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17454__$1,(4),ch);
} else {
if((state_val_17455 === (11))){
var inst_17444 = (state_17454[(2)]);
var state_17454__$1 = state_17454;
var statearr_17492_19457 = state_17454__$1;
(statearr_17492_19457[(2)] = inst_17444);

(statearr_17492_19457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17455 === (9))){
var state_17454__$1 = state_17454;
var statearr_17493_19458 = state_17454__$1;
(statearr_17493_19458[(2)] = null);

(statearr_17493_19458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17455 === (5))){
var inst_17439 = cljs.core.async.close_BANG_(out);
var state_17454__$1 = state_17454;
var statearr_17494_19459 = state_17454__$1;
(statearr_17494_19459[(2)] = inst_17439);

(statearr_17494_19459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17455 === (10))){
var inst_17447 = (state_17454[(2)]);
var state_17454__$1 = (function (){var statearr_17495 = state_17454;
(statearr_17495[(8)] = inst_17447);

return statearr_17495;
})();
var statearr_17496_19466 = state_17454__$1;
(statearr_17496_19466[(2)] = null);

(statearr_17496_19466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17455 === (8))){
var inst_17436 = (state_17454[(7)]);
var state_17454__$1 = state_17454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17454__$1,(11),out,inst_17436);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14076__auto__ = null;
var cljs$core$async$state_machine__14076__auto____0 = (function (){
var statearr_17505 = [null,null,null,null,null,null,null,null,null];
(statearr_17505[(0)] = cljs$core$async$state_machine__14076__auto__);

(statearr_17505[(1)] = (1));

return statearr_17505;
});
var cljs$core$async$state_machine__14076__auto____1 = (function (state_17454){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_17454);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e17508){var ex__14079__auto__ = e17508;
var statearr_17509_19476 = state_17454;
(statearr_17509_19476[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_17454[(4)]))){
var statearr_17513_19478 = state_17454;
(statearr_17513_19478[(1)] = cljs.core.first((state_17454[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19486 = state_17454;
state_17454 = G__19486;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$state_machine__14076__auto__ = function(state_17454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14076__auto____1.call(this,state_17454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14076__auto____0;
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14076__auto____1;
return cljs$core$async$state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_17514 = f__14826__auto__();
(statearr_17514[(6)] = c__14825__auto___19408);

return statearr_17514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17518 = arguments.length;
switch (G__17518) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14825__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_17600){
var state_val_17601 = (state_17600[(1)]);
if((state_val_17601 === (7))){
var inst_17596 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
var statearr_17604_19497 = state_17600__$1;
(statearr_17604_19497[(2)] = inst_17596);

(statearr_17604_19497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (20))){
var inst_17565 = (state_17600[(7)]);
var inst_17577 = (state_17600[(2)]);
var inst_17578 = cljs.core.next(inst_17565);
var inst_17551 = inst_17578;
var inst_17552 = null;
var inst_17553 = (0);
var inst_17554 = (0);
var state_17600__$1 = (function (){var statearr_17606 = state_17600;
(statearr_17606[(8)] = inst_17577);

(statearr_17606[(9)] = inst_17551);

(statearr_17606[(10)] = inst_17552);

(statearr_17606[(11)] = inst_17553);

(statearr_17606[(12)] = inst_17554);

return statearr_17606;
})();
var statearr_17607_19498 = state_17600__$1;
(statearr_17607_19498[(2)] = null);

(statearr_17607_19498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (1))){
var state_17600__$1 = state_17600;
var statearr_17609_19499 = state_17600__$1;
(statearr_17609_19499[(2)] = null);

(statearr_17609_19499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (4))){
var inst_17537 = (state_17600[(13)]);
var inst_17537__$1 = (state_17600[(2)]);
var inst_17538 = (inst_17537__$1 == null);
var state_17600__$1 = (function (){var statearr_17610 = state_17600;
(statearr_17610[(13)] = inst_17537__$1);

return statearr_17610;
})();
if(cljs.core.truth_(inst_17538)){
var statearr_17612_19504 = state_17600__$1;
(statearr_17612_19504[(1)] = (5));

} else {
var statearr_17614_19506 = state_17600__$1;
(statearr_17614_19506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (15))){
var state_17600__$1 = state_17600;
var statearr_17618_19508 = state_17600__$1;
(statearr_17618_19508[(2)] = null);

(statearr_17618_19508[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (21))){
var state_17600__$1 = state_17600;
var statearr_17620_19509 = state_17600__$1;
(statearr_17620_19509[(2)] = null);

(statearr_17620_19509[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (13))){
var inst_17554 = (state_17600[(12)]);
var inst_17551 = (state_17600[(9)]);
var inst_17552 = (state_17600[(10)]);
var inst_17553 = (state_17600[(11)]);
var inst_17561 = (state_17600[(2)]);
var inst_17562 = (inst_17554 + (1));
var tmp17615 = inst_17552;
var tmp17616 = inst_17553;
var tmp17617 = inst_17551;
var inst_17551__$1 = tmp17617;
var inst_17552__$1 = tmp17615;
var inst_17553__$1 = tmp17616;
var inst_17554__$1 = inst_17562;
var state_17600__$1 = (function (){var statearr_17622 = state_17600;
(statearr_17622[(14)] = inst_17561);

(statearr_17622[(9)] = inst_17551__$1);

(statearr_17622[(10)] = inst_17552__$1);

(statearr_17622[(11)] = inst_17553__$1);

(statearr_17622[(12)] = inst_17554__$1);

return statearr_17622;
})();
var statearr_17623_19515 = state_17600__$1;
(statearr_17623_19515[(2)] = null);

(statearr_17623_19515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (22))){
var state_17600__$1 = state_17600;
var statearr_17625_19520 = state_17600__$1;
(statearr_17625_19520[(2)] = null);

(statearr_17625_19520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (6))){
var inst_17537 = (state_17600[(13)]);
var inst_17549 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17537) : f.call(null,inst_17537));
var inst_17550 = cljs.core.seq(inst_17549);
var inst_17551 = inst_17550;
var inst_17552 = null;
var inst_17553 = (0);
var inst_17554 = (0);
var state_17600__$1 = (function (){var statearr_17627 = state_17600;
(statearr_17627[(9)] = inst_17551);

(statearr_17627[(10)] = inst_17552);

(statearr_17627[(11)] = inst_17553);

(statearr_17627[(12)] = inst_17554);

return statearr_17627;
})();
var statearr_17628_19522 = state_17600__$1;
(statearr_17628_19522[(2)] = null);

(statearr_17628_19522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (17))){
var inst_17565 = (state_17600[(7)]);
var inst_17570 = cljs.core.chunk_first(inst_17565);
var inst_17571 = cljs.core.chunk_rest(inst_17565);
var inst_17572 = cljs.core.count(inst_17570);
var inst_17551 = inst_17571;
var inst_17552 = inst_17570;
var inst_17553 = inst_17572;
var inst_17554 = (0);
var state_17600__$1 = (function (){var statearr_17629 = state_17600;
(statearr_17629[(9)] = inst_17551);

(statearr_17629[(10)] = inst_17552);

(statearr_17629[(11)] = inst_17553);

(statearr_17629[(12)] = inst_17554);

return statearr_17629;
})();
var statearr_17630_19532 = state_17600__$1;
(statearr_17630_19532[(2)] = null);

(statearr_17630_19532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (3))){
var inst_17598 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17600__$1,inst_17598);
} else {
if((state_val_17601 === (12))){
var inst_17586 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
var statearr_17633_19534 = state_17600__$1;
(statearr_17633_19534[(2)] = inst_17586);

(statearr_17633_19534[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (2))){
var state_17600__$1 = state_17600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17600__$1,(4),in$);
} else {
if((state_val_17601 === (23))){
var inst_17594 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
var statearr_17638_19540 = state_17600__$1;
(statearr_17638_19540[(2)] = inst_17594);

(statearr_17638_19540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (19))){
var inst_17581 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
var statearr_17645_19541 = state_17600__$1;
(statearr_17645_19541[(2)] = inst_17581);

(statearr_17645_19541[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (11))){
var inst_17551 = (state_17600[(9)]);
var inst_17565 = (state_17600[(7)]);
var inst_17565__$1 = cljs.core.seq(inst_17551);
var state_17600__$1 = (function (){var statearr_17646 = state_17600;
(statearr_17646[(7)] = inst_17565__$1);

return statearr_17646;
})();
if(inst_17565__$1){
var statearr_17647_19548 = state_17600__$1;
(statearr_17647_19548[(1)] = (14));

} else {
var statearr_17648_19549 = state_17600__$1;
(statearr_17648_19549[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (9))){
var inst_17588 = (state_17600[(2)]);
var inst_17589 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17600__$1 = (function (){var statearr_17649 = state_17600;
(statearr_17649[(15)] = inst_17588);

return statearr_17649;
})();
if(cljs.core.truth_(inst_17589)){
var statearr_17650_19550 = state_17600__$1;
(statearr_17650_19550[(1)] = (21));

} else {
var statearr_17651_19551 = state_17600__$1;
(statearr_17651_19551[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (5))){
var inst_17540 = cljs.core.async.close_BANG_(out);
var state_17600__$1 = state_17600;
var statearr_17652_19552 = state_17600__$1;
(statearr_17652_19552[(2)] = inst_17540);

(statearr_17652_19552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (14))){
var inst_17565 = (state_17600[(7)]);
var inst_17567 = cljs.core.chunked_seq_QMARK_(inst_17565);
var state_17600__$1 = state_17600;
if(inst_17567){
var statearr_17660_19556 = state_17600__$1;
(statearr_17660_19556[(1)] = (17));

} else {
var statearr_17663_19558 = state_17600__$1;
(statearr_17663_19558[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (16))){
var inst_17584 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
var statearr_17673_19560 = state_17600__$1;
(statearr_17673_19560[(2)] = inst_17584);

(statearr_17673_19560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (10))){
var inst_17552 = (state_17600[(10)]);
var inst_17554 = (state_17600[(12)]);
var inst_17559 = cljs.core._nth(inst_17552,inst_17554);
var state_17600__$1 = state_17600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17600__$1,(13),out,inst_17559);
} else {
if((state_val_17601 === (18))){
var inst_17565 = (state_17600[(7)]);
var inst_17575 = cljs.core.first(inst_17565);
var state_17600__$1 = state_17600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17600__$1,(20),out,inst_17575);
} else {
if((state_val_17601 === (8))){
var inst_17554 = (state_17600[(12)]);
var inst_17553 = (state_17600[(11)]);
var inst_17556 = (inst_17554 < inst_17553);
var inst_17557 = inst_17556;
var state_17600__$1 = state_17600;
if(cljs.core.truth_(inst_17557)){
var statearr_17674_19564 = state_17600__$1;
(statearr_17674_19564[(1)] = (10));

} else {
var statearr_17675_19566 = state_17600__$1;
(statearr_17675_19566[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14076__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14076__auto____0 = (function (){
var statearr_17676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17676[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14076__auto__);

(statearr_17676[(1)] = (1));

return statearr_17676;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14076__auto____1 = (function (state_17600){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_17600);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e17684){var ex__14079__auto__ = e17684;
var statearr_17688_19569 = state_17600;
(statearr_17688_19569[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_17600[(4)]))){
var statearr_17689_19574 = state_17600;
(statearr_17689_19574[(1)] = cljs.core.first((state_17600[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19577 = state_17600;
state_17600 = G__19577;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14076__auto__ = function(state_17600){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14076__auto____1.call(this,state_17600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14076__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14076__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_17693 = f__14826__auto__();
(statearr_17693[(6)] = c__14825__auto__);

return statearr_17693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));

return c__14825__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17698 = arguments.length;
switch (G__17698) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17722 = arguments.length;
switch (G__17722) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17741 = arguments.length;
switch (G__17741) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14825__auto___19606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_17777){
var state_val_17778 = (state_17777[(1)]);
if((state_val_17778 === (7))){
var inst_17772 = (state_17777[(2)]);
var state_17777__$1 = state_17777;
var statearr_17779_19611 = state_17777__$1;
(statearr_17779_19611[(2)] = inst_17772);

(statearr_17779_19611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17778 === (1))){
var inst_17754 = null;
var state_17777__$1 = (function (){var statearr_17780 = state_17777;
(statearr_17780[(7)] = inst_17754);

return statearr_17780;
})();
var statearr_17781_19615 = state_17777__$1;
(statearr_17781_19615[(2)] = null);

(statearr_17781_19615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17778 === (4))){
var inst_17757 = (state_17777[(8)]);
var inst_17757__$1 = (state_17777[(2)]);
var inst_17758 = (inst_17757__$1 == null);
var inst_17759 = cljs.core.not(inst_17758);
var state_17777__$1 = (function (){var statearr_17782 = state_17777;
(statearr_17782[(8)] = inst_17757__$1);

return statearr_17782;
})();
if(inst_17759){
var statearr_17784_19625 = state_17777__$1;
(statearr_17784_19625[(1)] = (5));

} else {
var statearr_17785_19627 = state_17777__$1;
(statearr_17785_19627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17778 === (6))){
var state_17777__$1 = state_17777;
var statearr_17786_19632 = state_17777__$1;
(statearr_17786_19632[(2)] = null);

(statearr_17786_19632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17778 === (3))){
var inst_17774 = (state_17777[(2)]);
var inst_17775 = cljs.core.async.close_BANG_(out);
var state_17777__$1 = (function (){var statearr_17787 = state_17777;
(statearr_17787[(9)] = inst_17774);

return statearr_17787;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17777__$1,inst_17775);
} else {
if((state_val_17778 === (2))){
var state_17777__$1 = state_17777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17777__$1,(4),ch);
} else {
if((state_val_17778 === (11))){
var inst_17757 = (state_17777[(8)]);
var inst_17766 = (state_17777[(2)]);
var inst_17754 = inst_17757;
var state_17777__$1 = (function (){var statearr_17794 = state_17777;
(statearr_17794[(10)] = inst_17766);

(statearr_17794[(7)] = inst_17754);

return statearr_17794;
})();
var statearr_17795_19636 = state_17777__$1;
(statearr_17795_19636[(2)] = null);

(statearr_17795_19636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17778 === (9))){
var inst_17757 = (state_17777[(8)]);
var state_17777__$1 = state_17777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17777__$1,(11),out,inst_17757);
} else {
if((state_val_17778 === (5))){
var inst_17757 = (state_17777[(8)]);
var inst_17754 = (state_17777[(7)]);
var inst_17761 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17757,inst_17754);
var state_17777__$1 = state_17777;
if(inst_17761){
var statearr_17797_19647 = state_17777__$1;
(statearr_17797_19647[(1)] = (8));

} else {
var statearr_17798_19648 = state_17777__$1;
(statearr_17798_19648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17778 === (10))){
var inst_17769 = (state_17777[(2)]);
var state_17777__$1 = state_17777;
var statearr_17799_19653 = state_17777__$1;
(statearr_17799_19653[(2)] = inst_17769);

(statearr_17799_19653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17778 === (8))){
var inst_17754 = (state_17777[(7)]);
var tmp17796 = inst_17754;
var inst_17754__$1 = tmp17796;
var state_17777__$1 = (function (){var statearr_17800 = state_17777;
(statearr_17800[(7)] = inst_17754__$1);

return statearr_17800;
})();
var statearr_17801_19658 = state_17777__$1;
(statearr_17801_19658[(2)] = null);

(statearr_17801_19658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14076__auto__ = null;
var cljs$core$async$state_machine__14076__auto____0 = (function (){
var statearr_17802 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17802[(0)] = cljs$core$async$state_machine__14076__auto__);

(statearr_17802[(1)] = (1));

return statearr_17802;
});
var cljs$core$async$state_machine__14076__auto____1 = (function (state_17777){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_17777);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e17803){var ex__14079__auto__ = e17803;
var statearr_17804_19665 = state_17777;
(statearr_17804_19665[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_17777[(4)]))){
var statearr_17805_19666 = state_17777;
(statearr_17805_19666[(1)] = cljs.core.first((state_17777[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19667 = state_17777;
state_17777 = G__19667;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$state_machine__14076__auto__ = function(state_17777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14076__auto____1.call(this,state_17777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14076__auto____0;
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14076__auto____1;
return cljs$core$async$state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_17810 = f__14826__auto__();
(statearr_17810[(6)] = c__14825__auto___19606);

return statearr_17810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17814 = arguments.length;
switch (G__17814) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14825__auto___19672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_17867){
var state_val_17868 = (state_17867[(1)]);
if((state_val_17868 === (7))){
var inst_17862 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17872_19677 = state_17867__$1;
(statearr_17872_19677[(2)] = inst_17862);

(statearr_17872_19677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (1))){
var inst_17826 = (new Array(n));
var inst_17828 = inst_17826;
var inst_17829 = (0);
var state_17867__$1 = (function (){var statearr_17873 = state_17867;
(statearr_17873[(7)] = inst_17828);

(statearr_17873[(8)] = inst_17829);

return statearr_17873;
})();
var statearr_17874_19678 = state_17867__$1;
(statearr_17874_19678[(2)] = null);

(statearr_17874_19678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (4))){
var inst_17832 = (state_17867[(9)]);
var inst_17832__$1 = (state_17867[(2)]);
var inst_17833 = (inst_17832__$1 == null);
var inst_17834 = cljs.core.not(inst_17833);
var state_17867__$1 = (function (){var statearr_17878 = state_17867;
(statearr_17878[(9)] = inst_17832__$1);

return statearr_17878;
})();
if(inst_17834){
var statearr_17879_19682 = state_17867__$1;
(statearr_17879_19682[(1)] = (5));

} else {
var statearr_17880_19683 = state_17867__$1;
(statearr_17880_19683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (15))){
var inst_17856 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17881_19685 = state_17867__$1;
(statearr_17881_19685[(2)] = inst_17856);

(statearr_17881_19685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (13))){
var state_17867__$1 = state_17867;
var statearr_17883_19689 = state_17867__$1;
(statearr_17883_19689[(2)] = null);

(statearr_17883_19689[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (6))){
var inst_17829 = (state_17867[(8)]);
var inst_17852 = (inst_17829 > (0));
var state_17867__$1 = state_17867;
if(cljs.core.truth_(inst_17852)){
var statearr_17887_19690 = state_17867__$1;
(statearr_17887_19690[(1)] = (12));

} else {
var statearr_17888_19691 = state_17867__$1;
(statearr_17888_19691[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (3))){
var inst_17864 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17867__$1,inst_17864);
} else {
if((state_val_17868 === (12))){
var inst_17828 = (state_17867[(7)]);
var inst_17854 = cljs.core.vec(inst_17828);
var state_17867__$1 = state_17867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17867__$1,(15),out,inst_17854);
} else {
if((state_val_17868 === (2))){
var state_17867__$1 = state_17867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17867__$1,(4),ch);
} else {
if((state_val_17868 === (11))){
var inst_17846 = (state_17867[(2)]);
var inst_17847 = (new Array(n));
var inst_17828 = inst_17847;
var inst_17829 = (0);
var state_17867__$1 = (function (){var statearr_17892 = state_17867;
(statearr_17892[(10)] = inst_17846);

(statearr_17892[(7)] = inst_17828);

(statearr_17892[(8)] = inst_17829);

return statearr_17892;
})();
var statearr_17894_19699 = state_17867__$1;
(statearr_17894_19699[(2)] = null);

(statearr_17894_19699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (9))){
var inst_17828 = (state_17867[(7)]);
var inst_17844 = cljs.core.vec(inst_17828);
var state_17867__$1 = state_17867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17867__$1,(11),out,inst_17844);
} else {
if((state_val_17868 === (5))){
var inst_17828 = (state_17867[(7)]);
var inst_17829 = (state_17867[(8)]);
var inst_17832 = (state_17867[(9)]);
var inst_17839 = (state_17867[(11)]);
var inst_17837 = (inst_17828[inst_17829] = inst_17832);
var inst_17839__$1 = (inst_17829 + (1));
var inst_17840 = (inst_17839__$1 < n);
var state_17867__$1 = (function (){var statearr_17900 = state_17867;
(statearr_17900[(12)] = inst_17837);

(statearr_17900[(11)] = inst_17839__$1);

return statearr_17900;
})();
if(cljs.core.truth_(inst_17840)){
var statearr_17903_19701 = state_17867__$1;
(statearr_17903_19701[(1)] = (8));

} else {
var statearr_17904_19702 = state_17867__$1;
(statearr_17904_19702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (14))){
var inst_17859 = (state_17867[(2)]);
var inst_17860 = cljs.core.async.close_BANG_(out);
var state_17867__$1 = (function (){var statearr_17906 = state_17867;
(statearr_17906[(13)] = inst_17859);

return statearr_17906;
})();
var statearr_17907_19704 = state_17867__$1;
(statearr_17907_19704[(2)] = inst_17860);

(statearr_17907_19704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (10))){
var inst_17850 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17912_19705 = state_17867__$1;
(statearr_17912_19705[(2)] = inst_17850);

(statearr_17912_19705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (8))){
var inst_17828 = (state_17867[(7)]);
var inst_17839 = (state_17867[(11)]);
var tmp17905 = inst_17828;
var inst_17828__$1 = tmp17905;
var inst_17829 = inst_17839;
var state_17867__$1 = (function (){var statearr_17915 = state_17867;
(statearr_17915[(7)] = inst_17828__$1);

(statearr_17915[(8)] = inst_17829);

return statearr_17915;
})();
var statearr_17916_19708 = state_17867__$1;
(statearr_17916_19708[(2)] = null);

(statearr_17916_19708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14076__auto__ = null;
var cljs$core$async$state_machine__14076__auto____0 = (function (){
var statearr_17918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17918[(0)] = cljs$core$async$state_machine__14076__auto__);

(statearr_17918[(1)] = (1));

return statearr_17918;
});
var cljs$core$async$state_machine__14076__auto____1 = (function (state_17867){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_17867);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e17919){var ex__14079__auto__ = e17919;
var statearr_17920_19711 = state_17867;
(statearr_17920_19711[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_17867[(4)]))){
var statearr_17923_19712 = state_17867;
(statearr_17923_19712[(1)] = cljs.core.first((state_17867[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19713 = state_17867;
state_17867 = G__19713;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$state_machine__14076__auto__ = function(state_17867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14076__auto____1.call(this,state_17867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14076__auto____0;
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14076__auto____1;
return cljs$core$async$state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_17945 = f__14826__auto__();
(statearr_17945[(6)] = c__14825__auto___19672);

return statearr_17945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17948 = arguments.length;
switch (G__17948) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14825__auto___19716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14826__auto__ = (function (){var switch__14075__auto__ = (function (state_18005){
var state_val_18006 = (state_18005[(1)]);
if((state_val_18006 === (7))){
var inst_18001 = (state_18005[(2)]);
var state_18005__$1 = state_18005;
var statearr_18007_19717 = state_18005__$1;
(statearr_18007_19717[(2)] = inst_18001);

(statearr_18007_19717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18006 === (1))){
var inst_17953 = [];
var inst_17958 = inst_17953;
var inst_17959 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18005__$1 = (function (){var statearr_18008 = state_18005;
(statearr_18008[(7)] = inst_17958);

(statearr_18008[(8)] = inst_17959);

return statearr_18008;
})();
var statearr_18009_19718 = state_18005__$1;
(statearr_18009_19718[(2)] = null);

(statearr_18009_19718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18006 === (4))){
var inst_17962 = (state_18005[(9)]);
var inst_17962__$1 = (state_18005[(2)]);
var inst_17963 = (inst_17962__$1 == null);
var inst_17964 = cljs.core.not(inst_17963);
var state_18005__$1 = (function (){var statearr_18010 = state_18005;
(statearr_18010[(9)] = inst_17962__$1);

return statearr_18010;
})();
if(inst_17964){
var statearr_18011_19719 = state_18005__$1;
(statearr_18011_19719[(1)] = (5));

} else {
var statearr_18014_19720 = state_18005__$1;
(statearr_18014_19720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18006 === (15))){
var inst_17958 = (state_18005[(7)]);
var inst_17993 = cljs.core.vec(inst_17958);
var state_18005__$1 = state_18005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18005__$1,(18),out,inst_17993);
} else {
if((state_val_18006 === (13))){
var inst_17988 = (state_18005[(2)]);
var state_18005__$1 = state_18005;
var statearr_18015_19721 = state_18005__$1;
(statearr_18015_19721[(2)] = inst_17988);

(statearr_18015_19721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18006 === (6))){
var inst_17958 = (state_18005[(7)]);
var inst_17990 = inst_17958.length;
var inst_17991 = (inst_17990 > (0));
var state_18005__$1 = state_18005;
if(cljs.core.truth_(inst_17991)){
var statearr_18016_19722 = state_18005__$1;
(statearr_18016_19722[(1)] = (15));

} else {
var statearr_18018_19723 = state_18005__$1;
(statearr_18018_19723[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18006 === (17))){
var inst_17998 = (state_18005[(2)]);
var inst_17999 = cljs.core.async.close_BANG_(out);
var state_18005__$1 = (function (){var statearr_18019 = state_18005;
(statearr_18019[(10)] = inst_17998);

return statearr_18019;
})();
var statearr_18021_19727 = state_18005__$1;
(statearr_18021_19727[(2)] = inst_17999);

(statearr_18021_19727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18006 === (3))){
var inst_18003 = (state_18005[(2)]);
var state_18005__$1 = state_18005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18005__$1,inst_18003);
} else {
if((state_val_18006 === (12))){
var inst_17958 = (state_18005[(7)]);
var inst_17981 = cljs.core.vec(inst_17958);
var state_18005__$1 = state_18005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18005__$1,(14),out,inst_17981);
} else {
if((state_val_18006 === (2))){
var state_18005__$1 = state_18005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18005__$1,(4),ch);
} else {
if((state_val_18006 === (11))){
var inst_17958 = (state_18005[(7)]);
var inst_17962 = (state_18005[(9)]);
var inst_17966 = (state_18005[(11)]);
var inst_17978 = inst_17958.push(inst_17962);
var tmp18024 = inst_17958;
var inst_17958__$1 = tmp18024;
var inst_17959 = inst_17966;
var state_18005__$1 = (function (){var statearr_18029 = state_18005;
(statearr_18029[(12)] = inst_17978);

(statearr_18029[(7)] = inst_17958__$1);

(statearr_18029[(8)] = inst_17959);

return statearr_18029;
})();
var statearr_18030_19733 = state_18005__$1;
(statearr_18030_19733[(2)] = null);

(statearr_18030_19733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18006 === (9))){
var inst_17959 = (state_18005[(8)]);
var inst_17974 = cljs.core.keyword_identical_QMARK_(inst_17959,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18005__$1 = state_18005;
var statearr_18033_19736 = state_18005__$1;
(statearr_18033_19736[(2)] = inst_17974);

(statearr_18033_19736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18006 === (5))){
var inst_17962 = (state_18005[(9)]);
var inst_17966 = (state_18005[(11)]);
var inst_17959 = (state_18005[(8)]);
var inst_17971 = (state_18005[(13)]);
var inst_17966__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17962) : f.call(null,inst_17962));
var inst_17971__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17966__$1,inst_17959);
var state_18005__$1 = (function (){var statearr_18039 = state_18005;
(statearr_18039[(11)] = inst_17966__$1);

(statearr_18039[(13)] = inst_17971__$1);

return statearr_18039;
})();
if(inst_17971__$1){
var statearr_18041_19739 = state_18005__$1;
(statearr_18041_19739[(1)] = (8));

} else {
var statearr_18043_19740 = state_18005__$1;
(statearr_18043_19740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18006 === (14))){
var inst_17962 = (state_18005[(9)]);
var inst_17966 = (state_18005[(11)]);
var inst_17983 = (state_18005[(2)]);
var inst_17984 = [];
var inst_17985 = inst_17984.push(inst_17962);
var inst_17958 = inst_17984;
var inst_17959 = inst_17966;
var state_18005__$1 = (function (){var statearr_18051 = state_18005;
(statearr_18051[(14)] = inst_17983);

(statearr_18051[(15)] = inst_17985);

(statearr_18051[(7)] = inst_17958);

(statearr_18051[(8)] = inst_17959);

return statearr_18051;
})();
var statearr_18052_19745 = state_18005__$1;
(statearr_18052_19745[(2)] = null);

(statearr_18052_19745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18006 === (16))){
var state_18005__$1 = state_18005;
var statearr_18054_19746 = state_18005__$1;
(statearr_18054_19746[(2)] = null);

(statearr_18054_19746[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18006 === (10))){
var inst_17976 = (state_18005[(2)]);
var state_18005__$1 = state_18005;
if(cljs.core.truth_(inst_17976)){
var statearr_18055_19747 = state_18005__$1;
(statearr_18055_19747[(1)] = (11));

} else {
var statearr_18058_19749 = state_18005__$1;
(statearr_18058_19749[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18006 === (18))){
var inst_17995 = (state_18005[(2)]);
var state_18005__$1 = state_18005;
var statearr_18059_19751 = state_18005__$1;
(statearr_18059_19751[(2)] = inst_17995);

(statearr_18059_19751[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18006 === (8))){
var inst_17971 = (state_18005[(13)]);
var state_18005__$1 = state_18005;
var statearr_18072_19757 = state_18005__$1;
(statearr_18072_19757[(2)] = inst_17971);

(statearr_18072_19757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14076__auto__ = null;
var cljs$core$async$state_machine__14076__auto____0 = (function (){
var statearr_18073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18073[(0)] = cljs$core$async$state_machine__14076__auto__);

(statearr_18073[(1)] = (1));

return statearr_18073;
});
var cljs$core$async$state_machine__14076__auto____1 = (function (state_18005){
while(true){
var ret_value__14077__auto__ = (function (){try{while(true){
var result__14078__auto__ = switch__14075__auto__(state_18005);
if(cljs.core.keyword_identical_QMARK_(result__14078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14078__auto__;
}
break;
}
}catch (e18074){var ex__14079__auto__ = e18074;
var statearr_18077_19762 = state_18005;
(statearr_18077_19762[(2)] = ex__14079__auto__);


if(cljs.core.seq((state_18005[(4)]))){
var statearr_18080_19763 = state_18005;
(statearr_18080_19763[(1)] = cljs.core.first((state_18005[(4)])));

} else {
throw ex__14079__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19771 = state_18005;
state_18005 = G__19771;
continue;
} else {
return ret_value__14077__auto__;
}
break;
}
});
cljs$core$async$state_machine__14076__auto__ = function(state_18005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14076__auto____1.call(this,state_18005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14076__auto____0;
cljs$core$async$state_machine__14076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14076__auto____1;
return cljs$core$async$state_machine__14076__auto__;
})()
})();
var state__14827__auto__ = (function (){var statearr_18084 = f__14826__auto__();
(statearr_18084[(6)] = c__14825__auto___19716);

return statearr_18084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14827__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
