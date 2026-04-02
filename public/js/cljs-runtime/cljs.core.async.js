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
cljs.core.async.t_cljs$core$async20254 = (function (f,blockable,meta20255){
this.f = f;
this.blockable = blockable;
this.meta20255 = meta20255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20256,meta20255__$1){
var self__ = this;
var _20256__$1 = this;
return (new cljs.core.async.t_cljs$core$async20254(self__.f,self__.blockable,meta20255__$1));
}));

(cljs.core.async.t_cljs$core$async20254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20256){
var self__ = this;
var _20256__$1 = this;
return self__.meta20255;
}));

(cljs.core.async.t_cljs$core$async20254.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20254.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async20254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async20254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20255","meta20255",-509876464,null)], null);
}));

(cljs.core.async.t_cljs$core$async20254.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20254");

(cljs.core.async.t_cljs$core$async20254.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async20254");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20254.
 */
cljs.core.async.__GT_t_cljs$core$async20254 = (function cljs$core$async$__GT_t_cljs$core$async20254(f,blockable,meta20255){
return (new cljs.core.async.t_cljs$core$async20254(f,blockable,meta20255));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__20249 = arguments.length;
switch (G__20249) {
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
return (new cljs.core.async.t_cljs$core$async20254(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20269 = arguments.length;
switch (G__20269) {
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
var G__20276 = arguments.length;
switch (G__20276) {
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
var G__20278 = arguments.length;
switch (G__20278) {
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
var val_22276 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22276) : fn1.call(null,val_22276));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22276) : fn1.call(null,val_22276));
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
var G__20286 = arguments.length;
switch (G__20286) {
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
var n__5741__auto___22278 = n;
var x_22279 = (0);
while(true){
if((x_22279 < n__5741__auto___22278)){
(a[x_22279] = x_22279);

var G__22280 = (x_22279 + (1));
x_22279 = G__22280;
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
cljs.core.async.t_cljs$core$async20287 = (function (flag,meta20288){
this.flag = flag;
this.meta20288 = meta20288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20289,meta20288__$1){
var self__ = this;
var _20289__$1 = this;
return (new cljs.core.async.t_cljs$core$async20287(self__.flag,meta20288__$1));
}));

(cljs.core.async.t_cljs$core$async20287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20289){
var self__ = this;
var _20289__$1 = this;
return self__.meta20288;
}));

(cljs.core.async.t_cljs$core$async20287.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20287.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async20287.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20287.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async20287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20288","meta20288",4242806,null)], null);
}));

(cljs.core.async.t_cljs$core$async20287.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20287");

(cljs.core.async.t_cljs$core$async20287.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async20287");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20287.
 */
cljs.core.async.__GT_t_cljs$core$async20287 = (function cljs$core$async$__GT_t_cljs$core$async20287(flag,meta20288){
return (new cljs.core.async.t_cljs$core$async20287(flag,meta20288));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async20287(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20297 = (function (flag,cb,meta20298){
this.flag = flag;
this.cb = cb;
this.meta20298 = meta20298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20299,meta20298__$1){
var self__ = this;
var _20299__$1 = this;
return (new cljs.core.async.t_cljs$core$async20297(self__.flag,self__.cb,meta20298__$1));
}));

(cljs.core.async.t_cljs$core$async20297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20299){
var self__ = this;
var _20299__$1 = this;
return self__.meta20298;
}));

(cljs.core.async.t_cljs$core$async20297.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20297.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async20297.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20297.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async20297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20298","meta20298",1194881936,null)], null);
}));

(cljs.core.async.t_cljs$core$async20297.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20297");

(cljs.core.async.t_cljs$core$async20297.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async20297");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20297.
 */
cljs.core.async.__GT_t_cljs$core$async20297 = (function cljs$core$async$__GT_t_cljs$core$async20297(flag,cb,meta20298){
return (new cljs.core.async.t_cljs$core$async20297(flag,cb,meta20298));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async20297(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_22281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_22281)){
if((!(((port_22281.cljs$core$IFn$_invoke$arity$1 ? port_22281.cljs$core$IFn$_invoke$arity$1((1)) : port_22281.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__22282 = (i + (1));
i = G__22282;
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
return (function (p1__20302_SHARP_){
var G__20305 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20302_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20305) : fret.call(null,G__20305));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__20303_SHARP_){
var G__20306 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20303_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20306) : fret.call(null,G__20306));
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
var G__22283 = (i + (1));
i = G__22283;
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
var len__5876__auto___22284 = arguments.length;
var i__5877__auto___22285 = (0);
while(true){
if((i__5877__auto___22285 < len__5876__auto___22284)){
args__5882__auto__.push((arguments[i__5877__auto___22285]));

var G__22286 = (i__5877__auto___22285 + (1));
i__5877__auto___22285 = G__22286;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20311){
var map__20312 = p__20311;
var map__20312__$1 = cljs.core.__destructure_map(map__20312);
var opts = map__20312__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20309){
var G__20310 = cljs.core.first(seq20309);
var seq20309__$1 = cljs.core.next(seq20309);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20310,seq20309__$1);
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
var G__20316 = arguments.length;
switch (G__20316) {
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
var c__20175__auto___22290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_20350){
var state_val_20352 = (state_20350[(1)]);
if((state_val_20352 === (7))){
var inst_20343 = (state_20350[(2)]);
var state_20350__$1 = state_20350;
var statearr_20355_22291 = state_20350__$1;
(statearr_20355_22291[(2)] = inst_20343);

(statearr_20355_22291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (1))){
var state_20350__$1 = state_20350;
var statearr_20357_22292 = state_20350__$1;
(statearr_20357_22292[(2)] = null);

(statearr_20357_22292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (4))){
var inst_20319 = (state_20350[(7)]);
var inst_20319__$1 = (state_20350[(2)]);
var inst_20324 = (inst_20319__$1 == null);
var state_20350__$1 = (function (){var statearr_20358 = state_20350;
(statearr_20358[(7)] = inst_20319__$1);

return statearr_20358;
})();
if(cljs.core.truth_(inst_20324)){
var statearr_20359_22293 = state_20350__$1;
(statearr_20359_22293[(1)] = (5));

} else {
var statearr_20360_22294 = state_20350__$1;
(statearr_20360_22294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (13))){
var state_20350__$1 = state_20350;
var statearr_20363_22295 = state_20350__$1;
(statearr_20363_22295[(2)] = null);

(statearr_20363_22295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (6))){
var inst_20319 = (state_20350[(7)]);
var state_20350__$1 = state_20350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20350__$1,(11),to,inst_20319);
} else {
if((state_val_20352 === (3))){
var inst_20346 = (state_20350[(2)]);
var state_20350__$1 = state_20350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20350__$1,inst_20346);
} else {
if((state_val_20352 === (12))){
var state_20350__$1 = state_20350;
var statearr_20364_22296 = state_20350__$1;
(statearr_20364_22296[(2)] = null);

(statearr_20364_22296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (2))){
var state_20350__$1 = state_20350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20350__$1,(4),from);
} else {
if((state_val_20352 === (11))){
var inst_20334 = (state_20350[(2)]);
var state_20350__$1 = state_20350;
if(cljs.core.truth_(inst_20334)){
var statearr_20365_22297 = state_20350__$1;
(statearr_20365_22297[(1)] = (12));

} else {
var statearr_20366_22298 = state_20350__$1;
(statearr_20366_22298[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (9))){
var state_20350__$1 = state_20350;
var statearr_20367_22299 = state_20350__$1;
(statearr_20367_22299[(2)] = null);

(statearr_20367_22299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (5))){
var state_20350__$1 = state_20350;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20368_22300 = state_20350__$1;
(statearr_20368_22300[(1)] = (8));

} else {
var statearr_20369_22301 = state_20350__$1;
(statearr_20369_22301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (14))){
var inst_20341 = (state_20350[(2)]);
var state_20350__$1 = state_20350;
var statearr_20370_22302 = state_20350__$1;
(statearr_20370_22302[(2)] = inst_20341);

(statearr_20370_22302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (10))){
var inst_20331 = (state_20350[(2)]);
var state_20350__$1 = state_20350;
var statearr_20371_22303 = state_20350__$1;
(statearr_20371_22303[(2)] = inst_20331);

(statearr_20371_22303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (8))){
var inst_20328 = cljs.core.async.close_BANG_(to);
var state_20350__$1 = state_20350;
var statearr_20376_22304 = state_20350__$1;
(statearr_20376_22304[(2)] = inst_20328);

(statearr_20376_22304[(1)] = (10));


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
var cljs$core$async$state_machine__19782__auto__ = null;
var cljs$core$async$state_machine__19782__auto____0 = (function (){
var statearr_20385 = [null,null,null,null,null,null,null,null];
(statearr_20385[(0)] = cljs$core$async$state_machine__19782__auto__);

(statearr_20385[(1)] = (1));

return statearr_20385;
});
var cljs$core$async$state_machine__19782__auto____1 = (function (state_20350){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_20350);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e20386){var ex__19785__auto__ = e20386;
var statearr_20387_22306 = state_20350;
(statearr_20387_22306[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_20350[(4)]))){
var statearr_20390_22307 = state_20350;
(statearr_20390_22307[(1)] = cljs.core.first((state_20350[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22308 = state_20350;
state_20350 = G__22308;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$state_machine__19782__auto__ = function(state_20350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19782__auto____1.call(this,state_20350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19782__auto____0;
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19782__auto____1;
return cljs$core$async$state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_20391 = f__20176__auto__();
(statearr_20391[(6)] = c__20175__auto___22290);

return statearr_20391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
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
var process__$1 = (function (p__20397){
var vec__20398 = p__20397;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20398,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20398,(1),null);
var job = vec__20398;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__20175__auto___22310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_20405){
var state_val_20406 = (state_20405[(1)]);
if((state_val_20406 === (1))){
var state_20405__$1 = state_20405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20405__$1,(2),res,v);
} else {
if((state_val_20406 === (2))){
var inst_20402 = (state_20405[(2)]);
var inst_20403 = cljs.core.async.close_BANG_(res);
var state_20405__$1 = (function (){var statearr_20410 = state_20405;
(statearr_20410[(7)] = inst_20402);

return statearr_20410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20405__$1,inst_20403);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____0 = (function (){
var statearr_20411 = [null,null,null,null,null,null,null,null];
(statearr_20411[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__);

(statearr_20411[(1)] = (1));

return statearr_20411;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____1 = (function (state_20405){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_20405);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e20417){var ex__19785__auto__ = e20417;
var statearr_20418_22312 = state_20405;
(statearr_20418_22312[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_20405[(4)]))){
var statearr_20423_22313 = state_20405;
(statearr_20423_22313[(1)] = cljs.core.first((state_20405[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22314 = state_20405;
state_20405 = G__22314;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__ = function(state_20405){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____1.call(this,state_20405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_20426 = f__20176__auto__();
(statearr_20426[(6)] = c__20175__auto___22310);

return statearr_20426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__20429){
var vec__20433 = p__20429;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20433,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20433,(1),null);
var job = vec__20433;
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
var n__5741__auto___22315 = n;
var __22316 = (0);
while(true){
if((__22316 < n__5741__auto___22315)){
var G__20438_22317 = type;
var G__20438_22318__$1 = (((G__20438_22317 instanceof cljs.core.Keyword))?G__20438_22317.fqn:null);
switch (G__20438_22318__$1) {
case "compute":
var c__20175__auto___22320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22316,c__20175__auto___22320,G__20438_22317,G__20438_22318__$1,n__5741__auto___22315,jobs,results,process__$1,async){
return (function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = ((function (__22316,c__20175__auto___22320,G__20438_22317,G__20438_22318__$1,n__5741__auto___22315,jobs,results,process__$1,async){
return (function (state_20457){
var state_val_20458 = (state_20457[(1)]);
if((state_val_20458 === (1))){
var state_20457__$1 = state_20457;
var statearr_20463_22321 = state_20457__$1;
(statearr_20463_22321[(2)] = null);

(statearr_20463_22321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20458 === (2))){
var state_20457__$1 = state_20457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20457__$1,(4),jobs);
} else {
if((state_val_20458 === (3))){
var inst_20454 = (state_20457[(2)]);
var state_20457__$1 = state_20457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20457__$1,inst_20454);
} else {
if((state_val_20458 === (4))){
var inst_20444 = (state_20457[(2)]);
var inst_20447 = process__$1(inst_20444);
var state_20457__$1 = state_20457;
if(cljs.core.truth_(inst_20447)){
var statearr_20466_22322 = state_20457__$1;
(statearr_20466_22322[(1)] = (5));

} else {
var statearr_20467_22323 = state_20457__$1;
(statearr_20467_22323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20458 === (5))){
var state_20457__$1 = state_20457;
var statearr_20468_22324 = state_20457__$1;
(statearr_20468_22324[(2)] = null);

(statearr_20468_22324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20458 === (6))){
var state_20457__$1 = state_20457;
var statearr_20469_22325 = state_20457__$1;
(statearr_20469_22325[(2)] = null);

(statearr_20469_22325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20458 === (7))){
var inst_20452 = (state_20457[(2)]);
var state_20457__$1 = state_20457;
var statearr_20471_22326 = state_20457__$1;
(statearr_20471_22326[(2)] = inst_20452);

(statearr_20471_22326[(1)] = (3));


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
});})(__22316,c__20175__auto___22320,G__20438_22317,G__20438_22318__$1,n__5741__auto___22315,jobs,results,process__$1,async))
;
return ((function (__22316,switch__19781__auto__,c__20175__auto___22320,G__20438_22317,G__20438_22318__$1,n__5741__auto___22315,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____0 = (function (){
var statearr_20473 = [null,null,null,null,null,null,null];
(statearr_20473[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__);

(statearr_20473[(1)] = (1));

return statearr_20473;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____1 = (function (state_20457){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_20457);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e20474){var ex__19785__auto__ = e20474;
var statearr_20475_22328 = state_20457;
(statearr_20475_22328[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_20457[(4)]))){
var statearr_20476_22329 = state_20457;
(statearr_20476_22329[(1)] = cljs.core.first((state_20457[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22330 = state_20457;
state_20457 = G__22330;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__ = function(state_20457){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____1.call(this,state_20457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__;
})()
;})(__22316,switch__19781__auto__,c__20175__auto___22320,G__20438_22317,G__20438_22318__$1,n__5741__auto___22315,jobs,results,process__$1,async))
})();
var state__20177__auto__ = (function (){var statearr_20479 = f__20176__auto__();
(statearr_20479[(6)] = c__20175__auto___22320);

return statearr_20479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
});})(__22316,c__20175__auto___22320,G__20438_22317,G__20438_22318__$1,n__5741__auto___22315,jobs,results,process__$1,async))
);


break;
case "async":
var c__20175__auto___22331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22316,c__20175__auto___22331,G__20438_22317,G__20438_22318__$1,n__5741__auto___22315,jobs,results,process__$1,async){
return (function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = ((function (__22316,c__20175__auto___22331,G__20438_22317,G__20438_22318__$1,n__5741__auto___22315,jobs,results,process__$1,async){
return (function (state_20493){
var state_val_20494 = (state_20493[(1)]);
if((state_val_20494 === (1))){
var state_20493__$1 = state_20493;
var statearr_20498_22332 = state_20493__$1;
(statearr_20498_22332[(2)] = null);

(statearr_20498_22332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20494 === (2))){
var state_20493__$1 = state_20493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20493__$1,(4),jobs);
} else {
if((state_val_20494 === (3))){
var inst_20491 = (state_20493[(2)]);
var state_20493__$1 = state_20493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20493__$1,inst_20491);
} else {
if((state_val_20494 === (4))){
var inst_20483 = (state_20493[(2)]);
var inst_20484 = async(inst_20483);
var state_20493__$1 = state_20493;
if(cljs.core.truth_(inst_20484)){
var statearr_20499_22334 = state_20493__$1;
(statearr_20499_22334[(1)] = (5));

} else {
var statearr_20500_22335 = state_20493__$1;
(statearr_20500_22335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20494 === (5))){
var state_20493__$1 = state_20493;
var statearr_20501_22337 = state_20493__$1;
(statearr_20501_22337[(2)] = null);

(statearr_20501_22337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20494 === (6))){
var state_20493__$1 = state_20493;
var statearr_20502_22338 = state_20493__$1;
(statearr_20502_22338[(2)] = null);

(statearr_20502_22338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20494 === (7))){
var inst_20489 = (state_20493[(2)]);
var state_20493__$1 = state_20493;
var statearr_20503_22339 = state_20493__$1;
(statearr_20503_22339[(2)] = inst_20489);

(statearr_20503_22339[(1)] = (3));


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
});})(__22316,c__20175__auto___22331,G__20438_22317,G__20438_22318__$1,n__5741__auto___22315,jobs,results,process__$1,async))
;
return ((function (__22316,switch__19781__auto__,c__20175__auto___22331,G__20438_22317,G__20438_22318__$1,n__5741__auto___22315,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____0 = (function (){
var statearr_20504 = [null,null,null,null,null,null,null];
(statearr_20504[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__);

(statearr_20504[(1)] = (1));

return statearr_20504;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____1 = (function (state_20493){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_20493);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e20505){var ex__19785__auto__ = e20505;
var statearr_20506_22340 = state_20493;
(statearr_20506_22340[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_20493[(4)]))){
var statearr_20507_22341 = state_20493;
(statearr_20507_22341[(1)] = cljs.core.first((state_20493[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22342 = state_20493;
state_20493 = G__22342;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__ = function(state_20493){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____1.call(this,state_20493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__;
})()
;})(__22316,switch__19781__auto__,c__20175__auto___22331,G__20438_22317,G__20438_22318__$1,n__5741__auto___22315,jobs,results,process__$1,async))
})();
var state__20177__auto__ = (function (){var statearr_20508 = f__20176__auto__();
(statearr_20508[(6)] = c__20175__auto___22331);

return statearr_20508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
});})(__22316,c__20175__auto___22331,G__20438_22317,G__20438_22318__$1,n__5741__auto___22315,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20438_22318__$1))));

}

var G__22343 = (__22316 + (1));
__22316 = G__22343;
continue;
} else {
}
break;
}

var c__20175__auto___22345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_20536){
var state_val_20537 = (state_20536[(1)]);
if((state_val_20537 === (7))){
var inst_20532 = (state_20536[(2)]);
var state_20536__$1 = state_20536;
var statearr_20544_22346 = state_20536__$1;
(statearr_20544_22346[(2)] = inst_20532);

(statearr_20544_22346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20537 === (1))){
var state_20536__$1 = state_20536;
var statearr_20545_22347 = state_20536__$1;
(statearr_20545_22347[(2)] = null);

(statearr_20545_22347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20537 === (4))){
var inst_20517 = (state_20536[(7)]);
var inst_20517__$1 = (state_20536[(2)]);
var inst_20518 = (inst_20517__$1 == null);
var state_20536__$1 = (function (){var statearr_20546 = state_20536;
(statearr_20546[(7)] = inst_20517__$1);

return statearr_20546;
})();
if(cljs.core.truth_(inst_20518)){
var statearr_20547_22348 = state_20536__$1;
(statearr_20547_22348[(1)] = (5));

} else {
var statearr_20548_22349 = state_20536__$1;
(statearr_20548_22349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20537 === (6))){
var inst_20517 = (state_20536[(7)]);
var inst_20522 = (state_20536[(8)]);
var inst_20522__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_20523 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20524 = [inst_20517,inst_20522__$1];
var inst_20525 = (new cljs.core.PersistentVector(null,2,(5),inst_20523,inst_20524,null));
var state_20536__$1 = (function (){var statearr_20549 = state_20536;
(statearr_20549[(8)] = inst_20522__$1);

return statearr_20549;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20536__$1,(8),jobs,inst_20525);
} else {
if((state_val_20537 === (3))){
var inst_20534 = (state_20536[(2)]);
var state_20536__$1 = state_20536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20536__$1,inst_20534);
} else {
if((state_val_20537 === (2))){
var state_20536__$1 = state_20536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20536__$1,(4),from);
} else {
if((state_val_20537 === (9))){
var inst_20529 = (state_20536[(2)]);
var state_20536__$1 = (function (){var statearr_20553 = state_20536;
(statearr_20553[(9)] = inst_20529);

return statearr_20553;
})();
var statearr_20557_22350 = state_20536__$1;
(statearr_20557_22350[(2)] = null);

(statearr_20557_22350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20537 === (5))){
var inst_20520 = cljs.core.async.close_BANG_(jobs);
var state_20536__$1 = state_20536;
var statearr_20558_22351 = state_20536__$1;
(statearr_20558_22351[(2)] = inst_20520);

(statearr_20558_22351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20537 === (8))){
var inst_20522 = (state_20536[(8)]);
var inst_20527 = (state_20536[(2)]);
var state_20536__$1 = (function (){var statearr_20559 = state_20536;
(statearr_20559[(10)] = inst_20527);

return statearr_20559;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20536__$1,(9),results,inst_20522);
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
var cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____0 = (function (){
var statearr_20560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20560[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__);

(statearr_20560[(1)] = (1));

return statearr_20560;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____1 = (function (state_20536){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_20536);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e20561){var ex__19785__auto__ = e20561;
var statearr_20562_22354 = state_20536;
(statearr_20562_22354[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_20536[(4)]))){
var statearr_20563_22355 = state_20536;
(statearr_20563_22355[(1)] = cljs.core.first((state_20536[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22356 = state_20536;
state_20536 = G__22356;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__ = function(state_20536){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____1.call(this,state_20536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_20566 = f__20176__auto__();
(statearr_20566[(6)] = c__20175__auto___22345);

return statearr_20566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
}));


var c__20175__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_20606){
var state_val_20607 = (state_20606[(1)]);
if((state_val_20607 === (7))){
var inst_20602 = (state_20606[(2)]);
var state_20606__$1 = state_20606;
var statearr_20608_22360 = state_20606__$1;
(statearr_20608_22360[(2)] = inst_20602);

(statearr_20608_22360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20607 === (20))){
var state_20606__$1 = state_20606;
var statearr_20609_22361 = state_20606__$1;
(statearr_20609_22361[(2)] = null);

(statearr_20609_22361[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20607 === (1))){
var state_20606__$1 = state_20606;
var statearr_20611_22362 = state_20606__$1;
(statearr_20611_22362[(2)] = null);

(statearr_20611_22362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20607 === (4))){
var inst_20571 = (state_20606[(7)]);
var inst_20571__$1 = (state_20606[(2)]);
var inst_20572 = (inst_20571__$1 == null);
var state_20606__$1 = (function (){var statearr_20612 = state_20606;
(statearr_20612[(7)] = inst_20571__$1);

return statearr_20612;
})();
if(cljs.core.truth_(inst_20572)){
var statearr_20613_22363 = state_20606__$1;
(statearr_20613_22363[(1)] = (5));

} else {
var statearr_20614_22364 = state_20606__$1;
(statearr_20614_22364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20607 === (15))){
var inst_20584 = (state_20606[(8)]);
var state_20606__$1 = state_20606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20606__$1,(18),to,inst_20584);
} else {
if((state_val_20607 === (21))){
var inst_20597 = (state_20606[(2)]);
var state_20606__$1 = state_20606;
var statearr_20615_22365 = state_20606__$1;
(statearr_20615_22365[(2)] = inst_20597);

(statearr_20615_22365[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20607 === (13))){
var inst_20599 = (state_20606[(2)]);
var state_20606__$1 = (function (){var statearr_20616 = state_20606;
(statearr_20616[(9)] = inst_20599);

return statearr_20616;
})();
var statearr_20617_22366 = state_20606__$1;
(statearr_20617_22366[(2)] = null);

(statearr_20617_22366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20607 === (6))){
var inst_20571 = (state_20606[(7)]);
var state_20606__$1 = state_20606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20606__$1,(11),inst_20571);
} else {
if((state_val_20607 === (17))){
var inst_20592 = (state_20606[(2)]);
var state_20606__$1 = state_20606;
if(cljs.core.truth_(inst_20592)){
var statearr_20618_22367 = state_20606__$1;
(statearr_20618_22367[(1)] = (19));

} else {
var statearr_20619_22368 = state_20606__$1;
(statearr_20619_22368[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20607 === (3))){
var inst_20604 = (state_20606[(2)]);
var state_20606__$1 = state_20606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20606__$1,inst_20604);
} else {
if((state_val_20607 === (12))){
var inst_20581 = (state_20606[(10)]);
var state_20606__$1 = state_20606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20606__$1,(14),inst_20581);
} else {
if((state_val_20607 === (2))){
var state_20606__$1 = state_20606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20606__$1,(4),results);
} else {
if((state_val_20607 === (19))){
var state_20606__$1 = state_20606;
var statearr_20620_22369 = state_20606__$1;
(statearr_20620_22369[(2)] = null);

(statearr_20620_22369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20607 === (11))){
var inst_20581 = (state_20606[(2)]);
var state_20606__$1 = (function (){var statearr_20621 = state_20606;
(statearr_20621[(10)] = inst_20581);

return statearr_20621;
})();
var statearr_20622_22370 = state_20606__$1;
(statearr_20622_22370[(2)] = null);

(statearr_20622_22370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20607 === (9))){
var state_20606__$1 = state_20606;
var statearr_20623_22371 = state_20606__$1;
(statearr_20623_22371[(2)] = null);

(statearr_20623_22371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20607 === (5))){
var state_20606__$1 = state_20606;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20625_22372 = state_20606__$1;
(statearr_20625_22372[(1)] = (8));

} else {
var statearr_20626_22373 = state_20606__$1;
(statearr_20626_22373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20607 === (14))){
var inst_20584 = (state_20606[(8)]);
var inst_20586 = (state_20606[(11)]);
var inst_20584__$1 = (state_20606[(2)]);
var inst_20585 = (inst_20584__$1 == null);
var inst_20586__$1 = cljs.core.not(inst_20585);
var state_20606__$1 = (function (){var statearr_20627 = state_20606;
(statearr_20627[(8)] = inst_20584__$1);

(statearr_20627[(11)] = inst_20586__$1);

return statearr_20627;
})();
if(inst_20586__$1){
var statearr_20628_22374 = state_20606__$1;
(statearr_20628_22374[(1)] = (15));

} else {
var statearr_20629_22375 = state_20606__$1;
(statearr_20629_22375[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20607 === (16))){
var inst_20586 = (state_20606[(11)]);
var state_20606__$1 = state_20606;
var statearr_20630_22376 = state_20606__$1;
(statearr_20630_22376[(2)] = inst_20586);

(statearr_20630_22376[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20607 === (10))){
var inst_20578 = (state_20606[(2)]);
var state_20606__$1 = state_20606;
var statearr_20632_22377 = state_20606__$1;
(statearr_20632_22377[(2)] = inst_20578);

(statearr_20632_22377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20607 === (18))){
var inst_20589 = (state_20606[(2)]);
var state_20606__$1 = state_20606;
var statearr_20633_22378 = state_20606__$1;
(statearr_20633_22378[(2)] = inst_20589);

(statearr_20633_22378[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20607 === (8))){
var inst_20575 = cljs.core.async.close_BANG_(to);
var state_20606__$1 = state_20606;
var statearr_20635_22379 = state_20606__$1;
(statearr_20635_22379[(2)] = inst_20575);

(statearr_20635_22379[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____0 = (function (){
var statearr_20636 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__);

(statearr_20636[(1)] = (1));

return statearr_20636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____1 = (function (state_20606){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_20606);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e20637){var ex__19785__auto__ = e20637;
var statearr_20638_22380 = state_20606;
(statearr_20638_22380[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_20606[(4)]))){
var statearr_20639_22381 = state_20606;
(statearr_20639_22381[(1)] = cljs.core.first((state_20606[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22382 = state_20606;
state_20606 = G__22382;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__ = function(state_20606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____1.call(this,state_20606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19782__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_20640 = f__20176__auto__();
(statearr_20640[(6)] = c__20175__auto__);

return statearr_20640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
}));

return c__20175__auto__;
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
var G__20643 = arguments.length;
switch (G__20643) {
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
var G__20649 = arguments.length;
switch (G__20649) {
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
var G__20654 = arguments.length;
switch (G__20654) {
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
var c__20175__auto___22389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_20692){
var state_val_20693 = (state_20692[(1)]);
if((state_val_20693 === (7))){
var inst_20684 = (state_20692[(2)]);
var state_20692__$1 = state_20692;
var statearr_20694_22390 = state_20692__$1;
(statearr_20694_22390[(2)] = inst_20684);

(statearr_20694_22390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20693 === (1))){
var state_20692__$1 = state_20692;
var statearr_20695_22391 = state_20692__$1;
(statearr_20695_22391[(2)] = null);

(statearr_20695_22391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20693 === (4))){
var inst_20657 = (state_20692[(7)]);
var inst_20657__$1 = (state_20692[(2)]);
var inst_20662 = (inst_20657__$1 == null);
var state_20692__$1 = (function (){var statearr_20696 = state_20692;
(statearr_20696[(7)] = inst_20657__$1);

return statearr_20696;
})();
if(cljs.core.truth_(inst_20662)){
var statearr_20697_22392 = state_20692__$1;
(statearr_20697_22392[(1)] = (5));

} else {
var statearr_20698_22393 = state_20692__$1;
(statearr_20698_22393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20693 === (13))){
var state_20692__$1 = state_20692;
var statearr_20699_22394 = state_20692__$1;
(statearr_20699_22394[(2)] = null);

(statearr_20699_22394[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20693 === (6))){
var inst_20657 = (state_20692[(7)]);
var inst_20671 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20657) : p.call(null,inst_20657));
var state_20692__$1 = state_20692;
if(cljs.core.truth_(inst_20671)){
var statearr_20700_22395 = state_20692__$1;
(statearr_20700_22395[(1)] = (9));

} else {
var statearr_20701_22396 = state_20692__$1;
(statearr_20701_22396[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20693 === (3))){
var inst_20686 = (state_20692[(2)]);
var state_20692__$1 = state_20692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20692__$1,inst_20686);
} else {
if((state_val_20693 === (12))){
var state_20692__$1 = state_20692;
var statearr_20702_22401 = state_20692__$1;
(statearr_20702_22401[(2)] = null);

(statearr_20702_22401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20693 === (2))){
var state_20692__$1 = state_20692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20692__$1,(4),ch);
} else {
if((state_val_20693 === (11))){
var inst_20657 = (state_20692[(7)]);
var inst_20675 = (state_20692[(2)]);
var state_20692__$1 = state_20692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20692__$1,(8),inst_20675,inst_20657);
} else {
if((state_val_20693 === (9))){
var state_20692__$1 = state_20692;
var statearr_20705_22402 = state_20692__$1;
(statearr_20705_22402[(2)] = tc);

(statearr_20705_22402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20693 === (5))){
var inst_20664 = cljs.core.async.close_BANG_(tc);
var inst_20665 = cljs.core.async.close_BANG_(fc);
var state_20692__$1 = (function (){var statearr_20707 = state_20692;
(statearr_20707[(8)] = inst_20664);

return statearr_20707;
})();
var statearr_20708_22403 = state_20692__$1;
(statearr_20708_22403[(2)] = inst_20665);

(statearr_20708_22403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20693 === (14))){
var inst_20682 = (state_20692[(2)]);
var state_20692__$1 = state_20692;
var statearr_20709_22404 = state_20692__$1;
(statearr_20709_22404[(2)] = inst_20682);

(statearr_20709_22404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20693 === (10))){
var state_20692__$1 = state_20692;
var statearr_20712_22405 = state_20692__$1;
(statearr_20712_22405[(2)] = fc);

(statearr_20712_22405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20693 === (8))){
var inst_20677 = (state_20692[(2)]);
var state_20692__$1 = state_20692;
if(cljs.core.truth_(inst_20677)){
var statearr_20713_22406 = state_20692__$1;
(statearr_20713_22406[(1)] = (12));

} else {
var statearr_20716_22407 = state_20692__$1;
(statearr_20716_22407[(1)] = (13));

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
var cljs$core$async$state_machine__19782__auto__ = null;
var cljs$core$async$state_machine__19782__auto____0 = (function (){
var statearr_20719 = [null,null,null,null,null,null,null,null,null];
(statearr_20719[(0)] = cljs$core$async$state_machine__19782__auto__);

(statearr_20719[(1)] = (1));

return statearr_20719;
});
var cljs$core$async$state_machine__19782__auto____1 = (function (state_20692){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_20692);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e20720){var ex__19785__auto__ = e20720;
var statearr_20721_22408 = state_20692;
(statearr_20721_22408[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_20692[(4)]))){
var statearr_20724_22409 = state_20692;
(statearr_20724_22409[(1)] = cljs.core.first((state_20692[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22410 = state_20692;
state_20692 = G__22410;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$state_machine__19782__auto__ = function(state_20692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19782__auto____1.call(this,state_20692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19782__auto____0;
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19782__auto____1;
return cljs$core$async$state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_20725 = f__20176__auto__();
(statearr_20725[(6)] = c__20175__auto___22389);

return statearr_20725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
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
var c__20175__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_20747){
var state_val_20748 = (state_20747[(1)]);
if((state_val_20748 === (7))){
var inst_20743 = (state_20747[(2)]);
var state_20747__$1 = state_20747;
var statearr_20750_22411 = state_20747__$1;
(statearr_20750_22411[(2)] = inst_20743);

(statearr_20750_22411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20748 === (1))){
var inst_20726 = init;
var inst_20727 = inst_20726;
var state_20747__$1 = (function (){var statearr_20751 = state_20747;
(statearr_20751[(7)] = inst_20727);

return statearr_20751;
})();
var statearr_20752_22412 = state_20747__$1;
(statearr_20752_22412[(2)] = null);

(statearr_20752_22412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20748 === (4))){
var inst_20730 = (state_20747[(8)]);
var inst_20730__$1 = (state_20747[(2)]);
var inst_20731 = (inst_20730__$1 == null);
var state_20747__$1 = (function (){var statearr_20755 = state_20747;
(statearr_20755[(8)] = inst_20730__$1);

return statearr_20755;
})();
if(cljs.core.truth_(inst_20731)){
var statearr_20756_22413 = state_20747__$1;
(statearr_20756_22413[(1)] = (5));

} else {
var statearr_20757_22414 = state_20747__$1;
(statearr_20757_22414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20748 === (6))){
var inst_20727 = (state_20747[(7)]);
var inst_20730 = (state_20747[(8)]);
var inst_20734 = (state_20747[(9)]);
var inst_20734__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_20727,inst_20730) : f.call(null,inst_20727,inst_20730));
var inst_20735 = cljs.core.reduced_QMARK_(inst_20734__$1);
var state_20747__$1 = (function (){var statearr_20759 = state_20747;
(statearr_20759[(9)] = inst_20734__$1);

return statearr_20759;
})();
if(inst_20735){
var statearr_20761_22415 = state_20747__$1;
(statearr_20761_22415[(1)] = (8));

} else {
var statearr_20762_22416 = state_20747__$1;
(statearr_20762_22416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20748 === (3))){
var inst_20745 = (state_20747[(2)]);
var state_20747__$1 = state_20747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20747__$1,inst_20745);
} else {
if((state_val_20748 === (2))){
var state_20747__$1 = state_20747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20747__$1,(4),ch);
} else {
if((state_val_20748 === (9))){
var inst_20734 = (state_20747[(9)]);
var inst_20727 = inst_20734;
var state_20747__$1 = (function (){var statearr_20763 = state_20747;
(statearr_20763[(7)] = inst_20727);

return statearr_20763;
})();
var statearr_20764_22417 = state_20747__$1;
(statearr_20764_22417[(2)] = null);

(statearr_20764_22417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20748 === (5))){
var inst_20727 = (state_20747[(7)]);
var state_20747__$1 = state_20747;
var statearr_20765_22418 = state_20747__$1;
(statearr_20765_22418[(2)] = inst_20727);

(statearr_20765_22418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20748 === (10))){
var inst_20741 = (state_20747[(2)]);
var state_20747__$1 = state_20747;
var statearr_20766_22419 = state_20747__$1;
(statearr_20766_22419[(2)] = inst_20741);

(statearr_20766_22419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20748 === (8))){
var inst_20734 = (state_20747[(9)]);
var inst_20737 = cljs.core.deref(inst_20734);
var state_20747__$1 = state_20747;
var statearr_20767_22420 = state_20747__$1;
(statearr_20767_22420[(2)] = inst_20737);

(statearr_20767_22420[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__19782__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19782__auto____0 = (function (){
var statearr_20768 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20768[(0)] = cljs$core$async$reduce_$_state_machine__19782__auto__);

(statearr_20768[(1)] = (1));

return statearr_20768;
});
var cljs$core$async$reduce_$_state_machine__19782__auto____1 = (function (state_20747){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_20747);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e20769){var ex__19785__auto__ = e20769;
var statearr_20770_22425 = state_20747;
(statearr_20770_22425[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_20747[(4)]))){
var statearr_20771_22426 = state_20747;
(statearr_20771_22426[(1)] = cljs.core.first((state_20747[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22427 = state_20747;
state_20747 = G__22427;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19782__auto__ = function(state_20747){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19782__auto____1.call(this,state_20747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19782__auto____0;
cljs$core$async$reduce_$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19782__auto____1;
return cljs$core$async$reduce_$_state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_20772 = f__20176__auto__();
(statearr_20772[(6)] = c__20175__auto__);

return statearr_20772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
}));

return c__20175__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__20175__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_20778){
var state_val_20779 = (state_20778[(1)]);
if((state_val_20779 === (1))){
var inst_20773 = cljs.core.async.reduce(f__$1,init,ch);
var state_20778__$1 = state_20778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20778__$1,(2),inst_20773);
} else {
if((state_val_20779 === (2))){
var inst_20775 = (state_20778[(2)]);
var inst_20776 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_20775) : f__$1.call(null,inst_20775));
var state_20778__$1 = state_20778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20778__$1,inst_20776);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__19782__auto__ = null;
var cljs$core$async$transduce_$_state_machine__19782__auto____0 = (function (){
var statearr_20782 = [null,null,null,null,null,null,null];
(statearr_20782[(0)] = cljs$core$async$transduce_$_state_machine__19782__auto__);

(statearr_20782[(1)] = (1));

return statearr_20782;
});
var cljs$core$async$transduce_$_state_machine__19782__auto____1 = (function (state_20778){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_20778);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e20784){var ex__19785__auto__ = e20784;
var statearr_20785_22428 = state_20778;
(statearr_20785_22428[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_20778[(4)]))){
var statearr_20786_22429 = state_20778;
(statearr_20786_22429[(1)] = cljs.core.first((state_20778[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22430 = state_20778;
state_20778 = G__22430;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__19782__auto__ = function(state_20778){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__19782__auto____1.call(this,state_20778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__19782__auto____0;
cljs$core$async$transduce_$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__19782__auto____1;
return cljs$core$async$transduce_$_state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_20787 = f__20176__auto__();
(statearr_20787[(6)] = c__20175__auto__);

return statearr_20787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
}));

return c__20175__auto__;
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
var G__20789 = arguments.length;
switch (G__20789) {
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
var c__20175__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_20815){
var state_val_20816 = (state_20815[(1)]);
if((state_val_20816 === (7))){
var inst_20796 = (state_20815[(2)]);
var state_20815__$1 = state_20815;
var statearr_20817_22432 = state_20815__$1;
(statearr_20817_22432[(2)] = inst_20796);

(statearr_20817_22432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (1))){
var inst_20790 = cljs.core.seq(coll);
var inst_20791 = inst_20790;
var state_20815__$1 = (function (){var statearr_20820 = state_20815;
(statearr_20820[(7)] = inst_20791);

return statearr_20820;
})();
var statearr_20822_22433 = state_20815__$1;
(statearr_20822_22433[(2)] = null);

(statearr_20822_22433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (4))){
var inst_20791 = (state_20815[(7)]);
var inst_20794 = cljs.core.first(inst_20791);
var state_20815__$1 = state_20815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20815__$1,(7),ch,inst_20794);
} else {
if((state_val_20816 === (13))){
var inst_20809 = (state_20815[(2)]);
var state_20815__$1 = state_20815;
var statearr_20823_22434 = state_20815__$1;
(statearr_20823_22434[(2)] = inst_20809);

(statearr_20823_22434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (6))){
var inst_20799 = (state_20815[(2)]);
var state_20815__$1 = state_20815;
if(cljs.core.truth_(inst_20799)){
var statearr_20824_22435 = state_20815__$1;
(statearr_20824_22435[(1)] = (8));

} else {
var statearr_20825_22436 = state_20815__$1;
(statearr_20825_22436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (3))){
var inst_20813 = (state_20815[(2)]);
var state_20815__$1 = state_20815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20815__$1,inst_20813);
} else {
if((state_val_20816 === (12))){
var state_20815__$1 = state_20815;
var statearr_20826_22437 = state_20815__$1;
(statearr_20826_22437[(2)] = null);

(statearr_20826_22437[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (2))){
var inst_20791 = (state_20815[(7)]);
var state_20815__$1 = state_20815;
if(cljs.core.truth_(inst_20791)){
var statearr_20827_22438 = state_20815__$1;
(statearr_20827_22438[(1)] = (4));

} else {
var statearr_20828_22439 = state_20815__$1;
(statearr_20828_22439[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (11))){
var inst_20806 = cljs.core.async.close_BANG_(ch);
var state_20815__$1 = state_20815;
var statearr_20829_22443 = state_20815__$1;
(statearr_20829_22443[(2)] = inst_20806);

(statearr_20829_22443[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (9))){
var state_20815__$1 = state_20815;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20830_22444 = state_20815__$1;
(statearr_20830_22444[(1)] = (11));

} else {
var statearr_20831_22445 = state_20815__$1;
(statearr_20831_22445[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (5))){
var inst_20791 = (state_20815[(7)]);
var state_20815__$1 = state_20815;
var statearr_20832_22446 = state_20815__$1;
(statearr_20832_22446[(2)] = inst_20791);

(statearr_20832_22446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (10))){
var inst_20811 = (state_20815[(2)]);
var state_20815__$1 = state_20815;
var statearr_20833_22447 = state_20815__$1;
(statearr_20833_22447[(2)] = inst_20811);

(statearr_20833_22447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (8))){
var inst_20791 = (state_20815[(7)]);
var inst_20802 = cljs.core.next(inst_20791);
var inst_20791__$1 = inst_20802;
var state_20815__$1 = (function (){var statearr_20834 = state_20815;
(statearr_20834[(7)] = inst_20791__$1);

return statearr_20834;
})();
var statearr_20835_22448 = state_20815__$1;
(statearr_20835_22448[(2)] = null);

(statearr_20835_22448[(1)] = (2));


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
var cljs$core$async$state_machine__19782__auto__ = null;
var cljs$core$async$state_machine__19782__auto____0 = (function (){
var statearr_20836 = [null,null,null,null,null,null,null,null];
(statearr_20836[(0)] = cljs$core$async$state_machine__19782__auto__);

(statearr_20836[(1)] = (1));

return statearr_20836;
});
var cljs$core$async$state_machine__19782__auto____1 = (function (state_20815){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_20815);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e20838){var ex__19785__auto__ = e20838;
var statearr_20839_22449 = state_20815;
(statearr_20839_22449[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_20815[(4)]))){
var statearr_20840_22450 = state_20815;
(statearr_20840_22450[(1)] = cljs.core.first((state_20815[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22451 = state_20815;
state_20815 = G__22451;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$state_machine__19782__auto__ = function(state_20815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19782__auto____1.call(this,state_20815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19782__auto____0;
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19782__auto____1;
return cljs$core$async$state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_20841 = f__20176__auto__();
(statearr_20841[(6)] = c__20175__auto__);

return statearr_20841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
}));

return c__20175__auto__;
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
var G__20843 = arguments.length;
switch (G__20843) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_22453 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_22453(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_22457 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_22457(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_22458 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_22458(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_22459 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_22459(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20874 = (function (ch,cs,meta20875){
this.ch = ch;
this.cs = cs;
this.meta20875 = meta20875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20876,meta20875__$1){
var self__ = this;
var _20876__$1 = this;
return (new cljs.core.async.t_cljs$core$async20874(self__.ch,self__.cs,meta20875__$1));
}));

(cljs.core.async.t_cljs$core$async20874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20876){
var self__ = this;
var _20876__$1 = this;
return self__.meta20875;
}));

(cljs.core.async.t_cljs$core$async20874.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async20874.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20874.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async20874.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async20874.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async20874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20875","meta20875",647758389,null)], null);
}));

(cljs.core.async.t_cljs$core$async20874.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20874");

(cljs.core.async.t_cljs$core$async20874.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async20874");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20874.
 */
cljs.core.async.__GT_t_cljs$core$async20874 = (function cljs$core$async$__GT_t_cljs$core$async20874(ch,cs,meta20875){
return (new cljs.core.async.t_cljs$core$async20874(ch,cs,meta20875));
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
var m = (new cljs.core.async.t_cljs$core$async20874(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__20175__auto___22463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_21028){
var state_val_21029 = (state_21028[(1)]);
if((state_val_21029 === (7))){
var inst_21022 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21033_22464 = state_21028__$1;
(statearr_21033_22464[(2)] = inst_21022);

(statearr_21033_22464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (20))){
var inst_20925 = (state_21028[(7)]);
var inst_20939 = cljs.core.first(inst_20925);
var inst_20940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20939,(0),null);
var inst_20941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20939,(1),null);
var state_21028__$1 = (function (){var statearr_21035 = state_21028;
(statearr_21035[(8)] = inst_20940);

return statearr_21035;
})();
if(cljs.core.truth_(inst_20941)){
var statearr_21036_22465 = state_21028__$1;
(statearr_21036_22465[(1)] = (22));

} else {
var statearr_21037_22466 = state_21028__$1;
(statearr_21037_22466[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (27))){
var inst_20969 = (state_21028[(9)]);
var inst_20971 = (state_21028[(10)]);
var inst_20976 = (state_21028[(11)]);
var inst_20894 = (state_21028[(12)]);
var inst_20976__$1 = cljs.core._nth(inst_20969,inst_20971);
var inst_20977 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_20976__$1,inst_20894,done);
var state_21028__$1 = (function (){var statearr_21040 = state_21028;
(statearr_21040[(11)] = inst_20976__$1);

return statearr_21040;
})();
if(cljs.core.truth_(inst_20977)){
var statearr_21041_22467 = state_21028__$1;
(statearr_21041_22467[(1)] = (30));

} else {
var statearr_21042_22468 = state_21028__$1;
(statearr_21042_22468[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (1))){
var state_21028__$1 = state_21028;
var statearr_21043_22469 = state_21028__$1;
(statearr_21043_22469[(2)] = null);

(statearr_21043_22469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (24))){
var inst_20925 = (state_21028[(7)]);
var inst_20946 = (state_21028[(2)]);
var inst_20947 = cljs.core.next(inst_20925);
var inst_20903 = inst_20947;
var inst_20904 = null;
var inst_20905 = (0);
var inst_20906 = (0);
var state_21028__$1 = (function (){var statearr_21048 = state_21028;
(statearr_21048[(13)] = inst_20946);

(statearr_21048[(14)] = inst_20903);

(statearr_21048[(15)] = inst_20904);

(statearr_21048[(16)] = inst_20905);

(statearr_21048[(17)] = inst_20906);

return statearr_21048;
})();
var statearr_21053_22470 = state_21028__$1;
(statearr_21053_22470[(2)] = null);

(statearr_21053_22470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (39))){
var state_21028__$1 = state_21028;
var statearr_21061_22471 = state_21028__$1;
(statearr_21061_22471[(2)] = null);

(statearr_21061_22471[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (4))){
var inst_20894 = (state_21028[(12)]);
var inst_20894__$1 = (state_21028[(2)]);
var inst_20895 = (inst_20894__$1 == null);
var state_21028__$1 = (function (){var statearr_21062 = state_21028;
(statearr_21062[(12)] = inst_20894__$1);

return statearr_21062;
})();
if(cljs.core.truth_(inst_20895)){
var statearr_21063_22472 = state_21028__$1;
(statearr_21063_22472[(1)] = (5));

} else {
var statearr_21064_22473 = state_21028__$1;
(statearr_21064_22473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (15))){
var inst_20906 = (state_21028[(17)]);
var inst_20903 = (state_21028[(14)]);
var inst_20904 = (state_21028[(15)]);
var inst_20905 = (state_21028[(16)]);
var inst_20921 = (state_21028[(2)]);
var inst_20922 = (inst_20906 + (1));
var tmp21058 = inst_20903;
var tmp21059 = inst_20905;
var tmp21060 = inst_20904;
var inst_20903__$1 = tmp21058;
var inst_20904__$1 = tmp21060;
var inst_20905__$1 = tmp21059;
var inst_20906__$1 = inst_20922;
var state_21028__$1 = (function (){var statearr_21065 = state_21028;
(statearr_21065[(18)] = inst_20921);

(statearr_21065[(14)] = inst_20903__$1);

(statearr_21065[(15)] = inst_20904__$1);

(statearr_21065[(16)] = inst_20905__$1);

(statearr_21065[(17)] = inst_20906__$1);

return statearr_21065;
})();
var statearr_21066_22474 = state_21028__$1;
(statearr_21066_22474[(2)] = null);

(statearr_21066_22474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (21))){
var inst_20950 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21071_22475 = state_21028__$1;
(statearr_21071_22475[(2)] = inst_20950);

(statearr_21071_22475[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (31))){
var inst_20976 = (state_21028[(11)]);
var inst_20980 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_20976);
var state_21028__$1 = state_21028;
var statearr_21072_22476 = state_21028__$1;
(statearr_21072_22476[(2)] = inst_20980);

(statearr_21072_22476[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (32))){
var inst_20971 = (state_21028[(10)]);
var inst_20968 = (state_21028[(19)]);
var inst_20969 = (state_21028[(9)]);
var inst_20970 = (state_21028[(20)]);
var inst_20982 = (state_21028[(2)]);
var inst_20983 = (inst_20971 + (1));
var tmp21068 = inst_20968;
var tmp21069 = inst_20969;
var tmp21070 = inst_20970;
var inst_20968__$1 = tmp21068;
var inst_20969__$1 = tmp21069;
var inst_20970__$1 = tmp21070;
var inst_20971__$1 = inst_20983;
var state_21028__$1 = (function (){var statearr_21073 = state_21028;
(statearr_21073[(21)] = inst_20982);

(statearr_21073[(19)] = inst_20968__$1);

(statearr_21073[(9)] = inst_20969__$1);

(statearr_21073[(20)] = inst_20970__$1);

(statearr_21073[(10)] = inst_20971__$1);

return statearr_21073;
})();
var statearr_21076_22477 = state_21028__$1;
(statearr_21076_22477[(2)] = null);

(statearr_21076_22477[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (40))){
var inst_20995 = (state_21028[(22)]);
var inst_20999 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_20995);
var state_21028__$1 = state_21028;
var statearr_21079_22478 = state_21028__$1;
(statearr_21079_22478[(2)] = inst_20999);

(statearr_21079_22478[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (33))){
var inst_20986 = (state_21028[(23)]);
var inst_20988 = cljs.core.chunked_seq_QMARK_(inst_20986);
var state_21028__$1 = state_21028;
if(inst_20988){
var statearr_21085_22479 = state_21028__$1;
(statearr_21085_22479[(1)] = (36));

} else {
var statearr_21086_22480 = state_21028__$1;
(statearr_21086_22480[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (13))){
var inst_20915 = (state_21028[(24)]);
var inst_20918 = cljs.core.async.close_BANG_(inst_20915);
var state_21028__$1 = state_21028;
var statearr_21088_22481 = state_21028__$1;
(statearr_21088_22481[(2)] = inst_20918);

(statearr_21088_22481[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (22))){
var inst_20940 = (state_21028[(8)]);
var inst_20943 = cljs.core.async.close_BANG_(inst_20940);
var state_21028__$1 = state_21028;
var statearr_21089_22482 = state_21028__$1;
(statearr_21089_22482[(2)] = inst_20943);

(statearr_21089_22482[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (36))){
var inst_20986 = (state_21028[(23)]);
var inst_20990 = cljs.core.chunk_first(inst_20986);
var inst_20991 = cljs.core.chunk_rest(inst_20986);
var inst_20992 = cljs.core.count(inst_20990);
var inst_20968 = inst_20991;
var inst_20969 = inst_20990;
var inst_20970 = inst_20992;
var inst_20971 = (0);
var state_21028__$1 = (function (){var statearr_21091 = state_21028;
(statearr_21091[(19)] = inst_20968);

(statearr_21091[(9)] = inst_20969);

(statearr_21091[(20)] = inst_20970);

(statearr_21091[(10)] = inst_20971);

return statearr_21091;
})();
var statearr_21092_22483 = state_21028__$1;
(statearr_21092_22483[(2)] = null);

(statearr_21092_22483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (41))){
var inst_20986 = (state_21028[(23)]);
var inst_21001 = (state_21028[(2)]);
var inst_21002 = cljs.core.next(inst_20986);
var inst_20968 = inst_21002;
var inst_20969 = null;
var inst_20970 = (0);
var inst_20971 = (0);
var state_21028__$1 = (function (){var statearr_21093 = state_21028;
(statearr_21093[(25)] = inst_21001);

(statearr_21093[(19)] = inst_20968);

(statearr_21093[(9)] = inst_20969);

(statearr_21093[(20)] = inst_20970);

(statearr_21093[(10)] = inst_20971);

return statearr_21093;
})();
var statearr_21094_22484 = state_21028__$1;
(statearr_21094_22484[(2)] = null);

(statearr_21094_22484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (43))){
var state_21028__$1 = state_21028;
var statearr_21095_22485 = state_21028__$1;
(statearr_21095_22485[(2)] = null);

(statearr_21095_22485[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (29))){
var inst_21010 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21100_22486 = state_21028__$1;
(statearr_21100_22486[(2)] = inst_21010);

(statearr_21100_22486[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (44))){
var inst_21019 = (state_21028[(2)]);
var state_21028__$1 = (function (){var statearr_21109 = state_21028;
(statearr_21109[(26)] = inst_21019);

return statearr_21109;
})();
var statearr_21110_22487 = state_21028__$1;
(statearr_21110_22487[(2)] = null);

(statearr_21110_22487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (6))){
var inst_20960 = (state_21028[(27)]);
var inst_20959 = cljs.core.deref(cs);
var inst_20960__$1 = cljs.core.keys(inst_20959);
var inst_20961 = cljs.core.count(inst_20960__$1);
var inst_20962 = cljs.core.reset_BANG_(dctr,inst_20961);
var inst_20967 = cljs.core.seq(inst_20960__$1);
var inst_20968 = inst_20967;
var inst_20969 = null;
var inst_20970 = (0);
var inst_20971 = (0);
var state_21028__$1 = (function (){var statearr_21111 = state_21028;
(statearr_21111[(27)] = inst_20960__$1);

(statearr_21111[(28)] = inst_20962);

(statearr_21111[(19)] = inst_20968);

(statearr_21111[(9)] = inst_20969);

(statearr_21111[(20)] = inst_20970);

(statearr_21111[(10)] = inst_20971);

return statearr_21111;
})();
var statearr_21112_22488 = state_21028__$1;
(statearr_21112_22488[(2)] = null);

(statearr_21112_22488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (28))){
var inst_20968 = (state_21028[(19)]);
var inst_20986 = (state_21028[(23)]);
var inst_20986__$1 = cljs.core.seq(inst_20968);
var state_21028__$1 = (function (){var statearr_21113 = state_21028;
(statearr_21113[(23)] = inst_20986__$1);

return statearr_21113;
})();
if(inst_20986__$1){
var statearr_21114_22489 = state_21028__$1;
(statearr_21114_22489[(1)] = (33));

} else {
var statearr_21115_22490 = state_21028__$1;
(statearr_21115_22490[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (25))){
var inst_20971 = (state_21028[(10)]);
var inst_20970 = (state_21028[(20)]);
var inst_20973 = (inst_20971 < inst_20970);
var inst_20974 = inst_20973;
var state_21028__$1 = state_21028;
if(cljs.core.truth_(inst_20974)){
var statearr_21116_22491 = state_21028__$1;
(statearr_21116_22491[(1)] = (27));

} else {
var statearr_21117_22492 = state_21028__$1;
(statearr_21117_22492[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (34))){
var state_21028__$1 = state_21028;
var statearr_21119_22493 = state_21028__$1;
(statearr_21119_22493[(2)] = null);

(statearr_21119_22493[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (17))){
var state_21028__$1 = state_21028;
var statearr_21120_22494 = state_21028__$1;
(statearr_21120_22494[(2)] = null);

(statearr_21120_22494[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (3))){
var inst_21024 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21028__$1,inst_21024);
} else {
if((state_val_21029 === (12))){
var inst_20955 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21121_22495 = state_21028__$1;
(statearr_21121_22495[(2)] = inst_20955);

(statearr_21121_22495[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (2))){
var state_21028__$1 = state_21028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21028__$1,(4),ch);
} else {
if((state_val_21029 === (23))){
var state_21028__$1 = state_21028;
var statearr_21124_22498 = state_21028__$1;
(statearr_21124_22498[(2)] = null);

(statearr_21124_22498[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (35))){
var inst_21008 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21130_22499 = state_21028__$1;
(statearr_21130_22499[(2)] = inst_21008);

(statearr_21130_22499[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (19))){
var inst_20925 = (state_21028[(7)]);
var inst_20930 = cljs.core.chunk_first(inst_20925);
var inst_20931 = cljs.core.chunk_rest(inst_20925);
var inst_20932 = cljs.core.count(inst_20930);
var inst_20903 = inst_20931;
var inst_20904 = inst_20930;
var inst_20905 = inst_20932;
var inst_20906 = (0);
var state_21028__$1 = (function (){var statearr_21132 = state_21028;
(statearr_21132[(14)] = inst_20903);

(statearr_21132[(15)] = inst_20904);

(statearr_21132[(16)] = inst_20905);

(statearr_21132[(17)] = inst_20906);

return statearr_21132;
})();
var statearr_21133_22501 = state_21028__$1;
(statearr_21133_22501[(2)] = null);

(statearr_21133_22501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (11))){
var inst_20903 = (state_21028[(14)]);
var inst_20925 = (state_21028[(7)]);
var inst_20925__$1 = cljs.core.seq(inst_20903);
var state_21028__$1 = (function (){var statearr_21136 = state_21028;
(statearr_21136[(7)] = inst_20925__$1);

return statearr_21136;
})();
if(inst_20925__$1){
var statearr_21138_22503 = state_21028__$1;
(statearr_21138_22503[(1)] = (16));

} else {
var statearr_21139_22504 = state_21028__$1;
(statearr_21139_22504[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (9))){
var inst_20957 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21142_22505 = state_21028__$1;
(statearr_21142_22505[(2)] = inst_20957);

(statearr_21142_22505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (5))){
var inst_20901 = cljs.core.deref(cs);
var inst_20902 = cljs.core.seq(inst_20901);
var inst_20903 = inst_20902;
var inst_20904 = null;
var inst_20905 = (0);
var inst_20906 = (0);
var state_21028__$1 = (function (){var statearr_21144 = state_21028;
(statearr_21144[(14)] = inst_20903);

(statearr_21144[(15)] = inst_20904);

(statearr_21144[(16)] = inst_20905);

(statearr_21144[(17)] = inst_20906);

return statearr_21144;
})();
var statearr_21145_22506 = state_21028__$1;
(statearr_21145_22506[(2)] = null);

(statearr_21145_22506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (14))){
var state_21028__$1 = state_21028;
var statearr_21147_22507 = state_21028__$1;
(statearr_21147_22507[(2)] = null);

(statearr_21147_22507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (45))){
var inst_21016 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21148_22508 = state_21028__$1;
(statearr_21148_22508[(2)] = inst_21016);

(statearr_21148_22508[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (26))){
var inst_20960 = (state_21028[(27)]);
var inst_21012 = (state_21028[(2)]);
var inst_21013 = cljs.core.seq(inst_20960);
var state_21028__$1 = (function (){var statearr_21151 = state_21028;
(statearr_21151[(29)] = inst_21012);

return statearr_21151;
})();
if(inst_21013){
var statearr_21152_22509 = state_21028__$1;
(statearr_21152_22509[(1)] = (42));

} else {
var statearr_21153_22510 = state_21028__$1;
(statearr_21153_22510[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (16))){
var inst_20925 = (state_21028[(7)]);
var inst_20927 = cljs.core.chunked_seq_QMARK_(inst_20925);
var state_21028__$1 = state_21028;
if(inst_20927){
var statearr_21154_22511 = state_21028__$1;
(statearr_21154_22511[(1)] = (19));

} else {
var statearr_21155_22512 = state_21028__$1;
(statearr_21155_22512[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (38))){
var inst_21005 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21158_22513 = state_21028__$1;
(statearr_21158_22513[(2)] = inst_21005);

(statearr_21158_22513[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (30))){
var state_21028__$1 = state_21028;
var statearr_21159_22514 = state_21028__$1;
(statearr_21159_22514[(2)] = null);

(statearr_21159_22514[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (10))){
var inst_20904 = (state_21028[(15)]);
var inst_20906 = (state_21028[(17)]);
var inst_20914 = cljs.core._nth(inst_20904,inst_20906);
var inst_20915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20914,(0),null);
var inst_20916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20914,(1),null);
var state_21028__$1 = (function (){var statearr_21162 = state_21028;
(statearr_21162[(24)] = inst_20915);

return statearr_21162;
})();
if(cljs.core.truth_(inst_20916)){
var statearr_21163_22515 = state_21028__$1;
(statearr_21163_22515[(1)] = (13));

} else {
var statearr_21167_22516 = state_21028__$1;
(statearr_21167_22516[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (18))){
var inst_20953 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21169_22517 = state_21028__$1;
(statearr_21169_22517[(2)] = inst_20953);

(statearr_21169_22517[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (42))){
var state_21028__$1 = state_21028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21028__$1,(45),dchan);
} else {
if((state_val_21029 === (37))){
var inst_20986 = (state_21028[(23)]);
var inst_20995 = (state_21028[(22)]);
var inst_20894 = (state_21028[(12)]);
var inst_20995__$1 = cljs.core.first(inst_20986);
var inst_20996 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_20995__$1,inst_20894,done);
var state_21028__$1 = (function (){var statearr_21173 = state_21028;
(statearr_21173[(22)] = inst_20995__$1);

return statearr_21173;
})();
if(cljs.core.truth_(inst_20996)){
var statearr_21174_22518 = state_21028__$1;
(statearr_21174_22518[(1)] = (39));

} else {
var statearr_21176_22519 = state_21028__$1;
(statearr_21176_22519[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (8))){
var inst_20906 = (state_21028[(17)]);
var inst_20905 = (state_21028[(16)]);
var inst_20908 = (inst_20906 < inst_20905);
var inst_20909 = inst_20908;
var state_21028__$1 = state_21028;
if(cljs.core.truth_(inst_20909)){
var statearr_21180_22520 = state_21028__$1;
(statearr_21180_22520[(1)] = (10));

} else {
var statearr_21181_22521 = state_21028__$1;
(statearr_21181_22521[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__19782__auto__ = null;
var cljs$core$async$mult_$_state_machine__19782__auto____0 = (function (){
var statearr_21182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21182[(0)] = cljs$core$async$mult_$_state_machine__19782__auto__);

(statearr_21182[(1)] = (1));

return statearr_21182;
});
var cljs$core$async$mult_$_state_machine__19782__auto____1 = (function (state_21028){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_21028);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e21183){var ex__19785__auto__ = e21183;
var statearr_21184_22529 = state_21028;
(statearr_21184_22529[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_21028[(4)]))){
var statearr_21185_22530 = state_21028;
(statearr_21185_22530[(1)] = cljs.core.first((state_21028[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22531 = state_21028;
state_21028 = G__22531;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19782__auto__ = function(state_21028){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19782__auto____1.call(this,state_21028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19782__auto____0;
cljs$core$async$mult_$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19782__auto____1;
return cljs$core$async$mult_$_state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_21187 = f__20176__auto__();
(statearr_21187[(6)] = c__20175__auto___22463);

return statearr_21187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
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
var G__21190 = arguments.length;
switch (G__21190) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_22533 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_22533(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_22534 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_22534(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_22535 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_22535(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_22536 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_22536(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_22540 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_22540(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___22541 = arguments.length;
var i__5877__auto___22542 = (0);
while(true){
if((i__5877__auto___22542 < len__5876__auto___22541)){
args__5882__auto__.push((arguments[i__5877__auto___22542]));

var G__22543 = (i__5877__auto___22542 + (1));
i__5877__auto___22542 = G__22543;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21205){
var map__21206 = p__21205;
var map__21206__$1 = cljs.core.__destructure_map(map__21206);
var opts = map__21206__$1;
var statearr_21207_22544 = state;
(statearr_21207_22544[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_21208_22545 = state;
(statearr_21208_22545[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_21209_22549 = state;
(statearr_21209_22549[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21199){
var G__21200 = cljs.core.first(seq21199);
var seq21199__$1 = cljs.core.next(seq21199);
var G__21201 = cljs.core.first(seq21199__$1);
var seq21199__$2 = cljs.core.next(seq21199__$1);
var G__21202 = cljs.core.first(seq21199__$2);
var seq21199__$3 = cljs.core.next(seq21199__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21200,G__21201,G__21202,seq21199__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21216 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21217){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21217 = meta21217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21218,meta21217__$1){
var self__ = this;
var _21218__$1 = this;
return (new cljs.core.async.t_cljs$core$async21216(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21217__$1));
}));

(cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21218){
var self__ = this;
var _21218__$1 = this;
return self__.meta21217;
}));

(cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21217","meta21217",-2129746716,null)], null);
}));

(cljs.core.async.t_cljs$core$async21216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21216");

(cljs.core.async.t_cljs$core$async21216.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async21216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21216.
 */
cljs.core.async.__GT_t_cljs$core$async21216 = (function cljs$core$async$__GT_t_cljs$core$async21216(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21217){
return (new cljs.core.async.t_cljs$core$async21216(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21217));
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
var m = (new cljs.core.async.t_cljs$core$async21216(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__20175__auto___22553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_21303){
var state_val_21304 = (state_21303[(1)]);
if((state_val_21304 === (7))){
var inst_21257 = (state_21303[(2)]);
var state_21303__$1 = state_21303;
if(cljs.core.truth_(inst_21257)){
var statearr_21310_22554 = state_21303__$1;
(statearr_21310_22554[(1)] = (8));

} else {
var statearr_21311_22556 = state_21303__$1;
(statearr_21311_22556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (20))){
var inst_21250 = (state_21303[(7)]);
var state_21303__$1 = state_21303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21303__$1,(23),out,inst_21250);
} else {
if((state_val_21304 === (1))){
var inst_21229 = calc_state();
var inst_21230 = cljs.core.__destructure_map(inst_21229);
var inst_21231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21230,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21230,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21230,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21235 = inst_21229;
var state_21303__$1 = (function (){var statearr_21314 = state_21303;
(statearr_21314[(8)] = inst_21231);

(statearr_21314[(9)] = inst_21232);

(statearr_21314[(10)] = inst_21233);

(statearr_21314[(11)] = inst_21235);

return statearr_21314;
})();
var statearr_21317_22560 = state_21303__$1;
(statearr_21317_22560[(2)] = null);

(statearr_21317_22560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (24))){
var inst_21240 = (state_21303[(12)]);
var inst_21235 = inst_21240;
var state_21303__$1 = (function (){var statearr_21321 = state_21303;
(statearr_21321[(11)] = inst_21235);

return statearr_21321;
})();
var statearr_21322_22561 = state_21303__$1;
(statearr_21322_22561[(2)] = null);

(statearr_21322_22561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (4))){
var inst_21250 = (state_21303[(7)]);
var inst_21252 = (state_21303[(13)]);
var inst_21249 = (state_21303[(2)]);
var inst_21250__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21249,(0),null);
var inst_21251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21249,(1),null);
var inst_21252__$1 = (inst_21250__$1 == null);
var state_21303__$1 = (function (){var statearr_21328 = state_21303;
(statearr_21328[(7)] = inst_21250__$1);

(statearr_21328[(14)] = inst_21251);

(statearr_21328[(13)] = inst_21252__$1);

return statearr_21328;
})();
if(cljs.core.truth_(inst_21252__$1)){
var statearr_21329_22562 = state_21303__$1;
(statearr_21329_22562[(1)] = (5));

} else {
var statearr_21331_22563 = state_21303__$1;
(statearr_21331_22563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (15))){
var inst_21241 = (state_21303[(15)]);
var inst_21273 = (state_21303[(16)]);
var inst_21273__$1 = cljs.core.empty_QMARK_(inst_21241);
var state_21303__$1 = (function (){var statearr_21333 = state_21303;
(statearr_21333[(16)] = inst_21273__$1);

return statearr_21333;
})();
if(inst_21273__$1){
var statearr_21336_22564 = state_21303__$1;
(statearr_21336_22564[(1)] = (17));

} else {
var statearr_21338_22565 = state_21303__$1;
(statearr_21338_22565[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (21))){
var inst_21240 = (state_21303[(12)]);
var inst_21235 = inst_21240;
var state_21303__$1 = (function (){var statearr_21339 = state_21303;
(statearr_21339[(11)] = inst_21235);

return statearr_21339;
})();
var statearr_21340_22566 = state_21303__$1;
(statearr_21340_22566[(2)] = null);

(statearr_21340_22566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (13))){
var inst_21264 = (state_21303[(2)]);
var inst_21265 = calc_state();
var inst_21235 = inst_21265;
var state_21303__$1 = (function (){var statearr_21341 = state_21303;
(statearr_21341[(17)] = inst_21264);

(statearr_21341[(11)] = inst_21235);

return statearr_21341;
})();
var statearr_21342_22567 = state_21303__$1;
(statearr_21342_22567[(2)] = null);

(statearr_21342_22567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (22))){
var inst_21296 = (state_21303[(2)]);
var state_21303__$1 = state_21303;
var statearr_21343_22568 = state_21303__$1;
(statearr_21343_22568[(2)] = inst_21296);

(statearr_21343_22568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (6))){
var inst_21251 = (state_21303[(14)]);
var inst_21255 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21251,change);
var state_21303__$1 = state_21303;
var statearr_21344_22569 = state_21303__$1;
(statearr_21344_22569[(2)] = inst_21255);

(statearr_21344_22569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (25))){
var state_21303__$1 = state_21303;
var statearr_21345_22570 = state_21303__$1;
(statearr_21345_22570[(2)] = null);

(statearr_21345_22570[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (17))){
var inst_21242 = (state_21303[(18)]);
var inst_21251 = (state_21303[(14)]);
var inst_21276 = (inst_21242.cljs$core$IFn$_invoke$arity$1 ? inst_21242.cljs$core$IFn$_invoke$arity$1(inst_21251) : inst_21242.call(null,inst_21251));
var inst_21277 = cljs.core.not(inst_21276);
var state_21303__$1 = state_21303;
var statearr_21346_22571 = state_21303__$1;
(statearr_21346_22571[(2)] = inst_21277);

(statearr_21346_22571[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (3))){
var inst_21300 = (state_21303[(2)]);
var state_21303__$1 = state_21303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21303__$1,inst_21300);
} else {
if((state_val_21304 === (12))){
var state_21303__$1 = state_21303;
var statearr_21352_22572 = state_21303__$1;
(statearr_21352_22572[(2)] = null);

(statearr_21352_22572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (2))){
var inst_21235 = (state_21303[(11)]);
var inst_21240 = (state_21303[(12)]);
var inst_21240__$1 = cljs.core.__destructure_map(inst_21235);
var inst_21241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21240__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21240__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21240__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21303__$1 = (function (){var statearr_21358 = state_21303;
(statearr_21358[(12)] = inst_21240__$1);

(statearr_21358[(15)] = inst_21241);

(statearr_21358[(18)] = inst_21242);

return statearr_21358;
})();
return cljs.core.async.ioc_alts_BANG_(state_21303__$1,(4),inst_21243);
} else {
if((state_val_21304 === (23))){
var inst_21285 = (state_21303[(2)]);
var state_21303__$1 = state_21303;
if(cljs.core.truth_(inst_21285)){
var statearr_21363_22573 = state_21303__$1;
(statearr_21363_22573[(1)] = (24));

} else {
var statearr_21364_22574 = state_21303__$1;
(statearr_21364_22574[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (19))){
var inst_21280 = (state_21303[(2)]);
var state_21303__$1 = state_21303;
var statearr_21365_22575 = state_21303__$1;
(statearr_21365_22575[(2)] = inst_21280);

(statearr_21365_22575[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (11))){
var inst_21251 = (state_21303[(14)]);
var inst_21261 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_21251);
var state_21303__$1 = state_21303;
var statearr_21366_22576 = state_21303__$1;
(statearr_21366_22576[(2)] = inst_21261);

(statearr_21366_22576[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (9))){
var inst_21241 = (state_21303[(15)]);
var inst_21251 = (state_21303[(14)]);
var inst_21269 = (state_21303[(19)]);
var inst_21269__$1 = (inst_21241.cljs$core$IFn$_invoke$arity$1 ? inst_21241.cljs$core$IFn$_invoke$arity$1(inst_21251) : inst_21241.call(null,inst_21251));
var state_21303__$1 = (function (){var statearr_21370 = state_21303;
(statearr_21370[(19)] = inst_21269__$1);

return statearr_21370;
})();
if(cljs.core.truth_(inst_21269__$1)){
var statearr_21371_22577 = state_21303__$1;
(statearr_21371_22577[(1)] = (14));

} else {
var statearr_21372_22578 = state_21303__$1;
(statearr_21372_22578[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (5))){
var inst_21252 = (state_21303[(13)]);
var state_21303__$1 = state_21303;
var statearr_21373_22579 = state_21303__$1;
(statearr_21373_22579[(2)] = inst_21252);

(statearr_21373_22579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (14))){
var inst_21269 = (state_21303[(19)]);
var state_21303__$1 = state_21303;
var statearr_21374_22580 = state_21303__$1;
(statearr_21374_22580[(2)] = inst_21269);

(statearr_21374_22580[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (26))){
var inst_21291 = (state_21303[(2)]);
var state_21303__$1 = state_21303;
var statearr_21376_22581 = state_21303__$1;
(statearr_21376_22581[(2)] = inst_21291);

(statearr_21376_22581[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (16))){
var inst_21282 = (state_21303[(2)]);
var state_21303__$1 = state_21303;
if(cljs.core.truth_(inst_21282)){
var statearr_21377_22582 = state_21303__$1;
(statearr_21377_22582[(1)] = (20));

} else {
var statearr_21378_22583 = state_21303__$1;
(statearr_21378_22583[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (10))){
var inst_21298 = (state_21303[(2)]);
var state_21303__$1 = state_21303;
var statearr_21379_22584 = state_21303__$1;
(statearr_21379_22584[(2)] = inst_21298);

(statearr_21379_22584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (18))){
var inst_21273 = (state_21303[(16)]);
var state_21303__$1 = state_21303;
var statearr_21380_22585 = state_21303__$1;
(statearr_21380_22585[(2)] = inst_21273);

(statearr_21380_22585[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21304 === (8))){
var inst_21250 = (state_21303[(7)]);
var inst_21259 = (inst_21250 == null);
var state_21303__$1 = state_21303;
if(cljs.core.truth_(inst_21259)){
var statearr_21381_22586 = state_21303__$1;
(statearr_21381_22586[(1)] = (11));

} else {
var statearr_21382_22587 = state_21303__$1;
(statearr_21382_22587[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__19782__auto__ = null;
var cljs$core$async$mix_$_state_machine__19782__auto____0 = (function (){
var statearr_21384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21384[(0)] = cljs$core$async$mix_$_state_machine__19782__auto__);

(statearr_21384[(1)] = (1));

return statearr_21384;
});
var cljs$core$async$mix_$_state_machine__19782__auto____1 = (function (state_21303){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_21303);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e21386){var ex__19785__auto__ = e21386;
var statearr_21387_22590 = state_21303;
(statearr_21387_22590[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_21303[(4)]))){
var statearr_21390_22591 = state_21303;
(statearr_21390_22591[(1)] = cljs.core.first((state_21303[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22592 = state_21303;
state_21303 = G__22592;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19782__auto__ = function(state_21303){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19782__auto____1.call(this,state_21303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19782__auto____0;
cljs$core$async$mix_$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19782__auto____1;
return cljs$core$async$mix_$_state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_21392 = f__20176__auto__();
(statearr_21392[(6)] = c__20175__auto___22553);

return statearr_21392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_22593 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_22593(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_22594 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_22594(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_22595 = (function() {
var G__22596 = null;
var G__22596__1 = (function (p){
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
var G__22596__2 = (function (p,v){
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
G__22596 = function(p,v){
switch(arguments.length){
case 1:
return G__22596__1.call(this,p);
case 2:
return G__22596__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22596.cljs$core$IFn$_invoke$arity$1 = G__22596__1;
G__22596.cljs$core$IFn$_invoke$arity$2 = G__22596__2;
return G__22596;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__21423 = arguments.length;
switch (G__21423) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22595(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22595(p,v);
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
cljs.core.async.t_cljs$core$async21427 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21428){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21428 = meta21428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21429,meta21428__$1){
var self__ = this;
var _21429__$1 = this;
return (new cljs.core.async.t_cljs$core$async21427(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21428__$1));
}));

(cljs.core.async.t_cljs$core$async21427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21429){
var self__ = this;
var _21429__$1 = this;
return self__.meta21428;
}));

(cljs.core.async.t_cljs$core$async21427.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21427.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async21427.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21427.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async21427.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async21427.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async21427.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async21427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21428","meta21428",1570553762,null)], null);
}));

(cljs.core.async.t_cljs$core$async21427.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21427");

(cljs.core.async.t_cljs$core$async21427.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async21427");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21427.
 */
cljs.core.async.__GT_t_cljs$core$async21427 = (function cljs$core$async$__GT_t_cljs$core$async21427(ch,topic_fn,buf_fn,mults,ensure_mult,meta21428){
return (new cljs.core.async.t_cljs$core$async21427(ch,topic_fn,buf_fn,mults,ensure_mult,meta21428));
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
var G__21426 = arguments.length;
switch (G__21426) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__21424_SHARP_){
if(cljs.core.truth_((p1__21424_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21424_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__21424_SHARP_.call(null,topic)))){
return p1__21424_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21424_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async21427(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__20175__auto___22602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_21509){
var state_val_21510 = (state_21509[(1)]);
if((state_val_21510 === (7))){
var inst_21505 = (state_21509[(2)]);
var state_21509__$1 = state_21509;
var statearr_21512_22603 = state_21509__$1;
(statearr_21512_22603[(2)] = inst_21505);

(statearr_21512_22603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (20))){
var state_21509__$1 = state_21509;
var statearr_21514_22604 = state_21509__$1;
(statearr_21514_22604[(2)] = null);

(statearr_21514_22604[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (1))){
var state_21509__$1 = state_21509;
var statearr_21515_22605 = state_21509__$1;
(statearr_21515_22605[(2)] = null);

(statearr_21515_22605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (24))){
var inst_21488 = (state_21509[(7)]);
var inst_21497 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_21488);
var state_21509__$1 = state_21509;
var statearr_21517_22606 = state_21509__$1;
(statearr_21517_22606[(2)] = inst_21497);

(statearr_21517_22606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (4))){
var inst_21437 = (state_21509[(8)]);
var inst_21437__$1 = (state_21509[(2)]);
var inst_21438 = (inst_21437__$1 == null);
var state_21509__$1 = (function (){var statearr_21519 = state_21509;
(statearr_21519[(8)] = inst_21437__$1);

return statearr_21519;
})();
if(cljs.core.truth_(inst_21438)){
var statearr_21520_22608 = state_21509__$1;
(statearr_21520_22608[(1)] = (5));

} else {
var statearr_21521_22609 = state_21509__$1;
(statearr_21521_22609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (15))){
var inst_21482 = (state_21509[(2)]);
var state_21509__$1 = state_21509;
var statearr_21522_22610 = state_21509__$1;
(statearr_21522_22610[(2)] = inst_21482);

(statearr_21522_22610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (21))){
var inst_21502 = (state_21509[(2)]);
var state_21509__$1 = (function (){var statearr_21523 = state_21509;
(statearr_21523[(9)] = inst_21502);

return statearr_21523;
})();
var statearr_21524_22611 = state_21509__$1;
(statearr_21524_22611[(2)] = null);

(statearr_21524_22611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (13))){
var inst_21463 = (state_21509[(10)]);
var inst_21465 = cljs.core.chunked_seq_QMARK_(inst_21463);
var state_21509__$1 = state_21509;
if(inst_21465){
var statearr_21528_22612 = state_21509__$1;
(statearr_21528_22612[(1)] = (16));

} else {
var statearr_21529_22613 = state_21509__$1;
(statearr_21529_22613[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (22))){
var inst_21494 = (state_21509[(2)]);
var state_21509__$1 = state_21509;
if(cljs.core.truth_(inst_21494)){
var statearr_21530_22614 = state_21509__$1;
(statearr_21530_22614[(1)] = (23));

} else {
var statearr_21531_22615 = state_21509__$1;
(statearr_21531_22615[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (6))){
var inst_21437 = (state_21509[(8)]);
var inst_21488 = (state_21509[(7)]);
var inst_21490 = (state_21509[(11)]);
var inst_21488__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_21437) : topic_fn.call(null,inst_21437));
var inst_21489 = cljs.core.deref(mults);
var inst_21490__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21489,inst_21488__$1);
var state_21509__$1 = (function (){var statearr_21532 = state_21509;
(statearr_21532[(7)] = inst_21488__$1);

(statearr_21532[(11)] = inst_21490__$1);

return statearr_21532;
})();
if(cljs.core.truth_(inst_21490__$1)){
var statearr_21535_22620 = state_21509__$1;
(statearr_21535_22620[(1)] = (19));

} else {
var statearr_21536_22621 = state_21509__$1;
(statearr_21536_22621[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (25))){
var inst_21499 = (state_21509[(2)]);
var state_21509__$1 = state_21509;
var statearr_21540_22622 = state_21509__$1;
(statearr_21540_22622[(2)] = inst_21499);

(statearr_21540_22622[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (17))){
var inst_21463 = (state_21509[(10)]);
var inst_21472 = cljs.core.first(inst_21463);
var inst_21473 = cljs.core.async.muxch_STAR_(inst_21472);
var inst_21474 = cljs.core.async.close_BANG_(inst_21473);
var inst_21475 = cljs.core.next(inst_21463);
var inst_21448 = inst_21475;
var inst_21449 = null;
var inst_21450 = (0);
var inst_21451 = (0);
var state_21509__$1 = (function (){var statearr_21541 = state_21509;
(statearr_21541[(12)] = inst_21474);

(statearr_21541[(13)] = inst_21448);

(statearr_21541[(14)] = inst_21449);

(statearr_21541[(15)] = inst_21450);

(statearr_21541[(16)] = inst_21451);

return statearr_21541;
})();
var statearr_21543_22624 = state_21509__$1;
(statearr_21543_22624[(2)] = null);

(statearr_21543_22624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (3))){
var inst_21507 = (state_21509[(2)]);
var state_21509__$1 = state_21509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21509__$1,inst_21507);
} else {
if((state_val_21510 === (12))){
var inst_21484 = (state_21509[(2)]);
var state_21509__$1 = state_21509;
var statearr_21545_22625 = state_21509__$1;
(statearr_21545_22625[(2)] = inst_21484);

(statearr_21545_22625[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (2))){
var state_21509__$1 = state_21509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21509__$1,(4),ch);
} else {
if((state_val_21510 === (23))){
var state_21509__$1 = state_21509;
var statearr_21546_22626 = state_21509__$1;
(statearr_21546_22626[(2)] = null);

(statearr_21546_22626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (19))){
var inst_21490 = (state_21509[(11)]);
var inst_21437 = (state_21509[(8)]);
var inst_21492 = cljs.core.async.muxch_STAR_(inst_21490);
var state_21509__$1 = state_21509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21509__$1,(22),inst_21492,inst_21437);
} else {
if((state_val_21510 === (11))){
var inst_21448 = (state_21509[(13)]);
var inst_21463 = (state_21509[(10)]);
var inst_21463__$1 = cljs.core.seq(inst_21448);
var state_21509__$1 = (function (){var statearr_21548 = state_21509;
(statearr_21548[(10)] = inst_21463__$1);

return statearr_21548;
})();
if(inst_21463__$1){
var statearr_21549_22628 = state_21509__$1;
(statearr_21549_22628[(1)] = (13));

} else {
var statearr_21550_22629 = state_21509__$1;
(statearr_21550_22629[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (9))){
var inst_21486 = (state_21509[(2)]);
var state_21509__$1 = state_21509;
var statearr_21554_22630 = state_21509__$1;
(statearr_21554_22630[(2)] = inst_21486);

(statearr_21554_22630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (5))){
var inst_21445 = cljs.core.deref(mults);
var inst_21446 = cljs.core.vals(inst_21445);
var inst_21447 = cljs.core.seq(inst_21446);
var inst_21448 = inst_21447;
var inst_21449 = null;
var inst_21450 = (0);
var inst_21451 = (0);
var state_21509__$1 = (function (){var statearr_21559 = state_21509;
(statearr_21559[(13)] = inst_21448);

(statearr_21559[(14)] = inst_21449);

(statearr_21559[(15)] = inst_21450);

(statearr_21559[(16)] = inst_21451);

return statearr_21559;
})();
var statearr_21569_22631 = state_21509__$1;
(statearr_21569_22631[(2)] = null);

(statearr_21569_22631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (14))){
var state_21509__$1 = state_21509;
var statearr_21585_22632 = state_21509__$1;
(statearr_21585_22632[(2)] = null);

(statearr_21585_22632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (16))){
var inst_21463 = (state_21509[(10)]);
var inst_21467 = cljs.core.chunk_first(inst_21463);
var inst_21468 = cljs.core.chunk_rest(inst_21463);
var inst_21469 = cljs.core.count(inst_21467);
var inst_21448 = inst_21468;
var inst_21449 = inst_21467;
var inst_21450 = inst_21469;
var inst_21451 = (0);
var state_21509__$1 = (function (){var statearr_21607 = state_21509;
(statearr_21607[(13)] = inst_21448);

(statearr_21607[(14)] = inst_21449);

(statearr_21607[(15)] = inst_21450);

(statearr_21607[(16)] = inst_21451);

return statearr_21607;
})();
var statearr_21609_22637 = state_21509__$1;
(statearr_21609_22637[(2)] = null);

(statearr_21609_22637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (10))){
var inst_21449 = (state_21509[(14)]);
var inst_21451 = (state_21509[(16)]);
var inst_21448 = (state_21509[(13)]);
var inst_21450 = (state_21509[(15)]);
var inst_21457 = cljs.core._nth(inst_21449,inst_21451);
var inst_21458 = cljs.core.async.muxch_STAR_(inst_21457);
var inst_21459 = cljs.core.async.close_BANG_(inst_21458);
var inst_21460 = (inst_21451 + (1));
var tmp21578 = inst_21450;
var tmp21579 = inst_21449;
var tmp21580 = inst_21448;
var inst_21448__$1 = tmp21580;
var inst_21449__$1 = tmp21579;
var inst_21450__$1 = tmp21578;
var inst_21451__$1 = inst_21460;
var state_21509__$1 = (function (){var statearr_21610 = state_21509;
(statearr_21610[(17)] = inst_21459);

(statearr_21610[(13)] = inst_21448__$1);

(statearr_21610[(14)] = inst_21449__$1);

(statearr_21610[(15)] = inst_21450__$1);

(statearr_21610[(16)] = inst_21451__$1);

return statearr_21610;
})();
var statearr_21611_22638 = state_21509__$1;
(statearr_21611_22638[(2)] = null);

(statearr_21611_22638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (18))){
var inst_21478 = (state_21509[(2)]);
var state_21509__$1 = state_21509;
var statearr_21613_22639 = state_21509__$1;
(statearr_21613_22639[(2)] = inst_21478);

(statearr_21613_22639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21510 === (8))){
var inst_21451 = (state_21509[(16)]);
var inst_21450 = (state_21509[(15)]);
var inst_21453 = (inst_21451 < inst_21450);
var inst_21454 = inst_21453;
var state_21509__$1 = state_21509;
if(cljs.core.truth_(inst_21454)){
var statearr_21614_22640 = state_21509__$1;
(statearr_21614_22640[(1)] = (10));

} else {
var statearr_21615_22641 = state_21509__$1;
(statearr_21615_22641[(1)] = (11));

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
var cljs$core$async$state_machine__19782__auto__ = null;
var cljs$core$async$state_machine__19782__auto____0 = (function (){
var statearr_21619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21619[(0)] = cljs$core$async$state_machine__19782__auto__);

(statearr_21619[(1)] = (1));

return statearr_21619;
});
var cljs$core$async$state_machine__19782__auto____1 = (function (state_21509){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_21509);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e21620){var ex__19785__auto__ = e21620;
var statearr_21621_22642 = state_21509;
(statearr_21621_22642[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_21509[(4)]))){
var statearr_21622_22643 = state_21509;
(statearr_21622_22643[(1)] = cljs.core.first((state_21509[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22644 = state_21509;
state_21509 = G__22644;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$state_machine__19782__auto__ = function(state_21509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19782__auto____1.call(this,state_21509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19782__auto____0;
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19782__auto____1;
return cljs$core$async$state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_21623 = f__20176__auto__();
(statearr_21623[(6)] = c__20175__auto___22602);

return statearr_21623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
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
var G__21625 = arguments.length;
switch (G__21625) {
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
var G__21627 = arguments.length;
switch (G__21627) {
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
var G__21636 = arguments.length;
switch (G__21636) {
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
var c__20175__auto___22648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_21687){
var state_val_21688 = (state_21687[(1)]);
if((state_val_21688 === (7))){
var state_21687__$1 = state_21687;
var statearr_21691_22649 = state_21687__$1;
(statearr_21691_22649[(2)] = null);

(statearr_21691_22649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (1))){
var state_21687__$1 = state_21687;
var statearr_21693_22650 = state_21687__$1;
(statearr_21693_22650[(2)] = null);

(statearr_21693_22650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (4))){
var inst_21645 = (state_21687[(7)]);
var inst_21644 = (state_21687[(8)]);
var inst_21647 = (inst_21645 < inst_21644);
var state_21687__$1 = state_21687;
if(cljs.core.truth_(inst_21647)){
var statearr_21695_22651 = state_21687__$1;
(statearr_21695_22651[(1)] = (6));

} else {
var statearr_21696_22652 = state_21687__$1;
(statearr_21696_22652[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (15))){
var inst_21673 = (state_21687[(9)]);
var inst_21678 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_21673);
var state_21687__$1 = state_21687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21687__$1,(17),out,inst_21678);
} else {
if((state_val_21688 === (13))){
var inst_21673 = (state_21687[(9)]);
var inst_21673__$1 = (state_21687[(2)]);
var inst_21674 = cljs.core.some(cljs.core.nil_QMARK_,inst_21673__$1);
var state_21687__$1 = (function (){var statearr_21699 = state_21687;
(statearr_21699[(9)] = inst_21673__$1);

return statearr_21699;
})();
if(cljs.core.truth_(inst_21674)){
var statearr_21700_22654 = state_21687__$1;
(statearr_21700_22654[(1)] = (14));

} else {
var statearr_21701_22655 = state_21687__$1;
(statearr_21701_22655[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (6))){
var state_21687__$1 = state_21687;
var statearr_21702_22656 = state_21687__$1;
(statearr_21702_22656[(2)] = null);

(statearr_21702_22656[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (17))){
var inst_21680 = (state_21687[(2)]);
var state_21687__$1 = (function (){var statearr_21704 = state_21687;
(statearr_21704[(10)] = inst_21680);

return statearr_21704;
})();
var statearr_21705_22657 = state_21687__$1;
(statearr_21705_22657[(2)] = null);

(statearr_21705_22657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (3))){
var inst_21685 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21687__$1,inst_21685);
} else {
if((state_val_21688 === (12))){
var _ = (function (){var statearr_21707 = state_21687;
(statearr_21707[(4)] = cljs.core.rest((state_21687[(4)])));

return statearr_21707;
})();
var state_21687__$1 = state_21687;
var ex21703 = (state_21687__$1[(2)]);
var statearr_21708_22658 = state_21687__$1;
(statearr_21708_22658[(5)] = ex21703);


if((ex21703 instanceof Object)){
var statearr_21709_22659 = state_21687__$1;
(statearr_21709_22659[(1)] = (11));

(statearr_21709_22659[(5)] = null);

} else {
throw ex21703;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (2))){
var inst_21643 = cljs.core.reset_BANG_(dctr,cnt);
var inst_21644 = cnt;
var inst_21645 = (0);
var state_21687__$1 = (function (){var statearr_21712 = state_21687;
(statearr_21712[(11)] = inst_21643);

(statearr_21712[(8)] = inst_21644);

(statearr_21712[(7)] = inst_21645);

return statearr_21712;
})();
var statearr_21713_22663 = state_21687__$1;
(statearr_21713_22663[(2)] = null);

(statearr_21713_22663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (11))){
var inst_21651 = (state_21687[(2)]);
var inst_21653 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_21687__$1 = (function (){var statearr_21714 = state_21687;
(statearr_21714[(12)] = inst_21651);

return statearr_21714;
})();
var statearr_21715_22664 = state_21687__$1;
(statearr_21715_22664[(2)] = inst_21653);

(statearr_21715_22664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (9))){
var inst_21645 = (state_21687[(7)]);
var _ = (function (){var statearr_21716 = state_21687;
(statearr_21716[(4)] = cljs.core.cons((12),(state_21687[(4)])));

return statearr_21716;
})();
var inst_21659 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_21645) : chs__$1.call(null,inst_21645));
var inst_21660 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_21645) : done.call(null,inst_21645));
var inst_21661 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_21659,inst_21660);
var ___$1 = (function (){var statearr_21718 = state_21687;
(statearr_21718[(4)] = cljs.core.rest((state_21687[(4)])));

return statearr_21718;
})();
var state_21687__$1 = state_21687;
var statearr_21719_22665 = state_21687__$1;
(statearr_21719_22665[(2)] = inst_21661);

(statearr_21719_22665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (5))){
var inst_21671 = (state_21687[(2)]);
var state_21687__$1 = (function (){var statearr_21721 = state_21687;
(statearr_21721[(13)] = inst_21671);

return statearr_21721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21687__$1,(13),dchan);
} else {
if((state_val_21688 === (14))){
var inst_21676 = cljs.core.async.close_BANG_(out);
var state_21687__$1 = state_21687;
var statearr_21722_22666 = state_21687__$1;
(statearr_21722_22666[(2)] = inst_21676);

(statearr_21722_22666[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (16))){
var inst_21683 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
var statearr_21724_22667 = state_21687__$1;
(statearr_21724_22667[(2)] = inst_21683);

(statearr_21724_22667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (10))){
var inst_21645 = (state_21687[(7)]);
var inst_21664 = (state_21687[(2)]);
var inst_21665 = (inst_21645 + (1));
var inst_21645__$1 = inst_21665;
var state_21687__$1 = (function (){var statearr_21725 = state_21687;
(statearr_21725[(14)] = inst_21664);

(statearr_21725[(7)] = inst_21645__$1);

return statearr_21725;
})();
var statearr_21727_22668 = state_21687__$1;
(statearr_21727_22668[(2)] = null);

(statearr_21727_22668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (8))){
var inst_21669 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
var statearr_21728_22669 = state_21687__$1;
(statearr_21728_22669[(2)] = inst_21669);

(statearr_21728_22669[(1)] = (5));


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
var cljs$core$async$state_machine__19782__auto__ = null;
var cljs$core$async$state_machine__19782__auto____0 = (function (){
var statearr_21730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21730[(0)] = cljs$core$async$state_machine__19782__auto__);

(statearr_21730[(1)] = (1));

return statearr_21730;
});
var cljs$core$async$state_machine__19782__auto____1 = (function (state_21687){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_21687);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e21731){var ex__19785__auto__ = e21731;
var statearr_21733_22670 = state_21687;
(statearr_21733_22670[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_21687[(4)]))){
var statearr_21734_22671 = state_21687;
(statearr_21734_22671[(1)] = cljs.core.first((state_21687[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22672 = state_21687;
state_21687 = G__22672;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$state_machine__19782__auto__ = function(state_21687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19782__auto____1.call(this,state_21687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19782__auto____0;
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19782__auto____1;
return cljs$core$async$state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_21736 = f__20176__auto__();
(statearr_21736[(6)] = c__20175__auto___22648);

return statearr_21736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
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
var G__21740 = arguments.length;
switch (G__21740) {
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
var c__20175__auto___22674 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_21774){
var state_val_21775 = (state_21774[(1)]);
if((state_val_21775 === (7))){
var inst_21753 = (state_21774[(7)]);
var inst_21754 = (state_21774[(8)]);
var inst_21753__$1 = (state_21774[(2)]);
var inst_21754__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21753__$1,(0),null);
var inst_21755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21753__$1,(1),null);
var inst_21756 = (inst_21754__$1 == null);
var state_21774__$1 = (function (){var statearr_21776 = state_21774;
(statearr_21776[(7)] = inst_21753__$1);

(statearr_21776[(8)] = inst_21754__$1);

(statearr_21776[(9)] = inst_21755);

return statearr_21776;
})();
if(cljs.core.truth_(inst_21756)){
var statearr_21777_22676 = state_21774__$1;
(statearr_21777_22676[(1)] = (8));

} else {
var statearr_21778_22677 = state_21774__$1;
(statearr_21778_22677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (1))){
var inst_21743 = cljs.core.vec(chs);
var inst_21744 = inst_21743;
var state_21774__$1 = (function (){var statearr_21779 = state_21774;
(statearr_21779[(10)] = inst_21744);

return statearr_21779;
})();
var statearr_21780_22678 = state_21774__$1;
(statearr_21780_22678[(2)] = null);

(statearr_21780_22678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (4))){
var inst_21744 = (state_21774[(10)]);
var state_21774__$1 = state_21774;
return cljs.core.async.ioc_alts_BANG_(state_21774__$1,(7),inst_21744);
} else {
if((state_val_21775 === (6))){
var inst_21770 = (state_21774[(2)]);
var state_21774__$1 = state_21774;
var statearr_21781_22679 = state_21774__$1;
(statearr_21781_22679[(2)] = inst_21770);

(statearr_21781_22679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (3))){
var inst_21772 = (state_21774[(2)]);
var state_21774__$1 = state_21774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21774__$1,inst_21772);
} else {
if((state_val_21775 === (2))){
var inst_21744 = (state_21774[(10)]);
var inst_21746 = cljs.core.count(inst_21744);
var inst_21747 = (inst_21746 > (0));
var state_21774__$1 = state_21774;
if(cljs.core.truth_(inst_21747)){
var statearr_21783_22681 = state_21774__$1;
(statearr_21783_22681[(1)] = (4));

} else {
var statearr_21784_22682 = state_21774__$1;
(statearr_21784_22682[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (11))){
var inst_21744 = (state_21774[(10)]);
var inst_21763 = (state_21774[(2)]);
var tmp21782 = inst_21744;
var inst_21744__$1 = tmp21782;
var state_21774__$1 = (function (){var statearr_21785 = state_21774;
(statearr_21785[(11)] = inst_21763);

(statearr_21785[(10)] = inst_21744__$1);

return statearr_21785;
})();
var statearr_21786_22683 = state_21774__$1;
(statearr_21786_22683[(2)] = null);

(statearr_21786_22683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (9))){
var inst_21754 = (state_21774[(8)]);
var state_21774__$1 = state_21774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21774__$1,(11),out,inst_21754);
} else {
if((state_val_21775 === (5))){
var inst_21768 = cljs.core.async.close_BANG_(out);
var state_21774__$1 = state_21774;
var statearr_21787_22684 = state_21774__$1;
(statearr_21787_22684[(2)] = inst_21768);

(statearr_21787_22684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (10))){
var inst_21766 = (state_21774[(2)]);
var state_21774__$1 = state_21774;
var statearr_21788_22685 = state_21774__$1;
(statearr_21788_22685[(2)] = inst_21766);

(statearr_21788_22685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (8))){
var inst_21744 = (state_21774[(10)]);
var inst_21753 = (state_21774[(7)]);
var inst_21754 = (state_21774[(8)]);
var inst_21755 = (state_21774[(9)]);
var inst_21758 = (function (){var cs = inst_21744;
var vec__21749 = inst_21753;
var v = inst_21754;
var c = inst_21755;
return (function (p1__21737_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__21737_SHARP_);
});
})();
var inst_21759 = cljs.core.filterv(inst_21758,inst_21744);
var inst_21744__$1 = inst_21759;
var state_21774__$1 = (function (){var statearr_21789 = state_21774;
(statearr_21789[(10)] = inst_21744__$1);

return statearr_21789;
})();
var statearr_21790_22686 = state_21774__$1;
(statearr_21790_22686[(2)] = null);

(statearr_21790_22686[(1)] = (2));


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
var cljs$core$async$state_machine__19782__auto__ = null;
var cljs$core$async$state_machine__19782__auto____0 = (function (){
var statearr_21791 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21791[(0)] = cljs$core$async$state_machine__19782__auto__);

(statearr_21791[(1)] = (1));

return statearr_21791;
});
var cljs$core$async$state_machine__19782__auto____1 = (function (state_21774){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_21774);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e21792){var ex__19785__auto__ = e21792;
var statearr_21793_22687 = state_21774;
(statearr_21793_22687[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_21774[(4)]))){
var statearr_21794_22688 = state_21774;
(statearr_21794_22688[(1)] = cljs.core.first((state_21774[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22689 = state_21774;
state_21774 = G__22689;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$state_machine__19782__auto__ = function(state_21774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19782__auto____1.call(this,state_21774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19782__auto____0;
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19782__auto____1;
return cljs$core$async$state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_21795 = f__20176__auto__();
(statearr_21795[(6)] = c__20175__auto___22674);

return statearr_21795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
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
var G__21797 = arguments.length;
switch (G__21797) {
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
var c__20175__auto___22691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_21821){
var state_val_21822 = (state_21821[(1)]);
if((state_val_21822 === (7))){
var inst_21803 = (state_21821[(7)]);
var inst_21803__$1 = (state_21821[(2)]);
var inst_21804 = (inst_21803__$1 == null);
var inst_21805 = cljs.core.not(inst_21804);
var state_21821__$1 = (function (){var statearr_21823 = state_21821;
(statearr_21823[(7)] = inst_21803__$1);

return statearr_21823;
})();
if(inst_21805){
var statearr_21824_22692 = state_21821__$1;
(statearr_21824_22692[(1)] = (8));

} else {
var statearr_21825_22693 = state_21821__$1;
(statearr_21825_22693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (1))){
var inst_21798 = (0);
var state_21821__$1 = (function (){var statearr_21826 = state_21821;
(statearr_21826[(8)] = inst_21798);

return statearr_21826;
})();
var statearr_21827_22694 = state_21821__$1;
(statearr_21827_22694[(2)] = null);

(statearr_21827_22694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (4))){
var state_21821__$1 = state_21821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21821__$1,(7),ch);
} else {
if((state_val_21822 === (6))){
var inst_21816 = (state_21821[(2)]);
var state_21821__$1 = state_21821;
var statearr_21828_22695 = state_21821__$1;
(statearr_21828_22695[(2)] = inst_21816);

(statearr_21828_22695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (3))){
var inst_21818 = (state_21821[(2)]);
var inst_21819 = cljs.core.async.close_BANG_(out);
var state_21821__$1 = (function (){var statearr_21829 = state_21821;
(statearr_21829[(9)] = inst_21818);

return statearr_21829;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21821__$1,inst_21819);
} else {
if((state_val_21822 === (2))){
var inst_21798 = (state_21821[(8)]);
var inst_21800 = (inst_21798 < n);
var state_21821__$1 = state_21821;
if(cljs.core.truth_(inst_21800)){
var statearr_21830_22696 = state_21821__$1;
(statearr_21830_22696[(1)] = (4));

} else {
var statearr_21831_22697 = state_21821__$1;
(statearr_21831_22697[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (11))){
var inst_21798 = (state_21821[(8)]);
var inst_21808 = (state_21821[(2)]);
var inst_21809 = (inst_21798 + (1));
var inst_21798__$1 = inst_21809;
var state_21821__$1 = (function (){var statearr_21832 = state_21821;
(statearr_21832[(10)] = inst_21808);

(statearr_21832[(8)] = inst_21798__$1);

return statearr_21832;
})();
var statearr_21833_22698 = state_21821__$1;
(statearr_21833_22698[(2)] = null);

(statearr_21833_22698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (9))){
var state_21821__$1 = state_21821;
var statearr_21834_22699 = state_21821__$1;
(statearr_21834_22699[(2)] = null);

(statearr_21834_22699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (5))){
var state_21821__$1 = state_21821;
var statearr_21835_22700 = state_21821__$1;
(statearr_21835_22700[(2)] = null);

(statearr_21835_22700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (10))){
var inst_21813 = (state_21821[(2)]);
var state_21821__$1 = state_21821;
var statearr_21836_22701 = state_21821__$1;
(statearr_21836_22701[(2)] = inst_21813);

(statearr_21836_22701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (8))){
var inst_21803 = (state_21821[(7)]);
var state_21821__$1 = state_21821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21821__$1,(11),out,inst_21803);
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
var cljs$core$async$state_machine__19782__auto__ = null;
var cljs$core$async$state_machine__19782__auto____0 = (function (){
var statearr_21837 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21837[(0)] = cljs$core$async$state_machine__19782__auto__);

(statearr_21837[(1)] = (1));

return statearr_21837;
});
var cljs$core$async$state_machine__19782__auto____1 = (function (state_21821){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_21821);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e21838){var ex__19785__auto__ = e21838;
var statearr_21839_22702 = state_21821;
(statearr_21839_22702[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_21821[(4)]))){
var statearr_21840_22707 = state_21821;
(statearr_21840_22707[(1)] = cljs.core.first((state_21821[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22708 = state_21821;
state_21821 = G__22708;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$state_machine__19782__auto__ = function(state_21821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19782__auto____1.call(this,state_21821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19782__auto____0;
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19782__auto____1;
return cljs$core$async$state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_21841 = f__20176__auto__();
(statearr_21841[(6)] = c__20175__auto___22691);

return statearr_21841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
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
cljs.core.async.t_cljs$core$async21848 = (function (f,ch,meta21844,_,fn1,meta21849){
this.f = f;
this.ch = ch;
this.meta21844 = meta21844;
this._ = _;
this.fn1 = fn1;
this.meta21849 = meta21849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21850,meta21849__$1){
var self__ = this;
var _21850__$1 = this;
return (new cljs.core.async.t_cljs$core$async21848(self__.f,self__.ch,self__.meta21844,self__._,self__.fn1,meta21849__$1));
}));

(cljs.core.async.t_cljs$core$async21848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21850){
var self__ = this;
var _21850__$1 = this;
return self__.meta21849;
}));

(cljs.core.async.t_cljs$core$async21848.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21848.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async21848.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21848.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__21842_SHARP_){
var G__21853 = (((p1__21842_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__21842_SHARP_) : self__.f.call(null,p1__21842_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__21853) : f1.call(null,G__21853));
});
}));

(cljs.core.async.t_cljs$core$async21848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21844","meta21844",-1508685268,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21843","cljs.core.async/t_cljs$core$async21843",286472668,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21849","meta21849",-17930938,null)], null);
}));

(cljs.core.async.t_cljs$core$async21848.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21848");

(cljs.core.async.t_cljs$core$async21848.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async21848");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21848.
 */
cljs.core.async.__GT_t_cljs$core$async21848 = (function cljs$core$async$__GT_t_cljs$core$async21848(f,ch,meta21844,_,fn1,meta21849){
return (new cljs.core.async.t_cljs$core$async21848(f,ch,meta21844,_,fn1,meta21849));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21843 = (function (f,ch,meta21844){
this.f = f;
this.ch = ch;
this.meta21844 = meta21844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21845,meta21844__$1){
var self__ = this;
var _21845__$1 = this;
return (new cljs.core.async.t_cljs$core$async21843(self__.f,self__.ch,meta21844__$1));
}));

(cljs.core.async.t_cljs$core$async21843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21845){
var self__ = this;
var _21845__$1 = this;
return self__.meta21844;
}));

(cljs.core.async.t_cljs$core$async21843.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async21843.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async21843.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async21848(self__.f,self__.ch,self__.meta21844,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__21854 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__21854) : self__.f.call(null,G__21854));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async21843.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async21843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21844","meta21844",-1508685268,null)], null);
}));

(cljs.core.async.t_cljs$core$async21843.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21843");

(cljs.core.async.t_cljs$core$async21843.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async21843");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21843.
 */
cljs.core.async.__GT_t_cljs$core$async21843 = (function cljs$core$async$__GT_t_cljs$core$async21843(f,ch,meta21844){
return (new cljs.core.async.t_cljs$core$async21843(f,ch,meta21844));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async21843(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21858 = (function (f,ch,meta21859){
this.f = f;
this.ch = ch;
this.meta21859 = meta21859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21860,meta21859__$1){
var self__ = this;
var _21860__$1 = this;
return (new cljs.core.async.t_cljs$core$async21858(self__.f,self__.ch,meta21859__$1));
}));

(cljs.core.async.t_cljs$core$async21858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21860){
var self__ = this;
var _21860__$1 = this;
return self__.meta21859;
}));

(cljs.core.async.t_cljs$core$async21858.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21858.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async21858.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21858.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async21858.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21858.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async21858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21859","meta21859",1720804761,null)], null);
}));

(cljs.core.async.t_cljs$core$async21858.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21858");

(cljs.core.async.t_cljs$core$async21858.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async21858");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21858.
 */
cljs.core.async.__GT_t_cljs$core$async21858 = (function cljs$core$async$__GT_t_cljs$core$async21858(f,ch,meta21859){
return (new cljs.core.async.t_cljs$core$async21858(f,ch,meta21859));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async21858(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21881 = (function (p,ch,meta21882){
this.p = p;
this.ch = ch;
this.meta21882 = meta21882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21883,meta21882__$1){
var self__ = this;
var _21883__$1 = this;
return (new cljs.core.async.t_cljs$core$async21881(self__.p,self__.ch,meta21882__$1));
}));

(cljs.core.async.t_cljs$core$async21881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21883){
var self__ = this;
var _21883__$1 = this;
return self__.meta21882;
}));

(cljs.core.async.t_cljs$core$async21881.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21881.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async21881.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async21881.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21881.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async21881.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21881.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async21881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21882","meta21882",435833240,null)], null);
}));

(cljs.core.async.t_cljs$core$async21881.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21881");

(cljs.core.async.t_cljs$core$async21881.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async21881");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21881.
 */
cljs.core.async.__GT_t_cljs$core$async21881 = (function cljs$core$async$__GT_t_cljs$core$async21881(p,ch,meta21882){
return (new cljs.core.async.t_cljs$core$async21881(p,ch,meta21882));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async21881(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21889 = arguments.length;
switch (G__21889) {
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
var c__20175__auto___22718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_21911){
var state_val_21912 = (state_21911[(1)]);
if((state_val_21912 === (7))){
var inst_21907 = (state_21911[(2)]);
var state_21911__$1 = state_21911;
var statearr_21913_22719 = state_21911__$1;
(statearr_21913_22719[(2)] = inst_21907);

(statearr_21913_22719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (1))){
var state_21911__$1 = state_21911;
var statearr_21914_22720 = state_21911__$1;
(statearr_21914_22720[(2)] = null);

(statearr_21914_22720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (4))){
var inst_21893 = (state_21911[(7)]);
var inst_21893__$1 = (state_21911[(2)]);
var inst_21894 = (inst_21893__$1 == null);
var state_21911__$1 = (function (){var statearr_21916 = state_21911;
(statearr_21916[(7)] = inst_21893__$1);

return statearr_21916;
})();
if(cljs.core.truth_(inst_21894)){
var statearr_21918_22721 = state_21911__$1;
(statearr_21918_22721[(1)] = (5));

} else {
var statearr_21919_22722 = state_21911__$1;
(statearr_21919_22722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (6))){
var inst_21893 = (state_21911[(7)]);
var inst_21898 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21893) : p.call(null,inst_21893));
var state_21911__$1 = state_21911;
if(cljs.core.truth_(inst_21898)){
var statearr_21922_22723 = state_21911__$1;
(statearr_21922_22723[(1)] = (8));

} else {
var statearr_21923_22724 = state_21911__$1;
(statearr_21923_22724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (3))){
var inst_21909 = (state_21911[(2)]);
var state_21911__$1 = state_21911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21911__$1,inst_21909);
} else {
if((state_val_21912 === (2))){
var state_21911__$1 = state_21911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21911__$1,(4),ch);
} else {
if((state_val_21912 === (11))){
var inst_21901 = (state_21911[(2)]);
var state_21911__$1 = state_21911;
var statearr_21924_22725 = state_21911__$1;
(statearr_21924_22725[(2)] = inst_21901);

(statearr_21924_22725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (9))){
var state_21911__$1 = state_21911;
var statearr_21925_22726 = state_21911__$1;
(statearr_21925_22726[(2)] = null);

(statearr_21925_22726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (5))){
var inst_21896 = cljs.core.async.close_BANG_(out);
var state_21911__$1 = state_21911;
var statearr_21926_22727 = state_21911__$1;
(statearr_21926_22727[(2)] = inst_21896);

(statearr_21926_22727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (10))){
var inst_21904 = (state_21911[(2)]);
var state_21911__$1 = (function (){var statearr_21927 = state_21911;
(statearr_21927[(8)] = inst_21904);

return statearr_21927;
})();
var statearr_21928_22728 = state_21911__$1;
(statearr_21928_22728[(2)] = null);

(statearr_21928_22728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (8))){
var inst_21893 = (state_21911[(7)]);
var state_21911__$1 = state_21911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21911__$1,(11),out,inst_21893);
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
var cljs$core$async$state_machine__19782__auto__ = null;
var cljs$core$async$state_machine__19782__auto____0 = (function (){
var statearr_21929 = [null,null,null,null,null,null,null,null,null];
(statearr_21929[(0)] = cljs$core$async$state_machine__19782__auto__);

(statearr_21929[(1)] = (1));

return statearr_21929;
});
var cljs$core$async$state_machine__19782__auto____1 = (function (state_21911){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_21911);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e21930){var ex__19785__auto__ = e21930;
var statearr_21931_22730 = state_21911;
(statearr_21931_22730[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_21911[(4)]))){
var statearr_21932_22731 = state_21911;
(statearr_21932_22731[(1)] = cljs.core.first((state_21911[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22733 = state_21911;
state_21911 = G__22733;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$state_machine__19782__auto__ = function(state_21911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19782__auto____1.call(this,state_21911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19782__auto____0;
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19782__auto____1;
return cljs$core$async$state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_21933 = f__20176__auto__();
(statearr_21933[(6)] = c__20175__auto___22718);

return statearr_21933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__21936 = arguments.length;
switch (G__21936) {
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
var c__20175__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_22004){
var state_val_22005 = (state_22004[(1)]);
if((state_val_22005 === (7))){
var inst_22000 = (state_22004[(2)]);
var state_22004__$1 = state_22004;
var statearr_22007_22735 = state_22004__$1;
(statearr_22007_22735[(2)] = inst_22000);

(statearr_22007_22735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (20))){
var inst_21967 = (state_22004[(7)]);
var inst_21981 = (state_22004[(2)]);
var inst_21982 = cljs.core.next(inst_21967);
var inst_21953 = inst_21982;
var inst_21954 = null;
var inst_21955 = (0);
var inst_21956 = (0);
var state_22004__$1 = (function (){var statearr_22008 = state_22004;
(statearr_22008[(8)] = inst_21981);

(statearr_22008[(9)] = inst_21953);

(statearr_22008[(10)] = inst_21954);

(statearr_22008[(11)] = inst_21955);

(statearr_22008[(12)] = inst_21956);

return statearr_22008;
})();
var statearr_22009_22736 = state_22004__$1;
(statearr_22009_22736[(2)] = null);

(statearr_22009_22736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (1))){
var state_22004__$1 = state_22004;
var statearr_22010_22737 = state_22004__$1;
(statearr_22010_22737[(2)] = null);

(statearr_22010_22737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (4))){
var inst_21942 = (state_22004[(13)]);
var inst_21942__$1 = (state_22004[(2)]);
var inst_21943 = (inst_21942__$1 == null);
var state_22004__$1 = (function (){var statearr_22011 = state_22004;
(statearr_22011[(13)] = inst_21942__$1);

return statearr_22011;
})();
if(cljs.core.truth_(inst_21943)){
var statearr_22012_22740 = state_22004__$1;
(statearr_22012_22740[(1)] = (5));

} else {
var statearr_22013_22741 = state_22004__$1;
(statearr_22013_22741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (15))){
var state_22004__$1 = state_22004;
var statearr_22017_22742 = state_22004__$1;
(statearr_22017_22742[(2)] = null);

(statearr_22017_22742[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (21))){
var state_22004__$1 = state_22004;
var statearr_22018_22743 = state_22004__$1;
(statearr_22018_22743[(2)] = null);

(statearr_22018_22743[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (13))){
var inst_21956 = (state_22004[(12)]);
var inst_21953 = (state_22004[(9)]);
var inst_21954 = (state_22004[(10)]);
var inst_21955 = (state_22004[(11)]);
var inst_21963 = (state_22004[(2)]);
var inst_21964 = (inst_21956 + (1));
var tmp22014 = inst_21954;
var tmp22015 = inst_21955;
var tmp22016 = inst_21953;
var inst_21953__$1 = tmp22016;
var inst_21954__$1 = tmp22014;
var inst_21955__$1 = tmp22015;
var inst_21956__$1 = inst_21964;
var state_22004__$1 = (function (){var statearr_22019 = state_22004;
(statearr_22019[(14)] = inst_21963);

(statearr_22019[(9)] = inst_21953__$1);

(statearr_22019[(10)] = inst_21954__$1);

(statearr_22019[(11)] = inst_21955__$1);

(statearr_22019[(12)] = inst_21956__$1);

return statearr_22019;
})();
var statearr_22020_22744 = state_22004__$1;
(statearr_22020_22744[(2)] = null);

(statearr_22020_22744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (22))){
var state_22004__$1 = state_22004;
var statearr_22023_22745 = state_22004__$1;
(statearr_22023_22745[(2)] = null);

(statearr_22023_22745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (6))){
var inst_21942 = (state_22004[(13)]);
var inst_21951 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21942) : f.call(null,inst_21942));
var inst_21952 = cljs.core.seq(inst_21951);
var inst_21953 = inst_21952;
var inst_21954 = null;
var inst_21955 = (0);
var inst_21956 = (0);
var state_22004__$1 = (function (){var statearr_22024 = state_22004;
(statearr_22024[(9)] = inst_21953);

(statearr_22024[(10)] = inst_21954);

(statearr_22024[(11)] = inst_21955);

(statearr_22024[(12)] = inst_21956);

return statearr_22024;
})();
var statearr_22025_22747 = state_22004__$1;
(statearr_22025_22747[(2)] = null);

(statearr_22025_22747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (17))){
var inst_21967 = (state_22004[(7)]);
var inst_21971 = cljs.core.chunk_first(inst_21967);
var inst_21972 = cljs.core.chunk_rest(inst_21967);
var inst_21976 = cljs.core.count(inst_21971);
var inst_21953 = inst_21972;
var inst_21954 = inst_21971;
var inst_21955 = inst_21976;
var inst_21956 = (0);
var state_22004__$1 = (function (){var statearr_22026 = state_22004;
(statearr_22026[(9)] = inst_21953);

(statearr_22026[(10)] = inst_21954);

(statearr_22026[(11)] = inst_21955);

(statearr_22026[(12)] = inst_21956);

return statearr_22026;
})();
var statearr_22027_22748 = state_22004__$1;
(statearr_22027_22748[(2)] = null);

(statearr_22027_22748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (3))){
var inst_22002 = (state_22004[(2)]);
var state_22004__$1 = state_22004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22004__$1,inst_22002);
} else {
if((state_val_22005 === (12))){
var inst_21990 = (state_22004[(2)]);
var state_22004__$1 = state_22004;
var statearr_22028_22749 = state_22004__$1;
(statearr_22028_22749[(2)] = inst_21990);

(statearr_22028_22749[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (2))){
var state_22004__$1 = state_22004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22004__$1,(4),in$);
} else {
if((state_val_22005 === (23))){
var inst_21998 = (state_22004[(2)]);
var state_22004__$1 = state_22004;
var statearr_22029_22750 = state_22004__$1;
(statearr_22029_22750[(2)] = inst_21998);

(statearr_22029_22750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (19))){
var inst_21985 = (state_22004[(2)]);
var state_22004__$1 = state_22004;
var statearr_22030_22751 = state_22004__$1;
(statearr_22030_22751[(2)] = inst_21985);

(statearr_22030_22751[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (11))){
var inst_21953 = (state_22004[(9)]);
var inst_21967 = (state_22004[(7)]);
var inst_21967__$1 = cljs.core.seq(inst_21953);
var state_22004__$1 = (function (){var statearr_22031 = state_22004;
(statearr_22031[(7)] = inst_21967__$1);

return statearr_22031;
})();
if(inst_21967__$1){
var statearr_22032_22752 = state_22004__$1;
(statearr_22032_22752[(1)] = (14));

} else {
var statearr_22033_22753 = state_22004__$1;
(statearr_22033_22753[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (9))){
var inst_21992 = (state_22004[(2)]);
var inst_21993 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_22004__$1 = (function (){var statearr_22035 = state_22004;
(statearr_22035[(15)] = inst_21992);

return statearr_22035;
})();
if(cljs.core.truth_(inst_21993)){
var statearr_22036_22754 = state_22004__$1;
(statearr_22036_22754[(1)] = (21));

} else {
var statearr_22037_22755 = state_22004__$1;
(statearr_22037_22755[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (5))){
var inst_21945 = cljs.core.async.close_BANG_(out);
var state_22004__$1 = state_22004;
var statearr_22038_22756 = state_22004__$1;
(statearr_22038_22756[(2)] = inst_21945);

(statearr_22038_22756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (14))){
var inst_21967 = (state_22004[(7)]);
var inst_21969 = cljs.core.chunked_seq_QMARK_(inst_21967);
var state_22004__$1 = state_22004;
if(inst_21969){
var statearr_22039_22757 = state_22004__$1;
(statearr_22039_22757[(1)] = (17));

} else {
var statearr_22040_22758 = state_22004__$1;
(statearr_22040_22758[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (16))){
var inst_21988 = (state_22004[(2)]);
var state_22004__$1 = state_22004;
var statearr_22044_22762 = state_22004__$1;
(statearr_22044_22762[(2)] = inst_21988);

(statearr_22044_22762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22005 === (10))){
var inst_21954 = (state_22004[(10)]);
var inst_21956 = (state_22004[(12)]);
var inst_21961 = cljs.core._nth(inst_21954,inst_21956);
var state_22004__$1 = state_22004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22004__$1,(13),out,inst_21961);
} else {
if((state_val_22005 === (18))){
var inst_21967 = (state_22004[(7)]);
var inst_21979 = cljs.core.first(inst_21967);
var state_22004__$1 = state_22004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22004__$1,(20),out,inst_21979);
} else {
if((state_val_22005 === (8))){
var inst_21956 = (state_22004[(12)]);
var inst_21955 = (state_22004[(11)]);
var inst_21958 = (inst_21956 < inst_21955);
var inst_21959 = inst_21958;
var state_22004__$1 = state_22004;
if(cljs.core.truth_(inst_21959)){
var statearr_22049_22763 = state_22004__$1;
(statearr_22049_22763[(1)] = (10));

} else {
var statearr_22050_22764 = state_22004__$1;
(statearr_22050_22764[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__19782__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19782__auto____0 = (function (){
var statearr_22051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22051[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19782__auto__);

(statearr_22051[(1)] = (1));

return statearr_22051;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19782__auto____1 = (function (state_22004){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_22004);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e22052){var ex__19785__auto__ = e22052;
var statearr_22053_22765 = state_22004;
(statearr_22053_22765[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_22004[(4)]))){
var statearr_22054_22766 = state_22004;
(statearr_22054_22766[(1)] = cljs.core.first((state_22004[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22767 = state_22004;
state_22004 = G__22767;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19782__auto__ = function(state_22004){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19782__auto____1.call(this,state_22004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19782__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19782__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_22055 = f__20176__auto__();
(statearr_22055[(6)] = c__20175__auto__);

return statearr_22055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
}));

return c__20175__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__22061 = arguments.length;
switch (G__22061) {
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
var G__22064 = arguments.length;
switch (G__22064) {
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
var G__22070 = arguments.length;
switch (G__22070) {
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
var c__20175__auto___22772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_22101){
var state_val_22102 = (state_22101[(1)]);
if((state_val_22102 === (7))){
var inst_22096 = (state_22101[(2)]);
var state_22101__$1 = state_22101;
var statearr_22103_22773 = state_22101__$1;
(statearr_22103_22773[(2)] = inst_22096);

(statearr_22103_22773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (1))){
var inst_22078 = null;
var state_22101__$1 = (function (){var statearr_22104 = state_22101;
(statearr_22104[(7)] = inst_22078);

return statearr_22104;
})();
var statearr_22105_22778 = state_22101__$1;
(statearr_22105_22778[(2)] = null);

(statearr_22105_22778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (4))){
var inst_22081 = (state_22101[(8)]);
var inst_22081__$1 = (state_22101[(2)]);
var inst_22082 = (inst_22081__$1 == null);
var inst_22083 = cljs.core.not(inst_22082);
var state_22101__$1 = (function (){var statearr_22106 = state_22101;
(statearr_22106[(8)] = inst_22081__$1);

return statearr_22106;
})();
if(inst_22083){
var statearr_22107_22779 = state_22101__$1;
(statearr_22107_22779[(1)] = (5));

} else {
var statearr_22108_22780 = state_22101__$1;
(statearr_22108_22780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (6))){
var state_22101__$1 = state_22101;
var statearr_22109_22781 = state_22101__$1;
(statearr_22109_22781[(2)] = null);

(statearr_22109_22781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (3))){
var inst_22098 = (state_22101[(2)]);
var inst_22099 = cljs.core.async.close_BANG_(out);
var state_22101__$1 = (function (){var statearr_22111 = state_22101;
(statearr_22111[(9)] = inst_22098);

return statearr_22111;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22101__$1,inst_22099);
} else {
if((state_val_22102 === (2))){
var state_22101__$1 = state_22101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22101__$1,(4),ch);
} else {
if((state_val_22102 === (11))){
var inst_22081 = (state_22101[(8)]);
var inst_22090 = (state_22101[(2)]);
var inst_22078 = inst_22081;
var state_22101__$1 = (function (){var statearr_22112 = state_22101;
(statearr_22112[(10)] = inst_22090);

(statearr_22112[(7)] = inst_22078);

return statearr_22112;
})();
var statearr_22113_22785 = state_22101__$1;
(statearr_22113_22785[(2)] = null);

(statearr_22113_22785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (9))){
var inst_22081 = (state_22101[(8)]);
var state_22101__$1 = state_22101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22101__$1,(11),out,inst_22081);
} else {
if((state_val_22102 === (5))){
var inst_22081 = (state_22101[(8)]);
var inst_22078 = (state_22101[(7)]);
var inst_22085 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22081,inst_22078);
var state_22101__$1 = state_22101;
if(inst_22085){
var statearr_22117_22789 = state_22101__$1;
(statearr_22117_22789[(1)] = (8));

} else {
var statearr_22118_22790 = state_22101__$1;
(statearr_22118_22790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (10))){
var inst_22093 = (state_22101[(2)]);
var state_22101__$1 = state_22101;
var statearr_22119_22791 = state_22101__$1;
(statearr_22119_22791[(2)] = inst_22093);

(statearr_22119_22791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (8))){
var inst_22078 = (state_22101[(7)]);
var tmp22116 = inst_22078;
var inst_22078__$1 = tmp22116;
var state_22101__$1 = (function (){var statearr_22120 = state_22101;
(statearr_22120[(7)] = inst_22078__$1);

return statearr_22120;
})();
var statearr_22121_22792 = state_22101__$1;
(statearr_22121_22792[(2)] = null);

(statearr_22121_22792[(1)] = (2));


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
var cljs$core$async$state_machine__19782__auto__ = null;
var cljs$core$async$state_machine__19782__auto____0 = (function (){
var statearr_22122 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22122[(0)] = cljs$core$async$state_machine__19782__auto__);

(statearr_22122[(1)] = (1));

return statearr_22122;
});
var cljs$core$async$state_machine__19782__auto____1 = (function (state_22101){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_22101);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e22123){var ex__19785__auto__ = e22123;
var statearr_22124_22793 = state_22101;
(statearr_22124_22793[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_22101[(4)]))){
var statearr_22125_22794 = state_22101;
(statearr_22125_22794[(1)] = cljs.core.first((state_22101[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22795 = state_22101;
state_22101 = G__22795;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$state_machine__19782__auto__ = function(state_22101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19782__auto____1.call(this,state_22101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19782__auto____0;
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19782__auto____1;
return cljs$core$async$state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_22126 = f__20176__auto__();
(statearr_22126[(6)] = c__20175__auto___22772);

return statearr_22126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__22128 = arguments.length;
switch (G__22128) {
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
var c__20175__auto___22800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_22166){
var state_val_22167 = (state_22166[(1)]);
if((state_val_22167 === (7))){
var inst_22162 = (state_22166[(2)]);
var state_22166__$1 = state_22166;
var statearr_22168_22804 = state_22166__$1;
(statearr_22168_22804[(2)] = inst_22162);

(statearr_22168_22804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (1))){
var inst_22129 = (new Array(n));
var inst_22130 = inst_22129;
var inst_22131 = (0);
var state_22166__$1 = (function (){var statearr_22169 = state_22166;
(statearr_22169[(7)] = inst_22130);

(statearr_22169[(8)] = inst_22131);

return statearr_22169;
})();
var statearr_22170_22805 = state_22166__$1;
(statearr_22170_22805[(2)] = null);

(statearr_22170_22805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (4))){
var inst_22134 = (state_22166[(9)]);
var inst_22134__$1 = (state_22166[(2)]);
var inst_22135 = (inst_22134__$1 == null);
var inst_22136 = cljs.core.not(inst_22135);
var state_22166__$1 = (function (){var statearr_22171 = state_22166;
(statearr_22171[(9)] = inst_22134__$1);

return statearr_22171;
})();
if(inst_22136){
var statearr_22172_22807 = state_22166__$1;
(statearr_22172_22807[(1)] = (5));

} else {
var statearr_22173_22808 = state_22166__$1;
(statearr_22173_22808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (15))){
var inst_22156 = (state_22166[(2)]);
var state_22166__$1 = state_22166;
var statearr_22174_22809 = state_22166__$1;
(statearr_22174_22809[(2)] = inst_22156);

(statearr_22174_22809[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (13))){
var state_22166__$1 = state_22166;
var statearr_22175_22811 = state_22166__$1;
(statearr_22175_22811[(2)] = null);

(statearr_22175_22811[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (6))){
var inst_22131 = (state_22166[(8)]);
var inst_22152 = (inst_22131 > (0));
var state_22166__$1 = state_22166;
if(cljs.core.truth_(inst_22152)){
var statearr_22176_22813 = state_22166__$1;
(statearr_22176_22813[(1)] = (12));

} else {
var statearr_22177_22814 = state_22166__$1;
(statearr_22177_22814[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (3))){
var inst_22164 = (state_22166[(2)]);
var state_22166__$1 = state_22166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22166__$1,inst_22164);
} else {
if((state_val_22167 === (12))){
var inst_22130 = (state_22166[(7)]);
var inst_22154 = cljs.core.vec(inst_22130);
var state_22166__$1 = state_22166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22166__$1,(15),out,inst_22154);
} else {
if((state_val_22167 === (2))){
var state_22166__$1 = state_22166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22166__$1,(4),ch);
} else {
if((state_val_22167 === (11))){
var inst_22146 = (state_22166[(2)]);
var inst_22147 = (new Array(n));
var inst_22130 = inst_22147;
var inst_22131 = (0);
var state_22166__$1 = (function (){var statearr_22178 = state_22166;
(statearr_22178[(10)] = inst_22146);

(statearr_22178[(7)] = inst_22130);

(statearr_22178[(8)] = inst_22131);

return statearr_22178;
})();
var statearr_22179_22815 = state_22166__$1;
(statearr_22179_22815[(2)] = null);

(statearr_22179_22815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (9))){
var inst_22130 = (state_22166[(7)]);
var inst_22144 = cljs.core.vec(inst_22130);
var state_22166__$1 = state_22166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22166__$1,(11),out,inst_22144);
} else {
if((state_val_22167 === (5))){
var inst_22130 = (state_22166[(7)]);
var inst_22131 = (state_22166[(8)]);
var inst_22134 = (state_22166[(9)]);
var inst_22139 = (state_22166[(11)]);
var inst_22138 = (inst_22130[inst_22131] = inst_22134);
var inst_22139__$1 = (inst_22131 + (1));
var inst_22140 = (inst_22139__$1 < n);
var state_22166__$1 = (function (){var statearr_22180 = state_22166;
(statearr_22180[(12)] = inst_22138);

(statearr_22180[(11)] = inst_22139__$1);

return statearr_22180;
})();
if(cljs.core.truth_(inst_22140)){
var statearr_22181_22817 = state_22166__$1;
(statearr_22181_22817[(1)] = (8));

} else {
var statearr_22182_22818 = state_22166__$1;
(statearr_22182_22818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (14))){
var inst_22159 = (state_22166[(2)]);
var inst_22160 = cljs.core.async.close_BANG_(out);
var state_22166__$1 = (function (){var statearr_22184 = state_22166;
(statearr_22184[(13)] = inst_22159);

return statearr_22184;
})();
var statearr_22185_22819 = state_22166__$1;
(statearr_22185_22819[(2)] = inst_22160);

(statearr_22185_22819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (10))){
var inst_22150 = (state_22166[(2)]);
var state_22166__$1 = state_22166;
var statearr_22186_22820 = state_22166__$1;
(statearr_22186_22820[(2)] = inst_22150);

(statearr_22186_22820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22167 === (8))){
var inst_22130 = (state_22166[(7)]);
var inst_22139 = (state_22166[(11)]);
var tmp22183 = inst_22130;
var inst_22130__$1 = tmp22183;
var inst_22131 = inst_22139;
var state_22166__$1 = (function (){var statearr_22187 = state_22166;
(statearr_22187[(7)] = inst_22130__$1);

(statearr_22187[(8)] = inst_22131);

return statearr_22187;
})();
var statearr_22188_22821 = state_22166__$1;
(statearr_22188_22821[(2)] = null);

(statearr_22188_22821[(1)] = (2));


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
var cljs$core$async$state_machine__19782__auto__ = null;
var cljs$core$async$state_machine__19782__auto____0 = (function (){
var statearr_22189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22189[(0)] = cljs$core$async$state_machine__19782__auto__);

(statearr_22189[(1)] = (1));

return statearr_22189;
});
var cljs$core$async$state_machine__19782__auto____1 = (function (state_22166){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_22166);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e22190){var ex__19785__auto__ = e22190;
var statearr_22191_22822 = state_22166;
(statearr_22191_22822[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_22166[(4)]))){
var statearr_22192_22823 = state_22166;
(statearr_22192_22823[(1)] = cljs.core.first((state_22166[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22824 = state_22166;
state_22166 = G__22824;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$state_machine__19782__auto__ = function(state_22166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19782__auto____1.call(this,state_22166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19782__auto____0;
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19782__auto____1;
return cljs$core$async$state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_22193 = f__20176__auto__();
(statearr_22193[(6)] = c__20175__auto___22800);

return statearr_22193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__22195 = arguments.length;
switch (G__22195) {
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
var c__20175__auto___22826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20176__auto__ = (function (){var switch__19781__auto__ = (function (state_22240){
var state_val_22241 = (state_22240[(1)]);
if((state_val_22241 === (7))){
var inst_22236 = (state_22240[(2)]);
var state_22240__$1 = state_22240;
var statearr_22242_22827 = state_22240__$1;
(statearr_22242_22827[(2)] = inst_22236);

(statearr_22242_22827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (1))){
var inst_22196 = [];
var inst_22197 = inst_22196;
var inst_22198 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22240__$1 = (function (){var statearr_22243 = state_22240;
(statearr_22243[(7)] = inst_22197);

(statearr_22243[(8)] = inst_22198);

return statearr_22243;
})();
var statearr_22244_22828 = state_22240__$1;
(statearr_22244_22828[(2)] = null);

(statearr_22244_22828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (4))){
var inst_22201 = (state_22240[(9)]);
var inst_22201__$1 = (state_22240[(2)]);
var inst_22202 = (inst_22201__$1 == null);
var inst_22203 = cljs.core.not(inst_22202);
var state_22240__$1 = (function (){var statearr_22245 = state_22240;
(statearr_22245[(9)] = inst_22201__$1);

return statearr_22245;
})();
if(inst_22203){
var statearr_22246_22833 = state_22240__$1;
(statearr_22246_22833[(1)] = (5));

} else {
var statearr_22247_22834 = state_22240__$1;
(statearr_22247_22834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (15))){
var inst_22197 = (state_22240[(7)]);
var inst_22228 = cljs.core.vec(inst_22197);
var state_22240__$1 = state_22240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22240__$1,(18),out,inst_22228);
} else {
if((state_val_22241 === (13))){
var inst_22223 = (state_22240[(2)]);
var state_22240__$1 = state_22240;
var statearr_22248_22835 = state_22240__$1;
(statearr_22248_22835[(2)] = inst_22223);

(statearr_22248_22835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (6))){
var inst_22197 = (state_22240[(7)]);
var inst_22225 = inst_22197.length;
var inst_22226 = (inst_22225 > (0));
var state_22240__$1 = state_22240;
if(cljs.core.truth_(inst_22226)){
var statearr_22249_22836 = state_22240__$1;
(statearr_22249_22836[(1)] = (15));

} else {
var statearr_22250_22837 = state_22240__$1;
(statearr_22250_22837[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (17))){
var inst_22233 = (state_22240[(2)]);
var inst_22234 = cljs.core.async.close_BANG_(out);
var state_22240__$1 = (function (){var statearr_22251 = state_22240;
(statearr_22251[(10)] = inst_22233);

return statearr_22251;
})();
var statearr_22252_22838 = state_22240__$1;
(statearr_22252_22838[(2)] = inst_22234);

(statearr_22252_22838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (3))){
var inst_22238 = (state_22240[(2)]);
var state_22240__$1 = state_22240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22240__$1,inst_22238);
} else {
if((state_val_22241 === (12))){
var inst_22197 = (state_22240[(7)]);
var inst_22216 = cljs.core.vec(inst_22197);
var state_22240__$1 = state_22240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22240__$1,(14),out,inst_22216);
} else {
if((state_val_22241 === (2))){
var state_22240__$1 = state_22240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22240__$1,(4),ch);
} else {
if((state_val_22241 === (11))){
var inst_22197 = (state_22240[(7)]);
var inst_22201 = (state_22240[(9)]);
var inst_22205 = (state_22240[(11)]);
var inst_22213 = inst_22197.push(inst_22201);
var tmp22253 = inst_22197;
var inst_22197__$1 = tmp22253;
var inst_22198 = inst_22205;
var state_22240__$1 = (function (){var statearr_22254 = state_22240;
(statearr_22254[(12)] = inst_22213);

(statearr_22254[(7)] = inst_22197__$1);

(statearr_22254[(8)] = inst_22198);

return statearr_22254;
})();
var statearr_22255_22839 = state_22240__$1;
(statearr_22255_22839[(2)] = null);

(statearr_22255_22839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (9))){
var inst_22198 = (state_22240[(8)]);
var inst_22209 = cljs.core.keyword_identical_QMARK_(inst_22198,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_22240__$1 = state_22240;
var statearr_22256_22840 = state_22240__$1;
(statearr_22256_22840[(2)] = inst_22209);

(statearr_22256_22840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (5))){
var inst_22201 = (state_22240[(9)]);
var inst_22205 = (state_22240[(11)]);
var inst_22198 = (state_22240[(8)]);
var inst_22206 = (state_22240[(13)]);
var inst_22205__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22201) : f.call(null,inst_22201));
var inst_22206__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22205__$1,inst_22198);
var state_22240__$1 = (function (){var statearr_22257 = state_22240;
(statearr_22257[(11)] = inst_22205__$1);

(statearr_22257[(13)] = inst_22206__$1);

return statearr_22257;
})();
if(inst_22206__$1){
var statearr_22258_22842 = state_22240__$1;
(statearr_22258_22842[(1)] = (8));

} else {
var statearr_22259_22843 = state_22240__$1;
(statearr_22259_22843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (14))){
var inst_22201 = (state_22240[(9)]);
var inst_22205 = (state_22240[(11)]);
var inst_22218 = (state_22240[(2)]);
var inst_22219 = [];
var inst_22220 = inst_22219.push(inst_22201);
var inst_22197 = inst_22219;
var inst_22198 = inst_22205;
var state_22240__$1 = (function (){var statearr_22260 = state_22240;
(statearr_22260[(14)] = inst_22218);

(statearr_22260[(15)] = inst_22220);

(statearr_22260[(7)] = inst_22197);

(statearr_22260[(8)] = inst_22198);

return statearr_22260;
})();
var statearr_22261_22844 = state_22240__$1;
(statearr_22261_22844[(2)] = null);

(statearr_22261_22844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (16))){
var state_22240__$1 = state_22240;
var statearr_22262_22845 = state_22240__$1;
(statearr_22262_22845[(2)] = null);

(statearr_22262_22845[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (10))){
var inst_22211 = (state_22240[(2)]);
var state_22240__$1 = state_22240;
if(cljs.core.truth_(inst_22211)){
var statearr_22263_22846 = state_22240__$1;
(statearr_22263_22846[(1)] = (11));

} else {
var statearr_22264_22848 = state_22240__$1;
(statearr_22264_22848[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (18))){
var inst_22230 = (state_22240[(2)]);
var state_22240__$1 = state_22240;
var statearr_22265_22849 = state_22240__$1;
(statearr_22265_22849[(2)] = inst_22230);

(statearr_22265_22849[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (8))){
var inst_22206 = (state_22240[(13)]);
var state_22240__$1 = state_22240;
var statearr_22266_22851 = state_22240__$1;
(statearr_22266_22851[(2)] = inst_22206);

(statearr_22266_22851[(1)] = (10));


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
var cljs$core$async$state_machine__19782__auto__ = null;
var cljs$core$async$state_machine__19782__auto____0 = (function (){
var statearr_22267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22267[(0)] = cljs$core$async$state_machine__19782__auto__);

(statearr_22267[(1)] = (1));

return statearr_22267;
});
var cljs$core$async$state_machine__19782__auto____1 = (function (state_22240){
while(true){
var ret_value__19783__auto__ = (function (){try{while(true){
var result__19784__auto__ = switch__19781__auto__(state_22240);
if(cljs.core.keyword_identical_QMARK_(result__19784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19784__auto__;
}
break;
}
}catch (e22268){var ex__19785__auto__ = e22268;
var statearr_22269_22852 = state_22240;
(statearr_22269_22852[(2)] = ex__19785__auto__);


if(cljs.core.seq((state_22240[(4)]))){
var statearr_22270_22853 = state_22240;
(statearr_22270_22853[(1)] = cljs.core.first((state_22240[(4)])));

} else {
throw ex__19785__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22854 = state_22240;
state_22240 = G__22854;
continue;
} else {
return ret_value__19783__auto__;
}
break;
}
});
cljs$core$async$state_machine__19782__auto__ = function(state_22240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19782__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19782__auto____1.call(this,state_22240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19782__auto____0;
cljs$core$async$state_machine__19782__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19782__auto____1;
return cljs$core$async$state_machine__19782__auto__;
})()
})();
var state__20177__auto__ = (function (){var statearr_22271 = f__20176__auto__();
(statearr_22271[(6)] = c__20175__auto___22826);

return statearr_22271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20177__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
