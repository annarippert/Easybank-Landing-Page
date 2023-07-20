const temp = document.createElement("template");
temp.innerHTML=`
    <style>
    .card{
        width:250px;
    }

    #des{
        color: hsl(233, 8%, 62%);
        font-weight: 300;
        font-size:18px;
    }
    #title{
        color: hsl(233, 26%, 24%);
        font-weight:300;
        font-size:larger;

    }
    </style>
    <div class="card">
        <img id="image" src="" alt=""/>
        <h4 id="title"></h4>
        <p id="des"></p>
    </div>
`;

class InfoCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(temp.content.cloneNode(true));
    }

    connectedCallback(){
        this.shadowRoot.getElementById("image").src = this.getAttribute("image");
        this.shadowRoot.getElementById("title").textContent = this.getAttribute("title");
        this.shadowRoot.getElementById("des").textContent = this.getAttribute("des");
    }
}

customElements.define("info-card", InfoCard);