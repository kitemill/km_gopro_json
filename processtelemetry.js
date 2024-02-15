#!/usr/bin/node --max-old-space-size=16384

const gpmfExtract = require('gpmf-extract');
const goproTelemetry = require('gopro-telemetry');
const fs = require('fs');

if (process.argv.length < 3) {
  console.error('Usage: processtelemetry <input_video_path>');
  process.exit(1);
}

const videoFilePath = process.argv[2];
const readStream = fs.createReadStream(videoFilePath);

const chunks = [];
readStream.on('data', (chunk) => {
  chunks.push(chunk);
});

readStream.on('end', () => {
  const videoData = Buffer.concat(chunks);
  gpmfExtract(videoData)
  .then((gpmfData) => {
    return goproTelemetry(gpmfData, { simple: true });
  })
  .then((telemetryData) => {
	  tmp = telemetryData["1"]["streams"]["GPS5"]["samples"];
	  timestamps = tmp.map((x) => (new Date(x["date"])).getTime());
	  console.log(JSON.stringify(timestamps, null, 2));
    })
    .catch((err) => {
      console.error('Error processing GPMF data:', err);
    });
});

readStream.on('error', (error) => {
  console.error('Error reading the file:', error);
});
