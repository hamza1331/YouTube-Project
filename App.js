/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import firebase from 'react-native-firebase';
import YouTube from 'react-native-youtube'

import {
  SafeAreaView,
  Platform,View
} from 'react-native';


const App = () => {
  const Banner = firebase.admob.Banner;
  const AdRequest = firebase.admob.AdRequest;
  
  const request = new AdRequest();
  const unitId =
  Platform.OS === 'ios'
    ? 'ca-app-pub-6938707447888789/8748968424'
    : 'ca-app-pub-3940256099942544/6300978111';
  return (
      <SafeAreaView style={{borderLeftColor:'white',borderRightColor:'white',borderLeftWidth:10,borderRightWidth:10,backgroundColor:'#ededeb'
      
      }}>
        <YouTube
  videoId="KVZ-P-ZI6W4"   // The YouTube video ID
  play                    // control playback of video with true/false
  loop                    // control whether the video should loop when ended
  apiKey='468757366156-6fheg94rjasc9qlj45k61psfv0udnncu.apps.googleusercontent.com'
  fullscreen

  style={{ alignSelf: 'stretch', height: 200,marginBottom:150 }}
/>
        <Banner
          
          unitId={unitId}
          size={'SMART_BANNER'}
          request={request.build()}
          onAdLoaded={() => {
            console.log('Advert loaded');
          }}
        />
      </SafeAreaView>
  );
};

export default App;
