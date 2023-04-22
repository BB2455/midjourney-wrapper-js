import { Client, Events, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] })

client.once(Events.ClientReady, (clientContext) => {
  console.info(`Ready! Logged in as ${clientContext.user.tag}`)
})

client.login(process.env.SERVER_BOT_TOKEN)
