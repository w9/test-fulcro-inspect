goog.provide('app.routing');
app.routing.on_navigate = (function app$routing$on_navigate(p){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$2(app.application.SPA,cljs.core.vec(cljs.core.rest(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p,"/"))));
});
/**
 * When this function returns nil, on-navigate will not run, and clicking events will terminate early.
 */
app.routing.process_token = (function app$routing$process_token(token){
return token;
});
if((typeof app !== 'undefined') && (typeof app.routing !== 'undefined') && (typeof app.routing.history !== 'undefined')){
} else {
app.routing.history = pushy.core.pushy(app.routing.on_navigate,app.routing.process_token);
}
app.routing.start_BANG_ = (function app$routing$start_BANG_(){
return app.routing.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
app.routing.route_to_BANG_ = (function app$routing$route_to_BANG_(route_string){
return app.routing.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,route_string);
});

//# sourceMappingURL=app.routing.js.map
