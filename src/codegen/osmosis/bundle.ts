import * as _168 from "./downtime-detector/v1beta1/downtime_duration";
import * as _169 from "./downtime-detector/v1beta1/genesis";
import * as _170 from "./downtime-detector/v1beta1/query";
import * as _171 from "./epochs/genesis";
import * as _172 from "./epochs/query";
import * as _173 from "./gamm/pool-models/balancer/balancerPool";
import * as _174 from "./gamm/v1beta1/genesis";
import * as _175 from "./gamm/v1beta1/query";
import * as _176 from "./gamm/v1beta1/tx";
import * as _177 from "./gamm/pool-models/balancer/tx/tx";
import * as _178 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _179 from "./gamm/pool-models/stableswap/tx";
import * as _180 from "./gamm/v2/query";
import * as _181 from "./ibc-rate-limit/v1beta1/params";
import * as _182 from "./ibc-rate-limit/v1beta1/query";
import * as _183 from "./incentives/gauge";
import * as _184 from "./incentives/genesis";
import * as _185 from "./incentives/params";
import * as _186 from "./incentives/query";
import * as _187 from "./incentives/tx";
import * as _188 from "./lockup/genesis";
import * as _189 from "./lockup/lock";
import * as _190 from "./lockup/params";
import * as _191 from "./lockup/query";
import * as _192 from "./lockup/tx";
import * as _193 from "./mint/v1beta1/genesis";
import * as _194 from "./mint/v1beta1/mint";
import * as _195 from "./mint/v1beta1/query";
import * as _196 from "./pool-incentives/v1beta1/genesis";
import * as _197 from "./pool-incentives/v1beta1/gov";
import * as _198 from "./pool-incentives/v1beta1/incentives";
import * as _199 from "./pool-incentives/v1beta1/query";
import * as _200 from "./protorev/v1beta1/genesis";
import * as _201 from "./protorev/v1beta1/gov";
import * as _202 from "./protorev/v1beta1/params";
import * as _203 from "./protorev/v1beta1/protorev";
import * as _204 from "./protorev/v1beta1/query";
import * as _205 from "./protorev/v1beta1/tx";
import * as _206 from "./sumtree/v1beta1/tree";
import * as _207 from "./superfluid/genesis";
import * as _208 from "./superfluid/params";
import * as _209 from "./superfluid/query";
import * as _210 from "./superfluid/superfluid";
import * as _211 from "./superfluid/tx";
import * as _212 from "./swaprouter/v1beta1/genesis";
import * as _213 from "./swaprouter/v1beta1/module_route";
import * as _214 from "./swaprouter/v1beta1/query";
import * as _215 from "./swaprouter/v1beta1/swap_route";
import * as _216 from "./swaprouter/v1beta1/tx";
import * as _217 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _218 from "./tokenfactory/v1beta1/genesis";
import * as _219 from "./tokenfactory/v1beta1/params";
import * as _220 from "./tokenfactory/v1beta1/query";
import * as _221 from "./tokenfactory/v1beta1/tx";
import * as _222 from "./twap/v1beta1/genesis";
import * as _223 from "./twap/v1beta1/query";
import * as _224 from "./twap/v1beta1/twap_record";
import * as _225 from "./txfees/v1beta1/feetoken";
import * as _226 from "./txfees/v1beta1/genesis";
import * as _227 from "./txfees/v1beta1/gov";
import * as _228 from "./txfees/v1beta1/query";
import * as _229 from "./valset-pref/v1beta1/query";
import * as _230 from "./valset-pref/v1beta1/state";
import * as _231 from "./valset-pref/v1beta1/tx";
import * as _346 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _347 from "./gamm/pool-models/stableswap/tx.amino";
import * as _348 from "./gamm/v1beta1/tx.amino";
import * as _349 from "./incentives/tx.amino";
import * as _350 from "./lockup/tx.amino";
import * as _351 from "./protorev/v1beta1/tx.amino";
import * as _352 from "./superfluid/tx.amino";
import * as _353 from "./swaprouter/v1beta1/tx.amino";
import * as _354 from "./tokenfactory/v1beta1/tx.amino";
import * as _355 from "./valset-pref/v1beta1/tx.amino";
import * as _356 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _357 from "./gamm/pool-models/stableswap/tx.registry";
import * as _358 from "./gamm/v1beta1/tx.registry";
import * as _359 from "./incentives/tx.registry";
import * as _360 from "./lockup/tx.registry";
import * as _361 from "./protorev/v1beta1/tx.registry";
import * as _362 from "./superfluid/tx.registry";
import * as _363 from "./swaprouter/v1beta1/tx.registry";
import * as _364 from "./tokenfactory/v1beta1/tx.registry";
import * as _365 from "./valset-pref/v1beta1/tx.registry";
import * as _366 from "./downtime-detector/v1beta1/query.lcd";
import * as _367 from "./epochs/query.lcd";
import * as _368 from "./gamm/v1beta1/query.lcd";
import * as _369 from "./gamm/v2/query.lcd";
import * as _370 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _371 from "./incentives/query.lcd";
import * as _372 from "./lockup/query.lcd";
import * as _373 from "./mint/v1beta1/query.lcd";
import * as _374 from "./pool-incentives/v1beta1/query.lcd";
import * as _375 from "./protorev/v1beta1/query.lcd";
import * as _376 from "./superfluid/query.lcd";
import * as _377 from "./swaprouter/v1beta1/query.lcd";
import * as _378 from "./tokenfactory/v1beta1/query.lcd";
import * as _379 from "./twap/v1beta1/query.lcd";
import * as _380 from "./txfees/v1beta1/query.lcd";
import * as _381 from "./valset-pref/v1beta1/query.lcd";
import * as _382 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _383 from "./epochs/query.rpc.Query";
import * as _384 from "./gamm/v1beta1/query.rpc.Query";
import * as _385 from "./gamm/v2/query.rpc.Query";
import * as _386 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _387 from "./incentives/query.rpc.Query";
import * as _388 from "./lockup/query.rpc.Query";
import * as _389 from "./mint/v1beta1/query.rpc.Query";
import * as _390 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _391 from "./protorev/v1beta1/query.rpc.Query";
import * as _392 from "./superfluid/query.rpc.Query";
import * as _393 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _394 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _395 from "./twap/v1beta1/query.rpc.Query";
import * as _396 from "./txfees/v1beta1/query.rpc.Query";
import * as _397 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _398 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _399 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _400 from "./gamm/v1beta1/tx.rpc.msg";
import * as _401 from "./incentives/tx.rpc.msg";
import * as _402 from "./lockup/tx.rpc.msg";
import * as _403 from "./protorev/v1beta1/tx.rpc.msg";
import * as _404 from "./superfluid/tx.rpc.msg";
import * as _405 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _406 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _407 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _417 from "./lcd";
import * as _418 from "./rpc.query";
import * as _419 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._168,
      ..._169,
      ..._170,
      ..._366,
      ..._382
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._171,
      ..._172,
      ..._367,
      ..._383
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._348,
      ..._358,
      ..._368,
      ..._384,
      ..._400
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._177,
          ..._346,
          ..._356,
          ..._398
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._178,
          ..._179,
          ..._347,
          ..._357,
          ..._399
        };
      }
    }
    export const v2 = {
      ..._180,
      ..._369,
      ..._385
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._181,
      ..._182,
      ..._370,
      ..._386
    };
  }
  export const incentives = {
    ..._183,
    ..._184,
    ..._185,
    ..._186,
    ..._187,
    ..._349,
    ..._359,
    ..._371,
    ..._387,
    ..._401
  };
  export const lockup = {
    ..._188,
    ..._189,
    ..._190,
    ..._191,
    ..._192,
    ..._350,
    ..._360,
    ..._372,
    ..._388,
    ..._402
  };
  export namespace mint {
    export const v1beta1 = {
      ..._193,
      ..._194,
      ..._195,
      ..._373,
      ..._389
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._374,
      ..._390
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._200,
      ..._201,
      ..._202,
      ..._203,
      ..._204,
      ..._205,
      ..._351,
      ..._361,
      ..._375,
      ..._391,
      ..._403
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._206
    };
  }
  export const superfluid = {
    ..._207,
    ..._208,
    ..._209,
    ..._210,
    ..._211,
    ..._352,
    ..._362,
    ..._376,
    ..._392,
    ..._404
  };
  export namespace swaprouter {
    export const v1beta1 = {
      ..._212,
      ..._213,
      ..._214,
      ..._215,
      ..._216,
      ..._353,
      ..._363,
      ..._377,
      ..._393,
      ..._405
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._217,
      ..._218,
      ..._219,
      ..._220,
      ..._221,
      ..._354,
      ..._364,
      ..._378,
      ..._394,
      ..._406
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._222,
      ..._223,
      ..._224,
      ..._379,
      ..._395
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._225,
      ..._226,
      ..._227,
      ..._228,
      ..._380,
      ..._396
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._229,
      ..._230,
      ..._231,
      ..._355,
      ..._365,
      ..._381,
      ..._397,
      ..._407
    };
  }
  export const ClientFactory = {
    ..._417,
    ..._418,
    ..._419
  };
}