// missing typescript types for unicons, should be fixed when https://github.com/Iconscout/react-unicons/pull/50 is merged
import UserIcon from "@iconscout/react-unicons/icons/uil-user";
import SettingsIcon from "@iconscout/react-unicons/icons/uil-cog";

export default function Navbar() {
	return <nav className="flex items-center justify-between w-full h-0 px-4 py-8 bg-violet-800">
		<div className="flex text-2xl">
			<p className="text-white font-bold">Sansa</p><p className="text-white">Help</p>
		</div>
		<div className="flex space-x-3">
			<UserIcon className="text-white" />
			<SettingsIcon className="text-white" />
		</div>
	</nav>;
}
