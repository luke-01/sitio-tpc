import * as Unicons from "@iconscout/react-unicons";


export default function Navbar() {
	return <nav className="flex items-center justify-between w-full h-0 px-4 py-8 bg-violet-800">
		<div className="flex text-2xl">
			<p className="text-white font-bold">Sansa</p><p className="text-white">Help</p>
		</div>
		<div className="flex space-x-3">
			<Unicons.UilUser className="text-white" />
			<Unicons.UilCog className="text-white" />
		</div>
	</nav>;
}
