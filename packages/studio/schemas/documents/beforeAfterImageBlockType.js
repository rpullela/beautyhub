import { IoIosImages } from "react-icons/io";
export default {
    name: 'beforeAfterImageBlockType',
    type: 'document',
    icon: IoIosImages,
    title: 'Before and After Block Type',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Before-After Block Name *',
            validation: Rule => Rule.required(),
            description: 'Name is used to identify the text for page layout'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Before-After Image Block Description'
          }
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'description',
        media: 'IoIosImages'
      }
    }
  }
  