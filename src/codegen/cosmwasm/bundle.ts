import * as _295 from "./wasm/v1/authz";
import * as _296 from "./wasm/v1/genesis";
import * as _297 from "./wasm/v1/ibc";
import * as _298 from "./wasm/v1/proposal";
import * as _299 from "./wasm/v1/query";
import * as _300 from "./wasm/v1/tx";
import * as _301 from "./wasm/v1/types";
import * as _608 from "./wasm/v1/tx.amino";
import * as _609 from "./wasm/v1/tx.registry";
import * as _610 from "./wasm/v1/query.lcd";
import * as _611 from "./wasm/v1/query.rpc.Query";
import * as _612 from "./wasm/v1/tx.rpc.msg";
import * as _702 from "./lcd";
import * as _703 from "./rpc.query";
import * as _704 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._295,
      ..._296,
      ..._297,
      ..._298,
      ..._299,
      ..._300,
      ..._301,
      ..._608,
      ..._609,
      ..._610,
      ..._611,
      ..._612
    };
  }
  export const ClientFactory = {
    ..._702,
    ..._703,
    ..._704
  };
}