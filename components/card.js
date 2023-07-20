const template = document.createElement("template");
template.innerHTML = `

    <style>
        .card{
            width: 300px;
            background-color:white;
            
        }
        .card-text{
            padding: 10% ;
            
        }

        #author, #description{
            color: hsl(233, 8%, 62%);
            font-weight: 300;
            font-size:15px;
        }

        #title{
            font-weight: 400;
            
        }

        #title:hover{
            color:hsl(136, 65%, 51%);
            cursor:pointer;
        }
        #image{
            width:100%;
            height: 200px;
            object-fit: cover;
        }
        

        
    </style>
    <div class="card">
        <img id="image" src="" alt="Card Image" />
        <div class="card-text">
            <p id="author"></p>
            <h2 id="title"></h2>
            <p id="description"></p>
        </div> 
    </div>
`;

class ArticleCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        
        // Append the template content to the shadow root
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){
        this.adjustText();
        this.updateCard();

    }


    adjustText(){
        //get description element within the shadow DOM 
        const text = this.shadowRoot.querySelector("p");
        // Loop through each card text element and truncate the text
        let fullText = text.innerHTML;
        //truncate
        let shortText = this.truncateText(fullText, 20);
        // Update the truncated text
        text.innerHTML = shortText;
    }

    // Function to truncate the text
    truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        } else {
        return text;
        }
    }

    updateCard(){
        this.shadowRoot.getElementById("image").src = this.getAttribute("image");
        this.shadowRoot.getElementById("author").textContent = "By " + this.getAttribute("author");
        this.shadowRoot.getElementById("title").textContent = this.getAttribute("title");
        this.shadowRoot.getElementById("description").textContent = this.getAttribute("description") + "...";
    }
}

customElements.define("article-card", ArticleCard);