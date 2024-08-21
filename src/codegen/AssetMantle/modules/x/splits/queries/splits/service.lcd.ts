import { LCDClient } from "@cosmology/lcd";
import { QueryRequest } from "./query_request";
import { QueryResponseSDKType } from "./query_response";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.handle = this.handle.bind(this);
  }
  /* Handle */
  async handle(params: QueryRequest): Promise<QueryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.key !== "undefined") {
      options.params.key = params.key;
    }
    if (typeof params?.limit !== "undefined") {
      options.params.limit = params.limit;
    }
    const endpoint = `mantle/splits/v1beta1/splits`;
    return await this.req.get<QueryResponseSDKType>(endpoint, options);
  }
}