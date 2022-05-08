export class objBlock {

    private name:string = 'A';
    private col:number = 0;
    private row:number = 0;

    constructor(name:string='A',col:number=0,row:number=0){
        
    }

    public setName(name:string='A'):void {
        this.name = name;
    }

    public getName():string {
        return this.name;
    }

    public setCol(col:number = 0):void {
        this.col = col;
    }

    public setRow(row:number = 0):void {
        this.row = row;
    }

    public getCol():number {
        return this.col;
    }

    public getRow():number {
        return this.row;
    }
}