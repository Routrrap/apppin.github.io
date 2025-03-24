import React from 'react';
import { Play, Pause } from 'lucide-react';

interface ControlsProps {
  delay: number;
  onDelayChange: (delay: number) => void;
  onStartAll: () => void;
  onPauseAll: () => void;
  isProcessing: boolean;
}

export const Controls: React.FC<ControlsProps> = ({
  delay,
  onDelayChange,
  onStartAll,
  onPauseAll,
  isProcessing,
}) => {
  return (
    <div className="card">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Delay between accounts (seconds)
          </label>
          <input
            type="number"
            min="1"
            value={delay}
            onChange={(e) => onDelayChange(parseInt(e.target.value, 10))}
            className="input-base"
          />
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={onStartAll}
            disabled={isProcessing}
            className="btn-primary flex-1 sm:flex-none flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4" />
            <span>Start All</span>
          </button>
          <button
            onClick={onPauseAll}
            disabled={!isProcessing}
            className="btn-warning flex-1 sm:flex-none flex items-center justify-center gap-2"
          >
            <Pause className="w-4 h-4" />
            <span>Pause All</span>
          </button>
        </div>
      </div>
    </div>
  );
};