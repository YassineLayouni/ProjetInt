export class Commentaire{
    
    constructor(private _idc:string,private _description:string,private _ownerid: string,private _datec: Date){}
    public get idc():string{
        return this._idc;
    }
    public set idc(idc:string){
        this._idc = idc;
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
    public get datec(): Date {
        return this._datec;
    }
    public set datec(value: Date) {
        this._datec = value;
    }

    
    ngOnInit() {
    }
}