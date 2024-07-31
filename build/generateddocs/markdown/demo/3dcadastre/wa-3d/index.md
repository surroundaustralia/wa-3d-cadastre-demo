
# WA Cadastre - 3D profile (Schema)

`surround.demo.3dcadastre.wa-3d` *v0.1*

implements WA profile but requires points and certain parcel types to be 3D

[*Status*](http://www.opengis.net/def/status): Under development

## Description

## 3D Cadastral Survey Data Model - Western Australia Profile

This extends the WA profile of the CSDM to enforce 3D coordinates for points and 3D topologies for certain parcel types.

### extensions

No specific extensions 

## Examples

### WA 3D parcel example
it contains:

 - Horizontal and Vertical CRS
 - Four 2D Boundary Marks for a conventional 2D parcel (its a parcel from the WA extended example)
 - 22 3D Boundary Marks for the 3D Surface Parcel and the two Duplex polyhedra
 - Four Adopted vectorObservations for the 2D parcel and 30 calculated vectorObservations for the 3D Surface Parcel and the two Duplex polyhedra
 - 50 observedVectors defining the geometries for the 2D LineStrins (2D parcel), the 3D surface, and the duplex polyhedra
 - 21 faces defining the 3D surface and the duplex polyhedra
 - 3 primary parcels - a 2D parcel and two duplex polyhedra
 - A surface TIN
 - A terrain intersection curve
#### json
```json
{
  "@context": [
    "https://icsm-au.github.io/3d-csdm-profiles/build/annotated/profiles/wa/context.jsonld",
    {
      "wa-doc": "https://linked.data.gov.au/wa-documents/#",
      "sensordesc": "https://linked.data.gov.au/sensor-descriptions/SN#",
      "wa-leg": "https://www.legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/$FILE/"
    }
  ],
  "id": "sample_test_data",
  "name": "Sample Test Data",
  "description": "3D WA Cadastral Parcels for a duplex unit",
  "type": "FeatureCollection",
  "featureType": "CSD",
  "tenureType": "wa-parcel-type:freehold",
  "planType": "wa-survey-type:deposited-plan",
  "purpose": "wa-survey-purpose:subdivision",
  "surveyType": "wa-survey-type:SSA",
  "time": {
    "date": "2024-07-22"
  },
  "horizontalCRS": "epsg:7850",
  "verticalCRS": "epsg:5111",
  "bearingRotation": 0.0,
  "surveyTitle": "Duplex Parcels 1 and 2 on Lot 933 DP 400715",
  "adminUnit": [
    {
      "href": "wa-local-government:city-of-mandurah",
      "rel": "related",
      "role": "icsm-admin-unit-type:localGovernmentArea"
    },
    {
      "href": "wa-locality:dudley-park",
      "rel": "related",
      "role": "icsm-admin-unit-type:locality"
    }
  ],
  "hasProvenance": [],
  "wasGeneratedBy": {
    "id": "DP-1-S2",
    "endedAtTime": "2024-07-21T14:22:45Z"
  },
  "features": [],
  "referencedCSDs": [
    {
      "id": "DP_400715",
      "name": "DP 400715",
      "adminUnit": {
        "href": "wa-locality:dudley-park",
        "rel": "related",
        "role": "icsm-admin-unit-type:locality"
      },
      "bearingRotation": 0.0,
      "time": {
        "date": "2013-10-24"
      }
    },
    {
      "id": "DP_74646",
      "name": "DP 74646",
      "adminUnit": {
        "href": "wa-locality:dudley-park",
        "rel": "related",
        "role": "icsm-admin-unit-type:locality"
      },
      "bearingRotation": 0.0,
      "time": {
        "date": "2013-10-24"
      }
    }
  ],
  "points": [
    {
      "id": "BoundaryMarks",
      "type": "FeatureCollection",
      "featureType": "BoundaryMark",
      "features": [
        {
          "id": "4097",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380018.112,
              6397673.237
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": null,
            "methodEstablished": "wa-pt-method:P",
            "fromSurvey": "DP_400715",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "4113",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380056.766,
              6397668.451
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": null,
            "methodEstablished": "wa-pt-method:P",
            "fromSurvey": "DP_400715",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "4309",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380056.678,
              6397686.407
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": null,
            "methodEstablished": "wa-pt-method:P",
            "fromSurvey": "DP_400715",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "4326",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380021.486,
              6397687.437
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": null,
            "methodEstablished": "wa-pt-method:P",
            "fromSurvey": "DP_400715",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "1003",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380018.112,
              6397673.237,
              22.590
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface mark",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "1002",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380056.766,
              6397668.451,
              23.700
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "1001",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380056.678,
              6397686.407,
              23.500
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "1004",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380021.486,
              6397687.437,
              22.050
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2001",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.441,
              6397685.850,
              23.050
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface mark",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2002",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.432,
              6397685.266,
              23.750
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "2003",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.295,
              6397680.077,
              23.850
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "2004",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.160,
              6397674.969,
              23.800
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2005",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.167,
              6397675.497,
              23.050
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface mark",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2006",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.303,
              6397680.627,
              23.100
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "2101",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.441,
              6397685.850,
              22.000
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2102",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.432,
              6397685.266,
              22.000
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "2103",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.295,
              6397680.077,
              22.000
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "2104",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.160,
              6397674.969,
              22.000
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2105",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.167,
              6397675.497,
              22.000
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex mark",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2106",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.303,
              6397680.627,
              22.000
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "2201",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.441,
              6397685.850,
              32.000
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2202",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.432,
              6397685.266,
              32.000
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "2203",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.295,
              6397680.077,
              32.000
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "2204",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.160,
              6397674.969,
              32.000
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2205",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.167,
              6397675.497,
              32.000
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex mark",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2206",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.303,
              6397680.627,
              32.000
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        }
      ]
    }
  ],
  "vectorObservations": [
    {
      "id": "vectorobservation:adoptions",
      "type": "FeatureCollection",
      "featureType": "sosa:ObservationCollection",
      "usedProcedure": "icsm-procedure-used:adoptions",
      "properties": {
        "resultTime": "2024-07-22T00:00:00",
        "observedProperty": "surveyable:VectorDetermination",
        "madeBySensor": {
          "sensorType": "icsm-equipment-type:null"
        }
      },
      "features": [
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "45",
            "resultTime": "2013-10-24T00:00:00",
            "hasResult": {
              "distance": 38.958,
              "angle": 277.745698
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 10000,
            "fromSurveyDistance": "DP 400715",
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "fromSurveyBearing": "DP 400715"
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "46",
            "resultTime": "2013-10-24T00:00:00",
            "hasResult": {
              "distance": 17.96,
              "angle": 179.593337
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 10000,
            "fromSurveyDistance": "DP 400715",
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "fromSurveyBearing": "DP 400715"
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "47",
            "resultTime": "2013-10-24T00:00:00",
            "hasResult": {
              "distance": 14.598,
              "angle": 14.053629
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 10000,
            "fromSurveyDistance": "DP 400715",
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "fromSurveyBearing": "DP 400715"
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "48",
            "resultTime": "2013-10-24T00:00:00",
            "hasResult": {
              "distance": 35.215,
              "angle": 92.364115
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 10000,
            "fromSurveyDistance": "DP 400715",
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "fromSurveyBearing": "DP 400715"
          }
        }
      ]
    },
    {
      "id": "vectorobservation:calculations",
      "type": "FeatureCollection",
      "featureType": "sosa:ObservationCollection",
      "usedProcedure": "icsm-procedure-used:calculation",
      "properties": {
        "resultTime": "2024-07-22T00:00:00",
        "observedProperty": "surveyable:VectorDetermination",
        "madeBySensor": {
          "sensorType": "icsm-equipment-type:software"
        }
      },
      "features": [
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "145",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 38.965,
              "angle": 277.745698,
              "zenithDistance": 90.02849097
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "fromSurveyBearing": "DP 400715",
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "146",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 17.957,
              "angle": 179.593337,
              "zenithDistance": 89.98886226
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "fromSurveyBearing": "DP 400715",
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "147",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 14.602,
              "angle": 14.053629,
              "zenithDistance": 90.03013749
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "fromSurveyBearing": "DP 400715",
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "148",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 35.233,
              "angle": 92.364115,
              "zenithDistance": 89.9616742
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "fromSurveyBearing": "DP 400715",
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2301",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 20.005,
              "angle": 92.360533,
              "zenithDistance": 90.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2302",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 5.192,
              "angle": 177.799336,
              "zenithDistance": 90.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2304",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 5.111,
              "angle": 177.799336,
              "zenithDistance": 90.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2305",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 20.004,
              "angle": 272.200667,
              "zenithDistance": 90.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2306",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 5.151,
              "angle": 2.360536,
              "zenithDistance": 90.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2307",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 5.208,
              "angle": 2.042765,
              "zenithDistance": 90.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2308",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 19.990,
              "angle": 92.3153,
              "zenithDistance": 90.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2409",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 20.005,
              "angle": 92.360533,
              "zenithDistance": 90.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2410",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 5.192,
              "angle": 177.799336,
              "zenithDistance": 90.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2411",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 5.111,
              "angle": 177.799336,
              "zenithDistance": 90.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2412",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 20.004,
              "angle": 272.200667,
              "zenithDistance": 90.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2413",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 5.151,
              "angle": 2.360536,
              "zenithDistance": 90.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2408",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 5.208,
              "angle": 2.042765,
              "zenithDistance": 90.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2414",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 19.990,
              "angle": 92.3153,
              "zenithDistance": 90.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2309",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 1.05,
              "angle": 0.0000,
              "zenithDistance": 0.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2310",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 1.10,
              "angle": 0.0000,
              "zenithDistance": 0.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2311",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 1.05,
              "angle": 0.0000,
              "zenithDistance": 0.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2312",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 1.75,
              "angle": 0.0000,
              "zenithDistance": 0.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2313",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 1.85,
              "angle": 0.0000,
              "zenithDistance": 0.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2314",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 1.80,
              "angle": 0.0000,
              "zenithDistance": 0.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2401",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 8.95,
              "angle": 0.0000,
              "zenithDistance": 0.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2402",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 8.90,
              "angle": 0.0000,
              "zenithDistance": 0.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2403",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 8.95,
              "angle": 0.0000,
              "zenithDistance": 0.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2405",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 8.25,
              "angle": 0.0000,
              "zenithDistance": 0.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2406",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 8.15,
              "angle": 0.0000,
              "zenithDistance": 0.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2407",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 8.20,
              "angle": 0.0000,
              "zenithDistance": 0.0000
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        }
      ]
    }
  ],
  "observedVectors": [
    {
      "id": "observedVectors",
      "type": "FeatureCollection",
      "featureType": "ObservedVector",
      "features": [
        {
          "id": "45",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "4097",
              "4113"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:lot-boundary",
            "comment": null
          }
        },
        {
          "id": "46",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "4309",
              "4113"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:road-boundary",
            "comment": null
          }
        },
        {
          "id": "47",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "4097",
              "4326"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:lot-boundary",
            "comment": null
          }
        },
        {
          "id": "48",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "4326",
              "4309"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:lot-boundary",
            "comment": null
          }
        },
        {
          "id": "145",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1003",
              "1002"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:lot-boundary",
            "comment": null
          }
        },
        {
          "id": "146",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1001",
              "1002"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:road-boundary",
            "comment": null
          }
        },
        {
          "id": "147",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1003",
              "1004"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:lot-boundary",
            "comment": null
          }
        },
        {
          "id": "148",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1004",
              "1001"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:lot-boundary",
            "comment": null
          }
        },
        {
          "id": "201",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2001",
              "2002"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:terrain-intersection-curve",
            "comment": null
          }
        },
        {
          "id": "202",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2002",
              "2003"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:terrain-intersection",
            "comment": null
          }
        },
        {
          "id": "203",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2003",
              "2004"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:terrain-intersection",
            "comment": null
          }
        },
        {
          "id": "204",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2004",
              "2005"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:terrain-intersection",
            "comment": null
          }
        },
        {
          "id": "205",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2005",
              "2006"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:terrain-intersection",
            "comment": null
          }
        },
        {
          "id": "206",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2006",
              "2001"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:terrain-intersection",
            "comment": null
          }
        },
        {
          "id": "301",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1004",
              "2001"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "302",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1004",
              "2002"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "303",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1001",
              "2002"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "304",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1001",
              "2003"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "305",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1002",
              "2003"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "306",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1002",
              "2004"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "307",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1003",
              "2004"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "308",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1003",
              "2005"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "309",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1003",
              "2006"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "310",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1004",
              "2006"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "2301",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2101",
              "2102"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2302",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2102",
              "2103"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2304",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2103",
              "2104"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2305",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2104",
              "2105"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2306",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2105",
              "2106"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2307",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2106",
              "2101"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2308",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2106",
              "2103"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2309",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2101",
              "2001"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2310",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2106",
              "2006"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2311",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2105",
              "2005"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2312",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2102",
              "2002"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2313",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2103",
              "2003"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2314",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2104",
              "2004"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2401",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2001",
              "2201"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2402",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2006",
              "2206"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2403",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2005",
              "2205"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2405",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2002",
              "2202"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2406",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2003",
              "2203"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2407",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2004",
              "2204"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2408",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2206",
              "2201"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2409",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2201",
              "2202"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2410",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2202",
              "2203"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2411",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2203",
              "2204"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2412",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2204",
              "2205"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2413",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2205",
              "2206"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2414",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2206",
              "2203"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        }
      ]
    }
  ],
  "parcels": [
    {
      "id": "PrimaryParcels",
      "type": "FeatureCollection",
      "featureType": "PrimaryParcel",
      "properties": null,
      "features": [
        {
          "id": "1313",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "46",
                "45",
                "47",
                "48"
              ]
            ]
          },
          "properties": {
            "appellation": {
              "label": "Lot 933 DP 400715",
              "hasPart": [
                {
                  "type": "ParcelType",
                  "label": "Lot"
                },
                {
                  "type": "ParcelIdentifier",
                  "label": "933"
                },
                {
                  "type": "PlanType",
                  "label": "DP"
                },
                {
                  "type": "PlanIdentifier",
                  "label": "400715"
                }
              ]
            },
            "area": 598.69,
            "parcelType": "wa-parcel-type:freehold",
            "parcelPurpose": "wa-parcel-purpose:lot",
            "parcelState": "wa-parcel-state:created",
            "interests": [
              {
                "interestLink": "689-654-868",
                "interestType": "wa-secondary-purpose:restrictive-covenant-building-envelope",
                "statuteLink": "wa-interest:easement-tla-136D",
                "originalNotificationLink": "wa-doc:M443039",
                "dateExpires": "2022-12-31T23:59:59Z",
                "burdenedParcels": [
                  "1313"
                ],
                "benefitedParcels": [
                  "1301",
                  "1302",
                  "1303",
                  "1304",
                  "1305",
                  "1306",
                  "1307",
                  "1308",
                  "1309",
                  "1310",
                  "1311",
                  "1312",
                  "1314",
                  "1315",
                  "1316",
                  "1317",
                  "1318",
                  "1319",
                  "1320",
                  "1321",
                  "1322",
                  "1323",
                  "1324",
                  "1325",
                  "1326",
                  "1327",
                  "1328",
                  "1329",
                  "1330"
                ]
              },
              {
                "interestLink": "689-654-812",
                "interestType": "wa-secondary-purpose:notification",
                "statuteLink": "wa-interest-type:165-pda",
                "originalNotificationLink": "wa-doc:M443040",
                "desc": "Mosquitoes",
                "burdenedParcels": [
                  "1313"
                ]
              }
            ]
          }
        },
        {
          "id": "9000",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polyhedron",
            "references": [
              [
                "8001",
                "8002",
                "8003",
                "8004",
                "8005",
                "8006"
              ]
            ]
          },
          "properties": {
            "appellation": {
              "label": "Duplex 1 Lot 933 DP 400715",
              "hasPart": [
                {
                  "type": "StrataType",
                  "label": "Duplex"
                },
                {
                  "type": "StrataIdentifier",
                  "label": "1"
                },
                {
                  "type": "ParcelType",
                  "label": "Lot"
                },
                {
                  "type": "ParcelIdentifier",
                  "label": "933"
                },
                {
                  "type": "PlanType",
                  "label": "DP"
                },
                {
                  "type": "PlanIdentifier",
                  "label": "400715"
                }
              ]
            },
            "volume": 1000.0,
            "parcelType": "wa-parcel-type:freehold",
            "parcelPurpose": "wa-parcel-purpose:strata-lot",
            "parcelState": "wa-parcel-state:created",
            "interests": []
          }
        },
        {
          "id": "9001",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polyhedron",
            "references": [
              [
                "-8006",
                "8007",
                "8008",
                "8009",
                "8010",
                "8011"
              ]
            ]
          },
          "properties": {
            "appellation": {
              "label": "Duplex 2 Lot 933 DP 400715",
              "hasPart": [
                {
                  "type": "StrataType",
                  "label": "Duplex"
                },
                {
                  "type": "StrataIdentifier",
                  "label": "2"
                },
                {
                  "type": "ParcelType",
                  "label": "Lot"
                },
                {
                  "type": "ParcelIdentifier",
                  "label": "933"
                },
                {
                  "type": "PlanType",
                  "label": "DP"
                },
                {
                  "type": "PlanIdentifier",
                  "label": "400715"
                }
              ]
            },
            "volume": 1000.0,
            "parcelType": "wa-parcel-type:freehold",
            "parcelPurpose": "wa-parcel-purpose:strata-lot",
            "parcelState": "wa-parcel-state:created",
            "interests": []
          }
        }
      ]
    }
  ],
  "faces": [
    {
      "id": "ObjectFaces",
      "type": "FeatureCollection",
      "featureType": "Face",
      "properties": null,
      "features": [
        {
          "id": "4001",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "301",
                "201",
                "302"
              ]
            ]
          }
        },
        {
          "id": "4002",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "302",
                "148",
                "302"
              ]
            ]
          }
        },
        {
          "id": "4003",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "304",
                "303",
                "202"
              ]
            ]
          }
        },
        {
          "id": "4004",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "146",
                "304",
                "305"
              ]
            ]
          }
        },
        {
          "id": "4005",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "306",
                "305",
                "203"
              ]
            ]
          }
        },
        {
          "id": "4006",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "145",
                "306",
                "307"
              ]
            ]
          }
        },
        {
          "id": "4007",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "307",
                "204",
                "308"
              ]
            ]
          }
        },
        {
          "id": "4008",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "308",
                "205",
                "309"
              ]
            ]
          }
        },
        {
          "id": "4009",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "147",
                "309",
                "310"
              ]
            ]
          }
        },
        {
          "id": "4010",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "301",
                "310",
                "206"
              ]
            ]
          }
        },
        {
          "id": "8001",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2412",
                "2403",
                "2311",
                "2305",
                "2314",
                "2407"
              ]
            ]
          }
        },
        {
          "id": "8002",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2413",
                "2402",
                "2310",
                "2306",
                "2311",
                "2403"
              ]
            ]
          }
        },
        {
          "id": "8003",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2412",
                "2411",
                "2414",
                "2413"
              ]
            ]
          }
        },
        {
          "id": "8004",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2411",
                "2407",
                "2314",
                "2304",
                "2313",
                "2406"
              ]
            ]
          }
        },
        {
          "id": "8005",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2305",
                "2304",
                "2308",
                "2306"
              ]
            ]
          }
        },
        {
          "id": "8006",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2414",
                "2406",
                "2313",
                "2308",
                "2310",
                "2401"
              ]
            ]
          }
        },
        {
          "id": "8007",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2409",
                "2408",
                "2414",
                "2410"
              ]
            ]
          }
        },
        {
          "id": "8008",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2408",
                "2401",
                "2309",
                "2307",
                "2310",
                "2402"
              ]
            ]
          }
        },
        {
          "id": "8009",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2308",
                "2307",
                "2301",
                "2302"
              ]
            ]
          }
        },
        {
          "id": "8010",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2410",
                "2406",
                "2313",
                "2302",
                "2312",
                "2405"
              ]
            ]
          }
        },
        {
          "id": "8011",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2409",
                "2401",
                "2309",
                "2301",
                "2312",
                "2405"
              ]
            ]
          }
        }
      ]
    }
  ],
  "surfaceTin": [
    {
      "id": "surfaces",
      "type": "FeatureCollection",
      "featureType": "Surface",
      "properties": null,
      "features": [
        {
          "id": "5000",
          "type": "feature",
          "geometry": null,
          "topology": {
            "type": "TIN",
            "references": [
              [
                "4001",
                "4002",
                "4003",
                "4004",
                "4005",
                "4006",
                "4007",
                "4008",
                "4009",
                "4010"
              ]
            ]
          }
        }
      ]
    }
  ],
  "terrainIntersectionCurve": [
    {
      "id": "tic",
      "type": "FeatureCollection",
      "featureType": "TerrainIntersectionCurve",
      "properties": null,
      "features": [
        {
          "id": "6000",
          "type": "feature",
          "geometry": null,
          "topology": {
            "type": "MultiLineString",
            "references": [
              "201",
              "202",
              "203",
              "204",
              "205",
              "206"
            ]
          }
        }
      ]
    }
  ]
}
```

#### jsonld
```jsonld
{
  "@context": [
    "https://literate-couscous-j7e78pr.pages.github.io/build/annotated/demo/3dcadastre/wa-3d/context.jsonld",
    "https://icsm-au.github.io/3d-csdm-profiles/build/annotated/profiles/wa/context.jsonld",
    {
      "wa-doc": "https://linked.data.gov.au/wa-documents/#",
      "sensordesc": "https://linked.data.gov.au/sensor-descriptions/SN#",
      "wa-leg": "https://www.legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/$FILE/"
    }
  ],
  "id": "sample_test_data",
  "name": "Sample Test Data",
  "description": "3D WA Cadastral Parcels for a duplex unit",
  "type": "FeatureCollection",
  "featureType": "CSD",
  "tenureType": "wa-parcel-type:freehold",
  "planType": "wa-survey-type:deposited-plan",
  "purpose": "wa-survey-purpose:subdivision",
  "surveyType": "wa-survey-type:SSA",
  "time": {
    "date": "2024-07-22"
  },
  "horizontalCRS": "epsg:7850",
  "verticalCRS": "epsg:5111",
  "bearingRotation": 0.0,
  "surveyTitle": "Duplex Parcels 1 and 2 on Lot 933 DP 400715",
  "adminUnit": [
    {
      "href": "wa-local-government:city-of-mandurah",
      "rel": "related",
      "role": "icsm-admin-unit-type:localGovernmentArea"
    },
    {
      "href": "wa-locality:dudley-park",
      "rel": "related",
      "role": "icsm-admin-unit-type:locality"
    }
  ],
  "hasProvenance": [],
  "wasGeneratedBy": {
    "id": "DP-1-S2",
    "endedAtTime": "2024-07-21T14:22:45Z"
  },
  "features": [],
  "referencedCSDs": [
    {
      "id": "DP_400715",
      "name": "DP 400715",
      "adminUnit": {
        "href": "wa-locality:dudley-park",
        "rel": "related",
        "role": "icsm-admin-unit-type:locality"
      },
      "bearingRotation": 0.0,
      "time": {
        "date": "2013-10-24"
      }
    },
    {
      "id": "DP_74646",
      "name": "DP 74646",
      "adminUnit": {
        "href": "wa-locality:dudley-park",
        "rel": "related",
        "role": "icsm-admin-unit-type:locality"
      },
      "bearingRotation": 0.0,
      "time": {
        "date": "2013-10-24"
      }
    }
  ],
  "points": [
    {
      "id": "BoundaryMarks",
      "type": "FeatureCollection",
      "featureType": "BoundaryMark",
      "features": [
        {
          "id": "4097",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380018.112,
              6397673.237
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": null,
            "methodEstablished": "wa-pt-method:P",
            "fromSurvey": "DP_400715",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "4113",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380056.766,
              6397668.451
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": null,
            "methodEstablished": "wa-pt-method:P",
            "fromSurvey": "DP_400715",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "4309",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380056.678,
              6397686.407
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": null,
            "methodEstablished": "wa-pt-method:P",
            "fromSurvey": "DP_400715",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "4326",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380021.486,
              6397687.437
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": null,
            "methodEstablished": "wa-pt-method:P",
            "fromSurvey": "DP_400715",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "1003",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380018.112,
              6397673.237,
              22.59
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface mark",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "1002",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380056.766,
              6397668.451,
              23.7
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "1001",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380056.678,
              6397686.407,
              23.5
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "1004",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380021.486,
              6397687.437,
              22.05
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2001",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.441,
              6397685.85,
              23.05
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface mark",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2002",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.432,
              6397685.266,
              23.75
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "2003",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.295,
              6397680.077,
              23.85
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "2004",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.16,
              6397674.969,
              23.8
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2005",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.167,
              6397675.497,
              23.05
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface mark",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2006",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.303,
              6397680.627,
              23.1
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "surface point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "2101",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.441,
              6397685.85,
              22.0
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2102",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.432,
              6397685.266,
              22.0
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "2103",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.295,
              6397680.077,
              22.0
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "2104",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.16,
              6397674.969,
              22.0
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2105",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.167,
              6397675.497,
              22.0
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex mark",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2106",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.303,
              6397680.627,
              22.0
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "2201",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.441,
              6397685.85,
              32.0
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2202",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.432,
              6397685.266,
              32.0
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "2203",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.295,
              6397680.077,
              32.0
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        },
        {
          "id": "2204",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380044.16,
              6397674.969,
              32.0
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2205",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.167,
              6397675.497,
              32.0
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex mark",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "2206",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              380024.303,
              6397680.627,
              32.0
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.001,
            "comment": "Duplex point",
            "methodEstablished": "wa-pt-method:P",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:new-mark"
            }
          }
        }
      ]
    }
  ],
  "vectorObservations": [
    {
      "id": "vectorobservation:adoptions",
      "type": "FeatureCollection",
      "featureType": "sosa:ObservationCollection",
      "usedProcedure": "icsm-procedure-used:adoptions",
      "properties": {
        "resultTime": "2024-07-22T00:00:00",
        "observedProperty": "surveyable:VectorDetermination",
        "madeBySensor": {
          "sensorType": "icsm-equipment-type:null"
        }
      },
      "features": [
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "45",
            "resultTime": "2013-10-24T00:00:00",
            "hasResult": {
              "distance": 38.958,
              "angle": 277.745698
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 10000,
            "fromSurveyDistance": "DP 400715",
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "fromSurveyBearing": "DP 400715"
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "46",
            "resultTime": "2013-10-24T00:00:00",
            "hasResult": {
              "distance": 17.96,
              "angle": 179.593337
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 10000,
            "fromSurveyDistance": "DP 400715",
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "fromSurveyBearing": "DP 400715"
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "47",
            "resultTime": "2013-10-24T00:00:00",
            "hasResult": {
              "distance": 14.598,
              "angle": 14.053629
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 10000,
            "fromSurveyDistance": "DP 400715",
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "fromSurveyBearing": "DP 400715"
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "48",
            "resultTime": "2013-10-24T00:00:00",
            "hasResult": {
              "distance": 35.215,
              "angle": 92.364115
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 10000,
            "fromSurveyDistance": "DP 400715",
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "fromSurveyBearing": "DP 400715"
          }
        }
      ]
    },
    {
      "id": "vectorobservation:calculations",
      "type": "FeatureCollection",
      "featureType": "sosa:ObservationCollection",
      "usedProcedure": "icsm-procedure-used:calculation",
      "properties": {
        "resultTime": "2024-07-22T00:00:00",
        "observedProperty": "surveyable:VectorDetermination",
        "madeBySensor": {
          "sensorType": "icsm-equipment-type:software"
        }
      },
      "features": [
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "145",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 38.965,
              "angle": 277.745698,
              "zenithDistance": 90.02849097
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "fromSurveyBearing": "DP 400715",
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "146",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 17.957,
              "angle": 179.593337,
              "zenithDistance": 89.98886226
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "fromSurveyBearing": "DP 400715",
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "147",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 14.602,
              "angle": 14.053629,
              "zenithDistance": 90.03013749
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "fromSurveyBearing": "DP 400715",
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "148",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 35.233,
              "angle": 92.364115,
              "zenithDistance": 89.9616742
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "fromSurveyBearing": "DP 400715",
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2301",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 20.005,
              "angle": 92.360533,
              "zenithDistance": 90.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2302",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 5.192,
              "angle": 177.799336,
              "zenithDistance": 90.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2304",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 5.111,
              "angle": 177.799336,
              "zenithDistance": 90.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2305",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 20.004,
              "angle": 272.200667,
              "zenithDistance": 90.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2306",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 5.151,
              "angle": 2.360536,
              "zenithDistance": 90.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2307",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 5.208,
              "angle": 2.042765,
              "zenithDistance": 90.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2308",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 19.99,
              "angle": 92.3153,
              "zenithDistance": 90.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2409",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 20.005,
              "angle": 92.360533,
              "zenithDistance": 90.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2410",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 5.192,
              "angle": 177.799336,
              "zenithDistance": 90.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2411",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 5.111,
              "angle": 177.799336,
              "zenithDistance": 90.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2412",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 20.004,
              "angle": 272.200667,
              "zenithDistance": 90.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2413",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 5.151,
              "angle": 2.360536,
              "zenithDistance": 90.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2408",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 5.208,
              "angle": 2.042765,
              "zenithDistance": 90.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2414",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 19.99,
              "angle": 92.3153,
              "zenithDistance": 90.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2309",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 1.05,
              "angle": 0.0,
              "zenithDistance": 0.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2310",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 1.1,
              "angle": 0.0,
              "zenithDistance": 0.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2311",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 1.05,
              "angle": 0.0,
              "zenithDistance": 0.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2312",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 1.75,
              "angle": 0.0,
              "zenithDistance": 0.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2313",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 1.85,
              "angle": 0.0,
              "zenithDistance": 0.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2314",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 1.8,
              "angle": 0.0,
              "zenithDistance": 0.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2401",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 8.95,
              "angle": 0.0,
              "zenithDistance": 0.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2402",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 8.9,
              "angle": 0.0,
              "zenithDistance": 0.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2403",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 8.95,
              "angle": 0.0,
              "zenithDistance": 0.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2405",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 8.25,
              "angle": 0.0,
              "zenithDistance": 0.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2406",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 8.15,
              "angle": 0.0,
              "zenithDistance": 0.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "2407",
            "resultTime": "2024-07-22T00:00:00",
            "hasResult": {
              "distance": 8.2,
              "angle": 0.0,
              "zenithDistance": 0.0
            },
            "distanceType": "icsm-distance-type:slope",
            "distanceAccuracy": 10000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 10000,
            "zDAngleAccuracy": 10000
          }
        }
      ]
    }
  ],
  "observedVectors": [
    {
      "id": "observedVectors",
      "type": "FeatureCollection",
      "featureType": "ObservedVector",
      "features": [
        {
          "id": "45",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "4097",
              "4113"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:lot-boundary",
            "comment": null
          }
        },
        {
          "id": "46",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "4309",
              "4113"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:road-boundary",
            "comment": null
          }
        },
        {
          "id": "47",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "4097",
              "4326"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:lot-boundary",
            "comment": null
          }
        },
        {
          "id": "48",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "4326",
              "4309"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:lot-boundary",
            "comment": null
          }
        },
        {
          "id": "145",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1003",
              "1002"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:lot-boundary",
            "comment": null
          }
        },
        {
          "id": "146",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1001",
              "1002"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:road-boundary",
            "comment": null
          }
        },
        {
          "id": "147",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1003",
              "1004"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:lot-boundary",
            "comment": null
          }
        },
        {
          "id": "148",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1004",
              "1001"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:lot-boundary",
            "comment": null
          }
        },
        {
          "id": "201",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2001",
              "2002"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:terrain-intersection-curve",
            "comment": null
          }
        },
        {
          "id": "202",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2002",
              "2003"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:terrain-intersection",
            "comment": null
          }
        },
        {
          "id": "203",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2003",
              "2004"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:terrain-intersection",
            "comment": null
          }
        },
        {
          "id": "204",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2004",
              "2005"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:terrain-intersection",
            "comment": null
          }
        },
        {
          "id": "205",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2005",
              "2006"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:terrain-intersection",
            "comment": null
          }
        },
        {
          "id": "206",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2006",
              "2001"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:terrain-intersection",
            "comment": null
          }
        },
        {
          "id": "301",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1004",
              "2001"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "302",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1004",
              "2002"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "303",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1001",
              "2002"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "304",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1001",
              "2003"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "305",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1002",
              "2003"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "306",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1002",
              "2004"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "307",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1003",
              "2004"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "308",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1003",
              "2005"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "309",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1003",
              "2006"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "310",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "1004",
              "2006"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:surface-edge",
            "comment": null
          }
        },
        {
          "id": "2301",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2101",
              "2102"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2302",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2102",
              "2103"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2304",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2103",
              "2104"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2305",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2104",
              "2105"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2306",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2105",
              "2106"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2307",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2106",
              "2101"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2308",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2106",
              "2103"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2309",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2101",
              "2001"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2310",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2106",
              "2006"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2311",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2105",
              "2005"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2312",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2102",
              "2002"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2313",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2103",
              "2003"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2314",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2104",
              "2004"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2401",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2001",
              "2201"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2402",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2006",
              "2206"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2403",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2005",
              "2205"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2405",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2002",
              "2202"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2406",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2003",
              "2203"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2407",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2004",
              "2204"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2408",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2206",
              "2201"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2409",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2201",
              "2202"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2410",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2202",
              "2203"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2411",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2203",
              "2204"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2412",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2204",
              "2205"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2413",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2205",
              "2206"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        },
        {
          "id": "2414",
          "type": "Feature",
          "featureType": "ObservedVector",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "2206",
              "2203"
            ]
          },
          "properties": {
            "purpose": "wa-vector-purpose:strata-edge",
            "comment": null
          }
        }
      ]
    }
  ],
  "parcels": [
    {
      "id": "PrimaryParcels",
      "type": "FeatureCollection",
      "featureType": "PrimaryParcel",
      "properties": null,
      "features": [
        {
          "id": "1313",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "46",
                "45",
                "47",
                "48"
              ]
            ]
          },
          "properties": {
            "appellation": {
              "label": "Lot 933 DP 400715",
              "hasPart": [
                {
                  "type": "ParcelType",
                  "label": "Lot"
                },
                {
                  "type": "ParcelIdentifier",
                  "label": "933"
                },
                {
                  "type": "PlanType",
                  "label": "DP"
                },
                {
                  "type": "PlanIdentifier",
                  "label": "400715"
                }
              ]
            },
            "area": 598.69,
            "parcelType": "wa-parcel-type:freehold",
            "parcelPurpose": "wa-parcel-purpose:lot",
            "parcelState": "wa-parcel-state:created",
            "interests": [
              {
                "interestLink": "689-654-868",
                "interestType": "wa-secondary-purpose:restrictive-covenant-building-envelope",
                "statuteLink": "wa-interest:easement-tla-136D",
                "originalNotificationLink": "wa-doc:M443039",
                "dateExpires": "2022-12-31T23:59:59Z",
                "burdenedParcels": [
                  "1313"
                ],
                "benefitedParcels": [
                  "1301",
                  "1302",
                  "1303",
                  "1304",
                  "1305",
                  "1306",
                  "1307",
                  "1308",
                  "1309",
                  "1310",
                  "1311",
                  "1312",
                  "1314",
                  "1315",
                  "1316",
                  "1317",
                  "1318",
                  "1319",
                  "1320",
                  "1321",
                  "1322",
                  "1323",
                  "1324",
                  "1325",
                  "1326",
                  "1327",
                  "1328",
                  "1329",
                  "1330"
                ]
              },
              {
                "interestLink": "689-654-812",
                "interestType": "wa-secondary-purpose:notification",
                "statuteLink": "wa-interest-type:165-pda",
                "originalNotificationLink": "wa-doc:M443040",
                "desc": "Mosquitoes",
                "burdenedParcels": [
                  "1313"
                ]
              }
            ]
          }
        },
        {
          "id": "9000",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polyhedron",
            "references": [
              [
                "8001",
                "8002",
                "8003",
                "8004",
                "8005",
                "8006"
              ]
            ]
          },
          "properties": {
            "appellation": {
              "label": "Duplex 1 Lot 933 DP 400715",
              "hasPart": [
                {
                  "type": "StrataType",
                  "label": "Duplex"
                },
                {
                  "type": "StrataIdentifier",
                  "label": "1"
                },
                {
                  "type": "ParcelType",
                  "label": "Lot"
                },
                {
                  "type": "ParcelIdentifier",
                  "label": "933"
                },
                {
                  "type": "PlanType",
                  "label": "DP"
                },
                {
                  "type": "PlanIdentifier",
                  "label": "400715"
                }
              ]
            },
            "volume": 1000.0,
            "parcelType": "wa-parcel-type:freehold",
            "parcelPurpose": "wa-parcel-purpose:strata-lot",
            "parcelState": "wa-parcel-state:created",
            "interests": []
          }
        },
        {
          "id": "9001",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polyhedron",
            "references": [
              [
                "-8006",
                "8007",
                "8008",
                "8009",
                "8010",
                "8011"
              ]
            ]
          },
          "properties": {
            "appellation": {
              "label": "Duplex 2 Lot 933 DP 400715",
              "hasPart": [
                {
                  "type": "StrataType",
                  "label": "Duplex"
                },
                {
                  "type": "StrataIdentifier",
                  "label": "2"
                },
                {
                  "type": "ParcelType",
                  "label": "Lot"
                },
                {
                  "type": "ParcelIdentifier",
                  "label": "933"
                },
                {
                  "type": "PlanType",
                  "label": "DP"
                },
                {
                  "type": "PlanIdentifier",
                  "label": "400715"
                }
              ]
            },
            "volume": 1000.0,
            "parcelType": "wa-parcel-type:freehold",
            "parcelPurpose": "wa-parcel-purpose:strata-lot",
            "parcelState": "wa-parcel-state:created",
            "interests": []
          }
        }
      ]
    }
  ],
  "faces": [
    {
      "id": "ObjectFaces",
      "type": "FeatureCollection",
      "featureType": "Face",
      "properties": null,
      "features": [
        {
          "id": "4001",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "301",
                "201",
                "302"
              ]
            ]
          }
        },
        {
          "id": "4002",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "302",
                "148",
                "302"
              ]
            ]
          }
        },
        {
          "id": "4003",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "304",
                "303",
                "202"
              ]
            ]
          }
        },
        {
          "id": "4004",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "146",
                "304",
                "305"
              ]
            ]
          }
        },
        {
          "id": "4005",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "306",
                "305",
                "203"
              ]
            ]
          }
        },
        {
          "id": "4006",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "145",
                "306",
                "307"
              ]
            ]
          }
        },
        {
          "id": "4007",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "307",
                "204",
                "308"
              ]
            ]
          }
        },
        {
          "id": "4008",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "308",
                "205",
                "309"
              ]
            ]
          }
        },
        {
          "id": "4009",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "147",
                "309",
                "310"
              ]
            ]
          }
        },
        {
          "id": "4010",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "301",
                "310",
                "206"
              ]
            ]
          }
        },
        {
          "id": "8001",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2412",
                "2403",
                "2311",
                "2305",
                "2314",
                "2407"
              ]
            ]
          }
        },
        {
          "id": "8002",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2413",
                "2402",
                "2310",
                "2306",
                "2311",
                "2403"
              ]
            ]
          }
        },
        {
          "id": "8003",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2412",
                "2411",
                "2414",
                "2413"
              ]
            ]
          }
        },
        {
          "id": "8004",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2411",
                "2407",
                "2314",
                "2304",
                "2313",
                "2406"
              ]
            ]
          }
        },
        {
          "id": "8005",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2305",
                "2304",
                "2308",
                "2306"
              ]
            ]
          }
        },
        {
          "id": "8006",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2414",
                "2406",
                "2313",
                "2308",
                "2310",
                "2401"
              ]
            ]
          }
        },
        {
          "id": "8007",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2409",
                "2408",
                "2414",
                "2410"
              ]
            ]
          }
        },
        {
          "id": "8008",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2408",
                "2401",
                "2309",
                "2307",
                "2310",
                "2402"
              ]
            ]
          }
        },
        {
          "id": "8009",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2308",
                "2307",
                "2301",
                "2302"
              ]
            ]
          }
        },
        {
          "id": "8010",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2410",
                "2406",
                "2313",
                "2302",
                "2312",
                "2405"
              ]
            ]
          }
        },
        {
          "id": "8011",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "2409",
                "2401",
                "2309",
                "2301",
                "2312",
                "2405"
              ]
            ]
          }
        }
      ]
    }
  ],
  "surfaceTin": [
    {
      "id": "surfaces",
      "type": "FeatureCollection",
      "featureType": "Surface",
      "properties": null,
      "features": [
        {
          "id": "5000",
          "type": "feature",
          "geometry": null,
          "topology": {
            "type": "TIN",
            "references": [
              [
                "4001",
                "4002",
                "4003",
                "4004",
                "4005",
                "4006",
                "4007",
                "4008",
                "4009",
                "4010"
              ]
            ]
          }
        }
      ]
    }
  ],
  "terrainIntersectionCurve": [
    {
      "id": "tic",
      "type": "FeatureCollection",
      "featureType": "TerrainIntersectionCurve",
      "properties": null,
      "features": [
        {
          "id": "6000",
          "type": "feature",
          "geometry": null,
          "topology": {
            "type": "MultiLineString",
            "references": [
              "201",
              "202",
              "203",
              "204",
              "205",
              "206"
            ]
          }
        }
      ]
    }
  ]
}
```

#### ttl
```ttl
@prefix commonpatterns: <https://linked.data.gov.au/def/csdm/commonpatterns/> .
@prefix container: <https://linked.data.gov.au/def/csdm/container/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix epsg: <http://www.opengis.net/def/crs/EPSG/0/> .
@prefix geojson: <https://purl.org/geojson/vocab#> .
@prefix icsm-admin-unit-type: <https://linked.data.gov.au/def/csdm/icsm-admin-unit-type/> .
@prefix icsm-angle-type: <https://linked.data.gov.au/def/csdm/icsm-angle-type/> .
@prefix icsm-distance-type: <https://linked.data.gov.au/def/csdm/icsm-distance-type/> .
@prefix icsm-equipment-type: <https://linked.data.gov.au/def/csdm/icsm-equipment-type/> .
@prefix icsm-procedure-used: <https://linked.data.gov.au/def/csdm/icsm-procedure-used/> .
@prefix ns1: <https://linked.data.gov.au/def/csdm/surveyobs/> .
@prefix ns2: <http://www.iana.org/assignments/> .
@prefix oa: <http://www.w3.org/ns/oa#> .
@prefix parcel: <https://linked.data.gov.au/def/csdm/parcels/> .
@prefix prof: <http://www.w3.org/ns/dx/prof/> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix surv: <https://linked.data.gov.au/def/csdm/surveyfeatures/> .
@prefix surveyable: <https://linked.data.gov.au/def/csdm/defs/surveyableproperties/> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix wa-interest: <https://linked.data.gov.au/def/csdm/wa-interest/> .
@prefix wa-interest-type: <https://linked.data.gov.au/def/csdm/wa-interest-type/> .
@prefix wa-local-government: <https://linked.data.gov.au/def/csdm/wa-local-government/> .
@prefix wa-locality: <https://linked.data.gov.au/def/csdm/wa-locality/> .
@prefix wa-monument-condition: <https://linked.data.gov.au/def/csdm/wa-monument-condition/> .
@prefix wa-monument-form: <https://linked.data.gov.au/def/csdm/wa-monument-form/> .
@prefix wa-monument-state: <https://linked.data.gov.au/def/csdm/wa-monument-state/> .
@prefix wa-parcel-purpose: <https://linked.data.gov.au/def/csdm/wa-parcel-purpose/> .
@prefix wa-parcel-state: <https://linked.data.gov.au/def/csdm/wa-parcel-state/> .
@prefix wa-parcel-type: <https://linked.data.gov.au/def/csdm/wa-parcel-type/> .
@prefix wa-secondary-purpose: <https://linked.data.gov.au/def/csdm/wa-secondary-purpose/> .
@prefix wa-survey-purpose: <https://linked.data.gov.au/def/csdm/wa-survey-purpose/> .
@prefix wa-survey-type: <https://linked.data.gov.au/def/csdm/wa-survey-type/> .
@prefix wa-surveypoint-purpose: <https://linked.data.gov.au/def/csdm/wa-surveypoint-purpose/> .
@prefix wa-vector-purpose: <https://linked.data.gov.au/def/csdm/wa-vector-purpose/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<https://www.wa-example.com/features/sample_test_data> a container:CSD,
        geojson:FeatureCollection ;
    rdfs:label "Sample Test Data" ;
    dcterms:time [ time:hasTime "2024-07-22"^^xsd:date ] ;
    prov:wasGeneratedBy <https://www.wa-example.com/features/DP-1-S2> ;
    container:adminUnit [ ns2:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:localGovernmentArea ;
            oa:hasTarget wa-local-government:city-of-mandurah ],
        [ ns2:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:locality ;
            oa:hasTarget wa-locality:dudley-park ] ;
    container:bearingRotation 0e+00 ;
    container:horizontalCRS epsg:7850 ;
    container:observedVectors <https://www.wa-example.com/features/observedVectors> ;
    container:parcels <https://www.wa-example.com/features/PrimaryParcels> ;
    container:points <https://www.wa-example.com/features/BoundaryMarks> ;
    container:purpose wa-survey-purpose:subdivision ;
    container:referencedCSD <https://www.wa-example.com/features/DP_400715>,
        <https://www.wa-example.com/features/DP_74646> ;
    container:surveyType wa-survey-type:SSA ;
    container:vectorObservations <vectorobservation:adoptions>,
        <vectorobservation:calculations> ;
    parcel:terrainIntersectionCurve <https://www.wa-example.com/features/tic> .

<https://www.wa-example.com/features/1313> a geojson:Feature ;
    parcel:appellation [ rdfs:label "Lot 933 DP 400715" ;
            dcterms:hasPart [ rdfs:label "933" ;
                    commonpatterns:namePartType "ParcelIdentifier" ],
                [ rdfs:label "400715" ;
                    commonpatterns:namePartType "PlanIdentifier" ],
                [ rdfs:label "Lot" ;
                    commonpatterns:namePartType "ParcelType" ],
                [ rdfs:label "DP" ;
                    commonpatterns:namePartType "PlanType" ] ] ;
    parcel:interest [ parcel:burdened "1313" ;
            parcel:interestLink <https://www.wa-example.com/features/689-654-812> ;
            parcel:interestType wa-secondary-purpose:notification ;
            parcel:statuteLink wa-interest-type:165-pda ],
        [ parcel:benefited "1301",
                "1302",
                "1303",
                "1304",
                "1305",
                "1306",
                "1307",
                "1308",
                "1309",
                "1310",
                "1311",
                "1312",
                "1314",
                "1315",
                "1316",
                "1317",
                "1318",
                "1319",
                "1320",
                "1321",
                "1322",
                "1323",
                "1324",
                "1325",
                "1326",
                "1327",
                "1328",
                "1329",
                "1330" ;
            parcel:burdened "1313" ;
            parcel:interestDateExpires "2022-12-31T23:59:59Z" ;
            parcel:interestLink <https://www.wa-example.com/features/689-654-868> ;
            parcel:interestType wa-secondary-purpose:restrictive-covenant-building-envelope ;
            parcel:statuteLink wa-interest:easement-tla-136D ] ;
    parcel:purpose wa-parcel-purpose:lot ;
    parcel:state wa-parcel-state:created ;
    parcel:surfaceArea 5.9869e+02 ;
    parcel:type wa-parcel-type:freehold ;
    geojson:topology [ a geojson:Polygon ;
            geojson:relatedFeatures ( ( <https://www.wa-example.com/features/46> <https://www.wa-example.com/features/45> <https://www.wa-example.com/features/47> <https://www.wa-example.com/features/48> ) ) ] .

<https://www.wa-example.com/features/301> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:surface-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/1004> <https://www.wa-example.com/features/2001> ) ] .

<https://www.wa-example.com/features/302> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:surface-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/1004> <https://www.wa-example.com/features/2002> ) ] .

<https://www.wa-example.com/features/303> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:surface-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/1001> <https://www.wa-example.com/features/2002> ) ] .

<https://www.wa-example.com/features/304> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:surface-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/1001> <https://www.wa-example.com/features/2003> ) ] .

<https://www.wa-example.com/features/305> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:surface-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/1002> <https://www.wa-example.com/features/2003> ) ] .

<https://www.wa-example.com/features/306> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:surface-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/1002> <https://www.wa-example.com/features/2004> ) ] .

<https://www.wa-example.com/features/307> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:surface-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/1003> <https://www.wa-example.com/features/2004> ) ] .

<https://www.wa-example.com/features/308> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:surface-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/1003> <https://www.wa-example.com/features/2005> ) ] .

<https://www.wa-example.com/features/309> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:surface-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/1003> <https://www.wa-example.com/features/2006> ) ] .

<https://www.wa-example.com/features/310> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:surface-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/1004> <https://www.wa-example.com/features/2006> ) ] .

<https://www.wa-example.com/features/6000> a <https://www.wa-example.com/features/feature> ;
    geojson:topology [ a geojson:MultiLineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/201> <https://www.wa-example.com/features/202> <https://www.wa-example.com/features/203> <https://www.wa-example.com/features/204> <https://www.wa-example.com/features/205> <https://www.wa-example.com/features/206> ) ] .

<https://www.wa-example.com/features/9000> a geojson:Feature ;
    parcel:appellation [ rdfs:label "Duplex 1 Lot 933 DP 400715" ;
            dcterms:hasPart [ rdfs:label "400715" ;
                    commonpatterns:namePartType "PlanIdentifier" ],
                [ rdfs:label "1" ;
                    commonpatterns:namePartType "StrataIdentifier" ],
                [ rdfs:label "933" ;
                    commonpatterns:namePartType "ParcelIdentifier" ],
                [ rdfs:label "Duplex" ;
                    commonpatterns:namePartType "StrataType" ],
                [ rdfs:label "Lot" ;
                    commonpatterns:namePartType "ParcelType" ],
                [ rdfs:label "DP" ;
                    commonpatterns:namePartType "PlanType" ] ] ;
    parcel:purpose wa-parcel-purpose:strata-lot ;
    parcel:state wa-parcel-state:created ;
    parcel:type wa-parcel-type:freehold ;
    geojson:topology [ a geojson:Polyhedron ;
            geojson:relatedFeatures ( ( <https://www.wa-example.com/features/8001> <https://www.wa-example.com/features/8002> <https://www.wa-example.com/features/8003> <https://www.wa-example.com/features/8004> <https://www.wa-example.com/features/8005> <https://www.wa-example.com/features/8006> ) ) ] .

<https://www.wa-example.com/features/9001> a geojson:Feature ;
    parcel:appellation [ rdfs:label "Duplex 2 Lot 933 DP 400715" ;
            dcterms:hasPart [ rdfs:label "Lot" ;
                    commonpatterns:namePartType "ParcelType" ],
                [ rdfs:label "Duplex" ;
                    commonpatterns:namePartType "StrataType" ],
                [ rdfs:label "933" ;
                    commonpatterns:namePartType "ParcelIdentifier" ],
                [ rdfs:label "2" ;
                    commonpatterns:namePartType "StrataIdentifier" ],
                [ rdfs:label "DP" ;
                    commonpatterns:namePartType "PlanType" ],
                [ rdfs:label "400715" ;
                    commonpatterns:namePartType "PlanIdentifier" ] ] ;
    parcel:purpose wa-parcel-purpose:strata-lot ;
    parcel:state wa-parcel-state:created ;
    parcel:type wa-parcel-type:freehold ;
    geojson:topology [ a geojson:Polyhedron ;
            geojson:relatedFeatures ( ( <https://www.wa-example.com/features/-8006> <https://www.wa-example.com/features/8007> <https://www.wa-example.com/features/8008> <https://www.wa-example.com/features/8009> <https://www.wa-example.com/features/8010> <https://www.wa-example.com/features/8011> ) ) ] .

<https://www.wa-example.com/features/BoundaryMarks> a surv:BoundaryMark,
        geojson:FeatureCollection ;
    geojson:features <https://www.wa-example.com/features/1001>,
        <https://www.wa-example.com/features/1002>,
        <https://www.wa-example.com/features/1003>,
        <https://www.wa-example.com/features/1004>,
        <https://www.wa-example.com/features/2001>,
        <https://www.wa-example.com/features/2002>,
        <https://www.wa-example.com/features/2003>,
        <https://www.wa-example.com/features/2004>,
        <https://www.wa-example.com/features/2005>,
        <https://www.wa-example.com/features/2006>,
        <https://www.wa-example.com/features/2101>,
        <https://www.wa-example.com/features/2102>,
        <https://www.wa-example.com/features/2103>,
        <https://www.wa-example.com/features/2104>,
        <https://www.wa-example.com/features/2105>,
        <https://www.wa-example.com/features/2106>,
        <https://www.wa-example.com/features/2201>,
        <https://www.wa-example.com/features/2202>,
        <https://www.wa-example.com/features/2203>,
        <https://www.wa-example.com/features/2204>,
        <https://www.wa-example.com/features/2205>,
        <https://www.wa-example.com/features/2206>,
        <https://www.wa-example.com/features/4097>,
        <https://www.wa-example.com/features/4113>,
        <https://www.wa-example.com/features/4309>,
        <https://www.wa-example.com/features/4326> .

<https://www.wa-example.com/features/DP-1-S2> prov:endedAtTime "2024-07-21T14:22:45+00:00"^^xsd:dateTime .

<https://www.wa-example.com/features/DP_400715> rdfs:label "DP 400715" ;
    dcterms:time [ time:hasTime "2013-10-24"^^xsd:date ] ;
    container:adminUnit [ ns2:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:locality ;
            oa:hasTarget wa-locality:dudley-park ] ;
    container:bearingRotation 0e+00 .

<https://www.wa-example.com/features/DP_74646> rdfs:label "DP 74646" ;
    dcterms:time [ time:hasTime "2013-10-24"^^xsd:date ] ;
    container:adminUnit [ ns2:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:locality ;
            oa:hasTarget wa-locality:dudley-park ] ;
    container:bearingRotation 0e+00 .

<https://www.wa-example.com/features/PrimaryParcels> a parcel:PrimaryParcel,
        geojson:FeatureCollection ;
    geojson:features <https://www.wa-example.com/features/1313>,
        <https://www.wa-example.com/features/9000>,
        <https://www.wa-example.com/features/9001> .

<https://www.wa-example.com/features/observedVectors> a surv:ObservedVector,
        geojson:FeatureCollection ;
    geojson:features <https://www.wa-example.com/features/145>,
        <https://www.wa-example.com/features/146>,
        <https://www.wa-example.com/features/147>,
        <https://www.wa-example.com/features/148>,
        <https://www.wa-example.com/features/201>,
        <https://www.wa-example.com/features/202>,
        <https://www.wa-example.com/features/203>,
        <https://www.wa-example.com/features/204>,
        <https://www.wa-example.com/features/205>,
        <https://www.wa-example.com/features/206>,
        <https://www.wa-example.com/features/2301>,
        <https://www.wa-example.com/features/2302>,
        <https://www.wa-example.com/features/2304>,
        <https://www.wa-example.com/features/2305>,
        <https://www.wa-example.com/features/2306>,
        <https://www.wa-example.com/features/2307>,
        <https://www.wa-example.com/features/2308>,
        <https://www.wa-example.com/features/2309>,
        <https://www.wa-example.com/features/2310>,
        <https://www.wa-example.com/features/2311>,
        <https://www.wa-example.com/features/2312>,
        <https://www.wa-example.com/features/2313>,
        <https://www.wa-example.com/features/2314>,
        <https://www.wa-example.com/features/2401>,
        <https://www.wa-example.com/features/2402>,
        <https://www.wa-example.com/features/2403>,
        <https://www.wa-example.com/features/2405>,
        <https://www.wa-example.com/features/2406>,
        <https://www.wa-example.com/features/2407>,
        <https://www.wa-example.com/features/2408>,
        <https://www.wa-example.com/features/2409>,
        <https://www.wa-example.com/features/2410>,
        <https://www.wa-example.com/features/2411>,
        <https://www.wa-example.com/features/2412>,
        <https://www.wa-example.com/features/2413>,
        <https://www.wa-example.com/features/2414>,
        <https://www.wa-example.com/features/301>,
        <https://www.wa-example.com/features/302>,
        <https://www.wa-example.com/features/303>,
        <https://www.wa-example.com/features/304>,
        <https://www.wa-example.com/features/305>,
        <https://www.wa-example.com/features/306>,
        <https://www.wa-example.com/features/307>,
        <https://www.wa-example.com/features/308>,
        <https://www.wa-example.com/features/309>,
        <https://www.wa-example.com/features/310>,
        <https://www.wa-example.com/features/45>,
        <https://www.wa-example.com/features/46>,
        <https://www.wa-example.com/features/47>,
        <https://www.wa-example.com/features/48> .

<https://www.wa-example.com/features/tic> a geojson:FeatureCollection,
        <https://www.wa-example.com/features/TerrainIntersectionCurve> ;
    sosa:hasMember <https://www.wa-example.com/features/6000> .

<vectorobservation:adoptions> a sosa:ObservationCollection,
        geojson:FeatureCollection ;
    sosa:hasMember [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/48> ;
            sosa:hasResult [ surv:distance 3.5215e+01 ] ;
            sosa:resultTime "2013-10-24T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:ground ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/45> ;
            sosa:hasResult [ surv:distance 3.8958e+01 ] ;
            sosa:resultTime "2013-10-24T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:ground ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/47> ;
            sosa:hasResult [ surv:distance 1.4598e+01 ] ;
            sosa:resultTime "2013-10-24T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:ground ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/46> ;
            sosa:hasResult [ surv:distance 1.796e+01 ] ;
            sosa:resultTime "2013-10-24T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:ground ] ;
    sosa:madeBySensor [ surv:sensorType icsm-equipment-type:null ] ;
    sosa:observedProperty surveyable:VectorDetermination ;
    sosa:resultTime "2024-07-22T00:00:00" ;
    sosa:usedProcedure icsm-procedure-used:adoptions .

<vectorobservation:calculations> a sosa:ObservationCollection,
        geojson:FeatureCollection ;
    sosa:hasMember [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/145> ;
            sosa:hasResult [ surv:distance 3.8965e+01 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2311> ;
            sosa:hasResult [ surv:distance 1.05e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2304> ;
            sosa:hasResult [ surv:distance 5.111e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2413> ;
            sosa:hasResult [ surv:distance 5.151e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/147> ;
            sosa:hasResult [ surv:distance 1.4602e+01 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2302> ;
            sosa:hasResult [ surv:distance 5.192e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2414> ;
            sosa:hasResult [ surv:distance 1.999e+01 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2406> ;
            sosa:hasResult [ surv:distance 8.15e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2312> ;
            sosa:hasResult [ surv:distance 1.75e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2410> ;
            sosa:hasResult [ surv:distance 5.192e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2314> ;
            sosa:hasResult [ surv:distance 1.8e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/148> ;
            sosa:hasResult [ surv:distance 3.5233e+01 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2409> ;
            sosa:hasResult [ surv:distance 2.0005e+01 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2308> ;
            sosa:hasResult [ surv:distance 1.999e+01 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2301> ;
            sosa:hasResult [ surv:distance 2.0005e+01 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2307> ;
            sosa:hasResult [ surv:distance 5.208e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2403> ;
            sosa:hasResult [ surv:distance 8.95e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2411> ;
            sosa:hasResult [ surv:distance 5.111e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2309> ;
            sosa:hasResult [ surv:distance 1.05e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2405> ;
            sosa:hasResult [ surv:distance 8.25e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2305> ;
            sosa:hasResult [ surv:distance 2.0004e+01 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2412> ;
            sosa:hasResult [ surv:distance 2.0004e+01 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2313> ;
            sosa:hasResult [ surv:distance 1.85e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2306> ;
            sosa:hasResult [ surv:distance 5.151e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2310> ;
            sosa:hasResult [ surv:distance 1.1e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2407> ;
            sosa:hasResult [ surv:distance 8.2e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2402> ;
            sosa:hasResult [ surv:distance 8.9e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2408> ;
            sosa:hasResult [ surv:distance 5.208e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/2401> ;
            sosa:hasResult [ surv:distance 8.95e+00 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/146> ;
            sosa:hasResult [ surv:distance 1.7957e+01 ] ;
            sosa:resultTime "2024-07-22T00:00:00" ;
            ns1:angleAccuracyMeasure 10000 ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceAccuracyMeasure 10000 ;
            ns1:distanceType icsm-distance-type:slope ] ;
    sosa:madeBySensor [ surv:sensorType icsm-equipment-type:software ] ;
    sosa:observedProperty surveyable:VectorDetermination ;
    sosa:resultTime "2024-07-22T00:00:00" ;
    sosa:usedProcedure icsm-procedure-used:calculation .

<https://www.wa-example.com/features/145> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:lot-boundary ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/1003> <https://www.wa-example.com/features/1002> ) ] .

<https://www.wa-example.com/features/146> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:road-boundary ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/1001> <https://www.wa-example.com/features/1002> ) ] .

<https://www.wa-example.com/features/147> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:lot-boundary ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/1003> <https://www.wa-example.com/features/1004> ) ] .

<https://www.wa-example.com/features/148> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:lot-boundary ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/1004> <https://www.wa-example.com/features/1001> ) ] .

<https://www.wa-example.com/features/201> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:terrain-intersection-curve ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2001> <https://www.wa-example.com/features/2002> ) ] .

<https://www.wa-example.com/features/202> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:terrain-intersection ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2002> <https://www.wa-example.com/features/2003> ) ] .

<https://www.wa-example.com/features/203> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:terrain-intersection ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2003> <https://www.wa-example.com/features/2004> ) ] .

<https://www.wa-example.com/features/204> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:terrain-intersection ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2004> <https://www.wa-example.com/features/2005> ) ] .

<https://www.wa-example.com/features/205> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:terrain-intersection ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2005> <https://www.wa-example.com/features/2006> ) ] .

<https://www.wa-example.com/features/206> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:terrain-intersection ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2006> <https://www.wa-example.com/features/2001> ) ] .

<https://www.wa-example.com/features/2301> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2101> <https://www.wa-example.com/features/2102> ) ] .

<https://www.wa-example.com/features/2302> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2102> <https://www.wa-example.com/features/2103> ) ] .

<https://www.wa-example.com/features/2304> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2103> <https://www.wa-example.com/features/2104> ) ] .

<https://www.wa-example.com/features/2305> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2104> <https://www.wa-example.com/features/2105> ) ] .

<https://www.wa-example.com/features/2306> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2105> <https://www.wa-example.com/features/2106> ) ] .

<https://www.wa-example.com/features/2307> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2106> <https://www.wa-example.com/features/2101> ) ] .

<https://www.wa-example.com/features/2308> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2106> <https://www.wa-example.com/features/2103> ) ] .

<https://www.wa-example.com/features/2309> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2101> <https://www.wa-example.com/features/2001> ) ] .

<https://www.wa-example.com/features/2310> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2106> <https://www.wa-example.com/features/2006> ) ] .

<https://www.wa-example.com/features/2311> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2105> <https://www.wa-example.com/features/2005> ) ] .

<https://www.wa-example.com/features/2312> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2102> <https://www.wa-example.com/features/2002> ) ] .

<https://www.wa-example.com/features/2313> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2103> <https://www.wa-example.com/features/2003> ) ] .

<https://www.wa-example.com/features/2314> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2104> <https://www.wa-example.com/features/2004> ) ] .

<https://www.wa-example.com/features/2401> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2001> <https://www.wa-example.com/features/2201> ) ] .

<https://www.wa-example.com/features/2402> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2006> <https://www.wa-example.com/features/2206> ) ] .

<https://www.wa-example.com/features/2403> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2005> <https://www.wa-example.com/features/2205> ) ] .

<https://www.wa-example.com/features/2405> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2002> <https://www.wa-example.com/features/2202> ) ] .

<https://www.wa-example.com/features/2406> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2003> <https://www.wa-example.com/features/2203> ) ] .

<https://www.wa-example.com/features/2407> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2004> <https://www.wa-example.com/features/2204> ) ] .

<https://www.wa-example.com/features/2408> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2206> <https://www.wa-example.com/features/2201> ) ] .

<https://www.wa-example.com/features/2409> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2201> <https://www.wa-example.com/features/2202> ) ] .

<https://www.wa-example.com/features/2410> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2202> <https://www.wa-example.com/features/2203> ) ] .

<https://www.wa-example.com/features/2411> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2203> <https://www.wa-example.com/features/2204> ) ] .

<https://www.wa-example.com/features/2412> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2204> <https://www.wa-example.com/features/2205> ) ] .

<https://www.wa-example.com/features/2413> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2205> <https://www.wa-example.com/features/2206> ) ] .

<https://www.wa-example.com/features/2414> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:strata-edge ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/2206> <https://www.wa-example.com/features/2203> ) ] .

<https://www.wa-example.com/features/4097> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800181e+05 6.397673e+06 ) ] .

<https://www.wa-example.com/features/4113> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:new-mark ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800568e+05 6.397668e+06 ) ] .

<https://www.wa-example.com/features/4309> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:new-mark ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800567e+05 6.397686e+06 ) ] .

<https://www.wa-example.com/features/4326> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800215e+05 6.397687e+06 ) ] .

<https://www.wa-example.com/features/45> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:lot-boundary ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/4097> <https://www.wa-example.com/features/4113> ) ] .

<https://www.wa-example.com/features/46> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:road-boundary ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/4309> <https://www.wa-example.com/features/4113> ) ] .

<https://www.wa-example.com/features/47> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:lot-boundary ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/4097> <https://www.wa-example.com/features/4326> ) ] .

<https://www.wa-example.com/features/48> a surv:ObservedVector,
        geojson:Feature ;
    container:purpose wa-vector-purpose:lot-boundary ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/4326> <https://www.wa-example.com/features/4309> ) ] .

<https://www.wa-example.com/features/2101> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "Duplex point" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800244e+05 6.397686e+06 2.2e+01 ) ] .

<https://www.wa-example.com/features/2102> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "Duplex point" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:new-mark ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800444e+05 6.397685e+06 2.2e+01 ) ] .

<https://www.wa-example.com/features/2104> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "Duplex point" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800442e+05 6.397675e+06 2.2e+01 ) ] .

<https://www.wa-example.com/features/2105> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "Duplex mark" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800242e+05 6.397675e+06 2.2e+01 ) ] .

<https://www.wa-example.com/features/2201> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "Duplex point" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800244e+05 6.397686e+06 3.2e+01 ) ] .

<https://www.wa-example.com/features/2202> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "Duplex point" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:new-mark ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800444e+05 6.397685e+06 3.2e+01 ) ] .

<https://www.wa-example.com/features/2204> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "Duplex point" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800442e+05 6.397675e+06 3.2e+01 ) ] .

<https://www.wa-example.com/features/2205> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "Duplex mark" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800242e+05 6.397675e+06 3.2e+01 ) ] .

<https://www.wa-example.com/features/1001> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "surface point" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:new-mark ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800567e+05 6.397686e+06 2.35e+01 ) ] .

<https://www.wa-example.com/features/1002> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "surface point" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:new-mark ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800568e+05 6.397668e+06 2.37e+01 ) ] .

<https://www.wa-example.com/features/2103> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "Duplex point" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:new-mark ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800443e+05 6.39768e+06 2.2e+01 ) ] .

<https://www.wa-example.com/features/2106> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "Duplex point" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:new-mark ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800243e+05 6.397681e+06 2.2e+01 ) ] .

<https://www.wa-example.com/features/2203> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "Duplex point" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:new-mark ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800443e+05 6.39768e+06 3.2e+01 ) ] .

<https://www.wa-example.com/features/2206> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "Duplex point" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:new-mark ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800243e+05 6.397681e+06 3.2e+01 ) ] .

<https://www.wa-example.com/features/1003> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "surface mark" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800181e+05 6.397673e+06 2.259e+01 ) ] .

<https://www.wa-example.com/features/1004> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "surface point" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800215e+05 6.397687e+06 2.205e+01 ) ] .

<https://www.wa-example.com/features/2001> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "surface mark" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800244e+05 6.397686e+06 2.305e+01 ) ] .

<https://www.wa-example.com/features/2005> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "surface mark" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800242e+05 6.397675e+06 2.305e+01 ) ] .

<https://www.wa-example.com/features/2002> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "surface point" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:new-mark ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800444e+05 6.397685e+06 2.375e+01 ) ] .

<https://www.wa-example.com/features/2003> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "surface point" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:new-mark ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800443e+05 6.39768e+06 2.385e+01 ) ] .

<https://www.wa-example.com/features/2004> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "surface point" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800442e+05 6.397675e+06 2.38e+01 ) ] .

<https://www.wa-example.com/features/2006> a surv:BoundaryMark,
        geojson:Feature ;
    rdfs:label <https://www.wa-example.com/features/> ;
    rdfs:comment "surface point" ;
    commonpatterns:qualityMeasure 1e-03 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:new-mark ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 3.800243e+05 6.397681e+06 2.31e+01 ) ] .


```

## Schema

```yaml
$schema: https://json-schema.org/draft/2020-12/schema
description: WA profile of Cadastral Survey Data Model
allOf:
- $ref: https://icsm-au.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/schema.yaml

```

Links to the schema:

* YAML version: [schema.yaml](https://literate-couscous-j7e78pr.pages.github.io/build/annotated/demo/3dcadastre/wa-3d/schema.json)
* JSON version: [schema.json](https://literate-couscous-j7e78pr.pages.github.io/build/annotated/demo/3dcadastre/wa-3d/schema.yaml)


# JSON-LD Context

```jsonld
{
  "@context": {
    "horizontalCRS": {
      "@id": "container:horizontalCRS",
      "@type": "@id"
    },
    "compoundCRS": {
      "@id": "container:compoundCRS",
      "@type": "@id"
    },
    "verticalDatum": {
      "@id": "container:verticalDatum",
      "@type": "@id"
    },
    "surveyDescription": "container:surveyDescription",
    "surveyDescriptors": {
      "@context": {
        "hasPart": {
          "@context": {
            "type": "commonpatterns:namePartType"
          },
          "@id": "dct:hasPart"
        },
        "name": "commonpatterns:name"
      },
      "@id": "container:surveyDescriptors"
    },
    "purpose": {
      "@id": "container:purpose",
      "@type": "@id"
    },
    "surveyType": {
      "@id": "container:surveyType",
      "@type": "@id"
    },
    "referencedCSDs": {
      "@context": {
        "name": "rdfs:label"
      },
      "@id": "container:referencedCSD"
    },
    "adminUnit": {
      "@context": {
        "href": {
          "@type": "@id",
          "@id": "oa:hasTarget"
        },
        "rel": {
          "@context": {
            "@base": "http://www.iana.org/assignments/relation/"
          },
          "@id": "http://www.iana.org/assignments/relation",
          "@type": "@id"
        },
        "type": "dct:type",
        "hreflang": "dct:language",
        "title": "rdfs:label",
        "length": "dct:extent",
        "role": {
          "@id": "prof:hasRole",
          "@type": "@id"
        },
        "conformsTo": {
          "@id": "dct:conformsTo",
          "@type": "@id"
        }
      },
      "@type": "@id",
      "@id": "container:adminUnit",
      "@container": "@set"
    },
    "supportingDocuments": {
      "@context": {
        "href": {
          "@type": "@id",
          "@id": "oa:hasTarget"
        },
        "rel": {
          "@context": {
            "@base": "http://www.iana.org/assignments/relation/"
          },
          "@id": "http://www.iana.org/assignments/relation",
          "@type": "@id"
        },
        "type": "dct:type",
        "hreflang": "dct:language",
        "title": "rdfs:label",
        "length": "dct:extent",
        "role": {
          "@id": "prof:hasRole",
          "@type": "@id"
        },
        "conformsTo": {
          "@id": "dct:conformsTo",
          "@type": "@id"
        }
      },
      "@id": "container:supportingDocuments",
      "@container": "@set"
    },
    "points": {
      "@context": {
        "name": {
          "@context": {
            "hasPart": {
              "@context": {
                "type": "commonpatterns:namePartType"
              },
              "@id": "dct:hasPart"
            },
            "name": "commonpatterns:name"
          },
          "@id": "rdfs:label",
          "@type": "@id"
        },
        "purpose": {
          "@type": "@id",
          "@id": "surv:purpose"
        },
        "ptQuality": {
          "@id": "commonpatterns:qualityClass",
          "@type": "@id"
        },
        "ptQualityMeasure": {
          "@id": "commonpatterns:qualityMeasure",
          "@type": "@id"
        },
        "comment": "rdfs:comment",
        "monumentedBy": {
          "@type": "@id",
          "@id": "surv:monumentedBy"
        },
        "age": "surv:age",
        "note": "rdfs:comment",
        "geodeticid": {
          "@context": {
            "hasPart": {
              "@context": {
                "type": "commonpatterns:namePartType"
              },
              "@id": "dct:hasPart"
            },
            "name": "commonpatterns:name"
          },
          "@id": "surv:geodeticid"
        },
        "condition": {
          "@type": "@id",
          "@id": "surv:condition"
        },
        "form": {
          "@type": "@id",
          "@id": "surv:form"
        },
        "replaces": {
          "@type": "@id",
          "@id": "surv:replaces"
        },
        "state": {
          "@type": "@id",
          "@id": "surv:state"
        },
        "references": {
          "@id": "geojson:relatedFeatures",
          "@type": "@id",
          "@container": "@list"
        },
        "vectorPurpose": {
          "@type": "@id",
          "@id": "surv:vectorPurpose"
        }
      },
      "@id": "container:points"
    },
    "observedVectors": {
      "@context": {
        "references": {
          "@id": "geojson:relatedFeatures",
          "@type": "@id",
          "@container": "@list"
        }
      },
      "@id": "container:observedVectors"
    },
    "adoptedVectors": "container:adoptedVectors",
    "parcels": {
      "@context": {
        "appellation": {
          "@context": {
            "hasPart": {
              "@context": {
                "type": "commonpatterns:namePartType"
              },
              "@id": "dct:hasPart"
            },
            "name": "commonpatterns:name"
          },
          "@id": "parcel:appellation"
        },
        "parcelType": {
          "@id": "parcel:type",
          "@type": "@id"
        },
        "parcelState": {
          "@id": "parcel:state",
          "@type": "@id"
        },
        "address": "sdo:address",
        "parcelPurpose": {
          "@id": "parcel:purpose",
          "@type": "@id"
        },
        "area": "parcel:surfaceArea",
        "floor": "parcel:floor",
        "zmin": "parcel:zmin",
        "zmax": "parcel:zmax",
        "interests": {
          "@context": {
            "interestLink": {
              "@type": "@id",
              "@id": "parcel:interestLink"
            },
            "interestName": "parcel:interestName",
            "interestType": {
              "@type": "@id",
              "@id": "parcel:interestType"
            },
            "dateInForce": "parcel:interestDateInForce",
            "dateExpires": "parcel:interestDateExpires",
            "statuteLink": {
              "@type": "@id",
              "@id": "parcel:statuteLink"
            },
            "statuteName": "parcel:statuteName",
            "benefitedPartyName": "parcel:benefitedPartyName",
            "benefitedPartyLink": {
              "@type": "@id",
              "@id": "parcel:benefitedPartyLink"
            },
            "originalSurveyLink": {
              "@type": "@id",
              "@id": "parcel:originalSurveyLink"
            },
            "referencedParcel": {
              "@type": "@id",
              "@id": "parcel:referencedParcel"
            },
            "burdenedParcels": {
              "@id": "parcel:burdened",
              "@container": "@set"
            },
            "benefitedParcels": {
              "@id": "parcel:benefited",
              "@container": "@set"
            },
            "description": "parcel:interestDescription",
            "entitlementPortion": "parcel:entitlementPortion",
            "liabilityPortion": "parcel:liabilityPortion"
          },
          "@id": "parcel:interest",
          "@container": "@set"
        }
      },
      "@id": "container:parcels"
    },
    "vectorObservations": {
      "@context": {
        "features": {
          "@id": "sosa:hasMember",
          "@type": "@id",
          "@container": "@set",
          "@context": {
            "features": {
              "@container": "@set",
              "@id": "sosa:hasMember",
              "@type": "@id"
            },
            "Prism": {
              "@id": "geojson:Prism",
              "@context": {
                "base": "geojson:prismBase",
                "lower": "geojson:prismLower",
                "upper": "geojson:prismUpper"
              }
            },
            "MultiPrism": {
              "@id": "geojson:MultiPrism",
              "@context": {
                "prisms": "geojson:prisms"
              }
            },
            "observedProperty": {
              "@id": "sosa:observedProperty",
              "@type": "@id"
            },
            "madeBySensor": {
              "@id": "sosa:madeBySensor",
              "@type": "@id"
            },
            "hasResult": {
              "@id": "sosa:hasResult",
              "@type": "@id",
              "@context": {
                "pose": {
                  "@context": {
                    "angles": "csdm:utils/geopose/angles"
                  },
                  "@id": "surv:pose"
                },
                "distance": "surv:distance"
              }
            },
            "angleAccuracy": "csdm:surveyobs/angleAccuracyMeasure",
            "distanceAccuracy": "csdm:surveyobs/distanceAccuracyMeasure",
            "distanceAccuracyClass": {
              "@type": "@id",
              "@id": "csdm:surveyobs/distanceAccuracyClass"
            },
            "angleAccuracyClass": {
              "@type": "@id",
              "@id": "csdm:surveyobs/angleAccuracyClass"
            }
          }
        }
      },
      "@id": "container:vectorObservations"
    },
    "resultTime": "sosa:resultTime",
    "phenomenonTime": {
      "@id": "sosa:phenomenonTime",
      "@type": "@id"
    },
    "hasFeatureOfInterest": {
      "@id": "sosa:hasFeatureOfInterest",
      "@type": "@id"
    },
    "observedProperty": {
      "@context": {
        "@base": "https://linked.data.gov.au/def/csdm/property/"
      },
      "@id": "sosa:observedProperty",
      "@type": "@id"
    },
    "usedProcedure": {
      "@id": "sosa:usedProcedure",
      "@type": "@id"
    },
    "madeBySensor": {
      "@context": {
        "@base": "https://linked.data.gov.au/def/csdm/sensors/Sensor",
        "sensorType": "@type",
        "baseSensor": "csdm:sensors/baseSensor",
        "roverSensor": "csdm:sensors/roverSensor"
      },
      "@id": "sosa:madeBySensor",
      "@type": "@id"
    },
    "hasMember": {
      "@context": {
        "observedProperty": {
          "@id": "sosa:observedProperty",
          "@type": "@id"
        },
        "madeBySensor": {
          "@id": "sosa:madeBySensor",
          "@type": "@id"
        },
        "features": {
          "@id": "sosa:hasMember",
          "@type": "@id"
        }
      },
      "@id": "sosa:hasMember",
      "@type": "@id"
    },
    "id": "@id",
    "properties": "@nest",
    "featureType": "@type",
    "ActuatableProperty": {
      "@id": "sosa:ActuatableProperty",
      "@type": "@id"
    },
    "Actuation": {
      "@id": "sosa:Actuation",
      "@type": "@id"
    },
    "ActuationCollection": {
      "@id": "sosa:ActuationCollection",
      "@type": "@id"
    },
    "Actuator": {
      "@id": "sosa:Actuator",
      "@type": "@id"
    },
    "Deployment": {
      "@id": "sosa:Deployment",
      "@type": "@id"
    },
    "Execution": {
      "@id": "sosa:Execution",
      "@type": "@id"
    },
    "FeatureOfInterest": {
      "@id": "sosa:FeatureOfInterest",
      "@type": "@id"
    },
    "ObservableProperty": {
      "@id": "sosa:ObservableProperty",
      "@type": "@id"
    },
    "Observation": {
      "@id": "sosa:Observation",
      "@type": "@id"
    },
    "ObservationCollection": {
      "@id": "sosa:ObservationCollection",
      "@type": "@id"
    },
    "Platform": {
      "@id": "sosa:Platform",
      "@type": "@id"
    },
    "Property": {
      "@id": "sosa:Property",
      "@type": "@id"
    },
    "Procedure ": {
      "@id": "sosa:Procedure",
      "@type": "@id"
    },
    "Sample": {
      "@id": "sosa:Sample",
      "@type": "@id"
    },
    "SampleCollection": {
      "@id": "sosa:SampleCollection",
      "@type": "@id"
    },
    "Sampler": {
      "@id": "sosa:Sampler",
      "@type": "@id"
    },
    "Sampling": {
      "@id": "sosa:Sampling",
      "@type": "@id"
    },
    "Sensor": {
      "@id": "sosa:Sensor",
      "@type": "@id"
    },
    "Stimulus": {
      "@id": "sosa:Stimulus",
      "@type": "@id"
    },
    "System": {
      "@id": "sosa:System",
      "@type": "@id"
    },
    "actsOnProperty": {
      "@id": "sosa:actsOnProperty",
      "@type": "@id"
    },
    "deployedOnPlatform": {
      "@id": "sosa:deployedOnPlatform",
      "@type": "@id"
    },
    "deployedSystem": {
      "@id": "sosa:deployedSystem",
      "@type": "@id"
    },
    "detects": {
      "@id": "sosa:detects",
      "@type": "@id"
    },
    "features": {
      "@id": "geojson:features",
      "@type": "@id",
      "@container": "@set",
      "@context": {
        "features": {
          "@container": "@set",
          "@id": "sosa:hasMember",
          "@type": "@id"
        },
        "Prism": {
          "@id": "geojson:Prism",
          "@context": {
            "base": "geojson:prismBase",
            "lower": "geojson:prismLower",
            "upper": "geojson:prismUpper"
          }
        },
        "MultiPrism": {
          "@id": "geojson:MultiPrism",
          "@context": {
            "prisms": "geojson:prisms"
          }
        },
        "observedProperty": {
          "@id": "sosa:observedProperty",
          "@type": "@id"
        },
        "madeBySensor": {
          "@id": "sosa:madeBySensor",
          "@type": "@id"
        },
        "hasResult": {
          "@id": "sosa:hasResult",
          "@type": "@id",
          "@context": {
            "pose": {
              "@context": {
                "angles": "csdm:utils/geopose/angles"
              },
              "@id": "surv:pose"
            },
            "distance": "surv:distance"
          }
        },
        "angleAccuracy": "csdm:surveyobs/angleAccuracyMeasure",
        "distanceAccuracy": "csdm:surveyobs/distanceAccuracyMeasure",
        "distanceAccuracyClass": {
          "@type": "@id",
          "@id": "csdm:surveyobs/distanceAccuracyClass"
        },
        "angleAccuracyClass": {
          "@type": "@id",
          "@id": "csdm:surveyobs/angleAccuracyClass"
        }
      }
    },
    "forProperty": {
      "@id": "sosa:forProperty",
      "@type": "@id"
    },
    "hasDeployment": {
      "@id": "sosa:hasDeployment",
      "@type": "@id"
    },
    "hasInput": {
      "@id": "sosa:hasInput",
      "@type": "@id"
    },
    "hasOriginalSample": {
      "@id": "sosa:hasOriginalSample",
      "@type": "@id"
    },
    "hasOutput": {
      "@id": "sosa:hasOutput",
      "@type": "@id"
    },
    "hasProperty": {
      "@id": "sosa:hasProperty",
      "@type": "@id"
    },
    "hasResult": {
      "@id": "sosa:hasResult",
      "@type": "@id"
    },
    "hasResultQuality": {
      "@id": "sosa:hasResultQuality",
      "@type": "@id"
    },
    "hasSample": {
      "@id": "sosa:hasSample",
      "@type": "@id"
    },
    "hasSampledFeature": {
      "@id": "sosa:hasSampledFeature",
      "@type": "@id"
    },
    "hasSimpleResult": {
      "@id": "sosa:hasSimpleResult",
      "@type": "@id"
    },
    "hasSubSystem": {
      "@id": "sosa:hasSubSystem",
      "@type": "@id",
      "@container": "@set"
    },
    "hasUltimateFeatureOfInterest": {
      "@id": "sosa:hasUltimateFeatureOfInterest",
      "@type": "@id"
    },
    "hosts": {
      "@id": "sosa:hosts",
      "@type": "@id",
      "@container": "@set"
    },
    "implementedBy": {
      "@id": "sosa:implementedBy",
      "@type": "@id"
    },
    "implements": {
      "@id": "sosa:implements",
      "@type": "@id"
    },
    "inDeployment": {
      "@id": "sosa:inDeployment",
      "@type": "@id"
    },
    "isActedOnBy": {
      "@id": "sosa:isActedOnBy",
      "@type": "@id"
    },
    "isFeatureOfInterestOf": {
      "@id": "sosa:isFeatureOfInterestOf",
      "@type": "@id"
    },
    "isHostedBy": {
      "@id": "sosa:isHostedBy",
      "@type": "@id"
    },
    "isObservedBy": {
      "@id": "sosa:isObservedBy",
      "@type": "@id"
    },
    "isPropertyOf": {
      "@id": "sosa:isPropertyOf",
      "@type": "@id"
    },
    "isProxyFor": {
      "@id": "sosa:isProxyFor",
      "@type": "@id"
    },
    "isResultOf": {
      "@id": "sosa:isResultOf",
      "@type": "@id"
    },
    "isResultOfMadeBySampler": {
      "@id": "sosa:isResultOfMadeBySampler",
      "@type": "@id"
    },
    "isResultOfUsedProcedure": {
      "@id": "sosa:isResultOfUsedProcedure",
      "@type": "@id"
    },
    "isSampleOf": {
      "@id": "sosa:isSampleOf",
      "@type": "@id"
    },
    "madeActuation": {
      "@id": "sosa:madeActuation",
      "@type": "@id"
    },
    "madeByActuator": {
      "@id": "sosa:madeByActuator",
      "@type": "@id"
    },
    "madeBySampler": {
      "@id": "sosa:madeBySampler",
      "@type": "@id"
    },
    "madeObservation": {
      "@id": "sosa:madeObservation",
      "@type": "@id"
    },
    "madeSampling": {
      "@id": "sosa:madeSampling",
      "@type": "@id"
    },
    "observes": {
      "@id": "sosa:observes",
      "@type": "@id"
    },
    "wasOriginatedBy": {
      "@id": "sosa:wasOriginatedBy",
      "@type": "@id"
    },
    "Accuracy": {
      "@id": "ssn-system:Accuracy",
      "@type": "@id"
    },
    "ActuationRange": {
      "@id": "ssn-system:ActuationRange",
      "@type": "@id"
    },
    "BatteryLifetime": {
      "@id": "ssn-system:BatteryLifetime",
      "@type": "@id"
    },
    "DetectionLimit": {
      "@id": "ssn-system:DetectionLimit",
      "@type": "@id"
    },
    "Drift": {
      "@id": "ssn-system:Drift",
      "@type": "@id"
    },
    "Frequency": {
      "@id": "ssn-system:Frequency",
      "@type": "@id"
    },
    "Latency": {
      "@id": "ssn-system:Latency",
      "@type": "@id"
    },
    "MaintenanceSchedule": {
      "@id": "ssn-system:MaintenanceSchedule",
      "@type": "@id"
    },
    "MeasurementRange": {
      "@id": "ssn-system:MeasurementRange",
      "@type": "@id"
    },
    "OperatingPowerRange": {
      "@id": "ssn-system:OperatingPowerRange",
      "@type": "@id"
    },
    "OperatingProperty": {
      "@id": "ssn-system:OperatingProperty",
      "@type": "@id"
    },
    "OperatingRange": {
      "@id": "ssn-system:OperatingRange",
      "@type": "@id"
    },
    "Precision": {
      "@id": "ssn-system:Precision",
      "@type": "@id"
    },
    "Resolution": {
      "@id": "ssn-system:Resolution",
      "@type": "@id"
    },
    "ResponseTime": {
      "@id": "ssn-system:ResponseTime",
      "@type": "@id"
    },
    "Selectivity": {
      "@id": "ssn-system:Selectivity",
      "@type": "@id"
    },
    "Sensitivity": {
      "@id": "ssn-system:Sensitivity",
      "@type": "@id"
    },
    "SurvivalProperty": {
      "@id": "ssn-system:SurvivalProperty",
      "@type": "@id"
    },
    "SystemLifetime": {
      "@id": "ssn-system:SystemLifetime",
      "@type": "@id"
    },
    "SurvivalRange": {
      "@id": "ssn-system:SurvivalRange",
      "@type": "@id"
    },
    "SystemCapability": {
      "@id": "ssn-system:SystemCapability",
      "@type": "@id"
    },
    "SystemProperty": {
      "@id": "ssn-system:SystemProperty",
      "@type": "@id"
    },
    "hasOperatingProperty": {
      "@id": "ssn-system:hasOperatingProperty",
      "@type": "@id"
    },
    "hasOperatingRange": {
      "@id": "ssn-system:hasOperatingRange",
      "@type": "@id"
    },
    "hasSurvivalProperty": {
      "@id": "ssn-system:hasSurvivalProperty",
      "@type": "@id"
    },
    "hasSystemCapability": {
      "@id": "ssn-system:hasSystemCapability",
      "@type": "@id"
    },
    "hasSystemProperty": {
      "@id": "ssn-system:hasSystemProperty",
      "@type": "@id"
    },
    "hasSurvivalRange": {
      "@id": "ssn-system:hasSurvivalRange",
      "@type": "@id"
    },
    "inCondition": {
      "@id": "ssn-system:inCondition",
      "@type": "@id"
    },
    "qualityOfObservation": {
      "@id": "ssn-system:qualityOfObservation",
      "@type": "@id"
    },
    "angleType": {
      "@context": {
        "@base": "https://linked.data.gov.au/def/csdm/defs/angletypes/"
      },
      "@type": "@id",
      "@id": "csdm:surveyobs/angleType"
    },
    "distanceType": {
      "@context": {
        "@base": "https://linked.data.gov.au/def/csdm/defs/distancetypes/"
      },
      "@type": "@id",
      "@id": "csdm:surveyobs/distanceType"
    },
    "occupationObservations": {
      "@context": {
        "features": {
          "@id": "sosa:hasMember",
          "@type": "@id"
        }
      },
      "@id": "container:occupationObservations"
    },
    "occupationFeatures": "container:occupationFeatures",
    "type": "@type",
    "geometry": "geojson:geometry",
    "bbox": {
      "@container": "@list",
      "@id": "geojson:bbox"
    },
    "Feature": "geojson:Feature",
    "FeatureCollection": "geojson:FeatureCollection",
    "GeometryCollection": "geojson:GeometryCollection",
    "LineString": "geojson:LineString",
    "MultiLineString": "geojson:MultiLineString",
    "MultiPoint": "geojson:MultiPoint",
    "MultiPolygon": "geojson:MultiPolygon",
    "Point": "geojson:Point",
    "Polygon": "geojson:Polygon",
    "links": {
      "@context": {
        "href": {
          "@type": "@id",
          "@id": "oa:hasTarget"
        },
        "rel": {
          "@context": {
            "@base": "http://www.iana.org/assignments/relation/"
          },
          "@id": "http://www.iana.org/assignments/relation",
          "@type": "@id"
        },
        "type": "dct:type",
        "hreflang": "dct:language",
        "title": "rdfs:label",
        "length": "dct:extent"
      },
      "@id": "rdfs:seeAlso"
    },
    "time": "dct:time",
    "coordRefSys": "http://www.opengis.net/def/glossary/term/CoordinateReferenceSystemCRS",
    "place": "dct:spatial",
    "Polyhedron": "geojson:Polyhedron",
    "MultiPolyhedron": "geojson:MultiPolyhedron",
    "Prism": {
      "@id": "geojson:Prism",
      "@context": {
        "base": "geojson:prismBase",
        "lower": "geojson:prismLower",
        "upper": "geojson:prismUpper"
      }
    },
    "MultiPrism": {
      "@id": "geojson:MultiPrism",
      "@context": {
        "prisms": "geojson:prisms"
      }
    },
    "coordinates": {
      "@container": "@list",
      "@id": "geojson:coordinates"
    },
    "geometries": {
      "@id": "geojson:geometry",
      "@container": "@list"
    },
    "topology": {
      "@context": {
        "references": {
          "@id": "geojson:relatedFeatures",
          "@type": "@id",
          "@container": "@list"
        }
      },
      "@type": "@id",
      "@id": "geojson:topology"
    },
    "date": {
      "@id": "owlTime:hasTime",
      "@type": "xsd:date"
    },
    "timestamp": {
      "@id": "owlTime:hasTime",
      "@type": "xsd:dateTime"
    },
    "interval": {
      "@id": "owlTime:hasTime",
      "@container": "@list"
    },
    "name": "rdfs:label",
    "bearingRotation": "container:bearingRotation",
    "annotations": {
      "@context": {
        "href": {
          "@type": "@id",
          "@id": "oa:hasTarget"
        },
        "rel": {
          "@context": {
            "@base": "http://www.iana.org/assignments/relation/"
          },
          "@id": "http://www.iana.org/assignments/relation",
          "@type": "@id"
        },
        "type": "dct:type",
        "hreflang": "dct:language",
        "title": "rdfs:label",
        "length": "dct:extent",
        "role": {
          "@id": "prof:hasRole",
          "@type": "@id"
        },
        "conformsTo": {
          "@id": "dct:conformsTo",
          "@type": "@id"
        }
      },
      "@id": "container:annotations"
    },
    "entityType": "@type",
    "has_provenance": {
      "@id": "dct:provenance",
      "@type": "@id"
    },
    "wasGeneratedBy": {
      "@id": "prov:wasGeneratedBy",
      "@type": "@id"
    },
    "wasAttributedTo": {
      "@context": {
        "href": {
          "@type": "@id",
          "@id": "oa:hasTarget"
        },
        "rel": {
          "@context": {
            "@base": "http://www.iana.org/assignments/relation/"
          },
          "@id": "http://www.iana.org/assignments/relation",
          "@type": "@id"
        },
        "type": "dct:type",
        "hreflang": "dct:language",
        "title": "rdfs:label",
        "length": "dct:extent"
      },
      "@id": "prov:wasAttributedTo",
      "@type": "@id"
    },
    "wasDerivedFrom": {
      "@id": "prov:wasDerivedFrom",
      "@type": "@id"
    },
    "alternateOf": {
      "@id": "prov:alternateOf",
      "@type": "@id"
    },
    "hadPrimarySource": {
      "@id": "prov:hadPrimarySource",
      "@type": "@id"
    },
    "specializationOf": {
      "@id": "prov:specializationOf",
      "@type": "@id"
    },
    "wasInvalidatedBy": {
      "@id": "prov:wasInvalidatedBy",
      "@type": "@id"
    },
    "wasQuotedFrom": {
      "@id": "prov:wasQuotedFrom",
      "@type": "@id"
    },
    "wasRevisionOf": {
      "@id": "prov:wasRevisionOf",
      "@type": "@id"
    },
    "atLocation": {
      "@id": "prov:atLocation",
      "@type": "@id"
    },
    "qualifiedGeneration": {
      "@context": {
        "atTime": {
          "@id": "prov:atTime",
          "@type": "xsd:dateTime"
        },
        "hadRole": {
          "@id": "prov:hadRole",
          "@type": "@id"
        },
        "influencer": {
          "@id": "prov:influencer",
          "@type": "@id"
        },
        "hadActivity": {
          "@id": "prov:hadActivity",
          "@type": "@id"
        },
        "activity": {
          "@id": "prov:activity",
          "@type": "@id"
        }
      },
      "@id": "prov:qualifiedGeneration",
      "@type": "@id"
    },
    "qualifiedInvalidation": {
      "@context": {
        "atTime": {
          "@id": "prov:atTime",
          "@type": "xsd:dateTime"
        },
        "hadRole": {
          "@id": "prov:hadRole",
          "@type": "@id"
        },
        "influencer": {
          "@id": "prov:influencer",
          "@type": "@id"
        },
        "hadActivity": {
          "@id": "prov:hadActivity",
          "@type": "@id"
        },
        "activity": {
          "@id": "prov:activity",
          "@type": "@id"
        }
      },
      "@id": "prov:qualifiedInvalidation",
      "@type": "@id"
    },
    "qualifiedDerivation": {
      "@context": {
        "hadGeneration": {
          "@context": {
            "atTime": {
              "@id": "prov:atTime",
              "@type": "xsd:dateTime"
            },
            "hadRole": {
              "@id": "prov:hadRole",
              "@type": "@id"
            },
            "influencer": {
              "@id": "prov:influencer",
              "@type": "@id"
            },
            "activity": {
              "@id": "prov:activity",
              "@type": "@id"
            }
          },
          "@id": "prov:hadGeneration",
          "@type": "@id"
        },
        "hadActivity": {
          "@id": "prov:hadActivity",
          "@type": "@id"
        },
        "hadUsage": {
          "@context": {
            "atTime": {
              "@id": "prov:atTime",
              "@type": "xsd:dateTime"
            }
          },
          "@id": "prov:hadUsage",
          "@type": "@id"
        },
        "entity": {
          "@id": "prov:entity",
          "@type": "@id"
        }
      },
      "@id": "prov:qualifiedDerivation",
      "@type": "@id"
    },
    "qualifiedAttribution": {
      "@context": {
        "agent": {
          "@id": "prov:agent",
          "@type": "@id"
        }
      },
      "@id": "prov:qualifiedAttribution",
      "@type": "@id"
    },
    "wasInfluencedBy": {
      "@id": "prov:wasInfluencedBy",
      "@type": "@id"
    },
    "qualifiedInfluence": {
      "@context": {
        "influencer": {
          "@id": "prov:influencer",
          "@type": "@id"
        },
        "entity": {
          "@id": "prov:entity",
          "@type": "@id"
        },
        "activity": {
          "@id": "prov:activity",
          "@type": "@id"
        },
        "agent": {
          "@id": "prov:agent",
          "@type": "@id"
        }
      },
      "@id": "prov:qualifiedInfluence",
      "@type": "@id"
    },
    "provType": "@type",
    "hadMember": {
      "@id": "prov:hadMember",
      "@type": "@id"
    },
    "activityType": "@type",
    "endedAtTime": {
      "@id": "prov:endedAtTime",
      "@type": "xsd:dateTime"
    },
    "wasAssociatedWith": {
      "@context": {
        "href": {
          "@type": "@id",
          "@id": "oa:hasTarget"
        },
        "rel": {
          "@context": {
            "@base": "http://www.iana.org/assignments/relation/"
          },
          "@id": "http://www.iana.org/assignments/relation",
          "@type": "@id"
        },
        "type": "dct:type",
        "hreflang": "dct:language",
        "title": "rdfs:label",
        "length": "dct:extent"
      },
      "@id": "prov:wasAssociatedWith",
      "@type": "@id"
    },
    "wasInformedBy": {
      "@id": "prov:wasInformedBy",
      "@type": "@id"
    },
    "used": {
      "@id": "prov:used",
      "@type": "@id"
    },
    "wasStartedBy": {
      "@id": "prov:wasStartedBy",
      "@type": "@id"
    },
    "wasEndedBy": {
      "@id": "prov:wasEndedBy",
      "@type": "@id"
    },
    "invalidated": {
      "@id": "prov:invalidated",
      "@type": "@id"
    },
    "generated": {
      "@id": "prov:generated",
      "@type": "@id"
    },
    "qualifiedUsage": {
      "@context": {
        "atTime": {
          "@id": "prov:atTime",
          "@type": "xsd:dateTime"
        },
        "entity": {
          "@id": "prov:entity",
          "@type": "@id"
        }
      },
      "@id": "prov:qualifiedUsage",
      "@type": "@id"
    },
    "qualifiedCommunication": {
      "@context": {
        "atTime": {
          "@id": "prov:atTime",
          "@type": "xsd:dateTime"
        },
        "hadRole": {
          "@id": "prov:hadRole",
          "@type": "@id"
        },
        "influencer": {
          "@id": "prov:influencer",
          "@type": "@id"
        },
        "hadActivity": {
          "@id": "prov:hadActivity",
          "@type": "@id"
        },
        "activity": {
          "@id": "prov:activity",
          "@type": "@id"
        }
      },
      "@id": "prov:qualifiedCommunication",
      "@type": "@id"
    },
    "qualifiedStart": {
      "@context": {
        "atTime": {
          "@id": "prov:atTime",
          "@type": "xsd:dateTime"
        },
        "entity": {
          "@id": "prov:entity",
          "@type": "@id"
        },
        "hadActivity": {
          "@id": "prov:hadActivity",
          "@type": "@id"
        }
      },
      "@id": "prov:qualifiedStart",
      "@type": "@id"
    },
    "qualifiedEnd": {
      "@context": {
        "atTime": {
          "@id": "prov:atTime",
          "@type": "xsd:dateTime"
        },
        "entity": {
          "@id": "prov:entity",
          "@type": "@id"
        },
        "hadActivity": {
          "@id": "prov:hadActivity",
          "@type": "@id"
        }
      },
      "@id": "prov:qualifiedEnd",
      "@type": "@id"
    },
    "qualifiedAssociation": {
      "@context": {
        "agent": {
          "@id": "prov:agent",
          "@type": "@id"
        },
        "hadRole": {
          "@id": "prov:hadRole",
          "@type": "@id"
        },
        "hadPlan": {
          "@id": "prov:hadPlan",
          "@type": "@id"
        }
      },
      "@id": "prov:qualifiedAssociation",
      "@type": "@id"
    },
    "agentType": "@type",
    "actedOnBehalfOf": {
      "@id": "prov:actedOnBehalfOf",
      "@type": "@id"
    },
    "qualifiedDelegation": {
      "@context": {
        "agent": {
          "@id": "prov:agent",
          "@type": "@id"
        },
        "hadActivity": {
          "@id": "prov:hadActivity",
          "@type": "@id"
        }
      },
      "@id": "prov:qualifiedDelegation",
      "@type": "@id"
    },
    "CSD": "container:CSD",
    "locality": "csd:locality",
    "PrimaryParcel": {
      "@id": "parcel:PrimaryParcel",
      "@type": "@id"
    },
    "SecondaryParcel": {
      "@id": "parcel:SecondaryParcel",
      "@type": "@id"
    },
    "parcelQualityClass": {
      "@id": "parcel:qualityClass",
      "@type": "@id"
    },
    "terrainIntersectionCurve": "parcel:terrainIntersectionCurve",
    "sensorType": {
      "@type": "@id",
      "@id": "surv:sensorType"
    },
    "sensorRole": {
      "@type": "@id",
      "@id": "surv:sensorRole"
    },
    "lastCalibrated": "surv:lastCalibrated",
    "CompoundName": "commonpatterns:CompoundName",
    "Arc": "geojson:Arc",
    "ArcWithCenter": "geojson:ArcWithCenter",
    "ArcByChord": "geojson:ArcByChord",
    "CircleByCenter": "geojson:CircleByCenter",
    "CubicSpline": "geojson:CubicSpline",
    "radius": "geojson:radius",
    "arcLength": "geojson:arcLength",
    "startTangentVector": "geojson:startTangentVector",
    "endTangentVector": "geojson:endTangentVector",
    "CadastralMark": {
      "@id": "surv:CadastralMark",
      "@type": "@id"
    },
    "BoundaryMark": {
      "@id": "surv:BoundaryMark",
      "@type": "@id"
    },
    "GeodeticReferenceMark": {
      "@id": "surv:GeodeticReferenceMark",
      "@type": "@id"
    },
    "ObservedVector": {
      "@id": "surv:ObservedVector",
      "@type": "@id"
    },
    "AdoptedVector": {
      "@id": "surv:SurveyedVector",
      "@type": "@id"
    },
    "label": "rdfs:label",
    "Activity": "prov:Activity",
    "ActivityInfluence": "prov:ActivityInfluence",
    "Agent": "prov:Agent",
    "AgentInfluence": "prov:AgentInfluence",
    "Association": "prov:Association",
    "Attribution": "prov:Attribution",
    "Bundle": "prov:Bundle",
    "Collection": "prov:Collection",
    "Communication": "prov:Communication",
    "Delegation": "prov:Delegation",
    "Derivation": "prov:Derivation",
    "EmptyCollection": "prov:EmptyCollection",
    "End": "prov:End",
    "Entity": "prov:Entity",
    "EntityInfluence": "prov:EntityInfluence",
    "Generation": "prov:Generation",
    "Influence": "prov:Influence",
    "InstantaneousEvent": "prov:InstantaneousEvent",
    "Invalidation": "prov:Invalidation",
    "Location": "prov:Location",
    "Organization": "prov:Organization",
    "Person": "prov:Person",
    "Plan": "prov:Plan",
    "PrimarySource": "prov:PrimarySource",
    "Quotation": "prov:Quotation",
    "Revision": "prov:Revision",
    "Role": "prov:Role",
    "SoftwareAgent": "prov:SoftwareAgent",
    "Start": "prov:Start",
    "Usage": "prov:Usage",
    "ServiceDescription": "prov:ServiceDescription",
    "DirectQueryService": "prov:DirectQueryService",
    "Accept": "prov:Accept",
    "Contribute": "prov:Contribute",
    "Contributor": "prov:Contributor",
    "Copyright": "prov:Copyright",
    "Create": "prov:Create",
    "Creator": "prov:Creator",
    "Modify": "prov:Modify",
    "Publish": "prov:Publish",
    "Publisher": "prov:Publisher",
    "Replace": "prov:Replace",
    "RightsAssignment": "prov:RightsAssignment",
    "RightsHolder": "prov:RightsHolder",
    "Submit": "prov:Submit",
    "Dictionary": "prov:Dictionary",
    "EmptyDictionary": "prov:EmptyDictionary",
    "KeyEntityPair": "prov:KeyEntityPair",
    "Insertion": "prov:Insertion",
    "Removal": "prov:Removal",
    "generatedAtTime": {
      "@id": "prov:generatedAtTime",
      "@type": "xsd:dateTime"
    },
    "invalidatedAtTime": {
      "@id": "prov:invalidatedAtTime",
      "@type": "xsd:dateTime"
    },
    "startedAtTime": {
      "@id": "prov:startedAtTime",
      "@type": "xsd:dateTime"
    },
    "value": "prov:value",
    "provenanceUriTemplate": "prov:provenanceUriTemplate",
    "pairKey": {
      "@id": "prov:pairKey",
      "@type": "rdfs:Literal"
    },
    "removedKey": {
      "@id": "prov:removedKey",
      "@type": "rdfs:Literal"
    },
    "influenced": {
      "@id": "prov:influenced",
      "@type": "@id"
    },
    "qualifiedPrimarySource": {
      "@id": "prov:qualifiedPrimarySource",
      "@type": "@id"
    },
    "qualifiedQuotation": {
      "@id": "prov:qualifiedQuotation",
      "@type": "@id"
    },
    "qualifiedRevision": {
      "@id": "prov:qualifiedRevision",
      "@type": "@id"
    },
    "has_anchor": {
      "@id": "prov:has_anchor",
      "@type": "@id"
    },
    "has_query_service": {
      "@id": "prov:has_query_service",
      "@type": "@id"
    },
    "describesService": {
      "@id": "prov:describesService",
      "@type": "@id"
    },
    "pingback": {
      "@id": "prov:pingback",
      "@type": "@id"
    },
    "dictionary": {
      "@id": "prov:dictionary",
      "@type": "@id"
    },
    "derivedByInsertionFrom": {
      "@id": "prov:derivedByInsertionFrom",
      "@type": "@id"
    },
    "derivedByRemovalFrom": {
      "@id": "prov:derivedByRemovalFrom",
      "@type": "@id"
    },
    "insertedKeyEntityPair": {
      "@id": "prov:insertedKeyEntityPair",
      "@type": "@id"
    },
    "hadDictionaryMember": {
      "@id": "prov:hadDictionaryMember",
      "@type": "@id"
    },
    "pairEntity": {
      "@id": "prov:pairEntity",
      "@type": "@id"
    },
    "qualifiedInsertion": {
      "@id": "prov:qualifiedInsertion",
      "@type": "@id"
    },
    "qualifiedRemoval": {
      "@id": "prov:qualifiedRemoval",
      "@type": "@id"
    },
    "asInBundle": {
      "@id": "prov:asInBundle",
      "@type": "@id"
    },
    "mentionOf": {
      "@id": "prov:mentionOf",
      "@type": "@id"
    },
    "container": "csdm:container/",
    "sdo": "https://schema.org/",
    "csd": "csdm:csd/",
    "parcel": "csdm:parcels/",
    "surv": "csdm:surveyfeatures/",
    "dct": "http://purl.org/dc/terms/",
    "commonpatterns": "csdm:commonpatterns/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "csdm": "https://linked.data.gov.au/def/csdm/",
    "oa": "http://www.w3.org/ns/oa#",
    "prof": "http://www.w3.org/ns/dx/prof/",
    "geojson": "https://purl.org/geojson/vocab#",
    "owlTime": "http://www.w3.org/2006/time#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "geosparql": "http://www.opengis.net/ont/geosparql#",
    "prov": "http://www.w3.org/ns/prov#",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "sosa": "http://www.w3.org/ns/sosa/",
    "ssn-system": "ssn:systems/",
    "ssn": "http://www.w3.org/ns/ssn/",
    "geopose": "csdm:utils/geopose/",
    "angletype": "csdm:defs/angletypes/",
    "distancetype": "csdm:defs/distancetypes/",
    "surveyproc": "csdm:defs/surveyprocedures/",
    "surveyable": "csdm:defs/surveyableproperties/",
    "icsm": "https://linked.data.gov.au/def/csdm/",
    "epsg": "http://www.opengis.net/def/crs/EPSG/0/",
    "surveytype": "csdm:surveytypes/",
    "icsm-jurisdictions": "csdm:jurisdictions/",
    "icsm-survey-type": "csdm:icsm-survey-type/",
    "survptpurp": "csdm:survptpurp/",
    "icsm-admin-unit-type": "csdm:icsm-admin-unit-type/",
    "icsm-procedure-used": "csdm:icsm-procedure-used/",
    "icsm-surveypoint-purpose": "csdm:icsm-surveypoint-purpose/",
    "icsm-parcel-state": "csdm:icsm-parcel-state/",
    "icsm-angle-type": "csdm:icsm-angle-type/",
    "icsm-equipment-type": "csdm:icsm-equipment-type/",
    "icsm-distance-type": "csdm:icsm-distance-type/",
    "icsm-arc-orientation": "csdm:arc-orientation/",
    "vocabs": "https://linked.data.gov.au/def/csdm/",
    "wa-surveypoint-purpose": "csdm:wa-surveypoint-purpose/",
    "wa-survey-purpose": "csdm:wa-survey-purpose/",
    "wa-survey-type": "csdm:wa-survey-type/",
    "wa-procedure-used": "csdm:wa-procedure-used/",
    "wa-survey-documentation-type": "csdm:wa-survey-documentation-type/",
    "wa-annotation-role": "csdm:wa-annotation/",
    "wa-parcel-purpose": "csdm:wa-parcel-purpose/",
    "wa-parcel-type": "csdm:wa-parcel-type/",
    "wa-parcel-state": "csdm:wa-parcel-state/",
    "wa-nonprimary-parcel-type": "csdm:wa-secondary-parcel-type/",
    "wa-monument-form": "csdm:wa-monument-form/",
    "wa-monument-condition": "csdm:wa-monument-condition/",
    "wa-monument-state": "csdm:wa-monument-state/",
    "wa-vector-purpose": "csdm:wa-vector-purpose/",
    "wa-vector-type": "csdm:wa-vector-type/",
    "wa-secondary-parcel-purpose": "csdm:wa-secondary-parcel-purpose/",
    "wa-secondary-parcel-type": "csdm:wa-secondary-parcel-type/",
    "wa-secondary-purpose": "csdm:wa-secondary-purpose/",
    "wa-interest-type": "csdm:wa-interest-type/",
    "wa-interest": "csdm:wa-interest/",
    "wa-locality": "csdm:wa-locality/",
    "wa-local-government": "csdm:wa-local-government/",
    "registered-surveyors": "https://wa.gov.au/surveyors/",
    "foaf": "http://xmlns.com/foaf/0.1/",
    "@version": 1.1
  }
}
```

You can find the full JSON-LD context here:
[context.jsonld](https://literate-couscous-j7e78pr.pages.github.io/build/annotated/demo/3dcadastre/wa-3d/context.jsonld)

## Sources

* [3D Cadastre Survey Data Model](https://icsm-au.github.io/3d-csdm-common)

# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/surroundaustralia/wa-3d-cadastre-demo](https://github.com/surroundaustralia/wa-3d-cadastre-demo)
* Path: `_sources/wa-3d`

