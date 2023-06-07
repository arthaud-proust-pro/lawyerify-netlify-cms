export const expertises = {
    name: 'persons_expertises',
    label: 'Expert en ?',
    widget: 'relation',
    collection: 'expertises',
    search_fields: ['title'],
    value_field: '{{filename}}',
    display_fields: ['title'],
    multiple: true,
    required: false,
    i18n: 'duplicate'
}