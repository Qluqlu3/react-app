import React, { useCallback, useRef, useState } from 'react'

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react'

import fireVideo from '../../../assets/video/fire.mp4'

interface Props {
  duration: number
  isOpen: boolean
  onClose: () => void
}

export const TrimmingModal: React.FC<Props> = ({ isOpen, duration, onClose }: Props) => {
  const [startTime, setStartTime] = useState(0)
  const [endTime, setEndTime] = useState(duration)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const changeTrimmingTime = useCallback((changedTimes: number[]) => {
    const [changedStartTime, changedEndTime] = changedTimes
    if (!videoRef.current) return
    videoRef.current.currentTime = changedStartTime
    setStartTime(changedStartTime)
    setEndTime(changedEndTime)
  }, [])

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick isCentered motionPreset='slideInBottom'>
      <ModalOverlay />
      <ModalContent minW='500px'>
        <ModalHeader>Trimming</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <video ref={videoRef} className='min-w-full'>
            <source src={fireVideo} type='video/mp4' />
          </video>
          <RangeSlider
            min={0}
            max={duration}
            defaultValue={[startTime, endTime]}
            onChange={changeTrimmingTime}
            minStepsBetweenThumbs={1}
          >
            <RangeSliderTrack h='7'>
              <RangeSliderFilledTrack bg='green.400' />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} bg='gray' h='8' />
            <RangeSliderThumb index={1} bg='gray' h='8' />
          </RangeSlider>
        </ModalBody>
        <ModalFooter display='flex' columnGap='3'>
          <Button onClick={onClose}>Cancel</Button>
          <Button>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
