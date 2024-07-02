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
		<span key={tag + "_tag"} className="bg-primary-300 m-1 flex place-items-center rounded-lg border-text p-3 text-center align-middle shadow-md max-md:m-0.5 max-md:p-1 max-md:text-xs">
			{tag}
		</span>
	));

	if (projectsData[videoID].github_url)
		githubBtn = (
			<a
				className="m-2 flex place-items-center justify-center rounded-xl bg-[#1b1f23] p-3 indent-3 text-3xl text-white shadow-md transition-all duration-500 hover:bg-white hover:text-[#1b1f23] hover:shadow-[[#1b1f23]] max-md:p-1 max-md:text-lg md:text-base lg:text-2xl"
				href={projectsData[videoID].github_url}>
				<FaGithub /> Repository
			</a>
		);

	if (projectsData[videoID].youtube_url)
		youtubeBtn = (
			<a
				className="group m-2 flex place-items-center justify-center rounded-xl bg-[#f70000] p-3 indent-3 text-3xl text-white shadow-md transition-all duration-500 hover:bg-white hover:text-black hover:shadow-[#f70000] max-md:p-1 max-md:text-lg md:text-base lg:text-2xl"
				href={projectsData[videoID].youtube_url}>
				<FaYoutube className="duration-150 group-hover:text-[#f70000]" />
				YouTube
			</a>
		);

	if (projectsData[videoID].other_url)
		internetBtn = (
			<a
				className="group m-2 flex place-items-center justify-center rounded-xl bg-black p-3 indent-3 text-3xl text-white shadow-md transition-all duration-500 hover:bg-white hover:text-black hover:shadow-black max-md:p-1 max-md:text-lg md:text-base lg:text-2xl"
				href={projectsData[videoID].other_url[1]}>
				<BiWorld /> {projectsData[videoID].other_url[0]}
			</a>
		);

	return (
		<div className="text-custom_text-950 grid h-[95lvh] w-[100%] grid-cols-2 grid-rows-4 items-center p-10 max-lg:flex max-lg:flex-col max-md:justify-normal max-md:overflow-y-scroll max-md:p-3 xl:p-20 xl:text-xl">
			<video
				className="border-primary-400 row-span-2 row-start-1 scale-90 rounded-xl border-[4px] shadow-md max-md:m-1 max-md:scale-100"
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
			<div className="col-start-1 row-start-3 flex flex-wrap justify-center text-wrap max-lg:order-3 max-md:m-5">
				{tags}
			</div>
			<span className="col-start-1 col-end-1 row-start-4 flex flex-row justify-center"></span>
			<p className="col-start-2 row-start-1 text-center text-3xl font-semibold max-lg:pb-4 max-md:text-lg">
				{projectsData[videoID].name}
			</p>
			<p className="col-start-2 row-span-2 row-start-2 p-5 max-lg:order-2 max-md:p-4 max-md:text-sm">
				{projectsData[videoID].description}
			</p>

			<div className="col-start-1 col-end-2 row-start-4 flex w-[100%] flex-row items-center justify-around max-lg:order-1 max-md:justify-between">
				<button
					className="bg-primary-300 hover:bg-background-800 rounded-3xl text-6xl shadow-md transition-all max-md:text-5xl"
					onClick={decrementVideoID}>
					<MdSkipPrevious className="hover:text-primary-300 transition-all" />
				</button>
				<p className="text-3xl">
					{videoID + 1} / {dataLength}
				</p>
				<button
					className="bg-primary-300 hover:bg-background-800 rounded-3xl text-6xl shadow-md transition-all max-md:text-5xl"
					onClick={incrementVideoID}>
					<MdSkipNext className="hover:text-primary-300 transition-all" />
				</button>
			</div>
			<div className="col-start-2 col-end-2 flex justify-center max-lg:order-4 max-md:m-4 max-md:flex-col">
				{githubBtn}
				{youtubeBtn}
				{internetBtn}
			</div>
		</div>
	);
}
