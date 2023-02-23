// Get the current domain of the website
const currentDomain = window.location.host;

// Replace the hardcoded domain in endpoint URLs with the current domain
document.querySelectorAll("#endpoints code").forEach((code) => {
  const endpointUrl = code.textContent;
  let updatedEndpointUrl = endpointUrl.replace(
    "cinema.shadowthings.xyz",
    currentDomain
  );

  // Check if the domain is an IP address or localhost and use http instead of https
  if (
    /^(https?:)?\/\/(localhost|\d+\.\d+\.\d+\.\d+)/.test(updatedEndpointUrl)
  ) {
    updatedEndpointUrl = updatedEndpointUrl.replace(/^https:/, "http:");
  } else {
    updatedEndpointUrl = updatedEndpointUrl.replace(/^http:/, "https:");
  }

  code.textContent = updatedEndpointUrl;
});
