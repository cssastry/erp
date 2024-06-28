export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26')
];

export const server_loads = [];

export const dictionary = {
		"/": [5],
		"/all": [6,[2]],
		"/all/about": [7,[2]],
		"/all/contact": [8,[2]],
		"/all/projects": [9,[2]],
		"/all/services": [10,[2]],
		"/app/approvals": [11,[3]],
		"/app/calender": [12,[3]],
		"/app/chat": [13,[3]],
		"/app/dashboard": [14,[3]],
		"/app/employapprovals": [15,[3]],
		"/app/employes": [16,[3]],
		"/app/holidays": [17,[3]],
		"/app/leaves": [18,[3]],
		"/app/notifications": [19,[3]],
		"/app/payslips": [20,[3]],
		"/app/profile": [21,[3]],
		"/app/projects": [22,[3]],
		"/app/registrations": [23,[3]],
		"/app/tasks": [24,[3]],
		"/app/tickets": [25,[3]],
		"/login": [26,[4]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';