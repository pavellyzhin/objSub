import { subblockA } from "./subblockA";


export class ObjectContainerGameboard {

    private items: subblockA[] = [];

    constructor(){

    }

    addItem(item:subblockA):void{
        this.items.push(item);
    }

    getItems():subblockA[]{
        return this.items;
    }
}