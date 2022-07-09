class MyElem extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});

    }


getTemplate() {
    const template = document.createElement('template');

    template.innerHTML = `
    <section>
    <h1><slot name='title'></slot></h1>
    <div>
    <p>
    <slot name='p'></slot>
    </p>
    </div>
    </section>
    ${this.getStyle()}
    `
    return template;
}

getStyle() {

    return `
    <style>

    h1 {
        color: var(--secondary-color);
        font-size: var(--title);
        text-align: center;
    }

    p {
        font-size: 18px;
        text-align: center; 
    }

    :host {
        --primary-color: tomato;
        --secondary-color: lightblue;
        --title: 36px;
        --text-size: 18px;
    }

    section {
        background-color: var(--primary-color);
        border-radius: 16px;
    }
   
    </style>
    `
    
}

render(){
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
}

connectedCallback() {
    this.render();
 }

}

customElements.define("new-element", MyElem);