class b {
    a = 1;
}

class c {
    b = [];
    a = 2;
    constructor(){
        this.b.push(new b());

        this.b.forEach((item)=>{
            console.log(this.a);
        })
    }
}

let a = new c();
