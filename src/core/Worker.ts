export default class Worker{
    #id?: string
    #name?: string
    #area: string
    #linkedin?: string
    #email?: string
    #about?: string

    constructor(name: string, area: string, linkedin: string, email: string, id: string = null, about: string){
        this.#id = id
        this.#name = name
        this.#area = area
        this.#linkedin = linkedin
        this.#email = email
        this.#about = about
    }
    static void(){
        return new Worker('','','','','','')
    }
    get id(){
        return this.#id
    }
    get name(){
        return this.#name
    }
    get area(){
        return this.#area
    }
    get linkedin(){
        return this.#linkedin
    }
    get email(){
        return this.#email
    }
    get about(){
        return this.#about
    }
}