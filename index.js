"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class objElement {
    constructor() {
        this.id = 0;
        this.type = 0;
        this.hook = 0;
    }
    setId(id = 0) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
}
class subElement extends objElement {
    constructor() {
        super();
    }
    move() {
    }
}
// контейнер содержит в себе какую-то коллекцию 
// из самостоятельных или несамостоятельных объектов
// или контейнеров
class objContainer {
    constructor() {
        this.collection = [];
        this.subCollection = [];
    }
    setItem() {
    }
    getItem() {
    }
}
class subContainer extends objContainer {
    constructor() {
        super();
    }
    init() {
    }
}
