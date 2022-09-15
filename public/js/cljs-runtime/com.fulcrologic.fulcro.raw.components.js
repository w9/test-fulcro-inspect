goog.provide('com.fulcrologic.fulcro.raw.components');
goog.scope(function(){
  com.fulcrologic.fulcro.raw.components.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.raw !== 'undefined') && (typeof com.fulcrologic.fulcro.raw.components !== 'undefined') && (typeof com.fulcrologic.fulcro.raw.components.component_registry !== 'undefined')){
} else {
com.fulcrologic.fulcro.raw.components.component_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_ = null;
/**
 * Like get-in, but for js objects, and in CLJC. In clj, it is just get-in. In cljs it is
 *   gobj/getValueByKeys.
 */
com.fulcrologic.fulcro.raw.components.isoget_in = (function com$fulcrologic$fulcro$raw$components$isoget_in(var_args){
var G__35263 = arguments.length;
switch (G__35263) {
case 2:
return com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,kvs){
return com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$3(obj,kvs,null);
}));

(com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,kvs,default$){
var ks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (k){
var G__35266 = k;
if((G__35266 == null)){
return null;
} else {
return cljs.core.name(G__35266);
}
}),kvs);
var or__5045__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.raw.components.goog$module$goog$object.getValueByKeys,obj,ks);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(com.fulcrologic.fulcro.raw.components.isoget_in.cljs$lang$maxFixedArity = 3);

/**
 * Like get, but for js objects, and in CLJC. In clj, it is just `get`. In cljs it is
 *   `gobj/get`.
 */
com.fulcrologic.fulcro.raw.components.isoget = (function com$fulcrologic$fulcro$raw$components$isoget(var_args){
var G__35270 = arguments.length;
switch (G__35270) {
case 2:
return com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
return com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$3(obj,k,null);
}));

(com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,default$){
var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.goog$module$goog$object.get(obj,(function (){var G__35274 = k;
if((G__35274 == null)){
return null;
} else {
return cljs.core.name(G__35274);
}
})());
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(com.fulcrologic.fulcro.raw.components.isoget.cljs$lang$maxFixedArity = 3);

/**
 * Add a component to Fulcro's component registry.  This is used by defsc to ensure that all Fulcro classes
 *   that have been compiled (transitively required) will be accessible for lookup by fully-qualified symbol/keyword.
 *   Not meant for public use, unless you're creating your own component macro that doesn't directly leverage defsc.
 */
com.fulcrologic.fulcro.raw.components.register_component_BANG_ = (function com$fulcrologic$fulcro$raw$components$register_component_BANG_(k,component_class){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.raw.components.component_registry,cljs.core.assoc,k,component_class);

return component_class;
});
/**
 * Returns whichever of the given Fulcro props were most recently generated according to `denormalization-time`. This
 *   is part of props 'tunnelling', an optimization to get updated props to instances without going through the root.
 */
com.fulcrologic.fulcro.raw.components.newer_props = (function com$fulcrologic$fulcro$raw$components$newer_props(props_a,props_b){
if((props_a == null)){
return props_b;
} else {
if((props_b == null)){
return props_a;
} else {
if(((function (){var or__5045__auto__ = com.fulcrologic.fulcro.algorithms.denormalize.denormalization_time(props_a);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (2);
}
})() > (function (){var or__5045__auto__ = com.fulcrologic.fulcro.algorithms.denormalize.denormalization_time(props_b);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})())){
return props_a;
} else {
return props_b;

}
}
}
});
/**
 * Returns true if the argument is a component. A component is defined as a *mounted component*.
 * This function returns false for component classes, and also returns false for the output of a Fulcro component factory.
 */
com.fulcrologic.fulcro.raw.components.component_instance_QMARK_ = (function com$fulcrologic$fulcro$raw$components$component_instance_QMARK_(x){
if((!((x == null)))){
return com.fulcrologic.fulcro.raw.components.goog$module$goog$object.get(x,"fulcro$isComponent") === true;
} else {
return false;
}
});
/**
 * Attempt to coerce `x` to an app.  Legal inputs are a fulcro application, a mounted component,
 *   or an atom holding any of the above.
 */
com.fulcrologic.fulcro.raw.components.any__GT_app = (function com$fulcrologic$fulcro$raw$components$any__GT_app(x){
var fulcro_app_QMARK_ = (function com$fulcrologic$fulcro$raw$components$any__GT_app_$_fulcro_app_QMARK_(x__$1){
return ((cljs.core.map_QMARK_(x__$1)) && (cljs.core.contains_QMARK_(x__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366))));
});
if(com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(x)){
return com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"fulcro$app","fulcro$app",-1270465306)], null));
} else {
if(cljs.core.truth_(fulcro_app_QMARK_(x))){
return x;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x))){
var G__35289 = cljs.core.deref(x);
return (com.fulcrologic.fulcro.raw.components.any__GT_app.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.any__GT_app.cljs$core$IFn$_invoke$arity$1(G__35289) : com.fulcrologic.fulcro.raw.components.any__GT_app.call(null,G__35289));
} else {
return null;
}
}
}
});
/**
 * Return the global shared properties of the root. See :shared and
 * :shared-fn app options. NOTE: Shared props only update on root render and by explicit calls to
 * `app/update-shared!`.
 * 
 * This version does not rely on the dynamic var *shared*, which is only available from the react-based components ns.
 */
com.fulcrologic.fulcro.raw.components.shared = (function com$fulcrologic$fulcro$raw$components$shared(var_args){
var G__35293 = arguments.length;
switch (G__35293) {
case 1:
return com.fulcrologic.fulcro.raw.components.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.components.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.shared.cljs$core$IFn$_invoke$arity$1 = (function (comp_or_app){
return com.fulcrologic.fulcro.raw.components.shared.cljs$core$IFn$_invoke$arity$2(comp_or_app,cljs.core.PersistentVector.EMPTY);
}));

(com.fulcrologic.fulcro.raw.components.shared.cljs$core$IFn$_invoke$arity$2 = (function (comp_or_app,k_or_ks){
var shared = (function (){var G__35295 = com.fulcrologic.fulcro.raw.components.any__GT_app(comp_or_app);
var G__35295__$1 = (((G__35295 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__35295));
var G__35295__$2 = (((G__35295__$1 == null))?null:cljs.core.deref(G__35295__$1));
if((G__35295__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","shared-props","com.fulcrologic.fulcro.application/shared-props",-554105157).cljs$core$IFn$_invoke$arity$1(G__35295__$2);
}
})();
var ks = (function (){var G__35297 = k_or_ks;
if((!(cljs.core.sequential_QMARK_(k_or_ks)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__35297],null));
} else {
return G__35297;
}
})();
var G__35298 = shared;
if((!(cljs.core.empty_QMARK_(ks)))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__35298,ks);
} else {
return G__35298;
}
}));

(com.fulcrologic.fulcro.raw.components.shared.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the argument is a component instance.
 * 
 * DEPRECATED for terminology clarity. Use `component-instance?` instead.
 */
com.fulcrologic.fulcro.raw.components.component_QMARK_ = com.fulcrologic.fulcro.raw.components.component_instance_QMARK_;
/**
 * Returns true if the argument is a component class.
 */
com.fulcrologic.fulcro.raw.components.component_class_QMARK_ = (function com$fulcrologic$fulcro$raw$components$component_class_QMARK_(x){
return cljs.core.boolean$(com.fulcrologic.fulcro.raw.components.goog$module$goog$object.containsKey(x,"fulcro$class"));
});
/**
 * Returns a string version of the given react component's name. Works on component instances and classes.
 */
com.fulcrologic.fulcro.raw.components.component_name = (function com$fulcrologic$fulcro$raw$components$component_name(class$){
return com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(class$,new cljs.core.Keyword(null,"displayName","displayName",-809144601));
});
/**
 * Returns the registry key for the given component class.
 */
com.fulcrologic.fulcro.raw.components.class__GT_registry_key = (function com$fulcrologic$fulcro$raw$components$class__GT_registry_key(class$){
return com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(class$,new cljs.core.Keyword(null,"fulcro$registryKey","fulcro$registryKey",-155509270));
});
/**
 * Look up the given component in Fulcro's global component registry. Will only be able to find components that have
 *   been (transitively) required by your application.
 * 
 *   `classname` can be a fully-qualified keyword or symbol.
 */
com.fulcrologic.fulcro.raw.components.registry_key__GT_class = (function com$fulcrologic$fulcro$raw$components$registry_key__GT_class(classname){
if((classname instanceof cljs.core.Keyword)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.raw.components.component_registry),classname);
} else {
if((classname instanceof cljs.core.Symbol)){
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(classname),cljs.core.name(classname));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.raw.components.component_registry),k);
} else {
if(((typeof classname === 'string') && (clojure.string.includes_QMARK_(classname,"/")))){
var vec__35300 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(classname,/\//);
var nspc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35300,(0),null);
var nm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35300,(1),null);
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(nspc,nm);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.raw.components.component_registry),k);
} else {
return null;

}
}
}
});
/**
 * Add computed properties to props. This will *replace* any pre-existing computed properties. Computed props are
 *   necessary when a parent component wishes to pass callbacks or other data to children that *have a query*. This
 *   is not necessary for "stateless" components, though it will work properly for both.
 * 
 *   Computed props are "remembered" so that a targeted update (which can only happen on a component with a query
 *   and ident) can use new props from the database without "losing" the computed props that were originally passed
 *   from the parent. If you pass things like callbacks through normal props, then targeted updates will seem to "lose
 *   track of" them.
 *   
 */
com.fulcrologic.fulcro.raw.components.computed = (function com$fulcrologic$fulcro$raw$components$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_(props)){
var G__35303 = props;
if((!(cljs.core.empty_QMARK_(computed_map)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__35303,cljs.core.assoc,new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962),computed_map);
} else {
return G__35303;
}
} else {
var G__35306 = props;
if((!(cljs.core.empty_QMARK_(computed_map)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35306,new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962),computed_map);
} else {
return G__35306;
}
}
}
});
/**
 * Return the computed properties on a component or its props. Note that it requires that the normal properties are not nil.
 */
com.fulcrologic.fulcro.raw.components.get_computed = (function com$fulcrologic$fulcro$raw$components$get_computed(var_args){
var G__35308 = arguments.length;
switch (G__35308) {
case 1:
return com.fulcrologic.fulcro.raw.components.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.components.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return com.fulcrologic.fulcro.raw.components.get_computed.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentVector.EMPTY);
}));

(com.fulcrologic.fulcro.raw.components.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__35310 = x;
if(com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(x)){
return (com.fulcrologic.fulcro.raw.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.props.cljs$core$IFn$_invoke$arity$1(G__35310) : com.fulcrologic.fulcro.raw.components.props.call(null,G__35310));
} else {
return G__35310;
}
})();
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962)], null),(function (){var G__35312 = k_or_ks;
if((!(cljs.core.sequential_QMARK_(k_or_ks)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__35312],null));
} else {
return G__35312;
}
})());
if(cljs.core.vector_QMARK_(props)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(props),ks);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,ks);
}
}
}));

(com.fulcrologic.fulcro.raw.components.get_computed.cljs$lang$maxFixedArity = 2);

/**
 * Return a component's props.
 */
com.fulcrologic.fulcro.raw.components.props = (function com$fulcrologic$fulcro$raw$components$props(component){
var props_from_parent = com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"fulcro$value","fulcro$value",818270554)], null));
var computed_from_parent = com.fulcrologic.fulcro.raw.components.get_computed.cljs$core$IFn$_invoke$arity$1(props_from_parent);
var props_from_updates = com.fulcrologic.fulcro.raw.components.computed(com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"fulcro$value","fulcro$value",818270554)], null)),computed_from_parent);
return com.fulcrologic.fulcro.raw.components.newer_props(props_from_parent,props_from_updates);
});
/**
 * Get the sequence of react children of the given component.
 */
com.fulcrologic.fulcro.raw.components.children = (function com$fulcrologic$fulcro$raw$components$children(component){
var cs = com.fulcrologic.fulcro.raw.components.goog$module$goog$object.getValueByKeys(component,"props","children");
if(((cljs.core.coll_QMARK_(cs)) || (cljs.core.array_QMARK_(cs)))){
return cs;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs], null);
}
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
com.fulcrologic.fulcro.raw.components.component_type = (function com$fulcrologic$fulcro$raw$components$component_type(x){
var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.goog$module$goog$object.get(x,"type");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.type(x);
}
});
/**
 * Returns the react type (component class) of the given React element (instance). Is identity if used on a class.
 */
com.fulcrologic.fulcro.raw.components.get_class = (function com$fulcrologic$fulcro$raw$components$get_class(instance){
return com.fulcrologic.fulcro.raw.components.component_type(instance);
});
/**
 * Returns the map of options that was specified (via `defsc`) for the component class.
 */
com.fulcrologic.fulcro.raw.components.component_options = (function com$fulcrologic$fulcro$raw$components$component_options(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35607 = arguments.length;
var i__5770__auto___35608 = (0);
while(true){
if((i__5770__auto___35608 < len__5769__auto___35607)){
args__5775__auto__.push((arguments[i__5770__auto___35608]));

var G__35609 = (i__5770__auto___35608 + (1));
i__5770__auto___35608 = G__35609;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic = (function (instance_or_class,ks){
var c = com.fulcrologic.fulcro.raw.components.component_type(instance_or_class);
var options = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(instance_or_class,new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811));
}
})();
if(cljs.core.seq(options)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,cljs.core.vec(ks));
} else {
return options;
}
}));

(com.fulcrologic.fulcro.raw.components.component_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.raw.components.component_options.cljs$lang$applyTo = (function (seq35315){
var G__35316 = cljs.core.first(seq35315);
var seq35315__$1 = cljs.core.next(seq35315);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35316,seq35315__$1);
}));

com.fulcrologic.fulcro.raw.components.has_feature_QMARK_ = (function com$fulcrologic$fulcro$raw$components$has_feature_QMARK_(component,option_key){
return cljs.core.contains_QMARK_(com.fulcrologic.fulcro.raw.components.component_options(component),option_key);
});
com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_ = (function com$fulcrologic$fulcro$raw$components$has_initial_app_state_QMARK_(component){
return com.fulcrologic.fulcro.raw.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
});
com.fulcrologic.fulcro.raw.components.has_ident_QMARK_ = (function com$fulcrologic$fulcro$raw$components$has_ident_QMARK_(component){
return com.fulcrologic.fulcro.raw.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"ident","ident",-742346));
});
com.fulcrologic.fulcro.raw.components.has_query_QMARK_ = (function com$fulcrologic$fulcro$raw$components$has_query_QMARK_(component){
return com.fulcrologic.fulcro.raw.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"query","query",-1288509510));
});
com.fulcrologic.fulcro.raw.components.has_pre_merge_QMARK_ = (function com$fulcrologic$fulcro$raw$components$has_pre_merge_QMARK_(component){
return com.fulcrologic.fulcro.raw.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148));
});
com.fulcrologic.fulcro.raw.components.ident = (function com$fulcrologic$fulcro$raw$components$ident(this$,props){
if(com.fulcrologic.fulcro.raw.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"ident","ident",-742346))){
var fexpr__35344 = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ident","ident",-742346)], 0));
return (fexpr__35344.cljs$core$IFn$_invoke$arity$2 ? fexpr__35344.cljs$core$IFn$_invoke$arity$2(this$,props) : fexpr__35344.call(null,this$,props));
} else {
return null;
}
});
com.fulcrologic.fulcro.raw.components.query = (function com$fulcrologic$fulcro$raw$components$query(this$){
if(com.fulcrologic.fulcro.raw.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"query","query",-1288509510))){
var fexpr__35345 = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510)], 0));
return (fexpr__35345.cljs$core$IFn$_invoke$arity$1 ? fexpr__35345.cljs$core$IFn$_invoke$arity$1(this$) : fexpr__35345.call(null,this$));
} else {
return null;
}
});
com.fulcrologic.fulcro.raw.components.initial_state = (function com$fulcrologic$fulcro$raw$components$initial_state(clz,params){
if(com.fulcrologic.fulcro.raw.components.has_feature_QMARK_(clz,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806))){
var fexpr__35346 = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(clz,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806)], 0));
return (fexpr__35346.cljs$core$IFn$_invoke$arity$1 ? fexpr__35346.cljs$core$IFn$_invoke$arity$1(params) : fexpr__35346.call(null,params));
} else {
return null;
}
});
com.fulcrologic.fulcro.raw.components.pre_merge = (function com$fulcrologic$fulcro$raw$components$pre_merge(this$,data){
if(com.fulcrologic.fulcro.raw.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148))){
var fexpr__35349 = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148)], 0));
return (fexpr__35349.cljs$core$IFn$_invoke$arity$1 ? fexpr__35349.cljs$core$IFn$_invoke$arity$1(data) : fexpr__35349.call(null,data));
} else {
return null;
}
});
/**
 * Make a given `render-fn` (a plain fn) act like a a Fulcro component with the given component options map. Registers the
 *   new component in the component-registry. Component options MUST contain :componentName as be a fully-qualified
 *   keyword to name the component in the registry.
 * 
 *   component-options *must* include a unique `:componentName` (keyword) that will be used for registering the given
 *   function as the faux class in the component registry.
 * 
 *   IMPORTANT: In CLJS this function adds extra things to the mutable js fn. In CLJ, components are just maps, and this
 *   side-effect cannot modify it. As such it returns the configured component so you can use it in CLJ.
 */
com.fulcrologic.fulcro.raw.components.configure_anonymous_component_BANG_ = (function com$fulcrologic$fulcro$raw$components$configure_anonymous_component_BANG_(render_fn,component_options){
var k = new cljs.core.Keyword(null,"componentName","componentName",-2103437555).cljs$core$IFn$_invoke$arity$1(component_options);
var faux_classname = (cljs.core.truth_(k)?clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.namespace(k),cljs.core.name(k)], null)):"anonymous");
var result = com.fulcrologic.fulcro.raw.components.goog$module$goog$object.extend(render_fn,({"fulcro$options": component_options, "displayName": faux_classname, "fulcro$class": render_fn, "type": render_fn, "cljs$lang$type": true, "cljs$lang$ctorStr": faux_classname, "cljs$lang$ctorPrWriter": (function (_,writer,___$1){
return cljs.core._write(writer,faux_classname);
}), "fulcro$registryKey": new cljs.core.Keyword(null,"componentName","componentName",-2103437555).cljs$core$IFn$_invoke$arity$1(component_options)}));
if(cljs.core.truth_(k)){
com.fulcrologic.fulcro.raw.components.register_component_BANG_(k,render_fn);
} else {
}

return render_fn;
});
/**
 * Get the declared :initial-state value for a component.
 */
com.fulcrologic.fulcro.raw.components.get_initial_state = (function com$fulcrologic$fulcro$raw$components$get_initial_state(var_args){
var G__35354 = arguments.length;
switch (G__35354) {
case 1:
return com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$1 = (function (class$){
var G__35355 = com.fulcrologic.fulcro.raw.components.initial_state(class$,cljs.core.PersistentArrayMap.EMPTY);
if((G__35355 == null)){
return null;
} else {
return cljs.core.with_meta(G__35355,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"computed","computed",-1482016762),true], null));
}
}));

(com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 = (function (class$,params){
var G__35357 = com.fulcrologic.fulcro.raw.components.initial_state(class$,params);
if((G__35357 == null)){
return null;
} else {
return cljs.core.with_meta(G__35357,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"computed","computed",-1482016762),true], null));
}
}));

(com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$lang$maxFixedArity = 2);

/**
 * Get the ident for a mounted component OR using a component class.
 * 
 *   That arity-2 will return the ident using the supplied props map.
 * 
 *   The single-arity version should only be used with a mounted component (e.g. `this` from `render`), and will derive the
 *   props that were sent to it most recently.
 */
com.fulcrologic.fulcro.raw.components.get_ident = (function com$fulcrologic$fulcro$raw$components$get_ident(var_args){
var G__35362 = arguments.length;
switch (G__35362) {
case 1:
return com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(x)){
} else {
throw (new Error("Assert failed: (component-instance? x)"));
}

var temp__5802__auto__ = com.fulcrologic.fulcro.raw.components.props(x);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
return com.fulcrologic.fulcro.raw.components.ident(x,m);
} else {
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,269,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get-ident was invoked on ",com.fulcrologic.fulcro.raw.components.component_name(x)," with nil props (this could mean it wasn't yet mounted): ",x,"See https://book.fulcrologic.com/#warn-get-ident-with-nil-props"], null);
}),null)),null,-964228467,null);
} else {
return null;
}
}
}));

(com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2 = (function (class$,props){
if(cljs.core.truth_((function (){var and__5043__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5043__auto__)){
return (!(com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(class$)));
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,272,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get-ident called with something that does not implement ident: ",class$,"See https://book.fulcrologic.com/#warn-get-ident-invalid-class"], null);
}),null)),null,-656739724,null);
} else {
}

var temp__5802__auto__ = com.fulcrologic.fulcro.raw.components.ident(class$,props);
if(cljs.core.truth_(temp__5802__auto__)){
var id = temp__5802__auto__;
if(cljs.core.truth_((function (){var and__5043__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5043__auto__)){
return (!(edn_query_language.core.ident_QMARK_(id)));
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,276,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.raw.components.component_name(class$),"get-ident returned invalid ident:",id,"See https://book.fulcrologic.com/#warn-get-ident-invalid-ident"], null);
}),null)),null,1642064791,null);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),cljs.core.second(id))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(id),null], null);
} else {
return id;
}
} else {
return null;
}
}));

(com.fulcrologic.fulcro.raw.components.get_ident.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the given argument is a component factory.
 */
com.fulcrologic.fulcro.raw.components.is_factory_QMARK_ = (function com$fulcrologic$fulcro$raw$components$is_factory_QMARK_(class_or_factory){
return ((cljs.core.fn_QMARK_(class_or_factory)) && (cljs.core.contains_QMARK_(cljs.core.meta(class_or_factory),new cljs.core.Keyword(null,"qualifier","qualifier",125841738))));
});
/**
 * Returns a string ID for the query of the given class with qualifier.
 */
com.fulcrologic.fulcro.raw.components.query_id = (function com$fulcrologic$fulcro$raw$components$query_id(class$,qualifier){
if((class$ == null)){
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.raw.components",null,291,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query ID received no class (if you see this warning, it probably means metadata was lost on your query) See https://book.fulcrologic.com/#err-comp-query-id-no-class",cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY)], null);
}),null)),null,-1336983505,null);
} else {
return null;
}
} else {
var temp__5804__auto__ = com.fulcrologic.fulcro.raw.components.component_name(class$);
if(cljs.core.truth_(temp__5804__auto__)){
var classname = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname),(cljs.core.truth_(qualifier)?["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualifier)].join(''):null)].join('');
} else {
return null;
}
}
});
/**
 * Takes a state map that may contain normalized queries and a query ID. Returns the stored query or nil.
 */
com.fulcrologic.fulcro.raw.components.denormalize_query = (function com$fulcrologic$fulcro$raw$components$denormalize_query(state_map,ID){
var get_stored_query = (function (id){
var map__35375 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),id], null));
var map__35375__$1 = cljs.core.__destructure_map(map__35375);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35375__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var component_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35375__$1,new cljs.core.Keyword(null,"component-key","component-key",1189239034));
var component = com.fulcrologic.fulcro.raw.components.registry_key__GT_class(component_key);
if(cljs.core.truth_(component)){
} else {
cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),id], null));
}

var G__35377 = query;
if((G__35377 == null)){
return null;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(G__35377,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"queryid","queryid",-271432056),id);
}
});
var temp__5804__auto__ = get_stored_query(ID);
if(cljs.core.truth_(temp__5804__auto__)){
var normalized_query = temp__5804__auto__;
return clojure.walk.prewalk((function (ele){
var temp__5802__auto__ = (function (){var and__5043__auto__ = typeof ele === 'string';
if(and__5043__auto__){
return get_stored_query(ele);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var q = temp__5802__auto__;
return q;
} else {
return ele;
}
}),normalized_query);
} else {
return null;
}
});
/**
 * Get the query id that is cached in the component's props.
 */
com.fulcrologic.fulcro.raw.components.get_query_id = (function com$fulcrologic$fulcro$raw$components$get_query_id(component){
return com.fulcrologic.fulcro.raw.components.isoget_in.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),"fulcro$queryid"], null));
});
com.fulcrologic.fulcro.raw.components.get_query_by_id = (function com$fulcrologic$fulcro$raw$components$get_query_by_id(state_map,class$,queryid){
var query = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.denormalize_query(state_map,queryid);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.raw.components.query(class$);
}
})();
return cljs.core.with_meta(query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),class$,new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid], null));
});
/**
 * Get the query for the given class or factory. If called without a state map, then you'll get the declared static
 *   query of the class. If a state map is supplied, then the dynamically set queries in that state will result in
 *   the current dynamically-set query according to that state.
 */
com.fulcrologic.fulcro.raw.components.get_query = (function com$fulcrologic$fulcro$raw$components$get_query(var_args){
var G__35388 = arguments.length;
switch (G__35388) {
case 1:
return com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1 = (function (class_or_factory){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("anonymous",com.fulcrologic.fulcro.raw.components.component_name(class_or_factory))){
return com.fulcrologic.fulcro.raw.components.query(class_or_factory);
} else {
return com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(class_or_factory,com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_);
}
}));

(com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2 = (function (class_or_factory,state_map){
if((class_or_factory == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("nil passed to get-query",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var _STAR_query_state_STAR__orig_val__35389 = com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_;
var _STAR_query_state_STAR__temp_val__35390 = state_map;
(com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_ = _STAR_query_state_STAR__temp_val__35390);

try{var class$ = ((com.fulcrologic.fulcro.raw.components.is_factory_QMARK_(class_or_factory))?new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory)):((com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(class_or_factory))?com.fulcrologic.fulcro.raw.components.component_type(class_or_factory):class_or_factory
));
var class$__$1 = (cljs.core.truth_(goog.DEBUG)?(function (){var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.registry_key__GT_class(com.fulcrologic.fulcro.raw.components.class__GT_registry_key(class$));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return class$;
}
})():class$);
var qualifier = ((com.fulcrologic.fulcro.raw.components.is_factory_QMARK_(class_or_factory))?new cljs.core.Keyword(null,"qualifier","qualifier",125841738).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory)):null);
var queryid = ((com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(class_or_factory))?com.fulcrologic.fulcro.raw.components.get_query_id(class_or_factory):com.fulcrologic.fulcro.raw.components.query_id(class$__$1,qualifier));
if(cljs.core.truth_((function (){var and__5043__auto__ = class$__$1;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.raw.components.has_query_QMARK_(class$__$1);
} else {
return and__5043__auto__;
}
})())){
return com.fulcrologic.fulcro.raw.components.get_query_by_id(state_map,class$__$1,queryid);
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_ = _STAR_query_state_STAR__orig_val__35389);
}}));

(com.fulcrologic.fulcro.raw.components.get_query.cljs$lang$maxFixedArity = 2);

/**
 * Dynamic var that affects the activation of transactions run via `transact!`. Defaults to false. When set to true
 * this option prevents a transaction from running until after the next render is complete. This typically should not be set
 * to true in scenarios where you are unsure if a render will occur, since that could make the transaction appear to
 * "hang".
 */
com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = false;
/**
 * Submit a transaction for processing.
 * 
 *   The underlying transaction system is pluggable, but the *default* supported options are:
 * 
 *   - `:optimistic?` - boolean. Should the transaction be processed optimistically?
 *   - `:ref` - ident. The ident of the component used to submit this transaction. This is set automatically if you use a component to call this function.
 *   - `:component` - React element. Set automatically if you call this function using a component.
 *   - `:refresh` - Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - Vector of idents/keywords.  If the underlying rendering configured algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI.
 *  This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 *   - `:abort-id` - An ID (you make up) that makes it possible (if the plugins you're using support it) to cancel
 *  the network portion of the transaction (assuming it has not already completed).
 *   - `:compressible?` - boolean. Check compressible-transact! docs.
 *   - `:synchronous?` - boolean. When turned on the transaction will run immediately on the calling thread. If run against
 *   a component then the props will be immediately tunneled back to the calling component, allowing for React (raw) input
 *   event handlers to behave as described in standard React Forms docs (uses setState behind the scenes). Any remote operations
 *   will still be queued as normal. Calling `transact!!` is a shorthand for this option. WARNING: ONLY the given component will
 *   be refreshed in the UI. If you have dependent data elsewhere in the UI you must either use `transact!` or schedule
 *   your own global render using `app/schedule-render!`.
 *   - `:after-render?` - Wait until the next render completes before allowing this transaction to run. This can be used
 *   when calling `transact!` from *within* another mutation to ensure that the effects of the current mutation finish
 *   before this transaction takes control of the CPU. This option defaults to `false`, but `defmutation` causes it to
 *   be set to true for any transactions run within mutation action sections. You can affect the default for this value
 *   in a dynamic scope by binding `*after-render*` to true
 *   - `:parallel?` - Boolean. If true, the mutation(s) in the transaction will NOT go into a network queue, nor
 *  will it block later mutations or queries.
 * 
 *   You may add any additional keys to the option map (namespaced is ideal), and any value is legal in the options
 *   map, including functions. The options will appear in the `env` of all mutations run in the transaction as
 *   `:com.fulcrologic.fulcro.algorithms.tx-processing/options`. This is the preferred way of passing things like
 *   lambdas (if you wanted something like a callback) to mutations. Note that mutation symbols are perfectly legal
 *   as mutation *arguments*, so chaining mutations can already be done via the normal transaction mechanism, and
 *   callbacks, while sometimes necessary/useful, should be limited to usages where there is no other clean way
 *   to accomplish the goal.
 * 
 * 
 *   NOTE: This function calls the application's `tx!` function (which is configurable). Fulcro 2 'follow-on reads' are
 *   supported by the default version and are added to the `:refresh` entries. Your choice of rendering algorithm will
 *   influence their necessity.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.raw.components.transact_BANG_ = (function com$fulcrologic$fulcro$raw$components$transact_BANG_(var_args){
var G__35398 = arguments.length;
switch (G__35398) {
case 3:
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_or_component,tx,options){
var temp__5804__auto__ = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_component);
if(cljs.core.truth_(temp__5804__auto__)){
var app__$1 = temp__5804__auto__;
var tx_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"tx!","tx!",-1308106263));
var options__$1 = (function (){var G__35401 = options;
var G__35401__$1 = (((((!(cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"after-render?","after-render?",595994030))))) && (com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ === true)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35401,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),true):G__35401);
var G__35401__$2 = (((((new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(options) == null)) && (com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(app_or_component))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35401__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$1(app_or_component)):G__35401__$1);
if((((new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(options) == null)) && (com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(app_or_component)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35401__$2,new cljs.core.Keyword(null,"component","component",1555936782),app_or_component);
} else {
return G__35401__$2;
}
})();
return (tx_BANG_.cljs$core$IFn$_invoke$arity$3 ? tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,options__$1) : tx_BANG_.call(null,app__$1,tx,options__$1));
} else {
return null;
}
}));

(com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_or_comp,tx){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_or_comp,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Shorthand for exactly `(transact! component tx (merge options {:synchronous? true}))`.
 * 
 *   Runs a synchronous transaction, which is an optimized mode where the optimistic behaviors of the mutations in the
 *   transaction run on the calling thread, and new props are immediately made available to the calling component via
 *   "props tunneling" (a behind-the-scenes mechanism using js/setState).
 * 
 *   This mode is meant to be used in form input event handlers, since React is designed to only work properly with
 *   raw DOM inputs via component-local state. This prevents things like the cursor jumping to the end of inputs
 *   unexpectedly.
 * 
 *   WARNING: Using an `app` instead of a component in synchronous transactions makes no sense. You must pass a component
 *   that has an ident.
 * 
 *   If you're using this, you can also set the compiler option:
 * 
 *   ```
 *   :compiler-options {:external-config {:fulcro     {:wrap-inputs? false}}}
 *   ```
 * 
 *   to turn off Fulcro DOM's generation of wrapped inputs (which try to solve this problem in a less-effective way).
 * 
 *   WARNING: Synchronous rendering does *not* refresh the full UI, only the component.
 *   
 */
com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_ = (function com$fulcrologic$fulcro$raw$components$transact_BANG__BANG_(var_args){
var G__35407 = arguments.length;
switch (G__35407) {
case 2:
return com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,tx){
return com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3(component,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,tx,options){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component,tx,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391),true], null)], 0)));
}));

(com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Part of internal implementation of dynamic queries.
 */
com.fulcrologic.fulcro.raw.components.link_element = (function com$fulcrologic$fulcro$raw$components$link_element(element){
return clojure.walk.prewalk((function com$fulcrologic$fulcro$raw$components$link_element_$_link_element_helper(ele){
var map__35408 = cljs.core.meta(ele);
var map__35408__$1 = cljs.core.__destructure_map(map__35408);
var queryid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35408__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
if(cljs.core.truth_(queryid)){
return queryid;
} else {
return ele;
}
}),element);
});
/**
 * Part of internal implementation of dynamic queries.
 * 
 *   Determines if there are query elements in the `query` that need to be normalized. If so, it does so.
 * 
 *   Returns the new state map containing potentially-updated normalized queries.
 */
com.fulcrologic.fulcro.raw.components.normalize_query_elements = (function com$fulcrologic$fulcro$raw$components$normalize_query_elements(state_map,query){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$raw$components$normalize_query_elements_$_normalize_query_elements_reducer(state,ele){
try{var parameterized_QMARK_ = cljs.core.seq_QMARK_(ele);
var raw_element = ((parameterized_QMARK_)?cljs.core.first(ele):ele);
if(com.fulcrologic.fulcro.algorithms.do_not_use.union_QMARK_(raw_element)){
var union_alternates = cljs.core.first(cljs.core.vals(raw_element));
var union_meta = cljs.core.meta(union_alternates);
var normalized_union_alternates = cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.raw.components.link_element,union_alternates)),union_meta);
var union_query_id = new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(union_alternates));
var union_component_key = com.fulcrologic.fulcro.raw.components.class__GT_registry_key(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(union_alternates)));
if(cljs.core.truth_(union_query_id)){
} else {
throw (new Error(["Assert failed: ","Union query has an ID. Did you use extended get-query?","\n","union-query-id"].join('')));
}

return com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),cljs.core.PersistentArrayMap.createAsIfByAssoc([union_query_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),normalized_union_alternates,new cljs.core.Keyword(null,"component-key","component-key",1189239034),union_component_key,new cljs.core.Keyword(null,"id","id",-1388402092),union_query_id], null)])], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$raw$components$normalize_query_elements_$_normalize_query_elements_reducer_$_normalize_union_reducer(s,p__35413){
var vec__35414 = p__35413;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35414,(0),null);
var subquery = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35414,(1),null);
return (com.fulcrologic.fulcro.raw.components.normalize_query.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.raw.components.normalize_query.cljs$core$IFn$_invoke$arity$2(s,subquery) : com.fulcrologic.fulcro.raw.components.normalize_query.call(null,s,subquery));
}),state,union_alternates)], 0));
} else {
if(((com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(raw_element)) && (com.fulcrologic.fulcro.algorithms.do_not_use.recursion_QMARK_(com.fulcrologic.fulcro.algorithms.do_not_use.join_value(raw_element))))){
return state;
} else {
if(com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(raw_element)){
var G__35419 = state;
var G__35420 = com.fulcrologic.fulcro.algorithms.do_not_use.join_value(raw_element);
return (com.fulcrologic.fulcro.raw.components.normalize_query.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.raw.components.normalize_query.cljs$core$IFn$_invoke$arity$2(G__35419,G__35420) : com.fulcrologic.fulcro.raw.components.normalize_query.call(null,G__35419,G__35420));
} else {
return state;

}
}
}
}catch (e35409){var e = e35409;
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.raw.components",null,485,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Query normalization failed. Perhaps you tried to set a query with a syntax error? See https://book.fulcrologic.com/#err-comp-q-norm-failed"], null);
}),null)),null,-1627487868,null);
} else {
return null;
}
}}),state_map,query);
});
/**
 * Part of dyn query implementation. Find all of the elements (only at the top level) of the given query and replace them
 *   with their query ID.
 */
com.fulcrologic.fulcro.raw.components.link_query = (function com$fulcrologic$fulcro$raw$components$link_query(query){
var metadata = cljs.core.meta(query);
if(cljs.core.map_QMARK_(query)){
return cljs.core.with_meta(taoensso.encore.map_vals((function (ele){
var map__35423 = cljs.core.meta(ele);
var map__35423__$1 = cljs.core.__destructure_map(map__35423);
var queryid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35423__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
return queryid;
}),query),metadata);
} else {
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.raw.components.link_element,query),metadata);
}
});
/**
 * Given a state map and a query, returns a state map with the query normalized into the database. Query fragments
 *   that already appear in the state will not be added.  Part of dynamic query implementation.
 */
com.fulcrologic.fulcro.raw.components.normalize_query = (function com$fulcrologic$fulcro$raw$components$normalize_query(state_map,query){
var queryid = (function (){var G__35426 = query;
var G__35426__$1 = (((G__35426 == null))?null:cljs.core.meta(G__35426));
if((G__35426__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__35426__$1);
}
})();
var component_key = com.fulcrologic.fulcro.raw.components.class__GT_registry_key((function (){var G__35427 = query;
var G__35427__$1 = (((G__35427 == null))?null:cljs.core.meta(G__35427));
if((G__35427__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__35427__$1);
}
})());
var query_SINGLEQUOTE_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(query,cljs.core.dissoc,new cljs.core.Keyword(null,"queryid","queryid",-271432056),new cljs.core.Keyword(null,"component","component",1555936782));
var new_state = com.fulcrologic.fulcro.raw.components.normalize_query_elements(state_map,query_SINGLEQUOTE_);
var new_state__$1 = (((new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452).cljs$core$IFn$_invoke$arity$1(new_state) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),cljs.core.PersistentArrayMap.EMPTY):new_state);
var top_query = com.fulcrologic.fulcro.raw.components.link_query(query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__5043__auto__ = queryid;
if(cljs.core.truth_(and__5043__auto__)){
return component_key;
} else {
return and__5043__auto__;
}
})())){
return com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),cljs.core.PersistentArrayMap.createAsIfByAssoc([queryid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),top_query,new cljs.core.Keyword(null,"id","id",-1388402092),queryid,new cljs.core.Keyword(null,"component-key","component-key",1189239034),component_key], null)])], null),new_state__$1], 0));
} else {
return new_state__$1;
}
});
/**
 * Put a query in app state.
 * 
 *   NOTE: Indexes must be rebuilt after setting a query, so this function should primarily be used to build
 *   up an initial app state.
 */
com.fulcrologic.fulcro.raw.components.set_query_STAR_ = (function com$fulcrologic$fulcro$raw$components$set_query_STAR_(state_map,class_or_factory,p__35429){
var map__35431 = p__35429;
var map__35431__$1 = cljs.core.__destructure_map(map__35431);
var args = map__35431__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35431__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var queryid = (((class_or_factory == null))?null:(cljs.core.truth_((function (){var G__35432 = class_or_factory;
var G__35432__$1 = (((G__35432 == null))?null:cljs.core.meta(G__35432));
if((G__35432__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__35432__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
}
})())?(function (){var G__35433 = class_or_factory;
var G__35433__$1 = (((G__35433 == null))?null:cljs.core.meta(G__35433));
if((G__35433__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__35433__$1);
}
})():com.fulcrologic.fulcro.raw.components.query_id(class_or_factory,null)
));
var component = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return class_or_factory;
}
})();
var setq_STAR_ = (function (state){
return com.fulcrologic.fulcro.raw.components.normalize_query(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),cljs.core.dissoc,queryid),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(query,cljs.core.assoc,new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid,new cljs.core.Keyword(null,"component","component",1555936782),component));
});
if(typeof queryid === 'string'){
var G__35435 = state_map;
if(cljs.core.contains_QMARK_(args,new cljs.core.Keyword(null,"query","query",-1288509510))){
return setq_STAR_(G__35435);
} else {
return G__35435;
}
} else {
if(cljs.core.truth_(goog.DEBUG)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.raw.components",null,541,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Set query failed. There was no query ID. Use a class or factory for the second argument. See https://book.fulcrologic.com/#err-comp-set-q-failed"], null);
}),null)),null,-133172301,null);
} else {
}

return state_map;
}
});
/**
 * Public API for setting a dynamic query on a component. This function alters the query and rebuilds internal indexes.
 * 
 *   * `x` : is anything that any->app accepts.
 *   * `class-or-factory` : A component class or factory for that class (if using query qualifiers)
 *   * `opts` : A map with `query` and optionally `params` (substitutions on queries)
 *   
 */
com.fulcrologic.fulcro.raw.components.set_query_BANG_ = (function com$fulcrologic$fulcro$raw$components$set_query_BANG_(x,class_or_factory,p__35436){
var map__35437 = p__35436;
var map__35437__$1 = cljs.core.__destructure_map(map__35437);
var opts = map__35437__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35437__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35437__$1,new cljs.core.Keyword(null,"params","params",710516235));
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(x);
var state_atom = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var queryid = ((typeof class_or_factory === 'string')?class_or_factory:(cljs.core.truth_((function (){var G__35440 = class_or_factory;
var G__35440__$1 = (((G__35440 == null))?null:cljs.core.meta(G__35440));
if((G__35440__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__35440__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
}
})())?(function (){var G__35443 = class_or_factory;
var G__35443__$1 = (((G__35443 == null))?null:cljs.core.meta(G__35443));
if((G__35443__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__35443__$1);
}
})():com.fulcrologic.fulcro.raw.components.query_id(class_or_factory,null)
));
if(cljs.core.truth_((function (){var and__5043__auto__ = typeof queryid === 'string';
if(and__5043__auto__){
var or__5045__auto__ = query;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return params;
}
} else {
return and__5043__auto__;
}
})())){
var index_root_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-root!","index-root!",-981026266));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,com.fulcrologic.fulcro.raw.components.set_query_STAR_,class_or_factory,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"params","params",710516235),params], null));

if(cljs.core.truth_(index_root_BANG_)){
(index_root_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_root_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : index_root_BANG_.call(null,app__$1));
} else {
}

com.fulcrologic.fulcro.algorithms.do_not_use.dev_check_query(com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(class_or_factory,cljs.core.deref(state_atom)),com.fulcrologic.fulcro.raw.components.component_name);

if(cljs.core.truth_(schedule_render_BANG_)){
var G__35446 = app__$1;
var G__35447 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__35446,G__35447) : schedule_render_BANG_.call(null,G__35446,G__35447));
} else {
return null;
}
} else {
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.raw.components",null,566,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to set query. Invalid arguments. See https://book.fulcrologic.com/#err-comp-unable-set-q"], null);
}),null)),null,1238761339,null);
} else {
return null;
}
}
});
var __set_query_BANG_ = (function com$fulcrologic$fulcro$raw$components$__set_query_BANG_(app__$1,class_or_factory,p__35457){
var map__35458 = p__35457;
var map__35458__$1 = cljs.core.__destructure_map(map__35458);
var params = map__35458__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35458__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_atom = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var queryid = ((typeof class_or_factory === 'string')?class_or_factory:(cljs.core.truth_((function (){var G__35459 = class_or_factory;
var G__35459__$1 = (((G__35459 == null))?null:cljs.core.meta(G__35459));
if((G__35459__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__35459__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
}
})())?(function (){var G__35460 = class_or_factory;
var G__35460__$1 = (((G__35460 == null))?null:cljs.core.meta(G__35460));
if((G__35460__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__35460__$1);
}
})():com.fulcrologic.fulcro.raw.components.query_id(class_or_factory,null)
));
if(cljs.core.truth_((function (){var and__5043__auto__ = typeof queryid === 'string';
if(and__5043__auto__){
var or__5045__auto__ = query;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return params;
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,com.fulcrologic.fulcro.raw.components.set_query_STAR_,class_or_factory,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"params","params",710516235),params], null));
} else {
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.raw.components",null,577,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to set query. Invalid arguments. See https://book.fulcrologic.com/#err-comp-unable-set-q"], null);
}),null)),null,-1318602715,null);
} else {
return null;
}
}
});
/**
 * Refresh the current dynamic queries in app state to reflect any updates to the static queries of the components.
 * 
 *   This can be used at development time to update queries that have changed but that hot code reload does not
 *   reflect (because there is a current saved query in state). This is *not* always what you want, since a component
 *   may have a custom query whose prop-level elements are set to a particular thing on purpose.
 * 
 *   An component that has `:preserve-dynamic-query? true` in its component options will be ignored by
 *   this function.
 */
com.fulcrologic.fulcro.raw.components.refresh_dynamic_queries_BANG_ = (function com$fulcrologic$fulcro$raw$components$refresh_dynamic_queries_BANG_(var_args){
var G__35466 = arguments.length;
switch (G__35466) {
case 3:
return com.fulcrologic.fulcro.raw.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return com.fulcrologic.fulcro.raw.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_ish,cls,force_QMARK_){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_ish);
var preserve_QMARK_ = (function (){var and__5043__auto__ = cljs.core.not(force_QMARK_);
if(and__5043__auto__){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(cls,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"preserve-dynamic-query?","preserve-dynamic-query?",893339297)], 0));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(preserve_QMARK_)){
return null;
} else {
return com.fulcrologic.fulcro.raw.components.set_query_BANG_(app__$1,cls,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(cls,cljs.core.PersistentArrayMap.EMPTY)], null));
}
}));

(com.fulcrologic.fulcro.raw.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app_ish){
var map__35468 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_ish);
var map__35468__$1 = cljs.core.__destructure_map(map__35468);
var app__$1 = map__35468__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35468__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452));
var classnames = cljs.core.keys(queries);
var seq__35470_35666 = cljs.core.seq(classnames);
var chunk__35472_35667 = null;
var count__35473_35668 = (0);
var i__35474_35669 = (0);
while(true){
if((i__35474_35669 < count__35473_35668)){
var nm_35670 = chunk__35472_35667.cljs$core$IIndexed$_nth$arity$2(null,i__35474_35669);
var cls_35671 = com.fulcrologic.fulcro.raw.components.registry_key__GT_class(nm_35670);
var preserve_QMARK__35672 = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(cls_35671,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"preserve-dynamic-query?","preserve-dynamic-query?",893339297)], 0));
if(cljs.core.truth_(preserve_QMARK__35672)){
} else {
__set_query_BANG_(app__$1,cls_35671,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_35671,cljs.core.PersistentArrayMap.EMPTY)], null));
}


var G__35674 = seq__35470_35666;
var G__35675 = chunk__35472_35667;
var G__35676 = count__35473_35668;
var G__35677 = (i__35474_35669 + (1));
seq__35470_35666 = G__35674;
chunk__35472_35667 = G__35675;
count__35473_35668 = G__35676;
i__35474_35669 = G__35677;
continue;
} else {
var temp__5804__auto___35678 = cljs.core.seq(seq__35470_35666);
if(temp__5804__auto___35678){
var seq__35470_35679__$1 = temp__5804__auto___35678;
if(cljs.core.chunked_seq_QMARK_(seq__35470_35679__$1)){
var c__5568__auto___35682 = cljs.core.chunk_first(seq__35470_35679__$1);
var G__35683 = cljs.core.chunk_rest(seq__35470_35679__$1);
var G__35684 = c__5568__auto___35682;
var G__35685 = cljs.core.count(c__5568__auto___35682);
var G__35686 = (0);
seq__35470_35666 = G__35683;
chunk__35472_35667 = G__35684;
count__35473_35668 = G__35685;
i__35474_35669 = G__35686;
continue;
} else {
var nm_35687 = cljs.core.first(seq__35470_35679__$1);
var cls_35688 = com.fulcrologic.fulcro.raw.components.registry_key__GT_class(nm_35687);
var preserve_QMARK__35689 = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(cls_35688,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"preserve-dynamic-query?","preserve-dynamic-query?",893339297)], 0));
if(cljs.core.truth_(preserve_QMARK__35689)){
} else {
__set_query_BANG_(app__$1,cls_35688,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_35688,cljs.core.PersistentArrayMap.EMPTY)], null));
}


var G__35691 = cljs.core.next(seq__35470_35679__$1);
var G__35692 = null;
var G__35693 = (0);
var G__35694 = (0);
seq__35470_35666 = G__35691;
chunk__35472_35667 = G__35692;
count__35473_35668 = G__35693;
i__35474_35669 = G__35694;
continue;
}
} else {
}
}
break;
}

var index_root_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-root!","index-root!",-981026266));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
if(cljs.core.truth_(index_root_BANG_)){
(index_root_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_root_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : index_root_BANG_.call(null,app__$1));
} else {
}

if(cljs.core.truth_(schedule_render_BANG_)){
var G__35477 = app__$1;
var G__35478 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__35477,G__35478) : schedule_render_BANG_.call(null,G__35477,G__35478));
} else {
return null;
}
}));

(com.fulcrologic.fulcro.raw.components.refresh_dynamic_queries_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Identical to `transact!` with `:compressible? true` option. This means that if more than one
 *   adjacent history transition edge is compressible, only the more recent of the sequence of them is kept. This
 *   is useful for things like form input fields, where storing every keystoke in history is undesirable. This
 *   also compress the transactions in Fulcro Inspect.
 * 
 *   NOTE: history events that trigger remote interactions are not compressible, since they may be needed for
 *   automatic network error recovery handling.
 */
com.fulcrologic.fulcro.raw.components.compressible_transact_BANG_ = (function com$fulcrologic$fulcro$raw$components$compressible_transact_BANG_(var_args){
var G__35480 = arguments.length;
switch (G__35480) {
case 2:
return com.fulcrologic.fulcro.raw.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.raw.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_ish,tx){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
}));

(com.fulcrologic.fulcro.raw.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_ish,ref,tx){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,tx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true,new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null));
}));

(com.fulcrologic.fulcro.raw.components.compressible_transact_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Get any custom external configuration that was added to the app at creation-time.
 */
com.fulcrologic.fulcro.raw.components.external_config = (function com$fulcrologic$fulcro$raw$components$external_config(app_ish,k){
var G__35481 = app_ish;
var G__35481__$1 = (((G__35481 == null))?null:com.fulcrologic.fulcro.raw.components.any__GT_app(G__35481));
if((G__35481__$1 == null)){
return null;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__35481__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684),new cljs.core.Keyword(null,"external-config","external-config",-471423941),k], null));
}
});
/**
 * Walks the complete list of components in the component registry and looks for problems. Used during dev mode to
 * detect common problems that can cause runtime misbehavior.
 */
com.fulcrologic.fulcro.raw.components.check_component_registry_BANG_ = (function com$fulcrologic$fulcro$raw$components$check_component_registry_BANG_(){
if(cljs.core.truth_(goog.DEBUG)){
var components = cljs.core.vals(cljs.core.deref(com.fulcrologic.fulcro.raw.components.component_registry));
var seq__35486 = cljs.core.seq(components);
var chunk__35489 = null;
var count__35490 = (0);
var i__35491 = (0);
while(true){
if((i__35491 < count__35490)){
var c = chunk__35489.cljs$core$IIndexed$_nth$arity$2(null,i__35491);
var map__35550 = com.fulcrologic.fulcro.raw.components.component_options(c);
var map__35550__$1 = cljs.core.__destructure_map(map__35550);
var warnings_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35550__$1,new cljs.core.Keyword("fulcro","warnings?","fulcro/warnings?",1905945094));
if((!(warnings_QMARK_ === false))){
var ident_35702 = (function (){var and__5043__auto__ = com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(c);
if(and__5043__auto__){
return com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(c,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__5043__auto__;
}
})();
var query_35703 = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(c);
var constant_ident_QMARK__35704 = (function (){var and__5043__auto__ = cljs.core.vector_QMARK_(ident_35702);
if(and__5043__auto__){
return cljs.core.second(ident_35702);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = constant_ident_QMARK__35704;
if(cljs.core.truth_(and__5043__auto__)){
return (((!(com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(c)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.fulcro.algorithms.form-state/FormConfig",com.fulcrologic.fulcro.raw.components.component_name(c))));
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,641,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__35486,chunk__35489,count__35490,i__35491,ident_35702,query_35703,constant_ident_QMARK__35704,map__35550,map__35550__$1,warnings_QMARK_,c,components){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component",com.fulcrologic.fulcro.raw.components.component_name(c),"has a constant ident (id in the ident is not nil for empty props),","but it has no initial state. This could cause this component's props to","appear as nil unless you have a mutation or load that connects it to the graph after application startup. See https://book.fulcrologic.com/#warn-constant-ident-no-initial-state"], null);
});})(seq__35486,chunk__35489,count__35490,i__35491,ident_35702,query_35703,constant_ident_QMARK__35704,map__35550,map__35550__$1,warnings_QMARK_,c,components))
,null)),null,-1377220248,null);
} else {
}

var temp__5804__auto___35708 = (function (){var and__5043__auto__ = com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(c);
if(and__5043__auto__){
return com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(c,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto___35708)){
var initial_state_35709 = temp__5804__auto___35708;
if(cljs.core.map_QMARK_(initial_state_35709)){
var initial_keys_35710 = cljs.core.set(cljs.core.keys(initial_state_35709));
var join_map_35711 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (seq__35486,chunk__35489,count__35490,i__35491,initial_keys_35710,initial_state_35709,temp__5804__auto___35708,ident_35702,query_35703,constant_ident_QMARK__35704,map__35550,map__35550__$1,warnings_QMARK_,c,components){
return (function (p1__35483_SHARP_){
var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__35483_SHARP_));
if(and__5043__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__35483_SHARP_));
} else {
return and__5043__auto__;
}
});})(seq__35486,chunk__35489,count__35490,i__35491,initial_keys_35710,initial_state_35709,temp__5804__auto___35708,ident_35702,query_35703,constant_ident_QMARK__35704,map__35550,map__35550__$1,warnings_QMARK_,c,components))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (seq__35486,chunk__35489,count__35490,i__35491,initial_keys_35710,initial_state_35709,temp__5804__auto___35708,ident_35702,query_35703,constant_ident_QMARK__35704,map__35550,map__35550__$1,warnings_QMARK_,c,components){
return (function (p__35551){
var map__35552 = p__35551;
var map__35552__$1 = cljs.core.__destructure_map(map__35552);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35552__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35552__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,component], null);
});})(seq__35486,chunk__35489,count__35490,i__35491,initial_keys_35710,initial_state_35709,temp__5804__auto___35708,ident_35702,query_35703,constant_ident_QMARK__35704,map__35550,map__35550__$1,warnings_QMARK_,c,components))
)),(function (){var G__35553 = query_35703;
var G__35553__$1 = (((G__35553 == null))?null:edn_query_language.core.query__GT_ast(G__35553));
if((G__35553__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__35553__$1);
}
})());
var join_keys_35712 = cljs.core.set(cljs.core.keys(join_map_35711));
var temp__5804__auto___35715__$1 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(join_keys_35712,initial_keys_35710));
if(temp__5804__auto___35715__$1){
var missing_initial_keys_35716 = temp__5804__auto___35715__$1;
var seq__35554_35717 = cljs.core.seq(missing_initial_keys_35716);
var chunk__35556_35718 = null;
var count__35557_35719 = (0);
var i__35558_35720 = (0);
while(true){
if((i__35558_35720 < count__35557_35719)){
var k_35723 = chunk__35556_35718.cljs$core$IIndexed$_nth$arity$2(null,i__35558_35720);
var target_35724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(join_map_35711,k_35723);
if(((com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(target_35724)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.raw.components.component_name(target_35724),"com.fulcrologic.fulcro.algorithms.form-state/FormConfig")))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,658,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__35554_35717,chunk__35556_35718,count__35557_35719,i__35558_35720,seq__35486,chunk__35489,count__35490,i__35491,target_35724,k_35723,missing_initial_keys_35716,temp__5804__auto___35715__$1,initial_keys_35710,join_map_35711,join_keys_35712,initial_state_35709,temp__5804__auto___35708,ident_35702,query_35703,constant_ident_QMARK__35704,map__35550,map__35550__$1,warnings_QMARK_,c,components){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component",com.fulcrologic.fulcro.raw.components.component_name(c),"does not INCLUDE initial state for",com.fulcrologic.fulcro.raw.components.component_name(target_35724),"at join key",k_35723,"; however, ",com.fulcrologic.fulcro.raw.components.component_name(target_35724),"HAS initial state. This probably means your initial state graph is incomplete","and props on",com.fulcrologic.fulcro.raw.components.component_name(target_35724),"will be nil. See https://book.fulcrologic.com/#warn-initial-state-incomplete"], null);
});})(seq__35554_35717,chunk__35556_35718,count__35557_35719,i__35558_35720,seq__35486,chunk__35489,count__35490,i__35491,target_35724,k_35723,missing_initial_keys_35716,temp__5804__auto___35715__$1,initial_keys_35710,join_map_35711,join_keys_35712,initial_state_35709,temp__5804__auto___35708,ident_35702,query_35703,constant_ident_QMARK__35704,map__35550,map__35550__$1,warnings_QMARK_,c,components))
,null)),null,397074931,null);
} else {
}


var G__35732 = seq__35554_35717;
var G__35733 = chunk__35556_35718;
var G__35734 = count__35557_35719;
var G__35735 = (i__35558_35720 + (1));
seq__35554_35717 = G__35732;
chunk__35556_35718 = G__35733;
count__35557_35719 = G__35734;
i__35558_35720 = G__35735;
continue;
} else {
var temp__5804__auto___35736__$2 = cljs.core.seq(seq__35554_35717);
if(temp__5804__auto___35736__$2){
var seq__35554_35737__$1 = temp__5804__auto___35736__$2;
if(cljs.core.chunked_seq_QMARK_(seq__35554_35737__$1)){
var c__5568__auto___35738 = cljs.core.chunk_first(seq__35554_35737__$1);
var G__35740 = cljs.core.chunk_rest(seq__35554_35737__$1);
var G__35741 = c__5568__auto___35738;
var G__35742 = cljs.core.count(c__5568__auto___35738);
var G__35743 = (0);
seq__35554_35717 = G__35740;
chunk__35556_35718 = G__35741;
count__35557_35719 = G__35742;
i__35558_35720 = G__35743;
continue;
} else {
var k_35744 = cljs.core.first(seq__35554_35737__$1);
var target_35745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(join_map_35711,k_35744);
if(((com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(target_35745)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.raw.components.component_name(target_35745),"com.fulcrologic.fulcro.algorithms.form-state/FormConfig")))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,658,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__35554_35717,chunk__35556_35718,count__35557_35719,i__35558_35720,seq__35486,chunk__35489,count__35490,i__35491,target_35745,k_35744,seq__35554_35737__$1,temp__5804__auto___35736__$2,missing_initial_keys_35716,temp__5804__auto___35715__$1,initial_keys_35710,join_map_35711,join_keys_35712,initial_state_35709,temp__5804__auto___35708,ident_35702,query_35703,constant_ident_QMARK__35704,map__35550,map__35550__$1,warnings_QMARK_,c,components){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component",com.fulcrologic.fulcro.raw.components.component_name(c),"does not INCLUDE initial state for",com.fulcrologic.fulcro.raw.components.component_name(target_35745),"at join key",k_35744,"; however, ",com.fulcrologic.fulcro.raw.components.component_name(target_35745),"HAS initial state. This probably means your initial state graph is incomplete","and props on",com.fulcrologic.fulcro.raw.components.component_name(target_35745),"will be nil. See https://book.fulcrologic.com/#warn-initial-state-incomplete"], null);
});})(seq__35554_35717,chunk__35556_35718,count__35557_35719,i__35558_35720,seq__35486,chunk__35489,count__35490,i__35491,target_35745,k_35744,seq__35554_35737__$1,temp__5804__auto___35736__$2,missing_initial_keys_35716,temp__5804__auto___35715__$1,initial_keys_35710,join_map_35711,join_keys_35712,initial_state_35709,temp__5804__auto___35708,ident_35702,query_35703,constant_ident_QMARK__35704,map__35550,map__35550__$1,warnings_QMARK_,c,components))
,null)),null,-1647343653,null);
} else {
}


var G__35747 = cljs.core.next(seq__35554_35737__$1);
var G__35748 = null;
var G__35749 = (0);
var G__35750 = (0);
seq__35554_35717 = G__35747;
chunk__35556_35718 = G__35748;
count__35557_35719 = G__35749;
i__35558_35720 = G__35750;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}
} else {
}


var G__35751 = seq__35486;
var G__35752 = chunk__35489;
var G__35753 = count__35490;
var G__35754 = (i__35491 + (1));
seq__35486 = G__35751;
chunk__35489 = G__35752;
count__35490 = G__35753;
i__35491 = G__35754;
continue;
} else {
var G__35755 = seq__35486;
var G__35756 = chunk__35489;
var G__35757 = count__35490;
var G__35758 = (i__35491 + (1));
seq__35486 = G__35755;
chunk__35489 = G__35756;
count__35490 = G__35757;
i__35491 = G__35758;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35486);
if(temp__5804__auto__){
var seq__35486__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35486__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35486__$1);
var G__35759 = cljs.core.chunk_rest(seq__35486__$1);
var G__35760 = c__5568__auto__;
var G__35761 = cljs.core.count(c__5568__auto__);
var G__35762 = (0);
seq__35486 = G__35759;
chunk__35489 = G__35760;
count__35490 = G__35761;
i__35491 = G__35762;
continue;
} else {
var c = cljs.core.first(seq__35486__$1);
var map__35560 = com.fulcrologic.fulcro.raw.components.component_options(c);
var map__35560__$1 = cljs.core.__destructure_map(map__35560);
var warnings_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35560__$1,new cljs.core.Keyword("fulcro","warnings?","fulcro/warnings?",1905945094));
if((!(warnings_QMARK_ === false))){
var ident_35767 = (function (){var and__5043__auto__ = com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(c);
if(and__5043__auto__){
return com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(c,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__5043__auto__;
}
})();
var query_35768 = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(c);
var constant_ident_QMARK__35769 = (function (){var and__5043__auto__ = cljs.core.vector_QMARK_(ident_35767);
if(and__5043__auto__){
return cljs.core.second(ident_35767);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = constant_ident_QMARK__35769;
if(cljs.core.truth_(and__5043__auto__)){
return (((!(com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(c)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.fulcro.algorithms.form-state/FormConfig",com.fulcrologic.fulcro.raw.components.component_name(c))));
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,641,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__35486,chunk__35489,count__35490,i__35491,ident_35767,query_35768,constant_ident_QMARK__35769,map__35560,map__35560__$1,warnings_QMARK_,c,seq__35486__$1,temp__5804__auto__,components){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component",com.fulcrologic.fulcro.raw.components.component_name(c),"has a constant ident (id in the ident is not nil for empty props),","but it has no initial state. This could cause this component's props to","appear as nil unless you have a mutation or load that connects it to the graph after application startup. See https://book.fulcrologic.com/#warn-constant-ident-no-initial-state"], null);
});})(seq__35486,chunk__35489,count__35490,i__35491,ident_35767,query_35768,constant_ident_QMARK__35769,map__35560,map__35560__$1,warnings_QMARK_,c,seq__35486__$1,temp__5804__auto__,components))
,null)),null,-1325817774,null);
} else {
}

var temp__5804__auto___35778__$1 = (function (){var and__5043__auto__ = com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(c);
if(and__5043__auto__){
return com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(c,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto___35778__$1)){
var initial_state_35780 = temp__5804__auto___35778__$1;
if(cljs.core.map_QMARK_(initial_state_35780)){
var initial_keys_35781 = cljs.core.set(cljs.core.keys(initial_state_35780));
var join_map_35782 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (seq__35486,chunk__35489,count__35490,i__35491,initial_keys_35781,initial_state_35780,temp__5804__auto___35778__$1,ident_35767,query_35768,constant_ident_QMARK__35769,map__35560,map__35560__$1,warnings_QMARK_,c,seq__35486__$1,temp__5804__auto__,components){
return (function (p1__35483_SHARP_){
var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__35483_SHARP_));
if(and__5043__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__35483_SHARP_));
} else {
return and__5043__auto__;
}
});})(seq__35486,chunk__35489,count__35490,i__35491,initial_keys_35781,initial_state_35780,temp__5804__auto___35778__$1,ident_35767,query_35768,constant_ident_QMARK__35769,map__35560,map__35560__$1,warnings_QMARK_,c,seq__35486__$1,temp__5804__auto__,components))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (seq__35486,chunk__35489,count__35490,i__35491,initial_keys_35781,initial_state_35780,temp__5804__auto___35778__$1,ident_35767,query_35768,constant_ident_QMARK__35769,map__35560,map__35560__$1,warnings_QMARK_,c,seq__35486__$1,temp__5804__auto__,components){
return (function (p__35561){
var map__35562 = p__35561;
var map__35562__$1 = cljs.core.__destructure_map(map__35562);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35562__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35562__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,component], null);
});})(seq__35486,chunk__35489,count__35490,i__35491,initial_keys_35781,initial_state_35780,temp__5804__auto___35778__$1,ident_35767,query_35768,constant_ident_QMARK__35769,map__35560,map__35560__$1,warnings_QMARK_,c,seq__35486__$1,temp__5804__auto__,components))
)),(function (){var G__35563 = query_35768;
var G__35563__$1 = (((G__35563 == null))?null:edn_query_language.core.query__GT_ast(G__35563));
if((G__35563__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__35563__$1);
}
})());
var join_keys_35783 = cljs.core.set(cljs.core.keys(join_map_35782));
var temp__5804__auto___35790__$2 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(join_keys_35783,initial_keys_35781));
if(temp__5804__auto___35790__$2){
var missing_initial_keys_35792 = temp__5804__auto___35790__$2;
var seq__35564_35794 = cljs.core.seq(missing_initial_keys_35792);
var chunk__35566_35795 = null;
var count__35567_35796 = (0);
var i__35568_35797 = (0);
while(true){
if((i__35568_35797 < count__35567_35796)){
var k_35799 = chunk__35566_35795.cljs$core$IIndexed$_nth$arity$2(null,i__35568_35797);
var target_35800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(join_map_35782,k_35799);
if(((com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(target_35800)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.raw.components.component_name(target_35800),"com.fulcrologic.fulcro.algorithms.form-state/FormConfig")))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,658,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__35564_35794,chunk__35566_35795,count__35567_35796,i__35568_35797,seq__35486,chunk__35489,count__35490,i__35491,target_35800,k_35799,missing_initial_keys_35792,temp__5804__auto___35790__$2,initial_keys_35781,join_map_35782,join_keys_35783,initial_state_35780,temp__5804__auto___35778__$1,ident_35767,query_35768,constant_ident_QMARK__35769,map__35560,map__35560__$1,warnings_QMARK_,c,seq__35486__$1,temp__5804__auto__,components){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component",com.fulcrologic.fulcro.raw.components.component_name(c),"does not INCLUDE initial state for",com.fulcrologic.fulcro.raw.components.component_name(target_35800),"at join key",k_35799,"; however, ",com.fulcrologic.fulcro.raw.components.component_name(target_35800),"HAS initial state. This probably means your initial state graph is incomplete","and props on",com.fulcrologic.fulcro.raw.components.component_name(target_35800),"will be nil. See https://book.fulcrologic.com/#warn-initial-state-incomplete"], null);
});})(seq__35564_35794,chunk__35566_35795,count__35567_35796,i__35568_35797,seq__35486,chunk__35489,count__35490,i__35491,target_35800,k_35799,missing_initial_keys_35792,temp__5804__auto___35790__$2,initial_keys_35781,join_map_35782,join_keys_35783,initial_state_35780,temp__5804__auto___35778__$1,ident_35767,query_35768,constant_ident_QMARK__35769,map__35560,map__35560__$1,warnings_QMARK_,c,seq__35486__$1,temp__5804__auto__,components))
,null)),null,-181191532,null);
} else {
}


var G__35802 = seq__35564_35794;
var G__35803 = chunk__35566_35795;
var G__35804 = count__35567_35796;
var G__35805 = (i__35568_35797 + (1));
seq__35564_35794 = G__35802;
chunk__35566_35795 = G__35803;
count__35567_35796 = G__35804;
i__35568_35797 = G__35805;
continue;
} else {
var temp__5804__auto___35806__$3 = cljs.core.seq(seq__35564_35794);
if(temp__5804__auto___35806__$3){
var seq__35564_35807__$1 = temp__5804__auto___35806__$3;
if(cljs.core.chunked_seq_QMARK_(seq__35564_35807__$1)){
var c__5568__auto___35808 = cljs.core.chunk_first(seq__35564_35807__$1);
var G__35809 = cljs.core.chunk_rest(seq__35564_35807__$1);
var G__35810 = c__5568__auto___35808;
var G__35811 = cljs.core.count(c__5568__auto___35808);
var G__35812 = (0);
seq__35564_35794 = G__35809;
chunk__35566_35795 = G__35810;
count__35567_35796 = G__35811;
i__35568_35797 = G__35812;
continue;
} else {
var k_35813 = cljs.core.first(seq__35564_35807__$1);
var target_35814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(join_map_35782,k_35813);
if(((com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(target_35814)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.raw.components.component_name(target_35814),"com.fulcrologic.fulcro.algorithms.form-state/FormConfig")))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.raw.components",null,658,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__35564_35794,chunk__35566_35795,count__35567_35796,i__35568_35797,seq__35486,chunk__35489,count__35490,i__35491,target_35814,k_35813,seq__35564_35807__$1,temp__5804__auto___35806__$3,missing_initial_keys_35792,temp__5804__auto___35790__$2,initial_keys_35781,join_map_35782,join_keys_35783,initial_state_35780,temp__5804__auto___35778__$1,ident_35767,query_35768,constant_ident_QMARK__35769,map__35560,map__35560__$1,warnings_QMARK_,c,seq__35486__$1,temp__5804__auto__,components){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component",com.fulcrologic.fulcro.raw.components.component_name(c),"does not INCLUDE initial state for",com.fulcrologic.fulcro.raw.components.component_name(target_35814),"at join key",k_35813,"; however, ",com.fulcrologic.fulcro.raw.components.component_name(target_35814),"HAS initial state. This probably means your initial state graph is incomplete","and props on",com.fulcrologic.fulcro.raw.components.component_name(target_35814),"will be nil. See https://book.fulcrologic.com/#warn-initial-state-incomplete"], null);
});})(seq__35564_35794,chunk__35566_35795,count__35567_35796,i__35568_35797,seq__35486,chunk__35489,count__35490,i__35491,target_35814,k_35813,seq__35564_35807__$1,temp__5804__auto___35806__$3,missing_initial_keys_35792,temp__5804__auto___35790__$2,initial_keys_35781,join_map_35782,join_keys_35783,initial_state_35780,temp__5804__auto___35778__$1,ident_35767,query_35768,constant_ident_QMARK__35769,map__35560,map__35560__$1,warnings_QMARK_,c,seq__35486__$1,temp__5804__auto__,components))
,null)),null,1066188951,null);
} else {
}


var G__35816 = cljs.core.next(seq__35564_35807__$1);
var G__35817 = null;
var G__35818 = (0);
var G__35819 = (0);
seq__35564_35794 = G__35816;
chunk__35566_35795 = G__35817;
count__35567_35796 = G__35818;
i__35568_35797 = G__35819;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}
} else {
}


var G__35820 = cljs.core.next(seq__35486__$1);
var G__35821 = null;
var G__35822 = (0);
var G__35823 = (0);
seq__35486 = G__35820;
chunk__35489 = G__35821;
count__35490 = G__35822;
i__35491 = G__35823;
continue;
} else {
var G__35825 = cljs.core.next(seq__35486__$1);
var G__35826 = null;
var G__35827 = (0);
var G__35828 = (0);
seq__35486 = G__35825;
chunk__35489 = G__35826;
count__35490 = G__35827;
i__35491 = G__35828;
continue;
}
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
/**
 * Returns the keyword of the most likely ID attribute in the given props (the first one with the `name` "id").
 *   Returns nil if there isn't one. This is useful when trying to derive an ident from a sample tree of data, for example.
 */
com.fulcrologic.fulcro.raw.components.id_key = (function com$fulcrologic$fulcro$raw$components$id_key(props){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35570_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("id",cljs.core.name(p1__35570_SHARP_));
}),cljs.core.keys(props)));
});
/**
 * Returns the first child from a list of EQL AST nodes that looks like an entity ID key.
 */
com.fulcrologic.fulcro.raw.components.ast_id_key = (function com$fulcrologic$fulcro$raw$components$ast_id_key(children){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__35571){
var map__35572 = p__35571;
var map__35572__$1 = cljs.core.__destructure_map(map__35572);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35572__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35572__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return (((key instanceof cljs.core.Keyword)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prop","prop",-515168332),type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("id",cljs.core.name(key))))));
}),children)));
});
com.fulcrologic.fulcro.raw.components.normalize_STAR_ = (function com$fulcrologic$fulcro$raw$components$normalize_STAR_(p__35573,p__35574){
var map__35575 = p__35573;
var map__35575__$1 = cljs.core.__destructure_map(map__35575);
var original_node = map__35575__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35575__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35575__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__35576 = p__35574;
var map__35576__$1 = cljs.core.__destructure_map(map__35576);
var top_component_options = map__35576__$1;
var componentName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35576__$1,new cljs.core.Keyword(null,"componentName","componentName",-2103437555));
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35576__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var qatom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var component = (function() { 
var G__35831__delegate = function (args){
return null;
};
var G__35831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35832__i = 0, G__35832__a = new Array(arguments.length -  0);
while (G__35832__i < G__35832__a.length) {G__35832__a[G__35832__i] = arguments[G__35832__i + 0]; ++G__35832__i;}
  args = new cljs.core.IndexedSeq(G__35832__a,0,null);
} 
return G__35831__delegate.call(this,args);};
G__35831.cljs$lang$maxFixedArity = 0;
G__35831.cljs$lang$applyTo = (function (arglist__35833){
var args = cljs.core.seq(arglist__35833);
return G__35831__delegate(args);
});
G__35831.cljs$core$IFn$_invoke$arity$variadic = G__35831__delegate;
return G__35831;
})()
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),type)){
var component_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35577){
var map__35578 = p__35577;
var map__35578__$1 = cljs.core.__destructure_map(map__35578);
var c = map__35578__$1;
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35578__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35578__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var component__$2 = (function (){var or__5045__auto__ = component__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1((function (){var G__35579 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453));
var G__35580 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.raw.components.normalize_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.raw.components.normalize_STAR_.cljs$core$IFn$_invoke$arity$2(G__35579,G__35580) : com.fulcrologic.fulcro.raw.components.normalize_STAR_.call(null,G__35579,G__35580));
})());
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,component__$2], null);
}),children));
var union_keys = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"union-key","union-key",1529707234)),children);
var component__$1 = com.fulcrologic.fulcro.raw.components.configure_anonymous_component_BANG_(component,(function (){var G__35581 = cljs.core.with_meta(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function() { 
var G__35838__delegate = function (args){
return cljs.core.PersistentArrayMap.EMPTY;
};
var G__35838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35839__i = 0, G__35839__a = new Array(arguments.length -  0);
while (G__35839__i < G__35839__a.length) {G__35839__a[G__35839__i] = arguments[G__35839__i + 0]; ++G__35839__i;}
  args = new cljs.core.IndexedSeq(G__35839__a,0,null);
} 
return G__35838__delegate.call(this,args);};
G__35838.cljs$lang$maxFixedArity = 0;
G__35838.cljs$lang$applyTo = (function (arglist__35840){
var args = cljs.core.seq(arglist__35840);
return G__35838__delegate(args);
});
G__35838.cljs$core$IFn$_invoke$arity$variadic = G__35838__delegate;
return G__35838;
})()
,new cljs.core.Keyword("fulcro","warnings?","fulcro/warnings?",1905945094),false], null),top_component_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function() { 
var G__35842__delegate = function (args){
return taoensso.encore.map_vals(com.fulcrologic.fulcro.raw.components.get_query,component_map);
};
var G__35842 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35844__i = 0, G__35844__a = new Array(arguments.length -  0);
while (G__35844__i < G__35844__a.length) {G__35844__a[G__35844__i] = arguments[G__35844__i + 0]; ++G__35844__i;}
  args = new cljs.core.IndexedSeq(G__35844__a,0,null);
} 
return G__35842__delegate.call(this,args);};
G__35842.cljs$lang$maxFixedArity = 0;
G__35842.cljs$lang$applyTo = (function (arglist__35845){
var args = cljs.core.seq(arglist__35845);
return G__35842__delegate(args);
});
G__35842.cljs$core$IFn$_invoke$arity$variadic = G__35842__delegate;
return G__35842;
})()
,"props",new cljs.core.PersistentArrayMap(null, 1, ["fulcro$queryid",new cljs.core.Keyword(null,"anonymous","anonymous",447897231)], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-id","query-id",1474128842),new cljs.core.Keyword(null,"anonymous","anonymous",447897231)], null));
var G__35581__$1 = ((cljs.core.not(ident))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35581,new cljs.core.Keyword(null,"ident","ident",-742346),(function (this$,props){
var temp__5804__auto__ = (union_keys.cljs$core$IFn$_invoke$arity$1 ? union_keys.cljs$core$IFn$_invoke$arity$1(props) : union_keys.call(null,props));
if(cljs.core.truth_(temp__5804__auto__)){
var k = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k)], null);
} else {
return null;
}
})):G__35581);
if(cljs.core.truth_(componentName)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35581__$1,new cljs.core.Keyword(null,"componentName","componentName",-2103437555),componentName);
} else {
return G__35581__$1;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original_node,new cljs.core.Keyword(null,"component","component",1555936782),component__$1);
} else {
var real_id_key = com.fulcrologic.fulcro.raw.components.ast_id_key(children);
var new_children = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__35582){
var map__35583 = p__35582;
var map__35583__$1 = cljs.core.__destructure_map(map__35583);
var node = map__35583__$1;
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35583__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,new cljs.core.Keyword(null,"join","join",-758861890))) && (cljs.core.not(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(node))))){
var G__35584 = node;
var G__35585 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.raw.components.normalize_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.raw.components.normalize_STAR_.cljs$core$IFn$_invoke$arity$2(G__35584,G__35585) : com.fulcrologic.fulcro.raw.components.normalize_STAR_.call(null,G__35584,G__35585));
} else {
return node;
}
}),children);
var component__$1 = com.fulcrologic.fulcro.raw.components.configure_anonymous_component_BANG_(component,(function (){var G__35586 = cljs.core.with_meta(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function() { 
var G__35852__delegate = function (args){
return cljs.core.PersistentArrayMap.EMPTY;
};
var G__35852 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35853__i = 0, G__35853__a = new Array(arguments.length -  0);
while (G__35853__i < G__35853__a.length) {G__35853__a[G__35853__i] = arguments[G__35853__i + 0]; ++G__35853__i;}
  args = new cljs.core.IndexedSeq(G__35853__a,0,null);
} 
return G__35852__delegate.call(this,args);};
G__35852.cljs$lang$maxFixedArity = 0;
G__35852.cljs$lang$applyTo = (function (arglist__35854){
var args = cljs.core.seq(arglist__35854);
return G__35852__delegate(args);
});
G__35852.cljs$core$IFn$_invoke$arity$variadic = G__35852__delegate;
return G__35852;
})()
,new cljs.core.Keyword("fulcro","warnings?","fulcro/warnings?",1905945094),false], null),top_component_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function() { 
var G__35855__delegate = function (args){
return cljs.core.deref(qatom);
};
var G__35855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35856__i = 0, G__35856__a = new Array(arguments.length -  0);
while (G__35856__i < G__35856__a.length) {G__35856__a[G__35856__i] = arguments[G__35856__i + 0]; ++G__35856__i;}
  args = new cljs.core.IndexedSeq(G__35856__a,0,null);
} 
return G__35855__delegate.call(this,args);};
G__35855.cljs$lang$maxFixedArity = 0;
G__35855.cljs$lang$applyTo = (function (arglist__35857){
var args = cljs.core.seq(arglist__35857);
return G__35855__delegate(args);
});
G__35855.cljs$core$IFn$_invoke$arity$variadic = G__35855__delegate;
return G__35855;
})()
,"props",new cljs.core.PersistentArrayMap(null, 1, ["fulcro$queryid",new cljs.core.Keyword(null,"anonymous","anonymous",447897231)], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-id","query-id",1474128842),new cljs.core.Keyword(null,"anonymous","anonymous",447897231)], null));
var G__35586__$1 = (cljs.core.truth_(componentName)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35586,new cljs.core.Keyword(null,"componentName","componentName",-2103437555),componentName):G__35586);
if(cljs.core.truth_((function (){var and__5043__auto__ = real_id_key;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.contains_QMARK_(top_component_options,new cljs.core.Keyword(null,"ident","ident",-742346))));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35586__$1,new cljs.core.Keyword(null,"ident","ident",-742346),(function (_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_id_key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,real_id_key)], null);
}));
} else {
return G__35586__$1;
}
})());
var updated_node = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(original_node,new cljs.core.Keyword(null,"children","children",-940561982),new_children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),component__$1], 0));
var query = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"join","join",-758861890)))?edn_query_language.core.ast__GT_query(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(updated_node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453))):edn_query_language.core.ast__GT_query(updated_node));
var _ = cljs.core.reset_BANG_(qatom,query);
return updated_node;
}
});
/**
 * Create an anonymous normalizing query component. By default the normalization will be auto-detected based on there being a prop at each
 * entity level that has (any) namespace, and a name of `id`. For example:
 * 
 * ```
 * [:list/id :list/name {:list/items [:item/id :item/complete? :item/label]}]
 * ```
 * 
 * will create a normalizing query that expects the top-level values to be normalized by `:list/id` and the nested
 * items to be normalized by `:item/id`. If there is more than one ID in your props, make sure the *first* one is
 * the one to use for normalization.
 * 
 * The `top-component-options` becomes the options map of the component.
 * 
 * You can include :componentName to push the resulting anonymous component definition into the component registry, which
 * is needed by some parts of Fulcro, like UISM.
 * 
 * NOTE: `nc` is recursive, and *does* compose if you want to name the components at various levels. It can be used with queries from
 * other defsc components:
 * 
 * ```
 * (def query (nc [:user/id
 *                 :user/name
 *                 ;; Generate an anonymous component that is available in the registry under ::Session
 *                 {:user/session-details (nc [:session/id :session/last-login] {:componentName ::Session})}
 *                 ;; Use a defsc query as the source
 *                 {:user/settings (comp/get-query Settings)}
 *                 ;; Autogenerates an anonymous address query component that has no name
 *                 {:user/address [:address/id :address/street]}]))
 * ```
 * 
 */
com.fulcrologic.fulcro.raw.components.nc = (function com$fulcrologic$fulcro$raw$components$nc(var_args){
var G__35588 = arguments.length;
switch (G__35588) {
case 1:
return com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$1 = (function (query){
return com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$2(query,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$2 = (function (query,p__35589){
var map__35590 = p__35589;
var map__35590__$1 = cljs.core.__destructure_map(map__35590);
var top_component_options = map__35590__$1;
var componentName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35590__$1,new cljs.core.Keyword(null,"componentName","componentName",-2103437555));
if(cljs.core.map_QMARK_(query)){
var ast = cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),query], null)], null))))));
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.normalize_STAR_(ast,top_component_options));
} else {
var ast = edn_query_language.core.query__GT_ast(query);
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.normalize_STAR_(ast,top_component_options));
}
}));

(com.fulcrologic.fulcro.raw.components.nc.cljs$lang$maxFixedArity = 2);

/**
 * Creates a normalizing component from an entity tree. Every sub-element of the tree provided will generate an anonymous
 * normalizing component if that element has an ID field. For to-many relations only the first item is used for query/ident
 * generation.
 * 
 * The returned anonymous component will have initial state that matches the provided entity data tree.
 * 
 * This means you can use a sample tree to generate both the initial state for a subtree of your app and the components
 * necessary to do I/O on that tree.
 * 
 * This kind of component will *not* be registered in the component registry unless you pass a :componentName
 * via the top-level-options. A registry entry is necessary for things that
 * require the registry, such as dynamic queries and UI state machines).
 * 
 */
com.fulcrologic.fulcro.raw.components.entity__GT_component = (function com$fulcrologic$fulcro$raw$components$entity__GT_component(var_args){
var G__35592 = arguments.length;
switch (G__35592) {
case 1:
return com.fulcrologic.fulcro.raw.components.entity__GT_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.components.entity__GT_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.entity__GT_component.cljs$core$IFn$_invoke$arity$1 = (function (entity_data_tree){
return com.fulcrologic.fulcro.raw.components.entity__GT_component.cljs$core$IFn$_invoke$arity$2(entity_data_tree,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.raw.components.entity__GT_component.cljs$core$IFn$_invoke$arity$2 = (function (entity_data_tree,top_level_options){
var map__35593 = cljs.core.reduce_kv((function (result,k,v){
if(((cljs.core.vector_QMARK_(v)) && (cljs.core.every_QMARK_(cljs.core.map_QMARK_,v)))){
var c = com.fulcrologic.fulcro.raw.components.entity__GT_component.cljs$core$IFn$_invoke$arity$1(cljs.core.first(v));
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$5(result,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.assoc,k,v),new cljs.core.Keyword(null,"joins","joins",1033962699),cljs.core.assoc,k,com.fulcrologic.fulcro.raw.components.query(c));
} else {
if(cljs.core.map_QMARK_(v)){
var c = com.fulcrologic.fulcro.raw.components.entity__GT_component.cljs$core$IFn$_invoke$arity$1(v);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$5(result,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.assoc,k,v),new cljs.core.Keyword(null,"joins","joins",1033962699),cljs.core.assoc,k,com.fulcrologic.fulcro.raw.components.query(c));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(result,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.assoc,k,v),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.conj,k);

}
}
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"joins","joins",1033962699),cljs.core.PersistentArrayMap.EMPTY], null),entity_data_tree);
var map__35593__$1 = cljs.core.__destructure_map(map__35593);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35593__$1,new cljs.core.Keyword(null,"joins","joins",1033962699));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35593__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35593__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var query = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(attrs),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function com$fulcrologic$fulcro$raw$components$build_subquery_STAR_(p__35594){
var vec__35595 = p__35594;
var join_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595,(0),null);
var subquery = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([join_key,subquery]);
})),joins);
return com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$2(query,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function() { 
var G__35875__delegate = function (args){
return initial_state;
};
var G__35875 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35877__i = 0, G__35877__a = new Array(arguments.length -  0);
while (G__35877__i < G__35877__a.length) {G__35877__a[G__35877__i] = arguments[G__35877__i + 0]; ++G__35877__i;}
  args = new cljs.core.IndexedSeq(G__35877__a,0,null);
} 
return G__35875__delegate.call(this,args);};
G__35875.cljs$lang$maxFixedArity = 0;
G__35875.cljs$lang$applyTo = (function (arglist__35878){
var args = cljs.core.seq(arglist__35878);
return G__35875__delegate(args);
});
G__35875.cljs$core$IFn$_invoke$arity$variadic = G__35875__delegate;
return G__35875;
})()
], null),top_level_options], 0)));
}));

(com.fulcrologic.fulcro.raw.components.entity__GT_component.cljs$lang$maxFixedArity = 2);

var get_subquery_component_STAR_ = (function com$fulcrologic$fulcro$raw$components$get_subquery_component_STAR_(c,ast_nodes,query_path){
while(true){
if(cljs.core.empty_QMARK_(ast_nodes)){
return c;
} else {
var k = cljs.core.first(query_path);
var ks = cljs.core.rest(query_path);
var map__35600 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (c,ast_nodes,query_path,k,ks){
return (function (p1__35598_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__35598_SHARP_));
});})(c,ast_nodes,query_path,k,ks))
,ast_nodes));
var map__35600__$1 = cljs.core.__destructure_map(map__35600);
var node = map__35600__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35600__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35600__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.seq(ks)){
var G__35879 = component;
var G__35880 = children;
var G__35881 = ks;
c = G__35879;
ast_nodes = G__35880;
query_path = G__35881;
continue;
} else {
return component;
}
}
break;
}
});
/**
 * Obtains the normalizing component that is associated with the given query path on the given component.
 * 
 *  For example `(get-subquery-component Person [:person/addresses])` would return the component for
 *  the `:person/addresses` join. If state-map is supplied then dynamic query support is possible; otherwise it
 *  will be the original static query.
 */
com.fulcrologic.fulcro.raw.components.get_subquery_component = (function com$fulcrologic$fulcro$raw$components$get_subquery_component(var_args){
var G__35602 = arguments.length;
switch (G__35602) {
case 2:
return com.fulcrologic.fulcro.raw.components.get_subquery_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.raw.components.get_subquery_component.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.components.get_subquery_component.cljs$core$IFn$_invoke$arity$2 = (function (component,query_path){
return com.fulcrologic.fulcro.raw.components.get_subquery_component.cljs$core$IFn$_invoke$arity$3(component,query_path,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.raw.components.get_subquery_component.cljs$core$IFn$_invoke$arity$3 = (function (component,query_path,state_map){
var query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map);
var ast_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(query));
return get_subquery_component_STAR_(component,ast_nodes,query_path);
}));

(com.fulcrologic.fulcro.raw.components.get_subquery_component.cljs$lang$maxFixedArity = 3);

/**
 * Uses `fdn/traced-db->tree` to get the props of the component at `ident`, and leverages those optimizations to return
 * `prior-props` if they are not stale.
 * 
 * A subsequent call (e.g. on next render frame) of this function with the prior return value (as `prior-props`)
 * thus gives you an efficient non-react replacement for `shouldComponentUpdate`, etc.
 * 
 */
com.fulcrologic.fulcro.raw.components.get_traced_props = (function com$fulcrologic$fulcro$raw$components$get_traced_props(state_map,component,ident,prior_props){
var query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map);
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.denormalize.possibly_stale_QMARK_(state_map,prior_props))){
return com.fulcrologic.fulcro.algorithms.denormalize.traced_db__GT_tree(state_map,ident,query);
} else {
return prior_props;
}
});
/**
 * Returns true if there is already data at a component's `ident`
 */
com.fulcrologic.fulcro.raw.components.has_active_state_QMARK_ = (function com$fulcrologic$fulcro$raw$components$has_active_state_QMARK_(state_map,ident){
var current_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,ident);
return ((cljs.core.map_QMARK_(current_value)) && (cljs.core.seq(current_value)));
});

//# sourceMappingURL=com.fulcrologic.fulcro.raw.components.js.map
