import { useState, useEffect } from 'react';
import { TimeLeft } from '../types';

const TWENTY_FOUR_HOURS_IN_MS = 24 * 60 * 60 * 1000;

const getEndTime = (): number => {
  const storedEndTime = localStorage.getItem('countdownEndTime');
  if (storedEndTime) {
    const endTime = parseInt(storedEndTime, 10);
    if (new Date().getTime() < endTime) {
      return endTime;
    }
  }

  const newEndTime = new Date().getTime() + TWENTY_FOUR_HOURS_IN_MS;
  localStorage.setItem('countdownEndTime', newEndTime.toString());
  return newEndTime;
};

const calculateTimeLeft = (endTime: number): TimeLeft => {
    const difference = endTime - new Date().getTime();

    if (difference <= 0) {
        return { hours: 0, minutes: 0, seconds: 0 };
    }

    return {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
}

export const useCountdown = () => {
  const [endTime] = useState(getEndTime());
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(endTime));

  useEffect(() => {
    const timer = setInterval(() => {
        const newTimeLeft = calculateTimeLeft(endTime);
        setTimeLeft(newTimeLeft);
        if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
            clearInterval(timer);
        }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return timeLeft;
}; 