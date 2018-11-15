/*global define,location */
/*jslint sloppy:true */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
    //Default configuration settings for the application. This is where you'll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings and url parameters.
    "appid": "",
    "webmap": "",
    "oauthappid": null,
    //Group templates must support a group url parameter. This will contain the id of the group.
    "group": "c4d6792a90ea4440854fe2f12dbecd6c",
    //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "proxy/proxy.ashx",
    "proxyThesePrefixes": [],

    "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "arcgis.com",
    "units": null,
    //If your applcation needs to edit feature layer fields set this value to true. When false the map will
    //be created with layers that are not set to editable which allows the FeatureLayer to load features optimally.
    "editable": false,
    "helperServices": {
     "geometry": {
       "url": null
     },
     "printTask": {
       "url": null
     },
     "elevationSync": {
       "url": null
     },
     "geocode": [{
       "url": null
         }]
  },
      //color theme.
    "theme": "#137DB9",
    "applicationName": "Aparcabici.cat Mapathon",
    "applicationIcon": "",
    "applicationFavicon": "/images/Bici-01.png",

    "signInSubtitle": "Califica los aparcabicis de Barcelona",
    "signInBackgroundImage": "/images/bici_desde_arriiba.jpg",

    "searchedAddressPushpinImage":"/images/redstickpin.png",
    "enableGuestAccess": true,
    "enableFacebook": false,
    "enableTwitter": true,
    "enableGoogleplus": false,
    "enablePortalLogin": false,

    "facebookAppId": "",

    "twitterSigninUrl": location.protocol + "//utility.arcgis.com/tproxy/signin",
    "twitterUserUrl": location.protocol + "//utility.arcgis.com/tproxy/proxy/1.1/account/verify_credentials.json?q=&include_entities=true&skip_status=true&locale=en",
    "twitterCallbackUrl": "/oauth-callback-twitter.html",

    "googleplusClientId": "",
    "googleplusScope": "https://www.googleapis.com/auth/userinfo.email",

    "showNullValueAs": "",
    "noThumbnailIcon": "/images/default-webmap-thumbnail.png",
    "noAttachmentIcon": "/images/no-attachment.png",

    "webMapInfoDescription": true,
    "webMapInfoSnippet": false,
    "webMapInfoOwner": false,
    "webMapInfoCreated": false,
    "webMapInfoModified": false,
    "webMapInfoLicenseInfo": false,
    "webMapInfoAccessInformation": false,
    "webMapInfoTags": false,
    "webMapInfoNumViews": false,
    "webMapInfoAvgRating": false,
    "showNonEditableLayers": true,
    "showPopupForNonEditableLayers" : false,

    "submitMessage": "Gracias por tu aporte!",
    "likeField": "NUMVOTES",
    "commentField": "COMMENTS",
    "usePopupConfigurationForComment":false,
    "enableFeatureEdit": false,
    "enableFeatureDelete" : false,
    "reportedByField": "reporter",
    "locationField": "LONG_TEXT",
    "showMapFirst":"",
    "showHelpOnLoad": false,
    "showBaseMapGallery": false,
    "showLegend": false,
    "basemapGroup":"",

    //Sort report configuration
    "sortingField" : "", //Field can be of type integer, string or date
    "sortingOrder" : "DESC", //ASC or DESC
    //Configure order of form components
    "details" : "Middle",
    "attachments" : "Bottom",
    "location" : "Top",

    "zoomLevel": 12,
    "honorZoomLevel": false, //Flag to honor zoom level after a feature is selected
    "enableUSNGSearch": false,
    "enableMGRSSearch": false,
    "enableLatLongSearch": false,
    "geographicalExtentLayer": "",
    //Lower level configuration
    "submitReportButtonText" : "Reporte", // Text for submit report button
    "submitReportButtonColor": "#35ac46", //Color for Submit Report button.If EMPTY default color will be  #35ac46.
    "splashScreenTextColor": "#FFF", // Color of splash screen content
    "imageBackgroundColor": "#999999", // Background color icons
    "imageForeGroundColor": "white", // Foreground color of icons values (gray or white)
    //Configurable text for help dialog and help link
    "enableHelp":true,
    "helpLinkText": "Ayuda",
    "helpDialogTitle":"Ayuda",
    "helpDialogContent": "<p>Aparcabicibcn es una plataforma colaborativa para la recopilación y visualización de datos cualitativos sobre la oferta de aparcamientos para bicis en el espacio público de Barcelona. Consta de dos mapas. El primero te permite describir en detalle los anclajes públicos en términos de ubicación, motivo de uso, percepción de seguridad, etc. El segundo mapa te permitirá reportar incidencias que sucedan en los aparcabicis, tales como: robo, presencia de chatarra o de bicis de alquiler, e incluso para indicar lugares donde consideres que se necesitan nuevos anclajes.</p><p>Este proyecto está planteado como un piloto de lo que podría ser una plataforma colaborativa para la bicicleta en Barcelona. El objetivo es obtener datos cualitativos a partir de los usuarios, y a la vez abrir esa información para que todos nos podamos beneficiar de ella. Gracias por participar!<p>Aparcabicibcn es una iniciativa organizada por Copenhagenize Barcelona, Current Ecological y Smart Cycles, y cuenta con el apoyo del Ayuntamiento de Barcelona. La plataforma utiliza la herramienta Crowdsource Reporter de ArcGIS.</p> <p> Más información:@aparcabicibcn@gmail.com</p> <p>Twitter: @aparcabicibcn.</p>",
    "enableDifferentHelpContent":false,
    "loginHelpDialogTitle":"",
    "loginHelpDialogContent": "",
    "bufferRadius": 3, //Buffer radius will be used to create inital buffer on applicaiton load
    "bufferUnit": "miles",
    "geoformDetailsSectionLabel": "Details", //label for details section in geoform
    "geoformLocationSectionLabel": "Location", //label for location section in geoform
    "geoformAttachmentSectionLabel": "Attachments", //label for attachment section in geoform
    "noWebmapInGroupText": "Configured group is invalid or no items have been shared with this group yet.",
    // to show as a label for attachment section in comments form where attachments can be added
    "commentFormAttachmentSectionLabel": "Attachments",
    "headerBackgroundColor":"#fff",
    "bodyBackgroundColor":"#fff",
    "bodyTextColor":"#515151",
    "buttonBackgroundColor":"#fff",
    "buttonTextColor": "#137DB9",
    // reporting period value
    "reportingPeriodDialogTitle": "Reporting Period Closed",
    "reportingPeriodDialogContent": "We are no longer accepting new reports for this project.",
    "featureOutsideAOIMsg": "Feature cannot be added outside study area.",
    "reportingPeriod": "Open"
});
