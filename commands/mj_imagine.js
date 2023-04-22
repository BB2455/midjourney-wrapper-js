import { SlashCommandBuilder } from 'discord.js'
import { passPromptToSelfBot } from '../midjourneyBot.js'

export const data = new SlashCommandBuilder()
  .setName('mj_imagine')
  .setDescription('This command is a wrapper of MidJourneyAI')
  .addStringOption((option) => option.setName('prompt').setDescription('Prompt to pass to midjourney bot').setRequired(true))

export const execute = async (interaction) => {
  const response = await passPromptToSelfBot(interaction.options.getString('prompt', true))

  if (response.status >= 400) {
    console.error(await response.text())
    console.error(response.status)
    await interaction.reply('Request has failed; please try later')
  } else {
    await interaction.reply('Your image is being prepared, please wait a moment...')
  }
}
