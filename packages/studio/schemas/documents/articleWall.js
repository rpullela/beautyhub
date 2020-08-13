import { FaSlidersH } from 'react-icons/fa'

export default {
  name: 'articleWall',
  type: 'document',
  icon: FaSlidersH,
  title: 'Article Wall',
  description: 'Article wall for hero and tile user experiences ',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Article Wall',
      description: 'Name is used to identify the article wall for page layout'
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Headline',
      description: 'Headline will be displayed on website'
    },
    {
      name: 'textBlockBody',
      type: 'textBlockPortableText',
      title: 'Enhance your slide with text',
      description: 'Add some rich text or quote'
    },
    {
      name: 'slideType',
      title: 'Slide Type',
      type: 'reference',
      to: {
        type: 'sliderType'
      },
      description: 'Select Wall Type'
    },
    {
      name: 'slides',
      type: 'array',
      title: 'Slides',
      description: 'Add any article, image will be taken from the hero image',
      of: [
        {
          type: 'reference',
          to: [{ type: 'howToArticle' }, { type: 'featureArticle' }, { type: 'galleryArticle' }]
        }
      ]
    },
    {
      name: 'searchCtaLabel',
      type: 'string',
      title: 'Search CTA Label',
      description: 'For example: View All, or leave blank'
    },
    {
      name: 'searchTags',
      type: 'array',
      title: 'Search Tags',
      description: 'Add list of tags that will be searched, when CTA label is pressed',
      of: [
        {
          type: 'reference',
          to: {
            type: 'tag'
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'articleWallType.name',
      media: 'FaSlidersH'
    }
  }
}
