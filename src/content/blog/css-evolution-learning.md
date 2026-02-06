---
title: "From margin-bottom to .stack: What 20 Years of CSS Evolution Taught Me"
description: "How asking one simple question revealed an entire paradigm shift I'd missed"
pubDate: 2025-02-04
heroImage: "../../assets/css-evolution-blog-hero.png"
---

I didn't know CSS spacing was broken.

Not in the sense that it didn't work - but in the sense that I had accepted pain as normal.

Back in 2016–2017, I taught myself web development to escape GoDaddy's WYSIWYG hell. My massage business needed a website that actually worked on mobile, and the drag-and-drop tools just… couldn't.

So I found [CSS Tricks](https://css-tricks.com/), [Rachel Andrew's guides](https://courses.thecssworkshop.com/), and worked through [Dave Geddes' Mastery Games](https://mastery.games/) — brilliantly designed courses that used spaced repetition and game-like rewards to teach Flexbox and Grid. The kind of education that actually sticks.

It worked. The site went live. I went back to running a massage business.

For eight years.

Then in 2025, I started building a new project and worked through Astro's blog tutorial. In one example, I saw something I didn't recognize:

`.stack`

I asked: What is .stack?

That question opened a door I didn't know existed.

## The answer (deceptively simple)

The explanation was almost too simple:

> .stack is a layout utility for vertical rhythm. It adds consistent spacing between sibling elements.

The CSS was just a few lines. Every element that has a previous sibling gets spacing. The first one gets nothing. Perfect, automatic.

My first reaction was: That's clever. But why does this need a name?

Then I kept reading.

## The problem I didn't know I had

The explanation continued: instead of putting margins on every component, you let the container control spacing between its children.

Wait.

I'd been putting margins on components for years. Fighting with overrides. Debugging why spacing looked different in different contexts. Components breaking when I moved them.

I thought that was just how CSS worked.

I had solutions:

- use `:not(:last-child)`
- increase specificity
- add utility classes

They worked. The site shipped.

But I never questioned whether the problem itself was wrong.

Spacing shouldn't live on components.
It should live on relationships between components.

That's not a CSS trick. That's a different way of thinking about layout.

## The rabbit hole

So I asked: Where did .stack come from?

That led me to a book: [*Every Layout*](https://every-layout.dev/) by Heydon Pickering and Andy Bell, published in 2018.

Seven years ago.

The book introduced "layout primitives" — reusable patterns for common layout problems:

- **Stack** → vertical rhythm
- **Cluster** → horizontal groups
- **Sidebar** → responsive two-column layouts
- **Reel** → horizontal scrolling content

These weren't hacks. They were abstractions.

Instead of:
> Make this thing have 12px margin because reasons

You think:
**This container controls spacing. Components don't care.**

Instead of:
> Add breakpoints at 768px and 1024px

You think:
**Let content determine when layout shifts.**

This is intrinsic layout: design that emerges from content, not from arbitrary rules.

I had never encountered this idea.

## The history I missed

Once I started looking, I realized I'd lived through 20 years of CSS evolution without noticing the underlying shift.

**The Dark Ages (2000–2010)**
Tables for layout. Floats and clearfix. Margin-bottom on everything. Specificity wars.

**The Modular Fantasy (2010–2014)**
BEM, SMACSS, OOCSS. Better organization, same global problems.

**The Flexbox Revolution (2013–2017)**
Real alignment. Vertical centering that finally worked. But spacing? Still margin hacks.

**The Grid Era (2017–2020)**
Two-dimensional layout. Grid Critters taught me this. Still: components controlled their own margins.

**Design Systems (2016–2020)**
Material, Carbon, Polaris. Spacing tokens. The question started forming:
*Why does every component have random margins?*

**Intrinsic Layout (2018–present)**
[*Every Layout*](https://every-layout.dev/). Stack, Cluster, Sidebar. Spacing as relationships, not properties.

I used Flexbox. I used Grid.
But I missed the conceptual shift underneath.

The web didn't just get new tools.
It got a new mental model.

## The realization

I didn't "stop learning CSS" in 2017. I learned what I needed, built what I needed, and moved on.

That's healthy. That's how learning works when you're not a full-time developer.

But when I came back in 2025, I assumed the fundamentals were the same.

They weren't.

The syntax was the same.
The thinking wasn't.

My margin-based approach worked. So I never questioned it.
The pain was manageable. So I normalized it.

Working solutions hide better paradigms.

And unless you go looking, you'll never know they exist.

## The quiet lesson

This isn't really a story about CSS.

It's a story about how entire fields can change their mental models while you're busy doing other things — and how hard it is to notice unless something small reveals it.

For me, that small thing was `.stack`.

Not because it's complicated.
But because it exposed a better way of seeing a problem I thought I already understood.

---

*If this kind of "I didn't even know what question to ask" moment resonates, I wrote a separate essay about a broader learning pattern I've been noticing across domains.*

*→ [Continuous Conceptual Scaffolding](/essays/continuous-conceptual-scaffolding)*
