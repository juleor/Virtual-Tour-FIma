(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
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
 "id": "camera_118EF159_3572_BA17_41C9_F2A21B3BB65E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_6F96EB75_2DDE_047F_41C4_50D41E41C48B",
  "this.overlay_6F96AB76_2DDE_047D_41C4_33B12C743C7B",
  "this.popup_2A2E1BEF_35D2_4E0B_41B4_74E56C085777",
  "this.overlay_2A817F47_35D2_467B_41A7_4B3268589955",
  "this.panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_tcap0"
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
   "panorama": "this.panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0"
  }
 ],
 "hfov": 360,
 "id": "panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE",
 "audios": [
  "this.audio_2A656F49_353E_C677_417F_5E0229FD0D49"
 ],
 "vfov": 180,
 "hfovMax": 130
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
   "thumbnailUrl": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_t.jpg",
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
 "thumbnailUrl": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_1424D199_3552_DA14_41B6_D8B321F62213",
  "this.overlay_1424E199_3552_DA14_41C2_4DED915935F5",
  "this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_tcap0"
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
   "panorama": "this.panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0"
  }
 ],
 "hfov": 360,
 "id": "panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_0AF7890A_2B42_0595_41B7_7F4842BC4101",
  "this.panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -177.28,
   "yaw": -53.33,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_02151B49_2B42_0597_4193_6A67B5B7F367"
  }
 ],
 "hfov": 360,
 "id": "panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_360A2284_2BC6_049C_41A0_69E694EB0719",
  "this.overlay_362EDF11_2BC6_1DB4_41A0_54706111E8C0",
  "this.panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 137.45,
   "yaw": -76.29,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD"
  },
  {
   "backwardYaw": 162.39,
   "yaw": 29.07,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E"
  }
 ],
 "hfov": 360,
 "id": "panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D",
 "vfov": 180,
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
 "id": "panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_137E945C_3572_BA0D_41C5_5E5898C1AA22",
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
 "id": "panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_camera",
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
 "id": "camera_114191BF_3572_BA0B_41C3_E3351559128B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_tcap0"
 ],
 "partial": false,
 "hfov": 360,
 "id": "panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
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
 "id": "camera_13E973F2_3572_BE15_41AF_19E74E78686E",
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
 "id": "panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_tcap0"
 ],
 "partial": false,
 "hfov": 360,
 "id": "panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "label": "Lobby",
 "thumbnailUrl": "media/album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_0_t.png",
 "class": "Photo",
 "width": 1920,
 "id": "album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_0",
 "image": {
  "levels": [
   {
    "url": "media/album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "duration": 5000,
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
 "id": "panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_camera",
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
 "id": "camera_102213B2_3572_BE15_41CA_4AA400DB2708",
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
 "id": "panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_camera",
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
 "id": "panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 169.28,
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
 "id": "camera_10C862C3_3572_BE7B_41C2_B626196BB509",
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
 "id": "panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_119C7134_3572_BA1D_41B0_ECA037141CCD",
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
 "id": "camera_10D8A2A5_3572_BE3F_41C2_6825B2739CF7",
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
 "id": "camera_116F820A_3572_B9F5_41AA_27E1F01501C3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_355FFEF1_2BC2_7C74_41C0_AEAFD6F09556",
  "this.panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -76.29,
   "yaw": 137.45,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D"
  }
 ],
 "hfov": 360,
 "id": "panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "id": "window_28755315_35F2_5E1F_41C6_A02B5B1B2073",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerBorderColor": "#000000",
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "titlePaddingLeft": 5,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "headerPaddingLeft": 10,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titleFontWeight": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "headerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "title": "",
 "borderSize": 0,
 "class": "Window",
 "height": 400,
 "headerPaddingRight": 10,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "shadow": true,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "scrollBarColor": "#000000",
 "titlePaddingTop": 5,
 "headerBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "closeButtonBackgroundColorRatios": [],
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 2,
 "titlePaddingRight": 5,
 "bodyPaddingTop": 5,
 "headerVerticalAlign": "middle",
 "children": [
  "this.image_uid18A67009_3572_B9F7_41B3_15BEFDB72C3E_0",
  "this.htmlText_28774315_35F2_5E1E_41BC_AFCAE8549430"
 ],
 "scrollBarVisible": "rollOver",
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "titleFontSize": "0.7vw",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "layout": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "titlePaddingBottom": 5,
 "paddingBottom": 0,
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyBorderSize": 0,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "data": {
  "name": "Window27705"
 }
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
 "id": "camera_1188A14C_3572_BA0D_41C3_7B39C635CE47",
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
 "id": "camera_1192311B_3572_BA0B_41B6_CD5150F2F923",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_112FD296_3572_BE1D_41BB_130DFAD5CEE4",
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
 "id": "panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
   "thumbnailUrl": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_t.jpg",
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
 "thumbnailUrl": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_t.jpg",
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
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1DB25007_124A_7812_4183_C90992DC6F0B"
  },
  {
   "backwardYaw": 169.93,
   "yaw": 83.81,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F"
  }
 ],
 "hfov": 360,
 "id": "panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD",
 "vfov": 180,
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
 "id": "camera_109D130D_3572_BE0F_41B9_7BE001E2C160",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_111E1223_3572_BE3B_41CA_02674AB1ACDB",
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
 "id": "camera_10A1D33D_3572_BE0F_417E_C1591359CBFC",
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
 "id": "camera_113FA26B_3572_BE0B_41C3_6CC39937B2BD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_37869EDC_2BC2_1CAD_41B7_8E23448DE6EB",
  "this.overlay_1D9EB0E3_2AC2_0494_4194_345C9124B764",
  "this.panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 29.07,
   "yaw": 162.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D"
  },
  {
   "backwardYaw": -12.37,
   "yaw": -133.72,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9"
  }
 ],
 "hfov": 360,
 "id": "panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
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
   "thumbnailUrl": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_t.jpg",
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
 "thumbnailUrl": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_14B72C79_3532_4A17_41A0_8FB31137F75C",
  "this.overlay_14B73C79_3532_4A17_41C0_B44BB926ABE3",
  "this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE"
  },
  {
   "backwardYaw": 50.11,
   "yaw": 0.37,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_15E20E42_3532_4674_41A2_17FF096E6F9B"
  }
 ],
 "hfov": 360,
 "id": "panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_023C828C_2B42_04AD_41BA_AFA76187411C",
  "this.overlay_00D62EFE_2B46_3C6D_4188_FF61B6395E84",
  "this.panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74"
  }
 ],
 "hfov": 360,
 "id": "panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14",
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
 "id": "camera_10E7B2EE_3572_BE0D_41C7_628BD407C226",
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
 "id": "panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_1386E40C_3572_BA0D_41CA_5F6551008FEF",
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
 "id": "panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_camera",
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
 "id": "panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3375E250_2BC2_07B4_41B8_610467DD8520",
  "this.panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_tcap0"
 ],
 "partial": false,
 "hfov": 360,
 "id": "panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
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
 "id": "camera_1183C140_3572_BA75_41A1_C4D4FA54972B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_10DF52B5_3572_BE1F_41C2_B7BD3E64C8F0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_1DB39008_124A_781E_419A_070080CAACB2",
  "this.overlay_1DB3A008_124A_781E_4190_D09C63F2D589",
  "this.overlay_2A3B2618_35EE_C614_41A7_58BCD5FD2756",
  "this.panorama_1DB25007_124A_7812_4183_C90992DC6F0B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782"
  }
 ],
 "hfov": 360,
 "id": "panorama_1DB25007_124A_7812_4183_C90992DC6F0B",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 26.6,
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
 "id": "camera_115211A6_3572_BA3D_41B3_A1CA0902D10A",
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
 "id": "panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_camera",
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
 "id": "panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_camera",
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
 "id": "camera_13CE33DA_3572_BE15_41C4_44F381E3E144",
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
 "id": "panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_10B3332F_3572_BE0B_41BE_9887CF3F0D11",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "Gate",
 "thumbnailUrl": "media/photo_29D69A13_35F2_4E1B_41C7_3219C3C50CF2_t.png",
 "class": "Photo",
 "width": 1920,
 "id": "photo_29D69A13_35F2_4E1B_41C7_3219C3C50CF2",
 "image": {
  "levels": [
   {
    "url": "media/photo_29D69A13_35F2_4E1B_41C7_3219C3C50CF2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "duration": 5000,
 "height": 1080
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
 "id": "camera_110E523C_3572_BE0D_41C8_15144AB277B1",
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
 "id": "panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_camera",
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
 "id": "camera_109112FF_3572_BE0B_41C9_68735E2382D7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_11288285_3572_BEFF_41C9_C58CF1F52C74",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_76C5E5A0_3542_0C95_41B5_4811C5654592",
  "this.overlay_7ADBE3FD_3546_046F_41BB_5E78B5A5285E",
  "this.panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 4.47,
   "yaw": 160.68,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F"
  },
  {
   "backwardYaw": 12.36,
   "yaw": -14.48,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677"
  }
 ],
 "hfov": 360,
 "id": "panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3328EDA2_2BC2_1C95_41C3_613FA5A8F0D4",
  "this.overlay_3328FDA2_2BC2_1C95_41B7_9FA999D8A139",
  "this.overlay_3328CDA2_2BC2_1C95_41BB_C3EA9D844A73",
  "this.panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -158.91,
   "yaw": 42.08,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B"
  },
  {
   "backwardYaw": 7.1,
   "yaw": 133.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74"
  }
 ],
 "hfov": 360,
 "id": "panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F",
 "vfov": 180,
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
 "id": "panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_camera",
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
 "id": "panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "id": "window_2A16D5DD_35EE_DA0C_4195_9F6663D606DB",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerBorderColor": "#000000",
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "titlePaddingLeft": 5,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "headerPaddingLeft": 10,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titleFontWeight": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "headerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "title": "",
 "borderSize": 0,
 "class": "Window",
 "height": 400,
 "headerPaddingRight": 10,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "shadow": true,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "scrollBarColor": "#000000",
 "titlePaddingTop": 5,
 "headerBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "closeButtonBackgroundColorRatios": [],
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 2,
 "titlePaddingRight": 5,
 "bodyPaddingTop": 5,
 "headerVerticalAlign": "middle",
 "children": [
  "this.image_uid18A88009_3572_B9F7_41C8_68F301254D1E_0",
  "this.htmlText_2A1D15DB_35EE_DA14_41B9_091829167FAA"
 ],
 "scrollBarVisible": "rollOver",
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "titleFontSize": "0.7vw",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "layout": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "titlePaddingBottom": 5,
 "paddingBottom": 0,
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyBorderSize": 0,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "data": {
  "name": "Window27705"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_1AB669DE_2B4E_04AD_41BC_2AA9CADF89C1",
  "this.panorama_068CC17A_2B42_0474_41C2_501B94CEA994_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -176.34,
   "yaw": -130.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_02151B49_2B42_0597_4193_6A67B5B7F367"
  }
 ],
 "hfov": 360,
 "id": "panorama_068CC17A_2B42_0474_41C2_501B94CEA994",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_309B6C87_2BC2_1C9C_41B3_E70EF2338814",
  "this.panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 117.79,
   "yaw": -73.37,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA"
  }
 ],
 "hfov": 360,
 "id": "panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B",
 "vfov": 180,
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
 "id": "panorama_1C113258_124A_783E_41AE_7AD1810FD677_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_camera",
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
 "id": "panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_11BA8172_3572_BA15_41B1_F32B2B01C4D5",
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
 "id": "panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "Logistic Building",
 "thumbnailUrl": "media/photo_29D7150E_35F1_DA0D_41CA_C642220447F5_t.png",
 "class": "Photo",
 "width": 1920,
 "id": "photo_29D7150E_35F1_DA0D_41CA_C642220447F5",
 "image": {
  "levels": [
   {
    "url": "media/photo_29D7150E_35F1_DA0D_41CA_C642220447F5.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "duration": 5000,
 "height": 1080
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "label": "IMG_20230329_123821_00_merged",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_tcap0"
 ],
 "partial": false,
 "hfov": 360,
 "id": "panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "items": [
  {
   "media": "this.video_2A1F5F58_35D2_C615_41C4_AA70604C64C5",
   "start": "this.viewer_uid18AA600B_3572_BA0B_41C1_C127CA8CA82AVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_1473CB7F_35DE_CE0B_41B6_88C616ADD20C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_1473CB7F_35DE_CE0B_41B6_88C616ADD20C, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid18AA600B_3572_BA0B_41C1_C127CA8CA82AVideoPlayer)",
   "player": "this.viewer_uid18AA600B_3572_BA0B_41C1_C127CA8CA82AVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_1473CB7F_35DE_CE0B_41B6_88C616ADD20C",
 "class": "PlayList"
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonBorderColor": "#000000",
 "id": "window_2C54B1DB_35FE_BA0B_41B9_9F85AF074C12",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "headerBorderColor": "#000000",
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "closeButtonPressedBorderSize": 0,
 "titlePaddingLeft": 5,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "headerPaddingLeft": 10,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titleFontWeight": "bold",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "title": "",
 "headerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "height": 400,
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "shadow": true,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "scrollBarColor": "#000000",
 "titlePaddingTop": 5,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "closeButtonPressedIconLineWidth": 1,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "closeButtonBackgroundColorRatios": [],
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "titlePaddingRight": 5,
 "bodyPaddingTop": 5,
 "headerVerticalAlign": "middle",
 "children": [
  "this.image_uid18A5A007_3572_B9FB_41B3_9C30A9DE2258_0",
  "this.htmlText_2C5721DA_35FE_BA15_41A0_AE91364F4110"
 ],
 "scrollBarVisible": "rollOver",
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.09vw",
 "backgroundColorRatios": [],
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "footerBorderColor": "#000000",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "titlePaddingBottom": 5,
 "paddingBottom": 0,
 "closeButtonPaddingTop": 0,
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyBorderSize": 0,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "data": {
  "name": "Window20223"
 }
},
{
 "horizontalAlign": "center",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonBorderColor": "#000000",
 "id": "window_2A4D7DA3_35D2_4A3B_41C8_F0A4D9940035",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBorderSize": 0,
 "minHeight": 20,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "titlePaddingLeft": 5,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "headerPaddingLeft": 10,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "minWidth": 20,
 "bodyBackgroundOpacity": 0,
 "headerBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "borderSize": 0,
 "class": "Window",
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "footerHeight": 5,
 "shadow": true,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "scrollBarColor": "#000000",
 "titlePaddingTop": 5,
 "headerBackgroundOpacity": 0,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedIconLineWidth": 5,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "titlePaddingRight": 5,
 "bodyPaddingTop": 0,
 "headerVerticalAlign": "middle",
 "children": [
  "this.viewer_uid18AA600B_3572_BA0B_41C1_C127CA8CA82A"
 ],
 "scrollBarVisible": "rollOver",
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#666666",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBackgroundOpacity": 0.3,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "titlePaddingBottom": 5,
 "paddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "bodyPaddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window31395"
 },
 "titleFontFamily": "Arial",
 "shadowSpread": 1
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
 "id": "camera_13B5041B_3572_BA0B_4191_14062603FD2E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_13DF03CC_3572_BE0D_41C3_D9265B1E038A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "Fima Company Profile(1)",
 "thumbnailUrl": "media/video_2A1F5F58_35D2_C615_41C4_AA70604C64C5_t.jpg",
 "class": "Video",
 "width": 720,
 "loop": false,
 "id": "video_2A1F5F58_35D2_C615_41C4_AA70604C64C5",
 "scaleMode": "fit_inside",
 "height": 576,
 "video": {
  "width": 720,
  "mp4Url": "media/video_2A1F5F58_35D2_C615_41C4_AA70604C64C5.mp4",
  "class": "VideoResource",
  "height": 576
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_0D417F83_2B42_1C9B_41B9_4F8040B04F4E",
  "this.panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 5.79,
   "yaw": 175.71,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3"
  }
 ],
 "hfov": 360,
 "id": "panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2",
 "vfov": 180,
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
 "id": "panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
   "thumbnailUrl": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_t.jpg",
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
 "thumbnailUrl": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_1400A319_3552_DE14_41C1_3A80F0B5C293",
  "this.overlay_14008319_3552_DE14_41CA_BEDDC455048A",
  "this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.3,
   "yaw": -84.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B"
  },
  {
   "backwardYaw": -10.72,
   "yaw": 91.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1"
  }
 ],
 "hfov": 360,
 "id": "panorama_1400B319_3552_DE14_41BA_4304C9BE59B0",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
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
 "id": "camera_1069037C_3572_BE0D_41B5_3188F4EDF7E6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3C96447D_2BDE_0C6F_41C2_B026135738FA",
  "this.overlay_3C96B47D_2BDE_0C6F_41C1_317458ABCCED",
  "this.panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -68.26,
   "yaw": -52.85,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B"
  },
  {
   "backwardYaw": -11.11,
   "yaw": 132.89,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782"
  }
 ],
 "hfov": 360,
 "id": "panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "label": "Lobby",
 "thumbnailUrl": "media/photo_224F8303_35DE_5FFB_41BA_0B502B1D364E_t.png",
 "class": "Photo",
 "width": 1920,
 "id": "photo_224F8303_35DE_5FFB_41BA_0B502B1D364E",
 "image": {
  "levels": [
   {
    "url": "media/photo_224F8303_35DE_5FFB_41BA_0B502B1D364E.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "duration": 5000,
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
 "id": "panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_camera",
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
 "id": "camera_1160C1F0_3572_BA15_41C3_2A7E13408265",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_33DE60DF_2BC2_04AB_41A6_5562321EAD82",
  "this.overlay_3398CB53_2BC6_05BB_419F_C247C86543A8",
  "this.overlay_6AF9B940_35C2_0594_41B1_40D94E36C4F6",
  "this.panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 133.88,
   "yaw": 7.1,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F"
  },
  {
   "backwardYaw": -49.69,
   "yaw": -67.49,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677"
  }
 ],
 "hfov": 360,
 "id": "panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74",
 "vfov": 180,
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
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_0991855A_2B42_0DB5_41C2_55F0D69D36B1",
  "this.overlay_0F09D021_2B42_039A_41C2_B4E17E02B778",
  "this.panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -175.43,
   "yaw": -153.4,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3"
  }
 ],
 "hfov": 360,
 "id": "panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1",
 "vfov": 180,
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
 "id": "panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_107A236F_3572_BE0B_41C7_BA8191E46F76",
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
 "id": "camera_11AB719A_3572_BA15_41C9_1C66C059358F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_1105622F_3572_BE0B_41A8_B7953E8A058A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "label": "1-5",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_13FB3322_07AF_B0FB_4190_88C3AA9C9DC9",
  "this.overlay_05079367_12DA_9812_419B_49D527A444D6",
  "this.overlay_54F41002_35C2_0395_41B4_5A41FC98D127",
  "this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -178.59,
   "yaw": -139.62,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F"
  },
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
   "panorama": "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677"
  }
 ],
 "hfov": 360,
 "id": "panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_tcap0"
 ],
 "partial": false,
 "hfov": 360,
 "id": "panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
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
 "id": "camera_11964127_3572_BA3B_41B6_B8025C4A6D74",
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
 "id": "panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_camera",
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
 "id": "panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_camera",
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
 "id": "camera_1352E435_3572_BA1F_41C0_5FBB16B41D0D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "Photo Album Lobby",
 "id": "album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2",
 "class": "PhotoAlbum",
 "thumbnailUrl": "media/album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_t.png",
 "playList": "this.album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_AlbumPlayList"
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
 "id": "camera_10068397_3572_BE1B_41C1_99153CBF0982",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_115A01B2_3572_BA15_4189_23C7F7898D76",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_11B3C165_3572_BA3F_41C9_C37AA2F0D212",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3DB60832_2BC6_03F5_4199_BD2EC1E03CF5",
  "this.overlay_320D4900_2BC2_0595_41C5_A91101D429BC",
  "this.overlay_32CE196F_2BC6_046B_41C2_CFD906FBFF04",
  "this.overlay_1961A1E3_2B42_049B_41B5_FF3E6CF4E726",
  "this.panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9"
  },
  {
   "backwardYaw": -113.38,
   "yaw": -7.34,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9"
  }
 ],
 "hfov": 360,
 "id": "panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_02809725_2B42_0D9F_41C5_79B491D30B25",
  "this.overlay_01B9FB8F_2B7E_04AB_41AC_03DD1A34DC61",
  "this.overlay_056F7A70_2B42_0475_41B1_2CBAB080BD60",
  "this.panorama_02151B49_2B42_0597_4193_6A67B5B7F367_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -130.82,
   "yaw": -176.34,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_068CC17A_2B42_0474_41C2_501B94CEA994"
  },
  {
   "backwardYaw": -53.33,
   "yaw": -177.28,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F"
  }
 ],
 "hfov": 360,
 "id": "panorama_02151B49_2B42_0597_4193_6A67B5B7F367",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
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
 "id": "camera_13D0A3BF_3572_BE0B_41CA_248E4EA89791",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_33460EAD_2BC1_FCEC_41BC_762D3CB73C40",
  "this.overlay_3345FEAD_2BC1_FCEC_41A3_66C3BB2DE93C",
  "this.panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -52.85,
   "yaw": -68.26,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA"
  },
  {
   "backwardYaw": 42.08,
   "yaw": -158.91,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F"
  }
 ],
 "hfov": 360,
 "id": "panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B",
 "vfov": 180,
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
 "id": "panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_camera",
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
 "id": "camera_117771E4_3572_BA3D_419F_B5C318E7F744",
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
 "id": "camera_1149F1CB_3572_BA0B_41BC_8E33B34D6F17",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -12.45,
  "class": "PanoramaCameraPosition",
  "pitch": -11.47
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3CCFA11A_2BC2_05B4_41C4_1FF8AA7E663B",
  "this.overlay_3CCFB11B_2BC2_05B4_4156_085CE0B6C968",
  "this.panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 91.69,
   "yaw": -10.72,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0"
  },
  {
   "backwardYaw": -173.82,
   "yaw": 165.66,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9"
  }
 ],
 "hfov": 360,
 "id": "panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
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
 "id": "camera_13A3B428_3572_BA35_41BC_FDE964C81CAB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_114F51D8_3572_BA15_41C9_E1C179AE46AA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_1115E216_3572_BE1D_41C6_ACA8AED5FA93",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_7A3BBB48_3546_0595_41BA_A5C2494D0A20",
  "this.overlay_50E7B08F_35C6_04AB_41BF_88E68DCF1F6F",
  "this.panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 160.68,
   "yaw": 4.47,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B"
  },
  {
   "backwardYaw": -139.62,
   "yaw": -178.59,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2"
  }
 ],
 "hfov": 360,
 "id": "panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F",
 "vfov": 180,
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
 "id": "panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_13412442_3572_BA75_41B6_4B40A56E40AF",
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
 "id": "panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_105D5356_3572_BE1D_41C7_709332233EC3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_10F122D1_3572_BE17_41BD_425191A42F24",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_7A19614C_3542_05AC_41C4_8FFC79CDEA9A",
  "this.overlay_6E1E62E7_35C2_049B_41B5_563726B1E1C8",
  "this.panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.26,
   "yaw": -67.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677"
  }
 ],
 "hfov": 360,
 "id": "panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_0109478B_1249_9812_415C_71848DC339B8",
  "this.overlay_62B585B2_353E_0CF5_41B0_786774143B86",
  "this.overlay_619CFDD0_35C2_1CB5_41C5_B7480B9261CD",
  "this.overlay_57EF48BA_35C2_04F5_41C2_E5A821EE04C0",
  "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00"
  },
  {
   "backwardYaw": -14.48,
   "yaw": 12.36,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6"
  },
  {
   "backwardYaw": 179.79,
   "yaw": 69.72,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2"
  }
 ],
 "hfov": 360,
 "id": "panorama_1C113258_124A_783E_41AE_7AD1810FD677",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
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
 "id": "camera_10AE334A_3572_BE75_41C2_76FD70B243E2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "popupMaxWidth": "80%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "80%",
 "loop": false,
 "id": "popup_2A2E1BEF_35D2_4E0B_41B4_74E56C085777",
 "pitch": 35.76,
 "hideEasing": "cubic_out",
 "hfov": 24.65,
 "video": {
  "width": 720,
  "mp4Url": "media/video_2A1F5F58_35D2_C615_41C4_AA70604C64C5.mp4",
  "class": "VideoResource",
  "height": 576
 }
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
 "id": "camera_11BE617F_3572_BA0B_41C4_EBB5FF1418BA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_150CA8F0_3552_4A15_41C5_7C6EB52BCB1C",
  "this.overlay_150C88F0_3552_4A15_41C7_FB31E2E678D3",
  "this.overlay_150C98F0_3552_4A15_41BE_6F9EEB31BFBB",
  "this.panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE"
  },
  {
   "backwardYaw": -37.42,
   "yaw": -2.62,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0"
  }
 ],
 "hfov": 360,
 "id": "panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
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
 "id": "camera_11A5218C_3572_BA0D_41C0_470737C63B92",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3CD6AA93_2BC2_04BB_413F_5FDE12EB4DD8",
  "this.overlay_3CD68A93_2BC2_04BB_41AF_1B405A0FB79A",
  "this.overlay_3CD69A93_2BC2_04BB_41C0_30753EB499A2",
  "this.panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 165.66,
   "yaw": -173.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6"
  },
  {
   "backwardYaw": -84.49,
   "yaw": -81.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9"
  }
 ],
 "hfov": 360,
 "id": "panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 4.57,
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
 "id": "camera_104BF363_3572_BE3B_41B5_924144293C84",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_10FBD2E0_3572_BE35_41AC_CC00D04F171C",
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
 "id": "camera_134FD44F_3572_BA0B_41C2_4A1438EB3B97",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_339F70BC_2BC2_04EC_41C5_7EDCB4E169D1",
  "this.overlay_333A14BD_2BC2_0CEC_4190_C5BCAEDAB131",
  "this.panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6"
  },
  {
   "backwardYaw": -67.49,
   "yaw": -49.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74"
  }
 ],
 "hfov": 360,
 "id": "panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_tcap0"
 ],
 "partial": false,
 "hfov": 360,
 "id": "panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_31F1A799_2BCE_0CB7_41B3_353A52519658",
  "this.overlay_303FDE22_2BCE_1F95_41C5_367BD6AA44B6",
  "this.panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -7.34,
   "yaw": -113.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6"
  },
  {
   "backwardYaw": -65.27,
   "yaw": 65.5,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA"
  }
 ],
 "hfov": 360,
 "id": "panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonBorderColor": "#000000",
 "id": "window_2DD7F75E_35DE_460D_41C8_56490CB7D847",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "headerBorderColor": "#000000",
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "closeButtonPressedBorderSize": 0,
 "titlePaddingLeft": 5,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "headerPaddingLeft": 10,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titleFontWeight": "bold",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "title": "Information",
 "headerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "height": 400,
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "shadow": true,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "scrollBarColor": "#000000",
 "titlePaddingTop": 5,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "closeButtonPressedIconLineWidth": 1,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "closeButtonBackgroundColorRatios": [],
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "titlePaddingRight": 5,
 "bodyPaddingTop": 5,
 "headerVerticalAlign": "middle",
 "children": [
  "this.image_uid18A8100A_3572_B9F5_41AE_A18E2D0D758E_0",
  "this.htmlText_2DD7875F_35DE_460B_41C8_5AF8E5545BAA"
 ],
 "scrollBarVisible": "rollOver",
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 0,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "2vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "footerBorderColor": "#000000",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "titlePaddingBottom": 5,
 "paddingBottom": 0,
 "closeButtonPaddingTop": 0,
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyBorderSize": 0,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "data": {
  "name": "Window11027"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6C7BC9A1_3542_0497_41C1_817213DEB9BC",
  "this.overlay_6D8DA711_3542_0DB7_41B3_8A2A71225C0B",
  "this.panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 132.89,
   "yaw": -11.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB"
  }
 ],
 "hfov": 360,
 "id": "panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
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
   "media": "this.panorama_1DB25007_124A_7812_4183_C90992DC6F0B",
   "camera": "this.panorama_1DB25007_124A_7812_4183_C90992DC6F0B_camera",
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
   "media": "this.panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE",
   "camera": "this.panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0",
   "camera": "this.panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_camera",
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
   "media": "this.panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1",
   "camera": "this.panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9",
   "camera": "this.panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6",
   "camera": "this.panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9",
   "camera": "this.panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74",
   "camera": "this.panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F",
   "camera": "this.panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B",
   "camera": "this.panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA",
   "camera": "this.panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB",
   "camera": "this.panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782",
   "camera": "this.panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00",
   "camera": "this.panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41",
   "camera": "this.panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896",
   "camera": "this.panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E",
   "camera": "this.panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D",
   "camera": "this.panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD",
   "camera": "this.panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA",
   "camera": "this.panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B",
   "camera": "this.panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14",
   "camera": "this.panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED",
   "camera": "this.panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14",
   "camera": "this.panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1",
   "camera": "this.panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3",
   "camera": "this.panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2",
   "camera": "this.panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_02151B49_2B42_0597_4193_6A67B5B7F367",
   "camera": "this.panorama_02151B49_2B42_0597_4193_6A67B5B7F367_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_068CC17A_2B42_0474_41C2_501B94CEA994",
   "camera": "this.panorama_068CC17A_2B42_0474_41C2_501B94CEA994_camera",
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
   "media": "this.panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F",
   "camera": "this.panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D",
   "camera": "this.panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9",
   "camera": "this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6",
   "camera": "this.panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2",
   "camera": "this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677",
   "camera": "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B",
   "camera": "this.panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F",
   "camera": "this.panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "media": "this.album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.video_2A1F5F58_35D2_C615_41C4_AA70604C64C5",
   "end": "this.trigger('tourEnded')",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 46, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 46)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 46, 0)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
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
 "id": "camera_1089131D_3572_BE0F_41C0_3A6C1DA1CF54",
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
 "id": "camera_11373251_3572_BE17_41C4_4DDF7DBD11AF",
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
 "id": "panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_camera",
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
 "id": "panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -14.34,
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
 "id": "camera_103303A5_3572_BE3F_4193_A7FFF4E8F787",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_1017838A_3572_BEF5_41C6_B748E858FA69",
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
 "id": "camera_116641FD_3572_BA0F_418A_7BCC0ECC1B90",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "id": "camera_139853FF_3572_BE0B_41A8_4332397A1BD6",
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
 "id": "panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_camera",
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
 "id": "panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "initialPosition": {
  "yaw": 177.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13FC23E6_3572_BE3D_41CA_9192511DA19C",
 "class": "PanoramaCamera"
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
 "id": "panorama_068CC17A_2B42_0474_41C2_501B94CEA994_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3CDAAEA0_2BC2_1C95_41C2_F56569049FA3",
  "this.overlay_3662776D_2BC2_0C6F_41C3_F3F169BF2C1E",
  "this.overlay_79E0CB86_3546_049D_41BE_4A7DC03BBE20",
  "this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -133.72,
   "yaw": -12.37,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E"
  },
  {
   "backwardYaw": -81.69,
   "yaw": -84.49,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9"
  },
  {
   "backwardYaw": -67.69,
   "yaw": 0.26,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6"
  }
 ],
 "hfov": 360,
 "id": "panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "label": "Security Post",
 "thumbnailUrl": "media/photo_2FB5CFE7_35F2_C63B_41BB_92207220D6DD_t.png",
 "class": "Photo",
 "width": 1920,
 "id": "photo_2FB5CFE7_35F2_C63B_41BB_92207220D6DD",
 "image": {
  "levels": [
   {
    "url": "media/photo_2FB5CFE7_35F2_C63B_41BB_92207220D6DD.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "duration": 5000,
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
 "id": "panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonBorderColor": "#000000",
 "id": "window_2F8F0DE9_35F2_4A34_41C0_73EF0AAC6C9C",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "headerBorderColor": "#000000",
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "closeButtonPressedBorderSize": 0,
 "titlePaddingLeft": 5,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "headerPaddingLeft": 10,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titleFontWeight": "bold",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "title": "",
 "headerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "height": 400,
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "shadow": true,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "scrollBarColor": "#000000",
 "titlePaddingTop": 5,
 "headerBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "closeButtonPressedIconLineWidth": 1,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "closeButtonBackgroundColorRatios": [],
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "titlePaddingRight": 5,
 "bodyPaddingTop": 5,
 "headerVerticalAlign": "middle",
 "children": [
  "this.image_uid18A6B008_3572_B9F5_41C5_C08D5794A02A_0",
  "this.htmlText_2F894DE9_35F2_4A34_41BA_DD37E4162FBB"
 ],
 "scrollBarVisible": "rollOver",
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 0,
 "closeButtonBorderRadius": 20,
 "titleFontSize": "1.09vw",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "footerBorderColor": "#000000",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "titlePaddingBottom": 5,
 "paddingBottom": 0,
 "closeButtonPaddingTop": 0,
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyBorderSize": 0,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "data": {
  "name": "Window20223"
 }
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
   "thumbnailUrl": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_t.jpg",
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
 "thumbnailUrl": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_t.jpg",
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
 "id": "panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
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
 "id": "panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_camera",
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
   "thumbnailUrl": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_t.jpg",
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
 "thumbnailUrl": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_t.jpg",
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
 "id": "panorama_15E20E42_3532_4674_41A2_17FF096E6F9B",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
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
   "thumbnailUrl": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_t.jpg",
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
 "thumbnailUrl": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F_tcap0",
  "this.overlay_270BF7A3_3532_463B_4191_49C6652F8A62",
  "this.overlay_266A0C03_3536_49F4_4192_6D9509FD5876",
  "this.overlay_2C479218_35FE_BE15_41C0_8242AB3B9F4D"
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
 "id": "panorama_1CC10CE2_124B_8812_4180_81694ECE612F",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
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
   "thumbnailUrl": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_t.jpg",
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
 "thumbnailUrl": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_t.jpg",
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
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1DB25007_124A_7812_4183_C90992DC6F0B"
  },
  {
   "backwardYaw": 169.2,
   "yaw": 131.51,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE"
  },
  {
   "backwardYaw": -7.2,
   "yaw": 179.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2"
  }
 ],
 "hfov": 360,
 "id": "panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
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
 "id": "panorama_1DB25007_124A_7812_4183_C90992DC6F0B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_08BE5A1E_2B5E_07AC_41AD_02EEFDA2971C",
  "this.overlay_095C17B5_2B42_0CFC_41C3_6AA7A817CC09",
  "this.panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 175.71,
   "yaw": 5.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2"
  },
  {
   "backwardYaw": -153.4,
   "yaw": -175.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1"
  }
 ],
 "hfov": 360,
 "id": "panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
   "thumbnailUrl": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
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
 "thumbnailUrl": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_t.jpg",
 "class": "Panorama",
 "overlays": [
  "this.overlay_37F962DB_2BC6_04AB_41AD_EC4243E42F08",
  "this.overlay_37A08FE3_2BC6_7C9B_4173_0F320D697F80",
  "this.panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 65.5,
   "yaw": -65.27,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14"
  },
  {
   "backwardYaw": -73.37,
   "yaw": 117.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B"
  }
 ],
 "hfov": 360,
 "id": "panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA",
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
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
 "id": "panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "id": "window_2954FE04_35F2_49FD_41BF_087A6F31BBBB",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerBorderColor": "#000000",
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "modal": true,
 "verticalAlign": "middle",
 "propagateClick": false,
 "titlePaddingLeft": 5,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "headerPaddingLeft": 10,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titleFontWeight": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "headerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "title": "",
 "borderSize": 0,
 "class": "Window",
 "height": 400,
 "headerPaddingRight": 10,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "shadow": true,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "scrollBarColor": "#000000",
 "titlePaddingTop": 5,
 "headerBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titleTextDecoration": "none",
 "closeButtonBackgroundColorRatios": [],
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 2,
 "titlePaddingRight": 5,
 "bodyPaddingTop": 5,
 "headerVerticalAlign": "middle",
 "children": [
  "this.image_uid18A2A002_3572_B9F5_41C3_1CA240569BDD_0",
  "this.htmlText_29553E05_35F2_49FF_41AC_B772EF3672DF"
 ],
 "scrollBarVisible": "rollOver",
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "titleFontSize": "0.7vw",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "footerBackgroundOpacity": 1,
 "layout": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "footerBorderColor": "#000000",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "titlePaddingBottom": 5,
 "paddingBottom": 0,
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "bodyBorderSize": 0,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "data": {
  "name": "Window26182"
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
 "id": "panorama_02151B49_2B42_0597_4193_6A67B5B7F367_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
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
 "playbackBarHeadShadowHorizontalLength": 0,
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
 "paddingLeft": 0,
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
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
 "progressBorderColor": "#000000",
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
 "paddingLeft": 0,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "UIComponent36548"
 },
 "paddingBottom": 0,
 "visible": false,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 }
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
 "paddingLeft": 0,
 "paddingTop": 0,
 "shadow": false,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage36549"
 },
 "paddingBottom": 0,
 "visible": false
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "borderRadius": 0,
 "minHeight": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
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
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 5,
 "label": "",
 "fontStyle": "normal",
 "paddingBottom": 5,
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "shadow": false,
 "data": {
  "name": "CloseButton36550"
 },
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 169.2,
   "hfov": 28.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.17
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782, this.camera_1089131D_3572_BE0F_41C0_3A6C1DA1CF54); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF4D472_356E_5A14_41C6_3943087A8B8E",
   "pitch": -1.17,
   "yaw": 169.2,
   "hfov": 28.63,
   "distance": 100
  }
 ],
 "id": "overlay_6F96EB75_2DDE_047F_41C4_50D41E41C48B",
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
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_1_HS_6_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1FF48472_356E_5A14_4183_2AAE652A8443",
   "pitch": -26.98,
   "yaw": -144.75,
   "hfov": 29.22,
   "distance": 50
  }
 ],
 "id": "overlay_6F96AB76_2DDE_047D_41C4_33B12C743C7B",
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
      "url": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_1_HS_9_0_0_map.gif",
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
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_2A2E1BEF_35D2_4E0B_41B4_74E56C085777, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_2A4D7DA3_35D2_4A3B_41C8_F0A4D9940035, this.video_2A1F5F58_35D2_C615_41C4_AA70604C64C5, this.PlayList_1473CB7F_35DE_CE0B_41B6_88C616ADD20C, '80%', '80%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF3F472_356E_5A14_41C2_F55EBBE5381D",
   "pitch": 35.76,
   "yaw": -112.67,
   "hfov": 24.65,
   "distance": 100
  }
 ],
 "id": "overlay_2A817F47_35D2_467B_41A7_4B3268589955",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_tcap0",
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
   "click": "this.startPanoramaWithCamera(this.panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0, this.camera_13FC23E6_3572_BE3D_41CA_9192511DA19C); this.mainPlayList.set('selectedIndex', 6)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0, this.camera_13CE33DA_3572_BE15_41C4_44F381E3E144); this.mainPlayList.set('selectedIndex', 8)",
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
 "inertia": true,
 "hfov": 30,
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
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_02151B49_2B42_0597_4193_6A67B5B7F367, this.camera_114F51D8_3572_BA15_41C9_E1C179AE46AA); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F84348B_356E_5AF4_41B0_D3B2CD4E8938",
   "pitch": -18.51,
   "yaw": -53.33,
   "hfov": 24.29,
   "distance": 100
  }
 ],
 "id": "overlay_0AF7890A_2B42_0595_41B7_7F4842BC4101",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_tcap0",
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
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E, this.camera_10D8A2A5_3572_BE3F_41C2_6825B2739CF7); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F882484_356E_5AFC_419F_C9B9FB85CFE0",
   "pitch": -56.58,
   "yaw": 29.07,
   "hfov": 32.23,
   "distance": 100
  }
 ],
 "id": "overlay_360A2284_2BC6_049C_41A0_69E694EB0719",
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
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD, this.camera_112FD296_3572_BE1D_41BB_130DFAD5CEE4); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F87C484_356E_5AFC_41C8_FD735A15DC21",
   "pitch": -5.06,
   "yaw": -76.29,
   "hfov": 22.01,
   "distance": 50
  }
 ],
 "id": "overlay_362EDF11_2BC6_1DB4_41A0_54706111E8C0",
 "data": {
  "label": "Arrow 05b Left"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_tcap0",
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
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D, this.camera_11B3C165_3572_BA3F_41C9_C37AA2F0D212); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F873484_356E_5AFC_41C4_9246D511B822",
   "pitch": -28.67,
   "yaw": 137.45,
   "hfov": 32.16,
   "distance": 50
  }
 ],
 "id": "overlay_355FFEF1_2BC2_7C74_41C0_AEAFD6F09556",
 "data": {
  "label": "Arrow 05b Right"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid18A67009_3572_B9F7_41B3_15BEFDB72C3E_0",
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
 "paddingLeft": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image36544"
 },
 "paddingBottom": 0
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
 "paddingLeft": 10,
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText27706"
 },
 "paddingBottom": 10
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
   "click": "this.startPanoramaWithCamera(this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F, this.camera_1017838A_3572_BEF5_41C6_B748E858FA69); this.mainPlayList.set('selectedIndex', 1)",
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
 "hfov": 30,
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
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D, this.camera_13B5041B_3572_BA0B_4191_14062603FD2E); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F892483_356E_5AF4_41A2_88A163B96709",
   "pitch": -32.06,
   "yaw": 162.39,
   "hfov": 40.32,
   "distance": 50
  }
 ],
 "id": "overlay_37869EDC_2BC2_1CAD_41B7_8E23448DE6EB",
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
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_1_HS_2_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9, this.camera_13A3B428_3572_BA35_41BC_FDE964C81CAB); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F88C484_356E_5AFC_41A5_AD3166939783",
   "pitch": -53.44,
   "yaw": -133.72,
   "hfov": 32.74,
   "distance": 100
  }
 ],
 "id": "overlay_1D9EB0E3_2AC2_0494_4194_345C9124B764",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_tcap0",
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
   "click": "this.startPanoramaWithCamera(this.panorama_15E20E42_3532_4674_41A2_17FF096E6F9B, this.camera_10068397_3572_BE1B_41C1_99153CBF0982); this.mainPlayList.set('selectedIndex', 36)",
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
 "hfov": 30,
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
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_1_HS_0_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1F83B48B_356E_5AF4_41BE_789B1758843B",
   "pitch": -24.42,
   "yaw": 105.09,
   "hfov": 37.78,
   "distance": 50
  }
 ],
 "id": "overlay_023C828C_2B42_04AD_41BA_AFA76187411C",
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
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_1_HS_1_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1F83448C_356E_5A0C_41C7_E2A64EDFF8FC",
   "pitch": -43.21,
   "yaw": 54.35,
   "hfov": 26.24,
   "distance": 100
  }
 ],
 "id": "overlay_00D62EFE_2B46_3C6D_4188_FF61B6395E84",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_tcap0",
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
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_1_HS_0_0_0_map.gif",
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
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F8AB483_356E_5AF4_41B2_5F037292C3F1",
   "pitch": -10.69,
   "yaw": 159.1,
   "hfov": 18.69,
   "distance": 100
  }
 ],
 "id": "overlay_3375E250_2BC2_07B4_41B8_610467DD8520",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_tcap0",
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
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_1_HS_0_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1FF7C46B_356E_5A34_41AA_CD27E552D654",
   "pitch": -14.05,
   "yaw": 92.12,
   "hfov": 17.12,
   "distance": 100
  }
 ],
 "id": "overlay_1DB39008_124A_781E_419A_070080CAACB2",
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
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_1_HS_1_0_0_map.gif",
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
   "click": "this.setCameraSameSpotAsMedia(this.camera_109D130D_3572_BE0F_41B9_7BE001E2C160, this.panorama_1DB25007_124A_7812_4183_C90992DC6F0B); this.startPanoramaWithCamera(this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD, this.camera_109D130D_3572_BE0F_41B9_7BE001E2C160); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF7746B_356E_5A34_41A2_D8C3AFAFC5C8",
   "pitch": -23.32,
   "yaw": -125.83,
   "hfov": 20.08,
   "distance": 50
  }
 ],
 "id": "overlay_1DB3A008_124A_781E_4190_D09C63F2D589",
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
      "url": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_1_HS_2_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1FF7346B_356E_5A34_41C8_5378195397A2",
   "pitch": 6.88,
   "yaw": -138.85,
   "hfov": 16.16,
   "distance": 100
  }
 ],
 "id": "overlay_2A3B2618_35EE_C614_41A7_58BCD5FD2756",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_1DB25007_124A_7812_4183_C90992DC6F0B_tcap0",
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
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_1C113258_124A_783E_41AE_7AD1810FD677, this.camera_1115E216_3572_BE1D_41C6_ACA8AED5FA93); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F98649C_356E_5A0C_41B1_11C2CE945547",
   "pitch": -30.39,
   "yaw": -14.48,
   "hfov": 15.22,
   "distance": 100
  }
 ],
 "id": "overlay_76C5E5A0_3542_0C95_41B5_4811C5654592",
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
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F, this.camera_116F820A_3572_B9F5_41AA_27E1F01501C3); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F97E49D_356E_5A0C_41C8_AD0E187C1CB4",
   "pitch": -22.91,
   "yaw": 160.68,
   "hfov": 16.26,
   "distance": 100
  }
 ],
 "id": "overlay_7ADBE3FD_3546_046F_41BB_5E78B5A5285E",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_tcap0",
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
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B, this.camera_10B3332F_3572_BE0B_41BE_9887CF3F0D11); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F8BF47C_356E_5A0C_41BB_68C9D169BB60",
   "pitch": -13.18,
   "yaw": 42.08,
   "hfov": 23.6,
   "distance": 100
  }
 ],
 "id": "overlay_3328EDA2_2BC2_1C95_41C3_613FA5A8F0D4",
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
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_1_HS_1_0_0_map.gif",
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
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F8B847C_356E_5A0C_41AD_2F1AED74C5C5",
   "pitch": -13.14,
   "yaw": -47.35,
   "hfov": 22.8,
   "distance": 100
  }
 ],
 "id": "overlay_3328FDA2_2BC2_1C95_41B7_9FA999D8A139",
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
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_1_HS_2_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74, this.camera_10A1D33D_3572_BE0F_417E_C1591359CBFC); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F8CF47D_356E_5A0C_41C8_C7EEF15AC135",
   "pitch": 23.96,
   "yaw": 133.88,
   "hfov": 27.61,
   "distance": 100
  }
 ],
 "id": "overlay_3328CDA2_2BC2_1C95_41BB_C3EA9D844A73",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid18A88009_3572_B9F7_41C8_68F301254D1E_0",
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
 "paddingLeft": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image36545"
 },
 "paddingBottom": 0
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
 "paddingLeft": 10,
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText27706"
 },
 "paddingBottom": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_02151B49_2B42_0597_4193_6A67B5B7F367, this.camera_118EF159_3572_BA17_41C9_F2A21B3BB65E); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F80B493_356E_5A14_41B9_72423B7435BA",
   "pitch": -20.23,
   "yaw": -130.82,
   "hfov": 23,
   "distance": 100
  }
 ],
 "id": "overlay_1AB669DE_2B4E_04AD_41BC_2AA9CADF89C1",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_068CC17A_2B42_0474_41C2_501B94CEA994_tcap0",
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
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA, this.camera_11373251_3572_BE17_41C4_4DDF7DBD11AF); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F85C48A_356E_5AF4_41C7_64C000C7DDF4",
   "pitch": -15.7,
   "yaw": -73.37,
   "hfov": 22.81,
   "distance": 100
  }
 ],
 "id": "overlay_309B6C87_2BC2_1C9C_41B3_E70EF2338814",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_14FD56C5_2D42_0C9F_41BC_F0408470B38F_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid18AA600B_3572_BA0B_41C1_C127CA8CA82A",
 "id": "viewer_uid18AA600B_3572_BA0B_41C1_C127CA8CA82AVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "horizontalAlign": "center",
 "id": "image_uid18A5A007_3572_B9FB_41B3_9C30A9DE2258_0",
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
 "paddingLeft": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image36542"
 },
 "paddingBottom": 0
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
 "paddingLeft": 10,
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText20224"
 },
 "paddingBottom": 10
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid18AA600B_3572_BA0B_41C1_C127CA8CA82A",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadShadowHorizontalLength": 0,
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
 "paddingLeft": 0,
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
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
 "progressBorderColor": "#000000",
 "data": {
  "name": "ViewerArea36547"
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
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3, this.camera_10FBD2E0_3572_BE35_41AC_CC00D04F171C); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F81248D_356E_5A0C_41C3_1926C84A7710",
   "pitch": -16.79,
   "yaw": 175.71,
   "hfov": 25.3,
   "distance": 100
  }
 ],
 "id": "overlay_0D417F83_2B42_1C9B_41B9_4F8040B04F4E",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_tcap0",
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
   "click": "this.startPanoramaWithCamera(this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B, this.camera_10DF52B5_3572_BE1F_41C2_B7BD3E64C8F0); this.mainPlayList.set('selectedIndex', 7)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1, this.camera_10C862C3_3572_BE7B_41C2_B626196BB509); this.mainPlayList.set('selectedIndex', 9)",
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
 "hfov": 30,
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
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782, this.camera_13412442_3572_BA75_41B6_4B40A56E40AF); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F8B9482_356E_5AF4_41C0_394B0ACC8608",
   "pitch": -21.78,
   "yaw": 132.89,
   "hfov": 22,
   "distance": 100
  }
 ],
 "id": "overlay_3C96447D_2BDE_0C6F_41C2_B026135738FA",
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
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B, this.camera_1352E435_3572_BA1F_41C0_5FBB16B41D0D); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F8B4482_356E_5AF4_41AA_0087A3B29769",
   "pitch": -17.83,
   "yaw": -52.85,
   "hfov": 20.52,
   "distance": 50
  }
 ],
 "id": "overlay_3C96B47D_2BDE_0C6F_41C1_317458ABCCED",
 "data": {
  "label": "Arrow 02b Left"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_tcap0",
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
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F, this.camera_134FD44F_3572_BA0B_41C2_4A1438EB3B97); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F8D447C_356E_5A0C_41A0_C2C3C35BD50C",
   "pitch": 1.12,
   "yaw": 7.1,
   "hfov": 17.09,
   "distance": 100
  }
 ],
 "id": "overlay_33DE60DF_2BC2_04AB_41A6_5562321EAD82",
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
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_1_HS_2_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9, this.camera_137E945C_3572_BA0D_41C5_5E5898C1AA22); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F8CF47C_356E_5A0C_41B3_C4560C83A89E",
   "pitch": -23.87,
   "yaw": -67.49,
   "hfov": 37.41,
   "distance": 50
  }
 ],
 "id": "overlay_3398CB53_2BC6_05BB_419F_C247C86543A8",
 "data": {
  "label": "Arrow 06a Right"
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
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 90.88,
   "hfov": 25.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.93
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F8C947C_356E_5A0C_41C2_4D539C33BD37",
   "pitch": 9.93,
   "yaw": 90.88,
   "hfov": 25.5,
   "distance": 100
  }
 ],
 "id": "overlay_6AF9B940_35C2_0594_41B1_40D94E36C4F6",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_tcap0",
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
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -153.4,
   "hfov": 24.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.04
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3, this.camera_104BF363_3572_BE3B_41B5_924144293C84); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F82E48C_356E_5A0C_41C1_B677E4600152",
   "pitch": -23.04,
   "yaw": -153.4,
   "hfov": 24.83,
   "distance": 100
  }
 ],
 "id": "overlay_0991855A_2B42_0DB5_41C2_55F0D69D36B1",
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
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 28.76,
   "hfov": 22.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.49
  }
 ],
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
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F82848C_356E_5A0C_41BE_D87CDA5169FA",
   "pitch": -26.49,
   "yaw": 28.76,
   "hfov": 22.68,
   "distance": 100
  }
 ],
 "id": "overlay_0F09D021_2B42_039A_41C2_B4E17E02B778",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_tcap0",
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
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782, this.camera_1183C140_3572_BA75_41A1_C4D4FA54972B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F9BD495_356E_5A1C_41B4_099D2F24456A",
   "pitch": -21.12,
   "yaw": -7.2,
   "hfov": 20.31,
   "distance": 100
  }
 ],
 "id": "overlay_13FB3322_07AF_B0FB_4190_88C3AA9C9DC9",
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
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_1_HS_2_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_1C113258_124A_783E_41AE_7AD1810FD677, this.camera_1188A14C_3572_BA0D_41C3_7B39C635CE47); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F9B9495_356E_5A1C_41A2_2A926D821273",
   "pitch": -10.76,
   "yaw": 179.79,
   "hfov": 18.41,
   "distance": 100
  }
 ],
 "id": "overlay_05079367_12DA_9812_419B_49D527A444D6",
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
      "url": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_1_HS_3_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F, this.camera_119C7134_3572_BA1D_41B0_ECA037141CCD); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F9B149B_356E_5A14_41B1_6D7AC3767922",
   "pitch": -12.75,
   "yaw": -139.62,
   "hfov": 18.65,
   "distance": 50
  }
 ],
 "id": "overlay_54F41002_35C2_0395_41B4_5A41FC98D127",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_16772F99_2D4E_3CB7_41BE_81DA8CB0154D_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "items": [
  {
   "media": "this.album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_0",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
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
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_1_HS_1_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1F8F947A_356E_5A14_41C6_17954F62EB82",
   "pitch": -32.81,
   "yaw": -61.35,
   "hfov": 33.43,
   "distance": 50
  }
 ],
 "id": "overlay_3DB60832_2BC6_03F5_4199_BD2EC1E03CF5",
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
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_1_HS_2_0_0_map.gif",
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
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F8F347B_356E_5A14_4183_E40AAEC91AD4",
   "pitch": -30.55,
   "yaw": 143.11,
   "hfov": 33.16,
   "distance": 50
  }
 ],
 "id": "overlay_320D4900_2BC2_0595_41C5_A91101D429BC",
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
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_1_HS_3_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14, this.camera_109112FF_3572_BE0B_41C9_68735E2382D7); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F8ED47B_356E_5A14_41C5_B3736166906B",
   "pitch": -20.18,
   "yaw": -7.34,
   "hfov": 21.72,
   "distance": 100
  }
 ],
 "id": "overlay_32CE196F_2BC6_046B_41C2_CFD906FBFF04",
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
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_1_HS_4_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -75.74,
   "hfov": 25.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.17
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F8E747B_356E_5A14_41AE_2BC6DC1FE256",
   "pitch": -18.17,
   "yaw": -75.74,
   "hfov": 25.56,
   "distance": 50
  }
 ],
 "id": "overlay_1961A1E3_2B42_049B_41B5_FF3E6CF4E726",
 "data": {
  "label": "Circle Arrow 01c Right"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_tcap0",
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
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_1_HS_0_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1F80848D_356E_5A0C_41B3_F5A228AF1565",
   "pitch": -20.23,
   "yaw": 2.41,
   "hfov": 21.2,
   "distance": 100
  }
 ],
 "id": "overlay_02809725_2B42_0D9F_41C5_79B491D30B25",
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
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED, this.camera_116641FD_3572_BA0F_418A_7BCC0ECC1B90); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F802492_356E_5A14_41B5_D1196735CBC6",
   "pitch": -21.12,
   "yaw": -177.28,
   "hfov": 22.1,
   "distance": 100
  }
 ],
 "id": "overlay_01B9FB8F_2B7E_04AB_41AC_03DD1A34DC61",
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
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_1_HS_2_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_068CC17A_2B42_0474_41C2_501B94CEA994, this.camera_1160C1F0_3572_BA15_41C3_2A7E13408265); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F814493_356E_5A14_41C0_962B5046F638",
   "pitch": 3.04,
   "yaw": -176.34,
   "hfov": 26.44,
   "distance": 50
  }
 ],
 "id": "overlay_056F7A70_2B42_0475_41B1_2CBAB080BD60",
 "data": {
  "label": "Arrow 05a Right"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_02151B49_2B42_0597_4193_6A67B5B7F367_tcap0",
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
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F, this.camera_1386E40C_3572_BA0D_41CA_5F6551008FEF); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F8C547D_356E_5A0B_418B_2EC7A1558DFE",
   "pitch": -13.33,
   "yaw": -158.91,
   "hfov": 25.71,
   "distance": 100
  }
 ],
 "id": "overlay_33460EAD_2BC1_FCEC_41BC_762D3CB73C40",
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
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA, this.camera_139853FF_3572_BE0B_41A8_4332397A1BD6); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F8C3482_356E_5AF4_41C4_34A73B818622",
   "pitch": -12.47,
   "yaw": -68.26,
   "hfov": 29.76,
   "distance": 50
  }
 ],
 "id": "overlay_3345FEAD_2BC1_FCEC_41A3_66C3BB2DE93C",
 "data": {
  "label": "Arrow 06a Right"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_tcap0",
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
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 165.66,
   "hfov": 18.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.58
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9, this.camera_114191BF_3572_BA0B_41C3_E3351559128B); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF1C474_356E_5A1C_41B9_6D545384638F",
   "pitch": -12.58,
   "yaw": 165.66,
   "hfov": 18.3,
   "distance": 100
  }
 ],
 "id": "overlay_3CCFA11A_2BC2_05B4_41C4_1FF8AA7E663B",
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
      "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -10.72,
   "hfov": 17.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.96
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0, this.camera_115A01B2_3572_BA15_4189_23C7F7898D76); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF17474_356E_5A1C_41C2_7CABE885E585",
   "pitch": -10.96,
   "yaw": -10.72,
   "hfov": 17.06,
   "distance": 100
  }
 ],
 "id": "overlay_3CCFB11B_2BC2_05B4_4156_085CE0B6C968",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_tcap0",
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
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B, this.camera_10AE334A_3572_BE75_41C2_76FD70B243E2); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F97349D_356E_5A0C_41BF_150F197D0483",
   "pitch": -28.26,
   "yaw": 4.47,
   "hfov": 15.55,
   "distance": 100
  }
 ],
 "id": "overlay_7A3BBB48_3546_0595_41BA_A5C2494D0A20",
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
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2, this.camera_105D5356_3572_BE1D_41C7_709332233EC3); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F96C49D_356E_5A0C_41C7_47536E9DF592",
   "pitch": -21.4,
   "yaw": -178.59,
   "hfov": 16.43,
   "distance": 100
  }
 ],
 "id": "overlay_50E7B08F_35C6_04AB_41BF_88E68DCF1F6F",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_tcap0",
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
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_1_HS_0_0_0_map.gif",
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
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F9CF495_356E_5A1C_41C2_60811D332D32",
   "pitch": -2.49,
   "yaw": -164.6,
   "hfov": 18.73,
   "distance": 100
  }
 ],
 "id": "overlay_7A19614C_3542_05AC_41C4_8FFC79CDEA9A",
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
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9, this.camera_10E7B2EE_3572_BE0D_41C7_628BD407C226); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F9C6495_356E_5A1C_41B1_C1E2302D14DD",
   "pitch": -43.45,
   "yaw": -67.69,
   "hfov": 29.13,
   "distance": 50
  }
 ],
 "id": "overlay_6E1E62E7_35C2_049B_41B5_563726B1E1C8",
 "data": {
  "label": "Circle Arrow 01b Left"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_tcap0",
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
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2, this.camera_13DF03CC_3572_BE0D_41C3_D9265B1E038A); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F9A649B_356E_5A14_41C6_18D4F153BE6F",
   "pitch": -20.78,
   "yaw": 69.72,
   "hfov": 31.48,
   "distance": 50
  }
 ],
 "id": "overlay_0109478B_1249_9812_415C_71848DC339B8",
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
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_1_HS_2_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1F99E49C_356E_5A0C_41CA_A742716E68B9",
   "pitch": 11.34,
   "yaw": -135.46,
   "hfov": 25.96,
   "distance": 50
  }
 ],
 "id": "overlay_62B585B2_353E_0CF5_41B0_786774143B86",
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
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_1_HS_3_0_0_map.gif",
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
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F99549C_356E_5A0C_41C3_464051B86C61",
   "pitch": -28.16,
   "yaw": -110.79,
   "hfov": 20.97,
   "distance": 50
  }
 ],
 "id": "overlay_619CFDD0_35C2_1CB5_41C5_B7480B9261CD",
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
      "url": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_1_HS_4_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B, this.camera_13D0A3BF_3572_BE0B_41CA_248E4EA89791); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F99049C_356E_5A0C_414D_8966EB944398",
   "pitch": -26.61,
   "yaw": 12.36,
   "hfov": 21.18,
   "distance": 50
  }
 ],
 "id": "overlay_57EF48BA_35C2_04F5_41C2_E5A821EE04C0",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_1C113258_124A_783E_41AE_7AD1810FD677_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
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
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B, this.camera_117771E4_3572_BA3D_419F_B5C318E7F744); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF31473_356E_5A14_41C2_69345DD309A3",
   "pitch": -18.56,
   "yaw": -2.62,
   "hfov": 23.96,
   "distance": 100
  }
 ],
 "id": "overlay_150CA8F0_3552_4A15_41C5_7C6EB52BCB1C",
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
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_1_HS_2_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1FF2B473_356E_5A14_41C0_5660E8811D9E",
   "pitch": -42.02,
   "yaw": -53.71,
   "hfov": 39.64,
   "distance": 50
  }
 ],
 "id": "overlay_150C88F0_3552_4A15_41C7_FB31E2E678D3",
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
      "url": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_1_HS_3_0_0_map.gif",
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
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF3F473_356E_5A14_41AB_893854762E49",
   "pitch": -29.02,
   "yaw": -139.62,
   "hfov": 40.13,
   "distance": 50
  }
 ],
 "id": "overlay_150C98F0_3552_4A15_41BE_6F9EEB31BFBB",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_tcap0",
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
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1, this.camera_103303A5_3572_BE3F_4193_A7FFF4E8F787); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF0E47A_356E_5A14_41C8_81705A426A4D",
   "pitch": -10.42,
   "yaw": -173.82,
   "hfov": 17.9,
   "distance": 100
  }
 ],
 "id": "overlay_3CD6AA93_2BC2_04BB_413F_5FDE12EB4DD8",
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
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_1_HS_2_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1FF0947A_356E_5A14_41C8_71C6BA7B6A85",
   "pitch": -17.5,
   "yaw": 5.89,
   "hfov": 17.68,
   "distance": 100
  }
 ],
 "id": "overlay_3CD68A93_2BC2_04BB_41AF_1B405A0FB79A",
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
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_1_HS_3_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9, this.camera_102213B2_3572_BE15_41CA_4AA400DB2708); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FF0347A_356E_5A14_41B6_38793B1DDE23",
   "pitch": 6.4,
   "yaw": -81.69,
   "hfov": 22.18,
   "distance": 100
  }
 ],
 "id": "overlay_3CD69A93_2BC2_04BB_41C0_30753EB499A2",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_tcap0",
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
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74, this.camera_1149F1CB_3572_BA0B_41BC_8E33B34D6F17); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F8E147B_356E_5A14_41BE_C081DE247805",
   "pitch": -21.31,
   "yaw": -49.69,
   "hfov": 47.03,
   "distance": 50
  }
 ],
 "id": "overlay_339F70BC_2BC2_04EC_41C5_7EDCB4E169D1",
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
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_1_HS_2_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1F8DB47B_356E_5A14_41BE_3A069A9FA438",
   "pitch": -46.14,
   "yaw": -102.46,
   "hfov": 36.69,
   "distance": 100
  }
 ],
 "id": "overlay_333A14BD_2BC2_0CEC_4190_C5BCAEDAB131",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_tcap0",
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
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6, this.camera_111E1223_3572_BE3B_41CA_02674AB1ACDB); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F85448B_356E_5AF4_41CA_CB553C3E0194",
   "pitch": -15.22,
   "yaw": -113.38,
   "hfov": 23.39,
   "distance": 100
  }
 ],
 "id": "overlay_31F1A799_2BCE_0CB7_41B3_353A52519658",
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
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA, this.camera_1105622F_3572_BE0B_41A8_B7953E8A058A); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F84E48B_356E_5AF4_41A0_E8666A1815DC",
   "pitch": -18.51,
   "yaw": 65.5,
   "hfov": 23.24,
   "distance": 100
  }
 ],
 "id": "overlay_303FDE22_2BCE_1F95_41C5_367BD6AA44B6",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid18A8100A_3572_B9F5_41AE_A18E2D0D758E_0",
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
 "paddingLeft": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image36546"
 },
 "paddingBottom": 0
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
 "paddingLeft": 10,
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:0.63vw;\"><BR STYLE=\"letter-spacing:0vw;color:#000000;font-size:0.63vw;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText11028"
 },
 "paddingBottom": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA, this.camera_10F122D1_3572_BE17_41BD_425191A42F24); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F8A5483_356E_5AF4_41BA_CF40A603EB72",
   "pitch": -20.71,
   "yaw": -11.11,
   "hfov": 20.62,
   "distance": 100
  }
 ],
 "id": "overlay_6C7BC9A1_3542_0497_41C1_817213DEB9BC",
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
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_1_HS_1_0_0_map.gif",
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
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F89F483_356E_5AF4_41C1_350356666AF5",
   "pitch": -18.77,
   "yaw": 169.53,
   "hfov": 18.52,
   "distance": 100
  }
 ],
 "id": "overlay_6D8DA711_3542_0DB7_41B3_8A2A71225C0B",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_tcap0",
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
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9, this.camera_11BE617F_3572_BA0B_41C4_EBB5FF1418BA); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F9E5494_356E_5A1C_41B6_774084082181",
   "pitch": 7.41,
   "yaw": -84.49,
   "hfov": 18.32,
   "distance": 100
  }
 ],
 "id": "overlay_3CDAAEA0_2BC2_1C95_41C2_F56569049FA3",
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
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_1_HS_2_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E, this.camera_11BA8172_3572_BA15_41B1_F32B2B01C4D5); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F9E0494_356E_5A1C_41C0_875996DF2A0C",
   "pitch": -34.46,
   "yaw": -12.37,
   "hfov": 33.54,
   "distance": 50
  }
 ],
 "id": "overlay_3662776D_2BC2_0C6F_41C3_F3F169BF2C1E",
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
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_1_HS_3_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6, this.camera_11A5218C_3572_BA0D_41C0_470737C63B92); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F9D8494_356E_5A1C_41B2_DCD068760262",
   "pitch": -18.95,
   "yaw": 0.26,
   "hfov": 27.04,
   "distance": 50
  }
 ],
 "id": "overlay_79E0CB86_3546_049D_41BE_4A7DC03BBE20",
 "data": {
  "label": "Circle Arrow 01a Left"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid18A6B008_3572_B9F5_41C5_C08D5794A02A_0",
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
 "paddingLeft": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image36543"
 },
 "paddingBottom": 0
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
 "paddingLeft": 10,
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText20224"
 },
 "paddingBottom": 10
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
   "click": "this.startPanoramaWithCamera(this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F, this.camera_13E973F2_3572_BE15_41AF_19E74E78686E); this.mainPlayList.set('selectedIndex', 1)",
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
 "hfov": 30,
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
   "click": "this.startPanoramaWithCamera(this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0, this.camera_110E523C_3572_BE0D_41C8_15144AB277B1); this.mainPlayList.set('selectedIndex', 35)",
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
 "hfov": 30,
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
 "inertia": true,
 "hfov": 30,
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
   "click": "this.startPanoramaWithCamera(this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD, this.camera_1192311B_3572_BA0B_41B6_CD5150F2F923); this.mainPlayList.set('selectedIndex', 2)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA, this.camera_11964127_3572_BA3B_41B6_B8025C4A6D74); this.mainPlayList.set('selectedIndex', 0)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE, this.camera_113FA26B_3572_BE0B_41C3_6CC39937B2BD); this.mainPlayList.set('selectedIndex', 5); this.showWindow(this.window_2DD7F75E_35DE_460D_41C8_56490CB7D847, null, false)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2, this.camera_11288285_3572_BEFF_41C9_C58CF1F52C74); this.mainPlayList.set('selectedIndex', 41)",
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
 "hfov": 30,
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
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2, this.camera_11AB719A_3572_BA15_41C9_1C66C059358F); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F82248C_356E_5A0C_41A7_7A33A8D531DF",
   "pitch": -23.25,
   "yaw": 5.79,
   "hfov": 23.03,
   "distance": 100
  }
 ],
 "id": "overlay_08BE5A1E_2B5E_07AC_41AD_02EEFDA2971C",
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
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1, this.camera_115211A6_3572_BA3D_41B3_A1CA0902D10A); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F81A48C_356E_5A0C_41AA_3AC6A44B420C",
   "pitch": -19.94,
   "yaw": -175.43,
   "hfov": 24.85,
   "distance": 100
  }
 ],
 "id": "overlay_095C17B5_2B42_0CFC_41C3_6AA7A817CC09",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_tcap0",
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
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14, this.camera_107A236F_3572_BE0B_41C7_BA8191E46F76); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F86D485_356E_5AFC_41CA_B20A72AE3BE0",
   "pitch": -22.02,
   "yaw": -65.27,
   "hfov": 19.42,
   "distance": 100
  }
 ],
 "id": "overlay_37F962DB_2BC6_04AB_41AD_EC4243E42F08",
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
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B, this.camera_1069037C_3572_BE0D_41B5_3188F4EDF7E6); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1F86448A_356E_5AF4_41C1_7E3F345693C1",
   "pitch": -19.2,
   "yaw": 117.79,
   "hfov": 23.93,
   "distance": 100
  }
 ],
 "id": "overlay_37A08FE3_2BC6_7C9B_4173_0F320D697F80",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 30,
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
 "id": "panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid18A2A002_3572_B9F5_41C3_1CA240569BDD_0",
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
 "paddingLeft": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image36541"
 },
 "paddingBottom": 0
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
 "paddingLeft": 10,
 "paddingTop": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText26183"
 },
 "paddingBottom": 10
},
{
 "colCount": 4,
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
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
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
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
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
   "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F84348B_356E_5AF4_41B0_D3B2CD4E8938",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_1F882484_356E_5AFC_419F_C9B9FB85CFE0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_1_HS_1_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1F87C484_356E_5AFC_41C8_FD735A15DC21",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_1_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_1F873484_356E_5AFC_41C4_9246D511B822",
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
   "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_1F892483_356E_5AF4_41A2_88A163B96709",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_1F88C484_356E_5AFC_41A5_AD3166939783",
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
   "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_1F83B48B_356E_5AF4_41BE_789B1758843B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_1F83448C_356E_5A0C_41C7_E2A64EDFF8FC",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F8AB483_356E_5AF4_41B2_5F037292C3F1",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
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
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
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
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
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
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F98649C_356E_5A0C_41B1_11C2CE945547",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F97E49D_356E_5A0C_41C8_AD0E187C1CB4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F8BF47C_356E_5A0C_41BB_68C9D169BB60",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F8B847C_356E_5A0C_41AD_2F1AED74C5C5",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_1F8CF47D_356E_5A0C_41C8_C7EEF15AC135",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F80B493_356E_5A14_41B9_72423B7435BA",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F85C48A_356E_5AF4_41C7_64C000C7DDF4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F81248D_356E_5A0C_41C3_1926C84A7710",
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
   "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F8B9482_356E_5AF4_41C0_394B0ACC8608",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1F8B4482_356E_5AF4_41AA_0087A3B29769",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_1F8D447C_356E_5A0C_41A0_C2C3C35BD50C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_1F8CF47C_356E_5A0C_41B3_C4560C83A89E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_1F8C947C_356E_5A0C_41C2_4D539C33BD37",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F82E48C_356E_5A0C_41C1_B677E4600152",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F82848C_356E_5A0C_41BE_D87CDA5169FA",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
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
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
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
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
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
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_1F8F947A_356E_5A14_41C6_17954F62EB82",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_1F8F347B_356E_5A14_4183_E40AAEC91AD4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F8ED47B_356E_5A14_41C5_B3736166906B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_1_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_1F8E747B_356E_5A14_41AE_2BC6DC1FE256",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F80848D_356E_5A0C_41B3_F5A228AF1565",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F802492_356E_5A14_41B5_D1196735CBC6",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_1_HS_2_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F814493_356E_5A14_41C0_962B5046F638",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F8C547D_356E_5A0B_418B_2EC7A1558DFE",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1F8C3482_356E_5AF4_41C4_34A73B818622",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FF1C474_356E_5A1C_41B9_6D545384638F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CCF911A_2BC2_05B4_415A_92BD5F67A7E1_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FF17474_356E_5A1C_41C2_7CABE885E585",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F97349D_356E_5A0C_41BF_150F197D0483",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F96C49D_356E_5A0C_41C7_47536E9DF592",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_1F9CF495_356E_5A1C_41C2_60811D332D32",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_1F9C6495_356E_5A1C_41B1_C1E2302D14DD",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
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
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
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
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
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
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
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
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
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
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
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
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
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
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FF0E47A_356E_5A14_41C8_81705A426A4D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FF0947A_356E_5A14_41C8_71C6BA7B6A85",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_1FF0347A_356E_5A14_41B6_38793B1DDE23",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_1F8E147B_356E_5A14_41BE_C081DE247805",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_1F8DB47B_356E_5A14_41BE_3A069A9FA438",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F85448B_356E_5AF4_41CA_CB553C3E0194",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F84E48B_356E_5AF4_41A0_E8666A1815DC",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F8A5483_356E_5AF4_41BA_CF40A603EB72",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F89F483_356E_5AF4_41C1_350356666AF5",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_1F9E5494_356E_5A1C_41B6_774084082181",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_1F9E0494_356E_5A1C_41C0_875996DF2A0C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_1_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_1F9D8494_356E_5A1C_41B2_DCD068760262",
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
   "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F82248C_356E_5A0C_41A7_7A33A8D531DF",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F81A48C_356E_5A0C_41AA_3AC6A44B420C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F86D485_356E_5AFC_41CA_B20A72AE3BE0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F86448A_356E_5AF4_41C1_7E3F345693C1",
 "rowCount": 6,
 "class": "AnimatedImageResource"
}],
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player6037"
 },
 "scripts": {
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "existsKey": function(key){  return key in window; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "registerKey": function(key, value){  window[key] = value; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "unregisterKey": function(key){  delete window[key]; }
 },
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
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
