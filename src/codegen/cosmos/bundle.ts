import * as _37 from "./app/v1alpha1/config";
import * as _38 from "./app/v1alpha1/module";
import * as _39 from "./app/v1alpha1/query";
import * as _40 from "./auth/v1beta1/auth";
import * as _41 from "./auth/v1beta1/genesis";
import * as _42 from "./auth/v1beta1/query";
import * as _43 from "./authz/v1beta1/authz";
import * as _44 from "./authz/v1beta1/event";
import * as _45 from "./authz/v1beta1/genesis";
import * as _46 from "./authz/v1beta1/query";
import * as _47 from "./authz/v1beta1/tx";
import * as _48 from "./bank/v1beta1/authz";
import * as _49 from "./bank/v1beta1/bank";
import * as _50 from "./bank/v1beta1/genesis";
import * as _51 from "./bank/v1beta1/query";
import * as _52 from "./bank/v1beta1/tx";
import * as _53 from "./base/abci/v1beta1/abci";
import * as _54 from "./base/kv/v1beta1/kv";
import * as _55 from "./base/query/v1beta1/pagination";
import * as _56 from "./base/reflection/v1beta1/reflection";
import * as _57 from "./base/reflection/v2alpha1/reflection";
import * as _58 from "./base/snapshots/v1beta1/snapshot";
import * as _59 from "./base/store/v1beta1/commit_info";
import * as _60 from "./base/store/v1beta1/listening";
import * as _61 from "./base/tendermint/v1beta1/query";
import * as _62 from "./base/v1beta1/coin";
import * as _63 from "./capability/v1beta1/capability";
import * as _64 from "./capability/v1beta1/genesis";
import * as _65 from "./crisis/v1beta1/genesis";
import * as _66 from "./crisis/v1beta1/tx";
import * as _67 from "./crypto/ed25519/keys";
import * as _68 from "./crypto/hd/v1/hd";
import * as _69 from "./crypto/keyring/v1/record";
import * as _70 from "./crypto/multisig/keys";
import * as _71 from "./crypto/secp256k1/keys";
import * as _72 from "./crypto/secp256r1/keys";
import * as _73 from "./distribution/v1beta1/distribution";
import * as _74 from "./distribution/v1beta1/genesis";
import * as _75 from "./distribution/v1beta1/query";
import * as _76 from "./distribution/v1beta1/tx";
import * as _77 from "./evidence/v1beta1/evidence";
import * as _78 from "./evidence/v1beta1/genesis";
import * as _79 from "./evidence/v1beta1/query";
import * as _80 from "./evidence/v1beta1/tx";
import * as _81 from "./feegrant/v1beta1/feegrant";
import * as _82 from "./feegrant/v1beta1/genesis";
import * as _83 from "./feegrant/v1beta1/query";
import * as _84 from "./feegrant/v1beta1/tx";
import * as _85 from "./genutil/v1beta1/genesis";
import * as _86 from "./gov/v1/genesis";
import * as _87 from "./gov/v1/gov";
import * as _88 from "./gov/v1/query";
import * as _89 from "./gov/v1/tx";
import * as _90 from "./gov/v1beta1/genesis";
import * as _91 from "./gov/v1beta1/gov";
import * as _92 from "./gov/v1beta1/query";
import * as _93 from "./gov/v1beta1/tx";
import * as _94 from "./group/v1/events";
import * as _95 from "./group/v1/genesis";
import * as _96 from "./group/v1/query";
import * as _97 from "./group/v1/tx";
import * as _98 from "./group/v1/types";
import * as _99 from "./mint/v1beta1/genesis";
import * as _100 from "./mint/v1beta1/mint";
import * as _101 from "./mint/v1beta1/query";
import * as _102 from "./msg/v1/msg";
import * as _103 from "./nft/v1beta1/event";
import * as _104 from "./nft/v1beta1/genesis";
import * as _105 from "./nft/v1beta1/nft";
import * as _106 from "./nft/v1beta1/query";
import * as _107 from "./nft/v1beta1/tx";
import * as _108 from "./orm/v1/orm";
import * as _109 from "./orm/v1alpha1/schema";
import * as _110 from "./params/v1beta1/params";
import * as _111 from "./params/v1beta1/query";
import * as _112 from "./slashing/v1beta1/genesis";
import * as _113 from "./slashing/v1beta1/query";
import * as _114 from "./slashing/v1beta1/slashing";
import * as _115 from "./slashing/v1beta1/tx";
import * as _116 from "./staking/v1beta1/authz";
import * as _117 from "./staking/v1beta1/genesis";
import * as _118 from "./staking/v1beta1/query";
import * as _119 from "./staking/v1beta1/staking";
import * as _120 from "./staking/v1beta1/tx";
import * as _121 from "./tx/signing/v1beta1/signing";
import * as _122 from "./tx/v1beta1/service";
import * as _123 from "./tx/v1beta1/tx";
import * as _124 from "./upgrade/v1beta1/query";
import * as _125 from "./upgrade/v1beta1/tx";
import * as _126 from "./upgrade/v1beta1/upgrade";
import * as _127 from "./vesting/v1beta1/tx";
import * as _128 from "./vesting/v1beta1/vesting";
import * as _243 from "./authz/v1beta1/tx.amino";
import * as _244 from "./bank/v1beta1/tx.amino";
import * as _245 from "./crisis/v1beta1/tx.amino";
import * as _246 from "./distribution/v1beta1/tx.amino";
import * as _247 from "./evidence/v1beta1/tx.amino";
import * as _248 from "./feegrant/v1beta1/tx.amino";
import * as _249 from "./gov/v1/tx.amino";
import * as _250 from "./gov/v1beta1/tx.amino";
import * as _251 from "./group/v1/tx.amino";
import * as _252 from "./nft/v1beta1/tx.amino";
import * as _253 from "./slashing/v1beta1/tx.amino";
import * as _254 from "./staking/v1beta1/tx.amino";
import * as _255 from "./upgrade/v1beta1/tx.amino";
import * as _256 from "./vesting/v1beta1/tx.amino";
import * as _257 from "./authz/v1beta1/tx.registry";
import * as _258 from "./bank/v1beta1/tx.registry";
import * as _259 from "./crisis/v1beta1/tx.registry";
import * as _260 from "./distribution/v1beta1/tx.registry";
import * as _261 from "./evidence/v1beta1/tx.registry";
import * as _262 from "./feegrant/v1beta1/tx.registry";
import * as _263 from "./gov/v1/tx.registry";
import * as _264 from "./gov/v1beta1/tx.registry";
import * as _265 from "./group/v1/tx.registry";
import * as _266 from "./nft/v1beta1/tx.registry";
import * as _267 from "./slashing/v1beta1/tx.registry";
import * as _268 from "./staking/v1beta1/tx.registry";
import * as _269 from "./upgrade/v1beta1/tx.registry";
import * as _270 from "./vesting/v1beta1/tx.registry";
import * as _271 from "./auth/v1beta1/query.lcd";
import * as _272 from "./authz/v1beta1/query.lcd";
import * as _273 from "./bank/v1beta1/query.lcd";
import * as _274 from "./base/tendermint/v1beta1/query.lcd";
import * as _275 from "./distribution/v1beta1/query.lcd";
import * as _276 from "./evidence/v1beta1/query.lcd";
import * as _277 from "./feegrant/v1beta1/query.lcd";
import * as _278 from "./gov/v1/query.lcd";
import * as _279 from "./gov/v1beta1/query.lcd";
import * as _280 from "./group/v1/query.lcd";
import * as _281 from "./mint/v1beta1/query.lcd";
import * as _282 from "./nft/v1beta1/query.lcd";
import * as _283 from "./params/v1beta1/query.lcd";
import * as _284 from "./slashing/v1beta1/query.lcd";
import * as _285 from "./staking/v1beta1/query.lcd";
import * as _286 from "./tx/v1beta1/service.lcd";
import * as _287 from "./upgrade/v1beta1/query.lcd";
import * as _288 from "./app/v1alpha1/query.rpc.Query";
import * as _289 from "./auth/v1beta1/query.rpc.Query";
import * as _290 from "./authz/v1beta1/query.rpc.Query";
import * as _291 from "./bank/v1beta1/query.rpc.Query";
import * as _292 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _293 from "./distribution/v1beta1/query.rpc.Query";
import * as _294 from "./evidence/v1beta1/query.rpc.Query";
import * as _295 from "./feegrant/v1beta1/query.rpc.Query";
import * as _296 from "./gov/v1/query.rpc.Query";
import * as _297 from "./gov/v1beta1/query.rpc.Query";
import * as _298 from "./group/v1/query.rpc.Query";
import * as _299 from "./mint/v1beta1/query.rpc.Query";
import * as _300 from "./nft/v1beta1/query.rpc.Query";
import * as _301 from "./params/v1beta1/query.rpc.Query";
import * as _302 from "./slashing/v1beta1/query.rpc.Query";
import * as _303 from "./staking/v1beta1/query.rpc.Query";
import * as _304 from "./tx/v1beta1/service.rpc.Service";
import * as _305 from "./upgrade/v1beta1/query.rpc.Query";
import * as _306 from "./authz/v1beta1/tx.rpc.msg";
import * as _307 from "./bank/v1beta1/tx.rpc.msg";
import * as _308 from "./crisis/v1beta1/tx.rpc.msg";
import * as _309 from "./distribution/v1beta1/tx.rpc.msg";
import * as _310 from "./evidence/v1beta1/tx.rpc.msg";
import * as _311 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _312 from "./gov/v1/tx.rpc.msg";
import * as _313 from "./gov/v1beta1/tx.rpc.msg";
import * as _314 from "./group/v1/tx.rpc.msg";
import * as _315 from "./nft/v1beta1/tx.rpc.msg";
import * as _316 from "./slashing/v1beta1/tx.rpc.msg";
import * as _317 from "./staking/v1beta1/tx.rpc.msg";
import * as _318 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _319 from "./vesting/v1beta1/tx.rpc.msg";
import * as _408 from "./lcd";
import * as _409 from "./rpc.query";
import * as _410 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = {
      ..._37,
      ..._38,
      ..._39,
      ..._288
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._40,
      ..._41,
      ..._42,
      ..._271,
      ..._289
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._243,
      ..._257,
      ..._272,
      ..._290,
      ..._306
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._244,
      ..._258,
      ..._273,
      ..._291,
      ..._307
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._53
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._54
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._55
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._56
      };
      export const v2alpha1 = {
        ..._57
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._58
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._59,
        ..._60
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._61,
        ..._274,
        ..._292
      };
    }
    export const v1beta1 = {
      ..._62
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._63,
      ..._64
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._245,
      ..._259,
      ..._308
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._67
    };
    export namespace hd {
      export const v1 = {
        ..._68
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._69
      };
    }
    export const multisig = {
      ..._70
    };
    export const secp256k1 = {
      ..._71
    };
    export const secp256r1 = {
      ..._72
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._246,
      ..._260,
      ..._275,
      ..._293,
      ..._309
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._247,
      ..._261,
      ..._276,
      ..._294,
      ..._310
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._248,
      ..._262,
      ..._277,
      ..._295,
      ..._311
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._85
    };
  }
  export namespace gov {
    export const v1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._249,
      ..._263,
      ..._278,
      ..._296,
      ..._312
    };
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._250,
      ..._264,
      ..._279,
      ..._297,
      ..._313
    };
  }
  export namespace group {
    export const v1 = {
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._251,
      ..._265,
      ..._280,
      ..._298,
      ..._314
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._99,
      ..._100,
      ..._101,
      ..._281,
      ..._299
    };
  }
  export namespace msg {
    export const v1 = {
      ..._102
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._252,
      ..._266,
      ..._282,
      ..._300,
      ..._315
    };
  }
  export namespace orm {
    export const v1 = {
      ..._108
    };
    export const v1alpha1 = {
      ..._109
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._110,
      ..._111,
      ..._283,
      ..._301
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._253,
      ..._267,
      ..._284,
      ..._302,
      ..._316
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._254,
      ..._268,
      ..._285,
      ..._303,
      ..._317
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._121
      };
    }
    export const v1beta1 = {
      ..._122,
      ..._123,
      ..._286,
      ..._304
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._124,
      ..._125,
      ..._126,
      ..._255,
      ..._269,
      ..._287,
      ..._305,
      ..._318
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._127,
      ..._128,
      ..._256,
      ..._270,
      ..._319
    };
  }
  export const ClientFactory = {
    ..._408,
    ..._409,
    ..._410
  };
}