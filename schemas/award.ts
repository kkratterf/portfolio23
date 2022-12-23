import {defineField, defineType} from 'sanity'

export default defineType({
  name: "award",
  title: "Award",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "brand",
      title: "Brand",
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
      brand: "brand",
    },
    prepare(selection) {
      const { brand } = selection;
      return { ...selection, subtitle: brand && `at ${brand}` };
    },
  },
});
