import { LitElement, html, css } from 'lit';

export class MyDashboard extends LitElement {
    static styles = css`
    .box {
      padding: 1rem;
      background: #f3f3f3;
      border-radius: 6px;
      font-size: 1.2rem;
    }
  `;

    count = 0;

    render() {
        return html`
      <div class="box">
        <p>This is your Lit dashboard.</p>
        <p>Count: ${this.count}</p>
        <button @click=${() => this.increment()}>Increment</button>
      </div>
    `;
    }

    increment() {
        this.count++;
        this.requestUpdate();
    }
}

customElements.define('my-dashboard', MyDashboard);