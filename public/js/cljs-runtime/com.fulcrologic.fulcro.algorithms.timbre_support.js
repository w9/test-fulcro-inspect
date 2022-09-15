goog.provide('com.fulcrologic.fulcro.algorithms.timbre_support');
/**
 * Returns a js/console appender for ClojureScript. This appender uses the normal output-fn to generate the main
 *   message, but it also does raw output of the original logging args so that devtools can format data structures.
 * 
 *   Furthermore, if it detects an ExceptionInfo it will print the `ex-message` *after* so that you can see the real
 *   message of the exception last in the console.  This is particularly handy when using specs and expound with
 *   spec instrumentation.
 * 
 *   For accurate line numbers in Chrome, add these Blackbox[1] patterns:
 *  `/taoensso/timbre/appenders/core\.js$`
 *  `/taoensso/timbre\.js$`
 *  `/cljs/core\.js$`
 * 
 *   [1] Ref. https://goo.gl/ZejSvR
 */
com.fulcrologic.fulcro.algorithms.timbre_support.console_appender = (function com$fulcrologic$fulcro$algorithms$timbre_support$console_appender(var_args){
var args__5775__auto__ = [];
var len__5769__auto___78533 = arguments.length;
var i__5770__auto___78534 = (0);
while(true){
if((i__5770__auto___78534 < len__5769__auto___78533)){
args__5775__auto__.push((arguments[i__5770__auto___78534]));

var G__78535 = (i__5770__auto___78534 + (1));
i__5770__auto___78534 = G__78535;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.timbre_support.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.algorithms.timbre_support.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__78505){
var vec__78506 = p__78505;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78506,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),(((typeof console !== 'undefined'))?(function (){var level__GT_logger = (function (level){
var or__5045__auto__ = (function (){var G__78509 = level;
var G__78509__$1 = (((G__78509 instanceof cljs.core.Keyword))?G__78509.fqn:null);
switch (G__78509__$1) {
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78509__$1)].join('')));

}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return console.log;
}
});
return (function (p__78512){
var map__78513 = p__78512;
var map__78513__$1 = cljs.core.__destructure_map(map__78513);
var data = map__78513__$1;
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78513__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var vargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78513__$1,new cljs.core.Keyword(null,"vargs","vargs",-966597273));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78513__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var output_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78513__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539));
var temp__5804__auto__ = level__GT_logger(level);
if(cljs.core.truth_(temp__5804__auto__)){
var logger = temp__5804__auto__;
var output = (cljs.core.truth_(output_fn)?(function (){var G__78516 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"?err","?err",549653299),null], 0));
return (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(G__78516) : output_fn.call(null,G__78516));
})():null);
var args = (function (){var temp__5802__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5802__auto__)){
var err = temp__5802__auto__;
return cljs.core.cons(output,cljs.core.cons(err,vargs));
} else {
return cljs.core.cons(output,vargs);
}
})();
logger.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));

if((_QMARK_err instanceof cljs.core.ExceptionInfo)){
return console.log(cljs.core.ex_message(_QMARK_err));
} else {
return null;
}
} else {
return null;
}
});
})():(function (data){
return null;
}))], null);
}));

(com.fulcrologic.fulcro.algorithms.timbre_support.console_appender.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.timbre_support.console_appender.cljs$lang$applyTo = (function (seq78504){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq78504));
}));

/**
 * Mostly taken from timbre, but just formats message prefix as output (e.g. only location/line/level). Use with the
 * console appender from this namespace to get better logging output in cljs.
 */
com.fulcrologic.fulcro.algorithms.timbre_support.prefix_output_fn = (function com$fulcrologic$fulcro$algorithms$timbre_support$prefix_output_fn(var_args){
var G__78522 = arguments.length;
switch (G__78522) {
case 1:
return com.fulcrologic.fulcro.algorithms.timbre_support.prefix_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.timbre_support.prefix_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.timbre_support.prefix_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
return com.fulcrologic.fulcro.algorithms.timbre_support.prefix_output_fn.cljs$core$IFn$_invoke$arity$2(null,data);
}));

(com.fulcrologic.fulcro.algorithms.timbre_support.prefix_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (opts,data){
var map__78523 = data;
var map__78523__$1 = cljs.core.__destructure_map(map__78523);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78523__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78523__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78523__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78523__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ","[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return "?";
}
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = _QMARK_line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "?";
}
})()),"] - "].join('');
}));

(com.fulcrologic.fulcro.algorithms.timbre_support.prefix_output_fn.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.timbre_support.js.map
