import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	presets: [],
	darkMode: 'media', // or 'class'
	theme: {
		accentColor: ({ theme }) => ({
			...theme('colors'),
			auto: 'auto'
		}),
		animation: {
			none: 'none',
			spin: 'spin 1s linear infinite',
			ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
			pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			bounce: 'bounce 1s infinite'
		},
		aria: {
			busy: 'busy="true"',
			checked: 'checked="true"',
			disabled: 'disabled="true"',
			expanded: 'expanded="true"',
			hidden: 'hidden="true"',
			pressed: 'pressed="true"',
			readonly: 'readonly="true"',
			required: 'required="true"',
			selected: 'selected="true"'
		},
		aspectRatio: {
			auto: 'auto',
			square: '1 / 1',
			video: '16 / 9'
		},
		backdropBlur: ({ theme }) => theme('blur'),
		backdropBrightness: ({ theme }) => theme('brightness'),
		backdropContrast: ({ theme }) => theme('contrast'),
		backdropGrayscale: ({ theme }) => theme('grayscale'),
		backdropHueRotate: ({ theme }) => theme('hueRotate'),
		backdropInvert: ({ theme }) => theme('invert'),
		backdropOpacity: ({ theme }) => theme('opacity'),
		backdropSaturate: ({ theme }) => theme('saturate'),
		backdropSepia: ({ theme }) => theme('sepia'),
		backgroundColor: ({ theme }) => theme('colors'),
		backgroundImage: {
			none: 'none',
			'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
			'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
			'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
			'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
			'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
			'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
			'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
			'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))'
		},
		backgroundOpacity: ({ theme }) => theme('opacity'),
		backgroundPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top'
		},
		backgroundSize: {
			auto: 'auto',
			cover: 'cover',
			contain: 'contain'
		},
		blur: {
			0: '0',
			none: '',
			sm: '4px',
			DEFAULT: '8px',
			md: '12px',
			lg: '16px',
			xl: '24px',
			'2xl': '40px',
			'3xl': '64px'
		},
		borderColor: ({ theme }) => ({
			...theme('colors'),
			DEFAULT: theme('colors.gray.200', 'currentColor')
		}),
		borderOpacity: ({ theme }) => theme('opacity'),
		borderRadius: {
			none: '0px',
			sm: '0.125rem',
			DEFAULT: '0.25rem',
			md: '0.375rem',
			lg: '0.5rem',
			xl: '0.75rem',
			'2xl': '1rem',
			'3xl': '1.5rem',
			full: '9999px'
		},
		borderSpacing: ({ theme }) => ({
			...theme('spacing')
		}),
		borderWidth: {
			DEFAULT: '1px',
			0: '0px',
			2: '2px',
			4: '4px',
			8: '8px'
		},
		boxShadow: {
			sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
			DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
			md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
			lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
			xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
			'2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
			inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
			none: 'none'
		},
		boxShadowColor: ({ theme }) => theme('colors'),
		brightness: {
			0: '0',
			50: '.5',
			75: '.75',
			90: '.9',
			95: '.95',
			100: '1',
			105: '1.05',
			110: '1.1',
			125: '1.25',
			150: '1.5',
			200: '2'
		},
		caretColor: ({ theme }) => theme('colors'),
		colors: () => ({
			blue: {
				500: '#1c345f',
				400: '#0046d1',
				300: '#0c56e9',
				200: '#1060ff',
				100: '#cce3fe',
				50: '#f2f8ff'
			},
			purple: {
				500: '#42215b',
				400: '#7b00db',
				300: '#911ced',
				200: '#a737ff',
				100: '#ead2fe',
				50: '#f9f2ff'
			},
			green: {
				500: '#054220',
				400: '#006619',
				300: '#00781e',
				200: '#008a22',
				100: '#cceeda',
				50: '#f2fbf6'
			},
			amber: {
				500: '#542800',
				400: '#803d00',
				300: '#9e4b00',
				200: '#bb5a00',
				100: '#fbeabf',
				50: '#fff9e8'
			},
			red: {
				500: '#51130a',
				400: '#940004',
				300: '#c00005',
				200: '#e52228',
				100: '#fbd4d4',
				50: '#fff5f5'
			},
			neutral: {
				700: '#0c0c0e',
				600: '#3b3d45',
				500: '#656a76',
				400: '#8c909c',
				300: '#c2c5cb',
				200: '#dedfe3',
				100: '#f1f2f3',
				50: '#fafafa',
				0: '#ffffff'
			},
			alpha: {
				300: '#3b3d4566',
				200: '#656a7633',
				100: '#656a761a'
			},
			border_primary: '#656a7633',
			border_faint: '#656a761a',
			border_strong: '#3b3d4566',
			border_action: '#cce3fe',
			border_highlight: '#ead2fe',
			border_success: '#cceeda',
			border_warning: '#fbeabf',
			border_critical: '#fbd4d4',
			focus_action_internal: '#0c56e9',
			focus_action_external: '#5990ff',
			focus_critical_internal: '#c00005',
			focus_critical_external: '#dd7578',
			foreground_strong: '#0c0c0e',
			foreground_primary: '#3b3d45',
			foreground_faint: '#656a76',
			foreground_high_contrast: '#ffffff',
			foreground_disabled: '#8c909c',
			foreground_action: '#1060ff',
			foreground_action_hover: '#0c56e9',
			foreground_action_active: '#0046d1',
			foreground_highlight: '#a737ff',
			foreground_highlight_on_surface: '#911ced',
			foreground_highlight_high_contrast: '#42215b',
			foreground_success: '#008a22',
			foreground_success_on_surface: '#00781e',
			foreground_success_high_contrast: '#054220',
			foreground_warning: '#bb5a00',
			foreground_warning_on_surface: '#9e4b00',
			foreground_warning_high_contrast: '#542800',
			foreground_critical: '#e52228',
			foreground_critical_on_surface: '#c00005',
			foreground_critical_high_contrast: '#51130a',
			page_primary: '#ffffff',
			page_faint: '#fafafa',
			surface_primary: '#ffffff',
			surface_faint: '#fafafa',
			surface_strong: '#f1f2f3',
			surface_interactive: '#ffffff',
			surface_interactive_hover: '#f1f2f3',
			surface_interactive_active: '#dedfe3',
			surface_interactive_disabled: '#fafafa',
			surface_action: '#f2f8ff',
			surface_highlight: '#f9f2ff',
			surface_success: '#f2fbf6',
			surface_warning: '#fff9e8',
			surface_critical: '#fff5f5',
			hashicorp_brand: '#000000',
			boundary_brand: '#f24c53',
			boundary_foreground: '#cf2d32',
			boundary_surface: '#ffecec',
			boundary_border: '#fbd7d8',
			boundary_gradient_primary_start: '#f97076',
			boundary_gradient_primary_stop: '#db363b',
			boundary_gradient_faint_start: '#fffafa',
			boundary_gradient_faint_stop: '#ffecec',
			consul_brand: '#e03875',
			consul_foreground: '#d01c5b',
			consul_surface: '#ffe9f1',
			consul_border: '#ffcede',
			consul_gradient_primary_start: '#ff99be',
			consul_gradient_primary_stop: '#da306e',
			consul_gradient_faint_start: '#fff9fb',
			consul_gradient_faint_stop: '#ffe9f1',
			hcp_brand: '#000000',
			nomad_brand: '#06d092',
			nomad_foreground: '#008661',
			nomad_surface: '#d3fdeb',
			nomad_border: '#bff3dd',
			nomad_gradient_primary_start: '#bff3dd',
			nomad_gradient_primary_stop: '#60dea9',
			nomad_gradient_faint_start: '#f3fff9',
			nomad_gradient_faint_stop: '#d3fdeb',
			packer_brand: '#02a8ef',
			packer_foreground: '#007eb4',
			packer_surface: '#d4f2ff',
			packer_border: '#b4e4ff',
			packer_gradient_primary_start: '#b4e4ff',
			packer_gradient_primary_stop: '#63d0ff',
			packer_gradient_faint_start: '#f3fcff',
			packer_gradient_faint_stop: '#d4f2ff',
			terraform_brand: '#7b42bc',
			terraform_brand_on_dark: '#a067da',
			terraform_foreground: '#773cb4',
			terraform_surface: '#f4ecff',
			terraform_border: '#ebdbfc',
			terraform_gradient_primary_start: '#bb8deb',
			terraform_gradient_primary_stop: '#844fba',
			terraform_gradient_faint_start: '#fcfaff',
			terraform_gradient_faint_stop: '#f4ecff',
			vagrant_brand: '#1868f2',
			vagrant_foreground: '#1c61d8',
			vagrant_surface: '#d6ebff',
			vagrant_border: '#c7dbfc',
			vagrant_gradient_primary_start: '#c7dbfc',
			vagrant_gradient_primary_stop: '#7dadff',
			vagrant_gradient_faint_start: '#f4faff',
			vagrant_gradient_faint_stop: '#d6ebff',
			vault_radar_brand: '#ffcf25',
			vault_radar_brand_alt: '#000000',
			vault_radar_foreground: '#9a6f00',
			vault_radar_surface: '#fff9cf',
			vault_radar_border: '#feec7b',
			vault_radar_gradient_primary_start: '#feec7b',
			vault_radar_gradient_primary_stop: '#ffe543',
			vault_radar_gradient_faint_start: '#fffdf2',
			vault_radar_gradient_faint_stop: '#fff9cf',
			vault_secrets_brand: '#ffcf25',
			vault_secrets_brand_alt: '#000000',
			vault_secrets_foreground: '#9a6f00',
			vault_secrets_surface: '#fff9cf',
			vault_secrets_border: '#feec7b',
			vault_secrets_gradient_primary_start: '#feec7b',
			vault_secrets_gradient_primary_stop: '#ffe543',
			vault_secrets_gradient_faint_start: '#fffdf2',
			vault_secrets_gradient_faint_stop: '#fff9cf',
			vault_brand: '#ffcf25',
			vault_brand_alt: '#000000',
			vault_foreground: '#9a6f00',
			vault_surface: '#fff9cf',
			vault_border: '#feec7b',
			vault_gradient_primary_start: '#feec7b',
			vault_gradient_primary_stop: '#ffe543',
			vault_gradient_faint_start: '#fffdf2',
			vault_gradient_faint_stop: '#fff9cf',
			waypoint_brand: '#14c6cb',
			waypoint_foreground: '#008196',
			waypoint_surface: '#e0fcff',
			waypoint_border: '#cbf1f3',
			waypoint_gradient_primary_start: '#cbf1f3',
			waypoint_gradient_primary_stop: '#62d4dc',
			waypoint_gradient_faint_start: '#f6feff',
			waypoint_gradient_faint_stop: '#e0fcff',
			token_form_control_base_foreground_value_color: '#0c0c0e',
			token_form_control_base_foreground_placeholder_color: '#656a76',
			token_form_control_base_surface_color_default: '#ffffff',
			token_form_control_base_surface_color_hover: '#f1f2f3',
			token_form_control_base_border_color_default: '#8c909c',
			token_form_control_base_border_color_hover: '#656a76',
			token_form_control_checked_foreground_color: '#ffffff',
			token_form_control_checked_surface_color_default: '#1060ff',
			token_form_control_checked_surface_color_hover: '#0c56e9',
			token_form_control_checked_border_color_default: '#0c56e9',
			token_form_control_checked_border_color_hover: '#0046d1',
			token_form_control_invalid_border_color_default: '#c00005',
			token_form_control_invalid_border_color_hover: '#940004',
			token_form_control_readonly_foreground_color: '#3b3d45',
			token_form_control_readonly_surface_color: '#f1f2f3',
			token_form_control_readonly_border_color: '#656a761a',
			token_form_control_disabled_foreground_color: '#8c909c',
			token_form_control_disabled_surface_color: '#fafafa',
			token_form_control_disabled_border_color: '#656a7633'
		}),
		columns: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			'3xs': '16rem',
			'2xs': '18rem',
			xs: '20rem',
			sm: '24rem',
			md: '28rem',
			lg: '32rem',
			xl: '36rem',
			'2xl': '42rem',
			'3xl': '48rem',
			'4xl': '56rem',
			'5xl': '64rem',
			'6xl': '72rem',
			'7xl': '80rem'
		},
		container: {},
		content: {
			none: 'none'
		},
		contrast: {
			0: '0',
			50: '.5',
			75: '.75',
			100: '1',
			125: '1.25',
			150: '1.5',
			200: '2'
		},
		cursor: {
			auto: 'auto',
			default: 'default',
			pointer: 'pointer',
			wait: 'wait',
			text: 'text',
			move: 'move',
			help: 'help',
			'not-allowed': 'not-allowed',
			none: 'none',
			'context-menu': 'context-menu',
			progress: 'progress',
			cell: 'cell',
			crosshair: 'crosshair',
			'vertical-text': 'vertical-text',
			alias: 'alias',
			copy: 'copy',
			'no-drop': 'no-drop',
			grab: 'grab',
			grabbing: 'grabbing',
			'all-scroll': 'all-scroll',
			'col-resize': 'col-resize',
			'row-resize': 'row-resize',
			'n-resize': 'n-resize',
			'e-resize': 'e-resize',
			's-resize': 's-resize',
			'w-resize': 'w-resize',
			'ne-resize': 'ne-resize',
			'nw-resize': 'nw-resize',
			'se-resize': 'se-resize',
			'sw-resize': 'sw-resize',
			'ew-resize': 'ew-resize',
			'ns-resize': 'ns-resize',
			'nesw-resize': 'nesw-resize',
			'nwse-resize': 'nwse-resize',
			'zoom-in': 'zoom-in',
			'zoom-out': 'zoom-out'
		},
		divideColor: ({ theme }) => theme('borderColor'),
		divideOpacity: ({ theme }) => theme('borderOpacity'),
		divideWidth: ({ theme }) => theme('borderWidth'),
		dropShadow: {
			sm: '0 1px 1px rgb(0 0 0 / 0.05)',
			DEFAULT: ['0 1px 2px rgb(0 0 0 / 0.1)', '0 1px 1px rgb(0 0 0 / 0.06)'],
			md: ['0 4px 3px rgb(0 0 0 / 0.07)', '0 2px 2px rgb(0 0 0 / 0.06)'],
			lg: ['0 10px 8px rgb(0 0 0 / 0.04)', '0 4px 3px rgb(0 0 0 / 0.1)'],
			xl: ['0 20px 13px rgb(0 0 0 / 0.03)', '0 8px 5px rgb(0 0 0 / 0.08)'],
			'2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
			none: '0 0 #0000'
		},
		fill: ({ theme }) => ({
			none: 'none',
			...theme('colors')
		}),
		flex: {
			1: '1 1 0%',
			auto: '1 1 auto',
			initial: '0 1 auto',
			none: 'none'
		},
		flexBasis: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%'
		}),
		flexGrow: {
			0: '0',
			DEFAULT: '1'
		},
		flexShrink: {
			0: '0',
			DEFAULT: '1'
		},
		fontFamily: {
			vault: [
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Helvetica',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"'
			],

			sans: [
				'ui-sans-serif',
				'system-ui',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"'
			],
			serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
			mono: [
				'ui-monospace',
				'SFMono-Regular',
				'Menlo',
				'Monaco',
				'Consolas',
				'"Liberation Mono"',
				'"Courier New"',
				'monospace'
			]
		},
		fontSize: {
			xs: ['0.75rem', { lineHeight: '1rem' }],
			sm: ['0.875rem', { lineHeight: '1.25rem' }],
			base: ['1rem', { lineHeight: '1.5rem' }],
			lg: ['1.125rem', { lineHeight: '1.75rem' }],
			xl: ['1.25rem', { lineHeight: '1.75rem' }],
			'2xl': ['1.5rem', { lineHeight: '2rem' }],
			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
			'5xl': ['3rem', { lineHeight: '1' }],
			'6xl': ['3.75rem', { lineHeight: '1' }],
			'7xl': ['4.5rem', { lineHeight: '1' }],
			'8xl': ['6rem', { lineHeight: '1' }],
			'9xl': ['8rem', { lineHeight: '1' }]
		},
		fontWeight: {
			thin: '100',
			extralight: '200',
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800',
			black: '900'
		},
		gap: ({ theme }) => theme('spacing'),
		gradientColorStops: ({ theme }) => theme('colors'),
		gradientColorStopPositions: {
			'0%': '0%',
			'5%': '5%',
			'10%': '10%',
			'15%': '15%',
			'20%': '20%',
			'25%': '25%',
			'30%': '30%',
			'35%': '35%',
			'40%': '40%',
			'45%': '45%',
			'50%': '50%',
			'55%': '55%',
			'60%': '60%',
			'65%': '65%',
			'70%': '70%',
			'75%': '75%',
			'80%': '80%',
			'85%': '85%',
			'90%': '90%',
			'95%': '95%',
			'100%': '100%'
		},
		grayscale: {
			0: '0',
			DEFAULT: '100%'
		},
		gridAutoColumns: {
			auto: 'auto',
			min: 'min-content',
			max: 'max-content',
			fr: 'minmax(0, 1fr)'
		},
		gridAutoRows: {
			auto: 'auto',
			min: 'min-content',
			max: 'max-content',
			fr: 'minmax(0, 1fr)'
		},
		gridColumn: {
			auto: 'auto',
			'span-1': 'span 1 / span 1',
			'span-2': 'span 2 / span 2',
			'span-3': 'span 3 / span 3',
			'span-4': 'span 4 / span 4',
			'span-5': 'span 5 / span 5',
			'span-6': 'span 6 / span 6',
			'span-7': 'span 7 / span 7',
			'span-8': 'span 8 / span 8',
			'span-9': 'span 9 / span 9',
			'span-10': 'span 10 / span 10',
			'span-11': 'span 11 / span 11',
			'span-12': 'span 12 / span 12',
			'span-full': '1 / -1'
		},
		gridColumnEnd: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13'
		},
		gridColumnStart: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13'
		},
		gridRow: {
			auto: 'auto',
			'span-1': 'span 1 / span 1',
			'span-2': 'span 2 / span 2',
			'span-3': 'span 3 / span 3',
			'span-4': 'span 4 / span 4',
			'span-5': 'span 5 / span 5',
			'span-6': 'span 6 / span 6',
			'span-7': 'span 7 / span 7',
			'span-8': 'span 8 / span 8',
			'span-9': 'span 9 / span 9',
			'span-10': 'span 10 / span 10',
			'span-11': 'span 11 / span 11',
			'span-12': 'span 12 / span 12',
			'span-full': '1 / -1'
		},
		gridRowEnd: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13'
		},
		gridRowStart: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13'
		},
		gridTemplateColumns: {
			none: 'none',
			subgrid: 'subgrid',
			1: 'repeat(1, minmax(0, 1fr))',
			2: 'repeat(2, minmax(0, 1fr))',
			3: 'repeat(3, minmax(0, 1fr))',
			4: 'repeat(4, minmax(0, 1fr))',
			5: 'repeat(5, minmax(0, 1fr))',
			6: 'repeat(6, minmax(0, 1fr))',
			7: 'repeat(7, minmax(0, 1fr))',
			8: 'repeat(8, minmax(0, 1fr))',
			9: 'repeat(9, minmax(0, 1fr))',
			10: 'repeat(10, minmax(0, 1fr))',
			11: 'repeat(11, minmax(0, 1fr))',
			12: 'repeat(12, minmax(0, 1fr))'
		},
		gridTemplateRows: {
			none: 'none',
			subgrid: 'subgrid',
			1: 'repeat(1, minmax(0, 1fr))',
			2: 'repeat(2, minmax(0, 1fr))',
			3: 'repeat(3, minmax(0, 1fr))',
			4: 'repeat(4, minmax(0, 1fr))',
			5: 'repeat(5, minmax(0, 1fr))',
			6: 'repeat(6, minmax(0, 1fr))',
			7: 'repeat(7, minmax(0, 1fr))',
			8: 'repeat(8, minmax(0, 1fr))',
			9: 'repeat(9, minmax(0, 1fr))',
			10: 'repeat(10, minmax(0, 1fr))',
			11: 'repeat(11, minmax(0, 1fr))',
			12: 'repeat(12, minmax(0, 1fr))'
		},
		height: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			full: '100%',
			screen: '100vh',
			svh: '100svh',
			lvh: '100lvh',
			dvh: '100dvh',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content'
		}),
		hueRotate: {
			0: '0deg',
			15: '15deg',
			30: '30deg',
			60: '60deg',
			90: '90deg',
			180: '180deg'
		},
		inset: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			full: '100%'
		}),
		invert: {
			0: '0',
			DEFAULT: '100%'
		},
		keyframes: {
			spin: {
				to: {
					transform: 'rotate(360deg)'
				}
			},
			ping: {
				'75%, 100%': {
					transform: 'scale(2)',
					opacity: '0'
				}
			},
			pulse: {
				'50%': {
					opacity: '.5'
				}
			},
			bounce: {
				'0%, 100%': {
					transform: 'translateY(-25%)',
					animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
				},
				'50%': {
					transform: 'none',
					animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
				}
			}
		},
		letterSpacing: {
			tighter: '-0.05em',
			tight: '-0.025em',
			normal: '0em',
			wide: '0.025em',
			wider: '0.05em',
			widest: '0.1em'
		},
		lineHeight: {
			none: '1',
			tight: '1.25',
			snug: '1.375',
			normal: '1.5',
			relaxed: '1.625',
			loose: '2',
			3: '.75rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem'
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal'
		},
		listStyleImage: {
			none: 'none'
		},
		margin: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing')
		}),
		lineClamp: {
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6'
		},
		maxHeight: ({ theme }) => ({
			...theme('spacing'),
			none: 'none',
			full: '100%',
			screen: '100vh',
			svh: '100svh',
			lvh: '100lvh',
			dvh: '100dvh',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content'
		}),
		maxWidth: ({ theme, breakpoints }) => ({
			...theme('spacing'),
			none: 'none',
			xs: '20rem',
			sm: '24rem',
			md: '28rem',
			lg: '32rem',
			xl: '36rem',
			'2xl': '42rem',
			'3xl': '48rem',
			'4xl': '56rem',
			'5xl': '64rem',
			'6xl': '72rem',
			'7xl': '80rem',
			full: '100%',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content',
			prose: '65ch',
			...breakpoints(theme('screens'))
		}),
		minHeight: ({ theme }) => ({
			...theme('spacing'),
			full: '100%',
			screen: '100vh',
			svh: '100svh',
			lvh: '100lvh',
			dvh: '100dvh',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content'
		}),
		minWidth: ({ theme }) => ({
			...theme('spacing'),
			full: '100%',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content'
		}),
		objectPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top'
		},
		opacity: {
			0: '0',
			5: '0.05',
			10: '0.1',
			15: '0.15',
			20: '0.2',
			25: '0.25',
			30: '0.3',
			35: '0.35',
			40: '0.4',
			45: '0.45',
			50: '0.5',
			55: '0.55',
			60: '0.6',
			65: '0.65',
			70: '0.7',
			75: '0.75',
			80: '0.8',
			85: '0.85',
			90: '0.9',
			95: '0.95',
			100: '1'
		},
		order: {
			first: '-9999',
			last: '9999',
			none: '0',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12'
		},
		outlineColor: ({ theme }) => theme('colors'),
		outlineOffset: {
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px'
		},
		outlineWidth: {
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px'
		},
		padding: ({ theme }) => theme('spacing'),
		placeholderColor: ({ theme }) => theme('colors'),
		placeholderOpacity: ({ theme }) => theme('opacity'),
		ringColor: ({ theme }) => ({
			DEFAULT: theme('colors.blue.500', '#3b82f6'),
			...theme('colors')
		}),
		ringOffsetColor: ({ theme }) => theme('colors'),
		ringOffsetWidth: {
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px'
		},
		ringOpacity: ({ theme }) => ({
			DEFAULT: '0.5',
			...theme('opacity')
		}),
		ringWidth: {
			DEFAULT: '3px',
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px'
		},
		rotate: {
			0: '0deg',
			1: '1deg',
			2: '2deg',
			3: '3deg',
			6: '6deg',
			12: '12deg',
			45: '45deg',
			90: '90deg',
			180: '180deg'
		},
		saturate: {
			0: '0',
			50: '.5',
			100: '1',
			150: '1.5',
			200: '2'
		},
		scale: {
			0: '0',
			50: '.5',
			75: '.75',
			90: '.9',
			95: '.95',
			100: '1',
			105: '1.05',
			110: '1.1',
			125: '1.25',
			150: '1.5'
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		scrollMargin: ({ theme }) => ({
			...theme('spacing')
		}),
		scrollPadding: ({ theme }) => theme('spacing'),
		sepia: {
			0: '0',
			DEFAULT: '100%'
		},
		skew: {
			0: '0deg',
			1: '1deg',
			2: '2deg',
			3: '3deg',
			6: '6deg',
			12: '12deg'
		},
		space: ({ theme }) => ({
			...theme('spacing')
		}),
		spacing: {
			px: '1px',
			0: '0px',
			0.5: '0.125rem',
			1: '0.25rem',
			1.5: '0.375rem',
			2: '0.5rem',
			2.5: '0.625rem',
			3: '0.75rem',
			3.5: '0.875rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem',
			11: '2.75rem',
			12: '3rem',
			14: '3.5rem',
			16: '4rem',
			20: '5rem',
			24: '6rem',
			28: '7rem',
			32: '8rem',
			36: '9rem',
			40: '10rem',
			44: '11rem',
			48: '12rem',
			52: '13rem',
			56: '14rem',
			60: '15rem',
			64: '16rem',
			72: '18rem',
			80: '20rem',
			96: '24rem'
		},
		stroke: ({ theme }) => ({
			none: 'none',
			...theme('colors')
		}),
		strokeWidth: {
			0: '0',
			1: '1',
			2: '2'
		},
		supports: {},
		data: {},
		textColor: ({ theme }) => theme('colors'),
		textDecorationColor: ({ theme }) => theme('colors'),
		textDecorationThickness: {
			auto: 'auto',
			'from-font': 'from-font',
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px'
		},
		textIndent: ({ theme }) => ({
			...theme('spacing')
		}),
		textOpacity: ({ theme }) => theme('opacity'),
		textUnderlineOffset: {
			auto: 'auto',
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px'
		},
		transformOrigin: {
			center: 'center',
			top: 'top',
			'top-right': 'top right',
			right: 'right',
			'bottom-right': 'bottom right',
			bottom: 'bottom',
			'bottom-left': 'bottom left',
			left: 'left',
			'top-left': 'top left'
		},
		transitionDelay: {
			0: '0s',
			75: '75ms',
			100: '100ms',
			150: '150ms',
			200: '200ms',
			300: '300ms',
			500: '500ms',
			700: '700ms',
			1000: '1000ms'
		},
		transitionDuration: {
			DEFAULT: '150ms',
			0: '0s',
			75: '75ms',
			100: '100ms',
			150: '150ms',
			200: '200ms',
			300: '300ms',
			500: '500ms',
			700: '700ms',
			1000: '1000ms'
		},
		transitionProperty: {
			none: 'none',
			all: 'all',
			DEFAULT:
				'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
			colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
			opacity: 'opacity',
			shadow: 'box-shadow',
			transform: 'transform'
		},
		transitionTimingFunction: {
			DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
			linear: 'linear',
			in: 'cubic-bezier(0.4, 0, 1, 1)',
			out: 'cubic-bezier(0, 0, 0.2, 1)',
			'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
		},
		translate: ({ theme }) => ({
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			full: '100%'
		}),
		size: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content'
		}),
		width: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
			screen: '100vw',
			svw: '100svw',
			lvw: '100lvw',
			dvw: '100dvw',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content'
		}),
		willChange: {
			auto: 'auto',
			scroll: 'scroll-position',
			contents: 'contents',
			transform: 'transform'
		},
		zIndex: {
			auto: 'auto',
			0: '0',
			10: '10',
			20: '20',
			30: '30',
			40: '40',
			50: '50'
		}
	},
	plugins: [typography, forms]
} satisfies Config;
