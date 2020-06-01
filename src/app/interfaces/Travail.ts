export class Travail{
    private _id: string;
    private _nom: string;
    private _lien: string;
    private _etudiantid: string;
  

    

    constructor(id:string,nom:string,lien:string,_etudiantid:string)
    {
        this._id=id;
        this._nom=nom;
        this._lien=lien;
        this._etudiantid=_etudiantid;


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
   
    public get etudiantid(): string {
        return this._etudiantid;
    }
    public set etudiantid(value: string) {
        this._etudiantid = value;
    }

}
