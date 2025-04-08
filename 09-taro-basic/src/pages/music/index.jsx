import React, { useState, useEffect } from "react";
import { View, Image, Text } from "@tarojs/components";
import { AtList, AtListItem, AtIcon, AtSlider } from "taro-ui";
import Taro from "@tarojs/taro";

import "./index.scss";

const Music = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const musicList = [
    {
      id: 1,
      title: "眉间不点砂",
      artist: "祖娅纳惜",
      duration: "4:30",
      cover:
        "https://whyhd.oss-cn-nanjing.aliyuncs.com/2024/11/19/0499fd08-70d4-45f1-afb8-251ce6a88c52.png",
      url: "https://whyhd.oss-cn-nanjing.aliyuncs.com/music/%E7%9C%89%E9%97%B4%E4%B8%8D%E7%82%B9%E7%A0%82%20-%20%E7%A5%96%E5%A8%85%E7%BA%B3%E6%83%9C.mp3",
    },
    {
      id: 2,
      title: "祝福",
      artist: "YOASOBI",
      duration: "3:45",
      cover:
        "https://whyhd.oss-cn-nanjing.aliyuncs.com/2024/11/19/3eec7db0-3a11-4c2f-baea-dd0722ae9656.png",
      url: "https://whyhd.oss-cn-nanjing.aliyuncs.com/music/%E7%A5%9D%E7%A6%8F%20-%20YOASOBI.mp3",
    },
    {
      id: 3,
      title: "群青",
      artist: "YOASOBI",
      duration: "3:35",
      cover:
        "https://whyhd.oss-cn-nanjing.aliyuncs.com/2024/11/19/3eec7db0-3a11-4c2f-baea-dd0722ae9656.png",
      url: "https://whyhd.oss-cn-nanjing.aliyuncs.com/music/%E7%BE%A4%E9%9D%92%20-%20YOASOBI.mp3",
    },
  ];

  const [audioContext, setAudioContext] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = Taro.createInnerAudioContext();
    setAudioContext(audio);

    audio.onTimeUpdate(() => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    });

    return () => {
      audio.destroy();
    };
  }, []);

  const handlePlayClick = (song) => {
    if (currentSong && currentSong.id === song.id) {
      if (isPlaying) {
        audioContext.pause();
      } else {
        audioContext.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      if (audioContext) {
        audioContext.stop();
      }
      audioContext.src = song.url;
      audioContext.play();
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <View className="music">
      <View className="current-playing">
        {currentSong ? (
          <View className="player">
            <Image
              className="cover-image"
              src={currentSong.cover}
              mode="aspectFill"
            />
            <View className="song-info">
              <View className="title">{currentSong.title}</View>
              <View className="artist">{currentSong.artist}</View>
            </View>
            <View className="controls">
              <AtIcon
                value={isPlaying ? "pause" : "play"}
                size="30"
                color="#6190E8"
                onClick={() => handlePlayClick(currentSong)}
              />
            </View>
            <View className="progress-bar">
              <AtSlider
                value={currentTime}
                max={duration || 100}
                min={0}
                step={1}
                blockSize={12}
                activeColor="#6190E8"
                backgroundColor="#BDBDBD"
                onChange={(value) => {
                  if (audioContext) {
                    audioContext.seek(value);
                    setCurrentTime(value);
                  }
                }}
              />
              <View className="time-info">
                <Text>
                  {Math.floor(currentTime / 60)}:
                  {Math.floor(currentTime % 60)
                    .toString()
                    .padStart(2, "0")}
                </Text>
                <Text>
                  {Math.floor(duration / 60)}:
                  {Math.floor(duration % 60)
                    .toString()
                    .padStart(2, "0")}
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View className="no-song">请选择要播放的歌曲</View>
        )}
      </View>

      <AtList>
        {musicList.map((song) => (
          <AtListItem
            key={song.id}
            title={song.title}
            note={song.artist}
            extraText={song.duration}
            thumb={song.cover}
            arrow="right"
            onClick={() => handlePlayClick(song)}
          />
        ))}
      </AtList>
    </View>
  );
};

export default Music;
