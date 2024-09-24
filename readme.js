class ReadmeComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.path = this.getAttribute("path") || "readme";
  }

  connectedCallback() {
    this.path = this.getAttribute("path") || "readme";
    this.loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.1/showdown.min.js"
    ).then(() => {
      this.fetchReadme();
    });
  }

  loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(script);
      script.onerror = (error) =>
        reject(new Error(`Script load error: ${error}`));
      document.head.append(script);
    });
  }

  async fetchReadme() {
    try {
      const response = await fetch(
        `https://api.github.com/repos/CodeYourFuture/CYF-Workshops/${this.path}`
      );
      if (!response.ok) {
        console.error("Failed to fetch README: " + response.status);
        return;
      }
      const json = await response.json();
      const decodedContent = atob(json.content);
      this.render(decodedContent);
    } catch (error) {
      console.error(error);
    }
  }

  render(md) {
    try {
      let converter = new showdown.Converter();
      let html = converter.makeHtml(md);
      this.shadowRoot.innerHTML = `${html}`;
    } catch (error) {
      console.error("Failed to convert markdown to HTML: " + error);
    }
  }
}

customElements.define("readme-component", ReadmeComponent);
