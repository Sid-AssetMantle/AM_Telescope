import * as _310 from "./applications/transfer/v1/genesis";
import * as _311 from "./applications/transfer/v1/query";
import * as _312 from "./applications/transfer/v1/transfer";
import * as _313 from "./applications/transfer/v1/tx";
import * as _314 from "./applications/transfer/v2/packet";
import * as _315 from "./core/channel/v1/channel";
import * as _316 from "./core/channel/v1/genesis";
import * as _317 from "./core/channel/v1/query";
import * as _318 from "./core/channel/v1/tx";
import * as _319 from "./core/client/v1/client";
import * as _320 from "./core/client/v1/genesis";
import * as _321 from "./core/client/v1/query";
import * as _322 from "./core/client/v1/tx";
import * as _323 from "./core/commitment/v1/commitment";
import * as _324 from "./core/connection/v1/connection";
import * as _325 from "./core/connection/v1/genesis";
import * as _326 from "./core/connection/v1/query";
import * as _327 from "./core/connection/v1/tx";
import * as _328 from "./core/port/v1/query";
import * as _329 from "./core/types/v1/genesis";
import * as _330 from "./lightclients/localhost/v1/localhost";
import * as _331 from "./lightclients/solomachine/v1/solomachine";
import * as _332 from "./lightclients/solomachine/v2/solomachine";
import * as _333 from "./lightclients/tendermint/v1/tendermint";
import * as _613 from "./applications/transfer/v1/tx.amino";
import * as _614 from "./core/channel/v1/tx.amino";
import * as _615 from "./core/client/v1/tx.amino";
import * as _616 from "./core/connection/v1/tx.amino";
import * as _617 from "./applications/transfer/v1/tx.registry";
import * as _618 from "./core/channel/v1/tx.registry";
import * as _619 from "./core/client/v1/tx.registry";
import * as _620 from "./core/connection/v1/tx.registry";
import * as _621 from "./applications/transfer/v1/query.lcd";
import * as _622 from "./core/channel/v1/query.lcd";
import * as _623 from "./core/client/v1/query.lcd";
import * as _624 from "./core/connection/v1/query.lcd";
import * as _625 from "./applications/transfer/v1/query.rpc.Query";
import * as _626 from "./core/channel/v1/query.rpc.Query";
import * as _627 from "./core/client/v1/query.rpc.Query";
import * as _628 from "./core/connection/v1/query.rpc.Query";
import * as _629 from "./core/port/v1/query.rpc.Query";
import * as _630 from "./applications/transfer/v1/tx.rpc.msg";
import * as _631 from "./core/channel/v1/tx.rpc.msg";
import * as _632 from "./core/client/v1/tx.rpc.msg";
import * as _633 from "./core/connection/v1/tx.rpc.msg";
import * as _705 from "./lcd";
import * as _706 from "./rpc.query";
import * as _707 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._310,
        ..._311,
        ..._312,
        ..._313,
        ..._613,
        ..._617,
        ..._621,
        ..._625,
        ..._630
      };
      export const v2 = {
        ..._314
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._315,
        ..._316,
        ..._317,
        ..._318,
        ..._614,
        ..._618,
        ..._622,
        ..._626,
        ..._631
      };
    }
    export namespace client {
      export const v1 = {
        ..._319,
        ..._320,
        ..._321,
        ..._322,
        ..._615,
        ..._619,
        ..._623,
        ..._627,
        ..._632
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._323
      };
    }
    export namespace connection {
      export const v1 = {
        ..._324,
        ..._325,
        ..._326,
        ..._327,
        ..._616,
        ..._620,
        ..._624,
        ..._628,
        ..._633
      };
    }
    export namespace port {
      export const v1 = {
        ..._328,
        ..._629
      };
    }
    export namespace types {
      export const v1 = {
        ..._329
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._330
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._331
      };
      export const v2 = {
        ..._332
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._333
      };
    }
  }
  export const ClientFactory = {
    ..._705,
    ..._706,
    ..._707
  };
}