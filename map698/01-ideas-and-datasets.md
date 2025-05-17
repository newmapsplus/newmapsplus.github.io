# 01: Ideas and Datasets

Often, lofty ideas are stymied by a lack of data. This week, we'll explore the data landscape and consider how data might inform our project contours.

Start by creating a new private repository in your GitHub account. Name it something like `map698-ideas-and-datasets`. This repository will be a place to store your ideas and datasets with your instructor.

## Ideas

Begin by brainstorming and documenting ideas for your final project. This can take many forms, such as sketches, mock-ups, and prose. Don't worry too much now about formality; the goal is to get your ideas down on paper. However you find creative flow, do that. Over the course of this semester, you'll refine and iterate on these ideas to make a formal final proposal.

## Datasets

In tandem to sketching ideas, you'll want to search for data for your project. You'll want to find a few datasets that you think might be useful. These datasets can be in any format, but you'll want to ensure that they can be well-documented in a final proposal.

You'll likely want to start visualizing this data. Instead of using a stock base map from ESRI, Carto, etc., start designing a custom base map. The easiest way to do this is to use Mapbox's Studio and its raster tiles service. Let's this be an opportunity to experiment with design choices like colors, typefaces, and other cartographic elements.

### Creating custom Mapbox raster tilesets

Let's make a custom base map using raster tiles produced and hosted by Mapbox. You'll first need to create a free account with Mapbox (if you don't already have one) and obtain your API access token: https://www.mapbox.com/account/access-tokens.

Begin writing the JavaScript to create the Leaflet map with a reference to the Mapbox tiles:

```javascript
// initialize map, centered on null island for now
var map = L.map("map", {
  zoomSnap: 0.1,
  zoom: 7,
  center: [0, 0],
  zoomControl: false,
  minZoom: 6,
  maxZoom: 9,
});

// mapbox API access Token
var accessToken = "<your access token here>";

// request a mapbox raster tile layer and add to map
L.tileLayer(
  `https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`,
  {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: "light-v10",
    accessToken: accessToken,
  }
).addTo(map);
```

The [Mapbox maps API offers a variety of basemaps](https://www.mapbox.com/api-documentation/#maps) for use within your map. You can even create your own base map in Mapbox.

If you want to make a custom base map, follow these steps in order to use them with Leaflet.

1. Log in to Mapbox.com
2. Open **Studio** and press **New style**
3. Select and customize the template
4. **Publish** the style and then **Share**
5. Make note of the following parameters in the **Developers resources** section in the share dialog (parse the style URL for the first two):
   - Your user name
   - The map style ID
   - Your access token
6. Construct a URL in the following format with your parameters
   https://api.mapbox.com/styles/v1/YOUR_USERNAME/YOUR_STYLE_ID/tiles/256/{z}/{x}/{y}?access_token=YOUR_ACCESS_TOKEN
7. Use this URL in Leaflet's L.TileLayer class for your new base map, e.g,

Note: The style ID can be found in the `Style URL` when you **Share** the map. For example, the style ID for the following URL is `cl9x1wcao000d14pcddmwbvfl`:

```html
<!-- Developer Share Style URL -->
mapbox://styles/some_user_id/cl9x1wcao000d14pcddmwbvfl
```

Once you pull it all together, your code could look like this:

```js
// mapbox API parameters
const accessToken = `Andthat'swhenitbecomesfun-youdon'thavetospendyourtimethinkingaboutwhat'shappening-youjustletithappen.`;
const yourName = "bobRoss1972";
const yourMap = "autumnrainsmoonlitnightlyglow";

// request a mapbox raster tile layer and add to map
L.tileLayer(
  `https://api.mapbox.com/styles/v1/${yourName}/${yourMap}/tiles/256/{z}/{x}/{y}?access_token=${accessToken}`,
  {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    // Note: the map style ID and access token should not be included
  }
).addTo(map);
```

Mapbox will create a static raster tile set from your map style. If you make a change to your map, the changes might not show in the static tiles for 12 hours. Consult Mapbox's [static tiles documentation](https://docs.mapbox.com/api/maps/#static-tiles).

Save these changes and then test the file in your browser.

## Deliverables

1. A new private repository in your GitHub account named something like `map698-ideas-and-datasets`.
2. ...
3. ...
4. ...
