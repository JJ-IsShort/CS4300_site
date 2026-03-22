goog.provide('routing');
routing.pages = new cljs.core.PersistentArrayMap(null, 1, ["Home",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("location","Home","location/Home",-1593842651)], null)], null);
routing.extract_location = (function routing$extract_location(path){
var or__5142__auto__ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",path))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("location","Home","location/Home",-1593842651),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY], null):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var temp__5823__auto__ = cljs.core.re_find(/\/?#\/(\w+)\/?(.*)?/,path);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__13429 = temp__5823__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13429,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13429,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13429,(2),null);
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(routing.pages,target);
if(cljs.core.truth_(temp__5821__auto__)){
var page = temp__5821__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(page,(1)),new cljs.core.Keyword(null,"data","data",-232669377),(function (){var data_cons = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(page,(0),cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.fn_QMARK_(data_cons)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(data_cons,args);
} else {
return data_cons;
}
})()], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("location","Home","location/Home",-1593842651),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY], null);
}
} else {
return null;
}
}
});
routing.jump_to = (function routing$jump_to(address,store){
history.pushState("","",address);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(store,cljs.core.assoc,new cljs.core.Keyword(null,"selected-page","selected-page",-740841614),routing.extract_location(address));
});

//# sourceMappingURL=routing.js.map
