import { availablePersonsStatutes } from '../settings/available-persons-statutes.js';

export const statutes = {
    name: 'persons_statutes',
    label: 'Satuts',
    widget: 'select',
    options: availablePersonsStatutes,
    multiple: false,
    required: false,
    i18n: 'duplicate'
}