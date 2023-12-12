# GoPro Telemetry Extractor

This script extracts and processes telemetry data from a GoPro video file using the `gpmf-extract` and `gopro-telemetry` libraries.

## Prerequisites

1. Node.js
2. npm (Node Package Manager)

If you are using Linux you should install nodejs and npm from the NodeSource
repository as descibed on
https://github.com/nodesource/distributions
. Node version 20 was installed.

## Installation

1. Clone this repository
   ```bash
   git clone https://github.com/kitemill/km_gopro_json.git
   cd km_gopro_json
   ```

2. Install the required packages:
   ```bash
   npm install
   sudo npm install -g
   ```

## Usage

Run the script using the following command:

```bash
$ processtelemetry <video file along with the path>
```

## Example

```
$ processtelemetry /Users/tallakt/Downloads/snorlax_gopro_max/GS012799.MP4
{
  "1": {
    "streams": {
      "ACCL": {
        "samples": [
          {
            "value": [
              -8.462829736211031,
              -0.5371702637889688,
              4.932853717026379
            ],
            "cts": 153.538,
            "date": "2022-12-20T13:12:13.739Z",
            "sticky": {
              "temperature [°C]": 27.822265625
            }
          },
          {
            "value": [
              -8.419664268585132,
              -0.5947242206235012,
              4.906474820143885
            ],
            "cts": 158.5141144278607,
            "date": "2022-12-20T13:12:13.747Z"
          },
          {
            "value": [
              -8.417266187050359,
```




