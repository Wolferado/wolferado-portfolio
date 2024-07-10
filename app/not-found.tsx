import { FaUserAstronaut } from 'react-icons/fa';

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center overflow-clip md:w-[95vw]">
			<FaUserAstronaut className="animate-spin-slow m-10 text-[12rem] text-primary-900 max-lg:text-8xl" />
			<h1 className="m-4 text-6xl font-bold text-primary-600 max-lg:text-5xl">404</h1>
			<p className="max-w-100 m-10 text-center text-2xl text-primary-900 max-lg:text-xl">
				Spinning in not implemenented void...
			</p>
		</div>
	);
}
