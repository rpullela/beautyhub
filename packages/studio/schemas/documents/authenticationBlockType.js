import { MdLock } from 'react-icons/md'

export default {
  name: 'authenticationBlockType',
  type: 'document',
  icon: MdLock,
  title: 'Authentication Block Type',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Authentication Block Type'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Authentication Block Description'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description'
    }
  }
}
