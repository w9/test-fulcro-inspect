goog.provide('com.fulcrologic.fulcro.react.error_boundaries');
/**
 * A `(fn [react-element exception] what-to-render)`. Called in order to render an alternate for UI segments that have crashed.
 * Defaults to a simple div containing the error header and message as standard HTML elements.
 */
com.fulcrologic.fulcro.react.error_boundaries._STAR_render_error_STAR_ = (function com$fulcrologic$fulcro$react$error_boundaries$_STAR_render_error_STAR_(this$,cause){
return "There was an error.";
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.react !== 'undefined') && (typeof com.fulcrologic.fulcro.react.error_boundaries !== 'undefined') && (typeof com.fulcrologic.fulcro.react.error_boundaries.BodyContainer !== 'undefined')){
} else {
com.fulcrologic.fulcro.react.error_boundaries.BodyContainer = (function com$fulcrologic$fulcro$react$error_boundaries$BodyContainer(js_props__36550__auto__){
var render__36551__auto__ = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.react.error_boundaries.BodyContainer) : com.fulcrologic.fulcro.components.component_options.call(null,com.fulcrologic.fulcro.react.error_boundaries.BodyContainer)));
var vec__37506 = com.fulcrologic.fulcro.components.use_fulcro(js_props__36550__auto__,com.fulcrologic.fulcro.react.error_boundaries.BodyContainer);
var this__36552__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37506,(0),null);
var props__36553__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37506,(1),null);
return (render__36551__auto__.cljs$core$IFn$_invoke$arity$2 ? render__36551__auto__.cljs$core$IFn$_invoke$arity$2(this__36552__auto__,props__36553__auto__) : render__36551__auto__.call(null,this__36552__auto__,props__36553__auto__));
});
}

com.fulcrologic.fulcro.components.add_hook_options_BANG_(com.fulcrologic.fulcro.react.error_boundaries.BodyContainer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"use-hooks?","use-hooks?",-1627537900),true,new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("com.fulcrologic.fulcro.react.error-boundaries","BodyContainer","com.fulcrologic.fulcro.react.error-boundaries/BodyContainer",1372108272),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$fulcro$react$error_boundaries$render_BodyContainer(this$,p__37512){
var map__37515 = p__37512;
var map__37515__$1 = cljs.core.__destructure_map(map__37515);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37515__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37515__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _STAR_app_STAR__orig_val__37517 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__37518 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__37519 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__37520 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__37521 = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__37528 = this$;
var G__37529 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__37528,G__37529) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__37528,G__37529));
}
})();
var _STAR_depth_STAR__temp_val__37522 = ((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__37530 = this$;
var G__37531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$depth"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__37530,G__37531) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__37530,G__37531));
}
})() + (1));
var _STAR_shared_STAR__temp_val__37523 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__37532 = this$;
var G__37533 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__37532,G__37533) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__37532,G__37533));
}
})());
var _STAR_parent_STAR__temp_val__37524 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__37521);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__37522);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__37523);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__37524);

try{var parent__36444__auto__ = parent;
var app__36445__auto__ = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.components.any__GT_app(parent__36444__auto__);
}
})();
var d__36446__auto__ = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (com.fulcrologic.fulcro.components.depth(parent__36444__auto__) + (1));
}
})();
var s__36447__auto__ = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__36445__auto__);
var p__36448__auto__ = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return parent__36444__auto__;
}
})();
var _STAR_app_STAR__orig_val__37536 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__37537 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__37538 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__37539 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__37540 = app__36445__auto__;
var _STAR_depth_STAR__temp_val__37541 = d__36446__auto__;
var _STAR_shared_STAR__temp_val__37542 = s__36447__auto__;
var _STAR_parent_STAR__temp_val__37543 = p__36448__auto__;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__37540);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__37541);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__37542);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__37543);

try{return (render.cljs$core$IFn$_invoke$arity$0 ? render.cljs$core$IFn$_invoke$arity$0() : render.call(null));
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__37539);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__37538);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__37537);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__37536);
}}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__37520);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__37519);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__37518);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__37517);
}}));
})], null));
com.fulcrologic.fulcro.react.error_boundaries.ui_body_container = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.react.error_boundaries.BodyContainer);

var options__36554__auto___37546 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_np,_ns){
return true;
}),new cljs.core.Keyword(null,"getDerivedStateFromError","getDerivedStateFromError",166658477),(function (error){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),true,new cljs.core.Keyword(null,"cause","cause",231901252),error], null);
}),new cljs.core.Keyword(null,"componentDidCatch","componentDidCatch",821717733),(function (_this,error,_info){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.react.error-boundaries",null,31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ex_message(error)], null);
}),null)),null,-10218648,null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$fulcro$react$error_boundaries$render_ErrorBoundary(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__37544 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__37544__$1 = cljs.core.__destructure_map(map__37544);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37544__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37544__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
if(cljs.core.truth_(error)){
return com.fulcrologic.fulcro.react.error_boundaries._STAR_render_error_STAR_.call(null,this$,cause);
} else {
return (com.fulcrologic.fulcro.react.error_boundaries.ui_body_container.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.react.error_boundaries.ui_body_container.cljs$core$IFn$_invoke$arity$1(props) : com.fulcrologic.fulcro.react.error_boundaries.ui_body_container.call(null,props));
}
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.react !== 'undefined') && (typeof com.fulcrologic.fulcro.react.error_boundaries !== 'undefined') && (typeof com.fulcrologic.fulcro.react.error_boundaries.ErrorBoundary !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.fulcro.react.error_boundaries.ErrorBoundary = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__36554__auto___37546,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.fulcro.react.error_boundaries.ErrorBoundary,new cljs.core.Keyword("com.fulcrologic.fulcro.react.error-boundaries","ErrorBoundary","com.fulcrologic.fulcro.react.error-boundaries/ErrorBoundary",-892633009),options__36554__auto___37546);
com.fulcrologic.fulcro.react.error_boundaries.ui_error_boundary = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.react.error_boundaries.ErrorBoundary);

//# sourceMappingURL=com.fulcrologic.fulcro.react.error_boundaries.js.map
