import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/meme-maker';



const woody = new URL('../assets/woody.jpg', import.meta.url).href;

export class CharacterCard extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
        reflect: true
      },
      position: {
        type: String,
      }
    }
  }

  static get styles() {



    return css`
    .wrapper {
      width: 400px;
      border: 2px solid black;
      display: inline-flex;
      background-color: rgba(100,87,200,.5);
    }
    
    .image {
      width: 400px;
    }
    
    .header {
      text-align: center;
      font-weight: bold;
      font-size: 2rem;
    }
    
    .header h3:hover {
      font-style: italic;
      font-size: 1.1em;
    }
    
    .header h3,
    .header h4 {
      transition: .3s ease-in-out all;
      margin: 16px;
      font-style: normal;
    }
    
    .buttons button:focus,
    .buttons button:hover {
      background-color: rgba(200,0,50,.5);
    }
    
    .buttons button:active {
      background-color: rgba(50,0,200,.5);
    }
    
    .buttons {
      display: block;
    }
    
    button {
      padding: 12px;
      font-size: 32px;
    }
    
    details {
      margin-left: 24px;
      padding: 10px;
    }
    .details summary {
      font-size: 20px;
      font-weight: bold;
    }
    
    
    @media only screen and (max-width: 1200px){
      .wrapper {
        background-color: pink;
      }
    }
    @media only screen and (max-width: 600px){
      .wrapper {
        background-color: purple;
      }
    }
    @media only screen and (max-width: 425px){
      .wrapper {
        font-weight: normal;
      }
      .wrapper .header h3 {
        font-size: 12px;
      }
      .wrapper .header h4 {
        font-size: 10px !important;
      }
      details {
        display: none;
      }
      
    }
    `;
  }

  constructor() {
    super();
    this.name = "Woody Cookin";
    this.position = "Let Him Cook!";
  }

  render() {
    return html`
<div class="wrapper">
<div class="container">
  <img src="${woody}" style="width: 100%; height: auto;">
  <meme-maker template="${woody}" text="I am the one who cooks"></meme-maker>
  <div class="header">
    <h3>${this.name}</h3>
    <h4>${this.position}</h4>
  </div>
  <details class="details">
    <summary>Description</summary>
    <div>
      <ul>
        <li>Woody holding back Sora</li>
        <li>To let the man cook!</li>
      </ul>
    </div>
  </details>
</div>

  
  
    `;
  }
}

customElements.define('character-card', CharacterCard);