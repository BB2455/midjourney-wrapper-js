import { SlashCommandBuilder } from 'discord.js'

export const data = new SlashCommandBuilder()
  .setName('hello')
  .setDescription('Make the Bot say something')
  .addStringOption((option) => option.setName('sentence').setDescription('Sentence the bot will say').setRequired(true))

export const execute = async (interaction) => {
  await interaction.reply(interaction.options.getString('sentence', true))
}
