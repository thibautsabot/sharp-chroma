import fs from "fs";
import sharp from "sharp";

async function transform() {
  const upstreamBuffer = Buffer.from(fs.readFileSync("./big_picture.jpg"));
  const transformer = sharp(upstreamBuffer);

  transformer.rotate().avif({
    quality: 70,
    chromaSubsampling: "4:4:4",
  });

  const optimizedBuffer = await transformer.toBuffer();

  fs.promises.writeFile("transformed_big.avif", optimizedBuffer);
}

transform();
