 // Check if the user has already given consent for cookies or opted out of the sale of data
        if (localStorage.getItem("cookiesAccepted") !== "true") {
            document.getElementById("cookieConsentBanner").style.display = "block";
        }

        // Handle the "Accept Cookies" button click (GDPR)
        document.getElementById("acceptCookiesBtn").onclick = function() {
            localStorage.setItem("cookiesAccepted", "true");
            localStorage.setItem("personalizedAdsConsent", "true");  // Consent for personalized ads
            document.getElementById("cookieConsentBanner").style.display = "none";
            // Initialize AdSense with personalized ads
            initializeAds(true);
        };

        // Handle the "Reject Personalized Ads" button click (GDPR & CCPA)
        document.getElementById("rejectCookiesBtn").onclick = function() {
            localStorage.setItem("cookiesAccepted", "true");
            localStorage.setItem("personalizedAdsConsent", "false");  // Reject personalized ads (CCPA opt-out)
            document.getElementById("cookieConsentBanner").style.display = "none";
            // Initialize AdSense without personalized ads
            initializeAds(false);
        };

        // Handle the "Opt Out of Sale of Personal Data" button click (CCPA)
        document.getElementById("optOutSaleBtn").onclick = function() {
            localStorage.setItem("optOutSale", "true");  // User opted out of data sale
            document.getElementById("cookieConsentBanner").style.display = "none";
            alert("You have opted out of the sale of your personal data.");
        };

        // Handle the "Withdraw Consent" button click (GDPR)
        document.getElementById("withdrawConsentBtn").onclick = function() {
            // Remove consent information from localStorage
            localStorage.removeItem("cookiesAccepted");
            localStorage.removeItem("personalizedAdsConsent");
            localStorage.removeItem("optOutSale");
            document.getElementById("cookieConsentBanner").style.display = "block"; // Show the banner again
            alert("Your consent has been withdrawn.");
            // Reset AdSense settings
            initializeAds(false); // Non-personalized ads or no ads if they withdraw consent
        };

        // Function to initialize Google AdSense based on user's consent
        function initializeAds(personalizedAds) {
            if (personalizedAds) {
                // Load personalized ads (this is where you would load your AdSense scripts)
                console.log("Personalized ads enabled");
            } else {
                // Load non-personalized ads (this would be an AdSense setup for non-personalized ads)
                console.log("Non-personalized ads enabled");
            }
        }

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
