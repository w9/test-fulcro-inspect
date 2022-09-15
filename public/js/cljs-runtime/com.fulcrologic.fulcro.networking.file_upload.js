goog.provide('com.fulcrologic.fulcro.networking.file_upload');
/**
 * Create a new upload object from a string name and a js object (Blob, ArrayBuffer, or File). The resulting map is
 *   safe to store in app state. If `content-type` is supplied then the file upload support will attempt to force the
 *   content type to the one provided. Normally js File objects will auto-set their MIME type, but this can sometimes be
 *   mis-interpreted by server MIME configurations.
 * 
 *   See `attach-uploads`.
 */
com.fulcrologic.fulcro.networking.file_upload.new_upload = (function com$fulcrologic$fulcro$networking$file_upload$new_upload(var_args){
var G__41400 = arguments.length;
switch (G__41400) {
case 2:
return com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$2 = (function (name,content){
return com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$3(name,content,null);
}));

(com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$3 = (function (name,content,content_type){
var G__41406 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","name","file/name",1848919477),name,new cljs.core.Keyword("file","content","file/content",12680964),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-value","js-value",-758336661),content], null))], null);
if(cljs.core.truth_(content_type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41406,new cljs.core.Keyword("file","content-type","file/content-type",-513460014),content_type);
} else {
return G__41406;
}
}));

(com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$lang$maxFixedArity = 3);

/**
 * Converts a file input onChange event into a sequence upload objects that are compatible with `attach-uploads`.
 * 
 * If you want to manually set the content type of any item, then add a `:file/content-type` key/value pair to the
 * returned uploads (which are just clojure maps), or pass a content-type argument to have that content type applied
 * to ALL of the uploads.  NOTE: some server middleware can mis-interpret certain MIME types and open Readers on them
 * instead of byte streams, leading to file corruption of the uploaded file.  You can try forcing the MIME type to
 * `application/octet-stream` to overcome this.
 */
com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads = (function com$fulcrologic$fulcro$networking$file_upload$evt__GT_uploads(var_args){
var G__41409 = arguments.length;
switch (G__41409) {
case 2:
return com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$core$IFn$_invoke$arity$2 = (function (file_input_change_event,content_type){
var js_file_list = file_input_change_event.target.files;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (file_idx){
var js_file = js_file_list.item(file_idx);
var name = js_file.name;
return com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$3(name,js_file,content_type);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(js_file_list.length));
}));

(com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$core$IFn$_invoke$arity$1 = (function (file_input_change_event){
return com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$core$IFn$_invoke$arity$2(file_input_change_event,null);
}));

(com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$lang$maxFixedArity = 2);

/**
 * Attach js Blob or ArrayBuffer objects to the `params`. This requires that you use `http-remote` and that you
 * also install `wrap-file-upload` middleware. If you use js/File objects then the filenames of those objects
 * will be available to the mutations on the server.
 * 
 * Example usage:
 * 
 * ```
 * (let [uploads [(file-upload/new-upload "test" some-js-file)
 *                (file-upload/new-upload "other" other-js-file)]]
 *   (comp/transact! this [(some-mutation (attach-uploads {} uploads))]))
 * ```
 * 
 * If you are using a browser file input, you can use `evt->uploads`:
 * 
 * ```
 * (dom/input {:type "file"
 *             :multiple true
 *             :onChange (fn [evt]
 *                         (let [uploads (file-upload/evt->uploads evt)]
 *                           (comp/transact! this [(some-mutation (file-upload/attach-uploads {} uploads))])))})
 * ```
 * 
 */
com.fulcrologic.fulcro.networking.file_upload.attach_uploads = (function com$fulcrologic$fulcro$networking$file_upload$attach_uploads(params,objects_to_upload){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("com.fulcrologic.fulcro.networking.file-upload","uploads","com.fulcrologic.fulcro.networking.file-upload/uploads",-1519572167),objects_to_upload);
});
com.fulcrologic.fulcro.networking.file_upload.has_uploads_QMARK_ = (function com$fulcrologic$fulcro$networking$file_upload$has_uploads_QMARK_(req){
var mutations = (function (){var G__41414 = req;
var G__41414__$1 = (((G__41414 == null))?null:new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__41414));
var G__41414__$2 = (((G__41414__$1 == null))?null:edn_query_language.core.query__GT_ast(G__41414__$1));
if((G__41414__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__41414__$2);
}
})();
var mutation_with_upload = cljs.core.some((function (p__41418){
var map__41419 = p__41418;
var map__41419__$1 = cljs.core.__destructure_map(map__41419);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41419__$1,new cljs.core.Keyword(null,"params","params",710516235));
return cljs.core.contains_QMARK_(params,new cljs.core.Keyword("com.fulcrologic.fulcro.networking.file-upload","uploads","com.fulcrologic.fulcro.networking.file-upload/uploads",-1519572167));
}),mutations);
return cljs.core.boolean$(mutation_with_upload);
});
/**
 * Coerce the js object into a blob to ensure it can be uploaded.
 */
com.fulcrologic.fulcro.networking.file_upload.js_value__GT_uploadable_object = (function com$fulcrologic$fulcro$networking$file_upload$js_value__GT_uploadable_object(v,content_type){
var G__41420 = (((v instanceof Blob))?v:Blob([v]));
if(cljs.core.truth_(content_type)){
return G__41420.slice((0),v.size,content_type);
} else {
return G__41420;
}
});
/**
 * Adds support for attaching uploads to the parameters of any mutation.
 * 
 * `transit-options` - A map of options to be included when converting the mutation and params for transmission. See
 *                     `transit/transit-clj->str`. Use this to extend the transit support. This is necessary because
 *                     the regular request middleware will not be used to send transactions that include file uploads,
 *                     so any extensions to transit must be done in both places.
 * 
 * NOTE: This middleware acts as the end of the chain when it detects the need for a file upload, and rewrites the body,
 * method, and clears any content-type header. As such, it should be used in the middleware so that it will be executed
 * first:
 * 
 * ```
 * (def client-middleware
 *   (->
 *     (net/wrap-fulcro-request)
 *     (file-upload/wrap-file-upload)
 *     ...))
 * ```
 * 
 */
com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload = (function com$fulcrologic$fulcro$networking$file_upload$wrap_file_upload(var_args){
var G__41428 = arguments.length;
switch (G__41428) {
case 1:
return com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$core$IFn$_invoke$arity$2(handler,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$core$IFn$_invoke$arity$2 = (function (handler,transit_options){
return (function (req){
if(com.fulcrologic.fulcro.networking.file_upload.has_uploads_QMARK_(req)){
try{var vec__41431 = com.fulcrologic.fulcro.networking.http_remote.desired_response_type(req);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41431,(0),null);
var response_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41431,(1),null);
var ast = edn_query_language.core.query__GT_ast(body);
var ast_to_send = cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__41425_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(n,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.networking.file-upload","uploads","com.fulcrologic.fulcro.networking.file-upload/uploads",-1519572167));
}),p1__41425_SHARP_);
}));
var txn = edn_query_language.core.ast__GT_query(ast_to_send);
var form = (new FormData());
form.append("upload-transaction",com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2(txn,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transit_options,new cljs.core.Keyword(null,"metadata?","metadata?",-1465487050),false)));

var seq__41436_41592 = cljs.core.seq(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
var chunk__41438_41593 = null;
var count__41440_41594 = (0);
var i__41442_41595 = (0);
while(true){
if((i__41442_41595 < count__41440_41594)){
var map__41499_41596 = chunk__41438_41593.cljs$core$IIndexed$_nth$arity$2(null,i__41442_41595);
var map__41499_41597__$1 = cljs.core.__destructure_map(map__41499_41596);
var dispatch_key_41598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41499_41597__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var params_41599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41499_41597__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5804__auto___41600 = new cljs.core.Keyword("com.fulcrologic.fulcro.networking.file-upload","uploads","com.fulcrologic.fulcro.networking.file-upload/uploads",-1519572167).cljs$core$IFn$_invoke$arity$1(params_41599);
if(cljs.core.truth_(temp__5804__auto___41600)){
var uploads_41601 = temp__5804__auto___41600;
var seq__41501_41602 = cljs.core.seq(uploads_41601);
var chunk__41502_41603 = null;
var count__41503_41604 = (0);
var i__41504_41605 = (0);
while(true){
if((i__41504_41605 < count__41503_41604)){
var map__41517_41606 = chunk__41502_41603.cljs$core$IIndexed$_nth$arity$2(null,i__41504_41605);
var map__41517_41607__$1 = cljs.core.__destructure_map(map__41517_41606);
var name_41608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41517_41607__$1,new cljs.core.Keyword("file","name","file/name",1848919477));
var content_41609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41517_41607__$1,new cljs.core.Keyword("file","content","file/content",12680964));
var content_type_41610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41517_41607__$1,new cljs.core.Keyword("file","content-type","file/content-type",-513460014));
var name_with_mutation_41611 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key_41598),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_41608)].join('');
var js_value_41612 = new cljs.core.Keyword(null,"js-value","js-value",-758336661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(content_41609));
var content_41613__$1 = (function (){var G__41518 = js_value_41612;
if((G__41518 == null)){
return null;
} else {
return com.fulcrologic.fulcro.networking.file_upload.js_value__GT_uploadable_object(G__41518,content_type_41610);
}
})();
form.append("files",content_41613__$1,name_with_mutation_41611);


var G__41615 = seq__41501_41602;
var G__41616 = chunk__41502_41603;
var G__41617 = count__41503_41604;
var G__41618 = (i__41504_41605 + (1));
seq__41501_41602 = G__41615;
chunk__41502_41603 = G__41616;
count__41503_41604 = G__41617;
i__41504_41605 = G__41618;
continue;
} else {
var temp__5804__auto___41619__$1 = cljs.core.seq(seq__41501_41602);
if(temp__5804__auto___41619__$1){
var seq__41501_41620__$1 = temp__5804__auto___41619__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41501_41620__$1)){
var c__5568__auto___41621 = cljs.core.chunk_first(seq__41501_41620__$1);
var G__41622 = cljs.core.chunk_rest(seq__41501_41620__$1);
var G__41623 = c__5568__auto___41621;
var G__41624 = cljs.core.count(c__5568__auto___41621);
var G__41625 = (0);
seq__41501_41602 = G__41622;
chunk__41502_41603 = G__41623;
count__41503_41604 = G__41624;
i__41504_41605 = G__41625;
continue;
} else {
var map__41524_41627 = cljs.core.first(seq__41501_41620__$1);
var map__41524_41628__$1 = cljs.core.__destructure_map(map__41524_41627);
var name_41629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41524_41628__$1,new cljs.core.Keyword("file","name","file/name",1848919477));
var content_41630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41524_41628__$1,new cljs.core.Keyword("file","content","file/content",12680964));
var content_type_41631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41524_41628__$1,new cljs.core.Keyword("file","content-type","file/content-type",-513460014));
var name_with_mutation_41633 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key_41598),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_41629)].join('');
var js_value_41634 = new cljs.core.Keyword(null,"js-value","js-value",-758336661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(content_41630));
var content_41635__$1 = (function (){var G__41525 = js_value_41634;
if((G__41525 == null)){
return null;
} else {
return com.fulcrologic.fulcro.networking.file_upload.js_value__GT_uploadable_object(G__41525,content_type_41631);
}
})();
form.append("files",content_41635__$1,name_with_mutation_41633);


var G__41636 = cljs.core.next(seq__41501_41620__$1);
var G__41637 = null;
var G__41638 = (0);
var G__41639 = (0);
seq__41501_41602 = G__41636;
chunk__41502_41603 = G__41637;
count__41503_41604 = G__41638;
i__41504_41605 = G__41639;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__41640 = seq__41436_41592;
var G__41641 = chunk__41438_41593;
var G__41642 = count__41440_41594;
var G__41643 = (i__41442_41595 + (1));
seq__41436_41592 = G__41640;
chunk__41438_41593 = G__41641;
count__41440_41594 = G__41642;
i__41442_41595 = G__41643;
continue;
} else {
var temp__5804__auto___41644 = cljs.core.seq(seq__41436_41592);
if(temp__5804__auto___41644){
var seq__41436_41646__$1 = temp__5804__auto___41644;
if(cljs.core.chunked_seq_QMARK_(seq__41436_41646__$1)){
var c__5568__auto___41647 = cljs.core.chunk_first(seq__41436_41646__$1);
var G__41648 = cljs.core.chunk_rest(seq__41436_41646__$1);
var G__41649 = c__5568__auto___41647;
var G__41650 = cljs.core.count(c__5568__auto___41647);
var G__41651 = (0);
seq__41436_41592 = G__41648;
chunk__41438_41593 = G__41649;
count__41440_41594 = G__41650;
i__41442_41595 = G__41651;
continue;
} else {
var map__41538_41652 = cljs.core.first(seq__41436_41646__$1);
var map__41538_41653__$1 = cljs.core.__destructure_map(map__41538_41652);
var dispatch_key_41654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41538_41653__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var params_41655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41538_41653__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5804__auto___41656__$1 = new cljs.core.Keyword("com.fulcrologic.fulcro.networking.file-upload","uploads","com.fulcrologic.fulcro.networking.file-upload/uploads",-1519572167).cljs$core$IFn$_invoke$arity$1(params_41655);
if(cljs.core.truth_(temp__5804__auto___41656__$1)){
var uploads_41657 = temp__5804__auto___41656__$1;
var seq__41540_41658 = cljs.core.seq(uploads_41657);
var chunk__41541_41659 = null;
var count__41542_41660 = (0);
var i__41543_41661 = (0);
while(true){
if((i__41543_41661 < count__41542_41660)){
var map__41558_41662 = chunk__41541_41659.cljs$core$IIndexed$_nth$arity$2(null,i__41543_41661);
var map__41558_41663__$1 = cljs.core.__destructure_map(map__41558_41662);
var name_41664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41558_41663__$1,new cljs.core.Keyword("file","name","file/name",1848919477));
var content_41665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41558_41663__$1,new cljs.core.Keyword("file","content","file/content",12680964));
var content_type_41666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41558_41663__$1,new cljs.core.Keyword("file","content-type","file/content-type",-513460014));
var name_with_mutation_41667 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key_41654),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_41664)].join('');
var js_value_41668 = new cljs.core.Keyword(null,"js-value","js-value",-758336661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(content_41665));
var content_41669__$1 = (function (){var G__41559 = js_value_41668;
if((G__41559 == null)){
return null;
} else {
return com.fulcrologic.fulcro.networking.file_upload.js_value__GT_uploadable_object(G__41559,content_type_41666);
}
})();
form.append("files",content_41669__$1,name_with_mutation_41667);


var G__41671 = seq__41540_41658;
var G__41672 = chunk__41541_41659;
var G__41673 = count__41542_41660;
var G__41674 = (i__41543_41661 + (1));
seq__41540_41658 = G__41671;
chunk__41541_41659 = G__41672;
count__41542_41660 = G__41673;
i__41543_41661 = G__41674;
continue;
} else {
var temp__5804__auto___41676__$2 = cljs.core.seq(seq__41540_41658);
if(temp__5804__auto___41676__$2){
var seq__41540_41677__$1 = temp__5804__auto___41676__$2;
if(cljs.core.chunked_seq_QMARK_(seq__41540_41677__$1)){
var c__5568__auto___41678 = cljs.core.chunk_first(seq__41540_41677__$1);
var G__41679 = cljs.core.chunk_rest(seq__41540_41677__$1);
var G__41680 = c__5568__auto___41678;
var G__41681 = cljs.core.count(c__5568__auto___41678);
var G__41682 = (0);
seq__41540_41658 = G__41679;
chunk__41541_41659 = G__41680;
count__41542_41660 = G__41681;
i__41543_41661 = G__41682;
continue;
} else {
var map__41562_41684 = cljs.core.first(seq__41540_41677__$1);
var map__41562_41685__$1 = cljs.core.__destructure_map(map__41562_41684);
var name_41686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41562_41685__$1,new cljs.core.Keyword("file","name","file/name",1848919477));
var content_41687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41562_41685__$1,new cljs.core.Keyword("file","content","file/content",12680964));
var content_type_41688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41562_41685__$1,new cljs.core.Keyword("file","content-type","file/content-type",-513460014));
var name_with_mutation_41690 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key_41654),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_41686)].join('');
var js_value_41691 = new cljs.core.Keyword(null,"js-value","js-value",-758336661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(content_41687));
var content_41692__$1 = (function (){var G__41563 = js_value_41691;
if((G__41563 == null)){
return null;
} else {
return com.fulcrologic.fulcro.networking.file_upload.js_value__GT_uploadable_object(G__41563,content_type_41688);
}
})();
form.append("files",content_41692__$1,name_with_mutation_41690);


var G__41693 = cljs.core.next(seq__41540_41677__$1);
var G__41694 = null;
var G__41695 = (0);
var G__41696 = (0);
seq__41540_41658 = G__41693;
chunk__41541_41659 = G__41694;
count__41542_41660 = G__41695;
i__41543_41661 = G__41696;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__41697 = cljs.core.next(seq__41436_41646__$1);
var G__41698 = null;
var G__41699 = (0);
var G__41700 = (0);
seq__41436_41592 = G__41697;
chunk__41438_41593 = G__41698;
count__41440_41594 = G__41699;
i__41442_41595 = G__41700;
continue;
}
} else {
}
}
break;
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(req,new cljs.core.Keyword(null,"body","body",-2049205669),form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"response-type","response-type",-1493770458),response_type], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.dissoc,"Content-Type");
}catch (e41430){var e = e41430;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.networking.file-upload",null,123,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Exception while converting mutation with file uploads. See https://book.fulcrologic.com/#err-fu-mut-convert-exc"], null);
}),null)),null,-217441730,null);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),null,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687)], null);
}} else {
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(req) : handler.call(null,req));
}
});
}));

(com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.networking.file_upload.js.map
