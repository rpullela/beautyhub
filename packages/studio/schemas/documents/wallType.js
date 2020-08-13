import { FaSlidersH } from 'react-icons/fa'

export default {
  name: 'wallType',
  type: 'document',
  icon: FaSlidersH,
  title: 'Wall Type',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Wall Type'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Slider Description'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'FaSlidersH'
    }
  }
}
