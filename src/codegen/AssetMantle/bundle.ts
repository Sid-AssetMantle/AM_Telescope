import * as _1 from "./modules/x/assets/genesis/genesis";
import * as _2 from "./modules/x/assets/key/key";
import * as _3 from "./modules/x/assets/mappable/mappable";
import * as _4 from "./modules/x/assets/queries/asset/query_request";
import * as _5 from "./modules/x/assets/queries/asset/query_response";
import * as _6 from "./modules/x/assets/queries/asset/service";
import * as _7 from "./modules/x/assets/queries/assets/query_request";
import * as _8 from "./modules/x/assets/queries/assets/query_response";
import * as _9 from "./modules/x/assets/queries/assets/service";
import * as _10 from "./modules/x/assets/record/record";
import * as _11 from "./modules/x/assets/transactions/burn/message";
import * as _12 from "./modules/x/assets/transactions/burn/service";
import * as _13 from "./modules/x/assets/transactions/burn/transaction_response";
import * as _14 from "./modules/x/assets/transactions/define/message";
import * as _15 from "./modules/x/assets/transactions/define/service";
import * as _16 from "./modules/x/assets/transactions/define/transaction_response";
import * as _17 from "./modules/x/assets/transactions/deputize/message";
import * as _18 from "./modules/x/assets/transactions/deputize/service";
import * as _19 from "./modules/x/assets/transactions/deputize/transaction_response";
import * as _20 from "./modules/x/assets/transactions/mint/message";
import * as _21 from "./modules/x/assets/transactions/mint/service";
import * as _22 from "./modules/x/assets/transactions/mint/transaction_response";
import * as _23 from "./modules/x/assets/transactions/mutate/message";
import * as _24 from "./modules/x/assets/transactions/mutate/service";
import * as _25 from "./modules/x/assets/transactions/mutate/transaction_response";
import * as _26 from "./modules/x/assets/transactions/renumerate/message";
import * as _27 from "./modules/x/assets/transactions/renumerate/service";
import * as _28 from "./modules/x/assets/transactions/renumerate/transaction_response";
import * as _29 from "./modules/x/assets/transactions/revoke/message";
import * as _30 from "./modules/x/assets/transactions/revoke/service";
import * as _31 from "./modules/x/assets/transactions/revoke/transaction_response";
import * as _32 from "./modules/x/assets/transactions/send/message";
import * as _33 from "./modules/x/assets/transactions/send/service";
import * as _34 from "./modules/x/assets/transactions/send/transaction_response";
import * as _35 from "./modules/x/assets/transactions/unwrap/message";
import * as _36 from "./modules/x/assets/transactions/unwrap/service";
import * as _37 from "./modules/x/assets/transactions/unwrap/transaction_response";
import * as _38 from "./modules/x/assets/transactions/wrap/message";
import * as _39 from "./modules/x/assets/transactions/wrap/service";
import * as _40 from "./modules/x/assets/transactions/wrap/transaction_response";
import * as _41 from "./modules/x/classifications/genesis/genesis";
import * as _42 from "./modules/x/classifications/key/key";
import * as _43 from "./modules/x/classifications/mappable/mappable";
import * as _44 from "./modules/x/classifications/queries/classification/query_request";
import * as _45 from "./modules/x/classifications/queries/classification/query_response";
import * as _46 from "./modules/x/classifications/queries/classification/service";
import * as _47 from "./modules/x/classifications/queries/classifications/query_request";
import * as _48 from "./modules/x/classifications/queries/classifications/query_response";
import * as _49 from "./modules/x/classifications/queries/classifications/service";
import * as _50 from "./modules/x/classifications/record/record";
import * as _51 from "./modules/x/identities/genesis/genesis";
import * as _52 from "./modules/x/identities/key/key";
import * as _53 from "./modules/x/identities/mappable/mappable";
import * as _54 from "./modules/x/identities/queries/identities/query_request";
import * as _55 from "./modules/x/identities/queries/identities/query_response";
import * as _56 from "./modules/x/identities/queries/identities/service";
import * as _57 from "./modules/x/identities/queries/identity/query_request";
import * as _58 from "./modules/x/identities/queries/identity/query_response";
import * as _59 from "./modules/x/identities/queries/identity/service";
import * as _60 from "./modules/x/identities/record/record";
import * as _61 from "./modules/x/identities/transactions/define/message";
import * as _62 from "./modules/x/identities/transactions/define/service";
import * as _63 from "./modules/x/identities/transactions/define/transaction_response";
import * as _64 from "./modules/x/identities/transactions/deputize/message";
import * as _65 from "./modules/x/identities/transactions/deputize/service";
import * as _66 from "./modules/x/identities/transactions/deputize/transaction_response";
import * as _67 from "./modules/x/identities/transactions/issue/message";
import * as _68 from "./modules/x/identities/transactions/issue/service";
import * as _69 from "./modules/x/identities/transactions/issue/transaction_response";
import * as _70 from "./modules/x/identities/transactions/name/message";
import * as _71 from "./modules/x/identities/transactions/name/service";
import * as _72 from "./modules/x/identities/transactions/name/transaction_response";
import * as _73 from "./modules/x/identities/transactions/provision/message";
import * as _74 from "./modules/x/identities/transactions/provision/service";
import * as _75 from "./modules/x/identities/transactions/provision/transaction_response";
import * as _76 from "./modules/x/identities/transactions/quash/message";
import * as _77 from "./modules/x/identities/transactions/quash/service";
import * as _78 from "./modules/x/identities/transactions/quash/transaction_response";
import * as _79 from "./modules/x/identities/transactions/revoke/message";
import * as _80 from "./modules/x/identities/transactions/revoke/service";
import * as _81 from "./modules/x/identities/transactions/revoke/transaction_response";
import * as _82 from "./modules/x/identities/transactions/unprovision/message";
import * as _83 from "./modules/x/identities/transactions/unprovision/service";
import * as _84 from "./modules/x/identities/transactions/unprovision/transaction_response";
import * as _85 from "./modules/x/identities/transactions/update/message";
import * as _86 from "./modules/x/identities/transactions/update/service";
import * as _87 from "./modules/x/identities/transactions/update/transaction_response";
import * as _88 from "./modules/x/maintainers/genesis/genesis";
import * as _89 from "./modules/x/maintainers/key/key";
import * as _90 from "./modules/x/maintainers/mappable/mappable";
import * as _91 from "./modules/x/maintainers/queries/maintainer/query_request";
import * as _92 from "./modules/x/maintainers/queries/maintainer/query_response";
import * as _93 from "./modules/x/maintainers/queries/maintainer/service";
import * as _94 from "./modules/x/maintainers/queries/maintainers/query_request";
import * as _95 from "./modules/x/maintainers/queries/maintainers/query_response";
import * as _96 from "./modules/x/maintainers/queries/maintainers/service";
import * as _97 from "./modules/x/maintainers/record/record";
import * as _98 from "./modules/x/metas/genesis/genesis";
import * as _99 from "./modules/x/metas/key/key";
import * as _100 from "./modules/x/metas/mappable/mappable";
import * as _101 from "./modules/x/metas/queries/meta/query_request";
import * as _102 from "./modules/x/metas/queries/meta/query_response";
import * as _103 from "./modules/x/metas/queries/meta/service";
import * as _104 from "./modules/x/metas/queries/metas/query_request";
import * as _105 from "./modules/x/metas/queries/metas/query_response";
import * as _106 from "./modules/x/metas/queries/metas/service";
import * as _107 from "./modules/x/metas/record/record";
import * as _108 from "./modules/x/metas/transactions/reveal/message";
import * as _109 from "./modules/x/metas/transactions/reveal/service";
import * as _110 from "./modules/x/metas/transactions/reveal/transaction_response";
import * as _111 from "./modules/x/orders/genesis/genesis";
import * as _112 from "./modules/x/orders/key/key";
import * as _113 from "./modules/x/orders/mappable/mappable";
import * as _114 from "./modules/x/orders/queries/order/query_request";
import * as _115 from "./modules/x/orders/queries/order/query_response";
import * as _116 from "./modules/x/orders/queries/order/service";
import * as _117 from "./modules/x/orders/queries/orders/query_request";
import * as _118 from "./modules/x/orders/queries/orders/query_response";
import * as _119 from "./modules/x/orders/queries/orders/service";
import * as _120 from "./modules/x/orders/record/record";
import * as _121 from "./modules/x/orders/transactions/cancel/message";
import * as _122 from "./modules/x/orders/transactions/cancel/service";
import * as _123 from "./modules/x/orders/transactions/cancel/transaction_response";
import * as _124 from "./modules/x/orders/transactions/define/message";
import * as _125 from "./modules/x/orders/transactions/define/service";
import * as _126 from "./modules/x/orders/transactions/define/transaction_response";
import * as _127 from "./modules/x/orders/transactions/deputize/message";
import * as _128 from "./modules/x/orders/transactions/deputize/service";
import * as _129 from "./modules/x/orders/transactions/deputize/transaction_response";
import * as _130 from "./modules/x/orders/transactions/get/message";
import * as _131 from "./modules/x/orders/transactions/get/service";
import * as _132 from "./modules/x/orders/transactions/get/transaction_response";
import * as _133 from "./modules/x/orders/transactions/immediate/message";
import * as _134 from "./modules/x/orders/transactions/immediate/service";
import * as _135 from "./modules/x/orders/transactions/immediate/transaction_response";
import * as _136 from "./modules/x/orders/transactions/make/message";
import * as _137 from "./modules/x/orders/transactions/make/service";
import * as _138 from "./modules/x/orders/transactions/make/transaction_response";
import * as _139 from "./modules/x/orders/transactions/modify/message";
import * as _140 from "./modules/x/orders/transactions/modify/service";
import * as _141 from "./modules/x/orders/transactions/modify/transaction_response";
import * as _142 from "./modules/x/orders/transactions/put/message";
import * as _143 from "./modules/x/orders/transactions/put/service";
import * as _144 from "./modules/x/orders/transactions/put/transaction_response";
import * as _145 from "./modules/x/orders/transactions/revoke/message";
import * as _146 from "./modules/x/orders/transactions/revoke/service";
import * as _147 from "./modules/x/orders/transactions/revoke/transaction_response";
import * as _148 from "./modules/x/orders/transactions/take/message";
import * as _149 from "./modules/x/orders/transactions/take/service";
import * as _150 from "./modules/x/orders/transactions/take/transaction_response";
import * as _151 from "./modules/x/splits/genesis/genesis";
import * as _152 from "./modules/x/splits/key/key";
import * as _153 from "./modules/x/splits/mappable/mappable";
import * as _154 from "./modules/x/splits/queries/balances/query_request";
import * as _155 from "./modules/x/splits/queries/balances/query_response";
import * as _156 from "./modules/x/splits/queries/balances/service";
import * as _157 from "./modules/x/splits/queries/split/query_request";
import * as _158 from "./modules/x/splits/queries/split/query_response";
import * as _159 from "./modules/x/splits/queries/split/service";
import * as _160 from "./modules/x/splits/queries/splits/query_request";
import * as _161 from "./modules/x/splits/queries/splits/query_response";
import * as _162 from "./modules/x/splits/queries/splits/service";
import * as _163 from "./modules/x/splits/queries/supply/query_request";
import * as _164 from "./modules/x/splits/queries/supply/query_response";
import * as _165 from "./modules/x/splits/queries/supply/service";
import * as _166 from "./modules/x/splits/record/record";
import * as _167 from "./schema/data/base/acc_address_data";
import * as _168 from "./schema/data/base/any_data";
import * as _169 from "./schema/data/base/any_listable_data";
import * as _170 from "./schema/data/base/boolean_data";
import * as _171 from "./schema/data/base/dec_data";
import * as _172 from "./schema/data/base/height_data";
import * as _173 from "./schema/data/base/id_data";
import * as _174 from "./schema/data/base/linked_data";
import * as _175 from "./schema/data/base/list_data";
import * as _176 from "./schema/data/base/number_data";
import * as _177 from "./schema/data/base/string_data";
import * as _178 from "./schema/documents/base/document";
import * as _179 from "./schema/ids/base/any_id";
import * as _180 from "./schema/ids/base/asset_id";
import * as _181 from "./schema/ids/base/classification_id";
import * as _182 from "./schema/ids/base/data_id";
import * as _183 from "./schema/ids/base/hash_id";
import * as _184 from "./schema/ids/base/identity_id";
import * as _185 from "./schema/ids/base/maintainer_id";
import * as _186 from "./schema/ids/base/order_id";
import * as _187 from "./schema/ids/base/property_id";
import * as _188 from "./schema/ids/base/split_id";
import * as _189 from "./schema/ids/base/string_id";
import * as _190 from "./schema/lists/base/id_list";
import * as _191 from "./schema/lists/base/parameter_list";
import * as _192 from "./schema/lists/base/property_list";
import * as _193 from "./schema/parameters/base/parameter";
import * as _194 from "./schema/properties/base/any_property";
import * as _195 from "./schema/properties/base/mesa_property";
import * as _196 from "./schema/properties/base/meta_property";
import * as _197 from "./schema/qualified/base/immutables";
import * as _198 from "./schema/qualified/base/mutables";
import * as _199 from "./schema/types/base/height";
import * as _200 from "./schema/types/base/split";
import * as _409 from "./modules/x/assets/transactions/burn/service.amino";
import * as _410 from "./modules/x/assets/transactions/define/service.amino";
import * as _411 from "./modules/x/assets/transactions/deputize/service.amino";
import * as _412 from "./modules/x/assets/transactions/mint/service.amino";
import * as _413 from "./modules/x/assets/transactions/mutate/service.amino";
import * as _414 from "./modules/x/assets/transactions/renumerate/service.amino";
import * as _415 from "./modules/x/assets/transactions/revoke/service.amino";
import * as _416 from "./modules/x/assets/transactions/send/service.amino";
import * as _417 from "./modules/x/assets/transactions/unwrap/service.amino";
import * as _418 from "./modules/x/assets/transactions/wrap/service.amino";
import * as _419 from "./modules/x/identities/transactions/define/service.amino";
import * as _420 from "./modules/x/identities/transactions/deputize/service.amino";
import * as _421 from "./modules/x/identities/transactions/issue/service.amino";
import * as _422 from "./modules/x/identities/transactions/name/service.amino";
import * as _423 from "./modules/x/identities/transactions/provision/service.amino";
import * as _424 from "./modules/x/identities/transactions/quash/service.amino";
import * as _425 from "./modules/x/identities/transactions/revoke/service.amino";
import * as _426 from "./modules/x/identities/transactions/unprovision/service.amino";
import * as _427 from "./modules/x/identities/transactions/update/service.amino";
import * as _428 from "./modules/x/metas/transactions/reveal/service.amino";
import * as _429 from "./modules/x/orders/transactions/cancel/service.amino";
import * as _430 from "./modules/x/orders/transactions/define/service.amino";
import * as _431 from "./modules/x/orders/transactions/deputize/service.amino";
import * as _432 from "./modules/x/orders/transactions/get/service.amino";
import * as _433 from "./modules/x/orders/transactions/immediate/service.amino";
import * as _434 from "./modules/x/orders/transactions/make/service.amino";
import * as _435 from "./modules/x/orders/transactions/modify/service.amino";
import * as _436 from "./modules/x/orders/transactions/put/service.amino";
import * as _437 from "./modules/x/orders/transactions/revoke/service.amino";
import * as _438 from "./modules/x/orders/transactions/take/service.amino";
import * as _439 from "./modules/x/assets/transactions/burn/service.registry";
import * as _440 from "./modules/x/assets/transactions/define/service.registry";
import * as _441 from "./modules/x/assets/transactions/deputize/service.registry";
import * as _442 from "./modules/x/assets/transactions/mint/service.registry";
import * as _443 from "./modules/x/assets/transactions/mutate/service.registry";
import * as _444 from "./modules/x/assets/transactions/renumerate/service.registry";
import * as _445 from "./modules/x/assets/transactions/revoke/service.registry";
import * as _446 from "./modules/x/assets/transactions/send/service.registry";
import * as _447 from "./modules/x/assets/transactions/unwrap/service.registry";
import * as _448 from "./modules/x/assets/transactions/wrap/service.registry";
import * as _449 from "./modules/x/identities/transactions/define/service.registry";
import * as _450 from "./modules/x/identities/transactions/deputize/service.registry";
import * as _451 from "./modules/x/identities/transactions/issue/service.registry";
import * as _452 from "./modules/x/identities/transactions/name/service.registry";
import * as _453 from "./modules/x/identities/transactions/provision/service.registry";
import * as _454 from "./modules/x/identities/transactions/quash/service.registry";
import * as _455 from "./modules/x/identities/transactions/revoke/service.registry";
import * as _456 from "./modules/x/identities/transactions/unprovision/service.registry";
import * as _457 from "./modules/x/identities/transactions/update/service.registry";
import * as _458 from "./modules/x/metas/transactions/reveal/service.registry";
import * as _459 from "./modules/x/orders/transactions/cancel/service.registry";
import * as _460 from "./modules/x/orders/transactions/define/service.registry";
import * as _461 from "./modules/x/orders/transactions/deputize/service.registry";
import * as _462 from "./modules/x/orders/transactions/get/service.registry";
import * as _463 from "./modules/x/orders/transactions/immediate/service.registry";
import * as _464 from "./modules/x/orders/transactions/make/service.registry";
import * as _465 from "./modules/x/orders/transactions/modify/service.registry";
import * as _466 from "./modules/x/orders/transactions/put/service.registry";
import * as _467 from "./modules/x/orders/transactions/revoke/service.registry";
import * as _468 from "./modules/x/orders/transactions/take/service.registry";
import * as _469 from "./modules/x/assets/queries/asset/service.lcd";
import * as _470 from "./modules/x/assets/queries/assets/service.lcd";
import * as _471 from "./modules/x/classifications/queries/classification/service.lcd";
import * as _472 from "./modules/x/classifications/queries/classifications/service.lcd";
import * as _473 from "./modules/x/identities/queries/identities/service.lcd";
import * as _474 from "./modules/x/identities/queries/identity/service.lcd";
import * as _475 from "./modules/x/maintainers/queries/maintainer/service.lcd";
import * as _476 from "./modules/x/maintainers/queries/maintainers/service.lcd";
import * as _477 from "./modules/x/metas/queries/meta/service.lcd";
import * as _478 from "./modules/x/metas/queries/metas/service.lcd";
import * as _479 from "./modules/x/orders/queries/order/service.lcd";
import * as _480 from "./modules/x/orders/queries/orders/service.lcd";
import * as _481 from "./modules/x/splits/queries/balances/service.lcd";
import * as _482 from "./modules/x/splits/queries/split/service.lcd";
import * as _483 from "./modules/x/splits/queries/splits/service.lcd";
import * as _484 from "./modules/x/splits/queries/supply/service.lcd";
import * as _485 from "./modules/x/assets/queries/asset/service.rpc.Query";
import * as _486 from "./modules/x/assets/queries/assets/service.rpc.Query";
import * as _487 from "./modules/x/classifications/queries/classification/service.rpc.Query";
import * as _488 from "./modules/x/classifications/queries/classifications/service.rpc.Query";
import * as _489 from "./modules/x/identities/queries/identities/service.rpc.Query";
import * as _490 from "./modules/x/identities/queries/identity/service.rpc.Query";
import * as _491 from "./modules/x/maintainers/queries/maintainer/service.rpc.Query";
import * as _492 from "./modules/x/maintainers/queries/maintainers/service.rpc.Query";
import * as _493 from "./modules/x/metas/queries/meta/service.rpc.Query";
import * as _494 from "./modules/x/metas/queries/metas/service.rpc.Query";
import * as _495 from "./modules/x/orders/queries/order/service.rpc.Query";
import * as _496 from "./modules/x/orders/queries/orders/service.rpc.Query";
import * as _497 from "./modules/x/splits/queries/balances/service.rpc.Query";
import * as _498 from "./modules/x/splits/queries/split/service.rpc.Query";
import * as _499 from "./modules/x/splits/queries/splits/service.rpc.Query";
import * as _500 from "./modules/x/splits/queries/supply/service.rpc.Query";
import * as _501 from "./modules/x/assets/transactions/burn/service.rpc.msg";
import * as _502 from "./modules/x/assets/transactions/define/service.rpc.msg";
import * as _503 from "./modules/x/assets/transactions/deputize/service.rpc.msg";
import * as _504 from "./modules/x/assets/transactions/mint/service.rpc.msg";
import * as _505 from "./modules/x/assets/transactions/mutate/service.rpc.msg";
import * as _506 from "./modules/x/assets/transactions/renumerate/service.rpc.msg";
import * as _507 from "./modules/x/assets/transactions/revoke/service.rpc.msg";
import * as _508 from "./modules/x/assets/transactions/send/service.rpc.msg";
import * as _509 from "./modules/x/assets/transactions/unwrap/service.rpc.msg";
import * as _510 from "./modules/x/assets/transactions/wrap/service.rpc.msg";
import * as _511 from "./modules/x/identities/transactions/define/service.rpc.msg";
import * as _512 from "./modules/x/identities/transactions/deputize/service.rpc.msg";
import * as _513 from "./modules/x/identities/transactions/issue/service.rpc.msg";
import * as _514 from "./modules/x/identities/transactions/name/service.rpc.msg";
import * as _515 from "./modules/x/identities/transactions/provision/service.rpc.msg";
import * as _516 from "./modules/x/identities/transactions/quash/service.rpc.msg";
import * as _517 from "./modules/x/identities/transactions/revoke/service.rpc.msg";
import * as _518 from "./modules/x/identities/transactions/unprovision/service.rpc.msg";
import * as _519 from "./modules/x/identities/transactions/update/service.rpc.msg";
import * as _520 from "./modules/x/metas/transactions/reveal/service.rpc.msg";
import * as _521 from "./modules/x/orders/transactions/cancel/service.rpc.msg";
import * as _522 from "./modules/x/orders/transactions/define/service.rpc.msg";
import * as _523 from "./modules/x/orders/transactions/deputize/service.rpc.msg";
import * as _524 from "./modules/x/orders/transactions/get/service.rpc.msg";
import * as _525 from "./modules/x/orders/transactions/immediate/service.rpc.msg";
import * as _526 from "./modules/x/orders/transactions/make/service.rpc.msg";
import * as _527 from "./modules/x/orders/transactions/modify/service.rpc.msg";
import * as _528 from "./modules/x/orders/transactions/put/service.rpc.msg";
import * as _529 from "./modules/x/orders/transactions/revoke/service.rpc.msg";
import * as _530 from "./modules/x/orders/transactions/take/service.rpc.msg";
import * as _696 from "./lcd";
import * as _697 from "./rpc.query";
import * as _698 from "./rpc.tx";
export namespace AssetMantle {
  export namespace modules {
    export namespace x {
      export namespace assets {
        export const genesis = {
          ..._1
        };
        export const key = {
          ..._2
        };
        export const mappable = {
          ..._3
        };
        export namespace queries {
          export const asset = {
            ..._4,
            ..._5,
            ..._6,
            ..._469,
            ..._485
          };
          export const assets = {
            ..._7,
            ..._8,
            ..._9,
            ..._470,
            ..._486
          };
        }
        export const record = {
          ..._10
        };
        export namespace transactions {
          export const burn = {
            ..._11,
            ..._12,
            ..._13,
            ..._409,
            ..._439,
            ..._501
          };
          export const define = {
            ..._14,
            ..._15,
            ..._16,
            ..._410,
            ..._440,
            ..._502
          };
          export const deputize = {
            ..._17,
            ..._18,
            ..._19,
            ..._411,
            ..._441,
            ..._503
          };
          export const mint = {
            ..._20,
            ..._21,
            ..._22,
            ..._412,
            ..._442,
            ..._504
          };
          export const mutate = {
            ..._23,
            ..._24,
            ..._25,
            ..._413,
            ..._443,
            ..._505
          };
          export const renumerate = {
            ..._26,
            ..._27,
            ..._28,
            ..._414,
            ..._444,
            ..._506
          };
          export const revoke = {
            ..._29,
            ..._30,
            ..._31,
            ..._415,
            ..._445,
            ..._507
          };
          export const send = {
            ..._32,
            ..._33,
            ..._34,
            ..._416,
            ..._446,
            ..._508
          };
          export const unwrap = {
            ..._35,
            ..._36,
            ..._37,
            ..._417,
            ..._447,
            ..._509
          };
          export const wrap = {
            ..._38,
            ..._39,
            ..._40,
            ..._418,
            ..._448,
            ..._510
          };
        }
      }
      export namespace classifications {
        export const genesis = {
          ..._41
        };
        export const key = {
          ..._42
        };
        export const mappable = {
          ..._43
        };
        export namespace queries {
          export const classification = {
            ..._44,
            ..._45,
            ..._46,
            ..._471,
            ..._487
          };
          export const classifications = {
            ..._47,
            ..._48,
            ..._49,
            ..._472,
            ..._488
          };
        }
        export const record = {
          ..._50
        };
      }
      export namespace identities {
        export const genesis = {
          ..._51
        };
        export const key = {
          ..._52
        };
        export const mappable = {
          ..._53
        };
        export namespace queries {
          export const identities = {
            ..._54,
            ..._55,
            ..._56,
            ..._473,
            ..._489
          };
          export const identity = {
            ..._57,
            ..._58,
            ..._59,
            ..._474,
            ..._490
          };
        }
        export const record = {
          ..._60
        };
        export namespace transactions {
          export const define = {
            ..._61,
            ..._62,
            ..._63,
            ..._419,
            ..._449,
            ..._511
          };
          export const deputize = {
            ..._64,
            ..._65,
            ..._66,
            ..._420,
            ..._450,
            ..._512
          };
          export const issue = {
            ..._67,
            ..._68,
            ..._69,
            ..._421,
            ..._451,
            ..._513
          };
          export const name = {
            ..._70,
            ..._71,
            ..._72,
            ..._422,
            ..._452,
            ..._514
          };
          export const provision = {
            ..._73,
            ..._74,
            ..._75,
            ..._423,
            ..._453,
            ..._515
          };
          export const quash = {
            ..._76,
            ..._77,
            ..._78,
            ..._424,
            ..._454,
            ..._516
          };
          export const revoke = {
            ..._79,
            ..._80,
            ..._81,
            ..._425,
            ..._455,
            ..._517
          };
          export const unprovision = {
            ..._82,
            ..._83,
            ..._84,
            ..._426,
            ..._456,
            ..._518
          };
          export const update = {
            ..._85,
            ..._86,
            ..._87,
            ..._427,
            ..._457,
            ..._519
          };
        }
      }
      export namespace maintainers {
        export const genesis = {
          ..._88
        };
        export const key = {
          ..._89
        };
        export const mappable = {
          ..._90
        };
        export namespace queries {
          export const maintainer = {
            ..._91,
            ..._92,
            ..._93,
            ..._475,
            ..._491
          };
          export const maintainers = {
            ..._94,
            ..._95,
            ..._96,
            ..._476,
            ..._492
          };
        }
        export const record = {
          ..._97
        };
      }
      export namespace metas {
        export const genesis = {
          ..._98
        };
        export const key = {
          ..._99
        };
        export const mappable = {
          ..._100
        };
        export namespace queries {
          export const meta = {
            ..._101,
            ..._102,
            ..._103,
            ..._477,
            ..._493
          };
          export const metas = {
            ..._104,
            ..._105,
            ..._106,
            ..._478,
            ..._494
          };
        }
        export const record = {
          ..._107
        };
        export namespace transactions {
          export const reveal = {
            ..._108,
            ..._109,
            ..._110,
            ..._428,
            ..._458,
            ..._520
          };
        }
      }
      export namespace orders {
        export const genesis = {
          ..._111
        };
        export const key = {
          ..._112
        };
        export const mappable = {
          ..._113
        };
        export namespace queries {
          export const order = {
            ..._114,
            ..._115,
            ..._116,
            ..._479,
            ..._495
          };
          export const orders = {
            ..._117,
            ..._118,
            ..._119,
            ..._480,
            ..._496
          };
        }
        export const record = {
          ..._120
        };
        export namespace transactions {
          export const cancel = {
            ..._121,
            ..._122,
            ..._123,
            ..._429,
            ..._459,
            ..._521
          };
          export const define = {
            ..._124,
            ..._125,
            ..._126,
            ..._430,
            ..._460,
            ..._522
          };
          export const deputize = {
            ..._127,
            ..._128,
            ..._129,
            ..._431,
            ..._461,
            ..._523
          };
          export const get = {
            ..._130,
            ..._131,
            ..._132,
            ..._432,
            ..._462,
            ..._524
          };
          export const immediate = {
            ..._133,
            ..._134,
            ..._135,
            ..._433,
            ..._463,
            ..._525
          };
          export const make = {
            ..._136,
            ..._137,
            ..._138,
            ..._434,
            ..._464,
            ..._526
          };
          export const modify = {
            ..._139,
            ..._140,
            ..._141,
            ..._435,
            ..._465,
            ..._527
          };
          export const put = {
            ..._142,
            ..._143,
            ..._144,
            ..._436,
            ..._466,
            ..._528
          };
          export const revoke = {
            ..._145,
            ..._146,
            ..._147,
            ..._437,
            ..._467,
            ..._529
          };
          export const take = {
            ..._148,
            ..._149,
            ..._150,
            ..._438,
            ..._468,
            ..._530
          };
        }
      }
      export namespace splits {
        export const genesis = {
          ..._151
        };
        export const key = {
          ..._152
        };
        export const mappable = {
          ..._153
        };
        export namespace queries {
          export const balances = {
            ..._154,
            ..._155,
            ..._156,
            ..._481,
            ..._497
          };
          export const split = {
            ..._157,
            ..._158,
            ..._159,
            ..._482,
            ..._498
          };
          export const splits = {
            ..._160,
            ..._161,
            ..._162,
            ..._483,
            ..._499
          };
          export const supply = {
            ..._163,
            ..._164,
            ..._165,
            ..._484,
            ..._500
          };
        }
        export const record = {
          ..._166
        };
      }
    }
  }
  export namespace schema {
    export namespace data {
      export const base = {
        ..._167,
        ..._168,
        ..._169,
        ..._170,
        ..._171,
        ..._172,
        ..._173,
        ..._174,
        ..._175,
        ..._176,
        ..._177
      };
    }
    export namespace documents {
      export const base = {
        ..._178
      };
    }
    export namespace ids {
      export const base = {
        ..._179,
        ..._180,
        ..._181,
        ..._182,
        ..._183,
        ..._184,
        ..._185,
        ..._186,
        ..._187,
        ..._188,
        ..._189
      };
    }
    export namespace lists {
      export const base = {
        ..._190,
        ..._191,
        ..._192
      };
    }
    export namespace parameters {
      export const base = {
        ..._193
      };
    }
    export namespace properties {
      export const base = {
        ..._194,
        ..._195,
        ..._196
      };
    }
    export namespace qualified {
      export const base = {
        ..._197,
        ..._198
      };
    }
    export namespace types {
      export const base = {
        ..._199,
        ..._200
      };
    }
  }
  export const ClientFactory = {
    ..._696,
    ..._697,
    ..._698
  };
}