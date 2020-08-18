import { MdTextFields } from 'react-icons/md'

export default {
  name: 'socialMenuBlock',
  type: 'document',
  icon: MdTextFields,
  title: 'Social Menu Block',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Social Menu Block Name *',
      validation: Rule => Rule.required(),
      description: 'Name is used to identify the social menu block for page layout'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'socialMenuBlock',
      media: 'MdTextFields'
    }
  }
}
