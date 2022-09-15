goog.provide('app.client_main');

var options__27348__auto___30518 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client_main$query_STAR_(_){
return cljs.core.PersistentVector.EMPTY;
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client_main$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client_main$render_Root(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var map__30517 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
var map__30517__$1 = cljs.core.__destructure_map(map__30517);
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"HELLO!"]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client_main !== 'undefined') && (typeof app.client_main.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client_main.Root = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__27348__auto___30518,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client_main.Root,new cljs.core.Keyword("app.client-main","Root","app.client-main/Root",-511155636),options__27348__auto___30518);
app.client_main.refresh_BANG_ = (function app$client_main$refresh_BANG_(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.application.SPA,app.client_main.Root,"app");
});
goog.exportSymbol('app.client_main.refresh_BANG_', app.client_main.refresh_BANG_);
app.client_main.init_BANG_ = (function app$client_main$init_BANG_(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.application.SPA,app.client_main.Root,"app");
});
goog.exportSymbol('app.client_main.init_BANG_', app.client_main.init_BANG_);

//# sourceMappingURL=app.client_main.js.map
