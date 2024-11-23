// src/components/AudioPlayer/AudioPlayer.tsx

import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume1, VolumeX, Download, Settings } from "lucide-react";

interface AudioPlayerProps {
	src: string;
	title?: string;
	autoPlay?: boolean;
	loop?: boolean;
	initialVolume?: number;
	className?: string;
	onPlay?: () => void;
	onPause?: () => void;
	onEnded?: () => void;
}

const formatTime = (seconds: number): string => {
	const mins = Math.floor(seconds / 60);
	const secs = Math.floor(seconds % 60);
	return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const AudioPlayer = ({ src, title = "Audio Track", autoPlay = false, loop = false, initialVolume = 1, className = "", onPlay, onPause, onEnded }: AudioPlayerProps) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(initialVolume);
	const [isMuted, setIsMuted] = useState(false);
	const [playbackRate, setPlaybackRate] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = initialVolume;
			if (autoPlay) {
				audioRef.current.play().catch(() => {
					setError("Autoplay blocked by browser");
				});
			}
		}

		return () => {
			if (audioRef.current) {
				audioRef.current.pause();
			}
		};
	}, []);

	const handlePlayPause = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
				onPause?.();
			} else {
				audioRef.current.play().catch((err) => {
					setError("Failed to play audio");
				});
				onPlay?.();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const handleTimeUpdate = () => {
		if (audioRef.current) {
			setCurrentTime(audioRef.current.currentTime);
		}
	};

	const handleLoadedMetadata = () => {
		if (audioRef.current) {
			setDuration(audioRef.current.duration);
			setIsLoading(false);
		}
	};

	const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
		const time = parseFloat(e.target.value);
		if (audioRef.current) {
			audioRef.current.currentTime = time;
			setCurrentTime(time);
		}
	};

	const handleSkip = (seconds: number) => {
		if (audioRef.current) {
			audioRef.current.currentTime += seconds;
			setCurrentTime(audioRef.current.currentTime);
		}
	};

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newVolume = parseFloat(e.target.value);
		if (audioRef.current) {
			audioRef.current.volume = newVolume;
			setVolume(newVolume);
			setIsMuted(newVolume === 0);
		}
	};

	const handleSpeedChange = (speed: number) => {
		if (audioRef.current) {
			audioRef.current.playbackRate = speed;
			setPlaybackRate(speed);
		}
	};

	const toggleMute = () => {
		if (audioRef.current) {
			audioRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
		}
	};

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = src;
		link.download = title;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	// Update the className assignments to include tw- prefix
	return (
		<div
			className={`
     tw-fixed tw-bottom-4 tw-right-4 tw-w-96
     tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-4 ${className}
     `}
			role="region"
			aria-label="Audio player"
		>
			<audio ref={audioRef} src={src} loop={loop} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} onEnded={onEnded} onError={() => setError("Error loading audio")} />

			{error && (
				<div className="tw-text-red-500 tw-text-sm tw-mb-2" role="alert">
					{error}
				</div>
			)}

			<div className="tw-flex tw-items-center tw-justify-between tw-mb-2">
				<h2 className="tw-text-lg tw-font-semibold tw-truncate">{title}</h2>
				<div className="tw-flex tw-items-center tw-space-x-2">
					<button onClick={() => handleSpeedChange(playbackRate === 2 ? 0.5 : playbackRate + 0.5)} className="tw-text-gray-600 hover:tw-text-gray-800" aria-label="Change playback speed">
						{playbackRate}x
					</button>
					<button onClick={handleDownload} className="tw-text-gray-600 hover:tw-text-gray-800" aria-label="Download audio">
						<Download size={20} />
					</button>
				</div>
			</div>

			<div className="tw-flex tw-items-center tw-space-x-4 tw-mb-2">
				<span className="tw-text-sm">{formatTime(currentTime)}</span>
				<input type="range" value={currentTime} min={0} max={duration} step={0.1} onChange={handleSeek} className="tw-flex-grow tw-h-2 tw-rounded-lg tw-appearance-none tw-bg-gray-200" aria-label="Seek" />
				<span className="tw-text-sm">{formatTime(duration)}</span>
			</div>

			<div className="tw-flex tw-items-center tw-justify-between">
				<div className="tw-flex tw-items-center tw-space-x-4">
					<button onClick={() => handleSkip(-10)} className="tw-text-gray-600 hover:tw-text-gray-800" aria-label="Skip backward 10 seconds">
						<SkipBack size={24} />
					</button>

					<button onClick={handlePlayPause} className="tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-bg-blue-500 hover:tw-bg-blue-600 tw-text-white" aria-label={isPlaying ? "Pause" : "Play"}>
						{isLoading ? <div className="tw-animate-spin tw-rounded-full tw-h-6 tw-w-6 tw-border-2 tw-border-white tw-border-t-transparent" /> : isPlaying ? <Pause size={24} /> : <Play size={24} />}
					</button>

					<button onClick={() => handleSkip(10)} className="tw-text-gray-600 hover:tw-text-gray-800" aria-label="Skip forward 10 seconds">
						<SkipForward size={24} />
					</button>
				</div>

				<div className="tw-flex tw-items-center tw-space-x-2">
					<button onClick={toggleMute} className="tw-text-gray-600 hover:tw-text-gray-800" aria-label={isMuted ? "Unmute" : "Mute"}>
						{isMuted ? <VolumeX size={20} /> : volume > 0.5 ? <Volume2 size={20} /> : <Volume1 size={20} />}
					</button>
					<input type="range" min={0} max={1} step={0.1} value={isMuted ? 0 : volume} onChange={handleVolumeChange} className="tw-w-20 tw-h-2 tw-rounded-lg tw-appearance-none tw-bg-gray-200" aria-label="Volume" />
				</div>
			</div>
		</div>
	);

	//   return (
	//     <div className={`
	//       tw-fixed tw-bottom-4 tw-right-4 tw-w-96
	//       tw-bg-white  tw-rounded-lg
	//       shadow-lg p-4 ${className}
	//       border-2 border-red-500
	//       audioPlayer
	//       `}

	//       role="region"
	//       aria-label="Audio player"

	//       >
	//       <audio
	//         ref={audioRef}
	//         src={src}
	//         loop={loop}
	//         onTimeUpdate={handleTimeUpdate}
	//         onLoadedMetadata={handleLoadedMetadata}
	//         onEnded={onEnded}
	//         onError={() => setError('Error loading audio')}
	//       />

	//       {error && (
	//         <div className="text-red-500 text-sm mb-2" role="alert">
	//           {error}
	//         </div>
	//       )}

	//       <div className="flex items-center justify-between mb-2">
	//         <h2 className="text-lg font-semibold truncate">{title}</h2>
	//         <div className="flex items-center space-x-2">
	//           <button
	//             onClick={() => handleSpeedChange(playbackRate === 2 ? 0.5 : playbackRate + 0.5)}
	//             className="text-gray-600 hover:text-gray-800"
	//             aria-label="Change playback speed"
	//           >
	//             {playbackRate}x
	//           </button>
	//           <button
	//             onClick={handleDownload}
	//             className="text-gray-600 hover:text-gray-800"
	//             aria-label="Download audio"
	//           >
	//             <Download size={20} />
	//           </button>
	//         </div>
	//       </div>

	//       <div className="flex items-center space-x-4 mb-2">
	//         <span className="text-sm">{formatTime(currentTime)}</span>
	//         <input
	//           type="range"
	//           value={currentTime}
	//           min={0}
	//           max={duration}
	//           step={0.1}
	//           onChange={handleSeek}
	//           className="flex-grow h-2 rounded-lg appearance-none bg-gray-200"
	//           aria-label="Seek"
	//         />
	//         <span className="text-sm">{formatTime(duration)}</span>
	//       </div>

	//       <div className="flex items-center justify-between">
	//         <div className="flex items-center space-x-4">
	//           <button
	//             onClick={() => handleSkip(-10)}
	//             className="text-gray-600 hover:text-gray-800"
	//             aria-label="Skip backward 10 seconds"
	//           >
	//             <SkipBack size={24} />
	//           </button>

	//           <button
	//             onClick={handlePlayPause}
	//             className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white"
	//             aria-label={isPlaying ? 'Pause' : 'Play'}
	//           >
	//             {isLoading ? (
	//               <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent" />
	//             ) : isPlaying ? (
	//               <Pause size={24} />
	//             ) : (
	//               <Play size={24} />
	//             )}
	//           </button>

	//           <button
	//             onClick={() => handleSkip(10)}
	//             className="text-gray-600 hover:text-gray-800"
	//             aria-label="Skip forward 10 seconds"
	//           >
	//             <SkipForward size={24} />
	//           </button>
	//         </div>

	//         <div className="flex items-center space-x-2">
	//           <button
	//             onClick={toggleMute}
	//             className="text-gray-600 hover:text-gray-800"
	//             aria-label={isMuted ? 'Unmute' : 'Mute'}
	//           >
	//             {isMuted ? (
	//               <VolumeX size={20} />
	//             ) : volume > 0.5 ? (
	//               <Volume2 size={20} />
	//             ) : (
	//               <Volume1 size={20} />
	//             )}
	//           </button>
	//           <input
	//             type="range"
	//             min={0}
	//             max={1}
	//             step={0.1}
	//             value={isMuted ? 0 : volume}
	//             onChange={handleVolumeChange}
	//             className="w-20 h-2 rounded-lg appearance-none bg-gray-200"
	//             aria-label="Volume"
	//           />
	//         </div>
	//       </div>
	//     </div>
	//   );
};

export default AudioPlayer;
