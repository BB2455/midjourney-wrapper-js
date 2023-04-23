import { SlashCommandBuilder } from 'discord.js'
import { passPromptToSelfBot } from '../midjourneyBot.js'
import dotenv from 'dotenv'
import globals from '../globals.js'

dotenv.config()

export const data = new SlashCommandBuilder()
  .setName('mj_imagine')
  .setDescription('This command is a wrapper of MidJourneyAI')
  .addStringOption((option) => option.setName('prompt').setDescription('Prompt to pass to midjourney bot').setRequired(true))

export const execute = async (interaction) => {
  if (process.env.USE_MESSAGED_CHANNEL) {
    globals.channel_id = interaction.channelId
  }

  const response = await passPromptToSelfBot(interaction.options.getString('prompt', true))

  if (response.status >= 400) {
    console.error(await response.text())
    console.error(response.status)
    await interaction.reply('Request has failed; please try later')
  } else {
    await interaction.reply('Your image is being prepared, please wait a moment...')
  }
}
