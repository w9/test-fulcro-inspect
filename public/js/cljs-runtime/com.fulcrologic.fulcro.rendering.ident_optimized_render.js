goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__5043__auto__ = c;
if(cljs.core.truth_(and__5043__auto__)){
return ident;
} else {
return and__5043__auto__;
}
})())){
var map__37555 = app__$1;
var map__37555__$1 = cljs.core.__destructure_map(map__37555);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37555__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__5045__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__37556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__37557 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__37556,G__37557) : com.fulcrologic.fulcro.components.computed.call(null,G__37556,G__37557));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,485082623,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__37559 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__37559) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__37559));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,1547551545,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__37561 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__37562 = null;
var count__37563 = (0);
var i__37564 = (0);
while(true){
if((i__37564 < count__37563)){
var c = chunk__37562.cljs$core$IIndexed$_nth$arity$2(null,i__37564);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__37700 = seq__37561;
var G__37701 = chunk__37562;
var G__37702 = count__37563;
var G__37703 = (i__37564 + (1));
seq__37561 = G__37700;
chunk__37562 = G__37701;
count__37563 = G__37702;
i__37564 = G__37703;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37561);
if(temp__5804__auto__){
var seq__37561__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37561__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37561__$1);
var G__37704 = cljs.core.chunk_rest(seq__37561__$1);
var G__37705 = c__5568__auto__;
var G__37706 = cljs.core.count(c__5568__auto__);
var G__37707 = (0);
seq__37561 = G__37704;
chunk__37562 = G__37705;
count__37563 = G__37706;
i__37564 = G__37707;
continue;
} else {
var c = cljs.core.first(seq__37561__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__37708 = cljs.core.next(seq__37561__$1);
var G__37709 = null;
var G__37710 = (0);
var G__37711 = (0);
seq__37561 = G__37708;
chunk__37562 = G__37709;
count__37563 = G__37710;
i__37564 = G__37711;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__37565 = app__$1;
var map__37565__$1 = cljs.core.__destructure_map(map__37565);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37565__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__37566 = cljs.core.deref(runtime_atom);
var map__37566__$1 = cljs.core.__destructure_map(map__37566);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37566__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__37567 = indexes;
var map__37567__$1 = cljs.core.__destructure_map(map__37567);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37567__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37567__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37567__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__37568 = cljs.core.seq(classes);
var chunk__37569 = null;
var count__37570 = (0);
var i__37571 = (0);
while(true){
if((i__37571 < count__37570)){
var class$ = chunk__37569.cljs$core$IIndexed$_nth$arity$2(null,i__37571);
var seq__37599_37712 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__37601_37713 = null;
var count__37602_37714 = (0);
var i__37603_37715 = (0);
while(true){
if((i__37603_37715 < count__37602_37714)){
var component_37716 = chunk__37601_37713.cljs$core$IIndexed$_nth$arity$2(null,i__37603_37715);
var component_ident_37717 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_37716) : com.fulcrologic.fulcro.components.get_ident.call(null,component_37716));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_37717,component_37716);


var G__37718 = seq__37599_37712;
var G__37719 = chunk__37601_37713;
var G__37720 = count__37602_37714;
var G__37721 = (i__37603_37715 + (1));
seq__37599_37712 = G__37718;
chunk__37601_37713 = G__37719;
count__37602_37714 = G__37720;
i__37603_37715 = G__37721;
continue;
} else {
var temp__5804__auto___37722 = cljs.core.seq(seq__37599_37712);
if(temp__5804__auto___37722){
var seq__37599_37723__$1 = temp__5804__auto___37722;
if(cljs.core.chunked_seq_QMARK_(seq__37599_37723__$1)){
var c__5568__auto___37724 = cljs.core.chunk_first(seq__37599_37723__$1);
var G__37725 = cljs.core.chunk_rest(seq__37599_37723__$1);
var G__37726 = c__5568__auto___37724;
var G__37727 = cljs.core.count(c__5568__auto___37724);
var G__37728 = (0);
seq__37599_37712 = G__37725;
chunk__37601_37713 = G__37726;
count__37602_37714 = G__37727;
i__37603_37715 = G__37728;
continue;
} else {
var component_37729 = cljs.core.first(seq__37599_37723__$1);
var component_ident_37730 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_37729) : com.fulcrologic.fulcro.components.get_ident.call(null,component_37729));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_37730,component_37729);


var G__37731 = cljs.core.next(seq__37599_37723__$1);
var G__37732 = null;
var G__37733 = (0);
var G__37734 = (0);
seq__37599_37712 = G__37731;
chunk__37601_37713 = G__37732;
count__37602_37714 = G__37733;
i__37603_37715 = G__37734;
continue;
}
} else {
}
}
break;
}


var G__37735 = seq__37568;
var G__37736 = chunk__37569;
var G__37737 = count__37570;
var G__37738 = (i__37571 + (1));
seq__37568 = G__37735;
chunk__37569 = G__37736;
count__37570 = G__37737;
i__37571 = G__37738;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37568);
if(temp__5804__auto__){
var seq__37568__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37568__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37568__$1);
var G__37739 = cljs.core.chunk_rest(seq__37568__$1);
var G__37740 = c__5568__auto__;
var G__37741 = cljs.core.count(c__5568__auto__);
var G__37742 = (0);
seq__37568 = G__37739;
chunk__37569 = G__37740;
count__37570 = G__37741;
i__37571 = G__37742;
continue;
} else {
var class$ = cljs.core.first(seq__37568__$1);
var seq__37613_37743 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__37615_37744 = null;
var count__37616_37745 = (0);
var i__37617_37746 = (0);
while(true){
if((i__37617_37746 < count__37616_37745)){
var component_37747 = chunk__37615_37744.cljs$core$IIndexed$_nth$arity$2(null,i__37617_37746);
var component_ident_37748 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_37747) : com.fulcrologic.fulcro.components.get_ident.call(null,component_37747));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_37748,component_37747);


var G__37749 = seq__37613_37743;
var G__37750 = chunk__37615_37744;
var G__37751 = count__37616_37745;
var G__37752 = (i__37617_37746 + (1));
seq__37613_37743 = G__37749;
chunk__37615_37744 = G__37750;
count__37616_37745 = G__37751;
i__37617_37746 = G__37752;
continue;
} else {
var temp__5804__auto___37753__$1 = cljs.core.seq(seq__37613_37743);
if(temp__5804__auto___37753__$1){
var seq__37613_37754__$1 = temp__5804__auto___37753__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37613_37754__$1)){
var c__5568__auto___37755 = cljs.core.chunk_first(seq__37613_37754__$1);
var G__37756 = cljs.core.chunk_rest(seq__37613_37754__$1);
var G__37757 = c__5568__auto___37755;
var G__37758 = cljs.core.count(c__5568__auto___37755);
var G__37759 = (0);
seq__37613_37743 = G__37756;
chunk__37615_37744 = G__37757;
count__37616_37745 = G__37758;
i__37617_37746 = G__37759;
continue;
} else {
var component_37760 = cljs.core.first(seq__37613_37754__$1);
var component_ident_37761 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_37760) : com.fulcrologic.fulcro.components.get_ident.call(null,component_37760));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_37761,component_37760);


var G__37762 = cljs.core.next(seq__37613_37754__$1);
var G__37763 = null;
var G__37764 = (0);
var G__37765 = (0);
seq__37613_37743 = G__37762;
chunk__37615_37744 = G__37763;
count__37616_37745 = G__37764;
i__37617_37746 = G__37765;
continue;
}
} else {
}
}
break;
}


var G__37766 = cljs.core.next(seq__37568__$1);
var G__37767 = null;
var G__37768 = (0);
var G__37769 = (0);
seq__37568 = G__37766;
chunk__37569 = G__37767;
count__37570 = G__37768;
i__37571 = G__37769;
continue;
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
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__37633 = app__$1;
var map__37633__$1 = cljs.core.__destructure_map(map__37633);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37633__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__37634 = cljs.core.deref(runtime_atom);
var map__37634__$1 = cljs.core.__destructure_map(map__37634);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37634__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__37635 = indexes;
var map__37635__$1 = cljs.core.__destructure_map(map__37635);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37635__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37635__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__37627_SHARP_,p2__37628_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__37627_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__37628_SHARP_) : class__GT_components.call(null,p2__37628_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__37642 = app__$1;
var map__37642__$1 = cljs.core.__destructure_map(map__37642);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37642__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37642__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__37643 = cljs.core.deref(runtime_atom);
var map__37643__$1 = cljs.core.__destructure_map(map__37643);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37643__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37643__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37643__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37643__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__37644 = indexes;
var map__37644__$1 = cljs.core.__destructure_map(map__37644);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37644__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37644__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37644__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37644__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__37647 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__37647__$1 = cljs.core.__destructure_map(map__37647);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37647__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37647__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__37650_37772 = cljs.core.seq(limited_to_render);
var chunk__37652_37773 = null;
var count__37653_37774 = (0);
var i__37654_37775 = (0);
while(true){
if((i__37654_37775 < count__37653_37774)){
var c_37776 = chunk__37652_37773.cljs$core$IIndexed$_nth$arity$2(null,i__37654_37775);
var ident_37777 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_37776) : com.fulcrologic.fulcro.components.get_ident.call(null,c_37776));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_37777,c_37776);


var G__37778 = seq__37650_37772;
var G__37779 = chunk__37652_37773;
var G__37780 = count__37653_37774;
var G__37781 = (i__37654_37775 + (1));
seq__37650_37772 = G__37778;
chunk__37652_37773 = G__37779;
count__37653_37774 = G__37780;
i__37654_37775 = G__37781;
continue;
} else {
var temp__5804__auto___37782 = cljs.core.seq(seq__37650_37772);
if(temp__5804__auto___37782){
var seq__37650_37784__$1 = temp__5804__auto___37782;
if(cljs.core.chunked_seq_QMARK_(seq__37650_37784__$1)){
var c__5568__auto___37787 = cljs.core.chunk_first(seq__37650_37784__$1);
var G__37788 = cljs.core.chunk_rest(seq__37650_37784__$1);
var G__37789 = c__5568__auto___37787;
var G__37790 = cljs.core.count(c__5568__auto___37787);
var G__37791 = (0);
seq__37650_37772 = G__37788;
chunk__37652_37773 = G__37789;
count__37653_37774 = G__37790;
i__37654_37775 = G__37791;
continue;
} else {
var c_37794 = cljs.core.first(seq__37650_37784__$1);
var ident_37796 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_37794) : com.fulcrologic.fulcro.components.get_ident.call(null,c_37794));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_37796,c_37794);


var G__37797 = cljs.core.next(seq__37650_37784__$1);
var G__37798 = null;
var G__37799 = (0);
var G__37800 = (0);
seq__37650_37772 = G__37797;
chunk__37652_37773 = G__37798;
count__37653_37774 = G__37799;
i__37654_37775 = G__37800;
continue;
}
} else {
}
}
break;
}

var seq__37662 = cljs.core.seq(limited_idents);
var chunk__37663 = null;
var count__37664 = (0);
var i__37665 = (0);
while(true){
if((i__37665 < count__37664)){
var i = chunk__37663.cljs$core$IIndexed$_nth$arity$2(null,i__37665);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__37801 = seq__37662;
var G__37802 = chunk__37663;
var G__37803 = count__37664;
var G__37804 = (i__37665 + (1));
seq__37662 = G__37801;
chunk__37663 = G__37802;
count__37664 = G__37803;
i__37665 = G__37804;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37662);
if(temp__5804__auto__){
var seq__37662__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37662__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37662__$1);
var G__37805 = cljs.core.chunk_rest(seq__37662__$1);
var G__37806 = c__5568__auto__;
var G__37807 = cljs.core.count(c__5568__auto__);
var G__37808 = (0);
seq__37662 = G__37805;
chunk__37663 = G__37806;
count__37664 = G__37807;
i__37665 = G__37808;
continue;
} else {
var i = cljs.core.first(seq__37662__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__37809 = cljs.core.next(seq__37662__$1);
var G__37810 = null;
var G__37811 = (0);
var G__37812 = (0);
seq__37662 = G__37809;
chunk__37663 = G__37810;
count__37664 = G__37811;
i__37665 = G__37812;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__37666 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__37666__$1 = cljs.core.__destructure_map(map__37666);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__37667_37813 = cljs.core.seq(all_idents);
var chunk__37668_37814 = null;
var count__37669_37815 = (0);
var i__37670_37816 = (0);
while(true){
if((i__37670_37816 < count__37669_37815)){
var i_37817 = chunk__37668_37814.cljs$core$IIndexed$_nth$arity$2(null,i__37670_37816);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_37817);


var G__37818 = seq__37667_37813;
var G__37819 = chunk__37668_37814;
var G__37820 = count__37669_37815;
var G__37821 = (i__37670_37816 + (1));
seq__37667_37813 = G__37818;
chunk__37668_37814 = G__37819;
count__37669_37815 = G__37820;
i__37670_37816 = G__37821;
continue;
} else {
var temp__5804__auto___37822 = cljs.core.seq(seq__37667_37813);
if(temp__5804__auto___37822){
var seq__37667_37823__$1 = temp__5804__auto___37822;
if(cljs.core.chunked_seq_QMARK_(seq__37667_37823__$1)){
var c__5568__auto___37824 = cljs.core.chunk_first(seq__37667_37823__$1);
var G__37825 = cljs.core.chunk_rest(seq__37667_37823__$1);
var G__37826 = c__5568__auto___37824;
var G__37827 = cljs.core.count(c__5568__auto___37824);
var G__37828 = (0);
seq__37667_37813 = G__37825;
chunk__37668_37814 = G__37826;
count__37669_37815 = G__37827;
i__37670_37816 = G__37828;
continue;
} else {
var i_37829 = cljs.core.first(seq__37667_37823__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_37829);


var G__37830 = cljs.core.next(seq__37667_37823__$1);
var G__37831 = null;
var G__37832 = (0);
var G__37833 = (0);
seq__37667_37813 = G__37830;
chunk__37668_37814 = G__37831;
count__37669_37815 = G__37832;
i__37670_37816 = G__37833;
continue;
}
} else {
}
}
break;
}

var seq__37675 = cljs.core.seq(extra_to_force);
var chunk__37676 = null;
var count__37677 = (0);
var i__37678 = (0);
while(true){
if((i__37678 < count__37677)){
var c = chunk__37676.cljs$core$IIndexed$_nth$arity$2(null,i__37678);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__37834 = seq__37675;
var G__37835 = chunk__37676;
var G__37836 = count__37677;
var G__37837 = (i__37678 + (1));
seq__37675 = G__37834;
chunk__37676 = G__37835;
count__37677 = G__37836;
i__37678 = G__37837;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37675);
if(temp__5804__auto__){
var seq__37675__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37675__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37675__$1);
var G__37838 = cljs.core.chunk_rest(seq__37675__$1);
var G__37839 = c__5568__auto__;
var G__37840 = cljs.core.count(c__5568__auto__);
var G__37841 = (0);
seq__37675 = G__37838;
chunk__37676 = G__37839;
count__37677 = G__37840;
i__37678 = G__37841;
continue;
} else {
var c = cljs.core.first(seq__37675__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__37842 = cljs.core.next(seq__37675__$1);
var G__37843 = null;
var G__37844 = (0);
var G__37845 = (0);
seq__37675 = G__37842;
chunk__37676 = G__37843;
count__37677 = G__37844;
i__37678 = G__37845;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__37689 = arguments.length;
switch (G__37689) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__37690){
var map__37691 = p__37690;
var map__37691__$1 = cljs.core.__destructure_map(map__37691);
var options = map__37691__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37691__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37691__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__5045__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e37692){var e = e37692;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,1062597751,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
