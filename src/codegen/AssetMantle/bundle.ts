import * as _1 from "./schema/data/base/acc_address_data";
import * as _2 from "./schema/data/base/any_data";
import * as _3 from "./schema/data/base/any_listable_data";
import * as _4 from "./schema/data/base/boolean_data";
import * as _5 from "./schema/data/base/dec_data";
import * as _6 from "./schema/data/base/height_data";
import * as _7 from "./schema/data/base/id_data";
import * as _8 from "./schema/data/base/linked_data";
import * as _9 from "./schema/data/base/list_data";
import * as _10 from "./schema/data/base/number_data";
import * as _11 from "./schema/data/base/string_data";
import * as _12 from "./schema/documents/base/document";
import * as _13 from "./schema/ids/base/any_id";
import * as _14 from "./schema/ids/base/asset_id";
import * as _15 from "./schema/ids/base/classification_id";
import * as _16 from "./schema/ids/base/data_id";
import * as _17 from "./schema/ids/base/hash_id";
import * as _18 from "./schema/ids/base/identity_id";
import * as _19 from "./schema/ids/base/maintainer_id";
import * as _20 from "./schema/ids/base/order_id";
import * as _21 from "./schema/ids/base/property_id";
import * as _22 from "./schema/ids/base/split_id";
import * as _23 from "./schema/ids/base/string_id";
import * as _24 from "./schema/lists/base/id_list";
import * as _25 from "./schema/lists/base/parameter_list";
import * as _26 from "./schema/lists/base/property_list";
import * as _27 from "./schema/parameters/base/parameter";
import * as _28 from "./schema/properties/base/any_property";
import * as _29 from "./schema/properties/base/mesa_property";
import * as _30 from "./schema/properties/base/meta_property";
import * as _31 from "./schema/qualified/base/immutables";
import * as _32 from "./schema/qualified/base/mutables";
import * as _33 from "./schema/types/base/height";
import * as _34 from "./schema/types/base/split";
export namespace AssetMantle {
  export namespace schema {
    export namespace data {
      export const base = {
        ..._1,
        ..._2,
        ..._3,
        ..._4,
        ..._5,
        ..._6,
        ..._7,
        ..._8,
        ..._9,
        ..._10,
        ..._11
      };
    }
    export namespace documents {
      export const base = {
        ..._12
      };
    }
    export namespace ids {
      export const base = {
        ..._13,
        ..._14,
        ..._15,
        ..._16,
        ..._17,
        ..._18,
        ..._19,
        ..._20,
        ..._21,
        ..._22,
        ..._23
      };
    }
    export namespace lists {
      export const base = {
        ..._24,
        ..._25,
        ..._26
      };
    }
    export namespace parameters {
      export const base = {
        ..._27
      };
    }
    export namespace properties {
      export const base = {
        ..._28,
        ..._29,
        ..._30
      };
    }
    export namespace qualified {
      export const base = {
        ..._31,
        ..._32
      };
    }
    export namespace types {
      export const base = {
        ..._33,
        ..._34
      };
    }
  }
}