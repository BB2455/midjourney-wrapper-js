import { Events } from 'discord.js'
import globals from '../globals.js'
import dotenv from 'dotenv'

dotenv.config()

const MID_JOURNEY_ID = "936929561302675456"

export const name = Events.MessageCreate

export const execute = async (message) => {
  if (message?.content?.includes('$mj_target') && message?.content[0] === '$') {
    try {
      globals.targetId = String(message.reference.messageId)
      const referenceMessage = await message.fetchReference()
      globals.targetHash = String(referenceMessage.attachments.first().url.split('_')?.at(-1)?.split('.')[0])
    } catch {
      await message.channel.send("Exception has occurred, maybe you didn't reply to MidJourney message")
      await message.delete()
      return
    }

    if (String(message.author.id) !== MID_JOURNEY_ID) {
      await message.channel.send('Use the command only when you reply to MidJourney')
      await message.delete()
      return
    }

    await message.channel.send('Done')
    await message.delete()
  }
}
