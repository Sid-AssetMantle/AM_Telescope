import * as _144 from "./applications/transfer/v1/genesis";
import * as _145 from "./applications/transfer/v1/query";
import * as _146 from "./applications/transfer/v1/transfer";
import * as _147 from "./applications/transfer/v1/tx";
import * as _148 from "./applications/transfer/v2/packet";
import * as _149 from "./core/channel/v1/channel";
import * as _150 from "./core/channel/v1/genesis";
import * as _151 from "./core/channel/v1/query";
import * as _152 from "./core/channel/v1/tx";
import * as _153 from "./core/client/v1/client";
import * as _154 from "./core/client/v1/genesis";
import * as _155 from "./core/client/v1/query";
import * as _156 from "./core/client/v1/tx";
import * as _157 from "./core/commitment/v1/commitment";
import * as _158 from "./core/connection/v1/connection";
import * as _159 from "./core/connection/v1/genesis";
import * as _160 from "./core/connection/v1/query";
import * as _161 from "./core/connection/v1/tx";
import * as _162 from "./core/port/v1/query";
import * as _163 from "./core/types/v1/genesis";
import * as _164 from "./lightclients/localhost/v1/localhost";
import * as _165 from "./lightclients/solomachine/v1/solomachine";
import * as _166 from "./lightclients/solomachine/v2/solomachine";
import * as _167 from "./lightclients/tendermint/v1/tendermint";
import * as _325 from "./applications/transfer/v1/tx.amino";
import * as _326 from "./core/channel/v1/tx.amino";
import * as _327 from "./core/client/v1/tx.amino";
import * as _328 from "./core/connection/v1/tx.amino";
import * as _329 from "./applications/transfer/v1/tx.registry";
import * as _330 from "./core/channel/v1/tx.registry";
import * as _331 from "./core/client/v1/tx.registry";
import * as _332 from "./core/connection/v1/tx.registry";
import * as _333 from "./applications/transfer/v1/query.lcd";
import * as _334 from "./core/channel/v1/query.lcd";
import * as _335 from "./core/client/v1/query.lcd";
import * as _336 from "./core/connection/v1/query.lcd";
import * as _337 from "./applications/transfer/v1/query.rpc.Query";
import * as _338 from "./core/channel/v1/query.rpc.Query";
import * as _339 from "./core/client/v1/query.rpc.Query";
import * as _340 from "./core/connection/v1/query.rpc.Query";
import * as _341 from "./core/port/v1/query.rpc.Query";
import * as _342 from "./applications/transfer/v1/tx.rpc.msg";
import * as _343 from "./core/channel/v1/tx.rpc.msg";
import * as _344 from "./core/client/v1/tx.rpc.msg";
import * as _345 from "./core/connection/v1/tx.rpc.msg";
import * as _414 from "./lcd";
import * as _415 from "./rpc.query";
import * as _416 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._144,
        ..._145,
        ..._146,
        ..._147,
        ..._325,
        ..._329,
        ..._333,
        ..._337,
        ..._342
      };
      export const v2 = {
        ..._148
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._149,
        ..._150,
        ..._151,
        ..._152,
        ..._326,
        ..._330,
        ..._334,
        ..._338,
        ..._343
      };
    }
    export namespace client {
      export const v1 = {
        ..._153,
        ..._154,
        ..._155,
        ..._156,
        ..._327,
        ..._331,
        ..._335,
        ..._339,
        ..._344
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._157
      };
    }
    export namespace connection {
      export const v1 = {
        ..._158,
        ..._159,
        ..._160,
        ..._161,
        ..._328,
        ..._332,
        ..._336,
        ..._340,
        ..._345
      };
    }
    export namespace port {
      export const v1 = {
        ..._162,
        ..._341
      };
    }
    export namespace types {
      export const v1 = {
        ..._163
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._164
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._165
      };
      export const v2 = {
        ..._166
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._167
      };
    }
  }
  export const ClientFactory = {
    ..._414,
    ..._415,
    ..._416
  };
}