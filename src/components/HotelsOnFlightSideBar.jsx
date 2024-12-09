import React, { useState, useEffect } from "react";
import useFlight from "../hooks/useFlight";
import { fetchData } from "../utility/fetcher";
import { formatNumber, getCheckoutDate } from "../utility/helper";
import { FlightSideBarButton } from "./FlightSideBarButton";
import { StarRating } from "./StarRating";

export const HotelsOnFlightSideBar = () => {
  const { flightParams } = useFlight();
  const [hotels, setHotels] = useState({
    searchStatus: {
      completionPercentage: 81,
      status: "PENDING",
      searchId:
        "8fa1057383f80547d873f475bc43ca8668660b20916c04a48aaa349d5b299985",
      firstPageStatus: "PENDING",
    },
    hotels: [
      {
        hotelId: "162596862",
        heroImage:
          "https://content.skyscnr.com/available/1087533149/1087533149_WxH.jpg",
        name: "Terminal 2 Transit Hotel Incheon Airport",
        stars: 0,
        brandIds: [],
        distance: "0.90 miles from Incheon International",
        relevantPoiDistance: null,
        coordinates: [126.43449, 37.46621],
        rating: {
          description: "Very Good",
          count: 58,
          value: "8.0",
          color: "colorMonteverde",
        },
        reviewSummary: {
          description: "Very Good",
          count: 58,
          formatCount: "58",
          value: "4.0",
          formatValue: "4.0",
          color: "colorMonteverde",
          taImage:
            "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-64600-4.png",
          confidenceBadge: {
            type: "location",
            score: 4.5,
            icon: "thumbs-up",
            color: {
              light: "colorMonteverde",
              dark: "colorMonteverde",
            },
            message: "Hotel location is rated 4.5/5",
          },
        },
        cheapestOffer: "none",
        offerTypes: "none",
        guestType: null,
        exclusiveDealLabel: null,
        pricesFrom: null,
        images: [
          "https://content.skyscnr.com/available/1087533149/1087533149_WxH.jpg",
          "https://content.skyscnr.com/available/1579488128/1579488128_WxH.jpg",
          "https://content.skyscnr.com/available/1645697507/1645697507_WxH.jpg",
        ],
        otherRates: [],
        priceDescription: "",
        taxPolicy: "Taxes and fees not included",
        rateFeatures: [],
        cheapestOfferPartnerName: null,
      },
      {
        hotelId: "204997091",
        heroImage:
          "https://content.skyscnr.com/available/1194898908/1194898908_WxH.jpg",
        name: "Cozy - Experience Home Like Comfort Studio",
        stars: 0,
        brandIds: [],
        distance: "0.60 miles from Incheon International",
        relevantPoiDistance: null,
        coordinates: [126.44136, 37.46448],
        price: "$35",
        cheapestOfferPartnerId: "h_ei",
        cheapestOfferRateId: null,
        rawPrice: 35,
        rating: null,
        cheapestOffer: "meta",
        offerTypes: "meta",
        guestType: null,
        exclusiveDealLabel: null,
        pricesFrom: "3 prices from",
        images: [
          "https://content.skyscnr.com/available/1194898908/1194898908_WxH.jpg",
          "https://content.skyscnr.com/available/1194898910/1194898910_WxH.jpg",
          "https://content.skyscnr.com/available/1710807431/1710807431_WxH.jpg",
        ],
        otherRates: [
          {
            partnerId: "h_bc",
            partnerName: "Booking.com",
            rawPrice: 35,
            price: "$35",
          },
          {
            partnerId: "h_ad",
            partnerName: "Agoda",
            rawPrice: 37,
            price: "$37",
          },
        ],
        priceDescription: "$35 for 1 night",
        taxPolicy: "Taxes and fees not included",
        rateFeatures: [],
        cheapestOfferPartnerName: "Edreams",
      },
      {
        hotelId: "216958916",
        heroImage:
          "https://content.skyscnr.com/available/1316600055/1316600055_WxH.jpg",
        name: "GOLDEN Tulip Incheon Airport Hotel & Suites",
        stars: 4,
        brandIds: [],
        distance: "2.80 miles from Incheon International",
        relevantPoiDistance: null,
        coordinates: [126.492432, 37.492272],
        price: "$45",
        cheapestOfferPartnerId: "h_ct",
        cheapestOfferRateId: null,
        rawPrice: 45,
        rating: {
          description: "Very Good",
          count: 1709,
          value: "8.8",
          color: "colorMonteverde",
        },
        reviewSummary: {
          description: "Very Good",
          count: 1709,
          formatCount: "1,709",
          value: "4.4",
          formatValue: "4.4",
          color: "colorMonteverde",
          taImage: null,
          confidenceBadge: {
            type: "location",
            score: 4.6,
            icon: "thumbs-up",
            color: {
              light: "colorMonteverde",
              dark: "colorMonteverde",
            },
            message: "Hotel location is rated 4.6/5",
          },
        },
        cheapestOffer: "meta",
        offerTypes: "meta",
        guestType: null,
        exclusiveDealLabel: null,
        pricesFrom: "8 prices from",
        images: [
          "https://content.skyscnr.com/available/1316600055/1316600055_WxH.jpg",
          "https://content.skyscnr.com/available/1301931106/1301931106_WxH.jpg",
          "https://content.skyscnr.com/available/1730078282/1730078282_WxH.jpg",
        ],
        otherRates: [
          {
            partnerId: "h_kl",
            partnerName: "Klook",
            rawPrice: 54,
            price: "$54",
          },
          {
            partnerId: "h_hc",
            partnerName: "Hotels.com",
            rawPrice: 65,
            price: "$65",
          },
          {
            partnerId: "h_xp",
            partnerName: "Expedia",
            rawPrice: 65,
            price: "$65",
          },
          {
            partnerId: "h_tc",
            partnerName: "Travelocity",
            rawPrice: 65,
            price: "$65",
          },
          {
            partnerId: "h_t8",
            partnerName: "Travala.com",
            rawPrice: 65,
            price: "$65",
          },
          {
            partnerId: "h_su",
            partnerName: "Stayforlong",
            rawPrice: 65,
            price: "$65",
          },
          {
            partnerId: "h_pi",
            partnerName: "Prestigia",
            rawPrice: 86,
            price: "$86",
          },
        ],
        priceDescription: "$45 for 1 night",
        taxPolicy: "Taxes and fees not included",
        rateFeatures: [],
        cheapestOfferPartnerName: "Trip.com",
      },
      {
        hotelId: "200550912",
        heroImage:
          "https://content.skyscnr.com/available/1393866438/1393866438_WxH.jpg",
        name: "Days Hotel & Suites by Wyndham Incheon Airport",
        stars: 4,
        brandIds: ["90718345", "90719189"],
        distance: "2.85 miles from Incheon International",
        relevantPoiDistance: null,
        coordinates: [126.49239, 37.49356],
        price: "$45",
        cheapestOfferPartnerId: "h_ad",
        cheapestOfferRateId: null,
        rawPrice: 45,
        rating: {
          description: "Very Good",
          count: 104,
          value: "8.0",
          color: "colorMonteverde",
        },
        reviewSummary: {
          description: "Very Good",
          count: 104,
          formatCount: "104",
          value: "4.0",
          formatValue: "4.0",
          color: "colorMonteverde",
          taImage:
            "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-64600-4.png",
          confidenceBadge: {
            type: "location",
            score: 4.5,
            icon: "thumbs-up",
            color: {
              light: "colorMonteverde",
              dark: "colorMonteverde",
            },
            message: "Hotel location is rated 4.5/5",
          },
        },
        cheapestOffer: "meta",
        offerTypes: "meta",
        guestType: null,
        exclusiveDealLabel: null,
        pricesFrom: "3 prices from",
        images: [
          "https://content.skyscnr.com/available/1393866438/1393866438_WxH.jpg",
          "https://content.skyscnr.com/available/1545456629/1545456629_WxH.jpg",
          "https://content.skyscnr.com/available/1499710061/1499710061_WxH.jpg",
        ],
        otherRates: [
          {
            partnerId: "h_ct",
            partnerName: "Trip.com",
            rawPrice: 47,
            price: "$47",
          },
          {
            partnerId: "h_pr",
            partnerName: "Priceline",
            rawPrice: 47,
            price: "$47",
          },
        ],
        priceDescription: "$45 for 1 night",
        taxPolicy: "Taxes and fees not included",
        rateFeatures: [],
        cheapestOfferPartnerName: "Agoda",
      },
      {
        hotelId: "212843163",
        heroImage:
          "https://content.skyscnr.com/available/1348344337/1348344337_WxH.jpg",
        name: "Incheon the Hotel Yeongjong",
        stars: 4,
        brandIds: [],
        distance: "2.88 miles from Incheon International",
        relevantPoiDistance: null,
        coordinates: [126.49172, 37.495016],
        price: "$40",
        cheapestOfferPartnerId: "h_hc",
        cheapestOfferRateId: null,
        rawPrice: 40,
        rating: {
          description: "Good",
          count: 61,
          value: "7.6",
          color: "colorKolkata",
        },
        reviewSummary: {
          description: "Good",
          count: 61,
          formatCount: "61",
          value: "3.8",
          formatValue: "3.8",
          color: "colorMonteverde",
          taImage: null,
        },
        cheapestOffer: "meta",
        offerTypes: "meta",
        guestType: null,
        exclusiveDealLabel: null,
        pricesFrom: "7 prices from",
        images: [
          "https://content.skyscnr.com/available/1348344337/1348344337_WxH.jpg",
          "https://content.skyscnr.com/available/1498787994/1498787994_WxH.jpg",
          "https://content.skyscnr.com/available/1551913290/1551913290_WxH.jpg",
        ],
        otherRates: [
          {
            partnerId: "h_xp",
            partnerName: "Expedia",
            rawPrice: 40,
            price: "$40",
          },
          {
            partnerId: "h_tc",
            partnerName: "Travelocity",
            rawPrice: 40,
            price: "$40",
          },
          {
            partnerId: "h_ei",
            partnerName: "Edreams",
            rawPrice: 43,
            price: "$43",
          },
          {
            partnerId: "h_bc",
            partnerName: "Booking.com",
            rawPrice: 43,
            price: "$43",
          },
          {
            partnerId: "h_t8",
            partnerName: "Travala.com",
            rawPrice: 43,
            price: "$43",
          },
          {
            partnerId: "h_ct",
            partnerName: "Trip.com",
            rawPrice: 44,
            price: "$44",
          },
        ],
        priceDescription: "$40 for 1 night",
        taxPolicy: "Taxes and fees not included",
        rateFeatures: [],
        cheapestOfferPartnerName: "Hotels.com",
      },
      {
        hotelId: "137721106",
        heroImage:
          "https://content.skyscnr.com/available/1382581395/1382581395_WxH.jpg",
        name: "Incheon Airporthotel Airstay",
        stars: 3,
        brandIds: [],
        distance: "2.77 miles from Incheon International",
        relevantPoiDistance: null,
        coordinates: [126.489689, 37.494456],
        price: "$29",
        cheapestOfferPartnerId: "h_ct",
        cheapestOfferRateId: null,
        rawPrice: 29,
        rating: {
          description: "Very Good",
          count: 56,
          value: "8.2",
          color: "colorMonteverde",
        },
        reviewSummary: {
          description: "Very Good",
          count: 56,
          formatCount: "56",
          value: "4.1",
          formatValue: "4.1",
          color: "colorMonteverde",
          taImage: null,
        },
        cheapestOffer: "meta",
        offerTypes: "meta",
        guestType: null,
        exclusiveDealLabel: null,
        pricesFrom: "8 prices from",
        images: [
          "https://content.skyscnr.com/available/1382581395/1382581395_WxH.jpg",
          "https://content.skyscnr.com/available/1820535701/1820535701_WxH.jpg",
          "https://content.skyscnr.com/available/1192968119/1192968119_WxH.jpg",
        ],
        otherRates: [
          {
            partnerId: "h_ad",
            partnerName: "Agoda",
            rawPrice: 32,
            price: "$32",
          },
          {
            partnerId: "h_ei",
            partnerName: "Edreams",
            rawPrice: 37,
            price: "$37",
          },
          {
            partnerId: "h_bc",
            partnerName: "Booking.com",
            rawPrice: 37,
            price: "$37",
          },
          {
            partnerId: "h_hc",
            partnerName: "Hotels.com",
            rawPrice: 38,
            price: "$38",
          },
          {
            partnerId: "h_xp",
            partnerName: "Expedia",
            rawPrice: 38,
            price: "$38",
          },
          {
            partnerId: "h_tc",
            partnerName: "Travelocity",
            rawPrice: 38,
            price: "$38",
          },
          {
            partnerId: "h_pr",
            partnerName: "Priceline",
            rawPrice: 42,
            price: "$42",
          },
        ],
        priceDescription: "$29 for 1 night",
        taxPolicy: "Taxes and fees not included",
        rateFeatures: [
          {
            key: "free_cancellation",
            text: "Free cancellation",
            color: {
              light: "colorAbisko",
              dark: "colorValensole",
            },
          },
        ],
        cheapestOfferPartnerName: "Trip.com",
      },
      {
        hotelId: "47022050",
        heroImage:
          "https://content.skyscnr.com/available/1534616682/1534616682_WxH.jpg",
        name: "Grand Hyatt Incheon",
        stars: 5,
        brandIds: [],
        distance: "2.01 miles from Incheon International",
        relevantPoiDistance: null,
        coordinates: [126.45811, 37.44074],
        price: "$161",
        cheapestOfferPartnerId: "h_su",
        cheapestOfferRateId: null,
        rawPrice: 161,
        rating: {
          description: "Excellent",
          count: 4831,
          value: "9.0",
          color: "colorMonteverde",
        },
        reviewSummary: {
          description: "Excellent",
          count: 4831,
          formatCount: "4,831",
          value: "4.5",
          formatValue: "4.5",
          color: "colorMonteverde",
          taImage:
            "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-64600-4.png",
          confidenceBadge: {
            type: "location",
            score: 4.5,
            icon: "thumbs-up",
            color: {
              light: "colorMonteverde",
              dark: "colorMonteverde",
            },
            message: "Hotel location is rated 4.5/5",
          },
        },
        cheapestOffer: "meta",
        offerTypes: "meta",
        guestType: null,
        exclusiveDealLabel: null,
        pricesFrom: "11 prices from",
        images: [
          "https://content.skyscnr.com/available/1534616682/1534616682_WxH.jpg",
          "https://content.skyscnr.com/available/1743620869/1743620869_WxH.jpg",
          "https://content.skyscnr.com/available/1751506329/1751506329_WxH.jpg",
        ],
        otherRates: [
          {
            partnerId: "h_tt",
            partnerName: "Algotels",
            rawPrice: 173,
            price: "$173",
          },
          {
            partnerId: "h_kl",
            partnerName: "Klook",
            rawPrice: 182,
            price: "$182",
          },
          {
            partnerId: "h_hc",
            partnerName: "Hotels.com",
            rawPrice: 183,
            price: "$183",
          },
          {
            partnerId: "h_xp",
            partnerName: "Expedia",
            rawPrice: 183,
            price: "$183",
          },
          {
            partnerId: "h_tc",
            partnerName: "Travelocity",
            rawPrice: 183,
            price: "$183",
          },
          {
            partnerId: "h_t8",
            partnerName: "Travala.com",
            rawPrice: 183,
            price: "$183",
          },
          {
            partnerId: "h_ad",
            partnerName: "Agoda",
            rawPrice: 183,
            price: "$183",
          },
          {
            partnerId: "h_ei",
            partnerName: "Edreams",
            rawPrice: 183,
            price: "$183",
          },
          {
            partnerId: "h_bc",
            partnerName: "Booking.com",
            rawPrice: 183,
            price: "$183",
          },
          {
            partnerId: "h_pr",
            partnerName: "Priceline",
            rawPrice: 183,
            price: "$183",
          },
        ],
        priceDescription: "$161 for 1 night",
        taxPolicy: "Taxes and fees not included",
        rateFeatures: [],
        cheapestOfferPartnerName: "Stayforlong",
      },
      {
        hotelId: "71782816",
        heroImage:
          "https://content.skyscnr.com/available/1459934013/1459934013_WxH.jpg",
        name: "Best Western Premier Incheon Airport Hotel",
        stars: 4,
        brandIds: [],
        distance: "2.14 miles from Incheon International",
        relevantPoiDistance: null,
        coordinates: [126.45985, 37.43909],
        price: "$58",
        cheapestOfferPartnerId: "h_m3",
        cheapestOfferRateId: null,
        rawPrice: 58,
        rating: {
          description: "Good",
          count: 810,
          value: "7.0",
          color: "colorKolkata",
        },
        reviewSummary: {
          description: "Good",
          count: 810,
          formatCount: "810",
          value: "3.5",
          formatValue: "3.5",
          color: "colorKolkata",
          taImage:
            "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/3.5-64600-4.png",
        },
        cheapestOffer: "meta",
        offerTypes: "meta",
        guestType: null,
        exclusiveDealLabel: null,
        pricesFrom: "12 prices from",
        images: [
          "https://content.skyscnr.com/available/1459934013/1459934013_WxH.jpg",
          "https://content.skyscnr.com/available/677075823/677075823_WxH.jpg",
          "https://content.skyscnr.com/available/677075844/677075844_WxH.jpg",
        ],
        otherRates: [
          {
            partnerId: "h_ei",
            partnerName: "Edreams",
            rawPrice: 59,
            price: "$59",
          },
          {
            partnerId: "h_bc",
            partnerName: "Booking.com",
            rawPrice: 59,
            price: "$59",
          },
          {
            partnerId: "h_ad",
            partnerName: "Agoda",
            rawPrice: 60,
            price: "$60",
          },
          {
            partnerId: "h_bw",
            partnerName: "Best Western",
            rawPrice: 64,
            price: "$64",
          },
          {
            partnerId: "h_pr",
            partnerName: "Priceline",
            rawPrice: 66,
            price: "$66",
          },
          {
            partnerId: "h_dt",
            partnerName: "Destinia",
            rawPrice: 67,
            price: "$67",
          },
          {
            partnerId: "h_hc",
            partnerName: "Hotels.com",
            rawPrice: 67,
            price: "$67",
          },
          {
            partnerId: "h_xp",
            partnerName: "Expedia",
            rawPrice: 67,
            price: "$67",
          },
          {
            partnerId: "h_tc",
            partnerName: "Travelocity",
            rawPrice: 67,
            price: "$67",
          },
          {
            partnerId: "h_t8",
            partnerName: "Travala.com",
            rawPrice: 67,
            price: "$67",
          },
          {
            partnerId: "h_su",
            partnerName: "Stayforlong",
            rawPrice: 75,
            price: "$75",
          },
        ],
        priceDescription: "$58 for 1 night",
        taxPolicy: "Taxes and fees not included",
        rateFeatures: [],
        cheapestOfferPartnerName: "Morerooms",
      },
      {
        hotelId: "134584477",
        heroImage:
          "https://content.skyscnr.com/available/1388705120/1388705120_WxH.jpg",
        name: "Incheon Aiport Airrelax Hotel",
        stars: 3,
        brandIds: [],
        distance: "2.76 miles from Incheon International",
        relevantPoiDistance: null,
        coordinates: [126.489448, 37.494451],
        price: "$37",
        cheapestOfferPartnerId: "h_ad",
        cheapestOfferRateId: null,
        rawPrice: 37,
        rating: {
          description: "Very Good",
          count: 39,
          value: "8.2",
          color: "colorMonteverde",
        },
        reviewSummary: {
          description: "Very Good",
          count: 39,
          formatCount: "39",
          value: "4.1",
          formatValue: "4.1",
          color: "colorMonteverde",
          taImage: null,
        },
        cheapestOffer: "meta",
        offerTypes: "meta",
        guestType: null,
        exclusiveDealLabel: null,
        pricesFrom: "6 prices from",
        images: [
          "https://content.skyscnr.com/available/1388705120/1388705120_WxH.jpg",
          "https://content.skyscnr.com/available/1818454175/1818454175_WxH.jpg",
          "https://content.skyscnr.com/available/1818454080/1818454080_WxH.jpg",
        ],
        otherRates: [
          {
            partnerId: "h_pr",
            partnerName: "Priceline",
            rawPrice: 37,
            price: "$37",
          },
          {
            partnerId: "h_ct",
            partnerName: "Trip.com",
            rawPrice: 39,
            price: "$39",
          },
          {
            partnerId: "h_ei",
            partnerName: "Edreams",
            rawPrice: 41,
            price: "$41",
          },
          {
            partnerId: "h_bc",
            partnerName: "Booking.com",
            rawPrice: 41,
            price: "$41",
          },
          {
            partnerId: "h_tt",
            partnerName: "Algotels",
            rawPrice: 45,
            price: "$45",
          },
        ],
        priceDescription: "$37 for 1 night",
        taxPolicy: "Taxes and fees not included",
        rateFeatures: [],
        cheapestOfferPartnerName: "Agoda",
      },
      {
        hotelId: "136928473",
        heroImage:
          "https://content.skyscnr.com/available/1389485406/1389485406_WxH.jpg",
        name: "Incheon Airtel",
        stars: 3,
        brandIds: [],
        distance: "2.78 miles from Incheon International",
        relevantPoiDistance: null,
        coordinates: [126.489909, 37.494437],
        price: "$38",
        cheapestOfferPartnerId: "h_ad",
        cheapestOfferRateId: null,
        rawPrice: 38,
        rating: {
          description: "Very Good",
          count: 98,
          value: "8.0",
          color: "colorMonteverde",
        },
        reviewSummary: {
          description: "Very Good",
          count: 98,
          formatCount: "98",
          value: "4.0",
          formatValue: "4.0",
          color: "colorMonteverde",
          taImage:
            "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-64600-4.png",
        },
        cheapestOffer: "meta",
        offerTypes: "meta",
        guestType: null,
        exclusiveDealLabel: null,
        pricesFrom: "9 prices from",
        images: [
          "https://content.skyscnr.com/available/1389485406/1389485406_WxH.jpg",
          "https://content.skyscnr.com/available/1772010110/1772010110_WxH.jpg",
          "https://content.skyscnr.com/available/1768861209/1768861209_WxH.jpg",
        ],
        otherRates: [
          {
            partnerId: "h_ct",
            partnerName: "Trip.com",
            rawPrice: 38,
            price: "$38",
          },
          {
            partnerId: "h_hc",
            partnerName: "Hotels.com",
            rawPrice: 39,
            price: "$39",
          },
          {
            partnerId: "h_xp",
            partnerName: "Expedia",
            rawPrice: 39,
            price: "$39",
          },
          {
            partnerId: "h_tc",
            partnerName: "Travelocity",
            rawPrice: 39,
            price: "$39",
          },
          {
            partnerId: "h_t8",
            partnerName: "Travala.com",
            rawPrice: 40,
            price: "$40",
          },
          {
            partnerId: "h_ei",
            partnerName: "Edreams",
            rawPrice: 45,
            price: "$45",
          },
          {
            partnerId: "h_tt",
            partnerName: "Algotels",
            rawPrice: 45,
            price: "$45",
          },
          {
            partnerId: "h_bc",
            partnerName: "Booking.com",
            rawPrice: 45,
            price: "$45",
          },
        ],
        priceDescription: "$38 for 1 night",
        taxPolicy: "Taxes and fees not included",
        rateFeatures: [],
        cheapestOfferPartnerName: "Agoda",
      },
    ],
    nightsForPrice: "Per night",
    filters: [
      {
        type: "price_buckets",
        title: "Price",
        values: [
          {
            id: "PR_BK_0",
            label: "PR_BK_0",
            minPrice: 0,
            maxPrice: 50,
            count: 0,
          },
          {
            id: "PR_BK_1",
            label: "PR_BK_1",
            minPrice: 50,
            maxPrice: 100,
            count: 0,
          },
          {
            id: "PR_BK_2",
            label: "PR_BK_2",
            minPrice: 100,
            maxPrice: 150,
            count: 0,
          },
          {
            id: "PR_BK_3",
            label: "PR_BK_3",
            minPrice: 150,
            maxPrice: 200,
            count: 0,
          },
          {
            id: "PR_BK_4",
            label: "PR_BK_4",
            minPrice: 200,
            maxPrice: 250,
            count: 0,
          },
          {
            id: "PR_BK_5",
            label: "PR_BK_5",
            minPrice: 250,
            maxPrice: null,
            count: 0,
          },
        ],
      },
      {
        type: "stars",
        title: "Star rating",
        values: [
          {
            id: "5",
            label: "5 stars",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "4",
            label: "4 stars",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "3",
            label: "3 stars",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "2",
            label: "2 stars",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "1",
            label: "1 star",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "no_stars",
            label: "Unrated",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
        ],
      },
      {
        type: "meal_plan",
        title: "Meal plan",
        values: [
          {
            id: "breakfast_included",
            label: "Breakfast included",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "RoomRates_label_mealsNotIncluded",
            label: "Meals not included",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
        ],
      },
      {
        type: "guest_rating",
        title: "Guest rating",
        values: [
          {
            id: "6",
            label: "Satisfactory",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "7",
            label: "Good",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "8",
            label: "Very Good",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "9",
            label: "Excellent",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "9.5",
            label: "Outstanding",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
        ],
      },
      {
        type: "rating",
        title: "Guest rating",
        values: [
          {
            id: "3",
            label: "Satisfactory",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "3.5",
            label: "Good",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "4",
            label: "Very Good",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "4.5",
            label: "Excellent",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "5",
            label: "Outstanding",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
        ],
      },
      {
        type: "guest_type",
        title: "Popular with",
        values: [
          {
            id: "business",
            label: "Business travelers",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "couple",
            label: "Couples",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "family",
            label: "Families",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "solo",
            label: "Solo travelers",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
        ],
      },
      {
        type: "cancellation",
        title: "Cancellation policy",
        values: [
          {
            id: "free_cancellation",
            label: "Free cancellation",
            minPrice: null,
            maxPrice: null,
            count: 0,
            type: "cancellation",
            linkageType: "covid",
          },
          {
            id: "refundable",
            label: "Refundable",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "non_refundable",
            label: "Non-Refundable",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
        ],
      },
      {
        type: "property_type",
        title: "Accommodation type",
        values: [
          {
            id: "Hotel",
            label: "Hotel",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "Hostel",
            label: "Hostel",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "GuestHouse",
            label: "Guest House",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "Resort",
            label: "Resort",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "UniqueStays",
            label: "Unique stays",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "HolidayRentals",
            label: "Vacation rentals",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
          {
            id: "Apartment",
            label: "Apartment",
            minPrice: null,
            maxPrice: null,
            count: 0,
          },
        ],
      },
      {
        type: "discounts",
        title: "Deals",
        values: [
          {
            id: "1",
            label: "Show discounts",
          },
        ],
      },
    ],
    sortOptions: [
      {
        optionName: "Best",
        type: "-relevance",
      },
      {
        optionName: "Price (high to low)",
        type: "-price",
      },
      {
        optionName: "Price (low to high)",
        type: "price",
      },
      {
        optionName: "Distance from Incheon International",
        type: "distance",
      },
      {
        optionName: "Guest rating",
        type: "-hotel_rating",
      },
      {
        optionName: "Stars (5 to 1)",
        type: "-stars",
      },
      {
        optionName: "Stars (1 to 5)",
        type: "stars",
      },
    ],
    closedUserGroupDeals: [],
    pricePolicy: "Taxes and fees not included",
    mapBoundary: {
      n_e_lat: 37.50116786,
      s_w_lat: 37.426730354,
      n_e_lng: 126.49474968,
      s_w_lng: 126.43217231999999,
    },
    hotelPivot: null,
    medianMinPrice: null,
    entity: {
      name: "Incheon International",
      centroid: {
        coordinates: [126.450554, 37.469166],
        type: "Point",
      },
      entity_type: "Airport",
      official_center: null,
      entity_id: "95673659",
      levelOfEntityType: null,
    },
    location: [
      {
        name: "Seoul",
        entity_id: "27538638",
        entity_type: "City",
      },
      {
        name: "Seoul",
        entity_id: "44292722",
        entity_type: "FirstLevelNationAdministrativeDivision",
      },
      {
        name: "South Korea",
        entity_id: "29475329",
        entity_type: "Nation",
      },
    ],
    priceType: "per",
    localCurrency: "KRW",
    hotelsCoordinates: [
      {
        longitude: 126.43449,
        latitude: 37.46621,
        hotelId: "162596862",
      },
      {
        longitude: 126.44136,
        latitude: 37.46448,
        hotelId: "204997091",
      },
      {
        longitude: 126.492432,
        latitude: 37.492272,
        hotelId: "216958916",
      },
      {
        longitude: 126.49239,
        latitude: 37.49356,
        hotelId: "200550912",
      },
      {
        longitude: 126.49172,
        latitude: 37.495016,
        hotelId: "212843163",
      },
      {
        longitude: 126.489689,
        latitude: 37.494456,
        hotelId: "137721106",
      },
      {
        longitude: 126.45811,
        latitude: 37.44074,
        hotelId: "47022050",
      },
      {
        longitude: 126.45985,
        latitude: 37.43909,
        hotelId: "71782816",
      },
      {
        longitude: 126.489448,
        latitude: 37.494451,
        hotelId: "134584477",
      },
      {
        longitude: 126.489909,
        latitude: 37.494437,
        hotelId: "136928473",
      },
    ],
    hotelsRegion: null,
    totalHotels: 0,
    totalHotelsFiltered: 0,
    pois: [
      {
        name: "Incheon International",
        type: "Transportation",
        sub_poi_type: "Airport",
        id: 95673659,
        is_extend: null,
        coordinate: [126.450556, 37.469167],
        image_url: null,
      },
      {
        name: "Gimpo International",
        type: "Transportation",
        sub_poi_type: "Airport",
        id: 128668604,
        is_extend: null,
        coordinate: [126.785278, 37.551111],
        image_url: null,
      },
      {
        name: "Dongdaemun",
        type: "Landmark",
        sub_poi_type: "TouristAttraction",
        id: 206568617,
        is_extend: null,
        coordinate: [127.01102810000002, 37.5716184515439],
        image_url: null,
      },
      {
        name: "Hongik Univ.",
        type: "Transportation",
        sub_poi_type: "MetroStation",
        id: 205747132,
        is_extend: null,
        coordinate: [126.923611, 37.556667],
        image_url: null,
      },
      {
        name: "Nampyeonghwa Sangga",
        type: "Shopping",
        sub_poi_type: "ShoppingMall",
        id: 212184085,
        is_extend: null,
        coordinate: [127.01081, 37.569164],
        image_url: null,
      },
    ],
    discountAnalysis: {
      couponHotels: [],
      couponRanks: [],
      couponAmounts: [],
      discountPercentage: null,
      couponType: null,
      hasCugDeal: false,
      cugHotels: [],
      cugRanks: [],
      cugAmounts: [],
    },
    outBoundIndex: -1,
    partners: [
      "Booking.com",
      "Trip.com",
      "Hotels.com",
      "Hyatt",
      "Expedia",
      "IHG",
    ],
    covidFilter: {
      title: "",
      filterOptions: [],
      switcherOptions: [],
    },
    poiFilter: {
      entity: null,
      defaultPoiItem: null,
      poiFilterTitle: "From where?",
      poiRecommendCardTitle: "Search for hotels close to",
      poiTypeIconMapping: {
        Beach: "beach",
        Landmark: "landmark",
        Entertainment: "bar",
        Shopping: "deals",
        Transportation: "cars",
        Education: "education",
      },
      translations: {
        Beach: "Beach",
        Landmark: "Landmark",
        Entertainment: "Entertainment",
        Shopping: "Shopping",
        Transportation: "Transportation",
        Education: "Education",
      },
      quickSelectOptions: [
        {
          name: "Dongdaemun",
          type: "Landmark",
          sub_poi_type: "TouristAttraction",
          id: "206568617",
          coordinate: "127.01102810000002,37.5716184515439",
          image_url: null,
          icon: "landmark",
        },
        {
          name: "Lotte World Adventure",
          type: "Entertainment",
          sub_poi_type: "AmusementPark",
          id: "214192453",
          coordinate: "127.098167,37.5111158",
          image_url: null,
          icon: "bar",
        },
        {
          name: "Nampyeonghwa Sangga",
          type: "Shopping",
          sub_poi_type: "ShoppingMall",
          id: "212184085",
          coordinate: "127.01081,37.569164",
          image_url: null,
          icon: "deals",
        },
        {
          name: "Incheon International",
          type: "Transportation",
          sub_poi_type: "Airport",
          id: "95673659",
          coordinate: "126.450556,37.469167",
          image_url: null,
          icon: "cars",
        },
        {
          name: "Hongik University, Seoul Campus",
          type: "Education",
          sub_poi_type: "UniversityBuilding",
          id: "207983140",
          coordinate: "126.9254901,37.5507563",
          image_url: null,
          icon: "education",
        },
      ],
      allOptions: [
        {
          name: "Dongdaemun",
          type: "Landmark",
          sub_poi_type: "TouristAttraction",
          id: "206568617",
          coordinate: "127.01102810000002,37.5716184515439",
          image_url: null,
          icon: "landmark",
        },
        {
          name: "Olympic Park",
          type: "Landmark",
          sub_poi_type: "TouristAttraction",
          id: "206570596",
          coordinate: "127.12149410000005,37.520686800000036",
          image_url:
            "https://content.skyscnr.com/POI/206570596/1740377/1740377_WxH.jpg",
          icon: "landmark",
        },
        {
          name: "COEX",
          type: "Landmark",
          sub_poi_type: "TouristAttraction",
          id: "206568622",
          coordinate: "127.058586,37.510193",
          image_url: null,
          icon: "landmark",
        },
        {
          name: "Namsan Park",
          type: "Landmark",
          sub_poi_type: "TouristAttraction",
          id: "206568571",
          coordinate: "126.99089357810979,37.55099311458576",
          image_url:
            "https://content.skyscnr.com/POI/206568571/2870489/2870489_WxH.jpg",
          icon: "landmark",
        },
        {
          name: "Cheongdam Dong",
          type: "Landmark",
          sub_poi_type: "TouristAttraction",
          id: "206568616",
          coordinate: "127.04866549999997,37.52319979999999",
          image_url: null,
          icon: "landmark",
        },
        {
          name: "Lotte World Adventure",
          type: "Entertainment",
          sub_poi_type: "AmusementPark",
          id: "214192453",
          coordinate: "127.098167,37.5111158",
          image_url: null,
          icon: "bar",
        },
        {
          name: "Olympic Stadium",
          type: "Entertainment",
          sub_poi_type: "Stadium",
          id: "209644787",
          coordinate: "127.0727986,37.5158376",
          image_url: null,
          icon: "bar",
        },
        {
          name: "Gravity Studio Wangsimni",
          type: "Entertainment",
          sub_poi_type: "Stadium",
          id: "221414534",
          coordinate: "127.0260599,37.5671464",
          image_url: null,
          icon: "bar",
        },
        {
          name: "Mary Hall",
          type: "Entertainment",
          sub_poi_type: "TheatreHall",
          id: "219797631",
          coordinate: "126.9407371,37.5513353",
          image_url: null,
          icon: "bar",
        },
        {
          name: "sigma sports club",
          type: "Entertainment",
          sub_poi_type: "Stadium",
          id: "221572152",
          coordinate: "126.9782444,37.5683953",
          image_url: null,
          icon: "bar",
        },
        {
          name: "Incheon International",
          type: "Transportation",
          sub_poi_type: "Airport",
          id: "95673659",
          coordinate: "126.450556,37.469167",
          image_url: null,
          icon: "cars",
        },
        {
          name: "Gimpo International",
          type: "Transportation",
          sub_poi_type: "Airport",
          id: "128668604",
          coordinate: "126.785278,37.551111",
          image_url: null,
          icon: "cars",
        },
        {
          name: "Hongik Univ.",
          type: "Transportation",
          sub_poi_type: "MetroStation",
          id: "205747132",
          coordinate: "126.923611,37.556667",
          image_url: null,
          icon: "cars",
        },
        {
          name: "Yeongdeungpo station",
          type: "Transportation",
          sub_poi_type: "MetroStation",
          id: "205756639",
          coordinate: "126.9077778,37.5155556",
          image_url: null,
          icon: "cars",
        },
        {
          name: "Gongdeok station",
          type: "Transportation",
          sub_poi_type: "MetroStation",
          id: "205756695",
          coordinate: "126.9511111,37.5430556",
          image_url: null,
          icon: "cars",
        },
        {
          name: "Nampyeonghwa Sangga",
          type: "Shopping",
          sub_poi_type: "ShoppingMall",
          id: "212184085",
          coordinate: "127.01081,37.569164",
          image_url: null,
          icon: "deals",
        },
        {
          name: "Shinsegae Duty Free（Myeong-dong Branch）",
          type: "Shopping",
          sub_poi_type: "ShoppingMall",
          id: "208070609",
          coordinate: "126.98077599999988,37.56026935913556",
          image_url: null,
          icon: "deals",
        },
        {
          name: "apM PLACE",
          type: "Shopping",
          sub_poi_type: "ShoppingMall",
          id: "208343118",
          coordinate: "127.007994,37.565765",
          image_url: null,
          icon: "deals",
        },
        {
          name: "The Shilla Duty Free（Seoul）",
          type: "Shopping",
          sub_poi_type: "ShoppingMall",
          id: "207977268",
          coordinate: "127.007633,37.5571977",
          image_url: null,
          icon: "deals",
        },
        {
          name: "Migliore",
          type: "Shopping",
          sub_poi_type: "ShoppingMall",
          id: "218489630",
          coordinate: "126.9845097,37.5610141",
          image_url: null,
          icon: "deals",
        },
        {
          name: "Hongik University, Seoul Campus",
          type: "Education",
          sub_poi_type: "UniversityBuilding",
          id: "207983140",
          coordinate: "126.9254901,37.5507563",
          image_url: null,
          icon: "education",
        },
        {
          name: "Ewha Womans University",
          type: "Education",
          sub_poi_type: "UniversityBuilding",
          id: "207983174",
          coordinate: "126.9468339,37.5618588",
          image_url: null,
          icon: "education",
        },
        {
          name: "Konkuk University",
          type: "Education",
          sub_poi_type: "UniversityBuilding",
          id: "207982943",
          coordinate: "127.079345703125,37.54076385498047",
          image_url: null,
          icon: "education",
        },
        {
          name: "Korea University",
          type: "Education",
          sub_poi_type: "UniversityBuilding",
          id: "207982930",
          coordinate: "127.02799987792969,37.59080123901367",
          image_url:
            "https://content.skyscnr.com/POI/207982930/1975769/1975769_WxH.jpg",
          icon: "education",
        },
        {
          name: "Yonsei University",
          type: "Education",
          sub_poi_type: "UniversityBuilding",
          id: "207982931",
          coordinate: "126.9385757446289,37.5657844543457",
          image_url: null,
          icon: "education",
        },
      ],
      clusterList: [
        [
          {
            name: "Dongdaemun",
            type: "Landmark",
            sub_poi_type: "TouristAttraction",
            id: "206568617",
            coordinate: "127.01102810000002,37.5716184515439",
            image_url: null,
            icon: "landmark",
          },
          {
            name: "Olympic Park",
            type: "Landmark",
            sub_poi_type: "TouristAttraction",
            id: "206570596",
            coordinate: "127.12149410000005,37.520686800000036",
            image_url:
              "https://content.skyscnr.com/POI/206570596/1740377/1740377_WxH.jpg",
            icon: "landmark",
          },
          {
            name: "COEX",
            type: "Landmark",
            sub_poi_type: "TouristAttraction",
            id: "206568622",
            coordinate: "127.058586,37.510193",
            image_url: null,
            icon: "landmark",
          },
          {
            name: "Namsan Park",
            type: "Landmark",
            sub_poi_type: "TouristAttraction",
            id: "206568571",
            coordinate: "126.99089357810979,37.55099311458576",
            image_url:
              "https://content.skyscnr.com/POI/206568571/2870489/2870489_WxH.jpg",
            icon: "landmark",
          },
          {
            name: "Lotte World Adventure",
            type: "Entertainment",
            sub_poi_type: "AmusementPark",
            id: "214192453",
            coordinate: "127.098167,37.5111158",
            image_url: null,
            icon: "bar",
          },
          {
            name: "Nampyeonghwa Sangga",
            type: "Shopping",
            sub_poi_type: "ShoppingMall",
            id: "212184085",
            coordinate: "127.01081,37.569164",
            image_url: null,
            icon: "deals",
          },
        ],
        [
          {
            name: "Cheongdam Dong",
            type: "Landmark",
            sub_poi_type: "TouristAttraction",
            id: "206568616",
            coordinate: "127.04866549999997,37.52319979999999",
            image_url: null,
            icon: "landmark",
          },
          {
            name: "Olympic Stadium",
            type: "Entertainment",
            sub_poi_type: "Stadium",
            id: "209644787",
            coordinate: "127.0727986,37.5158376",
            image_url: null,
            icon: "bar",
          },
          {
            name: "Shinsegae Duty Free（Myeong-dong Branch）",
            type: "Shopping",
            sub_poi_type: "ShoppingMall",
            id: "208070609",
            coordinate: "126.98077599999988,37.56026935913556",
            image_url: null,
            icon: "deals",
          },
          {
            name: "Incheon International",
            type: "Transportation",
            sub_poi_type: "Airport",
            id: "95673659",
            coordinate: "126.450556,37.469167",
            image_url: null,
            icon: "cars",
          },
          {
            name: "Hongik University, Seoul Campus",
            type: "Education",
            sub_poi_type: "UniversityBuilding",
            id: "207983140",
            coordinate: "126.9254901,37.5507563",
            image_url: null,
            icon: "education",
          },
          {
            name: "Gravity Studio Wangsimni",
            type: "Entertainment",
            sub_poi_type: "Stadium",
            id: "221414534",
            coordinate: "127.0260599,37.5671464",
            image_url: null,
            icon: "bar",
          },
        ],
        [
          {
            name: "Mary Hall",
            type: "Entertainment",
            sub_poi_type: "TheatreHall",
            id: "219797631",
            coordinate: "126.9407371,37.5513353",
            image_url: null,
            icon: "bar",
          },
          {
            name: "apM PLACE",
            type: "Shopping",
            sub_poi_type: "ShoppingMall",
            id: "208343118",
            coordinate: "127.007994,37.565765",
            image_url: null,
            icon: "deals",
          },
          {
            name: "Gimpo International",
            type: "Transportation",
            sub_poi_type: "Airport",
            id: "128668604",
            coordinate: "126.785278,37.551111",
            image_url: null,
            icon: "cars",
          },
          {
            name: "Ewha Womans University",
            type: "Education",
            sub_poi_type: "UniversityBuilding",
            id: "207983174",
            coordinate: "126.9468339,37.5618588",
            image_url: null,
            icon: "education",
          },
          {
            name: "sigma sports club",
            type: "Entertainment",
            sub_poi_type: "Stadium",
            id: "221572152",
            coordinate: "126.9782444,37.5683953",
            image_url: null,
            icon: "bar",
          },
          {
            name: "The Shilla Duty Free（Seoul）",
            type: "Shopping",
            sub_poi_type: "ShoppingMall",
            id: "207977268",
            coordinate: "127.007633,37.5571977",
            image_url: null,
            icon: "deals",
          },
        ],
        [
          {
            name: "Migliore",
            type: "Shopping",
            sub_poi_type: "ShoppingMall",
            id: "218489630",
            coordinate: "126.9845097,37.5610141",
            image_url: null,
            icon: "deals",
          },
          {
            name: "Hongik Univ.",
            type: "Transportation",
            sub_poi_type: "MetroStation",
            id: "205747132",
            coordinate: "126.923611,37.556667",
            image_url: null,
            icon: "cars",
          },
          {
            name: "Konkuk University",
            type: "Education",
            sub_poi_type: "UniversityBuilding",
            id: "207982943",
            coordinate: "127.079345703125,37.54076385498047",
            image_url: null,
            icon: "education",
          },
          {
            name: "Yeongdeungpo station",
            type: "Transportation",
            sub_poi_type: "MetroStation",
            id: "205756639",
            coordinate: "126.9077778,37.5155556",
            image_url: null,
            icon: "cars",
          },
          {
            name: "Korea University",
            type: "Education",
            sub_poi_type: "UniversityBuilding",
            id: "207982930",
            coordinate: "127.02799987792969,37.59080123901367",
            image_url:
              "https://content.skyscnr.com/POI/207982930/1975769/1975769_WxH.jpg",
            icon: "education",
          },
          {
            name: "Gongdeok station",
            type: "Transportation",
            sub_poi_type: "MetroStation",
            id: "205756695",
            coordinate: "126.9511111,37.5430556",
            image_url: null,
            icon: "cars",
          },
        ],
        [
          {
            name: "Yonsei University",
            type: "Education",
            sub_poi_type: "UniversityBuilding",
            id: "207982931",
            coordinate: "126.9385757446289,37.5657844543457",
            image_url: null,
            icon: "education",
          },
        ],
      ],
      QUICKSELECT_OPTIONS_LIMIT: 4,
    },
    QUICKFILTER_OFFSET: 10,
    QUICKFILTER_MIN_RESULTS: 10,
    POICARD_OFFSET: 8,
    POICARD_MIN_RESULTS: 14,
    requestId: "4bb483fa-6bd6-83be-22f1-0823a652f2ec",
    searchByCurrentLocation: false,
    warningCrisis: null,
    correlationId: "4bb483fa-6bd6-83be-22f1-0823a652f2ec",
  });
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("hotels");

  console.log(hotels, "flightParams");

  // useEffect(() => {
  //   const fetchHotels = async () => {
  //     setLoading(true);
  //     try {
  //       const endpoint = "v1/hotels/searchHotels";
  //       const params = {
  //         entityId: flightParams?.destinationEntityId,
  //         checkin: flightParams.date,
  //         checkout: getCheckoutDate(flightParams),
  //         adults: flightParams.adults,
  //         rooms: 1,
  //         limit: "10",
  //         currency: flightParams.currency,
  //         market: flightParams.market,
  //         countryCode: flightParams.countryCode,
  //       };

  //       const response = await fetchData(endpoint, params);

  //       setHotels(response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch hotels:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchHotels();
  // }, [flightParams]);

  // if (loading) {
  //   return <div>Loading hotels...</div>;
  // }

  return (
    <div className="p-4 bg-[#202125] rounded-md shadow-md text-white">
      <div className="py-[20px]">
        <h2 className="text-xl font-semibold  text-center text-[20px] ">
          Stays
        </h2>
        <p className="text-sm text-gray-400 mb-2 text-center">
          {flightParams?.date && getCheckoutDate(flightParams)
            ? `${new Date(flightParams.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })} - ${new Date(
                getCheckoutDate(flightParams)
              ).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })} · ${Math.ceil(
                (new Date(getCheckoutDate(flightParams)) -
                  new Date(flightParams.date)) /
                  (1000 * 60 * 60 * 24)
              )} nights`
            : "Select dates to see stays"}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button
          className={`px-4 py-2 border-[1px] border-[#5F6368] rounded-l-md ${
            selectedCategory === "hotels"
              ? "bg-[#394457] text-white"
              : "bg-transparent"
          }`}
          onClick={() => setSelectedCategory("hotels")}
        >
          Hotels
        </button>
        <button
          className={`px-4 py-2 border-[1px] border-[#5F6368] rounded-r-md ${
            selectedCategory === "holidayRentals"
              ? "bg-[#394457] text-white"
              : "bg-transparent"
          }`}
          onClick={() => setSelectedCategory("holidayRentals")}
        >
          Holiday Rentals
        </button>
      </div>
      <div className="mt-4">
        {hotels?.hotels.slice(0, 3).map((hotel) => (
          <div
            key={hotel.hotelId}
            className="hover:bg-[#394457] p-4 rounded-md flex items-start gap-4"
          >
            <img
              src={hotel.heroImage}
              alt={hotel.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-[14px]">{hotel.name}</h3>
              {/* <p className="text-sm text-gray-300">
                {hotel.distance || "No distance available"}
              </p> */}
              {hotel.rating && (
                <div className="flex gap-[4px] items-center justify-start">
                  <p className="text-sm text-green-400">{hotel.rating.value}</p>
                  <StarRating
                    value={hotel?.reviewSummary?.confidenceBadge?.score}
                  />
                  <p>({formatNumber(hotel.rating.count)})</p>
                </div>
              )}
            </div>
            {hotel.price && (
              <p className="font-semibold  text-[14px]">{hotel.price}</p>
            )}
          </div>
        ))}
      </div>
      <FlightSideBarButton label={"View more hotels"} />
    </div>
  );
};
