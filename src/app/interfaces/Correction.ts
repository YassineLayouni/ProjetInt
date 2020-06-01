export class Correction{
    private _id: string;
    private _nom: string;
    private _lien: string;
    private _ensid: string;

    private _travailid: string;
    



  

    

    constructor(id:string,nom:string,lien:string,ensid:string,travailid:string)
    {
        this._id=id;
        this._nom=nom;
        this._lien=lien;
        this._ensid=ensid;
        this._travailid=travailid;




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
  
    public get lien(): string {
        return this._lien;
    }
    public set lien(value: string) {
        this._lien = value;
    }
    public get travailid(): string {
        return this._travailid;
    }
    public set travailid(value: string) {
        this._travailid = value;
    }
    public get ensid_1(): string {
        return this._ensid;
    }
    public set ensid_1(value: string) {
        this._ensid = value;
    }

}
