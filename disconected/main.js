class MyComp extends HTMLElement {
    constructor(){
        super();
        console.log('Hola')
    }

    connectedCallback(){
        console.log('DOM')
    }

    disconnectedCallback () {
        console.log('Eliminado')
    }
}

customElements.define('custom-element', MyComp);
document.querySelector("custom-element").remove();