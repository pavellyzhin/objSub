import { objBlock } from "./block";

export class subBlock extends objBlock {

    private rows:number = 0;
    private cols:number = 0;

    constructor(name:string='A') {
        super(name);
    }

    public setRows(rows:number=0):void {
        this.rows = rows;
    }

    public setCols(cols:number=0):void {
        this.cols = cols;
    }

    public getRows():number {
        return this.rows;
    }

    public getCols():number {
        return this.cols;
    }

    public moveLeft():void {
        this.setCol(this.getCol() - 1);
    }

    public moveUp():void {
        this.setRow(this.getRow() - 1);
    }

    public moveRight():void {
        this.setCol(this.getCol() + 1);
    }

    public moveDown():void {
        this.setRow(this.getRow() + 1);
    }


    // поменяться местами
    // мы же самостоятельные
    public moveReplace(block:subBlock):void {
        let [col,row]   = [ block.getCol() , block.getRow() ];
        let [col1,row1] = [ this.getCol()  , this.getRow()  ];

        block.setCol(col1);
        block.setRow(row1);

        this.setCol(col);
        this.setRow(row);
    }
}