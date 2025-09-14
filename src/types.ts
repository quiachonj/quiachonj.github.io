export type SiteConfig = {
	author: string;
	title: string;
	description: string;
	lang: string;
	ogLocale: string;
	date: {
		locale: string | string[] | undefined;
		options: Intl.DateTimeFormatOptions;
	};
};

export type PaginationLink = {
	url: string;
	text?: string;
	srLabel?: string;
};

export type SiteMeta = {
	title: string;
	description?: string;
	ogImage?: string | undefined;
	articleDate?: string | undefined;
};

export type CvData = {
	name: string;
	title: string;
	email: string;
	phone: string;
	website: string;
	linkedin: string;
	github: string;
	twitter: string;
	location: string;
	summary: string;
	experience: ExperienceType[];
	education: EducationType[];
	projects: ProjectType[];
	skills: Record<string, string[]>[];
	certifications: CertificationType[];
};

export type ExperienceType = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: Record<string, string[]>[];
};

export type EducationType = {
	schoolName: string;
	degreeType: string;
	fieldOfStudy: string;
	location: string;
	startDate: string;
	endDate: string;
};

export type HighlightType = {
	title: string;
	description: string[];
};

export type ProjectType = {
	title: string;
	description: string;
	href: string;
	imagePath: string;
};

export type CertificationType = {
	issuer: string;
	name: string;
	lastTaken: string;
	href: string;
};
