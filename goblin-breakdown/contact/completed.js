// Retrieve the JSON object containing the UK address and phone number
const getContactDetails = async (api) => {
  try {
    const response = await fetch(api);
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

// Format the address in the desired UK address format
const formatAddress = (address) => address.replace(/,/g, "\n");

// Format the phone number in the desired UK phone number format
const formatPhoneNumber = (phoneNumber) =>
  phoneNumber.replace(/^\+44\s/, "(0)");

// Generate HTML code to display the formatted address and phone number on the page
const renderContactDetails = async (api, templateSelector) => {
  const { address, phone } = await getContactDetails(api);
  const template = document
    .querySelector(templateSelector)
    .content.cloneNode(true);

  template.querySelector("#address").textContent = formatAddress(address);
  template.querySelector("#phone").textContent = formatPhoneNumber(phone);

  document.body.appendChild(template);
};

renderContactDetails("./data.json", "#contact-template");
