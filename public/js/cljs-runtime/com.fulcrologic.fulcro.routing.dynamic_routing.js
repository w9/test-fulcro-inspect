goog.provide('com.fulcrologic.fulcro.routing.dynamic_routing');
goog.scope(function(){
  com.fulcrologic.fulcro.routing.dynamic_routing.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * INTERNAL USE ONLY. Not guaranteed to be available at runtime in production builds. This is used to aid in giving
 * development-time warnings/errors.
 * 
 * Class of the routing target component, available in the notifications fns
 * (:will-enter, :route-cancelled, :will-leave)
 */
com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = null;
/**
 * Returns a vector that describes the sub-path that a given route target represents. String elements represent
 *   explicit path elements, and keywords represent variable values (which are always pulled as strings).
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_segment = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_segment(class$){
var result = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
if(cljs.core.truth_((function (){var and__5043__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5043__auto__)){
return (!((((result == null)) || (cljs.core.vector_QMARK_(result)))));
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route segment should be a vector!"], null);
}),null)),null,1099859257,null);
} else {
}

return result;
});
/**
 * Returns the function that should be called if this target was in a deferred state and a different routing choice was made. Is given the same route parameters that were sent to `will-enter`.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_route_cancelled = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_route_cancelled(class$){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-cancelled","route-cancelled",-1402397214)], 0));
});
/**
 * Universal CLJC version of route-cancelled.  Don't use the protocol method in CLJ.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_cancelled(class$,route_params){
var temp__5804__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_route_cancelled(class$);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var _STAR_target_class_STAR__orig_val__44976 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
var _STAR_target_class_STAR__temp_val__44977 = class$;
(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__temp_val__44977);

try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(route_params) : f.call(null,route_params));
}finally {(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__orig_val__44976);
}} else {
return null;
}
});
/**
 * Returns the function that is called before a route target is activated (if the route segment of interest has changed and the
 *   target of the result is this target).  MUST return (r/route-immediate ident) or (r/route-deferred ident) to indicate
 *   what ident should be used in app state to connect the router's join.  If deferred, the router must cause a call to
 *   the r/target-ready mutation (or use the target-ready* mutation helper) with a {:target ident} parameter to indicate
 *   that the route target is loaded and ready for display.
 * 
 *   `params` will be a map from any keywords found in `route-segment` to the string value of that path element.
 * 
 *   WARNING: This method MUST be side-effect free.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_will_enter = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_will_enter(class$){
var temp__5802__auto__ = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-enter","will-enter",-692415624)], 0));
if(cljs.core.truth_(temp__5802__auto__)){
var will_enter = temp__5802__auto__;
return will_enter;
} else {
var ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.truth_(ident)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,73,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component must have an ident for routing to work properly:",com.fulcrologic.fulcro.raw.components.component_name(class$),"See https://book.fulcrologic.com/#err-dr-comp-needs-ident"], null);
}),null)),null,1541705429,null);
}

return (function (_,___$1){
return (com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.cljs$core$IFn$_invoke$arity$1(ident) : com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.call(null,ident));
});
}
});
/**
 * Universal CLJC version of will-enter.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.will_enter = (function com$fulcrologic$fulcro$routing$dynamic_routing$will_enter(class$,app__$1,params){
var temp__5804__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_will_enter(class$);
if(cljs.core.truth_(temp__5804__auto__)){
var will_enter = temp__5804__auto__;
var _STAR_target_class_STAR__orig_val__44978 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
var _STAR_target_class_STAR__temp_val__44979 = class$;
(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__temp_val__44979);

try{return (will_enter.cljs$core$IFn$_invoke$arity$2 ? will_enter.cljs$core$IFn$_invoke$arity$2(app__$1,params) : will_enter.call(null,app__$1,params));
}finally {(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__orig_val__44978);
}} else {
return null;
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_target_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_target_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0)));
});
/**
 * Returns the function of a route target to be called with
 *   the current component and props. If it returns `true` then the routing operation will continue.  If it returns `false`
 *   then whatever new route was requested will be completely abandoned. If this component has a `allow-route-change?`
 *   then the return value of will-leave will be ignored.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_will_leave = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_will_leave(this$){
var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517)], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.constantly(true);
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.will_leave = (function com$fulcrologic$fulcro$routing$dynamic_routing$will_leave(c,props){
var temp__5804__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_will_leave(c);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var _STAR_target_class_STAR__orig_val__44980 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
var _STAR_target_class_STAR__temp_val__44981 = com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"type","type",1174270348));
(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__temp_val__44981);

try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(c,props) : f.call(null,c,props));
}finally {(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__orig_val__44980);
}} else {
return null;
}
});
/**
 * Returns the function of a route target to be called with the current component and props.
 * If it returns `true` then the routing operation can continue.  If it returns `false`
 * then whatever new route was requested will be completely abandoned. This handler MUST NOT side-effect, and
 * may be called multiple times on a single route request.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_allow_route_change_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_allow_route_change_QMARK_(this$){
var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"allow-route-change?","allow-route-change?",173143289)], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var temp__5804__auto__ = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517)], 0));
if(cljs.core.truth_(temp__5804__auto__)){
var will_leave = temp__5804__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.routing.dynamic-routing",null,107,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DEPRECATED USE OF `:will-leave` to check for allowable routing. You should add :allow-route-change? to: ",com.fulcrologic.fulcro.raw.components.component_name(this$),"See https://book.fulcrologic.com/#warn-routing-will-leave-deprecated"], null);
}),null)),null,-665880924,null);

return (function (){
var G__44982 = this$;
var G__44983 = com.fulcrologic.fulcro.raw.components.props(this$);
return (will_leave.cljs$core$IFn$_invoke$arity$2 ? will_leave.cljs$core$IFn$_invoke$arity$2(G__44982,G__44983) : will_leave.call(null,G__44982,G__44983));
});
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.constantly(true);
}
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.allow_route_change_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$allow_route_change_QMARK_(c){
try{var temp__5804__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_allow_route_change_QMARK_(c);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var _STAR_target_class_STAR__orig_val__44985 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
var _STAR_target_class_STAR__temp_val__44986 = com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"type","type",1174270348));
(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__temp_val__44986);

try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c));
}finally {(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__orig_val__44985);
}} else {
return null;
}
}catch (e44984){var e = e44984;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,117,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot evaluate route change. Assuming ok. Exception message: ",cljs.core.ex_message(e),"See https://book.fulcrologic.com/#err-dr-cant-eval-route-chng"], null);
}),null)),null,-1783475653,null);

return true;
}});
com.fulcrologic.fulcro.routing.dynamic_routing.route_lifecycle_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_lifecycle_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517)], 0)));
});
/**
 * Returns a set of classes to which this router routes.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_targets = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_targets(router){
return cljs.core.set(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(router,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router-targets","router-targets",1582229763)], 0)));
});
com.fulcrologic.fulcro.routing.dynamic_routing.ident_matches_expectation_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$ident_matches_expectation_QMARK_(p__44987,p__44988){
var vec__44989 = p__44987;
var expected_table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44989,(0),null);
var maybe_expected_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44989,(1),null);
var vec__44992 = p__44988;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44992,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44992,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected_table,table)) && ((((maybe_expected_id == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(maybe_expected_id,id)))));
});
com.fulcrologic.fulcro.routing.dynamic_routing.check_ident_matches_expectation_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$check_ident_matches_expectation_QMARK_(fn_name,ident){
if(cljs.core.truth_((function (){var and__5043__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
if(cljs.core.truth_(and__5043__auto____$1)){
return (!(com.fulcrologic.fulcro.routing.dynamic_routing.ident_matches_expectation_QMARK_(com.fulcrologic.fulcro.raw.components.ident(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_,cljs.core.PersistentArrayMap.EMPTY),ident)));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,137,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_name," was invoked with the ident ",ident," which doesn't seem to match the ident of the wrapping component (class ",com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_," , ident [",cljs.core.first(com.fulcrologic.fulcro.raw.components.ident(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_,cljs.core.PersistentArrayMap.EMPTY))," ...]) See https://book.fulcrologic.com/#err-dr-ident-mismatch"], null);
}),null)),null,1234867768,null);
} else {
return null;
}
});
/**
 * Used as a return value from `will-enter`. Instructs the routing system that you would like this target to be
 * routed to as soon as possible. UI switching defaults to depth-first to prevent flicker.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_immediate(ident){
com.fulcrologic.fulcro.routing.dynamic_routing.check_ident_matches_expectation_QMARK_("route-immediate",ident);

return cljs.core.with_meta(ident,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"immediate","immediate",-1684692069),true], null));
});
/**
 * Used as a return value from `will-enter`. Instructs the router to run the `completion-fn`. The completion function
 * *must* use the mutation `target-ready` or function `target-ready!` to indicate when it is ready for the target to
 * appear on-screen.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_deferred = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_deferred(ident,completion_fn){
com.fulcrologic.fulcro.routing.dynamic_routing.check_ident_matches_expectation_QMARK_("route-deferred",ident);

return cljs.core.with_meta(ident,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"immediate","immediate",-1684692069),false,new cljs.core.Keyword(null,"fn","fn",-1175266204),completion_fn], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.immediate_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$immediate_QMARK_(ident){
var G__44995 = ident;
var G__44995__$1 = (((G__44995 == null))?null:cljs.core.meta(G__44995));
if((G__44995__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"immediate","immediate",-1684692069).cljs$core$IFn$_invoke$arity$1(G__44995__$1);
}
});
/**
 * Used as a return value from `will-enter`. Instructs the routing system to execute the `txn` in *routing path order*,
 * and optionally couples these operations into a single transaction. This can be used in cases where you need the
 * side-effects (potentially full-stack) to complete for a parent target before those of a nested target.
 * 
 * The `options` can contain:
 * 
 * * `:optimistic?`  (default false) - When true, don't wait for this transaction to (full-stack) complete before starting
 *   child target effects.
 * * `:route-immediate?` (default false) - When true, apply the UI routing immediately instead of waiting for the transaction
 *   to finish. Of course the UI of the target should then be willing to tolerate the lack of any full-stack result.
 * * `:show-early?` - (default false) - When true each transaction that completes will cause that target to appear. When
 *  false the target won't appear until after all children have completed their non-optimistic path-based transactions.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_with_path_ordered_transaction(var_args){
var G__44997 = arguments.length;
switch (G__44997) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$2 = (function (ident,txn){
return com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$3(ident,txn,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$3 = (function (ident,txn,p__44998){
var map__44999 = p__44998;
var map__44999__$1 = cljs.core.__destructure_map(map__44999);
var options = map__44999__$1;
var optimistic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44999__$1,new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869));
var route_immediate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44999__$1,new cljs.core.Keyword(null,"route-immediate?","route-immediate?",-681888697));
var optimistic_QMARK___$1 = (((!((optimistic_QMARK_ == null))))?optimistic_QMARK_:false);
var route_immediate_QMARK___$1 = (((!((route_immediate_QMARK_ == null))))?route_immediate_QMARK_:false);
return cljs.core.with_meta(ident,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path-ordered?","path-ordered?",1510080295),true,new cljs.core.Keyword(null,"immediate","immediate",-1684692069),route_immediate_QMARK___$1,new cljs.core.Keyword(null,"txn","txn",-469204789),txn,new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),optimistic_QMARK___$1], null));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$apply_route_STAR_(state_map,p__45000){
var map__45001 = p__45000;
var map__45001__$1 = cljs.core.__destructure_map(map__45001);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45001__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45001__$1,new cljs.core.Keyword(null,"target","target",253001721));
var router_class = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(router));
var router_id = cljs.core.second(router);
var target_class = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(target));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,186,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Applying route ident",target,"to router",router_id], null);
}),null)),null,-2060435515,null);

if((router_class == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,188,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["apply-route* was called without a proper :router argument. See https://book.fulcrologic.com/#err-dr-apply-route-lacks-router"], null);
}),null)),null,12101355,null);
} else {
}

if((target_class == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,190,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["apply-route* for router ",router_class,"was given a target that did not have a component. ","Did you remember to call route-deferred or route-immediate? See https://book.fulcrologic.com/#err-dr-apply-route-no-component"], null);
}),null)),null,-1486178015,null);
} else {
}

return com.fulcrologic.fulcro.raw.components.set_query_STAR_(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)),target),router,cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)),router_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),router_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(target_class,state_map)], null)], null)], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target = (function com$fulcrologic$fulcro$routing$dynamic_routing$router_for_pending_target(state_map,target){
var routers = (function (){var G__45002 = state_map;
var G__45002__$1 = (((G__45002 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(G__45002));
if((G__45002__$1 == null)){
return null;
} else {
return cljs.core.vals(G__45002__$1);
}
})();
var router_id = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,r){
if(cljs.core.truth_((function (){var and__5043__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5043__auto__)){
return (new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(r) == null);
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,201,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a router in state that is missing an ID. This indicates that","you forgot to compose it into your initial state! It will fail to operate properly. See https://book.fulcrologic.com/#err-dr-router-missing-id"], null);
}),null)),null,-64366680,null);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,(function (){var G__45003 = r;
var G__45003__$1 = (((G__45003 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373).cljs$core$IFn$_invoke$arity$1(G__45003));
if((G__45003__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__45003__$1);
}
})())){
return cljs.core.reduced(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(r));
} else {
return null;
}
}),null,routers);
return router_id;
});
/**
 * Mutation: Indicate that a target is ready.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.target_ready = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","target-ready","com.fulcrologic.fulcro.routing.dynamic-routing/target-ready",-111862826,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","target-ready","com.fulcrologic.fulcro.routing.dynamic-routing/target-ready",-111862826,null),(function (fulcro_mutation_env_symbol){
var map__45004 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__45004__$1 = cljs.core.__destructure_map(map__45004);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45004__$1,new cljs.core.Keyword(null,"target","target",253001721));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),(function com$fulcrologic$fulcro$routing$dynamic_routing$refresh(_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null);
}),new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$routing$dynamic_routing$action(p__45005){
var map__45006 = p__45005;
var map__45006__$1 = cljs.core.__destructure_map(map__45006);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45006__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var _STAR_after_render_STAR__orig_val__45007_45238 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__45008_45239 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__45008_45239);

try{var state_map_45240 = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app__$1);
var router_id_45241 = com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map_45240,target);
if(cljs.core.truth_(router_id_45241)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,217,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Router",router_id_45241,"notified that pending route is ready."], null);
}),null)),null,-1959535274,null);

if(cljs.core.truth_((function (){var and__5043__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5043__auto__)){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map_45240,target) == null);
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,219,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","target-ready","com.fulcrologic.fulcro.routing.dynamic-routing/target-ready",-111862826,null),"should route to",target,"but there is no data in the DB for the ident.","Perhaps you supplied a wrong ident? See https://book.fulcrologic.com/#err-dr-target-ready-missing-data"], null);
}),null)),null,1850989993,null);
} else {
}

com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,router_id_45241,new cljs.core.Keyword(null,"ready!","ready!",-1695278696));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,222,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dr/target-ready! was called but there was no router waiting for the target listed: ",target,"This could mean you sent one ident, and indicated ready on another. See https://book.fulcrologic.com/#err-dr-target-ready-no-router-waiting"], null);
}),null)),null,-1347528757,null);
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__45007_45238);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__45009 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__45010 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__45010);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__45009);
}})], null);
}));
/**
 * Indicate a target is ready.  Safe to use from within mutations.
 * 
 *   target - The ident that was originally listed as a deferred target.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.target_ready_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$target_ready_BANG_(component_or_app,target){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component_or_app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45011 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__45011) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__45011));
})()], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$router_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router-targets","router-targets",1582229763)], 0)));
});
/**
 * Returns the elements of actual-path that match the route-segment definition.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.matching_prefix = (function com$fulcrologic$fulcro$routing$dynamic_routing$matching_prefix(route_segment,actual_path){
var matching_segment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__45012){
var vec__45013 = p__45012;
var expected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45013,(0),null);
var actual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45013,(1),null);
if(((typeof expected === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected,actual)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,actual);
} else {
if((((expected instanceof cljs.core.Keyword)) && (cljs.core.seq(cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual));
} else {
return result;

}
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),route_segment,actual_path));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matching_segment),cljs.core.count(route_segment))){
return matching_segment;
} else {
return null;
}
});
/**
 * Get the class of the component that is currently being routed to.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.current_route_class = (function com$fulcrologic$fulcro$routing$dynamic_routing$current_route_class(this$){
var state_map = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.any__GT_app(this$));
var class$ = (function (){var G__45017 = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(this$,state_map);
var G__45017__$1 = (((G__45017 == null))?null:edn_query_language.core.query__GT_ast(G__45017));
var G__45017__$2 = (((G__45017__$1 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__45017__$1));
var G__45017__$3 = (((G__45017__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45016_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__45016_SHARP_));
}),G__45017__$2));
var G__45017__$4 = (((G__45017__$3 == null))?null:cljs.core.first(G__45017__$3));
if((G__45017__$4 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__45017__$4);
}
})();
var class$__$1 = (cljs.core.truth_(goog.DEBUG)?com.fulcrologic.fulcro.raw.components.registry_key__GT_class(com.fulcrologic.fulcro.raw.components.class__GT_registry_key(class$)):class$);
return class$__$1;
});
/**
 * Given a router class and a path segment, returns the class of *that router's* target that accepts the given URI path,
 *   which is a vector of (string) URI components.
 * 
 *   Returns nil if there is no target that accepts the path, or a map containing:
 * 
 *   {:target class
 * :matching-prefix prefix}
 * 
 *   where `class` is the component class that accepts the path (the target, NOT the router), and `matching-prefix` is the
 *   portion of the path that is accepted by that class.
 * 
 *   NOTE: If more than one target matches, then the target with the longest match will be returned. A warning will be
 *   printed if more than one match of equal length is found.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_target = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_target(router_class,path){
if(cljs.core.truth_((function (){var and__5043__auto__ = router_class;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(router_class);
} else {
return and__5043__auto__;
}
})())){
var targets = com.fulcrologic.fulcro.routing.dynamic_routing.get_targets(router_class);
var matches = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"length","length",588987862),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,target_class){
var prefix = (function (){var and__5043__auto__ = target_class;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target_QMARK_(target_class);
if(and__5043__auto____$1){
var G__45019 = target_class;
var G__45019__$1 = (((G__45019 == null))?null:com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(G__45019));
if((G__45019__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.routing.dynamic_routing.matching_prefix(G__45019__$1,path);
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = prefix;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.seq(prefix);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"length","length",588987862),cljs.core.count(prefix),new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173),prefix,new cljs.core.Keyword(null,"target","target",253001721),target_class], null));
} else {
return result;
}
}),cljs.core.PersistentVector.EMPTY,targets)));
var max_length = (function (){var G__45020 = matches;
var G__45020__$1 = (((G__45020 == null))?null:cljs.core.first(G__45020));
if((G__45020__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(G__45020__$1);
}
})();
var match = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45018_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_length,new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(p1__45018_SHARP_));
}),matches);
if(cljs.core.truth_(cljs.core.second(match))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.routing.dynamic-routing",null,296,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["More than one route target matches",path,"See https://book.fulcrologic.com/#warn-routing-multiple-target-matches"], null);
}),null)),null,-729953210,null);
} else {
}

return cljs.core.first(match);
} else {
return null;
}
});
/**
 * Returns true if the given component is a router that manages a route target that will accept the given path.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$accepts_route_QMARK_(component,path){
return cljs.core.boolean$(com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component,path));
});
/**
 * Returns the AST node for a query that represents the router that has a target that can accept the given path. This is a breadth-first
 *   search.
 * 
 *   ast - A query AST node
 *   path - A vector of the current URI segments.
 * 
 *   Returns an AST node or nil if none is found.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route = (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_route(p__45023,path){
var map__45024 = p__45023;
var map__45024__$1 = cljs.core.__destructure_map(map__45024);
var ast_node = map__45024__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45024__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45024__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__5045__auto__ = (function (){var and__5043__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_(component,path);
if(and__5043__auto__){
return ast_node;
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.some((function (p1__45021_SHARP_){
var and__5043__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(p1__45021_SHARP_),path);
if(and__5043__auto__){
return p1__45021_SHARP_;
} else {
return and__5043__auto__;
}
}),children);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.some((function (p1__45022_SHARP_){
return (com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$2(p1__45022_SHARP_,path) : com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.call(null,p1__45022_SHARP_,path));
}),children);
}
}
});
/**
 * Returns the AST node for a query that represents the closest "live" (on-screen) router
 * 
 *   ast - A query AST node
 * 
 *   Returns an AST node or nil if none is found.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router = (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_live_router(app__$1,p__45027){
var map__45028 = p__45027;
var map__45028__$1 = cljs.core.__destructure_map(map__45028);
var ast_node = map__45028__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45028__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45028__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var live_router_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_live_router_$_live_router_QMARK_(c){
return ((com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(c)) && (cljs.core.boolean$(com.fulcrologic.fulcro.components.class__GT_any(app__$1,c))));
});
var or__5045__auto__ = (function (){var and__5043__auto__ = live_router_QMARK_(component);
if(cljs.core.truth_(and__5043__auto__)){
return ast_node;
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.some((function (p1__45025_SHARP_){
var and__5043__auto__ = live_router_QMARK_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(p1__45025_SHARP_));
if(cljs.core.truth_(and__5043__auto__)){
return p1__45025_SHARP_;
} else {
return and__5043__auto__;
}
}),children);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.some((function (p1__45026_SHARP_){
return (com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.cljs$core$IFn$_invoke$arity$2(app__$1,p1__45026_SHARP_) : com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.call(null,app__$1,p1__45026_SHARP_));
}),children);
}
}
});
/**
 * Mutation: Indicate that a given route is ready and should show the result.
 * 
 *   router - The ident of the router, with metadata :component that is the class of the router.
 *   target - The ident of the target route, with metadata :component that is the class of the target.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.apply_route = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","apply-route","com.fulcrologic.fulcro.routing.dynamic-routing/apply-route",-2135500172,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","apply-route","com.fulcrologic.fulcro.routing.dynamic-routing/apply-route",-2135500172,null),(function (fulcro_mutation_env_symbol){
var map__45029 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__45029__$1 = cljs.core.__destructure_map(map__45029);
var params = map__45029__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45029__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45029__$1,new cljs.core.Keyword(null,"target","target",253001721));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$routing$dynamic_routing$action(p__45030){
var map__45031 = p__45030;
var map__45031__$1 = cljs.core.__destructure_map(map__45031);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45031__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45031__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__45032_45242 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__45033_45243 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__45033_45243);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_,params);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__45032_45242);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__45034 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__45035 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__45035);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__45034);
}})], null);
}));
com.fulcrologic.fulcro.routing.dynamic_routing.mark_route_pending_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$mark_route_pending_STAR_(state_map,p__45036){
var map__45037 = p__45036;
var map__45037__$1 = cljs.core.__destructure_map(map__45037);
var params = map__45037__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45037__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45037__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.assoc_in(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)),params);
});
var target_ready_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$target_ready_STAR_(state_map,target){
var router_id = com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map,target);
if(cljs.core.truth_(router_id)){
return com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_(state_map,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),router_id,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)], null)));
} else {
return state_map;
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$ready_handler(env){
var new_env = com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268))),new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268),cljs.core.PersistentVector.EMPTY),target_ready_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"target","target",253001721))], 0));
var app__$1 = new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(app__$1)){
com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0 ? com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0() : com.fulcrologic.fulcro.algorithms.indexing.reindex.call(null))], null));
} else {
}

return new_env;
});
com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$fail_handler(env){
return env;
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_handler(p__45038){
var map__45039 = p__45038;
var map__45039__$1 = cljs.core.__destructure_map(map__45039);
var env = map__45039__$1;
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45039__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45039__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__45040 = event_data;
var map__45040__$1 = cljs.core.__destructure_map(map__45040);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45040__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45040__$1,new cljs.core.Keyword(null,"target","target",253001721));
var error_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45040__$1,new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),(5000));
var deferred_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45040__$1,new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530),(20));
var path_segment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45040__$1,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997));
var immediate_QMARK_ = com.fulcrologic.fulcro.routing.dynamic_routing.immediate_QMARK_(target);
return com.fulcrologic.fulcro.ui_state_machines.store((cljs.core.truth_(immediate_QMARK_)?(function (){var new_env = com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),path_segment),com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_data], 0)),new cljs.core.Keyword(null,"routed","routed",-707282794));
if(cljs.core.truth_(app__$1)){
com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0 ? com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0() : com.fulcrologic.fulcro.algorithms.indexing.reindex.call(null))], null));
} else {
}

return new_env;
})():com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268),path_segment),com.fulcrologic.fulcro.routing.dynamic_routing.mark_route_pending_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_data], 0)),new cljs.core.Keyword(null,"error-timer","error-timer",347765002),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),cljs.core.PersistentArrayMap.EMPTY,error_timeout,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),null,new cljs.core.Keyword(null,"ready!","ready!",-1695278696),null], null), null)),new cljs.core.Keyword(null,"delay-timer","delay-timer",-920427787),new cljs.core.Keyword(null,"waiting!","waiting!",373081239),cljs.core.PersistentArrayMap.EMPTY,deferred_timeout,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),null,new cljs.core.Keyword(null,"ready!","ready!",-1695278696),null], null), null)),new cljs.core.Keyword(null,"deferred","deferred",-1976960688))),new cljs.core.Keyword(null,"target","target",253001721),target);
});
com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-state","com.fulcrologic.fulcro.routing.dynamic-routing/current-state",2011639269)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"deferred","deferred",-1976960688),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null)], null)], null),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.identity], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.identity], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null)], null)], null)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","RouterStateMachine","com.fulcrologic.fulcro.routing.dynamic-routing/RouterStateMachine",1134286079,null));

com.fulcrologic.fulcro.ui_state_machines.register_state_machine_BANG_(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","RouterStateMachine","com.fulcrologic.fulcro.routing.dynamic-routing/RouterStateMachine",1134286079,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-state","com.fulcrologic.fulcro.routing.dynamic-routing/current-state",2011639269)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"deferred","deferred",-1976960688),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null)], null)], null),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.identity], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.identity], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null)], null)], null)], null)], null));
/**
 * Internal algorithm: Returns a sequence of idents of the targets that the `new-route` goes through by analyzing the current
 *   application query and state.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$proposed_new_path(var_args){
var G__45042 = arguments.length;
switch (G__45042) {
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$3 = (function (this_or_app,relative_class_or_instance,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4(this_or_app,relative_class_or_instance,new_route,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4 = (function (this_or_app,relative_class_or_instance,new_route,timeouts_and_params){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(this_or_app);
var state_map = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app__$1);
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(relative_class_or_instance,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(ast,new_route);
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var G__45044_45245 = root;
var map__45045_45246 = G__45044_45245;
var map__45045_45247__$1 = cljs.core.__destructure_map(map__45045_45246);
var component_45248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45045_45247__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_45249 = new_route;
var G__45044_45250__$1 = G__45044_45245;
var path_45251__$1 = path_45249;
while(true){
var map__45054_45252 = G__45044_45250__$1;
var map__45054_45253__$1 = cljs.core.__destructure_map(map__45054_45252);
var component_45254__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45054_45253__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_45255__$2 = path_45251__$1;
if(cljs.core.truth_((function (){var and__5043__auto__ = component_45254__$1;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component_45254__$1);
} else {
return and__5043__auto__;
}
})())){
var map__45055_45256 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component_45254__$1,path_45255__$2);
var map__45055_45257__$1 = cljs.core.__destructure_map(map__45055_45256);
var target_45258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45055_45257__$1,new cljs.core.Keyword(null,"target","target",253001721));
var matching_prefix_45259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45055_45257__$1,new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173));
var target_ast_45260 = (function (){var G__45056 = target_45258;
var G__45056__$1 = (((G__45056 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__45056,state_map));
if((G__45056__$1 == null)){
return null;
} else {
return edn_query_language.core.query__GT_ast(G__45056__$1);
}
})();
var prefix_length_45261 = cljs.core.count(matching_prefix_45259);
var remaining_path_45262 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(prefix_length_45261,path_45255__$2));
var segment_45263 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(target_45258);
var params_45264 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__45044_45250__$1,path_45251__$1,map__45055_45256,map__45055_45257__$1,target_45258,matching_prefix_45259,target_ast_45260,prefix_length_45261,remaining_path_45262,segment_45263,map__45054_45252,map__45054_45253__$1,component_45254__$1,path_45255__$2,G__45044_45245,map__45045_45246,map__45045_45247__$1,component_45248,path_45249,app__$1,state_map,root_query,ast,root,result){
return (function (p,p__45057){
var vec__45058 = p__45057;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45058,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45058,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,k,v);
} else {
return p;
}
});})(G__45044_45250__$1,path_45251__$1,map__45055_45256,map__45055_45257__$1,target_45258,matching_prefix_45259,target_ast_45260,prefix_length_45261,remaining_path_45262,segment_45263,map__45054_45252,map__45054_45253__$1,component_45254__$1,path_45255__$2,G__45044_45245,map__45045_45246,map__45045_45247__$1,component_45248,path_45249,app__$1,state_map,root_query,ast,root,result))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(timeouts_and_params,new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530)], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (G__45044_45250__$1,path_45251__$1,map__45055_45256,map__45055_45257__$1,target_45258,matching_prefix_45259,target_ast_45260,prefix_length_45261,remaining_path_45262,segment_45263,map__45054_45252,map__45054_45253__$1,component_45254__$1,path_45255__$2,G__45044_45245,map__45045_45246,map__45045_45247__$1,component_45248,path_45249,app__$1,state_map,root_query,ast,root,result){
return (function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
});})(G__45044_45250__$1,path_45251__$1,map__45055_45256,map__45055_45257__$1,target_45258,matching_prefix_45259,target_ast_45260,prefix_length_45261,remaining_path_45262,segment_45263,map__45054_45252,map__45054_45253__$1,component_45254__$1,path_45255__$2,G__45044_45245,map__45045_45246,map__45045_45247__$1,component_45248,path_45249,app__$1,state_map,root_query,ast,root,result))
,segment_45263,matching_prefix_45259));
var target_ident_45265 = com.fulcrologic.fulcro.routing.dynamic_routing.will_enter(target_45258,app__$1,params_45264);
if((((!(edn_query_language.core.ident_QMARK_(target_ident_45265)))) || ((cljs.core.second(target_ident_45265) == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,444,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__45044_45250__$1,path_45251__$1,map__45055_45256,map__45055_45257__$1,target_45258,matching_prefix_45259,target_ast_45260,prefix_length_45261,remaining_path_45262,segment_45263,params_45264,target_ident_45265,map__45054_45252,map__45054_45253__$1,component_45254__$1,path_45255__$2,G__45044_45245,map__45045_45246,map__45045_45247__$1,component_45248,path_45249,app__$1,state_map,root_query,ast,root,result){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["will-enter for router target",com.fulcrologic.fulcro.raw.components.component_name(target_45258),"did not return a valid ident. Instead it returned: ",target_ident_45265,"See https://book.fulcrologic.com/#err-dr-will-enter-invalid-ident"], null);
});})(G__45044_45250__$1,path_45251__$1,map__45055_45256,map__45055_45257__$1,target_45258,matching_prefix_45259,target_ast_45260,prefix_length_45261,remaining_path_45262,segment_45263,params_45264,target_ident_45265,map__45054_45252,map__45054_45253__$1,component_45254__$1,path_45255__$2,G__45044_45245,map__45045_45246,map__45045_45247__$1,component_45248,path_45249,app__$1,state_map,root_query,ast,root,result))
,null)),null,284575489,null);
} else {
}

if(((edn_query_language.core.ident_QMARK_(target_ident_45265)) && ((!(cljs.core.contains_QMARK_((function (){var G__45061 = target_ident_45265;
if((G__45061 == null)){
return null;
} else {
return cljs.core.meta(G__45061);
}
})(),new cljs.core.Keyword(null,"immediate","immediate",-1684692069))))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,447,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__45044_45250__$1,path_45251__$1,map__45055_45256,map__45055_45257__$1,target_45258,matching_prefix_45259,target_ast_45260,prefix_length_45261,remaining_path_45262,segment_45263,params_45264,target_ident_45265,map__45054_45252,map__45054_45253__$1,component_45254__$1,path_45255__$2,G__45044_45245,map__45045_45246,map__45045_45247__$1,component_45248,path_45249,app__$1,state_map,root_query,ast,root,result){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["will-enter for router target",com.fulcrologic.fulcro.raw.components.component_name(target_45258),"did not wrap the ident in route-immediate, route-deferred, or route-with-path-ordered-transaction. See https://book.fulcrologic.com/#err-dr-will-enter-missing-metadata"], null);
});})(G__45044_45250__$1,path_45251__$1,map__45055_45256,map__45055_45257__$1,target_45258,matching_prefix_45259,target_ast_45260,prefix_length_45261,remaining_path_45262,segment_45263,params_45264,target_ident_45265,map__45054_45252,map__45054_45253__$1,component_45254__$1,path_45255__$2,G__45044_45245,map__45045_45246,map__45045_45247__$1,component_45248,path_45249,app__$1,state_map,root_query,ast,root,result))
,null)),null,1001452197,null);
} else {
}

if(cljs.core.vector_QMARK_(target_ident_45265)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(result,cljs.core.conj,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(target_ident_45265,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),target_45258,new cljs.core.Keyword(null,"params","params",710516235),params_45264));
} else {
}

if(cljs.core.seq(remaining_path_45262)){
var G__45266 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(target_ast_45260,remaining_path_45262);
var G__45267 = remaining_path_45262;
G__45044_45250__$1 = G__45266;
path_45251__$1 = G__45267;
continue;
} else {
}
} else {
}
break;
}

return cljs.core.deref(result);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$lang$maxFixedArity = 4);

/**
 * Tell active routers that they are about to leave the screen. Returns false if any of them deny the route change.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving = (function com$fulcrologic$fulcro$routing$dynamic_routing$signal_router_leaving(var_args){
var G__45065 = arguments.length;
switch (G__45065) {
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$3 = (function (app_or_comp,relative_class_or_instance,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$4(app_or_comp,relative_class_or_instance,new_route,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp,relative_class_or_instance,new_route,timeouts_and_params){
var new_path = com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4(app_or_comp,relative_class_or_instance,new_route,timeouts_and_params);
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_comp);
var state_map = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app__$1);
var router = relative_class_or_instance;
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(router,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app__$1,ast);
var to_signal = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var to_cancel = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var _ = (function (){var G__45067 = root;
var map__45068 = G__45067;
var map__45068__$1 = cljs.core.__destructure_map(map__45068);
var node = map__45068__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45068__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45068__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var new_path_remaining = new_path;
var G__45067__$1 = G__45067;
var new_path_remaining__$1 = new_path_remaining;
while(true){
var map__45069 = G__45067__$1;
var map__45069__$1 = cljs.core.__destructure_map(map__45069);
var node__$1 = map__45069__$1;
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45069__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45069__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var new_path_remaining__$2 = new_path_remaining__$1;
if(cljs.core.truth_((function (){var and__5043__auto__ = component__$1;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component__$1);
} else {
return and__5043__auto__;
}
})())){
var new_target = cljs.core.first(new_path_remaining__$2);
var router_ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component__$1,cljs.core.PersistentArrayMap.EMPTY);
var active_target = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)));
var map__45070 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)));
var map__45070__$1 = cljs.core.__destructure_map(map__45070);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45070__$1,new cljs.core.Keyword(null,"target","target",253001721));
var next_router = cljs.core.some(((function (G__45067__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__45070,map__45070__$1,target,map__45069,map__45069__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__45067,map__45068,map__45068__$1,node,component,children,new_path_remaining,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel){
return (function (p1__45062_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app__$1,p1__45062_SHARP_);
});})(G__45067__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__45070,map__45070__$1,target,map__45069,map__45069__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__45067,map__45068,map__45068__$1,node,component,children,new_path_remaining,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel))
,children__$1);
if(edn_query_language.core.ident_QMARK_(target)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(to_cancel,cljs.core.conj,target);
} else {
}

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_target,active_target)) && (cljs.core.vector_QMARK_(active_target)))){
var mounted_target_class_45269 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__45067__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__45070,map__45070__$1,target,next_router,map__45069,map__45069__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__45067,map__45068,map__45068__$1,node,component,children,new_path_remaining,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel){
return (function (acc,p__45071){
var map__45072 = p__45071;
var map__45072__$1 = cljs.core.__destructure_map(map__45072);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45072__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var component__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45072__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),dispatch_key)){
return cljs.core.reduced(component__$2);
} else {
return null;
}
});})(G__45067__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__45070,map__45070__$1,target,next_router,map__45069,map__45069__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__45067,map__45068,map__45068__$1,node,component,children,new_path_remaining,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel))
,null,(function (){var G__45073 = component__$1;
var G__45073__$1 = (((G__45073 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__45073,state_map));
var G__45073__$2 = (((G__45073__$1 == null))?null:edn_query_language.core.query__GT_ast(G__45073__$1));
if((G__45073__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__45073__$2);
}
})());
var mounted_targets_45270 = com.fulcrologic.fulcro.components.class__GT_all(app__$1,mounted_target_class_45269);
if(cljs.core.seq(mounted_targets_45270)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(to_signal,cljs.core.into,mounted_targets_45270);
} else {
}
} else {
}

if(cljs.core.truth_(next_router)){
var G__45271 = next_router;
var G__45272 = cljs.core.rest(new_path_remaining__$2);
G__45067__$1 = G__45271;
new_path_remaining__$1 = G__45272;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
})();
var components = cljs.core.reverse(cljs.core.deref(to_signal));
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var seq__45074_45273 = cljs.core.seq(components);
var chunk__45075_45274 = null;
var count__45076_45275 = (0);
var i__45077_45276 = (0);
while(true){
if((i__45077_45276 < count__45076_45275)){
var c_45277 = chunk__45075_45274.cljs$core$IIndexed$_nth$arity$2(null,i__45077_45276);
var will_leave_result_45278 = com.fulcrologic.fulcro.routing.dynamic_routing.will_leave(c_45277,com.fulcrologic.fulcro.raw.components.props(c_45277));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(result,((function (seq__45074_45273,chunk__45075_45274,count__45076_45275,i__45077_45276,will_leave_result_45278,c_45277,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result){
return (function (p1__45063_SHARP_){
var and__5043__auto__ = p1__45063_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return will_leave_result_45278;
} else {
return and__5043__auto__;
}
});})(seq__45074_45273,chunk__45075_45274,count__45076_45275,i__45077_45276,will_leave_result_45278,c_45277,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result))
);


var G__45279 = seq__45074_45273;
var G__45280 = chunk__45075_45274;
var G__45281 = count__45076_45275;
var G__45282 = (i__45077_45276 + (1));
seq__45074_45273 = G__45279;
chunk__45075_45274 = G__45280;
count__45076_45275 = G__45281;
i__45077_45276 = G__45282;
continue;
} else {
var temp__5804__auto___45283 = cljs.core.seq(seq__45074_45273);
if(temp__5804__auto___45283){
var seq__45074_45284__$1 = temp__5804__auto___45283;
if(cljs.core.chunked_seq_QMARK_(seq__45074_45284__$1)){
var c__5568__auto___45285 = cljs.core.chunk_first(seq__45074_45284__$1);
var G__45286 = cljs.core.chunk_rest(seq__45074_45284__$1);
var G__45287 = c__5568__auto___45285;
var G__45288 = cljs.core.count(c__5568__auto___45285);
var G__45289 = (0);
seq__45074_45273 = G__45286;
chunk__45075_45274 = G__45287;
count__45076_45275 = G__45288;
i__45077_45276 = G__45289;
continue;
} else {
var c_45290 = cljs.core.first(seq__45074_45284__$1);
var will_leave_result_45291 = com.fulcrologic.fulcro.routing.dynamic_routing.will_leave(c_45290,com.fulcrologic.fulcro.raw.components.props(c_45290));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(result,((function (seq__45074_45273,chunk__45075_45274,count__45076_45275,i__45077_45276,will_leave_result_45291,c_45290,seq__45074_45284__$1,temp__5804__auto___45283,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result){
return (function (p1__45063_SHARP_){
var and__5043__auto__ = p1__45063_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return will_leave_result_45291;
} else {
return and__5043__auto__;
}
});})(seq__45074_45273,chunk__45075_45274,count__45076_45275,i__45077_45276,will_leave_result_45291,c_45290,seq__45074_45284__$1,temp__5804__auto___45283,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result))
);


var G__45292 = cljs.core.next(seq__45074_45284__$1);
var G__45293 = null;
var G__45294 = (0);
var G__45295 = (0);
seq__45074_45273 = G__45292;
chunk__45075_45274 = G__45293;
count__45076_45275 = G__45294;
i__45077_45276 = G__45295;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(result))){
var seq__45078_45296 = cljs.core.seq(cljs.core.deref(to_cancel));
var chunk__45079_45297 = null;
var count__45080_45298 = (0);
var i__45081_45299 = (0);
while(true){
if((i__45081_45299 < count__45080_45298)){
var t_45300 = chunk__45079_45297.cljs$core$IIndexed$_nth$arity$2(null,i__45081_45299);
var map__45086_45301 = (function (){var G__45087 = t_45300;
if((G__45087 == null)){
return null;
} else {
return cljs.core.meta(G__45087);
}
})();
var map__45086_45302__$1 = cljs.core.__destructure_map(map__45086_45301);
var component_45303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45086_45302__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var params_45304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45086_45302__$1,new cljs.core.Keyword(null,"params","params",710516235));
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled(component_45303,params_45304);


var G__45305 = seq__45078_45296;
var G__45306 = chunk__45079_45297;
var G__45307 = count__45080_45298;
var G__45308 = (i__45081_45299 + (1));
seq__45078_45296 = G__45305;
chunk__45079_45297 = G__45306;
count__45080_45298 = G__45307;
i__45081_45299 = G__45308;
continue;
} else {
var temp__5804__auto___45309 = cljs.core.seq(seq__45078_45296);
if(temp__5804__auto___45309){
var seq__45078_45310__$1 = temp__5804__auto___45309;
if(cljs.core.chunked_seq_QMARK_(seq__45078_45310__$1)){
var c__5568__auto___45311 = cljs.core.chunk_first(seq__45078_45310__$1);
var G__45312 = cljs.core.chunk_rest(seq__45078_45310__$1);
var G__45313 = c__5568__auto___45311;
var G__45314 = cljs.core.count(c__5568__auto___45311);
var G__45315 = (0);
seq__45078_45296 = G__45312;
chunk__45079_45297 = G__45313;
count__45080_45298 = G__45314;
i__45081_45299 = G__45315;
continue;
} else {
var t_45316 = cljs.core.first(seq__45078_45310__$1);
var map__45088_45317 = (function (){var G__45089 = t_45316;
if((G__45089 == null)){
return null;
} else {
return cljs.core.meta(G__45089);
}
})();
var map__45088_45318__$1 = cljs.core.__destructure_map(map__45088_45317);
var component_45319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45088_45318__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var params_45320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45088_45318__$1,new cljs.core.Keyword(null,"params","params",710516235));
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled(component_45319,params_45320);


var G__45321 = cljs.core.next(seq__45078_45310__$1);
var G__45322 = null;
var G__45323 = (0);
var G__45324 = (0);
seq__45078_45296 = G__45321;
chunk__45079_45297 = G__45322;
count__45080_45298 = G__45323;
i__45081_45299 = G__45324;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.deref(result);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$lang$maxFixedArity = 4);

/**
 * Returns the current active route, starting from the relative Fulcro class or instance.
 * 
 *   Any component using this as a basis for rendering will need to add the following to their query to
 *   ensure the props of that component change on route changes:
 * 
 *   ```
 *   [::uism/asm-id fq-router-kw]
 *   ```
 * 
 *   where `fq-router-kw` is a keyword that has the exact namespace and name of the router you're interested in. If you want
 *   to just over-render you can use a quoted `_` instead.
 * 
 *   NOTE: This function is primarily meant to be used in mutation implementations or with global routing.
 *   It is not reliable to use this function during render because it relies on the router being mounted (and render gets
 *   called in order to determine what to render). If you want to know the current state of a particular
 *   router you should query for it's ASM as indicated above.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.current_route = (function com$fulcrologic$fulcro$routing$dynamic_routing$current_route(var_args){
var G__45092 = arguments.length;
switch (G__45092) {
case 1:
return com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$1 = (function (this_or_app){
var temp__5802__auto__ = (function (){var G__45093 = this_or_app;
var G__45093__$1 = (((G__45093 == null))?null:com.fulcrologic.fulcro.raw.components.any__GT_app(G__45093));
if((G__45093__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.application.root_class(G__45093__$1);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var cls = temp__5802__auto__;
return com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$2(this_or_app,cls);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$2 = (function (this_or_app,relative_class_or_instance){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(this_or_app);
var state_map = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app__$1);
var router = relative_class_or_instance;
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(router,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app__$1,ast);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
}
})();
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var G__45095_45326 = root;
var map__45096_45327 = G__45095_45326;
var map__45096_45328__$1 = cljs.core.__destructure_map(map__45096_45327);
var node_45329 = map__45096_45328__$1;
var component_45330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45096_45328__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var G__45095_45331__$1 = G__45095_45326;
while(true){
var map__45098_45332 = G__45095_45331__$1;
var map__45098_45333__$1 = cljs.core.__destructure_map(map__45098_45332);
var node_45334__$1 = map__45098_45333__$1;
var component_45335__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45098_45333__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core.truth_((function (){var and__5043__auto__ = component_45335__$1;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component_45335__$1);
} else {
return and__5043__auto__;
}
})())){
var router_ident_45336 = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component_45335__$1,cljs.core.PersistentArrayMap.EMPTY);
var router_id_45337 = cljs.core.second(router_ident_45336);
var sm_env_45338 = com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$5(state_map,null,router_id_45337,new cljs.core.Keyword(null,"none","none",1333468478),cljs.core.PersistentArrayMap.EMPTY);
var path_segment_45339 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(sm_env_45338,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997));
var next_router_45340 = cljs.core.some(((function (G__45095_45331__$1,router_ident_45336,router_id_45337,sm_env_45338,path_segment_45339,map__45098_45332,map__45098_45333__$1,node_45334__$1,component_45335__$1,G__45095_45326,map__45096_45327,map__45096_45328__$1,node_45329,component_45330,app__$1,state_map,router,root_query,ast,root,result){
return (function (p1__45090_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app__$1,p1__45090_SHARP_);
});})(G__45095_45331__$1,router_ident_45336,router_id_45337,sm_env_45338,path_segment_45339,map__45098_45332,map__45098_45333__$1,node_45334__$1,component_45335__$1,G__45095_45326,map__45096_45327,map__45096_45328__$1,node_45329,component_45330,app__$1,state_map,router,root_query,ast,root,result))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node_45334__$1));
if(cljs.core.seq(path_segment_45339)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(result,cljs.core.into,path_segment_45339);
} else {
}

if(cljs.core.truth_(next_router_45340)){
var G__45341 = next_router_45340;
G__45095_45331__$1 = G__45341;
continue;
} else {
}
} else {
}
break;
}

return cljs.core.deref(result);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.routing.dynamic_routing.mounted_targets = (function com$fulcrologic$fulcro$routing$dynamic_routing$mounted_targets(app__$1,router_class){
var state_map = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app__$1);
var mounted_target_class = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__45099){
var map__45100 = p__45099;
var map__45100__$1 = cljs.core.__destructure_map(map__45100);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45100__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45100__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),dispatch_key)){
return cljs.core.reduced(component);
} else {
return null;
}
}),null,(function (){var G__45101 = router_class;
var G__45101__$1 = (((G__45101 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__45101,state_map));
var G__45101__$2 = (((G__45101__$1 == null))?null:edn_query_language.core.query__GT_ast(G__45101__$1));
if((G__45101__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__45101__$2);
}
})());
return com.fulcrologic.fulcro.components.class__GT_all(app__$1,mounted_target_class);
});
com.fulcrologic.fulcro.routing.dynamic_routing.set_force_route_flag_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$set_force_route_flag_BANG_(route_target){
return com.fulcrologic.fulcro.routing.dynamic_routing.goog$module$goog$object.set(route_target,"fulcro$routing$force_route",true);
});
/**
 * returns true if the given route target's allow-route-change? should be ignored.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.force_route_flagged_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$force_route_flagged_QMARK_(route_target){
return com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(route_target,"fulcro$routing$force_route");
});
/**
 * This function will return the first mounted instance of a route target that is currently indicating it would
 *   deny a route change. If a `relative-class` is given then it only looks for targets that would deny a change within
 *   that router's subtree.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes = (function com$fulcrologic$fulcro$routing$dynamic_routing$target_denying_route_changes(var_args){
var G__45104 = arguments.length;
switch (G__45104) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2 = (function (this_or_app,relative_class){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(this_or_app);
var state_map = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app__$1);
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(relative_class,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app__$1,ast);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
}
})();
var G__45106 = root;
var map__45107 = G__45106;
var map__45107__$1 = cljs.core.__destructure_map(map__45107);
var router_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45107__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45107__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__45106__$1 = G__45106;
while(true){
var map__45109 = G__45106__$1;
var map__45109__$1 = cljs.core.__destructure_map(map__45109);
var router_class__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45109__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45109__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var and__5043__auto__ = router_class__$1;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(router_class__$1);
} else {
return and__5043__auto__;
}
})())){
var router_ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(router_class__$1,cljs.core.PersistentArrayMap.EMPTY);
var active_target = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)));
var next_router = cljs.core.some(((function (G__45106__$1,router_ident,active_target,map__45109,map__45109__$1,router_class__$1,children__$1,G__45106,map__45107,map__45107__$1,router_class,children,app__$1,state_map,root_query,ast,root){
return (function (p1__45102_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app__$1,p1__45102_SHARP_);
});})(G__45106__$1,router_ident,active_target,map__45109,map__45109__$1,router_class__$1,children__$1,G__45106,map__45107,map__45107__$1,router_class,children,app__$1,state_map,root_query,ast,root))
,children__$1);
var rejecting_target = ((cljs.core.vector_QMARK_(active_target))?cljs.core.some(((function (G__45106__$1,router_ident,active_target,next_router,map__45109,map__45109__$1,router_class__$1,children__$1,G__45106,map__45107,map__45107__$1,router_class,children,app__$1,state_map,root_query,ast,root){
return (function (c){
if(((com.fulcrologic.fulcro.routing.dynamic_routing.allow_route_change_QMARK_(c) === false) && (cljs.core.not(com.fulcrologic.fulcro.routing.dynamic_routing.force_route_flagged_QMARK_(c))))){
return c;
} else {
return null;
}
});})(G__45106__$1,router_ident,active_target,next_router,map__45109,map__45109__$1,router_class__$1,children__$1,G__45106,map__45107,map__45107__$1,router_class,children,app__$1,state_map,root_query,ast,root))
,com.fulcrologic.fulcro.routing.dynamic_routing.mounted_targets(app__$1,router_class__$1)):null);
if(cljs.core.truth_(rejecting_target)){
return rejecting_target;
} else {
if(cljs.core.truth_(next_router)){
var G__45343 = next_router;
G__45106__$1 = G__45343;
continue;
} else {
return null;
}
}
} else {
return null;
}
break;
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$1 = (function (this_or_app){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(this_or_app);
var router = com.fulcrologic.fulcro.application.root_class(app__$1);
return com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2(app__$1,router);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the active on-screen targets indicate they will allow navigation.
 * 
 *   NOTE: If your route targets have an `:allow-route-change?`, then that will be used to determine if the route can
 *   be abandoned; otherwise `:will-leave` will be called to answer the question; however, this USE of `will-leave`
 *   is DEPRECATED (though the hook is NOT because it serves another purpose). If you side-effect in `:will-leave` this could cause strange
 *   behavior throughout the application.  It is recommended that your targets implement `:allow-route-change?` if they need
 *   to prevent routing, and only leverage `:will-leave` to do things like cancel in-progress loads.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$can_change_route_QMARK_(var_args){
var G__45111 = arguments.length;
switch (G__45111) {
case 1:
return com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (this_or_app){
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$1(this_or_app) == null);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (this_or_app,relative_class){
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2(this_or_app,relative_class) == null);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Takes an on-screen *instance* of a react element and a new route (vector of strings) and returns a vector containing
 * either the original arguments, or an evaluation of relative navigation up the live routing tree.
 * 
 * If `new-route` starts with `:..` (any number of times) then this function finds (and returns) the parent *router*
 * and the new route stripped of `:..` prefix.
 * 
 * For example, say you were in a target instance that has a parent router, which in turn has a parent router called
 * `SomeRouter`. Then:
 * 
 * ```
 * (dr/evaluate-relative-path this [:.. :.. "some-target"])
 * => [SomeRouter ["some-target"]]
 * ```
 * 
 * This function does *not* work on classes. It is meant for live evaluation of on-screen instances to enable relative
 * routing based on the actual on-screen route targets.
 * 
 * CAN return `nil` for the router if no such parent is found.
 * 
 * Returns unmodified input argument if `new-route` does not begin with `:..`.
 * 
 */
com.fulcrologic.fulcro.routing.dynamic_routing.evaluate_relative_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$evaluate_relative_path(relative_instance,new_route){
var current_instance = relative_instance;
var G__45115 = new_route;
var vec__45116 = G__45115;
var seq__45117 = cljs.core.seq(vec__45116);
var first__45118 = cljs.core.first(seq__45117);
var seq__45117__$1 = cljs.core.next(seq__45117);
var lead_element = first__45118;
var remainder = seq__45117__$1;
var path = vec__45116;
var looking_for_router_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"..","..",-1941038947),lead_element);
var current_instance__$1 = current_instance;
var G__45115__$1 = G__45115;
var looking_for_router_QMARK___$1 = looking_for_router_QMARK_;
while(true){
var current_instance__$2 = current_instance__$1;
var vec__45122 = G__45115__$1;
var seq__45123 = cljs.core.seq(vec__45122);
var first__45124 = cljs.core.first(seq__45123);
var seq__45123__$1 = cljs.core.next(seq__45123);
var lead_element__$1 = first__45124;
var remainder__$1 = seq__45123__$1;
var path__$1 = vec__45122;
var looking_for_router_QMARK___$2 = looking_for_router_QMARK___$1;
if((((current_instance__$2 == null)) || (cljs.core.empty_QMARK_(path__$1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_instance__$2,path__$1], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = looking_for_router_QMARK___$2;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(current_instance__$2);
} else {
return and__5043__auto__;
}
})())){
var G__45345 = current_instance__$2;
var G__45346 = cljs.core.vec(remainder__$1);
var G__45347 = false;
current_instance__$1 = G__45345;
G__45115__$1 = G__45346;
looking_for_router_QMARK___$1 = G__45347;
continue;
} else {
if(cljs.core.truth_(looking_for_router_QMARK___$2)){
var G__45348 = com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$1(current_instance__$2);
var G__45349 = path__$1;
var G__45350 = true;
current_instance__$1 = G__45348;
G__45115__$1 = G__45349;
looking_for_router_QMARK___$1 = G__45350;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"..","..",-1941038947),lead_element__$1)){
var G__45351 = com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$1(current_instance__$2);
var G__45352 = path__$1;
var G__45353 = true;
current_instance__$1 = G__45351;
G__45115__$1 = G__45352;
looking_for_router_QMARK___$1 = G__45353;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_instance__$2,path__$1], null);

}
}
}
}
break;
}
});
/**
 * Change the route, starting at the given Fulcro class or instance (scanning for the first router from there).  `new-route` is a vector
 *   of string components to pass through to the nearest child router as the new path. The first argument is any live component
 *   or the app.  The `timeouts-and-params` are as in `change-route`.
 * 
 *   When possible (i.e. no circular references to components) you can maintain better code navigation by
 *   generating `new-route` via `path-to`.  This will allow readers of your code to quickly jump to the actual
 *   components that implement the targets when reading the code.
 * 
 *   You may include the special keyword `:..` any number of times at the beginning of `new-route` to indicate the
 *   parent(s) of `relative-class-or-instance`, which allows you to do relative routing to a sibling.
 * 
 *   ```
 *   (dr/change-route-relative this this [:.. "sibling-pattern"])
 *   ```
 * 
 *   Returns one of:
 * 
 *   `:already-there` - The old and new route are the same, and there was no request to force an idempotent routing operation.
 *   `:invalid` - The new route didn't evaluate to a valid location
 *   `:denied` - One or more on-screen targets refused to allow the routing operation
 *   `:routing` - The routing operation is in progress, but deferred operations may still delay the route becoming visible.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$change_route_relative_BANG_(var_args){
var G__45126 = arguments.length;
switch (G__45126) {
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this_or_app,relative_class_or_instance,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4(this_or_app,relative_class_or_instance,new_route,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp,relative_class_or_instance,new_route,timeouts_and_params){
var vec__45127 = com.fulcrologic.fulcro.routing.dynamic_routing.evaluate_relative_path(relative_class_or_instance,new_route);
var relative_class_or_instance__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45127,(0),null);
var new_route__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45127,(1),null);
var relative_class = (cljs.core.truth_((com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(relative_class_or_instance__$1) : com.fulcrologic.fulcro.raw.components.component_QMARK_.call(null,relative_class_or_instance__$1)))?com.fulcrologic.fulcro.components.react_type(relative_class_or_instance__$1):relative_class_or_instance__$1);
var old_route = com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$2(app_or_comp,relative_class);
var new_path = com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4(app_or_comp,relative_class,new_route__$1,timeouts_and_params);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_route,new_route__$1)) && (cljs.core.not(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","force?","com.fulcrologic.fulcro.routing.dynamic-routing/force?",-1506318960).cljs$core$IFn$_invoke$arity$1(timeouts_and_params))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,679,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Request to change route, but path is the current route. Ignoring change request."], null);
}),null)),null,-855659456,null);

return new cljs.core.Keyword(null,"already-there","already-there",1156142236);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.seq(new_path));
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,684,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Could not find route targets for new-route",new_route__$1,"See https://book.fulcrologic.com/#err-dr-new-route-target-not-found"], null);
}),null)),null,212629286,null);

return new cljs.core.Keyword(null,"invalid","invalid",412869516);
} else {
if((!(com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$2(app_or_comp,relative_class)))){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_comp);
var target = com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$1(app__$1);
var route_denied = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(target,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-denied","route-denied",-1140339590)], 0));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,691,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route request denied by on-screen target",target,". Calling component's :route-denied (if defined)."], null);
}),null)),null,-273169861,null);

if(cljs.core.truth_(route_denied)){
(route_denied.cljs$core$IFn$_invoke$arity$3 ? route_denied.cljs$core$IFn$_invoke$arity$3(target,relative_class_or_instance__$1,new_route__$1) : route_denied.call(null,target,relative_class_or_instance__$1,new_route__$1));
} else {
}

return new cljs.core.Keyword(null,"denied","denied",-1141109291);
} else {
com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$4(app_or_comp,relative_class_or_instance__$1,new_route__$1,timeouts_and_params);

var app_45355__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_comp);
var state_map_45356 = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app_45355__$1);
var router_45357 = relative_class_or_instance__$1;
var root_query_45358 = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(router_45357,state_map_45356);
var ast_45359 = edn_query_language.core.query__GT_ast(root_query_45358);
var root_45360 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(ast_45359,new_route__$1);
var routing_actions_45361 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
var pessimistic_txn_45362 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var delayed_targets_45363 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var G__45131_45364 = root_45360;
var map__45132_45365 = G__45131_45364;
var map__45132_45366__$1 = cljs.core.__destructure_map(map__45132_45365);
var component_45367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45132_45366__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_45368 = new_route__$1;
var G__45131_45369__$1 = G__45131_45364;
var path_45370__$1 = path_45368;
while(true){
var map__45147_45371 = G__45131_45369__$1;
var map__45147_45372__$1 = cljs.core.__destructure_map(map__45147_45371);
var component_45373__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45147_45372__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_45374__$2 = path_45370__$1;
if(cljs.core.truth_((function (){var and__5043__auto__ = component_45373__$1;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component_45373__$1);
} else {
return and__5043__auto__;
}
})())){
var map__45148_45375 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component_45373__$1,path_45374__$2);
var map__45148_45376__$1 = cljs.core.__destructure_map(map__45148_45375);
var target_45377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45148_45376__$1,new cljs.core.Keyword(null,"target","target",253001721));
var matching_prefix_45378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45148_45376__$1,new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173));
var target_ast_45379 = (function (){var G__45150 = target_45377;
var G__45150__$1 = (((G__45150 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__45150,state_map_45356));
if((G__45150__$1 == null)){
return null;
} else {
return edn_query_language.core.query__GT_ast(G__45150__$1);
}
})();
var prefix_length_45380 = cljs.core.count(matching_prefix_45378);
var remaining_path_45381 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(prefix_length_45380,path_45374__$2));
var segment_45382 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(target_45377);
var params_45383 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__45131_45369__$1,path_45370__$1,map__45148_45375,map__45148_45376__$1,target_45377,matching_prefix_45378,target_ast_45379,prefix_length_45380,remaining_path_45381,segment_45382,map__45147_45371,map__45147_45372__$1,component_45373__$1,path_45374__$2,G__45131_45364,map__45132_45365,map__45132_45366__$1,component_45367,path_45368,app_45355__$1,state_map_45356,router_45357,root_query_45358,ast_45359,root_45360,routing_actions_45361,pessimistic_txn_45362,delayed_targets_45363,vec__45127,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (p,p__45151){
var vec__45152 = p__45151;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45152,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45152,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,k,v);
} else {
return p;
}
});})(G__45131_45369__$1,path_45370__$1,map__45148_45375,map__45148_45376__$1,target_45377,matching_prefix_45378,target_ast_45379,prefix_length_45380,remaining_path_45381,segment_45382,map__45147_45371,map__45147_45372__$1,component_45373__$1,path_45374__$2,G__45131_45364,map__45132_45365,map__45132_45366__$1,component_45367,path_45368,app_45355__$1,state_map_45356,router_45357,root_query_45358,ast_45359,root_45360,routing_actions_45361,pessimistic_txn_45362,delayed_targets_45363,vec__45127,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(timeouts_and_params,new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530)], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (G__45131_45369__$1,path_45370__$1,map__45148_45375,map__45148_45376__$1,target_45377,matching_prefix_45378,target_ast_45379,prefix_length_45380,remaining_path_45381,segment_45382,map__45147_45371,map__45147_45372__$1,component_45373__$1,path_45374__$2,G__45131_45364,map__45132_45365,map__45132_45366__$1,component_45367,path_45368,app_45355__$1,state_map_45356,router_45357,root_query_45358,ast_45359,root_45360,routing_actions_45361,pessimistic_txn_45362,delayed_targets_45363,vec__45127,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
});})(G__45131_45369__$1,path_45370__$1,map__45148_45375,map__45148_45376__$1,target_45377,matching_prefix_45378,target_ast_45379,prefix_length_45380,remaining_path_45381,segment_45382,map__45147_45371,map__45147_45372__$1,component_45373__$1,path_45374__$2,G__45131_45364,map__45132_45365,map__45132_45366__$1,component_45367,path_45368,app_45355__$1,state_map_45356,router_45357,root_query_45358,ast_45359,root_45360,routing_actions_45361,pessimistic_txn_45362,delayed_targets_45363,vec__45127,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
,segment_45382,matching_prefix_45378));
var router_ident_45384 = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component_45373__$1,cljs.core.PersistentArrayMap.EMPTY);
var router_id_45385 = cljs.core.second(router_ident_45384);
var target_ident_45386 = com.fulcrologic.fulcro.routing.dynamic_routing.will_enter(target_45377,app_45355__$1,params_45383);
var map__45149_45387 = (function (){try{var result__34355__auto__ = cljs.core.meta(target_ident_45386);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.routing.dynamic-routing",null,725,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__45131_45369__$1,path_45370__$1,result__34355__auto__,map__45148_45375,map__45148_45376__$1,target_45377,matching_prefix_45378,target_ast_45379,prefix_length_45380,remaining_path_45381,segment_45382,params_45383,router_ident_45384,router_id_45385,target_ident_45386,map__45147_45371,map__45147_45372__$1,component_45373__$1,path_45374__$2,G__45131_45364,map__45132_45365,map__45132_45366__$1,component_45367,path_45368,app_45355__$1,state_map_45356,router_45357,root_query_45358,ast_45359,root_45360,routing_actions_45361,pessimistic_txn_45362,delayed_targets_45363,vec__45127,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"target-ident","target-ident",997985936,null)),"=>",result__34355__auto__], null);
});})(G__45131_45369__$1,path_45370__$1,result__34355__auto__,map__45148_45375,map__45148_45376__$1,target_45377,matching_prefix_45378,target_ast_45379,prefix_length_45380,remaining_path_45381,segment_45382,params_45383,router_ident_45384,router_id_45385,target_ident_45386,map__45147_45371,map__45147_45372__$1,component_45373__$1,path_45374__$2,G__45131_45364,map__45132_45365,map__45132_45366__$1,component_45367,path_45368,app_45355__$1,state_map_45356,router_45357,root_query_45358,ast_45359,root_45360,routing_actions_45361,pessimistic_txn_45362,delayed_targets_45363,vec__45127,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
,null)),null,1235360466,true);

return result__34355__auto__;
}catch (e45155){var e__34296__auto__ = e45155;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,725,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__45131_45369__$1,path_45370__$1,e__34296__auto__,map__45148_45375,map__45148_45376__$1,target_45377,matching_prefix_45378,target_ast_45379,prefix_length_45380,remaining_path_45381,segment_45382,params_45383,router_ident_45384,router_id_45385,target_ident_45386,map__45147_45371,map__45147_45372__$1,component_45373__$1,path_45374__$2,G__45131_45364,map__45132_45365,map__45132_45366__$1,component_45367,path_45368,app_45355__$1,state_map_45356,router_45357,root_query_45358,ast_45359,root_45360,routing_actions_45361,pessimistic_txn_45362,delayed_targets_45363,vec__45127,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__34296__auto__], null);
});})(G__45131_45369__$1,path_45370__$1,e__34296__auto__,map__45148_45375,map__45148_45376__$1,target_45377,matching_prefix_45378,target_ast_45379,prefix_length_45380,remaining_path_45381,segment_45382,params_45383,router_ident_45384,router_id_45385,target_ident_45386,map__45147_45371,map__45147_45372__$1,component_45373__$1,path_45374__$2,G__45131_45364,map__45132_45365,map__45132_45366__$1,component_45367,path_45368,app_45355__$1,state_map_45356,router_45357,root_query_45358,ast_45359,root_45360,routing_actions_45361,pessimistic_txn_45362,delayed_targets_45363,vec__45127,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
,null)),null,1319243121,null);

throw e__34296__auto__;
}})();
var map__45149_45388__$1 = cljs.core.__destructure_map(map__45149_45387);
var path_ordered_QMARK__45389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45149_45388__$1,new cljs.core.Keyword(null,"path-ordered?","path-ordered?",1510080295));
var txn_45390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45149_45388__$1,new cljs.core.Keyword(null,"txn","txn",-469204789));
var show_early_QMARK__45391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45149_45388__$1,new cljs.core.Keyword(null,"show-early?","show-early?",-1632022246));
var optimistic_QMARK__45392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45149_45388__$1,new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869));
var completing_action_45393 = (function (){var or__5045__auto__ = (function (){var G__45156 = target_ident_45386;
var G__45156__$1 = (((G__45156 == null))?null:cljs.core.meta(G__45156));
if((G__45156__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__45156__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var and__5043__auto__ = optimistic_QMARK__45392;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.seq(txn_45390);
if(and__5043__auto____$1){
return ((function (G__45131_45369__$1,path_45370__$1,and__5043__auto____$1,and__5043__auto__,or__5045__auto__,map__45148_45375,map__45148_45376__$1,target_45377,matching_prefix_45378,target_ast_45379,prefix_length_45380,remaining_path_45381,segment_45382,params_45383,router_ident_45384,router_id_45385,target_ident_45386,map__45149_45387,map__45149_45388__$1,path_ordered_QMARK__45389,txn_45390,show_early_QMARK__45391,optimistic_QMARK__45392,map__45147_45371,map__45147_45372__$1,component_45373__$1,path_45374__$2,G__45131_45364,map__45132_45365,map__45132_45366__$1,component_45367,path_45368,app_45355__$1,state_map_45356,router_45357,root_query_45358,ast_45359,root_45360,routing_actions_45361,pessimistic_txn_45362,delayed_targets_45363,vec__45127,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app_45355__$1,txn_45390);
});
;})(G__45131_45369__$1,path_45370__$1,and__5043__auto____$1,and__5043__auto__,or__5045__auto__,map__45148_45375,map__45148_45376__$1,target_45377,matching_prefix_45378,target_ast_45379,prefix_length_45380,remaining_path_45381,segment_45382,params_45383,router_ident_45384,router_id_45385,target_ident_45386,map__45149_45387,map__45149_45388__$1,path_ordered_QMARK__45389,txn_45390,show_early_QMARK__45391,optimistic_QMARK__45392,map__45147_45371,map__45147_45372__$1,component_45373__$1,path_45374__$2,G__45131_45364,map__45132_45365,map__45132_45366__$1,component_45367,path_45368,app_45355__$1,state_map_45356,router_45357,root_query_45358,ast_45359,root_45360,routing_actions_45361,pessimistic_txn_45362,delayed_targets_45363,vec__45127,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.constantly(true);
}
}
})();
var event_data_45394 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),(5000),new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530),(20)], null),timeouts_and_params,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),matching_prefix_45378,new cljs.core.Keyword(null,"router","router",1091916230),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(router_ident_45384,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component_45373__$1),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(target_ident_45386,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),target_45377,new cljs.core.Keyword(null,"params","params",710516235),params_45383)], null)], 0));
if(cljs.core.truth_((function (){var and__5043__auto__ = path_ordered_QMARK__45389;
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.seq(txn_45390)) && (cljs.core.not(optimistic_QMARK__45392)));
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pessimistic_txn_45362,cljs.core.into,txn_45390);

if(cljs.core.truth_(show_early_QMARK__45391)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pessimistic_txn_45362,cljs.core.conj,(function (){var G__45157 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target_ident_45386], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__45157) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__45157));
})());
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(delayed_targets_45363,cljs.core.conj,(function (){var G__45158 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target_ident_45386], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__45158) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__45158));
})());
}
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(routing_actions_45361,cljs.core.conj,((function (G__45131_45369__$1,path_45370__$1,map__45148_45375,map__45148_45376__$1,target_45377,matching_prefix_45378,target_ast_45379,prefix_length_45380,remaining_path_45381,segment_45382,params_45383,router_ident_45384,router_id_45385,target_ident_45386,map__45149_45387,map__45149_45388__$1,path_ordered_QMARK__45389,txn_45390,show_early_QMARK__45391,optimistic_QMARK__45392,completing_action_45393,event_data_45394,map__45147_45371,map__45147_45372__$1,component_45373__$1,path_45374__$2,G__45131_45364,map__45132_45365,map__45132_45366__$1,component_45367,path_45368,app_45355__$1,state_map_45356,router_45357,root_query_45358,ast_45359,root_45360,routing_actions_45361,pessimistic_txn_45362,delayed_targets_45363,vec__45127,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (){
if(cljs.core.not(com.fulcrologic.fulcro.ui_state_machines.get_active_state(app_45355__$1,router_id_45385))){
var state_map_45395__$1 = com.fulcrologic.fulcro.components.component__GT_state_map(app_or_comp);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(state_map_45395__$1),router_id_45385))){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,748,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__45131_45369__$1,path_45370__$1,state_map_45395__$1,map__45148_45375,map__45148_45376__$1,target_45377,matching_prefix_45378,target_ast_45379,prefix_length_45380,remaining_path_45381,segment_45382,params_45383,router_ident_45384,router_id_45385,target_ident_45386,map__45149_45387,map__45149_45388__$1,path_ordered_QMARK__45389,txn_45390,show_early_QMARK__45391,optimistic_QMARK__45392,completing_action_45393,event_data_45394,map__45147_45371,map__45147_45372__$1,component_45373__$1,path_45374__$2,G__45131_45364,map__45132_45365,map__45132_45366__$1,component_45367,path_45368,app_45355__$1,state_map_45356,router_45357,root_query_45358,ast_45359,root_45360,routing_actions_45361,pessimistic_txn_45362,delayed_targets_45363,vec__45127,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You are routing to a router ",router_id_45385,"whose state was not composed into the app from root. Please check your :initial-state. See https://book.fulcrologic.com/#err-dr-router-state-missing"], null);
});})(G__45131_45369__$1,path_45370__$1,state_map_45395__$1,map__45148_45375,map__45148_45376__$1,target_45377,matching_prefix_45378,target_ast_45379,prefix_length_45380,remaining_path_45381,segment_45382,params_45383,router_ident_45384,router_id_45385,target_ident_45386,map__45149_45387,map__45149_45388__$1,path_ordered_QMARK__45389,txn_45390,show_early_QMARK__45391,optimistic_QMARK__45392,completing_action_45393,event_data_45394,map__45147_45371,map__45147_45372__$1,component_45373__$1,path_45374__$2,G__45131_45364,map__45132_45365,map__45132_45366__$1,component_45367,path_45368,app_45355__$1,state_map_45356,router_45357,root_query_45358,ast_45359,root_45360,routing_actions_45361,pessimistic_txn_45362,delayed_targets_45363,vec__45127,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
,null)),null,-131647285,null);
}

com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5(app_or_comp,com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine,router_id_45385,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.ui_state_machines.with_actor_class(router_ident_45384,component_45373__$1)], null),event_data_45394);
} else {
com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app_45355__$1,router_id_45385,new cljs.core.Keyword(null,"route!","route!",-1286958144),event_data_45394);
}

var _STAR_after_render_STAR__orig_val__45159 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__45160 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__45160);

try{return (completing_action_45393.cljs$core$IFn$_invoke$arity$0 ? completing_action_45393.cljs$core$IFn$_invoke$arity$0() : completing_action_45393.call(null));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__45159);
}});})(G__45131_45369__$1,path_45370__$1,map__45148_45375,map__45148_45376__$1,target_45377,matching_prefix_45378,target_ast_45379,prefix_length_45380,remaining_path_45381,segment_45382,params_45383,router_ident_45384,router_id_45385,target_ident_45386,map__45149_45387,map__45149_45388__$1,path_ordered_QMARK__45389,txn_45390,show_early_QMARK__45391,optimistic_QMARK__45392,completing_action_45393,event_data_45394,map__45147_45371,map__45147_45372__$1,component_45373__$1,path_45374__$2,G__45131_45364,map__45132_45365,map__45132_45366__$1,component_45367,path_45368,app_45355__$1,state_map_45356,router_45357,root_query_45358,ast_45359,root_45360,routing_actions_45361,pessimistic_txn_45362,delayed_targets_45363,vec__45127,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
);

if(cljs.core.seq(remaining_path_45381)){
var G__45396 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(target_ast_45379,remaining_path_45381);
var G__45397 = remaining_path_45381;
G__45131_45369__$1 = G__45396;
path_45370__$1 = G__45397;
continue;
} else {
}
} else {
}
break;
}

var seq__45161_45398 = cljs.core.seq(cljs.core.deref(routing_actions_45361));
var chunk__45162_45399 = null;
var count__45163_45400 = (0);
var i__45164_45401 = (0);
while(true){
if((i__45164_45401 < count__45163_45400)){
var action_45402 = chunk__45162_45399.cljs$core$IIndexed$_nth$arity$2(null,i__45164_45401);
(action_45402.cljs$core$IFn$_invoke$arity$0 ? action_45402.cljs$core$IFn$_invoke$arity$0() : action_45402.call(null));


var G__45403 = seq__45161_45398;
var G__45404 = chunk__45162_45399;
var G__45405 = count__45163_45400;
var G__45406 = (i__45164_45401 + (1));
seq__45161_45398 = G__45403;
chunk__45162_45399 = G__45404;
count__45163_45400 = G__45405;
i__45164_45401 = G__45406;
continue;
} else {
var temp__5804__auto___45407 = cljs.core.seq(seq__45161_45398);
if(temp__5804__auto___45407){
var seq__45161_45408__$1 = temp__5804__auto___45407;
if(cljs.core.chunked_seq_QMARK_(seq__45161_45408__$1)){
var c__5568__auto___45409 = cljs.core.chunk_first(seq__45161_45408__$1);
var G__45410 = cljs.core.chunk_rest(seq__45161_45408__$1);
var G__45411 = c__5568__auto___45409;
var G__45412 = cljs.core.count(c__5568__auto___45409);
var G__45413 = (0);
seq__45161_45398 = G__45410;
chunk__45162_45399 = G__45411;
count__45163_45400 = G__45412;
i__45164_45401 = G__45413;
continue;
} else {
var action_45414 = cljs.core.first(seq__45161_45408__$1);
(action_45414.cljs$core$IFn$_invoke$arity$0 ? action_45414.cljs$core$IFn$_invoke$arity$0() : action_45414.call(null));


var G__45415 = cljs.core.next(seq__45161_45408__$1);
var G__45416 = null;
var G__45417 = (0);
var G__45418 = (0);
seq__45161_45398 = G__45415;
chunk__45162_45399 = G__45416;
count__45163_45400 = G__45417;
i__45164_45401 = G__45418;
continue;
}
} else {
}
}
break;
}

if(((cljs.core.seq(cljs.core.deref(pessimistic_txn_45362))) || (cljs.core.seq(cljs.core.deref(delayed_targets_45363))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.routing.dynamic-routing",null,763,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Running pessimistic transaction",cljs.core.deref(pessimistic_txn_45362),"with delayed targets",cljs.core.deref(delayed_targets_45363)], null);
}),null)),null,-1395375227,null);

com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_45355__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pessimistic_txn_45362),cljs.core.reverse(cljs.core.deref(delayed_targets_45363)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),false], null));
} else {
}

return new cljs.core.Keyword(null,"routing","routing",1440253662);

}
}
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * DEPRECATED NAME: Use change-route-relative!
 */
com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative = com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_;
/**
 * Retry a route that the receiving component just denied, and ignore this target's answer. All other targets will still
 *   be asked. This is primarily used when you want to be able to use js/confirm in a component to ask the user if
 *   they "really mean to navigate away". You MUST pass the arguments that `:route-denied` received
 *   or you can easily cause an infinite loop. Other on-screen targets can still potentially abort the route.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$retry_route_BANG_(denied_target_instance,relative_root,path){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,778,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retrying route at the request of ",com.fulcrologic.fulcro.raw.components.component_name(denied_target_instance)], null);
}),null)),null,572693503,null);

com.fulcrologic.fulcro.routing.dynamic_routing.set_force_route_flag_BANG_(denied_target_instance);

return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$3(denied_target_instance,relative_root,path);
});
/**
 * Trigger a route change.
 * 
 *   * `this` - The component (or app) that is causing the route change.
 *   * `new-route` - A vector of URI components to pass to the router.
 *   * `timeouts-and-params` - A map of additional parameters and route timeouts that affect UI during deferred routes:
 *   `{:error-timeout ms :deferred-timeout ms}`.  Anything extra will appear in the `params` of `will-enter`.
 * 
 *   The error timeout is how long to wait  (default 5000ms) before showing the error-ui of a route (which must be defined on the
 *   router that is having problems).  The deferred-timeout (default 100ms) is how long to wait before showing the loading-ui of
 *   a deferred router (to prevent flicker).
 * 
 *   Returns one of:
 * 
 *   `:already-there` - The old and new route are the same, and there was no request to force an idempotent routing operation.
 *   `:invalid` - The new route didn't evaluate to a valid location
 *   `:denied` - One or more on-screen targets refused to allow the routing operation
 *   `:routing` - The routing operation is in progress, but deferred operations may still delay the route becoming visible.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$change_route_BANG_(var_args){
var G__45166 = arguments.length;
switch (G__45166) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3(this$,new_route,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,new_route,timeouts_and_params){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(this$);
var root = com.fulcrologic.fulcro.application.root_class(app__$1);
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,root,new_route,timeouts_and_params);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.routing.dynamic_routing.change_route = com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_;
/**
 * Run a runtime validation on route targets to verify that they at least declare a route-segment that is a vector.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.validate_route_targets = (function com$fulcrologic$fulcro$routing$dynamic_routing$validate_route_targets(router_instance){
var seq__45168 = cljs.core.seq(com.fulcrologic.fulcro.routing.dynamic_routing.get_targets(router_instance));
var chunk__45170 = null;
var count__45171 = (0);
var i__45172 = (0);
while(true){
if((i__45172 < count__45171)){
var t = chunk__45170.cljs$core$IIndexed$_nth$arity$2(null,i__45172);
var segment_45420 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(t);
var valid_QMARK__45421 = ((cljs.core.vector_QMARK_(segment_45420)) && ((((!(cljs.core.empty_QMARK_(segment_45420)))) && (cljs.core.every_QMARK_(((function (seq__45168,chunk__45170,count__45171,i__45172,segment_45420,t){
return (function (p1__45167_SHARP_){
return (((p1__45167_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__45167_SHARP_ === 'string'));
});})(seq__45168,chunk__45170,count__45171,i__45172,segment_45420,t))
,segment_45420)))));
if(valid_QMARK__45421){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,828,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__45168,chunk__45170,count__45171,i__45172,segment_45420,valid_QMARK__45421,t){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route target ",com.fulcrologic.fulcro.raw.components.component_name(t),"of router",com.fulcrologic.fulcro.raw.components.component_name(router_instance),"does not declare a valid :route-segment. Route segments must be non-empty vector that contain only strings","and keywords. See https://book.fulcrologic.com/#err-dr-target-lacks-r-segment"], null);
});})(seq__45168,chunk__45170,count__45171,i__45172,segment_45420,valid_QMARK__45421,t))
,null)),null,113888711,null);
}


var G__45422 = seq__45168;
var G__45423 = chunk__45170;
var G__45424 = count__45171;
var G__45425 = (i__45172 + (1));
seq__45168 = G__45422;
chunk__45170 = G__45423;
count__45171 = G__45424;
i__45172 = G__45425;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45168);
if(temp__5804__auto__){
var seq__45168__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45168__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45168__$1);
var G__45426 = cljs.core.chunk_rest(seq__45168__$1);
var G__45427 = c__5568__auto__;
var G__45428 = cljs.core.count(c__5568__auto__);
var G__45429 = (0);
seq__45168 = G__45426;
chunk__45170 = G__45427;
count__45171 = G__45428;
i__45172 = G__45429;
continue;
} else {
var t = cljs.core.first(seq__45168__$1);
var segment_45430 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(t);
var valid_QMARK__45431 = ((cljs.core.vector_QMARK_(segment_45430)) && ((((!(cljs.core.empty_QMARK_(segment_45430)))) && (cljs.core.every_QMARK_(((function (seq__45168,chunk__45170,count__45171,i__45172,segment_45430,t,seq__45168__$1,temp__5804__auto__){
return (function (p1__45167_SHARP_){
return (((p1__45167_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__45167_SHARP_ === 'string'));
});})(seq__45168,chunk__45170,count__45171,i__45172,segment_45430,t,seq__45168__$1,temp__5804__auto__))
,segment_45430)))));
if(valid_QMARK__45431){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,828,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__45168,chunk__45170,count__45171,i__45172,segment_45430,valid_QMARK__45431,t,seq__45168__$1,temp__5804__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route target ",com.fulcrologic.fulcro.raw.components.component_name(t),"of router",com.fulcrologic.fulcro.raw.components.component_name(router_instance),"does not declare a valid :route-segment. Route segments must be non-empty vector that contain only strings","and keywords. See https://book.fulcrologic.com/#err-dr-target-lacks-r-segment"], null);
});})(seq__45168,chunk__45170,count__45171,i__45172,segment_45430,valid_QMARK__45431,t,seq__45168__$1,temp__5804__auto__))
,null)),null,-1707753231,null);
}


var G__45432 = cljs.core.next(seq__45168__$1);
var G__45433 = null;
var G__45434 = (0);
var G__45435 = (0);
seq__45168 = G__45432;
chunk__45170 = G__45433;
count__45171 = G__45434;
i__45172 = G__45435;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Returns a sequence of all of the routers reachable in the query of the app.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.all_reachable_routers = (function com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers(state_map,component_class){
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(component_class,state_map);
var map__45175 = edn_query_language.core.query__GT_ast(root_query);
var map__45175__$1 = cljs.core.__destructure_map(map__45175);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45175__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var get_routers = (function com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers_$_get_routers_STAR_(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__45176){
var map__45177 = p__45176;
var map__45177__$1 = cljs.core.__destructure_map(map__45177);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45177__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45177__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(((com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,component):acc),com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers_$_get_routers_STAR_(children__$1));
}),cljs.core.PersistentVector.EMPTY,nodes);
});
return get_routers(children);
});
/**
 * Initialize the routing system.  This ensures that all routers have state machines in app state.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.initialize_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$initialize_BANG_(app__$1){
var state_map = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app__$1);
var root = com.fulcrologic.fulcro.application.root_class(app__$1);
var routers = com.fulcrologic.fulcro.routing.dynamic_routing.all_reachable_routers(state_map,root);
var tx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (r){
var router_ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(r,cljs.core.PersistentArrayMap.EMPTY);
var router_id = cljs.core.second(router_ident);
var G__45178 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),router_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"router","router",1091916230),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(router_ident,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),r)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.ui_state_machines.with_actor_class(router_ident,r)], null)], null);
return (com.fulcrologic.fulcro.ui_state_machines.begin.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.begin.cljs$core$IFn$_invoke$arity$1(G__45178) : com.fulcrologic.fulcro.ui_state_machines.begin.call(null,G__45178));
}),routers);
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,tx);
});
/**
 * Returns the given `prefix` with the TargetClass segment appended onto it, replacing the final elements with the
 * given (optional) path args.
 * 
 *   ```
 *   (defsc X [_ _]
 *  {:route-segment ["a" :b]})
 * 
 *   (into ["f" "g"] X "22") ; => ["f" "g" "a" "22"]
 *   ```
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.into_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$into_path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45436 = arguments.length;
var i__5770__auto___45437 = (0);
while(true){
if((i__5770__auto___45437 < len__5769__auto___45436)){
args__5775__auto__.push((arguments[i__5770__auto___45437]));

var G__45438 = (i__5770__auto___45437 + (1));
i__5770__auto___45437 = G__45438;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.routing.dynamic_routing.into_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.routing.dynamic_routing.into_path.cljs$core$IFn$_invoke$arity$variadic = (function (prefix,TargetClass,path_args){
var nargs = cljs.core.count(path_args);
var path = (function (){var G__45182 = TargetClass;
var G__45182__$1 = (((G__45182 == null))?null:com.fulcrologic.fulcro.raw.components.component_options(G__45182));
if((G__45182__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"route-segment","route-segment",1812935886).cljs$core$IFn$_invoke$arity$1(G__45182__$1);
}
})();
var static_elements = (cljs.core.count(path) - nargs);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(prefix,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(static_elements,path),path_args));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.into_path.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.routing.dynamic_routing.into_path.cljs$lang$applyTo = (function (seq45179){
var G__45180 = cljs.core.first(seq45179);
var seq45179__$1 = cljs.core.next(seq45179);
var G__45181 = cljs.core.first(seq45179__$1);
var seq45179__$2 = cljs.core.next(seq45179__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45180,G__45181,seq45179__$2);
}));

/**
 * Returns the route segment of the given TargetClass with the trailing elements replaced by path-args.
 * 
 *   ```
 *   (defsc X [_ _]
 *  {:route-segment ["a" :b]})
 * 
 *   (subpath X "22") ; => ["a" "22"]
 *   ```
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.subpath = (function com$fulcrologic$fulcro$routing$dynamic_routing$subpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45439 = arguments.length;
var i__5770__auto___45440 = (0);
while(true){
if((i__5770__auto___45440 < len__5769__auto___45439)){
args__5775__auto__.push((arguments[i__5770__auto___45440]));

var G__45441 = (i__5770__auto___45440 + (1));
i__5770__auto___45440 = G__45441;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.routing.dynamic_routing.subpath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.routing.dynamic_routing.subpath.cljs$core$IFn$_invoke$arity$variadic = (function (TargetClass,path_args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.routing.dynamic_routing.into_path,cljs.core.PersistentVector.EMPTY,TargetClass,path_args);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.subpath.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.routing.dynamic_routing.subpath.cljs$lang$applyTo = (function (seq45183){
var G__45184 = cljs.core.first(seq45183);
var seq45183__$1 = cljs.core.next(seq45183);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45184,seq45183__$1);
}));

/**
 * Convert a sequence of router targets and parameters into a vector of strings that represents the target route. Parameters
 *   can be sequenced inline:
 * 
 *   ```
 *   (defsc A [_ _]
 *  {:route-segment ["a" :a-param]})
 * 
 *   (defsc B [_ _]
 *  {:route-segment ["b" :b-param]})
 * 
 *   (route-segment A a-param1 B b-param ...)
 *   ```
 * 
 *   where the parameters for a target immediately follow the component that requires them. Alternatively
 *   one can specify all of the parameters at the end as a single map using the parameter names that are used in
 *   the component `:route-segment` itself:
 * 
 *   ```
 *   (defsc A [_ _]
 *  {:route-segment ["a" :a-param]})
 * 
 *   (route-segment A B C D {:a-param 1})
 *   ```
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.path_to = (function com$fulcrologic$fulcro$routing$dynamic_routing$path_to(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45442 = arguments.length;
var i__5770__auto___45443 = (0);
while(true){
if((i__5770__auto___45443 < len__5769__auto___45442)){
args__5775__auto__.push((arguments[i__5770__auto___45443]));

var G__45444 = (i__5770__auto___45443 + (1));
i__5770__auto___45443 = G__45444;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.routing.dynamic_routing.path_to.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.routing.dynamic_routing.path_to.cljs$core$IFn$_invoke$arity$variadic = (function (targets_and_params){
var segments = cljs.core.seq(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__45185_SHARP_){
var and__5043__auto__ = cljs.core.fn_QMARK_(p1__45185_SHARP_);
if(and__5043__auto__){
var or__5045__auto__ = (com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__45185_SHARP_) : com.fulcrologic.fulcro.raw.components.component_QMARK_.call(null,p1__45185_SHARP_));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.raw.components.component_class_QMARK_(p1__45185_SHARP_);
}
} else {
return and__5043__auto__;
}
}),targets_and_params));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(segments))) && (cljs.core.map_QMARK_(cljs.core.first(cljs.core.second(segments)))))){
var path = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__45186_SHARP_){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(p1__45186_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(segments)], 0));
var params = cljs.core.first(cljs.core.second(segments));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,i,i);
}),path);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (path,p__45189){
var vec__45190 = p__45189;
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45190,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45190,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__45187_SHARP_){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(p1__45187_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.butlast(classes)], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.routing.dynamic_routing.subpath,cljs.core.last(classes),params));
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),segments));
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.path_to.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.routing.dynamic_routing.path_to.cljs$lang$applyTo = (function (seq45188){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45188));
}));

com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components = (function com$fulcrologic$fulcro$routing$dynamic_routing$resolve_path_components(StartingClass,RouteTarget){
if(cljs.core.truth_(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(RouteTarget,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0)))){
var query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(StartingClass);
var root_node = edn_query_language.core.query__GT_ast(query);
var zipper = clojure.zip.zipper((function (p1__45193_SHARP_){
return cljs.core.contains_QMARK_(p1__45193_SHARP_,new cljs.core.Keyword(null,"children","children",-940561982));
}),new cljs.core.Keyword(null,"children","children",-940561982),(function (n,children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"children","children",-940561982),children);
}),root_node);
var node = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (n){
var map__45194 = clojure.zip.node(n);
var map__45194__$1 = cljs.core.__destructure_map(map__45194);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45194__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(component,RouteTarget)) && ((!(clojure.zip.end_QMARK_(n)))));
}),cljs.core.iterate(clojure.zip.next,zipper)));
var found_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(RouteTarget,(function (){var G__45195 = node;
var G__45195__$1 = (((G__45195 == null))?null:clojure.zip.node(G__45195));
if((G__45195__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__45195__$1);
}
})());
if(found_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component","component",1555936782),clojure.zip.path(node))),RouteTarget);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Attempts to resolve a path from StartingClass to the given RouteTarget. Can also be passed `resolved-components`, which
 *   is the output of `resolve-path-components`.
 * 
 * Returns a vector of route segments. Any keywords in the result will be replaced by the values from `params`, if present.
 * 
 * Returns nil if no path can be found.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$resolve_path(var_args){
var G__45198 = arguments.length;
switch (G__45198) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$2 = (function (resolved_components,params){
if(cljs.core.seq(resolved_components)){
var base_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__45196_SHARP_){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(p1__45196_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
})),resolved_components);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ele){
if(cljs.core.contains_QMARK_(params,ele)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,ele));
} else {
return ele;
}
}),base_path);
} else {
return null;
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$3 = (function (StartingClass,RouteTarget,params){
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components(StartingClass,RouteTarget),params);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$lang$maxFixedArity = 3);

/**
 * Given a new-route path (vector of strings): resolves the target (class) that is the ultimate target of that path.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.resolve_target = (function com$fulcrologic$fulcro$routing$dynamic_routing$resolve_target(app__$1,new_route){
var state_map = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app__$1);
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.application.root_class(app__$1),state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(ast,new_route);
var G__45200 = root;
var map__45201 = G__45200;
var map__45201__$1 = cljs.core.__destructure_map(map__45201);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45201__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path = new_route;
var G__45200__$1 = G__45200;
var path__$1 = path;
while(true){
var map__45205 = G__45200__$1;
var map__45205__$1 = cljs.core.__destructure_map(map__45205);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45205__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path__$2 = path__$1;
if(cljs.core.truth_((function (){var and__5043__auto__ = component__$1;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component__$1);
} else {
return and__5043__auto__;
}
})())){
var map__45206 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component__$1,path__$2);
var map__45206__$1 = cljs.core.__destructure_map(map__45206);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45206__$1,new cljs.core.Keyword(null,"target","target",253001721));
var matching_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45206__$1,new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173));
var target_ast = (function (){var G__45207 = target;
var G__45207__$1 = (((G__45207 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__45207,state_map));
if((G__45207__$1 == null)){
return null;
} else {
return edn_query_language.core.query__GT_ast(G__45207__$1);
}
})();
var prefix_length = cljs.core.count(matching_prefix);
var remaining_path = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(prefix_length,path__$2));
if(cljs.core.seq(remaining_path)){
var G__45446 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(target_ast,remaining_path);
var G__45447 = remaining_path;
G__45200__$1 = G__45446;
path__$1 = G__45447;
continue;
} else {
return target;
}
} else {
return null;
}
break;
}
});
var active_routes_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$active_routes_STAR_(state_map,p__45221,parent_component,ast_nodes){
var map__45222 = p__45221;
var map__45222__$1 = cljs.core.__destructure_map(map__45222);
var result = map__45222__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45222__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var segment = (function (){var G__45223 = parent_component;
if((G__45223 == null)){
return null;
} else {
return com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(G__45223);
}
})();
if((parent_component == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
} else {
if(cljs.core.truth_((function (){var G__45224 = parent_component;
if((G__45224 == null)){
return null;
} else {
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(G__45224);
}
})())){
var ident = (function (){var G__45225 = parent_component;
if((G__45225 == null)){
return null;
} else {
var G__45226 = G__45225;
var G__45227 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__45226,G__45227) : com.fulcrologic.fulcro.components.get_ident.call(null,G__45226,G__45227));
}
})();
var active_ast_node = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__45228){
var map__45229 = p__45228;
var map__45229__$1 = cljs.core.__destructure_map(map__45229);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45229__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),dispatch_key);
}),ast_nodes));
var new_parent = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(active_ast_node);
return com$fulcrologic$fulcro$routing$dynamic_routing$active_routes_STAR_(state_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,segment),new cljs.core.Keyword(null,"target-class","target-class",-955367984),parent_component], null),new_parent,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(active_ast_node));
} else {
if(cljs.core.truth_(segment)){
var subpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,segment);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__45230){
var map__45231 = p__45230;
var map__45231__$1 = cljs.core.__destructure_map(map__45231);
var node = map__45231__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45231__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45231__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return com$fulcrologic$fulcro$routing$dynamic_routing$active_routes_STAR_(state_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),subpath,new cljs.core.Keyword(null,"target-class","target-class",-955367984),parent_component], null),component,children);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_nodes], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__45232){
var map__45233 = p__45232;
var map__45233__$1 = cljs.core.__destructure_map(map__45233);
var node = map__45233__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45233__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45233__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return com$fulcrologic$fulcro$routing$dynamic_routing$active_routes_STAR_(state_map,result,component,children);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_nodes], 0));

}
}
}
});
/**
 * Return a sequence of the leaf router targets that are routed to in the given app using the active dynamic query
 *   and app state.
 * 
 *   The return values are maps that currently contain a `:path` and `:target-component` key.
 *   Future versions of this function may include additional information.
 * 
 *   Note that dynamic routing purposely supports the ability to have more than one UI path active at a time, as it
 *   is NOT a strict URL-style UI router. However, since your code is ultimately responsible for determining what
 *   parts of the active query are rendered, it is possible for this to return routes that are available (in the props
 *   of components) but are not being rendered by your logic. Thus, the return value of this function isn't necessarily
 *   proof that the routes listed are visible to the user.
 * 
 *   WARNING: If you use disconnected roots (via hooks or otherwise), then you must specify a starting component that is
 *   well-connected (graph/state) from which to scan, and will get back paths relative to that `starting-from`
 *   (a component, element, or factory if you're using factory-based dynamic queries).
 */
com.fulcrologic.fulcro.routing.dynamic_routing.active_routes = (function com$fulcrologic$fulcro$routing$dynamic_routing$active_routes(var_args){
var G__45235 = arguments.length;
switch (G__45235) {
case 1:
return com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$2(app__$1,com.fulcrologic.fulcro.application.app_root(app__$1));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,starting_from){
var state_map = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app__$1);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(starting_from,state_map);
var map__45236 = edn_query_language.core.query__GT_ast(query);
var map__45236__$1 = cljs.core.__destructure_map(map__45236);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45236__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.set(active_routes_STAR_(state_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY], null),starting_from,children));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.routing.dynamic_routing.js.map
