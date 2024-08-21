import * as _334 from "./downtime-detector/v1beta1/downtime_duration";
import * as _335 from "./downtime-detector/v1beta1/genesis";
import * as _336 from "./downtime-detector/v1beta1/query";
import * as _337 from "./epochs/genesis";
import * as _338 from "./epochs/query";
import * as _339 from "./gamm/pool-models/balancer/balancerPool";
import * as _340 from "./gamm/v1beta1/genesis";
import * as _341 from "./gamm/v1beta1/query";
import * as _342 from "./gamm/v1beta1/tx";
import * as _343 from "./gamm/pool-models/balancer/tx/tx";
import * as _344 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _345 from "./gamm/pool-models/stableswap/tx";
import * as _346 from "./gamm/v2/query";
import * as _347 from "./ibc-rate-limit/v1beta1/params";
import * as _348 from "./ibc-rate-limit/v1beta1/query";
import * as _349 from "./incentives/gauge";
import * as _350 from "./incentives/genesis";
import * as _351 from "./incentives/params";
import * as _352 from "./incentives/query";
import * as _353 from "./incentives/tx";
import * as _354 from "./lockup/genesis";
import * as _355 from "./lockup/lock";
import * as _356 from "./lockup/params";
import * as _357 from "./lockup/query";
import * as _358 from "./lockup/tx";
import * as _359 from "./mint/v1beta1/genesis";
import * as _360 from "./mint/v1beta1/mint";
import * as _361 from "./mint/v1beta1/query";
import * as _362 from "./pool-incentives/v1beta1/genesis";
import * as _363 from "./pool-incentives/v1beta1/gov";
import * as _364 from "./pool-incentives/v1beta1/incentives";
import * as _365 from "./pool-incentives/v1beta1/query";
import * as _366 from "./protorev/v1beta1/genesis";
import * as _367 from "./protorev/v1beta1/gov";
import * as _368 from "./protorev/v1beta1/params";
import * as _369 from "./protorev/v1beta1/protorev";
import * as _370 from "./protorev/v1beta1/query";
import * as _371 from "./protorev/v1beta1/tx";
import * as _372 from "./sumtree/v1beta1/tree";
import * as _373 from "./superfluid/genesis";
import * as _374 from "./superfluid/params";
import * as _375 from "./superfluid/query";
import * as _376 from "./superfluid/superfluid";
import * as _377 from "./superfluid/tx";
import * as _378 from "./swaprouter/v1beta1/genesis";
import * as _379 from "./swaprouter/v1beta1/module_route";
import * as _380 from "./swaprouter/v1beta1/query";
import * as _381 from "./swaprouter/v1beta1/swap_route";
import * as _382 from "./swaprouter/v1beta1/tx";
import * as _383 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _384 from "./tokenfactory/v1beta1/genesis";
import * as _385 from "./tokenfactory/v1beta1/params";
import * as _386 from "./tokenfactory/v1beta1/query";
import * as _387 from "./tokenfactory/v1beta1/tx";
import * as _388 from "./twap/v1beta1/genesis";
import * as _389 from "./twap/v1beta1/query";
import * as _390 from "./twap/v1beta1/twap_record";
import * as _391 from "./txfees/v1beta1/feetoken";
import * as _392 from "./txfees/v1beta1/genesis";
import * as _393 from "./txfees/v1beta1/gov";
import * as _394 from "./txfees/v1beta1/query";
import * as _395 from "./valset-pref/v1beta1/query";
import * as _396 from "./valset-pref/v1beta1/state";
import * as _397 from "./valset-pref/v1beta1/tx";
import * as _634 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _635 from "./gamm/pool-models/stableswap/tx.amino";
import * as _636 from "./gamm/v1beta1/tx.amino";
import * as _637 from "./incentives/tx.amino";
import * as _638 from "./lockup/tx.amino";
import * as _639 from "./protorev/v1beta1/tx.amino";
import * as _640 from "./superfluid/tx.amino";
import * as _641 from "./swaprouter/v1beta1/tx.amino";
import * as _642 from "./tokenfactory/v1beta1/tx.amino";
import * as _643 from "./valset-pref/v1beta1/tx.amino";
import * as _644 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _645 from "./gamm/pool-models/stableswap/tx.registry";
import * as _646 from "./gamm/v1beta1/tx.registry";
import * as _647 from "./incentives/tx.registry";
import * as _648 from "./lockup/tx.registry";
import * as _649 from "./protorev/v1beta1/tx.registry";
import * as _650 from "./superfluid/tx.registry";
import * as _651 from "./swaprouter/v1beta1/tx.registry";
import * as _652 from "./tokenfactory/v1beta1/tx.registry";
import * as _653 from "./valset-pref/v1beta1/tx.registry";
import * as _654 from "./downtime-detector/v1beta1/query.lcd";
import * as _655 from "./epochs/query.lcd";
import * as _656 from "./gamm/v1beta1/query.lcd";
import * as _657 from "./gamm/v2/query.lcd";
import * as _658 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _659 from "./incentives/query.lcd";
import * as _660 from "./lockup/query.lcd";
import * as _661 from "./mint/v1beta1/query.lcd";
import * as _662 from "./pool-incentives/v1beta1/query.lcd";
import * as _663 from "./protorev/v1beta1/query.lcd";
import * as _664 from "./superfluid/query.lcd";
import * as _665 from "./swaprouter/v1beta1/query.lcd";
import * as _666 from "./tokenfactory/v1beta1/query.lcd";
import * as _667 from "./twap/v1beta1/query.lcd";
import * as _668 from "./txfees/v1beta1/query.lcd";
import * as _669 from "./valset-pref/v1beta1/query.lcd";
import * as _670 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _671 from "./epochs/query.rpc.Query";
import * as _672 from "./gamm/v1beta1/query.rpc.Query";
import * as _673 from "./gamm/v2/query.rpc.Query";
import * as _674 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _675 from "./incentives/query.rpc.Query";
import * as _676 from "./lockup/query.rpc.Query";
import * as _677 from "./mint/v1beta1/query.rpc.Query";
import * as _678 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _679 from "./protorev/v1beta1/query.rpc.Query";
import * as _680 from "./superfluid/query.rpc.Query";
import * as _681 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _682 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _683 from "./twap/v1beta1/query.rpc.Query";
import * as _684 from "./txfees/v1beta1/query.rpc.Query";
import * as _685 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _686 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _687 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _688 from "./gamm/v1beta1/tx.rpc.msg";
import * as _689 from "./incentives/tx.rpc.msg";
import * as _690 from "./lockup/tx.rpc.msg";
import * as _691 from "./protorev/v1beta1/tx.rpc.msg";
import * as _692 from "./superfluid/tx.rpc.msg";
import * as _693 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _694 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _695 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _708 from "./lcd";
import * as _709 from "./rpc.query";
import * as _710 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._334,
      ..._335,
      ..._336,
      ..._654,
      ..._670
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._337,
      ..._338,
      ..._655,
      ..._671
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._339,
      ..._340,
      ..._341,
      ..._342,
      ..._636,
      ..._646,
      ..._656,
      ..._672,
      ..._688
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._343,
          ..._634,
          ..._644,
          ..._686
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._344,
          ..._345,
          ..._635,
          ..._645,
          ..._687
        };
      }
    }
    export const v2 = {
      ..._346,
      ..._657,
      ..._673
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._347,
      ..._348,
      ..._658,
      ..._674
    };
  }
  export const incentives = {
    ..._349,
    ..._350,
    ..._351,
    ..._352,
    ..._353,
    ..._637,
    ..._647,
    ..._659,
    ..._675,
    ..._689
  };
  export const lockup = {
    ..._354,
    ..._355,
    ..._356,
    ..._357,
    ..._358,
    ..._638,
    ..._648,
    ..._660,
    ..._676,
    ..._690
  };
  export namespace mint {
    export const v1beta1 = {
      ..._359,
      ..._360,
      ..._361,
      ..._661,
      ..._677
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._362,
      ..._363,
      ..._364,
      ..._365,
      ..._662,
      ..._678
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._366,
      ..._367,
      ..._368,
      ..._369,
      ..._370,
      ..._371,
      ..._639,
      ..._649,
      ..._663,
      ..._679,
      ..._691
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._372
    };
  }
  export const superfluid = {
    ..._373,
    ..._374,
    ..._375,
    ..._376,
    ..._377,
    ..._640,
    ..._650,
    ..._664,
    ..._680,
    ..._692
  };
  export namespace swaprouter {
    export const v1beta1 = {
      ..._378,
      ..._379,
      ..._380,
      ..._381,
      ..._382,
      ..._641,
      ..._651,
      ..._665,
      ..._681,
      ..._693
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._383,
      ..._384,
      ..._385,
      ..._386,
      ..._387,
      ..._642,
      ..._652,
      ..._666,
      ..._682,
      ..._694
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._388,
      ..._389,
      ..._390,
      ..._667,
      ..._683
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._391,
      ..._392,
      ..._393,
      ..._394,
      ..._668,
      ..._684
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._395,
      ..._396,
      ..._397,
      ..._643,
      ..._653,
      ..._669,
      ..._685,
      ..._695
    };
  }
  export const ClientFactory = {
    ..._708,
    ..._709,
    ..._710
  };
}