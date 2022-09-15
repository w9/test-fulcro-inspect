goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__62651 = arguments.length;
switch (G__62651) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62652 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62652 = (function (f,blockable,meta62653){
this.f = f;
this.blockable = blockable;
this.meta62653 = meta62653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62654,meta62653__$1){
var self__ = this;
var _62654__$1 = this;
return (new cljs.core.async.t_cljs$core$async62652(self__.f,self__.blockable,meta62653__$1));
}));

(cljs.core.async.t_cljs$core$async62652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62654){
var self__ = this;
var _62654__$1 = this;
return self__.meta62653;
}));

(cljs.core.async.t_cljs$core$async62652.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62652.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async62652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async62652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta62653","meta62653",-1899906766,null)], null);
}));

(cljs.core.async.t_cljs$core$async62652.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62652");

(cljs.core.async.t_cljs$core$async62652.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62652");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62652.
 */
cljs.core.async.__GT_t_cljs$core$async62652 = (function cljs$core$async$__GT_t_cljs$core$async62652(f__$1,blockable__$1,meta62653){
return (new cljs.core.async.t_cljs$core$async62652(f__$1,blockable__$1,meta62653));
});

}

return (new cljs.core.async.t_cljs$core$async62652(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__62675 = arguments.length;
switch (G__62675) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__62679 = arguments.length;
switch (G__62679) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__62686 = arguments.length;
switch (G__62686) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_65468 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_65468) : fn1.call(null,val_65468));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_65468) : fn1.call(null,val_65468));
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
var G__62703 = arguments.length;
switch (G__62703) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
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
var n__5636__auto___65473 = n;
var x_65475 = (0);
while(true){
if((x_65475 < n__5636__auto___65473)){
(a[x_65475] = x_65475);

var G__65477 = (x_65475 + (1));
x_65475 = G__65477;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62710 = (function (flag,meta62711){
this.flag = flag;
this.meta62711 = meta62711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62712,meta62711__$1){
var self__ = this;
var _62712__$1 = this;
return (new cljs.core.async.t_cljs$core$async62710(self__.flag,meta62711__$1));
}));

(cljs.core.async.t_cljs$core$async62710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62712){
var self__ = this;
var _62712__$1 = this;
return self__.meta62711;
}));

(cljs.core.async.t_cljs$core$async62710.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async62710.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async62710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta62711","meta62711",228665906,null)], null);
}));

(cljs.core.async.t_cljs$core$async62710.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62710");

(cljs.core.async.t_cljs$core$async62710.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62710");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62710.
 */
cljs.core.async.__GT_t_cljs$core$async62710 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async62710(flag__$1,meta62711){
return (new cljs.core.async.t_cljs$core$async62710(flag__$1,meta62711));
});

}

return (new cljs.core.async.t_cljs$core$async62710(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62724 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62724 = (function (flag,cb,meta62725){
this.flag = flag;
this.cb = cb;
this.meta62725 = meta62725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62726,meta62725__$1){
var self__ = this;
var _62726__$1 = this;
return (new cljs.core.async.t_cljs$core$async62724(self__.flag,self__.cb,meta62725__$1));
}));

(cljs.core.async.t_cljs$core$async62724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62726){
var self__ = this;
var _62726__$1 = this;
return self__.meta62725;
}));

(cljs.core.async.t_cljs$core$async62724.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62724.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async62724.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62724.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async62724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta62725","meta62725",-850534317,null)], null);
}));

(cljs.core.async.t_cljs$core$async62724.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62724");

(cljs.core.async.t_cljs$core$async62724.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62724");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62724.
 */
cljs.core.async.__GT_t_cljs$core$async62724 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async62724(flag__$1,cb__$1,meta62725){
return (new cljs.core.async.t_cljs$core$async62724(flag__$1,cb__$1,meta62725));
});

}

return (new cljs.core.async.t_cljs$core$async62724(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__62737_SHARP_){
var G__62753 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62737_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__62753) : fret.call(null,G__62753));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__62741_SHARP_){
var G__62754 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62741_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__62754) : fret.call(null,G__62754));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__65483 = (i + (1));
i = G__65483;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___65485 = arguments.length;
var i__5770__auto___65486 = (0);
while(true){
if((i__5770__auto___65486 < len__5769__auto___65485)){
args__5775__auto__.push((arguments[i__5770__auto___65486]));

var G__65487 = (i__5770__auto___65486 + (1));
i__5770__auto___65486 = G__65487;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__62774){
var map__62775 = p__62774;
var map__62775__$1 = cljs.core.__destructure_map(map__62775);
var opts = map__62775__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq62763){
var G__62766 = cljs.core.first(seq62763);
var seq62763__$1 = cljs.core.next(seq62763);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62766,seq62763__$1);
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
var G__62780 = arguments.length;
switch (G__62780) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__62556__auto___65495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_62827){
var state_val_62830 = (state_62827[(1)]);
if((state_val_62830 === (7))){
var inst_62818 = (state_62827[(2)]);
var state_62827__$1 = state_62827;
var statearr_62857_65498 = state_62827__$1;
(statearr_62857_65498[(2)] = inst_62818);

(statearr_62857_65498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62830 === (1))){
var state_62827__$1 = state_62827;
var statearr_62863_65502 = state_62827__$1;
(statearr_62863_65502[(2)] = null);

(statearr_62863_65502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62830 === (4))){
var inst_62791 = (state_62827[(7)]);
var inst_62791__$1 = (state_62827[(2)]);
var inst_62797 = (inst_62791__$1 == null);
var state_62827__$1 = (function (){var statearr_62864 = state_62827;
(statearr_62864[(7)] = inst_62791__$1);

return statearr_62864;
})();
if(cljs.core.truth_(inst_62797)){
var statearr_62866_65517 = state_62827__$1;
(statearr_62866_65517[(1)] = (5));

} else {
var statearr_62870_65523 = state_62827__$1;
(statearr_62870_65523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62830 === (13))){
var state_62827__$1 = state_62827;
var statearr_62873_65525 = state_62827__$1;
(statearr_62873_65525[(2)] = null);

(statearr_62873_65525[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62830 === (6))){
var inst_62791 = (state_62827[(7)]);
var state_62827__$1 = state_62827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62827__$1,(11),to,inst_62791);
} else {
if((state_val_62830 === (3))){
var inst_62820 = (state_62827[(2)]);
var state_62827__$1 = state_62827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62827__$1,inst_62820);
} else {
if((state_val_62830 === (12))){
var state_62827__$1 = state_62827;
var statearr_62879_65530 = state_62827__$1;
(statearr_62879_65530[(2)] = null);

(statearr_62879_65530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62830 === (2))){
var state_62827__$1 = state_62827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62827__$1,(4),from);
} else {
if((state_val_62830 === (11))){
var inst_62808 = (state_62827[(2)]);
var state_62827__$1 = state_62827;
if(cljs.core.truth_(inst_62808)){
var statearr_62880_65531 = state_62827__$1;
(statearr_62880_65531[(1)] = (12));

} else {
var statearr_62881_65532 = state_62827__$1;
(statearr_62881_65532[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62830 === (9))){
var state_62827__$1 = state_62827;
var statearr_62882_65533 = state_62827__$1;
(statearr_62882_65533[(2)] = null);

(statearr_62882_65533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62830 === (5))){
var state_62827__$1 = state_62827;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62883_65535 = state_62827__$1;
(statearr_62883_65535[(1)] = (8));

} else {
var statearr_62884_65536 = state_62827__$1;
(statearr_62884_65536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62830 === (14))){
var inst_62815 = (state_62827[(2)]);
var state_62827__$1 = state_62827;
var statearr_62885_65537 = state_62827__$1;
(statearr_62885_65537[(2)] = inst_62815);

(statearr_62885_65537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62830 === (10))){
var inst_62805 = (state_62827[(2)]);
var state_62827__$1 = state_62827;
var statearr_62888_65538 = state_62827__$1;
(statearr_62888_65538[(2)] = inst_62805);

(statearr_62888_65538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62830 === (8))){
var inst_62801 = cljs.core.async.close_BANG_(to);
var state_62827__$1 = state_62827;
var statearr_62889_65539 = state_62827__$1;
(statearr_62889_65539[(2)] = inst_62801);

(statearr_62889_65539[(1)] = (10));


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
var cljs$core$async$state_machine__62126__auto__ = null;
var cljs$core$async$state_machine__62126__auto____0 = (function (){
var statearr_62894 = [null,null,null,null,null,null,null,null];
(statearr_62894[(0)] = cljs$core$async$state_machine__62126__auto__);

(statearr_62894[(1)] = (1));

return statearr_62894;
});
var cljs$core$async$state_machine__62126__auto____1 = (function (state_62827){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_62827);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e62895){var ex__62129__auto__ = e62895;
var statearr_62896_65542 = state_62827;
(statearr_62896_65542[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_62827[(4)]))){
var statearr_62897_65543 = state_62827;
(statearr_62897_65543[(1)] = cljs.core.first((state_62827[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65546 = state_62827;
state_62827 = G__65546;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$state_machine__62126__auto__ = function(state_62827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62126__auto____1.call(this,state_62827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62126__auto____0;
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62126__auto____1;
return cljs$core$async$state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_62901 = f__62557__auto__();
(statearr_62901[(6)] = c__62556__auto___65495);

return statearr_62901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
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
var process__$1 = (function (p__62906){
var vec__62907 = p__62906;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62907,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62907,(1),null);
var job = vec__62907;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__62556__auto___65551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_62914){
var state_val_62915 = (state_62914[(1)]);
if((state_val_62915 === (1))){
var state_62914__$1 = state_62914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62914__$1,(2),res,v);
} else {
if((state_val_62915 === (2))){
var inst_62911 = (state_62914[(2)]);
var inst_62912 = cljs.core.async.close_BANG_(res);
var state_62914__$1 = (function (){var statearr_62919 = state_62914;
(statearr_62919[(7)] = inst_62911);

return statearr_62919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62914__$1,inst_62912);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____0 = (function (){
var statearr_62922 = [null,null,null,null,null,null,null,null];
(statearr_62922[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__);

(statearr_62922[(1)] = (1));

return statearr_62922;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____1 = (function (state_62914){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_62914);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e62925){var ex__62129__auto__ = e62925;
var statearr_62926_65556 = state_62914;
(statearr_62926_65556[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_62914[(4)]))){
var statearr_62927_65557 = state_62914;
(statearr_62927_65557[(1)] = cljs.core.first((state_62914[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65559 = state_62914;
state_62914 = G__65559;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__ = function(state_62914){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____1.call(this,state_62914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_62932 = f__62557__auto__();
(statearr_62932[(6)] = c__62556__auto___65551);

return statearr_62932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__62933){
var vec__62934 = p__62933;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62934,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62934,(1),null);
var job = vec__62934;
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
var n__5636__auto___65562 = n;
var __65563 = (0);
while(true){
if((__65563 < n__5636__auto___65562)){
var G__62942_65565 = type;
var G__62942_65566__$1 = (((G__62942_65565 instanceof cljs.core.Keyword))?G__62942_65565.fqn:null);
switch (G__62942_65566__$1) {
case "compute":
var c__62556__auto___65568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__65563,c__62556__auto___65568,G__62942_65565,G__62942_65566__$1,n__5636__auto___65562,jobs,results,process__$1,async){
return (function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = ((function (__65563,c__62556__auto___65568,G__62942_65565,G__62942_65566__$1,n__5636__auto___65562,jobs,results,process__$1,async){
return (function (state_62959){
var state_val_62960 = (state_62959[(1)]);
if((state_val_62960 === (1))){
var state_62959__$1 = state_62959;
var statearr_62964_65571 = state_62959__$1;
(statearr_62964_65571[(2)] = null);

(statearr_62964_65571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62960 === (2))){
var state_62959__$1 = state_62959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62959__$1,(4),jobs);
} else {
if((state_val_62960 === (3))){
var inst_62954 = (state_62959[(2)]);
var state_62959__$1 = state_62959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62959__$1,inst_62954);
} else {
if((state_val_62960 === (4))){
var inst_62945 = (state_62959[(2)]);
var inst_62946 = process__$1(inst_62945);
var state_62959__$1 = state_62959;
if(cljs.core.truth_(inst_62946)){
var statearr_62969_65576 = state_62959__$1;
(statearr_62969_65576[(1)] = (5));

} else {
var statearr_62971_65577 = state_62959__$1;
(statearr_62971_65577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62960 === (5))){
var state_62959__$1 = state_62959;
var statearr_62976_65579 = state_62959__$1;
(statearr_62976_65579[(2)] = null);

(statearr_62976_65579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62960 === (6))){
var state_62959__$1 = state_62959;
var statearr_62980_65581 = state_62959__$1;
(statearr_62980_65581[(2)] = null);

(statearr_62980_65581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62960 === (7))){
var inst_62952 = (state_62959[(2)]);
var state_62959__$1 = state_62959;
var statearr_62981_65582 = state_62959__$1;
(statearr_62981_65582[(2)] = inst_62952);

(statearr_62981_65582[(1)] = (3));


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
});})(__65563,c__62556__auto___65568,G__62942_65565,G__62942_65566__$1,n__5636__auto___65562,jobs,results,process__$1,async))
;
return ((function (__65563,switch__62125__auto__,c__62556__auto___65568,G__62942_65565,G__62942_65566__$1,n__5636__auto___65562,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____0 = (function (){
var statearr_62982 = [null,null,null,null,null,null,null];
(statearr_62982[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__);

(statearr_62982[(1)] = (1));

return statearr_62982;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____1 = (function (state_62959){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_62959);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e62985){var ex__62129__auto__ = e62985;
var statearr_62986_65585 = state_62959;
(statearr_62986_65585[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_62959[(4)]))){
var statearr_62987_65587 = state_62959;
(statearr_62987_65587[(1)] = cljs.core.first((state_62959[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65591 = state_62959;
state_62959 = G__65591;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__ = function(state_62959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____1.call(this,state_62959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__;
})()
;})(__65563,switch__62125__auto__,c__62556__auto___65568,G__62942_65565,G__62942_65566__$1,n__5636__auto___65562,jobs,results,process__$1,async))
})();
var state__62558__auto__ = (function (){var statearr_62988 = f__62557__auto__();
(statearr_62988[(6)] = c__62556__auto___65568);

return statearr_62988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
});})(__65563,c__62556__auto___65568,G__62942_65565,G__62942_65566__$1,n__5636__auto___65562,jobs,results,process__$1,async))
);


break;
case "async":
var c__62556__auto___65595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__65563,c__62556__auto___65595,G__62942_65565,G__62942_65566__$1,n__5636__auto___65562,jobs,results,process__$1,async){
return (function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = ((function (__65563,c__62556__auto___65595,G__62942_65565,G__62942_65566__$1,n__5636__auto___65562,jobs,results,process__$1,async){
return (function (state_63005){
var state_val_63006 = (state_63005[(1)]);
if((state_val_63006 === (1))){
var state_63005__$1 = state_63005;
var statearr_63010_65597 = state_63005__$1;
(statearr_63010_65597[(2)] = null);

(statearr_63010_65597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63006 === (2))){
var state_63005__$1 = state_63005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63005__$1,(4),jobs);
} else {
if((state_val_63006 === (3))){
var inst_63003 = (state_63005[(2)]);
var state_63005__$1 = state_63005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63005__$1,inst_63003);
} else {
if((state_val_63006 === (4))){
var inst_62995 = (state_63005[(2)]);
var inst_62996 = async(inst_62995);
var state_63005__$1 = state_63005;
if(cljs.core.truth_(inst_62996)){
var statearr_63012_65601 = state_63005__$1;
(statearr_63012_65601[(1)] = (5));

} else {
var statearr_63013_65602 = state_63005__$1;
(statearr_63013_65602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63006 === (5))){
var state_63005__$1 = state_63005;
var statearr_63014_65604 = state_63005__$1;
(statearr_63014_65604[(2)] = null);

(statearr_63014_65604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63006 === (6))){
var state_63005__$1 = state_63005;
var statearr_63016_65605 = state_63005__$1;
(statearr_63016_65605[(2)] = null);

(statearr_63016_65605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63006 === (7))){
var inst_63001 = (state_63005[(2)]);
var state_63005__$1 = state_63005;
var statearr_63017_65609 = state_63005__$1;
(statearr_63017_65609[(2)] = inst_63001);

(statearr_63017_65609[(1)] = (3));


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
});})(__65563,c__62556__auto___65595,G__62942_65565,G__62942_65566__$1,n__5636__auto___65562,jobs,results,process__$1,async))
;
return ((function (__65563,switch__62125__auto__,c__62556__auto___65595,G__62942_65565,G__62942_65566__$1,n__5636__auto___65562,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____0 = (function (){
var statearr_63019 = [null,null,null,null,null,null,null];
(statearr_63019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__);

(statearr_63019[(1)] = (1));

return statearr_63019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____1 = (function (state_63005){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_63005);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e63020){var ex__62129__auto__ = e63020;
var statearr_63021_65612 = state_63005;
(statearr_63021_65612[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_63005[(4)]))){
var statearr_63022_65613 = state_63005;
(statearr_63022_65613[(1)] = cljs.core.first((state_63005[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65614 = state_63005;
state_63005 = G__65614;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__ = function(state_63005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____1.call(this,state_63005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__;
})()
;})(__65563,switch__62125__auto__,c__62556__auto___65595,G__62942_65565,G__62942_65566__$1,n__5636__auto___65562,jobs,results,process__$1,async))
})();
var state__62558__auto__ = (function (){var statearr_63024 = f__62557__auto__();
(statearr_63024[(6)] = c__62556__auto___65595);

return statearr_63024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
});})(__65563,c__62556__auto___65595,G__62942_65565,G__62942_65566__$1,n__5636__auto___65562,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62942_65566__$1)].join('')));

}

var G__65615 = (__65563 + (1));
__65563 = G__65615;
continue;
} else {
}
break;
}

var c__62556__auto___65616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_63053){
var state_val_63054 = (state_63053[(1)]);
if((state_val_63054 === (7))){
var inst_63049 = (state_63053[(2)]);
var state_63053__$1 = state_63053;
var statearr_63059_65618 = state_63053__$1;
(statearr_63059_65618[(2)] = inst_63049);

(statearr_63059_65618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63054 === (1))){
var state_63053__$1 = state_63053;
var statearr_63060_65620 = state_63053__$1;
(statearr_63060_65620[(2)] = null);

(statearr_63060_65620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63054 === (4))){
var inst_63030 = (state_63053[(7)]);
var inst_63030__$1 = (state_63053[(2)]);
var inst_63031 = (inst_63030__$1 == null);
var state_63053__$1 = (function (){var statearr_63061 = state_63053;
(statearr_63061[(7)] = inst_63030__$1);

return statearr_63061;
})();
if(cljs.core.truth_(inst_63031)){
var statearr_63063_65622 = state_63053__$1;
(statearr_63063_65622[(1)] = (5));

} else {
var statearr_63064_65624 = state_63053__$1;
(statearr_63064_65624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63054 === (6))){
var inst_63035 = (state_63053[(8)]);
var inst_63030 = (state_63053[(7)]);
var inst_63035__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_63040 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63041 = [inst_63030,inst_63035__$1];
var inst_63042 = (new cljs.core.PersistentVector(null,2,(5),inst_63040,inst_63041,null));
var state_63053__$1 = (function (){var statearr_63066 = state_63053;
(statearr_63066[(8)] = inst_63035__$1);

return statearr_63066;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63053__$1,(8),jobs,inst_63042);
} else {
if((state_val_63054 === (3))){
var inst_63051 = (state_63053[(2)]);
var state_63053__$1 = state_63053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63053__$1,inst_63051);
} else {
if((state_val_63054 === (2))){
var state_63053__$1 = state_63053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63053__$1,(4),from);
} else {
if((state_val_63054 === (9))){
var inst_63046 = (state_63053[(2)]);
var state_63053__$1 = (function (){var statearr_63067 = state_63053;
(statearr_63067[(9)] = inst_63046);

return statearr_63067;
})();
var statearr_63068_65628 = state_63053__$1;
(statearr_63068_65628[(2)] = null);

(statearr_63068_65628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63054 === (5))){
var inst_63033 = cljs.core.async.close_BANG_(jobs);
var state_63053__$1 = state_63053;
var statearr_63069_65629 = state_63053__$1;
(statearr_63069_65629[(2)] = inst_63033);

(statearr_63069_65629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63054 === (8))){
var inst_63035 = (state_63053[(8)]);
var inst_63044 = (state_63053[(2)]);
var state_63053__$1 = (function (){var statearr_63070 = state_63053;
(statearr_63070[(10)] = inst_63044);

return statearr_63070;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63053__$1,(9),results,inst_63035);
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
var cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____0 = (function (){
var statearr_63072 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__);

(statearr_63072[(1)] = (1));

return statearr_63072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____1 = (function (state_63053){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_63053);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e63073){var ex__62129__auto__ = e63073;
var statearr_63074_65632 = state_63053;
(statearr_63074_65632[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_63053[(4)]))){
var statearr_63075_65633 = state_63053;
(statearr_63075_65633[(1)] = cljs.core.first((state_63053[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65634 = state_63053;
state_63053 = G__65634;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__ = function(state_63053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____1.call(this,state_63053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_63076 = f__62557__auto__();
(statearr_63076[(6)] = c__62556__auto___65616);

return statearr_63076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
}));


var c__62556__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_63114){
var state_val_63115 = (state_63114[(1)]);
if((state_val_63115 === (7))){
var inst_63110 = (state_63114[(2)]);
var state_63114__$1 = state_63114;
var statearr_63117_65635 = state_63114__$1;
(statearr_63117_65635[(2)] = inst_63110);

(statearr_63117_65635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63115 === (20))){
var state_63114__$1 = state_63114;
var statearr_63118_65637 = state_63114__$1;
(statearr_63118_65637[(2)] = null);

(statearr_63118_65637[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63115 === (1))){
var state_63114__$1 = state_63114;
var statearr_63119_65639 = state_63114__$1;
(statearr_63119_65639[(2)] = null);

(statearr_63119_65639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63115 === (4))){
var inst_63079 = (state_63114[(7)]);
var inst_63079__$1 = (state_63114[(2)]);
var inst_63080 = (inst_63079__$1 == null);
var state_63114__$1 = (function (){var statearr_63120 = state_63114;
(statearr_63120[(7)] = inst_63079__$1);

return statearr_63120;
})();
if(cljs.core.truth_(inst_63080)){
var statearr_63121_65640 = state_63114__$1;
(statearr_63121_65640[(1)] = (5));

} else {
var statearr_63122_65641 = state_63114__$1;
(statearr_63122_65641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63115 === (15))){
var inst_63092 = (state_63114[(8)]);
var state_63114__$1 = state_63114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63114__$1,(18),to,inst_63092);
} else {
if((state_val_63115 === (21))){
var inst_63105 = (state_63114[(2)]);
var state_63114__$1 = state_63114;
var statearr_63124_65642 = state_63114__$1;
(statearr_63124_65642[(2)] = inst_63105);

(statearr_63124_65642[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63115 === (13))){
var inst_63107 = (state_63114[(2)]);
var state_63114__$1 = (function (){var statearr_63125 = state_63114;
(statearr_63125[(9)] = inst_63107);

return statearr_63125;
})();
var statearr_63126_65645 = state_63114__$1;
(statearr_63126_65645[(2)] = null);

(statearr_63126_65645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63115 === (6))){
var inst_63079 = (state_63114[(7)]);
var state_63114__$1 = state_63114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63114__$1,(11),inst_63079);
} else {
if((state_val_63115 === (17))){
var inst_63100 = (state_63114[(2)]);
var state_63114__$1 = state_63114;
if(cljs.core.truth_(inst_63100)){
var statearr_63127_65646 = state_63114__$1;
(statearr_63127_65646[(1)] = (19));

} else {
var statearr_63128_65647 = state_63114__$1;
(statearr_63128_65647[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63115 === (3))){
var inst_63112 = (state_63114[(2)]);
var state_63114__$1 = state_63114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63114__$1,inst_63112);
} else {
if((state_val_63115 === (12))){
var inst_63089 = (state_63114[(10)]);
var state_63114__$1 = state_63114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63114__$1,(14),inst_63089);
} else {
if((state_val_63115 === (2))){
var state_63114__$1 = state_63114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63114__$1,(4),results);
} else {
if((state_val_63115 === (19))){
var state_63114__$1 = state_63114;
var statearr_63129_65648 = state_63114__$1;
(statearr_63129_65648[(2)] = null);

(statearr_63129_65648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63115 === (11))){
var inst_63089 = (state_63114[(2)]);
var state_63114__$1 = (function (){var statearr_63130 = state_63114;
(statearr_63130[(10)] = inst_63089);

return statearr_63130;
})();
var statearr_63131_65649 = state_63114__$1;
(statearr_63131_65649[(2)] = null);

(statearr_63131_65649[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63115 === (9))){
var state_63114__$1 = state_63114;
var statearr_63132_65651 = state_63114__$1;
(statearr_63132_65651[(2)] = null);

(statearr_63132_65651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63115 === (5))){
var state_63114__$1 = state_63114;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63133_65653 = state_63114__$1;
(statearr_63133_65653[(1)] = (8));

} else {
var statearr_63138_65655 = state_63114__$1;
(statearr_63138_65655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63115 === (14))){
var inst_63094 = (state_63114[(11)]);
var inst_63092 = (state_63114[(8)]);
var inst_63092__$1 = (state_63114[(2)]);
var inst_63093 = (inst_63092__$1 == null);
var inst_63094__$1 = cljs.core.not(inst_63093);
var state_63114__$1 = (function (){var statearr_63139 = state_63114;
(statearr_63139[(11)] = inst_63094__$1);

(statearr_63139[(8)] = inst_63092__$1);

return statearr_63139;
})();
if(inst_63094__$1){
var statearr_63140_65659 = state_63114__$1;
(statearr_63140_65659[(1)] = (15));

} else {
var statearr_63141_65660 = state_63114__$1;
(statearr_63141_65660[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63115 === (16))){
var inst_63094 = (state_63114[(11)]);
var state_63114__$1 = state_63114;
var statearr_63142_65661 = state_63114__$1;
(statearr_63142_65661[(2)] = inst_63094);

(statearr_63142_65661[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63115 === (10))){
var inst_63086 = (state_63114[(2)]);
var state_63114__$1 = state_63114;
var statearr_63144_65662 = state_63114__$1;
(statearr_63144_65662[(2)] = inst_63086);

(statearr_63144_65662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63115 === (18))){
var inst_63097 = (state_63114[(2)]);
var state_63114__$1 = state_63114;
var statearr_63145_65664 = state_63114__$1;
(statearr_63145_65664[(2)] = inst_63097);

(statearr_63145_65664[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63115 === (8))){
var inst_63083 = cljs.core.async.close_BANG_(to);
var state_63114__$1 = state_63114;
var statearr_63146_65666 = state_63114__$1;
(statearr_63146_65666[(2)] = inst_63083);

(statearr_63146_65666[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____0 = (function (){
var statearr_63147 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63147[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__);

(statearr_63147[(1)] = (1));

return statearr_63147;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____1 = (function (state_63114){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_63114);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e63148){var ex__62129__auto__ = e63148;
var statearr_63149_65667 = state_63114;
(statearr_63149_65667[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_63114[(4)]))){
var statearr_63150_65668 = state_63114;
(statearr_63150_65668[(1)] = cljs.core.first((state_63114[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65669 = state_63114;
state_63114 = G__65669;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__ = function(state_63114){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____1.call(this,state_63114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62126__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_63155 = f__62557__auto__();
(statearr_63155[(6)] = c__62556__auto__);

return statearr_63155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
}));

return c__62556__auto__;
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
var G__63160 = arguments.length;
switch (G__63160) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__63163 = arguments.length;
switch (G__63163) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__63171 = arguments.length;
switch (G__63171) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__62556__auto___65684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_63199){
var state_val_63200 = (state_63199[(1)]);
if((state_val_63200 === (7))){
var inst_63194 = (state_63199[(2)]);
var state_63199__$1 = state_63199;
var statearr_63218_65685 = state_63199__$1;
(statearr_63218_65685[(2)] = inst_63194);

(statearr_63218_65685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63200 === (1))){
var state_63199__$1 = state_63199;
var statearr_63219_65687 = state_63199__$1;
(statearr_63219_65687[(2)] = null);

(statearr_63219_65687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63200 === (4))){
var inst_63175 = (state_63199[(7)]);
var inst_63175__$1 = (state_63199[(2)]);
var inst_63176 = (inst_63175__$1 == null);
var state_63199__$1 = (function (){var statearr_63221 = state_63199;
(statearr_63221[(7)] = inst_63175__$1);

return statearr_63221;
})();
if(cljs.core.truth_(inst_63176)){
var statearr_63223_65689 = state_63199__$1;
(statearr_63223_65689[(1)] = (5));

} else {
var statearr_63224_65690 = state_63199__$1;
(statearr_63224_65690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63200 === (13))){
var state_63199__$1 = state_63199;
var statearr_63225_65691 = state_63199__$1;
(statearr_63225_65691[(2)] = null);

(statearr_63225_65691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63200 === (6))){
var inst_63175 = (state_63199[(7)]);
var inst_63181 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_63175) : p.call(null,inst_63175));
var state_63199__$1 = state_63199;
if(cljs.core.truth_(inst_63181)){
var statearr_63226_65693 = state_63199__$1;
(statearr_63226_65693[(1)] = (9));

} else {
var statearr_63227_65695 = state_63199__$1;
(statearr_63227_65695[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63200 === (3))){
var inst_63196 = (state_63199[(2)]);
var state_63199__$1 = state_63199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63199__$1,inst_63196);
} else {
if((state_val_63200 === (12))){
var state_63199__$1 = state_63199;
var statearr_63232_65698 = state_63199__$1;
(statearr_63232_65698[(2)] = null);

(statearr_63232_65698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63200 === (2))){
var state_63199__$1 = state_63199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63199__$1,(4),ch);
} else {
if((state_val_63200 === (11))){
var inst_63175 = (state_63199[(7)]);
var inst_63185 = (state_63199[(2)]);
var state_63199__$1 = state_63199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63199__$1,(8),inst_63185,inst_63175);
} else {
if((state_val_63200 === (9))){
var state_63199__$1 = state_63199;
var statearr_63236_65700 = state_63199__$1;
(statearr_63236_65700[(2)] = tc);

(statearr_63236_65700[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63200 === (5))){
var inst_63178 = cljs.core.async.close_BANG_(tc);
var inst_63179 = cljs.core.async.close_BANG_(fc);
var state_63199__$1 = (function (){var statearr_63240 = state_63199;
(statearr_63240[(8)] = inst_63178);

return statearr_63240;
})();
var statearr_63242_65701 = state_63199__$1;
(statearr_63242_65701[(2)] = inst_63179);

(statearr_63242_65701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63200 === (14))){
var inst_63192 = (state_63199[(2)]);
var state_63199__$1 = state_63199;
var statearr_63243_65702 = state_63199__$1;
(statearr_63243_65702[(2)] = inst_63192);

(statearr_63243_65702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63200 === (10))){
var state_63199__$1 = state_63199;
var statearr_63247_65707 = state_63199__$1;
(statearr_63247_65707[(2)] = fc);

(statearr_63247_65707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63200 === (8))){
var inst_63187 = (state_63199[(2)]);
var state_63199__$1 = state_63199;
if(cljs.core.truth_(inst_63187)){
var statearr_63249_65708 = state_63199__$1;
(statearr_63249_65708[(1)] = (12));

} else {
var statearr_63250_65709 = state_63199__$1;
(statearr_63250_65709[(1)] = (13));

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
var cljs$core$async$state_machine__62126__auto__ = null;
var cljs$core$async$state_machine__62126__auto____0 = (function (){
var statearr_63253 = [null,null,null,null,null,null,null,null,null];
(statearr_63253[(0)] = cljs$core$async$state_machine__62126__auto__);

(statearr_63253[(1)] = (1));

return statearr_63253;
});
var cljs$core$async$state_machine__62126__auto____1 = (function (state_63199){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_63199);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e63257){var ex__62129__auto__ = e63257;
var statearr_63259_65712 = state_63199;
(statearr_63259_65712[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_63199[(4)]))){
var statearr_63262_65713 = state_63199;
(statearr_63262_65713[(1)] = cljs.core.first((state_63199[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65714 = state_63199;
state_63199 = G__65714;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$state_machine__62126__auto__ = function(state_63199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62126__auto____1.call(this,state_63199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62126__auto____0;
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62126__auto____1;
return cljs$core$async$state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_63266 = f__62557__auto__();
(statearr_63266[(6)] = c__62556__auto___65684);

return statearr_63266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
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
var c__62556__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_63302){
var state_val_63303 = (state_63302[(1)]);
if((state_val_63303 === (7))){
var inst_63298 = (state_63302[(2)]);
var state_63302__$1 = state_63302;
var statearr_63306_65716 = state_63302__$1;
(statearr_63306_65716[(2)] = inst_63298);

(statearr_63306_65716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63303 === (1))){
var inst_63279 = init;
var inst_63280 = inst_63279;
var state_63302__$1 = (function (){var statearr_63307 = state_63302;
(statearr_63307[(7)] = inst_63280);

return statearr_63307;
})();
var statearr_63308_65717 = state_63302__$1;
(statearr_63308_65717[(2)] = null);

(statearr_63308_65717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63303 === (4))){
var inst_63283 = (state_63302[(8)]);
var inst_63283__$1 = (state_63302[(2)]);
var inst_63284 = (inst_63283__$1 == null);
var state_63302__$1 = (function (){var statearr_63309 = state_63302;
(statearr_63309[(8)] = inst_63283__$1);

return statearr_63309;
})();
if(cljs.core.truth_(inst_63284)){
var statearr_63312_65718 = state_63302__$1;
(statearr_63312_65718[(1)] = (5));

} else {
var statearr_63313_65719 = state_63302__$1;
(statearr_63313_65719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63303 === (6))){
var inst_63280 = (state_63302[(7)]);
var inst_63289 = (state_63302[(9)]);
var inst_63283 = (state_63302[(8)]);
var inst_63289__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_63280,inst_63283) : f.call(null,inst_63280,inst_63283));
var inst_63290 = cljs.core.reduced_QMARK_(inst_63289__$1);
var state_63302__$1 = (function (){var statearr_63314 = state_63302;
(statearr_63314[(9)] = inst_63289__$1);

return statearr_63314;
})();
if(inst_63290){
var statearr_63315_65720 = state_63302__$1;
(statearr_63315_65720[(1)] = (8));

} else {
var statearr_63317_65721 = state_63302__$1;
(statearr_63317_65721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63303 === (3))){
var inst_63300 = (state_63302[(2)]);
var state_63302__$1 = state_63302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63302__$1,inst_63300);
} else {
if((state_val_63303 === (2))){
var state_63302__$1 = state_63302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63302__$1,(4),ch);
} else {
if((state_val_63303 === (9))){
var inst_63289 = (state_63302[(9)]);
var inst_63280 = inst_63289;
var state_63302__$1 = (function (){var statearr_63318 = state_63302;
(statearr_63318[(7)] = inst_63280);

return statearr_63318;
})();
var statearr_63319_65723 = state_63302__$1;
(statearr_63319_65723[(2)] = null);

(statearr_63319_65723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63303 === (5))){
var inst_63280 = (state_63302[(7)]);
var state_63302__$1 = state_63302;
var statearr_63320_65724 = state_63302__$1;
(statearr_63320_65724[(2)] = inst_63280);

(statearr_63320_65724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63303 === (10))){
var inst_63296 = (state_63302[(2)]);
var state_63302__$1 = state_63302;
var statearr_63321_65725 = state_63302__$1;
(statearr_63321_65725[(2)] = inst_63296);

(statearr_63321_65725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63303 === (8))){
var inst_63289 = (state_63302[(9)]);
var inst_63292 = cljs.core.deref(inst_63289);
var state_63302__$1 = state_63302;
var statearr_63322_65727 = state_63302__$1;
(statearr_63322_65727[(2)] = inst_63292);

(statearr_63322_65727[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__62126__auto__ = null;
var cljs$core$async$reduce_$_state_machine__62126__auto____0 = (function (){
var statearr_63323 = [null,null,null,null,null,null,null,null,null,null];
(statearr_63323[(0)] = cljs$core$async$reduce_$_state_machine__62126__auto__);

(statearr_63323[(1)] = (1));

return statearr_63323;
});
var cljs$core$async$reduce_$_state_machine__62126__auto____1 = (function (state_63302){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_63302);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e63324){var ex__62129__auto__ = e63324;
var statearr_63325_65730 = state_63302;
(statearr_63325_65730[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_63302[(4)]))){
var statearr_63326_65732 = state_63302;
(statearr_63326_65732[(1)] = cljs.core.first((state_63302[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65735 = state_63302;
state_63302 = G__65735;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__62126__auto__ = function(state_63302){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__62126__auto____1.call(this,state_63302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__62126__auto____0;
cljs$core$async$reduce_$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__62126__auto____1;
return cljs$core$async$reduce_$_state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_63327 = f__62557__auto__();
(statearr_63327[(6)] = c__62556__auto__);

return statearr_63327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
}));

return c__62556__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__62556__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_63334){
var state_val_63335 = (state_63334[(1)]);
if((state_val_63335 === (1))){
var inst_63329 = cljs.core.async.reduce(f__$1,init,ch);
var state_63334__$1 = state_63334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63334__$1,(2),inst_63329);
} else {
if((state_val_63335 === (2))){
var inst_63331 = (state_63334[(2)]);
var inst_63332 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_63331) : f__$1.call(null,inst_63331));
var state_63334__$1 = state_63334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63334__$1,inst_63332);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__62126__auto__ = null;
var cljs$core$async$transduce_$_state_machine__62126__auto____0 = (function (){
var statearr_63336 = [null,null,null,null,null,null,null];
(statearr_63336[(0)] = cljs$core$async$transduce_$_state_machine__62126__auto__);

(statearr_63336[(1)] = (1));

return statearr_63336;
});
var cljs$core$async$transduce_$_state_machine__62126__auto____1 = (function (state_63334){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_63334);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e63338){var ex__62129__auto__ = e63338;
var statearr_63340_65738 = state_63334;
(statearr_63340_65738[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_63334[(4)]))){
var statearr_63341_65739 = state_63334;
(statearr_63341_65739[(1)] = cljs.core.first((state_63334[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65741 = state_63334;
state_63334 = G__65741;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__62126__auto__ = function(state_63334){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__62126__auto____1.call(this,state_63334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__62126__auto____0;
cljs$core$async$transduce_$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__62126__auto____1;
return cljs$core$async$transduce_$_state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_63343 = f__62557__auto__();
(statearr_63343[(6)] = c__62556__auto__);

return statearr_63343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
}));

return c__62556__auto__;
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
var G__63350 = arguments.length;
switch (G__63350) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__62556__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_63379){
var state_val_63380 = (state_63379[(1)]);
if((state_val_63380 === (7))){
var inst_63361 = (state_63379[(2)]);
var state_63379__$1 = state_63379;
var statearr_63381_65747 = state_63379__$1;
(statearr_63381_65747[(2)] = inst_63361);

(statearr_63381_65747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (1))){
var inst_63353 = cljs.core.seq(coll);
var inst_63354 = inst_63353;
var state_63379__$1 = (function (){var statearr_63382 = state_63379;
(statearr_63382[(7)] = inst_63354);

return statearr_63382;
})();
var statearr_63383_65749 = state_63379__$1;
(statearr_63383_65749[(2)] = null);

(statearr_63383_65749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (4))){
var inst_63354 = (state_63379[(7)]);
var inst_63359 = cljs.core.first(inst_63354);
var state_63379__$1 = state_63379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63379__$1,(7),ch,inst_63359);
} else {
if((state_val_63380 === (13))){
var inst_63373 = (state_63379[(2)]);
var state_63379__$1 = state_63379;
var statearr_63386_65753 = state_63379__$1;
(statearr_63386_65753[(2)] = inst_63373);

(statearr_63386_65753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (6))){
var inst_63364 = (state_63379[(2)]);
var state_63379__$1 = state_63379;
if(cljs.core.truth_(inst_63364)){
var statearr_63387_65754 = state_63379__$1;
(statearr_63387_65754[(1)] = (8));

} else {
var statearr_63388_65755 = state_63379__$1;
(statearr_63388_65755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (3))){
var inst_63377 = (state_63379[(2)]);
var state_63379__$1 = state_63379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63379__$1,inst_63377);
} else {
if((state_val_63380 === (12))){
var state_63379__$1 = state_63379;
var statearr_63393_65756 = state_63379__$1;
(statearr_63393_65756[(2)] = null);

(statearr_63393_65756[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (2))){
var inst_63354 = (state_63379[(7)]);
var state_63379__$1 = state_63379;
if(cljs.core.truth_(inst_63354)){
var statearr_63395_65757 = state_63379__$1;
(statearr_63395_65757[(1)] = (4));

} else {
var statearr_63397_65758 = state_63379__$1;
(statearr_63397_65758[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (11))){
var inst_63370 = cljs.core.async.close_BANG_(ch);
var state_63379__$1 = state_63379;
var statearr_63398_65759 = state_63379__$1;
(statearr_63398_65759[(2)] = inst_63370);

(statearr_63398_65759[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (9))){
var state_63379__$1 = state_63379;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63401_65763 = state_63379__$1;
(statearr_63401_65763[(1)] = (11));

} else {
var statearr_63402_65764 = state_63379__$1;
(statearr_63402_65764[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (5))){
var inst_63354 = (state_63379[(7)]);
var state_63379__$1 = state_63379;
var statearr_63403_65765 = state_63379__$1;
(statearr_63403_65765[(2)] = inst_63354);

(statearr_63403_65765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (10))){
var inst_63375 = (state_63379[(2)]);
var state_63379__$1 = state_63379;
var statearr_63404_65767 = state_63379__$1;
(statearr_63404_65767[(2)] = inst_63375);

(statearr_63404_65767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (8))){
var inst_63354 = (state_63379[(7)]);
var inst_63366 = cljs.core.next(inst_63354);
var inst_63354__$1 = inst_63366;
var state_63379__$1 = (function (){var statearr_63405 = state_63379;
(statearr_63405[(7)] = inst_63354__$1);

return statearr_63405;
})();
var statearr_63406_65768 = state_63379__$1;
(statearr_63406_65768[(2)] = null);

(statearr_63406_65768[(1)] = (2));


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
var cljs$core$async$state_machine__62126__auto__ = null;
var cljs$core$async$state_machine__62126__auto____0 = (function (){
var statearr_63407 = [null,null,null,null,null,null,null,null];
(statearr_63407[(0)] = cljs$core$async$state_machine__62126__auto__);

(statearr_63407[(1)] = (1));

return statearr_63407;
});
var cljs$core$async$state_machine__62126__auto____1 = (function (state_63379){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_63379);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e63408){var ex__62129__auto__ = e63408;
var statearr_63410_65772 = state_63379;
(statearr_63410_65772[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_63379[(4)]))){
var statearr_63411_65773 = state_63379;
(statearr_63411_65773[(1)] = cljs.core.first((state_63379[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65774 = state_63379;
state_63379 = G__65774;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$state_machine__62126__auto__ = function(state_63379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62126__auto____1.call(this,state_63379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62126__auto____0;
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62126__auto____1;
return cljs$core$async$state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_63412 = f__62557__auto__();
(statearr_63412[(6)] = c__62556__auto__);

return statearr_63412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
}));

return c__62556__auto__;
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
var G__63418 = arguments.length;
switch (G__63418) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

var cljs$core$async$Mux$muxch_STAR_$dyn_65779 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_65779(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_65781 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_65781(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_65794 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_65794(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_65798 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_65798(m);
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63433 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63433 = (function (ch,cs,meta63434){
this.ch = ch;
this.cs = cs;
this.meta63434 = meta63434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63435,meta63434__$1){
var self__ = this;
var _63435__$1 = this;
return (new cljs.core.async.t_cljs$core$async63433(self__.ch,self__.cs,meta63434__$1));
}));

(cljs.core.async.t_cljs$core$async63433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63435){
var self__ = this;
var _63435__$1 = this;
return self__.meta63434;
}));

(cljs.core.async.t_cljs$core$async63433.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63433.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async63433.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63433.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async63433.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async63433.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async63433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta63434","meta63434",1012936992,null)], null);
}));

(cljs.core.async.t_cljs$core$async63433.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63433");

(cljs.core.async.t_cljs$core$async63433.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async63433");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63433.
 */
cljs.core.async.__GT_t_cljs$core$async63433 = (function cljs$core$async$mult_$___GT_t_cljs$core$async63433(ch__$1,cs__$1,meta63434){
return (new cljs.core.async.t_cljs$core$async63433(ch__$1,cs__$1,meta63434));
});

}

return (new cljs.core.async.t_cljs$core$async63433(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__62556__auto___65817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_63605){
var state_val_63606 = (state_63605[(1)]);
if((state_val_63606 === (7))){
var inst_63599 = (state_63605[(2)]);
var state_63605__$1 = state_63605;
var statearr_63612_65818 = state_63605__$1;
(statearr_63612_65818[(2)] = inst_63599);

(statearr_63612_65818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (20))){
var inst_63488 = (state_63605[(7)]);
var inst_63503 = cljs.core.first(inst_63488);
var inst_63504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63503,(0),null);
var inst_63505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63503,(1),null);
var state_63605__$1 = (function (){var statearr_63613 = state_63605;
(statearr_63613[(8)] = inst_63504);

return statearr_63613;
})();
if(cljs.core.truth_(inst_63505)){
var statearr_63615_65824 = state_63605__$1;
(statearr_63615_65824[(1)] = (22));

} else {
var statearr_63616_65825 = state_63605__$1;
(statearr_63616_65825[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (27))){
var inst_63548 = (state_63605[(9)]);
var inst_63455 = (state_63605[(10)]);
var inst_63539 = (state_63605[(11)]);
var inst_63537 = (state_63605[(12)]);
var inst_63548__$1 = cljs.core._nth(inst_63537,inst_63539);
var inst_63549 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63548__$1,inst_63455,done);
var state_63605__$1 = (function (){var statearr_63617 = state_63605;
(statearr_63617[(9)] = inst_63548__$1);

return statearr_63617;
})();
if(cljs.core.truth_(inst_63549)){
var statearr_63618_65830 = state_63605__$1;
(statearr_63618_65830[(1)] = (30));

} else {
var statearr_63619_65831 = state_63605__$1;
(statearr_63619_65831[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (1))){
var state_63605__$1 = state_63605;
var statearr_63620_65833 = state_63605__$1;
(statearr_63620_65833[(2)] = null);

(statearr_63620_65833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (24))){
var inst_63488 = (state_63605[(7)]);
var inst_63511 = (state_63605[(2)]);
var inst_63514 = cljs.core.next(inst_63488);
var inst_63465 = inst_63514;
var inst_63466 = null;
var inst_63467 = (0);
var inst_63468 = (0);
var state_63605__$1 = (function (){var statearr_63621 = state_63605;
(statearr_63621[(13)] = inst_63467);

(statearr_63621[(14)] = inst_63468);

(statearr_63621[(15)] = inst_63465);

(statearr_63621[(16)] = inst_63511);

(statearr_63621[(17)] = inst_63466);

return statearr_63621;
})();
var statearr_63623_65834 = state_63605__$1;
(statearr_63623_65834[(2)] = null);

(statearr_63623_65834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (39))){
var state_63605__$1 = state_63605;
var statearr_63628_65836 = state_63605__$1;
(statearr_63628_65836[(2)] = null);

(statearr_63628_65836[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (4))){
var inst_63455 = (state_63605[(10)]);
var inst_63455__$1 = (state_63605[(2)]);
var inst_63456 = (inst_63455__$1 == null);
var state_63605__$1 = (function (){var statearr_63632 = state_63605;
(statearr_63632[(10)] = inst_63455__$1);

return statearr_63632;
})();
if(cljs.core.truth_(inst_63456)){
var statearr_63633_65837 = state_63605__$1;
(statearr_63633_65837[(1)] = (5));

} else {
var statearr_63634_65838 = state_63605__$1;
(statearr_63634_65838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (15))){
var inst_63467 = (state_63605[(13)]);
var inst_63468 = (state_63605[(14)]);
var inst_63465 = (state_63605[(15)]);
var inst_63466 = (state_63605[(17)]);
var inst_63484 = (state_63605[(2)]);
var inst_63485 = (inst_63468 + (1));
var tmp63624 = inst_63467;
var tmp63625 = inst_63465;
var tmp63626 = inst_63466;
var inst_63465__$1 = tmp63625;
var inst_63466__$1 = tmp63626;
var inst_63467__$1 = tmp63624;
var inst_63468__$1 = inst_63485;
var state_63605__$1 = (function (){var statearr_63639 = state_63605;
(statearr_63639[(18)] = inst_63484);

(statearr_63639[(13)] = inst_63467__$1);

(statearr_63639[(14)] = inst_63468__$1);

(statearr_63639[(15)] = inst_63465__$1);

(statearr_63639[(17)] = inst_63466__$1);

return statearr_63639;
})();
var statearr_63642_65841 = state_63605__$1;
(statearr_63642_65841[(2)] = null);

(statearr_63642_65841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (21))){
var inst_63517 = (state_63605[(2)]);
var state_63605__$1 = state_63605;
var statearr_63647_65843 = state_63605__$1;
(statearr_63647_65843[(2)] = inst_63517);

(statearr_63647_65843[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (31))){
var inst_63548 = (state_63605[(9)]);
var inst_63553 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63548);
var state_63605__$1 = state_63605;
var statearr_63648_65844 = state_63605__$1;
(statearr_63648_65844[(2)] = inst_63553);

(statearr_63648_65844[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (32))){
var inst_63539 = (state_63605[(11)]);
var inst_63537 = (state_63605[(12)]);
var inst_63536 = (state_63605[(19)]);
var inst_63538 = (state_63605[(20)]);
var inst_63555 = (state_63605[(2)]);
var inst_63556 = (inst_63539 + (1));
var tmp63644 = inst_63537;
var tmp63645 = inst_63536;
var tmp63646 = inst_63538;
var inst_63536__$1 = tmp63645;
var inst_63537__$1 = tmp63644;
var inst_63538__$1 = tmp63646;
var inst_63539__$1 = inst_63556;
var state_63605__$1 = (function (){var statearr_63654 = state_63605;
(statearr_63654[(21)] = inst_63555);

(statearr_63654[(11)] = inst_63539__$1);

(statearr_63654[(12)] = inst_63537__$1);

(statearr_63654[(19)] = inst_63536__$1);

(statearr_63654[(20)] = inst_63538__$1);

return statearr_63654;
})();
var statearr_63658_65845 = state_63605__$1;
(statearr_63658_65845[(2)] = null);

(statearr_63658_65845[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (40))){
var inst_63568 = (state_63605[(22)]);
var inst_63573 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63568);
var state_63605__$1 = state_63605;
var statearr_63660_65846 = state_63605__$1;
(statearr_63660_65846[(2)] = inst_63573);

(statearr_63660_65846[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (33))){
var inst_63559 = (state_63605[(23)]);
var inst_63561 = cljs.core.chunked_seq_QMARK_(inst_63559);
var state_63605__$1 = state_63605;
if(inst_63561){
var statearr_63661_65847 = state_63605__$1;
(statearr_63661_65847[(1)] = (36));

} else {
var statearr_63663_65848 = state_63605__$1;
(statearr_63663_65848[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (13))){
var inst_63478 = (state_63605[(24)]);
var inst_63481 = cljs.core.async.close_BANG_(inst_63478);
var state_63605__$1 = state_63605;
var statearr_63664_65849 = state_63605__$1;
(statearr_63664_65849[(2)] = inst_63481);

(statearr_63664_65849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (22))){
var inst_63504 = (state_63605[(8)]);
var inst_63508 = cljs.core.async.close_BANG_(inst_63504);
var state_63605__$1 = state_63605;
var statearr_63665_65851 = state_63605__$1;
(statearr_63665_65851[(2)] = inst_63508);

(statearr_63665_65851[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (36))){
var inst_63559 = (state_63605[(23)]);
var inst_63563 = cljs.core.chunk_first(inst_63559);
var inst_63564 = cljs.core.chunk_rest(inst_63559);
var inst_63565 = cljs.core.count(inst_63563);
var inst_63536 = inst_63564;
var inst_63537 = inst_63563;
var inst_63538 = inst_63565;
var inst_63539 = (0);
var state_63605__$1 = (function (){var statearr_63666 = state_63605;
(statearr_63666[(11)] = inst_63539);

(statearr_63666[(12)] = inst_63537);

(statearr_63666[(19)] = inst_63536);

(statearr_63666[(20)] = inst_63538);

return statearr_63666;
})();
var statearr_63667_65852 = state_63605__$1;
(statearr_63667_65852[(2)] = null);

(statearr_63667_65852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (41))){
var inst_63559 = (state_63605[(23)]);
var inst_63575 = (state_63605[(2)]);
var inst_63579 = cljs.core.next(inst_63559);
var inst_63536 = inst_63579;
var inst_63537 = null;
var inst_63538 = (0);
var inst_63539 = (0);
var state_63605__$1 = (function (){var statearr_63672 = state_63605;
(statearr_63672[(25)] = inst_63575);

(statearr_63672[(11)] = inst_63539);

(statearr_63672[(12)] = inst_63537);

(statearr_63672[(19)] = inst_63536);

(statearr_63672[(20)] = inst_63538);

return statearr_63672;
})();
var statearr_63673_65853 = state_63605__$1;
(statearr_63673_65853[(2)] = null);

(statearr_63673_65853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (43))){
var state_63605__$1 = state_63605;
var statearr_63674_65854 = state_63605__$1;
(statearr_63674_65854[(2)] = null);

(statearr_63674_65854[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (29))){
var inst_63587 = (state_63605[(2)]);
var state_63605__$1 = state_63605;
var statearr_63675_65855 = state_63605__$1;
(statearr_63675_65855[(2)] = inst_63587);

(statearr_63675_65855[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (44))){
var inst_63596 = (state_63605[(2)]);
var state_63605__$1 = (function (){var statearr_63677 = state_63605;
(statearr_63677[(26)] = inst_63596);

return statearr_63677;
})();
var statearr_63678_65857 = state_63605__$1;
(statearr_63678_65857[(2)] = null);

(statearr_63678_65857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (6))){
var inst_63528 = (state_63605[(27)]);
var inst_63527 = cljs.core.deref(cs);
var inst_63528__$1 = cljs.core.keys(inst_63527);
var inst_63529 = cljs.core.count(inst_63528__$1);
var inst_63530 = cljs.core.reset_BANG_(dctr,inst_63529);
var inst_63535 = cljs.core.seq(inst_63528__$1);
var inst_63536 = inst_63535;
var inst_63537 = null;
var inst_63538 = (0);
var inst_63539 = (0);
var state_63605__$1 = (function (){var statearr_63681 = state_63605;
(statearr_63681[(28)] = inst_63530);

(statearr_63681[(27)] = inst_63528__$1);

(statearr_63681[(11)] = inst_63539);

(statearr_63681[(12)] = inst_63537);

(statearr_63681[(19)] = inst_63536);

(statearr_63681[(20)] = inst_63538);

return statearr_63681;
})();
var statearr_63684_65860 = state_63605__$1;
(statearr_63684_65860[(2)] = null);

(statearr_63684_65860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (28))){
var inst_63559 = (state_63605[(23)]);
var inst_63536 = (state_63605[(19)]);
var inst_63559__$1 = cljs.core.seq(inst_63536);
var state_63605__$1 = (function (){var statearr_63686 = state_63605;
(statearr_63686[(23)] = inst_63559__$1);

return statearr_63686;
})();
if(inst_63559__$1){
var statearr_63687_65861 = state_63605__$1;
(statearr_63687_65861[(1)] = (33));

} else {
var statearr_63688_65862 = state_63605__$1;
(statearr_63688_65862[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (25))){
var inst_63539 = (state_63605[(11)]);
var inst_63538 = (state_63605[(20)]);
var inst_63545 = (inst_63539 < inst_63538);
var inst_63546 = inst_63545;
var state_63605__$1 = state_63605;
if(cljs.core.truth_(inst_63546)){
var statearr_63689_65863 = state_63605__$1;
(statearr_63689_65863[(1)] = (27));

} else {
var statearr_63690_65864 = state_63605__$1;
(statearr_63690_65864[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (34))){
var state_63605__$1 = state_63605;
var statearr_63696_65865 = state_63605__$1;
(statearr_63696_65865[(2)] = null);

(statearr_63696_65865[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (17))){
var state_63605__$1 = state_63605;
var statearr_63697_65866 = state_63605__$1;
(statearr_63697_65866[(2)] = null);

(statearr_63697_65866[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (3))){
var inst_63601 = (state_63605[(2)]);
var state_63605__$1 = state_63605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63605__$1,inst_63601);
} else {
if((state_val_63606 === (12))){
var inst_63523 = (state_63605[(2)]);
var state_63605__$1 = state_63605;
var statearr_63700_65869 = state_63605__$1;
(statearr_63700_65869[(2)] = inst_63523);

(statearr_63700_65869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (2))){
var state_63605__$1 = state_63605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63605__$1,(4),ch);
} else {
if((state_val_63606 === (23))){
var state_63605__$1 = state_63605;
var statearr_63702_65872 = state_63605__$1;
(statearr_63702_65872[(2)] = null);

(statearr_63702_65872[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (35))){
var inst_63585 = (state_63605[(2)]);
var state_63605__$1 = state_63605;
var statearr_63707_65874 = state_63605__$1;
(statearr_63707_65874[(2)] = inst_63585);

(statearr_63707_65874[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (19))){
var inst_63488 = (state_63605[(7)]);
var inst_63492 = cljs.core.chunk_first(inst_63488);
var inst_63493 = cljs.core.chunk_rest(inst_63488);
var inst_63497 = cljs.core.count(inst_63492);
var inst_63465 = inst_63493;
var inst_63466 = inst_63492;
var inst_63467 = inst_63497;
var inst_63468 = (0);
var state_63605__$1 = (function (){var statearr_63710 = state_63605;
(statearr_63710[(13)] = inst_63467);

(statearr_63710[(14)] = inst_63468);

(statearr_63710[(15)] = inst_63465);

(statearr_63710[(17)] = inst_63466);

return statearr_63710;
})();
var statearr_63711_65878 = state_63605__$1;
(statearr_63711_65878[(2)] = null);

(statearr_63711_65878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (11))){
var inst_63488 = (state_63605[(7)]);
var inst_63465 = (state_63605[(15)]);
var inst_63488__$1 = cljs.core.seq(inst_63465);
var state_63605__$1 = (function (){var statearr_63715 = state_63605;
(statearr_63715[(7)] = inst_63488__$1);

return statearr_63715;
})();
if(inst_63488__$1){
var statearr_63716_65879 = state_63605__$1;
(statearr_63716_65879[(1)] = (16));

} else {
var statearr_63717_65881 = state_63605__$1;
(statearr_63717_65881[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (9))){
var inst_63525 = (state_63605[(2)]);
var state_63605__$1 = state_63605;
var statearr_63721_65882 = state_63605__$1;
(statearr_63721_65882[(2)] = inst_63525);

(statearr_63721_65882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (5))){
var inst_63463 = cljs.core.deref(cs);
var inst_63464 = cljs.core.seq(inst_63463);
var inst_63465 = inst_63464;
var inst_63466 = null;
var inst_63467 = (0);
var inst_63468 = (0);
var state_63605__$1 = (function (){var statearr_63723 = state_63605;
(statearr_63723[(13)] = inst_63467);

(statearr_63723[(14)] = inst_63468);

(statearr_63723[(15)] = inst_63465);

(statearr_63723[(17)] = inst_63466);

return statearr_63723;
})();
var statearr_63724_65885 = state_63605__$1;
(statearr_63724_65885[(2)] = null);

(statearr_63724_65885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (14))){
var state_63605__$1 = state_63605;
var statearr_63726_65887 = state_63605__$1;
(statearr_63726_65887[(2)] = null);

(statearr_63726_65887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (45))){
var inst_63593 = (state_63605[(2)]);
var state_63605__$1 = state_63605;
var statearr_63727_65888 = state_63605__$1;
(statearr_63727_65888[(2)] = inst_63593);

(statearr_63727_65888[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (26))){
var inst_63528 = (state_63605[(27)]);
var inst_63589 = (state_63605[(2)]);
var inst_63590 = cljs.core.seq(inst_63528);
var state_63605__$1 = (function (){var statearr_63731 = state_63605;
(statearr_63731[(29)] = inst_63589);

return statearr_63731;
})();
if(inst_63590){
var statearr_63734_65891 = state_63605__$1;
(statearr_63734_65891[(1)] = (42));

} else {
var statearr_63735_65892 = state_63605__$1;
(statearr_63735_65892[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (16))){
var inst_63488 = (state_63605[(7)]);
var inst_63490 = cljs.core.chunked_seq_QMARK_(inst_63488);
var state_63605__$1 = state_63605;
if(inst_63490){
var statearr_63736_65894 = state_63605__$1;
(statearr_63736_65894[(1)] = (19));

} else {
var statearr_63737_65895 = state_63605__$1;
(statearr_63737_65895[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (38))){
var inst_63582 = (state_63605[(2)]);
var state_63605__$1 = state_63605;
var statearr_63738_65896 = state_63605__$1;
(statearr_63738_65896[(2)] = inst_63582);

(statearr_63738_65896[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (30))){
var state_63605__$1 = state_63605;
var statearr_63740_65897 = state_63605__$1;
(statearr_63740_65897[(2)] = null);

(statearr_63740_65897[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (10))){
var inst_63468 = (state_63605[(14)]);
var inst_63466 = (state_63605[(17)]);
var inst_63476 = cljs.core._nth(inst_63466,inst_63468);
var inst_63478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63476,(0),null);
var inst_63479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63476,(1),null);
var state_63605__$1 = (function (){var statearr_63744 = state_63605;
(statearr_63744[(24)] = inst_63478);

return statearr_63744;
})();
if(cljs.core.truth_(inst_63479)){
var statearr_63745_65899 = state_63605__$1;
(statearr_63745_65899[(1)] = (13));

} else {
var statearr_63746_65901 = state_63605__$1;
(statearr_63746_65901[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (18))){
var inst_63521 = (state_63605[(2)]);
var state_63605__$1 = state_63605;
var statearr_63747_65902 = state_63605__$1;
(statearr_63747_65902[(2)] = inst_63521);

(statearr_63747_65902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (42))){
var state_63605__$1 = state_63605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63605__$1,(45),dchan);
} else {
if((state_val_63606 === (37))){
var inst_63568 = (state_63605[(22)]);
var inst_63559 = (state_63605[(23)]);
var inst_63455 = (state_63605[(10)]);
var inst_63568__$1 = cljs.core.first(inst_63559);
var inst_63570 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63568__$1,inst_63455,done);
var state_63605__$1 = (function (){var statearr_63748 = state_63605;
(statearr_63748[(22)] = inst_63568__$1);

return statearr_63748;
})();
if(cljs.core.truth_(inst_63570)){
var statearr_63749_65905 = state_63605__$1;
(statearr_63749_65905[(1)] = (39));

} else {
var statearr_63750_65906 = state_63605__$1;
(statearr_63750_65906[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (8))){
var inst_63467 = (state_63605[(13)]);
var inst_63468 = (state_63605[(14)]);
var inst_63470 = (inst_63468 < inst_63467);
var inst_63471 = inst_63470;
var state_63605__$1 = state_63605;
if(cljs.core.truth_(inst_63471)){
var statearr_63752_65908 = state_63605__$1;
(statearr_63752_65908[(1)] = (10));

} else {
var statearr_63755_65909 = state_63605__$1;
(statearr_63755_65909[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__62126__auto__ = null;
var cljs$core$async$mult_$_state_machine__62126__auto____0 = (function (){
var statearr_63757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63757[(0)] = cljs$core$async$mult_$_state_machine__62126__auto__);

(statearr_63757[(1)] = (1));

return statearr_63757;
});
var cljs$core$async$mult_$_state_machine__62126__auto____1 = (function (state_63605){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_63605);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e63758){var ex__62129__auto__ = e63758;
var statearr_63759_65918 = state_63605;
(statearr_63759_65918[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_63605[(4)]))){
var statearr_63760_65919 = state_63605;
(statearr_63760_65919[(1)] = cljs.core.first((state_63605[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65920 = state_63605;
state_63605 = G__65920;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__62126__auto__ = function(state_63605){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__62126__auto____1.call(this,state_63605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__62126__auto____0;
cljs$core$async$mult_$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__62126__auto____1;
return cljs$core$async$mult_$_state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_63764 = f__62557__auto__();
(statearr_63764[(6)] = c__62556__auto___65817);

return statearr_63764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
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
var G__63770 = arguments.length;
switch (G__63770) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

var cljs$core$async$Mix$admix_STAR_$dyn_65926 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_65926(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_65934 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_65934(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_65941 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_65941(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_65944 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_65944(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_65945 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_65945(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65946 = arguments.length;
var i__5770__auto___65947 = (0);
while(true){
if((i__5770__auto___65947 < len__5769__auto___65946)){
args__5775__auto__.push((arguments[i__5770__auto___65947]));

var G__65948 = (i__5770__auto___65947 + (1));
i__5770__auto___65947 = G__65948;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__63804){
var map__63805 = p__63804;
var map__63805__$1 = cljs.core.__destructure_map(map__63805);
var opts = map__63805__$1;
var statearr_63806_65949 = state;
(statearr_63806_65949[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_63808_65951 = state;
(statearr_63808_65951[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_63809_65952 = state;
(statearr_63809_65952[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq63800){
var G__63801 = cljs.core.first(seq63800);
var seq63800__$1 = cljs.core.next(seq63800);
var G__63802 = cljs.core.first(seq63800__$1);
var seq63800__$2 = cljs.core.next(seq63800__$1);
var G__63803 = cljs.core.first(seq63800__$2);
var seq63800__$3 = cljs.core.next(seq63800__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63801,G__63802,G__63803,seq63800__$3);
}));

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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63817 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta63818){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta63818 = meta63818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63819,meta63818__$1){
var self__ = this;
var _63819__$1 = this;
return (new cljs.core.async.t_cljs$core$async63817(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta63818__$1));
}));

(cljs.core.async.t_cljs$core$async63817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63819){
var self__ = this;
var _63819__$1 = this;
return self__.meta63818;
}));

(cljs.core.async.t_cljs$core$async63817.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63817.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async63817.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63817.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63817.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63817.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63817.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63817.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta63818","meta63818",1638836460,null)], null);
}));

(cljs.core.async.t_cljs$core$async63817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63817");

(cljs.core.async.t_cljs$core$async63817.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async63817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63817.
 */
cljs.core.async.__GT_t_cljs$core$async63817 = (function cljs$core$async$mix_$___GT_t_cljs$core$async63817(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63818){
return (new cljs.core.async.t_cljs$core$async63817(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63818));
});

}

return (new cljs.core.async.t_cljs$core$async63817(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__62556__auto___65988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_63907){
var state_val_63908 = (state_63907[(1)]);
if((state_val_63908 === (7))){
var inst_63864 = (state_63907[(2)]);
var state_63907__$1 = state_63907;
if(cljs.core.truth_(inst_63864)){
var statearr_63909_65990 = state_63907__$1;
(statearr_63909_65990[(1)] = (8));

} else {
var statearr_63911_65996 = state_63907__$1;
(statearr_63911_65996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (20))){
var inst_63856 = (state_63907[(7)]);
var state_63907__$1 = state_63907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63907__$1,(23),out,inst_63856);
} else {
if((state_val_63908 === (1))){
var inst_63835 = calc_state();
var inst_63836 = cljs.core.__destructure_map(inst_63835);
var inst_63837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63836,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63836,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63836,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_63840 = inst_63835;
var state_63907__$1 = (function (){var statearr_63919 = state_63907;
(statearr_63919[(8)] = inst_63840);

(statearr_63919[(9)] = inst_63838);

(statearr_63919[(10)] = inst_63839);

(statearr_63919[(11)] = inst_63837);

return statearr_63919;
})();
var statearr_63921_66004 = state_63907__$1;
(statearr_63921_66004[(2)] = null);

(statearr_63921_66004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (24))){
var inst_63844 = (state_63907[(12)]);
var inst_63840 = inst_63844;
var state_63907__$1 = (function (){var statearr_63922 = state_63907;
(statearr_63922[(8)] = inst_63840);

return statearr_63922;
})();
var statearr_63923_66005 = state_63907__$1;
(statearr_63923_66005[(2)] = null);

(statearr_63923_66005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (4))){
var inst_63856 = (state_63907[(7)]);
var inst_63858 = (state_63907[(13)]);
var inst_63855 = (state_63907[(2)]);
var inst_63856__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63855,(0),null);
var inst_63857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63855,(1),null);
var inst_63858__$1 = (inst_63856__$1 == null);
var state_63907__$1 = (function (){var statearr_63925 = state_63907;
(statearr_63925[(7)] = inst_63856__$1);

(statearr_63925[(14)] = inst_63857);

(statearr_63925[(13)] = inst_63858__$1);

return statearr_63925;
})();
if(cljs.core.truth_(inst_63858__$1)){
var statearr_63926_66006 = state_63907__$1;
(statearr_63926_66006[(1)] = (5));

} else {
var statearr_63927_66008 = state_63907__$1;
(statearr_63927_66008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (15))){
var inst_63845 = (state_63907[(15)]);
var inst_63880 = (state_63907[(16)]);
var inst_63880__$1 = cljs.core.empty_QMARK_(inst_63845);
var state_63907__$1 = (function (){var statearr_63931 = state_63907;
(statearr_63931[(16)] = inst_63880__$1);

return statearr_63931;
})();
if(inst_63880__$1){
var statearr_63932_66011 = state_63907__$1;
(statearr_63932_66011[(1)] = (17));

} else {
var statearr_63935_66013 = state_63907__$1;
(statearr_63935_66013[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (21))){
var inst_63844 = (state_63907[(12)]);
var inst_63840 = inst_63844;
var state_63907__$1 = (function (){var statearr_63936 = state_63907;
(statearr_63936[(8)] = inst_63840);

return statearr_63936;
})();
var statearr_63937_66017 = state_63907__$1;
(statearr_63937_66017[(2)] = null);

(statearr_63937_66017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (13))){
var inst_63873 = (state_63907[(2)]);
var inst_63874 = calc_state();
var inst_63840 = inst_63874;
var state_63907__$1 = (function (){var statearr_63942 = state_63907;
(statearr_63942[(8)] = inst_63840);

(statearr_63942[(17)] = inst_63873);

return statearr_63942;
})();
var statearr_63943_66018 = state_63907__$1;
(statearr_63943_66018[(2)] = null);

(statearr_63943_66018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (22))){
var inst_63900 = (state_63907[(2)]);
var state_63907__$1 = state_63907;
var statearr_63944_66019 = state_63907__$1;
(statearr_63944_66019[(2)] = inst_63900);

(statearr_63944_66019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (6))){
var inst_63857 = (state_63907[(14)]);
var inst_63861 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63857,change);
var state_63907__$1 = state_63907;
var statearr_63947_66021 = state_63907__$1;
(statearr_63947_66021[(2)] = inst_63861);

(statearr_63947_66021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (25))){
var state_63907__$1 = state_63907;
var statearr_63949_66026 = state_63907__$1;
(statearr_63949_66026[(2)] = null);

(statearr_63949_66026[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (17))){
var inst_63857 = (state_63907[(14)]);
var inst_63846 = (state_63907[(18)]);
var inst_63882 = (inst_63846.cljs$core$IFn$_invoke$arity$1 ? inst_63846.cljs$core$IFn$_invoke$arity$1(inst_63857) : inst_63846.call(null,inst_63857));
var inst_63883 = cljs.core.not(inst_63882);
var state_63907__$1 = state_63907;
var statearr_63950_66028 = state_63907__$1;
(statearr_63950_66028[(2)] = inst_63883);

(statearr_63950_66028[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (3))){
var inst_63904 = (state_63907[(2)]);
var state_63907__$1 = state_63907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63907__$1,inst_63904);
} else {
if((state_val_63908 === (12))){
var state_63907__$1 = state_63907;
var statearr_63954_66035 = state_63907__$1;
(statearr_63954_66035[(2)] = null);

(statearr_63954_66035[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (2))){
var inst_63840 = (state_63907[(8)]);
var inst_63844 = (state_63907[(12)]);
var inst_63844__$1 = cljs.core.__destructure_map(inst_63840);
var inst_63845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63844__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63844__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63844__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_63907__$1 = (function (){var statearr_63957 = state_63907;
(statearr_63957[(15)] = inst_63845);

(statearr_63957[(18)] = inst_63846);

(statearr_63957[(12)] = inst_63844__$1);

return statearr_63957;
})();
return cljs.core.async.ioc_alts_BANG_(state_63907__$1,(4),inst_63848);
} else {
if((state_val_63908 === (23))){
var inst_63891 = (state_63907[(2)]);
var state_63907__$1 = state_63907;
if(cljs.core.truth_(inst_63891)){
var statearr_63959_66048 = state_63907__$1;
(statearr_63959_66048[(1)] = (24));

} else {
var statearr_63960_66049 = state_63907__$1;
(statearr_63960_66049[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (19))){
var inst_63886 = (state_63907[(2)]);
var state_63907__$1 = state_63907;
var statearr_63963_66050 = state_63907__$1;
(statearr_63963_66050[(2)] = inst_63886);

(statearr_63963_66050[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (11))){
var inst_63857 = (state_63907[(14)]);
var inst_63870 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_63857);
var state_63907__$1 = state_63907;
var statearr_63965_66051 = state_63907__$1;
(statearr_63965_66051[(2)] = inst_63870);

(statearr_63965_66051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (9))){
var inst_63877 = (state_63907[(19)]);
var inst_63857 = (state_63907[(14)]);
var inst_63845 = (state_63907[(15)]);
var inst_63877__$1 = (inst_63845.cljs$core$IFn$_invoke$arity$1 ? inst_63845.cljs$core$IFn$_invoke$arity$1(inst_63857) : inst_63845.call(null,inst_63857));
var state_63907__$1 = (function (){var statearr_63966 = state_63907;
(statearr_63966[(19)] = inst_63877__$1);

return statearr_63966;
})();
if(cljs.core.truth_(inst_63877__$1)){
var statearr_63967_66060 = state_63907__$1;
(statearr_63967_66060[(1)] = (14));

} else {
var statearr_63968_66065 = state_63907__$1;
(statearr_63968_66065[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (5))){
var inst_63858 = (state_63907[(13)]);
var state_63907__$1 = state_63907;
var statearr_63970_66068 = state_63907__$1;
(statearr_63970_66068[(2)] = inst_63858);

(statearr_63970_66068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (14))){
var inst_63877 = (state_63907[(19)]);
var state_63907__$1 = state_63907;
var statearr_63971_66071 = state_63907__$1;
(statearr_63971_66071[(2)] = inst_63877);

(statearr_63971_66071[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (26))){
var inst_63896 = (state_63907[(2)]);
var state_63907__$1 = state_63907;
var statearr_63972_66072 = state_63907__$1;
(statearr_63972_66072[(2)] = inst_63896);

(statearr_63972_66072[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (16))){
var inst_63888 = (state_63907[(2)]);
var state_63907__$1 = state_63907;
if(cljs.core.truth_(inst_63888)){
var statearr_63978_66073 = state_63907__$1;
(statearr_63978_66073[(1)] = (20));

} else {
var statearr_63979_66074 = state_63907__$1;
(statearr_63979_66074[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (10))){
var inst_63902 = (state_63907[(2)]);
var state_63907__$1 = state_63907;
var statearr_63980_66084 = state_63907__$1;
(statearr_63980_66084[(2)] = inst_63902);

(statearr_63980_66084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (18))){
var inst_63880 = (state_63907[(16)]);
var state_63907__$1 = state_63907;
var statearr_63982_66091 = state_63907__$1;
(statearr_63982_66091[(2)] = inst_63880);

(statearr_63982_66091[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (8))){
var inst_63856 = (state_63907[(7)]);
var inst_63868 = (inst_63856 == null);
var state_63907__$1 = state_63907;
if(cljs.core.truth_(inst_63868)){
var statearr_63984_66096 = state_63907__$1;
(statearr_63984_66096[(1)] = (11));

} else {
var statearr_63985_66097 = state_63907__$1;
(statearr_63985_66097[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__62126__auto__ = null;
var cljs$core$async$mix_$_state_machine__62126__auto____0 = (function (){
var statearr_63987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63987[(0)] = cljs$core$async$mix_$_state_machine__62126__auto__);

(statearr_63987[(1)] = (1));

return statearr_63987;
});
var cljs$core$async$mix_$_state_machine__62126__auto____1 = (function (state_63907){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_63907);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e63989){var ex__62129__auto__ = e63989;
var statearr_63991_66102 = state_63907;
(statearr_63991_66102[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_63907[(4)]))){
var statearr_63993_66103 = state_63907;
(statearr_63993_66103[(1)] = cljs.core.first((state_63907[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66104 = state_63907;
state_63907 = G__66104;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__62126__auto__ = function(state_63907){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__62126__auto____1.call(this,state_63907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__62126__auto____0;
cljs$core$async$mix_$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__62126__auto____1;
return cljs$core$async$mix_$_state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_63996 = f__62557__auto__();
(statearr_63996[(6)] = c__62556__auto___65988);

return statearr_63996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_66113 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_66113(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_66124 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_66124(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_66137 = (function() {
var G__66138 = null;
var G__66138__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__66138__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__66138 = function(p,v){
switch(arguments.length){
case 1:
return G__66138__1.call(this,p);
case 2:
return G__66138__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__66138.cljs$core$IFn$_invoke$arity$1 = G__66138__1;
G__66138.cljs$core$IFn$_invoke$arity$2 = G__66138__2;
return G__66138;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__64023 = arguments.length;
switch (G__64023) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_66137(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_66137(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__64042 = arguments.length;
switch (G__64042) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__64028_SHARP_){
if(cljs.core.truth_((p1__64028_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__64028_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__64028_SHARP_.call(null,topic)))){
return p1__64028_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__64028_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64059 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64059 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta64060){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta64060 = meta64060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64061,meta64060__$1){
var self__ = this;
var _64061__$1 = this;
return (new cljs.core.async.t_cljs$core$async64059(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta64060__$1));
}));

(cljs.core.async.t_cljs$core$async64059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64061){
var self__ = this;
var _64061__$1 = this;
return self__.meta64060;
}));

(cljs.core.async.t_cljs$core$async64059.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64059.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async64059.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64059.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async64059.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async64059.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async64059.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async64059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta64060","meta64060",700854636,null)], null);
}));

(cljs.core.async.t_cljs$core$async64059.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64059");

(cljs.core.async.t_cljs$core$async64059.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async64059");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64059.
 */
cljs.core.async.__GT_t_cljs$core$async64059 = (function cljs$core$async$__GT_t_cljs$core$async64059(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta64060){
return (new cljs.core.async.t_cljs$core$async64059(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta64060));
});

}

return (new cljs.core.async.t_cljs$core$async64059(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__62556__auto___66189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_64192){
var state_val_64193 = (state_64192[(1)]);
if((state_val_64193 === (7))){
var inst_64188 = (state_64192[(2)]);
var state_64192__$1 = state_64192;
var statearr_64194_66190 = state_64192__$1;
(statearr_64194_66190[(2)] = inst_64188);

(statearr_64194_66190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (20))){
var state_64192__$1 = state_64192;
var statearr_64195_66191 = state_64192__$1;
(statearr_64195_66191[(2)] = null);

(statearr_64195_66191[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (1))){
var state_64192__$1 = state_64192;
var statearr_64196_66192 = state_64192__$1;
(statearr_64196_66192[(2)] = null);

(statearr_64196_66192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (24))){
var inst_64170 = (state_64192[(7)]);
var inst_64180 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_64170);
var state_64192__$1 = state_64192;
var statearr_64197_66197 = state_64192__$1;
(statearr_64197_66197[(2)] = inst_64180);

(statearr_64197_66197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (4))){
var inst_64092 = (state_64192[(8)]);
var inst_64092__$1 = (state_64192[(2)]);
var inst_64093 = (inst_64092__$1 == null);
var state_64192__$1 = (function (){var statearr_64198 = state_64192;
(statearr_64198[(8)] = inst_64092__$1);

return statearr_64198;
})();
if(cljs.core.truth_(inst_64093)){
var statearr_64199_66200 = state_64192__$1;
(statearr_64199_66200[(1)] = (5));

} else {
var statearr_64200_66201 = state_64192__$1;
(statearr_64200_66201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (15))){
var inst_64164 = (state_64192[(2)]);
var state_64192__$1 = state_64192;
var statearr_64201_66202 = state_64192__$1;
(statearr_64201_66202[(2)] = inst_64164);

(statearr_64201_66202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (21))){
var inst_64185 = (state_64192[(2)]);
var state_64192__$1 = (function (){var statearr_64202 = state_64192;
(statearr_64202[(9)] = inst_64185);

return statearr_64202;
})();
var statearr_64203_66207 = state_64192__$1;
(statearr_64203_66207[(2)] = null);

(statearr_64203_66207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (13))){
var inst_64142 = (state_64192[(10)]);
var inst_64146 = cljs.core.chunked_seq_QMARK_(inst_64142);
var state_64192__$1 = state_64192;
if(inst_64146){
var statearr_64207_66208 = state_64192__$1;
(statearr_64207_66208[(1)] = (16));

} else {
var statearr_64208_66209 = state_64192__$1;
(statearr_64208_66209[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (22))){
var inst_64177 = (state_64192[(2)]);
var state_64192__$1 = state_64192;
if(cljs.core.truth_(inst_64177)){
var statearr_64210_66210 = state_64192__$1;
(statearr_64210_66210[(1)] = (23));

} else {
var statearr_64211_66211 = state_64192__$1;
(statearr_64211_66211[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (6))){
var inst_64092 = (state_64192[(8)]);
var inst_64170 = (state_64192[(7)]);
var inst_64173 = (state_64192[(11)]);
var inst_64170__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_64092) : topic_fn.call(null,inst_64092));
var inst_64172 = cljs.core.deref(mults);
var inst_64173__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64172,inst_64170__$1);
var state_64192__$1 = (function (){var statearr_64213 = state_64192;
(statearr_64213[(7)] = inst_64170__$1);

(statearr_64213[(11)] = inst_64173__$1);

return statearr_64213;
})();
if(cljs.core.truth_(inst_64173__$1)){
var statearr_64214_66212 = state_64192__$1;
(statearr_64214_66212[(1)] = (19));

} else {
var statearr_64215_66213 = state_64192__$1;
(statearr_64215_66213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (25))){
var inst_64182 = (state_64192[(2)]);
var state_64192__$1 = state_64192;
var statearr_64217_66214 = state_64192__$1;
(statearr_64217_66214[(2)] = inst_64182);

(statearr_64217_66214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (17))){
var inst_64142 = (state_64192[(10)]);
var inst_64155 = cljs.core.first(inst_64142);
var inst_64156 = cljs.core.async.muxch_STAR_(inst_64155);
var inst_64157 = cljs.core.async.close_BANG_(inst_64156);
var inst_64158 = cljs.core.next(inst_64142);
var inst_64107 = inst_64158;
var inst_64108 = null;
var inst_64109 = (0);
var inst_64110 = (0);
var state_64192__$1 = (function (){var statearr_64220 = state_64192;
(statearr_64220[(12)] = inst_64107);

(statearr_64220[(13)] = inst_64109);

(statearr_64220[(14)] = inst_64157);

(statearr_64220[(15)] = inst_64110);

(statearr_64220[(16)] = inst_64108);

return statearr_64220;
})();
var statearr_64221_66220 = state_64192__$1;
(statearr_64221_66220[(2)] = null);

(statearr_64221_66220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (3))){
var inst_64190 = (state_64192[(2)]);
var state_64192__$1 = state_64192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64192__$1,inst_64190);
} else {
if((state_val_64193 === (12))){
var inst_64166 = (state_64192[(2)]);
var state_64192__$1 = state_64192;
var statearr_64225_66225 = state_64192__$1;
(statearr_64225_66225[(2)] = inst_64166);

(statearr_64225_66225[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (2))){
var state_64192__$1 = state_64192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64192__$1,(4),ch);
} else {
if((state_val_64193 === (23))){
var state_64192__$1 = state_64192;
var statearr_64226_66230 = state_64192__$1;
(statearr_64226_66230[(2)] = null);

(statearr_64226_66230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (19))){
var inst_64092 = (state_64192[(8)]);
var inst_64173 = (state_64192[(11)]);
var inst_64175 = cljs.core.async.muxch_STAR_(inst_64173);
var state_64192__$1 = state_64192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64192__$1,(22),inst_64175,inst_64092);
} else {
if((state_val_64193 === (11))){
var inst_64107 = (state_64192[(12)]);
var inst_64142 = (state_64192[(10)]);
var inst_64142__$1 = cljs.core.seq(inst_64107);
var state_64192__$1 = (function (){var statearr_64233 = state_64192;
(statearr_64233[(10)] = inst_64142__$1);

return statearr_64233;
})();
if(inst_64142__$1){
var statearr_64235_66234 = state_64192__$1;
(statearr_64235_66234[(1)] = (13));

} else {
var statearr_64238_66236 = state_64192__$1;
(statearr_64238_66236[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (9))){
var inst_64168 = (state_64192[(2)]);
var state_64192__$1 = state_64192;
var statearr_64240_66237 = state_64192__$1;
(statearr_64240_66237[(2)] = inst_64168);

(statearr_64240_66237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (5))){
var inst_64104 = cljs.core.deref(mults);
var inst_64105 = cljs.core.vals(inst_64104);
var inst_64106 = cljs.core.seq(inst_64105);
var inst_64107 = inst_64106;
var inst_64108 = null;
var inst_64109 = (0);
var inst_64110 = (0);
var state_64192__$1 = (function (){var statearr_64242 = state_64192;
(statearr_64242[(12)] = inst_64107);

(statearr_64242[(13)] = inst_64109);

(statearr_64242[(15)] = inst_64110);

(statearr_64242[(16)] = inst_64108);

return statearr_64242;
})();
var statearr_64243_66238 = state_64192__$1;
(statearr_64243_66238[(2)] = null);

(statearr_64243_66238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (14))){
var state_64192__$1 = state_64192;
var statearr_64248_66239 = state_64192__$1;
(statearr_64248_66239[(2)] = null);

(statearr_64248_66239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (16))){
var inst_64142 = (state_64192[(10)]);
var inst_64148 = cljs.core.chunk_first(inst_64142);
var inst_64150 = cljs.core.chunk_rest(inst_64142);
var inst_64152 = cljs.core.count(inst_64148);
var inst_64107 = inst_64150;
var inst_64108 = inst_64148;
var inst_64109 = inst_64152;
var inst_64110 = (0);
var state_64192__$1 = (function (){var statearr_64249 = state_64192;
(statearr_64249[(12)] = inst_64107);

(statearr_64249[(13)] = inst_64109);

(statearr_64249[(15)] = inst_64110);

(statearr_64249[(16)] = inst_64108);

return statearr_64249;
})();
var statearr_64250_66241 = state_64192__$1;
(statearr_64250_66241[(2)] = null);

(statearr_64250_66241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (10))){
var inst_64107 = (state_64192[(12)]);
var inst_64109 = (state_64192[(13)]);
var inst_64110 = (state_64192[(15)]);
var inst_64108 = (state_64192[(16)]);
var inst_64117 = cljs.core._nth(inst_64108,inst_64110);
var inst_64119 = cljs.core.async.muxch_STAR_(inst_64117);
var inst_64120 = cljs.core.async.close_BANG_(inst_64119);
var inst_64122 = (inst_64110 + (1));
var tmp64245 = inst_64107;
var tmp64246 = inst_64109;
var tmp64247 = inst_64108;
var inst_64107__$1 = tmp64245;
var inst_64108__$1 = tmp64247;
var inst_64109__$1 = tmp64246;
var inst_64110__$1 = inst_64122;
var state_64192__$1 = (function (){var statearr_64252 = state_64192;
(statearr_64252[(12)] = inst_64107__$1);

(statearr_64252[(13)] = inst_64109__$1);

(statearr_64252[(17)] = inst_64120);

(statearr_64252[(15)] = inst_64110__$1);

(statearr_64252[(16)] = inst_64108__$1);

return statearr_64252;
})();
var statearr_64253_66245 = state_64192__$1;
(statearr_64253_66245[(2)] = null);

(statearr_64253_66245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (18))){
var inst_64161 = (state_64192[(2)]);
var state_64192__$1 = state_64192;
var statearr_64254_66246 = state_64192__$1;
(statearr_64254_66246[(2)] = inst_64161);

(statearr_64254_66246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64193 === (8))){
var inst_64109 = (state_64192[(13)]);
var inst_64110 = (state_64192[(15)]);
var inst_64113 = (inst_64110 < inst_64109);
var inst_64114 = inst_64113;
var state_64192__$1 = state_64192;
if(cljs.core.truth_(inst_64114)){
var statearr_64256_66247 = state_64192__$1;
(statearr_64256_66247[(1)] = (10));

} else {
var statearr_64257_66248 = state_64192__$1;
(statearr_64257_66248[(1)] = (11));

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
var cljs$core$async$state_machine__62126__auto__ = null;
var cljs$core$async$state_machine__62126__auto____0 = (function (){
var statearr_64260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64260[(0)] = cljs$core$async$state_machine__62126__auto__);

(statearr_64260[(1)] = (1));

return statearr_64260;
});
var cljs$core$async$state_machine__62126__auto____1 = (function (state_64192){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_64192);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e64263){var ex__62129__auto__ = e64263;
var statearr_64265_66253 = state_64192;
(statearr_64265_66253[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_64192[(4)]))){
var statearr_64267_66254 = state_64192;
(statearr_64267_66254[(1)] = cljs.core.first((state_64192[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66256 = state_64192;
state_64192 = G__66256;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$state_machine__62126__auto__ = function(state_64192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62126__auto____1.call(this,state_64192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62126__auto____0;
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62126__auto____1;
return cljs$core$async$state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_64271 = f__62557__auto__();
(statearr_64271[(6)] = c__62556__auto___66189);

return statearr_64271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
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
var G__64275 = arguments.length;
switch (G__64275) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__64286 = arguments.length;
switch (G__64286) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__64295 = arguments.length;
switch (G__64295) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__62556__auto___66278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_64349){
var state_val_64350 = (state_64349[(1)]);
if((state_val_64350 === (7))){
var state_64349__$1 = state_64349;
var statearr_64353_66279 = state_64349__$1;
(statearr_64353_66279[(2)] = null);

(statearr_64353_66279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (1))){
var state_64349__$1 = state_64349;
var statearr_64354_66280 = state_64349__$1;
(statearr_64354_66280[(2)] = null);

(statearr_64354_66280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (4))){
var inst_64302 = (state_64349[(7)]);
var inst_64303 = (state_64349[(8)]);
var inst_64305 = (inst_64303 < inst_64302);
var state_64349__$1 = state_64349;
if(cljs.core.truth_(inst_64305)){
var statearr_64357_66284 = state_64349__$1;
(statearr_64357_66284[(1)] = (6));

} else {
var statearr_64358_66285 = state_64349__$1;
(statearr_64358_66285[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (15))){
var inst_64335 = (state_64349[(9)]);
var inst_64340 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_64335);
var state_64349__$1 = state_64349;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64349__$1,(17),out,inst_64340);
} else {
if((state_val_64350 === (13))){
var inst_64335 = (state_64349[(9)]);
var inst_64335__$1 = (state_64349[(2)]);
var inst_64336 = cljs.core.some(cljs.core.nil_QMARK_,inst_64335__$1);
var state_64349__$1 = (function (){var statearr_64362 = state_64349;
(statearr_64362[(9)] = inst_64335__$1);

return statearr_64362;
})();
if(cljs.core.truth_(inst_64336)){
var statearr_64363_66290 = state_64349__$1;
(statearr_64363_66290[(1)] = (14));

} else {
var statearr_64364_66292 = state_64349__$1;
(statearr_64364_66292[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (6))){
var state_64349__$1 = state_64349;
var statearr_64365_66293 = state_64349__$1;
(statearr_64365_66293[(2)] = null);

(statearr_64365_66293[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (17))){
var inst_64342 = (state_64349[(2)]);
var state_64349__$1 = (function (){var statearr_64371 = state_64349;
(statearr_64371[(10)] = inst_64342);

return statearr_64371;
})();
var statearr_64372_66294 = state_64349__$1;
(statearr_64372_66294[(2)] = null);

(statearr_64372_66294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (3))){
var inst_64347 = (state_64349[(2)]);
var state_64349__$1 = state_64349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64349__$1,inst_64347);
} else {
if((state_val_64350 === (12))){
var _ = (function (){var statearr_64378 = state_64349;
(statearr_64378[(4)] = cljs.core.rest((state_64349[(4)])));

return statearr_64378;
})();
var state_64349__$1 = state_64349;
var ex64370 = (state_64349__$1[(2)]);
var statearr_64390_66301 = state_64349__$1;
(statearr_64390_66301[(5)] = ex64370);


if((ex64370 instanceof Object)){
var statearr_64405_66302 = state_64349__$1;
(statearr_64405_66302[(1)] = (11));

(statearr_64405_66302[(5)] = null);

} else {
throw ex64370;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (2))){
var inst_64301 = cljs.core.reset_BANG_(dctr,cnt);
var inst_64302 = cnt;
var inst_64303 = (0);
var state_64349__$1 = (function (){var statearr_64413 = state_64349;
(statearr_64413[(11)] = inst_64301);

(statearr_64413[(7)] = inst_64302);

(statearr_64413[(8)] = inst_64303);

return statearr_64413;
})();
var statearr_64414_66307 = state_64349__$1;
(statearr_64414_66307[(2)] = null);

(statearr_64414_66307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (11))){
var inst_64310 = (state_64349[(2)]);
var inst_64311 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_64349__$1 = (function (){var statearr_64418 = state_64349;
(statearr_64418[(12)] = inst_64310);

return statearr_64418;
})();
var statearr_64419_66308 = state_64349__$1;
(statearr_64419_66308[(2)] = inst_64311);

(statearr_64419_66308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (9))){
var inst_64303 = (state_64349[(8)]);
var _ = (function (){var statearr_64422 = state_64349;
(statearr_64422[(4)] = cljs.core.cons((12),(state_64349[(4)])));

return statearr_64422;
})();
var inst_64320 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_64303) : chs__$1.call(null,inst_64303));
var inst_64321 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_64303) : done.call(null,inst_64303));
var inst_64322 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_64320,inst_64321);
var ___$1 = (function (){var statearr_64424 = state_64349;
(statearr_64424[(4)] = cljs.core.rest((state_64349[(4)])));

return statearr_64424;
})();
var state_64349__$1 = state_64349;
var statearr_64425_66314 = state_64349__$1;
(statearr_64425_66314[(2)] = inst_64322);

(statearr_64425_66314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (5))){
var inst_64333 = (state_64349[(2)]);
var state_64349__$1 = (function (){var statearr_64426 = state_64349;
(statearr_64426[(13)] = inst_64333);

return statearr_64426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64349__$1,(13),dchan);
} else {
if((state_val_64350 === (14))){
var inst_64338 = cljs.core.async.close_BANG_(out);
var state_64349__$1 = state_64349;
var statearr_64427_66318 = state_64349__$1;
(statearr_64427_66318[(2)] = inst_64338);

(statearr_64427_66318[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (16))){
var inst_64345 = (state_64349[(2)]);
var state_64349__$1 = state_64349;
var statearr_64428_66319 = state_64349__$1;
(statearr_64428_66319[(2)] = inst_64345);

(statearr_64428_66319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (10))){
var inst_64303 = (state_64349[(8)]);
var inst_64325 = (state_64349[(2)]);
var inst_64326 = (inst_64303 + (1));
var inst_64303__$1 = inst_64326;
var state_64349__$1 = (function (){var statearr_64429 = state_64349;
(statearr_64429[(14)] = inst_64325);

(statearr_64429[(8)] = inst_64303__$1);

return statearr_64429;
})();
var statearr_64430_66320 = state_64349__$1;
(statearr_64430_66320[(2)] = null);

(statearr_64430_66320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64350 === (8))){
var inst_64331 = (state_64349[(2)]);
var state_64349__$1 = state_64349;
var statearr_64431_66321 = state_64349__$1;
(statearr_64431_66321[(2)] = inst_64331);

(statearr_64431_66321[(1)] = (5));


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
var cljs$core$async$state_machine__62126__auto__ = null;
var cljs$core$async$state_machine__62126__auto____0 = (function (){
var statearr_64444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64444[(0)] = cljs$core$async$state_machine__62126__auto__);

(statearr_64444[(1)] = (1));

return statearr_64444;
});
var cljs$core$async$state_machine__62126__auto____1 = (function (state_64349){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_64349);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e64454){var ex__62129__auto__ = e64454;
var statearr_64456_66328 = state_64349;
(statearr_64456_66328[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_64349[(4)]))){
var statearr_64462_66330 = state_64349;
(statearr_64462_66330[(1)] = cljs.core.first((state_64349[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66334 = state_64349;
state_64349 = G__66334;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$state_machine__62126__auto__ = function(state_64349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62126__auto____1.call(this,state_64349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62126__auto____0;
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62126__auto____1;
return cljs$core$async$state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_64465 = f__62557__auto__();
(statearr_64465[(6)] = c__62556__auto___66278);

return statearr_64465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
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
var G__64469 = arguments.length;
switch (G__64469) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62556__auto___66345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_64516){
var state_val_64517 = (state_64516[(1)]);
if((state_val_64517 === (7))){
var inst_64489 = (state_64516[(7)]);
var inst_64490 = (state_64516[(8)]);
var inst_64489__$1 = (state_64516[(2)]);
var inst_64490__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64489__$1,(0),null);
var inst_64491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64489__$1,(1),null);
var inst_64492 = (inst_64490__$1 == null);
var state_64516__$1 = (function (){var statearr_64525 = state_64516;
(statearr_64525[(7)] = inst_64489__$1);

(statearr_64525[(9)] = inst_64491);

(statearr_64525[(8)] = inst_64490__$1);

return statearr_64525;
})();
if(cljs.core.truth_(inst_64492)){
var statearr_64526_66359 = state_64516__$1;
(statearr_64526_66359[(1)] = (8));

} else {
var statearr_64527_66360 = state_64516__$1;
(statearr_64527_66360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64517 === (1))){
var inst_64474 = cljs.core.vec(chs);
var inst_64475 = inst_64474;
var state_64516__$1 = (function (){var statearr_64531 = state_64516;
(statearr_64531[(10)] = inst_64475);

return statearr_64531;
})();
var statearr_64532_66361 = state_64516__$1;
(statearr_64532_66361[(2)] = null);

(statearr_64532_66361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64517 === (4))){
var inst_64475 = (state_64516[(10)]);
var state_64516__$1 = state_64516;
return cljs.core.async.ioc_alts_BANG_(state_64516__$1,(7),inst_64475);
} else {
if((state_val_64517 === (6))){
var inst_64511 = (state_64516[(2)]);
var state_64516__$1 = state_64516;
var statearr_64534_66362 = state_64516__$1;
(statearr_64534_66362[(2)] = inst_64511);

(statearr_64534_66362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64517 === (3))){
var inst_64513 = (state_64516[(2)]);
var state_64516__$1 = state_64516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64516__$1,inst_64513);
} else {
if((state_val_64517 === (2))){
var inst_64475 = (state_64516[(10)]);
var inst_64482 = cljs.core.count(inst_64475);
var inst_64483 = (inst_64482 > (0));
var state_64516__$1 = state_64516;
if(cljs.core.truth_(inst_64483)){
var statearr_64538_66364 = state_64516__$1;
(statearr_64538_66364[(1)] = (4));

} else {
var statearr_64539_66365 = state_64516__$1;
(statearr_64539_66365[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64517 === (11))){
var inst_64475 = (state_64516[(10)]);
var inst_64504 = (state_64516[(2)]);
var tmp64535 = inst_64475;
var inst_64475__$1 = tmp64535;
var state_64516__$1 = (function (){var statearr_64540 = state_64516;
(statearr_64540[(10)] = inst_64475__$1);

(statearr_64540[(11)] = inst_64504);

return statearr_64540;
})();
var statearr_64542_66367 = state_64516__$1;
(statearr_64542_66367[(2)] = null);

(statearr_64542_66367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64517 === (9))){
var inst_64490 = (state_64516[(8)]);
var state_64516__$1 = state_64516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64516__$1,(11),out,inst_64490);
} else {
if((state_val_64517 === (5))){
var inst_64509 = cljs.core.async.close_BANG_(out);
var state_64516__$1 = state_64516;
var statearr_64549_66369 = state_64516__$1;
(statearr_64549_66369[(2)] = inst_64509);

(statearr_64549_66369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64517 === (10))){
var inst_64507 = (state_64516[(2)]);
var state_64516__$1 = state_64516;
var statearr_64550_66371 = state_64516__$1;
(statearr_64550_66371[(2)] = inst_64507);

(statearr_64550_66371[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64517 === (8))){
var inst_64489 = (state_64516[(7)]);
var inst_64475 = (state_64516[(10)]);
var inst_64491 = (state_64516[(9)]);
var inst_64490 = (state_64516[(8)]);
var inst_64496 = (function (){var cs = inst_64475;
var vec__64485 = inst_64489;
var v = inst_64490;
var c = inst_64491;
return (function (p1__64466_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__64466_SHARP_);
});
})();
var inst_64497 = cljs.core.filterv(inst_64496,inst_64475);
var inst_64475__$1 = inst_64497;
var state_64516__$1 = (function (){var statearr_64553 = state_64516;
(statearr_64553[(10)] = inst_64475__$1);

return statearr_64553;
})();
var statearr_64554_66376 = state_64516__$1;
(statearr_64554_66376[(2)] = null);

(statearr_64554_66376[(1)] = (2));


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
var cljs$core$async$state_machine__62126__auto__ = null;
var cljs$core$async$state_machine__62126__auto____0 = (function (){
var statearr_64557 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64557[(0)] = cljs$core$async$state_machine__62126__auto__);

(statearr_64557[(1)] = (1));

return statearr_64557;
});
var cljs$core$async$state_machine__62126__auto____1 = (function (state_64516){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_64516);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e64561){var ex__62129__auto__ = e64561;
var statearr_64562_66381 = state_64516;
(statearr_64562_66381[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_64516[(4)]))){
var statearr_64563_66383 = state_64516;
(statearr_64563_66383[(1)] = cljs.core.first((state_64516[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66387 = state_64516;
state_64516 = G__66387;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$state_machine__62126__auto__ = function(state_64516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62126__auto____1.call(this,state_64516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62126__auto____0;
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62126__auto____1;
return cljs$core$async$state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_64564 = f__62557__auto__();
(statearr_64564[(6)] = c__62556__auto___66345);

return statearr_64564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
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
var G__64568 = arguments.length;
switch (G__64568) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62556__auto___66394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_64604){
var state_val_64605 = (state_64604[(1)]);
if((state_val_64605 === (7))){
var inst_64578 = (state_64604[(7)]);
var inst_64578__$1 = (state_64604[(2)]);
var inst_64580 = (inst_64578__$1 == null);
var inst_64581 = cljs.core.not(inst_64580);
var state_64604__$1 = (function (){var statearr_64607 = state_64604;
(statearr_64607[(7)] = inst_64578__$1);

return statearr_64607;
})();
if(inst_64581){
var statearr_64608_66396 = state_64604__$1;
(statearr_64608_66396[(1)] = (8));

} else {
var statearr_64609_66397 = state_64604__$1;
(statearr_64609_66397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64605 === (1))){
var inst_64570 = (0);
var state_64604__$1 = (function (){var statearr_64610 = state_64604;
(statearr_64610[(8)] = inst_64570);

return statearr_64610;
})();
var statearr_64611_66400 = state_64604__$1;
(statearr_64611_66400[(2)] = null);

(statearr_64611_66400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64605 === (4))){
var state_64604__$1 = state_64604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64604__$1,(7),ch);
} else {
if((state_val_64605 === (6))){
var inst_64593 = (state_64604[(2)]);
var state_64604__$1 = state_64604;
var statearr_64612_66401 = state_64604__$1;
(statearr_64612_66401[(2)] = inst_64593);

(statearr_64612_66401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64605 === (3))){
var inst_64595 = (state_64604[(2)]);
var inst_64598 = cljs.core.async.close_BANG_(out);
var state_64604__$1 = (function (){var statearr_64614 = state_64604;
(statearr_64614[(9)] = inst_64595);

return statearr_64614;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64604__$1,inst_64598);
} else {
if((state_val_64605 === (2))){
var inst_64570 = (state_64604[(8)]);
var inst_64572 = (inst_64570 < n);
var state_64604__$1 = state_64604;
if(cljs.core.truth_(inst_64572)){
var statearr_64615_66404 = state_64604__$1;
(statearr_64615_66404[(1)] = (4));

} else {
var statearr_64617_66405 = state_64604__$1;
(statearr_64617_66405[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64605 === (11))){
var inst_64570 = (state_64604[(8)]);
var inst_64584 = (state_64604[(2)]);
var inst_64585 = (inst_64570 + (1));
var inst_64570__$1 = inst_64585;
var state_64604__$1 = (function (){var statearr_64643 = state_64604;
(statearr_64643[(8)] = inst_64570__$1);

(statearr_64643[(10)] = inst_64584);

return statearr_64643;
})();
var statearr_64644_66411 = state_64604__$1;
(statearr_64644_66411[(2)] = null);

(statearr_64644_66411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64605 === (9))){
var state_64604__$1 = state_64604;
var statearr_64650_66413 = state_64604__$1;
(statearr_64650_66413[(2)] = null);

(statearr_64650_66413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64605 === (5))){
var state_64604__$1 = state_64604;
var statearr_64652_66416 = state_64604__$1;
(statearr_64652_66416[(2)] = null);

(statearr_64652_66416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64605 === (10))){
var inst_64590 = (state_64604[(2)]);
var state_64604__$1 = state_64604;
var statearr_64657_66417 = state_64604__$1;
(statearr_64657_66417[(2)] = inst_64590);

(statearr_64657_66417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64605 === (8))){
var inst_64578 = (state_64604[(7)]);
var state_64604__$1 = state_64604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64604__$1,(11),out,inst_64578);
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
var cljs$core$async$state_machine__62126__auto__ = null;
var cljs$core$async$state_machine__62126__auto____0 = (function (){
var statearr_64661 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64661[(0)] = cljs$core$async$state_machine__62126__auto__);

(statearr_64661[(1)] = (1));

return statearr_64661;
});
var cljs$core$async$state_machine__62126__auto____1 = (function (state_64604){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_64604);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e64665){var ex__62129__auto__ = e64665;
var statearr_64666_66418 = state_64604;
(statearr_64666_66418[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_64604[(4)]))){
var statearr_64667_66419 = state_64604;
(statearr_64667_66419[(1)] = cljs.core.first((state_64604[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66422 = state_64604;
state_64604 = G__66422;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$state_machine__62126__auto__ = function(state_64604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62126__auto____1.call(this,state_64604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62126__auto____0;
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62126__auto____1;
return cljs$core$async$state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_64670 = f__62557__auto__();
(statearr_64670[(6)] = c__62556__auto___66394);

return statearr_64670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64672 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64672 = (function (f,ch,meta64673){
this.f = f;
this.ch = ch;
this.meta64673 = meta64673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64674,meta64673__$1){
var self__ = this;
var _64674__$1 = this;
return (new cljs.core.async.t_cljs$core$async64672(self__.f,self__.ch,meta64673__$1));
}));

(cljs.core.async.t_cljs$core$async64672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64674){
var self__ = this;
var _64674__$1 = this;
return self__.meta64673;
}));

(cljs.core.async.t_cljs$core$async64672.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64672.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64672.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64672.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64672.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64690 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64690 = (function (f,ch,meta64673,_,fn1,meta64691){
this.f = f;
this.ch = ch;
this.meta64673 = meta64673;
this._ = _;
this.fn1 = fn1;
this.meta64691 = meta64691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64692,meta64691__$1){
var self__ = this;
var _64692__$1 = this;
return (new cljs.core.async.t_cljs$core$async64690(self__.f,self__.ch,self__.meta64673,self__._,self__.fn1,meta64691__$1));
}));

(cljs.core.async.t_cljs$core$async64690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64692){
var self__ = this;
var _64692__$1 = this;
return self__.meta64691;
}));

(cljs.core.async.t_cljs$core$async64690.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64690.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async64690.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async64690.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__64671_SHARP_){
var G__64714 = (((p1__64671_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__64671_SHARP_) : self__.f.call(null,p1__64671_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__64714) : f1.call(null,G__64714));
});
}));

(cljs.core.async.t_cljs$core$async64690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64673","meta64673",-1714243923,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async64672","cljs.core.async/t_cljs$core$async64672",533500925,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta64691","meta64691",-628090258,null)], null);
}));

(cljs.core.async.t_cljs$core$async64690.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64690");

(cljs.core.async.t_cljs$core$async64690.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async64690");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64690.
 */
cljs.core.async.__GT_t_cljs$core$async64690 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async64690(f__$1,ch__$1,meta64673__$1,___$2,fn1__$1,meta64691){
return (new cljs.core.async.t_cljs$core$async64690(f__$1,ch__$1,meta64673__$1,___$2,fn1__$1,meta64691));
});

}

return (new cljs.core.async.t_cljs$core$async64690(self__.f,self__.ch,self__.meta64673,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__64731 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__64731) : self__.f.call(null,G__64731));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async64672.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64672.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async64672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64673","meta64673",-1714243923,null)], null);
}));

(cljs.core.async.t_cljs$core$async64672.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64672");

(cljs.core.async.t_cljs$core$async64672.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async64672");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64672.
 */
cljs.core.async.__GT_t_cljs$core$async64672 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async64672(f__$1,ch__$1,meta64673){
return (new cljs.core.async.t_cljs$core$async64672(f__$1,ch__$1,meta64673));
});

}

return (new cljs.core.async.t_cljs$core$async64672(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64747 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64747 = (function (f,ch,meta64748){
this.f = f;
this.ch = ch;
this.meta64748 = meta64748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64749,meta64748__$1){
var self__ = this;
var _64749__$1 = this;
return (new cljs.core.async.t_cljs$core$async64747(self__.f,self__.ch,meta64748__$1));
}));

(cljs.core.async.t_cljs$core$async64747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64749){
var self__ = this;
var _64749__$1 = this;
return self__.meta64748;
}));

(cljs.core.async.t_cljs$core$async64747.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64747.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64747.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64747.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async64747.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64747.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async64747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64748","meta64748",1610492438,null)], null);
}));

(cljs.core.async.t_cljs$core$async64747.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64747");

(cljs.core.async.t_cljs$core$async64747.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async64747");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64747.
 */
cljs.core.async.__GT_t_cljs$core$async64747 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async64747(f__$1,ch__$1,meta64748){
return (new cljs.core.async.t_cljs$core$async64747(f__$1,ch__$1,meta64748));
});

}

return (new cljs.core.async.t_cljs$core$async64747(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64793 = (function (p,ch,meta64794){
this.p = p;
this.ch = ch;
this.meta64794 = meta64794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64795,meta64794__$1){
var self__ = this;
var _64795__$1 = this;
return (new cljs.core.async.t_cljs$core$async64793(self__.p,self__.ch,meta64794__$1));
}));

(cljs.core.async.t_cljs$core$async64793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64795){
var self__ = this;
var _64795__$1 = this;
return self__.meta64794;
}));

(cljs.core.async.t_cljs$core$async64793.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64793.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64793.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64793.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64793.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async64793.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64793.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async64793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64794","meta64794",-1906859428,null)], null);
}));

(cljs.core.async.t_cljs$core$async64793.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64793");

(cljs.core.async.t_cljs$core$async64793.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async64793");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64793.
 */
cljs.core.async.__GT_t_cljs$core$async64793 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async64793(p__$1,ch__$1,meta64794){
return (new cljs.core.async.t_cljs$core$async64793(p__$1,ch__$1,meta64794));
});

}

return (new cljs.core.async.t_cljs$core$async64793(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__64849 = arguments.length;
switch (G__64849) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62556__auto___66459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_64890){
var state_val_64891 = (state_64890[(1)]);
if((state_val_64891 === (7))){
var inst_64886 = (state_64890[(2)]);
var state_64890__$1 = state_64890;
var statearr_64899_66460 = state_64890__$1;
(statearr_64899_66460[(2)] = inst_64886);

(statearr_64899_66460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64891 === (1))){
var state_64890__$1 = state_64890;
var statearr_64904_66461 = state_64890__$1;
(statearr_64904_66461[(2)] = null);

(statearr_64904_66461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64891 === (4))){
var inst_64871 = (state_64890[(7)]);
var inst_64871__$1 = (state_64890[(2)]);
var inst_64872 = (inst_64871__$1 == null);
var state_64890__$1 = (function (){var statearr_64909 = state_64890;
(statearr_64909[(7)] = inst_64871__$1);

return statearr_64909;
})();
if(cljs.core.truth_(inst_64872)){
var statearr_64910_66462 = state_64890__$1;
(statearr_64910_66462[(1)] = (5));

} else {
var statearr_64911_66463 = state_64890__$1;
(statearr_64911_66463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64891 === (6))){
var inst_64871 = (state_64890[(7)]);
var inst_64877 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_64871) : p.call(null,inst_64871));
var state_64890__$1 = state_64890;
if(cljs.core.truth_(inst_64877)){
var statearr_64913_66464 = state_64890__$1;
(statearr_64913_66464[(1)] = (8));

} else {
var statearr_64914_66465 = state_64890__$1;
(statearr_64914_66465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64891 === (3))){
var inst_64888 = (state_64890[(2)]);
var state_64890__$1 = state_64890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64890__$1,inst_64888);
} else {
if((state_val_64891 === (2))){
var state_64890__$1 = state_64890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64890__$1,(4),ch);
} else {
if((state_val_64891 === (11))){
var inst_64880 = (state_64890[(2)]);
var state_64890__$1 = state_64890;
var statearr_64941_66467 = state_64890__$1;
(statearr_64941_66467[(2)] = inst_64880);

(statearr_64941_66467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64891 === (9))){
var state_64890__$1 = state_64890;
var statearr_64944_66468 = state_64890__$1;
(statearr_64944_66468[(2)] = null);

(statearr_64944_66468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64891 === (5))){
var inst_64875 = cljs.core.async.close_BANG_(out);
var state_64890__$1 = state_64890;
var statearr_64954_66471 = state_64890__$1;
(statearr_64954_66471[(2)] = inst_64875);

(statearr_64954_66471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64891 === (10))){
var inst_64883 = (state_64890[(2)]);
var state_64890__$1 = (function (){var statearr_64959 = state_64890;
(statearr_64959[(8)] = inst_64883);

return statearr_64959;
})();
var statearr_64961_66475 = state_64890__$1;
(statearr_64961_66475[(2)] = null);

(statearr_64961_66475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64891 === (8))){
var inst_64871 = (state_64890[(7)]);
var state_64890__$1 = state_64890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64890__$1,(11),out,inst_64871);
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
var cljs$core$async$state_machine__62126__auto__ = null;
var cljs$core$async$state_machine__62126__auto____0 = (function (){
var statearr_64964 = [null,null,null,null,null,null,null,null,null];
(statearr_64964[(0)] = cljs$core$async$state_machine__62126__auto__);

(statearr_64964[(1)] = (1));

return statearr_64964;
});
var cljs$core$async$state_machine__62126__auto____1 = (function (state_64890){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_64890);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e64965){var ex__62129__auto__ = e64965;
var statearr_64966_66481 = state_64890;
(statearr_64966_66481[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_64890[(4)]))){
var statearr_64967_66482 = state_64890;
(statearr_64967_66482[(1)] = cljs.core.first((state_64890[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66484 = state_64890;
state_64890 = G__66484;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$state_machine__62126__auto__ = function(state_64890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62126__auto____1.call(this,state_64890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62126__auto____0;
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62126__auto____1;
return cljs$core$async$state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_64972 = f__62557__auto__();
(statearr_64972[(6)] = c__62556__auto___66459);

return statearr_64972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__64979 = arguments.length;
switch (G__64979) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__62556__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_65107){
var state_val_65108 = (state_65107[(1)]);
if((state_val_65108 === (7))){
var inst_65097 = (state_65107[(2)]);
var state_65107__$1 = state_65107;
var statearr_65113_66487 = state_65107__$1;
(statearr_65113_66487[(2)] = inst_65097);

(statearr_65113_66487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (20))){
var inst_65061 = (state_65107[(7)]);
var inst_65078 = (state_65107[(2)]);
var inst_65079 = cljs.core.next(inst_65061);
var inst_65006 = inst_65079;
var inst_65007 = null;
var inst_65008 = (0);
var inst_65009 = (0);
var state_65107__$1 = (function (){var statearr_65115 = state_65107;
(statearr_65115[(8)] = inst_65006);

(statearr_65115[(9)] = inst_65078);

(statearr_65115[(10)] = inst_65007);

(statearr_65115[(11)] = inst_65008);

(statearr_65115[(12)] = inst_65009);

return statearr_65115;
})();
var statearr_65117_66491 = state_65107__$1;
(statearr_65117_66491[(2)] = null);

(statearr_65117_66491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (1))){
var state_65107__$1 = state_65107;
var statearr_65120_66492 = state_65107__$1;
(statearr_65120_66492[(2)] = null);

(statearr_65120_66492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (4))){
var inst_64992 = (state_65107[(13)]);
var inst_64992__$1 = (state_65107[(2)]);
var inst_64993 = (inst_64992__$1 == null);
var state_65107__$1 = (function (){var statearr_65122 = state_65107;
(statearr_65122[(13)] = inst_64992__$1);

return statearr_65122;
})();
if(cljs.core.truth_(inst_64993)){
var statearr_65123_66494 = state_65107__$1;
(statearr_65123_66494[(1)] = (5));

} else {
var statearr_65124_66495 = state_65107__$1;
(statearr_65124_66495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (15))){
var state_65107__$1 = state_65107;
var statearr_65130_66499 = state_65107__$1;
(statearr_65130_66499[(2)] = null);

(statearr_65130_66499[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (21))){
var state_65107__$1 = state_65107;
var statearr_65132_66500 = state_65107__$1;
(statearr_65132_66500[(2)] = null);

(statearr_65132_66500[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (13))){
var inst_65006 = (state_65107[(8)]);
var inst_65007 = (state_65107[(10)]);
var inst_65008 = (state_65107[(11)]);
var inst_65009 = (state_65107[(12)]);
var inst_65053 = (state_65107[(2)]);
var inst_65057 = (inst_65009 + (1));
var tmp65125 = inst_65006;
var tmp65126 = inst_65007;
var tmp65127 = inst_65008;
var inst_65006__$1 = tmp65125;
var inst_65007__$1 = tmp65126;
var inst_65008__$1 = tmp65127;
var inst_65009__$1 = inst_65057;
var state_65107__$1 = (function (){var statearr_65136 = state_65107;
(statearr_65136[(8)] = inst_65006__$1);

(statearr_65136[(14)] = inst_65053);

(statearr_65136[(10)] = inst_65007__$1);

(statearr_65136[(11)] = inst_65008__$1);

(statearr_65136[(12)] = inst_65009__$1);

return statearr_65136;
})();
var statearr_65137_66502 = state_65107__$1;
(statearr_65137_66502[(2)] = null);

(statearr_65137_66502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (22))){
var state_65107__$1 = state_65107;
var statearr_65142_66503 = state_65107__$1;
(statearr_65142_66503[(2)] = null);

(statearr_65142_66503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (6))){
var inst_64992 = (state_65107[(13)]);
var inst_65004 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_64992) : f.call(null,inst_64992));
var inst_65005 = cljs.core.seq(inst_65004);
var inst_65006 = inst_65005;
var inst_65007 = null;
var inst_65008 = (0);
var inst_65009 = (0);
var state_65107__$1 = (function (){var statearr_65146 = state_65107;
(statearr_65146[(8)] = inst_65006);

(statearr_65146[(10)] = inst_65007);

(statearr_65146[(11)] = inst_65008);

(statearr_65146[(12)] = inst_65009);

return statearr_65146;
})();
var statearr_65148_66504 = state_65107__$1;
(statearr_65148_66504[(2)] = null);

(statearr_65148_66504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (17))){
var inst_65061 = (state_65107[(7)]);
var inst_65066 = cljs.core.chunk_first(inst_65061);
var inst_65069 = cljs.core.chunk_rest(inst_65061);
var inst_65070 = cljs.core.count(inst_65066);
var inst_65006 = inst_65069;
var inst_65007 = inst_65066;
var inst_65008 = inst_65070;
var inst_65009 = (0);
var state_65107__$1 = (function (){var statearr_65149 = state_65107;
(statearr_65149[(8)] = inst_65006);

(statearr_65149[(10)] = inst_65007);

(statearr_65149[(11)] = inst_65008);

(statearr_65149[(12)] = inst_65009);

return statearr_65149;
})();
var statearr_65150_66506 = state_65107__$1;
(statearr_65150_66506[(2)] = null);

(statearr_65150_66506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (3))){
var inst_65099 = (state_65107[(2)]);
var state_65107__$1 = state_65107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65107__$1,inst_65099);
} else {
if((state_val_65108 === (12))){
var inst_65087 = (state_65107[(2)]);
var state_65107__$1 = state_65107;
var statearr_65155_66508 = state_65107__$1;
(statearr_65155_66508[(2)] = inst_65087);

(statearr_65155_66508[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (2))){
var state_65107__$1 = state_65107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65107__$1,(4),in$);
} else {
if((state_val_65108 === (23))){
var inst_65095 = (state_65107[(2)]);
var state_65107__$1 = state_65107;
var statearr_65158_66509 = state_65107__$1;
(statearr_65158_66509[(2)] = inst_65095);

(statearr_65158_66509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (19))){
var inst_65082 = (state_65107[(2)]);
var state_65107__$1 = state_65107;
var statearr_65159_66512 = state_65107__$1;
(statearr_65159_66512[(2)] = inst_65082);

(statearr_65159_66512[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (11))){
var inst_65006 = (state_65107[(8)]);
var inst_65061 = (state_65107[(7)]);
var inst_65061__$1 = cljs.core.seq(inst_65006);
var state_65107__$1 = (function (){var statearr_65161 = state_65107;
(statearr_65161[(7)] = inst_65061__$1);

return statearr_65161;
})();
if(inst_65061__$1){
var statearr_65164_66518 = state_65107__$1;
(statearr_65164_66518[(1)] = (14));

} else {
var statearr_65166_66519 = state_65107__$1;
(statearr_65166_66519[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (9))){
var inst_65089 = (state_65107[(2)]);
var inst_65090 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_65107__$1 = (function (){var statearr_65167 = state_65107;
(statearr_65167[(15)] = inst_65089);

return statearr_65167;
})();
if(cljs.core.truth_(inst_65090)){
var statearr_65168_66520 = state_65107__$1;
(statearr_65168_66520[(1)] = (21));

} else {
var statearr_65169_66522 = state_65107__$1;
(statearr_65169_66522[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (5))){
var inst_64996 = cljs.core.async.close_BANG_(out);
var state_65107__$1 = state_65107;
var statearr_65170_66524 = state_65107__$1;
(statearr_65170_66524[(2)] = inst_64996);

(statearr_65170_66524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (14))){
var inst_65061 = (state_65107[(7)]);
var inst_65063 = cljs.core.chunked_seq_QMARK_(inst_65061);
var state_65107__$1 = state_65107;
if(inst_65063){
var statearr_65172_66525 = state_65107__$1;
(statearr_65172_66525[(1)] = (17));

} else {
var statearr_65176_66526 = state_65107__$1;
(statearr_65176_66526[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (16))){
var inst_65085 = (state_65107[(2)]);
var state_65107__$1 = state_65107;
var statearr_65177_66528 = state_65107__$1;
(statearr_65177_66528[(2)] = inst_65085);

(statearr_65177_66528[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65108 === (10))){
var inst_65007 = (state_65107[(10)]);
var inst_65009 = (state_65107[(12)]);
var inst_65048 = cljs.core._nth(inst_65007,inst_65009);
var state_65107__$1 = state_65107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65107__$1,(13),out,inst_65048);
} else {
if((state_val_65108 === (18))){
var inst_65061 = (state_65107[(7)]);
var inst_65075 = cljs.core.first(inst_65061);
var state_65107__$1 = state_65107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65107__$1,(20),out,inst_65075);
} else {
if((state_val_65108 === (8))){
var inst_65008 = (state_65107[(11)]);
var inst_65009 = (state_65107[(12)]);
var inst_65011 = (inst_65009 < inst_65008);
var inst_65012 = inst_65011;
var state_65107__$1 = state_65107;
if(cljs.core.truth_(inst_65012)){
var statearr_65179_66532 = state_65107__$1;
(statearr_65179_66532[(1)] = (10));

} else {
var statearr_65180_66533 = state_65107__$1;
(statearr_65180_66533[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__62126__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__62126__auto____0 = (function (){
var statearr_65181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65181[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__62126__auto__);

(statearr_65181[(1)] = (1));

return statearr_65181;
});
var cljs$core$async$mapcat_STAR__$_state_machine__62126__auto____1 = (function (state_65107){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_65107);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e65183){var ex__62129__auto__ = e65183;
var statearr_65184_66539 = state_65107;
(statearr_65184_66539[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_65107[(4)]))){
var statearr_65186_66540 = state_65107;
(statearr_65186_66540[(1)] = cljs.core.first((state_65107[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66541 = state_65107;
state_65107 = G__66541;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__62126__auto__ = function(state_65107){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__62126__auto____1.call(this,state_65107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__62126__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__62126__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_65188 = f__62557__auto__();
(statearr_65188[(6)] = c__62556__auto__);

return statearr_65188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
}));

return c__62556__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__65191 = arguments.length;
switch (G__65191) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__65196 = arguments.length;
switch (G__65196) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__65199 = arguments.length;
switch (G__65199) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62556__auto___66553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_65225){
var state_val_65226 = (state_65225[(1)]);
if((state_val_65226 === (7))){
var inst_65220 = (state_65225[(2)]);
var state_65225__$1 = state_65225;
var statearr_65227_66559 = state_65225__$1;
(statearr_65227_66559[(2)] = inst_65220);

(statearr_65227_66559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65226 === (1))){
var inst_65202 = null;
var state_65225__$1 = (function (){var statearr_65228 = state_65225;
(statearr_65228[(7)] = inst_65202);

return statearr_65228;
})();
var statearr_65230_66560 = state_65225__$1;
(statearr_65230_66560[(2)] = null);

(statearr_65230_66560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65226 === (4))){
var inst_65205 = (state_65225[(8)]);
var inst_65205__$1 = (state_65225[(2)]);
var inst_65206 = (inst_65205__$1 == null);
var inst_65207 = cljs.core.not(inst_65206);
var state_65225__$1 = (function (){var statearr_65231 = state_65225;
(statearr_65231[(8)] = inst_65205__$1);

return statearr_65231;
})();
if(inst_65207){
var statearr_65238_66561 = state_65225__$1;
(statearr_65238_66561[(1)] = (5));

} else {
var statearr_65239_66562 = state_65225__$1;
(statearr_65239_66562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65226 === (6))){
var state_65225__$1 = state_65225;
var statearr_65240_66563 = state_65225__$1;
(statearr_65240_66563[(2)] = null);

(statearr_65240_66563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65226 === (3))){
var inst_65222 = (state_65225[(2)]);
var inst_65223 = cljs.core.async.close_BANG_(out);
var state_65225__$1 = (function (){var statearr_65241 = state_65225;
(statearr_65241[(9)] = inst_65222);

return statearr_65241;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65225__$1,inst_65223);
} else {
if((state_val_65226 === (2))){
var state_65225__$1 = state_65225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65225__$1,(4),ch);
} else {
if((state_val_65226 === (11))){
var inst_65205 = (state_65225[(8)]);
var inst_65214 = (state_65225[(2)]);
var inst_65202 = inst_65205;
var state_65225__$1 = (function (){var statearr_65242 = state_65225;
(statearr_65242[(10)] = inst_65214);

(statearr_65242[(7)] = inst_65202);

return statearr_65242;
})();
var statearr_65243_66567 = state_65225__$1;
(statearr_65243_66567[(2)] = null);

(statearr_65243_66567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65226 === (9))){
var inst_65205 = (state_65225[(8)]);
var state_65225__$1 = state_65225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65225__$1,(11),out,inst_65205);
} else {
if((state_val_65226 === (5))){
var inst_65205 = (state_65225[(8)]);
var inst_65202 = (state_65225[(7)]);
var inst_65209 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65205,inst_65202);
var state_65225__$1 = state_65225;
if(inst_65209){
var statearr_65245_66568 = state_65225__$1;
(statearr_65245_66568[(1)] = (8));

} else {
var statearr_65246_66569 = state_65225__$1;
(statearr_65246_66569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65226 === (10))){
var inst_65217 = (state_65225[(2)]);
var state_65225__$1 = state_65225;
var statearr_65247_66572 = state_65225__$1;
(statearr_65247_66572[(2)] = inst_65217);

(statearr_65247_66572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65226 === (8))){
var inst_65202 = (state_65225[(7)]);
var tmp65244 = inst_65202;
var inst_65202__$1 = tmp65244;
var state_65225__$1 = (function (){var statearr_65248 = state_65225;
(statearr_65248[(7)] = inst_65202__$1);

return statearr_65248;
})();
var statearr_65249_66574 = state_65225__$1;
(statearr_65249_66574[(2)] = null);

(statearr_65249_66574[(1)] = (2));


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
var cljs$core$async$state_machine__62126__auto__ = null;
var cljs$core$async$state_machine__62126__auto____0 = (function (){
var statearr_65250 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65250[(0)] = cljs$core$async$state_machine__62126__auto__);

(statearr_65250[(1)] = (1));

return statearr_65250;
});
var cljs$core$async$state_machine__62126__auto____1 = (function (state_65225){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_65225);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e65251){var ex__62129__auto__ = e65251;
var statearr_65252_66576 = state_65225;
(statearr_65252_66576[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_65225[(4)]))){
var statearr_65253_66577 = state_65225;
(statearr_65253_66577[(1)] = cljs.core.first((state_65225[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66578 = state_65225;
state_65225 = G__66578;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$state_machine__62126__auto__ = function(state_65225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62126__auto____1.call(this,state_65225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62126__auto____0;
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62126__auto____1;
return cljs$core$async$state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_65254 = f__62557__auto__();
(statearr_65254[(6)] = c__62556__auto___66553);

return statearr_65254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__65258 = arguments.length;
switch (G__65258) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62556__auto___66583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_65298){
var state_val_65300 = (state_65298[(1)]);
if((state_val_65300 === (7))){
var inst_65294 = (state_65298[(2)]);
var state_65298__$1 = state_65298;
var statearr_65301_66585 = state_65298__$1;
(statearr_65301_66585[(2)] = inst_65294);

(statearr_65301_66585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65300 === (1))){
var inst_65261 = (new Array(n));
var inst_65262 = inst_65261;
var inst_65263 = (0);
var state_65298__$1 = (function (){var statearr_65302 = state_65298;
(statearr_65302[(7)] = inst_65262);

(statearr_65302[(8)] = inst_65263);

return statearr_65302;
})();
var statearr_65304_66589 = state_65298__$1;
(statearr_65304_66589[(2)] = null);

(statearr_65304_66589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65300 === (4))){
var inst_65266 = (state_65298[(9)]);
var inst_65266__$1 = (state_65298[(2)]);
var inst_65267 = (inst_65266__$1 == null);
var inst_65268 = cljs.core.not(inst_65267);
var state_65298__$1 = (function (){var statearr_65305 = state_65298;
(statearr_65305[(9)] = inst_65266__$1);

return statearr_65305;
})();
if(inst_65268){
var statearr_65306_66592 = state_65298__$1;
(statearr_65306_66592[(1)] = (5));

} else {
var statearr_65307_66593 = state_65298__$1;
(statearr_65307_66593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65300 === (15))){
var inst_65288 = (state_65298[(2)]);
var state_65298__$1 = state_65298;
var statearr_65308_66595 = state_65298__$1;
(statearr_65308_66595[(2)] = inst_65288);

(statearr_65308_66595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65300 === (13))){
var state_65298__$1 = state_65298;
var statearr_65310_66596 = state_65298__$1;
(statearr_65310_66596[(2)] = null);

(statearr_65310_66596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65300 === (6))){
var inst_65263 = (state_65298[(8)]);
var inst_65284 = (inst_65263 > (0));
var state_65298__$1 = state_65298;
if(cljs.core.truth_(inst_65284)){
var statearr_65318_66598 = state_65298__$1;
(statearr_65318_66598[(1)] = (12));

} else {
var statearr_65319_66599 = state_65298__$1;
(statearr_65319_66599[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65300 === (3))){
var inst_65296 = (state_65298[(2)]);
var state_65298__$1 = state_65298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65298__$1,inst_65296);
} else {
if((state_val_65300 === (12))){
var inst_65262 = (state_65298[(7)]);
var inst_65286 = cljs.core.vec(inst_65262);
var state_65298__$1 = state_65298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65298__$1,(15),out,inst_65286);
} else {
if((state_val_65300 === (2))){
var state_65298__$1 = state_65298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65298__$1,(4),ch);
} else {
if((state_val_65300 === (11))){
var inst_65278 = (state_65298[(2)]);
var inst_65279 = (new Array(n));
var inst_65262 = inst_65279;
var inst_65263 = (0);
var state_65298__$1 = (function (){var statearr_65321 = state_65298;
(statearr_65321[(7)] = inst_65262);

(statearr_65321[(8)] = inst_65263);

(statearr_65321[(10)] = inst_65278);

return statearr_65321;
})();
var statearr_65322_66601 = state_65298__$1;
(statearr_65322_66601[(2)] = null);

(statearr_65322_66601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65300 === (9))){
var inst_65262 = (state_65298[(7)]);
var inst_65276 = cljs.core.vec(inst_65262);
var state_65298__$1 = state_65298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65298__$1,(11),out,inst_65276);
} else {
if((state_val_65300 === (5))){
var inst_65266 = (state_65298[(9)]);
var inst_65262 = (state_65298[(7)]);
var inst_65263 = (state_65298[(8)]);
var inst_65271 = (state_65298[(11)]);
var inst_65270 = (inst_65262[inst_65263] = inst_65266);
var inst_65271__$1 = (inst_65263 + (1));
var inst_65272 = (inst_65271__$1 < n);
var state_65298__$1 = (function (){var statearr_65323 = state_65298;
(statearr_65323[(12)] = inst_65270);

(statearr_65323[(11)] = inst_65271__$1);

return statearr_65323;
})();
if(cljs.core.truth_(inst_65272)){
var statearr_65324_66604 = state_65298__$1;
(statearr_65324_66604[(1)] = (8));

} else {
var statearr_65325_66605 = state_65298__$1;
(statearr_65325_66605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65300 === (14))){
var inst_65291 = (state_65298[(2)]);
var inst_65292 = cljs.core.async.close_BANG_(out);
var state_65298__$1 = (function (){var statearr_65327 = state_65298;
(statearr_65327[(13)] = inst_65291);

return statearr_65327;
})();
var statearr_65328_66607 = state_65298__$1;
(statearr_65328_66607[(2)] = inst_65292);

(statearr_65328_66607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65300 === (10))){
var inst_65282 = (state_65298[(2)]);
var state_65298__$1 = state_65298;
var statearr_65329_66608 = state_65298__$1;
(statearr_65329_66608[(2)] = inst_65282);

(statearr_65329_66608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65300 === (8))){
var inst_65262 = (state_65298[(7)]);
var inst_65271 = (state_65298[(11)]);
var tmp65326 = inst_65262;
var inst_65262__$1 = tmp65326;
var inst_65263 = inst_65271;
var state_65298__$1 = (function (){var statearr_65330 = state_65298;
(statearr_65330[(7)] = inst_65262__$1);

(statearr_65330[(8)] = inst_65263);

return statearr_65330;
})();
var statearr_65331_66611 = state_65298__$1;
(statearr_65331_66611[(2)] = null);

(statearr_65331_66611[(1)] = (2));


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
var cljs$core$async$state_machine__62126__auto__ = null;
var cljs$core$async$state_machine__62126__auto____0 = (function (){
var statearr_65332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65332[(0)] = cljs$core$async$state_machine__62126__auto__);

(statearr_65332[(1)] = (1));

return statearr_65332;
});
var cljs$core$async$state_machine__62126__auto____1 = (function (state_65298){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_65298);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e65334){var ex__62129__auto__ = e65334;
var statearr_65335_66613 = state_65298;
(statearr_65335_66613[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_65298[(4)]))){
var statearr_65337_66615 = state_65298;
(statearr_65337_66615[(1)] = cljs.core.first((state_65298[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66616 = state_65298;
state_65298 = G__66616;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$state_machine__62126__auto__ = function(state_65298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62126__auto____1.call(this,state_65298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62126__auto____0;
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62126__auto____1;
return cljs$core$async$state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_65339 = f__62557__auto__();
(statearr_65339[(6)] = c__62556__auto___66583);

return statearr_65339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__65347 = arguments.length;
switch (G__65347) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62556__auto___66619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_65392){
var state_val_65393 = (state_65392[(1)]);
if((state_val_65393 === (7))){
var inst_65388 = (state_65392[(2)]);
var state_65392__$1 = state_65392;
var statearr_65394_66620 = state_65392__$1;
(statearr_65394_66620[(2)] = inst_65388);

(statearr_65394_66620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (1))){
var inst_65348 = [];
var inst_65349 = inst_65348;
var inst_65350 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_65392__$1 = (function (){var statearr_65395 = state_65392;
(statearr_65395[(7)] = inst_65349);

(statearr_65395[(8)] = inst_65350);

return statearr_65395;
})();
var statearr_65396_66622 = state_65392__$1;
(statearr_65396_66622[(2)] = null);

(statearr_65396_66622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (4))){
var inst_65353 = (state_65392[(9)]);
var inst_65353__$1 = (state_65392[(2)]);
var inst_65354 = (inst_65353__$1 == null);
var inst_65355 = cljs.core.not(inst_65354);
var state_65392__$1 = (function (){var statearr_65397 = state_65392;
(statearr_65397[(9)] = inst_65353__$1);

return statearr_65397;
})();
if(inst_65355){
var statearr_65398_66625 = state_65392__$1;
(statearr_65398_66625[(1)] = (5));

} else {
var statearr_65399_66626 = state_65392__$1;
(statearr_65399_66626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (15))){
var inst_65349 = (state_65392[(7)]);
var inst_65380 = cljs.core.vec(inst_65349);
var state_65392__$1 = state_65392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65392__$1,(18),out,inst_65380);
} else {
if((state_val_65393 === (13))){
var inst_65375 = (state_65392[(2)]);
var state_65392__$1 = state_65392;
var statearr_65400_66627 = state_65392__$1;
(statearr_65400_66627[(2)] = inst_65375);

(statearr_65400_66627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (6))){
var inst_65349 = (state_65392[(7)]);
var inst_65377 = inst_65349.length;
var inst_65378 = (inst_65377 > (0));
var state_65392__$1 = state_65392;
if(cljs.core.truth_(inst_65378)){
var statearr_65401_66628 = state_65392__$1;
(statearr_65401_66628[(1)] = (15));

} else {
var statearr_65403_66629 = state_65392__$1;
(statearr_65403_66629[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (17))){
var inst_65385 = (state_65392[(2)]);
var inst_65386 = cljs.core.async.close_BANG_(out);
var state_65392__$1 = (function (){var statearr_65405 = state_65392;
(statearr_65405[(10)] = inst_65385);

return statearr_65405;
})();
var statearr_65406_66631 = state_65392__$1;
(statearr_65406_66631[(2)] = inst_65386);

(statearr_65406_66631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (3))){
var inst_65390 = (state_65392[(2)]);
var state_65392__$1 = state_65392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65392__$1,inst_65390);
} else {
if((state_val_65393 === (12))){
var inst_65349 = (state_65392[(7)]);
var inst_65368 = cljs.core.vec(inst_65349);
var state_65392__$1 = state_65392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65392__$1,(14),out,inst_65368);
} else {
if((state_val_65393 === (2))){
var state_65392__$1 = state_65392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65392__$1,(4),ch);
} else {
if((state_val_65393 === (11))){
var inst_65349 = (state_65392[(7)]);
var inst_65353 = (state_65392[(9)]);
var inst_65357 = (state_65392[(11)]);
var inst_65365 = inst_65349.push(inst_65353);
var tmp65407 = inst_65349;
var inst_65349__$1 = tmp65407;
var inst_65350 = inst_65357;
var state_65392__$1 = (function (){var statearr_65408 = state_65392;
(statearr_65408[(12)] = inst_65365);

(statearr_65408[(7)] = inst_65349__$1);

(statearr_65408[(8)] = inst_65350);

return statearr_65408;
})();
var statearr_65409_66640 = state_65392__$1;
(statearr_65409_66640[(2)] = null);

(statearr_65409_66640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (9))){
var inst_65350 = (state_65392[(8)]);
var inst_65361 = cljs.core.keyword_identical_QMARK_(inst_65350,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_65392__$1 = state_65392;
var statearr_65410_66642 = state_65392__$1;
(statearr_65410_66642[(2)] = inst_65361);

(statearr_65410_66642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (5))){
var inst_65358 = (state_65392[(13)]);
var inst_65353 = (state_65392[(9)]);
var inst_65350 = (state_65392[(8)]);
var inst_65357 = (state_65392[(11)]);
var inst_65357__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_65353) : f.call(null,inst_65353));
var inst_65358__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65357__$1,inst_65350);
var state_65392__$1 = (function (){var statearr_65411 = state_65392;
(statearr_65411[(13)] = inst_65358__$1);

(statearr_65411[(11)] = inst_65357__$1);

return statearr_65411;
})();
if(inst_65358__$1){
var statearr_65412_66643 = state_65392__$1;
(statearr_65412_66643[(1)] = (8));

} else {
var statearr_65414_66644 = state_65392__$1;
(statearr_65414_66644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (14))){
var inst_65353 = (state_65392[(9)]);
var inst_65357 = (state_65392[(11)]);
var inst_65370 = (state_65392[(2)]);
var inst_65371 = [];
var inst_65372 = inst_65371.push(inst_65353);
var inst_65349 = inst_65371;
var inst_65350 = inst_65357;
var state_65392__$1 = (function (){var statearr_65416 = state_65392;
(statearr_65416[(14)] = inst_65370);

(statearr_65416[(7)] = inst_65349);

(statearr_65416[(15)] = inst_65372);

(statearr_65416[(8)] = inst_65350);

return statearr_65416;
})();
var statearr_65417_66647 = state_65392__$1;
(statearr_65417_66647[(2)] = null);

(statearr_65417_66647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (16))){
var state_65392__$1 = state_65392;
var statearr_65419_66648 = state_65392__$1;
(statearr_65419_66648[(2)] = null);

(statearr_65419_66648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (10))){
var inst_65363 = (state_65392[(2)]);
var state_65392__$1 = state_65392;
if(cljs.core.truth_(inst_65363)){
var statearr_65420_66651 = state_65392__$1;
(statearr_65420_66651[(1)] = (11));

} else {
var statearr_65421_66652 = state_65392__$1;
(statearr_65421_66652[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (18))){
var inst_65382 = (state_65392[(2)]);
var state_65392__$1 = state_65392;
var statearr_65423_66656 = state_65392__$1;
(statearr_65423_66656[(2)] = inst_65382);

(statearr_65423_66656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (8))){
var inst_65358 = (state_65392[(13)]);
var state_65392__$1 = state_65392;
var statearr_65424_66660 = state_65392__$1;
(statearr_65424_66660[(2)] = inst_65358);

(statearr_65424_66660[(1)] = (10));


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
var cljs$core$async$state_machine__62126__auto__ = null;
var cljs$core$async$state_machine__62126__auto____0 = (function (){
var statearr_65426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65426[(0)] = cljs$core$async$state_machine__62126__auto__);

(statearr_65426[(1)] = (1));

return statearr_65426;
});
var cljs$core$async$state_machine__62126__auto____1 = (function (state_65392){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_65392);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e65427){var ex__62129__auto__ = e65427;
var statearr_65428_66663 = state_65392;
(statearr_65428_66663[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_65392[(4)]))){
var statearr_65429_66664 = state_65392;
(statearr_65429_66664[(1)] = cljs.core.first((state_65392[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66669 = state_65392;
state_65392 = G__66669;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
cljs$core$async$state_machine__62126__auto__ = function(state_65392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62126__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62126__auto____1.call(this,state_65392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62126__auto____0;
cljs$core$async$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62126__auto____1;
return cljs$core$async$state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_65431 = f__62557__auto__();
(statearr_65431[(6)] = c__62556__auto___66619);

return statearr_65431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
