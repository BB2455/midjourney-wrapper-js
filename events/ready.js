import { Events } from 'discord.js'

export const name = Events.ClientReady

export const once = true

export const execute = (client) => {
  console.info(`Ready! Logged in as ${client.user.tag}`)
}
