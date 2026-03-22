goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18848){
var map__18850 = p__18848;
var map__18850__$1 = cljs.core.__destructure_map(map__18850);
var m = map__18850__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18850__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18850__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18863_19358 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18864_19359 = null;
var count__18865_19360 = (0);
var i__18866_19361 = (0);
while(true){
if((i__18866_19361 < count__18865_19360)){
var f_19362 = chunk__18864_19359.cljs$core$IIndexed$_nth$arity$2(null,i__18866_19361);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19362], 0));


var G__19363 = seq__18863_19358;
var G__19364 = chunk__18864_19359;
var G__19365 = count__18865_19360;
var G__19366 = (i__18866_19361 + (1));
seq__18863_19358 = G__19363;
chunk__18864_19359 = G__19364;
count__18865_19360 = G__19365;
i__18866_19361 = G__19366;
continue;
} else {
var temp__5823__auto___19367 = cljs.core.seq(seq__18863_19358);
if(temp__5823__auto___19367){
var seq__18863_19368__$1 = temp__5823__auto___19367;
if(cljs.core.chunked_seq_QMARK_(seq__18863_19368__$1)){
var c__5673__auto___19372 = cljs.core.chunk_first(seq__18863_19368__$1);
var G__19373 = cljs.core.chunk_rest(seq__18863_19368__$1);
var G__19374 = c__5673__auto___19372;
var G__19375 = cljs.core.count(c__5673__auto___19372);
var G__19376 = (0);
seq__18863_19358 = G__19373;
chunk__18864_19359 = G__19374;
count__18865_19360 = G__19375;
i__18866_19361 = G__19376;
continue;
} else {
var f_19383 = cljs.core.first(seq__18863_19368__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19383], 0));


var G__19384 = cljs.core.next(seq__18863_19368__$1);
var G__19385 = null;
var G__19386 = (0);
var G__19387 = (0);
seq__18863_19358 = G__19384;
chunk__18864_19359 = G__19385;
count__18865_19360 = G__19386;
i__18866_19361 = G__19387;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19391 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19391], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19391)))?cljs.core.second(arglists_19391):arglists_19391)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18912_19404 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18913_19405 = null;
var count__18914_19406 = (0);
var i__18915_19407 = (0);
while(true){
if((i__18915_19407 < count__18914_19406)){
var vec__18942_19410 = chunk__18913_19405.cljs$core$IIndexed$_nth$arity$2(null,i__18915_19407);
var name_19411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18942_19410,(0),null);
var map__18945_19412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18942_19410,(1),null);
var map__18945_19413__$1 = cljs.core.__destructure_map(map__18945_19412);
var doc_19414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18945_19413__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18945_19413__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19411], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19415], 0));

if(cljs.core.truth_(doc_19414)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19414], 0));
} else {
}


var G__19420 = seq__18912_19404;
var G__19421 = chunk__18913_19405;
var G__19422 = count__18914_19406;
var G__19423 = (i__18915_19407 + (1));
seq__18912_19404 = G__19420;
chunk__18913_19405 = G__19421;
count__18914_19406 = G__19422;
i__18915_19407 = G__19423;
continue;
} else {
var temp__5823__auto___19428 = cljs.core.seq(seq__18912_19404);
if(temp__5823__auto___19428){
var seq__18912_19429__$1 = temp__5823__auto___19428;
if(cljs.core.chunked_seq_QMARK_(seq__18912_19429__$1)){
var c__5673__auto___19432 = cljs.core.chunk_first(seq__18912_19429__$1);
var G__19433 = cljs.core.chunk_rest(seq__18912_19429__$1);
var G__19434 = c__5673__auto___19432;
var G__19435 = cljs.core.count(c__5673__auto___19432);
var G__19436 = (0);
seq__18912_19404 = G__19433;
chunk__18913_19405 = G__19434;
count__18914_19406 = G__19435;
i__18915_19407 = G__19436;
continue;
} else {
var vec__18960_19437 = cljs.core.first(seq__18912_19429__$1);
var name_19438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18960_19437,(0),null);
var map__18963_19439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18960_19437,(1),null);
var map__18963_19440__$1 = cljs.core.__destructure_map(map__18963_19439);
var doc_19441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18963_19440__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18963_19440__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19438], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19442], 0));

if(cljs.core.truth_(doc_19441)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19441], 0));
} else {
}


var G__19453 = cljs.core.next(seq__18912_19429__$1);
var G__19454 = null;
var G__19455 = (0);
var G__19456 = (0);
seq__18912_19404 = G__19453;
chunk__18913_19405 = G__19454;
count__18914_19406 = G__19455;
i__18915_19407 = G__19456;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18974 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18975 = null;
var count__18976 = (0);
var i__18977 = (0);
while(true){
if((i__18977 < count__18976)){
var role = chunk__18975.cljs$core$IIndexed$_nth$arity$2(null,i__18977);
var temp__5823__auto___19465__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19465__$1)){
var spec_19467 = temp__5823__auto___19465__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19467)], 0));
} else {
}


var G__19468 = seq__18974;
var G__19469 = chunk__18975;
var G__19470 = count__18976;
var G__19471 = (i__18977 + (1));
seq__18974 = G__19468;
chunk__18975 = G__19469;
count__18976 = G__19470;
i__18977 = G__19471;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__18974);
if(temp__5823__auto____$1){
var seq__18974__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18974__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__18974__$1);
var G__19472 = cljs.core.chunk_rest(seq__18974__$1);
var G__19473 = c__5673__auto__;
var G__19474 = cljs.core.count(c__5673__auto__);
var G__19475 = (0);
seq__18974 = G__19472;
chunk__18975 = G__19473;
count__18976 = G__19474;
i__18977 = G__19475;
continue;
} else {
var role = cljs.core.first(seq__18974__$1);
var temp__5823__auto___19477__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19477__$2)){
var spec_19479 = temp__5823__auto___19477__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19479)], 0));
} else {
}


var G__19488 = cljs.core.next(seq__18974__$1);
var G__19489 = null;
var G__19490 = (0);
var G__19491 = (0);
seq__18974 = G__19488;
chunk__18975 = G__19489;
count__18976 = G__19490;
i__18977 = G__19491;
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
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19063 = datafied_throwable;
var map__19063__$1 = cljs.core.__destructure_map(map__19063);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19063__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19063__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19063__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19064 = cljs.core.last(via);
var map__19064__$1 = cljs.core.__destructure_map(map__19064);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19064__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19064__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19064__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19065 = data;
var map__19065__$1 = cljs.core.__destructure_map(map__19065);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19065__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19065__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19065__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19066 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19066__$1 = cljs.core.__destructure_map(map__19066);
var top_data = map__19066__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19066__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19088 = phase;
var G__19088__$1 = (((G__19088 instanceof cljs.core.Keyword))?G__19088.fqn:null);
switch (G__19088__$1) {
case "read-source":
var map__19100 = data;
var map__19100__$1 = cljs.core.__destructure_map(map__19100);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19118 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19118__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19118,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19118);
var G__19118__$2 = (cljs.core.truth_((function (){var fexpr__19132 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19132.cljs$core$IFn$_invoke$arity$1 ? fexpr__19132.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19132.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19118__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19118__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19118__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19118__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19146 = top_data;
var G__19146__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19146,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19146);
var G__19146__$2 = (cljs.core.truth_((function (){var fexpr__19147 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19147.cljs$core$IFn$_invoke$arity$1 ? fexpr__19147.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19147.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19146__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19146__$1);
var G__19146__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19146__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19146__$2);
var G__19146__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19146__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19146__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19146__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19146__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19167 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19167,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19167,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19167,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19167,(3),null);
var G__19179 = top_data;
var G__19179__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19179,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19179);
var G__19179__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19179__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19179__$1);
var G__19179__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19179__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19179__$2);
var G__19179__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19179__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19179__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19179__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19179__$4;
}

break;
case "execution":
var vec__19189 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19189,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19189,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19189,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19189,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19050_SHARP_){
var or__5142__auto__ = (p1__19050_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__19200 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19200.cljs$core$IFn$_invoke$arity$1 ? fexpr__19200.cljs$core$IFn$_invoke$arity$1(p1__19050_SHARP_) : fexpr__19200.call(null,p1__19050_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__19211 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19211__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19211,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19211);
var G__19211__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19211__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19211__$1);
var G__19211__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19211__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19211__$2);
var G__19211__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19211__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19211__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19211__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19211__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19088__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19251){
var map__19253 = p__19251;
var map__19253__$1 = cljs.core.__destructure_map(map__19253);
var triage_data = map__19253__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19253__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19253__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19253__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19253__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19253__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19253__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19253__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19253__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = source;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = line;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5142__auto__ = class$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__19275 = phase;
var G__19275__$1 = (((G__19275 instanceof cljs.core.Keyword))?G__19275.fqn:null);
switch (G__19275__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19279 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19280 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19281 = loc;
var G__19282 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19288_19602 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19289_19603 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19290_19604 = true;
var _STAR_print_fn_STAR__temp_val__19291_19605 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19290_19604);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19291_19605);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19232_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19232_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19289_19603);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19288_19602);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19279,G__19280,G__19281,G__19282) : format.call(null,G__19279,G__19280,G__19281,G__19282));

break;
case "macroexpansion":
var G__19302 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19303 = cause_type;
var G__19304 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19305 = loc;
var G__19306 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19302,G__19303,G__19304,G__19305,G__19306) : format.call(null,G__19302,G__19303,G__19304,G__19305,G__19306));

break;
case "compile-syntax-check":
var G__19309 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19310 = cause_type;
var G__19311 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19312 = loc;
var G__19313 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19309,G__19310,G__19311,G__19312,G__19313) : format.call(null,G__19309,G__19310,G__19311,G__19312,G__19313));

break;
case "compilation":
var G__19320 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19321 = cause_type;
var G__19322 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19323 = loc;
var G__19324 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19320,G__19321,G__19322,G__19323,G__19324) : format.call(null,G__19320,G__19321,G__19322,G__19323,G__19324));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19326 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19327 = symbol;
var G__19328 = loc;
var G__19329 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19332_19654 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19333_19655 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19334_19656 = true;
var _STAR_print_fn_STAR__temp_val__19335_19657 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19334_19656);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19335_19657);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19249_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19249_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19333_19655);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19332_19654);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19326,G__19327,G__19328,G__19329) : format.call(null,G__19326,G__19327,G__19328,G__19329));
} else {
var G__19341 = "Execution error%s at %s(%s).\n%s\n";
var G__19342 = cause_type;
var G__19343 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19344 = loc;
var G__19345 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19341,G__19342,G__19343,G__19344,G__19345) : format.call(null,G__19341,G__19342,G__19343,G__19344,G__19345));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19275__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
