goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
com.fulcrologic.guardrails.core.global_context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
/**
 * Push a global context, accessible from all threads, onto a stack.
 * Used to add information to what guardrails will report when a function failed a check.
 */
com.fulcrologic.guardrails.core.enter_global_context_BANG_ = (function com$fulcrologic$guardrails$core$enter_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cons,ctx));
});
/**
 * Pops a global context (see `enter-global-context!`).
 * Should be passed the same context that was pushed, although is not enforced, as it's only to be easily compatible with fulcro-spec's hooks API.
 */
com.fulcrologic.guardrails.core.leave_global_context_BANG_ = (function com$fulcrologic$guardrails$core$leave_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.rest);
});
com.fulcrologic.guardrails.core.get_global_context = (function com$fulcrologic$guardrails$core$get_global_context(){
return cljs.core.first(cljs.core.deref(com.fulcrologic.guardrails.core.global_context));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__62556__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62557__auto__ = (function (){var switch__62125__auto__ = (function (state_65526){
var state_val_65527 = (state_65526[(1)]);
if((state_val_65527 === (7))){
var inst_65520 = (state_65526[(2)]);
var state_65526__$1 = state_65526;
var statearr_65534_65780 = state_65526__$1;
(statearr_65534_65780[(2)] = inst_65520);

(statearr_65534_65780[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65527 === (1))){
var state_65526__$1 = state_65526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65526__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_65527 === (4))){
var inst_65522 = (state_65526[(2)]);
var state_65526__$1 = state_65526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65526__$1,inst_65522);
} else {
if((state_val_65527 === (6))){
var inst_65518 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_65526__$1 = state_65526;
var statearr_65540_65782 = state_65526__$1;
(statearr_65540_65782[(2)] = inst_65518);

(statearr_65540_65782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65527 === (3))){
var inst_65499 = (state_65526[(7)]);
var state_65526__$1 = state_65526;
if(cljs.core.truth_(inst_65499)){
var statearr_65544_65788 = state_65526__$1;
(statearr_65544_65788[(1)] = (5));

} else {
var statearr_65545_65789 = state_65526__$1;
(statearr_65545_65789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65527 === (12))){
var inst_65514 = (state_65526[(2)]);
var inst_65499 = inst_65514;
var state_65526__$1 = (function (){var statearr_65548 = state_65526;
(statearr_65548[(7)] = inst_65499);

return statearr_65548;
})();
var statearr_65549_65793 = state_65526__$1;
(statearr_65549_65793[(2)] = null);

(statearr_65549_65793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65527 === (2))){
var inst_65497 = (state_65526[(2)]);
var inst_65499 = inst_65497;
var state_65526__$1 = (function (){var statearr_65552 = state_65526;
(statearr_65552[(7)] = inst_65499);

return statearr_65552;
})();
var statearr_65553_65795 = state_65526__$1;
(statearr_65553_65795[(2)] = null);

(statearr_65553_65795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65527 === (11))){
var _ = (function (){var statearr_65554 = state_65526;
(statearr_65554[(4)] = cljs.core.rest((state_65526[(4)])));

return statearr_65554;
})();
var state_65526__$1 = state_65526;
var ex65547 = (state_65526__$1[(2)]);
var statearr_65555_65796 = state_65526__$1;
(statearr_65555_65796[(5)] = ex65547);


var statearr_65558_65797 = state_65526__$1;
(statearr_65558_65797[(1)] = (10));

(statearr_65558_65797[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65527 === (9))){
var inst_65512 = (state_65526[(2)]);
var state_65526__$1 = (function (){var statearr_65561 = state_65526;
(statearr_65561[(8)] = inst_65512);

return statearr_65561;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65526__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_65527 === (5))){
var state_65526__$1 = state_65526;
var statearr_65564_65799 = state_65526__$1;
(statearr_65564_65799[(2)] = null);

(statearr_65564_65799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65527 === (10))){
var inst_65503 = (state_65526[(2)]);
var state_65526__$1 = (function (){var statearr_65569 = state_65526;
(statearr_65569[(9)] = inst_65503);

return statearr_65569;
})();
var statearr_65570_65803 = state_65526__$1;
(statearr_65570_65803[(2)] = null);

(statearr_65570_65803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65527 === (8))){
var inst_65499 = (state_65526[(7)]);
var _ = (function (){var statearr_65575 = state_65526;
(statearr_65575[(4)] = cljs.core.cons((11),(state_65526[(4)])));

return statearr_65575;
})();
var inst_65509 = (inst_65499.cljs$core$IFn$_invoke$arity$0 ? inst_65499.cljs$core$IFn$_invoke$arity$0() : inst_65499.call(null));
var ___$1 = (function (){var statearr_65578 = state_65526;
(statearr_65578[(4)] = cljs.core.rest((state_65526[(4)])));

return statearr_65578;
})();
var state_65526__$1 = state_65526;
var statearr_65580_65804 = state_65526__$1;
(statearr_65580_65804[(2)] = inst_65509);

(statearr_65580_65804[(1)] = (9));


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
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__62126__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__62126__auto____0 = (function (){
var statearr_65584 = [null,null,null,null,null,null,null,null,null,null];
(statearr_65584[(0)] = com$fulcrologic$guardrails$core$state_machine__62126__auto__);

(statearr_65584[(1)] = (1));

return statearr_65584;
});
var com$fulcrologic$guardrails$core$state_machine__62126__auto____1 = (function (state_65526){
while(true){
var ret_value__62127__auto__ = (function (){try{while(true){
var result__62128__auto__ = switch__62125__auto__(state_65526);
if(cljs.core.keyword_identical_QMARK_(result__62128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62128__auto__;
}
break;
}
}catch (e65590){var ex__62129__auto__ = e65590;
var statearr_65594_65811 = state_65526;
(statearr_65594_65811[(2)] = ex__62129__auto__);


if(cljs.core.seq((state_65526[(4)]))){
var statearr_65596_65812 = state_65526;
(statearr_65596_65812[(1)] = cljs.core.first((state_65526[(4)])));

} else {
throw ex__62129__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65813 = state_65526;
state_65526 = G__65813;
continue;
} else {
return ret_value__62127__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__62126__auto__ = function(state_65526){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__62126__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__62126__auto____1.call(this,state_65526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__62126__auto____0;
com$fulcrologic$guardrails$core$state_machine__62126__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__62126__auto____1;
return com$fulcrologic$guardrails$core$state_machine__62126__auto__;
})()
})();
var state__62558__auto__ = (function (){var statearr_65599 = f__62557__auto__();
(statearr_65599[(6)] = c__62556__auto__);

return statearr_65599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62558__auto__);
}));

return c__62556__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__65611 = data;
var map__65611__$1 = cljs.core.__destructure_map(map__65611);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65611__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65611__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65611__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65611__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65611__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65611__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65611__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65611__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5804__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5804__auto__)){
var err = temp__5804__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.tap = (((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.tap_GT_ !== 'undefined'))?(new cljs.core.Var((function (){
return cljs.core.tap_GT_;
}),cljs.core.with_meta(new cljs.core.Symbol("cljs.core","tap>","cljs.core/tap>",895722640,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"tap>","tap>",1822490677,null),"cljs/core.cljs",20,1,11858,11858,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Sends x to any taps. Returns the result of *exec-tap-fn*, a Boolean value.",((cljs.core.tap_GT_)?cljs.core.tap_GT_.cljs$lang$test:null)]))):null);
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__65656,spec,value){
var map__65658 = p__65656;
var map__65658__$1 = cljs.core.__destructure_map(map__65658);
var tap_GT__QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65658__$1,new cljs.core.Keyword(null,"tap>?","tap>?",212454486));
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65658__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65658__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65658__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65658__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65658__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65658__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_65819 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__65820 = (function (){var and__5043__auto__ = args_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return vararg_QMARK_;
} else {
return and__5043__auto__;
}
})();
var varg_65821 = (cljs.core.truth_(vargs_QMARK__65820)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_65822 = (cljs.core.truth_(vargs_QMARK__65820)?((cljs.core.map_QMARK_(varg_65821))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_65821))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_65821))):value);
var valid_exception_65823 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_65822)){
} else {
var problem_65827 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_65822,expound_opts);
var description_65828 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_65827)].join('');
var context_65829 = com.fulcrologic.guardrails.core.get_global_context();
if(cljs.core.truth_((function (){var and__5043__auto__ = com.fulcrologic.guardrails.core.tap;
if(cljs.core.truth_(and__5043__auto__)){
return tap_GT__QMARK_;
} else {
return and__5043__auto__;
}
})())){
var G__65679_65832 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","explain-data","com.fulcrologic.guardrails/explain-data",-1120944464),cljs.spec.alpha.explain_data(spec,specable_args_65822)], null);
(com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1(G__65679_65832) : com.fulcrologic.guardrails.core.tap.call(null,G__65679_65832));
} else {
}

if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_65823,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var G__65681 = description_65828;
if(cljs.core.truth_(context_65829)){
return ["\nContext: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context_65829),G__65681].join('');
} else {
return G__65681;
}
})(),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","context","com.fulcrologic.guardrails/context",-834538901),context_65829], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_65822], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_65828,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = callsite;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e65671){var e_65839 = e65671;
com.fulcrologic.guardrails.utils.report_exception(e_65839,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_65840 = (com.fulcrologic.guardrails.core.now_ms() - start_65819);
if((duration_65840 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_65840),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_65823))){
throw cljs.core.deref(valid_exception_65823);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
