import { FaLinkedin } from 'react-icons/fa';

export default function About() {
	return (
		<div className="grid grid-cols-2 justify-items-center align-middle max-md:flex max-md:h-[95lvh] max-md:flex-col max-md:overflow-scroll">
			<img
				src="/About_img.jpg"
				className="col-start-2 row-start-1 row-end-1 m-4 translate-y-4 rotate-[4deg] object-cover p-4 shadow-xl max-md:mb-10 max-md:mt-0 max-md:w-[85%] max-md:self-center max-md:p-3 md:w-[70%] lg:w-[75%]"
			/>
			<div className="col-start-1 row-start-1">
				<i className="m-4 p-4 text-lg"></i>
				<p className="max-md:text-md max-lg:text-sm max-md:p-2 md:w-[50svw] md:pl-12 xl:text-base">
					<i>Yes, I know what memes to make and which ones to send so you don't have to cringe. </i>
					<br />
					<br />
					So, hello, my name is Aleksey, thanks for stopping by. <br />
					<br />I live in Latvia, Riga, have lived here practically all my life. I graduated from J. G. Herder
					Grizinkalns Secondary School, finished bachelor's at the Riga Technical University while receiving
					studentship throughout all 3 years of study. You can find information about my thesis on "Projects"
					page, so feel free to check it out. <br />
					<br />
					Speaking about my personality, I would say without any exaggeration that I am hardworking guy. Not
					going to lie, it is hard for me to peacefully seat around with nothing to do. My friends, people I
					am familiar with and personality tests from job vacancies describe me as selfless, althruistic
					person that can find a way with most people. I will believe them, because it sounds cool. <br />{' '}
					<br />
					Speaking of my interests, I like to play billiard, enjoy some good walks when it is sunny outside
					and also get creative with designing in Figma, 3D modelling in Blender and overall photo and video
					editing in Adobe Software. With the last one I usually experience some art block, but it doesn't
					stop me to get creative. <br /> <br />
					If you want to <b>reach out to me</b> or <b>check out my work experience and other things</b>, feel
					free to visit my LinkedIn profile, button is available below. I speak English, Latvian, Russian and
					a bit of German.
					<br />
					<br />
					Have a wonderful day! <br />
					<br />
					<a
						className="flex place-items-center justify-center rounded-xl border-4 bg-[#0a66c2] p-3 indent-3 text-3xl text-white transition-all duration-500 hover:bg-white hover:text-[#0a66c2] max-md:p-1 max-md:text-lg"
						href="https://www.linkedin.com/in/karelin-aleksey/">
						<FaLinkedin /> LinkedIn
					</a>
				</p>
			</div>
		</div>
	);
}
