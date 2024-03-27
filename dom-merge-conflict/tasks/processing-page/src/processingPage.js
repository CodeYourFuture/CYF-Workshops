export function ProcessingPage({
  verifyServersideKey,
  verifyLocalKey,
  verifyBrowser,
  verifyVersion,
  verifyStableConnection,
}) {
  const container = document.createElement("div");

  const info = document.createElement("p");
  info.textContent =
    "Please wait while we verify your details, browser, and internet connection.";
  info.dataset.testid = "info";
  container.appendChild(info);

  verifyServersideKey()
    .then((res) => verifyLocalKey(res))
    .then(() => verifyBrowser())
    .then((res) => verifyVersion(res))
    .then(() => verifyStableConnection())
    .then(() => {
      info.textContent = "Verification successful.";
    })
    .catch(() => {
      info.textContent = "Verification failed.";
    });

  return container;
}
