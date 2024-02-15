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
$ kitemill@KM-UBUNTU01:~/kitemill_internal_media/inbox$ processtelemetry ./'Testweek 42'/Tuesday/GS014680.360
[
  1697552142159,
  1697552142244,
  1697552142330,
  1697552142416,
  1697552142502,
  1697552142588,
  1697552142674,
  1697552142760,
  1697552142846,
  1697552142932,
  1697552143018,
  1697552143104,
  1697552143190,
  1697552143276,
  1697552143362,
  1697552143448,
  1697552143534,
  1697552143589,
  1697552143644,
  1697552143699,
  1697552143754,
  1697552143809,
  1697552143864,
  1697552143919,
  1697552143974,
  1697552144029,
  1697552144084,
  1697552144139,
  1697552144194,

```




