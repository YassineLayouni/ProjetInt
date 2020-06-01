export class Logiciel{
    private _id: string;
    private _nom: string;
    private _plateform: string;
    private _lientel: string;
    private _lien: string;

    

    constructor(id:string,nom:string,plateform:string,lien:string,lienitel:string)
    {
        this._id=id;
        this._nom=nom;
        this._plateform=plateform;
        this._lien=lien;
        this._lientel=lienitel

    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get plateform(): string {
        return this._plateform;
    }
    public set plateform(value: string) {
        this._plateform = value;
    }
    public get lien(): string {
        return this._lien;
    }
    public set lien(value: string) {
        this._lien = value;
    }
    public get lientel(): string {
        return this._lientel;
    }
    public set lientel(value: string) {
        this._lientel = value;
    }
    
}
