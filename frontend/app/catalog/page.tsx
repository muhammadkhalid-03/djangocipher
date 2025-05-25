"use client";

import { useState } from "react";

import SyncLoader from "react-spinners/SyncLoader";
import TextModal from "../components/modals/TextModal";
import TextBox from "../components/TextBox";
import axios from "axios";
import Categories from "../components/navbar/Categories";

// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000"

const data = [
  "l!t!N:Ug:!:yNqqteZP:!?E:q?.NZgU!g.Uy:g.ZEq?.:sNh:q!jqtP;:!..q?Eg:gyNhhP:q!yN:E!;f:lNq:.NtUAqg:h?:.Nq:hQQht.Z?U.;:.h:qJQ!?E:Nqt:i?hsPqEjq:!?E:EUgyhAqt:?qs:.NU?jgf:Gbh?j:!PP:Nqt:gZRxqy.gw:b!.N:NhPEg:!:gQqyU!P:QP!yq:U?:Nqt:Nq!t.f:oNq:xh;:he:ghPAU?j:qvZ!.Uh?g:!?E:Z?Eqtg.!?EU?j:b!.Nqb!.Uy!P:yh?yqQ.g:eUPPg:Nqt:sU.N:!:gq?gq:he:!yyhbQPUgNbq?.f:GPh?jgUEq:Nqt:!y!EqbUy:QZtgZU.gw:l!t!N:A!PZqg:.Nq:etUq?EgNUQg:gNq:N!g:yZP.UA!.qE:!.:gyNhhPf:SZtU?j:tqyqggw:gNq:!?E:Nqt:etUq?Eg:q?j!jq:U?:A!tUhZg:j!bqg:!?E:!y.UAU.Uqgw:P!ZjNU?j:!?E:gN!tU?j:g.htUqgf:BZ.gUEq:he:gyNhhP:NhZtgw:l!t N:he.q?:Ubbqtgqg:NqtgqPe:U?:.Nq:shtPE:he:Rhhigw:qgQqyU!PP;:.Nhgq:.N!.:eq!.Ztq:y!Q.UA!.U?j:.!Pqg:!RhZ.:!?Ub!Pgf:dNq.Nqt:U.'g:EUAU?j:U?.h:.Nq:!EAq?.Ztqg:he:Rt!Aq:PUh?g:ht:.Nq:bUgyNUqAhZg:!?.Uyg:he:yZtUhZg:bh?iq;gw:l!t!N:eU?Eg:ghP!yq:!?E:qJyU.qbq?.:U?:.Nq:Q!jqg:he:Nqt:e!AhtU.q:g.htUqgf:FhN?:Ug:EUeeqtq?.f:z?:.Nq:RZg.PU?j:iU.yNq?:he:!:AURt!?.:tqg.!Zt!?.w:;hZ'PP:eU?E:FhN?w:!:EqEUy!.qE:yNqe:sNhgq:Q!ggUh?:eht:yZPU?!t;:qJyqPPq?yq:i?hsg:?h:RhZ?Egf:dU.N:QtqyUgUh?:!?E:ytq!.UAU.;w:FhN?:yt!e.g:bhZ.Ns!.qtU?j:EUgNqg:.N!.:.!?.!PUpq:.Nq:.!g.q:RZEg:he:q!jqt:yZg.hbqtgf: Ug:yZPU?!t;:xhZt?q;:Rqj!?:U?:NUg:jt!?Ebh.Nqt'g:iU.yNq?w:sNqtq:Nq:!RghtRqE:.Nq:gqytq.g:he:.t!EU.Uh?!P:yhhiU?j:.qyN?UvZqg:!?E:.Nq:UbQht.!?yq:he:ZgU?j:etqgNw:vZ!PU.;:U?jtqEUq?.gf:ohE!;w:!tbqE:sU.N:;q!tg:he:qJQqtUq?yq:!?E:!:tqPq?.Pqgg:EtUAq:eht:Qqteqy.Uh?w:FhN?:gQqyU!PUpqg:U?:ytq!.U?j:qJvZUgU.q:Q!g.!:EUgNqg:.N!.:Pq!Aq:EU?qtg:yt!AU?j:bhtqf:Kq;h?E:.Nq:yh?eU?qg:he:.Nq:iU.yNq?w:FhN?:Ug:!:Etq!bqt:sU.N:!bRU.UhZg:!gQUt!.Uh?gf: q:q?AUgUh?g:!:eZ.Ztq:sNqtq:Nq:y!?:gN!tq:NUg:yZPU?!t;:ytq!.Uh?g:U?:NUg:hs?:tqg.!Zt!?.w:!:QP!yq:sNqtq:Q!.th?g:y!?:g!Aht:?h.:h?P;:EqPUyUhZg:ehhE:RZ.:!Pgh:.Nq:s!tb.N:he:NhgQU.!PU.;:!?E:.Nq:qggq?yq:he:yZPU?!t;:!t.Ug.t;f:dU.N:q!yN:EUgN:Nq:QtqQ!tqgw:FhN?:.!iqg:!?h.Nqt:g.qQ:yPhgqt:.h:.Zt?U?j:NUg:Etq!b:U?.h:tq!PU.;w:eZqPqE:R;:NUg:Z?s!AqtU?j:Q!ggUh?:!?E:EqEUy!.Uh?:.h:.Nq:yt!e.:he:yhhiU?jf",
  "l!t!N:Ug:!:yNqqteZP:!?E:q?.NZgU!g.Uy:g.ZEq?.:sNh:q!jqtP;:!..q?Eg:gyNhhP:q!yN:E!;f:lNq:.NtUAqg:h?:.Nq:hQQht.Z?U.;:.h:qJQ!?E:Nqt:i?hsPqEjq:!?E:EUgyhAqt:?qs:.NU?jgf:Gbh?j:!PP:Nqt:gZRxqy.gw:b!.N:NhPEg:!:gQqyU!P:QP!yq:U?:Nqt:Nq!t.f:oNq:xh;:he:ghPAU?j:qvZ!.Uh?g:!?E:Z?Eqtg.!?EU?j:b!.Nqb!.Uy!P:yh?yqQ.g:eUPPg:Nqt:sU.N:!:gq?gq:he:!yyhbQPUgNbq?.f:GPh?jgUEq:Nqt:!y!EqbUy:QZtgZU.gw:l!t!N:A!PZqg:.Nq:etUq?EgNUQg:gNq:N!g:yZP.UA!.qE:!.:gyNhhPf:SZtU?j:tqyqggw:gNq:!?E:Nqt:etUq?Eg:q?j!jq:U?:A!tUhZg:j!bqg:!?E:!y.UAU.Uqgw:P!ZjNU?j:!?E:gN!tU?j:g.htUqgf:BZ.gUEq:he:gyNhhP:NhZtgw:l!t N:he.q?:Ubbqtgqg:NqtgqPe:U?:.Nq:shtPE:he:Rhhigw:qgQqyU!PP;:.Nhgq:.N!.:eq!.Ztq:y!Q.UA!.U?j:.!Pqg:!RhZ.:!?Ub!Pgf:dNq.Nqt:U.'g:EUAU?j:U?.h:.Nq:!EAq?.Ztqg:he:Rt!Aq:PUh?g:ht:.Nq:bUgyNUqAhZg:!?.Uyg:he:yZtUhZg:bh?iq;gw:l!t!N:eU?Eg:ghP!yq:!?E:qJyU.qbq?.:U?:.Nq:Q!jqg:he:Nqt:e!AhtU.q:g.htUqgf:FhN?:Ug:EUeeqtq?.f:z?:.Nq:RZg.PU?j:iU.yNq?:he:!:AURt!?.:tqg.!Zt!?.w:;hZ'PP:eU?E:FhN?w:!:EqEUy!.qE:yNqe:sNhgq:Q!ggUh?:eht:yZPU?!t;:qJyqPPq?yq:i?hsg:?h:RhZ?Egf:dU.N:QtqyUgUh?:!?E:ytq!.UAU.;w:FhN?:yt!e.g:bhZ.Ns!.qtU?j:EUgNqg:.N!.:.!?.!PUpq:.Nq:.!g.q:RZEg:he:q!jqt:yZg.hbqtgf: Ug:yZPU?!t;:xhZt?q;:Rqj!?:U?:NUg:jt!?Ebh.Nqt'g:iU.yNq?w:sNqtq:Nq:!RghtRqE:.Nq:gqytq.g:he:.t!EU.Uh?!P:yhhiU?j:.qyN?UvZqg:!?E:.Nq:UbQht.!?yq:he:ZgU?j:etqgNw:vZ!PU.;:U?jtqEUq?.gf:ohE!;w:!tbqE:sU.N:;q!tg:he:qJQqtUq?yq:!?E:!:tqPq?.Pqgg:EtUAq:eht:Qqteqy.Uh?w:FhN?:gQqyU!PUpqg:U?:ytq!.U?j:qJvZUgU.q:Q!g.!:EUgNqg:.N!.:Pq!Aq:EU?qtg:yt!AU?j:bhtqf:Kq;h?E:.Nq:yh?eU?qg:he:.Nq:iU.yNq?w:FhN?:Ug:!:Etq!bqt:sU.N:!bRU.UhZg:!gQUt!.Uh?gf: q:q?AUgUh?g:!:eZ.Ztq:sNqtq:Nq:y!?:gN!tq:NUg:yZPU?!t;:ytq!.Uh?g:U?:NUg:hs?:tqg.!Zt!?.w:!:QP!yq:sNqtq:Q!.th?g:y!?:g!Aht:?h.:h?P;:EqPUyUhZg:ehhE:RZ.:!Pgh:.Nq:s!tb.N:he:NhgQU.!PU.;:!?E:.Nq:qggq?yq:he:yZPU?!t;:!t.Ug.t;f:dU.N:q!yN:EUgN:Nq:QtqQ!tqgw:FhN?:.!iqg:!?h.Nqt:g.qQ:yPhgqt:.h:.Zt?U?j:NUg:Etq!b:U?.h:tq!PU.;w:eZqPqE:R;:NUg:Z?s!AqtU?j:Q!ggUh?:!?E:EqEUy!.Uh?:.h:.Nq:yt!e.:he:yhhiU?jf",
  "l!t!N:Ug:!:yNqqteZP:!?E:q?.NZgU!g.Uy:g.ZEq?.:sNh:q!jqtP;:!..q?Eg:gyNhhP:q!yN:E!;f:lNq:.NtUAqg:h?:.Nq:hQQht.Z?U.;:.h:qJQ!?E:Nqt:i?hsPqEjq:!?E:EUgyhAqt:?qs:.NU?jgf:Gbh?j:!PP:Nqt:gZRxqy.gw:b!.N:NhPEg:!:gQqyU!P:QP!yq:U?:Nqt:Nq!t.f:oNq:xh;:he:ghPAU?j:qvZ!.Uh?g:!?E:Z?Eqtg.!?EU?j:b!.Nqb!.Uy!P:yh?yqQ.g:eUPPg:Nqt:sU.N:!:gq?gq:he:!yyhbQPUgNbq?.f:GPh?jgUEq:Nqt:!y!EqbUy:QZtgZU.gw:l!t!N:A!PZqg:.Nq:etUq?EgNUQg:gNq:N!g:yZP.UA!.qE:!.:gyNhhPf:SZtU?j:tqyqggw:gNq:!?E:Nqt:etUq?Eg:q?j!jq:U?:A!tUhZg:j!bqg:!?E:!y.UAU.Uqgw:P!ZjNU?j:!?E:gN!tU?j:g.htUqgf:BZ.gUEq:he:gyNhhP:NhZtgw:l!t N:he.q?:Ubbqtgqg:NqtgqPe:U?:.Nq:shtPE:he:Rhhigw:qgQqyU!PP;:.Nhgq:.N!.:eq!.Ztq:y!Q.UA!.U?j:.!Pqg:!RhZ.:!?Ub!Pgf:dNq.Nqt:U.'g:EUAU?j:U?.h:.Nq:!EAq?.Ztqg:he:Rt!Aq:PUh?g:ht:.Nq:bUgyNUqAhZg:!?.Uyg:he:yZtUhZg:bh?iq;gw:l!t!N:eU?Eg:ghP!yq:!?E:qJyU.qbq?.:U?:.Nq:Q!jqg:he:Nqt:e!AhtU.q:g.htUqgf:FhN?:Ug:EUeeqtq?.f:z?:.Nq:RZg.PU?j:iU.yNq?:he:!:AURt!?.:tqg.!Zt!?.w:;hZ'PP:eU?E:FhN?w:!:EqEUy!.qE:yNqe:sNhgq:Q!ggUh?:eht:yZPU?!t;:qJyqPPq?yq:i?hsg:?h:RhZ?Egf:dU.N:QtqyUgUh?:!?E:ytq!.UAU.;w:FhN?:yt!e.g:bhZ.Ns!.qtU?j:EUgNqg:.N!.:.!?.!PUpq:.Nq:.!g.q:RZEg:he:q!jqt:yZg.hbqtgf: Ug:yZPU?!t;:xhZt?q;:Rqj!?:U?:NUg:jt!?Ebh.Nqt'g:iU.yNq?w:sNqtq:Nq:!RghtRqE:.Nq:gqytq.g:he:.t!EU.Uh?!P:yhhiU?j:.qyN?UvZqg:!?E:.Nq:UbQht.!?yq:he:ZgU?j:etqgNw:vZ!PU.;:U?jtqEUq?.gf:ohE!;w:!tbqE:sU.N:;q!tg:he:qJQqtUq?yq:!?E:!:tqPq?.Pqgg:EtUAq:eht:Qqteqy.Uh?w:FhN?:gQqyU!PUpqg:U?:ytq!.U?j:qJvZUgU.q:Q!g.!:EUgNqg:.N!.:Pq!Aq:EU?qtg:yt!AU?j:bhtqf:Kq;h?E:.Nq:yh?eU?qg:he:.Nq:iU.yNq?w:FhN?:Ug:!:Etq!bqt:sU.N:!bRU.UhZg:!gQUt!.Uh?gf: q:q?AUgUh?g:!:eZ.Ztq:sNqtq:Nq:y!?:gN!tq:NUg:yZPU?!t;:ytq!.Uh?g:U?:NUg:hs?:tqg.!Zt!?.w:!:QP!yq:sNqtq:Q!.th?g:y!?:g!Aht:?h.:h?P;:EqPUyUhZg:ehhE:RZ.:!Pgh:.Nq:s!tb.N:he:NhgQU.!PU.;:!?E:.Nq:qggq?yq:he:yZPU?!t;:!t.Ug.t;f:dU.N:q!yN:EUgN:Nq:QtqQ!tqgw:FhN?:.!iqg:!?h.Nqt:g.qQ:yPhgqt:.h:.Zt?U?j:NUg:Etq!b:U?.h:tq!PU.;w:eZqPqE:R;:NUg:Z?s!AqtU?j:Q!ggUh?:!?E:EqEUy!.Uh?:.h:.Nq:yt!e.:he:yhhiU?jf",
  "l!t!N:Ug:!:yNqqteZP:!?E:q?.NZgU!g.Uy:g.ZEq?.:sNh:q!jqtP;:!..q?Eg:gyNhhP:q!yN:E!;f:lNq:.NtUAqg:h?:.Nq:hQQht.Z?U.;:.h:qJQ!?E:Nqt:i?hsPqEjq:!?E:EUgyhAqt:?qs:.NU?jgf:Gbh?j:!PP:Nqt:gZRxqy.gw:b!.N:NhPEg:!:gQqyU!P:QP!yq:U?:Nqt:Nq!t.f:oNq:xh;:he:ghPAU?j:qvZ!.Uh?g:!?E:Z?Eqtg.!?EU?j:b!.Nqb!.Uy!P:yh?yqQ.g:eUPPg:Nqt:sU.N:!:gq?gq:he:!yyhbQPUgNbq?.f:GPh?jgUEq:Nqt:!y!EqbUy:QZtgZU.gw:l!t!N:A!PZqg:.Nq:etUq?EgNUQg:gNq:N!g:yZP.UA!.qE:!.:gyNhhPf:SZtU?j:tqyqggw:gNq:!?E:Nqt:etUq?Eg:q?j!jq:U?:A!tUhZg:j!bqg:!?E:!y.UAU.Uqgw:P!ZjNU?j:!?E:gN!tU?j:g.htUqgf:BZ.gUEq:he:gyNhhP:NhZtgw:l!t N:he.q?:Ubbqtgqg:NqtgqPe:U?:.Nq:shtPE:he:Rhhigw:qgQqyU!PP;:.Nhgq:.N!.:eq!.Ztq:y!Q.UA!.U?j:.!Pqg:!RhZ.:!?Ub!Pgf:dNq.Nqt:U.'g:EUAU?j:U?.h:.Nq:!EAq?.Ztqg:he:Rt!Aq:PUh?g:ht:.Nq:bUgyNUqAhZg:!?.Uyg:he:yZtUhZg:bh?iq;gw:l!t!N:eU?Eg:ghP!yq:!?E:qJyU.qbq?.:U?:.Nq:Q!jqg:he:Nqt:e!AhtU.q:g.htUqgf:FhN?:Ug:EUeeqtq?.f:z?:.Nq:RZg.PU?j:iU.yNq?:he:!:AURt!?.:tqg.!Zt!?.w:;hZ'PP:eU?E:FhN?w:!:EqEUy!.qE:yNqe:sNhgq:Q!ggUh?:eht:yZPU?!t;:qJyqPPq?yq:i?hsg:?h:RhZ?Egf:dU.N:QtqyUgUh?:!?E:ytq!.UAU.;w:FhN?:yt!e.g:bhZ.Ns!.qtU?j:EUgNqg:.N!.:.!?.!PUpq:.Nq:.!g.q:RZEg:he:q!jqt:yZg.hbqtgf: Ug:yZPU?!t;:xhZt?q;:Rqj!?:U?:NUg:jt!?Ebh.Nqt'g:iU.yNq?w:sNqtq:Nq:!RghtRqE:.Nq:gqytq.g:he:.t!EU.Uh?!P:yhhiU?j:.qyN?UvZqg:!?E:.Nq:UbQht.!?yq:he:ZgU?j:etqgNw:vZ!PU.;:U?jtqEUq?.gf:ohE!;w:!tbqE:sU.N:;q!tg:he:qJQqtUq?yq:!?E:!:tqPq?.Pqgg:EtUAq:eht:Qqteqy.Uh?w:FhN?:gQqyU!PUpqg:U?:ytq!.U?j:qJvZUgU.q:Q!g.!:EUgNqg:.N!.:Pq!Aq:EU?qtg:yt!AU?j:bhtqf:Kq;h?E:.Nq:yh?eU?qg:he:.Nq:iU.yNq?w:FhN?:Ug:!:Etq!bqt:sU.N:!bRU.UhZg:!gQUt!.Uh?gf: q:q?AUgUh?g:!:eZ.Ztq:sNqtq:Nq:y!?:gN!tq:NUg:yZPU?!t;:ytq!.Uh?g:U?:NUg:hs?:tqg.!Zt!?.w:!:QP!yq:sNqtq:Q!.th?g:y!?:g!Aht:?h.:h?P;:EqPUyUhZg:ehhE:RZ.:!Pgh:.Nq:s!tb.N:he:NhgQU.!PU.;:!?E:.Nq:qggq?yq:he:yZPU?!t;:!t.Ug.t;f:dU.N:q!yN:EUgN:Nq:QtqQ!tqgw:FhN?:.!iqg:!?h.Nqt:g.qQ:yPhgqt:.h:.Zt?U?j:NUg:Etq!b:U?.h:tq!PU.;w:eZqPqE:R;:NUg:Z?s!AqtU?j:Q!ggUh?:!?E:EqEUy!.Uh?:.h:.Nq:yt!e.:he:yhhiU?jf",
  "l!t!N:Ug:!:yNqqteZP:!?E:q?.NZgU!g.Uy:g.ZEq?.:sNh:q!jqtP;:!..q?Eg:gyNhhP:q!yN:E!;f:lNq:.NtUAqg:h?:.Nq:hQQht.Z?U.;:.h:qJQ!?E:Nqt:i?hsPqEjq:!?E:EUgyhAqt:?qs:.NU?jgf:Gbh?j:!PP:Nqt:gZRxqy.gw:b!.N:NhPEg:!:gQqyU!P:QP!yq:U?:Nqt:Nq!t.f:oNq:xh;:he:ghPAU?j:qvZ!.Uh?g:!?E:Z?Eqtg.!?EU?j:b!.Nqb!.Uy!P:yh?yqQ.g:eUPPg:Nqt:sU.N:!:gq?gq:he:!yyhbQPUgNbq?.f:GPh?jgUEq:Nqt:!y!EqbUy:QZtgZU.gw:l!t!N:A!PZqg:.Nq:etUq?EgNUQg:gNq:N!g:yZP.UA!.qE:!.:gyNhhPf:SZtU?j:tqyqggw:gNq:!?E:Nqt:etUq?Eg:q?j!jq:U?:A!tUhZg:j!bqg:!?E:!y.UAU.Uqgw:P!ZjNU?j:!?E:gN!tU?j:g.htUqgf:BZ.gUEq:he:gyNhhP:NhZtgw:l!t N:he.q?:Ubbqtgqg:NqtgqPe:U?:.Nq:shtPE:he:Rhhigw:qgQqyU!PP;:.Nhgq:.N!.:eq!.Ztq:y!Q.UA!.U?j:.!Pqg:!RhZ.:!?Ub!Pgf:dNq.Nqt:U.'g:EUAU?j:U?.h:.Nq:!EAq?.Ztqg:he:Rt!Aq:PUh?g:ht:.Nq:bUgyNUqAhZg:!?.Uyg:he:yZtUhZg:bh?iq;gw:l!t!N:eU?Eg:ghP!yq:!?E:qJyU.qbq?.:U?:.Nq:Q!jqg:he:Nqt:e!AhtU.q:g.htUqgf:FhN?:Ug:EUeeqtq?.f:z?:.Nq:RZg.PU?j:iU.yNq?:he:!:AURt!?.:tqg.!Zt!?.w:;hZ'PP:eU?E:FhN?w:!:EqEUy!.qE:yNqe:sNhgq:Q!ggUh?:eht:yZPU?!t;:qJyqPPq?yq:i?hsg:?h:RhZ?Egf:dU.N:QtqyUgUh?:!?E:ytq!.UAU.;w:FhN?:yt!e.g:bhZ.Ns!.qtU?j:EUgNqg:.N!.:.!?.!PUpq:.Nq:.!g.q:RZEg:he:q!jqt:yZg.hbqtgf: Ug:yZPU?!t;:xhZt?q;:Rqj!?:U?:NUg:jt!?Ebh.Nqt'g:iU.yNq?w:sNqtq:Nq:!RghtRqE:.Nq:gqytq.g:he:.t!EU.Uh?!P:yhhiU?j:.qyN?UvZqg:!?E:.Nq:UbQht.!?yq:he:ZgU?j:etqgNw:vZ!PU.;:U?jtqEUq?.gf:ohE!;w:!tbqE:sU.N:;q!tg:he:qJQqtUq?yq:!?E:!:tqPq?.Pqgg:EtUAq:eht:Qqteqy.Uh?w:FhN?:gQqyU!PUpqg:U?:ytq!.U?j:qJvZUgU.q:Q!g.!:EUgNqg:.N!.:Pq!Aq:EU?qtg:yt!AU?j:bhtqf:Kq;h?E:.Nq:yh?eU?qg:he:.Nq:iU.yNq?w:FhN?:Ug:!:Etq!bqt:sU.N:!bRU.UhZg:!gQUt!.Uh?gf: q:q?AUgUh?g:!:eZ.Ztq:sNqtq:Nq:y!?:gN!tq:NUg:yZPU?!t;:ytq!.Uh?g:U?:NUg:hs?:tqg.!Zt!?.w:!:QP!yq:sNqtq:Q!.th?g:y!?:g!Aht:?h.:h?P;:EqPUyUhZg:ehhE:RZ.:!Pgh:.Nq:s!tb.N:he:NhgQU.!PU.;:!?E:.Nq:qggq?yq:he:yZPU?!t;:!t.Ug.t;f:dU.N:q!yN:EUgN:Nq:QtqQ!tqgw:FhN?:.!iqg:!?h.Nqt:g.qQ:yPhgqt:.h:.Zt?U?j:NUg:Etq!b:U?.h:tq!PU.;w:eZqPqE:R;:NUg:Z?s!AqtU?j:Q!ggUh?:!?E:EqEUy!.Uh?:.h:.Nq:yt!e.:he:yhhiU?jf",
];

const TextPage = () => {
  const [result, setResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const openAICall = async (candidates: string[]) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL!}/rank`,
        {
          text: candidates,
        }
      );
      return response.data.result;
    } catch (error) {
      console.error("OpenAI error", error);
    }
  };

  const handleSubmit = async (text: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL!}/decipher_worker`,
        {
          text: text,
        }
      );
      const aiCall = await openAICall(response.data.result);
      setResult(aiCall);
    } catch (error) {
      console.error("Error scrambling with lambda", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center p-4 text-white min-h-screen">
      <div className="text-center mt-4 text-7xl font-mono mb-4">Unscramble</div>
      <Categories />

      <div className="w-full pt-8 mt-6">
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <SyncLoader
              color="#2196F3"
              loading={isLoading}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
        <TextModal
          onSubmit={handleSubmit}
          placeholder="Enter scrambled message..."
          buttonName="Unscramble"
        />
      </div>
      {!result ? (
        <p className="text-white m-16">No saved text available</p>
      ) : (
        <TextBox text={result.slice(3)} />
      )}
    </div>
  );
};

export default TextPage;
