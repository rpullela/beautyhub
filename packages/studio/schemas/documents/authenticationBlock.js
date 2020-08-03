import { MdLock } from 'react-icons/md'

export default {
  name: 'authenticationBlock',
  type: 'document',
  icon: MdLock,
  title: 'Authentication Block',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Authentication Block Name *',
      validation: Rule => Rule.required(),
      description: 'Name is used to identify the authentication block for page layout'
    },
    {
      name: 'type',
      title: 'Authentication Block Type *',
      type: 'reference',
      validation: Rule => Rule.required(),
      to: {
        type: 'authenticationBlockType'
      },
      description: 'Select Authentication Block Type'
    },
    {
      name: 'ctaLabel',
      type: 'string',
      title: 'Label for Submit Button',
      description: 'Optional: Enter text to display on submit button, "Submit" by default'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type.name'
    }
  }
}
