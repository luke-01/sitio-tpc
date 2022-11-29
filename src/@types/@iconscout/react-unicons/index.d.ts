declare module '@iconscout/react-unicons' {
	import * as React from 'react';
	import { IconProps } from '@iconscout/react-unicons/icons/*';
	export { IconProps };
  export type Icon = (props: IconProps) => JSX.Element;

	export const UilUser: Icon;
	export const UilCog: Icon;
	export const UilNewspaper: Icon;
	export const UilCompass: Icon;
	export const UilBookAlt: Icon;
	export const UilCommentsAlt: Icon;
	export const UilMegaphone: Icon;
	export const UilUtensilsAlt: Icon;
};
