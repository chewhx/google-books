export interface IRequestParams {
  q: string;
  download?: "epub";
  filter?: "partial" | "full" | "free-ebooks" | "paid-ebooks" | "ebooks";
  langRestrict?: "aa"|"ab"|"ae"|"af"|"ak"|"am"|"an"|"ar"|"as"|"av"|"ay"|"az"|"ba"|"be"|"bg"|"bh"|"bi"|"bm"|"bn"|"bo"|"br"|"bs"|"ca"|"ce"|"ch"|"co"|"cr"|"cs"|"cu"|"cv"|"cy"|"da"|"de"|"dv"|"dz"|"ee"|"el"|"en"|"eo"|"es"|"et"|"eu"|"fa"|"ff"|"fi"|"fj"|"fo"|"fr"|"fy"|"ga"|"gd"|"gl"|"gn"|"gu"|"gv"|"ha"|"he"|"hi"|"ho"|"hr"|"ht"|"hu"|"hy"|"hz"|"ia"|"id"|"ie"|"ig"|"ii"|"ik"|"io"|"is"|"it"|"iu"|"ja"|"jv"|"ka"|"kg"|"ki"|"kj"|"kk"|"kl"|"km"|"kn"|"ko"|"kr"|"ks"|"ku"|"kv"|"kw"|"ky"|"la"|"lb"|"lg"|"li"|"ln"|"lo"|"lt"|"lu"|"lv"|"mg"|"mh"|"mi"|"mk"|"ml"|"mn"|"mr"|"ms"|"mt"|"my"|"na"|"nb"|"nd"|"ne"|"ng"|"nl"|"nn"|"no"|"nr"|"nv"|"ny"|"oc"|"oj"|"om"|"or"|"os"|"pa"|"pi"|"pl"|"ps"|"pt"|"qu"|"rm"|"rn"|"ro"|"ru"|"rw"|"sa"|"sc"|"sd"|"se"|"sg"|"si"|"sk"|"sl"|"sm"|"sn"|"so"|"sq"|"sr"|"ss"|"st"|"su"|"sv"|"sw"|"ta"|"te"|"tg"|"th"|"ti"|"tk"|"tl"|"tn"|"to"|"tr"|"ts"|"tt"|"tw"|"ty"|"ug"|"uk"|"ur"|"uz"|"ve"|"vi"|"vo"|"wa"|"wo"|"xh"|"yi"|"yo"|"za"|"zh"|"zu";
  maxResults?: number;
  orderBy?: "relevance" | "newest";
  printType?: "all" | "books" | "magazines";
  projection?: "full" | "lite";
  startIndex?: number;
  volumeId?: string;
}

export default class RequestParams implements IRequestParams {
  q: string;
  download?: "epub";
  filter?: "partial" | "full" | "free-ebooks" | "paid-ebooks" | "ebooks";
  langRestrict?: "aa"|"ab"|"ae"|"af"|"ak"|"am"|"an"|"ar"|"as"|"av"|"ay"|"az"|"ba"|"be"|"bg"|"bh"|"bi"|"bm"|"bn"|"bo"|"br"|"bs"|"ca"|"ce"|"ch"|"co"|"cr"|"cs"|"cu"|"cv"|"cy"|"da"|"de"|"dv"|"dz"|"ee"|"el"|"en"|"eo"|"es"|"et"|"eu"|"fa"|"ff"|"fi"|"fj"|"fo"|"fr"|"fy"|"ga"|"gd"|"gl"|"gn"|"gu"|"gv"|"ha"|"he"|"hi"|"ho"|"hr"|"ht"|"hu"|"hy"|"hz"|"ia"|"id"|"ie"|"ig"|"ii"|"ik"|"io"|"is"|"it"|"iu"|"ja"|"jv"|"ka"|"kg"|"ki"|"kj"|"kk"|"kl"|"km"|"kn"|"ko"|"kr"|"ks"|"ku"|"kv"|"kw"|"ky"|"la"|"lb"|"lg"|"li"|"ln"|"lo"|"lt"|"lu"|"lv"|"mg"|"mh"|"mi"|"mk"|"ml"|"mn"|"mr"|"ms"|"mt"|"my"|"na"|"nb"|"nd"|"ne"|"ng"|"nl"|"nn"|"no"|"nr"|"nv"|"ny"|"oc"|"oj"|"om"|"or"|"os"|"pa"|"pi"|"pl"|"ps"|"pt"|"qu"|"rm"|"rn"|"ro"|"ru"|"rw"|"sa"|"sc"|"sd"|"se"|"sg"|"si"|"sk"|"sl"|"sm"|"sn"|"so"|"sq"|"sr"|"ss"|"st"|"su"|"sv"|"sw"|"ta"|"te"|"tg"|"th"|"ti"|"tk"|"tl"|"tn"|"to"|"tr"|"ts"|"tt"|"tw"|"ty"|"ug"|"uk"|"ur"|"uz"|"ve"|"vi"|"vo"|"wa"|"wo"|"xh"|"yi"|"yo"|"za"|"zh"|"zu";
  maxResults?: number;
  orderBy?: "relevance" | "newest";
  printType?: "all" | "books" | "magazines";
  projection?: "full" | "lite";
  startIndex?: number;
  volumeId?: string;

  constructor(params:IRequestParams) {
    this.q = params.q || "";
    this.download = params.download || undefined;
    this.filter = params.filter || undefined;
    this.langRestrict = params.langRestrict || "en";
    this.maxResults = params.maxResults || 10;
    this.orderBy = params.orderBy || "relevance";
    this.printType = params.printType || "all";
    this.projection = params.projection || "lite";
    this.startIndex = params.startIndex || 0;
    this.volumeId = params.volumeId || undefined;
  }
}
