/**
 * School data for The Self-Taught Scholar
 * Contains full descriptions, philosophy, and metadata for each school
 */

export type SchoolSlug = 'pattern-and-play' | 'story-and-expression' | 'society-and-self' | 'making';

export interface School {
	slug: SchoolSlug;
	name: string;
	emoji: string;
	corePhilosophy: string;
	description: string;
	historicalContext: string;
	whyItMatters: string;
	whoThisIsFor: string;
	domains: string[];
}

export const schools: School[] = [
	{
		slug: 'pattern-and-play',
		name: 'Pattern & Play',
		emoji: '📊',
		corePhilosophy: 'The universe speaks in patterns. We learn its language through mathematics, probability, and systems—then use play and experimentation to discover what the formulas cannot show.',
		description: 'Mathematics, probability, systems thinking, and creative reasoning. This school explores how patterns reveal structure in chaos, how chance shapes outcomes, and how playful experimentation leads to deeper understanding of complexity.',
		historicalContext: 'The Pythagoreans believed the universe was made of numbers. Euclid laid the foundations of geometry that still govern our buildings and our logic. The Islamic Golden Age gave us algebra; the Renaissance brought calculus; the 20th century revealed chaos, fractals, and the hidden order within randomness. Mathematics isn\'t just calculation—it\'s humanity\'s oldest language for describing structure, change, and beauty. This school reclaims math as a way of seeing, not just a set of procedures.',
		whyItMatters: 'From credit card interest to viral spread, from weather prediction to machine learning, patterns govern modern life. Yet most people fear math or see it as arcane. Understanding probability helps you navigate risk. Grasping feedback loops helps you design better habits. Recognizing emergence helps you see how simple rules create complex systems. In a world drowning in data, those who can read patterns—and play with them—hold the keys to insight.',
		whoThisIsFor: 'If you\'ve ever been told you\'re "not a math person" but love puzzles, games, or figuring out how things work—this school reclaims math for you. It\'s for strategists, designers, analysts, and anyone curious about the hidden structures that shape reality. You don\'t need to love equations; you need to love asking "what if?"',
		domains: ['mathematics', 'probability', 'systems-thinking', 'game-theory'],
	},
	{
		slug: 'story-and-expression',
		name: 'Story & Expression',
		emoji: '🎭',
		corePhilosophy: 'Meaning is made, not found. We study the tools humans use to shape reality through narrative, symbol, and persuasion—then practice wielding them ourselves.',
		description: 'Mythology, rhetoric, writing, and visual communication. This school explores how stories structure our understanding, how language persuades, and how expression—whether through words or design—shapes culture and consciousness.',
		historicalContext: 'The classical trivium began with grammar, logic, and rhetoric—the arts of clear thinking and persuasive speech. From Homer\'s epics to Athenian tragedy, the Greeks understood that stories don\'t just entertain; they teach, they heal, and they shape civilizations. Medieval scholars studied rhetoric alongside theology. Renaissance humanists returned to classical texts to rediscover the power of eloquence. This school revives that tradition, recognizing that in every age, those who master language and narrative shape the future.',
		whyItMatters: 'In an era of AI-generated content, algorithmic feeds, and infinite information, the ability to craft meaning—not just consume it—is more critical than ever. Persuasion happens every day: in marketing, in politics, in the stories we tell ourselves. Understanding how narratives work, why certain rhetoric moves us, and what design choices communicate makes you immune to manipulation and powerful in creation. If AI can generate text, humans must become masters of meaning.',
		whoThisIsFor: 'If you\'ve ever wondered why some stories stick while others fade, why certain speeches move crowds, or how a single image can communicate what paragraphs cannot—this school is for you. It\'s for writers, designers, marketers, teachers, and anyone who wants to wield language and symbol with intention rather than accident.',
		domains: ['writing', 'rhetoric', 'mythology', 'visual-communication'],
	},
	{
		slug: 'society-and-self',
		name: 'Society & Self',
		emoji: '🌱',
		corePhilosophy: 'To understand others, start with yourself. We explore the psychology of learning, the ethics of living well, and the balance between freedom and responsibility in building a meaningful life.',
		description: 'Psychology, philosophy, ethics, and human flourishing. This school examines how we learn, why we behave as we do, what gives life meaning, and how freedom and responsibility shape both individuals and communities.',
		historicalContext: '"Know thyself," inscribed at Delphi, was the starting point of Greek philosophy. Socrates believed the unexamined life wasn\'t worth living. The Stoics developed practices for living wisely amid chaos. Enlightenment thinkers explored freedom, responsibility, and the social contract. Modern psychology revealed the unconscious, cognitive biases, and the mechanisms of learning. This school stands at the intersection of ancient wisdom and modern science, asking: What does it mean to live well, both as an individual and in community?',
		whyItMatters: 'We live in an age of infinite choice and infinite distraction. Behavioral economics shows we\'re predictably irrational. Social media exploits our psychological triggers. Meanwhile, questions of meaning, purpose, and ethical living haven\'t gone away—they\'ve intensified. Understanding how you learn, why you act, and what gives life meaning isn\'t abstract philosophy; it\'s survival. This school teaches you to design your own mind and take responsibility for the life you\'re building.',
		whoThisIsFor: 'If you\'ve ever wondered why you procrastinate, why habits are hard to break, or what makes a life meaningful—this school is for you. It\'s for self-educators, parents, coaches, and anyone trying to understand human nature (starting with their own). It\'s for those who want freedom but know freedom requires structure, who seek happiness but know happiness requires work.',
		domains: ['psychology', 'philosophy', 'ethics', 'behavioral-economics'],
	},
	{
		slug: 'making',
		name: 'Making',
		emoji: '🛠️',
		corePhilosophy: 'Understanding comes through creation. We build, publish, and refine—learning by doing, failing forward, and demonstrating mastery through work that exists in the world.',
		description: 'Craft, design, building, and publishing. This school emphasizes learning through creation—whether coding a website, writing for an audience, tracking personal systems, or developing any skill through deliberate practice and feedback.',
		historicalContext: 'The craftsman guilds of medieval Europe didn\'t separate thinking from doing—apprentices learned by making, under the guidance of masters. The Renaissance ideal was the uomo universale—the person who could design a building, paint a fresco, and invent a flying machine. Ben Franklin was a printer, inventor, and writer. The Bauhaus believed form follows function and that design is inseparable from craft. This school rejects the false division between "thinkers" and "doers," recognizing that understanding deepens through creation.',
		whyItMatters: 'In a world of passive consumption, making is an act of agency. Publishing your work online means you don\'t need permission from gatekeepers. Learning to code, design, or build physical objects makes you a producer, not just a consumer. The feedback loop of creation—try, fail, refine, share—is how real learning happens. Plus, in an age of AI, the ability to ship something tangible—a website, an essay, a project—proves you can execute, not just ideate.',
		whoThisIsFor: 'If you learn best by doing, if you\'ve ever wanted to build something but didn\'t know where to start, if you\'re tired of consuming and ready to create—this school is for you. It\'s for writers who want readers, designers who want portfolios, and anyone who believes that ideas only matter when they exist in the world. You don\'t need to be "creative"—you need to be willing to start.',
		domains: ['web-development', 'design', 'craft', 'publishing'],
	},
];

export const schoolsBySlug = schools.reduce(
	(acc, school) => {
		acc[school.slug] = school;
		return acc;
	},
	{} as Record<SchoolSlug, School>
);

export const schoolSlugs = schools.map(s => s.slug);
