import { mainPath, session01Path,sesion02Path,session03Path,session05Path,session06Path } from "../contain";
import Bt01 from "../HomeWork/Session01/Bt01";
import Home from '../pages/Home/Home'

import Session02 from '../HomeWork/Session02/Session02'
import Session03 from '../HomeWork/Session03/Session03'
import Session05 from '../HomeWork/Session05/Session05'
import Session06 from "../HomeWork/Session06/Session06";

import Bt1 from "../HomeWork/Session02/Bt1/Bt1";
import Bt2 from "../HomeWork/Session02/Bt2/Bt2";
import Bt3 from "../HomeWork/Session02/Bt3/Bt3";
import ChartBar1 from "../HomeWork/Session02/ChartBar1/ChartBar1";
import ChartColumn from "../HomeWork/Session02/ChartColumn/ChartColumn";
import Profile from "../HomeWork/Session02/Profile/Profile";
import SocialBlock from "../HomeWork/Session02/SocialBlock/SocialBlock";
import Womans from "../HomeWork/Session02/Womans/Womans";

import Accordions from "../HomeWork/Session03/Accordions/Accordions";
import Gallery from "../HomeWork/Session03/Gallery/Gallery";
import ImageViewer from "../HomeWork/Session03/ImageViewer/ImageViewer";
import LikeBtn from "../HomeWork/Session03/LikeBtn/LikeBtn";
import RateBtn from "../HomeWork/Session03/RateBtn/RateBtn";
import Tabs from "../HomeWork/Session03/Tabs/Tabs";

import Accordions2 from "../HomeWork/Session05/Accordions2/Accordions2";
import Gallery2 from "../HomeWork/Session05/Gallery2/Gallery2";
import ImageViewer2 from "../HomeWork/Session05/ImageViewer2/ImageViewer2";
import LikeBtn2 from "../HomeWork/Session05/LikeBtn2/LikeBtn2";
import RateBtn2 from "../HomeWork/Session05/RateBtn2/RateBtn2";
import Tabs2 from "../HomeWork/Session05/Tabs2/Tabs2";
import Form2 from "../HomeWork/Session06/Form2/Form2";
import Form3 from "../HomeWork/Session06/Form3/Form3";
import Form4 from "../HomeWork/Session06/Form4/Form4";

const children2 = [
    {
        path :sesion02Path.bt1,
        element : Bt1
    },
    {
        path :sesion02Path.bt2,
        element :  Bt2
    },
    {
        path :sesion02Path.bt3,
        element: Bt3
    },
    {
        path:sesion02Path.chartbar1,
        element: ChartBar1
    },
    {
        path:sesion02Path.charcolumn,
        element: ChartColumn
    },
    {
        path:sesion02Path.profile,
        element: Profile
    },
    {
        path:sesion02Path.socialblock,
        element: SocialBlock
    },
    {
        path:sesion02Path.women,
        element: Womans
    }
]

const children3 = [
    {
        path: session03Path.accordions,
        element: Accordions
    },
    {
        path: session03Path.gallery,
        element: Gallery
    },
    {
        path: session03Path.imgviewer,
        element: ImageViewer
    },
    {
        path: session03Path.likebtn,
        element: LikeBtn
    },
    {
        path: session03Path.ratebtn,
        element: RateBtn
    },
    {
        path: session03Path.tabs ,
        element: Tabs
    },
]

const children5 = [
    {
        path: session05Path.accordions,
        element: Accordions2
    },
    {
        path: session05Path.gallery,
        element: Gallery2
    },
    {
        path: session05Path.imgviewer,
        element: ImageViewer2
    },
    {
        path: session05Path.likebtn,
        element: LikeBtn2
    },
    {
        path: session05Path.ratebtn,
        element: RateBtn2
    },
    {
        path: session05Path.tabs ,
        element: Tabs2
    },
]

const children6 = [
   
    {
        path: mainPath.session06 + session06Path.form2,
        element: Form2
    },
    {
        path: mainPath.session06 + session06Path.form3,
        element: Form3
    },
    {
        path: mainPath.session06 + session06Path.form4,
        element: Form4
    },
]

const publicRoutes = [
  {
    path: mainPath.home,
    element: Home
  },
//   {
//     path: mainPath.session01,
//     element : Bt01
//   },
  {
    path: mainPath.session02,
    element : Session02,
    children: children2
  },
  {
    path: mainPath.session03,
    element : Session03,
    children: children3
  },
  {
    path: mainPath.session05,
    element : Session05,
    children: children5
  },
  {
    path: mainPath.session06,
    element : Session06,
    children: children6
  }
];

export default publicRoutes;
