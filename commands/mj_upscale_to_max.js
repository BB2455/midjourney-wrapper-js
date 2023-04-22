import { SlashCommandBuilder } from 'discord.js'
import globals from '../globals.js'
import { maxUpscale } from '../midjourneyBot.js'

export const data = new SlashCommandBuilder()
  .setName('mj_upscale_to_max')
  .setDescription('Upscale to max targeted image (should be already upscaled using mj_upscale)"')

export const execute = async (interaction) => {
  if (globals.targetId === '') {
    await interaction.reply('You did not set target. To do so reply to targeted message with "$mj_target"')
    return
  }

  const response = await maxUpscale(globals.targetId, globals.targetHash)

  globals.targetID = ''

  if (response.status >= 400) {
    await interaction.reply('Request has failed; please try later')
    return
  }

  await interaction.reply('Your image is being prepared, please wait a moment...')
}
