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
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
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
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "2-6-6",
 "hfovMin": "150%",
 "id": "panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782",
 "overlays": [
  "this.overlay_6C7BC9A1_3542_0497_41C1_817213DEB9BC",
  "this.overlay_6D8DA711_3542_0DB7_41B3_8A2A71225C0B",
  "this.panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -11.11,
   "class": "AdjacentPanorama",
   "backwardYaw": 132.89,
   "panorama": "this.panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA",
   "distance": 1
  },
  {
   "yaw": 169.53,
   "class": "AdjacentPanorama",
   "backwardYaw": 159.1,
   "panorama": "this.panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_t.jpg",
 "hfovMax": 130
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
 "id": "camera_28195CF9_3ABE_132B_4181_211436FCF6A1",
 "class": "PanoramaCamera"
},
{
 "height": 1080,
 "thumbnailUrl": "media/photo_2FB5CFE7_35F2_C63B_41BB_92207220D6DD_t.png",
 "id": "photo_2FB5CFE7_35F2_C63B_41BB_92207220D6DD",
 "width": 1920,
 "duration": 5000,
 "label": "Security Post",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_2FB5CFE7_35F2_C63B_41BB_92207220D6DD.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
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
   "thumbnailUrl": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_t.jpg",
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
   }
  }
 ],
 "label": "2",
 "hfovMin": "150%",
 "id": "panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0",
 "overlays": [
  "this.overlay_150CA8F0_3552_4A15_41C5_7C6EB52BCB1C",
  "this.overlay_150C88F0_3552_4A15_41C7_FB31E2E678D3",
  "this.overlay_150C98F0_3552_4A15_41BE_6F9EEB31BFBB",
  "this.overlay_13021003_3553_B9FB_4192_CC43E5A1D32A",
  "this.panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_tcap0"
 ],
 "partial": false,
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
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_090534_00_merged",
 "hfovMin": "150%",
 "id": "panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14",
 "overlays": [
  "this.overlay_023C828C_2B42_04AD_41BA_AFA76187411C",
  "this.overlay_00D62EFE_2B46_3C6D_4188_FF61B6395E84",
  "this.panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_090924_00_merged",
 "hfovMin": "150%",
 "id": "panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2",
 "overlays": [
  "this.overlay_0D417F83_2B42_1C9B_41B9_4F8040B04F4E",
  "this.panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 175.71,
   "class": "AdjacentPanorama",
   "backwardYaw": 5.79,
   "panorama": "this.panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_t.jpg",
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
 "id": "panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_090711_00_merged",
 "hfovMin": "150%",
 "id": "panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1",
 "overlays": [
  "this.overlay_0991855A_2B42_0DB5_41C2_55F0D69D36B1",
  "this.overlay_0F09D021_2B42_039A_41C2_B4E17E02B778",
  "this.panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -153.4,
   "class": "AdjacentPanorama",
   "backwardYaw": -175.43,
   "panorama": "this.panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_t.jpg",
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
 "id": "camera_28141D05_3ABE_12DB_41C1_668F037FE99C",
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
 "id": "panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_camera",
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
   "thumbnailUrl": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_t.jpg",
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
   }
  }
 ],
 "label": "IMG_20230329_123537_00_merged",
 "hfovMin": "150%",
 "id": "panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0",
 "overlays": [
  "this.overlay_14B72C79_3532_4A17_41A0_8FB31137F75C",
  "this.overlay_14B73C79_3532_4A17_41C0_B44BB926ABE3",
  "this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_tcap0"
 ],
 "partial": false,
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
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_t.jpg",
 "hfovMax": 130
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
 "id": "camera_282E3D34_3ABE_0D39_41C7_5F1750B12DAB",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "2-6-2",
 "hfovMin": "150%",
 "id": "panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74",
 "overlays": [
  "this.overlay_33DE60DF_2BC2_04AB_41A6_5562321EAD82",
  "this.overlay_3398CB53_2BC6_05BB_419F_C247C86543A8",
  "this.overlay_6AF9B940_35C2_0594_41B1_40D94E36C4F6",
  "this.panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 7.1,
   "class": "AdjacentPanorama",
   "backwardYaw": 133.88,
   "panorama": "this.panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F",
   "distance": 1
  },
  {
   "yaw": -67.49,
   "class": "AdjacentPanorama",
   "backwardYaw": -49.69,
   "panorama": "this.panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_t.jpg",
 "hfovMax": 130
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
   "thumbnailUrl": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_t.jpg",
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
   }
  }
 ],
 "label": "IMG_20230329_122453_00_merged",
 "hfovMin": "150%",
 "id": "panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA",
 "overlays": [
  "this.overlay_3BC283F4_3532_DE1D_41B6_AB517704C443",
  "this.overlay_2E5A4CF1_35F7_CA14_41A4_3CC8E2870557",
  "this.panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_tcap0"
 ],
 "partial": false,
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
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA_t.jpg",
 "hfovMax": 130
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
 "id": "camera_2E2638C2_3ABE_1359_41C9_66DAD10DD3BF",
 "class": "PanoramaCamera"
},
{
 "titleFontColor": "#000000",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_197D7E96_36D2_461D_41B6_939290820326",
 "backgroundOpacity": 1,
 "width": 400,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBorderSize": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyBorderSize": 0,
 "veilColorDirection": "horizontal",
 "headerBorderColor": "#000000",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 400,
 "bodyBorderColor": "#000000",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "title": "",
 "titleFontStyle": "normal",
 "titlePaddingBottom": 5,
 "shadowHorizontalLength": 3,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "paddingLeft": 0,
 "footerHeight": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "titlePaddingLeft": 5,
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "children": [
  "this.image_uid2931467F_3ABE_1F27_419A_EFBBACD7FA07_0",
  "this.htmlText_19762E95_36D2_461E_41C8_127B00CD56A3"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titleFontSize": "1.09vw",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBorderColor": "#000000",
 "closeButtonPaddingBottom": 0,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "titlePaddingRight": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "bodyPaddingBottom": 5,
 "shadowSpread": 1,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "data": {
  "name": "Window26182"
 },
 "titleFontFamily": "Arial",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ]
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
 "id": "panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_camera",
 "class": "PanoramaCamera"
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
 "id": "camera_29A7ADC7_3ABE_0D67_41A7_8A29438E0BBB",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "2-6-3",
 "hfovMin": "150%",
 "id": "panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F",
 "overlays": [
  "this.overlay_3328EDA2_2BC2_1C95_41C3_613FA5A8F0D4",
  "this.overlay_3328FDA2_2BC2_1C95_41B7_9FA999D8A139",
  "this.overlay_3328CDA2_2BC2_1C95_41BB_C3EA9D844A73",
  "this.panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 42.08,
   "class": "AdjacentPanorama",
   "backwardYaw": -158.91,
   "panorama": "this.panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B",
   "distance": 1
  },
  {
   "yaw": 133.88,
   "class": "AdjacentPanorama",
   "backwardYaw": 7.1,
   "panorama": "this.panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_t.jpg",
 "hfovMax": 130
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
 "id": "camera_2F83199B_3ABE_15EF_4191_C8A182743122",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "2-4",
 "hfovMin": "150%",
 "id": "panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9",
 "overlays": [
  "this.overlay_3CD6AA93_2BC2_04BB_413F_5FDE12EB4DD8",
  "this.overlay_3CD68A93_2BC2_04BB_41AF_1B405A0FB79A",
  "this.overlay_3CD69A93_2BC2_04BB_41C0_30753EB499A2",
  "this.panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -81.69,
   "class": "AdjacentPanorama",
   "backwardYaw": -84.49,
   "panorama": "this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9",
   "distance": 1
  },
  {
   "yaw": -173.82,
   "class": "AdjacentPanorama",
   "backwardYaw": -165,
   "panorama": "this.panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_t.jpg",
 "hfovMax": 130
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
 "id": "camera_28763D71_3ABE_0D3B_41A7_D7FCF1987502",
 "class": "PanoramaCamera"
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
 "id": "camera_2F7BEB25_3ABE_16DB_41B9_C9ABC2941761",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "2-6-1",
 "hfovMin": "150%",
 "id": "panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9",
 "overlays": [
  "this.overlay_339F70BC_2BC2_04EC_41C5_7EDCB4E169D1",
  "this.overlay_333A14BD_2BC2_0CEC_4190_C5BCAEDAB131",
  "this.panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -49.69,
   "class": "AdjacentPanorama",
   "backwardYaw": -67.49,
   "panorama": "this.panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_t.jpg",
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
 "id": "panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_camera",
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
 "id": "camera_2C9BAB56_3ABE_1579_4164_7F25B4BD7E79",
 "class": "PanoramaCamera"
},
{
 "titleFontColor": "#000000",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2C54B1DB_35FE_BA0B_41B9_9F85AF074C12",
 "backgroundOpacity": 1,
 "width": 400,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBorderSize": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyBorderSize": 0,
 "veilColorDirection": "horizontal",
 "headerBorderColor": "#000000",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 400,
 "bodyBorderColor": "#000000",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "titleFontStyle": "normal",
 "titlePaddingBottom": 5,
 "shadowHorizontalLength": 3,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "paddingLeft": 0,
 "footerHeight": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "titlePaddingLeft": 5,
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "children": [
  "this.image_uid2931C67E_3ABE_1F29_41BD_F713373E6839_0",
  "this.htmlText_2C5721DA_35FE_BA15_41A0_AE91364F4110"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titleFontSize": "1.09vw",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBorderColor": "#000000",
 "closeButtonPaddingBottom": 0,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "titlePaddingRight": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "bodyPaddingBottom": 5,
 "shadowSpread": 1,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "data": {
  "name": "Window20223"
 },
 "titleFontFamily": "Arial",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ]
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
 "id": "camera_280E9D10_3ABE_12F9_41C5_F1CFF458768E",
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
 "id": "camera_285A1D40_3ABE_0D59_419F_09851B5DD746",
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
 "id": "camera_2F3E8AB0_3ABE_1739_41CC_6B6C0E407B9B",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "2-6-4",
 "hfovMin": "150%",
 "id": "panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B",
 "overlays": [
  "this.overlay_33460EAD_2BC1_FCEC_41BC_762D3CB73C40",
  "this.overlay_3345FEAD_2BC1_FCEC_41A3_66C3BB2DE93C",
  "this.panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -158.91,
   "class": "AdjacentPanorama",
   "backwardYaw": 42.08,
   "panorama": "this.panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F",
   "distance": 1
  },
  {
   "yaw": -68.26,
   "class": "AdjacentPanorama",
   "backwardYaw": -52.85,
   "panorama": "this.panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_t.jpg",
 "hfovMax": 130
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
 "id": "camera_28FAACD3_3ABE_137F_41BE_313B923BB967",
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
 "id": "camera_2EAD1790_3ABE_1DF9_41C3_6BD6987F4971"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "2-6-5",
 "hfovMin": "150%",
 "id": "panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA",
 "overlays": [
  "this.overlay_3C96447D_2BDE_0C6F_41C2_B026135738FA",
  "this.overlay_3C96B47D_2BDE_0C6F_41C1_317458ABCCED",
  "this.panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 132.89,
   "class": "AdjacentPanorama",
   "backwardYaw": -11.11,
   "panorama": "this.panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782",
   "distance": 1
  },
  {
   "yaw": -52.85,
   "class": "AdjacentPanorama",
   "backwardYaw": -68.26,
   "panorama": "this.panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_t.jpg",
 "hfovMax": 130
},
{
 "height": 1080,
 "thumbnailUrl": "media/photo_10E53297_3552_5E1B_41A9_B4E28BB235E8_t.png",
 "id": "photo_10E53297_3552_5E1B_41A9_B4E28BB235E8",
 "width": 1920,
 "duration": 5000,
 "label": "Logistic Building",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_10E53297_3552_5E1B_41A9_B4E28BB235E8.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "playList": "this.album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_AlbumPlayList",
 "thumbnailUrl": "media/album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_t.png",
 "id": "album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2",
 "label": "Photo Album Lobby",
 "class": "PhotoAlbum"
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
 "id": "camera_299C3D89_3ABE_0DEB_41A5_BD555EB3DD6D",
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
 "id": "panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_camera",
 "class": "PanoramaCamera"
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
 "id": "camera_2FA2A9DC_3ABE_1569_41C0_C76A62ADFD04",
 "class": "PanoramaCamera"
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
 "id": "camera_2F5C4AEF_3ABE_1727_4188_3C545B7E83C5",
 "class": "PanoramaCamera"
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
 "id": "camera_2F1FFA7D_3ABE_172B_4193_7E5403150DBB",
 "class": "PanoramaCamera"
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
 "id": "camera_2F4C5B07_3ABE_16E7_41AF_E49B7DEED14B",
 "class": "PanoramaCamera"
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
 "id": "camera_29883D95_3ABE_0DFB_4193_54C0EF14C52F",
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
 "id": "camera_28820C3B_3ABE_132F_4197_CF4C60621B74",
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
 "id": "panorama_068CC17A_2B42_0474_41C2_501B94CEA994_camera",
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
 "id": "panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_camera",
 "class": "PanoramaCamera"
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
 "id": "camera_28881C1B_3ABE_12EF_41C9_63DF501128FC",
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
 "id": "panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_camera",
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
 "id": "panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_camera",
 "class": "PanoramaCamera"
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
   "thumbnailUrl": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_t.jpg",
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
   }
  }
 ],
 "label": "IMG_20230329_122611_00_merged",
 "hfovMin": "150%",
 "id": "panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD",
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
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD_t.jpg",
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
 "id": "panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_camera",
 "class": "PanoramaCamera"
},
{
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_332451BC_3975_ADDA_4194_9B65BC2B4535",
 "backgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBorderSize": 0,
 "closeButtonRollOverIconLineWidth": 5,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "minWidth": 20,
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "titlePaddingBottom": 5,
 "shadowHorizontalLength": 3,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "footerHeight": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBackgroundOpacity": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
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
 "titlePaddingLeft": 5,
 "layout": "vertical",
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uid2928F68C_3ABE_1FE9_41C0_04BCE063F7D3"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titleFontSize": "1.29vmin",
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonPaddingBottom": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 0.3,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "titlePaddingRight": 5,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingBottom": 0,
 "shadowSpread": 1,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "data": {
  "name": "Window434"
 },
 "titleFontFamily": "Arial",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ]
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
 "id": "panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_085247_00_merged",
 "hfovMin": "150%",
 "id": "panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14",
 "overlays": [
  "this.overlay_31F1A799_2BCE_0CB7_41B3_353A52519658",
  "this.overlay_303FDE22_2BCE_1F95_41C5_367BD6AA44B6",
  "this.panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -113.38,
   "class": "AdjacentPanorama",
   "backwardYaw": -7.34,
   "panorama": "this.panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6",
   "distance": 1
  },
  {
   "yaw": 65.5,
   "class": "AdjacentPanorama",
   "backwardYaw": -65.27,
   "panorama": "this.panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_t.jpg",
 "hfovMax": 130
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
   "thumbnailUrl": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_t.jpg",
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
 "hfovMin": "150%",
 "id": "panorama_1DB25007_124A_7812_4183_C90992DC6F0B",
 "overlays": [
  "this.overlay_1DB39008_124A_781E_419A_070080CAACB2",
  "this.overlay_1DB3A008_124A_781E_4190_D09C63F2D589",
  "this.overlay_2A3B2618_35EE_C614_41A7_58BCD5FD2756",
  "this.panorama_1DB25007_124A_7812_4183_C90992DC6F0B_tcap0"
 ],
 "partial": false,
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
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1DB25007_124A_7812_4183_C90992DC6F0B_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_084954_00_merged",
 "hfovMin": "150%",
 "id": "panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA",
 "overlays": [
  "this.overlay_37F962DB_2BC6_04AB_41AD_EC4243E42F08",
  "this.overlay_37A08FE3_2BC6_7C9B_4173_0F320D697F80",
  "this.panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 117.79,
   "class": "AdjacentPanorama",
   "backwardYaw": -73.37,
   "panorama": "this.panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B",
   "distance": 1
  },
  {
   "yaw": -65.27,
   "class": "AdjacentPanorama",
   "backwardYaw": 65.5,
   "panorama": "this.panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_t.jpg",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/video_2A1F5F58_35D2_C615_41C4_AA70604C64C5_t.jpg",
 "id": "video_2A1F5F58_35D2_C615_41C4_AA70604C64C5",
 "width": 720,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "Fima Company Profile(1)",
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
 "id": "camera_28326D28_3ABE_0D29_41B0_CF47433C3768",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_2A1F5F58_35D2_C615_41C4_AA70604C64C5",
   "start": "this.viewer_uid2928F68C_3ABE_1FE9_41C0_04BCE063F7D3VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_2975D6F0_3ABE_1F39_41B9_3E5CFCA563B1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_2975D6F0_3ABE_1F39_41B9_3E5CFCA563B1, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2928F68C_3ABE_1FE9_41C0_04BCE063F7D3VideoPlayer)",
   "player": "this.viewer_uid2928F68C_3ABE_1FE9_41C0_04BCE063F7D3VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_2975D6F0_3ABE_1F39_41B9_3E5CFCA563B1",
 "class": "PlayList"
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
 "id": "camera_2FC0FA1E_3ABE_16E9_41A7_F27819F0BB33",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_085758_00_merged",
 "hfovMin": "150%",
 "id": "panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED",
 "overlays": [
  "this.overlay_0AF7890A_2B42_0595_41B7_7F4842BC4101",
  "this.panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -53.33,
   "class": "AdjacentPanorama",
   "backwardYaw": -177.28,
   "panorama": "this.panorama_02151B49_2B42_0597_4193_6A67B5B7F367",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_t.jpg",
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
 "id": "panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_090818_00_merged",
 "hfovMin": "150%",
 "id": "panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3",
 "overlays": [
  "this.overlay_08BE5A1E_2B5E_07AC_41AD_02EEFDA2971C",
  "this.overlay_095C17B5_2B42_0CFC_41C3_6AA7A817CC09",
  "this.panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -175.43,
   "class": "AdjacentPanorama",
   "backwardYaw": -153.4,
   "panorama": "this.panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1",
   "distance": 1
  },
  {
   "yaw": 5.79,
   "class": "AdjacentPanorama",
   "backwardYaw": 175.71,
   "panorama": "this.panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_t.jpg",
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
 "id": "panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_camera",
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
 "id": "panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_camera",
 "class": "PanoramaCamera"
},
{
 "height": 1080,
 "thumbnailUrl": "media/photo_10826571_3552_5A17_41C4_8805CA037BB1_t.png",
 "id": "photo_10826571_3552_5A17_41C4_8805CA037BB1",
 "width": 1920,
 "duration": 5000,
 "label": "Security Post",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_10826571_3552_5A17_41C4_8805CA037BB1.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
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
 "id": "panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_camera",
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
 "id": "panorama_1C113258_124A_783E_41AE_7AD1810FD677_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "2-5",
 "hfovMin": "150%",
 "id": "panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6",
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
   "panorama": "this.panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -7.34,
   "class": "AdjacentPanorama",
   "backwardYaw": -113.38,
   "panorama": "this.panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14",
   "distance": 1
  },
  {
   "panorama": "this.panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_t.jpg",
 "hfovMax": 130
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
   "thumbnailUrl": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_t.jpg",
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
 "hfovMin": "150%",
 "id": "panorama_1CC10CE2_124B_8812_4180_81694ECE612F",
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
   "yaw": -3.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -171.38,
   "panorama": "this.panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA",
   "distance": 1
  },
  {
   "yaw": 169.93,
   "class": "AdjacentPanorama",
   "backwardYaw": 83.81,
   "panorama": "this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1CC10CE2_124B_8812_4180_81694ECE612F_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_085924_00_merged",
 "hfovMin": "150%",
 "id": "panorama_068CC17A_2B42_0474_41C2_501B94CEA994",
 "overlays": [
  "this.overlay_1AB669DE_2B4E_04AD_41BC_2AA9CADF89C1",
  "this.panorama_068CC17A_2B42_0474_41C2_501B94CEA994_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -130.82,
   "class": "AdjacentPanorama",
   "backwardYaw": -176.34,
   "panorama": "this.panorama_02151B49_2B42_0597_4193_6A67B5B7F367",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_t.jpg",
 "hfovMax": 130
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
 "id": "camera_28B66C7C_3ABE_1329_4179_9A6D3187A463",
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
 "id": "panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_camera",
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
 "id": "panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_camera",
 "class": "PanoramaCamera"
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
 "id": "camera_28C07CC4_3ABE_1359_417F_E64E7912FC02",
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
 "id": "panorama_02151B49_2B42_0597_4193_6A67B5B7F367_camera",
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
 "id": "panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_camera",
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
 "id": "camera_2E646952_3ABE_1579_419D_4D64459DDF23",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_084527_00_merged",
 "hfovMin": "150%",
 "id": "panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D",
 "overlays": [
  "this.overlay_360A2284_2BC6_049C_41A0_69E694EB0719",
  "this.overlay_362EDF11_2BC6_1DB4_41A0_54706111E8C0",
  "this.panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 29.07,
   "class": "AdjacentPanorama",
   "backwardYaw": 162.39,
   "panorama": "this.panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E",
   "distance": 1
  },
  {
   "yaw": -76.29,
   "class": "AdjacentPanorama",
   "backwardYaw": 137.45,
   "panorama": "this.panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_t.jpg",
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
 "id": "camera_2EEB4810_3ABE_12FA_41C2_EAE2687BACE8",
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
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_124129_00_merged",
 "hfovMin": "150%",
 "id": "panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6",
 "overlays": [
  "this.overlay_7A19614C_3542_05AC_41C4_8FFC79CDEA9A",
  "this.overlay_6E1E62E7_35C2_049B_41B5_563726B1E1C8",
  "this.panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -67.69,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.26,
   "panorama": "this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_t.jpg",
 "hfovMax": 130
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
   "thumbnailUrl": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_t.jpg",
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
 "hfovMin": "150%",
 "id": "panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE",
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
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
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
   "thumbnailUrl": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_t.jpg",
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
   }
  }
 ],
 "label": "2-2",
 "hfovMin": "150%",
 "id": "panorama_1400B319_3552_DE14_41BA_4304C9BE59B0",
 "overlays": [
  "this.overlay_1400A319_3552_DE14_41C1_3A80F0B5C293",
  "this.overlay_14008319_3552_DE14_41CA_BEDDC455048A",
  "this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_tcap0"
 ],
 "partial": false,
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
   "panorama": "this.panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1400B319_3552_DE14_41BA_4304C9BE59B0_t.jpg",
 "hfovMax": 130
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
 "id": "camera_2F93C976_3ABE_1539_41A3_30431A1BC01C",
 "class": "PanoramaCamera"
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
   "thumbnailUrl": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_t.jpg",
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
   }
  }
 ],
 "label": "IMG_20230329_123618_00_merged",
 "hfovMin": "150%",
 "id": "panorama_15E20E42_3532_4674_41A2_17FF096E6F9B",
 "overlays": [
  "this.overlay_15E21E42_3532_4674_41C9_B4341A7323B4",
  "this.panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_tcap0"
 ],
 "partial": false,
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
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_15E20E42_3532_4674_41A2_17FF096E6F9B_t.jpg",
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
 "id": "camera_2E759932_3ABE_1539_418C_734A5EF2EAAE",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "2-4-1",
 "hfovMin": "150%",
 "id": "panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9",
 "overlays": [
  "this.overlay_3CDAAEA0_2BC2_1C95_41C2_F56569049FA3",
  "this.overlay_3662776D_2BC2_0C6F_41C3_F3F169BF2C1E",
  "this.overlay_79E0CB86_3546_049D_41BE_4A7DC03BBE20",
  "this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -84.49,
   "class": "AdjacentPanorama",
   "backwardYaw": -81.69,
   "panorama": "this.panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9",
   "distance": 1
  },
  {
   "yaw": -12.37,
   "class": "AdjacentPanorama",
   "backwardYaw": -133.72,
   "panorama": "this.panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E",
   "distance": 1
  },
  {
   "yaw": 0.26,
   "class": "AdjacentPanorama",
   "backwardYaw": -67.69,
   "panorama": "this.panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_t.jpg",
 "hfovMax": 130
},
{
 "titleFontColor": "#000000",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2DD7F75E_35DE_460D_41C8_56490CB7D847",
 "backgroundOpacity": 1,
 "width": 400,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBorderSize": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyBorderSize": 0,
 "veilColorDirection": "horizontal",
 "headerBorderColor": "#000000",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 400,
 "bodyBorderColor": "#000000",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "Information",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "titleFontStyle": "normal",
 "titlePaddingBottom": 5,
 "shadowHorizontalLength": 3,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "paddingLeft": 0,
 "footerHeight": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "titlePaddingLeft": 5,
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "children": [
  "this.image_uid2935A685_3ABE_1FDB_41B9_E612519A6C6E_0",
  "this.htmlText_2DD7875F_35DE_460B_41C8_5AF8E5545BAA"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titleFontSize": "1.09vw",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBorderColor": "#000000",
 "closeButtonPaddingBottom": 0,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "titlePaddingRight": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "bodyPaddingBottom": 5,
 "shadowSpread": 1,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "data": {
  "name": "Window11027"
 },
 "titleFontFamily": "Arial",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ]
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
 "id": "panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_camera",
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
 "id": "camera_2E46F90D_3ABE_12EB_4182_D13C82FF6948",
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
 "id": "camera_2E28189B_3ABE_13EF_41B3_B87ABC0349B5",
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
 "id": "camera_2887AC4A_3ABE_1369_41C1_D259A0BB8920",
 "class": "PanoramaCamera"
},
{
 "titleFontColor": "#000000",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_1D1459DE_36D3_CA0D_41CA_A7DC2F2C08BE",
 "backgroundOpacity": 1,
 "width": 400,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBorderSize": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyBorderSize": 0,
 "veilColorDirection": "horizontal",
 "headerBorderColor": "#000000",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 400,
 "bodyBorderColor": "#000000",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "titleFontStyle": "normal",
 "titlePaddingBottom": 5,
 "shadowHorizontalLength": 3,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "paddingLeft": 0,
 "footerHeight": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "titlePaddingLeft": 5,
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "children": [
  "this.image_uid292EC696_3ABE_1FF9_41A7_7996180C1A52_0",
  "this.htmlText_1D1169D8_36D3_CA15_41A3_BD4579958554"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titleFontSize": "1.09vw",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBorderColor": "#000000",
 "closeButtonPaddingBottom": 0,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "titlePaddingRight": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "bodyPaddingBottom": 5,
 "shadowSpread": 1,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "data": {
  "name": "Window50568"
 },
 "titleFontFamily": "Arial",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ]
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
 "id": "camera_2839BD1C_3ABE_12E9_414D_639EE48A72F4",
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
 "id": "panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_camera",
 "class": "PanoramaCamera"
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
 "id": "camera_2E38F87B_3ABE_132F_4193_CC95BCCF6CCC",
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
 "id": "camera_2FB299BA_3ABE_1529_41B0_A34634AE9F96",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_090924_00_merged",
 "hfovMin": "150%",
 "id": "panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896",
 "overlays": [
  "this.panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_tcap0"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_t.jpg",
 "hfovMax": 130
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
 "id": "camera_29BE2DAE_3ABE_0D29_41C8_826062E73232",
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
 "id": "camera_28A15C95_3ABE_13FB_41C7_D804BF8FBF05",
 "class": "PanoramaCamera"
},
{
 "titleFontColor": "#000000",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_1CB826D3_36D2_C614_41A3_65E579466897",
 "backgroundOpacity": 1,
 "width": 400,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBorderSize": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyBorderSize": 0,
 "veilColorDirection": "horizontal",
 "headerBorderColor": "#000000",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 400,
 "bodyBorderColor": "#000000",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "titleFontStyle": "normal",
 "titlePaddingBottom": 5,
 "shadowHorizontalLength": 3,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "paddingLeft": 0,
 "footerHeight": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "titlePaddingLeft": 5,
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "children": [
  "this.image_uid292E8698_3ABE_1FE9_41BF_5170F854C4BF_0",
  "this.htmlText_1CBAC6D3_36D2_C614_41C2_331984E8A120"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titleFontSize": "1.09vw",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBorderColor": "#000000",
 "closeButtonPaddingBottom": 0,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "titlePaddingRight": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "bodyPaddingBottom": 5,
 "shadowSpread": 1,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "data": {
  "name": "Window50568"
 },
 "titleFontFamily": "Arial",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ]
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
 "id": "panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_camera",
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
 "id": "panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_camera",
 "class": "PanoramaCamera"
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
 "id": "camera_2FF19A40_3ABE_1759_41A7_FF4F988B1805",
 "class": "PanoramaCamera"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
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
 "id": "camera_28547D4D_3ABE_0D6B_41C7_15E4172E4638",
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
 "id": "camera_2F6BDB40_3ABE_1559_41B9_35C861B0CDDC",
 "class": "PanoramaCamera"
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
 "id": "camera_28F5BCE0_3ABE_1359_41BF_687B650A2D04",
 "class": "PanoramaCamera"
},
{
 "height": 1080,
 "thumbnailUrl": "media/photo_29D69A13_35F2_4E1B_41C7_3219C3C50CF2_t.png",
 "id": "photo_29D69A13_35F2_4E1B_41C7_3219C3C50CF2",
 "width": 1920,
 "duration": 5000,
 "label": "Gate",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_29D69A13_35F2_4E1B_41C7_3219C3C50CF2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
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
 "id": "camera_2EFB77F1_3ABE_1D3B_41C6_E1BCBCD89025",
 "class": "PanoramaCamera"
},
{
 "titleFontColor": "#000000",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2954FE04_35F2_49FD_41BF_087A6F31BBBB",
 "backgroundOpacity": 1,
 "width": 400,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBorderSize": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyBorderSize": 0,
 "veilColorDirection": "horizontal",
 "headerBorderColor": "#000000",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 400,
 "bodyBorderColor": "#000000",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "title": "",
 "titleFontStyle": "normal",
 "titlePaddingBottom": 5,
 "shadowHorizontalLength": 3,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "paddingLeft": 0,
 "footerHeight": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "titlePaddingLeft": 5,
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "children": [
  "this.image_uid293F3675_3ABE_1F3B_41A2_747ABC7F6167_0",
  "this.htmlText_29553E05_35F2_49FF_41AC_B772EF3672DF"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titleFontSize": "1.09vw",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBorderColor": "#000000",
 "closeButtonPaddingBottom": 0,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "titlePaddingRight": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "bodyPaddingBottom": 5,
 "shadowSpread": 1,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "data": {
  "name": "Window26182"
 },
 "titleFontFamily": "Arial",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ]
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_090711_00_merged",
 "hfovMin": "150%",
 "id": "panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41",
 "overlays": [
  "this.panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_tcap0"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_t.jpg",
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
 "id": "camera_28DC0CA5_3ABE_13DB_41C1_06218FC2C39B",
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
 "id": "camera_29839DA2_3ABE_0DD9_4193_1E71AEB1398F",
 "class": "PanoramaCamera"
},
{
 "height": 1080,
 "thumbnailUrl": "media/photo_224F8303_35DE_5FFB_41BA_0B502B1D364E_t.png",
 "id": "photo_224F8303_35DE_5FFB_41BA_0B502B1D364E",
 "width": 1920,
 "duration": 5000,
 "label": "Lobby",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_224F8303_35DE_5FFB_41BA_0B502B1D364E.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
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
 "id": "panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_camera",
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
 "id": "panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_camera",
 "class": "PanoramaCamera"
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
 "id": "camera_28400D58_3ABE_0D69_41CA_8D70E03FA3DF",
 "class": "PanoramaCamera"
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
 "id": "camera_2E5648E2_3ABE_1359_419A_4C8B8A093524",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_085652_00_merged",
 "hfovMin": "150%",
 "id": "panorama_02151B49_2B42_0597_4193_6A67B5B7F367",
 "overlays": [
  "this.overlay_02809725_2B42_0D9F_41C5_79B491D30B25",
  "this.overlay_01B9FB8F_2B7E_04AB_41AC_03DD1A34DC61",
  "this.overlay_056F7A70_2B42_0475_41B1_2CBAB080BD60",
  "this.panorama_02151B49_2B42_0597_4193_6A67B5B7F367_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -176.34,
   "class": "AdjacentPanorama",
   "backwardYaw": -130.82,
   "panorama": "this.panorama_068CC17A_2B42_0474_41C2_501B94CEA994",
   "distance": 1
  },
  {
   "yaw": -177.28,
   "class": "AdjacentPanorama",
   "backwardYaw": -53.33,
   "panorama": "this.panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_085119_00_merged",
 "hfovMin": "150%",
 "id": "panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B",
 "overlays": [
  "this.overlay_309B6C87_2BC2_1C9C_41B3_E70EF2338814",
  "this.panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -73.37,
   "class": "AdjacentPanorama",
   "backwardYaw": 117.79,
   "panorama": "this.panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_090333_00_merged",
 "hfovMin": "150%",
 "id": "panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB",
 "overlays": [
  "this.overlay_3375E250_2BC2_07B4_41B8_610467DD8520",
  "this.panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 159.1,
   "class": "AdjacentPanorama",
   "backwardYaw": 169.53,
   "panorama": "this.panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_t.jpg",
 "hfovMax": 130
},
{
 "height": 1080,
 "thumbnailUrl": "media/photo_10E8EB8B_3552_4E0B_41BD_B8737F552A8A_t.png",
 "id": "photo_10E8EB8B_3552_4E0B_41BD_B8737F552A8A",
 "width": 1920,
 "duration": 5000,
 "label": "Cashier",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_10E8EB8B_3552_4E0B_41BD_B8737F552A8A.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
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
   "thumbnailUrl": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_t.jpg",
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
   }
  }
 ],
 "label": "2-1",
 "hfovMin": "135%",
 "id": "panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B",
 "overlays": [
  "this.overlay_1424D199_3552_DA14_41B6_D8B321F62213",
  "this.overlay_1424E199_3552_DA14_41C2_4DED915935F5",
  "this.overlay_12F2F8BD_3551_CA0F_41BA_87F583328CDF",
  "this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_tcap0"
 ],
 "partial": false,
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
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B_t.jpg",
 "hfovMax": 130
},
{
 "titleFontColor": "#000000",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_28755315_35F2_5E1F_41C6_A02B5B1B2073",
 "backgroundOpacity": 1,
 "width": 400,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBorderSize": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyBorderSize": 0,
 "veilColorDirection": "horizontal",
 "headerBorderColor": "#000000",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 400,
 "bodyBorderColor": "#000000",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "title": "",
 "titleFontStyle": "normal",
 "titlePaddingBottom": 5,
 "shadowHorizontalLength": 3,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "paddingLeft": 0,
 "footerHeight": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "titlePaddingLeft": 5,
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "children": [
  "this.image_uid2933C681_3ABE_1FDB_41B7_C83C6BD4612D_0",
  "this.htmlText_28774315_35F2_5E1E_41BC_AFCAE8549430"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titleFontSize": "1.09vw",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBorderColor": "#000000",
 "closeButtonPaddingBottom": 0,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "titlePaddingRight": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "bodyPaddingBottom": 5,
 "shadowSpread": 1,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "data": {
  "name": "Window27705"
 },
 "titleFontFamily": "Arial",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ]
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_124430_00_merged",
 "hfovMin": "150%",
 "id": "panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B",
 "overlays": [
  "this.overlay_76C5E5A0_3542_0C95_41B5_4811C5654592",
  "this.overlay_7ADBE3FD_3546_046F_41BB_5E78B5A5285E",
  "this.panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -14.48,
   "class": "AdjacentPanorama",
   "backwardYaw": 12.36,
   "panorama": "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677",
   "distance": 1
  },
  {
   "yaw": 160.68,
   "class": "AdjacentPanorama",
   "backwardYaw": 4.47,
   "panorama": "this.panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_t.jpg",
 "hfovMax": 130
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
   "thumbnailUrl": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_t.jpg",
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
   }
  }
 ],
 "label": "IMG_20230329_123859_00_merged",
 "hfovMin": "150%",
 "id": "panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4",
 "overlays": [
  "this.overlay_280BB230_399D_6EEB_41C6_0E790F72A8AC",
  "this.overlay_280B8230_399D_6EEB_41BF_C9EDA74512FA",
  "this.overlay_280B6230_399D_6EEB_41B9_1EBD081EF9CD",
  "this.panorama_280B4230_399D_6EEB_4197_EE008ECDF6C4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -165,
   "class": "AdjacentPanorama",
   "backwardYaw": -173.82,
   "panorama": "this.panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9",
   "distance": 1
  },
  {
   "yaw": 12.63,
   "class": "AdjacentPanorama",
   "backwardYaw": -133.24,
   "panorama": "this.panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4_t.jpg",
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
 "id": "camera_29C16DE0_3ABE_0D59_41AF_14C1FE300A3E",
 "class": "PanoramaCamera"
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
 "id": "camera_28BEFC61_3ABE_135B_41B9_C9CCFE5DD59D",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_124608_00_merged",
 "hfovMin": "150%",
 "id": "panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F",
 "overlays": [
  "this.overlay_7A3BBB48_3546_0595_41BA_A5C2494D0A20",
  "this.overlay_50E7B08F_35C6_04AB_41BF_88E68DCF1F6F",
  "this.panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 4.47,
   "class": "AdjacentPanorama",
   "backwardYaw": 160.68,
   "panorama": "this.panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B",
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
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_t.jpg",
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
 "id": "panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "2-3",
 "hfovMin": "135%",
 "id": "panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A",
 "overlays": [
  "this.overlay_1D93CCB9_352E_CA14_41B7_6DBFC9F95BD2",
  "this.overlay_1D933CB9_352E_CA14_41C5_9BF56963130E",
  "this.overlay_1BFDD1CF_36D1_DA0B_41CA_E8322FAE49B6",
  "this.panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_tcap0"
 ],
 "partial": false,
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
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_t.jpg",
 "hfovMax": 130
},
{
 "titleFontColor": "#000000",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_103E6DF6_3553_CA1D_41C9_721536F2CF0C",
 "backgroundOpacity": 1,
 "width": 400,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBorderSize": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyBorderSize": 0,
 "veilColorDirection": "horizontal",
 "headerBorderColor": "#000000",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 400,
 "bodyBorderColor": "#000000",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "titleFontStyle": "normal",
 "titlePaddingBottom": 5,
 "shadowHorizontalLength": 3,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "paddingLeft": 0,
 "footerHeight": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "titlePaddingLeft": 5,
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "children": [
  "this.image_uid292CD693_3ABE_1FFF_41CC_D55507C3A837_0",
  "this.htmlText_10382DF6_3553_CA1D_41BE_3F2BD2A75357"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titleFontSize": "1.09vw",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBorderColor": "#000000",
 "closeButtonPaddingBottom": 0,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "titlePaddingRight": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "bodyPaddingBottom": 5,
 "shadowSpread": 1,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "data": {
  "name": "Window41602"
 },
 "titleFontFamily": "Arial",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ]
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
 "id": "camera_28619D7D_3ABE_0D2B_41C7_C79E0C6E700E",
 "class": "PanoramaCamera"
},
{
 "height": 1080,
 "thumbnailUrl": "media/photo_10E01DE3_3552_4A3B_41B3_183646F4C9BD_t.png",
 "id": "photo_10E01DE3_3552_4A3B_41B3_183646F4C9BD",
 "width": 1920,
 "duration": 5000,
 "label": "Gate",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_10E01DE3_3552_4A3B_41B3_183646F4C9BD.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_090630_00_merged",
 "hfovMin": "150%",
 "id": "panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00",
 "overlays": [
  "this.panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_tcap0"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_t.jpg",
 "hfovMax": 130
},
{
 "height": 1080,
 "thumbnailUrl": "media/photo_12128DEF_3552_4A0B_41BC_D30017821B05_t.png",
 "id": "photo_12128DEF_3552_4A0B_41BC_D30017821B05",
 "width": 1920,
 "duration": 5000,
 "label": "Server Room",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_12128DEF_3552_4A0B_41BC_D30017821B05.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "titleFontColor": "#000000",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_106A12CE_3552_DE0D_41B3_0DF47A86D789",
 "backgroundOpacity": 1,
 "width": 400,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBorderSize": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyBorderSize": 0,
 "veilColorDirection": "horizontal",
 "headerBorderColor": "#000000",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 400,
 "bodyBorderColor": "#000000",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "title": "",
 "titleFontStyle": "normal",
 "titlePaddingBottom": 5,
 "shadowHorizontalLength": 3,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "paddingLeft": 0,
 "footerHeight": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "titlePaddingLeft": 5,
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "children": [
  "this.image_uid292B8691_3ABE_1FFB_41BE_24E4C27F25BB_0",
  "this.htmlText_106CC2CE_3552_DE0D_41C3_DF77ACA1DB96"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titleFontSize": "1.09vw",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBorderColor": "#000000",
 "closeButtonPaddingBottom": 0,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "titlePaddingRight": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "bodyPaddingBottom": 5,
 "shadowSpread": 1,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "data": {
  "name": "Window38528"
 },
 "titleFontFamily": "Arial",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ]
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
 "id": "panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_camera",
 "class": "PanoramaCamera"
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
   "media": "this.panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_camera"
  },
  {
   "media": "this.panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_camera"
  },
  {
   "media": "this.panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_camera"
  },
  {
   "media": "this.panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_camera"
  },
  {
   "media": "this.panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_camera"
  },
  {
   "media": "this.panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_camera"
  },
  {
   "media": "this.panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_camera"
  },
  {
   "media": "this.panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_camera"
  },
  {
   "media": "this.panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_camera"
  },
  {
   "media": "this.panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_camera"
  },
  {
   "media": "this.panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_camera"
  },
  {
   "media": "this.panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_camera"
  },
  {
   "media": "this.panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_camera"
  },
  {
   "media": "this.panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_camera"
  },
  {
   "media": "this.panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_camera"
  },
  {
   "media": "this.panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_camera"
  },
  {
   "media": "this.panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_camera"
  },
  {
   "media": "this.panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_camera"
  },
  {
   "media": "this.panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_camera"
  },
  {
   "media": "this.panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_camera"
  },
  {
   "media": "this.panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_camera"
  },
  {
   "media": "this.panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_camera"
  },
  {
   "media": "this.panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_camera"
  },
  {
   "media": "this.panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_camera"
  },
  {
   "media": "this.panorama_02151B49_2B42_0597_4193_6A67B5B7F367",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_02151B49_2B42_0597_4193_6A67B5B7F367_camera"
  },
  {
   "media": "this.panorama_068CC17A_2B42_0474_41C2_501B94CEA994",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_068CC17A_2B42_0474_41C2_501B94CEA994_camera"
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
   "media": "this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_camera"
  },
  {
   "media": "this.panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_camera"
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
   "media": "this.panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_camera"
  },
  {
   "media": "this.panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_camera"
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
 "id": "camera_2EDD57B2_3ABE_1D39_41C8_E6058B2D7058",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_084604_00_merged",
 "hfovMin": "150%",
 "id": "panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD",
 "overlays": [
  "this.overlay_355FFEF1_2BC2_7C74_41C0_AEAFD6F09556",
  "this.panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 137.45,
   "class": "AdjacentPanorama",
   "backwardYaw": -76.29,
   "panorama": "this.panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_t.jpg",
 "hfovMax": 130
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
 "id": "camera_29D3EDD3_3ABE_0D7F_41AE_C72B54C3AD8D",
 "class": "PanoramaCamera"
},
{
 "height": 1080,
 "thumbnailUrl": "media/album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_0_t.png",
 "id": "album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_0",
 "width": 1920,
 "duration": 5000,
 "label": "Lobby",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "titleFontColor": "#000000",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2A16D5DD_35EE_DA0C_4195_9F6663D606DB",
 "backgroundOpacity": 1,
 "width": 400,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBorderSize": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyBorderSize": 0,
 "veilColorDirection": "horizontal",
 "headerBorderColor": "#000000",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 400,
 "bodyBorderColor": "#000000",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "title": "",
 "titleFontStyle": "normal",
 "titlePaddingBottom": 5,
 "shadowHorizontalLength": 3,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "paddingLeft": 0,
 "footerHeight": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "titlePaddingLeft": 5,
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "children": [
  "this.image_uid2934F684_3ABE_1FD9_41AC_0BD940F9AF62_0",
  "this.htmlText_2A1D15DB_35EE_DA14_41B9_091829167FAA"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titleFontSize": "1.09vw",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBorderColor": "#000000",
 "closeButtonPaddingBottom": 0,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "titlePaddingRight": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "bodyPaddingBottom": 5,
 "shadowSpread": 1,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "data": {
  "name": "Window27705"
 },
 "titleFontFamily": "Arial",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ]
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
 "id": "camera_2F0E8A99_3ABE_17EB_41C6_51638158A6EA",
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
 "id": "camera_2EBFB76D_3ABE_1D2B_41C7_D16095B64C61",
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
 "id": "panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_camera",
 "class": "PanoramaCamera"
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
 "id": "camera_2E1A8831_3ABE_133B_4186_FBD5E0DB8CAE",
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
 "id": "camera_2FD16A01_3ABE_16DB_41C8_644986F778FD",
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
   "thumbnailUrl": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_t.jpg",
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
   }
  }
 ],
 "label": "1-5-1",
 "hfovMin": "150%",
 "id": "panorama_1C113258_124A_783E_41AE_7AD1810FD677",
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
   "panorama": "this.panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 12.36,
   "class": "AdjacentPanorama",
   "backwardYaw": -14.48,
   "panorama": "this.panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B",
   "distance": 1
  },
  {
   "panorama": "this.panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6",
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
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1C113258_124A_783E_41AE_7AD1810FD677_t.jpg",
 "hfovMax": 130
},
{
 "titleFontColor": "#000000",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_2F8F0DE9_35F2_4A34_41C0_73EF0AAC6C9C",
 "backgroundOpacity": 1,
 "width": 400,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBorderSize": 0,
 "closeButtonPressedBorderSize": 0,
 "bodyBorderSize": 0,
 "veilColorDirection": "horizontal",
 "headerBorderColor": "#000000",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 400,
 "bodyBorderColor": "#000000",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "titleFontStyle": "normal",
 "titlePaddingBottom": 5,
 "shadowHorizontalLength": 3,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "paddingLeft": 0,
 "footerHeight": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#DEDEDE",
  "#DEDEDE",
  "#DEDEDE"
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "titlePaddingLeft": 5,
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "children": [
  "this.image_uid29324680_3ABE_1FD9_41B0_BEF107EADDDA_0",
  "this.htmlText_2F894DE9_35F2_4A34_41BA_DD37E4162FBB"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "footerBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titleFontSize": "1.09vw",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBorderColor": "#000000",
 "closeButtonPaddingBottom": 0,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 1,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "titlePaddingRight": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "bodyPaddingBottom": 5,
 "shadowSpread": 1,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "data": {
  "name": "Window20223"
 },
 "titleFontFamily": "Arial",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ]
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
 "id": "camera_29A9FDBB_3ABE_0D2F_4169_D0ADA8140CA6",
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
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
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
 "id": "camera_2ECCA7D3_3ABE_1D7F_41C3_8E53247909AA",
 "class": "PanoramaCamera"
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
 "id": "camera_287A5D64_3ABE_0D59_41B9_78F75662A74C",
 "class": "PanoramaCamera"
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
 "id": "camera_288D8C2C_3ABE_1329_41B1_C696638AF451",
 "class": "PanoramaCamera"
},
{
 "height": 1080,
 "thumbnailUrl": "media/photo_29D7150E_35F1_DA0D_41CA_C642220447F5_t.png",
 "id": "photo_29D7150E_35F1_DA0D_41CA_C642220447F5",
 "width": 1920,
 "duration": 5000,
 "label": "Logistic Building",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_29D7150E_35F1_DA0D_41CA_C642220447F5.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "height": 1080,
 "thumbnailUrl": "media/photo_10EC6043_3552_5A7B_41BE_48E268ADD465_t.png",
 "id": "photo_10EC6043_3552_5A7B_41BE_48E268ADD465",
 "width": 1920,
 "duration": 5000,
 "label": "Lobby",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_10EC6043_3552_5A7B_41BE_48E268ADD465.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
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
 "id": "camera_2E0A8855_3ABE_137B_41BB_2402A8A1AA05",
 "class": "PanoramaCamera"
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
 "id": "camera_28E0ACED_3ABE_132B_419F_894B09CE9386",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
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
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
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
 "label": "IMG_20230329_084417_00_merged",
 "hfovMin": "150%",
 "id": "panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E",
 "overlays": [
  "this.overlay_37869EDC_2BC2_1CAD_41B7_8E23448DE6EB",
  "this.overlay_1D9EB0E3_2AC2_0494_4194_345C9124B764",
  "this.panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 162.39,
   "class": "AdjacentPanorama",
   "backwardYaw": 29.07,
   "panorama": "this.panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D",
   "distance": 1
  },
  {
   "yaw": -133.72,
   "class": "AdjacentPanorama",
   "backwardYaw": -12.37,
   "panorama": "this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_t.jpg",
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
 "id": "panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_camera",
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
   "thumbnailUrl": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_t.jpg",
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
   }
  }
 ],
 "label": "1-5",
 "hfovMin": "150%",
 "id": "panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2",
 "overlays": [
  "this.overlay_13FB3322_07AF_B0FB_4190_88C3AA9C9DC9",
  "this.overlay_05079367_12DA_9812_419B_49D527A444D6",
  "this.overlay_54F41002_35C2_0395_41B4_5A41FC98D127",
  "this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 179.79,
   "class": "AdjacentPanorama",
   "backwardYaw": 69.72,
   "panorama": "this.panorama_1C113258_124A_783E_41AE_7AD1810FD677",
   "distance": 1
  },
  {
   "yaw": -139.62,
   "class": "AdjacentPanorama",
   "backwardYaw": -178.59,
   "panorama": "this.panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F",
   "distance": 1
  },
  {
   "yaw": -7.2,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.69,
   "panorama": "this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2_t.jpg",
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
 "id": "panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_camera",
 "class": "PanoramaCamera"
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
 "height": 1080,
 "thumbnailUrl": "media/photo_1261A9DC_3552_4A0D_41C8_A66642AEAE94_t.png",
 "id": "photo_1261A9DC_3552_4A0D_41C8_A66642AEAE94",
 "width": 1920,
 "duration": 5000,
 "label": "Canteen",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_1261A9DC_3552_4A0D_41C8_A66642AEAE94.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
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
 "id": "camera_2F2EAACD_3ABE_176B_41C7_6A9C7A7E1F70",
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
 "id": "camera_28D56CB2_3ABE_1339_41C9_1894BB1FE9B2",
 "class": "PanoramaCamera"
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
 "id": "camera_2FEFEA5C_3ABE_1769_41CB_4E99B5C2AA2A",
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
 "id": "panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_camera",
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
   "thumbnailUrl": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_t.jpg",
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
   }
  }
 ],
 "label": "IMG_20230329_123026_00_merged",
 "hfovMin": "150%",
 "id": "panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782",
 "overlays": [
  "this.overlay_5AFF98C2_3742_0495_41C7_2CEF2F435363",
  "this.overlay_5AFE68C2_3742_0495_41A8_FEF9F7FA8C29",
  "this.overlay_5AFE38C2_3742_0495_41B6_CCD46162636C",
  "this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1DB25007_124A_7812_4183_C90992DC6F0B",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 131.51,
   "class": "AdjacentPanorama",
   "backwardYaw": 169.2,
   "panorama": "this.panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE",
   "distance": 1
  },
  {
   "yaw": 179.69,
   "class": "AdjacentPanorama",
   "backwardYaw": -7.2,
   "panorama": "this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782_t.jpg",
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
 "id": "panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_camera",
 "class": "PanoramaCamera"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "minHeight": 50,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "vrPointerSelectionTime": 2000,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
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
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
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
 "class": "UIComponent",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "borderSize": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "UIComponent6218"
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
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage6219"
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
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "class": "CloseButton",
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
 "paddingRight": 5,
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
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "paddingLeft": 5,
 "iconLineWidth": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton6220"
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
   "hfov": 20.62,
   "yaw": -11.11,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -20.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA, this.camera_2EFB77F1_3ABE_1D3B_41C6_E1BCBCD89025); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F8A5483_356E_5AF4_41BA_CF40A603EB72",
   "pitch": -20.71,
   "hfov": 20.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -11.11
  }
 ],
 "id": "overlay_6C7BC9A1_3542_0497_41C1_817213DEB9BC",
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
      "url": "media/panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB, this.camera_2EEB4810_3ABE_12FA_41C2_EAE2687BACE8); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F89F483_356E_5AF4_41C1_350356666AF5",
   "pitch": -18.77,
   "hfov": 18.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 169.53
  }
 ],
 "id": "overlay_6D8DA711_3542_0DB7_41B3_8A2A71225C0B",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782_tcap0",
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
   "click": "this.startPanoramaWithCamera(this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B, this.camera_2F4C5B07_3ABE_16E7_41AF_E49B7DEED14B); this.mainPlayList.set('selectedIndex', 7)",
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
   "image": "this.AnimatedImageResource_292A4690_3ABE_1FF9_41C1_FEB7F0A5D455",
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
   "hfov": 37.78,
   "yaw": 105.09,
   "class": "HotspotPanoramaOverlayMap",
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
   "image": "this.AnimatedImageResource_1F83B48B_356E_5AF4_41BE_789B1758843B",
   "pitch": -24.42,
   "hfov": 37.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 105.09
  }
 ],
 "id": "overlay_023C828C_2B42_04AD_41BA_AFA76187411C",
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
      "url": "media/panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_1_HS_1_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1F83448C_356E_5A0C_41C7_E2A64EDFF8FC",
   "pitch": -43.21,
   "hfov": 26.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 54.35
  }
 ],
 "id": "overlay_00D62EFE_2B46_3C6D_4188_FF61B6395E84",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "inertia": true,
 "id": "panorama_0AB1A1AA_2B46_0494_416A_90B39D989F14_tcap0",
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
      "url": "media/panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3, this.camera_2E1A8831_3ABE_133B_4186_FBD5E0DB8CAE); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F81248D_356E_5A0C_41C3_1926C84A7710",
   "pitch": -16.79,
   "hfov": 25.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 175.71
  }
 ],
 "id": "overlay_0D417F83_2B42_1C9B_41B9_4F8040B04F4E",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2_tcap0",
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
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3, this.camera_2E646952_3ABE_1579_419D_4D64459DDF23); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F82E48C_356E_5A0C_41C1_B677E4600152",
   "pitch": -23.04,
   "hfov": 24.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -153.4
  }
 ],
 "id": "overlay_0991855A_2B42_0DB5_41C2_55F0D69D36B1",
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
      "url": "media/panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_1_HS_1_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1F82848C_356E_5A0C_41BE_D87CDA5169FA",
   "pitch": -26.49,
   "hfov": 22.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 28.76
  }
 ],
 "id": "overlay_0F09D021_2B42_039A_41C2_B4E17E02B778",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1_tcap0",
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
   "click": "this.startPanoramaWithCamera(this.panorama_15E20E42_3532_4674_41A2_17FF096E6F9B, this.camera_2F83199B_3ABE_15EF_4191_C8A182743122); this.mainPlayList.set('selectedIndex', 37)",
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
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.09,
   "yaw": 7.1,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": 1.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F, this.camera_28B66C7C_3ABE_1329_4179_9A6D3187A463); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F8D447C_356E_5A0C_41A0_C2C3C35BD50C",
   "pitch": 1.12,
   "hfov": 17.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 7.1
  }
 ],
 "id": "overlay_33DE60DF_2BC2_04AB_41A6_5562321EAD82",
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
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_1_HS_2_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9, this.camera_28A15C95_3ABE_13FB_41C7_D804BF8FBF05); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F8CF47C_356E_5A0C_41B3_C4560C83A89E",
   "pitch": -23.87,
   "hfov": 37.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -67.49
  }
 ],
 "id": "overlay_3398CB53_2BC6_05BB_419F_C247C86543A8",
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
      "url": "media/panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_1_HS_3_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1F8C947C_356E_5A0C_41C2_4D539C33BD37",
   "pitch": 9.93,
   "hfov": 25.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 90.88
  }
 ],
 "id": "overlay_6AF9B940_35C2_0594_41B1_40D94E36C4F6",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "id": "panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74_tcap0",
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
   "click": "this.startPanoramaWithCamera(this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F, this.camera_2F7BEB25_3ABE_16DB_41B9_C9ABC2941761); this.mainPlayList.set('selectedIndex', 1)",
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
 "id": "image_uid2931467F_3ABE_1F27_419A_EFBBACD7FA07_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_29D69A13_35F2_4E1B_41C7_3219C3C50CF2.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6208"
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
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingLeft": 10,
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
   "hfov": 23.6,
   "yaw": 42.08,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -13.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B, this.camera_2839BD1C_3ABE_12E9_414D_639EE48A72F4); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F8BF47C_356E_5A0C_41BB_68C9D169BB60",
   "pitch": -13.18,
   "hfov": 23.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 42.08
  }
 ],
 "id": "overlay_3328EDA2_2BC2_1C95_41C3_613FA5A8F0D4",
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
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_1_HS_1_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1F8B847C_356E_5A0C_41AD_2F1AED74C5C5",
   "pitch": -13.14,
   "hfov": 22.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -47.35
  }
 ],
 "id": "overlay_3328FDA2_2BC2_1C95_41B7_9FA999D8A139",
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
      "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_1_HS_2_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74, this.camera_28326D28_3ABE_0D29_41B0_CF47433C3768); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F8CF47D_356E_5A0C_41C8_C7EEF15AC135",
   "pitch": 23.96,
   "hfov": 27.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 133.88
  }
 ],
 "id": "overlay_3328CDA2_2BC2_1C95_41BB_C3EA9D844A73",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "id": "panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_tcap0",
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
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4, this.camera_28820C3B_3ABE_132F_4197_CF4C60621B74); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1FF0E47A_356E_5A14_41C8_81705A426A4D",
   "pitch": -10.42,
   "hfov": 17.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -173.82
  }
 ],
 "id": "overlay_3CD6AA93_2BC2_04BB_413F_5FDE12EB4DD8",
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
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_1_HS_2_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1FF0947A_356E_5A14_41C8_71C6BA7B6A85",
   "pitch": -17.5,
   "hfov": 17.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 5.89
  }
 ],
 "id": "overlay_3CD68A93_2BC2_04BB_41AF_1B405A0FB79A",
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
      "url": "media/panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_1_HS_3_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9, this.camera_288D8C2C_3ABE_1329_41B1_C696638AF451); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1FF0347A_356E_5A14_41B6_38793B1DDE23",
   "pitch": 6.4,
   "hfov": 22.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -81.69
  }
 ],
 "id": "overlay_3CD69A93_2BC2_04BB_41C0_30753EB499A2",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9_tcap0",
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
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_33DFB0DF_2BC2_04AB_41C3_6EDBA5466C74, this.camera_287A5D64_3ABE_0D59_41B9_78F75662A74C); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F8E147B_356E_5A14_41BE_C081DE247805",
   "pitch": -21.31,
   "hfov": 47.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -49.69
  }
 ],
 "id": "overlay_339F70BC_2BC2_04EC_41C5_7EDCB4E169D1",
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
      "url": "media/panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_1_HS_2_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1F8DB47B_356E_5A14_41BE_3A069A9FA438",
   "pitch": -46.14,
   "hfov": 36.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -102.46
  }
 ],
 "id": "overlay_333A14BD_2BC2_0CEC_4190_C5BCAEDAB131",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 }
},
{
 "inertia": true,
 "id": "panorama_339F60BC_2BC2_04EC_41B2_F3CB320BA1B9_tcap0",
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
 "id": "image_uid2931C67E_3ABE_1F29_41BD_F713373E6839_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_2FB5CFE7_35F2_C63B_41BB_92207220D6DD.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6207"
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
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingLeft": 10,
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
   "hfov": 25.71,
   "yaw": -158.91,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -13.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F, this.camera_29A7ADC7_3ABE_0D67_41A7_8A29438E0BBB); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F8C547D_356E_5A0B_418B_2EC7A1558DFE",
   "pitch": -13.33,
   "hfov": 25.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -158.91
  }
 ],
 "id": "overlay_33460EAD_2BC1_FCEC_41BC_762D3CB73C40",
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
      "url": "media/panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA, this.camera_29D3EDD3_3ABE_0D7F_41AE_C72B54C3AD8D); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F8C3482_356E_5AF4_41C4_34A73B818622",
   "pitch": -12.47,
   "hfov": 29.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -68.26
  }
 ],
 "id": "overlay_3345FEAD_2BC1_FCEC_41A3_66C3BB2DE93C",
 "data": {
  "label": "Arrow 06a Right"
 }
},
{
 "inertia": true,
 "id": "panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B_tcap0",
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
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782, this.camera_28141D05_3ABE_12DB_41C1_668F037FE99C); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F8B9482_356E_5AF4_41C0_394B0ACC8608",
   "pitch": -21.78,
   "hfov": 22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 132.89
  }
 ],
 "id": "overlay_3C96447D_2BDE_0C6F_41C2_B026135738FA",
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
      "url": "media/panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_33461EAD_2BC1_FCEC_41B5_086539E9CE0B, this.camera_280E9D10_3ABE_12F9_41C5_F1CFF458768E); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F8B4482_356E_5AF4_41AA_0087A3B29769",
   "pitch": -17.83,
   "hfov": 20.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -52.85
  }
 ],
 "id": "overlay_3C96B47D_2BDE_0C6F_41C1_317458ABCCED",
 "data": {
  "label": "Arrow 02b Left"
 }
},
{
 "inertia": true,
 "id": "panorama_3C966477_2BDE_0C7B_41C1_88A5B1B098BA_tcap0",
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
    "duration": 5000,
    "easing": "linear"
   }
  }
 ],
 "id": "album_2292A869_35D1_CA37_418D_EFFFA9EA6EC2_AlbumPlayList",
 "class": "PhotoPlayList"
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
   "click": "this.startPanoramaWithCamera(this.panorama_1CC10CE2_124B_8812_4180_81694ECE612F, this.camera_2E5648E2_3ABE_1359_419A_4C8B8A093524); this.mainPlayList.set('selectedIndex', 1)",
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
 "progressBarBorderSize": 0,
 "id": "viewer_uid2928F68C_3ABE_1FE9_41C0_04BCE063F7D3",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "minHeight": 50,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "vrPointerSelectionTime": 2000,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
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
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea6213"
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
   "hfov": 23.39,
   "yaw": -113.38,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -15.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6, this.camera_2FD16A01_3ABE_16DB_41C8_644986F778FD); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F85448B_356E_5AF4_41CA_CB553C3E0194",
   "pitch": -15.22,
   "hfov": 23.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -113.38
  }
 ],
 "id": "overlay_31F1A799_2BCE_0CB7_41B3_353A52519658",
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
      "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA, this.camera_2FC0FA1E_3ABE_16E9_41A7_F27819F0BB33); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F84E48B_356E_5AF4_41A0_E8666A1815DC",
   "pitch": -18.51,
   "hfov": 23.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 65.5
  }
 ],
 "id": "overlay_303FDE22_2BCE_1F95_41C5_367BD6AA44B6",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_tcap0",
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
   "click": "this.setCameraSameSpotAsMedia(this.camera_2887AC4A_3ABE_1369_41C1_D259A0BB8920, this.panorama_1DB25007_124A_7812_4183_C90992DC6F0B); this.startPanoramaWithCamera(this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD, this.camera_2887AC4A_3ABE_1369_41C1_D259A0BB8920); this.mainPlayList.set('selectedIndex', 2)",
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
   "hfov": 19.42,
   "yaw": -65.27,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -22.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14, this.camera_2FA2A9DC_3ABE_1569_41C0_C76A62ADFD04); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F86D485_356E_5AFC_41CA_B20A72AE3BE0",
   "pitch": -22.02,
   "hfov": 19.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -65.27
  }
 ],
 "id": "overlay_37F962DB_2BC6_04AB_41AD_EC4243E42F08",
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
      "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B, this.camera_2FB299BA_3ABE_1529_41B0_A34634AE9F96); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F86448A_356E_5AF4_41C1_7E3F345693C1",
   "pitch": -19.2,
   "hfov": 23.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 117.79
  }
 ],
 "id": "overlay_37A08FE3_2BC6_7C9B_4173_0F320D697F80",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_tcap0",
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
 "viewerArea": "this.viewer_uid2928F68C_3ABE_1FE9_41C0_04BCE063F7D3",
 "id": "viewer_uid2928F68C_3ABE_1FE9_41C0_04BCE063F7D3VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
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
      "url": "media/panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_02151B49_2B42_0597_4193_6A67B5B7F367, this.camera_28763D71_3ABE_0D3B_41A7_D7FCF1987502); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F84348B_356E_5AF4_41B0_D3B2CD4E8938",
   "pitch": -18.51,
   "hfov": 24.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -53.33
  }
 ],
 "id": "overlay_0AF7890A_2B42_0595_41B7_7F4842BC4101",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED_tcap0",
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
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_0882365A_2B42_0FB5_41B1_49111ED8B2E2, this.camera_285A1D40_3ABE_0D59_419F_09851B5DD746); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F82248C_356E_5A0C_41A7_7A33A8D531DF",
   "pitch": -23.25,
   "hfov": 23.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 5.79
  }
 ],
 "id": "overlay_08BE5A1E_2B5E_07AC_41AD_02EEFDA2971C",
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
      "url": "media/panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_09352F98_2B42_3CB5_419D_BD4FC93AC9D1, this.camera_282E3D34_3ABE_0D39_41C7_5F1750B12DAB); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F81A48C_356E_5A0C_41AA_3AC6A44B420C",
   "pitch": -19.94,
   "hfov": 24.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -175.43
  }
 ],
 "id": "overlay_095C17B5_2B42_0CFC_41C3_6AA7A817CC09",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_0FA988C9_2B42_0497_41B8_204D6B691BB3_tcap0",
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
   "hfov": 33.43,
   "yaw": -61.35,
   "class": "HotspotPanoramaOverlayMap",
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
   "image": "this.AnimatedImageResource_1F8F947A_356E_5A14_41C6_17954F62EB82",
   "pitch": -32.81,
   "hfov": 33.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -61.35
  }
 ],
 "id": "overlay_3DB60832_2BC6_03F5_4199_BD2EC1E03CF5",
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
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_1_HS_2_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1F8F347B_356E_5A14_4183_E40AAEC91AD4",
   "pitch": -30.55,
   "hfov": 33.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 143.11
  }
 ],
 "id": "overlay_320D4900_2BC2_0595_41C5_A91101D429BC",
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
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_1_HS_3_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14, this.camera_2ECCA7D3_3ABE_1D7F_41C3_8E53247909AA); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F8ED47B_356E_5A14_41C5_B3736166906B",
   "pitch": -20.18,
   "hfov": 21.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -7.34
  }
 ],
 "id": "overlay_32CE196F_2BC6_046B_41C2_CFD906FBFF04",
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
      "url": "media/panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_1_HS_4_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_1F8E747B_356E_5A14_41AE_2BC6DC1FE256",
   "pitch": -18.17,
   "hfov": 25.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -75.74
  }
 ],
 "id": "overlay_1961A1E3_2B42_049B_41B5_FF3E6CF4E726",
 "data": {
  "label": "Circle Arrow 01c Right"
 }
},
{
 "inertia": true,
 "id": "panorama_3DB62831_2BC6_03F7_41B2_323E3D81EFA6_tcap0",
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
   "click": "this.startPanoramaWithCamera(this.panorama_23C972D7_3536_BE1B_41CA_9017B1864FBD, this.camera_299C3D89_3ABE_0DEB_41A5_BD555EB3DD6D); this.mainPlayList.set('selectedIndex', 2)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3BC333ED_3532_DE0F_41C6_DE4052C4A5BA, this.camera_28619D7D_3ABE_0D2B_41C7_C79E0C6E700E); this.mainPlayList.set('selectedIndex', 0)",
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
   "hfov": 23,
   "yaw": -130.82,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -20.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_02151B49_2B42_0597_4193_6A67B5B7F367, this.camera_28195CF9_3ABE_132B_4181_211436FCF6A1); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F80B493_356E_5A14_41B9_72423B7435BA",
   "pitch": -20.23,
   "hfov": 23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -130.82
  }
 ],
 "id": "overlay_1AB669DE_2B4E_04AD_41BC_2AA9CADF89C1",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_068CC17A_2B42_0474_41C2_501B94CEA994_tcap0",
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
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E, this.camera_2E0A8855_3ABE_137B_41BB_2402A8A1AA05); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F882484_356E_5AFC_419F_C9B9FB85CFE0",
   "pitch": -56.58,
   "hfov": 32.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 29.07
  }
 ],
 "id": "overlay_360A2284_2BC6_049C_41A0_69E694EB0719",
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
      "url": "media/panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD, this.camera_2E38F87B_3ABE_132F_4193_CC95BCCF6CCC); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F87C484_356E_5AFC_41C8_FD735A15DC21",
   "pitch": -5.06,
   "hfov": 22.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -76.29
  }
 ],
 "id": "overlay_362EDF11_2BC6_1DB4_41A0_54706111E8C0",
 "data": {
  "label": "Arrow 05b Left"
 }
},
{
 "inertia": true,
 "id": "panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D_tcap0",
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
   "hfov": 18.73,
   "yaw": -164.6,
   "class": "HotspotPanoramaOverlayMap",
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
   "image": "this.AnimatedImageResource_1F9CF495_356E_5A1C_41C2_60811D332D32",
   "pitch": -2.49,
   "hfov": 18.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -164.6
  }
 ],
 "id": "overlay_7A19614C_3542_05AC_41C4_8FFC79CDEA9A",
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
      "url": "media/panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9, this.camera_2EDD57B2_3ABE_1D39_41C8_E6058B2D7058); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F9C6495_356E_5A1C_41B1_C1E2302D14DD",
   "pitch": -43.45,
   "hfov": 29.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -67.69
  }
 ],
 "id": "overlay_6E1E62E7_35C2_049B_41B5_563726B1E1C8",
 "data": {
  "label": "Circle Arrow 01b Left"
 }
},
{
 "inertia": true,
 "id": "panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6_tcap0",
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
   "click": "this.startPanoramaWithCamera(this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782, this.camera_28BEFC61_3ABE_135B_41B9_C9CCFE5DD59D); this.mainPlayList.set('selectedIndex', 4)",
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
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_2A2E1BEF_35D2_4E0B_41B4_74E56C085777, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'paddingLeft':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_332451BC_3975_ADDA_4194_9B65BC2B4535, this.video_2A1F5F58_35D2_C615_41C4_AA70604C64C5, this.PlayList_2975D6F0_3ABE_1F39_41B9_3E5CFCA563B1, '80%', '80%', true, true) }",
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
   "click": "this.startPanoramaWithCamera(this.panorama_1424B199_3552_DA14_41C9_9D2F2B74AB3B, this.camera_28DC0CA5_3ABE_13DB_41C1_06218FC2C39B); this.mainPlayList.set('selectedIndex', 7)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A, this.camera_28D56CB2_3ABE_1339_41C9_1894BB1FE9B2); this.mainPlayList.set('selectedIndex', 10)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_14B77C78_3532_4A15_41B0_A382C9E8C6A0, this.camera_2FF19A40_3ABE_1759_41A7_FF4F988B1805); this.mainPlayList.set('selectedIndex', 36)",
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
   "hfov": 18.32,
   "yaw": -84.49,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": 7.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9, this.camera_2F6BDB40_3ABE_1559_41B9_35C861B0CDDC); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F9E5494_356E_5A1C_41B6_774084082181",
   "pitch": 7.41,
   "hfov": 18.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -84.49
  }
 ],
 "id": "overlay_3CDAAEA0_2BC2_1C95_41C2_F56569049FA3",
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
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_1_HS_2_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E, this.camera_2C9BAB56_3ABE_1579_4164_7F25B4BD7E79); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F9E0494_356E_5A1C_41C0_875996DF2A0C",
   "pitch": -34.46,
   "hfov": 33.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -12.37
  }
 ],
 "id": "overlay_3662776D_2BC2_0C6F_41C3_F3F169BF2C1E",
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
      "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_1_HS_3_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_162524BB_2D4E_0CEB_4182_08F2EE6AC0F6, this.camera_28881C1B_3ABE_12EF_41C9_63DF501128FC); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F9D8494_356E_5A1C_41B2_DCD068760262",
   "pitch": -18.95,
   "hfov": 27.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 0.26
  }
 ],
 "id": "overlay_79E0CB86_3546_049D_41BE_4A7DC03BBE20",
 "data": {
  "label": "Circle Arrow 01a Left"
 }
},
{
 "inertia": true,
 "id": "panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_tcap0",
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
 "id": "image_uid2935A685_3ABE_1FDB_41B9_E612519A6C6E_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_224F8303_35DE_5FFB_41BA_0B502B1D364E.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6212"
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
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingLeft": 10,
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
 "horizontalAlign": "center",
 "id": "image_uid292EC696_3ABE_1FF9_41A7_7996180C1A52_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_1261A9DC_3552_4A0D_41C8_A66642AEAE94.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6216"
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
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingLeft": 10,
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
 "inertia": true,
 "id": "panorama_33BEAEDD_2BFE_7CAC_41AB_C418F4185896_tcap0",
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
 "id": "image_uid292E8698_3ABE_1FE9_41BF_5170F854C4BF_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_1261A9DC_3552_4A0D_41C8_A66642AEAE94.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6217"
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
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingLeft": 10,
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
 "horizontalAlign": "center",
 "id": "image_uid293F3675_3ABE_1F3B_41A2_747ABC7F6167_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_29D69A13_35F2_4E1B_41C7_3219C3C50CF2.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6206"
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
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingLeft": 10,
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
 "inertia": true,
 "id": "panorama_30DF8FB5_2BFE_1CFF_41A8_DB936D507A41_tcap0",
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
   "hfov": 21.2,
   "yaw": 2.41,
   "class": "HotspotPanoramaOverlayMap",
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
   "image": "this.AnimatedImageResource_1F80848D_356E_5A0C_41B3_F5A228AF1565",
   "pitch": -20.23,
   "hfov": 21.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 2.41
  }
 ],
 "id": "overlay_02809725_2B42_0D9F_41C5_79B491D30B25",
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
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_09D38E9D_2B42_3CAF_41B6_EAB03F4698ED, this.camera_29839DA2_3ABE_0DD9_4193_1E71AEB1398F); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F802492_356E_5A14_41B5_D1196735CBC6",
   "pitch": -21.12,
   "hfov": 22.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -177.28
  }
 ],
 "id": "overlay_01B9FB8F_2B7E_04AB_41AC_03DD1A34DC61",
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
      "url": "media/panorama_02151B49_2B42_0597_4193_6A67B5B7F367_1_HS_2_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_068CC17A_2B42_0474_41C2_501B94CEA994, this.camera_29883D95_3ABE_0DFB_4193_54C0EF14C52F); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F814493_356E_5A14_41C0_962B5046F638",
   "pitch": 3.04,
   "hfov": 26.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -176.34
  }
 ],
 "id": "overlay_056F7A70_2B42_0475_41B1_2CBAB080BD60",
 "data": {
  "label": "Arrow 05a Right"
 }
},
{
 "inertia": true,
 "id": "panorama_02151B49_2B42_0597_4193_6A67B5B7F367_tcap0",
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
      "url": "media/panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA, this.camera_2F93C976_3ABE_1539_41A3_30431A1BC01C); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F85C48A_356E_5AF4_41C7_64C000C7DDF4",
   "pitch": -15.7,
   "hfov": 22.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -73.37
  }
 ],
 "id": "overlay_309B6C87_2BC2_1C9C_41B3_E70EF2338814",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_3255BD7F_2BC2_3C6B_41C2_3164BDFBAE8B_tcap0",
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
      "url": "media/panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3C9CB0AA_2BDE_0495_41BD_276D25CC1782, this.camera_28C07CC4_3ABE_1359_417F_E64E7912FC02); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F8AB483_356E_5AF4_41B2_5F037292C3F1",
   "pitch": -10.69,
   "hfov": 18.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 159.1
  }
 ],
 "id": "overlay_3375E250_2BC2_07B4_41B8_610467DD8520",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_32B8DD81_2BC2_1C97_41B4_4C2EBFF9E6DB_tcap0",
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
   "click": "this.startPanoramaWithCamera(this.panorama_150CD8EF_3552_4A0B_41C9_5D9ACF38B9F0, this.camera_2EAD1790_3ABE_1DF9_41C3_6BD6987F4971); this.mainPlayList.set('selectedIndex', 6)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0, this.camera_2EBFB76D_3ABE_1D2B_41C7_D16095B64C61); this.mainPlayList.set('selectedIndex', 8)",
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
 "horizontalAlign": "center",
 "id": "image_uid2933C681_3ABE_1FDB_41B7_C83C6BD4612D_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_29D7150E_35F1_DA0D_41CA_C642220447F5.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6210"
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
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingLeft": 10,
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
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.22,
   "yaw": -14.48,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -30.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1C113258_124A_783E_41AE_7AD1810FD677, this.camera_29BE2DAE_3ABE_0D29_41C8_826062E73232); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F98649C_356E_5A0C_41B1_11C2CE945547",
   "pitch": -30.39,
   "hfov": 15.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -14.48
  }
 ],
 "id": "overlay_76C5E5A0_3542_0C95_41B5_4811C5654592",
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
      "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F, this.camera_29A9FDBB_3ABE_0D2F_4169_D0ADA8140CA6); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F97E49D_356E_5A0C_41C8_AD0E187C1CB4",
   "pitch": -22.91,
   "hfov": 16.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 160.68
  }
 ],
 "id": "overlay_7ADBE3FD_3546_046F_41BB_5E78B5A5285E",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_tcap0",
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
   "click": "this.startPanoramaWithCamera(this.panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A, this.camera_2F5C4AEF_3ABE_1727_4188_3C545B7E83C5); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_292DF696_3ABE_1FF9_41CB_05FD36467241",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3CD15A93_2BC2_04BB_41B1_1FDB304699A9, this.camera_2F2EAACD_3ABE_176B_41C7_6A9C7A7E1F70); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_292D2696_3ABE_1FF9_41AE_D49FE14E6835",
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
   "image": "this.AnimatedImageResource_292E9696_3ABE_1FF9_41BD_8281ED9D019E",
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
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.55,
   "yaw": 4.47,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -28.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B, this.camera_2E46F90D_3ABE_12EB_4182_D13C82FF6948); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F97349D_356E_5A0C_41BF_150F197D0483",
   "pitch": -28.26,
   "hfov": 15.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 4.47
  }
 ],
 "id": "overlay_7A3BBB48_3546_0595_41BA_A5C2494D0A20",
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
      "url": "media/panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2, this.camera_2E759932_3ABE_1539_418C_734A5EF2EAAE); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F96C49D_356E_5A0C_41C7_47536E9DF592",
   "pitch": -21.4,
   "hfov": 16.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -178.59
  }
 ],
 "id": "overlay_50E7B08F_35C6_04AB_41BF_88E68DCF1F6F",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": true,
 "id": "panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F_tcap0",
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
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_1_HS_0_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_1400B319_3552_DE14_41BA_4304C9BE59B0, this.camera_28547D4D_3ABE_0D6B_41C7_15E4172E4638); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_04909AFF_36D6_4E0C_41C5_CDAE34EDEA9C",
   "pitch": -19.42,
   "hfov": 17.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 48.98
  }
 ],
 "id": "overlay_1D93CCB9_352E_CA14_41B7_6DBFC9F95BD2",
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
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_1_HS_1_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_280BC230_399D_6EEB_41AE_B03AE94D3EE4, this.camera_28400D58_3ABE_0D69_41CA_8D70E03FA3DF); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_04907B00_36D6_4FF4_41AF_A81496D7FBC8",
   "pitch": -18.17,
   "hfov": 16.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -133.24
  }
 ],
 "id": "overlay_1D933CB9_352E_CA14_41C5_9BF56963130E",
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
      "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_1_HS_2_0_0_map.gif",
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
   "image": "this.AnimatedImageResource_0497DB00_36D6_4FF4_41B8_E9B6D4F8CA84",
   "pitch": 10.41,
   "hfov": 20.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 11.93
  }
 ],
 "id": "overlay_1BFDD1CF_36D1_DA0B_41CA_E8322FAE49B6",
 "data": {
  "label": "Info 02"
 }
},
{
 "inertia": true,
 "id": "panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_tcap0",
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
 "id": "image_uid292CD693_3ABE_1FFF_41CC_D55507C3A837_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_12128DEF_3552_4A0B_41BC_D30017821B05.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6215"
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
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingLeft": 10,
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
 "inertia": true,
 "id": "panorama_32CB68E1_2BFE_0497_41B2_E1155C53DE00_tcap0",
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
 "id": "image_uid292B8691_3ABE_1FFB_41BE_24E4C27F25BB_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_10E8EB8B_3552_4E0B_41BD_B8737F552A8A.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6214"
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
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingLeft": 10,
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
   "hfov": 32.16,
   "yaw": 137.45,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -28.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D, this.camera_29C16DE0_3ABE_0D59_41AF_14C1FE300A3E); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F873484_356E_5AFC_41C4_9246D511B822",
   "pitch": -28.67,
   "hfov": 32.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 137.45
  }
 ],
 "id": "overlay_355FFEF1_2BC2_7C74_41C0_AEAFD6F09556",
 "data": {
  "label": "Arrow 05b Right"
 }
},
{
 "inertia": true,
 "id": "panorama_3268A739_2BC2_0DF4_4171_E106EB010BCD_tcap0",
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
 "id": "image_uid2934F684_3ABE_1FD9_41AC_0BD940F9AF62_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_29D7150E_35F1_DA0D_41CA_C642220447F5.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6211"
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
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingLeft": 10,
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
   "click": "this.startPanoramaWithCamera(this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2, this.camera_2F3E8AB0_3ABE_1739_41CC_6B6C0E407B9B); this.mainPlayList.set('selectedIndex', 40)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B, this.camera_2F0E8A99_3ABE_17EB_41C6_51638158A6EA); this.mainPlayList.set('selectedIndex', 42)",
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
 "horizontalAlign": "center",
 "id": "image_uid29324680_3ABE_1FD9_41B0_BEF107EADDDA_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "media/photo_2FB5CFE7_35F2_C63B_41BB_92207220D6DD.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6209"
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
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingLeft": 10,
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
   "hfov": 40.32,
   "yaw": 162.39,
   "class": "HotspotPanoramaOverlayMap",
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
   "pitch": -32.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_322DFCA7_2BC2_1C9C_41C4_3237AF93455D, this.camera_2FEFEA5C_3ABE_1769_41CB_4E99B5C2AA2A); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F892483_356E_5AF4_41A2_88A163B96709",
   "pitch": -32.06,
   "hfov": 40.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 162.39
  }
 ],
 "id": "overlay_37869EDC_2BC2_1CAD_41B7_8E23448DE6EB",
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
      "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_1_HS_2_0_0_map.gif",
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
   "click": "this.startPanoramaWithCamera(this.panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9, this.camera_2F1FFA7D_3ABE_172B_4193_7E5403150DBB); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1F88C484_356E_5AFC_41A5_AD3166939783",
   "pitch": -53.44,
   "hfov": 32.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -133.72
  }
 ],
 "id": "overlay_1D9EB0E3_2AC2_0494_4194_345C9124B764",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "inertia": true,
 "id": "panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_tcap0",
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
   "click": "this.startPanoramaWithCamera(this.panorama_5AFFB8C1_3742_0496_41C7_EA6AF49E9782, this.camera_28E0ACED_3ABE_132B_419F_894B09CE9386); this.mainPlayList.set('selectedIndex', 4)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_1C113258_124A_783E_41AE_7AD1810FD677, this.camera_28FAACD3_3ABE_137F_41BE_313B923BB967); this.mainPlayList.set('selectedIndex', 41)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_123B50E5_2D4E_049F_41B2_17CBF55EF79F, this.camera_28F5BCE0_3ABE_1359_41BF_687B650A2D04); this.mainPlayList.set('selectedIndex', 43)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_6F96FB75_2DDE_047F_41B4_85D84169DFBE, this.camera_2E28189B_3ABE_13EF_41B3_B87ABC0349B5); this.mainPlayList.set('selectedIndex', 5); this.showWindow(this.window_2DD7F75E_35DE_460D_41C8_56490CB7D847, null, false)",
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
   "click": "this.startPanoramaWithCamera(this.panorama_0C5CE844_076C_563B_417B_ABFC76A9D2B2, this.camera_2E2638C2_3ABE_1359_41C9_66DAD10DD3BF); this.mainPlayList.set('selectedIndex', 40)",
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
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "id": "AnimatedImageResource_292A4690_3ABE_1FF9_41C1_FEB7F0A5D455",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
   "url": "media/panorama_33288DA2_2BC2_1C95_41B8_F43FB392CB4F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F8BF47C_356E_5A0C_41BB_68C9D169BB60",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
   "url": "media/panorama_32D0FF3E_2BC2_3DED_41B3_E245C68D1B14_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F85448B_356E_5AF4_41CA_CB553C3E0194",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
   "url": "media/panorama_3223B856_2BC2_03BD_415F_E5A9C39EE9EA_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F86D485_356E_5AFC_41CA_B20A72AE3BE0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
   "url": "media/panorama_068CC17A_2B42_0474_41C2_501B94CEA994_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F80B493_356E_5A14_41B9_72423B7435BA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
   "url": "media/panorama_3CDA8EA0_2BC2_1C95_41B9_08BF9B6330F9_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_1F9E5494_356E_5A1C_41B6_774084082181",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
   "url": "media/panorama_1509AC88_2D4E_1C95_41A1_E367A96DC03B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1F98649C_356E_5A0C_41B1_11C2CE945547",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "id": "AnimatedImageResource_292DF696_3ABE_1FF9_41CB_05FD36467241",
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
 "id": "AnimatedImageResource_292D2696_3ABE_1FF9_41AE_D49FE14E6835",
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
 "id": "AnimatedImageResource_292E9696_3ABE_1FF9_41BD_8281ED9D019E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_04909AFF_36D6_4E0C_41C5_CDAE34EDEA9C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_04907B00_36D6_4FF4_41AF_A81496D7FBC8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1D93DCB9_352E_CA14_41C5_A5C94FD7F75A_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_0497DB00_36D6_4FF4_41B8_E9B6D4F8CA84",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
   "url": "media/panorama_3398BD37_2BC2_1DFC_41C0_67163D26B52E_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_1F892483_356E_5AF4_41A2_88A163B96709",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
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
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "existsKey": function(key){  return key in window; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player6037"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
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
