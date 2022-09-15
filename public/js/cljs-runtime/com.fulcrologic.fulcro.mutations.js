goog.provide('com.fulcrologic.fulcro.mutations');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__37442){
return cljs.core.map_QMARK_(G__37442);
}),(function (G__37442){
return cljs.core.contains_QMARK_(G__37442,new cljs.core.Keyword(null,"app","app",-560961707));
})], null),(function (G__37442){
return ((cljs.core.map_QMARK_(G__37442)) && (cljs.core.contains_QMARK_(G__37442,new cljs.core.Keyword(null,"app","app",-560961707))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"app","app",-560961707)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),new cljs.core.Symbol("com.fulcrologic.fulcro.raw.components","component-class?","com.fulcrologic.fulcro.raw.components/component-class?",-1477501501,null),com.fulcrologic.fulcro.raw.components.component_class_QMARK_);

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
com.fulcrologic.fulcro.mutations.Mutation = (function (sym){
this.sym = sym;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.fulcrologic.fulcro.mutations.Mutation.prototype.call = (function (unused__11777__auto__){
var self__ = this;
var self__ = this;
var G__37454 = (arguments.length - (1));
switch (G__37454) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(com.fulcrologic.fulcro.mutations.Mutation.prototype.apply = (function (self__,args37452){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37452)));
}));

(com.fulcrologic.fulcro.mutations.Mutation.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var G__37456 = cljs.core.PersistentArrayMap.EMPTY;
return (this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(G__37456) : this$.call(null,G__37456));
}));

(com.fulcrologic.fulcro.mutations.Mutation.prototype.cljs$core$IFn$_invoke$arity$1 = (function (args){
var self__ = this;
var this$ = this;
return (new cljs.core.List(null,self__.sym,(new cljs.core.List(null,args,null,(1),null)),(2),null));
}));

(com.fulcrologic.fulcro.mutations.Mutation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
}));

(com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$type = true);

(com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$ctorStr = "com.fulcrologic.fulcro.mutations/Mutation");

(com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.fulcrologic.fulcro.mutations/Mutation");
}));

/**
 * Positional factory function for com.fulcrologic.fulcro.mutations/Mutation.
 */
com.fulcrologic.fulcro.mutations.__GT_Mutation = (function com$fulcrologic$fulcro$mutations$__GT_Mutation(sym){
return (new com.fulcrologic.fulcro.mutations.Mutation(sym));
});

/**
 * A handler for mutation network results that will place an error, if detected in env, on the data at `ref`.
 *   Errors are placed at `k` (defaults to `::m/mutation-error`).
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Swaps against app state and returns `env`.
 */
com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_ = (function com$fulcrologic$fulcro$mutations$update_errors_on_ui_component_BANG_(var_args){
var G__37466 = arguments.length;
switch (G__37466) {
case 1:
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (env){
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","mutation-error","com.fulcrologic.fulcro.mutations/mutation-error",1667800978));
}));

(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,k){
var map__37470 = env;
var map__37470__$1 = cljs.core.__destructure_map(map__37470);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37470__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37470__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37470__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37470__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_(ref)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
if(cljs.core.truth_((function (){var G__37476 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(env);
return (remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(G__37476) : remote_error_QMARK_.call(null,G__37476));
})())){
return cljs.core.assoc_in(s,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,k),result);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(s,ref,cljs.core.dissoc,k);
}
}));
} else {
}

return env;
}));

(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * When there is a `global-error-action` defined on the application, this function will checks for errors in the given
 *   mutation `env`. If any are found then it will call the global error action function with `env`.
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Always returns `env`.
 */
com.fulcrologic.fulcro.mutations.trigger_global_error_action_BANG_ = (function com$fulcrologic$fulcro$mutations$trigger_global_error_action_BANG_(env){
var map__37483 = env;
var map__37483__$1 = cljs.core.__destructure_map(map__37483);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37483__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37483__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var b2__29246__auto___37783 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"global-error-action","global-error-action",-924822372));
if(cljs.core.truth_(b2__29246__auto___37783)){
var global_error_action_37785 = b2__29246__auto___37783;
var b2__29246__auto___37786__$1 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_(b2__29246__auto___37786__$1)){
var remote_error_QMARK__37792 = b2__29246__auto___37786__$1;
var b2__29246__auto___37793__$2 = (remote_error_QMARK__37792.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK__37792.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK__37792.call(null,result));
if(cljs.core.truth_(b2__29246__auto___37793__$2)){
var __37795 = b2__29246__auto___37793__$2;
(global_error_action_37785.cljs$core$IFn$_invoke$arity$1 ? global_error_action_37785.cljs$core$IFn$_invoke$arity$1(env) : global_error_action_37785.call(null,env));
} else {
}
} else {
}
} else {
}

return env;
});
/**
 * Looks for network mutation result in `env`, checks it against the global definition of remote errors.  If there
 *   is an error and the mutation has defined an `error-action` section, then it calls it; otherwise, if the mutation
 *   has an `ok-action` it calls that.
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Returns env.
 */
com.fulcrologic.fulcro.mutations.dispatch_ok_error_actions_BANG_ = (function com$fulcrologic$fulcro$mutations$dispatch_ok_error_actions_BANG_(env){
var map__37487 = env;
var map__37487__$1 = cljs.core.__destructure_map(map__37487);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37487__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37487__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37487__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__37488 = dispatch;
var map__37488__$1 = cljs.core.__destructure_map(map__37488);
var ok_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37488__$1,new cljs.core.Keyword(null,"ok-action","ok-action",1253795573));
var error_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37488__$1,new cljs.core.Keyword(null,"error-action","error-action",-1147840498));
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK_.call(null,result)))){
if(cljs.core.truth_(error_action)){
(error_action.cljs$core$IFn$_invoke$arity$1 ? error_action.cljs$core$IFn$_invoke$arity$1(env) : error_action.call(null,env));
} else {
}
} else {
if(cljs.core.truth_(ok_action)){
(ok_action.cljs$core$IFn$_invoke$arity$1 ? ok_action.cljs$core$IFn$_invoke$arity$1(env) : ok_action.call(null,env));
} else {
}
}

return env;
});
/**
 * Rewrites tempids in state and places a tempid->realid map into env for further use by the mutation actions.
 */
com.fulcrologic.fulcro.mutations.rewrite_tempids_BANG_ = (function com$fulcrologic$fulcro$mutations$rewrite_tempids_BANG_(env){
var map__37491 = env;
var map__37491__$1 = cljs.core.__destructure_map(map__37491);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37491__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37491__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__37492 = result;
var map__37492__$1 = cljs.core.__destructure_map(map__37492);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37492__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var rid__GT_tid = com.fulcrologic.fulcro.algorithms.tempid.result__GT_tempid__GT_realid(body);
com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids_BANG_(app__$1,body);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"tempid->realid","tempid->realid",1168652437),rid__GT_tid);
});
/**
 * If there is a successful result from the remote mutation in `env` this function will merge it with app state
 *   (if there was a mutation join query), and will also rewrite any tempid remaps that were returned
 *   in all of the possible locations they might be in both app database and runtime application state (e.g. network queues).
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Returns env.
 */
com.fulcrologic.fulcro.mutations.integrate_mutation_return_value_BANG_ = (function com$fulcrologic$fulcro$mutations$integrate_mutation_return_value_BANG_(env){
var map__37494 = env;
var map__37494__$1 = cljs.core.__destructure_map(map__37494);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37494__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37494__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37494__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var mutation_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37494__$1,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891));
var transmitted_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37494__$1,new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690));
var map__37496 = result;
var map__37496__$1 = cljs.core.__destructure_map(map__37496);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37496__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37496__$1,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
var mark_query = (cljs.core.truth_(transmitted_ast)?com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(transmitted_ast):transaction);
var body__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = body;
if(cljs.core.truth_(and__5043__auto__)){
return mark_query;
} else {
return and__5043__auto__;
}
})())?com.fulcrologic.fulcro.algorithms.merge.mark_missing(body,mark_query):body);
var eql = (function (){var or__5045__auto__ = transaction;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var and__5043__auto__ = mutation_ast;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(mutation_ast,true)], null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return mark_query;
}
}
})();
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK_.call(null,result)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins,eql,body__$1);
}

return env;
});
/**
 * The default Fulcro result action for `defmutation`, which can be overridden when you create your `app/fulcro-app`.
 * 
 *   This function is the following composition of operations from this same namespace:
 * 
 * ```
 *   (-> env
 *  (update-errors-on-ui-component! ::mutation-error)
 *  (integrate-mutation-return-value!)
 *  (trigger-global-error-action!)
 *  (dispatch-ok-error-actions!))
 * ```
 * 
 *   This function returns `env`, so it can be used as part of the chain in your own definition of a "default"
 *   mutation result action.
 *   
 */
com.fulcrologic.fulcro.mutations.default_result_action_BANG_ = (function com$fulcrologic$fulcro$mutations$default_result_action_BANG_(env){
return com.fulcrologic.fulcro.mutations.dispatch_ok_error_actions_BANG_(com.fulcrologic.fulcro.mutations.trigger_global_error_action_BANG_(com.fulcrologic.fulcro.mutations.integrate_mutation_return_value_BANG_(com.fulcrologic.fulcro.mutations.rewrite_tempids_BANG_(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","mutation-error","com.fulcrologic.fulcro.mutations/mutation-error",1667800978))))));
});
com.fulcrologic.fulcro.mutations.mutation_declaration_QMARK_ = (function com$fulcrologic$fulcro$mutations$mutation_declaration_QMARK_(expr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.mutations.Mutation,cljs.core.type(expr));
});
/**
 * Return the real symbol (for mutation dispatch) of `mutation`, which can be a symbol (this function is then identity)
 * or a mutation-declaration.
 */
com.fulcrologic.fulcro.mutations.mutation_symbol = (function com$fulcrologic$fulcro$mutations$mutation_symbol(mutation){
if(com.fulcrologic.fulcro.mutations.mutation_declaration_QMARK_(mutation)){
return cljs.core.first((mutation.cljs$core$IFn$_invoke$arity$0 ? mutation.cljs$core$IFn$_invoke$arity$0() : mutation.call(null)));
} else {
return mutation;
}
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.mutations !== 'undefined') && (typeof com.fulcrologic.fulcro.mutations.mutate !== 'undefined')){
} else {
com.fulcrologic.fulcro.mutations.mutate = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37509 = cljs.core.get_global_hierarchy;
return (fexpr__37509.cljs$core$IFn$_invoke$arity$0 ? fexpr__37509.cljs$core$IFn$_invoke$arity$0() : fexpr__37509.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.fulcro.mutations","mutate"),(function (env){
return new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__37516){
var map__37525 = p__37516;
var map__37525__$1 = cljs.core.__destructure_map(map__37525);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37525__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,226,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unknown app state mutation. Have you required the file with your mutations?",new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast),"See https://book.fulcrologic.com/#err-mut-unknown-mutation"], null);
}),null)),null,1399426317,null);
}));
/**
 * Toggle the given boolean `field` on the specified component. It is recommended you use this function only on
 *   UI-related data (e.g. form checkbox checked status) and write clear top-level transactions for anything more complicated.
 */
com.fulcrologic.fulcro.mutations.toggle_BANG_ = (function com$fulcrologic$fulcro$mutations$toggle_BANG_(comp,field){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(comp,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"field","field",-1302436500),null,(1),null)),(new cljs.core.List(null,field,null,(1),null)))))),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Like toggle!, but synchronously refreshes `comp` and nothing else.
 */
com.fulcrologic.fulcro.mutations.toggle_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$toggle_BANG__BANG_(comp,field){
return com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3(comp,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"field","field",-1302436500),null,(1),null)),(new cljs.core.List(null,field,null,(1),null)))))),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Set a raw value on the given `field` of a `component`. It is recommended you use this function only on
 *   UI-related data (e.g. form inputs that are used by the UI, and not persisted data). Changes made via these
 *   helpers are compressed in the history.
 */
com.fulcrologic.fulcro.mutations.set_value_BANG_ = (function com$fulcrologic$fulcro$mutations$set_value_BANG_(component,field,value){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),null,(1),null)),(new cljs.core.List(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Just like set-value!, but synchronously updates `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_value_BANG__BANG_(component,field,value){
return com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),null,(1),null)),(new cljs.core.List(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Helper for set-integer!, use that instead. It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 */
com.fulcrologic.fulcro.mutations.ensure_integer = (function com$fulcrologic$fulcro$mutations$ensure_integer(v){
var rv = parseInt(v);
if(cljs.core.truth_(isNaN(rv))){
return (0);
} else {
return rv;
}
});
/**
 * Set the given integer on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else. Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_integer_BANG_ = (function com$fulcrologic$fulcro$mutations$set_integer_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37847 = arguments.length;
var i__5770__auto___37848 = (0);
while(true){
if((i__5770__auto___37848 < len__5769__auto___37847)){
args__5775__auto__.push((arguments[i__5770__auto___37848]));

var G__37849 = (i__5770__auto___37848 + (1));
i__5770__auto___37848 = G__37849;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__37550){
var map__37551 = p__37550;
var map__37551__$1 = cljs.core.__destructure_map(map__37551);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37551__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37551__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = event;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((function (){var and__5043__auto____$1 = event;
if(cljs.core.truth_(and__5043__auto____$1)){
return value;
} else {
return and__5043__auto____$1;
}
})());
} else {
return and__5043__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_integer((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq37547){
var G__37548 = cljs.core.first(seq37547);
var seq37547__$1 = cljs.core.next(seq37547);
var G__37549 = cljs.core.first(seq37547__$1);
var seq37547__$2 = cljs.core.next(seq37547__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37548,G__37549,seq37547__$2);
}));

/**
 * Just like set-integer!, but synchronously refreshes `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_integer_BANG__BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37850 = arguments.length;
var i__5770__auto___37851 = (0);
while(true){
if((i__5770__auto___37851 < len__5769__auto___37850)){
args__5775__auto__.push((arguments[i__5770__auto___37851]));

var G__37852 = (i__5770__auto___37851 + (1));
i__5770__auto___37851 = G__37852;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__37558){
var map__37560 = p__37558;
var map__37560__$1 = cljs.core.__destructure_map(map__37560);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37560__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37560__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = event;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((function (){var and__5043__auto____$1 = event;
if(cljs.core.truth_(and__5043__auto____$1)){
return value;
} else {
return and__5043__auto____$1;
}
})());
} else {
return and__5043__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_integer((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$lang$applyTo = (function (seq37552){
var G__37553 = cljs.core.first(seq37552);
var seq37552__$1 = cljs.core.next(seq37552);
var G__37554 = cljs.core.first(seq37552__$1);
var seq37552__$2 = cljs.core.next(seq37552__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37553,G__37554,seq37552__$2);
}));

com.fulcrologic.fulcro.mutations.ensure_double = (function com$fulcrologic$fulcro$mutations$ensure_double(v){
var rv = parseFloat(v);
if(cljs.core.truth_(isNaN(rv))){
return (0);
} else {
return rv;
}
});
/**
 * Set the given double on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else. Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_double_BANG_ = (function com$fulcrologic$fulcro$mutations$set_double_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37855 = arguments.length;
var i__5770__auto___37856 = (0);
while(true){
if((i__5770__auto___37856 < len__5769__auto___37855)){
args__5775__auto__.push((arguments[i__5770__auto___37856]));

var G__37857 = (i__5770__auto___37856 + (1));
i__5770__auto___37856 = G__37857;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__37585){
var map__37586 = p__37585;
var map__37586__$1 = cljs.core.__destructure_map(map__37586);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37586__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37586__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = event;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((function (){var and__5043__auto____$1 = event;
if(cljs.core.truth_(and__5043__auto____$1)){
return value;
} else {
return and__5043__auto____$1;
}
})());
} else {
return and__5043__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_double((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$lang$applyTo = (function (seq37572){
var G__37573 = cljs.core.first(seq37572);
var seq37572__$1 = cljs.core.next(seq37572);
var G__37576 = cljs.core.first(seq37572__$1);
var seq37572__$2 = cljs.core.next(seq37572__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37573,G__37576,seq37572__$2);
}));

/**
 * Just like set-double!, but synchronously refreshes `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_double_BANG__BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37864 = arguments.length;
var i__5770__auto___37865 = (0);
while(true){
if((i__5770__auto___37865 < len__5769__auto___37864)){
args__5775__auto__.push((arguments[i__5770__auto___37865]));

var G__37866 = (i__5770__auto___37865 + (1));
i__5770__auto___37865 = G__37866;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__37605){
var map__37606 = p__37605;
var map__37606__$1 = cljs.core.__destructure_map(map__37606);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37606__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37606__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = event;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((function (){var and__5043__auto____$1 = event;
if(cljs.core.truth_(and__5043__auto____$1)){
return value;
} else {
return and__5043__auto____$1;
}
})());
} else {
return and__5043__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_double((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$lang$applyTo = (function (seq37596){
var G__37597 = cljs.core.first(seq37596);
var seq37596__$1 = cljs.core.next(seq37596);
var G__37598 = cljs.core.first(seq37596__$1);
var seq37596__$2 = cljs.core.next(seq37596__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37597,G__37598,seq37596__$2);
}));

/**
 * Set a string on the given `field` of a `component`. The string can be literal via named parameter `:value` or
 *   can be auto-extracted from a UI event using the named parameter `:event`
 * 
 *   Examples
 * 
 *   ```
 *   (set-string! this :ui/name :value "Hello") ; set from literal (or var)
 *   (set-string! this :ui/name :event evt) ; extract from UI event target value
 *   ```
 * 
 *   It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 *   Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_string_BANG_ = (function com$fulcrologic$fulcro$mutations$set_string_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37867 = arguments.length;
var i__5770__auto___37868 = (0);
while(true){
if((i__5770__auto___37868 < len__5769__auto___37867)){
args__5775__auto__.push((arguments[i__5770__auto___37868]));

var G__37869 = (i__5770__auto___37868 + (1));
i__5770__auto___37868 = G__37869;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__37619){
var map__37620 = p__37619;
var map__37620__$1 = cljs.core.__destructure_map(map__37620);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37620__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37620__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = event;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((function (){var and__5043__auto____$1 = event;
if(cljs.core.truth_(and__5043__auto____$1)){
return value;
} else {
return and__5043__auto____$1;
}
})());
} else {
return and__5043__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = (cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value);
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq37609){
var G__37610 = cljs.core.first(seq37609);
var seq37609__$1 = cljs.core.next(seq37609);
var G__37611 = cljs.core.first(seq37609__$1);
var seq37609__$2 = cljs.core.next(seq37609__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37610,G__37611,seq37609__$2);
}));

/**
 * Just like set-string!, but synchronously refreshes `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_string_BANG__BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37872 = arguments.length;
var i__5770__auto___37873 = (0);
while(true){
if((i__5770__auto___37873 < len__5769__auto___37872)){
args__5775__auto__.push((arguments[i__5770__auto___37873]));

var G__37874 = (i__5770__auto___37873 + (1));
i__5770__auto___37873 = G__37874;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__37626){
var map__37629 = p__37626;
var map__37629__$1 = cljs.core.__destructure_map(map__37629);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37629__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37629__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = event;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((function (){var and__5043__auto____$1 = event;
if(cljs.core.truth_(and__5043__auto____$1)){
return value;
} else {
return and__5043__auto____$1;
}
})());
} else {
return and__5043__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = (cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value);
return com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$lang$applyTo = (function (seq37622){
var G__37623 = cljs.core.first(seq37622);
var seq37622__$1 = cljs.core.next(seq37622);
var G__37624 = cljs.core.first(seq37622__$1);
var seq37622__$2 = cljs.core.next(seq37622__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37623,G__37624,seq37622__$2);
}));

/**
 * Indicate the the remote operation will return a value of the given component type.
 * 
 *   `env` - The env of the mutation
 *   `class` - A component class that represents the return type.  You may supply a fully-qualified symbol instead of the
 *   actual class, and this method will look up the class for you (useful to avoid circular references).
 *   `opts` (optional):
 * - `query-params` - Optional parameters to add to the generated query
 * 
 *   Returns an update `env`, and is a valid return value from mutation remote sections.
 */
com.fulcrologic.fulcro.mutations.returning = (function com$fulcrologic$fulcro$mutations$returning(var_args){
var G__37640 = arguments.length;
switch (G__37640) {
case 2:
return com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$2 = (function (env,class$){
return com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$3(env,class$,null);
}));

(com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$3 = (function (env,class$,p__37645){
var map__37646 = p__37645;
var map__37646__$1 = cljs.core.__destructure_map(map__37646);
var opts = map__37646__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37646__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var class$__$1 = (((((class$ instanceof cljs.core.Keyword)) || ((class$ instanceof cljs.core.Symbol))))?com.fulcrologic.fulcro.raw.components.registry_key__GT_class(class$):class$);
var map__37648 = env;
var map__37648__$1 = cljs.core.__destructure_map(map__37648);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37648__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37648__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__37649 = ast;
var map__37649__$1 = cljs.core.__destructure_map(map__37649);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37649__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37649__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37649__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var component_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(class$__$1,cljs.core.deref(state));
var updated_query = (function (){var G__37656 = edn_query_language.core.query__GT_ast(component_query);
var G__37656__$1 = (cljs.core.truth_(query_params)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__37656,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),(0)], null),cljs.core.assoc,new cljs.core.Keyword(null,"params","params",710516235),query_params):G__37656);
var G__37656__$2 = edn_query_language.core.ast__GT_query(G__37656__$1)
;
if(cljs.core.truth_(query)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(G__37656__$2,(function (p1__37638_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(query),p1__37638_SHARP_], 0));
}));
} else {
return G__37656__$2;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),edn_query_language.core.query__GT_ast1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(new cljs.core.List(null,key,(new cljs.core.List(null,params,null,(1),null)),(2),null)),updated_query])], null)));
}));

(com.fulcrologic.fulcro.mutations.returning.cljs$lang$maxFixedArity = 3);

/**
 * Set's a target for the return value from the mutation to be merged into. This can be combined with returning to define
 *   a path to insert the new entry.
 * 
 *   `env` - The mutation env (you can thread together `returning` and `with-target`)
 *   `target` - A vector path, or any special target defined in `data-targeting` such as `append-to`.
 * 
 *   Returns an updated env (which is a valid return value from remote sections of mutations).
 *   
 */
com.fulcrologic.fulcro.mutations.with_target = (function com$fulcrologic$fulcro$mutations$with_target(p__37657,target){
var map__37658 = p__37657;
var map__37658__$1 = cljs.core.__destructure_map(map__37658);
var env = map__37658__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37658__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__37659 = ast;
var map__37659__$1 = cljs.core.__destructure_map(map__37659);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37659__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37659__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37659__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var targeted_query = (cljs.core.truth_(query)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(query,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),target):cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),target], null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),edn_query_language.core.query__GT_ast1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(new cljs.core.List(null,key,(new cljs.core.List(null,params,null,(1),null)),(2),null)),targeted_query])], null)));
});
/**
 * Modify an AST containing a single mutation, changing it's parameters to those given as an argument. Overwrites
 * any existing params of the mutation.
 * 
 * `env` - the mutation environment
 * `params` - A new map to use as the mutations parameters
 * 
 * Returns an updated `env`, which can be used as the return value from a remote section of a mutation.
 */
com.fulcrologic.fulcro.mutations.with_params = (function com$fulcrologic$fulcro$mutations$with_params(env,params){
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235)], null),params);
});
/**
 * Modify the AST in env so that the request is sent such that an alternate low-level XHRIO response type is used.
 *   Only works with HTTP remotes. See goog.net.XhrIO.  Supported response types are :default, :array-buffer,
 *   :text, and :document.
 */
com.fulcrologic.fulcro.mutations.with_response_type = (function com$fulcrologic$fulcro$mutations$with_response_type(env,response_type){
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-type","com.fulcrologic.fulcro.networking.http-remote/response-type",-1295274878)], null),response_type);
});
com.fulcrologic.fulcro.mutations.with_server_side_mutation = (function com$fulcrologic$fulcro$mutations$with_server_side_mutation(env,mutation_symbol){

return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"ast","ast",-860334068),cljs.core.assoc,new cljs.core.Keyword(null,"key","key",-1516042587),mutation_symbol,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mutation_symbol], 0));
});
/**
 * Mutation: A convenience helper, generally used 'bit twiddle' the data on a particular database table (using the component's ident).
 *   Specifically, merge the given `params` into the state of the database object at the component's ident.
 *   In general, it is recommended this be used for ui-only properties that have no real use outside of the component.
 *   
 */
com.fulcrologic.fulcro.mutations.set_props = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$mutations$action(p__37671){
var map__37672 = p__37671;
var map__37672__$1 = cljs.core.__destructure_map(map__37672);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37672__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37672__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__37673_37890 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__37674_37891 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__37674_37891);

try{if((ref == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,517,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m/set-props requires component to have an ident. See https://book.fulcrologic.com/#err-mut-set-props-missing-ident"], null);
}),null)),null,-150567660,null);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,ref,(function (st){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([st,params], 0));
}));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__37673_37890);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__37679 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__37680 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__37680);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__37679);
}})], null);
}));
/**
 * Mutation: A helper method that toggles the true/false nature of a component's state by ident.
 * Use for local UI data only. Use your own mutations for things that have a good abstract meaning. 
 */
com.fulcrologic.fulcro.mutations.toggle = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null),(function (fulcro_mutation_env_symbol){
var map__37681 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__37681__$1 = cljs.core.__destructure_map(map__37681);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37681__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$mutations$action(p__37682){
var map__37683 = p__37682;
var map__37683__$1 = cljs.core.__destructure_map(map__37683);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37683__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37683__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__37684_37896 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__37685_37897 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__37685_37897);

try{if((ref == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,525,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m/toggle requires component to have an ident. See https://book.fulcrologic.com/#err-mut-toggle-missing-ident"], null);
}),null)),null,187919002,null);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field),cljs.core.not);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__37684_37896);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__37687 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__37688 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__37688);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__37687);
}})], null);
}));
/**
 * Run a transaction that will update the given k/v pair in the props of the database. Uses the `current-props` to
 * derive the ident of the database entry. The props must contain an ID key that can be used to derive the ident from
 * the current-props.
 * 
 * For example, `(raw-set-value! app {:person/id 42} :person/name "bob")` would have the effect of a mutation that
 * does an `(assoc-in state-db [:person/id 42 :person/name] "bob")`.
 * 
 */
com.fulcrologic.fulcro.mutations.raw_set_value_BANG_ = (function com$fulcrologic$fulcro$mutations$raw_set_value_BANG_(app__$1,current_props,k,v){
var ik = com.fulcrologic.fulcro.raw.components.id_key(current_props);
var ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ik,cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_props,ik)], null);
if(cljs.core.truth_(cljs.core.some(cljs.core.nil_QMARK_,ident))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,541,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot raw-set-value! because current-props could not be used to derive the ident of the component.",current_props], null);
}),null)),null,276522365,null);
} else {
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37693 = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]);
return (com.fulcrologic.fulcro.mutations.set_props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.mutations.set_props.cljs$core$IFn$_invoke$arity$1(G__37693) : com.fulcrologic.fulcro.mutations.set_props.call(null,G__37693));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ident], null));
}
});
/**
 * Run a transaction that will update the given k/v pair in the props of the database. Uses the `current-props` as the basis
 * for the update, and to find the ident of the target. The `current-props` must contain an ID field that can be used to derive
 * the ident from the passed props.
 * 
 * For example, `(raw-update-value! app {:person/id 42} :person/age inc)` would have the effect of a mutation that
 * does an `(update-in state-db [:person/id 42 :person/age] inc)`.
 * 
 */
com.fulcrologic.fulcro.mutations.raw_update_value_BANG_ = (function com$fulcrologic$fulcro$mutations$raw_update_value_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37902 = arguments.length;
var i__5770__auto___37904 = (0);
while(true){
if((i__5770__auto___37904 < len__5769__auto___37902)){
args__5775__auto__.push((arguments[i__5770__auto___37904]));

var G__37906 = (i__5770__auto___37904 + (1));
i__5770__auto___37904 = G__37906;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.raw_update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.mutations.raw_update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,current_props,k,f,args){
var ik = com.fulcrologic.fulcro.raw.components.id_key(current_props);
var ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ik,cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_props,ik)], null);
var old_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_props,k);
var new_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,old_value,args);
if(cljs.core.truth_(cljs.core.some(cljs.core.nil_QMARK_,ident))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,559,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot raw-update-value! because current-props could not be used to derive the ident of the component.",current_props], null);
}),null)),null,1269396062,null);
} else {
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37699 = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,new_value]);
return (com.fulcrologic.fulcro.mutations.set_props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.mutations.set_props.cljs$core$IFn$_invoke$arity$1(G__37699) : com.fulcrologic.fulcro.mutations.set_props.call(null,G__37699));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ident], null));
}
}));

(com.fulcrologic.fulcro.mutations.raw_update_value_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.raw_update_value_BANG_.cljs$lang$applyTo = (function (seq37694){
var G__37695 = cljs.core.first(seq37694);
var seq37694__$1 = cljs.core.next(seq37694);
var G__37696 = cljs.core.first(seq37694__$1);
var seq37694__$2 = cljs.core.next(seq37694__$1);
var G__37697 = cljs.core.first(seq37694__$2);
var seq37694__$3 = cljs.core.next(seq37694__$2);
var G__37698 = cljs.core.first(seq37694__$3);
var seq37694__$4 = cljs.core.next(seq37694__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37695,G__37696,G__37697,G__37698,seq37694__$4);
}));


//# sourceMappingURL=com.fulcrologic.fulcro.mutations.js.map
