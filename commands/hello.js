const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder().setName('hello').setDescription('Make the Bot say something'),
  async execute(interaction) {
    console.info(interaction)
    await interaction.reply('Test')
  }
}
