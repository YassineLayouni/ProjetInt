export class Question {
   
    constructor(private _id: string,private _question: string,private _proposition1: string,private _proposition2: string,private _proposition3: string,private _reponse: string){}

    public get reponse(): string {
        return this._reponse;
    }
    public set reponse(value: string) {
        this._reponse = value;
    }
  
    public get question(): string {
        return this._question;
    }
    public set question(value: string) {
        this._question = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get proposition3(): string {
        return this._proposition3;
    }
    public set proposition3(value: string) {
        this._proposition3 = value;
    }
    public get proposition2(): string {
        return this._proposition2;
    }
    public set proposition2(value: string) {
        this._proposition2 = value;
    }
    public get proposition1(): string {
        return this._proposition1;
    }
    public set proposition1(value: string) {
        this._proposition1 = value;
    }
}