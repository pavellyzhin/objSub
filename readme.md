# Разделение сущностей на объекты и субъекты

## Проблема
___
 Часто при проектировании приложения возникает вопрос о разделении и распределении обязанностей между сущностями. 

 Допустим существует игровое поле, и на этом игровом поле есть какие-то разные фигуры или однотипные блоки. И вот встает вопрос: где будет осуществляться управление фигурами или блоками?

## Идея
___
Разделим сущности на объекты и субъекты:
1. Объекты - фигуры или блоки не имеют собственной модели поведения и ими манипулируют извне. Т.е. они находятся в виде колекции в каком-то контейнере, где описаны методы управления блоками или фигурами.

2. Субъекты - фигуры или блоки имеют собственную модель поведения и самостоятельно осуществляют какие-либо действия, а выполнение этих действий уже требует какой-то контроллер.

Изначально сущность имеет только свойства, и описывает как `interface`. 

Переростая в объект сущность может влиять на значение своих свойств. Осуществляется это методами `get` и `set`. Объект является несамостоятельной сущностью и подвержен только внешнему воздействию, влиянию извне.

Сущность из объекта может перерости в **субъект** и стать самостоятельной. Т.е. у сущности появится модель поведения. Моделей поведения может быть несколько и они могут отличаться друг от друга.

## Реализация
___

### Объект
 
Реализуем сущность как объект.

>
> код описан на `TypeScript`
>

    class objectElement {
        private id:number = 0;
        private row:number = 0;
        private col:number = 0;

        constructor(id:number=0){
            this.setId(id);
        }

        public setId(id:number=0){
            this.id=id;
        }

        public getId():number {
            return this.id;
        }

        public setRow(row:number=0):void{
            this.row=row;
        }

        public setCol(col:number=0):void{
            this.col=col;
        }

        public getCol():number{
            return this.col;
        }

        public getRow():number {
            return this.row;
        }
    }

Этот объект не самостоятельный и у нег онет модели поведения. Он может использоваться как часть чего-либо.

    class containerElement {

        private items: objectElement[] = [];

        constructor(){

        }

        public addItem(item:objectElement):void {
            this.items.push(item);
        }

        public getItems():objectElement[]{
            return this.items;
        }

        
    }

Внутри контейнера `containerElement` собирается коллекция(массив) из `objectElement`. Контейнер так же является объектом, т.к. у него нет модели поведения.

### Субъект

Теперь преобразуем объект `objectElement` в субъект 

    class subjectElement extends objectElement {

        constructor(id:number=0){
            super(id);
        }

        public moveLeft():void {
            this.setCol(this.getCol() - 1);
        }

        public moveRight():void{
            this.setCol(this.getCol() + 1);
        }

        public moveDown():void {
            this.setRow(this.getRow() + 1);
        }

        public moveUp():void{
            this.setRow(this.getRow() - 1);
        }
    }

У объекта появились дополнительные методы `moveLeft()`, `moveRight()`, `moveUp()`, `moveDown()`, которые описывают некоторую модель поведения объекта добавляя ему самостоятельности. Теперь объект `objectElement` становится субъектом `subjectElement`.

Теперь преобразуем из объекта в субъект - контейнер `containerElement`. Вспомним, что у контейнера есть свойство `private items: objectElement[] = [];`. Т.е. массив должен содержать **объекты**, а не субъекты. Значит контейнер должен реализовывать функционал по манипуляции объектами на игровом поле, а не просто отдавать команды.

    class subjectContainerElement extends containerElement {

        constructor(){
            super();
        }

        public moveLeft(item:objectElement):void {
            item.setCol(item.getCol() - 1);
        }

        public moveRight(item:objectElement):void {
            item.setCol(item.getCol() + 1);
        }

        public moveUp(item:objectElement):void {
            item.setRow(item.getRow() - 1);
        }

        public moveDown(item:objectElement):void {
            item.setRow(item.getRow() + 1);
        }

        // сместить все элементы вниз
        public shiftDown():void {
            this.items.foreEach((item) => {
                this.moveDown(item);
            });
        }

    }

Теперь контейнер `objectContainer`, будучи субъектом `subjectContainer` может манипулировать объектами `objectElement` из массива `items`.

## Преимущества
___
- комфорт и удобство
- объектам можно задавать несколько и разные модели поведения
