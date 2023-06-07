export const offices = {
    name: 'items',
    label: 'Cabinets',
    widget: 'relation',
    collection: 'offices',
    search_fields: ['title'],
    value_field: '{{filename}}',
    display_fields: ['title'],
    multiple: true,
    required: false,
    i18n: 'duplicate'
}