class ReadmeComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.path = this.getAttribute("path") || "readme";
  }

  connectedCallback() {
    Promise.all([
      this.loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.1/showdown.min.js"
      ),
    ])
      .then(() => {
        this.fetchReadme();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  loadScript(src, defer) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      if (defer) {
        script.defer = true;
      }
      script.onload = () => resolve(script);
      script.onerror = (error) =>
        reject(new Error(`Script load error: ${error}`));
      document.head.appendChild(script);
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
      showdown.extension("objectives", function () {
        "use strict";
        return [
          {
            type: "lang",
            regex: /```objectives\s*([\s\S]*?)\s*```/g,
            replace: (_, codeContent) => `${codeContent.trim()}`,
          },
        ];
      });

      let converter = new showdown.Converter({
        omitExtraWLInCodeBlocks: true,
        simplifiedAutoLink: true,
        literalMidWordUnderscores: true,
        strikethrough: true,
        tables: true,
        tablesHeaderId: true,
        ghCodeBlocks: true,
        tasklists: true,
        disableForced4SpacesIndentedSublists: true,
        simpleLineBreaks: true,
        requireSpaceBeforeHeadingText: true,
        ghCompatibleHeaderId: true,
        ghMentions: true,
        backslashEscapesHTMLTags: true,
        emoji: true,
        splitAdjacentBlockquotes: true,
        extensions: ["objectives"],
      });
      let html = converter.makeHtml(md);
      this.shadowRoot.innerHTML = `${html}`;
    } catch (error) {
      console.error("Failed to convert markdown to HTML: " + error);
    }
  }
}

customElements.define("readme-component", ReadmeComponent);
