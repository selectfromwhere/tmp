// tslint:disable:no-any

export class Dictionary {
  private lang: string | null;

  private dic: any;

  constructor(lang: string | null, dic: any) {
    this.lang = lang;
    this.dic = dic;
  }

  // tslint:disable-next-line:function-name
  public v(key: string): any {
    const keys: string[] = key.split('.');
    let val: any = this.dic;
    for (const valueKey of keys) {
      val = val[valueKey];
    }

    return val;
  }

  // tslint:disable-next-line:function-name
  public t(key: string, ...args: any[]): string {
    const val: any = args ? this.v(key) : this.v(key)(...args);

    // Consider fallback
    return val[this.lang];
  }
}
