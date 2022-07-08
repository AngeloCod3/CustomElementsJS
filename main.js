
class Etiqueta extends HTMLElement{
    constructor (){
        super();
      
}
getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
    <section>
    <h2>Bienvenido a mi pagina web</h2>
    <div>
    <p>Estoy muy contento de poder tener mi computadora nueva, aunque no es tan nueva porque es renewed pero sigue siendo nueva para mi y de verdad que va demasiado bien. Gracias querida laptop y bienvenida a la familia!!</p>
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
this.appendChild(this.getTemplate().content.cloneNode(true));
}

connectedCallback() {
   this.render ();
}
   
}

customElements.define('my-etiqueta', Etiqueta);