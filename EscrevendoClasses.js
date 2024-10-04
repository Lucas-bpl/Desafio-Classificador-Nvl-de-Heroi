class hero {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    };
    
    atacar() {
        let ataque; 

        switch(this.type.toLowerCase()){
            
            case 'mago':
            ataque = 'magia';
            break;

            case 'guerreiro':
            ataque = 'espada';
            break;

            case 'monge':
            ataque = 'artes marciais';
            break;

            case 'ninja':
            ataque = 'shuriken'
            break;

        }
        
        console.log(`o ${this.type} atacou usando ${ataque}`);
    }


}

let mago = new hero("Lucas", 34, "mago");
let mago1 = new hero("Juh", 24, "guerreiro");
let mago2 = new hero("Joao", 12, "monge");
let mago3 = new hero("Felipe", 35, "ninja")

mago.atacar()
mago1.atacar()
mago2.atacar()
mago3.atacar()
