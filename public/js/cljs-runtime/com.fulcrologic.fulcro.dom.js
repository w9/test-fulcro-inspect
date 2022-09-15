goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__40125){
var vec__40126 = p__40125;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40126,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40126,(1),null);
var pair = vec__40126;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__40135){
var vec__40137 = p__40135;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40137,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40137,(1),null);
var pair = vec__40137;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__40150){
var vec__40151 = p__40150;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40151,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40151,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__40154 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40154,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__40154;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__40169 = arguments.length;
switch (G__40169) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__40170 = component.refs;
var G__40170__$1 = (((G__40170 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__40170,name));
if((G__40170__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__40170__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5802__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5802__auto__)){
var ref = temp__5802__auto__;
var G__40175 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__40176 = (function (){var G__40177 = r;
if((G__40177 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__40177);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__40176) : ref.call(null,G__40176));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__40175) : factory.call(null,G__40175));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__40185 = arguments.length;
switch (G__40185) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___42882 = arguments.length;
var i__5770__auto___42883 = (0);
while(true){
if((i__5770__auto___42883 < len__5769__auto___42882)){
args_arr__5794__auto__.push((arguments[i__5770__auto___42883]));

var G__42885 = (i__5770__auto___42883 + (1));
i__5770__auto___42883 = G__42885;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq40180){
var G__40181 = cljs.core.first(seq40180);
var seq40180__$1 = cljs.core.next(seq40180);
var G__40182 = cljs.core.first(seq40180__$1);
var seq40180__$2 = cljs.core.next(seq40180__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40181,G__40182,seq40180__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__5043__auto__ = tag;
if(cljs.core.truth_(and__5043__auto__)){
var G__40218 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__40218) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__40218));
} else {
return and__5043__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x40243_42897 = ctor.prototype;
(x40243_42897.onChange = (function (event){
var this$ = this;
var temp__5804__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5804__auto__)){
var handler = temp__5804__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x40243_42897.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__40223_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__40223_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__5043__auto__ = state_value;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = element_value;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,-723172782,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x40243_42897.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__42899__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__42899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42901__i = 0, G__42901__a = new Array(arguments.length -  0);
while (G__42901__i < G__42901__a.length) {G__42901__a[G__42901__i] = arguments[G__42901__i + 0]; ++G__42901__i;}
  args = new cljs.core.IndexedSeq(G__42901__a,0,null);
} 
return G__42899__delegate.call(this,args);};
G__42899.cljs$lang$maxFixedArity = 0;
G__42899.cljs$lang$applyTo = (function (arglist__42902){
var args = cljs.core.seq(arglist__42902);
return G__42899__delegate(args);
});
G__42899.cljs$core$IFn$_invoke$arity$variadic = G__42899__delegate;
return G__42899;
})()
;
return (function() { 
var G__42903__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5802__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5802__auto__)){
var r = temp__5802__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__42903 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__42904__i = 0, G__42904__a = new Array(arguments.length -  1);
while (G__42904__i < G__42904__a.length) {G__42904__a[G__42904__i] = arguments[G__42904__i + 1]; ++G__42904__i;}
  children = new cljs.core.IndexedSeq(G__42904__a,0,null);
} 
return G__42903__delegate.call(this,props,children);};
G__42903.cljs$lang$maxFixedArity = 1;
G__42903.cljs$lang$applyTo = (function (arglist__42905){
var props = cljs.core.first(arglist__42905);
var children = cljs.core.rest(arglist__42905);
return G__42903__delegate(props,children);
});
G__42903.cljs$core$IFn$_invoke$arity$variadic = G__42903__delegate;
return G__42903;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__40268 = tag;
switch (G__40268) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40268)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__40270 = arguments.length;
switch (G__40270) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__40276 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__40277 = cljs.core.seq(vec__40276);
var first__40278 = cljs.core.first(seq__40277);
var seq__40277__$1 = cljs.core.next(seq__40277);
var head = first__40278;
var tail = seq__40277__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__40283 = (function (){var G__40284 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__40284,tail);

return G__40284;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40283) : f.call(null,G__40283));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__40288 = (function (){var G__40289 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__40289,args);

return G__40289;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40288) : f.call(null,G__40288));
} else {
if(cljs.core.object_QMARK_(head)){
var G__40292 = (function (){var G__40293 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__40293,tail);

return G__40293;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40292) : f.call(null,G__40292));
} else {
if(cljs.core.map_QMARK_(head)){
var G__40298 = (function (){var G__40299 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__40299,tail);

return G__40299;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40298) : f.call(null,G__40298));
} else {
var G__40302 = (function (){var G__40304 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__40304,args);

return G__40304;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40302) : f.call(null,G__40302));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__40316 = arguments.length;
switch (G__40316) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__40335 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__40336 = cljs.core.seq(vec__40335);
var first__40337 = cljs.core.first(seq__40336);
var seq__40336__$1 = cljs.core.next(seq__40336);
var head = first__40337;
var tail = seq__40336__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__40345 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__40345,tail);

return G__40345;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__40346 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__40346,args);

return G__40346;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__40347 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__40347,tail);

return G__40347;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__40351 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__40351,tail);

return G__40351;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__40353 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__40353,args);

return G__40353;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42910 = arguments.length;
var i__5770__auto___42911 = (0);
while(true){
if((i__5770__auto___42911 < len__5769__auto___42910)){
args__5775__auto__.push((arguments[i__5770__auto___42911]));

var G__42912 = (i__5770__auto___42911 + (1));
i__5770__auto___42911 = G__42912;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40411 = conformed_args__38511__auto__;
var map__40411__$1 = cljs.core.__destructure_map(map__40411);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40411__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40411__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40411__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq40396){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40396));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42914 = arguments.length;
var i__5770__auto___42915 = (0);
while(true){
if((i__5770__auto___42915 < len__5769__auto___42914)){
args__5775__auto__.push((arguments[i__5770__auto___42915]));

var G__42916 = (i__5770__auto___42915 + (1));
i__5770__auto___42915 = G__42916;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40428 = conformed_args__38511__auto__;
var map__40428__$1 = cljs.core.__destructure_map(map__40428);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40428__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40428__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40428__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq40418){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40418));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42918 = arguments.length;
var i__5770__auto___42919 = (0);
while(true){
if((i__5770__auto___42919 < len__5769__auto___42918)){
args__5775__auto__.push((arguments[i__5770__auto___42919]));

var G__42920 = (i__5770__auto___42919 + (1));
i__5770__auto___42919 = G__42920;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40455 = conformed_args__38511__auto__;
var map__40455__$1 = cljs.core.__destructure_map(map__40455);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40455__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40455__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40455__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq40441){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40441));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42924 = arguments.length;
var i__5770__auto___42925 = (0);
while(true){
if((i__5770__auto___42925 < len__5769__auto___42924)){
args__5775__auto__.push((arguments[i__5770__auto___42925]));

var G__42926 = (i__5770__auto___42925 + (1));
i__5770__auto___42925 = G__42926;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40493 = conformed_args__38511__auto__;
var map__40493__$1 = cljs.core.__destructure_map(map__40493);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq40479){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40479));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42929 = arguments.length;
var i__5770__auto___42930 = (0);
while(true){
if((i__5770__auto___42930 < len__5769__auto___42929)){
args__5775__auto__.push((arguments[i__5770__auto___42930]));

var G__42931 = (i__5770__auto___42930 + (1));
i__5770__auto___42930 = G__42931;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40504 = conformed_args__38511__auto__;
var map__40504__$1 = cljs.core.__destructure_map(map__40504);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40504__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40504__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40504__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq40494){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40494));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42939 = arguments.length;
var i__5770__auto___42940 = (0);
while(true){
if((i__5770__auto___42940 < len__5769__auto___42939)){
args__5775__auto__.push((arguments[i__5770__auto___42940]));

var G__42942 = (i__5770__auto___42940 + (1));
i__5770__auto___42940 = G__42942;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40530 = conformed_args__38511__auto__;
var map__40530__$1 = cljs.core.__destructure_map(map__40530);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40530__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40530__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40530__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq40519){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40519));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42946 = arguments.length;
var i__5770__auto___42947 = (0);
while(true){
if((i__5770__auto___42947 < len__5769__auto___42946)){
args__5775__auto__.push((arguments[i__5770__auto___42947]));

var G__42949 = (i__5770__auto___42947 + (1));
i__5770__auto___42947 = G__42949;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40546 = conformed_args__38511__auto__;
var map__40546__$1 = cljs.core.__destructure_map(map__40546);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq40540){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40540));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42951 = arguments.length;
var i__5770__auto___42952 = (0);
while(true){
if((i__5770__auto___42952 < len__5769__auto___42951)){
args__5775__auto__.push((arguments[i__5770__auto___42952]));

var G__42953 = (i__5770__auto___42952 + (1));
i__5770__auto___42952 = G__42953;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40554 = conformed_args__38511__auto__;
var map__40554__$1 = cljs.core.__destructure_map(map__40554);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40554__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40554__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40554__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq40553){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40553));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42959 = arguments.length;
var i__5770__auto___42960 = (0);
while(true){
if((i__5770__auto___42960 < len__5769__auto___42959)){
args__5775__auto__.push((arguments[i__5770__auto___42960]));

var G__42961 = (i__5770__auto___42960 + (1));
i__5770__auto___42960 = G__42961;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40573 = conformed_args__38511__auto__;
var map__40573__$1 = cljs.core.__destructure_map(map__40573);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40573__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40573__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40573__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq40562){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40562));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42967 = arguments.length;
var i__5770__auto___42968 = (0);
while(true){
if((i__5770__auto___42968 < len__5769__auto___42967)){
args__5775__auto__.push((arguments[i__5770__auto___42968]));

var G__42969 = (i__5770__auto___42968 + (1));
i__5770__auto___42968 = G__42969;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40585 = conformed_args__38511__auto__;
var map__40585__$1 = cljs.core.__destructure_map(map__40585);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40585__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40585__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40585__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq40576){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40576));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42974 = arguments.length;
var i__5770__auto___42975 = (0);
while(true){
if((i__5770__auto___42975 < len__5769__auto___42974)){
args__5775__auto__.push((arguments[i__5770__auto___42975]));

var G__42976 = (i__5770__auto___42975 + (1));
i__5770__auto___42975 = G__42976;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40604 = conformed_args__38511__auto__;
var map__40604__$1 = cljs.core.__destructure_map(map__40604);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40604__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40604__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40604__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq40599){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40599));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42977 = arguments.length;
var i__5770__auto___42978 = (0);
while(true){
if((i__5770__auto___42978 < len__5769__auto___42977)){
args__5775__auto__.push((arguments[i__5770__auto___42978]));

var G__42979 = (i__5770__auto___42978 + (1));
i__5770__auto___42978 = G__42979;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40621 = conformed_args__38511__auto__;
var map__40621__$1 = cljs.core.__destructure_map(map__40621);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40621__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40621__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40621__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq40611){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40611));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42986 = arguments.length;
var i__5770__auto___42987 = (0);
while(true){
if((i__5770__auto___42987 < len__5769__auto___42986)){
args__5775__auto__.push((arguments[i__5770__auto___42987]));

var G__42988 = (i__5770__auto___42987 + (1));
i__5770__auto___42987 = G__42988;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40652 = conformed_args__38511__auto__;
var map__40652__$1 = cljs.core.__destructure_map(map__40652);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40652__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40652__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40652__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq40637){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40637));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42993 = arguments.length;
var i__5770__auto___42994 = (0);
while(true){
if((i__5770__auto___42994 < len__5769__auto___42993)){
args__5775__auto__.push((arguments[i__5770__auto___42994]));

var G__42995 = (i__5770__auto___42994 + (1));
i__5770__auto___42994 = G__42995;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40672 = conformed_args__38511__auto__;
var map__40672__$1 = cljs.core.__destructure_map(map__40672);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40672__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40672__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40672__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq40665){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40665));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42996 = arguments.length;
var i__5770__auto___42997 = (0);
while(true){
if((i__5770__auto___42997 < len__5769__auto___42996)){
args__5775__auto__.push((arguments[i__5770__auto___42997]));

var G__42998 = (i__5770__auto___42997 + (1));
i__5770__auto___42997 = G__42998;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40684 = conformed_args__38511__auto__;
var map__40684__$1 = cljs.core.__destructure_map(map__40684);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40684__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40684__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40684__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq40675){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40675));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43001 = arguments.length;
var i__5770__auto___43002 = (0);
while(true){
if((i__5770__auto___43002 < len__5769__auto___43001)){
args__5775__auto__.push((arguments[i__5770__auto___43002]));

var G__43005 = (i__5770__auto___43002 + (1));
i__5770__auto___43002 = G__43005;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40710 = conformed_args__38511__auto__;
var map__40710__$1 = cljs.core.__destructure_map(map__40710);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40710__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40710__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40710__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq40693){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40693));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43006 = arguments.length;
var i__5770__auto___43007 = (0);
while(true){
if((i__5770__auto___43007 < len__5769__auto___43006)){
args__5775__auto__.push((arguments[i__5770__auto___43007]));

var G__43008 = (i__5770__auto___43007 + (1));
i__5770__auto___43007 = G__43008;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40728 = conformed_args__38511__auto__;
var map__40728__$1 = cljs.core.__destructure_map(map__40728);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40728__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40728__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40728__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq40723){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40723));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43012 = arguments.length;
var i__5770__auto___43013 = (0);
while(true){
if((i__5770__auto___43013 < len__5769__auto___43012)){
args__5775__auto__.push((arguments[i__5770__auto___43013]));

var G__43014 = (i__5770__auto___43013 + (1));
i__5770__auto___43013 = G__43014;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40744 = conformed_args__38511__auto__;
var map__40744__$1 = cljs.core.__destructure_map(map__40744);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40744__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40744__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40744__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq40736){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40736));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43016 = arguments.length;
var i__5770__auto___43018 = (0);
while(true){
if((i__5770__auto___43018 < len__5769__auto___43016)){
args__5775__auto__.push((arguments[i__5770__auto___43018]));

var G__43019 = (i__5770__auto___43018 + (1));
i__5770__auto___43018 = G__43019;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40758 = conformed_args__38511__auto__;
var map__40758__$1 = cljs.core.__destructure_map(map__40758);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40758__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40758__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40758__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq40747){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40747));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43026 = arguments.length;
var i__5770__auto___43027 = (0);
while(true){
if((i__5770__auto___43027 < len__5769__auto___43026)){
args__5775__auto__.push((arguments[i__5770__auto___43027]));

var G__43028 = (i__5770__auto___43027 + (1));
i__5770__auto___43027 = G__43028;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40776 = conformed_args__38511__auto__;
var map__40776__$1 = cljs.core.__destructure_map(map__40776);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40776__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40776__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40776__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq40767){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40767));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43029 = arguments.length;
var i__5770__auto___43030 = (0);
while(true){
if((i__5770__auto___43030 < len__5769__auto___43029)){
args__5775__auto__.push((arguments[i__5770__auto___43030]));

var G__43032 = (i__5770__auto___43030 + (1));
i__5770__auto___43030 = G__43032;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40792 = conformed_args__38511__auto__;
var map__40792__$1 = cljs.core.__destructure_map(map__40792);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40792__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40792__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq40788){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40788));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43039 = arguments.length;
var i__5770__auto___43040 = (0);
while(true){
if((i__5770__auto___43040 < len__5769__auto___43039)){
args__5775__auto__.push((arguments[i__5770__auto___43040]));

var G__43042 = (i__5770__auto___43040 + (1));
i__5770__auto___43040 = G__43042;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40808 = conformed_args__38511__auto__;
var map__40808__$1 = cljs.core.__destructure_map(map__40808);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40808__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40808__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40808__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq40797){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40797));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43048 = arguments.length;
var i__5770__auto___43049 = (0);
while(true){
if((i__5770__auto___43049 < len__5769__auto___43048)){
args__5775__auto__.push((arguments[i__5770__auto___43049]));

var G__43050 = (i__5770__auto___43049 + (1));
i__5770__auto___43049 = G__43050;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40829 = conformed_args__38511__auto__;
var map__40829__$1 = cljs.core.__destructure_map(map__40829);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40829__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40829__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40829__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq40819){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40819));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43051 = arguments.length;
var i__5770__auto___43052 = (0);
while(true){
if((i__5770__auto___43052 < len__5769__auto___43051)){
args__5775__auto__.push((arguments[i__5770__auto___43052]));

var G__43053 = (i__5770__auto___43052 + (1));
i__5770__auto___43052 = G__43053;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40845 = conformed_args__38511__auto__;
var map__40845__$1 = cljs.core.__destructure_map(map__40845);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40845__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40845__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40845__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq40838){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40838));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43059 = arguments.length;
var i__5770__auto___43060 = (0);
while(true){
if((i__5770__auto___43060 < len__5769__auto___43059)){
args__5775__auto__.push((arguments[i__5770__auto___43060]));

var G__43061 = (i__5770__auto___43060 + (1));
i__5770__auto___43060 = G__43061;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40860 = conformed_args__38511__auto__;
var map__40860__$1 = cljs.core.__destructure_map(map__40860);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40860__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40860__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40860__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq40851){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40851));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43066 = arguments.length;
var i__5770__auto___43067 = (0);
while(true){
if((i__5770__auto___43067 < len__5769__auto___43066)){
args__5775__auto__.push((arguments[i__5770__auto___43067]));

var G__43068 = (i__5770__auto___43067 + (1));
i__5770__auto___43067 = G__43068;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40874 = conformed_args__38511__auto__;
var map__40874__$1 = cljs.core.__destructure_map(map__40874);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40874__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40874__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40874__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq40865){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40865));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43069 = arguments.length;
var i__5770__auto___43070 = (0);
while(true){
if((i__5770__auto___43070 < len__5769__auto___43069)){
args__5775__auto__.push((arguments[i__5770__auto___43070]));

var G__43071 = (i__5770__auto___43070 + (1));
i__5770__auto___43070 = G__43071;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40885 = conformed_args__38511__auto__;
var map__40885__$1 = cljs.core.__destructure_map(map__40885);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40885__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40885__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40885__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq40876){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40876));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43077 = arguments.length;
var i__5770__auto___43078 = (0);
while(true){
if((i__5770__auto___43078 < len__5769__auto___43077)){
args__5775__auto__.push((arguments[i__5770__auto___43078]));

var G__43080 = (i__5770__auto___43078 + (1));
i__5770__auto___43078 = G__43080;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40900 = conformed_args__38511__auto__;
var map__40900__$1 = cljs.core.__destructure_map(map__40900);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40900__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40900__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40900__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq40890){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40890));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43081 = arguments.length;
var i__5770__auto___43082 = (0);
while(true){
if((i__5770__auto___43082 < len__5769__auto___43081)){
args__5775__auto__.push((arguments[i__5770__auto___43082]));

var G__43083 = (i__5770__auto___43082 + (1));
i__5770__auto___43082 = G__43083;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40909 = conformed_args__38511__auto__;
var map__40909__$1 = cljs.core.__destructure_map(map__40909);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40909__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40909__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40909__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq40903){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40903));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43084 = arguments.length;
var i__5770__auto___43085 = (0);
while(true){
if((i__5770__auto___43085 < len__5769__auto___43084)){
args__5775__auto__.push((arguments[i__5770__auto___43085]));

var G__43086 = (i__5770__auto___43085 + (1));
i__5770__auto___43085 = G__43086;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40923 = conformed_args__38511__auto__;
var map__40923__$1 = cljs.core.__destructure_map(map__40923);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40923__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40923__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40923__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq40918){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40918));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43089 = arguments.length;
var i__5770__auto___43090 = (0);
while(true){
if((i__5770__auto___43090 < len__5769__auto___43089)){
args__5775__auto__.push((arguments[i__5770__auto___43090]));

var G__43091 = (i__5770__auto___43090 + (1));
i__5770__auto___43090 = G__43091;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40936 = conformed_args__38511__auto__;
var map__40936__$1 = cljs.core.__destructure_map(map__40936);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40936__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40936__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40936__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq40929){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40929));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43092 = arguments.length;
var i__5770__auto___43094 = (0);
while(true){
if((i__5770__auto___43094 < len__5769__auto___43092)){
args__5775__auto__.push((arguments[i__5770__auto___43094]));

var G__43096 = (i__5770__auto___43094 + (1));
i__5770__auto___43094 = G__43096;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40950 = conformed_args__38511__auto__;
var map__40950__$1 = cljs.core.__destructure_map(map__40950);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40950__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40950__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40950__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq40942){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40942));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43099 = arguments.length;
var i__5770__auto___43100 = (0);
while(true){
if((i__5770__auto___43100 < len__5769__auto___43099)){
args__5775__auto__.push((arguments[i__5770__auto___43100]));

var G__43101 = (i__5770__auto___43100 + (1));
i__5770__auto___43100 = G__43101;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40976 = conformed_args__38511__auto__;
var map__40976__$1 = cljs.core.__destructure_map(map__40976);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40976__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40976__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40976__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq40960){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40960));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43103 = arguments.length;
var i__5770__auto___43104 = (0);
while(true){
if((i__5770__auto___43104 < len__5769__auto___43103)){
args__5775__auto__.push((arguments[i__5770__auto___43104]));

var G__43106 = (i__5770__auto___43104 + (1));
i__5770__auto___43104 = G__43106;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__40993 = conformed_args__38511__auto__;
var map__40993__$1 = cljs.core.__destructure_map(map__40993);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40993__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40993__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40993__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq40985){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40985));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43109 = arguments.length;
var i__5770__auto___43110 = (0);
while(true){
if((i__5770__auto___43110 < len__5769__auto___43109)){
args__5775__auto__.push((arguments[i__5770__auto___43110]));

var G__43112 = (i__5770__auto___43110 + (1));
i__5770__auto___43110 = G__43112;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41010 = conformed_args__38511__auto__;
var map__41010__$1 = cljs.core.__destructure_map(map__41010);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41010__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41010__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41010__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq41001){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41001));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43118 = arguments.length;
var i__5770__auto___43119 = (0);
while(true){
if((i__5770__auto___43119 < len__5769__auto___43118)){
args__5775__auto__.push((arguments[i__5770__auto___43119]));

var G__43120 = (i__5770__auto___43119 + (1));
i__5770__auto___43119 = G__43120;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41021 = conformed_args__38511__auto__;
var map__41021__$1 = cljs.core.__destructure_map(map__41021);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41021__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41021__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41021__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq41015){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41015));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43122 = arguments.length;
var i__5770__auto___43123 = (0);
while(true){
if((i__5770__auto___43123 < len__5769__auto___43122)){
args__5775__auto__.push((arguments[i__5770__auto___43123]));

var G__43126 = (i__5770__auto___43123 + (1));
i__5770__auto___43123 = G__43126;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41035 = conformed_args__38511__auto__;
var map__41035__$1 = cljs.core.__destructure_map(map__41035);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41035__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41035__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41035__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq41026){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41026));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43129 = arguments.length;
var i__5770__auto___43130 = (0);
while(true){
if((i__5770__auto___43130 < len__5769__auto___43129)){
args__5775__auto__.push((arguments[i__5770__auto___43130]));

var G__43131 = (i__5770__auto___43130 + (1));
i__5770__auto___43130 = G__43131;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41045 = conformed_args__38511__auto__;
var map__41045__$1 = cljs.core.__destructure_map(map__41045);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41045__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41045__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41045__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq41042){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41042));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43135 = arguments.length;
var i__5770__auto___43136 = (0);
while(true){
if((i__5770__auto___43136 < len__5769__auto___43135)){
args__5775__auto__.push((arguments[i__5770__auto___43136]));

var G__43137 = (i__5770__auto___43136 + (1));
i__5770__auto___43136 = G__43137;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41065 = conformed_args__38511__auto__;
var map__41065__$1 = cljs.core.__destructure_map(map__41065);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41065__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41065__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41065__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq41053){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41053));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43140 = arguments.length;
var i__5770__auto___43141 = (0);
while(true){
if((i__5770__auto___43141 < len__5769__auto___43140)){
args__5775__auto__.push((arguments[i__5770__auto___43141]));

var G__43142 = (i__5770__auto___43141 + (1));
i__5770__auto___43141 = G__43142;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41074 = conformed_args__38511__auto__;
var map__41074__$1 = cljs.core.__destructure_map(map__41074);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41074__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41074__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41074__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq41066){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41066));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43143 = arguments.length;
var i__5770__auto___43144 = (0);
while(true){
if((i__5770__auto___43144 < len__5769__auto___43143)){
args__5775__auto__.push((arguments[i__5770__auto___43144]));

var G__43145 = (i__5770__auto___43144 + (1));
i__5770__auto___43144 = G__43145;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41084 = conformed_args__38511__auto__;
var map__41084__$1 = cljs.core.__destructure_map(map__41084);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41084__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41084__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41084__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq41080){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41080));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43150 = arguments.length;
var i__5770__auto___43152 = (0);
while(true){
if((i__5770__auto___43152 < len__5769__auto___43150)){
args__5775__auto__.push((arguments[i__5770__auto___43152]));

var G__43154 = (i__5770__auto___43152 + (1));
i__5770__auto___43152 = G__43154;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41108 = conformed_args__38511__auto__;
var map__41108__$1 = cljs.core.__destructure_map(map__41108);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41108__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41108__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41108__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq41100){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41100));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43160 = arguments.length;
var i__5770__auto___43161 = (0);
while(true){
if((i__5770__auto___43161 < len__5769__auto___43160)){
args__5775__auto__.push((arguments[i__5770__auto___43161]));

var G__43162 = (i__5770__auto___43161 + (1));
i__5770__auto___43161 = G__43162;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41125 = conformed_args__38511__auto__;
var map__41125__$1 = cljs.core.__destructure_map(map__41125);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41125__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41125__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41125__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq41115){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41115));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43167 = arguments.length;
var i__5770__auto___43168 = (0);
while(true){
if((i__5770__auto___43168 < len__5769__auto___43167)){
args__5775__auto__.push((arguments[i__5770__auto___43168]));

var G__43169 = (i__5770__auto___43168 + (1));
i__5770__auto___43168 = G__43169;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41142 = conformed_args__38511__auto__;
var map__41142__$1 = cljs.core.__destructure_map(map__41142);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41142__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41142__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41142__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq41138){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41138));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43170 = arguments.length;
var i__5770__auto___43171 = (0);
while(true){
if((i__5770__auto___43171 < len__5769__auto___43170)){
args__5775__auto__.push((arguments[i__5770__auto___43171]));

var G__43173 = (i__5770__auto___43171 + (1));
i__5770__auto___43171 = G__43173;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41152 = conformed_args__38511__auto__;
var map__41152__$1 = cljs.core.__destructure_map(map__41152);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41152__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41152__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41152__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq41148){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41148));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43180 = arguments.length;
var i__5770__auto___43182 = (0);
while(true){
if((i__5770__auto___43182 < len__5769__auto___43180)){
args__5775__auto__.push((arguments[i__5770__auto___43182]));

var G__43183 = (i__5770__auto___43182 + (1));
i__5770__auto___43182 = G__43183;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41161 = conformed_args__38511__auto__;
var map__41161__$1 = cljs.core.__destructure_map(map__41161);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41161__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41161__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq41158){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41158));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43186 = arguments.length;
var i__5770__auto___43187 = (0);
while(true){
if((i__5770__auto___43187 < len__5769__auto___43186)){
args__5775__auto__.push((arguments[i__5770__auto___43187]));

var G__43190 = (i__5770__auto___43187 + (1));
i__5770__auto___43187 = G__43190;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41180 = conformed_args__38511__auto__;
var map__41180__$1 = cljs.core.__destructure_map(map__41180);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41180__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41180__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41180__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq41164){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41164));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43199 = arguments.length;
var i__5770__auto___43200 = (0);
while(true){
if((i__5770__auto___43200 < len__5769__auto___43199)){
args__5775__auto__.push((arguments[i__5770__auto___43200]));

var G__43201 = (i__5770__auto___43200 + (1));
i__5770__auto___43200 = G__43201;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41186 = conformed_args__38511__auto__;
var map__41186__$1 = cljs.core.__destructure_map(map__41186);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41186__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41186__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41186__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq41183){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41183));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43202 = arguments.length;
var i__5770__auto___43203 = (0);
while(true){
if((i__5770__auto___43203 < len__5769__auto___43202)){
args__5775__auto__.push((arguments[i__5770__auto___43203]));

var G__43204 = (i__5770__auto___43203 + (1));
i__5770__auto___43203 = G__43204;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41198 = conformed_args__38511__auto__;
var map__41198__$1 = cljs.core.__destructure_map(map__41198);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41198__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41198__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41198__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq41189){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41189));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43208 = arguments.length;
var i__5770__auto___43209 = (0);
while(true){
if((i__5770__auto___43209 < len__5769__auto___43208)){
args__5775__auto__.push((arguments[i__5770__auto___43209]));

var G__43210 = (i__5770__auto___43209 + (1));
i__5770__auto___43209 = G__43210;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41212 = conformed_args__38511__auto__;
var map__41212__$1 = cljs.core.__destructure_map(map__41212);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41212__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41212__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41212__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq41205){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41205));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43214 = arguments.length;
var i__5770__auto___43215 = (0);
while(true){
if((i__5770__auto___43215 < len__5769__auto___43214)){
args__5775__auto__.push((arguments[i__5770__auto___43215]));

var G__43217 = (i__5770__auto___43215 + (1));
i__5770__auto___43215 = G__43217;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41224 = conformed_args__38511__auto__;
var map__41224__$1 = cljs.core.__destructure_map(map__41224);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41224__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41224__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41224__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq41218){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41218));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43222 = arguments.length;
var i__5770__auto___43223 = (0);
while(true){
if((i__5770__auto___43223 < len__5769__auto___43222)){
args__5775__auto__.push((arguments[i__5770__auto___43223]));

var G__43224 = (i__5770__auto___43223 + (1));
i__5770__auto___43223 = G__43224;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41233 = conformed_args__38511__auto__;
var map__41233__$1 = cljs.core.__destructure_map(map__41233);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41233__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41233__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41233__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq41229){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41229));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43229 = arguments.length;
var i__5770__auto___43230 = (0);
while(true){
if((i__5770__auto___43230 < len__5769__auto___43229)){
args__5775__auto__.push((arguments[i__5770__auto___43230]));

var G__43231 = (i__5770__auto___43230 + (1));
i__5770__auto___43230 = G__43231;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41244 = conformed_args__38511__auto__;
var map__41244__$1 = cljs.core.__destructure_map(map__41244);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41244__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41244__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41244__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq41240){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41240));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43234 = arguments.length;
var i__5770__auto___43235 = (0);
while(true){
if((i__5770__auto___43235 < len__5769__auto___43234)){
args__5775__auto__.push((arguments[i__5770__auto___43235]));

var G__43236 = (i__5770__auto___43235 + (1));
i__5770__auto___43235 = G__43236;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41254 = conformed_args__38511__auto__;
var map__41254__$1 = cljs.core.__destructure_map(map__41254);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41254__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41254__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41254__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq41249){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41249));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43237 = arguments.length;
var i__5770__auto___43238 = (0);
while(true){
if((i__5770__auto___43238 < len__5769__auto___43237)){
args__5775__auto__.push((arguments[i__5770__auto___43238]));

var G__43239 = (i__5770__auto___43238 + (1));
i__5770__auto___43238 = G__43239;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41269 = conformed_args__38511__auto__;
var map__41269__$1 = cljs.core.__destructure_map(map__41269);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41269__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41269__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41269__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq41261){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41261));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43241 = arguments.length;
var i__5770__auto___43242 = (0);
while(true){
if((i__5770__auto___43242 < len__5769__auto___43241)){
args__5775__auto__.push((arguments[i__5770__auto___43242]));

var G__43243 = (i__5770__auto___43242 + (1));
i__5770__auto___43242 = G__43243;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41280 = conformed_args__38511__auto__;
var map__41280__$1 = cljs.core.__destructure_map(map__41280);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41280__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41280__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41280__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq41274){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41274));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43245 = arguments.length;
var i__5770__auto___43246 = (0);
while(true){
if((i__5770__auto___43246 < len__5769__auto___43245)){
args__5775__auto__.push((arguments[i__5770__auto___43246]));

var G__43248 = (i__5770__auto___43246 + (1));
i__5770__auto___43246 = G__43248;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41294 = conformed_args__38511__auto__;
var map__41294__$1 = cljs.core.__destructure_map(map__41294);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41294__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41294__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41294__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq41286){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41286));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43250 = arguments.length;
var i__5770__auto___43251 = (0);
while(true){
if((i__5770__auto___43251 < len__5769__auto___43250)){
args__5775__auto__.push((arguments[i__5770__auto___43251]));

var G__43253 = (i__5770__auto___43251 + (1));
i__5770__auto___43251 = G__43253;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41319 = conformed_args__38511__auto__;
var map__41319__$1 = cljs.core.__destructure_map(map__41319);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41319__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41319__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41319__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq41306){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41306));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43256 = arguments.length;
var i__5770__auto___43257 = (0);
while(true){
if((i__5770__auto___43257 < len__5769__auto___43256)){
args__5775__auto__.push((arguments[i__5770__auto___43257]));

var G__43259 = (i__5770__auto___43257 + (1));
i__5770__auto___43257 = G__43259;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41339 = conformed_args__38511__auto__;
var map__41339__$1 = cljs.core.__destructure_map(map__41339);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41339__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41339__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41339__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq41329){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41329));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43266 = arguments.length;
var i__5770__auto___43267 = (0);
while(true){
if((i__5770__auto___43267 < len__5769__auto___43266)){
args__5775__auto__.push((arguments[i__5770__auto___43267]));

var G__43268 = (i__5770__auto___43267 + (1));
i__5770__auto___43267 = G__43268;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41351 = conformed_args__38511__auto__;
var map__41351__$1 = cljs.core.__destructure_map(map__41351);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41351__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41351__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41351__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq41343){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41343));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43273 = arguments.length;
var i__5770__auto___43274 = (0);
while(true){
if((i__5770__auto___43274 < len__5769__auto___43273)){
args__5775__auto__.push((arguments[i__5770__auto___43274]));

var G__43275 = (i__5770__auto___43274 + (1));
i__5770__auto___43274 = G__43275;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41360 = conformed_args__38511__auto__;
var map__41360__$1 = cljs.core.__destructure_map(map__41360);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41360__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41360__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41360__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq41355){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41355));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43280 = arguments.length;
var i__5770__auto___43281 = (0);
while(true){
if((i__5770__auto___43281 < len__5769__auto___43280)){
args__5775__auto__.push((arguments[i__5770__auto___43281]));

var G__43282 = (i__5770__auto___43281 + (1));
i__5770__auto___43281 = G__43282;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41371 = conformed_args__38511__auto__;
var map__41371__$1 = cljs.core.__destructure_map(map__41371);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41371__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41371__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41371__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq41365){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41365));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43283 = arguments.length;
var i__5770__auto___43284 = (0);
while(true){
if((i__5770__auto___43284 < len__5769__auto___43283)){
args__5775__auto__.push((arguments[i__5770__auto___43284]));

var G__43287 = (i__5770__auto___43284 + (1));
i__5770__auto___43284 = G__43287;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41386 = conformed_args__38511__auto__;
var map__41386__$1 = cljs.core.__destructure_map(map__41386);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41386__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41386__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41386__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq41376){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41376));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43296 = arguments.length;
var i__5770__auto___43297 = (0);
while(true){
if((i__5770__auto___43297 < len__5769__auto___43296)){
args__5775__auto__.push((arguments[i__5770__auto___43297]));

var G__43298 = (i__5770__auto___43297 + (1));
i__5770__auto___43297 = G__43298;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41396 = conformed_args__38511__auto__;
var map__41396__$1 = cljs.core.__destructure_map(map__41396);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41396__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41396__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41396__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq41392){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41392));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43300 = arguments.length;
var i__5770__auto___43301 = (0);
while(true){
if((i__5770__auto___43301 < len__5769__auto___43300)){
args__5775__auto__.push((arguments[i__5770__auto___43301]));

var G__43302 = (i__5770__auto___43301 + (1));
i__5770__auto___43301 = G__43302;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41403 = conformed_args__38511__auto__;
var map__41403__$1 = cljs.core.__destructure_map(map__41403);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41403__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41403__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41403__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq41397){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41397));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43311 = arguments.length;
var i__5770__auto___43312 = (0);
while(true){
if((i__5770__auto___43312 < len__5769__auto___43311)){
args__5775__auto__.push((arguments[i__5770__auto___43312]));

var G__43313 = (i__5770__auto___43312 + (1));
i__5770__auto___43312 = G__43313;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41412 = conformed_args__38511__auto__;
var map__41412__$1 = cljs.core.__destructure_map(map__41412);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq41407){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41407));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43314 = arguments.length;
var i__5770__auto___43315 = (0);
while(true){
if((i__5770__auto___43315 < len__5769__auto___43314)){
args__5775__auto__.push((arguments[i__5770__auto___43315]));

var G__43316 = (i__5770__auto___43315 + (1));
i__5770__auto___43315 = G__43316;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41417 = conformed_args__38511__auto__;
var map__41417__$1 = cljs.core.__destructure_map(map__41417);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq41413){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41413));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43318 = arguments.length;
var i__5770__auto___43319 = (0);
while(true){
if((i__5770__auto___43319 < len__5769__auto___43318)){
args__5775__auto__.push((arguments[i__5770__auto___43319]));

var G__43320 = (i__5770__auto___43319 + (1));
i__5770__auto___43319 = G__43320;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41427 = conformed_args__38511__auto__;
var map__41427__$1 = cljs.core.__destructure_map(map__41427);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41427__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41427__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41427__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq41421){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41421));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43322 = arguments.length;
var i__5770__auto___43323 = (0);
while(true){
if((i__5770__auto___43323 < len__5769__auto___43322)){
args__5775__auto__.push((arguments[i__5770__auto___43323]));

var G__43324 = (i__5770__auto___43323 + (1));
i__5770__auto___43323 = G__43324;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41434 = conformed_args__38511__auto__;
var map__41434__$1 = cljs.core.__destructure_map(map__41434);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41434__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41434__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41434__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq41429){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41429));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43329 = arguments.length;
var i__5770__auto___43330 = (0);
while(true){
if((i__5770__auto___43330 < len__5769__auto___43329)){
args__5775__auto__.push((arguments[i__5770__auto___43330]));

var G__43331 = (i__5770__auto___43330 + (1));
i__5770__auto___43330 = G__43331;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41452 = conformed_args__38511__auto__;
var map__41452__$1 = cljs.core.__destructure_map(map__41452);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41452__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41452__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41452__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq41444){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41444));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43335 = arguments.length;
var i__5770__auto___43337 = (0);
while(true){
if((i__5770__auto___43337 < len__5769__auto___43335)){
args__5775__auto__.push((arguments[i__5770__auto___43337]));

var G__43338 = (i__5770__auto___43337 + (1));
i__5770__auto___43337 = G__43338;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41462 = conformed_args__38511__auto__;
var map__41462__$1 = cljs.core.__destructure_map(map__41462);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41462__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41462__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41462__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq41457){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41457));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43339 = arguments.length;
var i__5770__auto___43340 = (0);
while(true){
if((i__5770__auto___43340 < len__5769__auto___43339)){
args__5775__auto__.push((arguments[i__5770__auto___43340]));

var G__43341 = (i__5770__auto___43340 + (1));
i__5770__auto___43340 = G__43341;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41472 = conformed_args__38511__auto__;
var map__41472__$1 = cljs.core.__destructure_map(map__41472);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41472__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41472__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41472__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq41467){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41467));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43344 = arguments.length;
var i__5770__auto___43346 = (0);
while(true){
if((i__5770__auto___43346 < len__5769__auto___43344)){
args__5775__auto__.push((arguments[i__5770__auto___43346]));

var G__43347 = (i__5770__auto___43346 + (1));
i__5770__auto___43346 = G__43347;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41486 = conformed_args__38511__auto__;
var map__41486__$1 = cljs.core.__destructure_map(map__41486);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq41481){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41481));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43356 = arguments.length;
var i__5770__auto___43357 = (0);
while(true){
if((i__5770__auto___43357 < len__5769__auto___43356)){
args__5775__auto__.push((arguments[i__5770__auto___43357]));

var G__43358 = (i__5770__auto___43357 + (1));
i__5770__auto___43357 = G__43358;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41495 = conformed_args__38511__auto__;
var map__41495__$1 = cljs.core.__destructure_map(map__41495);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41495__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41495__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41495__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq41490){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41490));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43362 = arguments.length;
var i__5770__auto___43363 = (0);
while(true){
if((i__5770__auto___43363 < len__5769__auto___43362)){
args__5775__auto__.push((arguments[i__5770__auto___43363]));

var G__43364 = (i__5770__auto___43363 + (1));
i__5770__auto___43363 = G__43364;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41509 = conformed_args__38511__auto__;
var map__41509__$1 = cljs.core.__destructure_map(map__41509);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41509__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41509__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41509__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq41500){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41500));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43367 = arguments.length;
var i__5770__auto___43368 = (0);
while(true){
if((i__5770__auto___43368 < len__5769__auto___43367)){
args__5775__auto__.push((arguments[i__5770__auto___43368]));

var G__43369 = (i__5770__auto___43368 + (1));
i__5770__auto___43368 = G__43369;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41520 = conformed_args__38511__auto__;
var map__41520__$1 = cljs.core.__destructure_map(map__41520);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41520__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41520__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41520__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq41516){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41516));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43374 = arguments.length;
var i__5770__auto___43375 = (0);
while(true){
if((i__5770__auto___43375 < len__5769__auto___43374)){
args__5775__auto__.push((arguments[i__5770__auto___43375]));

var G__43376 = (i__5770__auto___43375 + (1));
i__5770__auto___43375 = G__43376;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41539 = conformed_args__38511__auto__;
var map__41539__$1 = cljs.core.__destructure_map(map__41539);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41539__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41539__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41539__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq41526){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41526));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43381 = arguments.length;
var i__5770__auto___43382 = (0);
while(true){
if((i__5770__auto___43382 < len__5769__auto___43381)){
args__5775__auto__.push((arguments[i__5770__auto___43382]));

var G__43383 = (i__5770__auto___43382 + (1));
i__5770__auto___43382 = G__43383;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41557 = conformed_args__38511__auto__;
var map__41557__$1 = cljs.core.__destructure_map(map__41557);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41557__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41557__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41557__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq41546){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41546));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43389 = arguments.length;
var i__5770__auto___43390 = (0);
while(true){
if((i__5770__auto___43390 < len__5769__auto___43389)){
args__5775__auto__.push((arguments[i__5770__auto___43390]));

var G__43391 = (i__5770__auto___43390 + (1));
i__5770__auto___43390 = G__43391;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41571 = conformed_args__38511__auto__;
var map__41571__$1 = cljs.core.__destructure_map(map__41571);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41571__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41571__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41571__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq41560){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41560));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43396 = arguments.length;
var i__5770__auto___43397 = (0);
while(true){
if((i__5770__auto___43397 < len__5769__auto___43396)){
args__5775__auto__.push((arguments[i__5770__auto___43397]));

var G__43398 = (i__5770__auto___43397 + (1));
i__5770__auto___43397 = G__43398;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41575 = conformed_args__38511__auto__;
var map__41575__$1 = cljs.core.__destructure_map(map__41575);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41575__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41575__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41575__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq41572){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41572));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43403 = arguments.length;
var i__5770__auto___43404 = (0);
while(true){
if((i__5770__auto___43404 < len__5769__auto___43403)){
args__5775__auto__.push((arguments[i__5770__auto___43404]));

var G__43406 = (i__5770__auto___43404 + (1));
i__5770__auto___43404 = G__43406;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41591 = conformed_args__38511__auto__;
var map__41591__$1 = cljs.core.__destructure_map(map__41591);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41591__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41591__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41591__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq41584){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41584));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43409 = arguments.length;
var i__5770__auto___43410 = (0);
while(true){
if((i__5770__auto___43410 < len__5769__auto___43409)){
args__5775__auto__.push((arguments[i__5770__auto___43410]));

var G__43411 = (i__5770__auto___43410 + (1));
i__5770__auto___43410 = G__43411;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41645 = conformed_args__38511__auto__;
var map__41645__$1 = cljs.core.__destructure_map(map__41645);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41645__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41645__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41645__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq41614){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41614));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43412 = arguments.length;
var i__5770__auto___43413 = (0);
while(true){
if((i__5770__auto___43413 < len__5769__auto___43412)){
args__5775__auto__.push((arguments[i__5770__auto___43413]));

var G__43414 = (i__5770__auto___43413 + (1));
i__5770__auto___43413 = G__43414;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41701 = conformed_args__38511__auto__;
var map__41701__$1 = cljs.core.__destructure_map(map__41701);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41701__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41701__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41701__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq41675){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41675));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43415 = arguments.length;
var i__5770__auto___43417 = (0);
while(true){
if((i__5770__auto___43417 < len__5769__auto___43415)){
args__5775__auto__.push((arguments[i__5770__auto___43417]));

var G__43418 = (i__5770__auto___43417 + (1));
i__5770__auto___43417 = G__43418;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41707 = conformed_args__38511__auto__;
var map__41707__$1 = cljs.core.__destructure_map(map__41707);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41707__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41707__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41707__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq41705){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41705));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43421 = arguments.length;
var i__5770__auto___43422 = (0);
while(true){
if((i__5770__auto___43422 < len__5769__auto___43421)){
args__5775__auto__.push((arguments[i__5770__auto___43422]));

var G__43423 = (i__5770__auto___43422 + (1));
i__5770__auto___43422 = G__43423;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41712 = conformed_args__38511__auto__;
var map__41712__$1 = cljs.core.__destructure_map(map__41712);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41712__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41712__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41712__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq41709){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41709));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43430 = arguments.length;
var i__5770__auto___43432 = (0);
while(true){
if((i__5770__auto___43432 < len__5769__auto___43430)){
args__5775__auto__.push((arguments[i__5770__auto___43432]));

var G__43434 = (i__5770__auto___43432 + (1));
i__5770__auto___43432 = G__43434;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41717 = conformed_args__38511__auto__;
var map__41717__$1 = cljs.core.__destructure_map(map__41717);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41717__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41717__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41717__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq41713){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41713));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43435 = arguments.length;
var i__5770__auto___43436 = (0);
while(true){
if((i__5770__auto___43436 < len__5769__auto___43435)){
args__5775__auto__.push((arguments[i__5770__auto___43436]));

var G__43437 = (i__5770__auto___43436 + (1));
i__5770__auto___43436 = G__43437;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41721 = conformed_args__38511__auto__;
var map__41721__$1 = cljs.core.__destructure_map(map__41721);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41721__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41721__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41721__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq41720){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41720));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43442 = arguments.length;
var i__5770__auto___43443 = (0);
while(true){
if((i__5770__auto___43443 < len__5769__auto___43442)){
args__5775__auto__.push((arguments[i__5770__auto___43443]));

var G__43444 = (i__5770__auto___43443 + (1));
i__5770__auto___43443 = G__43444;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41723 = conformed_args__38511__auto__;
var map__41723__$1 = cljs.core.__destructure_map(map__41723);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41723__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41723__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41723__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq41722){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41722));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43447 = arguments.length;
var i__5770__auto___43448 = (0);
while(true){
if((i__5770__auto___43448 < len__5769__auto___43447)){
args__5775__auto__.push((arguments[i__5770__auto___43448]));

var G__43449 = (i__5770__auto___43448 + (1));
i__5770__auto___43448 = G__43449;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41728 = conformed_args__38511__auto__;
var map__41728__$1 = cljs.core.__destructure_map(map__41728);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41728__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41728__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41728__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq41724){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41724));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43450 = arguments.length;
var i__5770__auto___43451 = (0);
while(true){
if((i__5770__auto___43451 < len__5769__auto___43450)){
args__5775__auto__.push((arguments[i__5770__auto___43451]));

var G__43452 = (i__5770__auto___43451 + (1));
i__5770__auto___43451 = G__43452;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41736 = conformed_args__38511__auto__;
var map__41736__$1 = cljs.core.__destructure_map(map__41736);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41736__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41736__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq41732){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41732));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43453 = arguments.length;
var i__5770__auto___43455 = (0);
while(true){
if((i__5770__auto___43455 < len__5769__auto___43453)){
args__5775__auto__.push((arguments[i__5770__auto___43455]));

var G__43456 = (i__5770__auto___43455 + (1));
i__5770__auto___43455 = G__43456;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41747 = conformed_args__38511__auto__;
var map__41747__$1 = cljs.core.__destructure_map(map__41747);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41747__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41747__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41747__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq41740){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41740));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43458 = arguments.length;
var i__5770__auto___43459 = (0);
while(true){
if((i__5770__auto___43459 < len__5769__auto___43458)){
args__5775__auto__.push((arguments[i__5770__auto___43459]));

var G__43460 = (i__5770__auto___43459 + (1));
i__5770__auto___43459 = G__43460;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41770 = conformed_args__38511__auto__;
var map__41770__$1 = cljs.core.__destructure_map(map__41770);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41770__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41770__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41770__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq41766){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41766));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43463 = arguments.length;
var i__5770__auto___43464 = (0);
while(true){
if((i__5770__auto___43464 < len__5769__auto___43463)){
args__5775__auto__.push((arguments[i__5770__auto___43464]));

var G__43465 = (i__5770__auto___43464 + (1));
i__5770__auto___43464 = G__43465;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41774 = conformed_args__38511__auto__;
var map__41774__$1 = cljs.core.__destructure_map(map__41774);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41774__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41774__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41774__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq41772){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41772));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43468 = arguments.length;
var i__5770__auto___43469 = (0);
while(true){
if((i__5770__auto___43469 < len__5769__auto___43468)){
args__5775__auto__.push((arguments[i__5770__auto___43469]));

var G__43470 = (i__5770__auto___43469 + (1));
i__5770__auto___43469 = G__43470;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41776 = conformed_args__38511__auto__;
var map__41776__$1 = cljs.core.__destructure_map(map__41776);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41776__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41776__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41776__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq41775){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41775));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43472 = arguments.length;
var i__5770__auto___43473 = (0);
while(true){
if((i__5770__auto___43473 < len__5769__auto___43472)){
args__5775__auto__.push((arguments[i__5770__auto___43473]));

var G__43474 = (i__5770__auto___43473 + (1));
i__5770__auto___43473 = G__43474;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41778 = conformed_args__38511__auto__;
var map__41778__$1 = cljs.core.__destructure_map(map__41778);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41778__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41778__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41778__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq41777){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41777));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43477 = arguments.length;
var i__5770__auto___43478 = (0);
while(true){
if((i__5770__auto___43478 < len__5769__auto___43477)){
args__5775__auto__.push((arguments[i__5770__auto___43478]));

var G__43479 = (i__5770__auto___43478 + (1));
i__5770__auto___43478 = G__43479;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41815 = conformed_args__38511__auto__;
var map__41815__$1 = cljs.core.__destructure_map(map__41815);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41815__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41815__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41815__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq41793){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41793));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43480 = arguments.length;
var i__5770__auto___43482 = (0);
while(true){
if((i__5770__auto___43482 < len__5769__auto___43480)){
args__5775__auto__.push((arguments[i__5770__auto___43482]));

var G__43483 = (i__5770__auto___43482 + (1));
i__5770__auto___43482 = G__43483;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41855 = conformed_args__38511__auto__;
var map__41855__$1 = cljs.core.__destructure_map(map__41855);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41855__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41855__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41855__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq41837){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41837));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43488 = arguments.length;
var i__5770__auto___43489 = (0);
while(true){
if((i__5770__auto___43489 < len__5769__auto___43488)){
args__5775__auto__.push((arguments[i__5770__auto___43489]));

var G__43490 = (i__5770__auto___43489 + (1));
i__5770__auto___43489 = G__43490;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41877 = conformed_args__38511__auto__;
var map__41877__$1 = cljs.core.__destructure_map(map__41877);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41877__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41877__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41877__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq41876){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41876));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43492 = arguments.length;
var i__5770__auto___43493 = (0);
while(true){
if((i__5770__auto___43493 < len__5769__auto___43492)){
args__5775__auto__.push((arguments[i__5770__auto___43493]));

var G__43494 = (i__5770__auto___43493 + (1));
i__5770__auto___43493 = G__43494;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41887 = conformed_args__38511__auto__;
var map__41887__$1 = cljs.core.__destructure_map(map__41887);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41887__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq41878){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41878));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43499 = arguments.length;
var i__5770__auto___43500 = (0);
while(true){
if((i__5770__auto___43500 < len__5769__auto___43499)){
args__5775__auto__.push((arguments[i__5770__auto___43500]));

var G__43502 = (i__5770__auto___43500 + (1));
i__5770__auto___43500 = G__43502;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41895 = conformed_args__38511__auto__;
var map__41895__$1 = cljs.core.__destructure_map(map__41895);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41895__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41895__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41895__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq41893){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41893));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43507 = arguments.length;
var i__5770__auto___43508 = (0);
while(true){
if((i__5770__auto___43508 < len__5769__auto___43507)){
args__5775__auto__.push((arguments[i__5770__auto___43508]));

var G__43510 = (i__5770__auto___43508 + (1));
i__5770__auto___43508 = G__43510;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41900 = conformed_args__38511__auto__;
var map__41900__$1 = cljs.core.__destructure_map(map__41900);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41900__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41900__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41900__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq41898){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41898));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43513 = arguments.length;
var i__5770__auto___43514 = (0);
while(true){
if((i__5770__auto___43514 < len__5769__auto___43513)){
args__5775__auto__.push((arguments[i__5770__auto___43514]));

var G__43515 = (i__5770__auto___43514 + (1));
i__5770__auto___43514 = G__43515;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41909 = conformed_args__38511__auto__;
var map__41909__$1 = cljs.core.__destructure_map(map__41909);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41909__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41909__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41909__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq41902){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41902));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43517 = arguments.length;
var i__5770__auto___43518 = (0);
while(true){
if((i__5770__auto___43518 < len__5769__auto___43517)){
args__5775__auto__.push((arguments[i__5770__auto___43518]));

var G__43519 = (i__5770__auto___43518 + (1));
i__5770__auto___43518 = G__43519;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41918 = conformed_args__38511__auto__;
var map__41918__$1 = cljs.core.__destructure_map(map__41918);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41918__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41918__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41918__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq41912){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41912));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43521 = arguments.length;
var i__5770__auto___43522 = (0);
while(true){
if((i__5770__auto___43522 < len__5769__auto___43521)){
args__5775__auto__.push((arguments[i__5770__auto___43522]));

var G__43523 = (i__5770__auto___43522 + (1));
i__5770__auto___43522 = G__43523;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41922 = conformed_args__38511__auto__;
var map__41922__$1 = cljs.core.__destructure_map(map__41922);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41922__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41922__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41922__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq41920){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41920));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43524 = arguments.length;
var i__5770__auto___43525 = (0);
while(true){
if((i__5770__auto___43525 < len__5769__auto___43524)){
args__5775__auto__.push((arguments[i__5770__auto___43525]));

var G__43526 = (i__5770__auto___43525 + (1));
i__5770__auto___43525 = G__43526;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41925 = conformed_args__38511__auto__;
var map__41925__$1 = cljs.core.__destructure_map(map__41925);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41925__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41925__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41925__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq41924){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41924));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43528 = arguments.length;
var i__5770__auto___43529 = (0);
while(true){
if((i__5770__auto___43529 < len__5769__auto___43528)){
args__5775__auto__.push((arguments[i__5770__auto___43529]));

var G__43530 = (i__5770__auto___43529 + (1));
i__5770__auto___43529 = G__43530;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41931 = conformed_args__38511__auto__;
var map__41931__$1 = cljs.core.__destructure_map(map__41931);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41931__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41931__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41931__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq41928){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41928));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43533 = arguments.length;
var i__5770__auto___43534 = (0);
while(true){
if((i__5770__auto___43534 < len__5769__auto___43533)){
args__5775__auto__.push((arguments[i__5770__auto___43534]));

var G__43535 = (i__5770__auto___43534 + (1));
i__5770__auto___43534 = G__43535;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41935 = conformed_args__38511__auto__;
var map__41935__$1 = cljs.core.__destructure_map(map__41935);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41935__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41935__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41935__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq41932){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41932));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43536 = arguments.length;
var i__5770__auto___43537 = (0);
while(true){
if((i__5770__auto___43537 < len__5769__auto___43536)){
args__5775__auto__.push((arguments[i__5770__auto___43537]));

var G__43538 = (i__5770__auto___43537 + (1));
i__5770__auto___43537 = G__43538;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41937 = conformed_args__38511__auto__;
var map__41937__$1 = cljs.core.__destructure_map(map__41937);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41937__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41937__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq41936){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41936));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43539 = arguments.length;
var i__5770__auto___43540 = (0);
while(true){
if((i__5770__auto___43540 < len__5769__auto___43539)){
args__5775__auto__.push((arguments[i__5770__auto___43540]));

var G__43541 = (i__5770__auto___43540 + (1));
i__5770__auto___43540 = G__43541;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41941 = conformed_args__38511__auto__;
var map__41941__$1 = cljs.core.__destructure_map(map__41941);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41941__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41941__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41941__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq41938){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41938));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43543 = arguments.length;
var i__5770__auto___43544 = (0);
while(true){
if((i__5770__auto___43544 < len__5769__auto___43543)){
args__5775__auto__.push((arguments[i__5770__auto___43544]));

var G__43545 = (i__5770__auto___43544 + (1));
i__5770__auto___43544 = G__43545;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41945 = conformed_args__38511__auto__;
var map__41945__$1 = cljs.core.__destructure_map(map__41945);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41945__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41945__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41945__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq41944){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41944));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43547 = arguments.length;
var i__5770__auto___43548 = (0);
while(true){
if((i__5770__auto___43548 < len__5769__auto___43547)){
args__5775__auto__.push((arguments[i__5770__auto___43548]));

var G__43549 = (i__5770__auto___43548 + (1));
i__5770__auto___43548 = G__43549;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41949 = conformed_args__38511__auto__;
var map__41949__$1 = cljs.core.__destructure_map(map__41949);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41949__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41949__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41949__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq41947){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41947));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43554 = arguments.length;
var i__5770__auto___43555 = (0);
while(true){
if((i__5770__auto___43555 < len__5769__auto___43554)){
args__5775__auto__.push((arguments[i__5770__auto___43555]));

var G__43557 = (i__5770__auto___43555 + (1));
i__5770__auto___43555 = G__43557;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41954 = conformed_args__38511__auto__;
var map__41954__$1 = cljs.core.__destructure_map(map__41954);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41954__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41954__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41954__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq41952){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41952));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43559 = arguments.length;
var i__5770__auto___43560 = (0);
while(true){
if((i__5770__auto___43560 < len__5769__auto___43559)){
args__5775__auto__.push((arguments[i__5770__auto___43560]));

var G__43565 = (i__5770__auto___43560 + (1));
i__5770__auto___43560 = G__43565;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41956 = conformed_args__38511__auto__;
var map__41956__$1 = cljs.core.__destructure_map(map__41956);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41956__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41956__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41956__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq41955){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41955));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43567 = arguments.length;
var i__5770__auto___43568 = (0);
while(true){
if((i__5770__auto___43568 < len__5769__auto___43567)){
args__5775__auto__.push((arguments[i__5770__auto___43568]));

var G__43569 = (i__5770__auto___43568 + (1));
i__5770__auto___43568 = G__43569;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41960 = conformed_args__38511__auto__;
var map__41960__$1 = cljs.core.__destructure_map(map__41960);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41960__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41960__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41960__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq41959){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41959));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43572 = arguments.length;
var i__5770__auto___43573 = (0);
while(true){
if((i__5770__auto___43573 < len__5769__auto___43572)){
args__5775__auto__.push((arguments[i__5770__auto___43573]));

var G__43574 = (i__5770__auto___43573 + (1));
i__5770__auto___43573 = G__43574;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41964 = conformed_args__38511__auto__;
var map__41964__$1 = cljs.core.__destructure_map(map__41964);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41964__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41964__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41964__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq41961){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41961));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43577 = arguments.length;
var i__5770__auto___43578 = (0);
while(true){
if((i__5770__auto___43578 < len__5769__auto___43577)){
args__5775__auto__.push((arguments[i__5770__auto___43578]));

var G__43579 = (i__5770__auto___43578 + (1));
i__5770__auto___43578 = G__43579;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41968 = conformed_args__38511__auto__;
var map__41968__$1 = cljs.core.__destructure_map(map__41968);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41968__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41968__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41968__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq41965){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41965));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43581 = arguments.length;
var i__5770__auto___43582 = (0);
while(true){
if((i__5770__auto___43582 < len__5769__auto___43581)){
args__5775__auto__.push((arguments[i__5770__auto___43582]));

var G__43583 = (i__5770__auto___43582 + (1));
i__5770__auto___43582 = G__43583;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41972 = conformed_args__38511__auto__;
var map__41972__$1 = cljs.core.__destructure_map(map__41972);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41972__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41972__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41972__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq41970){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41970));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43587 = arguments.length;
var i__5770__auto___43588 = (0);
while(true){
if((i__5770__auto___43588 < len__5769__auto___43587)){
args__5775__auto__.push((arguments[i__5770__auto___43588]));

var G__43589 = (i__5770__auto___43588 + (1));
i__5770__auto___43588 = G__43589;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41977 = conformed_args__38511__auto__;
var map__41977__$1 = cljs.core.__destructure_map(map__41977);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41977__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41977__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41977__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq41974){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41974));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43590 = arguments.length;
var i__5770__auto___43591 = (0);
while(true){
if((i__5770__auto___43591 < len__5769__auto___43590)){
args__5775__auto__.push((arguments[i__5770__auto___43591]));

var G__43592 = (i__5770__auto___43591 + (1));
i__5770__auto___43591 = G__43592;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41980 = conformed_args__38511__auto__;
var map__41980__$1 = cljs.core.__destructure_map(map__41980);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41980__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41980__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41980__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq41979){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41979));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43595 = arguments.length;
var i__5770__auto___43596 = (0);
while(true){
if((i__5770__auto___43596 < len__5769__auto___43595)){
args__5775__auto__.push((arguments[i__5770__auto___43596]));

var G__43597 = (i__5770__auto___43596 + (1));
i__5770__auto___43596 = G__43597;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41982 = conformed_args__38511__auto__;
var map__41982__$1 = cljs.core.__destructure_map(map__41982);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41982__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41982__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41982__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq41981){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41981));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43599 = arguments.length;
var i__5770__auto___43600 = (0);
while(true){
if((i__5770__auto___43600 < len__5769__auto___43599)){
args__5775__auto__.push((arguments[i__5770__auto___43600]));

var G__43601 = (i__5770__auto___43600 + (1));
i__5770__auto___43600 = G__43601;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__41985 = conformed_args__38511__auto__;
var map__41985__$1 = cljs.core.__destructure_map(map__41985);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41985__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41985__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41985__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq41983){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41983));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43603 = arguments.length;
var i__5770__auto___43604 = (0);
while(true){
if((i__5770__auto___43604 < len__5769__auto___43603)){
args__5775__auto__.push((arguments[i__5770__auto___43604]));

var G__43605 = (i__5770__auto___43604 + (1));
i__5770__auto___43604 = G__43605;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42001 = conformed_args__38511__auto__;
var map__42001__$1 = cljs.core.__destructure_map(map__42001);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42001__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42001__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42001__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq41991){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41991));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43611 = arguments.length;
var i__5770__auto___43612 = (0);
while(true){
if((i__5770__auto___43612 < len__5769__auto___43611)){
args__5775__auto__.push((arguments[i__5770__auto___43612]));

var G__43613 = (i__5770__auto___43612 + (1));
i__5770__auto___43612 = G__43613;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42010 = conformed_args__38511__auto__;
var map__42010__$1 = cljs.core.__destructure_map(map__42010);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42010__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42010__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42010__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq42009){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42009));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43615 = arguments.length;
var i__5770__auto___43616 = (0);
while(true){
if((i__5770__auto___43616 < len__5769__auto___43615)){
args__5775__auto__.push((arguments[i__5770__auto___43616]));

var G__43617 = (i__5770__auto___43616 + (1));
i__5770__auto___43616 = G__43617;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42013 = conformed_args__38511__auto__;
var map__42013__$1 = cljs.core.__destructure_map(map__42013);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42013__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42013__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42013__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq42012){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42012));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43619 = arguments.length;
var i__5770__auto___43620 = (0);
while(true){
if((i__5770__auto___43620 < len__5769__auto___43619)){
args__5775__auto__.push((arguments[i__5770__auto___43620]));

var G__43621 = (i__5770__auto___43620 + (1));
i__5770__auto___43620 = G__43621;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42015 = conformed_args__38511__auto__;
var map__42015__$1 = cljs.core.__destructure_map(map__42015);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42015__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42015__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42015__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq42014){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42014));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43623 = arguments.length;
var i__5770__auto___43625 = (0);
while(true){
if((i__5770__auto___43625 < len__5769__auto___43623)){
args__5775__auto__.push((arguments[i__5770__auto___43625]));

var G__43626 = (i__5770__auto___43625 + (1));
i__5770__auto___43625 = G__43626;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42018 = conformed_args__38511__auto__;
var map__42018__$1 = cljs.core.__destructure_map(map__42018);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42018__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42018__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42018__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq42016){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42016));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43628 = arguments.length;
var i__5770__auto___43629 = (0);
while(true){
if((i__5770__auto___43629 < len__5769__auto___43628)){
args__5775__auto__.push((arguments[i__5770__auto___43629]));

var G__43630 = (i__5770__auto___43629 + (1));
i__5770__auto___43629 = G__43630;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42021 = conformed_args__38511__auto__;
var map__42021__$1 = cljs.core.__destructure_map(map__42021);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42021__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42021__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42021__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq42019){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42019));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43632 = arguments.length;
var i__5770__auto___43633 = (0);
while(true){
if((i__5770__auto___43633 < len__5769__auto___43632)){
args__5775__auto__.push((arguments[i__5770__auto___43633]));

var G__43634 = (i__5770__auto___43633 + (1));
i__5770__auto___43633 = G__43634;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42024 = conformed_args__38511__auto__;
var map__42024__$1 = cljs.core.__destructure_map(map__42024);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42024__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42024__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42024__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq42023){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42023));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43636 = arguments.length;
var i__5770__auto___43637 = (0);
while(true){
if((i__5770__auto___43637 < len__5769__auto___43636)){
args__5775__auto__.push((arguments[i__5770__auto___43637]));

var G__43638 = (i__5770__auto___43637 + (1));
i__5770__auto___43637 = G__43638;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42029 = conformed_args__38511__auto__;
var map__42029__$1 = cljs.core.__destructure_map(map__42029);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42029__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42029__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42029__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq42027){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42027));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43640 = arguments.length;
var i__5770__auto___43641 = (0);
while(true){
if((i__5770__auto___43641 < len__5769__auto___43640)){
args__5775__auto__.push((arguments[i__5770__auto___43641]));

var G__43642 = (i__5770__auto___43641 + (1));
i__5770__auto___43641 = G__43642;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42035 = conformed_args__38511__auto__;
var map__42035__$1 = cljs.core.__destructure_map(map__42035);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42035__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42035__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42035__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq42030){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42030));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43648 = arguments.length;
var i__5770__auto___43650 = (0);
while(true){
if((i__5770__auto___43650 < len__5769__auto___43648)){
args__5775__auto__.push((arguments[i__5770__auto___43650]));

var G__43651 = (i__5770__auto___43650 + (1));
i__5770__auto___43650 = G__43651;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42044 = conformed_args__38511__auto__;
var map__42044__$1 = cljs.core.__destructure_map(map__42044);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42044__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42044__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42044__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq42043){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42043));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43653 = arguments.length;
var i__5770__auto___43654 = (0);
while(true){
if((i__5770__auto___43654 < len__5769__auto___43653)){
args__5775__auto__.push((arguments[i__5770__auto___43654]));

var G__43655 = (i__5770__auto___43654 + (1));
i__5770__auto___43654 = G__43655;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42052 = conformed_args__38511__auto__;
var map__42052__$1 = cljs.core.__destructure_map(map__42052);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42052__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42052__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42052__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq42047){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42047));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43657 = arguments.length;
var i__5770__auto___43658 = (0);
while(true){
if((i__5770__auto___43658 < len__5769__auto___43657)){
args__5775__auto__.push((arguments[i__5770__auto___43658]));

var G__43659 = (i__5770__auto___43658 + (1));
i__5770__auto___43658 = G__43659;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42060 = conformed_args__38511__auto__;
var map__42060__$1 = cljs.core.__destructure_map(map__42060);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42060__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42060__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42060__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq42057){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42057));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43662 = arguments.length;
var i__5770__auto___43663 = (0);
while(true){
if((i__5770__auto___43663 < len__5769__auto___43662)){
args__5775__auto__.push((arguments[i__5770__auto___43663]));

var G__43665 = (i__5770__auto___43663 + (1));
i__5770__auto___43663 = G__43665;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42071 = conformed_args__38511__auto__;
var map__42071__$1 = cljs.core.__destructure_map(map__42071);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42071__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42071__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42071__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq42067){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42067));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43667 = arguments.length;
var i__5770__auto___43668 = (0);
while(true){
if((i__5770__auto___43668 < len__5769__auto___43667)){
args__5775__auto__.push((arguments[i__5770__auto___43668]));

var G__43669 = (i__5770__auto___43668 + (1));
i__5770__auto___43668 = G__43669;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42092 = conformed_args__38511__auto__;
var map__42092__$1 = cljs.core.__destructure_map(map__42092);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42092__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42092__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42092__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq42087){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42087));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43671 = arguments.length;
var i__5770__auto___43672 = (0);
while(true){
if((i__5770__auto___43672 < len__5769__auto___43671)){
args__5775__auto__.push((arguments[i__5770__auto___43672]));

var G__43673 = (i__5770__auto___43672 + (1));
i__5770__auto___43672 = G__43673;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42109 = conformed_args__38511__auto__;
var map__42109__$1 = cljs.core.__destructure_map(map__42109);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42109__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42109__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42109__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq42101){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42101));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43675 = arguments.length;
var i__5770__auto___43676 = (0);
while(true){
if((i__5770__auto___43676 < len__5769__auto___43675)){
args__5775__auto__.push((arguments[i__5770__auto___43676]));

var G__43677 = (i__5770__auto___43676 + (1));
i__5770__auto___43676 = G__43677;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42120 = conformed_args__38511__auto__;
var map__42120__$1 = cljs.core.__destructure_map(map__42120);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42120__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42120__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42120__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq42114){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42114));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43683 = arguments.length;
var i__5770__auto___43684 = (0);
while(true){
if((i__5770__auto___43684 < len__5769__auto___43683)){
args__5775__auto__.push((arguments[i__5770__auto___43684]));

var G__43685 = (i__5770__auto___43684 + (1));
i__5770__auto___43684 = G__43685;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42138 = conformed_args__38511__auto__;
var map__42138__$1 = cljs.core.__destructure_map(map__42138);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42138__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42138__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42138__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq42135){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42135));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43688 = arguments.length;
var i__5770__auto___43689 = (0);
while(true){
if((i__5770__auto___43689 < len__5769__auto___43688)){
args__5775__auto__.push((arguments[i__5770__auto___43689]));

var G__43690 = (i__5770__auto___43689 + (1));
i__5770__auto___43689 = G__43690;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42146 = conformed_args__38511__auto__;
var map__42146__$1 = cljs.core.__destructure_map(map__42146);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42146__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42146__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42146__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq42143){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42143));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43691 = arguments.length;
var i__5770__auto___43692 = (0);
while(true){
if((i__5770__auto___43692 < len__5769__auto___43691)){
args__5775__auto__.push((arguments[i__5770__auto___43692]));

var G__43693 = (i__5770__auto___43692 + (1));
i__5770__auto___43692 = G__43693;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42157 = conformed_args__38511__auto__;
var map__42157__$1 = cljs.core.__destructure_map(map__42157);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42157__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42157__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42157__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq42150){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42150));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43696 = arguments.length;
var i__5770__auto___43697 = (0);
while(true){
if((i__5770__auto___43697 < len__5769__auto___43696)){
args__5775__auto__.push((arguments[i__5770__auto___43697]));

var G__43698 = (i__5770__auto___43697 + (1));
i__5770__auto___43697 = G__43698;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42175 = conformed_args__38511__auto__;
var map__42175__$1 = cljs.core.__destructure_map(map__42175);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42175__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42175__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42175__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq42166){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42166));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43700 = arguments.length;
var i__5770__auto___43701 = (0);
while(true){
if((i__5770__auto___43701 < len__5769__auto___43700)){
args__5775__auto__.push((arguments[i__5770__auto___43701]));

var G__43702 = (i__5770__auto___43701 + (1));
i__5770__auto___43701 = G__43702;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42191 = conformed_args__38511__auto__;
var map__42191__$1 = cljs.core.__destructure_map(map__42191);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42191__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42191__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42191__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq42184){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42184));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43704 = arguments.length;
var i__5770__auto___43705 = (0);
while(true){
if((i__5770__auto___43705 < len__5769__auto___43704)){
args__5775__auto__.push((arguments[i__5770__auto___43705]));

var G__43706 = (i__5770__auto___43705 + (1));
i__5770__auto___43705 = G__43706;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42214 = conformed_args__38511__auto__;
var map__42214__$1 = cljs.core.__destructure_map(map__42214);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42214__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42214__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42214__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq42202){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42202));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43708 = arguments.length;
var i__5770__auto___43709 = (0);
while(true){
if((i__5770__auto___43709 < len__5769__auto___43708)){
args__5775__auto__.push((arguments[i__5770__auto___43709]));

var G__43710 = (i__5770__auto___43709 + (1));
i__5770__auto___43709 = G__43710;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42221 = conformed_args__38511__auto__;
var map__42221__$1 = cljs.core.__destructure_map(map__42221);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42221__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42221__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42221__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq42217){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42217));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43712 = arguments.length;
var i__5770__auto___43713 = (0);
while(true){
if((i__5770__auto___43713 < len__5769__auto___43712)){
args__5775__auto__.push((arguments[i__5770__auto___43713]));

var G__43714 = (i__5770__auto___43713 + (1));
i__5770__auto___43713 = G__43714;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42231 = conformed_args__38511__auto__;
var map__42231__$1 = cljs.core.__destructure_map(map__42231);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42231__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42231__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42231__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq42228){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42228));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43715 = arguments.length;
var i__5770__auto___43716 = (0);
while(true){
if((i__5770__auto___43716 < len__5769__auto___43715)){
args__5775__auto__.push((arguments[i__5770__auto___43716]));

var G__43717 = (i__5770__auto___43716 + (1));
i__5770__auto___43716 = G__43717;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42241 = conformed_args__38511__auto__;
var map__42241__$1 = cljs.core.__destructure_map(map__42241);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42241__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42241__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42241__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq42239){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42239));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43719 = arguments.length;
var i__5770__auto___43720 = (0);
while(true){
if((i__5770__auto___43720 < len__5769__auto___43719)){
args__5775__auto__.push((arguments[i__5770__auto___43720]));

var G__43721 = (i__5770__auto___43720 + (1));
i__5770__auto___43720 = G__43721;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42249 = conformed_args__38511__auto__;
var map__42249__$1 = cljs.core.__destructure_map(map__42249);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42249__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42249__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42249__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq42246){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42246));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43726 = arguments.length;
var i__5770__auto___43727 = (0);
while(true){
if((i__5770__auto___43727 < len__5769__auto___43726)){
args__5775__auto__.push((arguments[i__5770__auto___43727]));

var G__43728 = (i__5770__auto___43727 + (1));
i__5770__auto___43727 = G__43728;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42260 = conformed_args__38511__auto__;
var map__42260__$1 = cljs.core.__destructure_map(map__42260);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42260__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42260__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42260__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq42253){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42253));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43731 = arguments.length;
var i__5770__auto___43732 = (0);
while(true){
if((i__5770__auto___43732 < len__5769__auto___43731)){
args__5775__auto__.push((arguments[i__5770__auto___43732]));

var G__43733 = (i__5770__auto___43732 + (1));
i__5770__auto___43732 = G__43733;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42273 = conformed_args__38511__auto__;
var map__42273__$1 = cljs.core.__destructure_map(map__42273);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42273__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42273__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42273__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq42265){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42265));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43734 = arguments.length;
var i__5770__auto___43735 = (0);
while(true){
if((i__5770__auto___43735 < len__5769__auto___43734)){
args__5775__auto__.push((arguments[i__5770__auto___43735]));

var G__43736 = (i__5770__auto___43735 + (1));
i__5770__auto___43735 = G__43736;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42284 = conformed_args__38511__auto__;
var map__42284__$1 = cljs.core.__destructure_map(map__42284);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42284__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42284__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42284__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq42280){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42280));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43738 = arguments.length;
var i__5770__auto___43739 = (0);
while(true){
if((i__5770__auto___43739 < len__5769__auto___43738)){
args__5775__auto__.push((arguments[i__5770__auto___43739]));

var G__43740 = (i__5770__auto___43739 + (1));
i__5770__auto___43739 = G__43740;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42297 = conformed_args__38511__auto__;
var map__42297__$1 = cljs.core.__destructure_map(map__42297);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42297__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42297__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42297__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq42289){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42289));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43746 = arguments.length;
var i__5770__auto___43747 = (0);
while(true){
if((i__5770__auto___43747 < len__5769__auto___43746)){
args__5775__auto__.push((arguments[i__5770__auto___43747]));

var G__43748 = (i__5770__auto___43747 + (1));
i__5770__auto___43747 = G__43748;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42303 = conformed_args__38511__auto__;
var map__42303__$1 = cljs.core.__destructure_map(map__42303);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42303__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42303__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42303__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq42300){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42300));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43751 = arguments.length;
var i__5770__auto___43752 = (0);
while(true){
if((i__5770__auto___43752 < len__5769__auto___43751)){
args__5775__auto__.push((arguments[i__5770__auto___43752]));

var G__43753 = (i__5770__auto___43752 + (1));
i__5770__auto___43752 = G__43753;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42313 = conformed_args__38511__auto__;
var map__42313__$1 = cljs.core.__destructure_map(map__42313);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42313__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42313__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42313__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq42310){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42310));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43755 = arguments.length;
var i__5770__auto___43756 = (0);
while(true){
if((i__5770__auto___43756 < len__5769__auto___43755)){
args__5775__auto__.push((arguments[i__5770__auto___43756]));

var G__43757 = (i__5770__auto___43756 + (1));
i__5770__auto___43756 = G__43757;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42325 = conformed_args__38511__auto__;
var map__42325__$1 = cljs.core.__destructure_map(map__42325);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42325__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42325__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42325__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq42319){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42319));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43759 = arguments.length;
var i__5770__auto___43760 = (0);
while(true){
if((i__5770__auto___43760 < len__5769__auto___43759)){
args__5775__auto__.push((arguments[i__5770__auto___43760]));

var G__43761 = (i__5770__auto___43760 + (1));
i__5770__auto___43760 = G__43761;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42340 = conformed_args__38511__auto__;
var map__42340__$1 = cljs.core.__destructure_map(map__42340);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42340__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42340__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42340__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq42335){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42335));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43762 = arguments.length;
var i__5770__auto___43763 = (0);
while(true){
if((i__5770__auto___43763 < len__5769__auto___43762)){
args__5775__auto__.push((arguments[i__5770__auto___43763]));

var G__43764 = (i__5770__auto___43763 + (1));
i__5770__auto___43763 = G__43764;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42346 = conformed_args__38511__auto__;
var map__42346__$1 = cljs.core.__destructure_map(map__42346);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42346__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42346__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42346__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq42343){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42343));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43768 = arguments.length;
var i__5770__auto___43769 = (0);
while(true){
if((i__5770__auto___43769 < len__5769__auto___43768)){
args__5775__auto__.push((arguments[i__5770__auto___43769]));

var G__43770 = (i__5770__auto___43769 + (1));
i__5770__auto___43769 = G__43770;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42356 = conformed_args__38511__auto__;
var map__42356__$1 = cljs.core.__destructure_map(map__42356);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42356__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42356__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42356__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq42353){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42353));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43771 = arguments.length;
var i__5770__auto___43772 = (0);
while(true){
if((i__5770__auto___43772 < len__5769__auto___43771)){
args__5775__auto__.push((arguments[i__5770__auto___43772]));

var G__43773 = (i__5770__auto___43772 + (1));
i__5770__auto___43772 = G__43773;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42364 = conformed_args__38511__auto__;
var map__42364__$1 = cljs.core.__destructure_map(map__42364);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42364__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42364__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42364__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq42358){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42358));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43775 = arguments.length;
var i__5770__auto___43776 = (0);
while(true){
if((i__5770__auto___43776 < len__5769__auto___43775)){
args__5775__auto__.push((arguments[i__5770__auto___43776]));

var G__43777 = (i__5770__auto___43776 + (1));
i__5770__auto___43776 = G__43777;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42386 = conformed_args__38511__auto__;
var map__42386__$1 = cljs.core.__destructure_map(map__42386);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42386__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42386__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42386__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq42375){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42375));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43786 = arguments.length;
var i__5770__auto___43787 = (0);
while(true){
if((i__5770__auto___43787 < len__5769__auto___43786)){
args__5775__auto__.push((arguments[i__5770__auto___43787]));

var G__43788 = (i__5770__auto___43787 + (1));
i__5770__auto___43787 = G__43788;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42398 = conformed_args__38511__auto__;
var map__42398__$1 = cljs.core.__destructure_map(map__42398);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42398__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42398__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq42389){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42389));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43802 = arguments.length;
var i__5770__auto___43803 = (0);
while(true){
if((i__5770__auto___43803 < len__5769__auto___43802)){
args__5775__auto__.push((arguments[i__5770__auto___43803]));

var G__43808 = (i__5770__auto___43803 + (1));
i__5770__auto___43803 = G__43808;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42409 = conformed_args__38511__auto__;
var map__42409__$1 = cljs.core.__destructure_map(map__42409);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42409__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42409__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42409__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq42402){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42402));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43823 = arguments.length;
var i__5770__auto___43824 = (0);
while(true){
if((i__5770__auto___43824 < len__5769__auto___43823)){
args__5775__auto__.push((arguments[i__5770__auto___43824]));

var G__43825 = (i__5770__auto___43824 + (1));
i__5770__auto___43824 = G__43825;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42419 = conformed_args__38511__auto__;
var map__42419__$1 = cljs.core.__destructure_map(map__42419);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42419__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42419__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42419__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq42417){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42417));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43846 = arguments.length;
var i__5770__auto___43847 = (0);
while(true){
if((i__5770__auto___43847 < len__5769__auto___43846)){
args__5775__auto__.push((arguments[i__5770__auto___43847]));

var G__43853 = (i__5770__auto___43847 + (1));
i__5770__auto___43847 = G__43853;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42428 = conformed_args__38511__auto__;
var map__42428__$1 = cljs.core.__destructure_map(map__42428);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42428__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42428__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42428__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq42422){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42422));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43866 = arguments.length;
var i__5770__auto___43867 = (0);
while(true){
if((i__5770__auto___43867 < len__5769__auto___43866)){
args__5775__auto__.push((arguments[i__5770__auto___43867]));

var G__43869 = (i__5770__auto___43867 + (1));
i__5770__auto___43867 = G__43869;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42444 = conformed_args__38511__auto__;
var map__42444__$1 = cljs.core.__destructure_map(map__42444);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42444__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42444__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42444__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq42443){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42443));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43890 = arguments.length;
var i__5770__auto___43891 = (0);
while(true){
if((i__5770__auto___43891 < len__5769__auto___43890)){
args__5775__auto__.push((arguments[i__5770__auto___43891]));

var G__43892 = (i__5770__auto___43891 + (1));
i__5770__auto___43891 = G__43892;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42452 = conformed_args__38511__auto__;
var map__42452__$1 = cljs.core.__destructure_map(map__42452);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42452__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42452__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42452__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq42450){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42450));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43893 = arguments.length;
var i__5770__auto___43894 = (0);
while(true){
if((i__5770__auto___43894 < len__5769__auto___43893)){
args__5775__auto__.push((arguments[i__5770__auto___43894]));

var G__43895 = (i__5770__auto___43894 + (1));
i__5770__auto___43894 = G__43895;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42457 = conformed_args__38511__auto__;
var map__42457__$1 = cljs.core.__destructure_map(map__42457);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42457__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42457__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42457__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq42455){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42455));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43898 = arguments.length;
var i__5770__auto___43899 = (0);
while(true){
if((i__5770__auto___43899 < len__5769__auto___43898)){
args__5775__auto__.push((arguments[i__5770__auto___43899]));

var G__43900 = (i__5770__auto___43899 + (1));
i__5770__auto___43899 = G__43900;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42467 = conformed_args__38511__auto__;
var map__42467__$1 = cljs.core.__destructure_map(map__42467);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42467__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42467__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42467__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq42461){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42461));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43903 = arguments.length;
var i__5770__auto___43904 = (0);
while(true){
if((i__5770__auto___43904 < len__5769__auto___43903)){
args__5775__auto__.push((arguments[i__5770__auto___43904]));

var G__43905 = (i__5770__auto___43904 + (1));
i__5770__auto___43904 = G__43905;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42473 = conformed_args__38511__auto__;
var map__42473__$1 = cljs.core.__destructure_map(map__42473);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42473__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42473__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42473__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq42468){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42468));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43906 = arguments.length;
var i__5770__auto___43907 = (0);
while(true){
if((i__5770__auto___43907 < len__5769__auto___43906)){
args__5775__auto__.push((arguments[i__5770__auto___43907]));

var G__43908 = (i__5770__auto___43907 + (1));
i__5770__auto___43907 = G__43908;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42479 = conformed_args__38511__auto__;
var map__42479__$1 = cljs.core.__destructure_map(map__42479);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42479__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42479__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42479__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq42477){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42477));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43909 = arguments.length;
var i__5770__auto___43910 = (0);
while(true){
if((i__5770__auto___43910 < len__5769__auto___43909)){
args__5775__auto__.push((arguments[i__5770__auto___43910]));

var G__43911 = (i__5770__auto___43910 + (1));
i__5770__auto___43910 = G__43911;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42487 = conformed_args__38511__auto__;
var map__42487__$1 = cljs.core.__destructure_map(map__42487);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42487__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42487__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42487__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq42483){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42483));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43912 = arguments.length;
var i__5770__auto___43913 = (0);
while(true){
if((i__5770__auto___43913 < len__5769__auto___43912)){
args__5775__auto__.push((arguments[i__5770__auto___43913]));

var G__43914 = (i__5770__auto___43913 + (1));
i__5770__auto___43913 = G__43914;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42498 = conformed_args__38511__auto__;
var map__42498__$1 = cljs.core.__destructure_map(map__42498);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42498__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42498__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42498__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq42492){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42492));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43915 = arguments.length;
var i__5770__auto___43916 = (0);
while(true){
if((i__5770__auto___43916 < len__5769__auto___43915)){
args__5775__auto__.push((arguments[i__5770__auto___43916]));

var G__43917 = (i__5770__auto___43916 + (1));
i__5770__auto___43916 = G__43917;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42505 = conformed_args__38511__auto__;
var map__42505__$1 = cljs.core.__destructure_map(map__42505);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42505__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42505__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42505__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq42501){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42501));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43918 = arguments.length;
var i__5770__auto___43919 = (0);
while(true){
if((i__5770__auto___43919 < len__5769__auto___43918)){
args__5775__auto__.push((arguments[i__5770__auto___43919]));

var G__43920 = (i__5770__auto___43919 + (1));
i__5770__auto___43919 = G__43920;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42511 = conformed_args__38511__auto__;
var map__42511__$1 = cljs.core.__destructure_map(map__42511);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42511__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42511__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42511__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq42508){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42508));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43921 = arguments.length;
var i__5770__auto___43922 = (0);
while(true){
if((i__5770__auto___43922 < len__5769__auto___43921)){
args__5775__auto__.push((arguments[i__5770__auto___43922]));

var G__43923 = (i__5770__auto___43922 + (1));
i__5770__auto___43922 = G__43923;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42524 = conformed_args__38511__auto__;
var map__42524__$1 = cljs.core.__destructure_map(map__42524);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42524__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42524__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42524__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq42517){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42517));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43925 = arguments.length;
var i__5770__auto___43926 = (0);
while(true){
if((i__5770__auto___43926 < len__5769__auto___43925)){
args__5775__auto__.push((arguments[i__5770__auto___43926]));

var G__43927 = (i__5770__auto___43926 + (1));
i__5770__auto___43926 = G__43927;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42540 = conformed_args__38511__auto__;
var map__42540__$1 = cljs.core.__destructure_map(map__42540);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42540__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42540__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42540__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq42534){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42534));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43928 = arguments.length;
var i__5770__auto___43929 = (0);
while(true){
if((i__5770__auto___43929 < len__5769__auto___43928)){
args__5775__auto__.push((arguments[i__5770__auto___43929]));

var G__43930 = (i__5770__auto___43929 + (1));
i__5770__auto___43929 = G__43930;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42555 = conformed_args__38511__auto__;
var map__42555__$1 = cljs.core.__destructure_map(map__42555);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42555__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42555__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42555__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq42547){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42547));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43931 = arguments.length;
var i__5770__auto___43932 = (0);
while(true){
if((i__5770__auto___43932 < len__5769__auto___43931)){
args__5775__auto__.push((arguments[i__5770__auto___43932]));

var G__43933 = (i__5770__auto___43932 + (1));
i__5770__auto___43932 = G__43933;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42562 = conformed_args__38511__auto__;
var map__42562__$1 = cljs.core.__destructure_map(map__42562);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42562__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42562__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42562__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq42556){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42556));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43934 = arguments.length;
var i__5770__auto___43935 = (0);
while(true){
if((i__5770__auto___43935 < len__5769__auto___43934)){
args__5775__auto__.push((arguments[i__5770__auto___43935]));

var G__43936 = (i__5770__auto___43935 + (1));
i__5770__auto___43935 = G__43936;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42578 = conformed_args__38511__auto__;
var map__42578__$1 = cljs.core.__destructure_map(map__42578);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42578__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42578__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42578__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq42564){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42564));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43937 = arguments.length;
var i__5770__auto___43938 = (0);
while(true){
if((i__5770__auto___43938 < len__5769__auto___43937)){
args__5775__auto__.push((arguments[i__5770__auto___43938]));

var G__43939 = (i__5770__auto___43938 + (1));
i__5770__auto___43938 = G__43939;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42589 = conformed_args__38511__auto__;
var map__42589__$1 = cljs.core.__destructure_map(map__42589);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42589__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42589__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42589__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq42588){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42588));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43940 = arguments.length;
var i__5770__auto___43941 = (0);
while(true){
if((i__5770__auto___43941 < len__5769__auto___43940)){
args__5775__auto__.push((arguments[i__5770__auto___43941]));

var G__43942 = (i__5770__auto___43941 + (1));
i__5770__auto___43941 = G__43942;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42616 = conformed_args__38511__auto__;
var map__42616__$1 = cljs.core.__destructure_map(map__42616);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42616__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42616__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42616__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq42596){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42596));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43943 = arguments.length;
var i__5770__auto___43944 = (0);
while(true){
if((i__5770__auto___43944 < len__5769__auto___43943)){
args__5775__auto__.push((arguments[i__5770__auto___43944]));

var G__43945 = (i__5770__auto___43944 + (1));
i__5770__auto___43944 = G__43945;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42641 = conformed_args__38511__auto__;
var map__42641__$1 = cljs.core.__destructure_map(map__42641);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42641__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42641__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42641__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq42628){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42628));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43947 = arguments.length;
var i__5770__auto___43948 = (0);
while(true){
if((i__5770__auto___43948 < len__5769__auto___43947)){
args__5775__auto__.push((arguments[i__5770__auto___43948]));

var G__43949 = (i__5770__auto___43948 + (1));
i__5770__auto___43948 = G__43949;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42657 = conformed_args__38511__auto__;
var map__42657__$1 = cljs.core.__destructure_map(map__42657);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42657__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42657__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42657__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq42651){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42651));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43951 = arguments.length;
var i__5770__auto___43952 = (0);
while(true){
if((i__5770__auto___43952 < len__5769__auto___43951)){
args__5775__auto__.push((arguments[i__5770__auto___43952]));

var G__43953 = (i__5770__auto___43952 + (1));
i__5770__auto___43952 = G__43953;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42669 = conformed_args__38511__auto__;
var map__42669__$1 = cljs.core.__destructure_map(map__42669);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42669__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42669__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42669__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq42665){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42665));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43955 = arguments.length;
var i__5770__auto___43956 = (0);
while(true){
if((i__5770__auto___43956 < len__5769__auto___43955)){
args__5775__auto__.push((arguments[i__5770__auto___43956]));

var G__43957 = (i__5770__auto___43956 + (1));
i__5770__auto___43956 = G__43957;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42683 = conformed_args__38511__auto__;
var map__42683__$1 = cljs.core.__destructure_map(map__42683);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42683__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42683__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42683__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq42675){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42675));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43958 = arguments.length;
var i__5770__auto___43959 = (0);
while(true){
if((i__5770__auto___43959 < len__5769__auto___43958)){
args__5775__auto__.push((arguments[i__5770__auto___43959]));

var G__43960 = (i__5770__auto___43959 + (1));
i__5770__auto___43959 = G__43960;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42703 = conformed_args__38511__auto__;
var map__42703__$1 = cljs.core.__destructure_map(map__42703);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42703__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42703__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42703__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq42698){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42698));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43961 = arguments.length;
var i__5770__auto___43962 = (0);
while(true){
if((i__5770__auto___43962 < len__5769__auto___43961)){
args__5775__auto__.push((arguments[i__5770__auto___43962]));

var G__43963 = (i__5770__auto___43962 + (1));
i__5770__auto___43962 = G__43963;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42723 = conformed_args__38511__auto__;
var map__42723__$1 = cljs.core.__destructure_map(map__42723);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42723__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42723__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42723__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq42713){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42713));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43964 = arguments.length;
var i__5770__auto___43965 = (0);
while(true){
if((i__5770__auto___43965 < len__5769__auto___43964)){
args__5775__auto__.push((arguments[i__5770__auto___43965]));

var G__43966 = (i__5770__auto___43965 + (1));
i__5770__auto___43965 = G__43966;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42738 = conformed_args__38511__auto__;
var map__42738__$1 = cljs.core.__destructure_map(map__42738);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq42731){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42731));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43967 = arguments.length;
var i__5770__auto___43968 = (0);
while(true){
if((i__5770__auto___43968 < len__5769__auto___43967)){
args__5775__auto__.push((arguments[i__5770__auto___43968]));

var G__43969 = (i__5770__auto___43968 + (1));
i__5770__auto___43968 = G__43969;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42752 = conformed_args__38511__auto__;
var map__42752__$1 = cljs.core.__destructure_map(map__42752);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42752__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42752__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42752__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq42750){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42750));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43970 = arguments.length;
var i__5770__auto___43971 = (0);
while(true){
if((i__5770__auto___43971 < len__5769__auto___43970)){
args__5775__auto__.push((arguments[i__5770__auto___43971]));

var G__43972 = (i__5770__auto___43971 + (1));
i__5770__auto___43971 = G__43972;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42758 = conformed_args__38511__auto__;
var map__42758__$1 = cljs.core.__destructure_map(map__42758);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42758__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42758__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42758__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq42755){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42755));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43973 = arguments.length;
var i__5770__auto___43974 = (0);
while(true){
if((i__5770__auto___43974 < len__5769__auto___43973)){
args__5775__auto__.push((arguments[i__5770__auto___43974]));

var G__43975 = (i__5770__auto___43974 + (1));
i__5770__auto___43974 = G__43975;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42772 = conformed_args__38511__auto__;
var map__42772__$1 = cljs.core.__destructure_map(map__42772);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42772__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42772__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42772__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq42762){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42762));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43976 = arguments.length;
var i__5770__auto___43977 = (0);
while(true){
if((i__5770__auto___43977 < len__5769__auto___43976)){
args__5775__auto__.push((arguments[i__5770__auto___43977]));

var G__43978 = (i__5770__auto___43977 + (1));
i__5770__auto___43977 = G__43978;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42780 = conformed_args__38511__auto__;
var map__42780__$1 = cljs.core.__destructure_map(map__42780);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42780__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42780__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42780__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq42778){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42778));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43980 = arguments.length;
var i__5770__auto___43981 = (0);
while(true){
if((i__5770__auto___43981 < len__5769__auto___43980)){
args__5775__auto__.push((arguments[i__5770__auto___43981]));

var G__43982 = (i__5770__auto___43981 + (1));
i__5770__auto___43981 = G__43982;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42790 = conformed_args__38511__auto__;
var map__42790__$1 = cljs.core.__destructure_map(map__42790);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42790__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42790__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42790__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq42784){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42784));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43983 = arguments.length;
var i__5770__auto___43984 = (0);
while(true){
if((i__5770__auto___43984 < len__5769__auto___43983)){
args__5775__auto__.push((arguments[i__5770__auto___43984]));

var G__43985 = (i__5770__auto___43984 + (1));
i__5770__auto___43984 = G__43985;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42798 = conformed_args__38511__auto__;
var map__42798__$1 = cljs.core.__destructure_map(map__42798);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42798__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42798__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42798__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq42796){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42796));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43986 = arguments.length;
var i__5770__auto___43987 = (0);
while(true){
if((i__5770__auto___43987 < len__5769__auto___43986)){
args__5775__auto__.push((arguments[i__5770__auto___43987]));

var G__43988 = (i__5770__auto___43987 + (1));
i__5770__auto___43987 = G__43988;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42805 = conformed_args__38511__auto__;
var map__42805__$1 = cljs.core.__destructure_map(map__42805);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42805__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42805__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42805__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq42802){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42802));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43989 = arguments.length;
var i__5770__auto___43990 = (0);
while(true){
if((i__5770__auto___43990 < len__5769__auto___43989)){
args__5775__auto__.push((arguments[i__5770__auto___43990]));

var G__43991 = (i__5770__auto___43990 + (1));
i__5770__auto___43990 = G__43991;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42813 = conformed_args__38511__auto__;
var map__42813__$1 = cljs.core.__destructure_map(map__42813);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42813__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42813__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42813__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq42807){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42807));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43993 = arguments.length;
var i__5770__auto___43994 = (0);
while(true){
if((i__5770__auto___43994 < len__5769__auto___43993)){
args__5775__auto__.push((arguments[i__5770__auto___43994]));

var G__43995 = (i__5770__auto___43994 + (1));
i__5770__auto___43994 = G__43995;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42817 = conformed_args__38511__auto__;
var map__42817__$1 = cljs.core.__destructure_map(map__42817);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42817__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42817__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42817__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq42815){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42815));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43996 = arguments.length;
var i__5770__auto___43997 = (0);
while(true){
if((i__5770__auto___43997 < len__5769__auto___43996)){
args__5775__auto__.push((arguments[i__5770__auto___43997]));

var G__43998 = (i__5770__auto___43997 + (1));
i__5770__auto___43997 = G__43998;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42825 = conformed_args__38511__auto__;
var map__42825__$1 = cljs.core.__destructure_map(map__42825);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42825__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42825__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42825__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq42823){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42823));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43999 = arguments.length;
var i__5770__auto___44001 = (0);
while(true){
if((i__5770__auto___44001 < len__5769__auto___43999)){
args__5775__auto__.push((arguments[i__5770__auto___44001]));

var G__44002 = (i__5770__auto___44001 + (1));
i__5770__auto___44001 = G__44002;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__38511__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__42828 = conformed_args__38511__auto__;
var map__42828__$1 = cljs.core.__destructure_map(map__42828);
var children__38513__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42828__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__38514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42828__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__38512__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42828__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__38513__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__38513__auto__);
var attrs_value__38515__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__38512__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__38515__auto__], null),children__38513__auto____$1),css__38514__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq42826){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42826));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
