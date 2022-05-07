export class ObjObjblock {

    private name:string = '';
    private row:number = 0;
    private col:number = 0;

    constructor(){

    }

    public setName(name:string):void {
        this.name = name;
    }

    public getName():string{
        return this.name;
    }

    public setCol(col:number):void {
        this.col = col;
    }

    public setRow(row:number):void {
        this.row = row;
    }

    public getCol():number {
        return this.col;
    }

    public getRow():number {
        return this.row;
    }
}