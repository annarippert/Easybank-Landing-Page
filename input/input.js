const template = document.createElement("template");
template.innerHTML=`
    <style>
        #container{
            display:flex;
        }
    </style>

    <div id="container">
        <label for="input"></label>
        <input id="input"></input>
        <button>click me</button>
    </div>
`
class InputComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    displayInput() {
        const inputText = this.shadowRoot.getElementById("input");
        const div = document.createElement("div");
        div.innerHTML = inputText.value;
        this.shadowRoot.appendChild(div);
    }

    connectedCallback() {
        const inputButton = this.shadowRoot.querySelector("button");
        inputButton.addEventListener('click', this.displayInput.bind(this));
    }
}

customElements.define("input-component", InputComponent);