import 'dotenv/config'
import { Connection, Keypair, PublicKey } from "@solana/web3.js"
import bs58 from 'bs58'

export const mainKeypairHex = process.env.MAIN_KEYPAIR_HEX!
export const mainKeypair = Keypair.fromSecretKey(bs58.decode(mainKeypairHex))
export const solanaRpcUrl = process.env.MAIN_RPC_URL!
export const solanaWssUrl = process.env.MAIN_WSS_URL!
export const solanaConnection = new Connection(solanaRpcUrl, { wsEndpoint: solanaWssUrl })
export const devRpcUrl = process.env.DEV_RPC_URL!
export const devWssUrl = process.env.DEV_WSS_URL!
export const devConnection = new Connection(devRpcUrl, { wsEndpoint: devWssUrl })
export const geyserRpc = process.env.GEYSER_RPC;
export const treasury = new PublicKey(process.env.TREASURY_WALLET!)
export enum commitmentType {
    Finalized = "finalized",
    Confirmed = "confirmed",
    Processed = "processed"
}
export const jitoFee = 1_000_000
export const treasuryFee = 1_000_000

export const data = []

export const systemProgram = new PublicKey('11111111111111111111111111111111')
export const eventAuthority = new PublicKey('Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1')
export const pumpFunProgram = new PublicKey('6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P')
export const rentProgram = new PublicKey('SysvarRent111111111111111111111111111111111')

export const JITO_TIP_ACC = [
    "96gYZGLnJYVFmbjzopPSU6QiEV5fGqZNyN9nmNhvrZU5",
    "HFqU5x63VTqvQss8hp11i4wVV8bD44PvwucfZ2bU7gRe",
    "Cw8CFyM9FkoMi7K7Crf6HNQqf4uEMzpKw6QNghXLvLkY",
    "ADaUMid9yfUytqMBgopwjb2DTLSokTSzL1zt6iGPaS49",
    "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
    "ADuUkR4vqLUMWXxW9gh6D6L8pMSawimctcNZ5pGwDcEt",
    "DttWaMuVvTiduZRnguLF7jNxTgiMBZ1hyAumKUiL2KRL",
    "3AVi9Tg9Uo68tJfuvoKvqKNWKkC5wPdSSdeBnizKZ6jT"
  ]
