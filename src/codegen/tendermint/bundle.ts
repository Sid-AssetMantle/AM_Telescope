import * as _232 from "./abci/types";
import * as _233 from "./crypto/keys";
import * as _234 from "./crypto/proof";
import * as _235 from "./libs/bits/types";
import * as _236 from "./p2p/types";
import * as _237 from "./types/block";
import * as _238 from "./types/evidence";
import * as _239 from "./types/params";
import * as _240 from "./types/types";
import * as _241 from "./types/validator";
import * as _242 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._232
  };
  export const crypto = {
    ..._233,
    ..._234
  };
  export namespace libs {
    export const bits = {
      ..._235
    };
  }
  export const p2p = {
    ..._236
  };
  export const types = {
    ..._237,
    ..._238,
    ..._239,
    ..._240,
    ..._241
  };
  export const version = {
    ..._242
  };
}