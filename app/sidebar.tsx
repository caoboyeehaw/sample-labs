import { ButtonWavLabs } from '@/components/ui/button-wavlabs'

export default function Sidebar() {
    return (
      <div>
        <p className="flex items-center space-x-1 ">
          <ButtonWavLabs className="text-md font-normal" variant="ghost" size="sm">Explore</ButtonWavLabs>
        </p>
  
        <p className="flex items-center space-x-1">
          <ButtonWavLabs className="text-md font-normal" variant="ghost" size="sm">Popular</ButtonWavLabs>
        </p>
  
        <p className="flex items-center space-x-1">
          <ButtonWavLabs className="text-md font-normal" variant="ghost" size="sm">Ranking</ButtonWavLabs>
        </p>
  
        <p className="flex items-center space-x-1">
          <ButtonWavLabs className="text-md font-normal" variant="ghost" size="sm">Threads</ButtonWavLabs>
        </p>
      </div>
    );
  }
  