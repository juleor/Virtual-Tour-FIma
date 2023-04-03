(function(){
    var script = {
 "start": "this.init()",
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
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Player",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_t.jpg"
  }
 ],
 "label": "2-2",
 "id": "panorama_1400B319_3552_DE14_41BA_4304C9BE59B0",
 "thumbnailUrl": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_t.jpg",
 "overlays": [
  "this.overlay_1400A319_3552_DE14_41C1_3A80F0B5C293",
  "this.overlay_14008319_3552_DE14_41CA_BEDDC455048A",
  "this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_tcap0"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -84.3,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.3,
   "panorama": "this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B",
   "distance": 1
  },
  {
   "yaw": 91.69,
   "class": "AdjacentPanorama",
   "backwardYaw": 48.98,
   "panorama": "this.panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -179.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_530413F2_40A2_88FD_41CB_B96FF42F8AD0",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 46.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5CBCD49D_40A2_8F26_41D0_215D349C9F84",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 130.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_52599112_40A2_8922_41CC_9A24EAFA79FB",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 2.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_53475377_40A2_89E3_41BE_545BC7AE4E8F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_t.jpg"
  }
 ],
 "label": "IMG_20230329_084604_00_merged",
 "id": "panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C",
 "thumbnailUrl": "media/panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_t.jpg",
 "overlays": [
  "this.overlay_54327A0B_40E2_9B23_41C5_F7208A06A3D5",
  "this.panorama_54320A0B_40E2_9B23_41BC_9D33C9AA4A1C"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": 137.45,
   "class": "AdjacentPanorama",
   "backwardYaw": -76.29,
   "panorama": "this.panorama_552B54A6_40A7_8F65_41C7_47284B2F1698",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "duration": 5000,
 "label": "Lobby",
 "id": "photo_10EC6043_3552_5A7B_41BE_48E268ADD465",
 "thumbnailUrl": "media/photo_10EC6043_3552_5A7B_41BE_48E268ADD465_t.png",
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
 "class": "Photo",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": -174.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_520FB146_40A2_8922_41CA_50913C99B5A7",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_t.jpg"
  }
 ],
 "label": "IMG_20230329_123859_00_merged",
 "id": "panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4",
 "thumbnailUrl": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_t.jpg",
 "overlays": [
  "this.overlay_280BB230_399D_6EEB_41C6_0E790F72A8AC",
  "this.overlay_280B8230_399D_6EEB_41BF_C9EDA74512FA",
  "this.overlay_280B6230_399D_6EEB_41B9_1EBD081EF9CD",
  "this.panorama_280B4230_399D_6EEB_4197_EE008ECDF6C4"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -165,
   "class": "AdjacentPanorama",
   "backwardYaw": -173.82,
   "panorama": "this.panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E",
   "distance": 1
  },
  {
   "yaw": 12.63,
   "class": "AdjacentPanorama",
   "backwardYaw": -133.24,
   "panorama": "this.panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_t.jpg"
  }
 ],
 "label": "IMG_20230329_090630_00_merged",
 "id": "panorama_4EA691BD_4062_8966_41B0_30735096F17D",
 "thumbnailUrl": "media/panorama_4EA691BD_4062_8966_41B0_30735096F17D_t.jpg",
 "overlays": [
  "this.panorama_4EA6A1BD_4062_8966_41CC_1185EBC32F4F"
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -114.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5DC7F518_40A2_892E_41CC_8A22321694FD",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_t.jpg"
  }
 ],
 "label": "IMG_20230329_124608_00_merged",
 "id": "panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4",
 "thumbnailUrl": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_t.jpg",
 "overlays": [
  "this.overlay_5569C8A8_40DD_876D_41CB_6EA9FFCC5D16",
  "this.overlay_5569F8A8_40DD_876D_41C6_5CD479F58B77",
  "this.panorama_556988A8_40DD_876D_41C4_FD822A4C464D"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": 4.47,
   "class": "AdjacentPanorama",
   "backwardYaw": 160.68,
   "panorama": "this.panorama_55F8C351_40DD_893E_41CC_D52E523A6F81",
   "distance": 1
  },
  {
   "yaw": -178.59,
   "class": "AdjacentPanorama",
   "backwardYaw": -139.62,
   "panorama": "this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_t.jpg"
  }
 ],
 "label": "IMG_20230329_090818_00_merged",
 "id": "panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03",
 "thumbnailUrl": "media/panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_t.jpg",
 "overlays": [
  "this.overlay_56ED880D_40E7_8726_41A2_70D502CD04E2",
  "this.overlay_56EDE80E_40E7_8722_41C1_68BCFA8D69C0",
  "this.panorama_56EDF80E_40E7_8722_41D0_BDAA6BD2EA4C"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": 5.79,
   "class": "AdjacentPanorama",
   "backwardYaw": 175.71,
   "panorama": "this.panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370",
   "distance": 1
  },
  {
   "yaw": -175.43,
   "class": "AdjacentPanorama",
   "backwardYaw": -153.4,
   "panorama": "this.panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 103.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5765963A_40A2_8B62_41C5_8656FA65B31C",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_t.jpg"
  }
 ],
 "label": "2-4-1",
 "id": "panorama_4B1F3427_40A6_8F62_4199_91621A622D83",
 "thumbnailUrl": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_t.jpg",
 "overlays": [
  "this.overlay_4B1F2427_40A6_8F62_41C3_6C6CBE7C3712",
  "this.overlay_4B1FC427_40A6_8F62_41B4_0ECB84E94358",
  "this.overlay_4B1FE427_40A6_8F62_41CC_B228670BD54D",
  "this.panorama_4B1F9427_40A6_8F62_41BE_C2D703428A0E"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -12.37,
   "class": "AdjacentPanorama",
   "backwardYaw": -133.72,
   "panorama": "this.panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D",
   "distance": 1
  },
  {
   "yaw": 0.26,
   "class": "AdjacentPanorama",
   "backwardYaw": -67.69,
   "panorama": "this.panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043",
   "distance": 1
  },
  {
   "yaw": -84.49,
   "class": "AdjacentPanorama",
   "backwardYaw": -81.69,
   "panorama": "this.panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -48.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C5344C2_40A2_8F22_41CF_E61D11A205E7",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 111.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_570BE684_40A2_8B26_41CD_425933C48E0B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -110.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5CADC489_40A2_8F2E_41C8_91CD0E2A0CA0",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "label": "Canteen",
 "id": "photo_1261A9DC_3552_4A0D_41C8_A66642AEAE94",
 "thumbnailUrl": "media/photo_1261A9DC_3552_4A0D_41C8_A66642AEAE94_t.png",
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
 "class": "Photo",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": -46.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_524B50FD_40A2_88E7_41BE_4BC89FBAB001",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_t.jpg"
  }
 ],
 "label": "IMG_20230329_090711_00_merged",
 "id": "panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF",
 "thumbnailUrl": "media/panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_t.jpg",
 "overlays": [
  "this.panorama_55912C66_40EE_9FE2_41CB_2CFDBCE0C2ED"
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -17.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5365E3B5_40A2_8967_41B5_8065552DA5D9",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 26.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C20E500_40A2_891E_41CA_17D7B01E27E2",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_t.jpg"
  }
 ],
 "label": "1-5-1",
 "id": "panorama_1C113258_124A_783E_41AE_7AD1810FD677",
 "thumbnailUrl": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_t.jpg",
 "overlays": [
  "this.overlay_0109478B_1249_9812_415C_71848DC339B8",
  "this.overlay_62B585B2_353E_0CF5_41B0_786774143B86",
  "this.overlay_619CFDD0_35C2_1CB5_41C5_B7480B9261CD",
  "this.overlay_57EF48BA_35C2_04F5_41C2_E5A821EE04C0",
  "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677_tcap0"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 12.36,
   "class": "AdjacentPanorama",
   "backwardYaw": -14.48,
   "panorama": "this.panorama_55F8C351_40DD_893E_41CC_D52E523A6F81",
   "distance": 1
  },
  {
   "panorama": "this.panorama_4EA691BD_4062_8966_41B0_30735096F17D",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 69.72,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.79,
   "panorama": "this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -10.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5CFFF464_40A2_8FE5_41CC_8552458EB924",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1-3",
 "id": "panorama_1CC10CE2_124B_8812_4180_81694ECE612F",
 "thumbnailUrl": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_t.jpg",
 "overlays": [
  "this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F_tcap0",
  "this.overlay_270BF7A3_3532_463B_4191_49C6652F8A62",
  "this.overlay_266A0C03_3536_49F4_4192_6D9509FD5876",
  "this.overlay_2C479218_35FE_BE15_41C0_8242AB3B9F4D",
  "this.overlay_19A78ECF_36D2_460B_41C8_3CBDA69BFBCF"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": 169.93,
   "class": "AdjacentPanorama",
   "backwardYaw": 83.81,
   "panorama": "this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD",
   "distance": 1
  },
  {
   "yaw": -3.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -171.38,
   "panorama": "this.panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -12.45,
  "class": "PanoramaCameraPosition",
  "pitch": -11.47
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_camera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_t.jpg"
  }
 ],
 "label": "IMG_20230329_122611_00_merged",
 "id": "panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD",
 "thumbnailUrl": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_t.jpg",
 "overlays": [
  "this.overlay_23C892D7_3536_BE1B_41C7_9307724EA237",
  "this.overlay_23C8A2D7_3536_BE1B_4191_07A77F127C03",
  "this.overlay_2C2ABB44_35F2_4E7D_41AC_B4DF4C850CBA",
  "this.overlay_2E61B3EF_35F2_DE0C_41C5_DF84C0F72069",
  "this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_tcap0"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1DB25007_124A_7812_4183_C90992DC6F0B",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 83.81,
   "class": "AdjacentPanorama",
   "backwardYaw": 169.93,
   "panorama": "this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 167.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5D95055D_40A2_8926_41CA_838C01085260",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_53B79353_40A2_8923_41B4_C665C14DF118",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_t.jpg"
  }
 ],
 "label": "IMG_20230329_085924_00_merged",
 "id": "panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0",
 "thumbnailUrl": "media/panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_t.jpg",
 "overlays": [
  "this.overlay_55EF5CF9_40A2_98EF_41AF_897699136286",
  "this.panorama_55EF2CF9_40A2_98EF_41D1_12D0D3A053EF"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -130.82,
   "class": "AdjacentPanorama",
   "backwardYaw": -176.34,
   "panorama": "this.panorama_56C3B62F_40A7_8B63_41AF_0091007B755A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -128.37,
  "class": "PanoramaCameraPosition",
  "pitch": -27.48
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_camera",
 "class": "PanoramaCamera"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "yaw": -172.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_532A840B_40A2_8F22_41C4_8855D87A23D5",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_t.jpg"
  }
 ],
 "label": "IMG_20230329_124430_00_merged",
 "id": "panorama_55F8C351_40DD_893E_41CC_D52E523A6F81",
 "thumbnailUrl": "media/panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_t.jpg",
 "overlays": [
  "this.overlay_55F8E351_40DD_893E_41CD_B883B175C4BA",
  "this.overlay_55F81351_40DD_893E_41C9_0A372694240F",
  "this.panorama_55F80351_40DD_893E_41CB_285EB625A4D2"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": 160.68,
   "class": "AdjacentPanorama",
   "backwardYaw": 4.47,
   "panorama": "this.panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4",
   "distance": 1
  },
  {
   "yaw": -14.48,
   "class": "AdjacentPanorama",
   "backwardYaw": 12.36,
   "panorama": "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "label": "Fima Company Profile(1)",
 "id": "video_2A1F5F58_35D2_C615_41C4_AA70604C64C5",
 "thumbnailUrl": "media/video_2A1F5F58_35D2_C615_41C4_AA70604C64C5_t.jpg",
 "width": 720,
 "loop": false,
 "scaleMode": "fit_inside",
 "class": "Video",
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
 "label": "Logistic Building",
 "id": "photo_10E53297_3552_5E1B_41A9_B4E28BB235E8",
 "thumbnailUrl": "media/photo_10E53297_3552_5E1B_41A9_B4E28BB235E8_t.png",
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
 "class": "Photo",
 "height": 1080
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_t.jpg"
  }
 ],
 "label": "IMG_20230329_122453_00_merged",
 "id": "panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA",
 "thumbnailUrl": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_t.jpg",
 "overlays": [
  "this.overlay_3BC283F4_3532_DE1D_41B6_AB517704C443",
  "this.overlay_2E5A4CF1_35F7_CA14_41A4_3CC8E2870557",
  "this.panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -171.38,
   "class": "AdjacentPanorama",
   "backwardYaw": -3.02,
   "panorama": "this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 95.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5CD9544A_40A2_8F2D_41AB_FF913EAF5A29",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "label": "Security Post",
 "id": "photo_2FB5CFE7_35F2_C63B_41BB_92207220D6DD",
 "thumbnailUrl": "media/photo_2FB5CFE7_35F2_C63B_41BB_92207220D6DD_t.png",
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
 "class": "Photo",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": 178.33,
  "class": "PanoramaCameraPosition",
  "pitch": -7.05
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "label": "Lobby",
 "id": "photo_224F8303_35DE_5FFB_41BA_0B502B1D364E",
 "thumbnailUrl": "media/photo_224F8303_35DE_5FFB_41BA_0B502B1D364E_t.png",
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
 "class": "Photo",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": -137.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C01C4E7_40A2_88E2_41C0_8D53BCEEC615",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_1CB826D3_36D2_C614_41A3_65E579466897",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "height": 400,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "bold",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowVerticalLength": 0,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "titleFontSize": "1.09vw",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.image_uid5171505C_40A2_8725_41C3_B5D635B03DDF_0",
  "this.htmlText_1CBAC6D3_36D2_C614_41C2_331984E8A120"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window50568"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "initialPosition": {
  "yaw": 176.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5CEFF457_40A2_8F23_41D1_0742A1564D86",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 165.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5286F0CC_40A2_8725_41CC_7F63B4BB24C3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 149.1,
  "class": "PanoramaCameraPosition",
  "pitch": 2.43
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 66.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_533AB42A_40A2_8F6D_41B9_FF30BE9B534D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 8.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5774D65F_40A2_8B22_41BE_727EA48A85CF",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_t.jpg"
  }
 ],
 "label": "2-5",
 "id": "panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10",
 "thumbnailUrl": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_t.jpg",
 "overlays": [
  "this.overlay_4D05BD8B_407E_9923_41B6_0C199A46A6FF",
  "this.overlay_4D058D8B_407E_9923_41C9_07785C4BB29E",
  "this.overlay_4D059D8B_407E_9923_41C8_FDB323FE6BB8",
  "this.overlay_4D024D8B_407E_9923_41C5_8D87C5885CB4",
  "this.panorama_4D025D8B_407E_9923_41D0_037BFE77A38A"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -7.34,
   "class": "AdjacentPanorama",
   "backwardYaw": -113.38,
   "panorama": "this.panorama_54B596ED_40A2_88E6_41B7_688552C1C01E",
   "distance": 1
  },
  {
   "panorama": "this.panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_28755315_35F2_5E1F_41C6_A02B5B1B2073",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "height": 400,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "bold",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowVerticalLength": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "titleFontSize": "1.09vw",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.image_uid517EB054_40A2_8725_41B5_B10EA7D0D73A_0",
  "this.htmlText_28774315_35F2_5E1E_41BC_AFCAE8549430"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window27705"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "duration": 5000,
 "label": "Gate",
 "id": "photo_29D69A13_35F2_4E1B_41C7_3219C3C50CF2",
 "thumbnailUrl": "media/photo_29D69A13_35F2_4E1B_41C7_3219C3C50CF2_t.png",
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
 "class": "Photo",
 "height": 1080
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2F8F0DE9_35F2_4A34_41C0_73EF0AAC6C9C",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "height": 400,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "bold",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowVerticalLength": 0,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "titleFontSize": "1.09vw",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.image_uid517DC053_40A2_8723_41CB_AF8CF8D305E6_0",
  "this.htmlText_2F894DE9_35F2_4A34_41BA_DD37E4162FBB"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window20223"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1C113258_124A_783E_41AE_7AD1810FD677_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -106.81,
  "class": "PanoramaCameraPosition",
  "pitch": -13.82
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -0.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_529510D8_40A2_872D_41C5_DB1EC74402D8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 172.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5269B121_40A2_891E_41AF_2313414261AA",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -96.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_577F5653_40A2_8B22_4171_7B660983AB7D",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "label": "Logistic Building",
 "id": "photo_29D7150E_35F1_DA0D_41CA_C642220447F5",
 "thumbnailUrl": "media/photo_29D7150E_35F1_DA0D_41CA_C642220447F5_t.png",
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
 "class": "Photo",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_camera",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2C54B1DB_35FE_BA0B_41B9_9F85AF074C12",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "height": 400,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "bold",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowVerticalLength": 0,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "titleFontSize": "1.09vw",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.image_uid517CB052_40A2_873D_41C5_841D806AFED4_0",
  "this.htmlText_2C5721DA_35FE_BA15_41A0_AE91364F4110"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window20223"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "initialPosition": {
  "yaw": 127.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C71F4DA_40A2_8F22_41A4_258C0046B22D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -19.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5DD7A524_40A2_8966_41C6_1DDF3544CEDA",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_t.jpg"
  }
 ],
 "label": "2-1",
 "id": "panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B",
 "thumbnailUrl": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_t.jpg",
 "overlays": [
  "this.overlay_1424D199_3552_DA14_41B6_D8B321F62213",
  "this.overlay_1424E199_3552_DA14_41C2_4DED915935F5",
  "this.overlay_12F2F8BD_3551_CA0F_41BA_87F583328CDF",
  "this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_tcap0"
 ],
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "yaw": 179.3,
   "class": "AdjacentPanorama",
   "backwardYaw": -84.3,
   "panorama": "this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0",
   "distance": 1
  },
  {
   "yaw": -37.42,
   "class": "AdjacentPanorama",
   "backwardYaw": -2.62,
   "panorama": "this.panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 112.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C4C84A9_40A2_8F6E_41BC_63CAE5925244",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_t.jpg"
  }
 ],
 "label": "2-4",
 "id": "panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E",
 "thumbnailUrl": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_t.jpg",
 "overlays": [
  "this.overlay_55EFF0B8_40A3_876E_4169_A31A1537EEF6",
  "this.overlay_55EF80B9_40A3_876F_41A1_4FE723366671",
  "this.overlay_55EF90B9_40A3_876F_4191_3C117FE32D90",
  "this.panorama_55EFB0B9_40A3_876F_4193_294E04B0D422",
  "this.overlay_51D3CE63_40A3_9BE2_41AB_26A1A30A6EC3"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -173.82,
   "class": "AdjacentPanorama",
   "backwardYaw": -165,
   "panorama": "this.panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4",
   "distance": 1
  },
  {
   "panorama": "this.panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -81.69,
   "class": "AdjacentPanorama",
   "backwardYaw": -84.49,
   "panorama": "this.panorama_4B1F3427_40A6_8F62_4199_91621A622D83",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 49.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_52A520E4_40A2_88E5_41C7_5C57C1D5E0F1",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -10.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_52795134_40A2_8966_41AD_82F13035E523",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_t.jpg"
  }
 ],
 "label": "IMG_20230329_090534_00_merged",
 "id": "panorama_54738931_40E2_B97F_41B5_4B57C10B35F7",
 "thumbnailUrl": "media/panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_t.jpg",
 "overlays": [
  "this.overlay_5473B931_40E2_B97F_41CD_39FCA791CE26",
  "this.overlay_5473A931_40E2_B97F_41B9_EE20203A5733",
  "this.panorama_54725931_40E2_B97F_41C2_1B43BB76EF04"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 112.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C63B4CE_40A2_8F22_41C7_FC041DFD908E",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_t.jpg"
  }
 ],
 "label": "2-6-5",
 "id": "panorama_4E9557B8_407D_896E_41C3_5B6428D154DB",
 "thumbnailUrl": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_t.jpg",
 "overlays": [
  "this.overlay_4E9577B8_407D_896E_41D0_135AECFD9C76",
  "this.overlay_4E9487B8_407D_896E_41C1_2562D2BB90DE",
  "this.panorama_4E9497B8_407D_896E_41CC_1521FE001B82"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -52.85,
   "class": "AdjacentPanorama",
   "backwardYaw": -68.26,
   "panorama": "this.panorama_4E80762F_407E_8B63_41B1_23FC54F34861",
   "distance": 1
  },
  {
   "yaw": 132.89,
   "class": "AdjacentPanorama",
   "backwardYaw": -11.11,
   "panorama": "this.panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 1.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C8F5470_40A2_8FFD_41C0_24B42FE94449",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4EA691BD_4062_8966_41B0_30735096F17D_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 172.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_521F5157_40A2_8922_41CD_10C92D763B3F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 126.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_52BB40F1_40A2_88FF_41BB_5032E894EF0D",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_t.jpg"
  }
 ],
 "label": "IMG_20230329_090711_00_merged",
 "id": "panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA",
 "thumbnailUrl": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_t.jpg",
 "overlays": [
  "this.overlay_55B9CC62_40E3_9FE2_41B2_C27F2456CD64",
  "this.overlay_55B9DC62_40E3_9FE2_4195_87FD24312A80",
  "this.panorama_55B9AC62_40E3_9FE2_41A4_6F2D07BB0D3C"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -153.4,
   "class": "AdjacentPanorama",
   "backwardYaw": -175.43,
   "panorama": "this.panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_t.jpg"
  }
 ],
 "label": "2-6-1",
 "id": "panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C",
 "thumbnailUrl": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_t.jpg",
 "overlays": [
  "this.overlay_4B411E37_40A3_7B63_4183_BAF2FFC51028",
  "this.overlay_4B42FE37_40A3_7B63_41A5_13FD54EF39C0",
  "this.panorama_4B42DE37_40A3_7B63_41CC_A3D96E3FC6C3"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -49.69,
   "class": "AdjacentPanorama",
   "backwardYaw": -67.49,
   "panorama": "this.panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -0.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5DF6A540_40A2_891E_41C0_591E6C9D5BCA",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -129.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_53C3D268_40A2_8BEE_41B5_8F45BF5D93B5",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_106A12CE_3552_DE0D_41B3_0DF47A86D789",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "height": 400,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "bold",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowVerticalLength": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "titleFontSize": "1.09vw",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.image_uid51766059_40A2_872F_41C3_063532950A93_0",
  "this.htmlText_106CC2CE_3552_DE0D_41C3_DF77ACA1DB96"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window38528"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 114.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_522DC207_40A2_8B22_41C5_69A7054E5CC5",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_t.jpg"
  }
 ],
 "label": "IMG_20230329_085652_00_merged",
 "id": "panorama_56C3B62F_40A7_8B63_41AF_0091007B755A",
 "thumbnailUrl": "media/panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_t.jpg",
 "overlays": [
  "this.overlay_56C3862F_40A7_8B7E_41B8_1BA6D4E50712",
  "this.overlay_56C37634_40A7_8B65_41C8_446D2A7BD38D",
  "this.overlay_56C36634_40A7_8B65_41B3_28C3FE4E156C",
  "this.panorama_56C35635_40A7_8B67_41B9_42B2AF6E4822"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -176.34,
   "class": "AdjacentPanorama",
   "backwardYaw": -130.82,
   "panorama": "this.panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0",
   "distance": 1
  },
  {
   "yaw": -177.28,
   "class": "AdjacentPanorama",
   "backwardYaw": -53.33,
   "panorama": "this.panorama_54E533E5_40A3_88E6_41AB_542C24578E8A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1-2",
 "id": "panorama_1DB25007_124A_7812_4183_C90992DC6F0B",
 "thumbnailUrl": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_t.jpg",
 "overlays": [
  "this.overlay_1DB39008_124A_781E_419A_070080CAACB2",
  "this.overlay_1DB3A008_124A_781E_4190_D09C63F2D589",
  "this.overlay_2A3B2618_35EE_C614_41A7_58BCD5FD2756",
  "this.panorama_1DB25007_124A_7812_4183_C90992DC6F0B_tcap0"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_t.jpg"
  }
 ],
 "label": "2-6-6",
 "id": "panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549",
 "thumbnailUrl": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_t.jpg",
 "overlays": [
  "this.overlay_4E09E27F_4063_8BE3_41C5_B04FFFC5FD27",
  "this.overlay_4E09B27F_4063_8BE3_41CF_10AC52B5430E",
  "this.panorama_4E07327F_4063_8BE3_41A3_9890EE1920A8"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -11.11,
   "class": "AdjacentPanorama",
   "backwardYaw": 132.89,
   "panorama": "this.panorama_4E9557B8_407D_896E_41C3_5B6428D154DB",
   "distance": 1
  },
  {
   "yaw": 169.53,
   "class": "AdjacentPanorama",
   "backwardYaw": 159.1,
   "panorama": "this.panorama_4B076B5B_40A7_9922_41CD_5F43571E024E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 4.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_53D3E283_40A2_8B22_41C5_D3A50EDE1CCD",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 177.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_52F730C0_40A2_871D_4195_3FE3158ABC86"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1CC10CE2_124B_8812_4180_81694ECE612F_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 106.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C30D50C_40A2_8926_41B3_C456FE0639DF",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_camera",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2DD7F75E_35DE_460D_41C8_56490CB7D847",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "height": 400,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "bold",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowVerticalLength": 0,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "titleFontSize": "1.09vw",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.image_uid51787055_40A2_8727_41C1_0C57689AB901_0",
  "this.htmlText_2DD7875F_35DE_460B_41C8_5AF8E5545BAA"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window11027"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_t.jpg"
  }
 ],
 "label": "IMG_20230329_090924_00_merged",
 "id": "panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E",
 "thumbnailUrl": "media/panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_t.jpg",
 "overlays": [
  "this.panorama_550E69D2_40E2_B93D_41B1_88E505103054"
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "duration": 5000,
 "label": "Security Post",
 "id": "photo_10826571_3552_5A17_41C4_8805CA037BB1",
 "thumbnailUrl": "media/photo_10826571_3552_5A17_41C4_8805CA037BB1_t.png",
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
 "class": "Photo",
 "height": 1080
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_t.jpg"
  }
 ],
 "label": "IMG_20230329_084954_00_merged",
 "id": "panorama_4B8BE548_40AD_892D_41CA_C17DBB419883",
 "thumbnailUrl": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_t.jpg",
 "overlays": [
  "this.overlay_4B8BC548_40AD_892D_41C8_B7AC96C2B371",
  "this.overlay_4B8BB548_40AD_892D_41C2_1F2FBA455080",
  "this.panorama_4B8B9548_40AD_892D_41CB_F7ACBC0DDE61"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": 117.79,
   "class": "AdjacentPanorama",
   "backwardYaw": -73.37,
   "panorama": "this.panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837",
   "distance": 1
  },
  {
   "yaw": -65.27,
   "class": "AdjacentPanorama",
   "backwardYaw": 65.5,
   "panorama": "this.panorama_54B596ED_40A2_88E6_41B7_688552C1C01E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 168.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_57027690_40A2_8B3E_41C8_0ADC97402221",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_t.jpg"
  }
 ],
 "label": "IMG_20230329_084527_00_merged",
 "id": "panorama_552B54A6_40A7_8F65_41C7_47284B2F1698",
 "thumbnailUrl": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_t.jpg",
 "overlays": [
  "this.overlay_552B14A6_40A7_8F65_41A4_7D70F380CEF9",
  "this.overlay_5528E4A6_40A7_8F65_41CA_259F5D01B040",
  "this.panorama_5528C4A6_40A7_8F65_41C1_47A974BB1365"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -76.29,
   "class": "AdjacentPanorama",
   "backwardYaw": 137.45,
   "panorama": "this.panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C",
   "distance": 1
  },
  {
   "yaw": 29.07,
   "class": "AdjacentPanorama",
   "backwardYaw": 162.39,
   "panorama": "this.panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -47.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_523DD231_40A2_8B7E_41B5_249F53DDA835",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_t.jpg"
  }
 ],
 "label": "IMG_20230329_090924_00_merged",
 "id": "panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370",
 "thumbnailUrl": "media/panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_t.jpg",
 "overlays": [
  "this.overlay_55D10D2C_40E7_9965_41B2_A25BFC867F9C",
  "this.panorama_55D11D2C_40E7_9965_41CF_7B1857CC04EC"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": 175.71,
   "class": "AdjacentPanorama",
   "backwardYaw": 5.79,
   "panorama": "this.panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "duration": 5000,
 "label": "Lobby",
 "id": "album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_0",
 "thumbnailUrl": "media/album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_0_t.png",
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
 "class": "Photo",
 "height": 1080
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1-1",
 "id": "panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE",
 "thumbnailUrl": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_t.jpg",
 "overlays": [
  "this.overlay_6F96EB75_2DDE_047F_41C4_50D41E41C48B",
  "this.overlay_6F96AB76_2DDE_047D_41C4_33B12C743C7B",
  "this.popup_2A2E1BEF_35D2_4E0B_41B4_74E56C085777",
  "this.overlay_2A817F47_35D2_467B_41A7_4B3268589955",
  "this.panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_tcap0"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": 169.2,
   "class": "AdjacentPanorama",
   "backwardYaw": 131.51,
   "panorama": "this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782",
   "distance": 1
  },
  {
   "panorama": "this.panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_2A656F49_353E_C677_417F_5E0229FD0D49"
 ],
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -179.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_537413D1_40A2_893F_41B1_7BBC78488C22",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_t.jpg"
  }
 ],
 "label": "IMG_20230329_090333_00_merged",
 "id": "panorama_4B076B5B_40A7_9922_41CD_5F43571E024E",
 "thumbnailUrl": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_t.jpg",
 "overlays": [
  "this.overlay_4B077B5C_40A7_9926_41CE_8C0404005034",
  "this.panorama_4B074B5C_40A7_9926_41D0_348DC329ACB1"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": 159.1,
   "class": "AdjacentPanorama",
   "backwardYaw": 169.53,
   "panorama": "this.panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -150.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5DA5656A_40A2_89E2_41B8_FEDDE37BA7EA",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2954FE04_35F2_49FD_41BF_087A6F31BBBB",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "height": 400,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "bold",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowVerticalLength": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "titleFontSize": "1.09vw",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.image_uid5162C04E_40A2_8725_41A6_5A2E3A3D9EC0_0",
  "this.htmlText_29553E05_35F2_49FF_41AC_B772EF3672DF"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window26182"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_t.jpg"
  }
 ],
 "label": "2-6-4",
 "id": "panorama_4E80762F_407E_8B63_41B1_23FC54F34861",
 "thumbnailUrl": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_t.jpg",
 "overlays": [
  "this.overlay_4E80562F_407E_8B63_41B8_99D941252B55",
  "this.overlay_4E80262F_407E_8B63_4193_E0F320C546F8",
  "this.panorama_4E80162F_407E_8B63_41CD_7C58BF3FCBFE"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -68.26,
   "class": "AdjacentPanorama",
   "backwardYaw": -52.85,
   "panorama": "this.panorama_4E9557B8_407D_896E_41C3_5B6428D154DB",
   "distance": 1
  },
  {
   "yaw": -158.91,
   "class": "AdjacentPanorama",
   "backwardYaw": 42.08,
   "panorama": "this.panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4B1F3427_40A6_8F62_4199_91621A622D83_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_t.jpg"
  }
 ],
 "label": "2-6-2",
 "id": "panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA",
 "thumbnailUrl": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_t.jpg",
 "overlays": [
  "this.overlay_4DF21CB3_407E_9F62_41BC_9D01B4A9EBA2",
  "this.overlay_4DF22CB3_407E_9F62_41A5_CFF47245E7A4",
  "this.overlay_4DF23CB3_407E_9F62_41BD_ED76558A3860",
  "this.panorama_4DF27CB3_407E_9F62_41C1_D23DA1E21D14"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": 7.1,
   "class": "AdjacentPanorama",
   "backwardYaw": 133.88,
   "panorama": "this.panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412",
   "distance": 1
  },
  {
   "panorama": "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -67.49,
   "class": "AdjacentPanorama",
   "backwardYaw": -49.69,
   "panorama": "this.panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 6.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_53F272C0_40A2_8B1D_41AC_6E2E909FE446",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -4.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C1044F3_40A2_88E2_41B5_1119A6FB74FF",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -112.67,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_2A2E1BEF_35D2_4E0B_41B4_74E56C085777",
 "popupDistance": 100,
 "popupMaxHeight": "80%",
 "loop": false,
 "popupMaxWidth": "80%",
 "hfov": 24.65,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 35.76,
 "video": {
  "width": 720,
  "mp4Url": "media/video_2A1F5F58_35D2_C615_41C4_AA70604C64C5.mp4",
  "class": "VideoResource",
  "height": 576
 }
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_197D7E96_36D2_461D_41B6_939290820326",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "height": 400,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "bold",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowVerticalLength": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "titleFontSize": "1.09vw",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.image_uid517D3053_40A2_8723_41C2_CCE6E157C915_0",
  "this.htmlText_19762E95_36D2_461E_41C8_127B00CD56A3"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window26182"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_t.jpg"
  }
 ],
 "label": "IMG_20230329_123618_00_merged",
 "id": "panorama_15E20E42_3532_4674_41A2_17FF096E6F9B",
 "thumbnailUrl": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_t.jpg",
 "overlays": [
  "this.overlay_15E21E42_3532_4674_41C9_B4341A7323B4",
  "this.panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_tcap0"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": 50.11,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.37,
   "panorama": "this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_t.jpg"
  }
 ],
 "label": "2-6-3",
 "id": "panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412",
 "thumbnailUrl": "media/panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_t.jpg",
 "overlays": [
  "this.overlay_4DFE40EE_407E_88E2_41C8_0F7E4DC2D6CD",
  "this.overlay_4DFEB0EE_407E_88E2_41C6_9FBB6D6FB14F",
  "this.overlay_4DFEA0EE_407E_88E2_41CD_CB8921D7E171",
  "this.panorama_4DFE90EE_407E_88E2_4189_3E2921C4A295"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": 42.08,
   "class": "AdjacentPanorama",
   "backwardYaw": -158.91,
   "panorama": "this.panorama_4E80762F_407E_8B63_41B1_23FC54F34861",
   "distance": 1
  },
  {
   "yaw": 133.88,
   "class": "AdjacentPanorama",
   "backwardYaw": 7.1,
   "panorama": "this.panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "duration": 5000,
 "label": "Cashier",
 "id": "photo_10E8EB8B_3552_4E0B_41BD_B8737F552A8A",
 "thumbnailUrl": "media/photo_10E8EB8B_3552_4E0B_41BD_B8737F552A8A_t.png",
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
 "class": "Photo",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E80762F_407E_8B63_41B1_23FC54F34861_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5CC9143E_40A2_8F65_41CD_8B45F695E0A5",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_51CFBDDB_40A3_9922_41BA_9CD8549881DD",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "height": 400,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowVerticalLength": 0,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "titleFontSize": "1.29vmin",
 "headerPaddingRight": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.image_uid5173405D_40A2_8727_41C0_DB3BD5205963_0",
  "this.htmlText_51CC7DD5_40A3_9926_41C1_7C1B609B9194"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window9558"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 21.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_531463FF_40A2_88E3_41CB_EE09ED6E5A46",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_t.jpg"
  }
 ],
 "label": "IMG_20230329_124129_00_merged",
 "id": "panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043",
 "thumbnailUrl": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_t.jpg",
 "overlays": [
  "this.overlay_4B2A4595_40A5_8926_41C4_E40045BB1FA3",
  "this.overlay_4B2A7595_40A5_8926_41B0_373914763DE5",
  "this.panorama_4B2A6595_40A5_8926_41A0_0F3E37E82D50"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -67.69,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.26,
   "panorama": "this.panorama_4B1F3427_40A6_8F62_4199_91621A622D83",
   "distance": 1
  },
  {
   "panorama": "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 40.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5DE66531_40A2_897E_41C2_71CDAB6BE400",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_t.jpg"
  }
 ],
 "label": "1-5",
 "id": "panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2",
 "thumbnailUrl": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_t.jpg",
 "overlays": [
  "this.overlay_13FB3322_07AF_B0FB_4190_88C3AA9C9DC9",
  "this.overlay_05079367_12DA_9812_419B_49D527A444D6",
  "this.overlay_54F41002_35C2_0395_41B4_5A41FC98D127",
  "this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_tcap0"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -139.62,
   "class": "AdjacentPanorama",
   "backwardYaw": -178.59,
   "panorama": "this.panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4",
   "distance": 1
  },
  {
   "yaw": -7.2,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.69,
   "panorama": "this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782",
   "distance": 1
  },
  {
   "yaw": 179.79,
   "class": "AdjacentPanorama",
   "backwardYaw": 69.72,
   "panorama": "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -175.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5390F30B_40A2_8923_41BD_1B053540885F",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "label": "Gate",
 "id": "photo_10E01DE3_3552_4A3B_41B3_183646F4C9BD",
 "thumbnailUrl": "media/photo_10E01DE3_3552_4A3B_41B3_183646F4C9BD_t.png",
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
 "class": "Photo",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 3.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5761C646_40A2_8B22_4192_D877D30FA216",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 142.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_53E2B29C_40A2_8B26_41B2_57268BFCBA84",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_4A6887B9_405D_896E_41CC_1F4E02D5D7EF",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "minHeight": 20,
 "closeButtonRollOverIconLineWidth": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderSize": 0,
 "shadowHorizontalLength": 3,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "minWidth": 20,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 0,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.viewer_uid517BB057_40A2_8723_41A5_875B02F33E4C"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "closeButtonBackgroundOpacity": 0.3,
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "data": {
  "name": "Window438"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -88.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5770E66B_40A2_8BE2_41BF_53EC74B57294",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "label": "Employee Locker",
 "id": "photo_51708766_40AE_89E5_41D0_94EF3727732F",
 "thumbnailUrl": "media/photo_51708766_40AE_89E5_41D0_94EF3727732F_t.png",
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
 "class": "Photo",
 "height": 1080
},
{
 "duration": 5000,
 "label": "Server Room",
 "id": "photo_12128DEF_3552_4A0B_41BC_D30017821B05",
 "thumbnailUrl": "media/photo_12128DEF_3552_4A0B_41BC_D30017821B05_t.png",
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
 "class": "Photo",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": -42.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5356139A_40A2_892D_41CD_72075EF5343D",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_t.jpg"
  }
 ],
 "label": "IMG_20230329_085758_00_merged",
 "id": "panorama_54E533E5_40A3_88E6_41AB_542C24578E8A",
 "thumbnailUrl": "media/panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_t.jpg",
 "overlays": [
  "this.overlay_54E563E6_40A3_88E2_41A0_E8A4B4BE5CF6",
  "this.panorama_54E693E6_40A3_88E2_41CC_72F7DEB21B6D"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -53.33,
   "class": "AdjacentPanorama",
   "backwardYaw": -177.28,
   "panorama": "this.panorama_56C3B62F_40A7_8B63_41AF_0091007B755A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -20.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5233D24D_40A2_8B26_41CB_4E633C3828CB",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_t.jpg"
  }
 ],
 "label": "IMG_20230329_085247_00_merged",
 "id": "panorama_54B596ED_40A2_88E6_41B7_688552C1C01E",
 "thumbnailUrl": "media/panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_t.jpg",
 "overlays": [
  "this.overlay_54B646ED_40A2_88E6_41C6_02A410D4D503",
  "this.overlay_54B676ED_40A2_88E6_41B6_3C65D3F32BEC",
  "this.panorama_54B666ED_40A2_88E6_41B6_5DB6C3AD7861"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -113.38,
   "class": "AdjacentPanorama",
   "backwardYaw": -7.34,
   "panorama": "this.panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10",
   "distance": 1
  },
  {
   "yaw": 65.5,
   "class": "AdjacentPanorama",
   "backwardYaw": -65.27,
   "panorama": "this.panorama_4B8BE548_40AD_892D_41CA_C17DBB419883",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_camera",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2A16D5DD_35EE_DA0C_4195_9F6663D606DB",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "height": 400,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "bold",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowVerticalLength": 0,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "titleFontSize": "1.09vw",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.image_uid517FA055_40A2_8727_41AB_704BACD5DA47_0",
  "this.htmlText_2A1D15DB_35EE_DA14_41B9_091829167FAA"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window27705"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "items": [
  {
   "media": "this.video_2A1F5F58_35D2_C615_41C4_AA70604C64C5",
   "start": "this.viewer_uid517BB057_40A2_8723_41A5_875B02F33E4CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_513AA087_40A2_8723_41C2_98033A53FEAA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_513AA087_40A2_8723_41C2_98033A53FEAA, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid517BB057_40A2_8723_41A5_875B02F33E4CVideoPlayer)",
   "player": "this.viewer_uid517BB057_40A2_8723_41A5_875B02F33E4CVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_513AA087_40A2_8723_41C2_98033A53FEAA",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -167.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_570F7678_40A2_8BEE_41B5_D0DB9A5D6D8B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -131.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5D851551_40A2_893E_41C2_905FEBC63C12",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 95.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_52E040B4_40A2_8765_41C3_470BF7E829D3",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_t.jpg"
  }
 ],
 "label": "IMG_20230329_084417_00_merged",
 "id": "panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D",
 "thumbnailUrl": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_t.jpg",
 "overlays": [
  "this.overlay_4A76B9D6_40AD_B925_41CE_8CF912D8C7C0",
  "this.overlay_4A76A9D6_40AD_B925_41C7_1F9ED592711E",
  "this.panorama_4A76E9DB_40AD_B923_41BA_A6601A2995AF"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -133.72,
   "class": "AdjacentPanorama",
   "backwardYaw": -12.37,
   "panorama": "this.panorama_4B1F3427_40A6_8F62_4199_91621A622D83",
   "distance": 1
  },
  {
   "yaw": 162.39,
   "class": "AdjacentPanorama",
   "backwardYaw": 29.07,
   "panorama": "this.panorama_552B54A6_40A7_8F65_41C7_47284B2F1698",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_t.jpg"
  }
 ],
 "label": "2-3",
 "id": "panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447",
 "thumbnailUrl": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_t.jpg",
 "overlays": [
  "this.overlay_4D2BEEAC_407E_9B66_41C7_2184BEBEBE5D",
  "this.overlay_4D281EAC_407E_9B66_41C8_C9B703152172",
  "this.overlay_4D283EAC_407E_9B66_419A_CE39523DCDD2",
  "this.panorama_4D284EAC_407E_9B66_419B_3D7816D98161"
 ],
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "yaw": 48.98,
   "class": "AdjacentPanorama",
   "backwardYaw": 91.69,
   "panorama": "this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0",
   "distance": 1
  },
  {
   "yaw": -133.24,
   "class": "AdjacentPanorama",
   "backwardYaw": 12.63,
   "panorama": "this.panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 98.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C4344B6_40A2_8F62_41A8_0075FF641306",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "snapshots": [
    "this.snapshot_2A2BC60A_3531_F9F4_41A9_AA76F3997A9E"
   ],
   "front": {
    "levels": [
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_t.jpg"
  }
 ],
 "label": "2",
 "id": "panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0",
 "thumbnailUrl": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_t.jpg",
 "overlays": [
  "this.overlay_150CA8F0_3552_4A15_41C5_7C6EB52BCB1C",
  "this.overlay_150C88F0_3552_4A15_41C7_FB31E2E678D3",
  "this.overlay_150C98F0_3552_4A15_41BE_6F9EEB31BFBB",
  "this.overlay_13021003_3553_B9FB_4192_CC43E5A1D32A",
  "this.panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_tcap0"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -2.62,
   "class": "AdjacentPanorama",
   "backwardYaw": -37.42,
   "panorama": "this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B",
   "distance": 1
  },
  {
   "panorama": "this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_camera"
  },
  {
   "media": "this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F_camera"
  },
  {
   "media": "this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_camera"
  },
  {
   "media": "this.panorama_1DB25007_124A_7812_4183_C90992DC6F0B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1DB25007_124A_7812_4183_C90992DC6F0B_camera"
  },
  {
   "media": "this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_camera"
  },
  {
   "media": "this.panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_camera"
  },
  {
   "media": "this.panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_camera"
  },
  {
   "media": "this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_camera"
  },
  {
   "media": "this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_camera"
  },
  {
   "media": "this.panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_camera"
  },
  {
   "media": "this.panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_camera"
  },
  {
   "media": "this.panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_camera"
  },
  {
   "media": "this.panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_camera"
  },
  {
   "media": "this.panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_camera"
  },
  {
   "media": "this.panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_camera"
  },
  {
   "media": "this.panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412_camera"
  },
  {
   "media": "this.panorama_4E80762F_407E_8B63_41B1_23FC54F34861",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E80762F_407E_8B63_41B1_23FC54F34861_camera"
  },
  {
   "media": "this.panorama_4E9557B8_407D_896E_41C3_5B6428D154DB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_camera"
  },
  {
   "media": "this.panorama_4B076B5B_40A7_9922_41CD_5F43571E024E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_camera"
  },
  {
   "media": "this.panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_camera"
  },
  {
   "media": "this.panorama_4EA691BD_4062_8966_41B0_30735096F17D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EA691BD_4062_8966_41B0_30735096F17D_camera"
  },
  {
   "media": "this.panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55911C65_40EE_9FE1_4182_D950D36FBBFF_camera"
  },
  {
   "media": "this.panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_550E49D2_40E2_B93D_41C8_8B4C114B660E_camera"
  },
  {
   "media": "this.panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_camera"
  },
  {
   "media": "this.panorama_552B54A6_40A7_8F65_41C7_47284B2F1698",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_camera"
  },
  {
   "media": "this.panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C_camera"
  },
  {
   "media": "this.panorama_4B8BE548_40AD_892D_41CA_C17DBB419883",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_camera"
  },
  {
   "media": "this.panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_camera"
  },
  {
   "media": "this.panorama_54B596ED_40A2_88E6_41B7_688552C1C01E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_54B596ED_40A2_88E6_41B7_688552C1C01E_camera"
  },
  {
   "media": "this.panorama_54E533E5_40A3_88E6_41AB_542C24578E8A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_54E533E5_40A3_88E6_41AB_542C24578E8A_camera"
  },
  {
   "media": "this.panorama_54738931_40E2_B97F_41B5_4B57C10B35F7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_54738931_40E2_B97F_41B5_4B57C10B35F7_camera"
  },
  {
   "media": "this.panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_camera"
  },
  {
   "media": "this.panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03_camera"
  },
  {
   "media": "this.panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370_camera"
  },
  {
   "media": "this.panorama_56C3B62F_40A7_8B63_41AF_0091007B755A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_56C3B62F_40A7_8B63_41AF_0091007B755A_camera"
  },
  {
   "media": "this.panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_camera"
  },
  {
   "media": "this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_camera"
  },
  {
   "media": "this.panorama_15E20E42_3532_4674_41A2_17FF096E6F9B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_camera"
  },
  {
   "media": "this.panorama_4B1F3427_40A6_8F62_4199_91621A622D83",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4B1F3427_40A6_8F62_4199_91621A622D83_camera"
  },
  {
   "media": "this.panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_camera"
  },
  {
   "media": "this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_camera"
  },
  {
   "media": "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677_camera"
  },
  {
   "media": "this.panorama_55F8C351_40DD_893E_41CC_D52E523A6F81",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55F8C351_40DD_893E_41CC_D52E523A6F81_camera"
  },
  {
   "media": "this.panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "media": "this.album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "media": "this.video_2A1F5F58_35D2_C615_41C4_AA70604C64C5",
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
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_t.jpg"
  }
 ],
 "label": "IMG_20230329_123026_00_merged",
 "id": "panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782",
 "thumbnailUrl": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_t.jpg",
 "overlays": [
  "this.overlay_5AFF98C2_3742_0495_41C7_2CEF2F435363",
  "this.overlay_5AFE68C2_3742_0495_41A8_FEF9F7FA8C29",
  "this.overlay_5AFE38C2_3742_0495_41B6_CCD46162636C",
  "this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_tcap0"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1DB25007_124A_7812_4183_C90992DC6F0B",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 179.69,
   "class": "AdjacentPanorama",
   "backwardYaw": -7.2,
   "panorama": "this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2",
   "distance": 1
  },
  {
   "yaw": 131.51,
   "class": "AdjacentPanorama",
   "backwardYaw": 169.2,
   "panorama": "this.panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_2A656F49_353E_C677_417F_5E0229FD0D49.ogg",
  "mp3Url": "media/audio_2A656F49_353E_C677_417F_5E0229FD0D49.mp3",
  "class": "AudioResource"
 },
 "id": "audio_2A656F49_353E_C677_417F_5E0229FD0D49",
 "data": {
  "label": "Deluxe Hotel Lobby Music"
 }
},
{
 "initialPosition": {
  "yaw": -10.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_571536A9_40A2_8B6E_41AA_281D1F1E1915",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_t.jpg"
  }
 ],
 "label": "IMG_20230329_085119_00_merged",
 "id": "panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837",
 "thumbnailUrl": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_t.jpg",
 "overlays": [
  "this.overlay_4A74D7F8_40A2_88ED_4169_B463CBB54B84",
  "this.panorama_4A74C7F8_40A2_88ED_4197_3E9BF511AFE4"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "yaw": -73.37,
   "class": "AdjacentPanorama",
   "backwardYaw": 117.79,
   "panorama": "this.panorama_4B8BE548_40AD_892D_41CA_C17DBB419883",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_1D1459DE_36D3_CA0D_41CA_A7DC2F2C08BE",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "height": 400,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "bold",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowVerticalLength": 0,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "titleFontSize": "1.09vw",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.image_uid5177C05B_40A2_8723_41C5_731B209E26F9_0",
  "this.htmlText_1D1169D8_36D3_CA15_41A3_BD4579958554"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window50568"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "initialPosition": {
  "yaw": 90.07,
  "class": "PanoramaCameraPosition",
  "pitch": -5.92
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1DB25007_124A_7812_4183_C90992DC6F0B_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_t.jpg"
  }
 ],
 "label": "IMG_20230329_123537_00_merged",
 "id": "panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0",
 "thumbnailUrl": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_t.jpg",
 "overlays": [
  "this.overlay_14B72C79_3532_4A17_41A0_8FB31137F75C",
  "this.overlay_14B73C79_3532_4A17_41C0_B44BB926ABE3",
  "this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_tcap0"
 ],
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 0.37,
   "class": "AdjacentPanorama",
   "backwardYaw": 50.11,
   "panorama": "this.panorama_15E20E42_3532_4674_41A2_17FF096E6F9B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 46.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5380C2E6_40A2_88E5_41AC_D54FE166486E",
 "class": "PanoramaCamera"
},
{
 "label": "Photo Album Lobby",
 "id": "album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2",
 "thumbnailUrl": "media/album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_AlbumPlayList"
},
{
 "initialPosition": {
  "yaw": -0.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C9E147C_40A2_8FE6_41B3_C7F0EBB02F9D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -62.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_571EF69D_40A2_8B26_41BE_989A6FB06A38",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -167.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_53A0E330_40A2_897D_41D0_B6C377FE3C6D",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_103E6DF6_3553_CA1D_41C9_721536F2CF0C",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "height": 400,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "bold",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowVerticalLength": 0,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "titleFontSize": "1.09vw",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.image_uid5177505A_40A2_872D_41A9_D11DB9705872_0",
  "this.htmlText_10382DF6_3553_CA1D_41BE_3F2BD2A75357"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window41602"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowHorizontalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
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
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
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
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
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
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0.55,
 "right": 0,
 "class": "UIComponent",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent11145"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "class": "ZoomImage",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage11146"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "class": "CloseButton",
 "paddingRight": 5,
 "paddingLeft": 5,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton11147"
 },
 "shadow": false,
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
   "hfov": 21.84,
   "yaw": -84.3,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -14.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B, this.camera_5DF6A540_40A2_891E_41C0_591E6C9D5BCA); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1FF28474_356E_5A1C_41A0_42048FF27931",
   "pitch": -14.18,
   "hfov": 21.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -84.3
  }
 ],
 "id": "overlay_1400A319_3552_DE14_41C1_3A80F0B5C293",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.24,
   "yaw": 91.69,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -13.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447, this.camera_5D851551_40A2_893E_41C2_905FEBC63C12); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1FF22474_356E_5A1C_41C4_27336B2A1F28",
   "pitch": -13.48,
   "hfov": 24.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 91.69
  }
 ],
 "id": "overlay_14008319_3552_DE14_41CA_BEDDC455048A",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.16,
   "yaw": 137.45,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -28.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_552B54A6_40A7_8F65_41C7_47284B2F1698, this.camera_5765963A_40A2_8B62_41C5_8656FA65B31C); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_51044063_40A2_87E3_41CD_CB8F6F6FBB63",
   "pitch": -28.67,
   "hfov": 32.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 137.45
  }
 ],
 "id": "overlay_54327A0B_40E2_9B23_41C5_F7208A06A3D5",
 "data": {
  "label": "Arrow 05b Right"
 }
},
{
 "inertia": true,
 "id": "panorama_54320A0B_40E2_9B23_41BC_9D33C9AA4A1C",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.38,
   "yaw": 12.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447, this.camera_5380C2E6_40A2_88E5_41AC_D54FE166486E); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5177205B_40A2_8723_41C0_94D8FF47CDE7",
   "pitch": -22.15,
   "hfov": 18.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 12.63
  }
 ],
 "id": "overlay_280BB230_399D_6EEB_41C6_0E790F72A8AC",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.98,
   "yaw": -165,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E, this.camera_53F272C0_40A2_8B1D_41AC_6E2E909FE446); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5177605B_40A2_8723_419F_9BF279820E85",
   "pitch": -23.25,
   "hfov": 17.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -165
  }
 ],
 "id": "overlay_280B8230_399D_6EEB_41BF_C9EDA74512FA",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.77,
   "yaw": -31.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_5177805B_40A2_8723_41A7_9E61310AAB50",
   "pitch": 7.32,
   "hfov": 20.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -31.66
  }
 ],
 "id": "overlay_280B6230_399D_6EEB_41B9_1EBD081EF9CD",
 "data": {
  "label": "Info 02"
 }
},
{
 "inertia": true,
 "id": "panorama_280B4230_399D_6EEB_4197_EE008ECDF6C4",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "inertia": true,
 "id": "panorama_4EA6A1BD_4062_8966_41CC_1185EBC32F4F",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.55,
   "yaw": 4.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55F8C351_40DD_893E_41CC_D52E523A6F81, this.camera_5DD7A524_40A2_8966_41C6_1DDF3544CEDA); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511BA077_40A2_87E3_41B8_7396AD85D654",
   "pitch": -28.26,
   "hfov": 15.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 4.47
  }
 ],
 "id": "overlay_5569C8A8_40DD_876D_41CB_6EA9FFCC5D16",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.43,
   "yaw": -178.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2, this.camera_5DE66531_40A2_897E_41C2_71CDAB6BE400); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_51141077_40A2_87E3_41C0_BA89D32FF558",
   "pitch": -21.4,
   "hfov": 16.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -178.59
  }
 ],
 "id": "overlay_5569F8A8_40DD_876D_41C6_5CD479F58B77",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_556988A8_40DD_876D_41C4_FD822A4C464D",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.03,
   "yaw": 5.79,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -23.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55D12D2B_40E7_9962_41D1_0EC0723CF370, this.camera_5C1044F3_40A2_88E2_41B5_1119A6FB74FF); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5101F06A_40A2_87ED_41CA_D70556431954",
   "pitch": -23.25,
   "hfov": 23.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 5.79
  }
 ],
 "id": "overlay_56ED880D_40E7_8726_41A2_70D502CD04E2",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.85,
   "yaw": -175.43,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -19.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA, this.camera_5C20E500_40A2_891E_41CA_17D7B01E27E2); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5102606A_40A2_87ED_418E_E098F7385E77",
   "pitch": -19.94,
   "hfov": 24.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -175.43
  }
 ],
 "id": "overlay_56EDE80E_40E7_8722_41C1_68BCFA8D69C0",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_56EDF80E_40E7_8722_41D0_BDAA6BD2EA4C",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.32,
   "yaw": -84.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E, this.camera_5C4344B6_40A2_8F62_41A8_0075FF641306); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511D1070_40A2_87FD_41C8_743396EDE390",
   "pitch": 7.41,
   "hfov": 18.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -84.49
  }
 ],
 "id": "overlay_4B1F2427_40A6_8F62_41C3_6C6CBE7C3712",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 33.54,
   "yaw": -12.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D, this.camera_5CBCD49D_40A2_8F26_41D0_215D349C9F84); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511D4070_40A2_87FD_41CF_B172E0FE99EB",
   "pitch": -34.46,
   "hfov": 33.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -12.37
  }
 ],
 "id": "overlay_4B1FC427_40A6_8F62_41B4_0ECB84E94358",
 "data": {
  "label": "Circle Arrow 01a Left-UP"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.04,
   "yaw": 0.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_1_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043, this.camera_5C4C84A9_40A2_8F6E_41BC_63CAE5925244); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511DD071_40A2_87FF_41B4_61506476DCE1",
   "pitch": -18.95,
   "hfov": 27.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 0.26
  }
 ],
 "id": "overlay_4B1FE427_40A6_8F62_41CC_B228670BD54D",
 "data": {
  "label": "Circle Arrow 01a Left"
 }
},
{
 "inertia": true,
 "id": "panorama_4B1F9427_40A6_8F62_41BE_C2D703428A0E",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "inertia": true,
 "id": "panorama_55912C66_40EE_9FE2_41CB_2CFDBCE0C2ED",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 31.48,
   "yaw": 69.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2, this.camera_529510D8_40A2_872D_41C5_DB1EC74402D8); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F9A649B_356E_5A14_41C6_18D4F153BE6F",
   "pitch": -20.78,
   "hfov": 31.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 69.72
  }
 ],
 "id": "overlay_0109478B_1249_9812_415C_71848DC339B8",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.96,
   "yaw": -135.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_1_HS_2_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F99E49C_356E_5A0C_41CA_A742716E68B9",
   "pitch": 11.34,
   "hfov": 25.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -135.46
  }
 ],
 "id": "overlay_62B585B2_353E_0CF5_41B0_786774143B86",
 "data": {
  "label": "Arrow 05a Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.97,
   "yaw": -110.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F99549C_356E_5A0C_41C3_464051B86C61",
   "pitch": -28.16,
   "hfov": 20.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -110.79
  }
 ],
 "id": "overlay_619CFDD0_35C2_1CB5_41C5_B7480B9261CD",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.18,
   "yaw": 12.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_1_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55F8C351_40DD_893E_41CC_D52E523A6F81, this.camera_5286F0CC_40A2_8725_41CC_7F63B4BB24C3); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F99049C_356E_5A0C_414D_8966EB944398",
   "pitch": -26.61,
   "hfov": 21.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 12.36
  }
 ],
 "id": "overlay_57EF48BA_35C2_04F5_41C2_E5A821EE04C0",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_1C113258_124A_783E_41AE_7AD1810FD677_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "inertia": true,
 "id": "panorama_1CC10CE2_124B_8812_4180_81694ECE612F_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.82,
   "yaw": 169.93,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -25.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD, this.camera_577F5653_40A2_8B22_4171_7B660983AB7D); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1FFB1468_356E_5A34_41C5_DA68ECB6C41E",
   "pitch": -25.76,
   "hfov": 21.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 169.93
  }
 ],
 "id": "overlay_270BF7A3_3532_463B_4191_49C6652F8A62",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.28,
   "yaw": -3.02,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -29.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA, this.camera_5774D65F_40A2_8B22_41BE_727EA48A85CF); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1FFAA468_356E_5A35_418D_8117B969CBAB",
   "pitch": -29.57,
   "hfov": 22.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -3.02
  }
 ],
 "id": "overlay_266A0C03_3536_49F4_4192_6D9509FD5876",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.41,
   "yaw": 107.56,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": 11.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_1FFA6469_356E_5A34_41C1_4FB41B65B8D9",
   "pitch": 11.91,
   "hfov": 19.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 107.56
  }
 ],
 "id": "overlay_2C479218_35FE_BE15_41C0_8242AB3B9F4D",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.04,
   "yaw": -62.39,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -0.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_04842AF6_36D6_4E1D_41BB_4DA1913C2516",
   "pitch": -0.62,
   "hfov": 22.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -62.39
  }
 ],
 "id": "overlay_19A78ECF_36D2_460B_41C8_3CBDA69BFBCF",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.04,
   "yaw": 166.29,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -12.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_1FF9A469_356E_5A34_41C6_82B9B85F9784",
   "pitch": -12.55,
   "hfov": 22.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 166.29
  }
 ],
 "id": "overlay_23C892D7_3536_BE1B_41C7_9307724EA237",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.79,
   "yaw": 83.81,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -14.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F, this.camera_5CFFF464_40A2_8FE5_41CC_8552458EB924); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1FF97469_356E_5A34_41A4_B7B075C9EAD1",
   "pitch": -14.67,
   "hfov": 20.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 83.81
  }
 ],
 "id": "overlay_23C8A2D7_3536_BE1B_4191_07A77F127C03",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.08,
   "yaw": 118.26,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": 10.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_1FF9146A_356E_5A34_41C3_CDE11304406D",
   "pitch": 10.41,
   "hfov": 17.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 118.26
  }
 ],
 "id": "overlay_2C2ABB44_35F2_4E7D_41AC_B4DF4C850CBA",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.4,
   "yaw": -97.12,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": 15.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_1FF8946A_356E_5A34_41C1_D4C107F6CB3A",
   "pitch": 15.08,
   "hfov": 23.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -97.12
  }
 ],
 "id": "overlay_2E61B3EF_35F2_DE0C_41C5_DF84C0F72069",
 "data": {
  "label": "Info 02"
 }
},
{
 "inertia": true,
 "id": "panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23,
   "yaw": -130.82,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -20.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56C3B62F_40A7_8B63_41AF_0091007B755A, this.camera_5761C646_40A2_8B22_4192_D877D30FA216); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5103606D_40A2_87E6_41C9_7B1180FEED1E",
   "pitch": -20.23,
   "hfov": 23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -130.82
  }
 ],
 "id": "overlay_55EF5CF9_40A2_98EF_41AF_897699136286",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_55EF2CF9_40A2_98EF_41D1_12D0D3A053EF",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.22,
   "yaw": -14.48,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -30.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1C113258_124A_783E_41AE_7AD1810FD677, this.camera_53A0E330_40A2_897D_41D0_B6C377FE3C6D); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511AB076_40A2_87E5_41CB_D160700110D3",
   "pitch": -30.39,
   "hfov": 15.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -14.48
  }
 ],
 "id": "overlay_55F8E351_40DD_893E_41CD_B883B175C4BA",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.26,
   "yaw": 160.68,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -22.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4, this.camera_5390F30B_40A2_8923_41BD_1B053540885F); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511AD077_40A2_87E3_41CB_7AD71F4A666D",
   "pitch": -22.91,
   "hfov": 16.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 160.68
  }
 ],
 "id": "overlay_55F81351_40DD_893E_41C9_0A372694240F",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_55F80351_40DD_893E_41CB_285EB625A4D2",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.14,
   "yaw": -171.38,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -13.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F, this.camera_5CEFF457_40A2_8F23_41D1_0742A1564D86); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1FFED45F_356E_5A0C_4181_B5271EA15E0C",
   "pitch": -13.83,
   "hfov": 25.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -171.38
  }
 ],
 "id": "overlay_3BC283F4_3532_DE1D_41B6_AB517704C443",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.43,
   "yaw": 153.89,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": 6.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_1FFE0460_356E_5A34_41A4_D23C6AB08328",
   "pitch": 6.78,
   "hfov": 16.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 153.89
  }
 ],
 "id": "overlay_2E5A4CF1_35F7_CA14_41A4_3CC8E2870557",
 "data": {
  "label": "Info 02"
 }
},
{
 "inertia": true,
 "id": "panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "horizontalAlign": "center",
 "id": "image_uid5171505C_40A2_8725_41C3_B5D635B03DDF_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_1261A9DC_3552_4A0D_41C8_A66642AEAE94.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11143"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_1CBAC6D3_36D2_C614_41C2_331984E8A120",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText50569"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 33.43,
   "yaw": -61.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_5173D05D_40A2_8727_41B6_FFED94E6C268",
   "pitch": -32.81,
   "hfov": 33.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -61.35
  }
 ],
 "id": "overlay_4D05BD8B_407E_9923_41B6_0C199A46A6FF",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 33.16,
   "yaw": 143.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_1_HS_2_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_510C005D_40A2_8727_41A2_3804B6492FCC",
   "pitch": -30.55,
   "hfov": 33.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 143.11
  }
 ],
 "id": "overlay_4D058D8B_407E_9923_41C9_07785C4BB29E",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.72,
   "yaw": -7.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_1_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_54B596ED_40A2_88E6_41B7_688552C1C01E, this.camera_533AB42A_40A2_8F6D_41B9_FF30BE9B534D); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_510C405E_40A2_8725_41C3_DEB90ABB5412",
   "pitch": -20.18,
   "hfov": 21.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -7.34
  }
 ],
 "id": "overlay_4D059D8B_407E_9923_41C8_FDB323FE6BB8",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.56,
   "yaw": -75.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_1_HS_4_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_510D205E_40A2_8725_41D0_F342235B3D14",
   "pitch": -18.17,
   "hfov": 25.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -75.74
  }
 ],
 "id": "overlay_4D024D8B_407E_9923_41C5_8D87C5885CB4",
 "data": {
  "label": "Circle Arrow 01c Right"
 }
},
{
 "inertia": true,
 "id": "panorama_4D025D8B_407E_9923_41D0_037BFE77A38A",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "horizontalAlign": "center",
 "id": "image_uid517EB054_40A2_8725_41B5_B10EA7D0D73A_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_29D7150E_35F1_DA0D_41CA_C642220447F5.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11136"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_28774315_35F2_5E1E_41BC_AFCAE8549430",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText27706"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "image_uid517DC053_40A2_8723_41CB_AF8CF8D305E6_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_2FB5CFE7_35F2_C63B_41BB_92207220D6DD.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11135"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_2F894DE9_35F2_4A34_41BA_DD37E4162FBB",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText20224"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "image_uid517CB052_40A2_873D_41C5_841D806AFED4_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_2FB5CFE7_35F2_C63B_41BB_92207220D6DD.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11133"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_2C5721DA_35FE_BA15_41A0_AE91364F4110",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText20224"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.26,
   "yaw": -37.42,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -18.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0, this.camera_52F730C0_40A2_871D_4195_3FE3158ABC86); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1FF36473_356E_5A14_41C9_592CD974C745",
   "pitch": -18.57,
   "hfov": 22.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -37.42
  }
 ],
 "id": "overlay_1424D199_3552_DA14_41B6_D8B321F62213",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.87,
   "yaw": 179.3,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": 8.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0, this.camera_52E040B4_40A2_8765_41C3_470BF7E829D3); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1FF30474_356E_5A1C_41AF_778A486298FF",
   "pitch": 8.32,
   "hfov": 21.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 179.3
  }
 ],
 "id": "overlay_1424E199_3552_DA14_41C2_4DED915935F5",
 "data": {
  "label": "Arrow 06c Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.34,
   "yaw": -17.23,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": 10.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_04935AFE_36D6_4E0C_41BF_763E18B5F846",
   "pitch": 10.67,
   "hfov": 17.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -17.23
  }
 ],
 "id": "overlay_12F2F8BD_3551_CA0F_41BA_87F583328CDF",
 "data": {
  "label": "Info 02"
 }
},
{
 "inertia": true,
 "id": "panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.9,
   "yaw": -173.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4, this.camera_5CC9143E_40A2_8F65_41CD_8B45F695E0A5); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5172305C_40A2_8725_41A7_98EF4F8423C6",
   "pitch": -10.42,
   "hfov": 17.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -173.82
  }
 ],
 "id": "overlay_55EFF0B8_40A3_876E_4169_A31A1537EEF6",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.68,
   "yaw": 5.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_5172605C_40A2_8725_41BF_7E61A9FF63B3",
   "pitch": -17.5,
   "hfov": 17.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 5.89
  }
 ],
 "id": "overlay_55EF80B9_40A3_876F_41A1_4FE723366671",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.18,
   "yaw": -81.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B1F3427_40A6_8F62_4199_91621A622D83, this.camera_5CD9544A_40A2_8F2D_41AB_FF913EAF5A29); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5172905D_40A2_8727_41C6_8FC276005D80",
   "pitch": 6.4,
   "hfov": 22.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -81.69
  }
 ],
 "id": "overlay_55EF90B9_40A3_876F_4191_3C117FE32D90",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_55EFB0B9_40A3_876F_4193_294E04B0D422",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.1,
   "yaw": 83.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_5173705D_40A2_8727_41A8_E9CE2C7C1FA0",
   "pitch": 19.01,
   "hfov": 28.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 83.31
  }
 ],
 "id": "overlay_51D3CE63_40A3_9BE2_41AB_26A1A30A6EC3",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 37.78,
   "yaw": 105.09,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -24.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_51000067_40A2_87E3_41D0_EFAD36AB5BD1",
   "pitch": -24.42,
   "hfov": 37.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 105.09
  }
 ],
 "id": "overlay_5473B931_40E2_B97F_41CD_39FCA791CE26",
 "data": {
  "label": "Circle Arrow 01a Left-UP"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.24,
   "yaw": 54.35,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -43.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_51004068_40A2_87ED_41CB_1721B6E935D6",
   "pitch": -43.21,
   "hfov": 26.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 54.35
  }
 ],
 "id": "overlay_5473A931_40E2_B97F_41B9_EE20203A5733",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "inertia": true,
 "id": "panorama_54725931_40E2_B97F_41C2_1B43BB76EF04",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22,
   "yaw": 132.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549, this.camera_57027690_40A2_8B3E_41C8_0ADC97402221); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_51083060_40A2_871D_4181_36EA741A9EF2",
   "pitch": -21.78,
   "hfov": 22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 132.89
  }
 ],
 "id": "overlay_4E9577B8_407D_896E_41D0_135AECFD9C76",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.52,
   "yaw": -52.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E80762F_407E_8B63_41B1_23FC54F34861, this.camera_570BE684_40A2_8B26_41CD_425933C48E0B); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_51084060_40A2_871D_41C1_FAD6FE9CFD8F",
   "pitch": -17.83,
   "hfov": 20.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -52.85
  }
 ],
 "id": "overlay_4E9487B8_407D_896E_41C1_2562D2BB90DE",
 "data": {
  "label": "Arrow 02b Left"
 }
},
{
 "inertia": true,
 "id": "panorama_4E9497B8_407D_896E_41CC_1521FE001B82",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.83,
   "yaw": -153.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03, this.camera_53D3E283_40A2_8B22_41C5_D3A50EDE1CCD); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5100D068_40A2_87ED_4182_BD89DBD3423B",
   "pitch": -23.04,
   "hfov": 24.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -153.4
  }
 ],
 "id": "overlay_55B9CC62_40E3_9FE2_41B2_C27F2456CD64",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.68,
   "yaw": 28.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_08E8CB0C_2B46_05AD_41B0_C5E404AB8A12, this.camera_68ED8339_2DC2_05F7_41C3_B6205CE43BE1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_51014069_40A2_87EF_41A8_15E97C3A880F",
   "pitch": -26.49,
   "hfov": 22.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 28.76
  }
 ],
 "id": "overlay_55B9DC62_40E3_9FE2_4195_87FD24312A80",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_55B9AC62_40E3_9FE2_41A4_6F2D07BB0D3C",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 47.03,
   "yaw": -49.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA, this.camera_5C63B4CE_40A2_8F22_41C7_FC041DFD908E); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_510D605E_40A2_8725_41BE_6AB3CAC7DE31",
   "pitch": -21.31,
   "hfov": 47.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -49.69
  }
 ],
 "id": "overlay_4B411E37_40A3_7B63_4183_BAF2FFC51028",
 "data": {
  "label": "Circle Arrow 01a Left-UP"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 36.69,
   "yaw": -102.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -46.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_510DF05E_40A2_8725_41CB_42D52D595829",
   "pitch": -46.14,
   "hfov": 36.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -102.46
  }
 ],
 "id": "overlay_4B42FE37_40A3_7B63_41A5_13FD54EF39C0",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 }
},
{
 "inertia": true,
 "id": "panorama_4B42DE37_40A3_7B63_41CC_A3D96E3FC6C3",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "horizontalAlign": "center",
 "id": "image_uid51766059_40A2_872F_41C3_063532950A93_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_10E8EB8B_3552_4E0B_41BD_B8737F552A8A.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11140"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_106CC2CE_3552_DE0D_41C3_DF77ACA1DB96",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText38529"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.2,
   "yaw": 2.41,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -20.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5103406B_40A2_87E3_41CA_DA5D73EE8F9F",
   "pitch": -20.23,
   "hfov": 21.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 2.41
  }
 ],
 "id": "overlay_56C3862F_40A7_8B7E_41B8_1BA6D4E50712",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.1,
   "yaw": -177.28,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -21.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_54E533E5_40A3_88E6_41AB_542C24578E8A, this.camera_52BB40F1_40A2_88FF_41BB_5032E894EF0D); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5103F06C_40A2_87E5_41A8_CE84FC89C6F9",
   "pitch": -21.12,
   "hfov": 22.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -177.28
  }
 ],
 "id": "overlay_56C37634_40A7_8B65_41C8_446D2A7BD38D",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.44,
   "yaw": -176.34,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": 3.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55EF4CF9_40A2_98EF_41AE_DFB905025AB0, this.camera_52A520E4_40A2_88E5_41C7_5C57C1D5E0F1); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511C706C_40A2_87E5_41C9_15C50B4C38BE",
   "pitch": 3.04,
   "hfov": 26.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -176.34
  }
 ],
 "id": "overlay_56C36634_40A7_8B65_41B3_28C3FE4E156C",
 "data": {
  "label": "Arrow 05a Right"
 }
},
{
 "inertia": true,
 "id": "panorama_56C35635_40A7_8B67_41B9_42B2AF6E4822",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.12,
   "yaw": 92.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_1FF7C46B_356E_5A34_41AA_CD27E552D654",
   "pitch": -14.05,
   "hfov": 17.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 92.12
  }
 ],
 "id": "overlay_1DB39008_124A_781E_419A_070080CAACB2",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.08,
   "yaw": -125.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setCameraSameSpotAsMedia(this.camera_53B79353_40A2_8923_41B4_C665C14DF118, this.panorama_1DB25007_124A_7812_4183_C90992DC6F0B); this.startPanoramaWithCamera(this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD, this.camera_53B79353_40A2_8923_41B4_C665C14DF118); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1FF7746B_356E_5A34_41A2_D8C3AFAFC5C8",
   "pitch": -23.32,
   "hfov": 20.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -125.83
  }
 ],
 "id": "overlay_1DB3A008_124A_781E_4190_D09C63F2D589",
 "data": {
  "label": "Arrow 06a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.16,
   "yaw": -138.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_1FF7346B_356E_5A34_41C8_5378195397A2",
   "pitch": 6.88,
   "hfov": 16.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -138.85
  }
 ],
 "id": "overlay_2A3B2618_35EE_C614_41A7_58BCD5FD2756",
 "data": {
  "label": "Info 02"
 }
},
{
 "inertia": true,
 "id": "panorama_1DB25007_124A_7812_4183_C90992DC6F0B_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.62,
   "yaw": -11.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E9557B8_407D_896E_41C3_5B6428D154DB, this.camera_523DD231_40A2_8B7E_41B5_249F53DDA835); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_51094061_40A2_871F_41B9_26C003045E6D",
   "pitch": -20.71,
   "hfov": 20.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -11.11
  }
 ],
 "id": "overlay_4E09E27F_4063_8BE3_41C5_B04FFFC5FD27",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.52,
   "yaw": 169.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B076B5B_40A7_9922_41CD_5F43571E024E, this.camera_5233D24D_40A2_8B26_41CB_4E633C3828CB); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5109F061_40A2_871F_41C2_F223F2AA0BFB",
   "pitch": -18.77,
   "hfov": 18.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 169.53
  }
 ],
 "id": "overlay_4E09B27F_4063_8BE3_41CF_10AC52B5430E",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_4E07327F_4063_8BE3_41A3_9890EE1920A8",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "horizontalAlign": "center",
 "id": "image_uid51787055_40A2_8727_41C1_0C57689AB901_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_224F8303_35DE_5FFB_41BA_0B502B1D364E.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11138"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_2DD7875F_35DE_460B_41C8_5AF8E5545BAA",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:0.63vw;\"><BR STYLE=\"letter-spacing:0vw;color:#000000;font-size:0.63vw;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText11028"
 },
 "shadow": false
},
{
 "inertia": true,
 "id": "panorama_550E69D2_40E2_B93D_41B1_88E505103054",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.42,
   "yaw": -65.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_54B596ED_40A2_88E6_41B7_688552C1C01E, this.camera_5DC7F518_40A2_892E_41CC_8A22321694FD); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_51053063_40A2_87E3_41B6_1A5661F01F2A",
   "pitch": -22.02,
   "hfov": 19.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -65.27
  }
 ],
 "id": "overlay_4B8BC548_40AD_892D_41C8_B7AC96C2B371",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.93,
   "yaw": 117.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837, this.camera_5C30D50C_40A2_8926_41B3_C456FE0639DF); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_51054064_40A2_87E5_41B4_1A4A994B24EE",
   "pitch": -19.2,
   "hfov": 23.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 117.79
  }
 ],
 "id": "overlay_4B8BB548_40AD_892D_41C2_1F2FBA455080",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_4B8B9548_40AD_892D_41CB_F7ACBC0DDE61",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.23,
   "yaw": 29.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -56.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D, this.camera_5365E3B5_40A2_8967_41B5_8065552DA5D9); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_510BA062_40A2_871D_41CF_5C743AA66C58",
   "pitch": -56.58,
   "hfov": 32.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 29.07
  }
 ],
 "id": "overlay_552B14A6_40A7_8F65_41A4_7D70F380CEF9",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.01,
   "yaw": -76.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_1_HS_1_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_54326A0A_40E2_9B2D_41CF_95CCCC266E7C, this.camera_5356139A_40A2_892D_41CD_72075EF5343D); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_51042062_40A2_871D_41A9_5060105E86DA",
   "pitch": -5.06,
   "hfov": 22.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -76.29
  }
 ],
 "id": "overlay_5528E4A6_40A7_8F65_41CA_259F5D01B040",
 "data": {
  "label": "Arrow 05b Left"
 }
},
{
 "inertia": true,
 "id": "panorama_5528C4A6_40A7_8F65_41C1_47A974BB1365",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.3,
   "yaw": 175.71,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -16.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56EC580D_40E7_8726_41C7_3C5CEFB48E03, this.camera_520FB146_40A2_8922_41CA_50913C99B5A7); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5102D06B_40A2_87E3_41BC_068C4110229A",
   "pitch": -16.79,
   "hfov": 25.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 175.71
  }
 ],
 "id": "overlay_55D10D2C_40E7_9965_41B2_A25BFC867F9C",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_55D11D2C_40E7_9965_41CF_7B1857CC04EC",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.63,
   "yaw": 169.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782, this.camera_5C5344C2_40A2_8F22_41CF_E61D11A205E7); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1FF4D472_356E_5A14_41C6_3943087A8B8E",
   "pitch": -1.17,
   "hfov": 28.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 169.2
  }
 ],
 "id": "overlay_6F96EB75_2DDE_047F_41C4_50D41E41C48B",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.22,
   "yaw": -144.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_1_HS_6_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_1FF48472_356E_5A14_4183_2AAE652A8443",
   "pitch": -26.98,
   "hfov": 29.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -144.75
  }
 ],
 "id": "overlay_6F96AB76_2DDE_047D_41C4_33B12C743C7B",
 "data": {
  "label": "Circle Arrow 04a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.65,
   "yaw": -112.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 35.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_2A2E1BEF_35D2_4E0B_41B4_74E56C085777, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_4A6887B9_405D_896E_41CC_1F4E02D5D7EF, this.video_2A1F5F58_35D2_C615_41C4_AA70604C64C5, this.PlayList_513AA087_40A2_8723_41C2_98033A53FEAA, '80%', '80%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1FF3F472_356E_5A14_41C2_F55EBBE5381D",
   "pitch": 35.76,
   "hfov": 24.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -112.67
  }
 ],
 "id": "overlay_2A817F47_35D2_467B_41A7_4B3268589955",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.69,
   "yaw": 159.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549, this.camera_571536A9_40A2_8B6E_41AA_281D1F1E1915); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5108D060_40A2_871D_41CF_ED9F2D4BB2F8",
   "pitch": -10.69,
   "hfov": 18.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 159.1
  }
 ],
 "id": "overlay_4B077B5C_40A7_9926_41CE_8C0404005034",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_4B074B5C_40A7_9926_41D0_348DC329ACB1",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "horizontalAlign": "center",
 "id": "image_uid5162C04E_40A2_8725_41A6_5A2E3A3D9EC0_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_29D69A13_35F2_4E1B_41C7_3219C3C50CF2.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11132"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_29553E05_35F2_49FF_41AC_B772EF3672DF",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText26183"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.71,
   "yaw": -158.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412, this.camera_5C01C4E7_40A2_88E2_41C0_8D53BCEEC615); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5108B05F_40A2_8723_41C7_CEDE93513C49",
   "pitch": -13.33,
   "hfov": 25.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -158.91
  }
 ],
 "id": "overlay_4E80562F_407E_8B63_41B8_99D941252B55",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.76,
   "yaw": -68.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E9557B8_407D_896E_41C3_5B6428D154DB, this.camera_5C71F4DA_40A2_8F22_41A4_258C0046B22D); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_510FB060_40A2_871D_41B0_B7404E43283E",
   "pitch": -12.47,
   "hfov": 29.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -68.26
  }
 ],
 "id": "overlay_4E80262F_407E_8B63_4193_E0F320C546F8",
 "data": {
  "label": "Arrow 06a Right"
 }
},
{
 "inertia": true,
 "id": "panorama_4E80162F_407E_8B63_41CD_7C58BF3FCBFE",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.09,
   "yaw": 7.1,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": 1.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4DFE50EE_407E_88E2_41B3_5C74FEE95412, this.camera_524B50FD_40A2_88E7_41BE_4BC89FBAB001); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_510E705E_40A2_8725_4198_02AF4658D044",
   "pitch": 1.12,
   "hfov": 17.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 7.1
  }
 ],
 "id": "overlay_4DF21CB3_407E_9F62_41BC_9D01B4A9EBA2",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 37.41,
   "yaw": -67.49,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -23.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C, this.camera_52599112_40A2_8922_41CC_9A24EAFA79FB); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_510EB05E_40A2_8725_4196_C4DC11EBD090",
   "pitch": -23.87,
   "hfov": 37.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -67.49
  }
 ],
 "id": "overlay_4DF22CB3_407E_9F62_41A5_CFF47245E7A4",
 "data": {
  "label": "Arrow 06a Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.5,
   "yaw": 90.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_510EC05F_40A2_8723_41B5_C1D96477459B",
   "pitch": 9.93,
   "hfov": 25.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 90.88
  }
 ],
 "id": "overlay_4DF23CB3_407E_9F62_41BD_ED76558A3860",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "id": "panorama_4DF27CB3_407E_9F62_41C1_D23DA1E21D14",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "horizontalAlign": "center",
 "id": "image_uid517D3053_40A2_8723_41C2_CCE6E157C915_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_29D69A13_35F2_4E1B_41C7_3219C3C50CF2.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11134"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_19762E95_36D2_461E_41C8_127B00CD56A3",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText26183"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.51,
   "yaw": 50.11,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -24.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0, this.camera_530413F2_40A2_88FD_41CB_B96FF42F8AD0); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F9F4494_356E_5A1C_41B2_FD5B58671C4C",
   "pitch": -24.76,
   "hfov": 21.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 50.11
  }
 ],
 "id": "overlay_15E21E42_3532_4674_41C9_B4341A7323B4",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.6,
   "yaw": 42.08,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -13.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E80762F_407E_8B63_41B1_23FC54F34861, this.camera_531463FF_40A2_88E3_41CB_EE09ED6E5A46); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_510FA05F_40A2_8723_4183_CA023EA35453",
   "pitch": -13.18,
   "hfov": 23.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 42.08
  }
 ],
 "id": "overlay_4DFE40EE_407E_88E2_41C8_0F7E4DC2D6CD",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.8,
   "yaw": -47.35,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -13.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_510FD05F_40A2_8723_41CB_A547D4DE2161",
   "pitch": -13.14,
   "hfov": 22.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -47.35
  }
 ],
 "id": "overlay_4DFEB0EE_407E_88E2_41C6_9FBB6D6FB14F",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.61,
   "yaw": 133.88,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": 23.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA, this.camera_532A840B_40A2_8F22_41C4_8855D87A23D5); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5108005F_40A2_8723_41CD_AA6F5F44391F",
   "pitch": 23.96,
   "hfov": 27.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 133.88
  }
 ],
 "id": "overlay_4DFEA0EE_407E_88E2_41CD_CB8921D7E171",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "id": "panorama_4DFE90EE_407E_88E2_4189_3E2921C4A295",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "horizontalAlign": "center",
 "id": "image_uid5173405D_40A2_8727_41C0_DB3BD5205963_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_51708766_40AE_89E5_41D0_94EF3727732F.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11144"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_51CC7DD5_40A3_9926_41C1_7C1B609B9194",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText9559"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.73,
   "yaw": -164.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511E4072_40A2_87FD_418B_D687E13456C0",
   "pitch": -2.49,
   "hfov": 18.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -164.6
  }
 ],
 "id": "overlay_4B2A4595_40A5_8926_41C4_E40045BB1FA3",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.13,
   "yaw": -67.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B1F3427_40A6_8F62_4199_91621A622D83, this.camera_537413D1_40A2_893F_41B1_7BBC78488C22); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511EC072_40A2_87FD_41C7_34E904FAC58D",
   "pitch": -43.45,
   "hfov": 29.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -67.69
  }
 ],
 "id": "overlay_4B2A7595_40A5_8926_41B0_373914763DE5",
 "data": {
  "label": "Circle Arrow 01b Left"
 }
},
{
 "inertia": true,
 "id": "panorama_4B2A6595_40A5_8926_41A0_0F3E37E82D50",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.31,
   "yaw": -7.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782, this.camera_5C9E147C_40A2_8FE6_41B3_C7F0EBB02F9D); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F9BD495_356E_5A1C_41B4_099D2F24456A",
   "pitch": -21.12,
   "hfov": 20.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -7.2
  }
 ],
 "id": "overlay_13FB3322_07AF_B0FB_4190_88C3AA9C9DC9",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.41,
   "yaw": 179.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1C113258_124A_783E_41AE_7AD1810FD677, this.camera_5CADC489_40A2_8F2E_41C8_91CD0E2A0CA0); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F9B9495_356E_5A1C_41A2_2A926D821273",
   "pitch": -10.76,
   "hfov": 18.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 179.79
  }
 ],
 "id": "overlay_05079367_12DA_9812_419B_49D527A444D6",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.65,
   "yaw": -139.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4, this.camera_5C8F5470_40A2_8FFD_41C0_24B42FE94449); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F9B149B_356E_5A14_41B1_6D7AC3767922",
   "pitch": -12.75,
   "hfov": 18.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -139.62
  }
 ],
 "id": "overlay_54F41002_35C2_0395_41B4_5A41FC98D127",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "inertia": true,
 "id": "panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid517BB057_40A2_8723_41A5_875B02F33E4C",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowHorizontalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
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
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
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
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea11139"
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
   "hfov": 24.29,
   "yaw": -53.33,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -18.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56C3B62F_40A7_8B63_41AF_0091007B755A, this.camera_53475377_40A2_89E3_41BE_545BC7AE4E8F); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5107B066_40A2_87E5_41A2_E6F3C9150467",
   "pitch": -18.51,
   "hfov": 24.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -53.33
  }
 ],
 "id": "overlay_54E563E6_40A3_88E2_41A0_E8A4B4BE5CF6",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_54E693E6_40A3_88E2_41CC_72F7DEB21B6D",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.39,
   "yaw": -113.38,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -15.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10, this.camera_521F5157_40A2_8922_41CD_10C92D763B3F); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_51069065_40A2_87E7_41CA_F528EE4E2D26",
   "pitch": -15.22,
   "hfov": 23.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -113.38
  }
 ],
 "id": "overlay_54B646ED_40A2_88E6_41C6_02A410D4D503",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.24,
   "yaw": 65.5,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -18.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B8BE548_40AD_892D_41CA_C17DBB419883, this.camera_522DC207_40A2_8B22_41C5_69A7054E5CC5); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_51073066_40A2_87E5_41A4_06141C51045E",
   "pitch": -18.51,
   "hfov": 23.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 65.5
  }
 ],
 "id": "overlay_54B676ED_40A2_88E6_41B6_3C65D3F32BEC",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_54B666ED_40A2_88E6_41B6_5DB6C3AD7861",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "horizontalAlign": "center",
 "id": "image_uid517FA055_40A2_8727_41AB_704BACD5DA47_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_29D7150E_35F1_DA0D_41CA_C642220447F5.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11137"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_2A1D15DB_35EE_DA14_41B9_091829167FAA",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText27706"
 },
 "shadow": false
},
{
 "viewerArea": "this.viewer_uid517BB057_40A2_8723_41A5_875B02F33E4C",
 "id": "viewer_uid517BB057_40A2_8723_41A5_875B02F33E4CVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 40.32,
   "yaw": 162.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_552B54A6_40A7_8F65_41C7_47284B2F1698, this.camera_5DA5656A_40A2_89E2_41B8_FEDDE37BA7EA); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_510A9061_40A2_871F_41C1_783EB494EE08",
   "pitch": -32.06,
   "hfov": 40.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 162.39
  }
 ],
 "id": "overlay_4A76B9D6_40AD_B925_41CE_8CF912D8C7C0",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.74,
   "yaw": -133.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -53.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B1F3427_40A6_8F62_4199_91621A622D83, this.camera_5D95055D_40A2_8926_41CA_838C01085260); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_510B2061_40A2_871F_41CC_B33106CA71BA",
   "pitch": -53.44,
   "hfov": 32.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -133.72
  }
 ],
 "id": "overlay_4A76A9D6_40AD_B925_41C7_1F9ED592711E",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "inertia": true,
 "id": "panorama_4A76E9DB_40AD_B923_41BA_A6601A2995AF",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.68,
   "yaw": 48.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0, this.camera_5770E66B_40A2_8BE2_41BF_53EC74B57294); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5170505B_40A2_8723_419F_FDCC29991E40",
   "pitch": -19.42,
   "hfov": 17.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 48.98
  }
 ],
 "id": "overlay_4D2BEEAC_407E_9B66_41C7_2184BEBEBE5D",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.51,
   "yaw": -133.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4, this.camera_570F7678_40A2_8BEE_41B5_D0DB9A5D6D8B); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5170E05C_40A2_8725_41D0_09A675A7C796",
   "pitch": -18.17,
   "hfov": 16.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -133.24
  }
 ],
 "id": "overlay_4D281EAC_407E_9B66_41C8_C9B703152172",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.59,
   "yaw": 11.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_5171105C_40A2_8725_41B4_7C6683836299",
   "pitch": 10.41,
   "hfov": 20.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 11.93
  }
 ],
 "id": "overlay_4D283EAC_407E_9B66_419A_CE39523DCDD2",
 "data": {
  "label": "Info 02"
 }
},
{
 "inertia": true,
 "id": "panorama_4D284EAC_407E_9B66_419B_3D7816D98161",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "position": {
  "yaw": -12.45,
  "hfov": 130,
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
   "hfov": 23.96,
   "yaw": -2.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B, this.camera_53E2B29C_40A2_8B26_41B2_57268BFCBA84); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1FF31473_356E_5A14_41C2_69345DD309A3",
   "pitch": -18.56,
   "hfov": 23.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -2.62
  }
 ],
 "id": "overlay_150CA8F0_3552_4A15_41C5_7C6EB52BCB1C",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 39.64,
   "yaw": -53.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_1FF2B473_356E_5A14_41C0_5660E8811D9E",
   "pitch": -42.02,
   "hfov": 39.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -53.71
  }
 ],
 "id": "overlay_150C88F0_3552_4A15_41C7_FB31E2E678D3",
 "data": {
  "label": "Circle Arrow 01a Left-UP"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 40.13,
   "yaw": -139.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_1_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1FF3F473_356E_5A14_41AB_893854762E49",
   "pitch": -29.02,
   "hfov": 40.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -139.62
  }
 ],
 "id": "overlay_150C98F0_3552_4A15_41BE_6F9EEB31BFBB",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 33.1,
   "yaw": 123.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 27.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_51762059_40A2_872F_41BE_C7C026082B1E",
   "pitch": 27.78,
   "hfov": 33.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 123.14
  }
 ],
 "id": "overlay_13021003_3553_B9FB_4192_CC43E5A1D32A",
 "data": {
  "label": "Info 02"
 }
},
{
 "inertia": true,
 "id": "panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.89,
   "yaw": 131.51,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": 3.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE, this.camera_52795134_40A2_8966_41AD_82F13035E523); this.mainPlayList.set('selectedIndex', 5); this.showWindow(this.window_2DD7F75E_35DE_460D_41C8_56490CB7D847, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1FF6746C_356E_5A0C_41BC_28EE060676E5",
   "pitch": 3.55,
   "hfov": 17.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 131.51
  }
 ],
 "id": "overlay_5AFF98C2_3742_0495_41C7_2CEF2F435363",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.39,
   "yaw": -100.69,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -20.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_1FF5C46C_356E_5A09_41B7_62180DABC72B",
   "pitch": -20.71,
   "hfov": 21.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -100.69
  }
 ],
 "id": "overlay_5AFE68C2_3742_0495_41A8_FEF9F7FA8C29",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.64,
   "yaw": 179.69,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -13.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2, this.camera_5269B121_40A2_891E_41AF_2313414261AA); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1FF57471_356E_5A14_41B4_8F09EF32082B",
   "pitch": -13.13,
   "hfov": 16.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 179.69
  }
 ],
 "id": "overlay_5AFE38C2_3742_0495_41B6_CCD46162636C",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.81,
   "yaw": -73.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B8BE548_40AD_892D_41CA_C17DBB419883, this.camera_571EF69D_40A2_8B26_41BE_989A6FB06A38); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_51061064_40A2_87E5_41C0_51B4BDCCEDA1",
   "pitch": -15.7,
   "hfov": 22.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -73.37
  }
 ],
 "id": "overlay_4A74D7F8_40A2_88ED_4169_B463CBB54B84",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_4A74C7F8_40A2_88ED_4197_3E9BF511AFE4",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "horizontalAlign": "center",
 "id": "image_uid5177C05B_40A2_8723_41C5_731B209E26F9_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_1261A9DC_3552_4A0D_41C8_A66642AEAE94.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11142"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_1D1169D8_36D3_CA15_41A3_BD4579958554",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText50569"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.96,
   "yaw": -56.06,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -50.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
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
   "image": "this.AnimatedImageResource_1F802493_356E_5A14_419C_85D2DC2DA9A1",
   "pitch": -50.97,
   "hfov": 25.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -56.06
  }
 ],
 "id": "overlay_14B72C79_3532_4A17_41A0_8FB31137F75C",
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.06,
   "yaw": 0.37,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -34.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15E20E42_3532_4674_41A2_17FF096E6F9B, this.camera_53C3D268_40A2_8BEE_41B5_8F45BF5D93B5); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F9FD493_356E_5A14_41C8_9A0C8B3BE9F6",
   "pitch": -34.13,
   "hfov": 20.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 0.37
  }
 ],
 "id": "overlay_14B73C79_3532_4A17_41C0_B44BB926ABE3",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 22.5,
 "class": "TripodCapPanoramaOverlay",
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
 }
},
{
 "items": [
  {
   "media": "this.album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.30",
     "class": "PhotoCameraPosition",
     "y": "0.74",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  }
 ],
 "id": "album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "horizontalAlign": "center",
 "id": "image_uid5177505A_40A2_872D_41A9_D11DB9705872_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_12128DEF_3552_4A0B_41BC_D30017821B05.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11141"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_10382DF6_3553_CA1D_41BE_3F2BD2A75357",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText41603"
 },
 "shadow": false
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5177205B_40A2_8723_41C0_94D8FF47CDE7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5177605B_40A2_8723_419F_9BF279820E85",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_5177805B_40A2_8723_41A7_9E61310AAB50",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_511BA077_40A2_87E3_41B8_7396AD85D654",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_556A38A8_40DD_876D_41BA_EB04AD3802F4_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51141077_40A2_87E3_41C0_BA89D32FF558",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_511D1070_40A2_87FD_41C8_743396EDE390",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_511D4070_40A2_87FD_41CF_B172E0FE99EB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B1F3427_40A6_8F62_4199_91621A622D83_1_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_511DD071_40A2_87FF_41B4_61506476DCE1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F9A649B_356E_5A14_41C6_18D4F153BE6F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_1_HS_2_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1F99E49C_356E_5A0C_41CA_A742716E68B9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_1_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F99549C_356E_5A0C_41C3_464051B86C61",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_1_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F99049C_356E_5A0C_414D_8966EB944398",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_5173D05D_40A2_8727_41B6_FFED94E6C268",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_510C005D_40A2_8727_41A2_3804B6492FCC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_510C405E_40A2_8725_41C3_DEB90ABB5412",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4D05CD8B_407E_9923_41A1_856B0AFE2A10_1_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_510D205E_40A2_8725_41D0_F342235B3D14",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5172305C_40A2_8725_41A7_98EF4F8423C6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5172605C_40A2_8725_41BF_7E61A9FF63B3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5172905D_40A2_8727_41C6_8FC276005D80",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55EFE0B8_40A3_876D_41C8_65694041EE7E_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_5173705D_40A2_8727_41A8_E9CE2C7C1FA0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51083060_40A2_871D_4181_36EA741A9EF2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E9557B8_407D_896E_41C3_5B6428D154DB_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_51084060_40A2_871D_41C1_FAD6FE9CFD8F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5100D068_40A2_87ED_4182_BD89DBD3423B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55B9EC62_40E3_9FE2_41A7_2D5DCB9C89BA_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51014069_40A2_87EF_41A8_15E97C3A880F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_510D605E_40A2_8725_41BE_6AB3CAC7DE31",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B413E36_40A3_7B65_41B9_5AE3DFC8980C_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_510DF05E_40A2_8725_41CB_42D52D595829",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FF7C46B_356E_5A34_41AA_CD27E552D654",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FF7746B_356E_5A34_41A2_D8C3AFAFC5C8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_1FF7346B_356E_5A34_41C8_5378195397A2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51094061_40A2_871F_41B9_26C003045E6D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E09F27E_4063_8BE5_41B6_B7E11D880549_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5109F061_40A2_871F_41C2_F223F2AA0BFB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51053063_40A2_87E3_41B6_1A5661F01F2A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B8BE548_40AD_892D_41CA_C17DBB419883_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51054064_40A2_87E5_41B4_1A4A994B24EE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_510BA062_40A2_871D_41CF_5C743AA66C58",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_552B54A6_40A7_8F65_41C7_47284B2F1698_1_HS_1_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_51042062_40A2_871D_41A9_5060105E86DA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_1FF4D472_356E_5A14_41C6_3943087A8B8E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_1_HS_6_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_1FF48472_356E_5A14_4183_2AAE652A8443",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_1_HS_9_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_1FF3F472_356E_5A14_41C2_F55EBBE5381D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B076B5B_40A7_9922_41CD_5F43571E024E_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5108D060_40A2_871D_41CF_ED9F2D4BB2F8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5108B05F_40A2_8723_41C7_CEDE93513C49",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E80762F_407E_8B63_41B1_23FC54F34861_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_510FB060_40A2_871D_41B0_B7404E43283E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4DF3FCB3_407E_9F62_41CA_49F252AC2CDA_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_510EC05F_40A2_8723_41B5_C1D96477459B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_511E4072_40A2_87FD_418B_D687E13456C0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B2A2595_40A5_8926_41C5_BCC3BC8A7043_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_511EC072_40A2_87FD_41C7_34E904FAC58D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F9BD495_356E_5A1C_41B4_099D2F24456A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F9B9495_356E_5A1C_41A2_2A926D821273",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_1_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F9B149B_356E_5A14_41B1_6D7AC3767922",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_510A9061_40A2_871F_41C1_783EB494EE08",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4A7689D6_40AD_B925_41CD_92F22F6E8F9D_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_510B2061_40A2_871F_41CC_B33106CA71BA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5170505B_40A2_8723_419F_FDCC29991E40",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5170E05C_40A2_8725_41D0_09A675A7C796",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4D2B4EAB_407E_9B62_41BD_316ADDB63447_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_5171105C_40A2_8725_41B4_7C6683836299",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FF31473_356E_5A14_41C2_69345DD309A3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_1FF2B473_356E_5A14_41C0_5660E8811D9E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_1_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_1FF3F473_356E_5A14_41AB_893854762E49",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_51762059_40A2_872F_41BE_C7C026082B1E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4A74A7F8_40A2_88ED_41BE_9A26B6289837_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51061064_40A2_87E5_41C0_51B4BDCCEDA1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getKey": function(key){  return window[key]; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "existsKey": function(key){  return key in window; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "data": {
  "name": "Player6037"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "scrollBarColor": "#000000"
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
