import {defineField, defineType} from 'sanity'

export default defineType({
  name: "certification",
  title: "Certifications",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "school",
      title: "School",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],

  preview: {
    select: {
      title: "title",
      school: "school",
    },
    prepare(selection) {
      const { school } = selection;
      return { ...selection, subtitle: school && `from ${school}` };
    },
  },
});
