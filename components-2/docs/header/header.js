const Header = (link, title) => {
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = `
    <h1 class="header__heading">
      <a class="header__link" href="${link ?? `../components-2`}">
        <span class="is-invisible">Code Your Future</span>
        <svg
          class="header__logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          focusable="false"
        >
          <path
            fill="currentcolor"
            stroke="currentcolor"
            d="M225.5 1c-1.1.5-3.5.9-5.3.9-4.1.1-22.9 4.5-30.7 7.2-63.1 22-114.7 72.3-142.7 139.4-6.4 15.2-11.8 33.8-16.7 57-4.1 19.7-5.4 64.5-2.6 90.8C33 346.2 49.8 390.1 76.8 425c6.2 7.9 23.9 26.4 30.7 32 8.1 6.7 26.1 18.7 35.1 23.6 28.1 15.1 58 24.3 91.9 28.3 5.5.7 13.6 1.7 18 2.2 8.8 1.2 33.9.7 48-.9 11-1.3 31.7-4.8 36.5-6.2 1.9-.5 8-2.3 13.5-3.9 21.3-6.1 47.2-17.8 67.5-30.5 8.8-5.4 23.7-15.8 28.5-19.7 10.2-8.4 24.5-21.3 31.4-28.2l8.4-8.5-2.2-2.9c-1.3-1.5-4.6-5.3-7.4-8.3-6.2-6.7-14.5-15.7-21.2-23.1-2.7-3-7.5-8.2-10.5-11.4-3-3.3-9.8-10.8-15.1-16.5-21.5-23.6-24.2-26.5-24.9-26.8-.3-.1-2 1.2-3.6 3-1.6 1.9-6.3 7.1-10.4 11.7-8.6 9.7-25.6 24.6-35.9 31.4-21.4 14.4-42.5 21.7-62.6 21.7-15.3-.1-29.3-3.3-42.5-10-22.8-11.5-41.9-35.5-51.5-64.7-4.2-12.8-4.3-13.4-5.9-22.8-3.8-22.9-4.6-39.2-2.6-55.6 2.7-22.7 3.3-26.5 5-33.2 7.9-30.9 16.7-48.6 32.4-65.6 16.8-17.9 41.1-24.9 65.1-18.6 30 7.8 50.7 36.3 55.5 76.3.5 4.6 1.2 8.7 1.5 9.3.4.5 25.1.9 62.6.9H474V9H364.2L357 26.7c-4 9.8-7.9 18.5-8.7 19.3-1.3 1.3-2.1.8-6.6-4.3-6-6.9-18.3-16.7-28.2-22.5-7.4-4.3-22.6-10.9-28.5-12.4-9.2-2.2-18.1-4.1-24-5-9-1.3-33.1-1.9-35.5-.8z"
          />
        </svg>
      </a>
    </h1>
    <h2 class="header__page">${title}</h2>
    <button id="toggle" class="header__action">
      <span class="is-invisible">Toggle Menu.</span>
      <svg
        class="header__dots"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentcolor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm0 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm0 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
        />
      </svg>
    </button>
 `;
  return header;
};

export default Header;
