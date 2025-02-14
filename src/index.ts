import bs58 from "bs58";
import fs from "fs";
import path from "path";
import { AnchorProvider } from "@coral-xyz/anchor";
import { mainKeypair, solanaConnection } from "./config";
import { PumpFunSDK } from "./pump";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { openAsBlob, existsSync } from "fs";
import { Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";

const main = async () => {
  const wallet = new NodeWallet(mainKeypair);
  const provider = new AnchorProvider(solanaConnection, wallet, {
    commitment: "finalized",
  });

  const imageName = "coin.png";

  const uploadFolder = path.join(process.cwd(), "/src/image");
  const imagePath = path.join(uploadFolder, imageName);

  if (!existsSync(imagePath)) {
    console.error("image not exist");
    return;
  }

  const image = await openAsBlob(imagePath);

  const tokenMetadata = {
    name: "moatmeme",
    symbol: "MTM",
    description:
      "This is pump.fun token created by lilmoat using customized pump fun sdk",
    file: image,
    twitter: "https://x.com/littlemoat",
    telegram: "https://t.me/littlemoat",
    website: "https://lilmoat.dev",
  };

  const sdk = new PumpFunSDK(provider);

  const data: Array<{ wallet: string; amount: number }> = JSON.parse(
    fs.readFileSync("data.json", "utf-8")
  );

  const keypairList: Array<Keypair> = [];
  data.map((item) => {
    keypairList.push(
      Keypair.fromSecretKey(Uint8Array.from(bs58.decode(item.wallet)))
    );
  });

  const amountList = data.map((item) => BigInt(item.amount * LAMPORTS_PER_SOL));

  const mint = Keypair.generate();
  console.log(mint.publicKey.toBase58());

  const mintResult = await sdk.createAndBatchBuy(
    keypairList,
    amountList,
    tokenMetadata,
    mint
  );
  console.log(mintResult);
};

main();
