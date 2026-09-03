import { createServer } from "node:http";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const port = globalThis.process?.env.PORT || 3001;
const dataDirectory = path.join(path.dirname(fileURLToPath(import.meta.url)), "data");
const quotesFile = path.join(dataDirectory, "quotes.json");

async function readQuotes() {
  try {
    return JSON.parse(await readFile(quotesFile, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function createQuote(request, response) {
  let body = "";
  for await (const chunk of request) body += chunk;

  let requestBody;
  try {
    requestBody = JSON.parse(body);
  } catch {
    response.writeHead(400, { "Content-Type": "application/json" });
    return response.end(JSON.stringify({ error: "Request body must be valid JSON." }));
  }

  const requiredFields = ["name", "phone", "from", "to", "size"];
  const missingField = requiredFields.find((field) => !String(requestBody?.[field] || "").trim());

  if (missingField) {
    response.writeHead(400, { "Content-Type": "application/json" });
    return response.end(JSON.stringify({ error: `${missingField} is required.` }));
  }

  const quote = {
    id: crypto.randomUUID(),
    ...requestBody,
    createdAt: new Date().toISOString(),
  };
  const quotes = await readQuotes();

  await mkdir(dataDirectory, { recursive: true });
  await writeFile(quotesFile, JSON.stringify([...quotes, quote], null, 2));

  response.writeHead(201, { "Content-Type": "application/json" });
  return response.end(JSON.stringify({ message: "Quote request received.", id: quote.id }));
}

const server = createServer(async (request, response) => {
  if (request.method === "GET" && request.url === "/api/health") {
    response.writeHead(200, { "Content-Type": "application/json" });
    return response.end(JSON.stringify({ status: "ok" }));
  }

  if (request.method === "POST" && request.url === "/api/quotes") {
    return createQuote(request, response);
  }

  response.writeHead(404, { "Content-Type": "application/json" });
  return response.end(JSON.stringify({ error: "Not found." }));
});

server.listen(port, () => {
  console.log(`Easy Move API listening on http://localhost:${port}`);
});