import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'titleEN',
      title: 'Title EN',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'titleFR',
      title: 'Titre FR',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'completion',
      title: 'Completion Percentage',
      type: 'number',
      validation: Rule => Rule.required()
    }),

    // defineField({
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: {type: 'author'},
    // }),
    // defineField({
    //   name: 'mainImage',
    //   title: 'Main image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    // defineField({
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: Rule => Rule.required()

    }),
    defineField({
      name: 'bodyEN',
      title: 'Blog Text EN',
      type: 'blockContent',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'bodyFR',
      title: 'Text pour ton blog FR',
      type: 'blockContent',
      validation: Rule => Rule.required()
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
