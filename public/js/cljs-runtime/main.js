goog.provide('main');
if((typeof main !== 'undefined') && (typeof main.parent !== 'undefined')){
} else {
main.parent = document.getElementById("parent");
}
if((typeof main !== 'undefined') && (typeof main.store !== 'undefined')){
} else {
main.store = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
main.start = (function main$start(){
cljs.core.add_watch(main.store,new cljs.core.Keyword("main","render","main/render",-1412549761),(function (_,___$1,___$2,state){
return replicant.dom.render(main.parent,render.render(state));
}));

replicant.dom.set_dispatch_BANG_((function (dispatch_data,actions){
return nexus.registry.dispatch(main.store,dispatch_data,actions);
}));

return cljs.core.reset_BANG_(main.store,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","started-at","app/started-at",1318737607),(new Date()),new cljs.core.Keyword(null,"selected-page","selected-page",-740841614),routing.extract_location(location.hash)], null));
});
nexus.registry.register_effect_BANG_(new cljs.core.Keyword("store","assoc-in","store/assoc-in",-1777909175),(function (_,store,path,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(store,cljs.core.assoc_in,path,value);
}));
main.start();

//# sourceMappingURL=main.js.map
