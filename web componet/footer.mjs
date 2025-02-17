
//const appelement = document.createElement("net-footer")
//document.body.append(appelement)

export class NetFooter extends HTMLElement {
    constructor() {
        super()
        console.log("mi Custom Element :", this);
        this.attachShadow({ mode: "open" });
        this.render()
        this.style()
    }
    style(){
        return /*css*/`
        .footenet {
            background : aqua;
            color: white;
            padding: 5px;
        }
        `
    }
    render(){
        this.shadowRoot.innerHTML = /*html*/`
        <style>
            ${this.style()}
        </style>
        <footer>
            <div class="footenet">
            <span> Mario Torres Net@001</span>
        </div>
    </footer>`
    }
    changeAuthor(name){
        let author =this.shadowRoot.querySelector("span")
        author.textContent =name
    }
}

