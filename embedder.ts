import * as embedder from "jsr:@nfnitloop/deno-embedder";

const options = {
  importMeta: import.meta,

  mappings: [
    {
      sourceDir: "app/dist/client",
      destDir: "embed/client",
    },
  ],
};

if (import.meta.main) {
  await embedder.main({ options });
}
