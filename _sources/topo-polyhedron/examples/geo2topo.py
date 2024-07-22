import json

def make_point_id(item):
    return "P" + "_".join(map(str, item))
def extract_points_with_ids(nested_list):
    points = {}

    def recurse(current_list):
        for item in current_list:
            if isinstance(item, list):
                if isinstance(item[0], float):
                    id = make_point_id(item)
                    points[id] = item
                else:
                    recurse(item)
            else:
                raise ("should be a list of numbers")

    recurse(nested_list)
    return points

def extract_points_from_coordinates(coordinates):
    point_features = []

    points = extract_points_with_ids(coordinates)

    # Base case: coordinates are points
    for p in points.keys():
        point_feature = {
            "type": "Feature",
            "id": p,
            "geometry": {
                "type": "Point",
                "coordinates": points[p]
            },
            "properties": {}
        }
        point_features.append(point_feature)

    return point_features


def convert_coordinates_to_references(coordinates):
    topo = []

    def recurse(current_list):
        # Check if the current list contains any sublists
        if any(isinstance(item, list) for item in current_list):
            # Recursively process sublists
            return [recurse(item) if isinstance(item, list) else item for item in current_list]
        else:
            # If no sublists are present, hash the current list
            return make_point_id(current_list)

    if not isinstance(coordinates, list):
        return coordinates

    return recurse(coordinates)


def polyhedron_to_points(geojson):
    point_features = []
    polyhedrons = []
    if geojson['type'] == 'FeatureCollection':
        features = geojson['features']
    else:
        features = [geojson]

    for feature in features:
        if 'coordinates' in feature['place']:
            point_features.extend(
                extract_points_from_coordinates(feature['place']['coordinates']))
            feature['topology'] = { "type": feature['place']['type'] ,
                                    "references": convert_coordinates_to_references(feature['place']['coordinates'])
                                    }
            feature['place']['type']
            polyhedrons.append(feature)

    # Create the final GeoJSON FeatureCollection
    point_feature_collection = {
        "type": "FeatureCollection",
        "features": point_features + polyhedrons
    }

    return point_feature_collection


# Read the input file
with open('building.json', 'r') as f:
    geojson = json.load(f)

# Convert the polyhedron to points
geojson_points = polyhedron_to_points(geojson)

# Write the output to a new file
with open('building_topo.json', 'w') as f:
    json.dump(geojson_points, f, indent=2)

print("Conversion complete. Check points.json for the output.")
