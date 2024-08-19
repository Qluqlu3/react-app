import React, { useCallback, useEffect, useRef, useState } from 'react'

import {
  Box,
  Button,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  useDisclosure,
} from '@chakra-ui/react'
import { clsx } from 'clsx'
import {
  FaCheck,
  FaClock,
  FaExpand,
  FaPause,
  FaPlay,
  FaRepeat,
  FaScissors,
  FaVolumeHigh,
  FaVolumeXmark,
} from 'react-icons/fa6'

import fireVideo from '../../assets/video/fire.mp4'
import { TrimmingModal } from '../Modal'

const ICON_SIZE = '25'

const PLAYBACK_RATE_LIST = [1.5, 1.25, 1, 0.75, 0.5]

export const VideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isShowPlaybackRate, setIsShowPlaybackRate] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const playbackRateBoxRef = useRef<HTMLDivElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOnClickOutSide = useCallback((event: MouseEvent) => {
    const target = event.target
    if (target instanceof Node && playbackRateBoxRef.current && !playbackRateBoxRef.current.contains(target)) {
      setIsShowPlaybackRate(false)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.addEventListener('loadedmetadata', () => {
      setDuration(video.duration)
    })

    video.addEventListener('timeupdate', () => {
      setProgress(video.currentTime)
    })

    if (isShowPlaybackRate) {
      document.addEventListener('mousedown', handleOnClickOutSide)
    }

    return () => {
      video.removeEventListener('loadedmetadata', () => {})
      video.removeEventListener('timeupdate', () => {})
      document.removeEventListener('mousedown', handleOnClickOutSide)
    }
  }, [handleOnClickOutSide, isRepeat, isShowPlaybackRate])

  const togglePlay = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const handleOnDoubleClickFastForward = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const video = videoRef.current
      if (!video) return

      const rect = video.getBoundingClientRect()
      if (!rect) return

      const clintX = event.clientX
      const videoPositionCenter = rect.left + rect.width / 2
      if (videoPositionCenter < clintX) {
        video.currentTime = Math.min(video.currentTime + 5, duration)
        setProgress(video.currentTime + 5)
      } else if (videoPositionCenter > clintX) {
        video.currentTime = Math.max(video.currentTime - 5, 0)
        setProgress(video.currentTime - 5)
      }
    },
    [duration],
  )

  const handleOnChangeSeekBar = useCallback((changedTimes: number[]) => {
    const video = videoRef.current
    if (!video) return
    const changedCurrentTime = changedTimes[0]
    video.currentTime = changedCurrentTime
    setProgress(changedCurrentTime)
  }, [])

  const handleOnChangeVolume = useCallback((changedVolume: number) => {
    const video = videoRef.current
    if (!video) return
    video.volume = changedVolume
    setVolume(changedVolume)
  }, [])

  const toggleVolume = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (volume > 0) {
      video.volume = 0
      setVolume(0)
    } else {
      video.volume = 1
      setVolume(1)
    }
  }, [volume])

  const toggleRepeat = useCallback(() => {
    setIsRepeat(!isRepeat)
  }, [isRepeat])

  const changePlaybackRate = useCallback(
    (selectedRate: number) => () => {
      const video = videoRef.current
      if (!video) return
      video.playbackRate = selectedRate
      setPlaybackRate(selectedRate)
    },
    [],
  )

  const togglePlaybackRateBox = useCallback(() => {
    setIsShowPlaybackRate(!isShowPlaybackRate)
  }, [isShowPlaybackRate])

  const openFullScreen = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.requestFullscreen()
  }, [])

  const formatTime = useCallback((time: number): string => {
    const minute = Math.floor(time / 60)
    const second = Math.floor(time % 60)
    return `${minute < 10 ? '0' : ''}${minute}:${second < 10 ? '0' : ''}${second}`
  }, [])

  return (
    <Box>
      <div onClick={togglePlay} onDoubleClick={handleOnDoubleClickFastForward} className='relative cursor-pointer'>
        <FaPlay
          size='100'
          className={clsx(
            'absolute left-[45%] top-[40%] z-10 transition ease-in-out',
            isPlaying ? 'opacity-0' : ' opacity-50 ',
          )}
        />
        <video ref={videoRef} loop={isRepeat} className='aspect-video'>
          <source src={fireVideo} type='video/mp4' />
        </video>
      </div>
      <Box columnGap='3' display='flex' w='full' alignItems='center' justifyContent='space-between' bg='gray.800'>
        <Box onClick={togglePlay} w='50px' className='relative h-7 cursor-pointer' paddingLeft='1'>
          <FaPause
            size={ICON_SIZE}
            className={clsx('absolute transition duration-300 ease-in-out', isPlaying ? 'opacity-100' : 'opacity-0')}
          />
          <FaPlay
            size={ICON_SIZE}
            className={clsx('absolute transition duration-300 ease-in-out', isPlaying ? 'opacity-0' : 'opacity-100')}
          />
        </Box>
        <RangeSlider min={0} max={duration} value={[progress]} onChange={handleOnChangeSeekBar} marginX='2' w='100%'>
          <RangeSliderTrack>
            <RangeSliderFilledTrack bg='green.400' />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
        </RangeSlider>
        <Box className='group relative min-w-fit cursor-pointer'>
          {volume > 0 ? (
            <FaVolumeHigh size={ICON_SIZE} onClick={toggleVolume} />
          ) : (
            <FaVolumeXmark size={ICON_SIZE} onClick={toggleVolume} />
          )}
          <Box className='absolute right-[26%] top-[-280%] hidden min-h-[110px] min-w-5 items-end justify-center group-hover:flex'>
            <Slider
              value={volume}
              min={0}
              max={1}
              step={0.01}
              orientation='vertical'
              minH='100px'
              onChange={handleOnChangeVolume}
            >
              <SliderTrack w='2'>
                <SliderFilledTrack bg='green.400' />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
        </Box>
        <div onClick={toggleRepeat} className={clsx('cursor-pointer', isRepeat && 'text-green-400')}>
          <FaRepeat size={ICON_SIZE} />
        </div>
        <div>
          <Box ref={playbackRateBoxRef} className='relative cursor-pointer'>
            <Box onClick={togglePlaybackRateBox} className='hover:text-green-400'>
              <FaClock size={ICON_SIZE} />
            </Box>
            {isShowPlaybackRate && (
              <Box className='absolute top-[-782%] bg-gray-900 bg-opacity-70 text-white'>
                {PLAYBACK_RATE_LIST.map((rate) => (
                  <Box
                    key={rate}
                    onClick={changePlaybackRate(rate)}
                    display='flex'
                    alignItems='center'
                    paddingLeft='3'
                    _hover={{ bg: 'rgba(17, 24, 39, 0.6)' }}
                  >
                    <Box className='min-w-4'>{playbackRate === rate && <FaCheck />}</Box>
                    <Button bg='none' _hover='none' _active='none' color='white'>
                      {rate}
                    </Button>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </div>
        <Box onClick={onOpen}>
          <FaScissors size={ICON_SIZE} />
        </Box>
        <Box onClick={openFullScreen} cursor='pointer'>
          <FaExpand size={ICON_SIZE} />
        </Box>
        <Box className='flex min-w-[138px] justify-end p-2 text-xl'>
          {formatTime(progress)} / {formatTime(duration)}
        </Box>
        {/* <FaForward /> */}
      </Box>
      <TrimmingModal duration={duration} isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}
