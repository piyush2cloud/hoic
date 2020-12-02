(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["src_client_components_VideoDetailsPopup_index_js"],{

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./src/client/components/VideoDetailsPopup/index.js":
/*!**********************************************************!*\
  !*** ./src/client/components/VideoDetailsPopup/index.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ VideoDetailsPopup
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/VideoDetailsPopup/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons */ "./src/client/components/Icons/index.js");
/* harmony import */ var _VideoPopupRelated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VideoPopupRelated */ "./src/client/components/VideoPopupRelated/index.js");




function VideoDetailsPopup(_ref) {
  var _ref$videoDeatilsData = _ref.videoDeatilsData,
      videoDeatilsData = _ref$videoDeatilsData === void 0 ? [] : _ref$videoDeatilsData,
      _ref$openVideoPopup = _ref.openVideoPopup,
      openVideoPopup = _ref$openVideoPopup === void 0 ? false : _ref$openVideoPopup,
      onVideoPopupClosed = _ref.onVideoPopupClosed;
  var moduleData = {
    title: 'Related to the title',
    contentData: [{
      gist: {
        id: '4b414656-b502-4dd1-8a70-e4c28f7ec654',
        site: 'hoichoitv',
        permalink: '/movies/namte-namte-2013',
        title: 'Namte Namte',
        description: 'Middle aged Ananda likes to live a simple life. Things take a drastic turn when he decides to seek help from a criminal. Watch the full movie on Hoichoi.\n',
        free: false,
        isTrailer: false,
        isVisible: true,
        isFullEpisode: true,
        publishDate: 1596818775000,
        updateDate: 1600755042964,
        runtime: 6912,
        posterImageUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/7/1596801027341_namtenamte1098x1626option1_3x4Images.jpg',
        videoImageUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/7/1596801021283_namtenamte1280x720option1_16x9Images.jpg',
        imageGist: {
          _32x9: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/7/1596801008879_namtenamte2560x720option1_32x9Images.jpg',
          _16x9: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/7/1596801021283_namtenamte1280x720option1_16x9Images.jpg',
          _4x3: null,
          _3x4: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/7/1596801027341_namtenamte1098x1626option1_3x4Images.jpg',
          _1x1: null,
          _9x16: null
        },
        primaryCategory: {
          id: '0000015b-6351-dafe-a15b-f777bb210000',
          title: 'Drama'
        },
        watchedTime: 0,
        contentType: 'VIDEO',
        languageCode: 'en',
        isLiveStream: false,
        timezone: 'America/New_York',
        featuredTag: {
          badgeImages: []
        },
        badgeImages: {},
        scheduleStartDate: null,
        scheduleEndDate: null,
        drmEnabled: false,
        persons: [],
        metadata: []
      },
      categories: [],
      tags: [{
        id: '8b6ae80e-238e-426e-90d9-b62578b3dd67',
        title: 'Rana Basu',
        permalink: '/tag/rana-basu',
        badgeImages: []
      }, {
        id: '0000015c-6ccd-d576-a5ff-7dfd482b0000',
        title: 'Saswata Chatterjee',
        badgeImages: []
      }, {
        id: '0000015b-a620-d6fc-a95b-f67bd32e0000',
        title: 'roopa ganguly',
        permalink: '/films/browse/tag/roopa_ganguly/**',
        badgeImages: []
      }, {
        id: '60031d7e-1b7c-4429-ae37-85ad1747e6f1',
        title: 'rajatabha dutta',
        permalink: '/tag/rajatabha-dutta',
        badgeImages: []
      }, {
        id: '04c4b41f-eb08-429e-b67a-4d90520bffce',
        title: 'Bhaswar Chatterjee',
        permalink: '/tag/bhaswar-chatterjee',
        badgeImages: []
      }, {
        id: '7c56e858-411f-44b6-8421-7ca31373f068',
        title: 'Sanchita',
        permalink: '/tag/sanchita',
        badgeImages: []
      }, {
        id: 'b64400f9-4221-4828-a843-f42b681a3a63',
        title: 'Jio',
        permalink: '/tag/jio',
        badgeImages: []
      }, {
        id: '5a5811ba-26a1-4c89-b1a6-28556fb84ff5',
        title: 'Naamte Naamte',
        permalink: '/tag/naamte-naamte',
        badgeImages: []
      }, {
        id: 'f2494226-cc25-46c1-b3cc-6785982da108',
        title: 'nmte nmte',
        permalink: '/tag/nmte-nmte',
        badgeImages: []
      }],
      creditBlocks: [{
        title: 'Director',
        credits: [{
          title: 'Rana Basu'
        }],
        containsHollywoodCelebrities: false,
        containsTVCelebrities: false
      }, {
        title: 'Starring',
        credits: [{
          title: 'Saswata Chatterjee'
        }, {
          title: 'Roopa Ganguly'
        }, {
          title: 'Rajatabha Dutta'
        }, {
          title: 'Bhaswar Chatterjee'
        }, {
          title: 'Sanchita'
        }],
        containsHollywoodCelebrities: false,
        containsTVCelebrities: false
      }],
      parentalRating: '13+',
      pricing: {
        type: 'SVOD',
        currency: 'USD',
        rent: null,
        purchase: null
      },
      monetizationModels: [],
      plans: [],
      showInAdvance: false,
      overridePrice: false,
      airTimezone: 'America/New_York',
      seasonAirTimezone: 'America/New_York',
      licenses: [],
      airDateTime: null,
      seasonAirDateTime: null,
      contentDetails: {
        videoImage: {
          secureUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/7/1596801021283_namtenamte1280x720option1_16x9Images.jpg',
          name: '1596801021283_namtenamte1280x720option1.jpg',
          id: '6d2d333a-4844-4852-9a86-c067f05b204b',
          imageTag: '<img src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/7/1596801021283_namtenamte1280x720option1_16x9Images.jpg" alt="" />',
          url: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/7/1596801021283_namtenamte1280x720option1_16x9Images.jpg'
        },
        closedCaptions: [],
        posterImage: {
          secureUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/7/1596801027341_namtenamte1098x1626option1_3x4Images.jpg',
          name: '1596801027341_namtenamte1098x1626option1.jpg',
          id: '59f971fa-a7b5-4465-99c0-3faed8f6d9ae',
          imageTag: '<img src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/7/1596801027341_namtenamte1098x1626option1_3x4Images.jpg" alt="" />',
          url: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/7/1596801027341_namtenamte1098x1626option1_3x4Images.jpg'
        },
        promos: [],
        trailers: [{
          id: 'a22c30b2-3627-414f-9635-9936f0882d01',
          title: 'Namte Namte - Trailer'
        }],
        status: 'open'
      },
      streamingInfo: {
        isLiveStream: false
      },
      drmEnabled: false,
      optionalTags: [],
      seo: {
        keywords: ['namte namte', 'namte namte bengali movie', 'namte namte full movie', 'namte namte bengali movie online', 'watch namte namte', 'watch namte namte online', 'watch namte namte bengali movie', 'namte namte bengali movie online streaming', 'namte namte full movie online', 'watch namte namte full movie online', 'hoichoi', 'hoichoi tv', 'hoichoi movies', 'bengali movies online', 'bengali movies online streaming', 'watch bengali movies online', 'saswata chatterjee', 'roopa ganguly', 'rajatabha dutta', 'rana basu'],
        h2Title: 'Catch the online streaming of Namte Namte, Bengali movie on hoichoi',
        h1Title: 'Watch Bengali movie Namte Namte online on hoichoi',
        description: 'Watch Namte Namte Bengali movie online on hoichoi. Middle aged Ananda likes to live a simple life. Things take a drastic turn when he decides to seek help from a criminal. Watch Namte Namte full movie on hoichoi.\n',
        title: 'Watch Namte Namte Movie Online'
      }
    }, {
      gist: {
        id: '32960650-2f6c-4ef5-a060-52b5c944c124',
        site: 'hoichoitv',
        permalink: '/movies/meghmallar-2014',
        title: 'Meghmallar',
        description: 'The lives of a chemistry teacher and his family turns upside down as the 1971 Liberation War begins in Bangladesh. Watch the full movie on Hoichoi.\n',
        free: false,
        isTrailer: false,
        isVisible: true,
        isFullEpisode: true,
        publishDate: 1596731928000,
        updateDate: 1600755610503,
        runtime: 5545,
        posterImageUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/21/1597997347003_meghmalaarcompositposteroption31098x16261_3x4Images.jpg',
        videoImageUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/21/1597997336684_meghmalaarcompositposteroption31280x720_16x9Images.jpg',
        imageGist: {
          _32x9: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/21/1597997322346_meghmalaarcompositposteroption32560x720_32x9Images.jpg',
          _16x9: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/21/1597997336684_meghmalaarcompositposteroption31280x720_16x9Images.jpg',
          _4x3: null,
          _3x4: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/21/1597997347003_meghmalaarcompositposteroption31098x16261_3x4Images.jpg',
          _1x1: null,
          _9x16: null
        },
        primaryCategory: {
          id: '0000015b-6351-dafe-a15b-f777bb210000',
          title: 'Drama'
        },
        watchedTime: 0,
        contentType: 'VIDEO',
        languageCode: 'en',
        isLiveStream: false,
        timezone: 'America/New_York',
        featuredTag: {
          badgeImages: []
        },
        badgeImages: {},
        scheduleStartDate: null,
        scheduleEndDate: null,
        drmEnabled: false,
        persons: [],
        metadata: []
      },
      categories: [{
        id: 'b495464b-e06d-499b-b8e0-89191c22be5c',
        title: 'World Digital Premiere'
      }],
      tags: [{
        id: '3ad78633-797a-4a14-9d79-ef84177316f7',
        title: 'Zahidur Rahim Anjan',
        permalink: '/tag/zahidur-rahim-anjan',
        badgeImages: []
      }, {
        id: '89cdfe58-d07a-4ebb-8e0e-217e7c2c48f1',
        title: 'Shahiduzzaman Selim',
        permalink: '/tag/shahiduzzaman-selim',
        badgeImages: []
      }, {
        id: '09c1c134-b28d-4dcb-b5e6-d996e9f1d8a3',
        title: 'Aparna Ghosh',
        permalink: '/tag/aparna-ghosh',
        badgeImages: []
      }, {
        id: 'bbb0ab6e-9a7c-444a-8494-52e6d995f507',
        title: 'Marjan Hossain Zara',
        permalink: '/tag/marjan-hossain-zara',
        badgeImages: []
      }, {
        id: '964df0fa-e353-447c-8cd8-122959666d48',
        title: 'Jayanta Chattopadhyay',
        permalink: '/tag/jayanta-chattopadhyay',
        badgeImages: []
      }, {
        id: '9d7a0959-19aa-42f8-9268-723168f11691',
        title: 'Mosharraf Karim',
        permalink: '/tag/mosharraf-karim',
        badgeImages: []
      }, {
        id: '9dc907ce-490c-4da4-8f91-baf9bf5aa049',
        title: 'Mostafiz Shahin',
        permalink: '/tag/mostafiz-shahin',
        badgeImages: []
      }, {
        id: 'c9eda79d-f4d0-453b-b80c-8967c4117519',
        title: 'Adnan Sobhan Evan',
        permalink: '/tag/adnan-sobhan-evan',
        badgeImages: []
      }, {
        id: 'ce549100-2e03-4fcc-8cf4-ec0d4025d7b3',
        title: 'Meghomallar',
        permalink: '/tag/meghomallar',
        badgeImages: []
      }, {
        id: '52771280-6ca3-49ca-a3e7-d955d66ac80a',
        title: 'Meghmollar',
        permalink: '/tag/meghmollar',
        badgeImages: []
      }, {
        id: 'e586f8a6-a857-45a1-85ba-0392c8276466',
        title: 'megmollar',
        permalink: '/tag/megmollar',
        badgeImages: []
      }, {
        id: '9d0811d9-0f44-4065-9da9-6b5ec7a6caf5',
        title: 'megmallar',
        permalink: '/tag/megmallar',
        badgeImages: []
      }],
      creditBlocks: [{
        title: 'Director',
        credits: [{
          title: 'Zahidur Rahim Anjan'
        }],
        containsHollywoodCelebrities: false,
        containsTVCelebrities: false
      }, {
        title: 'Starring',
        credits: [{
          title: 'Shahiduzzaman Selim'
        }, {
          title: 'Aparna Ghosh'
        }, {
          title: 'Marjan Hossain Zara'
        }, {
          title: 'Jayanta Chattopadhyay'
        }, {
          title: 'Mosharraf Karim'
        }, {
          title: 'Mostafiz Shahin'
        }, {
          title: 'Adnan Sobhan Evan'
        }],
        containsHollywoodCelebrities: false,
        containsTVCelebrities: false
      }],
      parentalRating: '5+',
      pricing: {
        type: 'SVOD',
        currency: 'USD',
        rent: null,
        purchase: null
      },
      monetizationModels: [],
      plans: [],
      showInAdvance: false,
      overridePrice: false,
      airTimezone: 'America/New_York',
      seasonAirTimezone: 'America/New_York',
      licenses: [],
      airDateTime: null,
      seasonAirDateTime: null,
      contentDetails: {
        videoImage: {
          secureUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/21/1597997336684_meghmalaarcompositposteroption31280x720_16x9Images.jpg',
          name: '1597997336684_meghmalaarcompositposteroption31280x720.jpg',
          id: 'f3b2e15b-fa19-4ab8-bc8f-dd2cdc04019e',
          imageTag: '<img src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/21/1597997336684_meghmalaarcompositposteroption31280x720_16x9Images.jpg" alt="" />',
          url: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/21/1597997336684_meghmalaarcompositposteroption31280x720_16x9Images.jpg'
        },
        closedCaptions: [],
        posterImage: {
          secureUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/21/1597997347003_meghmalaarcompositposteroption31098x16261_3x4Images.jpg',
          name: '1597997347003_meghmalaarcompositposteroption31098x16261.jpg',
          id: 'cdaa5502-248f-4330-82c8-590419338315',
          imageTag: '<img src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/21/1597997347003_meghmalaarcompositposteroption31098x16261_3x4Images.jpg" alt="" />',
          url: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/21/1597997347003_meghmalaarcompositposteroption31098x16261_3x4Images.jpg'
        },
        promos: [],
        trailers: [{
          id: '0f31b4d4-65b0-451a-bd11-9c1005b1ea88',
          title: 'Meghmallar - Trailer'
        }],
        status: 'open'
      },
      streamingInfo: {
        isLiveStream: false
      },
      drmEnabled: false,
      optionalTags: [],
      seo: {
        keywords: ['meghmallar', 'meghmallar movie online', 'meghmallar bengali movie online', 'watch meghmallar online', 'watch meghmallar bengali movie online', 'meghmallar online streaming', 'meghmallar bengali movie', 'meghmallar bengali movie online streaming', 'bengali movies online', 'watch bengali movies online', 'bengali movies online streaming', 'hoichoi', 'hoichoi tv', 'hoichoi movies', 'Shahiduzzaman Selim', 'Aparna Ghosh', 'Marjan Hossain Zara', 'Jayanta Chattopadhyay', 'Mosharraf Karim', 'Mostafiz Shahin', 'Adnan Sobhan Evan', 'Zahidur Rahim Anjan'],
        h2Title: 'Catch the online streaming of Meghmallar, Bengali movie on hoichoi',
        h1Title: 'Watch Bengali movie Meghmallar online on hoichoi',
        description: 'Watch Meghmallar Bengali movie online on hoichoi. The lives of a chemistry teacher and his family turns upside down as the 1971 Liberation War begins in Bangladesh. Watch Meghmallar full movie on hoichoi.\n',
        title: 'Watch Meghmallar Movie Online'
      }
    }, {
      gist: {
        id: '377e3331-510b-4b19-8b70-884e19537dda',
        site: 'hoichoitv',
        permalink: '/movies/phoring-2013',
        title: 'Phoring',
        description: 'An adolescent boy growing up in the foothills of North Bengal grows an infatuation for his teacher at school, who disappears. Watch the full movie on Hoichoi.\n',
        free: false,
        isTrailer: false,
        isVisible: true,
        isFullEpisode: true,
        publishDate: 1596644063000,
        updateDate: 1600755692531,
        runtime: 7625,
        posterImageUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/5/1596643639743_1098x1626_2_3x4Images.jpg',
        videoImageUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/5/1596643632896_2_16x9Images.jpg',
        imageGist: {
          _32x9: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/5/1596643624032_2560x720_2_32x9Images.jpg',
          _16x9: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/5/1596643632896_2_16x9Images.jpg',
          _4x3: null,
          _3x4: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/5/1596643639743_1098x1626_2_3x4Images.jpg',
          _1x1: null,
          _9x16: null
        },
        primaryCategory: {
          id: '0000015b-6351-dafe-a15b-f777bb210000',
          title: 'Drama'
        },
        watchedTime: 0,
        contentType: 'VIDEO',
        languageCode: 'en',
        isLiveStream: false,
        timezone: 'America/New_York',
        featuredTag: {
          badgeImages: []
        },
        badgeImages: {},
        scheduleStartDate: null,
        scheduleEndDate: null,
        drmEnabled: false,
        persons: [],
        metadata: []
      },
      categories: [],
      tags: [{
        id: 'c9059117-5ede-4644-b409-64268a003048',
        title: 'Indranil Roychowdhury',
        permalink: '/tag/indranil-roychowdhury',
        badgeImages: []
      }, {
        id: '0000015b-8cc1-dadf-a7ff-8ccbfd370000',
        title: 'sohini sarkar',
        permalink: '/films/browse/tag/sohini_sarkar/**',
        badgeImages: []
      }, {
        id: '0b81ab2d-0aa6-4e58-9821-99fadf66a3b4',
        title: 'ritwick chakraborty',
        permalink: '/tag/ritwick-chakraborty',
        badgeImages: []
      }, {
        id: '4e4f1293-e69c-4172-ab00-8efb58143f20',
        title: 'Akash Adhikary',
        permalink: '/tag/akash-adhikary',
        badgeImages: []
      }, {
        id: '6a6049c3-90c8-4317-9e9d-1a06ceb4eba1',
        title: 'Shankar Debnath',
        permalink: '/tag/shankar-debnath',
        badgeImages: []
      }, {
        id: 'ea2cf0e1-2fc9-4483-b3d8-6a1c5546ac33',
        title: 'Sourav Basak',
        permalink: '/tag/sourav-basak',
        badgeImages: []
      }, {
        id: '97fd563d-6768-4511-91d2-65800821e35e',
        title: 'Dwijen Bandopadhyay',
        permalink: '/tag/dwijen-bandopadhyay',
        badgeImages: []
      }, {
        id: '3a8c8a11-f524-4afd-97e0-2888e91c853a',
        title: 'Senjuti Roy Mukherji',
        permalink: '/tag/senjuti-roy-mukherji',
        badgeImages: []
      }, {
        id: 'b64400f9-4221-4828-a843-f42b681a3a63',
        title: 'Jio',
        permalink: '/tag/jio',
        badgeImages: []
      }, {
        id: '8bff65d4-c450-4a3f-a31a-44b26b2fa111',
        title: 'Foring',
        permalink: '/tag/foring',
        badgeImages: []
      }, {
        id: '790a87a7-ce23-43e1-9f17-e75c725ebe20',
        title: 'Fhoring',
        permalink: '/tag/fhoring',
        badgeImages: []
      }, {
        id: 'c8795d2f-ee02-4989-acbf-652c4d49c881',
        title: 'forreng',
        permalink: '/tag/forreng',
        badgeImages: []
      }, {
        id: '6f6eb82c-4828-4888-9f38-013e9c91781a',
        title: 'foreeng',
        permalink: '/tag/foreeng',
        badgeImages: []
      }],
      creditBlocks: [{
        title: 'Director',
        credits: [{
          title: 'Indranil Roychowdhury'
        }],
        containsHollywoodCelebrities: false,
        containsTVCelebrities: false
      }, {
        title: 'Starring',
        credits: [{
          title: 'Sohini Sarkar'
        }, {
          title: 'Ritwick Chakraborty'
        }, {
          title: 'Akash Adhikary'
        }, {
          title: 'Shankar Debnath'
        }, {
          title: 'Sourav Basak'
        }, {
          title: 'Dwijen Bandopadhyay'
        }, {
          title: 'Senjuti Roy Mukherji'
        }],
        containsHollywoodCelebrities: false,
        containsTVCelebrities: false
      }],
      parentalRating: '13+',
      pricing: {
        type: 'SVOD',
        currency: 'USD',
        rent: null,
        purchase: null
      },
      monetizationModels: [],
      plans: [],
      showInAdvance: false,
      overridePrice: false,
      airTimezone: 'America/New_York',
      seasonAirTimezone: 'America/New_York',
      licenses: [],
      airDateTime: null,
      seasonAirDateTime: null,
      contentDetails: {
        videoImage: {
          secureUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/5/1596643632896_2_16x9Images.jpg',
          name: '1596643632896_2.jpg',
          id: '6dfdeb36-62ce-442c-9c1e-a0dfb4b5c860',
          imageTag: '<img src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/5/1596643632896_2_16x9Images.jpg" alt="" />',
          url: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/5/1596643632896_2_16x9Images.jpg'
        },
        closedCaptions: [],
        posterImage: {
          secureUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/5/1596643639743_1098x1626_2_3x4Images.jpg',
          name: '1596643639743_1098x1626_2.jpg',
          id: 'a79b355c-9e2e-48c2-bd88-3b9aa0c65aff',
          imageTag: '<img src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/5/1596643639743_1098x1626_2_3x4Images.jpg" alt="" />',
          url: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/5/1596643639743_1098x1626_2_3x4Images.jpg'
        },
        promos: [],
        trailers: [{
          id: 'd8ac83c4-bc7c-4bfa-8b18-d41bf3a98518',
          title: 'Phoring - Trailer'
        }],
        status: 'open'
      },
      streamingInfo: {
        isLiveStream: false
      },
      drmEnabled: false,
      optionalTags: [],
      seo: {
        keywords: ['phoring', 'phoring bengali movie', 'phoring movie online', 'phoring full movie', 'phoring full movie online', 'watch phoring movie online', 'phoring movie', 'phoring bengali movie online', 'watch phoring bengali movie', 'watch full movie phoring', 'watch phoring full movie', 'hoichoi', 'hoichoi tv', 'hoichoi movies', 'bengali movies', 'bengali movies online', 'bengali movies online streaming', 'watch bengali movies online', 'sohini sarkar', 'ritwick chakraborty', 'indranil roychowdhury'],
        h2Title: 'Catch the online streaming of Phoring, Bengali movie on hoichoi',
        h1Title: 'Watch Bengali movie Phoring online on hoichoi',
        description: 'Watch Phoring Bengali movie online on hoichoi. An adolescent boy growing up in the foothills of North Bengal grows an infatuation for his teacher at school, who disappears. Watch Phoring full movie on hoichoi.\n',
        title: 'Watch Phoring Movie Online'
      }
    }, {
      gist: {
        id: '9c476218-196c-43e5-8097-db5ddf0600d7',
        site: 'hoichoitv',
        permalink: '/movies/krishnakanter-will-2007',
        title: 'Krishnakanter Will',
        description: 'A love triangle revolves around a will which holds the rights to the properties of Krishnakanta. Watch the full movie on Hoichoi.\n',
        free: false,
        isTrailer: false,
        isVisible: true,
        isFullEpisode: true,
        publishDate: 1596213784000,
        updateDate: 1600755816908,
        runtime: 8283,
        posterImageUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/09/3/1599114630578_krishnakanterwill1098x1626_3x4Images.jpg',
        videoImageUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/07/31/1596201539913_1920x1080_16x9Images.jpg',
        imageGist: {
          _32x9: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/07/31/1596201533532_2560x720_32x9Images.jpg',
          _16x9: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/07/31/1596201539913_1920x1080_16x9Images.jpg',
          _4x3: null,
          _3x4: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/09/3/1599114630578_krishnakanterwill1098x1626_3x4Images.jpg',
          _1x1: null,
          _9x16: null
        },
        primaryCategory: {
          id: '0000015b-6351-dafe-a15b-f777bb210000',
          title: 'Drama'
        },
        watchedTime: 0,
        contentType: 'VIDEO',
        languageCode: 'en',
        isLiveStream: false,
        timezone: 'America/New_York',
        featuredTag: {
          badgeImages: []
        },
        badgeImages: {},
        scheduleStartDate: null,
        scheduleEndDate: null,
        drmEnabled: false,
        persons: [],
        metadata: []
      },
      categories: [],
      tags: [{
        id: '8450d822-149d-4cfc-b19d-ee56d4f9273c',
        title: 'Raja Sen',
        permalink: '/tag/raja-sen',
        badgeImages: []
      }, {
        id: '0000015b-65f3-d847-abdb-fffb94790000',
        title: 'jeet all time hits',
        permalink: '/films/browse/tag/jeet_all_time_hits/**',
        badgeImages: []
      }, {
        id: '0000015b-6da2-df1a-af7b-ffa379130000',
        title: 'Jeet',
        permalink: '/films/browse/tag/jeet/**',
        badgeImages: []
      }, {
        id: '66caf8fa-94a9-4bb9-b703-efbe3c8c627a',
        title: 'Swastika Mukherjee',
        permalink: '/tag/swastika-mukherjee',
        badgeImages: []
      }, {
        id: '86808a9b-3d02-4fc9-964f-ea065fe6f6ee',
        title: 'monali thakur',
        permalink: '/tag/monali-thakur',
        badgeImages: []
      }, {
        id: '0000015b-6d96-d403-a95b-fff7f8bb0000',
        title: 'soumitra chatterjee',
        permalink: '/films/browse/tag/soumitra_chatterjee/**',
        badgeImages: []
      }, {
        id: 'c33b57f0-6417-48f5-99ed-cb7d4d93f281',
        title: 'Kunal Mittra',
        permalink: '/tag/kunal-mittra',
        badgeImages: []
      }, {
        id: '25edbfd0-5b52-4611-955c-7654e2f45077',
        title: 'Tulika Basu',
        permalink: '/tag/tulika-basu',
        badgeImages: []
      }, {
        id: 'b64400f9-4221-4828-a843-f42b681a3a63',
        title: 'Jio',
        permalink: '/tag/jio',
        badgeImages: []
      }, {
        id: 'df2d6252-b87e-411f-b5cb-eab50c5aa501',
        title: 'Krishnokanter will',
        permalink: '/tag/krishnokanter-will',
        badgeImages: []
      }, {
        id: '7a49885f-7b37-4602-b6d2-d8acaa03bd1a',
        title: 'krishnokanter vil',
        permalink: '/tag/krishnokanter-vil',
        badgeImages: []
      }, {
        id: '19fb80ae-44c9-4588-ab9d-6fafe70e2dd9',
        title: 'krishnkanter will',
        permalink: '/tag/krishnkanter-will',
        badgeImages: []
      }, {
        id: 'df2d6252-b87e-411f-b5cb-eab50c5aa501',
        title: 'Krishnokanter will',
        permalink: '/tag/krishnokanter-will',
        badgeImages: []
      }, {
        id: '770de0bf-18a9-428b-9e68-c16c475db546',
        title: 'will',
        permalink: '/tag/will',
        badgeImages: []
      }],
      creditBlocks: [{
        title: 'Director',
        credits: [{
          title: 'Raja Sen'
        }],
        containsHollywoodCelebrities: false,
        containsTVCelebrities: false
      }, {
        title: 'Starring',
        credits: [{
          title: 'Jeet'
        }, {
          title: 'Swastika Mukherjee'
        }, {
          title: 'Monali Thakur'
        }, {
          title: 'Soumitra Chatterjee'
        }, {
          title: 'Kunal Mittra'
        }, {
          title: 'Tulika Basu'
        }],
        containsHollywoodCelebrities: false,
        containsTVCelebrities: false
      }],
      parentalRating: '13+',
      pricing: {
        type: 'SVOD',
        currency: 'USD',
        rent: null,
        purchase: null
      },
      monetizationModels: [],
      plans: [],
      showInAdvance: false,
      overridePrice: false,
      airTimezone: 'America/New_York',
      seasonAirTimezone: 'America/New_York',
      licenses: [],
      airDateTime: null,
      seasonAirDateTime: null,
      contentDetails: {
        videoImage: {
          secureUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/07/31/1596201539913_1920x1080_16x9Images.jpg',
          name: '1596201539913_1920x1080.jpg',
          id: '88d9ac95-9443-4d9b-ba04-d3aa4532299d',
          imageTag: '<img src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/07/31/1596201539913_1920x1080_16x9Images.jpg" alt="" />',
          url: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/07/31/1596201539913_1920x1080_16x9Images.jpg'
        },
        closedCaptions: [],
        posterImage: {
          secureUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/09/3/1599114630578_krishnakanterwill1098x1626_3x4Images.jpg',
          name: '1599114630578_krishnakanterwill1098x1626.jpg',
          id: '41146665-9273-44d1-9837-7c36601ac476',
          imageTag: '<img src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/09/3/1599114630578_krishnakanterwill1098x1626_3x4Images.jpg" alt="" />',
          url: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/09/3/1599114630578_krishnakanterwill1098x1626_3x4Images.jpg'
        },
        promos: [],
        trailers: [{
          id: 'f73291c9-1877-447e-902b-9b1f4a3d71c4',
          title: 'Krishnakanter Will - Trailer'
        }],
        status: 'open'
      },
      streamingInfo: {
        isLiveStream: false
      },
      drmEnabled: false,
      optionalTags: [],
      seo: {
        keywords: ['krishnakanter will', 'krishnakanter will bengali movie', 'krishnakanter will bengali movie online', 'watch krishnakanter will', 'watch krishnakanter will online', 'watch krishnakanter will bengali movie online', 'krishnakanter will online streaming', 'watch krishnakanter will movie online', 'hoichoi', 'hoichoi tv', 'hoichoi movies', 'jeet movies', 'jeet bengali movies', 'swastika mukherjee films', 'swastika mukherjee', 'jeet', 'monali thakur', 'soumitra chatterjee', 'kunal mittra', 'tulika basu', 'raja sen'],
        h2Title: 'Catch the online streaming of Krishnakanter Will, Bengali movie on hoichoi',
        h1Title: 'Watch Bengali movie Krishnakanter Will online on hoichoi',
        description: 'Watch Krishnakanter Will Bengali movie online on hoichoi. A love triangle revolves around a will which holds the rights to the properties of Krishnakanta. Watch Krishnakanter Will full movie on hoichoi.\n',
        title: 'Watch Krishnakanter Will Movie Online'
      }
    }, {
      gist: {
        id: 'c15e5741-fd49-45c2-a71f-2a30de19dc1d',
        site: 'hoichoitv',
        permalink: '/movies/swapnajaal-2018',
        title: 'Swapnajaal',
        description: 'A coming of age tale of romance where Apu fights back to win his love Shuvra and restore justice to her family. Watch the full movie on Hoichoi.\n',
        year: '2018',
        free: false,
        isTrailer: false,
        isVisible: true,
        isFullEpisode: true,
        publishDate: 1596126006000,
        updateDate: 1600768876023,
        runtime: 8429,
        posterImageUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383028338_swapnajal31098x1626_3x4Images.jpg',
        videoImageUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383020916_swapnajal32560x7201_16x9Images.jpg',
        imageGist: {
          _32x9: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383011381_swapnajal32560x720_32x9Images.jpg',
          _16x9: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383020916_swapnajal32560x7201_16x9Images.jpg',
          _4x3: null,
          _3x4: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383028338_swapnajal31098x1626_3x4Images.jpg',
          _1x1: null,
          _9x16: null
        },
        primaryCategory: {
          id: '2a0bd676-1b27-4164-96e5-124977232aca',
          title: 'Romantic'
        },
        watchedTime: 0,
        contentType: 'VIDEO',
        languageCode: 'en',
        isLiveStream: false,
        timezone: 'America/New_York',
        featuredTag: {
          badgeImages: []
        },
        badgeImages: {},
        scheduleStartDate: null,
        scheduleEndDate: null,
        drmEnabled: false,
        persons: [],
        metadata: []
      },
      categories: [],
      tags: [{
        id: '47ec7c57-3ac9-47ab-acef-c535564eed60',
        title: 'Giasuddin Selim',
        permalink: '/tag/giasuddin-selim',
        badgeImages: []
      }, {
        id: '215e9300-0c0a-4eb3-9021-3156930dee48',
        title: 'Pori Moni',
        permalink: '/tag/pori-moni',
        badgeImages: []
      }, {
        id: '54fef876-c62d-4a21-8a6d-7ad2fd735955',
        title: 'Yash Rohan',
        permalink: '/tag/yash-rohan',
        badgeImages: []
      }, {
        id: '267831b6-b2f2-4040-a9d1-17cb426fa695',
        title: 'Fazlur Rahman Babu',
        permalink: '/tag/fazlur-rahman-babu',
        badgeImages: []
      }, {
        id: '60445d4a-91c3-44db-adff-9f714728a1f8',
        title: 'Misha Sawdagar',
        permalink: '/tag/misha-sawdagar',
        badgeImages: []
      }, {
        id: 'e0a41488-6fbf-4b41-a200-098d4bca06ca',
        title: 'Shahidul Alam Sachhu',
        permalink: '/tag/shahidul-alam-sachhu',
        badgeImages: []
      }, {
        id: '1756282a-4d61-4a2e-88ff-dc28b1b46c5e',
        title: 'Rajat Ganguly',
        permalink: '/tag/rajat-ganguly',
        badgeImages: []
      }, {
        id: '44a66855-282e-4044-a8ff-1cdd0e355665',
        title: 'Reshmi Sen',
        permalink: '/tag/reshmi-sen',
        badgeImages: []
      }, {
        id: 'b612f542-46e0-4c66-b758-135859c5eb55',
        title: 'swopnojaal',
        permalink: '/tag/swopnojaal',
        badgeImages: []
      }, {
        id: '33e4adc0-7362-4222-8dcc-fcd36ad3402c',
        title: 'swapnojaal',
        permalink: '/tag/swapnojaal',
        badgeImages: []
      }, {
        id: '7e768347-3611-45ea-b6bc-45878f9a2c7d',
        title: 'sapnojaal',
        permalink: '/tag/sapnojaal',
        badgeImages: []
      }, {
        id: '7e768347-3611-45ea-b6bc-45878f9a2c7d',
        title: 'sapnojaal',
        permalink: '/tag/sapnojaal',
        badgeImages: []
      }],
      creditBlocks: [{
        title: 'Director',
        credits: [{
          title: 'Giasuddin Selim'
        }],
        containsHollywoodCelebrities: false,
        containsTVCelebrities: false
      }, {
        title: 'Starring',
        credits: [{
          title: 'Pori Moni'
        }, {
          title: 'Yash Rohan'
        }, {
          title: 'Fazlur Rahman Babu'
        }, {
          title: 'Misha Sawdagar'
        }, {
          title: 'Shahidul Alam Sachhu'
        }, {
          title: 'Rajat Ganguly'
        }, {
          title: 'Reshmi Sen'
        }],
        containsHollywoodCelebrities: false,
        containsTVCelebrities: false
      }],
      parentalRating: '5+',
      pricing: {
        type: 'SVOD',
        currency: 'USD',
        rent: null,
        purchase: null
      },
      monetizationModels: [],
      plans: [],
      showInAdvance: false,
      overridePrice: false,
      airTimezone: 'America/New_York',
      seasonAirTimezone: 'America/New_York',
      licenses: [],
      airDateTime: null,
      seasonAirDateTime: null,
      contentDetails: {
        videoImage: {
          secureUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383020916_swapnajal32560x7201_16x9Images.jpg',
          name: '1597383020916_swapnajal32560x7201.jpg',
          id: '781bec97-de94-4682-8378-1ef11031740a',
          imageTag: '<img src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383020916_swapnajal32560x7201_16x9Images.jpg" alt="" />',
          url: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383020916_swapnajal32560x7201_16x9Images.jpg'
        },
        closedCaptions: [],
        posterImage: {
          secureUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383028338_swapnajal31098x1626_3x4Images.jpg',
          name: '1597383028338_swapnajal31098x1626.jpg',
          id: '64a90118-4f16-4e73-85c6-efa5340e5433',
          imageTag: '<img src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383028338_swapnajal31098x1626_3x4Images.jpg" alt="" />',
          url: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383028338_swapnajal31098x1626_3x4Images.jpg'
        },
        promos: [],
        trailers: [{
          id: '27caa93e-571e-4404-968a-1d716d060f42',
          title: 'Swapnajaal - Trailer'
        }],
        status: 'open'
      },
      streamingInfo: {
        isLiveStream: false
      },
      drmEnabled: false,
      optionalTags: [],
      seo: {
        keywords: ['swapnajaal', 'swapnajaal bengali movie', 'swapnajaal movie online', 'watch swapnajaal movie online', 'watch swapnajaal bengali movie online', 'swapnajaal movie hoichoi', 'swapnajaal online streaming', 'bengali movie online', 'bengali movie online streaming', 'hoichoi', 'hoichoi tv', 'hoichoi movies', 'hoichoi movies online', 'pori moni', 'yash rohan', 'fazlur rahman babu', 'misha sawdagar', 'Shahidul Alam Sachhu', 'rajat ganguly', 'reshmi sen'],
        h2Title: 'Catch the online streaming of Swapnajaal, Bengali movie on hoichoi',
        h1Title: 'Watch Bengali movie Swapnajaal online on hoichoi',
        description: 'Watch Swapnajaal Bengali movie online on hoichoi. A coming of age tale of romance where Apu fights back to win his love Shuvra and restore justice to her family. Watch the full movie on hoichoi.\n',
        title: 'Watch Swapnajaal Movie Online'
      }
    }, {
      gist: {
        id: '9ed63464-1c1a-4ede-9489-47303be478f0',
        site: 'hoichoitv',
        permalink: '/movies/anil-bagchir-ekdin-2015',
        title: 'Anil Bagchir Ekdin',
        description: 'A day in the life of Anil Bagchi, who tries to return to his village at the onset of the Liberation War in Bangladesh. Watch the full movie on Hoichoi.\n',
        year: '2015',
        free: false,
        isTrailer: false,
        isVisible: true,
        isFullEpisode: true,
        publishDate: 1595609204000,
        updateDate: 1600768990882,
        runtime: 7215,
        posterImageUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383445466_portraitnew_3x4Images.jpg',
        videoImageUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383439285_jumbotron2_16x9Images.jpg',
        imageGist: {
          _32x9: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383433041_anulbagchirekdin_jumbotron_32x91_32x9Images.jpg',
          _16x9: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383439285_jumbotron2_16x9Images.jpg',
          _4x3: null,
          _3x4: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383445466_portraitnew_3x4Images.jpg',
          _1x1: null,
          _9x16: null
        },
        primaryCategory: {
          id: '0000015b-6351-dafe-a15b-f777bb210000',
          title: 'Drama'
        },
        watchedTime: 0,
        contentType: 'VIDEO',
        languageCode: 'en',
        isLiveStream: false,
        timezone: 'America/New_York',
        featuredTag: {
          badgeImages: []
        },
        badgeImages: {},
        scheduleStartDate: null,
        scheduleEndDate: null,
        drmEnabled: false,
        persons: [],
        metadata: []
      },
      categories: [{
        id: 'b495464b-e06d-499b-b8e0-89191c22be5c',
        title: 'World Digital Premiere'
      }],
      tags: [{
        id: '5391c529-9bfe-4e5a-8d4b-e50fd4a688ba',
        title: 'Morshedul Islam',
        permalink: '/tag/morshedul-islam',
        badgeImages: []
      }, {
        id: '4f336588-6cc1-42a3-99fd-fc9f69917ce8',
        title: 'Gazi Rakayet',
        permalink: '/tag/gazi-rakayet',
        badgeImages: []
      }, {
        id: '922481fb-0466-42dd-abf9-e6971d37e0fd',
        title: 'Jyotika Jyoti',
        permalink: '/tag/jyotika-jyoti',
        badgeImages: []
      }, {
        id: 'f06e9ae7-b8b5-436f-ac60-706c5511d2bd',
        title: 'Misa Sawdagar',
        permalink: '/tag/misa-sawdagar',
        badgeImages: []
      }, {
        id: '3d89859e-326d-40cc-ad04-e722c85d0e42',
        title: 'Aref Syed',
        permalink: '/tag/aref-syed',
        badgeImages: []
      }, {
        id: '4fc195db-c890-4a76-bdc6-3ae9453080bf',
        title: 'Anil Bagchir Ekdin',
        permalink: '/tag/anil-bagchir-ekdin',
        badgeImages: []
      }, {
        id: '0b9e3e3f-4e44-4819-8a28-29dee74f93d2',
        title: 'Onil bagchir ekdin',
        permalink: '/tag/onil-bagchir-ekdin',
        badgeImages: []
      }, {
        id: 'a5332d12-b723-4cb0-b6ff-b608abcd581a',
        title: 'anil bakshi er ek din',
        permalink: '/tag/anil-bakshi-er-ek-din',
        badgeImages: []
      }, {
        id: '92515b90-b126-49ea-a4cf-4d42c5e52da2',
        title: 'Anil Bagchi er ekdin',
        permalink: '/tag/anil-bagchi-er-ekdin',
        badgeImages: []
      }, {
        id: 'c2fff85c-b7bb-46e0-85a4-82bc1df47f49',
        title: 'Onil bakshier ekdin',
        permalink: '/tag/onil-bakshier-ekdin',
        badgeImages: []
      }, {
        id: '09d9f971-1c1c-4eb1-9481-053c4cac3846',
        title: 'anil bagcheer ekdin',
        permalink: '/tag/anil-bagcheer-ekdin',
        badgeImages: []
      }, {
        id: 'dc1a683d-537f-4d71-aeed-291ca8e290b2',
        title: 'aneel bagchir ekdin',
        permalink: '/tag/aneel-bagchir-ekdin',
        badgeImages: []
      }, {
        id: 'b6d2dbfc-ac3a-421a-83ef-261709e0425a',
        title: 'anil bagchir ek din',
        permalink: '/tag/anil-bagchir-ek-din',
        badgeImages: []
      }],
      creditBlocks: [{
        title: 'Director',
        credits: [{
          title: 'Morshedul Islam'
        }],
        containsHollywoodCelebrities: false,
        containsTVCelebrities: false
      }, {
        title: 'Starring',
        credits: [{
          title: 'Gazi Rakayet'
        }, {
          title: 'Jyotika Jyoti'
        }, {
          title: 'Misa Sawdagar'
        }, {
          title: 'Aref Syed'
        }],
        containsHollywoodCelebrities: false,
        containsTVCelebrities: false
      }],
      parentalRating: '5+',
      pricing: {
        type: 'SVOD',
        currency: 'USD',
        rent: null,
        purchase: null
      },
      monetizationModels: [],
      plans: [],
      showInAdvance: false,
      overridePrice: false,
      airTimezone: 'America/New_York',
      seasonAirTimezone: 'America/New_York',
      licenses: [],
      airDateTime: null,
      seasonAirDateTime: null,
      contentDetails: {
        videoImage: {
          secureUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383439285_jumbotron2_16x9Images.jpg',
          name: '1597383439285_jumbotron2.jpg',
          id: 'd8e3bfee-6b8b-4cbb-8ec2-e45454cf2295',
          imageTag: '<img src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383439285_jumbotron2_16x9Images.jpg" alt="" />',
          url: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383439285_jumbotron2_16x9Images.jpg'
        },
        closedCaptions: [],
        posterImage: {
          secureUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383445466_portraitnew_3x4Images.jpg',
          name: '1597383445466_portraitnew.jpg',
          id: '57575a4e-dab4-4ab8-9c67-a303d291e3df',
          imageTag: '<img src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383445466_portraitnew_3x4Images.jpg" alt="" />',
          url: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597383445466_portraitnew_3x4Images.jpg'
        },
        promos: [],
        trailers: [{
          id: '78fc8c5f-bd14-4b05-99ad-32d787a57e11',
          title: 'Anil Bagchir Ekdin - Trailer'
        }],
        status: 'open'
      },
      streamingInfo: {
        isLiveStream: false
      },
      drmEnabled: false,
      optionalTags: [],
      seo: {
        keywords: ['anil bagchir ekdin', 'anil bagchir ekdin bengali movie', 'anil bagchir ekdin bengali movie online', 'watch anil bagchir ekdin', 'watch anil bagchir ekdin online', 'watch anil bagchir ekdin bengali movie online', 'anil bagchir ekdin online', 'anil bagchir ekdin online streaming', 'hoichoi', 'hoichoi tv', 'hoichoi movies', 'hoichoi originals', 'morshedul islam', 'gazi rakayet', 'jyotika jyoti', 'misa sawdagar', 'aref syed'],
        h2Title: 'Catch the online streaming of Anil Bagchir Ekdin, Bengali movie on hoichoi',
        h1Title: 'Watch Bengali movie Anil Bagchir Ekdin online on hoichoi',
        description: 'Watch Anil Bagchir Ekdin Bengali movie online on hoichoi. A day in the life of Anil Bagchi, who tries to return to his village at the onset of the Liberation War in Bangladesh. Watch Anil Bagchir Ekdin full movie on hoichoi.\n',
        title: 'Watch Anil Bagchir Ekdin Movie Online'
      }
    }, {
      gist: {
        id: '4c109aa0-8a94-46a7-a791-2855899ca5a1',
        title: 'BreakUp Story',
        description: 'Five couples, one issue - BreakUp. Would they be able to salvage their love when relationships go sinfully wrong?\n',
        contentType: 'SERIES',
        mediaType: 'SERIES',
        videoImageUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597408177425_1280x720_16x9Images.jpg',
        posterImageUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597408186611_1098x1626_3x4Images.jpg',
        permalink: '/webseries/break-up-story',
        primaryCategory: {
          id: 'e27359c9-8e69-4973-9ef8-31c2ac5249a4',
          title: 'Romantic Drama'
        },
        languageCode: 'en',
        imageGist: {
          _32x9: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/17/1597648241815_2560x7202_32x9Images.jpg',
          _16x9: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597408177425_1280x720_16x9Images.jpg',
          _4x3: null,
          _3x4: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597408186611_1098x1626_3x4Images.jpg',
          _1x1: null,
          _9x16: null
        },
        badgeImages: {}
      },
      categories: [],
      tags: [{
        id: '9ee5852e-d608-4ba8-8de5-cb28c350fb2f',
        title: 'Alivia Sarkar',
        permalink: '/tag/alivia-sarkar',
        badgeImages: []
      }, {
        id: '6b73ba8a-eb0f-4904-b620-063bea1e0f89',
        title: 'Tuhina Das',
        permalink: '/tag/tuhina-das',
        badgeImages: []
      }, {
        id: 'd23aa9b0-dc1a-49bc-b1b9-c1d7fc2c9f1b',
        title: 'Ranojoy Bishnu',
        permalink: '/tag/ranojoy-bishnu',
        badgeImages: []
      }, {
        id: '6269f07f-4437-4d9f-925e-85333c16313d',
        title: 'Sauraseni Maitra',
        permalink: '/tag/sauraseni-maitra',
        badgeImages: []
      }, {
        id: '6b985ac8-a647-4cce-9931-65cae0b63ada',
        title: 'Chandreyee Ghosh',
        permalink: '/tag/chandreyee-ghosh',
        badgeImages: []
      }, {
        id: '0000015b-b1ab-d482-a3db-bfbb33510000',
        title: 'anindita bose',
        permalink: '/films/browse/tag/anindita_bose/**',
        badgeImages: []
      }, {
        id: '0000015b-8cc1-dadf-a7ff-8ccbfd370000',
        title: 'sohini sarkar',
        permalink: '/films/browse/tag/sohini_sarkar/**',
        badgeImages: []
      }, {
        id: '0000015b-6da5-d6fc-a95b-ffff33a60000',
        title: 'sourav das',
        permalink: '/films/browse/tag/sourav_das/**',
        badgeImages: []
      }, {
        id: 'b5189738-35de-4b46-949d-220585d816c6',
        title: 'Aryann Bhowmik',
        permalink: '/tag/aryann-bhowmik',
        badgeImages: []
      }, {
        id: '0a30d006-902d-4e76-8060-8ae6c5816a5d',
        title: 'Mainak Bhaumik',
        permalink: '/tag/mainak-bhaumik',
        badgeImages: []
      }, {
        id: 'bceae4dc-5c8c-4555-bd2f-3f54644a0a86',
        title: 'BreakUp Stories',
        permalink: '/tag/breakup-stories',
        badgeImages: []
      }, {
        id: '4c0300ef-b0b1-4a67-a3f0-e88c01998278',
        title: 'break story',
        permalink: '/tag/break-story',
        badgeImages: []
      }, {
        id: '56b4770c-4cbc-45f1-b283-29cbf5693155',
        title: 'breakup stroi',
        permalink: '/tag/breakup-stroi',
        badgeImages: []
      }, {
        id: '75c53dc0-801f-4b9a-aee0-798cb621f724',
        title: 'brokeup story',
        permalink: '/tag/brokeup-story',
        badgeImages: []
      }, {
        id: '9dc3def5-f9d3-4165-99f9-0526cec0f7d1',
        title: 'break up',
        permalink: '/tag/break-up',
        badgeImages: []
      }, {
        id: '92b70527-2107-4a15-aec5-17d0dc1f593c',
        title: 'brakeup story',
        permalink: '/tag/brakeup-story',
        badgeImages: []
      }, {
        id: '4f67469c-201b-4ec6-b100-5147da84a5d6',
        title: 'couples',
        permalink: '/tag/couples',
        badgeImages: []
      }, {
        id: 'f9d6d6d1-5477-4ce4-847d-4a19c823692b',
        title: 'relationship',
        permalink: '/tag/relationship',
        badgeImages: []
      }],
      creditBlocks: [{
        title: 'Director',
        credits: [{
          title: 'Mainak Bhaumik'
        }],
        containsHollywoodCelebrities: false,
        containsTVCelebrities: false
      }, {
        title: 'Starring',
        credits: [{
          title: 'Saurav Das'
        }, {
          title: 'Sohini Sarkar'
        }, {
          title: 'Tuhina Das'
        }, {
          title: 'Sauraseni Maitra'
        }, {
          title: 'Anindita Bose'
        }, {
          title: 'Aryann Bhowmik'
        }, {
          title: 'Alivia Sarkar'
        }, {
          title: 'Ranojoy Bishnu'
        }, {
          title: 'Chandreyee Ghosh'
        }],
        containsHollywoodCelebrities: false,
        containsTVCelebrities: false
      }],
      id: '4c109aa0-8a94-46a7-a791-2855899ca5a1',
      showDetails: {
        status: 'open',
        trailers: [{
          id: 'abf1867d-9406-4ec7-8297-241b6deac1eb',
          title: 'BreakUp Stories - trailer (streaming now)'
        }]
      },
      site: 'hoichoitv',
      images: {
        _16x9Image: {
          secureUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597408177425_1280x720_16x9Images.jpg',
          objectKey: 'image',
          name: '1597408177425_1280x720.jpg',
          id: 'fa57b863-705a-4b31-aa0a-8b50c08460dc',
          imageTag: '<img src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597408177425_1280x720_16x9Images.jpg" alt="" />',
          url: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597408177425_1280x720_16x9Images.jpg'
        },
        _32x9Image: {
          secureUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/17/1597648241815_2560x7202_32x9Images.jpg',
          objectKey: 'image',
          name: '1597648241815_2560x7202.jpg',
          id: 'a7102d9f-df5f-45cb-b95f-b60a0be36959',
          imageTag: '<img src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/17/1597648241815_2560x7202_32x9Images.jpg" alt="" />',
          url: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/17/1597648241815_2560x7202_32x9Images.jpg'
        },
        _3x4Image: {
          secureUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597408186611_1098x1626_3x4Images.jpg',
          objectKey: 'image',
          name: '1597408186611_1098x1626.jpg',
          id: '53396648-55a8-4b2f-9575-b394058c5419',
          imageTag: '<img src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597408186611_1098x1626_3x4Images.jpg" alt="" />',
          url: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/14/1597408186611_1098x1626_3x4Images.jpg'
        }
      },
      seasons: [{
        id: '0dfdd043-f445-4465-9867-76879a99851e',
        title: 'Season 1',
        purchase: {},
        episodes: [{
          id: '88a8d9fd-c5ae-4780-a5af-52ce7c5104f0',
          title: 'After The Break'
        }, {
          id: 'ae856f8e-5ab0-4f5e-88f7-d4343abfb2f7',
          title: 'Best Friends Forever'
        }, {
          id: 'dc61462c-8cc8-4358-a2ef-21e54038f89d',
          title: 'Heartbreak'
        }, {
          id: 'd039a7ce-2e6b-4b8c-901f-c6ea8a180923',
          title: 'A Good Education'
        }, {
          id: 'a6f1a4dc-da24-4457-a8ba-c8ff5f7e1d98',
          title: 'Return To Zero'
        }]
      }],
      seo: {
        keywords: ['break up story', 'break up story web series', 'break up story web series online', 'watch break up story web series', 'watch break up story web series online', 'break up story online streaming', 'watch break up story online streaming', 'break up story bengali web series online streaming', 'watch break up story bengali web series', 'break up story bengali series online', 'hoichoi', 'hoichoi tv', 'hoichoi originals', 'hoichoi new web series', 'new bengali web series', 'new bengali web series online', 'latest bengali web series', 'latest bengali web series online', 'watch new bengali web series', 'watch latest bengali web series', 'sourav das', 'sohini sarkar', 'tuhina das', 'sauraseni maitra', 'anindita bose', 'aryann Bhowmik', 'chandrayee ghosh', 'ranojoy bishnu', 'Alivia sarkar', 'mainak bhaumik'],
        h2Title: 'Catch all the episodes of Break Up Story web series online on hoichoi',
        h1Title: 'Watch Break Up Story Bengali web series online on hoichoi',
        description: 'Watch the full season of Break Up Story Bengali web series online on hoichoi. Four couples, one issue - BreakUp. Would they be able to salvage their love when relationships go sinfully wrong?\n',
        title: 'Watch Break Up Story Web Series'
      },
      pricing: {},
      monetizationModels: [],
      plans: []
    }, {
      gist: {
        id: 'efa1d489-9aa2-458e-898e-f5034cb448ab',
        site: 'hoichoitv',
        permalink: '/movies/nagarkirtan-2017',
        title: 'Nagarkirtan',
        description: "A woman trapped inside a man's body, falls in love with a flute player. Their love blossoms defying social conventions. Watch the full movie on Hoichoi.\n",
        year: '2017',
        free: false,
        isTrailer: false,
        isVisible: true,
        isFullEpisode: true,
        publishDate: 1594918559000,
        updateDate: 1600839642655,
        runtime: 6812,
        posterImageUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/3/1596462106514_nagarkirtannew1098x1626_3x4Images.jpg',
        videoImageUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/3/1596462099541_nagarkirtannew1280x720_16x9Images.jpg',
        imageGist: {
          _32x9: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/3/1596462091140_nagarkirtannew2560x720_32x9Images.jpg',
          _16x9: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/3/1596462099541_nagarkirtannew1280x720_16x9Images.jpg',
          _4x3: null,
          _3x4: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/3/1596462106514_nagarkirtannew1098x1626_3x4Images.jpg',
          _1x1: null,
          _9x16: null
        },
        primaryCategory: {
          id: '0000015b-6351-dafe-a15b-f777bb210000',
          title: 'Drama'
        },
        watchedTime: 0,
        contentType: 'VIDEO',
        languageCode: 'en',
        isLiveStream: false,
        timezone: 'US/Eastern',
        featuredTag: {
          badgeImages: []
        },
        badgeImages: {},
        scheduleStartDate: null,
        scheduleEndDate: null,
        drmEnabled: false,
        persons: [],
        metadata: []
      },
      categories: [{
        id: 'b495464b-e06d-499b-b8e0-89191c22be5c',
        title: 'World Digital Premiere'
      }],
      tags: [{
        id: '500a31ae-11df-49de-8137-780d09e22adf',
        title: 'Indrashish Roy',
        permalink: '/tag/indrashish-roy',
        badgeImages: []
      }, {
        id: '127d053a-f4ff-407a-90f8-2886cbb84058',
        title: 'Bidipta Chakraborty',
        permalink: '/tag/bidipta-chakraborty',
        badgeImages: []
      }, {
        id: '0b81ab2d-0aa6-4e58-9821-99fadf66a3b4',
        title: 'ritwick chakraborty',
        permalink: '/tag/ritwick-chakraborty',
        badgeImages: []
      }, {
        id: 'baf9456d-3971-46d6-9136-3b92e146462d',
        title: 'sujan mukherjee',
        permalink: '/tag/sujan-mukherjee',
        badgeImages: []
      }, {
        id: '2e913d4a-7ee2-4f77-aba5-bf7fb5147ae0',
        title: 'Ridhhi Sen',
        permalink: '/tag/ridhhi-sen',
        badgeImages: []
      }, {
        id: '39996a60-1d26-42f6-9357-a7577d7d5040',
        title: 'nagarkirtan',
        permalink: '/tag/nagarkirtan',
        badgeImages: []
      }, {
        id: '0000015b-b1a9-d01e-a37f-fdff4a360000',
        title: 'kaushik ganguly',
        permalink: '/films/browse/tag/kaushik_ganguly/**',
        badgeImages: []
      }, {
        id: 'd08aadf3-b542-49eb-a27b-9c26ce5fd54b',
        title: 'Kaushik Ganguly films',
        permalink: '/tag/kaushik-ganguly-films',
        badgeImages: []
      }, {
        id: '6c99de18-bc62-4b69-8249-7be7553d3b4f',
        title: 'Kaushik Ganguly Bengali Movie',
        permalink: '/tag/kaushik-ganguly-bengali-movie',
        badgeImages: []
      }, {
        id: '95495c84-a801-44c1-bafe-c8518c8aba85',
        title: 'Nogorkirton',
        permalink: '/tag/nogorkirton',
        badgeImages: []
      }, {
        id: '92ea4bd3-9f8d-4b27-8a65-c05aa3d4ca97',
        title: 'nagarkirton',
        permalink: '/tag/nagarkirton',
        badgeImages: []
      }, {
        id: 'be7c1207-b5e0-4e6f-9df7-ccf767653475',
        title: 'nagar kirtan',
        permalink: '/tag/nagar-kirtan',
        badgeImages: []
      }, {
        id: '586ed82c-3018-4992-acb0-ebba9d58eda3',
        title: 'nagorkirtan',
        permalink: '/tag/nagorkirtan',
        badgeImages: []
      }, {
        id: 'c2dbc425-7120-4582-a38f-d70d7e860102',
        title: 'nagarkeertan',
        permalink: '/tag/nagarkeertan',
        badgeImages: []
      }, {
        id: '753be2ec-a866-4fc8-94c3-f0e57ae2fd0d',
        title: 'nagarkeerton',
        permalink: '/tag/nagarkeerton',
        badgeImages: []
      }, {
        id: 'd49868f3-e483-47b6-b721-6a87b11b3b08',
        title: 'transgender',
        permalink: '/tag/transgender',
        badgeImages: []
      }, {
        id: '49728f29-5969-45a3-9913-87e023bb2f0a',
        title: 'trans woman',
        permalink: '/tag/trans-woman',
        badgeImages: []
      }, {
        id: '06ceec7c-a6ac-494d-a762-351a40c98ae8',
        title: 'trans',
        permalink: '/tag/trans',
        badgeImages: []
      }, {
        id: '495cf96b-b507-4846-a4f8-5581ab4dd401',
        title: 'lgbt',
        permalink: '/tag/lgbt',
        badgeImages: []
      }],
      creditBlocks: [{
        title: 'Director',
        credits: [{
          title: 'Kaushik Ganguly'
        }],
        containsHollywoodCelebrities: false,
        containsTVCelebrities: false
      }, {
        title: 'Starring',
        credits: [{
          title: 'Riddhi Sen'
        }, {
          title: 'Ritwick Chakraborty'
        }, {
          title: 'Bidipta Chakraborty'
        }, {
          title: 'Sujan Mukherjee'
        }, {
          title: 'Indrashish Roy'
        }],
        containsHollywoodCelebrities: false,
        containsTVCelebrities: false
      }],
      parentalRating: '18+',
      pricing: {
        type: 'SVOD',
        currency: 'USD',
        rent: null,
        purchase: null
      },
      monetizationModels: [],
      plans: [],
      showInAdvance: false,
      overridePrice: false,
      airTimezone: 'America/New_York',
      seasonAirTimezone: 'America/New_York',
      licenses: [],
      airDateTime: null,
      seasonAirDateTime: null,
      contentDetails: {
        videoImage: {
          secureUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/3/1596462099541_nagarkirtannew1280x720_16x9Images.jpg',
          name: '1596462099541_nagarkirtannew1280x720.jpg',
          id: '0972d502-bc85-41a1-9114-91eee532ff22',
          imageTag: '<img src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/3/1596462099541_nagarkirtannew1280x720_16x9Images.jpg" alt="" />',
          url: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/3/1596462099541_nagarkirtannew1280x720_16x9Images.jpg'
        },
        closedCaptions: [{
          fileName: '1594919493266_nagarkirtan.srt',
          format: 'SRT',
          language: 'English',
          url: 'https://cchoichoi.viewlift.com/2020/07/1594919493266_nagarkirtan.srt'
        }, {
          fileName: '1594920096807_nagarkirtan.vtt',
          format: 'VTT',
          language: 'English',
          url: 'https://cchoichoi.viewlift.com/2020/07/1594920096807_nagarkirtan.vtt'
        }],
        posterImage: {
          secureUrl: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/3/1596462106514_nagarkirtannew1098x1626_3x4Images.jpg',
          name: '1596462106514_nagarkirtannew1098x1626.jpg',
          id: '0c775e29-49af-40fa-a239-33994c145c22',
          imageTag: '<img src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/3/1596462106514_nagarkirtannew1098x1626_3x4Images.jpg" alt="" />',
          url: 'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/08/3/1596462106514_nagarkirtannew1098x1626_3x4Images.jpg'
        },
        promos: [],
        trailers: [{
          id: '2962bada-ca31-4642-b791-0f03eb2abd34',
          title: 'Nagarkirtan - Trailer'
        }],
        status: 'open'
      },
      streamingInfo: {
        isLiveStream: false
      },
      drmEnabled: false,
      optionalTags: [],
      seo: {
        keywords: ['nagarkirtan', 'nagarkirtan bengali movie', 'nagarkirtan bengali movie online', 'watch nagarkirtan online', 'watch nagarkirtan bengali movie online', 'nagarkirtan full movie', 'nagarkirtan full movie online', 'watch nagarkirtan full movie online', 'nagarkirtan hoichoi', 'hoichoi', 'hoichoi tv', 'hoichoi movies', 'bengali movies online', 'watch bengali movies online', 'bengali movies online streaming', 'nagarkirtan on hoichoi', 'kaushik ganguly movies', 'riddhi sen', 'ritwick chakraborty', 'bidipta chakraborty', 'sujan mukherjee', 'indrashish roy'],
        h2Title: 'Catch the online streaming of Nagarkirtan, Bengali movie on hoichoi',
        h1Title: 'Watch Bengali movie Nagarkirtan online on hoichoi',
        description: "Watch Nagarkirtan Bengali movie online on hoichoi. A woman trapped inside a man's body, falls in love with a flute player. Their love blossoms defying social conventions. Watch Nagarkirtan full movie on hoichoi.\n",
        title: 'Watch Nagarkirtan Movie Online'
      }
    }]
  }; // console.log({ videoDeatilsData });

  var initPopup = function initPopup() {
    if (!videoDeatilsData.length) return;
    var activeSlide = document.querySelector('.video-details-popup-parent');
    var carouselWrapper = document.querySelector('.video-details-popup-wrapper');
    var firstChildNode = carouselWrapper.childNodes[0];
    var lastChildNode = carouselWrapper.childNodes[carouselWrapper.childNodes.length - 1];
    carouselWrapper.insertBefore(lastChildNode.cloneNode(true), firstChildNode);
    carouselWrapper.appendChild(firstChildNode.cloneNode(true));
    activeSlide.classList.add('active');
    var prevSibling = activeSlide.previousSibling;
    var nextSibling = activeSlide.nextSibling;
    prevSibling.classList.add('prevSibling');
    nextSibling.classList.add('nextSibling');
  };

  if (openVideoPopup) {
    document.body.classList.add('no-scroll');
  }

  var handleVideoPopupClose = function handleVideoPopupClose() {
    onVideoPopupClosed(!openVideoPopup);
    document.body.classList.remove('no-scroll');
  };

  var nextButtonHandler = function nextButtonHandler() {
    var activeSlide = document.querySelector('.video-details-popup-parent.active');
    var slideIndex = activeSlide.dataset.index;
    var prevSibling = activeSlide.previousSibling;
    var nextSibling = activeSlide.nextSibling;

    if (nextSibling) {
      // console.log({ prevSibling });
      prevSibling.classList.remove('prevSibling'); // console.log({ activeSlide });

      activeSlide.classList.remove('active'); // console.log({ nextSibling });

      nextSibling.classList.remove('nextSibling');
      var carouselWrapper = document.querySelector('.video-details-popup-wrapper');
      var carouselChildren = carouselWrapper.children; // console.log(slideIndex == carouselChildren.length - 3);

      if (slideIndex == carouselChildren.length - 3) {
        var carouselWrapperNew = document.querySelector('.video-details-popup-wrapper');
        var carouselChildrenAt1Index = carouselWrapperNew.children[0];
        activeSlide = carouselChildrenAt1Index;
        nextSibling = activeSlide.nextSibling;
      }

      activeSlide.classList.add('prevSibling');
      nextSibling.classList.add('active');
      var nextToNextSibling = nextSibling.nextSibling;

      if (nextToNextSibling) {
        nextToNextSibling.classList.add('nextSibling');
      }
    }
  };

  var prevButtonHandler = function prevButtonHandler() {
    var activeSlide = document.querySelector('.video-details-popup-parent.active');
    var slideIndex = activeSlide.dataset.index;
    var prevSibling = activeSlide.previousSibling;
    var nextSibling = activeSlide.nextSibling;

    if (prevSibling) {
      prevSibling.classList.remove('prevSibling');
      activeSlide.classList.remove('active');
      if (nextSibling) nextSibling.classList.remove('nextSibling');

      if (slideIndex == 0) {
        var carouselWrapper = document.querySelector('.video-details-popup-wrapper');
        var carouselChildren = carouselWrapper.children;
        activeSlide = carouselChildren[carouselChildren.length - 1];
        prevSibling = activeSlide.previousSibling;
      }

      activeSlide.classList.add('nextSibling');
      prevSibling.classList.add('active');
      var prevToPrevSibling = prevSibling.previousSibling;

      if (prevToPrevSibling) {
        prevToPrevSibling.classList.add('prevSibling');
      }
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    initPopup();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-details-popup-container ".concat(openVideoPopup ? 'show' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-details-popup-wrapper"
  }, videoDeatilsData.map(function (videoData, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-popup-parent",
      "data-index": idx,
      key: "video-details-popup-".concat(idx)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-popup-image",
      style: {
        backgroundImage: "linear-gradient(235deg, rgba(21, 22, 25, 0) 46%, #0b0c0e), url(".concat(videoData.gist && videoData.gist.imageGist && videoData.gist.imageGist._16x9, ")")
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-popup-badge"
    }, "WORLD DIGITAL PREMIERE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-popup-title"
    }, videoData.gist && videoData.gist.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "video-details-feature-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "video-details-popup-age-restriction"
    }, "13+"), videoData.gist && videoData.gist.runtime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "video-details-popup-feature-item"
    }, Math.round(videoData.gist.runtime / 60), " mins"), videoData.gist && videoData.gist.year && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "video-details-popup-feature-item"
    }, videoData.gist.year), videoData.categories[0] && videoData.categories[0].title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "video-details-popup-feature-item"
    }, videoData.categories[0].title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-buttons-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-play-button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-play-icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.PlayIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-play-text"
    }, "Play Now")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-info-icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.InfoIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-plus-icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.PlusIcon, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-popup-close-icon",
      onClick: handleVideoPopupClose
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.PlusIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-additional-info-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-additional-upper-details"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-summary-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-summary-label"
    }, "Summary"), videoData.gist && videoData.gist.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-summary-text"
    }, videoData.gist.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-gap-between"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-action-credits-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-popup-credit-icons-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-popup-icon-text-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-popup-credit-heart-icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.HeartIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-popup-icon-text"
    }, "Like")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-popup-icon-text-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-popup-credit-share-icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.ShareIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-popup-icon-text"
    }, "Share")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-popup-icon-text-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-popup-credit-play-icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.PlayIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-popup-icon-text"
    }, "Watch trailer"))), videoData.creditBlocks.map(function (creditData) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "video-details-popup-credit-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "video-details-popup-credit-label"
      }, creditData.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "video-details-popup-credit-text"
      }, creditData.credits && creditData.credits.map(function (credits) {
        return credits.title;
      }).join(', ')));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "video-details-popup-related-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_VideoPopupRelated__WEBPACK_IMPORTED_MODULE_3__.default, {
      moduleData: moduleData
    }))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-details-popup-prev-button",
    onClick: prevButtonHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.NextIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-details-popup-next-button",
    onClick: nextButtonHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.NextIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-deatails-popup-overlay"
  }));
}

/***/ }),

/***/ "./src/client/components/VideoPopupRelated/index.js":
/*!**********************************************************!*\
  !*** ./src/client/components/VideoPopupRelated/index.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ VideoPopupRelated
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/VideoPopupRelated/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _VideoTile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../VideoTile */ "./src/client/components/VideoTile/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function VideoPopupRelated(_ref) {
  var moduleData = _ref.moduleData,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'short' : _ref$variant;
  var tiles = moduleData.contentData,
      title = moduleData.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "video-popup-related-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "video-popup-related-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "video-popup-related-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "video-popup-related-title"
  }, "Related to this title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "video-popup-related-video-tiles"
  }, tiles && tiles.map(function (tile, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_VideoTile__WEBPACK_IMPORTED_MODULE_4__.default // eslint-disable-next-line react/no-array-index-key
    , _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: "video-popup-related-".concat(index, "-").concat(variant)
    }, _objectSpread(_objectSpread({}, tile), {}, {
      variant: variant
    })));
  }))))));
}

/***/ }),

/***/ "./src/client/components/VideoTile/index.js":
/*!**************************************************!*\
  !*** ./src/client/components/VideoTile/index.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ VideoTile
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/VideoTile/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons */ "./src/client/components/Icons/index.js");



function VideoTile(_ref) {
  var gist = _ref.gist,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'short' : _ref$variant,
      ageRestriction = _ref.ageRestriction,
      featureText = _ref.featureText,
      color = _ref.color;
  var variantToSize = {
    "short": '_16x9',
    "long": '_9x16',
    cube: '_1x1',
    circle: '_1x1',
    genre: '_16x9',
    'extra-wide': '_32x9'
  };
  var imageRatioForSmallSizeLoading = {
    _16x9: 1.77,
    _9x16: 0.56,
    _1x1: 1,
    _32x9: 3.55
  };
  var imageUrl = gist && gist.imageGist && [variantToSize[variant]];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-wrapper video-tile-".concat(variant)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-parent" // style={{
    //   backgroundImage: `url(${imageUrl}), linear-gradient(#212121, #212121)`,
    // }}

  }, featureText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-new-label"
  }, featureText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-progress"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-long-hover-info-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-long-hover-title-action-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-long-hover-title ".concat(gist && gist.title)
  }, gist ? gist.title : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-long-hover-action-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-long-hover-play-icon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.PlayIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-long-hover-plus-icon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.PlusIcon, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "video-tile-long-hover-feature-list"
  }, ageRestriction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "video-tile-long-hover-feature-item video-tile-age-rating"
  }, ageRestriction), gist && gist.runtime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "video-tile-long-hover-feature-item"
  }, Math.round(gist.runtime / 60), " mins"), gist && gist.year && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "video-tile-long-hover-feature-item"
  }, gist.year), gist && gist.primaryCategory && gist.primaryCategory.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "video-tile-long-hover-feature-item"
  }, gist.primaryCategory.title)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-action-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-title",
    style: {
      '--genre-color': color ? "".concat(color, "6b") : '#b71c1c6b'
    }
  }, gist ? gist.title : '', ageRestriction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-age-rating"
  }, ageRestriction)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-icon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-play-icon video-tile-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.PlayIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-plus-icon video-tile-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.PlusIcon, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "video-tile-feature-list"
  }, gist && gist.runtime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, Math.round(gist.runtime / 60), " mins"), gist && gist.year && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, gist.year), gist && gist.primaryCategory && gist.primaryCategory.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, gist.primaryCategory.title)), gist && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "video-tile-description"
  }, gist.description))));
}

/***/ }),

/***/ "./src/client/components/VideoDetailsPopup/styles.css":
/*!************************************************************!*\
  !*** ./src/client/components/VideoDetailsPopup/styles.css ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/client/components/VideoPopupRelated/styles.css":
/*!************************************************************!*\
  !*** ./src/client/components/VideoPopupRelated/styles.css ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/client/components/VideoTile/styles.css":
/*!****************************************************!*\
  !*** ./src/client/components/VideoTile/styles.css ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nError: Can't resolve '../../assets/images/video-tile-1.jpg' in '/app/src/client/components/VideoTile'\n    at finishWithoutResolve (/app/node_modules/enhanced-resolve/lib/Resolver.js:293:18)\n    at /app/node_modules/enhanced-resolve/lib/Resolver.js:362:15\n    at /app/node_modules/enhanced-resolve/lib/Resolver.js:410:5\n    at eval (eval at create (/app/node_modules/enhanced-resolve/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at /app/node_modules/enhanced-resolve/lib/Resolver.js:410:5\n    at eval (eval at create (/app/node_modules/enhanced-resolve/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at /app/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:87:43\n    at /app/node_modules/enhanced-resolve/lib/Resolver.js:410:5\n    at eval (eval at create (/app/node_modules/enhanced-resolve/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /app/node_modules/enhanced-resolve/lib/Resolver.js:410:5\n    at processResult (/app/node_modules/webpack/lib/NormalModule.js:582:19)\n    at /app/node_modules/webpack/lib/NormalModule.js:675:5\n    at /app/node_modules/loader-runner/lib/LoaderRunner.js:397:11\n    at /app/node_modules/loader-runner/lib/LoaderRunner.js:252:18\n    at context.callback (/app/node_modules/loader-runner/lib/LoaderRunner.js:124:13)\n    at Object.loader (/app/node_modules/css-loader/dist/index.js:154:5)\n    at runMicrotasks (<anonymous>)\n    at processTicksAndRejections (internal/process/task_queues.js:93:5)");

/***/ })

}]);
//# sourceMappingURL=src_client_components_VideoDetailsPopup_index_js.js.map