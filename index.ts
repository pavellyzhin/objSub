import {a} from './typescript';

class objElement {
    private id:number =0;
    private type:number = 0;
    private hook:number =0;

    constructor(){

    }

    setId(id:number=0):void {
        this.id = id;
    }

    public getId():number {
        return this.id;
    }
}


class subElement extends objElement{

    constructor(){
        super();
    }

    move():void{

    }
}

// контейнер содержит в себе какую-то коллекцию 
// из самостоятельных или несамостоятельных объектов
// или контейнеров
class objContainer {
    private collection: objElement[] = [];
    private subCollection: subElement[] = [];

    constructor(){

    }

    public setItem(){

    }

    public getItem(){

    }
}



class subContainer extends objContainer {

    constructor(){
        super();
    }

    public init(){

    }
}