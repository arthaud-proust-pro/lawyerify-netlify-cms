export const expertises = {
    name: 'items',
    label: 'Expertises',
    widget: 'relation',
    collection: 'expertises',
    search_fields: ['title'],
    value_field: '{{filename}}',
    display_fields: ['title'],
    multiple: true,
    required: false,
    i18n: 'duplicate'
}