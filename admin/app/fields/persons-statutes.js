import { availablePersonsStatutes } from '../settings/available-persons-statutes.js';
import {t} from "../i18n/translater.js";

export const statutes = {
    name: 'persons_statutes',
    label: t.fields.persons_statuts,
    widget: 'select',
    options: availablePersonsStatutes,
    multiple: false,
    required: false,
    i18n: 'duplicate'
}