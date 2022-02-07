import fs from "fs";
import sharp from "sharp";

async function transform() {
  const upstreamBuffer = Buffer.from(fs.readFileSync("./picture.png"));
  const transformer = sharp(upstreamBuffer);

  transformer.rotate().avif({
    quality: 70,
    chromaSubsampling: "4:2:0",
  });

  const optimizedBuffer = await transformer.toBuffer();

  fs.promises.writeFile("transformed-4.2.0.avif", optimizedBuffer);
}

transform();
