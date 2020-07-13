import { IoIosImages } from "react-icons/io";
IoIosImages
export default {
  name: 'beforeAfterImageBlock',
  type: 'document',
  title: 'Before and After images',
  icon: IoIosImages,
  options: {
    hotspot: true
  },
  fields: [
    {
        name: 'name',
        type: 'string',
        title: 'Block Name *',
        validation: Rule => Rule.required(),
        description: 'Name is used to identify the text for page layout'
    },
    {
        name: 'beforeAfterImageBlockType',
        title: 'Before-After Image Block Type',
        type: 'reference',
        to: {
          type: 'beforeAfterImageBlockType'
        },
        description: 'Select Before-After Image Block Type'
      },
    {
      name: 'beforeImage',
      title: 'Insert Before Image',
      type: 'image',
      validation: Rule => Rule.required(),
      },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true
      }
    },
    {
    name: 'afterImage',
    title: 'Insert After Image',
    type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      name: 'alts',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true
      }
    }
  ],
  
  preview: {
    select: {
      imageUrl: 'asset.url'
    }
  }
}
