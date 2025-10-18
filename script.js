async function fetchRates() {
    try {
        // Example using GoldAPI.io (replace YOUR_API_KEY with your real key)
        const gold = await fetch("https://www.goldapi.io/api/XAU/INR", {
            headers: { "x-access-token": "goldapi-a2wgrsmguk5kv0-io" }
        });
        const silver = await fetch("https://www.goldapi.io/api/XAG/INR", {
            headers: { "x-access-token": "goldapi-a2wgrsmguk5kv0-io" }
        });

        const goldData = await gold.json();
        const silverData = await silver.json();

        document.getElementById("goldRate").textContent = (goldData.price_gram_24k * 10).toFixed(2);
        document.getElementById("silverRate").textContent = (silverData.price_gram_24k * 1000).toFixed(2);
    } catch (error) {
        document.getElementById("goldRate").textContent = "Error fetching data";
        document.getElementById("silverRate").textContent = "Error fetching data";
        console.error(error);
    }
}

fetchRates();
setInterval(fetchRates, 60000); // refresh every minute
