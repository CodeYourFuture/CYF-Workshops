/**
 * Custom element that renders a GitHub README file with Markdown and Mermaid support
 * @customElement
 * @example
 * <readme-component path="README.md" repo="user/repo"></readme-component>
 * @param {string} [path="readme"] - Path to the README file
 * @param {string} [repo="CodeYourFuture/CYF-Workshops"] - GitHub repository in format "user/repo"
 */
class ReadmeComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
  }
  /**
   * Sequences the fetch and render operations
   */
  async connectedCallback() {
    try {
      await Promise.all([
        this.loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/showdown/2.1.0/showdown.min.js"
        ),
        this.loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.6.1/mermaid.min.js"
        ),
      ]);

      const markdown = await this.fetchReadme();
      this.renderMarkdown(markdown);
      await this.renderMermaid();
    } catch (error) {
      this.shadowRoot.innerHTML = `Error: ${error.message}`;
    }
  }
  /**
   * Load from CDN and return a Promise
   * @param {string} src - Script URL to load
   * @returns {Promise<void>}
   */
  loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(script);
      script.onerror = (error) =>
        reject(new Error(`Script load error: ${error}`));
      document.head.appendChild(script);
    });
  }
  /**
   * Fetch the README file from GitHub
   * @returns {Promise<string>} - The README file content decoded from base64
   * @throws {Error} - If the fetch operation fails
   */

  async fetchReadme() {
    const path = this.getAttribute("path") || "readme";
    const repo = this.getAttribute("repo") || "CodeYourFuture/CYF-Workshops";
    const response = await fetch(
      `https://api.github.com/repos/${repo}/${path}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch README: ${response.status}`);
    }
    const data = await response.json();
    return atob(data.content);
  }
  /**
   * Render the Markdown content
   * @see {@link https://github.com/showdownjs/showdown/wiki}
   * @param {string} md - The Markdown content to render using showdown
   * @returns {void} - The rendered HTML is set to the shadow root
   */

  renderMarkdown(md) {
    showdown.extension("objectives", function () {
      return [
        {
          type: "lang",
          regex: /```objectives\s*([\s\S]*?)\s*```/g,
          replace: (_, codeContent) => `${codeContent.trim()}`,
        },
      ];
    });

    const converter = new showdown.Converter({
      ghCompatibleHeaderId: true,
      ghCodeBlocks: true,
      tables: true,
      tasklists: true,
      simplifiedAutoLink: true,
      ghMentions: true,
      backslashEscapesHTMLTags: true,
      emoji: true,
      splitAdjacentBlockquotes: true,
      extensions: ["objectives"],
    });

    this.shadowRoot.innerHTML = converter.makeHtml(md);
  }
  /**
   * Render the Mermaid diagrams after the Markdown content is rendered
   * @see {@link https://mermaid.js.org/config/usage.html#binding-events}
   * @returns {Promise<void>} - The Mermaid diagrams are rendered and
   * then inserted in the shadow root
   */

  async renderMermaid() {
    mermaid.initialize({startOnLoad: false});
    const diagrams = this.shadowRoot.querySelectorAll(".mermaid");
    for (const [index, diagram] of [...diagrams].entries()) {
      const id = `mermaid-${index}`;
      const svg = await mermaid.render(id, diagram.textContent);
      diagram.innerHTML = svg.svg;
    }
  }
}

customElements.define("readme-component", ReadmeComponent);
