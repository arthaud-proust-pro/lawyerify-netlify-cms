export const offices = {
    name: 'persons_offices',
    label: 'Rattaché à un ou plusieurs cabinets ?',
    widget: 'relation',
    collection: 'offices',
    search_fields: ['title'],
    value_field: '{{filename}}',
    display_fields: ['title'],
    multiple: true,
    required: false,
    i18n: 'duplicate'
}