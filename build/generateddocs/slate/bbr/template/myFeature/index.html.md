---
title: Custom Feature (Schema)

language_tabs:
  - json: JSON
  - jsonld: JSON-LD
  - turtle: RDF/Turtle

toc_footers:
  - Version 1.0
  - <a href='#'>Custom Feature</a>
  - <a href='https://blocks.ogc.org/register.html'>Building Blocks register</a>

search: true

code_clipboard: true

meta:
  - name: Custom Feature (Schema)
---


# Custom Feature `ogc.bbr.template.myFeature`

This examples shows a simple customisation for OGC API Feature schemas

<p class="status">
    <span data-rainbow-uri="http://www.opengis.net/def/status">Status</span>:
    <a href="http://www.opengis.net/def/status/under-development" target="_blank" data-rainbow-uri>Under development</a>
</p>

<aside class="success">
This building block is <strong><a href="https://github.com/surroundaustralia/wa-3d-cadastre-demo/blob/master/build/tests/bbr/template/myFeature/" target="_blank">valid</a></strong>
</aside>

# Description

## Custom Feature Type 

This building block illustrates a typical "Feature Type" - where an object is modelled as a "Feature with geometry", but has its own "native schema" - or "domain model".

This is an **interoperable** approach to defining a Feature, allowing re-use of a well-defined domain model.

i.e. the attributes (properties) are managed independently of the packaging container (Feature) 

the **mySchema" building block is referenced by this container, complete with an example of semantic annotations for the domain model.  It may inherit reusable sub-components using the same mechanisms - after all there is usually a lot in common across a range of FeatureTypes in any environment.  

This building block **inherits** reusable semantic annotations from a common library, simplifying implementation. 




# Examples

## GeoJSON - specialisation example.



```json
{
  "@context": {
    "mynamespace": "http://example.org/ns1/"
  },
  "id": "f1",
  "type": "Feature",
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        -111.67183507997295,
        40.056709946862874
      ],
      [
        -111.71,
        40.156709946862874
      ]
    ]
  },
  "properties": {
    "a": "mynamespace:aThing",
    "b": 23,
    "c": 0.1
  }
}

```

<blockquote class="lang-specific json">
  <p class="example-links">
    <a target="_blank" href="https://raw.githubusercontent.com/surroundaustralia/wa-3d-cadastre-demo/master/build/tests/bbr/template/myFeature/example_1_1.json">Open in new window</a>
    <a target="_blank" href="https://avillar.github.io/TreedocViewer/?dataParser=json&amp;dataUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsurroundaustralia%2Fwa-3d-cadastre-demo%2Fmaster%2Fbuild%2Ftests%2Fbbr%2Ftemplate%2FmyFeature%2Fexample_1_1.json&amp;expand=2&amp;option=%7B%22showTable%22%3A+false%7D">View on JSON Viewer</a></p>
</blockquote>




```jsonld
{
  "@context": [
    "https://raw.githubusercontent.com/surroundaustralia/wa-3d-cadastre-demo/master/build/annotated/bbr/template/myFeature/context.jsonld",
    {
      "mynamespace": "http://example.org/ns1/"
    }
  ],
  "id": "f1",
  "type": "Feature",
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        -111.67183507997295,
        40.056709946862874
      ],
      [
        -111.71,
        40.156709946862875
      ]
    ]
  },
  "properties": {
    "a": "mynamespace:aThing",
    "b": 23,
    "c": 0.1
  }
}
```

<blockquote class="lang-specific jsonld">
  <p class="example-links">
    <a target="_blank" href="https://raw.githubusercontent.com/surroundaustralia/wa-3d-cadastre-demo/master/build/tests/bbr/template/myFeature/example_1_1.jsonld">Open in new window</a>
    <a target="_blank" href="https://json-ld.org/playground/#json-ld=https%3A%2F%2Fraw.githubusercontent.com%2Fsurroundaustralia%2Fwa-3d-cadastre-demo%2Fmaster%2Fbuild%2Ftests%2Fbbr%2Ftemplate%2FmyFeature%2Fexample_1_1.jsonld">View on JSON-LD Playground</a>
</blockquote>




```turtle
@prefix geojson: <https://purl.org/geojson/vocab#> .
@prefix mynamespace: <http://example.org/ns1/> .
@prefix ns1: <https://example.org/my-bb-model/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<http://example.com/features/f1> a mynamespace:aThing,
        geojson:Feature ;
    ns1:b 23 ;
    ns1:c 1e-01 ;
    geojson:geometry [ a geojson:LineString ;
            geojson:coordinates ( ( -1.116718e+02 4.005671e+01 ) ( -1.1171e+02 4.015671e+01 ) ) ] .


```

<blockquote class="lang-specific turtle">
  <p class="example-links">
    <a target="_blank" href="https://raw.githubusercontent.com/surroundaustralia/wa-3d-cadastre-demo/master/build/tests/bbr/template/myFeature/example_1_1.ttl">Open in new window</a>
</blockquote>



# JSON Schema

```yaml--schema
$schema: https://json-schema.org/draft/2020-12/schema
description: Example of a sinmple GeoJSON Feature specialisation
$defs:
  MyFeature:
    allOf:
    - $ref: https://opengeospatial.github.io/bblocks/annotated-schemas/geo/features/feature/schema.yaml
    - properties:
        properties:
          $ref: https://raw.githubusercontent.com/surroundaustralia/wa-3d-cadastre-demo/master/build/annotated/bbr/template/mySchema/schema.yaml
anyOf:
- $ref: '#/$defs/MyFeature'

```

> <a target="_blank" href="https://avillar.github.io/TreedocViewer/?dataParser=yaml&amp;dataUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsurroundaustralia%2Fwa-3d-cadastre-demo%2Fmaster%2Fbuild%2Fannotated%2Fbbr%2Ftemplate%2FmyFeature%2Fschema.yaml&amp;expand=2&amp;option=%7B%22showTable%22%3A+false%7D">View on YAML Viewer</a>

Links to the schema:

* YAML version: <a href="https://raw.githubusercontent.com/surroundaustralia/wa-3d-cadastre-demo/master/build/annotated/bbr/template/myFeature/schema.yaml" target="_blank">https://raw.githubusercontent.com/surroundaustralia/wa-3d-cadastre-demo/master/build/annotated/bbr/template/myFeature/schema.yaml</a>
* JSON version: <a href="https://raw.githubusercontent.com/surroundaustralia/wa-3d-cadastre-demo/master/build/annotated/bbr/template/myFeature/schema.json" target="_blank">https://raw.githubusercontent.com/surroundaustralia/wa-3d-cadastre-demo/master/build/annotated/bbr/template/myFeature/schema.json</a>


# JSON-LD Context

```json--ldContext
{
  "@context": {
    "type": "@type",
    "id": "@id",
    "properties": "@nest",
    "geometry": {
      "@context": {
        "coordinates": {
          "@container": "@list",
          "@id": "geojson:coordinates"
        }
      },
      "@id": "geojson:geometry"
    },
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
    "features": {
      "@container": "@set",
      "@id": "geojson:features"
    },
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
    "a": "@type",
    "b": "https://example.org/my-bb-model/b",
    "c": "https://example.org/my-bb-model/c",
    "geojson": "https://purl.org/geojson/vocab#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "oa": "http://www.w3.org/ns/oa#",
    "dct": "http://purl.org/dc/terms/",
    "@version": 1.1
  }
}
```

> <a target="_blank" href="https://json-ld.org/playground/#json-ld=https%3A%2F%2Fraw.githubusercontent.com%2Fsurroundaustralia%2Fwa-3d-cadastre-demo%2Fmaster%2Fbuild%2Fannotated%2Fbbr%2Ftemplate%2FmyFeature%2Fcontext.jsonld">View on JSON-LD Playground</a>

You can find the full JSON-LD context here:
<a href="https://raw.githubusercontent.com/surroundaustralia/wa-3d-cadastre-demo/master/build/annotated/bbr/template/myFeature/context.jsonld" target="_blank">https://raw.githubusercontent.com/surroundaustralia/wa-3d-cadastre-demo/master/build/annotated/bbr/template/myFeature/context.jsonld</a>

# Validation

## SHACL Shapes

The following sets of SHACL shapes are used for validating this building block:

* My Schema <small><code>ogc.bbr.template.mySchema</code></small>
  * [https://raw.githubusercontent.com/surroundaustralia/wa-3d-cadastre-demo/master/_sources/mySchema/rules.shacl](https://raw.githubusercontent.com/surroundaustralia/wa-3d-cadastre-demo/master/_sources/mySchema/rules.shacl)

# References

* [OGC API - Features, Part 1, 7.16.2: Feature Response](https://docs.ogc.org/is/17-069r3/17-069r3.html#_response_7)

# For developers

The source code for this Building Block can be found in the following repository:

* URL: <a href="https://github.com/surroundaustralia/wa-3d-cadastre-demo" target="_blank">https://github.com/surroundaustralia/wa-3d-cadastre-demo</a>
* Path:
<code><a href="https://github.com/surroundaustralia/wa-3d-cadastre-demo/blob/HEAD/_sources/myFeature" target="_blank">_sources/myFeature</a></code>

