import * as server from "./app/dist/server/entry.mjs";
import dir from "./embed/client/dir.ts";
import mime from "npm:mime";

export async function handle(req: Request): Promise<Response> {
  const filepath = new URL(req.url).pathname.slice(1);
  const file = await dir.get(filepath);
  if (!file) {
    return server.handle(req);
  }

  const mimeType = mime.getType(filepath) || "application/octet-stream";
  return new Response(await file.bytes(), {
    headers: {
      "Content-Type": mimeType,
    },
  });
}

export default {
  fetch: handle,
};
