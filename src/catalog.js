export const COUNTRIES = ["Afghanistan","Angola","United Arab Emirates","Argentina","Armenia","Australia","Austria","Azerbaijan","Belgium","Bulgaria","Bahrain","Belarus","Belize","Bermuda","Bolivia","Brazil","Barbados","Botswana","Canada","Switzerland","Chile","China","Colombia","Costa Rica","Czech Republic","Germany","Denmark","Dominican Republic","Algeria","Ecuador","Egypt","Spain","Estonia","Finland","France","United Kingdom","Georgia","Greece","Guatemala","Guyana","Hong Kong","Honduras","Croatia","Hungary","Indonesia","India","Ireland","Iran","Iraq","Iceland","Israel","Italy","Jordan","Japan","Kazakhstan","Kenya","Cambodia","South Korea","Kuwait","Laos","Lebanon","Sri Lanka","Lithuania","Luxembourg","Macao","Monaco","Mexico","Macedonia","Myanmar","Malaysia","Nigeria","Nicaragua","Netherlands","Norway","Nepal","New Zealand","Oman","Pakistan","Panama","Philippines","Papua New Guinea","Poland","Portugal","Qatar","Romania","Russia","Singapore","El Salvador","San Marino","Serbia","Slovak Republic","Slovenia","Sweden","Seychelles","Syria","Thailand","Tanzania","Uganda","United States","Venezuela","Vietnam","South Africa","Zimbabwe","Taiwan","Ukraine","Democratic Republic of Congo","Andorra","Latvia","Morocco","Saudi Arabia","Senegal","Tunisia","Liechtenstein","Bosnia and Herzegovina","Bhutan","Palestine","Cameroon","Peru","Togo","Moldova","Maldives","Malta","Paraguay","Albania","Bangladesh","Brunei","Cyprus","Mongolia","Burkina Faso","Rwanda","Cote d'Ivoire","Cuba","Jamaica","Turkey","Aruba","Gabon","Ghana","Trinidad and Tobago","Saint Vincent and the Grenadines","Ethiopia","Guinea","Sudan","Antigua and Barbuda","Equatorial Guinea","Saint Lucia","Mauritania","Namibia","Suriname","Swaziland","Uruguay","Bahamas","Central African Republic","Congo","Uzbekistan","Benin","Liberia","Somalia","Gambia","Montenegro","Djibouti","Guam","Kyrgyz Republic","French Polynesia","Zambia","Cayman Islands","Fiji","Faeroe Islands","Gibraltar","Greenland","Haiti","Mauritius","Chad","Cape Verde","Madagascar","New Caledonia","Niger","Eritrea","Timor","Dominica","Grenada","Mozambique","United States Virgin Islands","Libya","Turks and Caicos Islands","Saint Kitts and Nevis","Mali","Burundi","Guinea-Bissau","British Virgin Islands","Puerto Rico"];

export const GeoScope = {
  "0": "Targeted",
  "1": "General"
};

export const S1 = {
  id: "S1",
  name: "School closing",
  shortName: "Schools",
  type: "Public gatherings policy",
  scaleColumnName: "S1_School_closing",
  scaleColumnIndex: 3,
  geoScopeColumnName: "S1_IsGeneral",
  geoScopeColumnIndex: 4,
  notesColumnName: "S1_Notes",
  notesColumnIndex: 5,
  scale: {
    "0": "No measures",
    "1": "Recommend closing",
    "2": "Require closing",
    "": "No data"
  },
  geoScope: GeoScope
};

export const S2 = {
  id: "S2",
  name: "Workplace closing",
  shortName: "Workplace",
  type: "Public gatherings policy",
  scaleColumnName: "S2_Workplace_closing",
  scaleColumnIndex: 6,
  geoScopeColumnName: "S2_IsGeneral",
  geoScopeColumnIndex: 7,
  notesColumnName: "S2_Notes",
  notesColumnIndex: 8,
  scale: {
    "0": "No measures",
    "1": "Recommend closing",
    "2": "Require closing",
    "": "No data"
  },
  geoScope: GeoScope
};

export const S3 = {
  id: "S3",
  name: "Cancel public events",
  shortName: "Public events",
  type: "Public gatherings policy",
  scaleColumnName: "S3_Cancel_public_events",
  scaleColumnIndex: 9,
  geoScopeColumnName: "S3_IsGeneral",
  geoScopeColumnIndex: 10,
  notesColumnName: "S3_Notes",
  notesColumnIndex: 11,
  scale: {
    0: "No measures",
    1: "Recommend cancelling",
    2: "Require cancelling",
    "": "No data"
  },
  geoScope: GeoScope
};

export const S4 = {
  id: "S4",
  name: "Close public transport",
  shortName: "Public transport",
  type: "Public gatherings policy",
  scaleColumnName: "S4_Close_public_transport",
  scaleColumnIndex: 12,
  geoScopeColumnName: "S4_IsGeneral",
  geoScopeColumnIndex: 13,
  notesColumnName: "S4_Notes",
  notesColumnIndex: 14,
  scale: {
    0: "No measures",
    1: "Recommend closing",
    2: "Require closing",
    "": "No data"
  },
  geoScope: GeoScope
};

export const S5 = {
  id: "S5",
  name: "Public info campaigns",
  shortName: "Campaigns",
  type: "Public gatherings policy",
  scaleColumnName: "S5_Public_information_campaigns",
  scaleColumnIndex: 15,
  geoScopeColumnName: "S5_IsGeneral",
  geoScopeColumnIndex: 16,
  notesColumnName: "S5_Notes",
  notesColumnIndex: 17,
  scale: {
    0: "No COVID-19 public information campaign",
    1: "COVID-19 public information campaign",
    "": "No data"
  },
  geoScope: GeoScope
};

export const S6 = {
  id: "S6",
  name: "Restrictions on internal movement",
  shortName: "Internal movement",
  type: "Public gatherings policy",
  scaleColumnName: "S6_Restrictions_on_internal_movement",
  scaleColumnIndex: 18,
  geoScopeColumnName: "S6_IsGeneral",
  geoScopeColumnIndex: 19,
  notesColumnName: "S6_Notes",
  notesColumnIndex: 20,
  scale: {
    0: "No measures",
    1: "Recommend movement restriction",
    2: "Restrict movement",
    "": "No data"
  },
  geoScope: GeoScope
};

export const S7 = {
  id: "S7",
  name: "International travel controls",
  shortName: "International travel",
  type: "Public gatherings policy",
  scaleColumnName: "S7_International_travel_controls",
  scaleColumnIndex: 21,
  notesColumnName: "S7_Notes",
  notesColumnIndex: 22,
  scale: {
    0: "No measures",
    1: "Screening",
    2: "Quarantine on high-risk regions",
    3: "Ban on high-risk regions",
    "": "No data"
  },
  geoScope: null
};

export const INDICATORS = [S1, S2, S3, S4, S5, S6, S7];
