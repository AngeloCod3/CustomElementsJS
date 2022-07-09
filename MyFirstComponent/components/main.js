class Card extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    getTemplate(){
        const template = document.createElement("template");

        template.innerHTML = `
        <div class="main">
        <section class="presentation">
            <h1 slot="main-title">Nike</h1>
            <img src="imgs/nike-blue.png"/>
        </section>

        <section class="description">
            <div class="description-title">
            <h2 slot="model">Nike Zoom 2020</h2>
            <h3 name=""kindof>Running Collection</h3>
            </div>
            <p name="full-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt natus obcaecati accusamus, ipsam quas eaque ratione porro consequuntur debitis repellendus, fugit, esse atque blanditiis quisquam delectus sint cum illo doloremque.</p>

            <div class="price">
            <h4 name="price">$2500</h3>

            <button>Buy Now</button>
            </div>
        </section>
        </div>
        ${this.getStyle()}
        `

        return template;
    }

    getStyle(){

        return  `
        <style>
        @media (max-width: 500px) {
            img {
            
                width: 100%;
                max-width: 500px;
                min-width: 200px;
                position: relative;
                top: -20px;
                left: -30px;
                transform: rotate (0deg);
            }
        }

        :host {
            --primary-color: #4e5fa5;
            --secondary-color: #3d4c8c;
        }

        .main {
            border: 10px solid black;
            width: 90%;
            max-width: 600px;
        }

        img {
            
            width: 100%;
            max-width: 500px;
            min-width: 200px;
            position: relative;
            top: -20px;
            left: -30px;
            transform: rotate(-30deg);
        }

        .presentation {
            padding: 0;
            background-color: var(--primary-color);
            

        }

        .description{
            margin-top: 15px;
        }

        .description-title {
            display: flex;
            justify-content: space-around;
            vertical-align: bottom;
        }

        .price {
            display: flex;
            justify-content: space-between;
        }

        button {
            width: 20%;
            height: 30px;
            background-color: var(--secondary-color);
            border-radius: 30px;
            margin: 15px;
            color: white;
        }
        
        h1 {
            padding: 15px;
            margin: 0px;
            font-size: 90px;
            opacity: 40%;
        }

        h2 {
            font-size: 28px;
            font-weight: bold;
            text-align: bottom;
            margin: 0;

        }

        h3 {
            font-size: 14px;
            
        }

        h4 {
            font-size: 28px;
            vertical-align: middle;
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

customElements.define("sell-card", Card)