'use client';

import { useState } from 'react';
import { projectsData } from './projects';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { FaYoutube, FaGithub } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

export default function ProjectCard() {
	const dataLength = projectsData.length;
	const [videoID, setVideoID] = useState(0);
	let youtubeBtn = undefined;
	let githubBtn = undefined;
	let internetBtn = undefined;

	const incrementVideoID = () => {
		if (videoID !== dataLength - 1) setVideoID(videoID + 1);
		else setVideoID(0);
	};

	const decrementVideoID = () => {
		if (videoID !== 0) setVideoID(videoID - 1);
		else setVideoID(dataLength - 1);
	};

	const tags = projectsData[videoID].tags.map((tag) => (
		<span className="m-1 max-md:m-0.5 p-3 max-md:p-2 border-4 rounded-2xl max-md:text-xs">
			{tag}
		</span>
	));

	if (projectsData[videoID].github_url)
		githubBtn = (
			<a
				className="border-4 rounded-xl flex justify-center text-3xl max-md:text-lg max-md:p-1 p-3 bg-[#1b1f23] text-white indent-3 hover:bg-white hover:text-[#1b1f23] transition-all duration-500"
				href={projectsData[videoID].github_url}>
				<FaGithub /> GitHub
			</a>
		);

	if (projectsData[videoID].youtube_url)
		youtubeBtn = (
			<a
				className="border-4 rounded-xl flex justify-center text-3xl max-md:text-lg p-3 max-md:p-1 bg-[#f70000] text-white indent-3 hover:bg-white hover:text-black transition-all duration-500 group"
				href={projectsData[videoID].youtube_url}>
				<FaYoutube className="group-hover:text-[#f70000] duration-150" />
				YouTube
			</a>
		);

	if (projectsData[videoID].other_url)
		internetBtn = (
			<a
				className="border-4 rounded-xl flex justify-center text-3xl max-md:text-lg p-3 max-md:p-1 bg-black text-white indent-3 hover:bg-white hover:text-black transition-all duration-500 group"
				href={projectsData[videoID].other_url[1]}>
				<BiWorld /> {projectsData[videoID].other_url[0]}
			</a>
		);

	return (
		<>
			<div className="max-md:flex max-md:flex-col h-[92.5svh] max-md:h-[65svh] grid grid-cols-2 grid-rows-4 max-md:justify-evenly items-center text-text-50 p-10">
				<video
					className="border-4 scale-90 max-md:scale-95 border-black rounded-xl row-start-1 row-span-2"
					key={projectsData[videoID].video_url}
					autoPlay
					controls
					loop
					controlsList="nodownload noremoteplayback">
					<source
						src={projectsData[videoID].video_url}
						type="video/mp4"
					/>
				</video>
				<span className="max-md:order-3 flex col-start-1 row-start-3 justify-center">
					{tags}
				</span>
				<span className="flex row-start-4 col-start-1 col-end-1 flex-row justify-center"></span>
				<p className="col-start-2 row-start-1 text-6xl max-md:text-3xl text-center font-semibold align-top">
					{projectsData[videoID].name}
				</p>
				<p className="col-start-2 row-start-2 row-span-2 text-xl p-20">
					{projectsData[videoID].description}
				</p>
			</div>

			<div className="grid grid-cols-2 max-md:flex max-md:flex-col justify-around absolute bottom-24 max-md:bottom-8 text-center w-[92svw]">
				<span className="flex flex-row justify-around col-start-1 items-center">
					<button
						className="text-6xl max-md:text-5xl border-4 border-gray-950 rounded-3xl hover:bg-black transition-all"
						onClick={decrementVideoID}>
						<MdSkipPrevious className="hover:text-white transition-all" />
					</button>
					<p className="text-3xl">
						{videoID + 1} / {dataLength}
					</p>
					<button
						className="text-6xl max-md:text-5xl border-4 border-gray-950 rounded-3xl hover:bg-black transition-all"
						onClick={incrementVideoID}>
						<MdSkipNext className="hover:text-white transition-all" />
					</button>
				</span>
				<span className="col-start-2 flex justify-center">
					{githubBtn}
					{youtubeBtn}
					{internetBtn}
				</span>
			</div>
		</>
	);
}
