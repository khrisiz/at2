// Display cookie consent banner if not already accepted
if (!localStorage.getItem("cookiesAccepted")) {
    document.getElementById("cookieConsentBanner").style.display = "block";
}

// GDPR Cookie Consent Actions
document.getElementById("acceptCookiesBtn").onclick = () => {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookieConsentBanner").style.display = "none";
    initializeAds(true);
};

document.getElementById("rejectCookiesBtn").onclick = () => {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookieConsentBanner").style.display = "none";
    initializeAds(false);
};

document.getElementById("optOutSaleBtn").onclick = () => {
    localStorage.setItem("optOutSale", "true");
    alert("You've opted out of the sale of personal data.");
};

document.getElementById("withdrawConsentBtn").onclick = () => {
    localStorage.clear();
    document.getElementById("cookieConsentBanner").style.display = "block";
    alert("Consent withdrawn.");
};

// Initialize ads based on consent
function initializeAds(personalized) {
    console.log(personalized ? "Personalized Ads Enabled" : "Non-Personalized Ads Enabled");
}
