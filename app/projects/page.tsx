'use client';

import { useState } from 'react';
import { projectsData } from './projects';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { FaYoutube, FaGithub } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

export default function Projects() {
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
		<span className="m-1 flex place-items-center rounded-2xl border-4 p-3 text-center align-middle max-md:m-0.5 max-md:p-1 max-md:text-xs">
			{tag}
		</span>
	));

	if (projectsData[videoID].github_url)
		githubBtn = (
			<a
				className="flex place-items-center justify-center rounded-xl border-4 bg-[#1b1f23] p-3 indent-3 text-3xl text-white transition-all duration-500 hover:bg-white hover:text-[#1b1f23] max-md:p-1 max-md:text-lg md:text-base lg:text-2xl"
				href={projectsData[videoID].github_url}>
				<FaGithub /> Repository
			</a>
		);

	if (projectsData[videoID].youtube_url)
		youtubeBtn = (
			<a
				className="group flex place-items-center justify-center rounded-xl border-4 bg-[#f70000] p-3 indent-3 text-3xl text-white transition-all duration-500 hover:bg-white hover:text-black max-md:p-1 max-md:text-lg md:text-base lg:text-2xl"
				href={projectsData[videoID].youtube_url}>
				<FaYoutube className="duration-150 group-hover:text-[#f70000]" />
				YouTube
			</a>
		);

	if (projectsData[videoID].other_url)
		internetBtn = (
			<a
				className="group flex place-items-center justify-center rounded-xl border-4 bg-black p-3 indent-3 text-3xl text-white transition-all duration-500 hover:bg-white hover:text-black max-md:p-1 max-md:text-lg md:text-base lg:text-2xl"
				href={projectsData[videoID].other_url[1]}>
				<BiWorld /> {projectsData[videoID].other_url[0]}
			</a>
		);

	return (
		<div className="text-text-50 grid h-[95lvh] w-[100%] grid-cols-2 grid-rows-4 items-center p-10 max-md:flex max-md:flex-col max-md:justify-normal max-md:overflow-y-scroll max-md:p-3 xl:p-20 xl:text-xl">
			<video
				className="row-span-2 row-start-1 scale-90 rounded-xl border-4 border-black max-md:m-1 max-md:scale-100"
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
			<div className="col-start-1 row-start-3 flex flex-wrap justify-center text-wrap max-md:order-2 max-md:m-5">
				{tags}
			</div>
			<span className="col-start-1 col-end-1 row-start-4 flex flex-row justify-center"></span>
			<p className="col-start-2 row-start-1 text-center text-3xl font-semibold max-lg:pb-20 max-md:text-lg">
				{projectsData[videoID].name}
			</p>
			<p className="col-start-2 row-span-2 row-start-2 p-5 max-md:order-3 max-md:p-4 max-md:text-sm">
				{projectsData[videoID].description}
			</p>

			<div className="col-start-1 col-end-2 row-start-4 flex w-[100%] flex-row items-center justify-around max-md:order-1 max-md:justify-between">
				<button
					className="rounded-3xl border-4 border-gray-950 text-6xl transition-all hover:bg-black max-md:text-5xl"
					onClick={decrementVideoID}>
					<MdSkipPrevious className="transition-all hover:text-white" />
				</button>
				<p className="text-3xl">
					{videoID + 1} / {dataLength}
				</p>
				<button
					className="rounded-3xl border-4 border-gray-950 text-6xl transition-all hover:bg-black max-md:text-5xl"
					onClick={incrementVideoID}>
					<MdSkipNext className="transition-all hover:text-white" />
				</button>
			</div>
			<div className="col-start-2 col-end-2 flex justify-center max-md:order-4 max-md:m-4 max-md:flex-col">
				{githubBtn}
				{youtubeBtn}
				{internetBtn}
			</div>
		</div>
	);
}
