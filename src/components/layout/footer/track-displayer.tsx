import { HeartIcon } from 'lucide-react';
import { useState } from 'react';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const currentSong = {
  name: 'Song Name',
  artist: 'Artist Name',
  album: 'Album Name',
  albumCover: 'https://picsum.photos/200',
};

export default function TrackDisplayer() {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [effects, setEffects] = useState<boolean>(false);

  const iconProperty = { strokeWidth: 2.5, size: 26 };
  return (
    <div className="flex min-w-[30vw] flex-row items-center gap-2 lg:min-w-[13vw]">
      <img src={currentSong.albumCover} alt={`${currentSong.album}'s cover`} className="h-14 w-14 rounded-md" />
      <div className="flex flex-col justify-center px-2">
        <h3 className="text-sm font-normal text-s-white">{currentSong.name}</h3>
        <h4 className="text-xs font-normal text-s-gray-light">{currentSong.artist}</h4>
      </div>
      <Tooltip>
        <TooltipTrigger>
          <HeartIcon
            onClick={() => {
              setIsLiked(!isLiked);
              setEffects(true);
            }}
            onAnimationEnd={() => setEffects(false)}
            className={`h-4 w-4 cursor-default hover:cursor-pointer ${
              isLiked ? 'text-s-green hover:text-s-green-light' : 'text-s-gray-light hover:text-s-gray-lighter'
            } ${effects ? 'animate-wiggle' : ''}`}
            {...iconProperty}
          />
        </TooltipTrigger>
        <TooltipContent sideOffset={16} className="border-0 bg-s-gray-dark p-1 px-2 text-white">
          Save to Your Library
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
