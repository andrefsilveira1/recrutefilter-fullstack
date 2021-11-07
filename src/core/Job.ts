export default class Job{
    #name?: string
    #wage?: string
    #company?: string
    #contact?: string
    #site?: string
    #about?: string

    constructor(name: string, wage: string, company: string, contact: string, site: string, about:string){
        this.#name = name
        this.#wage = wage
        this.#company = company
        this.#contact = contact
        this.#site = site
        this.#about = about

    }
    static void(){
        return new Job('','','','','','')
    }
    get name(){
        return this.#name
    }
    get wage(){
        return this.#wage
    }
    get company(){
        return this.#company
    }
    get contact(){
        return this.#contact
    }
    get site(){
        return this.#site
    }
    get about(){
        return this.#about
    }
}