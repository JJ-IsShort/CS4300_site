goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__25131){
var map__25132 = p__25131;
var map__25132__$1 = cljs.core.__destructure_map(map__25132);
var m = map__25132__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25132__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25132__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__25134_25406 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25135_25407 = null;
var count__25136_25408 = (0);
var i__25137_25409 = (0);
while(true){
if((i__25137_25409 < count__25136_25408)){
var f_25410 = chunk__25135_25407.cljs$core$IIndexed$_nth$arity$2(null,i__25137_25409);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25410], 0));


var G__25411 = seq__25134_25406;
var G__25412 = chunk__25135_25407;
var G__25413 = count__25136_25408;
var G__25414 = (i__25137_25409 + (1));
seq__25134_25406 = G__25411;
chunk__25135_25407 = G__25412;
count__25136_25408 = G__25413;
i__25137_25409 = G__25414;
continue;
} else {
var temp__5823__auto___25415 = cljs.core.seq(seq__25134_25406);
if(temp__5823__auto___25415){
var seq__25134_25416__$1 = temp__5823__auto___25415;
if(cljs.core.chunked_seq_QMARK_(seq__25134_25416__$1)){
var c__5673__auto___25417 = cljs.core.chunk_first(seq__25134_25416__$1);
var G__25418 = cljs.core.chunk_rest(seq__25134_25416__$1);
var G__25419 = c__5673__auto___25417;
var G__25420 = cljs.core.count(c__5673__auto___25417);
var G__25421 = (0);
seq__25134_25406 = G__25418;
chunk__25135_25407 = G__25419;
count__25136_25408 = G__25420;
i__25137_25409 = G__25421;
continue;
} else {
var f_25422 = cljs.core.first(seq__25134_25416__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25422], 0));


var G__25423 = cljs.core.next(seq__25134_25416__$1);
var G__25424 = null;
var G__25425 = (0);
var G__25426 = (0);
seq__25134_25406 = G__25423;
chunk__25135_25407 = G__25424;
count__25136_25408 = G__25425;
i__25137_25409 = G__25426;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25427 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_25427], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_25427)))?cljs.core.second(arglists_25427):arglists_25427)], 0));
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
var seq__25154_25428 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25155_25429 = null;
var count__25156_25430 = (0);
var i__25157_25431 = (0);
while(true){
if((i__25157_25431 < count__25156_25430)){
var vec__25178_25432 = chunk__25155_25429.cljs$core$IIndexed$_nth$arity$2(null,i__25157_25431);
var name_25433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25178_25432,(0),null);
var map__25181_25434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25178_25432,(1),null);
var map__25181_25435__$1 = cljs.core.__destructure_map(map__25181_25434);
var doc_25436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25181_25435__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25181_25435__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25433], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25437], 0));

if(cljs.core.truth_(doc_25436)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25436], 0));
} else {
}


var G__25438 = seq__25154_25428;
var G__25439 = chunk__25155_25429;
var G__25440 = count__25156_25430;
var G__25441 = (i__25157_25431 + (1));
seq__25154_25428 = G__25438;
chunk__25155_25429 = G__25439;
count__25156_25430 = G__25440;
i__25157_25431 = G__25441;
continue;
} else {
var temp__5823__auto___25442 = cljs.core.seq(seq__25154_25428);
if(temp__5823__auto___25442){
var seq__25154_25443__$1 = temp__5823__auto___25442;
if(cljs.core.chunked_seq_QMARK_(seq__25154_25443__$1)){
var c__5673__auto___25444 = cljs.core.chunk_first(seq__25154_25443__$1);
var G__25445 = cljs.core.chunk_rest(seq__25154_25443__$1);
var G__25446 = c__5673__auto___25444;
var G__25447 = cljs.core.count(c__5673__auto___25444);
var G__25448 = (0);
seq__25154_25428 = G__25445;
chunk__25155_25429 = G__25446;
count__25156_25430 = G__25447;
i__25157_25431 = G__25448;
continue;
} else {
var vec__25182_25451 = cljs.core.first(seq__25154_25443__$1);
var name_25452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25182_25451,(0),null);
var map__25185_25453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25182_25451,(1),null);
var map__25185_25454__$1 = cljs.core.__destructure_map(map__25185_25453);
var doc_25455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25185_25454__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25185_25454__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25452], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25456], 0));

if(cljs.core.truth_(doc_25455)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25455], 0));
} else {
}


var G__25458 = cljs.core.next(seq__25154_25443__$1);
var G__25459 = null;
var G__25460 = (0);
var G__25461 = (0);
seq__25154_25428 = G__25458;
chunk__25155_25429 = G__25459;
count__25156_25430 = G__25460;
i__25157_25431 = G__25461;
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

var seq__25190 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__25191 = null;
var count__25192 = (0);
var i__25193 = (0);
while(true){
if((i__25193 < count__25192)){
var role = chunk__25191.cljs$core$IIndexed$_nth$arity$2(null,i__25193);
var temp__5823__auto___25463__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___25463__$1)){
var spec_25464 = temp__5823__auto___25463__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_25464)], 0));
} else {
}


var G__25466 = seq__25190;
var G__25467 = chunk__25191;
var G__25468 = count__25192;
var G__25469 = (i__25193 + (1));
seq__25190 = G__25466;
chunk__25191 = G__25467;
count__25192 = G__25468;
i__25193 = G__25469;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__25190);
if(temp__5823__auto____$1){
var seq__25190__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__25190__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__25190__$1);
var G__25470 = cljs.core.chunk_rest(seq__25190__$1);
var G__25471 = c__5673__auto__;
var G__25472 = cljs.core.count(c__5673__auto__);
var G__25473 = (0);
seq__25190 = G__25470;
chunk__25191 = G__25471;
count__25192 = G__25472;
i__25193 = G__25473;
continue;
} else {
var role = cljs.core.first(seq__25190__$1);
var temp__5823__auto___25474__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___25474__$2)){
var spec_25475 = temp__5823__auto___25474__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_25475)], 0));
} else {
}


var G__25476 = cljs.core.next(seq__25190__$1);
var G__25477 = null;
var G__25478 = (0);
var G__25479 = (0);
seq__25190 = G__25476;
chunk__25191 = G__25477;
count__25192 = G__25478;
i__25193 = G__25479;
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
var map__25231 = datafied_throwable;
var map__25231__$1 = cljs.core.__destructure_map(map__25231);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25231__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25231__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25231__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__25232 = cljs.core.last(via);
var map__25232__$1 = cljs.core.__destructure_map(map__25232);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25232__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25232__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25232__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__25233 = data;
var map__25233__$1 = cljs.core.__destructure_map(map__25233);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25233__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25233__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25233__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__25234 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__25234__$1 = cljs.core.__destructure_map(map__25234);
var top_data = map__25234__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25234__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__25243 = phase;
var G__25243__$1 = (((G__25243 instanceof cljs.core.Keyword))?G__25243.fqn:null);
switch (G__25243__$1) {
case "read-source":
var map__25248 = data;
var map__25248__$1 = cljs.core.__destructure_map(map__25248);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25248__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25248__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__25249 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__25249__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25249,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25249);
var G__25249__$2 = (cljs.core.truth_((function (){var fexpr__25261 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25261.cljs$core$IFn$_invoke$arity$1 ? fexpr__25261.cljs$core$IFn$_invoke$arity$1(source) : fexpr__25261.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25249__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25249__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25249__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25249__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__25265 = top_data;
var G__25265__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25265,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25265);
var G__25265__$2 = (cljs.core.truth_((function (){var fexpr__25266 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25266.cljs$core$IFn$_invoke$arity$1 ? fexpr__25266.cljs$core$IFn$_invoke$arity$1(source) : fexpr__25266.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25265__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25265__$1);
var G__25265__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25265__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25265__$2);
var G__25265__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25265__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25265__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25265__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25265__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__25291 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25291,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25291,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25291,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25291,(3),null);
var G__25303 = top_data;
var G__25303__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25303,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__25303);
var G__25303__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25303__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__25303__$1);
var G__25303__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25303__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__25303__$2);
var G__25303__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25303__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25303__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25303__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25303__$4;
}

break;
case "execution":
var vec__25306 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25306,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25306,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25306,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25306,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25209_SHARP_){
var or__5142__auto__ = (p1__25209_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__25323 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25323.cljs$core$IFn$_invoke$arity$1 ? fexpr__25323.cljs$core$IFn$_invoke$arity$1(p1__25209_SHARP_) : fexpr__25323.call(null,p1__25209_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__25332 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__25332__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25332,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__25332);
var G__25332__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25332__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25332__$1);
var G__25332__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25332__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__25332__$2);
var G__25332__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25332__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__25332__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25332__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25332__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25243__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__25350){
var map__25351 = p__25350;
var map__25351__$1 = cljs.core.__destructure_map(map__25351);
var triage_data = map__25351__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25351__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25351__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25351__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25351__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25351__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25351__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25351__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25351__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__25354 = phase;
var G__25354__$1 = (((G__25354 instanceof cljs.core.Keyword))?G__25354.fqn:null);
switch (G__25354__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__25355 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__25356 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__25357 = loc;
var G__25358 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25359_25500 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25360_25501 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25361_25502 = true;
var _STAR_print_fn_STAR__temp_val__25362_25503 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25361_25502);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25362_25503);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25344_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25344_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25360_25501);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25359_25500);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25355,G__25356,G__25357,G__25358) : format.call(null,G__25355,G__25356,G__25357,G__25358));

break;
case "macroexpansion":
var G__25368 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__25369 = cause_type;
var G__25370 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__25371 = loc;
var G__25372 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25368,G__25369,G__25370,G__25371,G__25372) : format.call(null,G__25368,G__25369,G__25370,G__25371,G__25372));

break;
case "compile-syntax-check":
var G__25373 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__25374 = cause_type;
var G__25375 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__25376 = loc;
var G__25377 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25373,G__25374,G__25375,G__25376,G__25377) : format.call(null,G__25373,G__25374,G__25375,G__25376,G__25377));

break;
case "compilation":
var G__25378 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__25379 = cause_type;
var G__25380 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__25381 = loc;
var G__25382 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25378,G__25379,G__25380,G__25381,G__25382) : format.call(null,G__25378,G__25379,G__25380,G__25381,G__25382));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__25383 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__25384 = symbol;
var G__25385 = loc;
var G__25386 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25388_25508 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25389_25509 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25390_25510 = true;
var _STAR_print_fn_STAR__temp_val__25391_25511 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25390_25510);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25391_25511);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25349_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25349_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25389_25509);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25388_25508);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25383,G__25384,G__25385,G__25386) : format.call(null,G__25383,G__25384,G__25385,G__25386));
} else {
var G__25392 = "Execution error%s at %s(%s).\n%s\n";
var G__25393 = cause_type;
var G__25394 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__25395 = loc;
var G__25396 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25392,G__25393,G__25394,G__25395,G__25396) : format.call(null,G__25392,G__25393,G__25394,G__25395,G__25396));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25354__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
