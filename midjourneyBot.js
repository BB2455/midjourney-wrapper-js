import dotenv from 'dotenv'

dotenv.config()

export const passPromptToSelfBot = async (prompt) => {
  const payload = {
    type: 2,
    application_id: '936929561302675456',
    guild_id: process.env.SERVER_ID,
    channel_id: process.env.CHANNEL_ID,
    session_id: '2fb980f65e5c9a77c96ca01f2c242cf6',
    data: {
      version: '1077969938624553050',
      id: '938956540159881230',
      name: 'imagine',
      type: 1,
      options: [{ type: 3, name: 'prompt', value: prompt }],
      application_command: {
        id: '938956540159881230',
        application_id: '936929561302675456',
        version: '1077969938624553050',
        default_permission: true,
        default_member_permissions: null,
        type: 1,
        nsfw: false,
        name: 'imagine',
        description: 'Create images with Midjourney',
        dm_permission: true,
        options: [{ type: 3, name: 'prompt', description: 'The prompt to imagine', required: true }]
      },
      attachments: []
    }
  }

  const header = {
    authorization: process.env.MIDJOURNEY_ACCOUNT_TOKEN,
    'Content-Type': 'application/json'
  }

  const response = await fetch('https://discord.com/api/v9/interactions', { method: 'POST', body: JSON.stringify(payload), headers: header })

  return response
}

export const upscale = async (index, messageId, messageHash) => {
  payload = {
    type: 3,
    guild_id: process.env.SERVER_ID,
    channel_id: process.env.CHANNEL_ID,
    message_flags: 0,
    message_id: messageId,
    application_id: '936929561302675456',
    session_id: '45bc04dd4da37141a5f73dfbfaf5bdcf',
    data: { component_type: 2, custom_id: 'MJ::JOB::upsample::{}::{}'.format(index, messageHash) }
  }

  header = {
    authorization: process.env.MIDJOURNEY_ACCOUNT_TOKEN,
    'Content-Type': 'application/json'
  }

  const response = await fetch('https://discord.com/api/v9/interactions', { method: 'POST', body: payload, headers: header })

  return response
}

export const maxUpscale = async (messageId, messageHash) => {
  payload = {
    type: 3,
    guild_id: process.env.SERVER_ID,
    channel_id: process.env.CHANNEL_ID,
    message_flags: 0,
    message_id: messageId,
    application_id: '936929561302675456',
    session_id: '1f3dbdf09efdf93d81a3a6420882c92c',
    data: { component_type: 2, custom_id: 'MJ::JOB::upsample_max::1::{}::SOLO'.format(messageHash) }
  }

  header = {
    authorization: process.env.MIDJOURNEY_ACCOUNT_TOKEN,
    'Content-Type': 'application/json'
  }

  const response = await fetch('https://discord.com/api/v9/interactions', { method: 'POST', body: payload, headers: header })

  return response
}

export const variation = async (index, messageId, messageHash) => {
  payload = {
    type: 3,
    guild_id: process.env.SERVER_ID,
    channel_id: process.env.CHANNEL_ID,
    message_flags: 0,
    message_id: messageId,
    application_id: '936929561302675456',
    session_id: '1f3dbdf09efdf93d81a3a6420882c92c',
    data: { component_type: 2, custom_id: 'MJ::JOB::variation::{}::{}'.format(index, messageHash) }
  }

  header = {
    authorization: process.env.MIDJOURNEY_ACCOUNT_TOKEN,
    'Content-Type': 'application/json'
  }

  const response = await fetch('https://discord.com/api/v9/interactions', { method: 'POST', body: payload, headers: header })

  return response
}
