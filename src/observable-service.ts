class Observable{
    static _instance: Observable;
    public _observer: Array<Function> = [];
    public _keys: Array<string> = [];

    subscribe(key: string,fn: Function) {
        if(this._isdiff(key)) {
            this._keys.push(key);
            this._observer.push(fn);
        }        
    }

    next(data: any) {
        this._observer.forEach((fn: Function) =>{
            fn(data);            
        })
    }

    _isdiff(key: string) {
        return this._keys.filter((k) => {
            return key === k;
        }).length < 1;
    }
}

export default Observable;