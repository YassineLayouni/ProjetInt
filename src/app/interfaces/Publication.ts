import { Commentaire } from './Commentaire';

export class Publication{
    
  
    
    constructor(private _idp:string,private _titre : string,private _description : string,private _ownerid:string,private _datep: Date,private _commentaires: Commentaire[]){}
    public get idp():string{
        return this._idp;
    }
    public set idp(idp:string){
        this._idp = idp;
    }
    public get titre():string{
        return this._titre;
    }
    public set titre(titre:string){
        this._titre = titre;
    }
    public get description():string{
        return this._description;
    }
    public set description(description:string){
        this._description = description;
    }
    public get ownerid(): string {
        return this._ownerid;
    }
    public set ownerid(value: string) {
        this._ownerid = value;
    }
   
    public get datep(): Date {
        return this._datep;
    }
    public set datep(value: Date) {
        this._datep = value;
    }
  
  
    public get commentaires(): Commentaire[] {
        return this._commentaires;
    }
    public set commentaires(value: Commentaire[]) {
        this._commentaires = value;
    }
    ngOnInit() {
    }
}