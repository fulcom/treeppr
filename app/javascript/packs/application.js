import "../components/dashboard";
import { dashboard_animation } from '../components/dashboard';
dashboard_animation();

import "bootstrap";
import "../plugins/flatpickr";

import 'mapbox-gl/dist/mapbox-gl.css'; // <-- you need to uncomment the stylesheet_pack_tag in the layout!
import { initMapbox } from '../plugins/init_mapbox';
initMapbox();

import { initAutocomplete } from '../plugins/init_autocomplete';
initAutocomplete();

