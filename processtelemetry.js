#!/usr/bin/env node

const gpmfExtract = require('gpmf-extract');
const goproTelemetry = require('gopro-telemetry');
const fs = require('fs');

if (process.argv.length < 3) {
  console.error('Usage: processtelemetry <input_video_path>');
  process.exit(1);
}



const videoFilePath = process.argv[2];

//console.log('Input video file path:', videoFilePath);


// Create a readable stream from the video file
const readStream = fs.createReadStream(videoFilePath);



// Collect chunks of data from the stream
const chunks = [];
readStream.on('data', (chunk) => {
  chunks.push(chunk);
});

readStream.on('end', () => {
  // Concatenate the chunks to create the complete video data
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
