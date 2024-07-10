import { FaLinkedin } from 'react-icons/fa';

export default function About() {
	return (
		<div className="grid grid-cols-2 justify-items-center align-middle max-lg:h-[94lvh] max-lg:overflow-scroll max-md:flex max-md:flex-col">
			<img
				src="/About_img.jpg"
				className="p-4r col-start-2 row-start-1 row-end-1 m-4 mt-8 translate-y-4 rotate-[4deg] border-[16px] bg-clip-border object-cover max-md:mb-2 max-md:mt-0 max-md:w-[80%] max-md:self-center md:w-[82.5%] lg:w-[75%]"
			/>
			<div className="col-start-1 row-start-1 text-custom_text-950">
				<i className="m-4 p-4 text-lg"></i>
				<p className="max-md:w-auto max-md:p-3 max-md:text-sm md:pl-12 lg:max-w-[50ch] lg:text-[0.9rem] xl:text-base">
					<i className="p-4 text-xl font-bold text-purple-300">
						Yes, I know what memes to share so you don't have to cringe.{' '}
					</i>
					<br />
					<br />
					So, hello, my name is Aleksey. I am looking for a potential job position as an <b>
						IT specialist
					</b>{' '}
					in many fields including <b>programming, designing, data analysis and/or machine learning</b>
					.
					<br />
					<br />I live in Latvia, Riga, have lived here practically all my life. I graduated from J. G. Herder
					Grizinkalns Secondary School, finished bachelor's at the Riga Technical University while receiving
					studentship throughout all 3 years of study. <br />
					<br />
					Speaking about myself, I would say without any exaggeration that I am hardworking guy. My friends,
					people I am familiar with and personality tests from job vacancies describe me as selfless,
					althruistic person that can find a way with most people. <br />
					<br />
					Regarding my interests, I like to play billiard, enjoy good walks with friends, create designs in
					Figma, Blender and overall photo and video editing in Adobe Software. <br /> <br />
					If you want to <b>reach out to me</b> or <b>check out my work experience and other things</b>, feel
					free to visit my LinkedIn profile, button is available below. I speak English, Latvian, Russian and
					a bit of German.
					<br />
					<br />
					<a
						className="m-2 flex place-items-center justify-center rounded-xl bg-[#0a66c2] p-3 indent-3 text-3xl text-white shadow-md transition-all duration-500 hover:bg-white hover:text-[#0a66c2] hover:shadow-[#0a66c2] max-md:p-1 max-md:text-lg"
						href="https://www.linkedin.com/in/karelin-aleksey/">
						<FaLinkedin /> LinkedIn
					</a>
				</p>
			</div>
		</div>
	);
}
