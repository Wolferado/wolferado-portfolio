'use client';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export default function Home() {
	const professions = ['guy', 'programmer', '3D modeller', 'video editor', 'photo editor'];
	const [professionID, setProfessionID] = useState(0);
	const professionElement = document.getElementsByTagName('b')[0];

	setTimeout(() => {
		if (professionID === professions.length - 1) setProfessionID(0);
		else setProfessionID(professionID + 1);
	}, 1500);

	return (
		<div className="text-text-50 text-custom_text-950 flex h-80 flex-col items-center">
			<h1 className="m-6 text-center text-6xl font-bold max-md:text-3xl">Aleksey Karelin</h1>
			<img
				className="xs:w-[50%] max-xs:m-6 m-10 w-[20%] rounded-[50%] border-4 border-white max-lg:w-[40%] max-md:w-[50%]"
				src="/Home_img.jpg"
			/>
			<p className="m-4 mb-10 text-center text-3xl max-md:text-xl">
				Local meme dealer and hard working <br />
				<b>{professions[professionID]}</b>.
			</p>
			<span className="flex flex-row max-lg:flex-col">
				<a
					className="m-2 flex place-items-center justify-center rounded-xl bg-[#0a66c2] p-3 indent-3 text-3xl text-white shadow-md transition-all duration-500 hover:bg-white hover:text-[#0a66c2] hover:shadow-[#0a66c2] max-md:p-1 max-md:text-lg"
					href="https://www.linkedin.com/in/karelin-aleksey/">
					<FaLinkedin /> LinkedIn
				</a>
				<a
					className="m-2 flex place-items-center justify-center rounded-xl bg-[#1b1f23] p-3 indent-3 text-3xl text-white shadow-md transition-all duration-500 hover:bg-white hover:text-[#1b1f23] hover:shadow-[#1b1f23] max-md:p-1 max-md:text-lg"
					href="https://github.com/Wolferado">
					<FaGithub /> GitHub
				</a>
			</span>
		</div>
	);
}
