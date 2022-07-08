

class Etiqueta extends HTMLElement{
    constructor (){
        super();
        this.attachShadow({mode: "open"});
      
}

static get observedAttributes(){
    return ['title', 'parrafo', 'img'];
}

attributeChangedCallback(atr,old,newVal){
    if (atr === 'title') {
        this.title = newVal;
    } 
    if (atr === 'parrafo') {
        this.parrafo = newVal;
    }
    if (atr === 'img') {
        this.img = newVal;
    }
}


getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
    <section>
    <h2>${this.title}</h2>
    <div>
    <p>${this.parrafo}</p>
    <img src='${this.img}'>
    </div>

    </section>
    ${this.getStyle()}
    `;

    return template;
}

getStyle() {
    return `
    <style>
    h2 {
        color: red;
    }
    </style>
    `
}

render() {
this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));

}

connectedCallback() {
   this.render ();
}
   
}

customElements.define('my-etiqueta', Etiqueta);