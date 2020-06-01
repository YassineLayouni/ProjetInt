import { Question } from './Question';
export class Qcm {



constructor(private _id: string,private _nom:string,private _matiere: string,private _ensid: string,private _dateqcm: string,private _questions: Question[]){}

public get questions(): Question[] {
    return this._questions;
}
public set questions(value: Question[]) {
    this._questions = value;
}
public get nom(): string {
    return this._nom;
}
public set nom(value: string) {
    this._nom = value;
}
public get id(): string {
    return this._id;
}
public set id(value: string) {
    this._id = value;
}
public get ensid(): string {
    return this._ensid;
}
public set ensid(value: string) {
    this._ensid = value;
}
public get dateqcm(): string {
    return this._dateqcm;
}
public set dateqcm(value: string) {
    this._dateqcm = value;
}
public get matiere(): string {
    return this._matiere;
}
public set matiere(value: string) {
    this._matiere = value;
}

}
