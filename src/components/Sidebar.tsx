import * as Unicons from "@iconscout/react-unicons";
import { Icon } from "@iconscout/react-unicons";

type SidebarCategory = 'Noticias' | 'Guía Sansano' | 'Biblioteca' | 'Foro' | 'Eventos' | 'Minuta Casino';

const ICONS = new Map<SidebarCategory, Icon>([
	['Noticias', Unicons.UilNewspaper],
	['Guía Sansano', Unicons.UilCompass],
	['Biblioteca', Unicons.UilBookAlt],
	['Foro', Unicons.UilCommentsAlt],
	['Eventos', Unicons.UilMegaphone],
	['Minuta Casino', Unicons.UilUtensilsAlt],
]);

const SidebarElement = (props: { title: SidebarCategory, active: boolean }) => {
	let Icon = ICONS.get(props.title);
	if (!Icon || typeof Icon === 'undefined') {
		Icon = Unicons.UilNewspaper;
	}
	return <div className={`flex items-center text-xl font-semibold space-x-5 ${(props.active) ? 'text-cyan-400' : 'text-gray-500'}`}>
		<Icon /><p>{props.title}</p>
	</div>
}

export default function Sidebar(props: { active: SidebarCategory }) {
	return <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r space-y-8">
		<SidebarElement title="Noticias" active={props.active === 'Noticias'} />
		<SidebarElement title="Guía Sansano" active={props.active === 'Guía Sansano'} />
		<SidebarElement title="Biblioteca" active={props.active === 'Biblioteca'} />
		<SidebarElement title="Foro" active={props.active === 'Foro'} />
		<SidebarElement title="Eventos" active={props.active === 'Eventos'} />
		<SidebarElement title="Minuta Casino" active={props.active === 'Minuta Casino'} />
	</div>
}
