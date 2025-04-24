export default async function handler(req, res) {
  // Définir les headers CORS pour toutes les réponses
  res.setHeader("Access-Control-Allow-Origin", "https://maxsouv80.wixsite.com");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Gérer la requête préliminaire OPTIONS
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Rejeter toute méthode autre que POST
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  // URL de ton webhook n8n
  const webhookURL = "https://maxsurf34.app.n8n.cloud/webhook-test/c667051b-f91e-4727-81b5-a069ca3e9eb0";

  try {
    const response = await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.text();
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Proxy error");
  }
}


