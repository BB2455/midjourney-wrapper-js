import { SlashCommandBuilder } from 'discord.js'
import globals from '../globals.js'
import { variation } from '../midjourneyBot.js'

export const data = new SlashCommandBuilder()
  .setName('mj_variation')
  .setDescription('Make variation given index after target has been set')
  .addIntegerOption((option) => option.setName('index').setDescription('Select Image (1: top left, 2: top right, 3: bottom left, 4: bottom right').setRequired(true))
  .addBooleanOption((option) => option.setName('reset_target').setDescription('Resets targeted image after the upscale image runs'))

export const execute = async (interaction) => {
  const index = interaction.options.getInteger('index', true)
  if (index <= 0 || index > 4) {
    await interaction.reply('Invalid argument, pick from 1 to 4')
    return
  }

  if (globals.targetId === '') {
    await interaction.reply('You did not set target. To do so reply to targeted message with "$mj_target"')
    return
  }

  const response = await variation(index, globals.targetId, globals.targetHash)

  if (reset_target) globals.targetID = ''

  if (response.status >= 400) {
    await interaction.reply('Request has failed; please try later')
    return
  }

  await interaction.reply('Your image is being prepared, please wait a moment...')
}
