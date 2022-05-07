import { ObjObjblock } from "./block";

export class subBlock extends ObjObjblock {

    private rows:number = 0;
    private cols:number = 0;

    constructor(cols:number=0,rows:number=0){
        super();
        this.setCols(cols);
        this.setRows(rows);
    }

    public moveDown():void {
        if(this.getRow() <= this.getRows()){
            this.setRow(this.getRow() + 1);   
        }
    }

    public moveUp():void {
        if(this.getRow() >= 0){
            this.setRow(this.getRow() - 1);
        }
    }

    public moveLeft():void {
        if(this.getCol() >=0) {
            this.setCol(this.getCol() - 1);
        }
    }

    public moveRight():void {
        if(this.getCol() <= this.getCols()){
            this.setCol(this.getCol() + 1);
        }
    }

    public setRows(rows:number):void {
        this.rows = rows;
    }

    public setCols(cols:number):void {
        this.cols = cols;
    }

    public getCols():number {
        return this.cols;
    }

    public getRows():number {
        return this.rows;
    }

}