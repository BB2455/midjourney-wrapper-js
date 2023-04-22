import { SlashCommandBuilder } from 'discord.js'

export const data = new SlashCommandBuilder().setName('hello').setDescription('Make the Bot say something')

export const execute = async (interaction) => {
  await interaction.reply('Test')
}
