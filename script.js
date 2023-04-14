(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "start": "this.init()",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "desktopMipmappingEnabled": false,
 "verticalAlign": "top",
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "definitions": [{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_123026_00_merged",
 "hfovMin": "150%",
 "id": "panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5AFF98C2_3742_0495_41C7_2CEF2F435363",
  "this.overlay_5AFE68C2_3742_0495_41A8_FEF9F7FA8C29",
  "this.overlay_5AFE38C2_3742_0495_41B6_CCD46162636C",
  "this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -7.2,
   "yaw": 179.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7"
  },
  {
   "backwardYaw": 169.2,
   "yaw": 131.51,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_t.jpg",
 "hfovMax": 130
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2A16D5DD_35EE_DA0C_4195_9F6663D606DB",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A5A4760_7DEC_1E92_41B3_47E5716EDDDB_0",
  "this.htmlText_2A1D15DB_35EE_DA14_41B9_091829167FAA"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window27705"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 127.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_69FBAA5A_7DEC_16B6_41C7_53620BE301A1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1-1",
 "hfovMin": "150%",
 "id": "panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_51A7E0A3_41A3_8763_41C4_A9D24BDF7CFC",
  "this.overlay_51A710A3_41A3_8763_41C0_79225EFA09D2",
  "this.overlay_51A750A3_41A3_8763_41AA_07B16B2B5D91",
  "this.panorama_51A760A3_41A3_8763_41B1_C114D11296F3",
  "this.popup_6EC0DF66_7DF4_2E9F_41DF_6D1A8A9C98BC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 131.51,
   "yaw": 169.2,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_2A656F49_353E_C677_417F_5E0229FD0D49"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_4EA691BD_4062_8966_41B0_30735096F17D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_0_t.png",
 "id": "album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_0",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Lobby",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "2-6-4",
 "hfovMin": "150%",
 "id": "panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6C3A464B_47DA_675B_41BD_3855E2978A6C",
  "this.overlay_6C3A764B_47DA_675B_416C_4613E9C965BA",
  "this.panorama_6C3A864C_47DA_675D_4198_3A9CDC32700F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -52.85,
   "yaw": -68.26,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A"
  },
  {
   "backwardYaw": 42.08,
   "yaw": -158.91,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_t.jpg",
 "hfovMax": 130
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -112.67,
 "rotationZ": 0,
 "rotationY": 2,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxWidth": "80%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "80%",
 "loop": false,
 "id": "popup_6EC0DF66_7DF4_2E9F_41DF_6D1A8A9C98BC",
 "pitch": 35.76,
 "hideEasing": "cubic_out",
 "hfov": 24.65,
 "video": {
  "width": 720,
  "mp4Url": "media/video_6BED61DD_7DF4_15B2_4195_0BFC076B76B9.mp4",
  "class": "VideoResource",
  "height": 480
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_090924_00_merged",
 "hfovMin": "150%",
 "id": "panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E",
 "class": "Panorama",
 "overlays": [
  "this.panorama_550E69D2_40E2_B93D_41B1_88E505103054",
  "this.overlay_6546C24B_477E_BF5B_41C9_32F53144F84B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -153.06,
   "yaw": 175.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_t.jpg",
 "hfovMax": 130
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_592DE370_476E_DD44_4171_FEE5B82A97AE",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A4F6777_7DEC_1D7E_41D7_2B3111ACAEE9_0",
  "this.htmlText_592DA370_476E_DD44_41CE_3D088AF8C335"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window33973"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_5379B8B7_46FA_6BCC_41C4_6C45D7FFB1AB_t.png",
 "id": "photo_5379B8B7_46FA_6BCC_41C4_6C45D7FFB1AB",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_5379B8B7_46FA_6BCC_41C4_6C45D7FFB1AB.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "2",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 142.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6902AB46_7DEC_169E_41C2_E459164013AD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 26.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6524E892_7DEC_13B6_41C8_409370AABACF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -10.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_64F2D8B9_7DEC_13F2_41C1_C108FB6B77FA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_531DFD19_46FB_AAC7_41CC_2424C1149CAE",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A480774_7DEC_1D72_41C3_64EB7DD6E99C_0",
  "this.htmlText_531BBD19_46FB_AAC7_41BE_F2887FC3101C"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window11179"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_10E8EB8B_3552_4E0B_41BD_B8737F552A8A_t.png",
 "id": "photo_10E8EB8B_3552_4E0B_41BD_B8737F552A8A",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_10E8EB8B_3552_4E0B_41BD_B8737F552A8A.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Cashier",
 "height": 1080
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_53B6A6DC_46FA_677C_41D1_9094281C666D_t.png",
 "id": "photo_53B6A6DC_46FA_677C_41D1_9094281C666D",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_53B6A6DC_46FA_677C_41D1_9094281C666D.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "1",
 "height": 1080
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_090534_00_merged",
 "hfovMin": "150%",
 "id": "panorama_54738931_40E2_B97F_41B5_4B57C10B35F7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5473B931_40E2_B97F_41CD_39FCA791CE26",
  "this.overlay_5473A931_40E2_B97F_41B9_EE20203A5733",
  "this.panorama_54725931_40E2_B97F_41C2_1B43BB76EF04"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_085924_00_merged",
 "hfovMin": "150%",
 "id": "panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0",
 "class": "Panorama",
 "overlays": [
  "this.overlay_55EF5CF9_40A2_98EF_41AF_897699136286",
  "this.panorama_55EF2CF9_40A2_98EF_41D1_12D0D3A053EF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -176.34,
   "yaw": -130.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56C3B62F_40A7_8B63_41AF_0091007B755A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -137.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_69E2EA66_7DEC_169E_41AF_7166806A4635",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_123859_00_merged",
 "hfovMin": "150%",
 "id": "panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_56BCC1AC_41A2_8966_41D0_1BC2ED7AF28D",
  "this.overlay_56BF21AC_41A2_8966_41C9_62F3254E0157",
  "this.overlay_56BF11AC_41A2_8966_41A8_78828B16CBFB",
  "this.panorama_56BF61AC_41A2_8966_41BE_AE1D9FAE2112"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -133.24,
   "yaw": 12.63,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618"
  },
  {
   "backwardYaw": -173.82,
   "yaw": -165,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -10.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_690ECB52_7DEC_16B6_41D6_5F062DF5F59C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_123618_00_merged",
 "hfovMin": "150%",
 "id": "panorama_15E20E42_3532_4674_41A2_17FF096E6F9B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_15E21E42_3532_4674_41C9_B4341A7323B4",
  "this.panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.37,
   "yaw": 50.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_085758_00_merged",
 "hfovMin": "150%",
 "id": "panorama_54E533E5_40A3_88E6_41AB_542C24578E8A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_54E563E6_40A3_88E2_41A0_E8A4B4BE5CF6",
  "this.panorama_54E693E6_40A3_88E2_41CC_72F7DEB21B6D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -177.28,
   "yaw": -53.33,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56C3B62F_40A7_8B63_41AF_0091007B755A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 21.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E4669E1_7DEC_1592_41DB_5B964D922606",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_085247_00_merged",
 "hfovMin": "150%",
 "id": "panorama_54B596ED_40A2_88E6_41B7_688552C1C01E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_54B646ED_40A2_88E6_41C6_02A410D4D503",
  "this.overlay_54B676ED_40A2_88E6_41B6_3C65D3F32BEC",
  "this.panorama_54B666ED_40A2_88E6_41B6_5DB6C3AD7861"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -7.34,
   "yaw": -113.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56CA5080_41AF_871E_41BB_12406F67EA71"
  },
  {
   "backwardYaw": -65.27,
   "yaw": 65.5,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_084527_00_merged",
 "hfovMin": "150%",
 "id": "panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_551D96FE_46AF_A73D_41C9_FE18CAC35C3C",
  "this.overlay_551D86FE_46AF_A73D_41C4_35E30B44C153",
  "this.panorama_551D66FE_46AF_A73D_41D0_E279A92D56CC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 137.45,
   "yaw": -76.29,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C"
  },
  {
   "backwardYaw": 162.39,
   "yaw": 29.07,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_503C0050_41A2_873E_41A5_24C049FBA238"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_t.jpg",
 "hfovMax": 130
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_085652_00_merged",
 "hfovMin": "150%",
 "id": "panorama_56C3B62F_40A7_8B63_41AF_0091007B755A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_56C3862F_40A7_8B7E_41B8_1BA6D4E50712",
  "this.overlay_56C37634_40A7_8B65_41C8_446D2A7BD38D",
  "this.overlay_56C36634_40A7_8B65_41B3_28C3FE4E156C",
  "this.panorama_56C35635_40A7_8B67_41B9_42B2AF6E4822"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -130.82,
   "yaw": -176.34,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0"
  },
  {
   "backwardYaw": -53.33,
   "yaw": -177.28,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54E533E5_40A3_88E6_41AB_542C24578E8A"
  },
  {
   "backwardYaw": -47.35,
   "yaw": 2.41,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_t.jpg",
 "hfovMax": 130
},
{
 "playList": "this.album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_AlbumPlayList",
 "thumbnailUrl": "media/album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_t.png",
 "id": "album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2",
 "class": "PhotoAlbum",
 "label": "Photo Album Lobby"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_123537_00_merged",
 "hfovMin": "150%",
 "id": "panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0",
 "class": "Panorama",
 "overlays": [
  "this.overlay_14B72C79_3532_4A17_41A0_8FB31137F75C",
  "this.overlay_14B73C79_3532_4A17_41C0_B44BB926ABE3",
  "this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 50.11,
   "yaw": 0.37,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_15E20E42_3532_4674_41A2_17FF096E6F9B"
  },
  {
   "backwardYaw": -139.62,
   "yaw": -56.06,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_53F56AC5_46F9_AF4C_41D1_4FD74C37DC64_t.png",
 "id": "photo_53F56AC5_46F9_AF4C_41D1_4FD74C37DC64",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_53F56AC5_46F9_AF4C_41D1_4FD74C37DC64.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "12",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": 90.07,
  "class": "PanoramaCameraPosition",
  "pitch": -5.92
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -62.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_69D67A7E_7DEC_176E_41DA_BCA9D825E211",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_124129_00_merged",
 "hfovMin": "150%",
 "id": "panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826",
 "class": "Panorama",
 "overlays": [
  "this.overlay_55D8558C_46AA_65DD_41AD_9505F2FCF854",
  "this.overlay_55D8458C_46AA_65DD_41BD_2756B4D5A450",
  "this.panorama_55D8658C_46AA_65DD_41D0_AD994FC0ECCA",
  "this.overlay_5F2C86D0_46EA_A745_41D0_B3E62EBECA44",
  "this.overlay_5F2DC748_46D6_A545_41CB_0F3DEABA2ED8",
  "this.overlay_5DA41E54_46D6_674C_41C0_D63060871BE6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C"
  },
  {
   "backwardYaw": 0.26,
   "yaw": -67.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5120EEF3_41AD_F8E2_4196_44717C80300D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_53F563B8_46FA_5DC4_41CE_C04626265226_t.png",
 "id": "photo_53F563B8_46FA_5DC4_41CE_C04626265226",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_53F563B8_46FA_5DC4_41CE_C04626265226.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "8",
 "height": 1080
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_090924_00_merged",
 "hfovMin": "150%",
 "id": "panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370",
 "class": "Panorama",
 "overlays": [
  "this.overlay_55D10D2C_40E7_9965_41B2_A25BFC867F9C",
  "this.panorama_55D11D2C_40E7_9965_41CF_7B1857CC04EC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 5.79,
   "yaw": 175.71,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_t.jpg",
 "hfovMax": 130
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_5E613EEE_46EA_A75C_41A9_92FE352A2D0A",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A226796_7DEC_1DBE_41D1_C2DD17EC79FC_0",
  "this.htmlText_5E1F6EEE_46EA_A75C_41BB_7EC354ADF1C2"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window20971"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "2-6-6",
 "hfovMin": "150%",
 "id": "panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6E08071B_47EB_E6FB_41C8_F7D7E98109FE",
  "this.overlay_6E08271B_47EB_E6FB_41B2_249146294161",
  "this.panorama_6E09D71B_47EB_E6FB_41BF_5EAB679FAE65",
  "this.overlay_6E09C71B_47EB_E6FB_41BF_0FB35CAD8B0B",
  "this.overlay_6E09971C_47EB_E6FD_41BD_84E3514B4220"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 132.89,
   "yaw": -11.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A"
  },
  {
   "backwardYaw": 159.1,
   "yaw": 169.53,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_10E53297_3552_5E1B_41A9_B4E28BB235E8_t.png",
 "id": "photo_10E53297_3552_5E1B_41A9_B4E28BB235E8",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_10E53297_3552_5E1B_41A9_B4E28BB235E8.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Logistic Building",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": 168.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_689BBBB0_7DEC_15F2_41D3_9B10987006D8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/video_2A1F5F58_35D2_C615_41C4_AA70604C64C5_t.jpg",
 "scaleMode": "fit_inside",
 "class": "Video",
 "width": 720,
 "label": "Fima Company Profile(1)",
 "loop": false,
 "id": "video_2A1F5F58_35D2_C615_41C4_AA70604C64C5",
 "height": 576,
 "video": {
  "width": 720,
  "mp4Url": "media/video_2A1F5F58_35D2_C615_41C4_AA70604C64C5.mp4",
  "class": "VideoResource",
  "height": 576
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_53F49C7D_46FA_6B3C_41C2_EC645534BC52_t.png",
 "id": "photo_53F49C7D_46FA_6B3C_41C2_EC645534BC52",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_53F49C7D_46FA_6B3C_41C2_EC645534BC52.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "4",
 "height": 1080
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1-5",
 "hfovMin": "150%",
 "id": "panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_515309C2_41AD_991D_41C8_EA7097287338",
  "this.overlay_515319C3_41AD_9923_41C6_E3BC9CD84A84",
  "this.overlay_515329C3_41AD_9923_41D0_A22F90C17954",
  "this.panorama_515339C3_41AD_9923_41BC_ED8C6EA3A588"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.69,
   "yaw": -7.2,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782"
  },
  {
   "backwardYaw": 69.72,
   "yaw": 179.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C"
  },
  {
   "backwardYaw": -178.59,
   "yaw": -139.62,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_5F55E491_46D7_BBC7_41BC_34C3832B1EDB",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A3E778D_7DEC_1D92_41CA_0B1C0886BCEB_0",
  "this.htmlText_5F562491_46D7_BBC7_41A8_9B482D36A6D7"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window25384"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -47.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_64D098D2_7DEC_13B6_41D8_2B5BA547E605",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 149.1,
  "class": "PanoramaCameraPosition",
  "pitch": 2.43
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/video_6BED61DD_7DF4_15B2_4195_0BFC076B76B9_t.jpg",
 "scaleMode": "fit_inside",
 "class": "Video",
 "width": 720,
 "label": "Pt. Finusolprima Farma Internasional Video Profile",
 "loop": false,
 "id": "video_6BED61DD_7DF4_15B2_4195_0BFC076B76B9",
 "height": 480,
 "video": {
  "width": 720,
  "mp4Url": "media/video_6BED61DD_7DF4_15B2_4195_0BFC076B76B9.mp4",
  "class": "VideoResource",
  "height": 480
 }
},
{
 "initialPosition": {
  "yaw": -88.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_659AB82B_7DEC_1296_41C3_949BADE59D84",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_090333_00_merged",
 "hfovMin": "150%",
 "id": "panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6E23804C_47EB_BB5C_41A5_05262677C60E",
  "this.panorama_6E23D04C_47EB_BB5C_41C6_9C42AF739856",
  "this.overlay_6E23C04C_47EB_BB5C_41CC_A0A5155D14B2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 169.53,
   "yaw": 159.1,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -12.45,
  "class": "PanoramaCameraPosition",
  "pitch": -11.47
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -150.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_65BD3802_7DEC_1297_41CE_451262F8801C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 167.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_694D7B17_7DEC_16BE_41DE_61DDEEA4A3A0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 66.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E0E8A4E_7DEC_16AE_41D3_5CA7E4CDC740",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_10826571_3552_5A17_41C4_8805CA037BB1_t.png",
 "id": "photo_10826571_3552_5A17_41C4_8805CA037BB1",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_10826571_3552_5A17_41C4_8805CA037BB1.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Security Post",
 "height": 1080
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_53F5220E_46FA_5EDC_41A7_FE8699D19207_t.png",
 "id": "photo_53F5220E_46FA_5EDC_41A7_FE8699D19207",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_53F5220E_46FA_5EDC_41A7_FE8699D19207.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "7",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": 40.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_699BFAC4_7DEC_1792_4194_25A400F1CA72",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -0.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_68FCBB5E_7DEC_16AE_41CF_E541020BDA96",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_29D7150E_35F1_DA0D_41CA_C642220447F5_t.png",
 "id": "photo_29D7150E_35F1_DA0D_41CA_C642220447F5",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_29D7150E_35F1_DA0D_41CA_C642220447F5.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Logistic Building",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_53F5B579_46F9_A544_41D1_5C2F0B2C07F6_t.png",
 "id": "photo_53F5B579_46F9_A544_41D1_5C2F0B2C07F6",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_53F5B579_46F9_A544_41D1_5C2F0B2C07F6.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "9",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2C54B1DB_35FE_BA0B_41B9_9F85AF074C12",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "title": "",
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A59275E_7DEC_1EAE_41C8_A4B447857B3B_0",
  "this.htmlText_2C5721DA_35FE_BA15_41A0_AE91364F4110"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window20223"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 2.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_64CF78EB_7DEC_1396_41D7_AA295D03B214",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_29D69A13_35F2_4E1B_41C7_3219C3C50CF2_t.png",
 "id": "photo_29D69A13_35F2_4E1B_41C7_3219C3C50CF2",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_29D69A13_35F2_4E1B_41C7_3219C3C50CF2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Gate",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": 172.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_69712ADC_7DEC_17B2_41C0_FC3907AAE70A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_085119_00_merged",
 "hfovMin": "150%",
 "id": "panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5018D0D4_41A3_8726_41C8_B9C8E92E534C",
  "this.panorama_5018E0D4_41A3_8726_418A_603576E43F5C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 117.79,
   "yaw": -73.37,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -42.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E57B9BE_7DEC_15EE_41AF_BBA8F55955B9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_2FB5CFE7_35F2_C63B_41BB_92207220D6DD_t.png",
 "id": "photo_2FB5CFE7_35F2_C63B_41BB_92207220D6DD",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_2FB5CFE7_35F2_C63B_41BB_92207220D6DD.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Security Post",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": 46.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_69C2AA8A_7DEC_1796_4189_F600CB7A4DD6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_5DDD45BD_46E9_A53C_41C0_5F0B87EF87CF",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A3ED78C_7DEC_1D92_41D0_01C5B4A2016A_0",
  "this.htmlText_5DDB55BD_46E9_A53C_41CC_0905790E796C"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window22635"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_53F4B035_46FA_5ACC_41BC_631BBF0490A0_t.png",
 "id": "photo_53F4B035_46FA_5ACC_41BC_631BBF0490A0",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_53F4B035_46FA_5ACC_41BC_631BBF0490A0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "6",
 "height": 1080
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_084604_00_merged",
 "hfovMin": "150%",
 "id": "panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_54327A0B_40E2_9B23_41C5_F7208A06A3D5",
  "this.panorama_54320A0B_40E2_9B23_41BC_9D33C9AA4A1C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -76.29,
   "yaw": 137.45,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_10E01DE3_3552_4A3B_41B3_183646F4C9BD_t.png",
 "id": "photo_10E01DE3_3552_4A3B_41B3_183646F4C9BD",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_10E01DE3_3552_4A3B_41B3_183646F4C9BD.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Gate",
 "height": 1080
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_61D945E1_476A_A544_4182_075295AFB6D0_t.png",
 "id": "photo_61D945E1_476A_A544_4182_075295AFB6D0",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_61D945E1_476A_A544_4182_075295AFB6D0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Laboratory(1)",
 "height": 1080
},
{
 "items": [
  {
   "media": "this.panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA",
   "camera": "this.panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F",
   "camera": "this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD",
   "camera": "this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24",
   "camera": "this.panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782",
   "camera": "this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C",
   "camera": "this.panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6",
   "camera": "this.panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B",
   "camera": "this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0",
   "camera": "this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E",
   "camera": "this.panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618",
   "camera": "this.panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA",
   "camera": "this.panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_56CA5080_41AF_871E_41BB_12406F67EA71",
   "camera": "this.panorama_56CA5080_41AF_871E_41BB_12406F67EA71_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6",
   "camera": "this.panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA",
   "camera": "this.panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412",
   "camera": "this.panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22",
   "camera": "this.panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A",
   "camera": "this.panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59",
   "camera": "this.panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB",
   "camera": "this.panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4EA691BD_4062_8966_41B0_30735096F17D",
   "camera": "this.panorama_4EA691BD_4062_8966_41B0_30735096F17D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF",
   "camera": "this.panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E",
   "camera": "this.panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_503C0050_41A2_873E_41A5_24C049FBA238",
   "camera": "this.panorama_503C0050_41A2_873E_41A5_24C049FBA238_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C",
   "camera": "this.panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C",
   "camera": "this.panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4",
   "camera": "this.panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B",
   "camera": "this.panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_54B596ED_40A2_88E6_41B7_688552C1C01E",
   "camera": "this.panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_54E533E5_40A3_88E6_41AB_542C24578E8A",
   "camera": "this.panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_54738931_40E2_B97F_41B5_4B57C10B35F7",
   "camera": "this.panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03",
   "camera": "this.panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370",
   "camera": "this.panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_56C3B62F_40A7_8B63_41AF_0091007B755A",
   "camera": "this.panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0",
   "camera": "this.panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0",
   "camera": "this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_15E20E42_3532_4674_41A2_17FF096E6F9B",
   "camera": "this.panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5120EEF3_41AD_F8E2_4196_44717C80300D",
   "camera": "this.panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826",
   "camera": "this.panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7",
   "camera": "this.panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C",
   "camera": "this.panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55F8C351_40DD_893E_41CC_D52E523A6F81",
   "camera": "this.panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1",
   "camera": "this.panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "media": "this.album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.video_2A1F5F58_35D2_C615_41C4_AA70604C64C5",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 44, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 44)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_6BED61DD_7DF4_15B2_4195_0BFC076B76B9",
   "end": "this.trigger('tourEnded')",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 45, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 45)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 45, 0)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_6BED61DD_7DF4_15B2_4195_0BFC076B76B9",
   "start": "this.viewer_uid6A5FE762_7DEC_1E96_41C3_5CF602A359A1VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6A1FC7A4_7DEC_1D92_41D1_F4A67F772EF3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6A1FC7A4_7DEC_1D92_41D1_F4A67F772EF3, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6A5FE762_7DEC_1E96_41C3_5CF602A359A1VideoPlayer)",
   "player": "this.viewer_uid6A5FE762_7DEC_1E96_41C3_5CF602A359A1VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_6A1FC7A4_7DEC_1D92_41D1_F4A67F772EF3",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 130.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_693B6B23_7DEC_1696_41DE_9908BD57EF86",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2954FE04_35F2_49FD_41BF_087A6F31BBBB",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A54F756_7DEC_1EBE_41D9_5DA1742F11B5_0",
  "this.htmlText_29553E05_35F2_49FF_41AC_B772EF3672DF"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window26182"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_2A656F49_353E_C677_417F_5E0229FD0D49.ogg",
  "mp3Url": "media/audio_2A656F49_353E_C677_417F_5E0229FD0D49.mp3",
  "class": "AudioResource"
 },
 "id": "audio_2A656F49_353E_C677_417F_5E0229FD0D49",
 "data": {
  "label": "Deluxe Hotel Lobby Music"
 },
 "class": "PanoramaAudio"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "2-5",
 "hfovMin": "150%",
 "id": "panorama_56CA5080_41AF_871E_41BB_12406F67EA71",
 "class": "Panorama",
 "overlays": [
  "this.overlay_56CA6080_41AF_871E_41C2_6A56F1C8BF5A",
  "this.overlay_56CA7080_41AF_871E_41C4_9736224731EE",
  "this.overlay_56CA0080_41AF_871E_41C9_E7B25352DBFA",
  "this.panorama_56CA2080_41AF_871E_41BE_E6ABE9CBB57F",
  "this.overlay_6141E394_477A_5DCC_41CA_A712DBB69A59"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 161.02,
   "yaw": -80.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4EA691BD_4062_8966_41B0_30735096F17D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA"
  },
  {
   "backwardYaw": -113.38,
   "yaw": -7.34,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54B596ED_40A2_88E6_41B7_688552C1C01E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_t.jpg",
 "hfovMax": 130
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_5959C2A0_476A_5FC5_41B6_497677CE6E92",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A313779_7DEC_1D72_41C1_5136DA7306AF_0",
  "this.htmlText_5959929F_476A_5FFB_41A0_C7BFE509B397"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window33973"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_5E689958_46EE_ED44_41CE_84D431976157",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A27F798_7DEC_1DB2_41CB_B5B43596829F_0",
  "this.htmlText_5E6C4957_46EE_ED4C_41CC_CCCAE59CF7AB"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window16084"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_12128DEF_3552_4A0B_41BC_D30017821B05_t.png",
 "id": "photo_12128DEF_3552_4A0B_41BC_D30017821B05",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_12128DEF_3552_4A0B_41BC_D30017821B05.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Server Room",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": -114.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_68877BBC_7DEC_15F2_41DC_4CA46D620184",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -172.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E4FC9ED_7DEC_1592_41C8_07B784579401",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 69.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6590181D_7DEC_12B2_41B7_18C4EDD852C5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -20.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_64C158DF_7DEC_13AE_41B6_B18E16FD9CD4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -4.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_69533AFF_7DEC_176D_41B8_D0F59CF921CB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_51CFBDDB_40A3_9922_41BA_9CD8549881DD",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A47176D_7DEC_1E92_41B3_288389EA7F40_0",
  "this.htmlText_51CC7DD5_40A3_9926_41C1_7C1B609B9194"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window9558"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -167.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_65879838_7DEC_12F2_4128_678C0E62EF00",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -19.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_69A57AAD_7DEC_1792_41D4_687D3EE67924",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_614DFA5E_476E_AF7C_41B5_57413B00FB10",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A4C7777_7DEC_1D7E_41AF_136BB6C5E072_0",
  "this.htmlText_614F8A5F_476E_AF7C_41C0_5CFFED805FD7"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window53341"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -48.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6558A86B_7DEC_1296_41DD_471E04DCE04E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 123.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_69156B3B_7DEC_16F6_41C8_2D2B5E76485A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_51708766_40AE_89E5_41D0_94EF3727732F_t.png",
 "id": "photo_51708766_40AE_89E5_41D0_94EF3727732F",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_51708766_40AE_89E5_41D0_94EF3727732F.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Employee Locker",
 "height": 1080
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_124430_00_merged",
 "hfovMin": "150%",
 "id": "panorama_55F8C351_40DD_893E_41CC_D52E523A6F81",
 "class": "Panorama",
 "overlays": [
  "this.overlay_55F8E351_40DD_893E_41CD_B883B175C4BA",
  "this.overlay_55F81351_40DD_893E_41C9_0A372694240F",
  "this.panorama_55F80351_40DD_893E_41CB_285EB625A4D2",
  "this.overlay_5E392A35_46EA_AECC_41CF_A90729084BA7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 12.36,
   "yaw": -14.48,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C"
  },
  {
   "backwardYaw": 4.47,
   "yaw": 160.68,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1-2",
 "hfovMin": "150%",
 "id": "panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6DC04BD4_47AA_6D4D_41BC_A8C5EBC31EE1",
  "this.overlay_6DC07BD4_47AA_6D4D_41C1_4FD5F0CB1A05",
  "this.overlay_6DC06BD4_47AA_6D4D_41A3_6BB190DAD22F",
  "this.panorama_6DC19BD4_47AA_6D4D_41C1_BBF1072236D3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_53F4873F_46F9_A53C_41BB_CB90C9878165_t.png",
 "id": "photo_53F4873F_46F9_A53C_41BB_CB90C9878165",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_53F4873F_46F9_A53C_41BB_CB90C9878165.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "10",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": -179.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_65DCA7DC_7DEC_1DB2_41AD_66122B06A960",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 6.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_69CF7A96_7DEC_17BE_4195_45408D84B07F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_514B22D5_46E9_DF4F_41C8_5A0D6258426F",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A240797_7DEC_1DBE_41D3_59A49E4EB112_0",
  "this.htmlText_514972D5_46E9_DF4F_41D0_914C9940A6EF"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window16084"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -128.37,
  "class": "PanoramaCameraPosition",
  "pitch": -27.48
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_56CA5080_41AF_871E_41BB_12406F67EA71_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -150.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_69410B0B_7DEC_1696_41D1_75DF285291D5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -18.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E042A42_7DEC_1696_41B0_F2569D83CBDC",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -175.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_657CB851_7DEC_12B2_41D7_E117499C891C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_53F57CAB_46F9_ABC4_41CB_B5CD227C193B_t.png",
 "id": "photo_53F57CAB_46F9_ABC4_41CB_B5CD227C193B",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_53F57CAB_46F9_ABC4_41CB_B5CD227C193B.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "13",
 "height": 1080
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_53F5EE5F_46FA_677C_41C2_BF8360BFBE1A_t.png",
 "id": "photo_53F5EE5F_46FA_677C_41C2_BF8360BFBE1A",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_53F5EE5F_46FA_677C_41C2_BF8360BFBE1A.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "5",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": 176.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_69EFCA72_7DEC_1776_41D8_727C91694E94",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_090711_00_merged",
 "hfovMin": "150%",
 "id": "panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF",
 "class": "Panorama",
 "overlays": [
  "this.panorama_55912C66_40EE_9FE2_41CB_2CFDBCE0C2ED",
  "this.overlay_672D34D1_477A_7B44_41BB_85DEAE069192",
  "this.overlay_6667978F_477F_A5DC_41CA_B173295ED16C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -150.52,
   "yaw": 29.5,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4EA691BD_4062_8966_41B0_30735096F17D"
  },
  {
   "backwardYaw": 175.3,
   "yaw": -153.06,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 126.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E6AA9A6_7DEC_159E_41C4_69E1F207BAE8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -46.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6926BB2F_7DEC_16EE_4194_74522E113EA4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -17.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E5D09CA_7DEC_1596_41D1_55340729C16A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -110.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_68E8EB6A_7DEC_1696_41C7_A0CD9DFAC2A7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "2-6-5",
 "hfovMin": "150%",
 "id": "panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6F5D77CD_47EA_A55F_4183_CDD44DCFE5D9",
  "this.overlay_6F5FF7CD_47EA_A55F_41C7_731F3E2C4207",
  "this.panorama_6F5FC7CD_47EA_A55F_41C8_37DD3C01B0EB",
  "this.overlay_6F5FD7CD_47EA_A55F_41A3_928DA9A5EF3F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -68.26,
   "yaw": -52.85,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22"
  },
  {
   "backwardYaw": -11.11,
   "yaw": 132.89,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 46.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E74C974_7DEC_1572_41AC_2F4756987D83",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -10.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_69870AD0_7DEC_17B2_41C9_1086FA9AD999",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E32A9FA_7DEC_1576_41B3_0FA2E7A0CA37",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 177.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_65376885_7DEC_1392_41DD_D9325C3D27A8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 106.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_68779BC8_7DEC_1592_41DC_27B16D7DD0CE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_224F8303_35DE_5FFB_41BA_0B502B1D364E_t.png",
 "id": "photo_224F8303_35DE_5FFB_41BA_0B502B1D364E",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_224F8303_35DE_5FFB_41BA_0B502B1D364E.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Lobby",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": -177.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E4019D6_7DEC_15BE_41AC_E3741ECF715B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 99.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_65A7D80F_7DEC_12AE_41AE_BC67548DF974",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "2-3",
 "hfovMin": "135%",
 "id": "panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618",
 "class": "Panorama",
 "overlays": [
  "this.overlay_56A7DFE8_41A5_98ED_41C9_92013A08DEE2",
  "this.overlay_56A7EFE8_41A5_98ED_4198_A41931C9FB25",
  "this.overlay_56A7FFE8_41A5_98ED_41B0_03FAF51A71A7",
  "this.panorama_56A70FE8_41A5_98ED_41B5_E686833D163F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 91.69,
   "yaw": 48.98,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0"
  },
  {
   "backwardYaw": 12.63,
   "yaw": -133.24,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_t.jpg",
 "hfovMax": 130
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_512626DB_46EE_A77B_41C1_9E435408BAF2",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A246798_7DEC_1DB2_41D7_CF67121D74B7_0",
  "this.htmlText_5125F6DA_46EE_A745_41C9_27EB9F64836C"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window16084"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_084417_00_merged",
 "hfovMin": "150%",
 "id": "panorama_503C0050_41A2_873E_41A5_24C049FBA238",
 "class": "Panorama",
 "overlays": [
  "this.overlay_503C5050_41A2_873E_41CD_DE9FEBCAD330",
  "this.overlay_503C4050_41A2_873E_41A6_9832B0A37CA7",
  "this.panorama_503C6050_41A2_873E_41B1_EE06DB188545"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 29.07,
   "yaw": 162.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C"
  },
  {
   "backwardYaw": -12.37,
   "yaw": -133.72,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5120EEF3_41AD_F8E2_4196_44717C80300D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_122611_00_merged",
 "hfovMin": "150%",
 "id": "panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD",
 "class": "Panorama",
 "overlays": [
  "this.overlay_23C892D7_3536_BE1B_41C7_9307724EA237",
  "this.overlay_23C8A2D7_3536_BE1B_4191_07A77F127C03",
  "this.overlay_2C2ABB44_35F2_4E7D_41AC_B4DF4C850CBA",
  "this.overlay_2E61B3EF_35F2_DE0C_41C5_DF84C0F72069",
  "this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 169.93,
   "yaw": 83.81,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_t.jpg",
 "hfovMax": 130
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_1CB826D3_36D2_C614_41A3_65E579466897",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "title": "",
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A45576C_7DEC_1E92_41D6_992D4D64ACB8_0",
  "this.htmlText_1CBAC6D3_36D2_C614_41C2_331984E8A120"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window50568"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "2-6-2",
 "hfovMin": "150%",
 "id": "panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA",
 "class": "Panorama",
 "overlays": [
  "this.overlay_4DF21CB3_407E_9F62_41BC_9D01B4A9EBA2",
  "this.overlay_4DF22CB3_407E_9F62_41A5_CFF47245E7A4",
  "this.panorama_4DF27CB3_407E_9F62_41C1_D23DA1E21D14",
  "this.overlay_52126C99_46FB_ABC7_41B5_F7F16F6CCCE5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -49.69,
   "yaw": -67.49,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6"
  },
  {
   "backwardYaw": 133.88,
   "yaw": 7.1,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_t.jpg",
 "hfovMax": 130
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_1D1459DE_36D3_CA0D_41CA_A7DC2F2C08BE",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "title": "",
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A42276B_7DEC_1E96_41DE_4792D61DF9EC_0",
  "this.htmlText_1D1169D8_36D3_CA15_41A3_BD4579958554"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window50568"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 178.33,
  "class": "PanoramaCameraPosition",
  "pitch": -7.05
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 112.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_65B037F6_7DEC_1D7E_41CB_78437F43F8DD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_084954_00_merged",
 "hfovMin": "150%",
 "id": "panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5071C8A7_41A2_8763_41A4_41D4E1B9F035",
  "this.overlay_5071D8A7_41A2_8763_41BD_6CE3F28F6382",
  "this.panorama_507188A8_41A2_876E_41CE_BA3024BB0558"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 65.5,
   "yaw": -65.27,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54B596ED_40A2_88E6_41B7_688552C1C01E"
  },
  {
   "backwardYaw": -73.37,
   "yaw": 117.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 172.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6502E8AC_7DEC_1392_41D4_3E849E1D9B23",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_538B32E4_46FA_5F4C_4199_60C6BE4CCFD4",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A4B6775_7DEC_1D72_41A2_5C5734104694_0",
  "this.htmlText_538AE2E5_46FA_5F4C_41B2_C45B34998B14"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window9470"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "2-1",
 "hfovMin": "135%",
 "id": "panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_1424D199_3552_DA14_41B6_D8B321F62213",
  "this.overlay_1424E199_3552_DA14_41C2_4DED915935F5",
  "this.overlay_12F2F8BD_3551_CA0F_41BA_87F583328CDF",
  "this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_tcap0",
  "this.overlay_5E753A45_46F6_EF4C_41C2_5E98698C7DC6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -84.3,
   "yaw": 179.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0"
  },
  {
   "backwardYaw": -2.62,
   "yaw": -37.42,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_t.jpg",
 "hfovMax": 130
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_6F344CE3_476A_6B44_41A3_CD6FD57860C0",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A3C578B_7DEC_1D96_41D7_540FF49254F7_0",
  "this.htmlText_6F2A2CE3_476A_6B44_41BE_98FED013BC55"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window51187"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_5DFB1E28_46D6_66C4_4190_3C3985608A54",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A3F678D_7DEC_1D92_4193_E363E7F472B6_0",
  "this.htmlText_5DF8FE28_46D6_66C4_41CB_FD6B697C71BA"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window22635"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_63352CE5_4777_EB4F_41C4_223DC4E3F29B",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A23E790_7DEC_1DB2_41C9_BF80854EDA47_0",
  "this.htmlText_63371CE5_4777_EB4F_4194_56EB1208A257"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window49167"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_106A12CE_3552_DE0D_41B3_0DF47A86D789",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A419768_7DEC_1E92_41CB_CF4FFCC74059_0",
  "this.htmlText_106CC2CE_3552_DE0D_41C3_DF77ACA1DB96"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window38528"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 49.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E67D999_7DEC_15B2_41D6_B4AE08AB1A33",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "2-6-3",
 "hfovMin": "150%",
 "id": "panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412",
 "class": "Panorama",
 "overlays": [
  "this.overlay_4DFE40EE_407E_88E2_41C8_0F7E4DC2D6CD",
  "this.overlay_4DFEB0EE_407E_88E2_41C6_9FBB6D6FB14F",
  "this.overlay_4DFEA0EE_407E_88E2_41CD_CB8921D7E171",
  "this.panorama_4DFE90EE_407E_88E2_4189_3E2921C4A295"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.41,
   "yaw": -47.35,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56C3B62F_40A7_8B63_41AF_0091007B755A"
  },
  {
   "backwardYaw": -158.91,
   "yaw": 42.08,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22"
  },
  {
   "backwardYaw": 7.1,
   "yaw": 133.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_28755315_35F2_5E1F_41C6_A02B5B1B2073",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A5B2760_7DEC_1E92_41D7_E2D423983D7E_0",
  "this.htmlText_28774315_35F2_5E1E_41BC_AFCAE8549430"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window27705"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "1-5-1",
 "hfovMin": "150%",
 "id": "panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_547AB65D_46BE_E77C_41A0_46A55E3C7F10",
  "this.overlay_5465665D_46BE_E77C_41C4_363670163EDA",
  "this.overlay_5465765D_46BE_E77C_41B1_F1298962974A",
  "this.overlay_5465065D_46BE_E77C_41B9_4636596DF2BB",
  "this.panorama_5465165D_46BE_E77C_41C9_4848D4A18DA9",
  "this.overlay_6471371C_4777_A6FC_41C3_DCF8C070F93D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.79,
   "yaw": -110.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4EA691BD_4062_8966_41B0_30735096F17D"
  },
  {
   "backwardYaw": 179.79,
   "yaw": 69.72,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7"
  },
  {
   "backwardYaw": -14.48,
   "yaw": 12.36,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55F8C351_40DD_893E_41CC_D52E523A6F81"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_t.jpg",
 "hfovMax": 130
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_103E6DF6_3553_CA1D_41C9_721536F2CF0C",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "title": "",
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A40D769_7DEC_1E92_41D0_019BB627F4BA_0",
  "this.htmlText_10382DF6_3553_CA1D_41BE_3F2BD2A75357"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window41602"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -167.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_65739844_7DEC_1292_41DE_85526A351668",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2DD7F75E_35DE_460D_41C8_56490CB7D847",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "title": "",
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A5DF761_7DEC_1E92_41AF_EADD02741552_0",
  "this.htmlText_2DD7875F_35DE_460B_41C8_5AF8E5545BAA"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window11027"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 103.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_656AC85E_7DEC_12AE_41DA_535BD022580B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_10EC6043_3552_5A7B_41BE_48E268ADD465_t.png",
 "id": "photo_10EC6043_3552_5A7B_41BE_48E268ADD465",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_10EC6043_3552_5A7B_41BE_48E268ADD465.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Lobby",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": -0.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_65D3B7CF_7DEC_1DAE_41CE_4DB5EA5EB06C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 95.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_65492878_7DEC_1372_41D9_81A3B7053FCE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 98.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E7BA980_7DEC_1592_41AB_B6EB1925A7AA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 111.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_68ADCBA5_7DEC_1592_41BA_58C08C48B66C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_197D7E96_36D2_461D_41B6_939290820326",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A58A75E_7DEC_1EAE_41D3_765A5481A64C_0",
  "this.htmlText_19762E95_36D2_461E_41C8_127B00CD56A3"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window26182"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 3.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_65C737E9_7DEC_1D92_41D3_511D70FB3811",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 95.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_68B03B8D_7DEC_1592_41D7_C77976321F7F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_601627DB_476A_657B_41D1_9C0040061108",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A46976D_7DEC_1E92_41D4_9A624698FF0B_0",
  "this.htmlText_6015E7DC_476A_657D_41C0_F220E6E50620"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window55184"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 1.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_68D6EB75_7DEC_1572_41D7_9AB50446BBAE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_53F40AB6_46FA_6FCC_41C8_D6108B7DF479_t.png",
 "id": "photo_53F40AB6_46FA_6FCC_41C8_D6108B7DF479",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_53F40AB6_46FA_6FCC_41C8_D6108B7DF479.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "3",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_53F5D90C_46F9_AADC_419B_C4301467C626_t.png",
 "id": "photo_53F5D90C_46F9_AADC_419B_C4301467C626",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_53F5D90C_46F9_AADC_419B_C4301467C626.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "11",
 "height": 1080
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1-3",
 "hfovMin": "150%",
 "id": "panorama_1CC10CE2_124B_8812_4180_81694ECE612F",
 "class": "Panorama",
 "overlays": [
  "this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F_tcap0",
  "this.overlay_270BF7A3_3532_463B_4191_49C6652F8A62",
  "this.overlay_266A0C03_3536_49F4_4192_6D9509FD5876",
  "this.overlay_2C479218_35FE_BE15_41C0_8242AB3B9F4D",
  "this.overlay_19A78ECF_36D2_460B_41C8_3CBDA69BFBCF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 83.81,
   "yaw": 169.93,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD"
  },
  {
   "backwardYaw": -171.38,
   "yaw": -3.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1261A9DC_3552_4A0D_41C8_A66642AEAE94_t.png",
 "id": "photo_1261A9DC_3552_4A0D_41C8_A66642AEAE94",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_1261A9DC_3552_4A0D_41C8_A66642AEAE94.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Canteen",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": 15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_68C58B81_7DEC_1592_41D3_FCC150D95692",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_090818_00_merged",
 "hfovMin": "150%",
 "id": "panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03",
 "class": "Panorama",
 "overlays": [
  "this.overlay_56ED880D_40E7_8726_41A2_70D502CD04E2",
  "this.overlay_56EDE80E_40E7_8722_41C1_68BCFA8D69C0",
  "this.panorama_56EDF80E_40E7_8722_41D0_BDAA6BD2EA4C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 175.71,
   "yaw": 5.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "2-6-1",
 "hfovMin": "150%",
 "id": "panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5BF6AC34_46AB_AACD_41C8_017A001C6AE3",
  "this.overlay_5BF68C35_46AB_AACF_41D1_AEF65247DB21",
  "this.panorama_5BF6FC35_46AB_AACF_41CA_D1A07CD384B7",
  "this.overlay_5BF6CC35_46AB_AACF_4181_930198914826"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56CA5080_41AF_871E_41BB_12406F67EA71"
  },
  {
   "backwardYaw": -67.49,
   "yaw": -49.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -106.81,
  "class": "PanoramaCameraPosition",
  "pitch": -13.82
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_5ADEDDDC_4769_A57C_41CE_0968F7AC5A97",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A31C778_7DEC_1D72_41D5_2EE64371EB8F_0",
  "this.htmlText_5AC2ADDB_4769_A544_41D0_679E70A93235"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window33973"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -131.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_65E957C3_7DEC_1D96_4172_DE11234102B7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 132.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E50D9B2_7DEC_15F6_41A5_749E649CA8FC",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_124608_00_merged",
 "hfovMin": "150%",
 "id": "panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1",
 "class": "Panorama",
 "overlays": [
  "this.overlay_50F22B9E_46B9_ADFC_41BD_E496070E94AC",
  "this.overlay_50F21B9E_46B9_ADFC_41C9_5D4574F7FDB7",
  "this.panorama_50F20B9E_46B9_ADFC_41D0_2552F0C64D0C",
  "this.overlay_51D519BB_46E9_EDC4_41C5_6AB012DE8C7B",
  "this.overlay_5ECAE712_46EE_A6C4_41AA_3BB593E91665",
  "this.overlay_519B59C6_46EE_ED4C_41C1_94C90627C375"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -139.62,
   "yaw": -178.59,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7"
  },
  {
   "backwardYaw": 160.68,
   "yaw": 4.47,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55F8C351_40DD_893E_41CC_D52E523A6F81"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "snapshots": [
    "this.snapshot_2A2BC60A_3531_F9F4_41A9_AA76F3997A9E"
   ],
   "top": {
    "levels": [
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "2",
 "hfovMin": "150%",
 "id": "panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6",
 "class": "Panorama",
 "overlays": [
  "this.overlay_513CCF9F_41A5_7922_41C3_2B30941535EB",
  "this.overlay_513CBF9F_41A5_7922_418B_2526CF18C4B4",
  "this.overlay_513CAF9F_41A5_7922_41C8_2336F2BDC936",
  "this.overlay_513C8F9F_41A5_7922_41C4_A0B4A75A5337",
  "this.panorama_51237F9F_41A5_7922_41A4_8DCC658BECA1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -56.06,
   "yaw": -139.62,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C"
  },
  {
   "backwardYaw": -37.42,
   "yaw": -2.62,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 165.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E1B6A36_7DEC_16FE_41CC_DDB066642C9D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 29.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6969DAF3_7DEC_1776_41CF_5C04CFCB1962",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_1CC10CE2_124B_8812_4180_81694ECE612F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -96.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E381A06_7DEC_169E_41D6_5D33CF04A5C3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2F8F0DE9_35F2_4A34_41C0_73EF0AAC6C9C",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "title": "",
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A5BA75F_7DEC_1EAE_41D2_F0AED1EF928A_0",
  "this.htmlText_2F894DE9_35F2_4A34_41BA_DD37E4162FBB"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window20223"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -178.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E26DA1E_7DEC_16AE_41DE_CDA3524FE1C7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -4.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6514C89F_7DEC_13AE_41D7_412F72C6027F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_122453_00_merged",
 "hfovMin": "150%",
 "id": "panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3BC283F4_3532_DE1D_41B6_AB517704C443",
  "this.overlay_2E5A4CF1_35F7_CA14_41A4_3CC8E2870557",
  "this.panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -3.02,
   "yaw": -171.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_t.jpg",
 "hfovMax": 130
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#FFFFFF",
 "id": "window_6E4E40B1_7DF4_13F5_41DC_D322105374E6",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "minWidth": 20,
 "shadowVerticalLength": 0,
 "bodyBackgroundOpacity": 0,
 "titlePaddingRight": 5,
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "class": "Window",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "footerBackgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "contentOpaque": false,
 "footerHeight": 5,
 "bodyPaddingLeft": 0,
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "headerBackgroundOpacity": 0,
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 0,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.viewer_uid6A5FE762_7DEC_1E96_41C3_5CF602A359A1"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 5,
 "shadowOpacity": 0.5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#666666",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 0,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 0,
 "closeButtonBorderSize": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#FFFFFF",
 "paddingTop": 0,
 "layout": "vertical",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingRight": 0,
 "data": {
  "name": "Window8157"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 40.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_69B8BAA1_7DEC_1792_41D6_DB1F3A75C9F7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "2-4-1",
 "hfovMin": "150%",
 "id": "panorama_5120EEF3_41AD_F8E2_4196_44717C80300D",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5120CEF3_41AD_F8E2_41C4_1D3581110339",
  "this.overlay_51202EF3_41AD_F8E2_4176_5AB349E21A9D",
  "this.overlay_51201EF3_41AD_F8E2_418F_46E515115D86",
  "this.panorama_51200EF3_41AD_F8E2_41D0_666CE496C2CD",
  "this.overlay_62D5056A_476A_A544_41D0_B9AAF6EC8482"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -133.72,
   "yaw": -12.37,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_503C0050_41A2_873E_41A5_24C049FBA238"
  },
  {
   "backwardYaw": -81.69,
   "yaw": -84.49,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA"
  },
  {
   "backwardYaw": -67.69,
   "yaw": 0.26,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_67E96083_476E_5BC4_41B9_F2B7FD710D94_t.png",
 "id": "photo_67E96083_476E_5BC4_41B9_F2B7FD710D94",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_67E96083_476E_5BC4_41B9_F2B7FD710D94.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Auditorium(1)",
 "height": 1080
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "2-2",
 "hfovMin": "150%",
 "id": "panorama_1400B319_3552_DE14_41BA_4304C9BE59B0",
 "class": "Panorama",
 "overlays": [
  "this.overlay_1400A319_3552_DE14_41C1_3A80F0B5C293",
  "this.overlay_14008319_3552_DE14_41CA_BEDDC455048A",
  "this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 48.98,
   "yaw": 91.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618"
  },
  {
   "backwardYaw": 179.3,
   "yaw": -84.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 114.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_697D3AE8_7DEC_1792_41BE_FD1FD541B561",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -179.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_64E348C6_7DEC_139E_41D8_B14797544BB2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "2-4",
 "hfovMin": "150%",
 "id": "panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA",
 "class": "Panorama",
 "overlays": [
  "this.overlay_51A34A90_41A5_9B3D_41CE_93D133931015",
  "this.overlay_51A2AA90_41A5_9B3D_41BF_D7459D7F10BA",
  "this.overlay_51A2BA90_41A5_9B3D_41C0_9CC369986588",
  "this.panorama_51A28A90_41A5_9B3D_4195_CE4B5712338A",
  "this.overlay_51A29A90_41A5_9B3D_41CB_7ABBF6A875C1",
  "this.overlay_6089D5B8_476B_E5C4_41CA_2E2B2EC03E34"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -165,
   "yaw": -173.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56CA5080_41AF_871E_41BB_12406F67EA71"
  },
  {
   "backwardYaw": -84.49,
   "yaw": -81.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5120EEF3_41AD_F8E2_4196_44717C80300D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6F8E5330_476A_BEC5_41C0_8F1798AF650C_t.png",
 "id": "photo_6F8E5330_476A_BEC5_41C0_8F1798AF650C",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_6F8E5330_476A_BEC5_41C0_8F1798AF650C.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Lactation Room",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": -174.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_68BE5B99_7DEC_15B2_41CF_641DB8DC1736",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_51F744CA_46F6_5B45_41C5_67CDC1B5AA4B",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "height": 400,
 "shadowVerticalLength": 0,
 "headerBorderColor": "#000000",
 "titleFontWeight": "bold",
 "title": "",
 "titlePaddingRight": 5,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "backgroundColor": [],
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadow": true,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "titlePaddingTop": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "titlePaddingBottom": 5,
 "bodyPaddingTop": 5,
 "closeButtonIconLineWidth": 5,
 "shadowHorizontalLength": 3,
 "children": [
  "this.image_uid6A40676A_7DEC_1E96_41DD_927EF3099D31_0",
  "this.htmlText_51E904CB_46F6_5B5B_41D1_34E13ECDB029"
 ],
 "scrollBarVisible": "rollOver",
 "footerBorderColor": "#000000",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.02vw",
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerBackgroundOpacity": 1,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "bodyPaddingBottom": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window14231"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_60F46BE9_476E_ED47_41C8_6C086E16D8F2_t.png",
 "id": "photo_60F46BE9_476E_ED47_41C8_6C086E16D8F2",
 "class": "Photo",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_60F46BE9_476E_ED47_41C8_6C086E16D8F2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Office Room",
 "height": 1080
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "IMG_20230329_090630_00_merged",
 "hfovMin": "150%",
 "id": "panorama_4EA691BD_4062_8966_41B0_30735096F17D",
 "class": "Panorama",
 "overlays": [
  "this.panorama_4EA6A1BD_4062_8966_41CC_1185EBC32F4F",
  "this.overlay_5940BDDF_4777_A57C_41C0_AD4F13CB8DE3",
  "this.overlay_59BA3DEF_477A_E55B_41B1_3FB395383E97",
  "this.overlay_65CED0D9_477A_FB47_41B8_2694B26610B2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 29.5,
   "yaw": -150.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF"
  },
  {
   "backwardYaw": -80.52,
   "yaw": 161.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56CA5080_41AF_871E_41BB_12406F67EA71"
  },
  {
   "backwardYaw": -110.79,
   "yaw": 1.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -0.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E2E1A2A_7DEC_1696_41BB_F59DDCE167E1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 112.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E61C98C_7DEC_1592_41D4_093996DC4CD2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_503C0050_41A2_873E_41A5_24C049FBA238_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "initialPosition": {
  "yaw": -129.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_69AECAB9_7DEC_17F2_41DD_552CF5C77863",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 8.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_6E3ECA12_7DEC_16B6_41DC_E80BE36E3984",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingBottom": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "propagateClick": false,
 "paddingRight": 0,
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "class": "UIComponent",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "UIComponent9043"
 },
 "paddingTop": 0,
 "visible": false,
 "paddingLeft": 0
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "paddingRight": 0,
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "class": "ZoomImage",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage9044"
 },
 "paddingTop": 0,
 "visible": false,
 "paddingLeft": 0
},
{
 "textDecoration": "none",
 "paddingLeft": 5,
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "propagateClick": false,
 "paddingRight": 5,
 "top": 10,
 "borderColor": "#000000",
 "rollOverIconColor": "#666666",
 "pressedIconColor": "#888888",
 "minWidth": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "paddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "label": "",
 "fontStyle": "normal",
 "paddingTop": 5,
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "CloseButton9045"
 },
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 131.51,
   "hfov": 17.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.55
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C, this.camera_64F2D8B9_7DEC_13F2_41C1_C108FB6B77FA); this.mainPlayList.set('selectedIndex', 5); this.showWindow(this.window_2DD7F75E_35DE_460D_41C8_56490CB7D847, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF6746C_356E_5A0C_41BC_28EE060676E5",
   "pitch": 3.55,
   "yaw": 131.51,
   "hfov": 17.89,
   "distance": 100
  }
 ],
 "id": "overlay_5AFF98C2_3742_0495_41C7_2CEF2F435363",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_1_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -100.69,
   "hfov": 21.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.71
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF5C46C_356E_5A09_41B7_62180DABC72B",
   "pitch": -20.71,
   "yaw": -100.69,
   "hfov": 21.39,
   "distance": 100
  }
 ],
 "id": "overlay_5AFE68C2_3742_0495_41A8_FEF9F7FA8C29",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 179.69,
   "hfov": 16.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.13
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7, this.camera_6502E8AC_7DEC_1392_41D4_3E849E1D9B23); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF57471_356E_5A14_41B4_8F09EF32082B",
   "pitch": -13.13,
   "yaw": 179.69,
   "hfov": 16.64,
   "distance": 100
  }
 ],
 "id": "overlay_5AFE38C2_3742_0495_41B6_CCD46162636C",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A5A4760_7DEC_1E92_41B3_47E5716EDDDB_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_29D7150E_35F1_DA0D_41CA_C642220447F5.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9018"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_2A1D15DB_35EE_DA14_41B9_091829167FAA",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText27706"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 169.2,
   "hfov": 28.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.17
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782, this.camera_6558A86B_7DEC_1296_41DD_471E04DCE04E); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51AA6DCF_41A2_B923_41C5_ED7D6ADF4231",
   "pitch": -1.17,
   "yaw": 169.2,
   "hfov": 28.63,
   "distance": 100
  }
 ],
 "id": "overlay_51A7E0A3_41A3_8763_41C4_A9D24BDF7CFC",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_1_HS_6_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -144.75,
   "hfov": 29.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.98
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51AA2DCF_41A2_B923_41CA_BBC2001D88DE",
   "pitch": -26.98,
   "yaw": -144.75,
   "hfov": 29.22,
   "distance": 50
  }
 ],
 "id": "overlay_51A710A3_41A3_8763_41C0_79225EFA09D2",
 "data": {
  "label": "Circle Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -112.67,
   "hfov": 24.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 35.76
  }
 ],
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6EC0DF66_7DF4_2E9F_41DF_6D1A8A9C98BC, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingBottom':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingTop':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#FFFFFF'}, true) } else { this.showPopupMedia(this.window_6E4E40B1_7DF4_13F5_41DC_D322105374E6, this.video_6BED61DD_7DF4_15B2_4195_0BFC076B76B9, this.PlayList_6A1FC7A4_7DEC_1D92_41D1_F4A67F772EF3, '80%', '80%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51AAFDD0_41A2_B93D_41C7_378E9C6957C5",
   "pitch": 35.76,
   "yaw": -112.67,
   "hfov": 24.65,
   "distance": 100
  }
 ],
 "id": "overlay_51A750A3_41A3_8763_41AA_07B16B2B5D91",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_51A760A3_41A3_8763_41B1_C114D11296F3",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -158.91,
   "hfov": 25.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.33
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412, this.camera_69E2EA66_7DEC_169E_41AF_7166806A4635); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_777F44F9_47DE_5B47_41D1_CA654E2F3AB7",
   "pitch": -13.33,
   "yaw": -158.91,
   "hfov": 25.71,
   "distance": 100
  }
 ],
 "id": "overlay_6C3A464B_47DA_675B_41BD_3855E2978A6C",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -68.26,
   "hfov": 29.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.47
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A, this.camera_69FBAA5A_7DEC_16B6_41C7_53620BE301A1); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_777F84F9_47DE_5B47_419E_9E23C2D27EB9",
   "pitch": -12.47,
   "yaw": -68.26,
   "hfov": 29.76,
   "distance": 50
  }
 ],
 "id": "overlay_6C3A764B_47DA_675B_416C_4613E9C965BA",
 "data": {
  "label": "Arrow 06a Right"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_6C3A864C_47DA_675D_4198_3A9CDC32700F",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_550E69D2_40E2_B93D_41B1_88E505103054",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 175.3,
   "hfov": 19.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.49
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF, this.camera_6524E892_7DEC_13B6_41C8_409370AABACF); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6D7FE53C_4769_A53D_41BD_37CF2C5DD49C",
   "pitch": -17.49,
   "yaw": 175.3,
   "hfov": 19.44,
   "distance": 100
  }
 ],
 "id": "overlay_6546C24B_477E_BF5B_41C9_32F53144F84B",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A4F6777_7DEC_1D7E_41D7_2B3111ACAEE9_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_67E96083_476E_5BC4_41B9_F2B7FD710D94.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9031"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_592DA370_476E_DD44_41CE_3D088AF8C335",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText33974"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A480774_7DEC_1D72_41C3_64EB7DD6E99C_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_5379B8B7_46FA_6BCC_41C4_6C45D7FFB1AB.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9028"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_531BBD19_46FB_AAC7_41BE_F2887FC3101C",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText11180"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 105.09,
   "hfov": 37.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.42
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51000067_40A2_87E3_41D0_EFAD36AB5BD1",
   "pitch": -24.42,
   "yaw": 105.09,
   "hfov": 37.78,
   "distance": 50
  }
 ],
 "id": "overlay_5473B931_40E2_B97F_41CD_39FCA791CE26",
 "data": {
  "label": "Circle Arrow 01a Left-UP"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 54.35,
   "hfov": 26.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.21
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_08E8CB0C_2B46_05AD_41B0_C5E404AB8A12, this.camera_6885E36D_2DC2_046F_41C1_AD54B36934C3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51004068_40A2_87ED_41CB_1721B6E935D6",
   "pitch": -43.21,
   "yaw": 54.35,
   "hfov": 26.24,
   "distance": 100
  }
 ],
 "id": "overlay_5473A931_40E2_B97F_41B9_EE20203A5733",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_54725931_40E2_B97F_41C2_1B43BB76EF04",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -130.82,
   "hfov": 23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.23
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56C3B62F_40A7_8B63_41AF_0091007B755A, this.camera_65C737E9_7DEC_1D92_41D3_511D70FB3811); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5103606D_40A2_87E6_41C9_7B1180FEED1E",
   "pitch": -20.23,
   "yaw": -130.82,
   "hfov": 23,
   "distance": 100
  }
 ],
 "id": "overlay_55EF5CF9_40A2_98EF_41AF_897699136286",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_55EF2CF9_40A2_98EF_41D1_12D0D3A053EF",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 12.63,
   "hfov": 18.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.15
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618, this.camera_69C2AA8A_7DEC_1796_4189_F600CB7A4DD6); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51AFFDD4_41A2_B925_41AB_3024AB4FAADA",
   "pitch": -22.15,
   "yaw": 12.63,
   "hfov": 18.38,
   "distance": 100
  }
 ],
 "id": "overlay_56BCC1AC_41A2_8966_41D0_1BC2ED7AF28D",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -165,
   "hfov": 17.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.25
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA, this.camera_69CF7A96_7DEC_17BE_4195_45408D84B07F); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51AFBDD4_41A2_B925_41C3_D0FA31024324",
   "pitch": -23.25,
   "yaw": -165,
   "hfov": 17.98,
   "distance": 100
  }
 ],
 "id": "overlay_56BF21AC_41A2_8966_41C9_62F3254E0157",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -31.66,
   "hfov": 20.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.32
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_1D1459DE_36D3_CA0D_41CA_A7DC2F2C08BE, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51AE1DD4_41A2_B925_41D0_A7D3A41F1FB1",
   "pitch": 7.32,
   "yaw": -31.66,
   "hfov": 20.77,
   "distance": 100
  }
 ],
 "id": "overlay_56BF11AC_41A2_8966_41A8_78828B16CBFB",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_56BF61AC_41A2_8966_41BE_AE1D9FAE2112",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 50.11,
   "hfov": 21.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.76
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0, this.camera_64E348C6_7DEC_139E_41D8_B14797544BB2); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F9F4494_356E_5A1C_41B2_FD5B58671C4C",
   "pitch": -24.76,
   "yaw": 50.11,
   "hfov": 21.51,
   "distance": 100
  }
 ],
 "id": "overlay_15E21E42_3532_4674_41C9_B4341A7323B4",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -53.33,
   "hfov": 24.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.51
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56C3B62F_40A7_8B63_41AF_0091007B755A, this.camera_64CF78EB_7DEC_1396_41D7_AA295D03B214); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5107B066_40A2_87E5_41A2_E6F3C9150467",
   "pitch": -18.51,
   "yaw": -53.33,
   "hfov": 24.29,
   "distance": 100
  }
 ],
 "id": "overlay_54E563E6_40A3_88E2_41A0_E8A4B4BE5CF6",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_54E693E6_40A3_88E2_41CC_72F7DEB21B6D",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -113.38,
   "hfov": 23.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.22
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56CA5080_41AF_871E_41BB_12406F67EA71, this.camera_69712ADC_7DEC_17B2_41C0_FC3907AAE70A); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51069065_40A2_87E7_41CA_F528EE4E2D26",
   "pitch": -15.22,
   "yaw": -113.38,
   "hfov": 23.39,
   "distance": 100
  }
 ],
 "id": "overlay_54B646ED_40A2_88E6_41C6_02A410D4D503",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 65.5,
   "hfov": 23.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.51
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4, this.camera_697D3AE8_7DEC_1792_41BE_FD1FD541B561); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51073066_40A2_87E5_41A4_06141C51045E",
   "pitch": -18.51,
   "yaw": 65.5,
   "hfov": 23.24,
   "distance": 100
  }
 ],
 "id": "overlay_54B676ED_40A2_88E6_41B6_3C65D3F32BEC",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_54B666ED_40A2_88E6_41B6_5DB6C3AD7861",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 29.07,
   "hfov": 32.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -56.58
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_503C0050_41A2_873E_41A5_24C049FBA238, this.camera_6E5D09CA_7DEC_1596_41D1_55340729C16A); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51926FBB_46AE_A53B_41B2_CDE166CC76DA",
   "pitch": -56.58,
   "yaw": 29.07,
   "hfov": 32.23,
   "distance": 100
  }
 ],
 "id": "overlay_551D96FE_46AF_A73D_41C9_FE18CAC35C3C",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_1_HS_1_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -76.29,
   "hfov": 22.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.06
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C, this.camera_6E57B9BE_7DEC_15EE_41AF_BBA8F55955B9); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51921FBB_46AE_A53B_41B0_2301E8C742D5",
   "pitch": -5.06,
   "yaw": -76.29,
   "hfov": 22.01,
   "distance": 50
  }
 ],
 "id": "overlay_551D86FE_46AF_A73D_41C4_35E30B44C153",
 "data": {
  "label": "Arrow 05b Left"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_551D66FE_46AF_A73D_41D0_E279A92D56CC",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 2.41,
   "hfov": 21.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.23
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412, this.camera_6E50D9B2_7DEC_15F6_41A5_749E649CA8FC); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5103406B_40A2_87E3_41CA_DA5D73EE8F9F",
   "pitch": -20.23,
   "yaw": 2.41,
   "hfov": 21.2,
   "distance": 100
  }
 ],
 "id": "overlay_56C3862F_40A7_8B7E_41B8_1BA6D4E50712",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -177.28,
   "hfov": 22.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.12
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_54E533E5_40A3_88E6_41AB_542C24578E8A, this.camera_6E6AA9A6_7DEC_159E_41C4_69E1F207BAE8); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5103F06C_40A2_87E5_41A8_CE84FC89C6F9",
   "pitch": -21.12,
   "yaw": -177.28,
   "hfov": 22.1,
   "distance": 100
  }
 ],
 "id": "overlay_56C37634_40A7_8B65_41C8_446D2A7BD38D",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_1_HS_2_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -176.34,
   "hfov": 26.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.04
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0, this.camera_6E67D999_7DEC_15B2_41D6_B4AE08AB1A33); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_511C706C_40A2_87E5_41C9_15C50B4C38BE",
   "pitch": 3.04,
   "yaw": -176.34,
   "hfov": 26.44,
   "distance": 50
  }
 ],
 "id": "overlay_56C36634_40A7_8B65_41B3_28C3FE4E156C",
 "data": {
  "label": "Arrow 05a Right"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_56C35635_40A7_8B67_41B9_42B2AF6E4822",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "items": [
  {
   "media": "this.album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_0",
   "camera": {
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "duration": 5000,
    "targetPosition": {
     "x": "0.30",
     "class": "PhotoCameraPosition",
     "y": "0.74",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -56.06,
   "hfov": 25.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -50.97
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6, this.camera_699BFAC4_7DEC_1792_4194_25A400F1CA72); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F802493_356E_5A14_419C_85D2DC2DA9A1",
   "pitch": -50.97,
   "yaw": -56.06,
   "hfov": 25.96,
   "distance": 50
  }
 ],
 "id": "overlay_14B72C79_3532_4A17_41A0_8FB31137F75C",
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 0.37,
   "hfov": 20.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.13
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15E20E42_3532_4674_41A2_17FF096E6F9B, this.camera_69AECAB9_7DEC_17F2_41DD_552CF5C77863); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F9FD493_356E_5A14_41C8_9A0C8B3BE9F6",
   "pitch": -34.13,
   "yaw": 0.37,
   "hfov": 20.06,
   "distance": 100
  }
 ],
 "id": "overlay_14B73C79_3532_4A17_41C0_B44BB926ABE3",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -164.6,
   "hfov": 18.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.49
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5184FFC1_46AE_A547_41CC_8BC9771C40E2",
   "pitch": -2.49,
   "yaw": -164.6,
   "hfov": 18.73,
   "distance": 100
  }
 ],
 "id": "overlay_55D8558C_46AA_65DD_41AD_9505F2FCF854",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -67.69,
   "hfov": 29.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.45
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5120EEF3_41AD_F8E2_4196_44717C80300D, this.camera_65DCA7DC_7DEC_1DB2_41AD_66122B06A960); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51875FC1_46AE_A547_41BD_ECC032D76C7D",
   "pitch": -43.45,
   "yaw": -67.69,
   "hfov": 29.13,
   "distance": 50
  }
 ],
 "id": "overlay_55D8458C_46AA_65DD_41BD_2756B4D5A450",
 "data": {
  "label": "Circle Arrow 01b Left"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_55D8658C_46AA_65DD_41D0_AD994FC0ECCA",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 13.8,
   "hfov": 19.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.54
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_5DDD45BD_46E9_A53C_41C0_5F0B87EF87CF, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67728293_46D9_FFC4_41C0_16A8780C4F22",
   "pitch": 5.54,
   "yaw": 13.8,
   "hfov": 19.75,
   "distance": 100
  }
 ],
 "id": "overlay_5F2C86D0_46EA_A745_41D0_B3E62EBECA44",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -53.26,
   "hfov": 10.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.91
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_5F55E491_46D7_BBC7_41BC_34C3832B1EDB, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67723293_46D9_FFC4_41C6_DD97C5A029A1",
   "pitch": -0.91,
   "yaw": -53.26,
   "hfov": 10.78,
   "distance": 100
  }
 ],
 "id": "overlay_5F2DC748_46D6_A545_41CB_0F3DEABA2ED8",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 90.33,
   "hfov": 19.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.51
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_5DFB1E28_46D6_66C4_4190_3C3985608A54, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_677D4294_46D9_FFCC_41A9_A87F598C25F7",
   "pitch": 4.51,
   "yaw": 90.33,
   "hfov": 19.78,
   "distance": 100
  }
 ],
 "id": "overlay_5DA41E54_46D6_674C_41C0_D63060871BE6",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 175.71,
   "hfov": 25.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.79
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03, this.camera_68BE5B99_7DEC_15B2_41CF_641DB8DC1736); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5102D06B_40A2_87E3_41BC_068C4110229A",
   "pitch": -16.79,
   "yaw": 175.71,
   "hfov": 25.3,
   "distance": 100
  }
 ],
 "id": "overlay_55D10D2C_40E7_9965_41B2_A25BFC867F9C",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_55D11D2C_40E7_9965_41CF_7B1857CC04EC",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A226796_7DEC_1DBE_41D1_C2DD17EC79FC_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_53F5B579_46F9_A544_41D1_5C2F0B2C07F6.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9039"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_5E1F6EEE_46EA_A75C_41BB_7EC354ADF1C2",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText20972"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -11.11,
   "hfov": 20.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.71
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A, this.camera_64D098D2_7DEC_13B6_41D8_2B5BA547E605); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_77794501_47DE_5AC7_41B5_E6ABEF5871A3",
   "pitch": -20.71,
   "yaw": -11.11,
   "hfov": 20.62,
   "distance": 100
  }
 ],
 "id": "overlay_6E08071B_47EB_E6FB_41C8_F7D7E98109FE",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 169.53,
   "hfov": 18.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.77
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59, this.camera_64C158DF_7DEC_13AE_41B6_B18E16FD9CD4); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7779E501_47DE_5AC7_41C1_C3018EEE950B",
   "pitch": -18.77,
   "yaw": 169.53,
   "hfov": 18.52,
   "distance": 100
  }
 ],
 "id": "overlay_6E08271B_47EB_E6FB_41B2_249146294161",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_6E09D71B_47EB_E6FB_41BF_5EAB679FAE65",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -74.5,
   "hfov": 22.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.31
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_5ADEDDDC_4769_A57C_41CE_0968F7AC5A97, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_777A7501_47DE_5AC7_41B1_8D0285A36E67",
   "pitch": 11.31,
   "yaw": -74.5,
   "hfov": 22.69,
   "distance": 100
  }
 ],
 "id": "overlay_6E09C71B_47EB_E6FB_41BF_0FB35CAD8B0B",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -123.23,
   "hfov": 22.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.99
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_5959C2A0_476A_5FC5_41B6_497677CE6E92, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_777AC502_47DE_5AC5_41D1_114E66FA438D",
   "pitch": 11.99,
   "yaw": -123.23,
   "hfov": 22.63,
   "distance": 100
  }
 ],
 "id": "overlay_6E09971C_47EB_E6FD_41BD_84E3514B4220",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -7.2,
   "hfov": 20.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.12
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782, this.camera_68FCBB5E_7DEC_16AE_41CF_E541020BDA96); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51BAE3FC_41A3_88E5_41CB_7C94441B3FA1",
   "pitch": -21.12,
   "yaw": -7.2,
   "hfov": 20.31,
   "distance": 100
  }
 ],
 "id": "overlay_515309C2_41AD_991D_41C8_EA7097287338",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 179.79,
   "hfov": 18.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.76
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C, this.camera_68E8EB6A_7DEC_1696_41C7_A0CD9DFAC2A7); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51BA83FC_41A3_88E5_41BC_1904ED604ADA",
   "pitch": -10.76,
   "yaw": 179.79,
   "hfov": 18.41,
   "distance": 100
  }
 ],
 "id": "overlay_515319C3_41AD_9923_41C6_E3BC9CD84A84",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -139.62,
   "hfov": 18.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.75
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1, this.camera_68D6EB75_7DEC_1572_41D7_9AB50446BBAE); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51BA43FC_41A3_88E5_41CF_04EE7CF523EE",
   "pitch": -12.75,
   "yaw": -139.62,
   "hfov": 18.65,
   "distance": 50
  }
 ],
 "id": "overlay_515329C3_41AD_9923_41D0_A22F90C17954",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_515339C3_41AD_9923_41BC_ED8C6EA3A588",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A3E778D_7DEC_1D92_41CA_0B1C0886BCEB_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_53F5D90C_46F9_AADC_419B_C4301467C626.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9036"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_5F562491_46D7_BBC7_41A8_9B482D36A6D7",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText25385"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 159.1,
   "hfov": 18.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.69
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB, this.camera_69870AD0_7DEC_17B2_41C9_1086FA9AD999); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_77798500_47DE_5AC5_41B9_4BDA2E9B0A14",
   "pitch": -10.69,
   "yaw": 159.1,
   "hfov": 18.69,
   "distance": 100
  }
 ],
 "id": "overlay_6E23804C_47EB_BB5C_41A5_05262677C60E",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_6E23D04C_47EB_BB5C_41C6_9C42AF739856",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 33.77,
   "hfov": 19.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.63
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_592DE370_476E_DD44_4171_FEE5B82A97AE, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_777A7500_47DE_5AC5_4182_6509E49BACA0",
   "pitch": 8.63,
   "yaw": 33.77,
   "hfov": 19.89,
   "distance": 100
  }
 ],
 "id": "overlay_6E23C04C_47EB_BB5C_41CC_A0A5155D14B2",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A59275E_7DEC_1EAE_41C8_A4B447857B3B_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_2FB5CFE7_35F2_C63B_41BB_92207220D6DD.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9014"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_2C5721DA_35FE_BA15_41A0_AE91364F4110",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText20224"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -73.37,
   "hfov": 22.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.7
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4, this.camera_69D67A7E_7DEC_176E_41DA_BCA9D825E211); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51B95DDC_41A2_B925_41A4_87A7E50ACE09",
   "pitch": -15.7,
   "yaw": -73.37,
   "hfov": 22.81,
   "distance": 100
  }
 ],
 "id": "overlay_5018D0D4_41A3_8726_41C8_B9C8E92E534C",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5018E0D4_41A3_8726_418A_603576E43F5C",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A3ED78C_7DEC_1D92_41D0_01C5B4A2016A_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_53F4873F_46F9_A53C_41BB_CB90C9878165.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9035"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_5DDB55BD_46E9_A53C_41CC_0905790E796C",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText22636"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_1_HS_0_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 137.45,
   "hfov": 32.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.67
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C, this.camera_656AC85E_7DEC_12AE_41DA_535BD022580B); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51044063_40A2_87E3_41CD_CB8F6F6FBB63",
   "pitch": -28.67,
   "yaw": 137.45,
   "hfov": 32.16,
   "distance": 50
  }
 ],
 "id": "overlay_54327A0B_40E2_9B23_41C5_F7208A06A3D5",
 "data": {
  "label": "Arrow 05b Right"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_54320A0B_40E2_9B23_41BC_9D33C9AA4A1C",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid6A5FE762_7DEC_1E96_41C3_5CF602A359A1",
 "id": "viewer_uid6A5FE762_7DEC_1E96_41C3_5CF602A359A1VideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A54F756_7DEC_1EBE_41D9_5DA1742F11B5_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_29D69A13_35F2_4E1B_41C7_3219C3C50CF2.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9013"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_29553E05_35F2_49FF_41AC_B772EF3672DF",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText26183"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -61.35,
   "hfov": 33.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.81
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51A37DD7_41A2_B923_41C8_9B3F14BC8837",
   "pitch": -32.81,
   "yaw": -61.35,
   "hfov": 33.43,
   "distance": 50
  }
 ],
 "id": "overlay_56CA6080_41AF_871E_41C2_6A56F1C8BF5A",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_1_HS_2_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 143.11,
   "hfov": 33.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.55
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51A3DDD7_41A2_B923_4198_59E513663149",
   "pitch": -30.55,
   "yaw": 143.11,
   "hfov": 33.16,
   "distance": 50
  }
 ],
 "id": "overlay_56CA7080_41AF_871E_41C4_9736224731EE",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_1_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -7.34,
   "hfov": 21.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.18
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_54B596ED_40A2_88E6_41B7_688552C1C01E, this.camera_6E0E8A4E_7DEC_16AE_41D3_5CA7E4CDC740); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51A3EDD7_41A2_B923_419C_8C63A7E8E37C",
   "pitch": -20.18,
   "yaw": -7.34,
   "hfov": 21.72,
   "distance": 100
  }
 ],
 "id": "overlay_56CA0080_41AF_871E_41C9_E7B25352DBFA",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_56CA2080_41AF_871E_41BE_E6ABE9CBB57F",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0_HS_5_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -80.52,
   "hfov": 25.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.16
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4EA691BD_4062_8966_41B0_30735096F17D, this.camera_6E042A42_7DEC_1696_41B0_F2569D83CBDC); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6D49A536_4769_BACD_41C4_97C219860076",
   "pitch": -21.16,
   "yaw": -80.52,
   "hfov": 25.34,
   "distance": 50
  }
 ],
 "id": "overlay_6141E394_477A_5DCC_41CA_A712DBB69A59",
 "data": {
  "label": "Circle Arrow 01c Right"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A313779_7DEC_1D72_41C1_5136DA7306AF_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_67E96083_476E_5BC4_41B9_F2B7FD710D94.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9033"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_5959929F_476A_5FFB_41A0_C7BFE509B397",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText33974"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A27F798_7DEC_1DB2_41CB_B5B43596829F_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_1261A9DC_3552_4A0D_41C8_A66642AEAE94.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9042"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_5E6C4957_46EE_ED4C_41CC_CCCAE59CF7AB",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText16085"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A47176D_7DEC_1E92_41B3_288389EA7F40_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_51708766_40AE_89E5_41D0_94EF3727732F.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9026"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_51CC7DD5_40A3_9926_41C1_7C1B609B9194",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText9559"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A4C7777_7DEC_1D7E_41AF_136BB6C5E072_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_60F46BE9_476E_ED47_41C8_6C086E16D8F2.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9030"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_614F8A5F_476E_AF7C_41C0_5CFFED805FD7",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText53342"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -14.48,
   "hfov": 15.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.39
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C, this.camera_65739844_7DEC_1292_41DE_85526A351668); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_511AB076_40A2_87E5_41CB_D160700110D3",
   "pitch": -30.39,
   "yaw": -14.48,
   "hfov": 15.22,
   "distance": 100
  }
 ],
 "id": "overlay_55F8E351_40DD_893E_41CD_B883B175C4BA",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 160.68,
   "hfov": 16.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.91
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1, this.camera_657CB851_7DEC_12B2_41D7_E117499C891C); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_511AD077_40A2_87E3_41CB_7AD71F4A666D",
   "pitch": -22.91,
   "yaw": 160.68,
   "hfov": 16.26,
   "distance": 100
  }
 ],
 "id": "overlay_55F81351_40DD_893E_41C9_0A372694240F",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_55F80351_40DD_893E_41CB_285EB625A4D2",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 3.23,
   "hfov": 10.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.39
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_5E613EEE_46EA_A75C_41A9_92FE352A2D0A, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_677E529B_46D9_FFC4_41A0_B08E26345B23",
   "pitch": -1.39,
   "yaw": 3.23,
   "hfov": 10.78,
   "distance": 100
  }
 ],
 "id": "overlay_5E392A35_46EA_AECC_41CF_A90729084BA7",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 92.12,
   "hfov": 17.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.05
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_68691A9A_47AA_AFC5_41D0_58295347C4D9",
   "pitch": -14.05,
   "yaw": 92.12,
   "hfov": 17.12,
   "distance": 100
  }
 ],
 "id": "overlay_6DC04BD4_47AA_6D4D_41BC_A8C5EBC31EE1",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -125.83,
   "hfov": 20.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.32
  }
 ],
 "areas": [
  {
   "click": "this.setCameraSameSpotAsMedia(this.camera_6E32A9FA_7DEC_1576_41B3_0FA2E7A0CA37, this.panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24); this.startPanoramaWithCamera(this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD, this.camera_6E32A9FA_7DEC_1576_41B3_0FA2E7A0CA37); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_68694A9A_47AA_AFC5_41B6_9A9B48947779",
   "pitch": -23.32,
   "yaw": -125.83,
   "hfov": 20.08,
   "distance": 50
  }
 ],
 "id": "overlay_6DC07BD4_47AA_6D4D_41C1_4FD5F0CB1A05",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -138.85,
   "hfov": 16.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.88
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_2A16D5DD_35EE_DA0C_4195_9F6663D606DB, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_68698A9A_47AA_AFC5_4199_FAC63290BB08",
   "pitch": 6.88,
   "yaw": -138.85,
   "hfov": 16.16,
   "distance": 100
  }
 ],
 "id": "overlay_6DC06BD4_47AA_6D4D_41A3_6BB190DAD22F",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_6DC19BD4_47AA_6D4D_41C1_BBF1072236D3",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A240797_7DEC_1DBE_41D3_59A49E4EB112_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_53F5220E_46FA_5EDC_41A7_FE8699D19207.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9040"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_514972D5_46E9_DF4F_41D0_914C9940A6EF",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText16085"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_55912C66_40EE_9FE2_41CB_2CFDBCE0C2ED",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 29.5,
   "hfov": 18.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.29
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4EA691BD_4062_8966_41B0_30735096F17D, this.camera_6969DAF3_7DEC_1776_41CF_5C04CFCB1962); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6D40E53C_4769_A53D_41C4_944B884C4A1F",
   "pitch": -22.29,
   "yaw": 29.5,
   "hfov": 18.62,
   "distance": 100
  }
 ],
 "id": "overlay_672D34D1_477A_7B44_41BB_85DEAE069192",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -153.06,
   "hfov": 16.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.8
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E, this.camera_69533AFF_7DEC_176D_41B8_D0F59CF921CB); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6D40753C_4769_A53D_41C1_3A40F2B25664",
   "pitch": -16.8,
   "yaw": -153.06,
   "hfov": 16.9,
   "distance": 100
  }
 ],
 "id": "overlay_6667978F_477F_A5DC_41CA_B173295ED16C",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 132.89,
   "hfov": 22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.78
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB, this.camera_689BBBB0_7DEC_15F2_41D3_9B10987006D8); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_777864F9_47DE_5B47_41B6_7F7A6AB1C489",
   "pitch": -21.78,
   "yaw": 132.89,
   "hfov": 22,
   "distance": 100
  }
 ],
 "id": "overlay_6F5D77CD_47EA_A55F_4183_CDD44DCFE5D9",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -52.85,
   "hfov": 20.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.83
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22, this.camera_68ADCBA5_7DEC_1592_41BA_58C08C48B66C); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_777884FA_47DE_5B45_41D1_3A9F680CDF11",
   "pitch": -17.83,
   "yaw": -52.85,
   "hfov": 20.52,
   "distance": 50
  }
 ],
 "id": "overlay_6F5FF7CD_47EA_A55F_41C7_731F3E2C4207",
 "data": {
  "label": "Arrow 02b Left"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_6F5FC7CD_47EA_A55F_41C8_37DD3C01B0EB",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 3.16,
   "hfov": 29.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 28.74
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_614DFA5E_476E_AF7C_41B5_57413B00FB10, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_777934FA_47DE_5B45_41CA_881C8F2091CD",
   "pitch": 28.74,
   "yaw": 3.16,
   "hfov": 29.43,
   "distance": 100
  }
 ],
 "id": "overlay_6F5FD7CD_47EA_A55F_41A3_928DA9A5EF3F",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 48.98,
   "hfov": 17.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.42
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0, this.camera_659AB82B_7DEC_1296_41C3_949BADE59D84); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51AE9DD5_41A2_B927_41C8_D9A958338387",
   "pitch": -19.42,
   "yaw": 48.98,
   "hfov": 17.68,
   "distance": 100
  }
 ],
 "id": "overlay_56A7DFE8_41A5_98ED_41C9_92013A08DEE2",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -133.24,
   "hfov": 16.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.17
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E, this.camera_65879838_7DEC_12F2_4128_678C0E62EF00); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51A15DD5_41A2_B927_41A7_C4F7DDAB7DBF",
   "pitch": -18.17,
   "yaw": -133.24,
   "hfov": 16.51,
   "distance": 100
  }
 ],
 "id": "overlay_56A7EFE8_41A5_98ED_4198_A41931C9FB25",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 11.93,
   "hfov": 20.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.41
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_1CB826D3_36D2_C614_41A3_65E579466897, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51A11DD5_41A2_B927_419E_3B5A186446D3",
   "pitch": 10.41,
   "yaw": 11.93,
   "hfov": 20.59,
   "distance": 100
  }
 ],
 "id": "overlay_56A7FFE8_41A5_98ED_41B0_03FAF51A71A7",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_56A70FE8_41A5_98ED_41B5_E686833D163F",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A246798_7DEC_1DB2_41D7_CF67121D74B7_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_53F563B8_46FA_5DC4_41CE_C04626265226.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9041"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_5125F6DA_46EE_A745_41C9_27EB9F64836C",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText16085"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 162.39,
   "hfov": 40.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.06
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C, this.camera_69410B0B_7DEC_1696_41D1_75DF285291D5); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51A4EDDA_41A2_B92D_419D_229998BD1D7E",
   "pitch": -32.06,
   "yaw": 162.39,
   "hfov": 40.32,
   "distance": 50
  }
 ],
 "id": "overlay_503C5050_41A2_873E_41CD_DE9FEBCAD330",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -133.72,
   "hfov": 32.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -53.44
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5120EEF3_41AD_F8E2_4196_44717C80300D, this.camera_694D7B17_7DEC_16BE_41DE_61DDEEA4A3A0); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51A75DDA_41A2_B92D_41D1_153FEAA96202",
   "pitch": -53.44,
   "yaw": -133.72,
   "hfov": 32.74,
   "distance": 100
  }
 ],
 "id": "overlay_503C4050_41A2_873E_41A6_9832B0A37CA7",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_503C6050_41A2_873E_41B1_EE06DB188545",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 166.29,
   "hfov": 22.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.55
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF9A469_356E_5A34_41C6_82B9B85F9784",
   "pitch": -12.55,
   "yaw": 166.29,
   "hfov": 22.04,
   "distance": 100
  }
 ],
 "id": "overlay_23C892D7_3536_BE1B_41C7_9307724EA237",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 83.81,
   "hfov": 20.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.67
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F, this.camera_690ECB52_7DEC_16B6_41D6_5F062DF5F59C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF97469_356E_5A34_41A4_B7B075C9EAD1",
   "pitch": -14.67,
   "yaw": 83.81,
   "hfov": 20.79,
   "distance": 100
  }
 ],
 "id": "overlay_23C8A2D7_3536_BE1B_4191_07A77F127C03",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 118.26,
   "hfov": 17.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.41
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_2F8F0DE9_35F2_4A34_41C0_73EF0AAC6C9C, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF9146A_356E_5A34_41C3_CDE11304406D",
   "pitch": 10.41,
   "yaw": 118.26,
   "hfov": 17.08,
   "distance": 100
  }
 ],
 "id": "overlay_2C2ABB44_35F2_4E7D_41AC_B4DF4C850CBA",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -97.12,
   "hfov": 23.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 15.08
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_28755315_35F2_5E1F_41C6_A02B5B1B2073, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF8946A_356E_5A34_41C1_D4C107F6CB3A",
   "pitch": 15.08,
   "yaw": -97.12,
   "hfov": 23.4,
   "distance": 100
  }
 ],
 "id": "overlay_2E61B3EF_35F2_DE0C_41C5_DF84C0F72069",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A45576C_7DEC_1E92_41D6_992D4D64ACB8_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_1261A9DC_3552_4A0D_41C8_A66642AEAE94.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9025"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_1CBAC6D3_36D2_C614_41C2_331984E8A120",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText50569"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 7.1,
   "hfov": 17.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.12
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412, this.camera_6926BB2F_7DEC_16EE_4194_74522E113EA4); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_510E705E_40A2_8725_4198_02AF4658D044",
   "pitch": 1.12,
   "yaw": 7.1,
   "hfov": 17.09,
   "distance": 100
  }
 ],
 "id": "overlay_4DF21CB3_407E_9F62_41BC_9D01B4A9EBA2",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -67.49,
   "hfov": 37.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.87
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6, this.camera_693B6B23_7DEC_1696_41DE_9908BD57EF86); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_510EB05E_40A2_8725_4196_C4DC11EBD090",
   "pitch": -23.87,
   "yaw": -67.49,
   "hfov": 37.41,
   "distance": 50
  }
 ],
 "id": "overlay_4DF22CB3_407E_9F62_41A5_CFF47245E7A4",
 "data": {
  "label": "Arrow 06a Right"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_4DF27CB3_407E_9F62_41C1_D23DA1E21D14",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 90.29,
   "hfov": 20.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 22.58
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_538B32E4_46FA_5F4C_4199_60C6BE4CCFD4, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DEC4F76_46FF_A54D_41C2_C75C0A55D0BE",
   "pitch": 22.58,
   "yaw": 90.29,
   "hfov": 20.86,
   "distance": 100
  }
 ],
 "id": "overlay_52126C99_46FB_ABC7_41B5_F7F16F6CCCE5",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A42276B_7DEC_1E96_41DE_4792D61DF9EC_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_1261A9DC_3552_4A0D_41C8_A66642AEAE94.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9024"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_1D1169D8_36D3_CA15_41A3_BD4579958554",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText50569"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -65.27,
   "hfov": 19.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.02
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_54B596ED_40A2_88E6_41B7_688552C1C01E, this.camera_68877BBC_7DEC_15F2_41DC_4CA46D620184); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51A61DDB_41A2_B923_41D1_2B5980D2C6E4",
   "pitch": -22.02,
   "yaw": -65.27,
   "hfov": 19.42,
   "distance": 100
  }
 ],
 "id": "overlay_5071C8A7_41A2_8763_41A4_41D4E1B9F035",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 117.79,
   "hfov": 23.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.2
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B, this.camera_68779BC8_7DEC_1592_41DC_27B16D7DD0CE); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51A6CDDB_41A2_B923_41D0_B31926797014",
   "pitch": -19.2,
   "yaw": 117.79,
   "hfov": 23.93,
   "distance": 100
  }
 ],
 "id": "overlay_5071D8A7_41A2_8763_41BD_6CE3F28F6382",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_507188A8_41A2_876E_41CE_BA3024BB0558",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A4B6775_7DEC_1D72_41A2_5C5734104694_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_53B6A6DC_46FA_677C_41D1_9094281C666D.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9029"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_538AE2E5_46FA_5F4C_41B2_C45B34998B14",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText9471"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -37.42,
   "hfov": 22.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.57
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6, this.camera_65376885_7DEC_1392_41DD_D9325C3D27A8); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF36473_356E_5A14_41C9_592CD974C745",
   "pitch": -18.57,
   "yaw": -37.42,
   "hfov": 22.26,
   "distance": 100
  }
 ],
 "id": "overlay_1424D199_3552_DA14_41B6_D8B321F62213",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_1_HS_3_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 179.3,
   "hfov": 21.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.32
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0, this.camera_65492878_7DEC_1372_41D9_81A3B7053FCE); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF30474_356E_5A1C_41AF_778A486298FF",
   "pitch": 8.32,
   "yaw": 179.3,
   "hfov": 21.87,
   "distance": 50
  }
 ],
 "id": "overlay_1424E199_3552_DA14_41C2_4DED915935F5",
 "data": {
  "label": "Arrow 06c Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -17.23,
   "hfov": 17.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.67
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_103E6DF6_3553_CA1D_41C9_721536F2CF0C, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_04935AFE_36D6_4E0C_41BF_763E18B5F846",
   "pitch": 10.67,
   "yaw": -17.23,
   "hfov": 17.34,
   "distance": 100
  }
 ],
 "id": "overlay_12F2F8BD_3551_CA0F_41BA_87F583328CDF",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -56,
   "hfov": 15.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.66
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_51F744CA_46F6_5B45_41C5_67CDC1B5AA4B, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679BE26F_46D9_FF57_41C7_DCD649D789FA",
   "pitch": 9.66,
   "yaw": -56,
   "hfov": 15.5,
   "distance": 100
  }
 ],
 "id": "overlay_5E753A45_46F6_EF4C_41C2_5E98698C7DC6",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A3C578B_7DEC_1D96_41D7_540FF49254F7_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_61D945E1_476A_A544_4182_075295AFB6D0.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9034"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_6F2A2CE3_476A_6B44_41BE_98FED013BC55",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText51188"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A3F678D_7DEC_1D92_4193_E363E7F472B6_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_53F56AC5_46F9_AF4C_41D1_4FD74C37DC64.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9037"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_5DF8FE28_46D6_66C4_41CB_FD6B697C71BA",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText22636"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A23E790_7DEC_1DB2_41C9_BF80854EDA47_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_53F5B579_46F9_A544_41D1_5C2F0B2C07F6.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9038"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_63371CE5_4777_EB4F_4194_56EB1208A257",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText49168"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A419768_7DEC_1E92_41CB_CF4FFCC74059_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_10E8EB8B_3552_4E0B_41BD_B8737F552A8A.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9021"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_106CC2CE_3552_DE0D_41C3_DF77ACA1DB96",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText38529"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 42.08,
   "hfov": 23.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.18
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22, this.camera_6E4669E1_7DEC_1592_41DB_5B964D922606); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_510FA05F_40A2_8723_4183_CA023EA35453",
   "pitch": -13.18,
   "yaw": 42.08,
   "hfov": 23.6,
   "distance": 100
  }
 ],
 "id": "overlay_4DFE40EE_407E_88E2_41C8_0F7E4DC2D6CD",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -47.35,
   "hfov": 22.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.14
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56C3B62F_40A7_8B63_41AF_0091007B755A, this.camera_6E4019D6_7DEC_15BE_41AC_E3741ECF715B); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_510FD05F_40A2_8723_41CB_A547D4DE2161",
   "pitch": -13.14,
   "yaw": -47.35,
   "hfov": 22.8,
   "distance": 100
  }
 ],
 "id": "overlay_4DFEB0EE_407E_88E2_41C6_9FBB6D6FB14F",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 133.88,
   "hfov": 27.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 23.96
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA, this.camera_6E4FC9ED_7DEC_1592_41C8_07B784579401); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5108005F_40A2_8723_41CD_AA6F5F44391F",
   "pitch": 23.96,
   "yaw": 133.88,
   "hfov": 27.61,
   "distance": 100
  }
 ],
 "id": "overlay_4DFEA0EE_407E_88E2_41CD_CB8921D7E171",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_4DFE90EE_407E_88E2_4189_3E2921C4A295",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A5B2760_7DEC_1E92_41D7_E2D423983D7E_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_29D7150E_35F1_DA0D_41CA_C642220447F5.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9017"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_28774315_35F2_5E1E_41BC_AFCAE8549430",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText27706"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 69.72,
   "hfov": 31.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.78
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7, this.camera_6E2E1A2A_7DEC_1696_41BB_F59DDCE167E1); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51868FC2_46AE_A545_41CF_30CBA75C924C",
   "pitch": -20.78,
   "yaw": 69.72,
   "hfov": 31.48,
   "distance": 50
  }
 ],
 "id": "overlay_547AB65D_46BE_E77C_41A0_46A55E3C7F10",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_1_HS_2_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -135.46,
   "hfov": 25.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.34
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51810FC2_46AE_A545_41AB_94D880925A9B",
   "pitch": 11.34,
   "yaw": -135.46,
   "hfov": 25.96,
   "distance": 50
  }
 ],
 "id": "overlay_5465665D_46BE_E77C_41C4_363670163EDA",
 "data": {
  "label": "Arrow 05a Left"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -110.79,
   "hfov": 20.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.16
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4EA691BD_4062_8966_41B0_30735096F17D, this.camera_6E26DA1E_7DEC_16AE_41DE_CDA3524FE1C7); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51818FC2_46AE_A545_41CA_01C43EB7F38E",
   "pitch": -28.16,
   "yaw": -110.79,
   "hfov": 20.97,
   "distance": 50
  }
 ],
 "id": "overlay_5465765D_46BE_E77C_41B1_F1298962974A",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_1_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 12.36,
   "hfov": 21.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.61
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55F8C351_40DD_893E_41CC_D52E523A6F81, this.camera_6E1B6A36_7DEC_16FE_41CC_DDB066642C9D); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51801FC3_46AE_A54B_41C8_6DACCD5C806D",
   "pitch": -26.61,
   "yaw": 12.36,
   "hfov": 21.18,
   "distance": 50
  }
 ],
 "id": "overlay_5465065D_46BE_E77C_41B9_4636596DF2BB",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5465165D_46BE_E77C_41C9_4848D4A18DA9",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -2.94,
   "hfov": 14.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.67
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_63352CE5_4777_EB4F_41C4_223DC4E3F29B, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6D6EA546_4769_A54D_41CE_6BDB266BBAC3",
   "pitch": -3.67,
   "yaw": -2.94,
   "hfov": 14.35,
   "distance": 100
  }
 ],
 "id": "overlay_6471371C_4777_A6FC_41C3_DCF8C070F93D",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A40D769_7DEC_1E92_41D0_019BB627F4BA_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_12128DEF_3552_4A0B_41BC_D30017821B05.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9022"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_10382DF6_3553_CA1D_41BE_3F2BD2A75357",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText41603"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A5DF761_7DEC_1E92_41AF_EADD02741552_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_224F8303_35DE_5FFB_41BA_0B502B1D364E.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9019"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_2DD7875F_35DE_460B_41C8_5AF8E5545BAA",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:0.63vw;\"><BR STYLE=\"letter-spacing:0vw;color:#000000;font-size:0.63vw;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText11028"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A58A75E_7DEC_1EAE_41D3_765A5481A64C_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_29D69A13_35F2_4E1B_41C7_3219C3C50CF2.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9015"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_19762E95_36D2_461E_41C8_127B00CD56A3",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText26183"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A46976D_7DEC_1E92_41D4_9A624698FF0B_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_6F8E5330_476A_BEC5_41C0_8F1798AF650C.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9027"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_6015E7DC_476A_657D_41C0_F220E6E50620",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText55185"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "inertia": true,
 "hfov": 15,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_1CC10CE2_124B_8812_4180_81694ECE612F_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 169.93,
   "hfov": 21.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.76
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD, this.camera_6E381A06_7DEC_169E_41D6_5D33CF04A5C3); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FFB1468_356E_5A34_41C5_DA68ECB6C41E",
   "pitch": -25.76,
   "yaw": 169.93,
   "hfov": 21.82,
   "distance": 100
  }
 ],
 "id": "overlay_270BF7A3_3532_463B_4191_49C6652F8A62",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -3.02,
   "hfov": 22.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.57
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA, this.camera_6E3ECA12_7DEC_16B6_41DC_E80BE36E3984); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FFAA468_356E_5A35_418D_8117B969CBAB",
   "pitch": -29.57,
   "yaw": -3.02,
   "hfov": 22.28,
   "distance": 100
  }
 ],
 "id": "overlay_266A0C03_3536_49F4_4192_6D9509FD5876",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 107.56,
   "hfov": 19.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.91
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_2C54B1DB_35FE_BA0B_41B9_9F85AF074C12, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FFA6469_356E_5A34_41C1_4FB41B65B8D9",
   "pitch": 11.91,
   "yaw": 107.56,
   "hfov": 19.41,
   "distance": 100
  }
 ],
 "id": "overlay_2C479218_35FE_BE15_41C0_8242AB3B9F4D",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -62.39,
   "hfov": 22.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.62
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_197D7E96_36D2_461D_41B6_939290820326, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_04842AF6_36D6_4E1D_41BB_4DA1913C2516",
   "pitch": -0.62,
   "yaw": -62.39,
   "hfov": 22.04,
   "distance": 100
  }
 ],
 "id": "overlay_19A78ECF_36D2_460B_41C8_3CBDA69BFBCF",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 5.79,
   "hfov": 23.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.25
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370, this.camera_6514C89F_7DEC_13AE_41D7_412F72C6027F); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5101F06A_40A2_87ED_41CA_D70556431954",
   "pitch": -23.25,
   "yaw": 5.79,
   "hfov": 23.03,
   "distance": 100
  }
 ],
 "id": "overlay_56ED880D_40E7_8726_41A2_70D502CD04E2",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -175.43,
   "hfov": 24.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.94
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA, this.camera_696E292C_7DEC_7293_41D0_00022F347AFC)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5102606A_40A2_87ED_418E_E098F7385E77",
   "pitch": -19.94,
   "yaw": -175.43,
   "hfov": 24.85,
   "distance": 100
  }
 ],
 "id": "overlay_56EDE80E_40E7_8722_41C1_68BCFA8D69C0",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_56EDF80E_40E7_8722_41D0_BDAA6BD2EA4C",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -49.69,
   "hfov": 47.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.31
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA, this.camera_65B037F6_7DEC_1D7E_41CB_78437F43F8DD); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_660CF6F6_46AA_674C_41BE_92BA96B2CE81",
   "pitch": -21.31,
   "yaw": -49.69,
   "hfov": 47.03,
   "distance": 50
  }
 ],
 "id": "overlay_5BF6AC34_46AB_AACD_41C8_017A001C6AE3",
 "data": {
  "label": "Circle Arrow 01a Left-UP"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -102.46,
   "hfov": 36.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -46.14
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_660B46F6_46AA_674C_41AA_52ABBF320323",
   "pitch": -46.14,
   "yaw": -102.46,
   "hfov": 36.69,
   "distance": 100
  }
 ],
 "id": "overlay_5BF68C35_46AB_AACF_41D1_AEF65247DB21",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5BF6FC35_46AB_AACF_41CA_D1A07CD384B7",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 11.21,
   "hfov": 18.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 17.26
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_531DFD19_46FB_AAC7_41CC_2424C1149CAE, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_660BB6F6_46AA_674C_41B8_E1044897FCBA",
   "pitch": 17.26,
   "yaw": 11.21,
   "hfov": 18.16,
   "distance": 100
  }
 ],
 "id": "overlay_5BF6CC35_46AB_AACF_4181_930198914826",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A31C778_7DEC_1D72_41D5_2EE64371EB8F_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_67E96083_476E_5BC4_41B9_F2B7FD710D94.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9032"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_5AC2ADDB_4769_A544_41D0_679E70A93235",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText33974"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 4.47,
   "hfov": 15.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.26
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55F8C351_40DD_893E_41CC_D52E523A6F81, this.camera_69A57AAD_7DEC_1792_41D4_687D3EE67924); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51838FC3_46AE_A54B_41B9_9E48FBE966D8",
   "pitch": -28.26,
   "yaw": 4.47,
   "hfov": 15.55,
   "distance": 100
  }
 ],
 "id": "overlay_50F22B9E_46B9_ADFC_41BD_E496070E94AC",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -178.59,
   "hfov": 16.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.4
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7, this.camera_69B8BAA1_7DEC_1792_41D6_DB1F3A75C9F7); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51822FC4_46AE_A54D_41C9_F989048BEA97",
   "pitch": -21.4,
   "yaw": -178.59,
   "hfov": 16.43,
   "distance": 100
  }
 ],
 "id": "overlay_50F21B9E_46B9_ADFC_41C9_5D4574F7FDB7",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_50F20B9E_46B9_ADFC_41D0_2552F0C64D0C",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -103.22,
   "hfov": 10.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.38
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_514B22D5_46E9_DF4F_41C8_5A0D6258426F, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6778C29D_46D9_FFFC_4193_1B2B8264AB38",
   "pitch": 0.38,
   "yaw": -103.22,
   "hfov": 10.78,
   "distance": 100
  }
 ],
 "id": "overlay_51D519BB_46E9_EDC4_41C5_6AB012DE8C7B",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -63.36,
   "hfov": 10.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.38
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_512626DB_46EE_A77B_41C1_9E435408BAF2, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6778729D_46D9_FFFC_41A0_57EF95158DD0",
   "pitch": 0.38,
   "yaw": -63.36,
   "hfov": 10.78,
   "distance": 100
  }
 ],
 "id": "overlay_5ECAE712_46EE_A6C4_41AA_3BB593E91665",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 38.18,
   "hfov": 10.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.25
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_5E689958_46EE_ED44_41CE_84D431976157, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_677BA29E_46D9_FFFC_41BE_340D9E708973",
   "pitch": 2.25,
   "yaw": 38.18,
   "hfov": 10.77,
   "distance": 100
  }
 ],
 "id": "overlay_519B59C6_46EE_ED4C_41C1_94C90627C375",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "position": {
  "hfov": 130,
  "yaw": -12.45,
  "class": "PanoramaCameraPosition",
  "pitch": -11.47
 },
 "id": "snapshot_2A2BC60A_3531_F9F4_41A9_AA76F3997A9E",
 "class": "PanoramaSnapshot"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -2.62,
   "hfov": 23.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.56
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B, this.camera_6902AB46_7DEC_169E_41C2_E459164013AD); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DDB794E_41A2_B922_41B9_D8D5C551E071",
   "pitch": -18.56,
   "yaw": -2.62,
   "hfov": 23.96,
   "distance": 100
  }
 ],
 "id": "overlay_513CCF9F_41A5_7922_41C3_2B30941535EB",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -53.71,
   "hfov": 39.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -42.02
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DDBA94F_41A2_B922_4189_B8EDD4A70BC4",
   "pitch": -42.02,
   "yaw": -53.71,
   "hfov": 39.64,
   "distance": 50
  }
 ],
 "id": "overlay_513CBF9F_41A5_7922_418B_2526CF18C4B4",
 "data": {
  "label": "Circle Arrow 01a Left-UP"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_1_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -139.62,
   "hfov": 40.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.02
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0, this.camera_69156B3B_7DEC_16F6_41C8_2D2B5E76485A); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DC4194F_41A2_B922_41C8_55C85A646722",
   "pitch": -29.02,
   "yaw": -139.62,
   "hfov": 40.13,
   "distance": 50
  }
 ],
 "id": "overlay_513CAF9F_41A5_7922_41C8_2336F2BDC936",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 123.14,
   "hfov": 33.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 27.78
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_106A12CE_3552_DE0D_41B3_0DF47A86D789, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DC4994F_41A2_B922_41CD_B32E52BD61F5",
   "pitch": 27.78,
   "yaw": 123.14,
   "hfov": 33.1,
   "distance": 100
  }
 ],
 "id": "overlay_513C8F9F_41A5_7922_41C4_A0B4A75A5337",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_51237F9F_41A5_7922_41A4_8DCC658BECA1",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A5BA75F_7DEC_1EAE_41D2_F0AED1EF928A_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_2FB5CFE7_35F2_C63B_41BB_92207220D6DD.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "89%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9016"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_2F894DE9_35F2_4A34_41BA_DD37E4162FBB",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "10%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText20224"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -171.38,
   "hfov": 25.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.83
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F, this.camera_69EFCA72_7DEC_1776_41D8_727C91694E94); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FFED45F_356E_5A0C_4181_B5271EA15E0C",
   "pitch": -13.83,
   "yaw": -171.38,
   "hfov": 25.14,
   "distance": 100
  }
 ],
 "id": "overlay_3BC283F4_3532_DE1D_41B6_AB517704C443",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 153.89,
   "hfov": 16.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.78
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_2954FE04_35F2_49FD_41BF_087A6F31BBBB, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FFE0460_356E_5A34_41A4_D23C6AB08328",
   "pitch": 6.78,
   "yaw": 153.89,
   "hfov": 16.43,
   "distance": 100
  }
 ],
 "id": "overlay_2E5A4CF1_35F7_CA14_41A4_3CC8E2870557",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid6A5FE762_7DEC_1E96_41C3_5CF602A359A1",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingBottom": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea9020"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -84.49,
   "hfov": 18.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.41
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA, this.camera_6E7BA980_7DEC_1592_41AB_B6EB1925A7AA); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51BC7DE0_41A2_B91D_41B8_BBB63A2A9D30",
   "pitch": 7.41,
   "yaw": -84.49,
   "hfov": 18.32,
   "distance": 100
  }
 ],
 "id": "overlay_5120CEF3_41AD_F8E2_41C4_1D3581110339",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -12.37,
   "hfov": 33.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.46
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_503C0050_41A2_873E_41A5_24C049FBA238, this.camera_6E74C974_7DEC_1572_41AC_2F4756987D83); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51BC3DE0_41A2_B91D_4195_9AA96D4F481F",
   "pitch": -34.46,
   "yaw": -12.37,
   "hfov": 33.54,
   "distance": 50
  }
 ],
 "id": "overlay_51202EF3_41AD_F8E2_4176_5AB349E21A9D",
 "data": {
  "label": "Circle Arrow 01a Left-UP"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_1_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 0.26,
   "hfov": 27.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.95
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826, this.camera_6E61C98C_7DEC_1592_41D4_093996DC4CD2); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51BCFDE0_41A2_B91D_41C2_FB053EEF4FC8",
   "pitch": -18.95,
   "yaw": 0.26,
   "hfov": 27.04,
   "distance": 50
  }
 ],
 "id": "overlay_51201EF3_41AD_F8E2_418F_46E515115D86",
 "data": {
  "label": "Circle Arrow 01a Left"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_51200EF3_41AD_F8E2_41D0_666CE496C2CD",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -173.92,
   "hfov": 27.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 20.09
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_6F344CE3_476A_6B44_41A3_CD6FD57860C0, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6D74A542_4769_A545_41CD_0781C34EE704",
   "pitch": 20.09,
   "yaw": -173.92,
   "hfov": 27.66,
   "distance": 100
  }
 ],
 "id": "overlay_62D5056A_476A_A544_41D0_B9AAF6EC8482",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -84.3,
   "hfov": 21.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.18
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B, this.camera_65D3B7CF_7DEC_1DAE_41CE_4DB5EA5EB06C); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF28474_356E_5A1C_41A0_42048FF27931",
   "pitch": -14.18,
   "yaw": -84.3,
   "hfov": 21.84,
   "distance": 100
  }
 ],
 "id": "overlay_1400A319_3552_DE14_41C1_3A80F0B5C293",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_1_HS_1_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 91.69,
   "hfov": 24.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.48
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618, this.camera_65E957C3_7DEC_1D96_4172_DE11234102B7); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF22474_356E_5A1C_41C4_27336B2A1F28",
   "pitch": -13.48,
   "yaw": 91.69,
   "hfov": 24.24,
   "distance": 50
  }
 ],
 "id": "overlay_14008319_3552_DE14_41CA_BEDDC455048A",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -173.82,
   "hfov": 17.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.42
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E, this.camera_68C58B81_7DEC_1592_41D3_FCC150D95692); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51A19DD5_41A2_B927_4181_C32E1BFAE35D",
   "pitch": -10.42,
   "yaw": -173.82,
   "hfov": 17.9,
   "distance": 100
  }
 ],
 "id": "overlay_51A34A90_41A5_9B3D_41CE_93D133931015",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 5.89,
   "hfov": 17.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.5
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51A07DD6_41A2_B925_41C8_4DB0F06BD77B",
   "pitch": -17.5,
   "yaw": 5.89,
   "hfov": 17.68,
   "distance": 100
  }
 ],
 "id": "overlay_51A2AA90_41A5_9B3D_41BF_D7459D7F10BA",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -81.69,
   "hfov": 22.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.4
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5120EEF3_41AD_F8E2_4196_44717C80300D, this.camera_68B03B8D_7DEC_1592_41D7_C77976321F7F); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51A00DD6_41A2_B925_4199_41F82C7F63D7",
   "pitch": 6.4,
   "yaw": -81.69,
   "hfov": 22.18,
   "distance": 100
  }
 ],
 "id": "overlay_51A2BA90_41A5_9B3D_41C0_9CC369986588",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_51A28A90_41A5_9B3D_4195_CE4B5712338A",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 83.31,
   "hfov": 28.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 19.01
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_51CFBDDB_40A3_9922_41BA_9CD8549881DD, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51A0EDD6_41A2_B925_41B7_6FE339584C2E",
   "pitch": 19.01,
   "yaw": 83.31,
   "hfov": 28.1,
   "distance": 100
  }
 ],
 "id": "overlay_51A29A90_41A5_9B3D_41CB_7ABBF6A875C1",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 24.63,
   "hfov": 17.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.57
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_601627DB_476A_657B_41D1_9C0040061108, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6D4BA534_4769_BACD_41CC_DDF14618192F",
   "pitch": 5.57,
   "yaw": 24.63,
   "hfov": 17.29,
   "distance": 100
  }
 ],
 "id": "overlay_6089D5B8_476B_E5C4_41CA_2E2B2EC03E34",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid6A40676A_7DEC_1E96_41DD_927EF3099D31_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_53F4B035_46FA_5ACC_41BC_631BBF0490A0.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 0,
 "height": "88%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9023"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_51E904CB_46F6_5B5B_41D1_34E13ECDB029",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 0,
 "height": "11%",
 "class": "HTMLText",
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText14232"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
},
{
 "inertia": true,
 "hfov": 22.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_4EA6A1BD_4062_8966_41CC_1185EBC32F4F",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.79,
   "hfov": 42.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.67
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C, this.camera_6590181D_7DEC_12B2_41B7_18C4EDD852C5); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6D42353B_4769_A53B_41CA_454D276B6714",
   "pitch": 12.67,
   "yaw": 1.79,
   "hfov": 42.4,
   "distance": 100
  }
 ],
 "id": "overlay_5940BDDF_4777_A57C_41C0_AD4F13CB8DE3",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -150.52,
   "hfov": 17.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.42
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF, this.camera_65BD3802_7DEC_1297_41CE_451262F8801C); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6D41C53B_4769_A53B_41CA_79F1A5CF5407",
   "pitch": -20.42,
   "yaw": -150.52,
   "hfov": 17.83,
   "distance": 100
  }
 ],
 "id": "overlay_59BA3DEF_477A_E55B_41B1_3FB395383E97",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 161.02,
   "hfov": 32.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.04
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56CA5080_41AF_871E_41BB_12406F67EA71, this.camera_65A7D80F_7DEC_12AE_41AE_BC67548DF974); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6D41553C_4769_A53D_41B9_AFA7FE4BA675",
   "pitch": -33.04,
   "yaw": 161.02,
   "hfov": 32.97,
   "distance": 50
  }
 ],
 "id": "overlay_65CED0D9_477A_FB47_41B8_2694B26610B2",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_1FF6746C_356E_5A0C_41BC_28EE060676E5",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FF5C46C_356E_5A09_41B7_62180DABC72B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FF57471_356E_5A14_41B4_8F09EF32082B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_51AA6DCF_41A2_B923_41C5_ED7D6ADF4231",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_1_HS_6_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_51AA2DCF_41A2_B923_41CA_BBC2001D88DE",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51A7D0A3_41A3_8763_41C5_6DE09592913C_1_HS_9_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_51AAFDD0_41A2_B93D_41C7_378E9C6957C5",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_777F44F9_47DE_5B47_41D1_CA654E2F3AB7",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6C3A564B_47DA_675B_41C1_2B37A03B4E22_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_777F84F9_47DE_5B47_419E_9E23C2D27EB9",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6D7FE53C_4769_A53D_41BD_37CF2C5DD49C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_51000067_40A2_87E3_41D0_EFAD36AB5BD1",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_51004068_40A2_87ED_41CB_1721B6E935D6",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5103606D_40A2_87E6_41C9_7B1180FEED1E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51AFFDD4_41A2_B925_41AB_3024AB4FAADA",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51AFBDD4_41A2_B925_41C3_D0FA31024324",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56BCD1AC_41A2_8966_41C3_6CC0FCFB1A0E_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_51AE1DD4_41A2_B925_41D0_A7D3A41F1FB1",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F9F4494_356E_5A1C_41B2_FD5B58671C4C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5107B066_40A2_87E5_41A2_E6F3C9150467",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51069065_40A2_87E7_41CA_F528EE4E2D26",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51073066_40A2_87E5_41A4_06141C51045E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_51926FBB_46AE_A53B_41B2_CDE166CC76DA",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_551DB6FE_46AF_A73D_41C8_4236DEB10E1C_1_HS_1_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_51921FBB_46AE_A53B_41B0_2301E8C742D5",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5103406B_40A2_87E3_41CA_DA5D73EE8F9F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5103F06C_40A2_87E5_41A8_CE84FC89C6F9",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_1_HS_2_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_511C706C_40A2_87E5_41C9_15C50B4C38BE",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_1F802493_356E_5A14_419C_85D2DC2DA9A1",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F9FD493_356E_5A14_41C8_9A0C8B3BE9F6",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5184FFC1_46AE_A547_41CC_8BC9771C40E2",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_51875FC1_46AE_A547_41BD_ECC032D76C7D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_67728293_46D9_FFC4_41C0_16A8780C4F22",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_67723293_46D9_FFC4_41C6_DD97C5A029A1",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55D8258B_46AA_65DB_41D0_DC7BF53A8826_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_677D4294_46D9_FFCC_41A9_A87F598C25F7",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5102D06B_40A2_87E3_41BC_068C4110229A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_77794501_47DE_5AC7_41B5_E6ABEF5871A3",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_7779E501_47DE_5AC7_41C1_C3018EEE950B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_777A7501_47DE_5AC7_41B1_8D0285A36E67",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6E08171B_47EB_E6FB_41CD_0E343A8D72FB_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_777AC502_47DE_5AC5_41D1_114E66FA438D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51BAE3FC_41A3_88E5_41CB_7C94441B3FA1",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51BA83FC_41A3_88E5_41BC_1904ED604ADA",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_515379C2_41AD_991D_41BE_AD7AD3DDF8E7_1_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51BA43FC_41A3_88E5_41CF_04EE7CF523EE",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_77798500_47DE_5AC5_41B9_4BDA2E9B0A14",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6E23904B_47EB_BB5B_41BE_E225560D2A59_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_777A7500_47DE_5AC5_4182_6509E49BACA0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5018B0D3_41A3_8722_41CD_E009C4F07B5B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51B95DDC_41A2_B925_41A4_87A7E50ACE09",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_1_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_51044063_40A2_87E3_41CD_CB8F6F6FBB63",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_51A37DD7_41A2_B923_41C8_9B3F14BC8837",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_51A3DDD7_41A2_B923_4198_59E513663149",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51A3EDD7_41A2_B923_419C_8C63A7E8E37C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56CA5080_41AF_871E_41BB_12406F67EA71_0_HS_5_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_6D49A536_4769_BACD_41C4_97C219860076",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_511AB076_40A2_87E5_41CB_D160700110D3",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_511AD077_40A2_87E3_41CB_7AD71F4A666D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_677E529B_46D9_FFC4_41A0_B08E26345B23",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_68691A9A_47AA_AFC5_41D0_58295347C4D9",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_68694A9A_47AA_AFC5_41B6_9A9B48947779",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6DC6CBD3_47AA_6D4B_41CC_5B0BC6DE7A24_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_68698A9A_47AA_AFC5_4199_FAC63290BB08",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6D40E53C_4769_A53D_41C4_944B884C4A1F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6D40753C_4769_A53D_41C1_3A40F2B25664",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_777864F9_47DE_5B47_41B6_7F7A6AB1C489",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_777884FA_47DE_5B45_41D1_3A9F680CDF11",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6F5D67CC_47EA_A55E_41C9_23E72E929D8A_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_777934FA_47DE_5B45_41CA_881C8F2091CD",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51AE9DD5_41A2_B927_41C8_D9A958338387",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51A15DD5_41A2_B927_41A7_C4F7DDAB7DBF",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56A7BFE8_41A5_98ED_41BC_49956D1B1618_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_51A11DD5_41A2_B927_419E_3B5A186446D3",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_51A4EDDA_41A2_B92D_419D_229998BD1D7E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_503C0050_41A2_873E_41A5_24C049FBA238_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_51A75DDA_41A2_B92D_41D1_153FEAA96202",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FF9A469_356E_5A34_41C6_82B9B85F9784",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FF97469_356E_5A34_41A4_B7B075C9EAD1",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_1FF9146A_356E_5A34_41C3_CDE11304406D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_1FF8946A_356E_5A34_41C1_D4C107F6CB3A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_510E705E_40A2_8725_4198_02AF4658D044",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_510EB05E_40A2_8725_4196_C4DC11EBD090",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_5DEC4F76_46FF_A54D_41C2_C75C0A55D0BE",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51A61DDB_41A2_B923_41D1_2B5980D2C6E4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5071F8A7_41A2_8763_41A3_CED4C6329AC4_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51A6CDDB_41A2_B923_41D0_B31926797014",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FF36473_356E_5A14_41C9_592CD974C745",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_1_HS_3_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FF30474_356E_5A1C_41AF_778A486298FF",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_04935AFE_36D6_4E0C_41BF_763E18B5F846",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_679BE26F_46D9_FF57_41C7_DCD649D789FA",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_510FA05F_40A2_8723_4183_CA023EA35453",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_510FD05F_40A2_8723_41CB_A547D4DE2161",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5108005F_40A2_8723_41CD_AA6F5F44391F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51868FC2_46AE_A545_41CF_30CBA75C924C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_1_HS_2_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_51810FC2_46AE_A545_41AB_94D880925A9B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_1_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51818FC2_46AE_A545_41CA_01C43EB7F38E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_1_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51801FC3_46AE_A54B_41C8_6DACCD5C806D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_547AD65C_46BE_E77C_41C6_2B8C00C0C79C_0_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_6D6EA546_4769_A54D_41CE_6BDB266BBAC3",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FFB1468_356E_5A34_41C5_DA68ECB6C41E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FFAA468_356E_5A35_418D_8117B969CBAB",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_1FFA6469_356E_5A34_41C1_4FB41B65B8D9",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_04842AF6_36D6_4E1D_41BB_4DA1913C2516",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5101F06A_40A2_87ED_41CA_D70556431954",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5102606A_40A2_87ED_418E_E098F7385E77",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_660CF6F6_46AA_674C_41BE_92BA96B2CE81",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_660B46F6_46AA_674C_41AA_52ABBF320323",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5BF94C34_46AB_AACD_41BB_4FA95CEB63C6_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_660BB6F6_46AA_674C_41B8_E1044897FCBA",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51838FC3_46AE_A54B_41B9_9E48FBE966D8",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51822FC4_46AE_A54D_41C9_F989048BEA97",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_6778C29D_46D9_FFFC_4193_1B2B8264AB38",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_6778729D_46D9_FFFC_41A0_57EF95158DD0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50F24B9E_46B9_ADFC_41AC_8577BF65DFA1_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_677BA29E_46D9_FFFC_41BE_340D9E708973",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5DDB794E_41A2_B922_41B9_D8D5C551E071",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_5DDBA94F_41A2_B922_4189_B8EDD4A70BC4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_1_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_5DC4194F_41A2_B922_41C8_55C85A646722",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_513CDF9F_41A5_7922_4194_E47461C7A6D6_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_5DC4994F_41A2_B922_41CD_B32E52BD61F5",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FFED45F_356E_5A0C_4181_B5271EA15E0C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_1FFE0460_356E_5A34_41A4_D23C6AB08328",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_51BC7DE0_41A2_B91D_41B8_BBB63A2A9D30",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_51BC3DE0_41A2_B91D_4195_9AA96D4F481F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_1_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_51BCFDE0_41A2_B91D_41C2_FB053EEF4FC8",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5120EEF3_41AD_F8E2_4196_44717C80300D_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_6D74A542_4769_A545_41CD_0781C34EE704",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FF28474_356E_5A1C_41A0_42048FF27931",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_1_HS_1_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_1FF22474_356E_5A1C_41C4_27336B2A1F28",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51A19DD5_41A2_B927_4181_C32E1BFAE35D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51A07DD6_41A2_B925_41C8_4DB0F06BD77B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_51A00DD6_41A2_B925_4199_41F82C7F63D7",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_51A0EDD6_41A2_B925_41B7_6FE339584C2E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51A36A90_41A5_9B3D_41CC_185D7AA5FEAA_0_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_6D4BA534_4769_BACD_41CC_DDF14618192F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_6D42353B_4769_A53B_41CA_454D276B6714",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6D41C53B_4769_A53B_41CA_79F1A5CF5407",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_6D41553C_4769_A53D_41B9_AFA7FE4BA675",
 "rowCount": 6,
 "class": "AnimatedImageResource"
}],
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player6037"
 },
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getKey": function(key){  return window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "registerKey": function(key, value){  window[key] = value; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "existsKey": function(key){  return key in window; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } }
 },
 "downloadEnabled": false,
 "paddingLeft": 0,
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
