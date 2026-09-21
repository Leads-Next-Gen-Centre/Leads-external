export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // API Route: /api/contact
    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const body = await request.json();
        const { name, email, organisation, interestArea, message } = body || {};

        if (!name || !email) {
          return new Response(
            JSON.stringify({ message: "Name and email are required fields." }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" },
            }
          );
        }

        console.log("=== NEW LEADS LEAD SUBMISSION ===");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Organisation: ${organisation || "N/A"}`);
        console.log(`Interest Area: ${interestArea}`);
        console.log(`Message: ${message || "N/A"}`);
        console.log(`Timestamp: ${new Date().toISOString()}`);
        console.log("=================================");

        return new Response(
          JSON.stringify({
            success: true,
            message: "Lead submission received successfully.",
          }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }
        );
      } catch (error) {
        return new Response(
          JSON.stringify({ message: "Server processing error." }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    // Serve static Next.js assets from ./out
    return env.ASSETS.fetch(request);
  },
};
