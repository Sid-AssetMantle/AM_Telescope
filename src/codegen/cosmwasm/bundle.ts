import * as _129 from "./wasm/v1/authz";
import * as _130 from "./wasm/v1/genesis";
import * as _131 from "./wasm/v1/ibc";
import * as _132 from "./wasm/v1/proposal";
import * as _133 from "./wasm/v1/query";
import * as _134 from "./wasm/v1/tx";
import * as _135 from "./wasm/v1/types";
import * as _320 from "./wasm/v1/tx.amino";
import * as _321 from "./wasm/v1/tx.registry";
import * as _322 from "./wasm/v1/query.lcd";
import * as _323 from "./wasm/v1/query.rpc.Query";
import * as _324 from "./wasm/v1/tx.rpc.msg";
import * as _411 from "./lcd";
import * as _412 from "./rpc.query";
import * as _413 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._320,
      ..._321,
      ..._322,
      ..._323,
      ..._324
    };
  }
  export const ClientFactory = {
    ..._411,
    ..._412,
    ..._413
  };
}