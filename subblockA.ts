import { subBlock } from "./subblock";

export class subblockA extends subBlock {

    constructor(col:number = 0, row:number = 0){
        super(col,row);

        this.setName('A');
    }
}